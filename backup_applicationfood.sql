--
-- PostgreSQL database dump
--

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: auth_provider_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.auth_provider_type AS ENUM (
    'phone',
    'google',
    'email'
);


ALTER TYPE public.auth_provider_type OWNER TO postgres;

--
-- Name: availability_mode_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.availability_mode_type AS ENUM (
    'stock',
    'manual',
    'schedule'
);


ALTER TYPE public.availability_mode_type OWNER TO postgres;

--
-- Name: branch_status_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.branch_status_type AS ENUM (
    'active',
    'paused',
    'closed',
    'suspended'
);


ALTER TYPE public.branch_status_type OWNER TO postgres;

--
-- Name: cart_status_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.cart_status_type AS ENUM (
    'active',
    'converted',
    'abandoned'
);


ALTER TYPE public.cart_status_type OWNER TO postgres;

--
-- Name: catalog_mode_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.catalog_mode_type AS ENUM (
    'retail',
    'food',
    'hybrid'
);


ALTER TYPE public.catalog_mode_type OWNER TO postgres;

--
-- Name: delivery_status_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.delivery_status_type AS ENUM (
    'pending_assignment',
    'assigned',
    'arrived_pickup',
    'picked_up',
    'on_the_way',
    'delivered',
    'failed',
    'returned'
);


ALTER TYPE public.delivery_status_type OWNER TO postgres;

--
-- Name: discount_type_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.discount_type_enum AS ENUM (
    'fixed',
    'percent',
    'free_delivery'
);


ALTER TYPE public.discount_type_enum OWNER TO postgres;

--
-- Name: fulfillment_status_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.fulfillment_status_type AS ENUM (
    'pending',
    'preparing',
    'ready_for_pickup',
    'rider_assigned',
    'picked_up',
    'on_the_way',
    'delivered',
    'cancelled',
    'failed'
);


ALTER TYPE public.fulfillment_status_type OWNER TO postgres;

--
-- Name: item_type_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.item_type_enum AS ENUM (
    'retail_product',
    'food_item',
    'combo'
);


ALTER TYPE public.item_type_enum OWNER TO postgres;

--
-- Name: merchant_status_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.merchant_status_type AS ENUM (
    'onboarding',
    'active',
    'paused',
    'suspended'
);


ALTER TYPE public.merchant_status_type OWNER TO postgres;

--
-- Name: merchant_user_role_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.merchant_user_role_type AS ENUM (
    'owner',
    'admin',
    'operator',
    'finance',
    'viewer'
);


ALTER TYPE public.merchant_user_role_type OWNER TO postgres;

--
-- Name: order_status_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.order_status_type AS ENUM (
    'created',
    'pending_store_acceptance',
    'accepted_by_store',
    'rejected_by_store',
    'preparing',
    'ready_for_pickup',
    'rider_assigned',
    'picked_up',
    'on_the_way',
    'delivered',
    'cancelled',
    'failed_delivery',
    'returned_to_store'
);


ALTER TYPE public.order_status_type OWNER TO postgres;

--
-- Name: order_type_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.order_type_enum AS ENUM (
    'delivery',
    'pickup'
);


ALTER TYPE public.order_type_enum OWNER TO postgres;

--
-- Name: otp_channel_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.otp_channel_type AS ENUM (
    'sms',
    'whatsapp',
    'email'
);


ALTER TYPE public.otp_channel_type OWNER TO postgres;

--
-- Name: otp_purpose_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.otp_purpose_type AS ENUM (
    'register',
    'login',
    'verify_phone',
    'reset_password'
);


ALTER TYPE public.otp_purpose_type OWNER TO postgres;

--
-- Name: payment_record_status_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.payment_record_status_type AS ENUM (
    'pending',
    'paid',
    'failed',
    'refunded',
    'partially_refunded'
);


ALTER TYPE public.payment_record_status_type OWNER TO postgres;

--
-- Name: payment_status_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.payment_status_type AS ENUM (
    'pending',
    'paid',
    'failed',
    'refunded',
    'partially_refunded'
);


ALTER TYPE public.payment_status_type OWNER TO postgres;

--
-- Name: promotion_applies_to_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.promotion_applies_to_type AS ENUM (
    'order',
    'delivery',
    'item',
    'store'
);


ALTER TYPE public.promotion_applies_to_type OWNER TO postgres;

--
-- Name: rider_status_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.rider_status_type AS ENUM (
    'pending_review',
    'active',
    'paused',
    'suspended',
    'rejected'
);


ALTER TYPE public.rider_status_type OWNER TO postgres;

--
-- Name: role_scope_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.role_scope_type AS ENUM (
    'platform',
    'merchant',
    'store_branch'
);


ALTER TYPE public.role_scope_type OWNER TO postgres;

--
-- Name: service_mode_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.service_mode_type AS ENUM (
    'delivery',
    'pickup',
    'both'
);


ALTER TYPE public.service_mode_type OWNER TO postgres;

--
-- Name: settlement_status_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.settlement_status_type AS ENUM (
    'pending',
    'approved',
    'paid'
);


ALTER TYPE public.settlement_status_type OWNER TO postgres;

--
-- Name: source_channel_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.source_channel_type AS ENUM (
    'app',
    'web',
    'admin'
);


ALTER TYPE public.source_channel_type OWNER TO postgres;

--
-- Name: status_change_source_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.status_change_source_type AS ENUM (
    'system',
    'customer',
    'store',
    'rider',
    'admin'
);


ALTER TYPE public.status_change_source_type OWNER TO postgres;

--
-- Name: store_status_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.store_status_type AS ENUM (
    'draft',
    'active',
    'paused',
    'suspended'
);


ALTER TYPE public.store_status_type OWNER TO postgres;

--
-- Name: user_status_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.user_status_type AS ENUM (
    'pending',
    'active',
    'suspended',
    'deleted'
);


ALTER TYPE public.user_status_type OWNER TO postgres;

--
-- Name: vehicle_type_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.vehicle_type_enum AS ENUM (
    'bici',
    'moto',
    'auto'
);


ALTER TYPE public.vehicle_type_enum OWNER TO postgres;

--
-- Name: zone_type_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.zone_type_enum AS ENUM (
    'radius',
    'polygon'
);


ALTER TYPE public.zone_type_enum OWNER TO postgres;

