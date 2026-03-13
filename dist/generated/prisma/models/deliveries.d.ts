import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type deliveriesModel = runtime.Types.Result.DefaultSelection<Prisma.$deliveriesPayload>;
export type AggregateDeliveries = {
    _count: DeliveriesCountAggregateOutputType | null;
    _avg: DeliveriesAvgAggregateOutputType | null;
    _sum: DeliveriesSumAggregateOutputType | null;
    _min: DeliveriesMinAggregateOutputType | null;
    _max: DeliveriesMaxAggregateOutputType | null;
};
export type DeliveriesAvgAggregateOutputType = {
    distance_km: runtime.Decimal | null;
    estimated_minutes: number | null;
};
export type DeliveriesSumAggregateOutputType = {
    distance_km: runtime.Decimal | null;
    estimated_minutes: number | null;
};
export type DeliveriesMinAggregateOutputType = {
    id: string | null;
    order_id: string | null;
    rider_profile_id: string | null;
    pickup_branch_id: string | null;
    dropoff_address_id: string | null;
    status: $Enums.delivery_status_type | null;
    distance_km: runtime.Decimal | null;
    estimated_minutes: number | null;
    assigned_at: Date | null;
    picked_up_at: Date | null;
    delivered_at: Date | null;
    failed_at: Date | null;
    failure_reason: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type DeliveriesMaxAggregateOutputType = {
    id: string | null;
    order_id: string | null;
    rider_profile_id: string | null;
    pickup_branch_id: string | null;
    dropoff_address_id: string | null;
    status: $Enums.delivery_status_type | null;
    distance_km: runtime.Decimal | null;
    estimated_minutes: number | null;
    assigned_at: Date | null;
    picked_up_at: Date | null;
    delivered_at: Date | null;
    failed_at: Date | null;
    failure_reason: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type DeliveriesCountAggregateOutputType = {
    id: number;
    order_id: number;
    rider_profile_id: number;
    pickup_branch_id: number;
    dropoff_address_id: number;
    status: number;
    distance_km: number;
    estimated_minutes: number;
    assigned_at: number;
    picked_up_at: number;
    delivered_at: number;
    failed_at: number;
    failure_reason: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type DeliveriesAvgAggregateInputType = {
    distance_km?: true;
    estimated_minutes?: true;
};
export type DeliveriesSumAggregateInputType = {
    distance_km?: true;
    estimated_minutes?: true;
};
export type DeliveriesMinAggregateInputType = {
    id?: true;
    order_id?: true;
    rider_profile_id?: true;
    pickup_branch_id?: true;
    dropoff_address_id?: true;
    status?: true;
    distance_km?: true;
    estimated_minutes?: true;
    assigned_at?: true;
    picked_up_at?: true;
    delivered_at?: true;
    failed_at?: true;
    failure_reason?: true;
    created_at?: true;
    updated_at?: true;
};
export type DeliveriesMaxAggregateInputType = {
    id?: true;
    order_id?: true;
    rider_profile_id?: true;
    pickup_branch_id?: true;
    dropoff_address_id?: true;
    status?: true;
    distance_km?: true;
    estimated_minutes?: true;
    assigned_at?: true;
    picked_up_at?: true;
    delivered_at?: true;
    failed_at?: true;
    failure_reason?: true;
    created_at?: true;
    updated_at?: true;
};
export type DeliveriesCountAggregateInputType = {
    id?: true;
    order_id?: true;
    rider_profile_id?: true;
    pickup_branch_id?: true;
    dropoff_address_id?: true;
    status?: true;
    distance_km?: true;
    estimated_minutes?: true;
    assigned_at?: true;
    picked_up_at?: true;
    delivered_at?: true;
    failed_at?: true;
    failure_reason?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type DeliveriesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.deliveriesWhereInput;
    orderBy?: Prisma.deliveriesOrderByWithRelationInput | Prisma.deliveriesOrderByWithRelationInput[];
    cursor?: Prisma.deliveriesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DeliveriesCountAggregateInputType;
    _avg?: DeliveriesAvgAggregateInputType;
    _sum?: DeliveriesSumAggregateInputType;
    _min?: DeliveriesMinAggregateInputType;
    _max?: DeliveriesMaxAggregateInputType;
};
export type GetDeliveriesAggregateType<T extends DeliveriesAggregateArgs> = {
    [P in keyof T & keyof AggregateDeliveries]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDeliveries[P]> : Prisma.GetScalarType<T[P], AggregateDeliveries[P]>;
};
export type deliveriesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.deliveriesWhereInput;
    orderBy?: Prisma.deliveriesOrderByWithAggregationInput | Prisma.deliveriesOrderByWithAggregationInput[];
    by: Prisma.DeliveriesScalarFieldEnum[] | Prisma.DeliveriesScalarFieldEnum;
    having?: Prisma.deliveriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeliveriesCountAggregateInputType | true;
    _avg?: DeliveriesAvgAggregateInputType;
    _sum?: DeliveriesSumAggregateInputType;
    _min?: DeliveriesMinAggregateInputType;
    _max?: DeliveriesMaxAggregateInputType;
};
export type DeliveriesGroupByOutputType = {
    id: string;
    order_id: string;
    rider_profile_id: string | null;
    pickup_branch_id: string;
    dropoff_address_id: string;
    status: $Enums.delivery_status_type;
    distance_km: runtime.Decimal | null;
    estimated_minutes: number | null;
    assigned_at: Date | null;
    picked_up_at: Date | null;
    delivered_at: Date | null;
    failed_at: Date | null;
    failure_reason: string | null;
    created_at: Date;
    updated_at: Date;
    _count: DeliveriesCountAggregateOutputType | null;
    _avg: DeliveriesAvgAggregateOutputType | null;
    _sum: DeliveriesSumAggregateOutputType | null;
    _min: DeliveriesMinAggregateOutputType | null;
    _max: DeliveriesMaxAggregateOutputType | null;
};
type GetDeliveriesGroupByPayload<T extends deliveriesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeliveriesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeliveriesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeliveriesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeliveriesGroupByOutputType[P]>;
}>>;
export type deliveriesWhereInput = {
    AND?: Prisma.deliveriesWhereInput | Prisma.deliveriesWhereInput[];
    OR?: Prisma.deliveriesWhereInput[];
    NOT?: Prisma.deliveriesWhereInput | Prisma.deliveriesWhereInput[];
    id?: Prisma.UuidFilter<"deliveries"> | string;
    order_id?: Prisma.UuidFilter<"deliveries"> | string;
    rider_profile_id?: Prisma.UuidNullableFilter<"deliveries"> | string | null;
    pickup_branch_id?: Prisma.UuidFilter<"deliveries"> | string;
    dropoff_address_id?: Prisma.UuidFilter<"deliveries"> | string;
    status?: Prisma.Enumdelivery_status_typeFilter<"deliveries"> | $Enums.delivery_status_type;
    distance_km?: Prisma.DecimalNullableFilter<"deliveries"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: Prisma.IntNullableFilter<"deliveries"> | number | null;
    assigned_at?: Prisma.DateTimeNullableFilter<"deliveries"> | Date | string | null;
    picked_up_at?: Prisma.DateTimeNullableFilter<"deliveries"> | Date | string | null;
    delivered_at?: Prisma.DateTimeNullableFilter<"deliveries"> | Date | string | null;
    failed_at?: Prisma.DateTimeNullableFilter<"deliveries"> | Date | string | null;
    failure_reason?: Prisma.StringNullableFilter<"deliveries"> | string | null;
    created_at?: Prisma.DateTimeFilter<"deliveries"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"deliveries"> | Date | string;
    addresses?: Prisma.XOR<Prisma.AddressesScalarRelationFilter, Prisma.addressesWhereInput>;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
    store_branches?: Prisma.XOR<Prisma.Store_branchesScalarRelationFilter, Prisma.store_branchesWhereInput>;
    rider_profiles?: Prisma.XOR<Prisma.Rider_profilesNullableScalarRelationFilter, Prisma.rider_profilesWhereInput> | null;
};
export type deliveriesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    rider_profile_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    pickup_branch_id?: Prisma.SortOrder;
    dropoff_address_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    distance_km?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimated_minutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    assigned_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    picked_up_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    delivered_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    failed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    failure_reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    addresses?: Prisma.addressesOrderByWithRelationInput;
    orders?: Prisma.ordersOrderByWithRelationInput;
    store_branches?: Prisma.store_branchesOrderByWithRelationInput;
    rider_profiles?: Prisma.rider_profilesOrderByWithRelationInput;
};
export type deliveriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    order_id?: string;
    AND?: Prisma.deliveriesWhereInput | Prisma.deliveriesWhereInput[];
    OR?: Prisma.deliveriesWhereInput[];
    NOT?: Prisma.deliveriesWhereInput | Prisma.deliveriesWhereInput[];
    rider_profile_id?: Prisma.UuidNullableFilter<"deliveries"> | string | null;
    pickup_branch_id?: Prisma.UuidFilter<"deliveries"> | string;
    dropoff_address_id?: Prisma.UuidFilter<"deliveries"> | string;
    status?: Prisma.Enumdelivery_status_typeFilter<"deliveries"> | $Enums.delivery_status_type;
    distance_km?: Prisma.DecimalNullableFilter<"deliveries"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: Prisma.IntNullableFilter<"deliveries"> | number | null;
    assigned_at?: Prisma.DateTimeNullableFilter<"deliveries"> | Date | string | null;
    picked_up_at?: Prisma.DateTimeNullableFilter<"deliveries"> | Date | string | null;
    delivered_at?: Prisma.DateTimeNullableFilter<"deliveries"> | Date | string | null;
    failed_at?: Prisma.DateTimeNullableFilter<"deliveries"> | Date | string | null;
    failure_reason?: Prisma.StringNullableFilter<"deliveries"> | string | null;
    created_at?: Prisma.DateTimeFilter<"deliveries"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"deliveries"> | Date | string;
    addresses?: Prisma.XOR<Prisma.AddressesScalarRelationFilter, Prisma.addressesWhereInput>;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
    store_branches?: Prisma.XOR<Prisma.Store_branchesScalarRelationFilter, Prisma.store_branchesWhereInput>;
    rider_profiles?: Prisma.XOR<Prisma.Rider_profilesNullableScalarRelationFilter, Prisma.rider_profilesWhereInput> | null;
}, "id" | "order_id">;
export type deliveriesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    rider_profile_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    pickup_branch_id?: Prisma.SortOrder;
    dropoff_address_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    distance_km?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimated_minutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    assigned_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    picked_up_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    delivered_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    failed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    failure_reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.deliveriesCountOrderByAggregateInput;
    _avg?: Prisma.deliveriesAvgOrderByAggregateInput;
    _max?: Prisma.deliveriesMaxOrderByAggregateInput;
    _min?: Prisma.deliveriesMinOrderByAggregateInput;
    _sum?: Prisma.deliveriesSumOrderByAggregateInput;
};
export type deliveriesScalarWhereWithAggregatesInput = {
    AND?: Prisma.deliveriesScalarWhereWithAggregatesInput | Prisma.deliveriesScalarWhereWithAggregatesInput[];
    OR?: Prisma.deliveriesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.deliveriesScalarWhereWithAggregatesInput | Prisma.deliveriesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"deliveries"> | string;
    order_id?: Prisma.UuidWithAggregatesFilter<"deliveries"> | string;
    rider_profile_id?: Prisma.UuidNullableWithAggregatesFilter<"deliveries"> | string | null;
    pickup_branch_id?: Prisma.UuidWithAggregatesFilter<"deliveries"> | string;
    dropoff_address_id?: Prisma.UuidWithAggregatesFilter<"deliveries"> | string;
    status?: Prisma.Enumdelivery_status_typeWithAggregatesFilter<"deliveries"> | $Enums.delivery_status_type;
    distance_km?: Prisma.DecimalNullableWithAggregatesFilter<"deliveries"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: Prisma.IntNullableWithAggregatesFilter<"deliveries"> | number | null;
    assigned_at?: Prisma.DateTimeNullableWithAggregatesFilter<"deliveries"> | Date | string | null;
    picked_up_at?: Prisma.DateTimeNullableWithAggregatesFilter<"deliveries"> | Date | string | null;
    delivered_at?: Prisma.DateTimeNullableWithAggregatesFilter<"deliveries"> | Date | string | null;
    failed_at?: Prisma.DateTimeNullableWithAggregatesFilter<"deliveries"> | Date | string | null;
    failure_reason?: Prisma.StringNullableWithAggregatesFilter<"deliveries"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"deliveries"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"deliveries"> | Date | string;
};
export type deliveriesCreateInput = {
    id?: string;
    status: $Enums.delivery_status_type;
    distance_km?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: number | null;
    assigned_at?: Date | string | null;
    picked_up_at?: Date | string | null;
    delivered_at?: Date | string | null;
    failed_at?: Date | string | null;
    failure_reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    addresses: Prisma.addressesCreateNestedOneWithoutDeliveriesInput;
    orders: Prisma.ordersCreateNestedOneWithoutDeliveriesInput;
    store_branches: Prisma.store_branchesCreateNestedOneWithoutDeliveriesInput;
    rider_profiles?: Prisma.rider_profilesCreateNestedOneWithoutDeliveriesInput;
};
export type deliveriesUncheckedCreateInput = {
    id?: string;
    order_id: string;
    rider_profile_id?: string | null;
    pickup_branch_id: string;
    dropoff_address_id: string;
    status: $Enums.delivery_status_type;
    distance_km?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: number | null;
    assigned_at?: Date | string | null;
    picked_up_at?: Date | string | null;
    delivered_at?: Date | string | null;
    failed_at?: Date | string | null;
    failure_reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type deliveriesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumdelivery_status_typeFieldUpdateOperationsInput | $Enums.delivery_status_type;
    distance_km?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    picked_up_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failure_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    addresses?: Prisma.addressesUpdateOneRequiredWithoutDeliveriesNestedInput;
    orders?: Prisma.ordersUpdateOneRequiredWithoutDeliveriesNestedInput;
    store_branches?: Prisma.store_branchesUpdateOneRequiredWithoutDeliveriesNestedInput;
    rider_profiles?: Prisma.rider_profilesUpdateOneWithoutDeliveriesNestedInput;
};
export type deliveriesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rider_profile_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pickup_branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    dropoff_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumdelivery_status_typeFieldUpdateOperationsInput | $Enums.delivery_status_type;
    distance_km?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    picked_up_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failure_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type deliveriesCreateManyInput = {
    id?: string;
    order_id: string;
    rider_profile_id?: string | null;
    pickup_branch_id: string;
    dropoff_address_id: string;
    status: $Enums.delivery_status_type;
    distance_km?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: number | null;
    assigned_at?: Date | string | null;
    picked_up_at?: Date | string | null;
    delivered_at?: Date | string | null;
    failed_at?: Date | string | null;
    failure_reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type deliveriesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumdelivery_status_typeFieldUpdateOperationsInput | $Enums.delivery_status_type;
    distance_km?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    picked_up_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failure_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type deliveriesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rider_profile_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pickup_branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    dropoff_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumdelivery_status_typeFieldUpdateOperationsInput | $Enums.delivery_status_type;
    distance_km?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    picked_up_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failure_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeliveriesListRelationFilter = {
    every?: Prisma.deliveriesWhereInput;
    some?: Prisma.deliveriesWhereInput;
    none?: Prisma.deliveriesWhereInput;
};
export type deliveriesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type deliveriesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    rider_profile_id?: Prisma.SortOrder;
    pickup_branch_id?: Prisma.SortOrder;
    dropoff_address_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    distance_km?: Prisma.SortOrder;
    estimated_minutes?: Prisma.SortOrder;
    assigned_at?: Prisma.SortOrder;
    picked_up_at?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrder;
    failed_at?: Prisma.SortOrder;
    failure_reason?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type deliveriesAvgOrderByAggregateInput = {
    distance_km?: Prisma.SortOrder;
    estimated_minutes?: Prisma.SortOrder;
};
export type deliveriesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    rider_profile_id?: Prisma.SortOrder;
    pickup_branch_id?: Prisma.SortOrder;
    dropoff_address_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    distance_km?: Prisma.SortOrder;
    estimated_minutes?: Prisma.SortOrder;
    assigned_at?: Prisma.SortOrder;
    picked_up_at?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrder;
    failed_at?: Prisma.SortOrder;
    failure_reason?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type deliveriesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    rider_profile_id?: Prisma.SortOrder;
    pickup_branch_id?: Prisma.SortOrder;
    dropoff_address_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    distance_km?: Prisma.SortOrder;
    estimated_minutes?: Prisma.SortOrder;
    assigned_at?: Prisma.SortOrder;
    picked_up_at?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrder;
    failed_at?: Prisma.SortOrder;
    failure_reason?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type deliveriesSumOrderByAggregateInput = {
    distance_km?: Prisma.SortOrder;
    estimated_minutes?: Prisma.SortOrder;
};
export type DeliveriesNullableScalarRelationFilter = {
    is?: Prisma.deliveriesWhereInput | null;
    isNot?: Prisma.deliveriesWhereInput | null;
};
export type deliveriesCreateNestedManyWithoutAddressesInput = {
    create?: Prisma.XOR<Prisma.deliveriesCreateWithoutAddressesInput, Prisma.deliveriesUncheckedCreateWithoutAddressesInput> | Prisma.deliveriesCreateWithoutAddressesInput[] | Prisma.deliveriesUncheckedCreateWithoutAddressesInput[];
    connectOrCreate?: Prisma.deliveriesCreateOrConnectWithoutAddressesInput | Prisma.deliveriesCreateOrConnectWithoutAddressesInput[];
    createMany?: Prisma.deliveriesCreateManyAddressesInputEnvelope;
    connect?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
};
export type deliveriesUncheckedCreateNestedManyWithoutAddressesInput = {
    create?: Prisma.XOR<Prisma.deliveriesCreateWithoutAddressesInput, Prisma.deliveriesUncheckedCreateWithoutAddressesInput> | Prisma.deliveriesCreateWithoutAddressesInput[] | Prisma.deliveriesUncheckedCreateWithoutAddressesInput[];
    connectOrCreate?: Prisma.deliveriesCreateOrConnectWithoutAddressesInput | Prisma.deliveriesCreateOrConnectWithoutAddressesInput[];
    createMany?: Prisma.deliveriesCreateManyAddressesInputEnvelope;
    connect?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
};
export type deliveriesUpdateManyWithoutAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.deliveriesCreateWithoutAddressesInput, Prisma.deliveriesUncheckedCreateWithoutAddressesInput> | Prisma.deliveriesCreateWithoutAddressesInput[] | Prisma.deliveriesUncheckedCreateWithoutAddressesInput[];
    connectOrCreate?: Prisma.deliveriesCreateOrConnectWithoutAddressesInput | Prisma.deliveriesCreateOrConnectWithoutAddressesInput[];
    upsert?: Prisma.deliveriesUpsertWithWhereUniqueWithoutAddressesInput | Prisma.deliveriesUpsertWithWhereUniqueWithoutAddressesInput[];
    createMany?: Prisma.deliveriesCreateManyAddressesInputEnvelope;
    set?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    disconnect?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    delete?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    connect?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    update?: Prisma.deliveriesUpdateWithWhereUniqueWithoutAddressesInput | Prisma.deliveriesUpdateWithWhereUniqueWithoutAddressesInput[];
    updateMany?: Prisma.deliveriesUpdateManyWithWhereWithoutAddressesInput | Prisma.deliveriesUpdateManyWithWhereWithoutAddressesInput[];
    deleteMany?: Prisma.deliveriesScalarWhereInput | Prisma.deliveriesScalarWhereInput[];
};
export type deliveriesUncheckedUpdateManyWithoutAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.deliveriesCreateWithoutAddressesInput, Prisma.deliveriesUncheckedCreateWithoutAddressesInput> | Prisma.deliveriesCreateWithoutAddressesInput[] | Prisma.deliveriesUncheckedCreateWithoutAddressesInput[];
    connectOrCreate?: Prisma.deliveriesCreateOrConnectWithoutAddressesInput | Prisma.deliveriesCreateOrConnectWithoutAddressesInput[];
    upsert?: Prisma.deliveriesUpsertWithWhereUniqueWithoutAddressesInput | Prisma.deliveriesUpsertWithWhereUniqueWithoutAddressesInput[];
    createMany?: Prisma.deliveriesCreateManyAddressesInputEnvelope;
    set?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    disconnect?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    delete?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    connect?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    update?: Prisma.deliveriesUpdateWithWhereUniqueWithoutAddressesInput | Prisma.deliveriesUpdateWithWhereUniqueWithoutAddressesInput[];
    updateMany?: Prisma.deliveriesUpdateManyWithWhereWithoutAddressesInput | Prisma.deliveriesUpdateManyWithWhereWithoutAddressesInput[];
    deleteMany?: Prisma.deliveriesScalarWhereInput | Prisma.deliveriesScalarWhereInput[];
};
export type Enumdelivery_status_typeFieldUpdateOperationsInput = {
    set?: $Enums.delivery_status_type;
};
export type deliveriesCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.deliveriesCreateWithoutOrdersInput, Prisma.deliveriesUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.deliveriesCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.deliveriesWhereUniqueInput;
};
export type deliveriesUncheckedCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.deliveriesCreateWithoutOrdersInput, Prisma.deliveriesUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.deliveriesCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.deliveriesWhereUniqueInput;
};
export type deliveriesUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.deliveriesCreateWithoutOrdersInput, Prisma.deliveriesUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.deliveriesCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.deliveriesUpsertWithoutOrdersInput;
    disconnect?: Prisma.deliveriesWhereInput | boolean;
    delete?: Prisma.deliveriesWhereInput | boolean;
    connect?: Prisma.deliveriesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.deliveriesUpdateToOneWithWhereWithoutOrdersInput, Prisma.deliveriesUpdateWithoutOrdersInput>, Prisma.deliveriesUncheckedUpdateWithoutOrdersInput>;
};
export type deliveriesUncheckedUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.deliveriesCreateWithoutOrdersInput, Prisma.deliveriesUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.deliveriesCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.deliveriesUpsertWithoutOrdersInput;
    disconnect?: Prisma.deliveriesWhereInput | boolean;
    delete?: Prisma.deliveriesWhereInput | boolean;
    connect?: Prisma.deliveriesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.deliveriesUpdateToOneWithWhereWithoutOrdersInput, Prisma.deliveriesUpdateWithoutOrdersInput>, Prisma.deliveriesUncheckedUpdateWithoutOrdersInput>;
};
export type deliveriesCreateNestedManyWithoutRider_profilesInput = {
    create?: Prisma.XOR<Prisma.deliveriesCreateWithoutRider_profilesInput, Prisma.deliveriesUncheckedCreateWithoutRider_profilesInput> | Prisma.deliveriesCreateWithoutRider_profilesInput[] | Prisma.deliveriesUncheckedCreateWithoutRider_profilesInput[];
    connectOrCreate?: Prisma.deliveriesCreateOrConnectWithoutRider_profilesInput | Prisma.deliveriesCreateOrConnectWithoutRider_profilesInput[];
    createMany?: Prisma.deliveriesCreateManyRider_profilesInputEnvelope;
    connect?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
};
export type deliveriesUncheckedCreateNestedManyWithoutRider_profilesInput = {
    create?: Prisma.XOR<Prisma.deliveriesCreateWithoutRider_profilesInput, Prisma.deliveriesUncheckedCreateWithoutRider_profilesInput> | Prisma.deliveriesCreateWithoutRider_profilesInput[] | Prisma.deliveriesUncheckedCreateWithoutRider_profilesInput[];
    connectOrCreate?: Prisma.deliveriesCreateOrConnectWithoutRider_profilesInput | Prisma.deliveriesCreateOrConnectWithoutRider_profilesInput[];
    createMany?: Prisma.deliveriesCreateManyRider_profilesInputEnvelope;
    connect?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
};
export type deliveriesUpdateManyWithoutRider_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.deliveriesCreateWithoutRider_profilesInput, Prisma.deliveriesUncheckedCreateWithoutRider_profilesInput> | Prisma.deliveriesCreateWithoutRider_profilesInput[] | Prisma.deliveriesUncheckedCreateWithoutRider_profilesInput[];
    connectOrCreate?: Prisma.deliveriesCreateOrConnectWithoutRider_profilesInput | Prisma.deliveriesCreateOrConnectWithoutRider_profilesInput[];
    upsert?: Prisma.deliveriesUpsertWithWhereUniqueWithoutRider_profilesInput | Prisma.deliveriesUpsertWithWhereUniqueWithoutRider_profilesInput[];
    createMany?: Prisma.deliveriesCreateManyRider_profilesInputEnvelope;
    set?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    disconnect?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    delete?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    connect?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    update?: Prisma.deliveriesUpdateWithWhereUniqueWithoutRider_profilesInput | Prisma.deliveriesUpdateWithWhereUniqueWithoutRider_profilesInput[];
    updateMany?: Prisma.deliveriesUpdateManyWithWhereWithoutRider_profilesInput | Prisma.deliveriesUpdateManyWithWhereWithoutRider_profilesInput[];
    deleteMany?: Prisma.deliveriesScalarWhereInput | Prisma.deliveriesScalarWhereInput[];
};
export type deliveriesUncheckedUpdateManyWithoutRider_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.deliveriesCreateWithoutRider_profilesInput, Prisma.deliveriesUncheckedCreateWithoutRider_profilesInput> | Prisma.deliveriesCreateWithoutRider_profilesInput[] | Prisma.deliveriesUncheckedCreateWithoutRider_profilesInput[];
    connectOrCreate?: Prisma.deliveriesCreateOrConnectWithoutRider_profilesInput | Prisma.deliveriesCreateOrConnectWithoutRider_profilesInput[];
    upsert?: Prisma.deliveriesUpsertWithWhereUniqueWithoutRider_profilesInput | Prisma.deliveriesUpsertWithWhereUniqueWithoutRider_profilesInput[];
    createMany?: Prisma.deliveriesCreateManyRider_profilesInputEnvelope;
    set?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    disconnect?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    delete?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    connect?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    update?: Prisma.deliveriesUpdateWithWhereUniqueWithoutRider_profilesInput | Prisma.deliveriesUpdateWithWhereUniqueWithoutRider_profilesInput[];
    updateMany?: Prisma.deliveriesUpdateManyWithWhereWithoutRider_profilesInput | Prisma.deliveriesUpdateManyWithWhereWithoutRider_profilesInput[];
    deleteMany?: Prisma.deliveriesScalarWhereInput | Prisma.deliveriesScalarWhereInput[];
};
export type deliveriesCreateNestedManyWithoutStore_branchesInput = {
    create?: Prisma.XOR<Prisma.deliveriesCreateWithoutStore_branchesInput, Prisma.deliveriesUncheckedCreateWithoutStore_branchesInput> | Prisma.deliveriesCreateWithoutStore_branchesInput[] | Prisma.deliveriesUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.deliveriesCreateOrConnectWithoutStore_branchesInput | Prisma.deliveriesCreateOrConnectWithoutStore_branchesInput[];
    createMany?: Prisma.deliveriesCreateManyStore_branchesInputEnvelope;
    connect?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
};
export type deliveriesUncheckedCreateNestedManyWithoutStore_branchesInput = {
    create?: Prisma.XOR<Prisma.deliveriesCreateWithoutStore_branchesInput, Prisma.deliveriesUncheckedCreateWithoutStore_branchesInput> | Prisma.deliveriesCreateWithoutStore_branchesInput[] | Prisma.deliveriesUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.deliveriesCreateOrConnectWithoutStore_branchesInput | Prisma.deliveriesCreateOrConnectWithoutStore_branchesInput[];
    createMany?: Prisma.deliveriesCreateManyStore_branchesInputEnvelope;
    connect?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
};
export type deliveriesUpdateManyWithoutStore_branchesNestedInput = {
    create?: Prisma.XOR<Prisma.deliveriesCreateWithoutStore_branchesInput, Prisma.deliveriesUncheckedCreateWithoutStore_branchesInput> | Prisma.deliveriesCreateWithoutStore_branchesInput[] | Prisma.deliveriesUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.deliveriesCreateOrConnectWithoutStore_branchesInput | Prisma.deliveriesCreateOrConnectWithoutStore_branchesInput[];
    upsert?: Prisma.deliveriesUpsertWithWhereUniqueWithoutStore_branchesInput | Prisma.deliveriesUpsertWithWhereUniqueWithoutStore_branchesInput[];
    createMany?: Prisma.deliveriesCreateManyStore_branchesInputEnvelope;
    set?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    disconnect?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    delete?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    connect?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    update?: Prisma.deliveriesUpdateWithWhereUniqueWithoutStore_branchesInput | Prisma.deliveriesUpdateWithWhereUniqueWithoutStore_branchesInput[];
    updateMany?: Prisma.deliveriesUpdateManyWithWhereWithoutStore_branchesInput | Prisma.deliveriesUpdateManyWithWhereWithoutStore_branchesInput[];
    deleteMany?: Prisma.deliveriesScalarWhereInput | Prisma.deliveriesScalarWhereInput[];
};
export type deliveriesUncheckedUpdateManyWithoutStore_branchesNestedInput = {
    create?: Prisma.XOR<Prisma.deliveriesCreateWithoutStore_branchesInput, Prisma.deliveriesUncheckedCreateWithoutStore_branchesInput> | Prisma.deliveriesCreateWithoutStore_branchesInput[] | Prisma.deliveriesUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.deliveriesCreateOrConnectWithoutStore_branchesInput | Prisma.deliveriesCreateOrConnectWithoutStore_branchesInput[];
    upsert?: Prisma.deliveriesUpsertWithWhereUniqueWithoutStore_branchesInput | Prisma.deliveriesUpsertWithWhereUniqueWithoutStore_branchesInput[];
    createMany?: Prisma.deliveriesCreateManyStore_branchesInputEnvelope;
    set?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    disconnect?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    delete?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    connect?: Prisma.deliveriesWhereUniqueInput | Prisma.deliveriesWhereUniqueInput[];
    update?: Prisma.deliveriesUpdateWithWhereUniqueWithoutStore_branchesInput | Prisma.deliveriesUpdateWithWhereUniqueWithoutStore_branchesInput[];
    updateMany?: Prisma.deliveriesUpdateManyWithWhereWithoutStore_branchesInput | Prisma.deliveriesUpdateManyWithWhereWithoutStore_branchesInput[];
    deleteMany?: Prisma.deliveriesScalarWhereInput | Prisma.deliveriesScalarWhereInput[];
};
export type deliveriesCreateWithoutAddressesInput = {
    id?: string;
    status: $Enums.delivery_status_type;
    distance_km?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: number | null;
    assigned_at?: Date | string | null;
    picked_up_at?: Date | string | null;
    delivered_at?: Date | string | null;
    failed_at?: Date | string | null;
    failure_reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    orders: Prisma.ordersCreateNestedOneWithoutDeliveriesInput;
    store_branches: Prisma.store_branchesCreateNestedOneWithoutDeliveriesInput;
    rider_profiles?: Prisma.rider_profilesCreateNestedOneWithoutDeliveriesInput;
};
export type deliveriesUncheckedCreateWithoutAddressesInput = {
    id?: string;
    order_id: string;
    rider_profile_id?: string | null;
    pickup_branch_id: string;
    status: $Enums.delivery_status_type;
    distance_km?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: number | null;
    assigned_at?: Date | string | null;
    picked_up_at?: Date | string | null;
    delivered_at?: Date | string | null;
    failed_at?: Date | string | null;
    failure_reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type deliveriesCreateOrConnectWithoutAddressesInput = {
    where: Prisma.deliveriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.deliveriesCreateWithoutAddressesInput, Prisma.deliveriesUncheckedCreateWithoutAddressesInput>;
};
export type deliveriesCreateManyAddressesInputEnvelope = {
    data: Prisma.deliveriesCreateManyAddressesInput | Prisma.deliveriesCreateManyAddressesInput[];
    skipDuplicates?: boolean;
};
export type deliveriesUpsertWithWhereUniqueWithoutAddressesInput = {
    where: Prisma.deliveriesWhereUniqueInput;
    update: Prisma.XOR<Prisma.deliveriesUpdateWithoutAddressesInput, Prisma.deliveriesUncheckedUpdateWithoutAddressesInput>;
    create: Prisma.XOR<Prisma.deliveriesCreateWithoutAddressesInput, Prisma.deliveriesUncheckedCreateWithoutAddressesInput>;
};
export type deliveriesUpdateWithWhereUniqueWithoutAddressesInput = {
    where: Prisma.deliveriesWhereUniqueInput;
    data: Prisma.XOR<Prisma.deliveriesUpdateWithoutAddressesInput, Prisma.deliveriesUncheckedUpdateWithoutAddressesInput>;
};
export type deliveriesUpdateManyWithWhereWithoutAddressesInput = {
    where: Prisma.deliveriesScalarWhereInput;
    data: Prisma.XOR<Prisma.deliveriesUpdateManyMutationInput, Prisma.deliveriesUncheckedUpdateManyWithoutAddressesInput>;
};
export type deliveriesScalarWhereInput = {
    AND?: Prisma.deliveriesScalarWhereInput | Prisma.deliveriesScalarWhereInput[];
    OR?: Prisma.deliveriesScalarWhereInput[];
    NOT?: Prisma.deliveriesScalarWhereInput | Prisma.deliveriesScalarWhereInput[];
    id?: Prisma.UuidFilter<"deliveries"> | string;
    order_id?: Prisma.UuidFilter<"deliveries"> | string;
    rider_profile_id?: Prisma.UuidNullableFilter<"deliveries"> | string | null;
    pickup_branch_id?: Prisma.UuidFilter<"deliveries"> | string;
    dropoff_address_id?: Prisma.UuidFilter<"deliveries"> | string;
    status?: Prisma.Enumdelivery_status_typeFilter<"deliveries"> | $Enums.delivery_status_type;
    distance_km?: Prisma.DecimalNullableFilter<"deliveries"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: Prisma.IntNullableFilter<"deliveries"> | number | null;
    assigned_at?: Prisma.DateTimeNullableFilter<"deliveries"> | Date | string | null;
    picked_up_at?: Prisma.DateTimeNullableFilter<"deliveries"> | Date | string | null;
    delivered_at?: Prisma.DateTimeNullableFilter<"deliveries"> | Date | string | null;
    failed_at?: Prisma.DateTimeNullableFilter<"deliveries"> | Date | string | null;
    failure_reason?: Prisma.StringNullableFilter<"deliveries"> | string | null;
    created_at?: Prisma.DateTimeFilter<"deliveries"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"deliveries"> | Date | string;
};
export type deliveriesCreateWithoutOrdersInput = {
    id?: string;
    status: $Enums.delivery_status_type;
    distance_km?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: number | null;
    assigned_at?: Date | string | null;
    picked_up_at?: Date | string | null;
    delivered_at?: Date | string | null;
    failed_at?: Date | string | null;
    failure_reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    addresses: Prisma.addressesCreateNestedOneWithoutDeliveriesInput;
    store_branches: Prisma.store_branchesCreateNestedOneWithoutDeliveriesInput;
    rider_profiles?: Prisma.rider_profilesCreateNestedOneWithoutDeliveriesInput;
};
export type deliveriesUncheckedCreateWithoutOrdersInput = {
    id?: string;
    rider_profile_id?: string | null;
    pickup_branch_id: string;
    dropoff_address_id: string;
    status: $Enums.delivery_status_type;
    distance_km?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: number | null;
    assigned_at?: Date | string | null;
    picked_up_at?: Date | string | null;
    delivered_at?: Date | string | null;
    failed_at?: Date | string | null;
    failure_reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type deliveriesCreateOrConnectWithoutOrdersInput = {
    where: Prisma.deliveriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.deliveriesCreateWithoutOrdersInput, Prisma.deliveriesUncheckedCreateWithoutOrdersInput>;
};
export type deliveriesUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.deliveriesUpdateWithoutOrdersInput, Prisma.deliveriesUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.deliveriesCreateWithoutOrdersInput, Prisma.deliveriesUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.deliveriesWhereInput;
};
export type deliveriesUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.deliveriesWhereInput;
    data: Prisma.XOR<Prisma.deliveriesUpdateWithoutOrdersInput, Prisma.deliveriesUncheckedUpdateWithoutOrdersInput>;
};
export type deliveriesUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumdelivery_status_typeFieldUpdateOperationsInput | $Enums.delivery_status_type;
    distance_km?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    picked_up_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failure_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    addresses?: Prisma.addressesUpdateOneRequiredWithoutDeliveriesNestedInput;
    store_branches?: Prisma.store_branchesUpdateOneRequiredWithoutDeliveriesNestedInput;
    rider_profiles?: Prisma.rider_profilesUpdateOneWithoutDeliveriesNestedInput;
};
export type deliveriesUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rider_profile_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pickup_branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    dropoff_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumdelivery_status_typeFieldUpdateOperationsInput | $Enums.delivery_status_type;
    distance_km?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    picked_up_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failure_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type deliveriesCreateWithoutRider_profilesInput = {
    id?: string;
    status: $Enums.delivery_status_type;
    distance_km?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: number | null;
    assigned_at?: Date | string | null;
    picked_up_at?: Date | string | null;
    delivered_at?: Date | string | null;
    failed_at?: Date | string | null;
    failure_reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    addresses: Prisma.addressesCreateNestedOneWithoutDeliveriesInput;
    orders: Prisma.ordersCreateNestedOneWithoutDeliveriesInput;
    store_branches: Prisma.store_branchesCreateNestedOneWithoutDeliveriesInput;
};
export type deliveriesUncheckedCreateWithoutRider_profilesInput = {
    id?: string;
    order_id: string;
    pickup_branch_id: string;
    dropoff_address_id: string;
    status: $Enums.delivery_status_type;
    distance_km?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: number | null;
    assigned_at?: Date | string | null;
    picked_up_at?: Date | string | null;
    delivered_at?: Date | string | null;
    failed_at?: Date | string | null;
    failure_reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type deliveriesCreateOrConnectWithoutRider_profilesInput = {
    where: Prisma.deliveriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.deliveriesCreateWithoutRider_profilesInput, Prisma.deliveriesUncheckedCreateWithoutRider_profilesInput>;
};
export type deliveriesCreateManyRider_profilesInputEnvelope = {
    data: Prisma.deliveriesCreateManyRider_profilesInput | Prisma.deliveriesCreateManyRider_profilesInput[];
    skipDuplicates?: boolean;
};
export type deliveriesUpsertWithWhereUniqueWithoutRider_profilesInput = {
    where: Prisma.deliveriesWhereUniqueInput;
    update: Prisma.XOR<Prisma.deliveriesUpdateWithoutRider_profilesInput, Prisma.deliveriesUncheckedUpdateWithoutRider_profilesInput>;
    create: Prisma.XOR<Prisma.deliveriesCreateWithoutRider_profilesInput, Prisma.deliveriesUncheckedCreateWithoutRider_profilesInput>;
};
export type deliveriesUpdateWithWhereUniqueWithoutRider_profilesInput = {
    where: Prisma.deliveriesWhereUniqueInput;
    data: Prisma.XOR<Prisma.deliveriesUpdateWithoutRider_profilesInput, Prisma.deliveriesUncheckedUpdateWithoutRider_profilesInput>;
};
export type deliveriesUpdateManyWithWhereWithoutRider_profilesInput = {
    where: Prisma.deliveriesScalarWhereInput;
    data: Prisma.XOR<Prisma.deliveriesUpdateManyMutationInput, Prisma.deliveriesUncheckedUpdateManyWithoutRider_profilesInput>;
};
export type deliveriesCreateWithoutStore_branchesInput = {
    id?: string;
    status: $Enums.delivery_status_type;
    distance_km?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: number | null;
    assigned_at?: Date | string | null;
    picked_up_at?: Date | string | null;
    delivered_at?: Date | string | null;
    failed_at?: Date | string | null;
    failure_reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    addresses: Prisma.addressesCreateNestedOneWithoutDeliveriesInput;
    orders: Prisma.ordersCreateNestedOneWithoutDeliveriesInput;
    rider_profiles?: Prisma.rider_profilesCreateNestedOneWithoutDeliveriesInput;
};
export type deliveriesUncheckedCreateWithoutStore_branchesInput = {
    id?: string;
    order_id: string;
    rider_profile_id?: string | null;
    dropoff_address_id: string;
    status: $Enums.delivery_status_type;
    distance_km?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: number | null;
    assigned_at?: Date | string | null;
    picked_up_at?: Date | string | null;
    delivered_at?: Date | string | null;
    failed_at?: Date | string | null;
    failure_reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type deliveriesCreateOrConnectWithoutStore_branchesInput = {
    where: Prisma.deliveriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.deliveriesCreateWithoutStore_branchesInput, Prisma.deliveriesUncheckedCreateWithoutStore_branchesInput>;
};
export type deliveriesCreateManyStore_branchesInputEnvelope = {
    data: Prisma.deliveriesCreateManyStore_branchesInput | Prisma.deliveriesCreateManyStore_branchesInput[];
    skipDuplicates?: boolean;
};
export type deliveriesUpsertWithWhereUniqueWithoutStore_branchesInput = {
    where: Prisma.deliveriesWhereUniqueInput;
    update: Prisma.XOR<Prisma.deliveriesUpdateWithoutStore_branchesInput, Prisma.deliveriesUncheckedUpdateWithoutStore_branchesInput>;
    create: Prisma.XOR<Prisma.deliveriesCreateWithoutStore_branchesInput, Prisma.deliveriesUncheckedCreateWithoutStore_branchesInput>;
};
export type deliveriesUpdateWithWhereUniqueWithoutStore_branchesInput = {
    where: Prisma.deliveriesWhereUniqueInput;
    data: Prisma.XOR<Prisma.deliveriesUpdateWithoutStore_branchesInput, Prisma.deliveriesUncheckedUpdateWithoutStore_branchesInput>;
};
export type deliveriesUpdateManyWithWhereWithoutStore_branchesInput = {
    where: Prisma.deliveriesScalarWhereInput;
    data: Prisma.XOR<Prisma.deliveriesUpdateManyMutationInput, Prisma.deliveriesUncheckedUpdateManyWithoutStore_branchesInput>;
};
export type deliveriesCreateManyAddressesInput = {
    id?: string;
    order_id: string;
    rider_profile_id?: string | null;
    pickup_branch_id: string;
    status: $Enums.delivery_status_type;
    distance_km?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: number | null;
    assigned_at?: Date | string | null;
    picked_up_at?: Date | string | null;
    delivered_at?: Date | string | null;
    failed_at?: Date | string | null;
    failure_reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type deliveriesUpdateWithoutAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumdelivery_status_typeFieldUpdateOperationsInput | $Enums.delivery_status_type;
    distance_km?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    picked_up_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failure_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.ordersUpdateOneRequiredWithoutDeliveriesNestedInput;
    store_branches?: Prisma.store_branchesUpdateOneRequiredWithoutDeliveriesNestedInput;
    rider_profiles?: Prisma.rider_profilesUpdateOneWithoutDeliveriesNestedInput;
};
export type deliveriesUncheckedUpdateWithoutAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rider_profile_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pickup_branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumdelivery_status_typeFieldUpdateOperationsInput | $Enums.delivery_status_type;
    distance_km?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    picked_up_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failure_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type deliveriesUncheckedUpdateManyWithoutAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rider_profile_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pickup_branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumdelivery_status_typeFieldUpdateOperationsInput | $Enums.delivery_status_type;
    distance_km?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    picked_up_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failure_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type deliveriesCreateManyRider_profilesInput = {
    id?: string;
    order_id: string;
    pickup_branch_id: string;
    dropoff_address_id: string;
    status: $Enums.delivery_status_type;
    distance_km?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: number | null;
    assigned_at?: Date | string | null;
    picked_up_at?: Date | string | null;
    delivered_at?: Date | string | null;
    failed_at?: Date | string | null;
    failure_reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type deliveriesUpdateWithoutRider_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumdelivery_status_typeFieldUpdateOperationsInput | $Enums.delivery_status_type;
    distance_km?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    picked_up_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failure_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    addresses?: Prisma.addressesUpdateOneRequiredWithoutDeliveriesNestedInput;
    orders?: Prisma.ordersUpdateOneRequiredWithoutDeliveriesNestedInput;
    store_branches?: Prisma.store_branchesUpdateOneRequiredWithoutDeliveriesNestedInput;
};
export type deliveriesUncheckedUpdateWithoutRider_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    pickup_branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    dropoff_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumdelivery_status_typeFieldUpdateOperationsInput | $Enums.delivery_status_type;
    distance_km?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    picked_up_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failure_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type deliveriesUncheckedUpdateManyWithoutRider_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    pickup_branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    dropoff_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumdelivery_status_typeFieldUpdateOperationsInput | $Enums.delivery_status_type;
    distance_km?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    picked_up_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failure_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type deliveriesCreateManyStore_branchesInput = {
    id?: string;
    order_id: string;
    rider_profile_id?: string | null;
    dropoff_address_id: string;
    status: $Enums.delivery_status_type;
    distance_km?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: number | null;
    assigned_at?: Date | string | null;
    picked_up_at?: Date | string | null;
    delivered_at?: Date | string | null;
    failed_at?: Date | string | null;
    failure_reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type deliveriesUpdateWithoutStore_branchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumdelivery_status_typeFieldUpdateOperationsInput | $Enums.delivery_status_type;
    distance_km?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    picked_up_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failure_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    addresses?: Prisma.addressesUpdateOneRequiredWithoutDeliveriesNestedInput;
    orders?: Prisma.ordersUpdateOneRequiredWithoutDeliveriesNestedInput;
    rider_profiles?: Prisma.rider_profilesUpdateOneWithoutDeliveriesNestedInput;
};
export type deliveriesUncheckedUpdateWithoutStore_branchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rider_profile_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dropoff_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumdelivery_status_typeFieldUpdateOperationsInput | $Enums.delivery_status_type;
    distance_km?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    picked_up_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failure_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type deliveriesUncheckedUpdateManyWithoutStore_branchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rider_profile_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dropoff_address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumdelivery_status_typeFieldUpdateOperationsInput | $Enums.delivery_status_type;
    distance_km?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimated_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    picked_up_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    failure_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type deliveriesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_id?: boolean;
    rider_profile_id?: boolean;
    pickup_branch_id?: boolean;
    dropoff_address_id?: boolean;
    status?: boolean;
    distance_km?: boolean;
    estimated_minutes?: boolean;
    assigned_at?: boolean;
    picked_up_at?: boolean;
    delivered_at?: boolean;
    failed_at?: boolean;
    failure_reason?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    addresses?: boolean | Prisma.addressesDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
    rider_profiles?: boolean | Prisma.deliveries$rider_profilesArgs<ExtArgs>;
}, ExtArgs["result"]["deliveries"]>;
export type deliveriesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_id?: boolean;
    rider_profile_id?: boolean;
    pickup_branch_id?: boolean;
    dropoff_address_id?: boolean;
    status?: boolean;
    distance_km?: boolean;
    estimated_minutes?: boolean;
    assigned_at?: boolean;
    picked_up_at?: boolean;
    delivered_at?: boolean;
    failed_at?: boolean;
    failure_reason?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    addresses?: boolean | Prisma.addressesDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
    rider_profiles?: boolean | Prisma.deliveries$rider_profilesArgs<ExtArgs>;
}, ExtArgs["result"]["deliveries"]>;
export type deliveriesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_id?: boolean;
    rider_profile_id?: boolean;
    pickup_branch_id?: boolean;
    dropoff_address_id?: boolean;
    status?: boolean;
    distance_km?: boolean;
    estimated_minutes?: boolean;
    assigned_at?: boolean;
    picked_up_at?: boolean;
    delivered_at?: boolean;
    failed_at?: boolean;
    failure_reason?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    addresses?: boolean | Prisma.addressesDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
    rider_profiles?: boolean | Prisma.deliveries$rider_profilesArgs<ExtArgs>;
}, ExtArgs["result"]["deliveries"]>;
export type deliveriesSelectScalar = {
    id?: boolean;
    order_id?: boolean;
    rider_profile_id?: boolean;
    pickup_branch_id?: boolean;
    dropoff_address_id?: boolean;
    status?: boolean;
    distance_km?: boolean;
    estimated_minutes?: boolean;
    assigned_at?: boolean;
    picked_up_at?: boolean;
    delivered_at?: boolean;
    failed_at?: boolean;
    failure_reason?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type deliveriesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "order_id" | "rider_profile_id" | "pickup_branch_id" | "dropoff_address_id" | "status" | "distance_km" | "estimated_minutes" | "assigned_at" | "picked_up_at" | "delivered_at" | "failed_at" | "failure_reason" | "created_at" | "updated_at", ExtArgs["result"]["deliveries"]>;
export type deliveriesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    addresses?: boolean | Prisma.addressesDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
    rider_profiles?: boolean | Prisma.deliveries$rider_profilesArgs<ExtArgs>;
};
export type deliveriesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    addresses?: boolean | Prisma.addressesDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
    rider_profiles?: boolean | Prisma.deliveries$rider_profilesArgs<ExtArgs>;
};
export type deliveriesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    addresses?: boolean | Prisma.addressesDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
    rider_profiles?: boolean | Prisma.deliveries$rider_profilesArgs<ExtArgs>;
};
export type $deliveriesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "deliveries";
    objects: {
        addresses: Prisma.$addressesPayload<ExtArgs>;
        orders: Prisma.$ordersPayload<ExtArgs>;
        store_branches: Prisma.$store_branchesPayload<ExtArgs>;
        rider_profiles: Prisma.$rider_profilesPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        order_id: string;
        rider_profile_id: string | null;
        pickup_branch_id: string;
        dropoff_address_id: string;
        status: $Enums.delivery_status_type;
        distance_km: runtime.Decimal | null;
        estimated_minutes: number | null;
        assigned_at: Date | null;
        picked_up_at: Date | null;
        delivered_at: Date | null;
        failed_at: Date | null;
        failure_reason: string | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["deliveries"]>;
    composites: {};
};
export type deliveriesGetPayload<S extends boolean | null | undefined | deliveriesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$deliveriesPayload, S>;
export type deliveriesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<deliveriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeliveriesCountAggregateInputType | true;
};
export interface deliveriesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['deliveries'];
        meta: {
            name: 'deliveries';
        };
    };
    findUnique<T extends deliveriesFindUniqueArgs>(args: Prisma.SelectSubset<T, deliveriesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__deliveriesClient<runtime.Types.Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends deliveriesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, deliveriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__deliveriesClient<runtime.Types.Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends deliveriesFindFirstArgs>(args?: Prisma.SelectSubset<T, deliveriesFindFirstArgs<ExtArgs>>): Prisma.Prisma__deliveriesClient<runtime.Types.Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends deliveriesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, deliveriesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__deliveriesClient<runtime.Types.Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends deliveriesFindManyArgs>(args?: Prisma.SelectSubset<T, deliveriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends deliveriesCreateArgs>(args: Prisma.SelectSubset<T, deliveriesCreateArgs<ExtArgs>>): Prisma.Prisma__deliveriesClient<runtime.Types.Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends deliveriesCreateManyArgs>(args?: Prisma.SelectSubset<T, deliveriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends deliveriesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, deliveriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends deliveriesDeleteArgs>(args: Prisma.SelectSubset<T, deliveriesDeleteArgs<ExtArgs>>): Prisma.Prisma__deliveriesClient<runtime.Types.Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends deliveriesUpdateArgs>(args: Prisma.SelectSubset<T, deliveriesUpdateArgs<ExtArgs>>): Prisma.Prisma__deliveriesClient<runtime.Types.Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends deliveriesDeleteManyArgs>(args?: Prisma.SelectSubset<T, deliveriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends deliveriesUpdateManyArgs>(args: Prisma.SelectSubset<T, deliveriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends deliveriesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, deliveriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends deliveriesUpsertArgs>(args: Prisma.SelectSubset<T, deliveriesUpsertArgs<ExtArgs>>): Prisma.Prisma__deliveriesClient<runtime.Types.Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends deliveriesCountArgs>(args?: Prisma.Subset<T, deliveriesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeliveriesCountAggregateOutputType> : number>;
    aggregate<T extends DeliveriesAggregateArgs>(args: Prisma.Subset<T, DeliveriesAggregateArgs>): Prisma.PrismaPromise<GetDeliveriesAggregateType<T>>;
    groupBy<T extends deliveriesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: deliveriesGroupByArgs['orderBy'];
    } : {
        orderBy?: deliveriesGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, deliveriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: deliveriesFieldRefs;
}
export interface Prisma__deliveriesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    addresses<T extends Prisma.addressesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.addressesDefaultArgs<ExtArgs>>): Prisma.Prisma__addressesClient<runtime.Types.Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.ordersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ordersDefaultArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    store_branches<T extends Prisma.store_branchesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_branchesDefaultArgs<ExtArgs>>): Prisma.Prisma__store_branchesClient<runtime.Types.Result.GetResult<Prisma.$store_branchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    rider_profiles<T extends Prisma.deliveries$rider_profilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.deliveries$rider_profilesArgs<ExtArgs>>): Prisma.Prisma__rider_profilesClient<runtime.Types.Result.GetResult<Prisma.$rider_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface deliveriesFieldRefs {
    readonly id: Prisma.FieldRef<"deliveries", 'String'>;
    readonly order_id: Prisma.FieldRef<"deliveries", 'String'>;
    readonly rider_profile_id: Prisma.FieldRef<"deliveries", 'String'>;
    readonly pickup_branch_id: Prisma.FieldRef<"deliveries", 'String'>;
    readonly dropoff_address_id: Prisma.FieldRef<"deliveries", 'String'>;
    readonly status: Prisma.FieldRef<"deliveries", 'delivery_status_type'>;
    readonly distance_km: Prisma.FieldRef<"deliveries", 'Decimal'>;
    readonly estimated_minutes: Prisma.FieldRef<"deliveries", 'Int'>;
    readonly assigned_at: Prisma.FieldRef<"deliveries", 'DateTime'>;
    readonly picked_up_at: Prisma.FieldRef<"deliveries", 'DateTime'>;
    readonly delivered_at: Prisma.FieldRef<"deliveries", 'DateTime'>;
    readonly failed_at: Prisma.FieldRef<"deliveries", 'DateTime'>;
    readonly failure_reason: Prisma.FieldRef<"deliveries", 'String'>;
    readonly created_at: Prisma.FieldRef<"deliveries", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"deliveries", 'DateTime'>;
}
export type deliveriesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.deliveriesSelect<ExtArgs> | null;
    omit?: Prisma.deliveriesOmit<ExtArgs> | null;
    include?: Prisma.deliveriesInclude<ExtArgs> | null;
    where: Prisma.deliveriesWhereUniqueInput;
};
export type deliveriesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.deliveriesSelect<ExtArgs> | null;
    omit?: Prisma.deliveriesOmit<ExtArgs> | null;
    include?: Prisma.deliveriesInclude<ExtArgs> | null;
    where: Prisma.deliveriesWhereUniqueInput;
};
export type deliveriesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.deliveriesSelect<ExtArgs> | null;
    omit?: Prisma.deliveriesOmit<ExtArgs> | null;
    include?: Prisma.deliveriesInclude<ExtArgs> | null;
    where?: Prisma.deliveriesWhereInput;
    orderBy?: Prisma.deliveriesOrderByWithRelationInput | Prisma.deliveriesOrderByWithRelationInput[];
    cursor?: Prisma.deliveriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeliveriesScalarFieldEnum | Prisma.DeliveriesScalarFieldEnum[];
};
export type deliveriesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.deliveriesSelect<ExtArgs> | null;
    omit?: Prisma.deliveriesOmit<ExtArgs> | null;
    include?: Prisma.deliveriesInclude<ExtArgs> | null;
    where?: Prisma.deliveriesWhereInput;
    orderBy?: Prisma.deliveriesOrderByWithRelationInput | Prisma.deliveriesOrderByWithRelationInput[];
    cursor?: Prisma.deliveriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeliveriesScalarFieldEnum | Prisma.DeliveriesScalarFieldEnum[];
};
export type deliveriesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.deliveriesSelect<ExtArgs> | null;
    omit?: Prisma.deliveriesOmit<ExtArgs> | null;
    include?: Prisma.deliveriesInclude<ExtArgs> | null;
    where?: Prisma.deliveriesWhereInput;
    orderBy?: Prisma.deliveriesOrderByWithRelationInput | Prisma.deliveriesOrderByWithRelationInput[];
    cursor?: Prisma.deliveriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeliveriesScalarFieldEnum | Prisma.DeliveriesScalarFieldEnum[];
};
export type deliveriesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.deliveriesSelect<ExtArgs> | null;
    omit?: Prisma.deliveriesOmit<ExtArgs> | null;
    include?: Prisma.deliveriesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.deliveriesCreateInput, Prisma.deliveriesUncheckedCreateInput>;
};
export type deliveriesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.deliveriesCreateManyInput | Prisma.deliveriesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type deliveriesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.deliveriesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.deliveriesOmit<ExtArgs> | null;
    data: Prisma.deliveriesCreateManyInput | Prisma.deliveriesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.deliveriesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type deliveriesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.deliveriesSelect<ExtArgs> | null;
    omit?: Prisma.deliveriesOmit<ExtArgs> | null;
    include?: Prisma.deliveriesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.deliveriesUpdateInput, Prisma.deliveriesUncheckedUpdateInput>;
    where: Prisma.deliveriesWhereUniqueInput;
};
export type deliveriesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.deliveriesUpdateManyMutationInput, Prisma.deliveriesUncheckedUpdateManyInput>;
    where?: Prisma.deliveriesWhereInput;
    limit?: number;
};
export type deliveriesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.deliveriesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.deliveriesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.deliveriesUpdateManyMutationInput, Prisma.deliveriesUncheckedUpdateManyInput>;
    where?: Prisma.deliveriesWhereInput;
    limit?: number;
    include?: Prisma.deliveriesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type deliveriesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.deliveriesSelect<ExtArgs> | null;
    omit?: Prisma.deliveriesOmit<ExtArgs> | null;
    include?: Prisma.deliveriesInclude<ExtArgs> | null;
    where: Prisma.deliveriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.deliveriesCreateInput, Prisma.deliveriesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.deliveriesUpdateInput, Prisma.deliveriesUncheckedUpdateInput>;
};
export type deliveriesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.deliveriesSelect<ExtArgs> | null;
    omit?: Prisma.deliveriesOmit<ExtArgs> | null;
    include?: Prisma.deliveriesInclude<ExtArgs> | null;
    where: Prisma.deliveriesWhereUniqueInput;
};
export type deliveriesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.deliveriesWhereInput;
    limit?: number;
};
export type deliveries$rider_profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_profilesSelect<ExtArgs> | null;
    omit?: Prisma.rider_profilesOmit<ExtArgs> | null;
    include?: Prisma.rider_profilesInclude<ExtArgs> | null;
    where?: Prisma.rider_profilesWhereInput;
};
export type deliveriesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.deliveriesSelect<ExtArgs> | null;
    omit?: Prisma.deliveriesOmit<ExtArgs> | null;
    include?: Prisma.deliveriesInclude<ExtArgs> | null;
};
export {};
