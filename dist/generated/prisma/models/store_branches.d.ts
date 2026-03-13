import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type store_branchesModel = runtime.Types.Result.DefaultSelection<Prisma.$store_branchesPayload>;
export type AggregateStore_branches = {
    _count: Store_branchesCountAggregateOutputType | null;
    _avg: Store_branchesAvgAggregateOutputType | null;
    _sum: Store_branchesSumAggregateOutputType | null;
    _min: Store_branchesMinAggregateOutputType | null;
    _max: Store_branchesMaxAggregateOutputType | null;
};
export type Store_branchesAvgAggregateOutputType = {
    avg_prep_time_minutes: number | null;
    max_concurrent_orders: number | null;
};
export type Store_branchesSumAggregateOutputType = {
    avg_prep_time_minutes: number | null;
    max_concurrent_orders: number | null;
};
export type Store_branchesMinAggregateOutputType = {
    id: string | null;
    store_id: string | null;
    address_id: string | null;
    name: string | null;
    phone_e164: string | null;
    manager_user_id: string | null;
    status: $Enums.branch_status_type | null;
    accepts_orders: boolean | null;
    avg_prep_time_minutes: number | null;
    max_concurrent_orders: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Store_branchesMaxAggregateOutputType = {
    id: string | null;
    store_id: string | null;
    address_id: string | null;
    name: string | null;
    phone_e164: string | null;
    manager_user_id: string | null;
    status: $Enums.branch_status_type | null;
    accepts_orders: boolean | null;
    avg_prep_time_minutes: number | null;
    max_concurrent_orders: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Store_branchesCountAggregateOutputType = {
    id: number;
    store_id: number;
    address_id: number;
    name: number;
    phone_e164: number;
    manager_user_id: number;
    status: number;
    accepts_orders: number;
    avg_prep_time_minutes: number;
    max_concurrent_orders: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Store_branchesAvgAggregateInputType = {
    avg_prep_time_minutes?: true;
    max_concurrent_orders?: true;
};
export type Store_branchesSumAggregateInputType = {
    avg_prep_time_minutes?: true;
    max_concurrent_orders?: true;
};
export type Store_branchesMinAggregateInputType = {
    id?: true;
    store_id?: true;
    address_id?: true;
    name?: true;
    phone_e164?: true;
    manager_user_id?: true;
    status?: true;
    accepts_orders?: true;
    avg_prep_time_minutes?: true;
    max_concurrent_orders?: true;
    created_at?: true;
    updated_at?: true;
};
export type Store_branchesMaxAggregateInputType = {
    id?: true;
    store_id?: true;
    address_id?: true;
    name?: true;
    phone_e164?: true;
    manager_user_id?: true;
    status?: true;
    accepts_orders?: true;
    avg_prep_time_minutes?: true;
    max_concurrent_orders?: true;
    created_at?: true;
    updated_at?: true;
};
export type Store_branchesCountAggregateInputType = {
    id?: true;
    store_id?: true;
    address_id?: true;
    name?: true;
    phone_e164?: true;
    manager_user_id?: true;
    status?: true;
    accepts_orders?: true;
    avg_prep_time_minutes?: true;
    max_concurrent_orders?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Store_branchesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.store_branchesWhereInput;
    orderBy?: Prisma.store_branchesOrderByWithRelationInput | Prisma.store_branchesOrderByWithRelationInput[];
    cursor?: Prisma.store_branchesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Store_branchesCountAggregateInputType;
    _avg?: Store_branchesAvgAggregateInputType;
    _sum?: Store_branchesSumAggregateInputType;
    _min?: Store_branchesMinAggregateInputType;
    _max?: Store_branchesMaxAggregateInputType;
};
export type GetStore_branchesAggregateType<T extends Store_branchesAggregateArgs> = {
    [P in keyof T & keyof AggregateStore_branches]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStore_branches[P]> : Prisma.GetScalarType<T[P], AggregateStore_branches[P]>;
};
export type store_branchesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.store_branchesWhereInput;
    orderBy?: Prisma.store_branchesOrderByWithAggregationInput | Prisma.store_branchesOrderByWithAggregationInput[];
    by: Prisma.Store_branchesScalarFieldEnum[] | Prisma.Store_branchesScalarFieldEnum;
    having?: Prisma.store_branchesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Store_branchesCountAggregateInputType | true;
    _avg?: Store_branchesAvgAggregateInputType;
    _sum?: Store_branchesSumAggregateInputType;
    _min?: Store_branchesMinAggregateInputType;
    _max?: Store_branchesMaxAggregateInputType;
};
export type Store_branchesGroupByOutputType = {
    id: string;
    store_id: string;
    address_id: string;
    name: string;
    phone_e164: string | null;
    manager_user_id: string | null;
    status: $Enums.branch_status_type;
    accepts_orders: boolean;
    avg_prep_time_minutes: number;
    max_concurrent_orders: number | null;
    created_at: Date;
    updated_at: Date;
    _count: Store_branchesCountAggregateOutputType | null;
    _avg: Store_branchesAvgAggregateOutputType | null;
    _sum: Store_branchesSumAggregateOutputType | null;
    _min: Store_branchesMinAggregateOutputType | null;
    _max: Store_branchesMaxAggregateOutputType | null;
};
type GetStore_branchesGroupByPayload<T extends store_branchesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Store_branchesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Store_branchesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Store_branchesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Store_branchesGroupByOutputType[P]>;
}>>;
export type store_branchesWhereInput = {
    AND?: Prisma.store_branchesWhereInput | Prisma.store_branchesWhereInput[];
    OR?: Prisma.store_branchesWhereInput[];
    NOT?: Prisma.store_branchesWhereInput | Prisma.store_branchesWhereInput[];
    id?: Prisma.UuidFilter<"store_branches"> | string;
    store_id?: Prisma.UuidFilter<"store_branches"> | string;
    address_id?: Prisma.UuidFilter<"store_branches"> | string;
    name?: Prisma.StringFilter<"store_branches"> | string;
    phone_e164?: Prisma.StringNullableFilter<"store_branches"> | string | null;
    manager_user_id?: Prisma.UuidNullableFilter<"store_branches"> | string | null;
    status?: Prisma.Enumbranch_status_typeFilter<"store_branches"> | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFilter<"store_branches"> | boolean;
    avg_prep_time_minutes?: Prisma.IntFilter<"store_branches"> | number;
    max_concurrent_orders?: Prisma.IntNullableFilter<"store_branches"> | number | null;
    created_at?: Prisma.DateTimeFilter<"store_branches"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"store_branches"> | Date | string;
    branch_catalog_items?: Prisma.Branch_catalog_itemsListRelationFilter;
    branch_operating_hours?: Prisma.Branch_operating_hoursListRelationFilter;
    carts?: Prisma.CartsListRelationFilter;
    deliveries?: Prisma.DeliveriesListRelationFilter;
    delivery_zones?: Prisma.Delivery_zonesListRelationFilter;
    orders?: Prisma.OrdersListRelationFilter;
    addresses?: Prisma.XOR<Prisma.AddressesScalarRelationFilter, Prisma.addressesWhereInput>;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    stores?: Prisma.XOR<Prisma.StoresScalarRelationFilter, Prisma.storesWhereInput>;
};
export type store_branchesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone_e164?: Prisma.SortOrderInput | Prisma.SortOrder;
    manager_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    accepts_orders?: Prisma.SortOrder;
    avg_prep_time_minutes?: Prisma.SortOrder;
    max_concurrent_orders?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    branch_catalog_items?: Prisma.branch_catalog_itemsOrderByRelationAggregateInput;
    branch_operating_hours?: Prisma.branch_operating_hoursOrderByRelationAggregateInput;
    carts?: Prisma.cartsOrderByRelationAggregateInput;
    deliveries?: Prisma.deliveriesOrderByRelationAggregateInput;
    delivery_zones?: Prisma.delivery_zonesOrderByRelationAggregateInput;
    orders?: Prisma.ordersOrderByRelationAggregateInput;
    addresses?: Prisma.addressesOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
    stores?: Prisma.storesOrderByWithRelationInput;
};
export type store_branchesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.store_branchesWhereInput | Prisma.store_branchesWhereInput[];
    OR?: Prisma.store_branchesWhereInput[];
    NOT?: Prisma.store_branchesWhereInput | Prisma.store_branchesWhereInput[];
    store_id?: Prisma.UuidFilter<"store_branches"> | string;
    address_id?: Prisma.UuidFilter<"store_branches"> | string;
    name?: Prisma.StringFilter<"store_branches"> | string;
    phone_e164?: Prisma.StringNullableFilter<"store_branches"> | string | null;
    manager_user_id?: Prisma.UuidNullableFilter<"store_branches"> | string | null;
    status?: Prisma.Enumbranch_status_typeFilter<"store_branches"> | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFilter<"store_branches"> | boolean;
    avg_prep_time_minutes?: Prisma.IntFilter<"store_branches"> | number;
    max_concurrent_orders?: Prisma.IntNullableFilter<"store_branches"> | number | null;
    created_at?: Prisma.DateTimeFilter<"store_branches"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"store_branches"> | Date | string;
    branch_catalog_items?: Prisma.Branch_catalog_itemsListRelationFilter;
    branch_operating_hours?: Prisma.Branch_operating_hoursListRelationFilter;
    carts?: Prisma.CartsListRelationFilter;
    deliveries?: Prisma.DeliveriesListRelationFilter;
    delivery_zones?: Prisma.Delivery_zonesListRelationFilter;
    orders?: Prisma.OrdersListRelationFilter;
    addresses?: Prisma.XOR<Prisma.AddressesScalarRelationFilter, Prisma.addressesWhereInput>;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    stores?: Prisma.XOR<Prisma.StoresScalarRelationFilter, Prisma.storesWhereInput>;
}, "id">;
export type store_branchesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone_e164?: Prisma.SortOrderInput | Prisma.SortOrder;
    manager_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    accepts_orders?: Prisma.SortOrder;
    avg_prep_time_minutes?: Prisma.SortOrder;
    max_concurrent_orders?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.store_branchesCountOrderByAggregateInput;
    _avg?: Prisma.store_branchesAvgOrderByAggregateInput;
    _max?: Prisma.store_branchesMaxOrderByAggregateInput;
    _min?: Prisma.store_branchesMinOrderByAggregateInput;
    _sum?: Prisma.store_branchesSumOrderByAggregateInput;
};
export type store_branchesScalarWhereWithAggregatesInput = {
    AND?: Prisma.store_branchesScalarWhereWithAggregatesInput | Prisma.store_branchesScalarWhereWithAggregatesInput[];
    OR?: Prisma.store_branchesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.store_branchesScalarWhereWithAggregatesInput | Prisma.store_branchesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"store_branches"> | string;
    store_id?: Prisma.UuidWithAggregatesFilter<"store_branches"> | string;
    address_id?: Prisma.UuidWithAggregatesFilter<"store_branches"> | string;
    name?: Prisma.StringWithAggregatesFilter<"store_branches"> | string;
    phone_e164?: Prisma.StringNullableWithAggregatesFilter<"store_branches"> | string | null;
    manager_user_id?: Prisma.UuidNullableWithAggregatesFilter<"store_branches"> | string | null;
    status?: Prisma.Enumbranch_status_typeWithAggregatesFilter<"store_branches"> | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolWithAggregatesFilter<"store_branches"> | boolean;
    avg_prep_time_minutes?: Prisma.IntWithAggregatesFilter<"store_branches"> | number;
    max_concurrent_orders?: Prisma.IntNullableWithAggregatesFilter<"store_branches"> | number | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"store_branches"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"store_branches"> | Date | string;
};
export type store_branchesCreateInput = {
    id?: string;
    name: string;
    phone_e164?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsCreateNestedManyWithoutStore_branchesInput;
    branch_operating_hours?: Prisma.branch_operating_hoursCreateNestedManyWithoutStore_branchesInput;
    carts?: Prisma.cartsCreateNestedManyWithoutStore_branchesInput;
    deliveries?: Prisma.deliveriesCreateNestedManyWithoutStore_branchesInput;
    delivery_zones?: Prisma.delivery_zonesCreateNestedManyWithoutStore_branchesInput;
    orders?: Prisma.ordersCreateNestedManyWithoutStore_branchesInput;
    addresses: Prisma.addressesCreateNestedOneWithoutStore_branchesInput;
    users?: Prisma.usersCreateNestedOneWithoutStore_branchesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_branchesInput;
};
export type store_branchesUncheckedCreateInput = {
    id?: string;
    store_id: string;
    address_id: string;
    name: string;
    phone_e164?: string | null;
    manager_user_id?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedCreateNestedManyWithoutStore_branchesInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUncheckedCreateNestedManyWithoutStore_branchesInput;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutStore_branchesInput;
    deliveries?: Prisma.deliveriesUncheckedCreateNestedManyWithoutStore_branchesInput;
    delivery_zones?: Prisma.delivery_zonesUncheckedCreateNestedManyWithoutStore_branchesInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutStore_branchesInput;
};
export type store_branchesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUpdateManyWithoutStore_branchesNestedInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUpdateManyWithoutStore_branchesNestedInput;
    carts?: Prisma.cartsUpdateManyWithoutStore_branchesNestedInput;
    deliveries?: Prisma.deliveriesUpdateManyWithoutStore_branchesNestedInput;
    delivery_zones?: Prisma.delivery_zonesUpdateManyWithoutStore_branchesNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutStore_branchesNestedInput;
    addresses?: Prisma.addressesUpdateOneRequiredWithoutStore_branchesNestedInput;
    users?: Prisma.usersUpdateOneWithoutStore_branchesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_branchesNestedInput;
};
export type store_branchesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    manager_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedUpdateManyWithoutStore_branchesNestedInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUncheckedUpdateManyWithoutStore_branchesNestedInput;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutStore_branchesNestedInput;
    deliveries?: Prisma.deliveriesUncheckedUpdateManyWithoutStore_branchesNestedInput;
    delivery_zones?: Prisma.delivery_zonesUncheckedUpdateManyWithoutStore_branchesNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutStore_branchesNestedInput;
};
export type store_branchesCreateManyInput = {
    id?: string;
    store_id: string;
    address_id: string;
    name: string;
    phone_e164?: string | null;
    manager_user_id?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type store_branchesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type store_branchesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    manager_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Store_branchesListRelationFilter = {
    every?: Prisma.store_branchesWhereInput;
    some?: Prisma.store_branchesWhereInput;
    none?: Prisma.store_branchesWhereInput;
};
export type store_branchesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Store_branchesScalarRelationFilter = {
    is?: Prisma.store_branchesWhereInput;
    isNot?: Prisma.store_branchesWhereInput;
};
export type store_branchesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone_e164?: Prisma.SortOrder;
    manager_user_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    accepts_orders?: Prisma.SortOrder;
    avg_prep_time_minutes?: Prisma.SortOrder;
    max_concurrent_orders?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type store_branchesAvgOrderByAggregateInput = {
    avg_prep_time_minutes?: Prisma.SortOrder;
    max_concurrent_orders?: Prisma.SortOrder;
};
export type store_branchesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone_e164?: Prisma.SortOrder;
    manager_user_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    accepts_orders?: Prisma.SortOrder;
    avg_prep_time_minutes?: Prisma.SortOrder;
    max_concurrent_orders?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type store_branchesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone_e164?: Prisma.SortOrder;
    manager_user_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    accepts_orders?: Prisma.SortOrder;
    avg_prep_time_minutes?: Prisma.SortOrder;
    max_concurrent_orders?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type store_branchesSumOrderByAggregateInput = {
    avg_prep_time_minutes?: Prisma.SortOrder;
    max_concurrent_orders?: Prisma.SortOrder;
};
export type store_branchesCreateNestedManyWithoutAddressesInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutAddressesInput, Prisma.store_branchesUncheckedCreateWithoutAddressesInput> | Prisma.store_branchesCreateWithoutAddressesInput[] | Prisma.store_branchesUncheckedCreateWithoutAddressesInput[];
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutAddressesInput | Prisma.store_branchesCreateOrConnectWithoutAddressesInput[];
    createMany?: Prisma.store_branchesCreateManyAddressesInputEnvelope;
    connect?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
};
export type store_branchesUncheckedCreateNestedManyWithoutAddressesInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutAddressesInput, Prisma.store_branchesUncheckedCreateWithoutAddressesInput> | Prisma.store_branchesCreateWithoutAddressesInput[] | Prisma.store_branchesUncheckedCreateWithoutAddressesInput[];
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutAddressesInput | Prisma.store_branchesCreateOrConnectWithoutAddressesInput[];
    createMany?: Prisma.store_branchesCreateManyAddressesInputEnvelope;
    connect?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
};
export type store_branchesUpdateManyWithoutAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutAddressesInput, Prisma.store_branchesUncheckedCreateWithoutAddressesInput> | Prisma.store_branchesCreateWithoutAddressesInput[] | Prisma.store_branchesUncheckedCreateWithoutAddressesInput[];
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutAddressesInput | Prisma.store_branchesCreateOrConnectWithoutAddressesInput[];
    upsert?: Prisma.store_branchesUpsertWithWhereUniqueWithoutAddressesInput | Prisma.store_branchesUpsertWithWhereUniqueWithoutAddressesInput[];
    createMany?: Prisma.store_branchesCreateManyAddressesInputEnvelope;
    set?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    disconnect?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    delete?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    connect?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    update?: Prisma.store_branchesUpdateWithWhereUniqueWithoutAddressesInput | Prisma.store_branchesUpdateWithWhereUniqueWithoutAddressesInput[];
    updateMany?: Prisma.store_branchesUpdateManyWithWhereWithoutAddressesInput | Prisma.store_branchesUpdateManyWithWhereWithoutAddressesInput[];
    deleteMany?: Prisma.store_branchesScalarWhereInput | Prisma.store_branchesScalarWhereInput[];
};
export type store_branchesUncheckedUpdateManyWithoutAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutAddressesInput, Prisma.store_branchesUncheckedCreateWithoutAddressesInput> | Prisma.store_branchesCreateWithoutAddressesInput[] | Prisma.store_branchesUncheckedCreateWithoutAddressesInput[];
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutAddressesInput | Prisma.store_branchesCreateOrConnectWithoutAddressesInput[];
    upsert?: Prisma.store_branchesUpsertWithWhereUniqueWithoutAddressesInput | Prisma.store_branchesUpsertWithWhereUniqueWithoutAddressesInput[];
    createMany?: Prisma.store_branchesCreateManyAddressesInputEnvelope;
    set?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    disconnect?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    delete?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    connect?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    update?: Prisma.store_branchesUpdateWithWhereUniqueWithoutAddressesInput | Prisma.store_branchesUpdateWithWhereUniqueWithoutAddressesInput[];
    updateMany?: Prisma.store_branchesUpdateManyWithWhereWithoutAddressesInput | Prisma.store_branchesUpdateManyWithWhereWithoutAddressesInput[];
    deleteMany?: Prisma.store_branchesScalarWhereInput | Prisma.store_branchesScalarWhereInput[];
};
export type store_branchesCreateNestedOneWithoutBranch_catalog_itemsInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutBranch_catalog_itemsInput, Prisma.store_branchesUncheckedCreateWithoutBranch_catalog_itemsInput>;
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutBranch_catalog_itemsInput;
    connect?: Prisma.store_branchesWhereUniqueInput;
};
export type store_branchesUpdateOneRequiredWithoutBranch_catalog_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutBranch_catalog_itemsInput, Prisma.store_branchesUncheckedCreateWithoutBranch_catalog_itemsInput>;
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutBranch_catalog_itemsInput;
    upsert?: Prisma.store_branchesUpsertWithoutBranch_catalog_itemsInput;
    connect?: Prisma.store_branchesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_branchesUpdateToOneWithWhereWithoutBranch_catalog_itemsInput, Prisma.store_branchesUpdateWithoutBranch_catalog_itemsInput>, Prisma.store_branchesUncheckedUpdateWithoutBranch_catalog_itemsInput>;
};
export type store_branchesCreateNestedOneWithoutBranch_operating_hoursInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutBranch_operating_hoursInput, Prisma.store_branchesUncheckedCreateWithoutBranch_operating_hoursInput>;
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutBranch_operating_hoursInput;
    connect?: Prisma.store_branchesWhereUniqueInput;
};
export type store_branchesUpdateOneRequiredWithoutBranch_operating_hoursNestedInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutBranch_operating_hoursInput, Prisma.store_branchesUncheckedCreateWithoutBranch_operating_hoursInput>;
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutBranch_operating_hoursInput;
    upsert?: Prisma.store_branchesUpsertWithoutBranch_operating_hoursInput;
    connect?: Prisma.store_branchesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_branchesUpdateToOneWithWhereWithoutBranch_operating_hoursInput, Prisma.store_branchesUpdateWithoutBranch_operating_hoursInput>, Prisma.store_branchesUncheckedUpdateWithoutBranch_operating_hoursInput>;
};
export type store_branchesCreateNestedOneWithoutCartsInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutCartsInput, Prisma.store_branchesUncheckedCreateWithoutCartsInput>;
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutCartsInput;
    connect?: Prisma.store_branchesWhereUniqueInput;
};
export type store_branchesUpdateOneRequiredWithoutCartsNestedInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutCartsInput, Prisma.store_branchesUncheckedCreateWithoutCartsInput>;
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutCartsInput;
    upsert?: Prisma.store_branchesUpsertWithoutCartsInput;
    connect?: Prisma.store_branchesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_branchesUpdateToOneWithWhereWithoutCartsInput, Prisma.store_branchesUpdateWithoutCartsInput>, Prisma.store_branchesUncheckedUpdateWithoutCartsInput>;
};
export type store_branchesCreateNestedOneWithoutDeliveriesInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutDeliveriesInput, Prisma.store_branchesUncheckedCreateWithoutDeliveriesInput>;
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutDeliveriesInput;
    connect?: Prisma.store_branchesWhereUniqueInput;
};
export type store_branchesUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutDeliveriesInput, Prisma.store_branchesUncheckedCreateWithoutDeliveriesInput>;
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutDeliveriesInput;
    upsert?: Prisma.store_branchesUpsertWithoutDeliveriesInput;
    connect?: Prisma.store_branchesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_branchesUpdateToOneWithWhereWithoutDeliveriesInput, Prisma.store_branchesUpdateWithoutDeliveriesInput>, Prisma.store_branchesUncheckedUpdateWithoutDeliveriesInput>;
};
export type store_branchesCreateNestedOneWithoutDelivery_zonesInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutDelivery_zonesInput, Prisma.store_branchesUncheckedCreateWithoutDelivery_zonesInput>;
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutDelivery_zonesInput;
    connect?: Prisma.store_branchesWhereUniqueInput;
};
export type store_branchesUpdateOneRequiredWithoutDelivery_zonesNestedInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutDelivery_zonesInput, Prisma.store_branchesUncheckedCreateWithoutDelivery_zonesInput>;
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutDelivery_zonesInput;
    upsert?: Prisma.store_branchesUpsertWithoutDelivery_zonesInput;
    connect?: Prisma.store_branchesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_branchesUpdateToOneWithWhereWithoutDelivery_zonesInput, Prisma.store_branchesUpdateWithoutDelivery_zonesInput>, Prisma.store_branchesUncheckedUpdateWithoutDelivery_zonesInput>;
};
export type store_branchesCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutOrdersInput, Prisma.store_branchesUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.store_branchesWhereUniqueInput;
};
export type store_branchesUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutOrdersInput, Prisma.store_branchesUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.store_branchesUpsertWithoutOrdersInput;
    connect?: Prisma.store_branchesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_branchesUpdateToOneWithWhereWithoutOrdersInput, Prisma.store_branchesUpdateWithoutOrdersInput>, Prisma.store_branchesUncheckedUpdateWithoutOrdersInput>;
};
export type Enumbranch_status_typeFieldUpdateOperationsInput = {
    set?: $Enums.branch_status_type;
};
export type store_branchesCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutStoresInput, Prisma.store_branchesUncheckedCreateWithoutStoresInput> | Prisma.store_branchesCreateWithoutStoresInput[] | Prisma.store_branchesUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutStoresInput | Prisma.store_branchesCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.store_branchesCreateManyStoresInputEnvelope;
    connect?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
};
export type store_branchesUncheckedCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutStoresInput, Prisma.store_branchesUncheckedCreateWithoutStoresInput> | Prisma.store_branchesCreateWithoutStoresInput[] | Prisma.store_branchesUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutStoresInput | Prisma.store_branchesCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.store_branchesCreateManyStoresInputEnvelope;
    connect?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
};
export type store_branchesUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutStoresInput, Prisma.store_branchesUncheckedCreateWithoutStoresInput> | Prisma.store_branchesCreateWithoutStoresInput[] | Prisma.store_branchesUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutStoresInput | Prisma.store_branchesCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.store_branchesUpsertWithWhereUniqueWithoutStoresInput | Prisma.store_branchesUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.store_branchesCreateManyStoresInputEnvelope;
    set?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    disconnect?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    delete?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    connect?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    update?: Prisma.store_branchesUpdateWithWhereUniqueWithoutStoresInput | Prisma.store_branchesUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.store_branchesUpdateManyWithWhereWithoutStoresInput | Prisma.store_branchesUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.store_branchesScalarWhereInput | Prisma.store_branchesScalarWhereInput[];
};
export type store_branchesUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutStoresInput, Prisma.store_branchesUncheckedCreateWithoutStoresInput> | Prisma.store_branchesCreateWithoutStoresInput[] | Prisma.store_branchesUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutStoresInput | Prisma.store_branchesCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.store_branchesUpsertWithWhereUniqueWithoutStoresInput | Prisma.store_branchesUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.store_branchesCreateManyStoresInputEnvelope;
    set?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    disconnect?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    delete?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    connect?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    update?: Prisma.store_branchesUpdateWithWhereUniqueWithoutStoresInput | Prisma.store_branchesUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.store_branchesUpdateManyWithWhereWithoutStoresInput | Prisma.store_branchesUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.store_branchesScalarWhereInput | Prisma.store_branchesScalarWhereInput[];
};
export type store_branchesCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutUsersInput, Prisma.store_branchesUncheckedCreateWithoutUsersInput> | Prisma.store_branchesCreateWithoutUsersInput[] | Prisma.store_branchesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutUsersInput | Prisma.store_branchesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.store_branchesCreateManyUsersInputEnvelope;
    connect?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
};
export type store_branchesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutUsersInput, Prisma.store_branchesUncheckedCreateWithoutUsersInput> | Prisma.store_branchesCreateWithoutUsersInput[] | Prisma.store_branchesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutUsersInput | Prisma.store_branchesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.store_branchesCreateManyUsersInputEnvelope;
    connect?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
};
export type store_branchesUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutUsersInput, Prisma.store_branchesUncheckedCreateWithoutUsersInput> | Prisma.store_branchesCreateWithoutUsersInput[] | Prisma.store_branchesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutUsersInput | Prisma.store_branchesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.store_branchesUpsertWithWhereUniqueWithoutUsersInput | Prisma.store_branchesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.store_branchesCreateManyUsersInputEnvelope;
    set?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    disconnect?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    delete?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    connect?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    update?: Prisma.store_branchesUpdateWithWhereUniqueWithoutUsersInput | Prisma.store_branchesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.store_branchesUpdateManyWithWhereWithoutUsersInput | Prisma.store_branchesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.store_branchesScalarWhereInput | Prisma.store_branchesScalarWhereInput[];
};
export type store_branchesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.store_branchesCreateWithoutUsersInput, Prisma.store_branchesUncheckedCreateWithoutUsersInput> | Prisma.store_branchesCreateWithoutUsersInput[] | Prisma.store_branchesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.store_branchesCreateOrConnectWithoutUsersInput | Prisma.store_branchesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.store_branchesUpsertWithWhereUniqueWithoutUsersInput | Prisma.store_branchesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.store_branchesCreateManyUsersInputEnvelope;
    set?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    disconnect?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    delete?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    connect?: Prisma.store_branchesWhereUniqueInput | Prisma.store_branchesWhereUniqueInput[];
    update?: Prisma.store_branchesUpdateWithWhereUniqueWithoutUsersInput | Prisma.store_branchesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.store_branchesUpdateManyWithWhereWithoutUsersInput | Prisma.store_branchesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.store_branchesScalarWhereInput | Prisma.store_branchesScalarWhereInput[];
};
export type store_branchesCreateWithoutAddressesInput = {
    id?: string;
    name: string;
    phone_e164?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsCreateNestedManyWithoutStore_branchesInput;
    branch_operating_hours?: Prisma.branch_operating_hoursCreateNestedManyWithoutStore_branchesInput;
    carts?: Prisma.cartsCreateNestedManyWithoutStore_branchesInput;
    deliveries?: Prisma.deliveriesCreateNestedManyWithoutStore_branchesInput;
    delivery_zones?: Prisma.delivery_zonesCreateNestedManyWithoutStore_branchesInput;
    orders?: Prisma.ordersCreateNestedManyWithoutStore_branchesInput;
    users?: Prisma.usersCreateNestedOneWithoutStore_branchesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_branchesInput;
};
export type store_branchesUncheckedCreateWithoutAddressesInput = {
    id?: string;
    store_id: string;
    name: string;
    phone_e164?: string | null;
    manager_user_id?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedCreateNestedManyWithoutStore_branchesInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUncheckedCreateNestedManyWithoutStore_branchesInput;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutStore_branchesInput;
    deliveries?: Prisma.deliveriesUncheckedCreateNestedManyWithoutStore_branchesInput;
    delivery_zones?: Prisma.delivery_zonesUncheckedCreateNestedManyWithoutStore_branchesInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutStore_branchesInput;
};
export type store_branchesCreateOrConnectWithoutAddressesInput = {
    where: Prisma.store_branchesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_branchesCreateWithoutAddressesInput, Prisma.store_branchesUncheckedCreateWithoutAddressesInput>;
};
export type store_branchesCreateManyAddressesInputEnvelope = {
    data: Prisma.store_branchesCreateManyAddressesInput | Prisma.store_branchesCreateManyAddressesInput[];
    skipDuplicates?: boolean;
};
export type store_branchesUpsertWithWhereUniqueWithoutAddressesInput = {
    where: Prisma.store_branchesWhereUniqueInput;
    update: Prisma.XOR<Prisma.store_branchesUpdateWithoutAddressesInput, Prisma.store_branchesUncheckedUpdateWithoutAddressesInput>;
    create: Prisma.XOR<Prisma.store_branchesCreateWithoutAddressesInput, Prisma.store_branchesUncheckedCreateWithoutAddressesInput>;
};
export type store_branchesUpdateWithWhereUniqueWithoutAddressesInput = {
    where: Prisma.store_branchesWhereUniqueInput;
    data: Prisma.XOR<Prisma.store_branchesUpdateWithoutAddressesInput, Prisma.store_branchesUncheckedUpdateWithoutAddressesInput>;
};
export type store_branchesUpdateManyWithWhereWithoutAddressesInput = {
    where: Prisma.store_branchesScalarWhereInput;
    data: Prisma.XOR<Prisma.store_branchesUpdateManyMutationInput, Prisma.store_branchesUncheckedUpdateManyWithoutAddressesInput>;
};
export type store_branchesScalarWhereInput = {
    AND?: Prisma.store_branchesScalarWhereInput | Prisma.store_branchesScalarWhereInput[];
    OR?: Prisma.store_branchesScalarWhereInput[];
    NOT?: Prisma.store_branchesScalarWhereInput | Prisma.store_branchesScalarWhereInput[];
    id?: Prisma.UuidFilter<"store_branches"> | string;
    store_id?: Prisma.UuidFilter<"store_branches"> | string;
    address_id?: Prisma.UuidFilter<"store_branches"> | string;
    name?: Prisma.StringFilter<"store_branches"> | string;
    phone_e164?: Prisma.StringNullableFilter<"store_branches"> | string | null;
    manager_user_id?: Prisma.UuidNullableFilter<"store_branches"> | string | null;
    status?: Prisma.Enumbranch_status_typeFilter<"store_branches"> | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFilter<"store_branches"> | boolean;
    avg_prep_time_minutes?: Prisma.IntFilter<"store_branches"> | number;
    max_concurrent_orders?: Prisma.IntNullableFilter<"store_branches"> | number | null;
    created_at?: Prisma.DateTimeFilter<"store_branches"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"store_branches"> | Date | string;
};
export type store_branchesCreateWithoutBranch_catalog_itemsInput = {
    id?: string;
    name: string;
    phone_e164?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_operating_hours?: Prisma.branch_operating_hoursCreateNestedManyWithoutStore_branchesInput;
    carts?: Prisma.cartsCreateNestedManyWithoutStore_branchesInput;
    deliveries?: Prisma.deliveriesCreateNestedManyWithoutStore_branchesInput;
    delivery_zones?: Prisma.delivery_zonesCreateNestedManyWithoutStore_branchesInput;
    orders?: Prisma.ordersCreateNestedManyWithoutStore_branchesInput;
    addresses: Prisma.addressesCreateNestedOneWithoutStore_branchesInput;
    users?: Prisma.usersCreateNestedOneWithoutStore_branchesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_branchesInput;
};
export type store_branchesUncheckedCreateWithoutBranch_catalog_itemsInput = {
    id?: string;
    store_id: string;
    address_id: string;
    name: string;
    phone_e164?: string | null;
    manager_user_id?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_operating_hours?: Prisma.branch_operating_hoursUncheckedCreateNestedManyWithoutStore_branchesInput;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutStore_branchesInput;
    deliveries?: Prisma.deliveriesUncheckedCreateNestedManyWithoutStore_branchesInput;
    delivery_zones?: Prisma.delivery_zonesUncheckedCreateNestedManyWithoutStore_branchesInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutStore_branchesInput;
};
export type store_branchesCreateOrConnectWithoutBranch_catalog_itemsInput = {
    where: Prisma.store_branchesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_branchesCreateWithoutBranch_catalog_itemsInput, Prisma.store_branchesUncheckedCreateWithoutBranch_catalog_itemsInput>;
};
export type store_branchesUpsertWithoutBranch_catalog_itemsInput = {
    update: Prisma.XOR<Prisma.store_branchesUpdateWithoutBranch_catalog_itemsInput, Prisma.store_branchesUncheckedUpdateWithoutBranch_catalog_itemsInput>;
    create: Prisma.XOR<Prisma.store_branchesCreateWithoutBranch_catalog_itemsInput, Prisma.store_branchesUncheckedCreateWithoutBranch_catalog_itemsInput>;
    where?: Prisma.store_branchesWhereInput;
};
export type store_branchesUpdateToOneWithWhereWithoutBranch_catalog_itemsInput = {
    where?: Prisma.store_branchesWhereInput;
    data: Prisma.XOR<Prisma.store_branchesUpdateWithoutBranch_catalog_itemsInput, Prisma.store_branchesUncheckedUpdateWithoutBranch_catalog_itemsInput>;
};
export type store_branchesUpdateWithoutBranch_catalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_operating_hours?: Prisma.branch_operating_hoursUpdateManyWithoutStore_branchesNestedInput;
    carts?: Prisma.cartsUpdateManyWithoutStore_branchesNestedInput;
    deliveries?: Prisma.deliveriesUpdateManyWithoutStore_branchesNestedInput;
    delivery_zones?: Prisma.delivery_zonesUpdateManyWithoutStore_branchesNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutStore_branchesNestedInput;
    addresses?: Prisma.addressesUpdateOneRequiredWithoutStore_branchesNestedInput;
    users?: Prisma.usersUpdateOneWithoutStore_branchesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_branchesNestedInput;
};
export type store_branchesUncheckedUpdateWithoutBranch_catalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    manager_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_operating_hours?: Prisma.branch_operating_hoursUncheckedUpdateManyWithoutStore_branchesNestedInput;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutStore_branchesNestedInput;
    deliveries?: Prisma.deliveriesUncheckedUpdateManyWithoutStore_branchesNestedInput;
    delivery_zones?: Prisma.delivery_zonesUncheckedUpdateManyWithoutStore_branchesNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutStore_branchesNestedInput;
};
export type store_branchesCreateWithoutBranch_operating_hoursInput = {
    id?: string;
    name: string;
    phone_e164?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsCreateNestedManyWithoutStore_branchesInput;
    carts?: Prisma.cartsCreateNestedManyWithoutStore_branchesInput;
    deliveries?: Prisma.deliveriesCreateNestedManyWithoutStore_branchesInput;
    delivery_zones?: Prisma.delivery_zonesCreateNestedManyWithoutStore_branchesInput;
    orders?: Prisma.ordersCreateNestedManyWithoutStore_branchesInput;
    addresses: Prisma.addressesCreateNestedOneWithoutStore_branchesInput;
    users?: Prisma.usersCreateNestedOneWithoutStore_branchesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_branchesInput;
};
export type store_branchesUncheckedCreateWithoutBranch_operating_hoursInput = {
    id?: string;
    store_id: string;
    address_id: string;
    name: string;
    phone_e164?: string | null;
    manager_user_id?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedCreateNestedManyWithoutStore_branchesInput;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutStore_branchesInput;
    deliveries?: Prisma.deliveriesUncheckedCreateNestedManyWithoutStore_branchesInput;
    delivery_zones?: Prisma.delivery_zonesUncheckedCreateNestedManyWithoutStore_branchesInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutStore_branchesInput;
};
export type store_branchesCreateOrConnectWithoutBranch_operating_hoursInput = {
    where: Prisma.store_branchesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_branchesCreateWithoutBranch_operating_hoursInput, Prisma.store_branchesUncheckedCreateWithoutBranch_operating_hoursInput>;
};
export type store_branchesUpsertWithoutBranch_operating_hoursInput = {
    update: Prisma.XOR<Prisma.store_branchesUpdateWithoutBranch_operating_hoursInput, Prisma.store_branchesUncheckedUpdateWithoutBranch_operating_hoursInput>;
    create: Prisma.XOR<Prisma.store_branchesCreateWithoutBranch_operating_hoursInput, Prisma.store_branchesUncheckedCreateWithoutBranch_operating_hoursInput>;
    where?: Prisma.store_branchesWhereInput;
};
export type store_branchesUpdateToOneWithWhereWithoutBranch_operating_hoursInput = {
    where?: Prisma.store_branchesWhereInput;
    data: Prisma.XOR<Prisma.store_branchesUpdateWithoutBranch_operating_hoursInput, Prisma.store_branchesUncheckedUpdateWithoutBranch_operating_hoursInput>;
};
export type store_branchesUpdateWithoutBranch_operating_hoursInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUpdateManyWithoutStore_branchesNestedInput;
    carts?: Prisma.cartsUpdateManyWithoutStore_branchesNestedInput;
    deliveries?: Prisma.deliveriesUpdateManyWithoutStore_branchesNestedInput;
    delivery_zones?: Prisma.delivery_zonesUpdateManyWithoutStore_branchesNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutStore_branchesNestedInput;
    addresses?: Prisma.addressesUpdateOneRequiredWithoutStore_branchesNestedInput;
    users?: Prisma.usersUpdateOneWithoutStore_branchesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_branchesNestedInput;
};
export type store_branchesUncheckedUpdateWithoutBranch_operating_hoursInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    manager_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedUpdateManyWithoutStore_branchesNestedInput;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutStore_branchesNestedInput;
    deliveries?: Prisma.deliveriesUncheckedUpdateManyWithoutStore_branchesNestedInput;
    delivery_zones?: Prisma.delivery_zonesUncheckedUpdateManyWithoutStore_branchesNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutStore_branchesNestedInput;
};
export type store_branchesCreateWithoutCartsInput = {
    id?: string;
    name: string;
    phone_e164?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsCreateNestedManyWithoutStore_branchesInput;
    branch_operating_hours?: Prisma.branch_operating_hoursCreateNestedManyWithoutStore_branchesInput;
    deliveries?: Prisma.deliveriesCreateNestedManyWithoutStore_branchesInput;
    delivery_zones?: Prisma.delivery_zonesCreateNestedManyWithoutStore_branchesInput;
    orders?: Prisma.ordersCreateNestedManyWithoutStore_branchesInput;
    addresses: Prisma.addressesCreateNestedOneWithoutStore_branchesInput;
    users?: Prisma.usersCreateNestedOneWithoutStore_branchesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_branchesInput;
};
export type store_branchesUncheckedCreateWithoutCartsInput = {
    id?: string;
    store_id: string;
    address_id: string;
    name: string;
    phone_e164?: string | null;
    manager_user_id?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedCreateNestedManyWithoutStore_branchesInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUncheckedCreateNestedManyWithoutStore_branchesInput;
    deliveries?: Prisma.deliveriesUncheckedCreateNestedManyWithoutStore_branchesInput;
    delivery_zones?: Prisma.delivery_zonesUncheckedCreateNestedManyWithoutStore_branchesInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutStore_branchesInput;
};
export type store_branchesCreateOrConnectWithoutCartsInput = {
    where: Prisma.store_branchesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_branchesCreateWithoutCartsInput, Prisma.store_branchesUncheckedCreateWithoutCartsInput>;
};
export type store_branchesUpsertWithoutCartsInput = {
    update: Prisma.XOR<Prisma.store_branchesUpdateWithoutCartsInput, Prisma.store_branchesUncheckedUpdateWithoutCartsInput>;
    create: Prisma.XOR<Prisma.store_branchesCreateWithoutCartsInput, Prisma.store_branchesUncheckedCreateWithoutCartsInput>;
    where?: Prisma.store_branchesWhereInput;
};
export type store_branchesUpdateToOneWithWhereWithoutCartsInput = {
    where?: Prisma.store_branchesWhereInput;
    data: Prisma.XOR<Prisma.store_branchesUpdateWithoutCartsInput, Prisma.store_branchesUncheckedUpdateWithoutCartsInput>;
};
export type store_branchesUpdateWithoutCartsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUpdateManyWithoutStore_branchesNestedInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUpdateManyWithoutStore_branchesNestedInput;
    deliveries?: Prisma.deliveriesUpdateManyWithoutStore_branchesNestedInput;
    delivery_zones?: Prisma.delivery_zonesUpdateManyWithoutStore_branchesNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutStore_branchesNestedInput;
    addresses?: Prisma.addressesUpdateOneRequiredWithoutStore_branchesNestedInput;
    users?: Prisma.usersUpdateOneWithoutStore_branchesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_branchesNestedInput;
};
export type store_branchesUncheckedUpdateWithoutCartsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    manager_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedUpdateManyWithoutStore_branchesNestedInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUncheckedUpdateManyWithoutStore_branchesNestedInput;
    deliveries?: Prisma.deliveriesUncheckedUpdateManyWithoutStore_branchesNestedInput;
    delivery_zones?: Prisma.delivery_zonesUncheckedUpdateManyWithoutStore_branchesNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutStore_branchesNestedInput;
};
export type store_branchesCreateWithoutDeliveriesInput = {
    id?: string;
    name: string;
    phone_e164?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsCreateNestedManyWithoutStore_branchesInput;
    branch_operating_hours?: Prisma.branch_operating_hoursCreateNestedManyWithoutStore_branchesInput;
    carts?: Prisma.cartsCreateNestedManyWithoutStore_branchesInput;
    delivery_zones?: Prisma.delivery_zonesCreateNestedManyWithoutStore_branchesInput;
    orders?: Prisma.ordersCreateNestedManyWithoutStore_branchesInput;
    addresses: Prisma.addressesCreateNestedOneWithoutStore_branchesInput;
    users?: Prisma.usersCreateNestedOneWithoutStore_branchesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_branchesInput;
};
export type store_branchesUncheckedCreateWithoutDeliveriesInput = {
    id?: string;
    store_id: string;
    address_id: string;
    name: string;
    phone_e164?: string | null;
    manager_user_id?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedCreateNestedManyWithoutStore_branchesInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUncheckedCreateNestedManyWithoutStore_branchesInput;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutStore_branchesInput;
    delivery_zones?: Prisma.delivery_zonesUncheckedCreateNestedManyWithoutStore_branchesInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutStore_branchesInput;
};
export type store_branchesCreateOrConnectWithoutDeliveriesInput = {
    where: Prisma.store_branchesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_branchesCreateWithoutDeliveriesInput, Prisma.store_branchesUncheckedCreateWithoutDeliveriesInput>;
};
export type store_branchesUpsertWithoutDeliveriesInput = {
    update: Prisma.XOR<Prisma.store_branchesUpdateWithoutDeliveriesInput, Prisma.store_branchesUncheckedUpdateWithoutDeliveriesInput>;
    create: Prisma.XOR<Prisma.store_branchesCreateWithoutDeliveriesInput, Prisma.store_branchesUncheckedCreateWithoutDeliveriesInput>;
    where?: Prisma.store_branchesWhereInput;
};
export type store_branchesUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: Prisma.store_branchesWhereInput;
    data: Prisma.XOR<Prisma.store_branchesUpdateWithoutDeliveriesInput, Prisma.store_branchesUncheckedUpdateWithoutDeliveriesInput>;
};
export type store_branchesUpdateWithoutDeliveriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUpdateManyWithoutStore_branchesNestedInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUpdateManyWithoutStore_branchesNestedInput;
    carts?: Prisma.cartsUpdateManyWithoutStore_branchesNestedInput;
    delivery_zones?: Prisma.delivery_zonesUpdateManyWithoutStore_branchesNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutStore_branchesNestedInput;
    addresses?: Prisma.addressesUpdateOneRequiredWithoutStore_branchesNestedInput;
    users?: Prisma.usersUpdateOneWithoutStore_branchesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_branchesNestedInput;
};
export type store_branchesUncheckedUpdateWithoutDeliveriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    manager_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedUpdateManyWithoutStore_branchesNestedInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUncheckedUpdateManyWithoutStore_branchesNestedInput;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutStore_branchesNestedInput;
    delivery_zones?: Prisma.delivery_zonesUncheckedUpdateManyWithoutStore_branchesNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutStore_branchesNestedInput;
};
export type store_branchesCreateWithoutDelivery_zonesInput = {
    id?: string;
    name: string;
    phone_e164?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsCreateNestedManyWithoutStore_branchesInput;
    branch_operating_hours?: Prisma.branch_operating_hoursCreateNestedManyWithoutStore_branchesInput;
    carts?: Prisma.cartsCreateNestedManyWithoutStore_branchesInput;
    deliveries?: Prisma.deliveriesCreateNestedManyWithoutStore_branchesInput;
    orders?: Prisma.ordersCreateNestedManyWithoutStore_branchesInput;
    addresses: Prisma.addressesCreateNestedOneWithoutStore_branchesInput;
    users?: Prisma.usersCreateNestedOneWithoutStore_branchesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_branchesInput;
};
export type store_branchesUncheckedCreateWithoutDelivery_zonesInput = {
    id?: string;
    store_id: string;
    address_id: string;
    name: string;
    phone_e164?: string | null;
    manager_user_id?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedCreateNestedManyWithoutStore_branchesInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUncheckedCreateNestedManyWithoutStore_branchesInput;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutStore_branchesInput;
    deliveries?: Prisma.deliveriesUncheckedCreateNestedManyWithoutStore_branchesInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutStore_branchesInput;
};
export type store_branchesCreateOrConnectWithoutDelivery_zonesInput = {
    where: Prisma.store_branchesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_branchesCreateWithoutDelivery_zonesInput, Prisma.store_branchesUncheckedCreateWithoutDelivery_zonesInput>;
};
export type store_branchesUpsertWithoutDelivery_zonesInput = {
    update: Prisma.XOR<Prisma.store_branchesUpdateWithoutDelivery_zonesInput, Prisma.store_branchesUncheckedUpdateWithoutDelivery_zonesInput>;
    create: Prisma.XOR<Prisma.store_branchesCreateWithoutDelivery_zonesInput, Prisma.store_branchesUncheckedCreateWithoutDelivery_zonesInput>;
    where?: Prisma.store_branchesWhereInput;
};
export type store_branchesUpdateToOneWithWhereWithoutDelivery_zonesInput = {
    where?: Prisma.store_branchesWhereInput;
    data: Prisma.XOR<Prisma.store_branchesUpdateWithoutDelivery_zonesInput, Prisma.store_branchesUncheckedUpdateWithoutDelivery_zonesInput>;
};
export type store_branchesUpdateWithoutDelivery_zonesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUpdateManyWithoutStore_branchesNestedInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUpdateManyWithoutStore_branchesNestedInput;
    carts?: Prisma.cartsUpdateManyWithoutStore_branchesNestedInput;
    deliveries?: Prisma.deliveriesUpdateManyWithoutStore_branchesNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutStore_branchesNestedInput;
    addresses?: Prisma.addressesUpdateOneRequiredWithoutStore_branchesNestedInput;
    users?: Prisma.usersUpdateOneWithoutStore_branchesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_branchesNestedInput;
};
export type store_branchesUncheckedUpdateWithoutDelivery_zonesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    manager_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedUpdateManyWithoutStore_branchesNestedInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUncheckedUpdateManyWithoutStore_branchesNestedInput;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutStore_branchesNestedInput;
    deliveries?: Prisma.deliveriesUncheckedUpdateManyWithoutStore_branchesNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutStore_branchesNestedInput;
};
export type store_branchesCreateWithoutOrdersInput = {
    id?: string;
    name: string;
    phone_e164?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsCreateNestedManyWithoutStore_branchesInput;
    branch_operating_hours?: Prisma.branch_operating_hoursCreateNestedManyWithoutStore_branchesInput;
    carts?: Prisma.cartsCreateNestedManyWithoutStore_branchesInput;
    deliveries?: Prisma.deliveriesCreateNestedManyWithoutStore_branchesInput;
    delivery_zones?: Prisma.delivery_zonesCreateNestedManyWithoutStore_branchesInput;
    addresses: Prisma.addressesCreateNestedOneWithoutStore_branchesInput;
    users?: Prisma.usersCreateNestedOneWithoutStore_branchesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_branchesInput;
};
export type store_branchesUncheckedCreateWithoutOrdersInput = {
    id?: string;
    store_id: string;
    address_id: string;
    name: string;
    phone_e164?: string | null;
    manager_user_id?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedCreateNestedManyWithoutStore_branchesInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUncheckedCreateNestedManyWithoutStore_branchesInput;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutStore_branchesInput;
    deliveries?: Prisma.deliveriesUncheckedCreateNestedManyWithoutStore_branchesInput;
    delivery_zones?: Prisma.delivery_zonesUncheckedCreateNestedManyWithoutStore_branchesInput;
};
export type store_branchesCreateOrConnectWithoutOrdersInput = {
    where: Prisma.store_branchesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_branchesCreateWithoutOrdersInput, Prisma.store_branchesUncheckedCreateWithoutOrdersInput>;
};
export type store_branchesUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.store_branchesUpdateWithoutOrdersInput, Prisma.store_branchesUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.store_branchesCreateWithoutOrdersInput, Prisma.store_branchesUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.store_branchesWhereInput;
};
export type store_branchesUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.store_branchesWhereInput;
    data: Prisma.XOR<Prisma.store_branchesUpdateWithoutOrdersInput, Prisma.store_branchesUncheckedUpdateWithoutOrdersInput>;
};
export type store_branchesUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUpdateManyWithoutStore_branchesNestedInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUpdateManyWithoutStore_branchesNestedInput;
    carts?: Prisma.cartsUpdateManyWithoutStore_branchesNestedInput;
    deliveries?: Prisma.deliveriesUpdateManyWithoutStore_branchesNestedInput;
    delivery_zones?: Prisma.delivery_zonesUpdateManyWithoutStore_branchesNestedInput;
    addresses?: Prisma.addressesUpdateOneRequiredWithoutStore_branchesNestedInput;
    users?: Prisma.usersUpdateOneWithoutStore_branchesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_branchesNestedInput;
};
export type store_branchesUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    manager_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedUpdateManyWithoutStore_branchesNestedInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUncheckedUpdateManyWithoutStore_branchesNestedInput;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutStore_branchesNestedInput;
    deliveries?: Prisma.deliveriesUncheckedUpdateManyWithoutStore_branchesNestedInput;
    delivery_zones?: Prisma.delivery_zonesUncheckedUpdateManyWithoutStore_branchesNestedInput;
};
export type store_branchesCreateWithoutStoresInput = {
    id?: string;
    name: string;
    phone_e164?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsCreateNestedManyWithoutStore_branchesInput;
    branch_operating_hours?: Prisma.branch_operating_hoursCreateNestedManyWithoutStore_branchesInput;
    carts?: Prisma.cartsCreateNestedManyWithoutStore_branchesInput;
    deliveries?: Prisma.deliveriesCreateNestedManyWithoutStore_branchesInput;
    delivery_zones?: Prisma.delivery_zonesCreateNestedManyWithoutStore_branchesInput;
    orders?: Prisma.ordersCreateNestedManyWithoutStore_branchesInput;
    addresses: Prisma.addressesCreateNestedOneWithoutStore_branchesInput;
    users?: Prisma.usersCreateNestedOneWithoutStore_branchesInput;
};
export type store_branchesUncheckedCreateWithoutStoresInput = {
    id?: string;
    address_id: string;
    name: string;
    phone_e164?: string | null;
    manager_user_id?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedCreateNestedManyWithoutStore_branchesInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUncheckedCreateNestedManyWithoutStore_branchesInput;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutStore_branchesInput;
    deliveries?: Prisma.deliveriesUncheckedCreateNestedManyWithoutStore_branchesInput;
    delivery_zones?: Prisma.delivery_zonesUncheckedCreateNestedManyWithoutStore_branchesInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutStore_branchesInput;
};
export type store_branchesCreateOrConnectWithoutStoresInput = {
    where: Prisma.store_branchesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_branchesCreateWithoutStoresInput, Prisma.store_branchesUncheckedCreateWithoutStoresInput>;
};
export type store_branchesCreateManyStoresInputEnvelope = {
    data: Prisma.store_branchesCreateManyStoresInput | Prisma.store_branchesCreateManyStoresInput[];
    skipDuplicates?: boolean;
};
export type store_branchesUpsertWithWhereUniqueWithoutStoresInput = {
    where: Prisma.store_branchesWhereUniqueInput;
    update: Prisma.XOR<Prisma.store_branchesUpdateWithoutStoresInput, Prisma.store_branchesUncheckedUpdateWithoutStoresInput>;
    create: Prisma.XOR<Prisma.store_branchesCreateWithoutStoresInput, Prisma.store_branchesUncheckedCreateWithoutStoresInput>;
};
export type store_branchesUpdateWithWhereUniqueWithoutStoresInput = {
    where: Prisma.store_branchesWhereUniqueInput;
    data: Prisma.XOR<Prisma.store_branchesUpdateWithoutStoresInput, Prisma.store_branchesUncheckedUpdateWithoutStoresInput>;
};
export type store_branchesUpdateManyWithWhereWithoutStoresInput = {
    where: Prisma.store_branchesScalarWhereInput;
    data: Prisma.XOR<Prisma.store_branchesUpdateManyMutationInput, Prisma.store_branchesUncheckedUpdateManyWithoutStoresInput>;
};
export type store_branchesCreateWithoutUsersInput = {
    id?: string;
    name: string;
    phone_e164?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsCreateNestedManyWithoutStore_branchesInput;
    branch_operating_hours?: Prisma.branch_operating_hoursCreateNestedManyWithoutStore_branchesInput;
    carts?: Prisma.cartsCreateNestedManyWithoutStore_branchesInput;
    deliveries?: Prisma.deliveriesCreateNestedManyWithoutStore_branchesInput;
    delivery_zones?: Prisma.delivery_zonesCreateNestedManyWithoutStore_branchesInput;
    orders?: Prisma.ordersCreateNestedManyWithoutStore_branchesInput;
    addresses: Prisma.addressesCreateNestedOneWithoutStore_branchesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_branchesInput;
};
export type store_branchesUncheckedCreateWithoutUsersInput = {
    id?: string;
    store_id: string;
    address_id: string;
    name: string;
    phone_e164?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedCreateNestedManyWithoutStore_branchesInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUncheckedCreateNestedManyWithoutStore_branchesInput;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutStore_branchesInput;
    deliveries?: Prisma.deliveriesUncheckedCreateNestedManyWithoutStore_branchesInput;
    delivery_zones?: Prisma.delivery_zonesUncheckedCreateNestedManyWithoutStore_branchesInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutStore_branchesInput;
};
export type store_branchesCreateOrConnectWithoutUsersInput = {
    where: Prisma.store_branchesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_branchesCreateWithoutUsersInput, Prisma.store_branchesUncheckedCreateWithoutUsersInput>;
};
export type store_branchesCreateManyUsersInputEnvelope = {
    data: Prisma.store_branchesCreateManyUsersInput | Prisma.store_branchesCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type store_branchesUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.store_branchesWhereUniqueInput;
    update: Prisma.XOR<Prisma.store_branchesUpdateWithoutUsersInput, Prisma.store_branchesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.store_branchesCreateWithoutUsersInput, Prisma.store_branchesUncheckedCreateWithoutUsersInput>;
};
export type store_branchesUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.store_branchesWhereUniqueInput;
    data: Prisma.XOR<Prisma.store_branchesUpdateWithoutUsersInput, Prisma.store_branchesUncheckedUpdateWithoutUsersInput>;
};
export type store_branchesUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.store_branchesScalarWhereInput;
    data: Prisma.XOR<Prisma.store_branchesUpdateManyMutationInput, Prisma.store_branchesUncheckedUpdateManyWithoutUsersInput>;
};
export type store_branchesCreateManyAddressesInput = {
    id?: string;
    store_id: string;
    name: string;
    phone_e164?: string | null;
    manager_user_id?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type store_branchesUpdateWithoutAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUpdateManyWithoutStore_branchesNestedInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUpdateManyWithoutStore_branchesNestedInput;
    carts?: Prisma.cartsUpdateManyWithoutStore_branchesNestedInput;
    deliveries?: Prisma.deliveriesUpdateManyWithoutStore_branchesNestedInput;
    delivery_zones?: Prisma.delivery_zonesUpdateManyWithoutStore_branchesNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutStore_branchesNestedInput;
    users?: Prisma.usersUpdateOneWithoutStore_branchesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_branchesNestedInput;
};
export type store_branchesUncheckedUpdateWithoutAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    manager_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedUpdateManyWithoutStore_branchesNestedInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUncheckedUpdateManyWithoutStore_branchesNestedInput;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutStore_branchesNestedInput;
    deliveries?: Prisma.deliveriesUncheckedUpdateManyWithoutStore_branchesNestedInput;
    delivery_zones?: Prisma.delivery_zonesUncheckedUpdateManyWithoutStore_branchesNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutStore_branchesNestedInput;
};
export type store_branchesUncheckedUpdateManyWithoutAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    manager_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type store_branchesCreateManyStoresInput = {
    id?: string;
    address_id: string;
    name: string;
    phone_e164?: string | null;
    manager_user_id?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type store_branchesUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUpdateManyWithoutStore_branchesNestedInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUpdateManyWithoutStore_branchesNestedInput;
    carts?: Prisma.cartsUpdateManyWithoutStore_branchesNestedInput;
    deliveries?: Prisma.deliveriesUpdateManyWithoutStore_branchesNestedInput;
    delivery_zones?: Prisma.delivery_zonesUpdateManyWithoutStore_branchesNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutStore_branchesNestedInput;
    addresses?: Prisma.addressesUpdateOneRequiredWithoutStore_branchesNestedInput;
    users?: Prisma.usersUpdateOneWithoutStore_branchesNestedInput;
};
export type store_branchesUncheckedUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    manager_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedUpdateManyWithoutStore_branchesNestedInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUncheckedUpdateManyWithoutStore_branchesNestedInput;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutStore_branchesNestedInput;
    deliveries?: Prisma.deliveriesUncheckedUpdateManyWithoutStore_branchesNestedInput;
    delivery_zones?: Prisma.delivery_zonesUncheckedUpdateManyWithoutStore_branchesNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutStore_branchesNestedInput;
};
export type store_branchesUncheckedUpdateManyWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    manager_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type store_branchesCreateManyUsersInput = {
    id?: string;
    store_id: string;
    address_id: string;
    name: string;
    phone_e164?: string | null;
    status?: $Enums.branch_status_type;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: number;
    max_concurrent_orders?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type store_branchesUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUpdateManyWithoutStore_branchesNestedInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUpdateManyWithoutStore_branchesNestedInput;
    carts?: Prisma.cartsUpdateManyWithoutStore_branchesNestedInput;
    deliveries?: Prisma.deliveriesUpdateManyWithoutStore_branchesNestedInput;
    delivery_zones?: Prisma.delivery_zonesUpdateManyWithoutStore_branchesNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutStore_branchesNestedInput;
    addresses?: Prisma.addressesUpdateOneRequiredWithoutStore_branchesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_branchesNestedInput;
};
export type store_branchesUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedUpdateManyWithoutStore_branchesNestedInput;
    branch_operating_hours?: Prisma.branch_operating_hoursUncheckedUpdateManyWithoutStore_branchesNestedInput;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutStore_branchesNestedInput;
    deliveries?: Prisma.deliveriesUncheckedUpdateManyWithoutStore_branchesNestedInput;
    delivery_zones?: Prisma.delivery_zonesUncheckedUpdateManyWithoutStore_branchesNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutStore_branchesNestedInput;
};
export type store_branchesUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    address_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumbranch_status_typeFieldUpdateOperationsInput | $Enums.branch_status_type;
    accepts_orders?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    avg_prep_time_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_concurrent_orders?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Store_branchesCountOutputType = {
    branch_catalog_items: number;
    branch_operating_hours: number;
    carts: number;
    deliveries: number;
    delivery_zones: number;
    orders: number;
};
export type Store_branchesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    branch_catalog_items?: boolean | Store_branchesCountOutputTypeCountBranch_catalog_itemsArgs;
    branch_operating_hours?: boolean | Store_branchesCountOutputTypeCountBranch_operating_hoursArgs;
    carts?: boolean | Store_branchesCountOutputTypeCountCartsArgs;
    deliveries?: boolean | Store_branchesCountOutputTypeCountDeliveriesArgs;
    delivery_zones?: boolean | Store_branchesCountOutputTypeCountDelivery_zonesArgs;
    orders?: boolean | Store_branchesCountOutputTypeCountOrdersArgs;
};
export type Store_branchesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Store_branchesCountOutputTypeSelect<ExtArgs> | null;
};
export type Store_branchesCountOutputTypeCountBranch_catalog_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.branch_catalog_itemsWhereInput;
};
export type Store_branchesCountOutputTypeCountBranch_operating_hoursArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.branch_operating_hoursWhereInput;
};
export type Store_branchesCountOutputTypeCountCartsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cartsWhereInput;
};
export type Store_branchesCountOutputTypeCountDeliveriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.deliveriesWhereInput;
};
export type Store_branchesCountOutputTypeCountDelivery_zonesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.delivery_zonesWhereInput;
};
export type Store_branchesCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
};
export type store_branchesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    store_id?: boolean;
    address_id?: boolean;
    name?: boolean;
    phone_e164?: boolean;
    manager_user_id?: boolean;
    status?: boolean;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: boolean;
    max_concurrent_orders?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    branch_catalog_items?: boolean | Prisma.store_branches$branch_catalog_itemsArgs<ExtArgs>;
    branch_operating_hours?: boolean | Prisma.store_branches$branch_operating_hoursArgs<ExtArgs>;
    carts?: boolean | Prisma.store_branches$cartsArgs<ExtArgs>;
    deliveries?: boolean | Prisma.store_branches$deliveriesArgs<ExtArgs>;
    delivery_zones?: boolean | Prisma.store_branches$delivery_zonesArgs<ExtArgs>;
    orders?: boolean | Prisma.store_branches$ordersArgs<ExtArgs>;
    addresses?: boolean | Prisma.addressesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.store_branches$usersArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Store_branchesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["store_branches"]>;