--
-- Name: set_updated_at(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.set_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;


ALTER FUNCTION public.set_updated_at() OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: addresses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.addresses (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    user_id uuid,
    label character varying(80),
    contact_name character varying(120),
    contact_phone character varying(20),
    country_code character varying(5) DEFAULT 'PE'::character varying NOT NULL,
    region character varying(120) NOT NULL,
    province character varying(120) NOT NULL,
    district character varying(120) NOT NULL,
    city character varying(120) NOT NULL,
    address_line1 character varying(255) NOT NULL,
    address_line2 character varying(255),
    reference text,
    latitude numeric(10,7) NOT NULL,
    longitude numeric(10,7) NOT NULL,
    is_default boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.addresses OWNER TO postgres;

--
-- Name: branch_catalog_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.branch_catalog_items (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    branch_id uuid NOT NULL,
    catalog_item_id uuid NOT NULL,
    variant_id uuid,
    price_amount numeric(10,2) NOT NULL,
    compare_at_amount numeric(10,2),
    stock_qty integer,
    reserved_qty integer DEFAULT 0 NOT NULL,
    is_available boolean DEFAULT true NOT NULL,
    availability_mode public.availability_mode_type NOT NULL,
    prep_time_minutes integer,
    sort_order integer DEFAULT 0 NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.branch_catalog_items OWNER TO postgres;

--
-- Name: branch_item_schedules; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.branch_item_schedules (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    branch_catalog_item_id uuid NOT NULL,
    day_of_week smallint NOT NULL,
    start_time time without time zone NOT NULL,
    end_time time without time zone NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT branch_item_schedules_day_of_week_check CHECK (((day_of_week >= 0) AND (day_of_week <= 6)))
);


ALTER TABLE public.branch_item_schedules OWNER TO postgres;

--
-- Name: branch_operating_hours; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.branch_operating_hours (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    branch_id uuid NOT NULL,
    day_of_week smallint NOT NULL,
    open_time time without time zone,
    close_time time without time zone,
    is_closed boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT branch_operating_hours_day_of_week_check CHECK (((day_of_week >= 0) AND (day_of_week <= 6)))
);


ALTER TABLE public.branch_operating_hours OWNER TO postgres;

--
-- Name: business_categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.business_categories (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    code character varying(50) NOT NULL,
    name character varying(100) NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.business_categories OWNER TO postgres;

--
-- Name: cart_item_modifiers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cart_item_modifiers (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    cart_item_id uuid NOT NULL,
    modifier_group_id uuid NOT NULL,
    modifier_option_id uuid NOT NULL,
    qty integer DEFAULT 1 NOT NULL,
    price_delta_amount numeric(10,2) DEFAULT 0 NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT cart_item_modifiers_qty_check CHECK ((qty > 0))
);


ALTER TABLE public.cart_item_modifiers OWNER TO postgres;

--
-- Name: cart_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cart_items (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    cart_id uuid NOT NULL,
    catalog_item_id uuid NOT NULL,
    variant_id uuid,
    branch_catalog_item_id uuid NOT NULL,
    qty integer NOT NULL,
    unit_price_amount numeric(10,2) NOT NULL,
    notes text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT cart_items_qty_check CHECK ((qty > 0))
);


ALTER TABLE public.cart_items OWNER TO postgres;

--
-- Name: carts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.carts (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    customer_user_id uuid NOT NULL,
    store_id uuid NOT NULL,
    branch_id uuid NOT NULL,
    status public.cart_status_type DEFAULT 'active'::public.cart_status_type NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.carts OWNER TO postgres;

--
-- Name: catalog_categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.catalog_categories (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    store_id uuid NOT NULL,
    parent_id uuid,
    name character varying(120) NOT NULL,
    slug character varying(140) NOT NULL,
    sort_order integer DEFAULT 0 NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.catalog_categories OWNER TO postgres;

--
-- Name: catalog_item_modifier_groups; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.catalog_item_modifier_groups (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    catalog_item_id uuid NOT NULL,
    modifier_group_id uuid NOT NULL,
    sort_order integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.catalog_item_modifier_groups OWNER TO postgres;

--
-- Name: catalog_item_variants; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.catalog_item_variants (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    catalog_item_id uuid NOT NULL,
    name character varying(150) NOT NULL,
    sku character varying(80),
    barcode character varying(80),
    price_modifier_amount numeric(10,2) DEFAULT 0 NOT NULL,
    is_default boolean DEFAULT false NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.catalog_item_variants OWNER TO postgres;

--
-- Name: catalog_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.catalog_items (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    store_id uuid NOT NULL,
    category_id uuid,
    item_type public.item_type_enum NOT NULL,
    name character varying(180) NOT NULL,
    slug character varying(200) NOT NULL,
    description text,
    image_url text,
    sku character varying(80),
    barcode character varying(80),
    brand character varying(120),
    unit_label character varying(30),
    base_price_amount numeric(10,2) NOT NULL,
    requires_age_verification boolean DEFAULT false NOT NULL,
    allows_notes boolean DEFAULT true NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.catalog_items OWNER TO postgres;

--
-- Name: combo_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.combo_items (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    combo_catalog_item_id uuid NOT NULL,
    child_catalog_item_id uuid NOT NULL,
    default_qty integer DEFAULT 1 NOT NULL,
    is_required boolean DEFAULT true NOT NULL,
    sort_order integer DEFAULT 0 NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT combo_no_self_reference CHECK ((combo_catalog_item_id <> child_catalog_item_id))
);


ALTER TABLE public.combo_items OWNER TO postgres;

--
-- Name: customer_profiles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer_profiles (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    user_id uuid NOT NULL,
    default_address_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.customer_profiles OWNER TO postgres;

--
-- Name: deliveries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.deliveries (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    order_id uuid NOT NULL,
    rider_profile_id uuid,
    pickup_branch_id uuid NOT NULL,
    dropoff_address_id uuid NOT NULL,
    status public.delivery_status_type NOT NULL,
    distance_km numeric(8,2),
    estimated_minutes integer,
    assigned_at timestamp with time zone,
    picked_up_at timestamp with time zone,
    delivered_at timestamp with time zone,
    failed_at timestamp with time zone,
    failure_reason text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.deliveries OWNER TO postgres;

--
-- Name: delivery_zones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.delivery_zones (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    branch_id uuid NOT NULL,
    name character varying(120) NOT NULL,
    zone_type public.zone_type_enum NOT NULL,
    center_lat numeric(10,7),
    center_lng numeric(10,7),
    radius_meters integer,
    polygon_geojson jsonb,
    base_fee_amount numeric(10,2) NOT NULL,
    per_km_fee_amount numeric(10,2) DEFAULT 0 NOT NULL,
    min_eta_minutes integer NOT NULL,
    max_eta_minutes integer NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    priority integer DEFAULT 1 NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT delivery_zone_radius_check CHECK ((((zone_type = 'radius'::public.zone_type_enum) AND (center_lat IS NOT NULL) AND (center_lng IS NOT NULL) AND (radius_meters IS NOT NULL)) OR ((zone_type = 'polygon'::public.zone_type_enum) AND (polygon_geojson IS NOT NULL))))
);


ALTER TABLE public.delivery_zones OWNER TO postgres;

--
-- Name: merchant_profiles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.merchant_profiles (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    owner_user_id uuid NOT NULL,
    business_name character varying(150) NOT NULL,
    legal_name character varying(180),
    tax_id character varying(30),
    billing_email character varying(150),
    phone_e164 character varying(20),
    logo_url text,
    status public.merchant_status_type DEFAULT 'onboarding'::public.merchant_status_type NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.merchant_profiles OWNER TO postgres;

--
-- Name: merchant_settlements; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.merchant_settlements (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    merchant_id uuid NOT NULL,
    period_start date NOT NULL,
    period_end date NOT NULL,
    gross_sales_amount numeric(12,2) NOT NULL,
    commission_amount numeric(12,2) NOT NULL,
    delivery_fee_collected numeric(12,2) DEFAULT 0 NOT NULL,
    service_fee_collected numeric(12,2) DEFAULT 0 NOT NULL,
    adjustments_amount numeric(12,2) DEFAULT 0 NOT NULL,
    net_payable_amount numeric(12,2) NOT NULL,
    status public.settlement_status_type NOT NULL,
    generated_at timestamp with time zone DEFAULT now() NOT NULL,
    paid_at timestamp with time zone,
    CONSTRAINT merchant_settlement_period_check CHECK ((period_end >= period_start))
);


ALTER TABLE public.merchant_settlements OWNER TO postgres;

--
-- Name: merchant_users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.merchant_users (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    merchant_id uuid NOT NULL,
    user_id uuid NOT NULL,
    role_code public.merchant_user_role_type NOT NULL,
    status character varying(20) DEFAULT 'active'::character varying NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.merchant_users OWNER TO postgres;

--
-- Name: modifier_groups; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modifier_groups (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    store_id uuid NOT NULL,
    name character varying(120) NOT NULL,
    min_select integer DEFAULT 0 NOT NULL,
    max_select integer DEFAULT 1 NOT NULL,
    is_required boolean DEFAULT false NOT NULL,
    sort_order integer DEFAULT 0 NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.modifier_groups OWNER TO postgres;

--
-- Name: modifier_options; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modifier_options (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    modifier_group_id uuid NOT NULL,
    name character varying(120) NOT NULL,
    price_delta_amount numeric(10,2) DEFAULT 0 NOT NULL,
    is_default boolean DEFAULT false NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    sort_order integer DEFAULT 0 NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.modifier_options OWNER TO postgres;

--
-- Name: order_item_modifiers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.order_item_modifiers (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    order_item_id uuid NOT NULL,
    modifier_group_name_snapshot character varying(120) NOT NULL,
    modifier_option_name_snapshot character varying(120) NOT NULL,
    qty integer DEFAULT 1 NOT NULL,
    unit_price_delta_amount numeric(10,2) DEFAULT 0 NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT order_item_modifiers_qty_check CHECK ((qty > 0))
);


ALTER TABLE public.order_item_modifiers OWNER TO postgres;

--
-- Name: order_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.order_items (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    order_id uuid NOT NULL,
    catalog_item_id uuid NOT NULL,
    variant_id uuid,
    branch_catalog_item_id uuid,
    item_type public.item_type_enum NOT NULL,
    item_name_snapshot character varying(180) NOT NULL,
    variant_name_snapshot character varying(150),
    sku_snapshot character varying(80),
    base_unit_price_amount numeric(10,2) NOT NULL,
    modifier_unit_total_amount numeric(10,2) DEFAULT 0 NOT NULL,
    qty integer NOT NULL,
    line_total_amount numeric(10,2) NOT NULL,
    notes text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT order_items_qty_check CHECK ((qty > 0))
);


ALTER TABLE public.order_items OWNER TO postgres;

--
-- Name: order_status_history; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.order_status_history (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    order_id uuid NOT NULL,
    old_status public.order_status_type,
    new_status public.order_status_type NOT NULL,
    changed_by_user_id uuid,
    source public.status_change_source_type NOT NULL,
    notes text,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.order_status_history OWNER TO postgres;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    order_code character varying(30) NOT NULL,
    customer_user_id uuid NOT NULL,
    store_id uuid NOT NULL,
    branch_id uuid NOT NULL,
    rider_user_id uuid,
    delivery_address_id uuid NOT NULL,
    source_channel public.source_channel_type NOT NULL,
    order_type public.order_type_enum NOT NULL,
    business_category_snapshot character varying(50) NOT NULL,
    status public.order_status_type NOT NULL,
    payment_status public.payment_status_type NOT NULL,
    fulfillment_status public.fulfillment_status_type NOT NULL,
    subtotal_amount numeric(10,2) NOT NULL,
    modifier_total_amount numeric(10,2) DEFAULT 0 NOT NULL,
    discount_amount numeric(10,2) DEFAULT 0 NOT NULL,
    delivery_fee_amount numeric(10,2) DEFAULT 0 NOT NULL,
    service_fee_amount numeric(10,2) DEFAULT 0 NOT NULL,
    tip_amount numeric(10,2) DEFAULT 0 NOT NULL,
    total_amount numeric(10,2) NOT NULL,
    notes text,
    customer_name_snapshot character varying(150) NOT NULL,
    customer_phone_snapshot character varying(20) NOT NULL,
    scheduled_for timestamp with time zone,
    accepted_at timestamp with time zone,
    preparing_at timestamp with time zone,
    ready_for_pickup_at timestamp with time zone,
    rider_assigned_at timestamp with time zone,
    picked_up_at timestamp with time zone,
    delivered_at timestamp with time zone,
    cancelled_at timestamp with time zone,
    cancellation_reason text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: otp_verifications; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.otp_verifications (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    user_id uuid,
    target character varying(150) NOT NULL,
    channel public.otp_channel_type NOT NULL,
    purpose public.otp_purpose_type NOT NULL,
    code_hash character varying(255) NOT NULL,
    expires_at timestamp with time zone NOT NULL,
    consumed_at timestamp with time zone,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.otp_verifications OWNER TO postgres;

--
-- Name: payment_methods; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payment_methods (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    code character varying(30) NOT NULL,
    name character varying(100) NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.payment_methods OWNER TO postgres;

--
-- Name: payments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payments (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    order_id uuid NOT NULL,
    payment_method_id uuid NOT NULL,
    provider character varying(50),
    provider_transaction_id character varying(150),
    status public.payment_record_status_type NOT NULL,
    amount numeric(10,2) NOT NULL,
    paid_at timestamp with time zone,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.payments OWNER TO postgres;

--
-- Name: promotions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.promotions (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    code character varying(50),
    name character varying(150) NOT NULL,
    discount_type public.discount_type_enum NOT NULL,
    discount_value numeric(10,2) NOT NULL,
    applies_to public.promotion_applies_to_type NOT NULL,
    starts_at timestamp with time zone NOT NULL,
    ends_at timestamp with time zone NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.promotions OWNER TO postgres;

--
-- Name: rider_locations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rider_locations (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    rider_profile_id uuid NOT NULL,
    latitude numeric(10,7) NOT NULL,
    longitude numeric(10,7) NOT NULL,
    heading numeric(6,2),
    speed_kph numeric(6,2),
    accuracy_meters numeric(6,2),
    recorded_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.rider_locations OWNER TO postgres;

--
-- Name: rider_profiles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rider_profiles (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    user_id uuid NOT NULL,
    document_type character varying(20) NOT NULL,
    document_number character varying(30) NOT NULL,
    vehicle_type public.vehicle_type_enum NOT NULL,
    vehicle_plate character varying(20),
    status public.rider_status_type DEFAULT 'pending_review'::public.rider_status_type NOT NULL,
    is_online boolean DEFAULT false NOT NULL,
    is_available boolean DEFAULT false NOT NULL,
    rating_avg numeric(3,2),
    total_deliveries integer DEFAULT 0 NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.rider_profiles OWNER TO postgres;

--
-- Name: rider_settlements; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rider_settlements (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    rider_profile_id uuid NOT NULL,
    period_start date NOT NULL,
    period_end date NOT NULL,
    deliveries_count integer NOT NULL,
    total_earnings_amount numeric(12,2) NOT NULL,
    bonuses_amount numeric(12,2) DEFAULT 0 NOT NULL,
    penalties_amount numeric(12,2) DEFAULT 0 NOT NULL,
    net_payable_amount numeric(12,2) NOT NULL,
    status public.settlement_status_type NOT NULL,
    generated_at timestamp with time zone DEFAULT now() NOT NULL,
    paid_at timestamp with time zone,
    CONSTRAINT rider_settlement_period_check CHECK ((period_end >= period_start))
);


ALTER TABLE public.rider_settlements OWNER TO postgres;

--
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    code character varying(50) NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- Name: store_branches; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.store_branches (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    store_id uuid NOT NULL,
    address_id uuid NOT NULL,
    name character varying(150) NOT NULL,
    phone_e164 character varying(20),
    manager_user_id uuid,
    status public.branch_status_type DEFAULT 'active'::public.branch_status_type NOT NULL,
    accepts_orders boolean DEFAULT true NOT NULL,
    avg_prep_time_minutes integer DEFAULT 20 NOT NULL,
    max_concurrent_orders integer,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.store_branches OWNER TO postgres;

--
-- Name: stores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stores (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    merchant_id uuid NOT NULL,
    business_category_id uuid NOT NULL,
    name character varying(150) NOT NULL,
    slug character varying(160) NOT NULL,
    description text,
    logo_url text,
    cover_image_url text,
    service_mode public.service_mode_type NOT NULL,
    catalog_mode public.catalog_mode_type NOT NULL,
    status public.store_status_type DEFAULT 'draft'::public.store_status_type NOT NULL,
    avg_rating numeric(3,2),
    total_reviews integer DEFAULT 0 NOT NULL,
    min_order_amount numeric(10,2),
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.stores OWNER TO postgres;

--
-- Name: user_roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_roles (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    user_id uuid NOT NULL,
    role_id uuid NOT NULL,
    scope_type public.role_scope_type NOT NULL,
    scope_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.user_roles OWNER TO postgres;

--
-- Name: user_sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_sessions (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    user_id uuid NOT NULL,
    refresh_token_hash character varying(255) NOT NULL,
    device_name character varying(120),
    device_os character varying(50),
    app_version character varying(30),
    ip_address character varying(64),
    user_agent text,
    expires_at timestamp with time zone NOT NULL,
    revoked_at timestamp with time zone,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.user_sessions OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    phone_e164 character varying(20),
    email character varying(150),
    password_hash character varying(255),
    auth_provider public.auth_provider_type NOT NULL,
    google_sub character varying(255),
    first_name character varying(100) NOT NULL,
    last_name character varying(100),
    photo_url text,
    status public.user_status_type DEFAULT 'pending'::public.user_status_type NOT NULL,
    is_phone_verified boolean DEFAULT false NOT NULL,
    is_email_verified boolean DEFAULT false NOT NULL,
    last_login_at timestamp with time zone,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone,
    CONSTRAINT users_identity_check CHECK (((phone_e164 IS NOT NULL) OR (email IS NOT NULL) OR (google_sub IS NOT NULL)))
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: addresses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.addresses (id, user_id, label, contact_name, contact_phone, country_code, region, province, district, city, address_line1, address_line2, reference, latitude, longitude, is_default, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: branch_catalog_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.branch_catalog_items (id, branch_id, catalog_item_id, variant_id, price_amount, compare_at_amount, stock_qty, reserved_qty, is_available, availability_mode, prep_time_minutes, sort_order, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: branch_item_schedules; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.branch_item_schedules (id, branch_catalog_item_id, day_of_week, start_time, end_time, is_active, created_at) FROM stdin;
\.


--
-- Data for Name: branch_operating_hours; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.branch_operating_hours (id, branch_id, day_of_week, open_time, close_time, is_closed, created_at) FROM stdin;
\.


--
-- Data for Name: business_categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.business_categories (id, code, name, is_active, created_at) FROM stdin;
092037f7-531b-45dd-864b-343245707f07	restaurant	Restaurante	t	2026-03-11 14:28:41.233394-05
eab37698-85e6-434d-942a-469d3dc46d51	fast_food	Fast Food	t	2026-03-11 14:28:41.233394-05
e7a12c72-b0a3-4f1c-bb64-2f934142af1d	cafe	Cafetería	t	2026-03-11 14:28:41.233394-05
250c157e-848b-48f9-8a7b-679a2c8448e9	pharmacy	Farmacia	t	2026-03-11 14:28:41.233394-05
625b757c-baa0-4aa8-be70-6794e9c47fd6	market	Minimarket / Bodega	t	2026-03-11 14:28:41.233394-05
2d1e8bd3-86dd-46fc-98dc-3325a3d610ff	liquor	Licorería	t	2026-03-11 14:28:41.233394-05
da624aca-fd13-475c-9b26-781ce7010acb	retail	Tienda Retail	t	2026-03-11 14:28:41.233394-05
36b4bcee-eb15-4907-89c8-61354fc6c339	tech	Tecnología	t	2026-03-11 14:28:41.233394-05
635b395a-6a87-4569-8deb-79d5dc92be2b	pets	Mascotas	t	2026-03-11 14:28:41.233394-05
02919b70-045b-4278-b0f5-3ee4539ef790	hardware	Ferretería	t	2026-03-11 14:28:41.233394-05
800dc8f5-d728-4a52-832d-4b94ee215cf7	boutique	Boutique / Ropa	t	2026-03-11 14:28:41.233394-05
30943ee5-f6db-408b-9280-ed9591916655	other	Otros	t	2026-03-11 14:28:41.233394-05
\.


--
-- Data for Name: cart_item_modifiers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cart_item_modifiers (id, cart_item_id, modifier_group_id, modifier_option_id, qty, price_delta_amount, created_at) FROM stdin;
\.


--
-- Data for Name: cart_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cart_items (id, cart_id, catalog_item_id, variant_id, branch_catalog_item_id, qty, unit_price_amount, notes, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carts (id, customer_user_id, store_id, branch_id, status, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: catalog_categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.catalog_categories (id, store_id, parent_id, name, slug, sort_order, is_active, created_at) FROM stdin;
\.


--
-- Data for Name: catalog_item_modifier_groups; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.catalog_item_modifier_groups (id, catalog_item_id, modifier_group_id, sort_order) FROM stdin;
\.


--
-- Data for Name: catalog_item_variants; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.catalog_item_variants (id, catalog_item_id, name, sku, barcode, price_modifier_amount, is_default, is_active, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: catalog_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.catalog_items (id, store_id, category_id, item_type, name, slug, description, image_url, sku, barcode, brand, unit_label, base_price_amount, requires_age_verification, allows_notes, is_active, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: combo_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.combo_items (id, combo_catalog_item_id, child_catalog_item_id, default_qty, is_required, sort_order, created_at) FROM stdin;
\.


--
-- Data for Name: customer_profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer_profiles (id, user_id, default_address_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: deliveries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.deliveries (id, order_id, rider_profile_id, pickup_branch_id, dropoff_address_id, status, distance_km, estimated_minutes, assigned_at, picked_up_at, delivered_at, failed_at, failure_reason, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: delivery_zones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.delivery_zones (id, branch_id, name, zone_type, center_lat, center_lng, radius_meters, polygon_geojson, base_fee_amount, per_km_fee_amount, min_eta_minutes, max_eta_minutes, is_active, priority, created_at) FROM stdin;
\.


--
-- Data for Name: merchant_profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.merchant_profiles (id, owner_user_id, business_name, legal_name, tax_id, billing_email, phone_e164, logo_url, status, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: merchant_settlements; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.merchant_settlements (id, merchant_id, period_start, period_end, gross_sales_amount, commission_amount, delivery_fee_collected, service_fee_collected, adjustments_amount, net_payable_amount, status, generated_at, paid_at) FROM stdin;
\.


--
-- Data for Name: merchant_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.merchant_users (id, merchant_id, user_id, role_code, status, created_at) FROM stdin;
\.


--
-- Data for Name: modifier_groups; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.modifier_groups (id, store_id, name, min_select, max_select, is_required, sort_order, is_active, created_at) FROM stdin;
\.


--
-- Data for Name: modifier_options; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.modifier_options (id, modifier_group_id, name, price_delta_amount, is_default, is_active, sort_order, created_at) FROM stdin;
\.


--
-- Data for Name: order_item_modifiers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.order_item_modifiers (id, order_item_id, modifier_group_name_snapshot, modifier_option_name_snapshot, qty, unit_price_delta_amount, created_at) FROM stdin;
\.


--
-- Data for Name: order_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.order_items (id, order_id, catalog_item_id, variant_id, branch_catalog_item_id, item_type, item_name_snapshot, variant_name_snapshot, sku_snapshot, base_unit_price_amount, modifier_unit_total_amount, qty, line_total_amount, notes, created_at) FROM stdin;
\.


--
-- Data for Name: order_status_history; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.order_status_history (id, order_id, old_status, new_status, changed_by_user_id, source, notes, created_at) FROM stdin;
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, order_code, customer_user_id, store_id, branch_id, rider_user_id, delivery_address_id, source_channel, order_type, business_category_snapshot, status, payment_status, fulfillment_status, subtotal_amount, modifier_total_amount, discount_amount, delivery_fee_amount, service_fee_amount, tip_amount, total_amount, notes, customer_name_snapshot, customer_phone_snapshot, scheduled_for, accepted_at, preparing_at, ready_for_pickup_at, rider_assigned_at, picked_up_at, delivered_at, cancelled_at, cancellation_reason, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: otp_verifications; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.otp_verifications (id, user_id, target, channel, purpose, code_hash, expires_at, consumed_at, created_at) FROM stdin;
448b74d3-c101-443c-ba22-1b404af0579c	\N	+51973601133	sms	login	$2b$10$A37l3pHt6FnWUVxiJr0oNekSFB0oOqxcxynV7xe1bYYKvmhU.wMte	2026-03-12 16:59:10.185-05	\N	2026-03-12 16:54:10.195-05
35ea82ea-63a2-40cc-a5c4-3cee3871e123	d44175d4-2c72-4ef6-ac85-fa19a94c3696	+51973601133	sms	login	$2b$10$mQGgWMqUZYtPJYTRoL4TfuXUHHk6rZNdiyhT10tKWrk1HykftZ9OG	2026-03-12 17:17:10.386-05	2026-03-12 17:12:24.362-05	2026-03-12 17:12:10.387-05
eb10327d-c093-4733-a5b1-ada9d9df9c3e	d44175d4-2c72-4ef6-ac85-fa19a94c3696	+51973601133	sms	login	$2b$10$Cn7s/s2EzOsjeCY/j2ILEu/FD1GyiVoNs6fS0HWZPFKtv6y3ConZa	2026-03-12 18:11:01.862-05	2026-03-12 18:06:17.588-05	2026-03-12 18:06:01.865-05
6b2055d5-ec33-4790-9a47-74a4a1a3cba2	d44175d4-2c72-4ef6-ac85-fa19a94c3696	+51973601133	sms	login	$2b$10$dhgsZNB2GeQx8VfmzQOVz.PBiEbFJriBoUw6S1HCTNnPbfVbAj8xe	2026-03-12 18:24:51.384-05	2026-03-12 18:20:18.639-05	2026-03-12 18:19:51.397-05
3b31e0a0-39c9-49f5-bef1-c93c512a5725	d44175d4-2c72-4ef6-ac85-fa19a94c3696	+51973601133	sms	login	$2b$10$Ae6pTOMW0b.sEjos4nr8lOlvPZds/NCg2s5udiw8eZny5Qt5X2CHS	2026-03-12 18:38:02.75-05	2026-03-12 18:33:21.714-05	2026-03-12 18:33:02.753-05
a7c81a2a-3c2f-42bb-82eb-dce95cc5228c	d44175d4-2c72-4ef6-ac85-fa19a94c3696	+51973601133	sms	login	$2b$10$InThpACfhrOz4ay46tTjMONC0rSQUF.emyqyI84QTnGAWNSiUfqq2	2026-03-12 19:15:20.73-05	2026-03-12 19:10:35.576-05	2026-03-12 19:10:20.737-05
8208eee5-b8fa-40ee-be6c-4257bc0f2174	d44175d4-2c72-4ef6-ac85-fa19a94c3696	+51973601133	sms	login	$2b$10$GeI6mHQyasCqh1bHRw.upuEI02r8PHncwBFp9sxGR8eIfocrrAjfu	2026-03-12 19:22:04.573-05	2026-03-12 19:17:20.133-05	2026-03-12 19:17:04.573-05
80fc68a4-7d2e-4246-82e0-6cb559a12131	d44175d4-2c72-4ef6-ac85-fa19a94c3696	+51973601133	sms	login	$2b$10$jOoX0e.GXYDY6fO/CTqo3.1ItPasCya8U3LosqQ8lFK//p8nx6GXO	2026-03-12 19:41:24.008-05	\N	2026-03-12 19:36:24.009-05
e02407aa-1109-4b16-af99-2ff6d5940790	d44175d4-2c72-4ef6-ac85-fa19a94c3696	+51973601133	sms	login	$2b$10$zwFBnKLGvuomOe.FBKUWRuey5m7d0PswYEh6p5S6KZj64Szxhy1ki	2026-03-12 20:03:37.338-05	2026-03-12 19:58:52.276-05	2026-03-12 19:58:37.34-05
\.


--
-- Data for Name: payment_methods; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payment_methods (id, code, name, is_active, created_at) FROM stdin;
a06ce5e7-fd81-4882-bcf3-9ce501df179d	cash	Efectivo	t	2026-03-11 14:28:41.228595-05
c1db900f-3863-4dc7-b994-f9030a0fa99b	yape	Yape	t	2026-03-11 14:28:41.228595-05
41e0b460-c966-42a9-ae4f-94a2eab27546	plin	Plin	t	2026-03-11 14:28:41.228595-05
9ed36b46-e857-4507-829e-066330c6f516	card	Tarjeta débito/crédito	t	2026-03-11 14:28:41.228595-05
a9e9039f-de07-4bc0-a0aa-92d5fb02751b	online	Pago en línea	t	2026-03-11 14:28:41.228595-05
\.


--
-- Data for Name: payments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payments (id, order_id, payment_method_id, provider, provider_transaction_id, status, amount, paid_at, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: promotions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.promotions (id, code, name, discount_type, discount_value, applies_to, starts_at, ends_at, is_active, created_at) FROM stdin;
\.


--
-- Data for Name: rider_locations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rider_locations (id, rider_profile_id, latitude, longitude, heading, speed_kph, accuracy_meters, recorded_at) FROM stdin;
\.


--
-- Data for Name: rider_profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rider_profiles (id, user_id, document_type, document_number, vehicle_type, vehicle_plate, status, is_online, is_available, rating_avg, total_deliveries, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: rider_settlements; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rider_settlements (id, rider_profile_id, period_start, period_end, deliveries_count, total_earnings_amount, bonuses_amount, penalties_amount, net_payable_amount, status, generated_at, paid_at) FROM stdin;
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, code, name, description, created_at) FROM stdin;
458daa88-d275-4e5c-8d31-d78b3255bf6f	admin	Administrador	Acceso total a la plataforma	2026-03-11 14:28:41.219419-05
cf9ddb06-a115-4e0b-ac0e-c3b204443672	customer	Cliente	Usuario que realiza pedidos	2026-03-11 14:28:41.219419-05
a2b99ab1-e432-4ecc-945d-d52d38860f0e	merchant_owner	Dueño de comercio	Propietario de tienda/comercio	2026-03-11 14:28:41.219419-05
b0e01620-78c0-4f23-af8b-81c60208c4f1	merchant_staff	Personal de comercio	Operador del comercio	2026-03-11 14:28:41.219419-05
8f3056e1-815d-4ab0-a1bd-65ed8f5a3f5e	rider	Repartidor	Repartidor de pedidos	2026-03-11 14:28:41.219419-05
\.


--
-- Data for Name: store_branches; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.store_branches (id, store_id, address_id, name, phone_e164, manager_user_id, status, accepts_orders, avg_prep_time_minutes, max_concurrent_orders, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: stores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.stores (id, merchant_id, business_category_id, name, slug, description, logo_url, cover_image_url, service_mode, catalog_mode, status, avg_rating, total_reviews, min_order_amount, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: user_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_roles (id, user_id, role_id, scope_type, scope_id, created_at) FROM stdin;
8cb9681e-5d6c-487f-bd53-21c20e5b0d64	d44175d4-2c72-4ef6-ac85-fa19a94c3696	cf9ddb06-a115-4e0b-ac0e-c3b204443672	platform	\N	2026-03-12 16:54:33.143-05
eb9b3c85-946b-46c8-b3d3-03f802b7e84a	a184cac3-f3bb-4ead-a650-71b4bf52180b	cf9ddb06-a115-4e0b-ac0e-c3b204443672	platform	\N	2026-03-12 17:04:13.326-05
d4a0a513-7c17-42e8-bdd5-ed3ea418b1d5	5a382daf-62f0-497c-90a6-083c78bbf57c	cf9ddb06-a115-4e0b-ac0e-c3b204443672	platform	\N	2026-03-12 18:34:08.819-05
306397d2-83db-47b0-bb09-0310f36c8d74	8b90cc95-6d20-441f-94c2-13db99018314	cf9ddb06-a115-4e0b-ac0e-c3b204443672	platform	\N	2026-03-12 20:06:49.051-05
\.


--
-- Data for Name: user_sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_sessions (id, user_id, refresh_token_hash, device_name, device_os, app_version, ip_address, user_agent, expires_at, revoked_at, created_at) FROM stdin;
4cdbce8e-cbf9-4caa-821d-ec6fad89a3e5	d44175d4-2c72-4ef6-ac85-fa19a94c3696	$2b$10$Nh8MpVa5Dx0XLkk62Pxa3.v6/27YqxV9wAbqB2VnNvsLwYT9B0Uiu	\N	\N	\N	\N	\N	2026-03-19 16:54:33.222-05	\N	2026-03-12 16:54:33.225-05
c286246b-8deb-4f52-aebe-0f3560f5a628	a184cac3-f3bb-4ead-a650-71b4bf52180b	$2b$10$05JB5JdrVnV9vcsrnS56be3MqJtou2MqYZUjd5kHQbxrm8.G1aQau	\N	\N	\N	\N	\N	2026-03-19 17:04:13.405-05	\N	2026-03-12 17:04:13.406-05
4f175db8-115d-477d-850c-4a3a18adf580	a184cac3-f3bb-4ead-a650-71b4bf52180b	$2b$10$EL0JD9d26Ps.wVGvN6Hh.uU6UPkjbCxmMwhXF7XLSq0ZEjtWl1.rO	\N	\N	\N	\N	\N	2026-03-19 17:06:50.758-05	\N	2026-03-12 17:06:50.764-05
c17d0bca-9557-4c93-90d2-f30f64db774a	d44175d4-2c72-4ef6-ac85-fa19a94c3696	$2b$10$s5Uo/TUJOZbCiebPZMPaP.sM4abrkMfgAHiyQKzcsTcPq6srNNeRW	\N	\N	\N	\N	\N	2026-03-19 17:12:24.465-05	\N	2026-03-12 17:12:24.466-05
b90eb410-1fde-43aa-95a7-d10208536b39	d44175d4-2c72-4ef6-ac85-fa19a94c3696	$2b$10$jYVaRpUqbX6QQnCRKnF69ubaShKfSH8xk4ufeJVV7hNQTzU36kb.K	\N	\N	\N	\N	\N	2026-03-19 18:06:17.676-05	\N	2026-03-12 18:06:17.678-05
de46af12-65ef-42e2-93bf-f4034bc709bc	d44175d4-2c72-4ef6-ac85-fa19a94c3696	$2b$10$BpzuyWove0Xe3qQTKI.3OuJc/F5uGVTKamRXPzVyZLZyOv92d.fkK	\N	\N	\N	\N	\N	2026-03-19 18:20:18.751-05	\N	2026-03-12 18:20:18.753-05
98f67977-ad93-4f78-afc7-13175977617c	d44175d4-2c72-4ef6-ac85-fa19a94c3696	$2b$10$2IfiJJDgQWse.lENq2QlhOVv/Q0GYu5cq6uFH9FBd2FMC24i3DNTC	\N	\N	\N	\N	\N	2026-03-19 18:33:21.794-05	\N	2026-03-12 18:33:21.795-05
1c60c9ff-688a-4e60-b6f0-f99df39a07d5	a184cac3-f3bb-4ead-a650-71b4bf52180b	$2b$10$swKCr/zHAW8rzO4b61fHsus/DzrcH2CoUH5URflIX.CtXJmXa.mTS	\N	\N	\N	\N	\N	2026-03-19 18:33:56.171-05	\N	2026-03-12 18:33:56.171-05
33c026a0-8958-45dd-9e7b-001e2a1ddc4d	5a382daf-62f0-497c-90a6-083c78bbf57c	$2b$10$gmLaTgkKv5avry4X8ZtDyOkStzdEhDHrKNR7fgzyepxL3uu/b0M2e	\N	\N	\N	\N	\N	2026-03-19 18:34:08.881-05	\N	2026-03-12 18:34:08.881-05
72f431fb-468f-4077-8bbf-15f085ee7c57	d44175d4-2c72-4ef6-ac85-fa19a94c3696	$2b$10$2kr1eZCdNuPEq1xAsawq5eIVBA7zfaINxEY3Bkh9W6Sc26PtrnDgi	\N	\N	\N	\N	\N	2026-03-19 19:10:35.75-05	\N	2026-03-12 19:10:35.752-05
8e4c4c8a-3c7c-4221-8a23-2c5063c18046	d44175d4-2c72-4ef6-ac85-fa19a94c3696	$2b$10$7X6h4TUSEieJ3rXoywx3R.HbxGxUQUVY7QUTYmFOO/TH5NaSYuIC2	\N	\N	\N	\N	\N	2026-03-19 19:17:20.21-05	\N	2026-03-12 19:17:20.211-05
5c49a440-3af6-409b-b7ae-3f2766cc53b8	d44175d4-2c72-4ef6-ac85-fa19a94c3696	$2b$10$ZO98VgZhlNUDMWjYPOWQvuePdPWx9RPwvZVoUGWEhhQ.7KUjRZiF.	\N	\N	\N	\N	\N	2026-03-19 19:58:52.379-05	\N	2026-03-12 19:58:52.38-05
45420af2-74ce-45f0-8268-013abef21ae4	8b90cc95-6d20-441f-94c2-13db99018314	$2b$10$ME1cfq4eWUYXtR8Ui9SbFegpb1ng.LG/AbCPVMBY7ymDhiJ/qqepG	\N	\N	\N	\N	\N	2026-03-19 20:06:49.115-05	\N	2026-03-12 20:06:49.115-05
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, phone_e164, email, password_hash, auth_provider, google_sub, first_name, last_name, photo_url, status, is_phone_verified, is_email_verified, last_login_at, created_at, updated_at, deleted_at) FROM stdin;
a184cac3-f3bb-4ead-a650-71b4bf52180b	\N	caterno99@gmail.com	$2b$12$TnYg8PZcroltWfSHw/8Y3uq3rs46KvcyBe5Si7uc/APjYs40kjCtW	email	113643277465659148373	Mel	milena	https://lh3.googleusercontent.com/a/ACg8ocL0LR6UV44hbbke0BDDk5u0KMZ0WpUeB_zYll3i4UyeVheMAkFH1w=s96-c	active	f	t	2026-03-12 18:33:56.109-05	2026-03-12 17:04:13.305-05	2026-03-12 13:33:56.110822-05	\N
5a382daf-62f0-497c-90a6-083c78bbf57c	\N	junioredinsonmatiasbardales@gmail.com	\N	google	107832686664622367902	Junior Edinson	Matías Bardales	https://lh3.googleusercontent.com/a/ACg8ocKDYO9b4B9vr_Z5f9B_MHQaZ5lz9SWOzwEKehEkxYIEUvSfyA=s96-c	active	f	t	2026-03-12 18:34:08.822-05	2026-03-12 18:34:08.814-05	2026-03-12 13:34:08.8241-05	\N
d44175d4-2c72-4ef6-ac85-fa19a94c3696	+51973601133	\N	\N	phone	\N	Junior	Matias	\N	active	f	f	2026-03-12 19:58:52.279-05	2026-03-12 16:54:33.126-05	2026-03-12 14:58:52.280795-05	\N
8b90cc95-6d20-441f-94c2-13db99018314	\N	csurco02@gmail.com	\N	google	108094352830206679797	Carlos	Surco	https://lh3.googleusercontent.com/a/ACg8ocL-ndAHNg_ckpI7f8iKX7FCH_BpguuBzTJJhu7yt5bYHydEJA=s96-c	active	f	t	2026-03-12 20:06:49.054-05	2026-03-12 20:06:49.042-05	2026-03-12 15:06:49.055188-05	\N
\.


--
-- Name: addresses addresses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_pkey PRIMARY KEY (id);


--
-- Name: branch_catalog_items branch_catalog_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.branch_catalog_items
    ADD CONSTRAINT branch_catalog_items_pkey PRIMARY KEY (id);


--
-- Name: branch_item_schedules branch_item_schedules_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.branch_item_schedules
    ADD CONSTRAINT branch_item_schedules_pkey PRIMARY KEY (id);


--
-- Name: branch_operating_hours branch_operating_hours_branch_id_day_of_week_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.branch_operating_hours
    ADD CONSTRAINT branch_operating_hours_branch_id_day_of_week_key UNIQUE (branch_id, day_of_week);


--
-- Name: branch_operating_hours branch_operating_hours_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.branch_operating_hours
    ADD CONSTRAINT branch_operating_hours_pkey PRIMARY KEY (id);


--
-- Name: business_categories business_categories_code_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.business_categories
    ADD CONSTRAINT business_categories_code_key UNIQUE (code);


--
-- Name: business_categories business_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.business_categories
    ADD CONSTRAINT business_categories_pkey PRIMARY KEY (id);


--
-- Name: cart_item_modifiers cart_item_modifiers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_item_modifiers
    ADD CONSTRAINT cart_item_modifiers_pkey PRIMARY KEY (id);


--
-- Name: cart_items cart_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_items
    ADD CONSTRAINT cart_items_pkey PRIMARY KEY (id);


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY (id);


--
-- Name: catalog_categories catalog_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalog_categories
    ADD CONSTRAINT catalog_categories_pkey PRIMARY KEY (id);


--
-- Name: catalog_categories catalog_categories_store_id_slug_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalog_categories
    ADD CONSTRAINT catalog_categories_store_id_slug_key UNIQUE (store_id, slug);


--
-- Name: catalog_item_modifier_groups catalog_item_modifier_groups_catalog_item_id_modifier_group_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalog_item_modifier_groups
    ADD CONSTRAINT catalog_item_modifier_groups_catalog_item_id_modifier_group_key UNIQUE (catalog_item_id, modifier_group_id);


--
-- Name: catalog_item_modifier_groups catalog_item_modifier_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalog_item_modifier_groups
    ADD CONSTRAINT catalog_item_modifier_groups_pkey PRIMARY KEY (id);


--
-- Name: catalog_item_variants catalog_item_variants_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalog_item_variants
    ADD CONSTRAINT catalog_item_variants_pkey PRIMARY KEY (id);


--
-- Name: catalog_items catalog_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalog_items
    ADD CONSTRAINT catalog_items_pkey PRIMARY KEY (id);


--
-- Name: catalog_items catalog_items_store_id_slug_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalog_items
    ADD CONSTRAINT catalog_items_store_id_slug_key UNIQUE (store_id, slug);


--
-- Name: combo_items combo_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.combo_items
    ADD CONSTRAINT combo_items_pkey PRIMARY KEY (id);


--
-- Name: customer_profiles customer_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_profiles
    ADD CONSTRAINT customer_profiles_pkey PRIMARY KEY (id);


--
-- Name: customer_profiles customer_profiles_user_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_profiles
    ADD CONSTRAINT customer_profiles_user_id_key UNIQUE (user_id);


--
-- Name: deliveries deliveries_order_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.deliveries
    ADD CONSTRAINT deliveries_order_id_key UNIQUE (order_id);


--
-- Name: deliveries deliveries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.deliveries
    ADD CONSTRAINT deliveries_pkey PRIMARY KEY (id);


--
-- Name: delivery_zones delivery_zones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.delivery_zones
    ADD CONSTRAINT delivery_zones_pkey PRIMARY KEY (id);


--
-- Name: merchant_profiles merchant_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.merchant_profiles
    ADD CONSTRAINT merchant_profiles_pkey PRIMARY KEY (id);


--
-- Name: merchant_settlements merchant_settlements_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.merchant_settlements
    ADD CONSTRAINT merchant_settlements_pkey PRIMARY KEY (id);


--
-- Name: merchant_users merchant_users_merchant_id_user_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.merchant_users
    ADD CONSTRAINT merchant_users_merchant_id_user_id_key UNIQUE (merchant_id, user_id);


--
-- Name: merchant_users merchant_users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.merchant_users
    ADD CONSTRAINT merchant_users_pkey PRIMARY KEY (id);


--
-- Name: modifier_groups modifier_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modifier_groups
    ADD CONSTRAINT modifier_groups_pkey PRIMARY KEY (id);


--
-- Name: modifier_options modifier_options_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modifier_options
    ADD CONSTRAINT modifier_options_pkey PRIMARY KEY (id);


--
-- Name: order_item_modifiers order_item_modifiers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_item_modifiers
    ADD CONSTRAINT order_item_modifiers_pkey PRIMARY KEY (id);


--
-- Name: order_items order_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_pkey PRIMARY KEY (id);


--
-- Name: order_status_history order_status_history_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_status_history
    ADD CONSTRAINT order_status_history_pkey PRIMARY KEY (id);


--
-- Name: orders orders_order_code_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_order_code_key UNIQUE (order_code);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: otp_verifications otp_verifications_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.otp_verifications
    ADD CONSTRAINT otp_verifications_pkey PRIMARY KEY (id);


--
-- Name: payment_methods payment_methods_code_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment_methods
    ADD CONSTRAINT payment_methods_code_key UNIQUE (code);


--
-- Name: payment_methods payment_methods_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment_methods
    ADD CONSTRAINT payment_methods_pkey PRIMARY KEY (id);


--
-- Name: payments payments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_pkey PRIMARY KEY (id);


--
-- Name: promotions promotions_code_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.promotions
    ADD CONSTRAINT promotions_code_key UNIQUE (code);


--
-- Name: promotions promotions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.promotions
    ADD CONSTRAINT promotions_pkey PRIMARY KEY (id);


--
-- Name: rider_locations rider_locations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rider_locations
    ADD CONSTRAINT rider_locations_pkey PRIMARY KEY (id);


--
-- Name: rider_profiles rider_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rider_profiles
    ADD CONSTRAINT rider_profiles_pkey PRIMARY KEY (id);


--
-- Name: rider_profiles rider_profiles_user_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rider_profiles
    ADD CONSTRAINT rider_profiles_user_id_key UNIQUE (user_id);


--
-- Name: rider_settlements rider_settlements_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rider_settlements
    ADD CONSTRAINT rider_settlements_pkey PRIMARY KEY (id);


--
-- Name: roles roles_code_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_code_key UNIQUE (code);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: store_branches store_branches_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.store_branches
    ADD CONSTRAINT store_branches_pkey PRIMARY KEY (id);


--
-- Name: stores stores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stores
    ADD CONSTRAINT stores_pkey PRIMARY KEY (id);


--
-- Name: stores stores_slug_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stores
    ADD CONSTRAINT stores_slug_key UNIQUE (slug);


--
-- Name: user_roles user_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (id);


--
-- Name: user_roles user_roles_user_id_role_id_scope_type_scope_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_user_id_role_id_scope_type_scope_id_key UNIQUE (user_id, role_id, scope_type, scope_id);


--
-- Name: user_sessions user_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_sessions
    ADD CONSTRAINT user_sessions_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_google_sub_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_google_sub_key UNIQUE (google_sub);


--
-- Name: users users_phone_e164_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_phone_e164_key UNIQUE (phone_e164);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: idx_addresses_coords; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_addresses_coords ON public.addresses USING btree (latitude, longitude);


--
-- Name: idx_addresses_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_addresses_user_id ON public.addresses USING btree (user_id) WHERE (user_id IS NOT NULL);


--
-- Name: idx_branch_catalog_available; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_branch_catalog_available ON public.branch_catalog_items USING btree (is_available) WHERE (is_available = true);


--
-- Name: idx_branch_catalog_branch; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_branch_catalog_branch ON public.branch_catalog_items USING btree (branch_id);


--
-- Name: idx_branch_catalog_item; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_branch_catalog_item ON public.branch_catalog_items USING btree (catalog_item_id);


--
-- Name: idx_branches_accepts_orders; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_branches_accepts_orders ON public.store_branches USING btree (accepts_orders) WHERE (status = 'active'::public.branch_status_type);


--
-- Name: idx_branches_status; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_branches_status ON public.store_branches USING btree (status);


--
-- Name: idx_branches_store; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_branches_store ON public.store_branches USING btree (store_id);


--
-- Name: idx_carts_customer; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_carts_customer ON public.carts USING btree (customer_user_id);


--
-- Name: idx_carts_status; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_carts_status ON public.carts USING btree (status) WHERE (status = 'active'::public.cart_status_type);


--
-- Name: idx_carts_store_branch; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_carts_store_branch ON public.carts USING btree (store_id, branch_id);


--
-- Name: idx_catalog_categories_store; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_catalog_categories_store ON public.catalog_categories USING btree (store_id);


--
-- Name: idx_catalog_items_category; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_catalog_items_category ON public.catalog_items USING btree (category_id) WHERE (category_id IS NOT NULL);


--
-- Name: idx_catalog_items_slug; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_catalog_items_slug ON public.catalog_items USING btree (store_id, slug);


--
-- Name: idx_catalog_items_store; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_catalog_items_store ON public.catalog_items USING btree (store_id);


--
-- Name: idx_catalog_items_type; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_catalog_items_type ON public.catalog_items USING btree (item_type);


--
-- Name: idx_deliveries_rider; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_deliveries_rider ON public.deliveries USING btree (rider_profile_id) WHERE (rider_profile_id IS NOT NULL);


--
-- Name: idx_deliveries_status; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_deliveries_status ON public.deliveries USING btree (status);


--
-- Name: idx_delivery_zones_active; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_delivery_zones_active ON public.delivery_zones USING btree (is_active) WHERE (is_active = true);


--
-- Name: idx_delivery_zones_branch; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_delivery_zones_branch ON public.delivery_zones USING btree (branch_id);


--
-- Name: idx_merchant_settlements_merchant; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_merchant_settlements_merchant ON public.merchant_settlements USING btree (merchant_id);


--
-- Name: idx_merchant_settlements_period; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_merchant_settlements_period ON public.merchant_settlements USING btree (period_start, period_end);


--
-- Name: idx_order_items_order; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_order_items_order ON public.order_items USING btree (order_id);


--
-- Name: idx_order_status_history_created; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_order_status_history_created ON public.order_status_history USING btree (created_at DESC);


--
-- Name: idx_order_status_history_order; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_order_status_history_order ON public.order_status_history USING btree (order_id);


--
-- Name: idx_orders_branch; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_orders_branch ON public.orders USING btree (branch_id);


--
-- Name: idx_orders_code; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_orders_code ON public.orders USING btree (order_code);


--
-- Name: idx_orders_created; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_orders_created ON public.orders USING btree (created_at DESC);


--
-- Name: idx_orders_customer; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_orders_customer ON public.orders USING btree (customer_user_id);


--
-- Name: idx_orders_rider; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_orders_rider ON public.orders USING btree (rider_user_id) WHERE (rider_user_id IS NOT NULL);


--
-- Name: idx_orders_status; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_orders_status ON public.orders USING btree (status);


--
-- Name: idx_orders_store; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_orders_store ON public.orders USING btree (store_id);


--
-- Name: idx_otp_expires; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_otp_expires ON public.otp_verifications USING btree (expires_at) WHERE (consumed_at IS NULL);


--
-- Name: idx_otp_target_purpose; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_otp_target_purpose ON public.otp_verifications USING btree (target, purpose);


--
-- Name: idx_payments_order; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_payments_order ON public.payments USING btree (order_id);


--
-- Name: idx_payments_status; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_payments_status ON public.payments USING btree (status);


--
-- Name: idx_rider_locations_recorded; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_rider_locations_recorded ON public.rider_locations USING btree (recorded_at DESC);


--
-- Name: idx_rider_locations_rider; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_rider_locations_rider ON public.rider_locations USING btree (rider_profile_id);


--
-- Name: idx_rider_settlements_period; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_rider_settlements_period ON public.rider_settlements USING btree (period_start, period_end);


--
-- Name: idx_rider_settlements_rider; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_rider_settlements_rider ON public.rider_settlements USING btree (rider_profile_id);


--
-- Name: idx_stores_catalog_mode; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_stores_catalog_mode ON public.stores USING btree (catalog_mode);


--
-- Name: idx_stores_merchant; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_stores_merchant ON public.stores USING btree (merchant_id);


--
-- Name: idx_stores_slug; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_stores_slug ON public.stores USING btree (slug);


--
-- Name: idx_stores_status; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_stores_status ON public.stores USING btree (status);


--
-- Name: idx_user_sessions_expires; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_sessions_expires ON public.user_sessions USING btree (expires_at) WHERE (revoked_at IS NULL);


--
-- Name: idx_user_sessions_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_sessions_user_id ON public.user_sessions USING btree (user_id);


--
-- Name: idx_users_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_users_email ON public.users USING btree (email) WHERE (email IS NOT NULL);


--
-- Name: idx_users_google_sub; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_users_google_sub ON public.users USING btree (google_sub) WHERE (google_sub IS NOT NULL);


--
-- Name: idx_users_phone; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_users_phone ON public.users USING btree (phone_e164) WHERE (phone_e164 IS NOT NULL);


--
-- Name: idx_users_status; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_users_status ON public.users USING btree (status) WHERE (deleted_at IS NULL);


--
-- Name: addresses tr_addresses_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_addresses_updated_at BEFORE UPDATE ON public.addresses FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: branch_catalog_items tr_branch_catalog_items_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_branch_catalog_items_updated_at BEFORE UPDATE ON public.branch_catalog_items FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: cart_items tr_cart_items_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_cart_items_updated_at BEFORE UPDATE ON public.cart_items FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: carts tr_carts_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_carts_updated_at BEFORE UPDATE ON public.carts FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: catalog_item_variants tr_catalog_item_variants_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_catalog_item_variants_updated_at BEFORE UPDATE ON public.catalog_item_variants FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: catalog_items tr_catalog_items_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_catalog_items_updated_at BEFORE UPDATE ON public.catalog_items FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: customer_profiles tr_customer_profiles_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_customer_profiles_updated_at BEFORE UPDATE ON public.customer_profiles FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: deliveries tr_deliveries_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_deliveries_updated_at BEFORE UPDATE ON public.deliveries FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: merchant_profiles tr_merchant_profiles_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_merchant_profiles_updated_at BEFORE UPDATE ON public.merchant_profiles FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: orders tr_orders_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_orders_updated_at BEFORE UPDATE ON public.orders FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: payments tr_payments_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_payments_updated_at BEFORE UPDATE ON public.payments FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: rider_profiles tr_rider_profiles_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_rider_profiles_updated_at BEFORE UPDATE ON public.rider_profiles FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: store_branches tr_store_branches_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_store_branches_updated_at BEFORE UPDATE ON public.store_branches FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: stores tr_stores_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_stores_updated_at BEFORE UPDATE ON public.stores FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: users tr_users_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: addresses addresses_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- Name: branch_catalog_items branch_catalog_items_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.branch_catalog_items
    ADD CONSTRAINT branch_catalog_items_branch_id_fkey FOREIGN KEY (branch_id) REFERENCES public.store_branches(id) ON DELETE CASCADE;


--
-- Name: branch_catalog_items branch_catalog_items_catalog_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.branch_catalog_items
    ADD CONSTRAINT branch_catalog_items_catalog_item_id_fkey FOREIGN KEY (catalog_item_id) REFERENCES public.catalog_items(id) ON DELETE CASCADE;


--
-- Name: branch_catalog_items branch_catalog_items_variant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.branch_catalog_items
    ADD CONSTRAINT branch_catalog_items_variant_id_fkey FOREIGN KEY (variant_id) REFERENCES public.catalog_item_variants(id) ON DELETE SET NULL;


--
-- Name: branch_item_schedules branch_item_schedules_branch_catalog_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.branch_item_schedules
    ADD CONSTRAINT branch_item_schedules_branch_catalog_item_id_fkey FOREIGN KEY (branch_catalog_item_id) REFERENCES public.branch_catalog_items(id) ON DELETE CASCADE;


--
-- Name: branch_operating_hours branch_operating_hours_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.branch_operating_hours
    ADD CONSTRAINT branch_operating_hours_branch_id_fkey FOREIGN KEY (branch_id) REFERENCES public.store_branches(id) ON DELETE CASCADE;


--
-- Name: cart_item_modifiers cart_item_modifiers_cart_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_item_modifiers
    ADD CONSTRAINT cart_item_modifiers_cart_item_id_fkey FOREIGN KEY (cart_item_id) REFERENCES public.cart_items(id) ON DELETE CASCADE;


--
-- Name: cart_item_modifiers cart_item_modifiers_modifier_group_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_item_modifiers
    ADD CONSTRAINT cart_item_modifiers_modifier_group_id_fkey FOREIGN KEY (modifier_group_id) REFERENCES public.modifier_groups(id) ON DELETE CASCADE;


--
-- Name: cart_item_modifiers cart_item_modifiers_modifier_option_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_item_modifiers
    ADD CONSTRAINT cart_item_modifiers_modifier_option_id_fkey FOREIGN KEY (modifier_option_id) REFERENCES public.modifier_options(id) ON DELETE CASCADE;


--
-- Name: cart_items cart_items_branch_catalog_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_items
    ADD CONSTRAINT cart_items_branch_catalog_item_id_fkey FOREIGN KEY (branch_catalog_item_id) REFERENCES public.branch_catalog_items(id) ON DELETE CASCADE;


--
-- Name: cart_items cart_items_cart_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_items
    ADD CONSTRAINT cart_items_cart_id_fkey FOREIGN KEY (cart_id) REFERENCES public.carts(id) ON DELETE CASCADE;


--
-- Name: cart_items cart_items_catalog_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_items
    ADD CONSTRAINT cart_items_catalog_item_id_fkey FOREIGN KEY (catalog_item_id) REFERENCES public.catalog_items(id) ON DELETE CASCADE;


--
-- Name: cart_items cart_items_variant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_items
    ADD CONSTRAINT cart_items_variant_id_fkey FOREIGN KEY (variant_id) REFERENCES public.catalog_item_variants(id) ON DELETE SET NULL;


--
-- Name: carts carts_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_branch_id_fkey FOREIGN KEY (branch_id) REFERENCES public.store_branches(id) ON DELETE CASCADE;


--
-- Name: carts carts_customer_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_customer_user_id_fkey FOREIGN KEY (customer_user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: carts carts_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id) ON DELETE CASCADE;


--
-- Name: catalog_categories catalog_categories_parent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalog_categories
    ADD CONSTRAINT catalog_categories_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.catalog_categories(id) ON DELETE SET NULL;


--
-- Name: catalog_categories catalog_categories_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalog_categories
    ADD CONSTRAINT catalog_categories_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id) ON DELETE CASCADE;


--
-- Name: catalog_item_modifier_groups catalog_item_modifier_groups_catalog_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalog_item_modifier_groups
    ADD CONSTRAINT catalog_item_modifier_groups_catalog_item_id_fkey FOREIGN KEY (catalog_item_id) REFERENCES public.catalog_items(id) ON DELETE CASCADE;


--
-- Name: catalog_item_modifier_groups catalog_item_modifier_groups_modifier_group_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalog_item_modifier_groups
    ADD CONSTRAINT catalog_item_modifier_groups_modifier_group_id_fkey FOREIGN KEY (modifier_group_id) REFERENCES public.modifier_groups(id) ON DELETE CASCADE;


--
-- Name: catalog_item_variants catalog_item_variants_catalog_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalog_item_variants
    ADD CONSTRAINT catalog_item_variants_catalog_item_id_fkey FOREIGN KEY (catalog_item_id) REFERENCES public.catalog_items(id) ON DELETE CASCADE;


--
-- Name: catalog_items catalog_items_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalog_items
    ADD CONSTRAINT catalog_items_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.catalog_categories(id) ON DELETE SET NULL;


--
-- Name: catalog_items catalog_items_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalog_items
    ADD CONSTRAINT catalog_items_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id) ON DELETE CASCADE;


--
-- Name: combo_items combo_items_child_catalog_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.combo_items
    ADD CONSTRAINT combo_items_child_catalog_item_id_fkey FOREIGN KEY (child_catalog_item_id) REFERENCES public.catalog_items(id) ON DELETE CASCADE;


--
-- Name: combo_items combo_items_combo_catalog_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.combo_items
    ADD CONSTRAINT combo_items_combo_catalog_item_id_fkey FOREIGN KEY (combo_catalog_item_id) REFERENCES public.catalog_items(id) ON DELETE CASCADE;


--
-- Name: customer_profiles customer_profiles_default_address_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_profiles
    ADD CONSTRAINT customer_profiles_default_address_id_fkey FOREIGN KEY (default_address_id) REFERENCES public.addresses(id) ON DELETE SET NULL;


--
-- Name: customer_profiles customer_profiles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_profiles
    ADD CONSTRAINT customer_profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: deliveries deliveries_dropoff_address_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.deliveries
    ADD CONSTRAINT deliveries_dropoff_address_id_fkey FOREIGN KEY (dropoff_address_id) REFERENCES public.addresses(id) ON DELETE RESTRICT;


--
-- Name: deliveries deliveries_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.deliveries
    ADD CONSTRAINT deliveries_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON DELETE CASCADE;


--
-- Name: deliveries deliveries_pickup_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.deliveries
    ADD CONSTRAINT deliveries_pickup_branch_id_fkey FOREIGN KEY (pickup_branch_id) REFERENCES public.store_branches(id) ON DELETE RESTRICT;


--
-- Name: deliveries deliveries_rider_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.deliveries
    ADD CONSTRAINT deliveries_rider_profile_id_fkey FOREIGN KEY (rider_profile_id) REFERENCES public.rider_profiles(id) ON DELETE SET NULL;


--
-- Name: delivery_zones delivery_zones_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.delivery_zones
    ADD CONSTRAINT delivery_zones_branch_id_fkey FOREIGN KEY (branch_id) REFERENCES public.store_branches(id) ON DELETE CASCADE;


--
-- Name: merchant_profiles merchant_profiles_owner_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.merchant_profiles
    ADD CONSTRAINT merchant_profiles_owner_user_id_fkey FOREIGN KEY (owner_user_id) REFERENCES public.users(id) ON DELETE RESTRICT;


--
-- Name: merchant_settlements merchant_settlements_merchant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.merchant_settlements
    ADD CONSTRAINT merchant_settlements_merchant_id_fkey FOREIGN KEY (merchant_id) REFERENCES public.merchant_profiles(id) ON DELETE RESTRICT;


--
-- Name: merchant_users merchant_users_merchant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.merchant_users
    ADD CONSTRAINT merchant_users_merchant_id_fkey FOREIGN KEY (merchant_id) REFERENCES public.merchant_profiles(id) ON DELETE CASCADE;


--
-- Name: merchant_users merchant_users_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.merchant_users
    ADD CONSTRAINT merchant_users_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: modifier_groups modifier_groups_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modifier_groups
    ADD CONSTRAINT modifier_groups_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id) ON DELETE CASCADE;


--
-- Name: modifier_options modifier_options_modifier_group_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modifier_options
    ADD CONSTRAINT modifier_options_modifier_group_id_fkey FOREIGN KEY (modifier_group_id) REFERENCES public.modifier_groups(id) ON DELETE CASCADE;


--
-- Name: order_item_modifiers order_item_modifiers_order_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_item_modifiers
    ADD CONSTRAINT order_item_modifiers_order_item_id_fkey FOREIGN KEY (order_item_id) REFERENCES public.order_items(id) ON DELETE CASCADE;


--
-- Name: order_items order_items_branch_catalog_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_branch_catalog_item_id_fkey FOREIGN KEY (branch_catalog_item_id) REFERENCES public.branch_catalog_items(id) ON DELETE SET NULL;


--
-- Name: order_items order_items_catalog_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_catalog_item_id_fkey FOREIGN KEY (catalog_item_id) REFERENCES public.catalog_items(id) ON DELETE RESTRICT;


--
-- Name: order_items order_items_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON DELETE CASCADE;


--
-- Name: order_items order_items_variant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_variant_id_fkey FOREIGN KEY (variant_id) REFERENCES public.catalog_item_variants(id) ON DELETE SET NULL;


--
-- Name: order_status_history order_status_history_changed_by_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_status_history
    ADD CONSTRAINT order_status_history_changed_by_user_id_fkey FOREIGN KEY (changed_by_user_id) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- Name: order_status_history order_status_history_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_status_history
    ADD CONSTRAINT order_status_history_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON DELETE CASCADE;


--
-- Name: orders orders_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_branch_id_fkey FOREIGN KEY (branch_id) REFERENCES public.store_branches(id) ON DELETE RESTRICT;


--
-- Name: orders orders_customer_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_customer_user_id_fkey FOREIGN KEY (customer_user_id) REFERENCES public.users(id) ON DELETE RESTRICT;


--
-- Name: orders orders_delivery_address_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_delivery_address_id_fkey FOREIGN KEY (delivery_address_id) REFERENCES public.addresses(id) ON DELETE RESTRICT;


--
-- Name: orders orders_rider_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_rider_user_id_fkey FOREIGN KEY (rider_user_id) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- Name: orders orders_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id) ON DELETE RESTRICT;


--
-- Name: otp_verifications otp_verifications_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.otp_verifications
    ADD CONSTRAINT otp_verifications_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- Name: payments payments_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON DELETE RESTRICT;


--
-- Name: payments payments_payment_method_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_payment_method_id_fkey FOREIGN KEY (payment_method_id) REFERENCES public.payment_methods(id) ON DELETE RESTRICT;


--
-- Name: rider_locations rider_locations_rider_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rider_locations
    ADD CONSTRAINT rider_locations_rider_profile_id_fkey FOREIGN KEY (rider_profile_id) REFERENCES public.rider_profiles(id) ON DELETE CASCADE;


--
-- Name: rider_profiles rider_profiles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rider_profiles
    ADD CONSTRAINT rider_profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: rider_settlements rider_settlements_rider_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rider_settlements
    ADD CONSTRAINT rider_settlements_rider_profile_id_fkey FOREIGN KEY (rider_profile_id) REFERENCES public.rider_profiles(id) ON DELETE RESTRICT;


--
-- Name: store_branches store_branches_address_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.store_branches
    ADD CONSTRAINT store_branches_address_id_fkey FOREIGN KEY (address_id) REFERENCES public.addresses(id) ON DELETE RESTRICT;


--
-- Name: store_branches store_branches_manager_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.store_branches
    ADD CONSTRAINT store_branches_manager_user_id_fkey FOREIGN KEY (manager_user_id) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- Name: store_branches store_branches_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.store_branches
    ADD CONSTRAINT store_branches_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id) ON DELETE CASCADE;


--
-- Name: stores stores_business_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stores
    ADD CONSTRAINT stores_business_category_id_fkey FOREIGN KEY (business_category_id) REFERENCES public.business_categories(id) ON DELETE RESTRICT;


--
-- Name: stores stores_merchant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stores
    ADD CONSTRAINT stores_merchant_id_fkey FOREIGN KEY (merchant_id) REFERENCES public.merchant_profiles(id) ON DELETE CASCADE;


--
-- Name: user_roles user_roles_role_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(id) ON DELETE CASCADE;


--
-- Name: user_roles user_roles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: user_sessions user_sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_sessions
    ADD CONSTRAINT user_sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--
