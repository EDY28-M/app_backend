-- Add offer columns to catalog_items
ALTER TABLE "catalog_items" ADD COLUMN IF NOT EXISTS "is_on_offer" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "catalog_items" ADD COLUMN IF NOT EXISTS "offer_price_amount" DECIMAL(10,2);

-- Create customer_favorites table
CREATE TABLE IF NOT EXISTS "customer_favorites" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "user_id" UUID NOT NULL,
    "store_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customer_favorites_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "customer_favorites_user_id_store_id_key" UNIQUE ("user_id","store_id"),
    CONSTRAINT "customer_favorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION,
    CONSTRAINT "customer_favorites_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

CREATE INDEX IF NOT EXISTS "idx_customer_favorites_user" ON "customer_favorites"("user_id");
