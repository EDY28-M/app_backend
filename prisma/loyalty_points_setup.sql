-- Sistema de puntos y niveles FastGo
-- 1000 puntos = S/ 10.00 (100 puntos = S/ 1.00)

CREATE TABLE IF NOT EXISTS customer_loyalty_accounts (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  points_balance integer NOT NULL DEFAULT 0,
  lifetime_points integer NOT NULL DEFAULT 0,
  level varchar(20) NOT NULL DEFAULT 'bronce',
  new_user_shipping_free_until timestamptz NULL,
  welcome_popup_last_shown_at timestamptz NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS loyalty_point_transactions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  order_id uuid NULL REFERENCES orders(id) ON DELETE SET NULL,
  type varchar(20) NOT NULL,
  points integer NOT NULL,
  amount_soles numeric(10,2) NOT NULL DEFAULT 0,
  description text NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_loyalty_point_transactions_user
  ON loyalty_point_transactions(user_id);

CREATE INDEX IF NOT EXISTS idx_loyalty_point_transactions_order
  ON loyalty_point_transactions(order_id);

-- Crear cuenta de lealtad para usuarios antiguos que no tengan registro
INSERT INTO customer_loyalty_accounts (user_id, points_balance, lifetime_points, level)
SELECT u.id, 0, 0, 'bronce'
FROM users u
LEFT JOIN customer_loyalty_accounts l ON l.user_id = u.id
WHERE l.user_id IS NULL;
