export declare const auth_provider_type: {
    readonly phone: "phone";
    readonly google: "google";
    readonly email: "email";
};
export type auth_provider_type = (typeof auth_provider_type)[keyof typeof auth_provider_type];
export declare const availability_mode_type: {
    readonly stock: "stock";
    readonly manual: "manual";
    readonly schedule: "schedule";
};
export type availability_mode_type = (typeof availability_mode_type)[keyof typeof availability_mode_type];
export declare const branch_status_type: {
    readonly active: "active";
    readonly paused: "paused";
    readonly closed: "closed";
    readonly suspended: "suspended";
};
export type branch_status_type = (typeof branch_status_type)[keyof typeof branch_status_type];
export declare const cart_status_type: {
    readonly active: "active";
    readonly converted: "converted";
    readonly abandoned: "abandoned";
};
export type cart_status_type = (typeof cart_status_type)[keyof typeof cart_status_type];
export declare const catalog_mode_type: {
    readonly retail: "retail";
    readonly food: "food";
    readonly hybrid: "hybrid";
};
export type catalog_mode_type = (typeof catalog_mode_type)[keyof typeof catalog_mode_type];
export declare const delivery_status_type: {
    readonly pending_assignment: "pending_assignment";
    readonly assigned: "assigned";
    readonly arrived_pickup: "arrived_pickup";
    readonly picked_up: "picked_up";
    readonly on_the_way: "on_the_way";
    readonly delivered: "delivered";
    readonly failed: "failed";
    readonly returned: "returned";
};
export type delivery_status_type = (typeof delivery_status_type)[keyof typeof delivery_status_type];
export declare const discount_type_enum: {
    readonly fixed: "fixed";
    readonly percent: "percent";
    readonly free_delivery: "free_delivery";
};
export type discount_type_enum = (typeof discount_type_enum)[keyof typeof discount_type_enum];
export declare const fulfillment_status_type: {
    readonly pending: "pending";
    readonly preparing: "preparing";
    readonly ready_for_pickup: "ready_for_pickup";
    readonly rider_assigned: "rider_assigned";
    readonly picked_up: "picked_up";
    readonly on_the_way: "on_the_way";
    readonly delivered: "delivered";
    readonly cancelled: "cancelled";
    readonly failed: "failed";
};
export type fulfillment_status_type = (typeof fulfillment_status_type)[keyof typeof fulfillment_status_type];
export declare const item_type_enum: {
    readonly retail_product: "retail_product";
    readonly food_item: "food_item";
    readonly combo: "combo";
};
export type item_type_enum = (typeof item_type_enum)[keyof typeof item_type_enum];
export declare const merchant_status_type: {
    readonly onboarding: "onboarding";
    readonly active: "active";
    readonly paused: "paused";
    readonly suspended: "suspended";
};
export type merchant_status_type = (typeof merchant_status_type)[keyof typeof merchant_status_type];
export declare const merchant_user_role_type: {
    readonly owner: "owner";
    readonly admin: "admin";
    readonly operator: "operator";
    readonly finance: "finance";
    readonly viewer: "viewer";
};
export type merchant_user_role_type = (typeof merchant_user_role_type)[keyof typeof merchant_user_role_type];
export declare const order_status_type: {
    readonly created: "created";
    readonly pending_store_acceptance: "pending_store_acceptance";
    readonly accepted_by_store: "accepted_by_store";
    readonly rejected_by_store: "rejected_by_store";
    readonly preparing: "preparing";
    readonly ready_for_pickup: "ready_for_pickup";
    readonly rider_assigned: "rider_assigned";
    readonly picked_up: "picked_up";
    readonly on_the_way: "on_the_way";
    readonly delivered: "delivered";
    readonly cancelled: "cancelled";
    readonly failed_delivery: "failed_delivery";
    readonly returned_to_store: "returned_to_store";
};
export type order_status_type = (typeof order_status_type)[keyof typeof order_status_type];
export declare const order_type_enum: {
    readonly delivery: "delivery";
    readonly pickup: "pickup";
};
export type order_type_enum = (typeof order_type_enum)[keyof typeof order_type_enum];
export declare const otp_channel_type: {
    readonly sms: "sms";
    readonly whatsapp: "whatsapp";
    readonly email: "email";
};
export type otp_channel_type = (typeof otp_channel_type)[keyof typeof otp_channel_type];
export declare const otp_purpose_type: {
    readonly register: "register";
    readonly login: "login";
    readonly verify_phone: "verify_phone";
    readonly reset_password: "reset_password";
};
export type otp_purpose_type = (typeof otp_purpose_type)[keyof typeof otp_purpose_type];
export declare const payment_record_status_type: {
    readonly pending: "pending";
    readonly paid: "paid";
    readonly failed: "failed";
    readonly refunded: "refunded";
    readonly partially_refunded: "partially_refunded";
};
export type payment_record_status_type = (typeof payment_record_status_type)[keyof typeof payment_record_status_type];
export declare const payment_status_type: {
    readonly pending: "pending";
    readonly paid: "paid";
    readonly failed: "failed";
    readonly refunded: "refunded";
    readonly partially_refunded: "partially_refunded";
};
export type payment_status_type = (typeof payment_status_type)[keyof typeof payment_status_type];
export declare const promotion_applies_to_type: {
    readonly order: "order";
    readonly delivery: "delivery";
    readonly item: "item";
    readonly store: "store";
};
export type promotion_applies_to_type = (typeof promotion_applies_to_type)[keyof typeof promotion_applies_to_type];
export declare const rider_status_type: {
    readonly pending_review: "pending_review";
    readonly active: "active";
    readonly paused: "paused";
    readonly suspended: "suspended";
    readonly rejected: "rejected";
};
export type rider_status_type = (typeof rider_status_type)[keyof typeof rider_status_type];
export declare const role_scope_type: {
    readonly platform: "platform";
    readonly merchant: "merchant";
    readonly store_branch: "store_branch";
};
export type role_scope_type = (typeof role_scope_type)[keyof typeof role_scope_type];
export declare const service_mode_type: {
    readonly delivery: "delivery";
    readonly pickup: "pickup";
    readonly both: "both";
};
export type service_mode_type = (typeof service_mode_type)[keyof typeof service_mode_type];
export declare const settlement_status_type: {
    readonly pending: "pending";
    readonly approved: "approved";
    readonly paid: "paid";
};
export type settlement_status_type = (typeof settlement_status_type)[keyof typeof settlement_status_type];
export declare const source_channel_type: {
    readonly app: "app";
    readonly web: "web";
    readonly admin: "admin";
};
export type source_channel_type = (typeof source_channel_type)[keyof typeof source_channel_type];
export declare const status_change_source_type: {
    readonly system: "system";
    readonly customer: "customer";
    readonly store: "store";
    readonly rider: "rider";
    readonly admin: "admin";
};
export type status_change_source_type = (typeof status_change_source_type)[keyof typeof status_change_source_type];
export declare const store_status_type: {
    readonly draft: "draft";
    readonly active: "active";
    readonly paused: "paused";
    readonly suspended: "suspended";
};
export type store_status_type = (typeof store_status_type)[keyof typeof store_status_type];
export declare const user_status_type: {
    readonly pending: "pending";
    readonly active: "active";
    readonly suspended: "suspended";
    readonly deleted: "deleted";
};
export type user_status_type = (typeof user_status_type)[keyof typeof user_status_type];
export declare const vehicle_type_enum: {
    readonly bici: "bici";
    readonly moto: "moto";
    readonly auto: "auto";
};
export type vehicle_type_enum = (typeof vehicle_type_enum)[keyof typeof vehicle_type_enum];
export declare const zone_type_enum: {
    readonly radius: "radius";
    readonly polygon: "polygon";
};
export type zone_type_enum = (typeof zone_type_enum)[keyof typeof zone_type_enum];
