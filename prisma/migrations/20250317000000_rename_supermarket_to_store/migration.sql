-- Rename 'market'/'supermercado' category to 'store'/'Tienda'
UPDATE "business_categories"
SET "name" = 'Tienda', "code" = 'store'
WHERE "code" = 'market' OR "code" = 'supermarket' OR "name" = 'Supermercado' OR "name" = 'Market';
