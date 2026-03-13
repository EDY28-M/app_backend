"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rider_profilesScalarFieldEnum = exports.Rider_locationsScalarFieldEnum = exports.PromotionsScalarFieldEnum = exports.PaymentsScalarFieldEnum = exports.Payment_methodsScalarFieldEnum = exports.Otp_verificationsScalarFieldEnum = exports.OrdersScalarFieldEnum = exports.Order_status_historyScalarFieldEnum = exports.Order_itemsScalarFieldEnum = exports.Order_item_modifiersScalarFieldEnum = exports.Modifier_optionsScalarFieldEnum = exports.Modifier_groupsScalarFieldEnum = exports.Merchant_usersScalarFieldEnum = exports.Merchant_settlementsScalarFieldEnum = exports.Merchant_profilesScalarFieldEnum = exports.Delivery_zonesScalarFieldEnum = exports.DeliveriesScalarFieldEnum = exports.Customer_profilesScalarFieldEnum = exports.Combo_itemsScalarFieldEnum = exports.Catalog_itemsScalarFieldEnum = exports.Catalog_item_variantsScalarFieldEnum = exports.Catalog_item_modifier_groupsScalarFieldEnum = exports.Catalog_categoriesScalarFieldEnum = exports.CartsScalarFieldEnum = exports.Cart_itemsScalarFieldEnum = exports.Cart_item_modifiersScalarFieldEnum = exports.Business_categoriesScalarFieldEnum = exports.Branch_operating_hoursScalarFieldEnum = exports.Branch_item_schedulesScalarFieldEnum = exports.Branch_catalog_itemsScalarFieldEnum = exports.AddressesScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
exports.defineExtension = exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.UsersScalarFieldEnum = exports.User_sessionsScalarFieldEnum = exports.User_rolesScalarFieldEnum = exports.StoresScalarFieldEnum = exports.Store_branchesScalarFieldEnum = exports.RolesScalarFieldEnum = exports.Rider_settlementsScalarFieldEnum = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.5.0",
    engine: "280c870be64f457428992c43c1f6d557fab6e29e"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    addresses: 'addresses',
    branch_catalog_items: 'branch_catalog_items',
    branch_item_schedules: 'branch_item_schedules',
    branch_operating_hours: 'branch_operating_hours',
    business_categories: 'business_categories',
    cart_item_modifiers: 'cart_item_modifiers',
    cart_items: 'cart_items',
    carts: 'carts',
    catalog_categories: 'catalog_categories',
    catalog_item_modifier_groups: 'catalog_item_modifier_groups',
    catalog_item_variants: 'catalog_item_variants',
    catalog_items: 'catalog_items',
    combo_items: 'combo_items',
    customer_profiles: 'customer_profiles',
    deliveries: 'deliveries',
    delivery_zones: 'delivery_zones',
    merchant_profiles: 'merchant_profiles',
    merchant_settlements: 'merchant_settlements',
    merchant_users: 'merchant_users',
    modifier_groups: 'modifier_groups',
    modifier_options: 'modifier_options',
    order_item_modifiers: 'order_item_modifiers',
    order_items: 'order_items',
    order_status_history: 'order_status_history',
    orders: 'orders',
    otp_verifications: 'otp_verifications',
    payment_methods: 'payment_methods',
    payments: 'payments',
    promotions: 'promotions',
    rider_locations: 'rider_locations',
    rider_profiles: 'rider_profiles',
    rider_settlements: 'rider_settlements',
    roles: 'roles',
    store_branches: 'store_branches',
    stores: 'stores',
    user_roles: 'user_roles',
    user_sessions: 'user_sessions',
    users: 'users'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.AddressesScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    label: 'label',
    contact_name: 'contact_name',
    contact_phone: 'contact_phone',
    country_code: 'country_code',
    region: 'region',
    province: 'province',
    district: 'district',
    city: 'city',
    address_line1: 'address_line1',
    address_line2: 'address_line2',
    reference: 'reference',
    latitude: 'latitude',
    longitude: 'longitude',
    is_default: 'is_default',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Branch_catalog_itemsScalarFieldEnum = {
    id: 'id',
    branch_id: 'branch_id',
    catalog_item_id: 'catalog_item_id',
    variant_id: 'variant_id',
    price_amount: 'price_amount',
    compare_at_amount: 'compare_at_amount',
    stock_qty: 'stock_qty',
    reserved_qty: 'reserved_qty',
    is_available: 'is_available',
    availability_mode: 'availability_mode',
    prep_time_minutes: 'prep_time_minutes',
    sort_order: 'sort_order',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Branch_item_schedulesScalarFieldEnum = {
    id: 'id',
    branch_catalog_item_id: 'branch_catalog_item_id',
    day_of_week: 'day_of_week',
    start_time: 'start_time',
    end_time: 'end_time',
    is_active: 'is_active',
    created_at: 'created_at'
};
exports.Branch_operating_hoursScalarFieldEnum = {
    id: 'id',
    branch_id: 'branch_id',
    day_of_week: 'day_of_week',
    open_time: 'open_time',
    close_time: 'close_time',
    is_closed: 'is_closed',
    created_at: 'created_at'
};
exports.Business_categoriesScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name',
    is_active: 'is_active',
    created_at: 'created_at'
};
exports.Cart_item_modifiersScalarFieldEnum = {
    id: 'id',
    cart_item_id: 'cart_item_id',
    modifier_group_id: 'modifier_group_id',
    modifier_option_id: 'modifier_option_id',
    qty: 'qty',
    price_delta_amount: 'price_delta_amount',
    created_at: 'created_at'
};
exports.Cart_itemsScalarFieldEnum = {
    id: 'id',
    cart_id: 'cart_id',
    catalog_item_id: 'catalog_item_id',
    variant_id: 'variant_id',
    branch_catalog_item_id: 'branch_catalog_item_id',
    qty: 'qty',
    unit_price_amount: 'unit_price_amount',
    notes: 'notes',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.CartsScalarFieldEnum = {
    id: 'id',
    customer_user_id: 'customer_user_id',
    store_id: 'store_id',
    branch_id: 'branch_id',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Catalog_categoriesScalarFieldEnum = {
    id: 'id',
    store_id: 'store_id',
    parent_id: 'parent_id',
    name: 'name',
    slug: 'slug',
    sort_order: 'sort_order',
    is_active: 'is_active',
    created_at: 'created_at'
};
exports.Catalog_item_modifier_groupsScalarFieldEnum = {
    id: 'id',
    catalog_item_id: 'catalog_item_id',
    modifier_group_id: 'modifier_group_id',
    sort_order: 'sort_order'
};
exports.Catalog_item_variantsScalarFieldEnum = {
    id: 'id',
    catalog_item_id: 'catalog_item_id',
    name: 'name',
    sku: 'sku',
    barcode: 'barcode',
    price_modifier_amount: 'price_modifier_amount',
    is_default: 'is_default',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Catalog_itemsScalarFieldEnum = {
    id: 'id',
    store_id: 'store_id',
    category_id: 'category_id',
    item_type: 'item_type',
    name: 'name',
    slug: 'slug',
    description: 'description',
    image_url: 'image_url',
    sku: 'sku',
    barcode: 'barcode',
    brand: 'brand',
    unit_label: 'unit_label',
    base_price_amount: 'base_price_amount',
    requires_age_verification: 'requires_age_verification',
    allows_notes: 'allows_notes',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Combo_itemsScalarFieldEnum = {
    id: 'id',
    combo_catalog_item_id: 'combo_catalog_item_id',
    child_catalog_item_id: 'child_catalog_item_id',
    default_qty: 'default_qty',
    is_required: 'is_required',
    sort_order: 'sort_order',
    created_at: 'created_at'
};
exports.Customer_profilesScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    default_address_id: 'default_address_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.DeliveriesScalarFieldEnum = {
    id: 'id',
    order_id: 'order_id',
    rider_profile_id: 'rider_profile_id',
    pickup_branch_id: 'pickup_branch_id',
    dropoff_address_id: 'dropoff_address_id',
    status: 'status',
    distance_km: 'distance_km',
    estimated_minutes: 'estimated_minutes',
    assigned_at: 'assigned_at',
    picked_up_at: 'picked_up_at',
    delivered_at: 'delivered_at',
    failed_at: 'failed_at',
    failure_reason: 'failure_reason',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Delivery_zonesScalarFieldEnum = {
    id: 'id',
    branch_id: 'branch_id',
    name: 'name',
    zone_type: 'zone_type',
    center_lat: 'center_lat',
    center_lng: 'center_lng',
    radius_meters: 'radius_meters',
    polygon_geojson: 'polygon_geojson',
    base_fee_amount: 'base_fee_amount',
    per_km_fee_amount: 'per_km_fee_amount',
    min_eta_minutes: 'min_eta_minutes',
    max_eta_minutes: 'max_eta_minutes',
    is_active: 'is_active',
    priority: 'priority',
    created_at: 'created_at'
};
exports.Merchant_profilesScalarFieldEnum = {
    id: 'id',
    owner_user_id: 'owner_user_id',
    business_name: 'business_name',
    legal_name: 'legal_name',
    tax_id: 'tax_id',
    billing_email: 'billing_email',
    phone_e164: 'phone_e164',
    logo_url: 'logo_url',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Merchant_settlementsScalarFieldEnum = {
    id: 'id',
    merchant_id: 'merchant_id',
    period_start: 'period_start',
    period_end: 'period_end',
    gross_sales_amount: 'gross_sales_amount',
    commission_amount: 'commission_amount',
    delivery_fee_collected: 'delivery_fee_collected',
    service_fee_collected: 'service_fee_collected',
    adjustments_amount: 'adjustments_amount',
    net_payable_amount: 'net_payable_amount',
    status: 'status',
    generated_at: 'generated_at',
    paid_at: 'paid_at'
};
exports.Merchant_usersScalarFieldEnum = {
    id: 'id',
    merchant_id: 'merchant_id',
    user_id: 'user_id',
    role_code: 'role_code',
    status: 'status',
    created_at: 'created_at'
};
exports.Modifier_groupsScalarFieldEnum = {
    id: 'id',
    store_id: 'store_id',
    name: 'name',
    min_select: 'min_select',
    max_select: 'max_select',
    is_required: 'is_required',
    sort_order: 'sort_order',
    is_active: 'is_active',
    created_at: 'created_at'
};
exports.Modifier_optionsScalarFieldEnum = {
    id: 'id',
    modifier_group_id: 'modifier_group_id',
    name: 'name',
    price_delta_amount: 'price_delta_amount',
    is_default: 'is_default',
    is_active: 'is_active',
    sort_order: 'sort_order',
    created_at: 'created_at'
};
exports.Order_item_modifiersScalarFieldEnum = {
    id: 'id',
    order_item_id: 'order_item_id',
    modifier_group_name_snapshot: 'modifier_group_name_snapshot',
    modifier_option_name_snapshot: 'modifier_option_name_snapshot',
    qty: 'qty',
    unit_price_delta_amount: 'unit_price_delta_amount',
    created_at: 'created_at'
};
exports.Order_itemsScalarFieldEnum = {
    id: 'id',
    order_id: 'order_id',
    catalog_item_id: 'catalog_item_id',
    variant_id: 'variant_id',
    branch_catalog_item_id: 'branch_catalog_item_id',
    item_type: 'item_type',
    item_name_snapshot: 'item_name_snapshot',
    variant_name_snapshot: 'variant_name_snapshot',
    sku_snapshot: 'sku_snapshot',
    base_unit_price_amount: 'base_unit_price_amount',
    modifier_unit_total_amount: 'modifier_unit_total_amount',
    qty: 'qty',
    line_total_amount: 'line_total_amount',
    notes: 'notes',
    created_at: 'created_at'
};
exports.Order_status_historyScalarFieldEnum = {
    id: 'id',
    order_id: 'order_id',
    old_status: 'old_status',
    new_status: 'new_status',
    changed_by_user_id: 'changed_by_user_id',
    source: 'source',
    notes: 'notes',
    created_at: 'created_at'
};
exports.OrdersScalarFieldEnum = {
    id: 'id',
    order_code: 'order_code',
    customer_user_id: 'customer_user_id',
    store_id: 'store_id',
    branch_id: 'branch_id',
    rider_user_id: 'rider_user_id',
    delivery_address_id: 'delivery_address_id',
    source_channel: 'source_channel',
    order_type: 'order_type',
    business_category_snapshot: 'business_category_snapshot',
    status: 'status',
    payment_status: 'payment_status',
    fulfillment_status: 'fulfillment_status',
    subtotal_amount: 'subtotal_amount',
    modifier_total_amount: 'modifier_total_amount',
    discount_amount: 'discount_amount',
    delivery_fee_amount: 'delivery_fee_amount',
    service_fee_amount: 'service_fee_amount',
    tip_amount: 'tip_amount',
    total_amount: 'total_amount',
    notes: 'notes',
    customer_name_snapshot: 'customer_name_snapshot',
    customer_phone_snapshot: 'customer_phone_snapshot',
    scheduled_for: 'scheduled_for',
    accepted_at: 'accepted_at',
    preparing_at: 'preparing_at',
    ready_for_pickup_at: 'ready_for_pickup_at',
    rider_assigned_at: 'rider_assigned_at',
    picked_up_at: 'picked_up_at',
    delivered_at: 'delivered_at',
    cancelled_at: 'cancelled_at',
    cancellation_reason: 'cancellation_reason',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Otp_verificationsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    target: 'target',
    channel: 'channel',
    purpose: 'purpose',
    code_hash: 'code_hash',
    expires_at: 'expires_at',
    consumed_at: 'consumed_at',
    created_at: 'created_at'
};
exports.Payment_methodsScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name',
    is_active: 'is_active',
    created_at: 'created_at'
};
exports.PaymentsScalarFieldEnum = {
    id: 'id',
    order_id: 'order_id',
    payment_method_id: 'payment_method_id',
    provider: 'provider',
    provider_transaction_id: 'provider_transaction_id',
    status: 'status',
    amount: 'amount',
    paid_at: 'paid_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.PromotionsScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name',
    discount_type: 'discount_type',
    discount_value: 'discount_value',
    applies_to: 'applies_to',
    starts_at: 'starts_at',
    ends_at: 'ends_at',
    is_active: 'is_active',
    created_at: 'created_at'
};
exports.Rider_locationsScalarFieldEnum = {
    id: 'id',
    rider_profile_id: 'rider_profile_id',
    latitude: 'latitude',
    longitude: 'longitude',
    heading: 'heading',
    speed_kph: 'speed_kph',
    accuracy_meters: 'accuracy_meters',
    recorded_at: 'recorded_at'
};
exports.Rider_profilesScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    document_type: 'document_type',
    document_number: 'document_number',
    vehicle_type: 'vehicle_type',
    vehicle_plate: 'vehicle_plate',
    status: 'status',
    is_online: 'is_online',
    is_available: 'is_available',
    rating_avg: 'rating_avg',
    total_deliveries: 'total_deliveries',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Rider_settlementsScalarFieldEnum = {
    id: 'id',
    rider_profile_id: 'rider_profile_id',
    period_start: 'period_start',
    period_end: 'period_end',
    deliveries_count: 'deliveries_count',
    total_earnings_amount: 'total_earnings_amount',
    bonuses_amount: 'bonuses_amount',
    penalties_amount: 'penalties_amount',
    net_payable_amount: 'net_payable_amount',
    status: 'status',
    generated_at: 'generated_at',
    paid_at: 'paid_at'
};
exports.RolesScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    created_at: 'created_at'
};
exports.Store_branchesScalarFieldEnum = {
    id: 'id',
    store_id: 'store_id',
    address_id: 'address_id',
    name: 'name',
    phone_e164: 'phone_e164',
    manager_user_id: 'manager_user_id',
    status: 'status',
    accepts_orders: 'accepts_orders',
    avg_prep_time_minutes: 'avg_prep_time_minutes',
    max_concurrent_orders: 'max_concurrent_orders',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.StoresScalarFieldEnum = {
    id: 'id',
    merchant_id: 'merchant_id',
    business_category_id: 'business_category_id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    logo_url: 'logo_url',
    cover_image_url: 'cover_image_url',
    service_mode: 'service_mode',
    catalog_mode: 'catalog_mode',
    status: 'status',
    avg_rating: 'avg_rating',
    total_reviews: 'total_reviews',
    min_order_amount: 'min_order_amount',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.User_rolesScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    role_id: 'role_id',
    scope_type: 'scope_type',
    scope_id: 'scope_id',
    created_at: 'created_at'
};
exports.User_sessionsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    refresh_token_hash: 'refresh_token_hash',
    device_name: 'device_name',
    device_os: 'device_os',
    app_version: 'app_version',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    expires_at: 'expires_at',
    revoked_at: 'revoked_at',
    created_at: 'created_at'
};
exports.UsersScalarFieldEnum = {
    id: 'id',
    phone_e164: 'phone_e164',
    email: 'email',
    password_hash: 'password_hash',
    auth_provider: 'auth_provider',
    google_sub: 'google_sub',
    first_name: 'first_name',
    last_name: 'last_name',
    photo_url: 'photo_url',
    status: 'status',
    is_phone_verified: 'is_phone_verified',
    is_email_verified: 'is_email_verified',
    last_login_at: 'last_login_at',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map