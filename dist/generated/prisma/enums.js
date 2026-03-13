"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zone_type_enum = exports.vehicle_type_enum = exports.user_status_type = exports.store_status_type = exports.status_change_source_type = exports.source_channel_type = exports.settlement_status_type = exports.service_mode_type = exports.role_scope_type = exports.rider_status_type = exports.promotion_applies_to_type = exports.payment_status_type = exports.payment_record_status_type = exports.otp_purpose_type = exports.otp_channel_type = exports.order_type_enum = exports.order_status_type = exports.merchant_user_role_type = exports.merchant_status_type = exports.item_type_enum = exports.fulfillment_status_type = exports.discount_type_enum = exports.delivery_status_type = exports.catalog_mode_type = exports.cart_status_type = exports.branch_status_type = exports.availability_mode_type = exports.auth_provider_type = void 0;
exports.auth_provider_type = {
    phone: 'phone',
    google: 'google',
    email: 'email'
};
exports.availability_mode_type = {
    stock: 'stock',
    manual: 'manual',
    schedule: 'schedule'
};
exports.branch_status_type = {
    active: 'active',
    paused: 'paused',
    closed: 'closed',
    suspended: 'suspended'
};
exports.cart_status_type = {
    active: 'active',
    converted: 'converted',
    abandoned: 'abandoned'
};
exports.catalog_mode_type = {
    retail: 'retail',
    food: 'food',
    hybrid: 'hybrid'
};
exports.delivery_status_type = {
    pending_assignment: 'pending_assignment',
    assigned: 'assigned',
    arrived_pickup: 'arrived_pickup',
    picked_up: 'picked_up',
    on_the_way: 'on_the_way',
    delivered: 'delivered',
    failed: 'failed',
    returned: 'returned'
};
exports.discount_type_enum = {
    fixed: 'fixed',
    percent: 'percent',
    free_delivery: 'free_delivery'
};
exports.fulfillment_status_type = {
    pending: 'pending',
    preparing: 'preparing',
    ready_for_pickup: 'ready_for_pickup',
    rider_assigned: 'rider_assigned',
    picked_up: 'picked_up',
    on_the_way: 'on_the_way',
    delivered: 'delivered',
    cancelled: 'cancelled',
    failed: 'failed'
};
exports.item_type_enum = {
    retail_product: 'retail_product',
    food_item: 'food_item',
    combo: 'combo'
};
exports.merchant_status_type = {
    onboarding: 'onboarding',
    active: 'active',
    paused: 'paused',
    suspended: 'suspended'
};
exports.merchant_user_role_type = {
    owner: 'owner',
    admin: 'admin',
    operator: 'operator',
    finance: 'finance',
    viewer: 'viewer'
};
exports.order_status_type = {
    created: 'created',
    pending_store_acceptance: 'pending_store_acceptance',
    accepted_by_store: 'accepted_by_store',
    rejected_by_store: 'rejected_by_store',
    preparing: 'preparing',
    ready_for_pickup: 'ready_for_pickup',
    rider_assigned: 'rider_assigned',
    picked_up: 'picked_up',
    on_the_way: 'on_the_way',
    delivered: 'delivered',
    cancelled: 'cancelled',
    failed_delivery: 'failed_delivery',
    returned_to_store: 'returned_to_store'
};
exports.order_type_enum = {
    delivery: 'delivery',
    pickup: 'pickup'
};
exports.otp_channel_type = {
    sms: 'sms',
    whatsapp: 'whatsapp',
    email: 'email'
};
exports.otp_purpose_type = {
    register: 'register',
    login: 'login',
    verify_phone: 'verify_phone',
    reset_password: 'reset_password'
};
exports.payment_record_status_type = {
    pending: 'pending',
    paid: 'paid',
    failed: 'failed',
    refunded: 'refunded',
    partially_refunded: 'partially_refunded'
};
exports.payment_status_type = {
    pending: 'pending',
    paid: 'paid',
    failed: 'failed',
    refunded: 'refunded',
    partially_refunded: 'partially_refunded'
};
exports.promotion_applies_to_type = {
    order: 'order',
    delivery: 'delivery',
    item: 'item',
    store: 'store'
};
exports.rider_status_type = {
    pending_review: 'pending_review',
    active: 'active',
    paused: 'paused',
    suspended: 'suspended',
    rejected: 'rejected'
};
exports.role_scope_type = {
    platform: 'platform',
    merchant: 'merchant',
    store_branch: 'store_branch'
};
exports.service_mode_type = {
    delivery: 'delivery',
    pickup: 'pickup',
    both: 'both'
};
exports.settlement_status_type = {
    pending: 'pending',
    approved: 'approved',
    paid: 'paid'
};
exports.source_channel_type = {
    app: 'app',
    web: 'web',
    admin: 'admin'
};
exports.status_change_source_type = {
    system: 'system',
    customer: 'customer',
    store: 'store',
    rider: 'rider',
    admin: 'admin'
};
exports.store_status_type = {
    draft: 'draft',
    active: 'active',
    paused: 'paused',
    suspended: 'suspended'
};
exports.user_status_type = {
    pending: 'pending',
    active: 'active',
    suspended: 'suspended',
    deleted: 'deleted'
};
exports.vehicle_type_enum = {
    bici: 'bici',
    moto: 'moto',
    auto: 'auto'
};
exports.zone_type_enum = {
    radius: 'radius',
    polygon: 'polygon'
};
//# sourceMappingURL=enums.js.map