export type store_branchesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    store_id?: boolean;
    address_id?: boolean;
    name?: boolean;
    phone_e164?: boolean;
    manager_user_id?: boolean;
    status?: boolean;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: boolean;
    max_concurrent_orders?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    addresses?: boolean | Prisma.addressesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.store_branches$usersArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["store_branches"]>;
export type store_branchesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    store_id?: boolean;
    address_id?: boolean;
    name?: boolean;
    phone_e164?: boolean;
    manager_user_id?: boolean;
    status?: boolean;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: boolean;
    max_concurrent_orders?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    addresses?: boolean | Prisma.addressesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.store_branches$usersArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["store_branches"]>;
export type store_branchesSelectScalar = {
    id?: boolean;
    store_id?: boolean;
    address_id?: boolean;
    name?: boolean;
    phone_e164?: boolean;
    manager_user_id?: boolean;
    status?: boolean;
    accepts_orders?: boolean;
    avg_prep_time_minutes?: boolean;
    max_concurrent_orders?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type store_branchesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "store_id" | "address_id" | "name" | "phone_e164" | "manager_user_id" | "status" | "accepts_orders" | "avg_prep_time_minutes" | "max_concurrent_orders" | "created_at" | "updated_at", ExtArgs["result"]["store_branches"]>;
export type store_branchesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    branch_catalog_items?: boolean | Prisma.store_branches$branch_catalog_itemsArgs<ExtArgs>;
    branch_operating_hours?: boolean | Prisma.store_branches$branch_operating_hoursArgs<ExtArgs>;
    carts?: boolean | Prisma.store_branches$cartsArgs<ExtArgs>;
    deliveries?: boolean | Prisma.store_branches$deliveriesArgs<ExtArgs>;
    delivery_zones?: boolean | Prisma.store_branches$delivery_zonesArgs<ExtArgs>;
    orders?: boolean | Prisma.store_branches$ordersArgs<ExtArgs>;
    addresses?: boolean | Prisma.addressesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.store_branches$usersArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Store_branchesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type store_branchesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    addresses?: boolean | Prisma.addressesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.store_branches$usersArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
};
export type store_branchesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    addresses?: boolean | Prisma.addressesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.store_branches$usersArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
};
export type $store_branchesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "store_branches";
    objects: {
        branch_catalog_items: Prisma.$branch_catalog_itemsPayload<ExtArgs>[];
        branch_operating_hours: Prisma.$branch_operating_hoursPayload<ExtArgs>[];
        carts: Prisma.$cartsPayload<ExtArgs>[];
        deliveries: Prisma.$deliveriesPayload<ExtArgs>[];
        delivery_zones: Prisma.$delivery_zonesPayload<ExtArgs>[];
        orders: Prisma.$ordersPayload<ExtArgs>[];
        addresses: Prisma.$addressesPayload<ExtArgs>;
        users: Prisma.$usersPayload<ExtArgs> | null;
        stores: Prisma.$storesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        store_id: string;
        address_id: string;
        name: string;
        phone_e164: string | null;
        manager_user_id: string | null;
        status: $Enums.branch_status_type;
        accepts_orders: boolean;
        avg_prep_time_minutes: number;
        max_concurrent_orders: number | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["store_branches"]>;
    composites: {};
};
export type store_branchesGetPayload<S extends boolean | null | undefined | store_branchesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$store_branchesPayload, S>;
export type store_branchesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<store_branchesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Store_branchesCountAggregateInputType | true;
};
export interface store_branchesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['store_branches'];
        meta: {
            name: 'store_branches';
        };
    };
    findUnique<T extends store_branchesFindUniqueArgs>(args: Prisma.SelectSubset<T, store_branchesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__store_branchesClient<runtime.Types.Result.GetResult<Prisma.$store_branchesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends store_branchesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, store_branchesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__store_branchesClient<runtime.Types.Result.GetResult<Prisma.$store_branchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends store_branchesFindFirstArgs>(args?: Prisma.SelectSubset<T, store_branchesFindFirstArgs<ExtArgs>>): Prisma.Prisma__store_branchesClient<runtime.Types.Result.GetResult<Prisma.$store_branchesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends store_branchesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, store_branchesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__store_branchesClient<runtime.Types.Result.GetResult<Prisma.$store_branchesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends store_branchesFindManyArgs>(args?: Prisma.SelectSubset<T, store_branchesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$store_branchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends store_branchesCreateArgs>(args: Prisma.SelectSubset<T, store_branchesCreateArgs<ExtArgs>>): Prisma.Prisma__store_branchesClient<runtime.Types.Result.GetResult<Prisma.$store_branchesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends store_branchesCreateManyArgs>(args?: Prisma.SelectSubset<T, store_branchesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends store_branchesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, store_branchesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$store_branchesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends store_branchesDeleteArgs>(args: Prisma.SelectSubset<T, store_branchesDeleteArgs<ExtArgs>>): Prisma.Prisma__store_branchesClient<runtime.Types.Result.GetResult<Prisma.$store_branchesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends store_branchesUpdateArgs>(args: Prisma.SelectSubset<T, store_branchesUpdateArgs<ExtArgs>>): Prisma.Prisma__store_branchesClient<runtime.Types.Result.GetResult<Prisma.$store_branchesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends store_branchesDeleteManyArgs>(args?: Prisma.SelectSubset<T, store_branchesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends store_branchesUpdateManyArgs>(args: Prisma.SelectSubset<T, store_branchesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends store_branchesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, store_branchesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$store_branchesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends store_branchesUpsertArgs>(args: Prisma.SelectSubset<T, store_branchesUpsertArgs<ExtArgs>>): Prisma.Prisma__store_branchesClient<runtime.Types.Result.GetResult<Prisma.$store_branchesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends store_branchesCountArgs>(args?: Prisma.Subset<T, store_branchesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Store_branchesCountAggregateOutputType> : number>;
    aggregate<T extends Store_branchesAggregateArgs>(args: Prisma.Subset<T, Store_branchesAggregateArgs>): Prisma.PrismaPromise<GetStore_branchesAggregateType<T>>;
    groupBy<T extends store_branchesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: store_branchesGroupByArgs['orderBy'];
    } : {
        orderBy?: store_branchesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, store_branchesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStore_branchesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: store_branchesFieldRefs;
}
export interface Prisma__store_branchesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    branch_catalog_items<T extends Prisma.store_branches$branch_catalog_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_branches$branch_catalog_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$branch_catalog_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    branch_operating_hours<T extends Prisma.store_branches$branch_operating_hoursArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_branches$branch_operating_hoursArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$branch_operating_hoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    carts<T extends Prisma.store_branches$cartsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_branches$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    deliveries<T extends Prisma.store_branches$deliveriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_branches$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    delivery_zones<T extends Prisma.store_branches$delivery_zonesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_branches$delivery_zonesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$delivery_zonesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orders<T extends Prisma.store_branches$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_branches$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    addresses<T extends Prisma.addressesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.addressesDefaultArgs<ExtArgs>>): Prisma.Prisma__addressesClient<runtime.Types.Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.store_branches$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_branches$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    stores<T extends Prisma.storesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.storesDefaultArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface store_branchesFieldRefs {
    readonly id: Prisma.FieldRef<"store_branches", 'String'>;
    readonly store_id: Prisma.FieldRef<"store_branches", 'String'>;
    readonly address_id: Prisma.FieldRef<"store_branches", 'String'>;
    readonly name: Prisma.FieldRef<"store_branches", 'String'>;
    readonly phone_e164: Prisma.FieldRef<"store_branches", 'String'>;
    readonly manager_user_id: Prisma.FieldRef<"store_branches", 'String'>;
    readonly status: Prisma.FieldRef<"store_branches", 'branch_status_type'>;
    readonly accepts_orders: Prisma.FieldRef<"store_branches", 'Boolean'>;
    readonly avg_prep_time_minutes: Prisma.FieldRef<"store_branches", 'Int'>;
    readonly max_concurrent_orders: Prisma.FieldRef<"store_branches", 'Int'>;
    readonly created_at: Prisma.FieldRef<"store_branches", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"store_branches", 'DateTime'>;
}
export type store_branchesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.store_branchesSelect<ExtArgs> | null;
    omit?: Prisma.store_branchesOmit<ExtArgs> | null;
    include?: Prisma.store_branchesInclude<ExtArgs> | null;
    where: Prisma.store_branchesWhereUniqueInput;
};
export type store_branchesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.store_branchesSelect<ExtArgs> | null;
    omit?: Prisma.store_branchesOmit<ExtArgs> | null;
    include?: Prisma.store_branchesInclude<ExtArgs> | null;
    where: Prisma.store_branchesWhereUniqueInput;
};
export type store_branchesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.store_branchesSelect<ExtArgs> | null;
    omit?: Prisma.store_branchesOmit<ExtArgs> | null;
    include?: Prisma.store_branchesInclude<ExtArgs> | null;
    where?: Prisma.store_branchesWhereInput;
    orderBy?: Prisma.store_branchesOrderByWithRelationInput | Prisma.store_branchesOrderByWithRelationInput[];
    cursor?: Prisma.store_branchesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Store_branchesScalarFieldEnum | Prisma.Store_branchesScalarFieldEnum[];
};
export type store_branchesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.store_branchesSelect<ExtArgs> | null;
    omit?: Prisma.store_branchesOmit<ExtArgs> | null;
    include?: Prisma.store_branchesInclude<ExtArgs> | null;
    where?: Prisma.store_branchesWhereInput;
    orderBy?: Prisma.store_branchesOrderByWithRelationInput | Prisma.store_branchesOrderByWithRelationInput[];
    cursor?: Prisma.store_branchesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Store_branchesScalarFieldEnum | Prisma.Store_branchesScalarFieldEnum[];
};
export type store_branchesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.store_branchesSelect<ExtArgs> | null;
    omit?: Prisma.store_branchesOmit<ExtArgs> | null;
    include?: Prisma.store_branchesInclude<ExtArgs> | null;
    where?: Prisma.store_branchesWhereInput;
    orderBy?: Prisma.store_branchesOrderByWithRelationInput | Prisma.store_branchesOrderByWithRelationInput[];
    cursor?: Prisma.store_branchesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Store_branchesScalarFieldEnum | Prisma.Store_branchesScalarFieldEnum[];
};
export type store_branchesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.store_branchesSelect<ExtArgs> | null;
    omit?: Prisma.store_branchesOmit<ExtArgs> | null;
    include?: Prisma.store_branchesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.store_branchesCreateInput, Prisma.store_branchesUncheckedCreateInput>;
};
export type store_branchesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.store_branchesCreateManyInput | Prisma.store_branchesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type store_branchesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.store_branchesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.store_branchesOmit<ExtArgs> | null;
    data: Prisma.store_branchesCreateManyInput | Prisma.store_branchesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.store_branchesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type store_branchesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.store_branchesSelect<ExtArgs> | null;
    omit?: Prisma.store_branchesOmit<ExtArgs> | null;
    include?: Prisma.store_branchesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.store_branchesUpdateInput, Prisma.store_branchesUncheckedUpdateInput>;
    where: Prisma.store_branchesWhereUniqueInput;
};
export type store_branchesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.store_branchesUpdateManyMutationInput, Prisma.store_branchesUncheckedUpdateManyInput>;
    where?: Prisma.store_branchesWhereInput;
    limit?: number;
};
export type store_branchesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.store_branchesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.store_branchesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.store_branchesUpdateManyMutationInput, Prisma.store_branchesUncheckedUpdateManyInput>;
    where?: Prisma.store_branchesWhereInput;
    limit?: number;
    include?: Prisma.store_branchesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type store_branchesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.store_branchesSelect<ExtArgs> | null;
    omit?: Prisma.store_branchesOmit<ExtArgs> | null;
    include?: Prisma.store_branchesInclude<ExtArgs> | null;
    where: Prisma.store_branchesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_branchesCreateInput, Prisma.store_branchesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.store_branchesUpdateInput, Prisma.store_branchesUncheckedUpdateInput>;
};
export type store_branchesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.store_branchesSelect<ExtArgs> | null;
    omit?: Prisma.store_branchesOmit<ExtArgs> | null;
    include?: Prisma.store_branchesInclude<ExtArgs> | null;
    where: Prisma.store_branchesWhereUniqueInput;
};
export type store_branchesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.store_branchesWhereInput;
    limit?: number;
};
export type store_branches$branch_catalog_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_catalog_itemsSelect<ExtArgs> | null;
    omit?: Prisma.branch_catalog_itemsOmit<ExtArgs> | null;
    include?: Prisma.branch_catalog_itemsInclude<ExtArgs> | null;
    where?: Prisma.branch_catalog_itemsWhereInput;
    orderBy?: Prisma.branch_catalog_itemsOrderByWithRelationInput | Prisma.branch_catalog_itemsOrderByWithRelationInput[];
    cursor?: Prisma.branch_catalog_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Branch_catalog_itemsScalarFieldEnum | Prisma.Branch_catalog_itemsScalarFieldEnum[];
};
export type store_branches$branch_operating_hoursArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_operating_hoursSelect<ExtArgs> | null;
    omit?: Prisma.branch_operating_hoursOmit<ExtArgs> | null;
    include?: Prisma.branch_operating_hoursInclude<ExtArgs> | null;
    where?: Prisma.branch_operating_hoursWhereInput;
    orderBy?: Prisma.branch_operating_hoursOrderByWithRelationInput | Prisma.branch_operating_hoursOrderByWithRelationInput[];
    cursor?: Prisma.branch_operating_hoursWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Branch_operating_hoursScalarFieldEnum | Prisma.Branch_operating_hoursScalarFieldEnum[];
};
export type store_branches$cartsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    where?: Prisma.cartsWhereInput;
    orderBy?: Prisma.cartsOrderByWithRelationInput | Prisma.cartsOrderByWithRelationInput[];
    cursor?: Prisma.cartsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartsScalarFieldEnum | Prisma.CartsScalarFieldEnum[];
};
export type store_branches$deliveriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type store_branches$delivery_zonesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.delivery_zonesSelect<ExtArgs> | null;
    omit?: Prisma.delivery_zonesOmit<ExtArgs> | null;
    include?: Prisma.delivery_zonesInclude<ExtArgs> | null;
    where?: Prisma.delivery_zonesWhereInput;
    orderBy?: Prisma.delivery_zonesOrderByWithRelationInput | Prisma.delivery_zonesOrderByWithRelationInput[];
    cursor?: Prisma.delivery_zonesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Delivery_zonesScalarFieldEnum | Prisma.Delivery_zonesScalarFieldEnum[];
};
export type store_branches$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithRelationInput | Prisma.ordersOrderByWithRelationInput[];
    cursor?: Prisma.ordersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdersScalarFieldEnum | Prisma.OrdersScalarFieldEnum[];
};
export type store_branches$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type store_branchesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.store_branchesSelect<ExtArgs> | null;
    omit?: Prisma.store_branchesOmit<ExtArgs> | null;
    include?: Prisma.store_branchesInclude<ExtArgs> | null;
};
export {};
