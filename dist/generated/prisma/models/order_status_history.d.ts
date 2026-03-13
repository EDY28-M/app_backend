import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type order_status_historyModel = runtime.Types.Result.DefaultSelection<Prisma.$order_status_historyPayload>;
export type AggregateOrder_status_history = {
    _count: Order_status_historyCountAggregateOutputType | null;
    _min: Order_status_historyMinAggregateOutputType | null;
    _max: Order_status_historyMaxAggregateOutputType | null;
};
export type Order_status_historyMinAggregateOutputType = {
    id: string | null;
    order_id: string | null;
    old_status: $Enums.order_status_type | null;
    new_status: $Enums.order_status_type | null;
    changed_by_user_id: string | null;
    source: $Enums.status_change_source_type | null;
    notes: string | null;
    created_at: Date | null;
};
export type Order_status_historyMaxAggregateOutputType = {
    id: string | null;
    order_id: string | null;
    old_status: $Enums.order_status_type | null;
    new_status: $Enums.order_status_type | null;
    changed_by_user_id: string | null;
    source: $Enums.status_change_source_type | null;
    notes: string | null;
    created_at: Date | null;
};
export type Order_status_historyCountAggregateOutputType = {
    id: number;
    order_id: number;
    old_status: number;
    new_status: number;
    changed_by_user_id: number;
    source: number;
    notes: number;
    created_at: number;
    _all: number;
};
export type Order_status_historyMinAggregateInputType = {
    id?: true;
    order_id?: true;
    old_status?: true;
    new_status?: true;
    changed_by_user_id?: true;
    source?: true;
    notes?: true;
    created_at?: true;
};
export type Order_status_historyMaxAggregateInputType = {
    id?: true;
    order_id?: true;
    old_status?: true;
    new_status?: true;
    changed_by_user_id?: true;
    source?: true;
    notes?: true;
    created_at?: true;
};
export type Order_status_historyCountAggregateInputType = {
    id?: true;
    order_id?: true;
    old_status?: true;
    new_status?: true;
    changed_by_user_id?: true;
    source?: true;
    notes?: true;
    created_at?: true;
    _all?: true;
};
export type Order_status_historyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_status_historyWhereInput;
    orderBy?: Prisma.order_status_historyOrderByWithRelationInput | Prisma.order_status_historyOrderByWithRelationInput[];
    cursor?: Prisma.order_status_historyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Order_status_historyCountAggregateInputType;
    _min?: Order_status_historyMinAggregateInputType;
    _max?: Order_status_historyMaxAggregateInputType;
};
export type GetOrder_status_historyAggregateType<T extends Order_status_historyAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder_status_history]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder_status_history[P]> : Prisma.GetScalarType<T[P], AggregateOrder_status_history[P]>;
};
export type order_status_historyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_status_historyWhereInput;
    orderBy?: Prisma.order_status_historyOrderByWithAggregationInput | Prisma.order_status_historyOrderByWithAggregationInput[];
    by: Prisma.Order_status_historyScalarFieldEnum[] | Prisma.Order_status_historyScalarFieldEnum;
    having?: Prisma.order_status_historyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Order_status_historyCountAggregateInputType | true;
    _min?: Order_status_historyMinAggregateInputType;
    _max?: Order_status_historyMaxAggregateInputType;
};
export type Order_status_historyGroupByOutputType = {
    id: string;
    order_id: string;
    old_status: $Enums.order_status_type | null;
    new_status: $Enums.order_status_type;
    changed_by_user_id: string | null;
    source: $Enums.status_change_source_type;
    notes: string | null;
    created_at: Date;
    _count: Order_status_historyCountAggregateOutputType | null;
    _min: Order_status_historyMinAggregateOutputType | null;
    _max: Order_status_historyMaxAggregateOutputType | null;
};
type GetOrder_status_historyGroupByPayload<T extends order_status_historyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Order_status_historyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Order_status_historyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Order_status_historyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Order_status_historyGroupByOutputType[P]>;
}>>;
export type order_status_historyWhereInput = {
    AND?: Prisma.order_status_historyWhereInput | Prisma.order_status_historyWhereInput[];
    OR?: Prisma.order_status_historyWhereInput[];
    NOT?: Prisma.order_status_historyWhereInput | Prisma.order_status_historyWhereInput[];
    id?: Prisma.UuidFilter<"order_status_history"> | string;
    order_id?: Prisma.UuidFilter<"order_status_history"> | string;
    old_status?: Prisma.Enumorder_status_typeNullableFilter<"order_status_history"> | $Enums.order_status_type | null;
    new_status?: Prisma.Enumorder_status_typeFilter<"order_status_history"> | $Enums.order_status_type;
    changed_by_user_id?: Prisma.UuidNullableFilter<"order_status_history"> | string | null;
    source?: Prisma.Enumstatus_change_source_typeFilter<"order_status_history"> | $Enums.status_change_source_type;
    notes?: Prisma.StringNullableFilter<"order_status_history"> | string | null;
    created_at?: Prisma.DateTimeFilter<"order_status_history"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
};
export type order_status_historyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    old_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    new_status?: Prisma.SortOrder;
    changed_by_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    orders?: Prisma.ordersOrderByWithRelationInput;
};
export type order_status_historyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.order_status_historyWhereInput | Prisma.order_status_historyWhereInput[];
    OR?: Prisma.order_status_historyWhereInput[];
    NOT?: Prisma.order_status_historyWhereInput | Prisma.order_status_historyWhereInput[];
    order_id?: Prisma.UuidFilter<"order_status_history"> | string;
    old_status?: Prisma.Enumorder_status_typeNullableFilter<"order_status_history"> | $Enums.order_status_type | null;
    new_status?: Prisma.Enumorder_status_typeFilter<"order_status_history"> | $Enums.order_status_type;
    changed_by_user_id?: Prisma.UuidNullableFilter<"order_status_history"> | string | null;
    source?: Prisma.Enumstatus_change_source_typeFilter<"order_status_history"> | $Enums.status_change_source_type;
    notes?: Prisma.StringNullableFilter<"order_status_history"> | string | null;
    created_at?: Prisma.DateTimeFilter<"order_status_history"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
}, "id">;
export type order_status_historyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    old_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    new_status?: Prisma.SortOrder;
    changed_by_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.order_status_historyCountOrderByAggregateInput;
    _max?: Prisma.order_status_historyMaxOrderByAggregateInput;
    _min?: Prisma.order_status_historyMinOrderByAggregateInput;
};
export type order_status_historyScalarWhereWithAggregatesInput = {
    AND?: Prisma.order_status_historyScalarWhereWithAggregatesInput | Prisma.order_status_historyScalarWhereWithAggregatesInput[];
    OR?: Prisma.order_status_historyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.order_status_historyScalarWhereWithAggregatesInput | Prisma.order_status_historyScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"order_status_history"> | string;
    order_id?: Prisma.UuidWithAggregatesFilter<"order_status_history"> | string;
    old_status?: Prisma.Enumorder_status_typeNullableWithAggregatesFilter<"order_status_history"> | $Enums.order_status_type | null;
    new_status?: Prisma.Enumorder_status_typeWithAggregatesFilter<"order_status_history"> | $Enums.order_status_type;
    changed_by_user_id?: Prisma.UuidNullableWithAggregatesFilter<"order_status_history"> | string | null;
    source?: Prisma.Enumstatus_change_source_typeWithAggregatesFilter<"order_status_history"> | $Enums.status_change_source_type;
    notes?: Prisma.StringNullableWithAggregatesFilter<"order_status_history"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"order_status_history"> | Date | string;
};
export type order_status_historyCreateInput = {
    id?: string;
    old_status?: $Enums.order_status_type | null;
    new_status: $Enums.order_status_type;
    source: $Enums.status_change_source_type;
    notes?: string | null;
    created_at?: Date | string;
    users?: Prisma.usersCreateNestedOneWithoutOrder_status_historyInput;
    orders: Prisma.ordersCreateNestedOneWithoutOrder_status_historyInput;
};
export type order_status_historyUncheckedCreateInput = {
    id?: string;
    order_id: string;
    old_status?: $Enums.order_status_type | null;
    new_status: $Enums.order_status_type;
    changed_by_user_id?: string | null;
    source: $Enums.status_change_source_type;
    notes?: string | null;
    created_at?: Date | string;
};
export type order_status_historyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    old_status?: Prisma.NullableEnumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type | null;
    new_status?: Prisma.Enumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type;
    source?: Prisma.Enumstatus_change_source_typeFieldUpdateOperationsInput | $Enums.status_change_source_type;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneWithoutOrder_status_historyNestedInput;
    orders?: Prisma.ordersUpdateOneRequiredWithoutOrder_status_historyNestedInput;
};
export type order_status_historyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    old_status?: Prisma.NullableEnumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type | null;
    new_status?: Prisma.Enumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type;
    changed_by_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.Enumstatus_change_source_typeFieldUpdateOperationsInput | $Enums.status_change_source_type;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type order_status_historyCreateManyInput = {
    id?: string;
    order_id: string;
    old_status?: $Enums.order_status_type | null;
    new_status: $Enums.order_status_type;
    changed_by_user_id?: string | null;
    source: $Enums.status_change_source_type;
    notes?: string | null;
    created_at?: Date | string;
};
export type order_status_historyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    old_status?: Prisma.NullableEnumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type | null;
    new_status?: Prisma.Enumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type;
    source?: Prisma.Enumstatus_change_source_typeFieldUpdateOperationsInput | $Enums.status_change_source_type;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type order_status_historyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    old_status?: Prisma.NullableEnumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type | null;
    new_status?: Prisma.Enumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type;
    changed_by_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.Enumstatus_change_source_typeFieldUpdateOperationsInput | $Enums.status_change_source_type;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type order_status_historyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    old_status?: Prisma.SortOrder;
    new_status?: Prisma.SortOrder;
    changed_by_user_id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type order_status_historyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    old_status?: Prisma.SortOrder;
    new_status?: Prisma.SortOrder;
    changed_by_user_id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type order_status_historyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    old_status?: Prisma.SortOrder;
    new_status?: Prisma.SortOrder;
    changed_by_user_id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type Order_status_historyListRelationFilter = {
    every?: Prisma.order_status_historyWhereInput;
    some?: Prisma.order_status_historyWhereInput;
    none?: Prisma.order_status_historyWhereInput;
};
export type order_status_historyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NullableEnumorder_status_typeFieldUpdateOperationsInput = {
    set?: $Enums.order_status_type | null;
};
export type Enumorder_status_typeFieldUpdateOperationsInput = {
    set?: $Enums.order_status_type;
};
export type Enumstatus_change_source_typeFieldUpdateOperationsInput = {
    set?: $Enums.status_change_source_type;
};
export type order_status_historyCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.order_status_historyCreateWithoutOrdersInput, Prisma.order_status_historyUncheckedCreateWithoutOrdersInput> | Prisma.order_status_historyCreateWithoutOrdersInput[] | Prisma.order_status_historyUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_status_historyCreateOrConnectWithoutOrdersInput | Prisma.order_status_historyCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.order_status_historyCreateManyOrdersInputEnvelope;
    connect?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
};
export type order_status_historyUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.order_status_historyCreateWithoutOrdersInput, Prisma.order_status_historyUncheckedCreateWithoutOrdersInput> | Prisma.order_status_historyCreateWithoutOrdersInput[] | Prisma.order_status_historyUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_status_historyCreateOrConnectWithoutOrdersInput | Prisma.order_status_historyCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.order_status_historyCreateManyOrdersInputEnvelope;
    connect?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
};
export type order_status_historyUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.order_status_historyCreateWithoutOrdersInput, Prisma.order_status_historyUncheckedCreateWithoutOrdersInput> | Prisma.order_status_historyCreateWithoutOrdersInput[] | Prisma.order_status_historyUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_status_historyCreateOrConnectWithoutOrdersInput | Prisma.order_status_historyCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.order_status_historyUpsertWithWhereUniqueWithoutOrdersInput | Prisma.order_status_historyUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.order_status_historyCreateManyOrdersInputEnvelope;
    set?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
    disconnect?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
    delete?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
    connect?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
    update?: Prisma.order_status_historyUpdateWithWhereUniqueWithoutOrdersInput | Prisma.order_status_historyUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.order_status_historyUpdateManyWithWhereWithoutOrdersInput | Prisma.order_status_historyUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.order_status_historyScalarWhereInput | Prisma.order_status_historyScalarWhereInput[];
};
export type order_status_historyUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.order_status_historyCreateWithoutOrdersInput, Prisma.order_status_historyUncheckedCreateWithoutOrdersInput> | Prisma.order_status_historyCreateWithoutOrdersInput[] | Prisma.order_status_historyUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_status_historyCreateOrConnectWithoutOrdersInput | Prisma.order_status_historyCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.order_status_historyUpsertWithWhereUniqueWithoutOrdersInput | Prisma.order_status_historyUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.order_status_historyCreateManyOrdersInputEnvelope;
    set?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
    disconnect?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
    delete?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
    connect?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
    update?: Prisma.order_status_historyUpdateWithWhereUniqueWithoutOrdersInput | Prisma.order_status_historyUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.order_status_historyUpdateManyWithWhereWithoutOrdersInput | Prisma.order_status_historyUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.order_status_historyScalarWhereInput | Prisma.order_status_historyScalarWhereInput[];
};
export type order_status_historyCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.order_status_historyCreateWithoutUsersInput, Prisma.order_status_historyUncheckedCreateWithoutUsersInput> | Prisma.order_status_historyCreateWithoutUsersInput[] | Prisma.order_status_historyUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.order_status_historyCreateOrConnectWithoutUsersInput | Prisma.order_status_historyCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.order_status_historyCreateManyUsersInputEnvelope;
    connect?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
};
export type order_status_historyUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.order_status_historyCreateWithoutUsersInput, Prisma.order_status_historyUncheckedCreateWithoutUsersInput> | Prisma.order_status_historyCreateWithoutUsersInput[] | Prisma.order_status_historyUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.order_status_historyCreateOrConnectWithoutUsersInput | Prisma.order_status_historyCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.order_status_historyCreateManyUsersInputEnvelope;
    connect?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
};
export type order_status_historyUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.order_status_historyCreateWithoutUsersInput, Prisma.order_status_historyUncheckedCreateWithoutUsersInput> | Prisma.order_status_historyCreateWithoutUsersInput[] | Prisma.order_status_historyUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.order_status_historyCreateOrConnectWithoutUsersInput | Prisma.order_status_historyCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.order_status_historyUpsertWithWhereUniqueWithoutUsersInput | Prisma.order_status_historyUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.order_status_historyCreateManyUsersInputEnvelope;
    set?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
    disconnect?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
    delete?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
    connect?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
    update?: Prisma.order_status_historyUpdateWithWhereUniqueWithoutUsersInput | Prisma.order_status_historyUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.order_status_historyUpdateManyWithWhereWithoutUsersInput | Prisma.order_status_historyUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.order_status_historyScalarWhereInput | Prisma.order_status_historyScalarWhereInput[];
};
export type order_status_historyUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.order_status_historyCreateWithoutUsersInput, Prisma.order_status_historyUncheckedCreateWithoutUsersInput> | Prisma.order_status_historyCreateWithoutUsersInput[] | Prisma.order_status_historyUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.order_status_historyCreateOrConnectWithoutUsersInput | Prisma.order_status_historyCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.order_status_historyUpsertWithWhereUniqueWithoutUsersInput | Prisma.order_status_historyUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.order_status_historyCreateManyUsersInputEnvelope;
    set?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
    disconnect?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
    delete?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
    connect?: Prisma.order_status_historyWhereUniqueInput | Prisma.order_status_historyWhereUniqueInput[];
    update?: Prisma.order_status_historyUpdateWithWhereUniqueWithoutUsersInput | Prisma.order_status_historyUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.order_status_historyUpdateManyWithWhereWithoutUsersInput | Prisma.order_status_historyUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.order_status_historyScalarWhereInput | Prisma.order_status_historyScalarWhereInput[];
};
export type order_status_historyCreateWithoutOrdersInput = {
    id?: string;
    old_status?: $Enums.order_status_type | null;
    new_status: $Enums.order_status_type;
    source: $Enums.status_change_source_type;
    notes?: string | null;
    created_at?: Date | string;
    users?: Prisma.usersCreateNestedOneWithoutOrder_status_historyInput;
};
export type order_status_historyUncheckedCreateWithoutOrdersInput = {
    id?: string;
    old_status?: $Enums.order_status_type | null;
    new_status: $Enums.order_status_type;
    changed_by_user_id?: string | null;
    source: $Enums.status_change_source_type;
    notes?: string | null;
    created_at?: Date | string;
};
export type order_status_historyCreateOrConnectWithoutOrdersInput = {
    where: Prisma.order_status_historyWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_status_historyCreateWithoutOrdersInput, Prisma.order_status_historyUncheckedCreateWithoutOrdersInput>;
};
export type order_status_historyCreateManyOrdersInputEnvelope = {
    data: Prisma.order_status_historyCreateManyOrdersInput | Prisma.order_status_historyCreateManyOrdersInput[];
    skipDuplicates?: boolean;
};
export type order_status_historyUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.order_status_historyWhereUniqueInput;
    update: Prisma.XOR<Prisma.order_status_historyUpdateWithoutOrdersInput, Prisma.order_status_historyUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.order_status_historyCreateWithoutOrdersInput, Prisma.order_status_historyUncheckedCreateWithoutOrdersInput>;
};
export type order_status_historyUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.order_status_historyWhereUniqueInput;
    data: Prisma.XOR<Prisma.order_status_historyUpdateWithoutOrdersInput, Prisma.order_status_historyUncheckedUpdateWithoutOrdersInput>;
};
export type order_status_historyUpdateManyWithWhereWithoutOrdersInput = {
    where: Prisma.order_status_historyScalarWhereInput;
    data: Prisma.XOR<Prisma.order_status_historyUpdateManyMutationInput, Prisma.order_status_historyUncheckedUpdateManyWithoutOrdersInput>;
};
export type order_status_historyScalarWhereInput = {
    AND?: Prisma.order_status_historyScalarWhereInput | Prisma.order_status_historyScalarWhereInput[];
    OR?: Prisma.order_status_historyScalarWhereInput[];
    NOT?: Prisma.order_status_historyScalarWhereInput | Prisma.order_status_historyScalarWhereInput[];
    id?: Prisma.UuidFilter<"order_status_history"> | string;
    order_id?: Prisma.UuidFilter<"order_status_history"> | string;
    old_status?: Prisma.Enumorder_status_typeNullableFilter<"order_status_history"> | $Enums.order_status_type | null;
    new_status?: Prisma.Enumorder_status_typeFilter<"order_status_history"> | $Enums.order_status_type;
    changed_by_user_id?: Prisma.UuidNullableFilter<"order_status_history"> | string | null;
    source?: Prisma.Enumstatus_change_source_typeFilter<"order_status_history"> | $Enums.status_change_source_type;
    notes?: Prisma.StringNullableFilter<"order_status_history"> | string | null;
    created_at?: Prisma.DateTimeFilter<"order_status_history"> | Date | string;
};
export type order_status_historyCreateWithoutUsersInput = {
    id?: string;
    old_status?: $Enums.order_status_type | null;
    new_status: $Enums.order_status_type;
    source: $Enums.status_change_source_type;
    notes?: string | null;
    created_at?: Date | string;
    orders: Prisma.ordersCreateNestedOneWithoutOrder_status_historyInput;
};
export type order_status_historyUncheckedCreateWithoutUsersInput = {
    id?: string;
    order_id: string;
    old_status?: $Enums.order_status_type | null;
    new_status: $Enums.order_status_type;
    source: $Enums.status_change_source_type;
    notes?: string | null;
    created_at?: Date | string;
};
export type order_status_historyCreateOrConnectWithoutUsersInput = {
    where: Prisma.order_status_historyWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_status_historyCreateWithoutUsersInput, Prisma.order_status_historyUncheckedCreateWithoutUsersInput>;
};
export type order_status_historyCreateManyUsersInputEnvelope = {
    data: Prisma.order_status_historyCreateManyUsersInput | Prisma.order_status_historyCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type order_status_historyUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.order_status_historyWhereUniqueInput;
    update: Prisma.XOR<Prisma.order_status_historyUpdateWithoutUsersInput, Prisma.order_status_historyUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.order_status_historyCreateWithoutUsersInput, Prisma.order_status_historyUncheckedCreateWithoutUsersInput>;
};
export type order_status_historyUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.order_status_historyWhereUniqueInput;
    data: Prisma.XOR<Prisma.order_status_historyUpdateWithoutUsersInput, Prisma.order_status_historyUncheckedUpdateWithoutUsersInput>;
};
export type order_status_historyUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.order_status_historyScalarWhereInput;
    data: Prisma.XOR<Prisma.order_status_historyUpdateManyMutationInput, Prisma.order_status_historyUncheckedUpdateManyWithoutUsersInput>;
};
export type order_status_historyCreateManyOrdersInput = {
    id?: string;
    old_status?: $Enums.order_status_type | null;
    new_status: $Enums.order_status_type;
    changed_by_user_id?: string | null;
    source: $Enums.status_change_source_type;
    notes?: string | null;
    created_at?: Date | string;
};
export type order_status_historyUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    old_status?: Prisma.NullableEnumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type | null;
    new_status?: Prisma.Enumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type;
    source?: Prisma.Enumstatus_change_source_typeFieldUpdateOperationsInput | $Enums.status_change_source_type;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneWithoutOrder_status_historyNestedInput;
};
export type order_status_historyUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    old_status?: Prisma.NullableEnumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type | null;
    new_status?: Prisma.Enumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type;
    changed_by_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.Enumstatus_change_source_typeFieldUpdateOperationsInput | $Enums.status_change_source_type;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type order_status_historyUncheckedUpdateManyWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    old_status?: Prisma.NullableEnumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type | null;
    new_status?: Prisma.Enumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type;
    changed_by_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.Enumstatus_change_source_typeFieldUpdateOperationsInput | $Enums.status_change_source_type;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type order_status_historyCreateManyUsersInput = {
    id?: string;
    order_id: string;
    old_status?: $Enums.order_status_type | null;
    new_status: $Enums.order_status_type;
    source: $Enums.status_change_source_type;
    notes?: string | null;
    created_at?: Date | string;
};
export type order_status_historyUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    old_status?: Prisma.NullableEnumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type | null;
    new_status?: Prisma.Enumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type;
    source?: Prisma.Enumstatus_change_source_typeFieldUpdateOperationsInput | $Enums.status_change_source_type;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.ordersUpdateOneRequiredWithoutOrder_status_historyNestedInput;
};
export type order_status_historyUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    old_status?: Prisma.NullableEnumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type | null;
    new_status?: Prisma.Enumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type;
    source?: Prisma.Enumstatus_change_source_typeFieldUpdateOperationsInput | $Enums.status_change_source_type;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type order_status_historyUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    old_status?: Prisma.NullableEnumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type | null;
    new_status?: Prisma.Enumorder_status_typeFieldUpdateOperationsInput | $Enums.order_status_type;
    source?: Prisma.Enumstatus_change_source_typeFieldUpdateOperationsInput | $Enums.status_change_source_type;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type order_status_historySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_id?: boolean;
    old_status?: boolean;
    new_status?: boolean;
    changed_by_user_id?: boolean;
    source?: boolean;
    notes?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.order_status_history$usersArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order_status_history"]>;
export type order_status_historySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_id?: boolean;
    old_status?: boolean;
    new_status?: boolean;
    changed_by_user_id?: boolean;
    source?: boolean;
    notes?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.order_status_history$usersArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order_status_history"]>;
export type order_status_historySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_id?: boolean;
    old_status?: boolean;
    new_status?: boolean;
    changed_by_user_id?: boolean;
    source?: boolean;
    notes?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.order_status_history$usersArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order_status_history"]>;
export type order_status_historySelectScalar = {
    id?: boolean;
    order_id?: boolean;
    old_status?: boolean;
    new_status?: boolean;
    changed_by_user_id?: boolean;
    source?: boolean;
    notes?: boolean;
    created_at?: boolean;
};
export type order_status_historyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "order_id" | "old_status" | "new_status" | "changed_by_user_id" | "source" | "notes" | "created_at", ExtArgs["result"]["order_status_history"]>;
export type order_status_historyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.order_status_history$usersArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type order_status_historyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.order_status_history$usersArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type order_status_historyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.order_status_history$usersArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type $order_status_historyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "order_status_history";
    objects: {
        users: Prisma.$usersPayload<ExtArgs> | null;
        orders: Prisma.$ordersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        order_id: string;
        old_status: $Enums.order_status_type | null;
        new_status: $Enums.order_status_type;
        changed_by_user_id: string | null;
        source: $Enums.status_change_source_type;
        notes: string | null;
        created_at: Date;
    }, ExtArgs["result"]["order_status_history"]>;
    composites: {};
};
export type order_status_historyGetPayload<S extends boolean | null | undefined | order_status_historyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$order_status_historyPayload, S>;
export type order_status_historyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<order_status_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Order_status_historyCountAggregateInputType | true;
};
export interface order_status_historyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['order_status_history'];
        meta: {
            name: 'order_status_history';
        };
    };
    findUnique<T extends order_status_historyFindUniqueArgs>(args: Prisma.SelectSubset<T, order_status_historyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__order_status_historyClient<runtime.Types.Result.GetResult<Prisma.$order_status_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends order_status_historyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, order_status_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__order_status_historyClient<runtime.Types.Result.GetResult<Prisma.$order_status_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends order_status_historyFindFirstArgs>(args?: Prisma.SelectSubset<T, order_status_historyFindFirstArgs<ExtArgs>>): Prisma.Prisma__order_status_historyClient<runtime.Types.Result.GetResult<Prisma.$order_status_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends order_status_historyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, order_status_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__order_status_historyClient<runtime.Types.Result.GetResult<Prisma.$order_status_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends order_status_historyFindManyArgs>(args?: Prisma.SelectSubset<T, order_status_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_status_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends order_status_historyCreateArgs>(args: Prisma.SelectSubset<T, order_status_historyCreateArgs<ExtArgs>>): Prisma.Prisma__order_status_historyClient<runtime.Types.Result.GetResult<Prisma.$order_status_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends order_status_historyCreateManyArgs>(args?: Prisma.SelectSubset<T, order_status_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends order_status_historyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, order_status_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_status_historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends order_status_historyDeleteArgs>(args: Prisma.SelectSubset<T, order_status_historyDeleteArgs<ExtArgs>>): Prisma.Prisma__order_status_historyClient<runtime.Types.Result.GetResult<Prisma.$order_status_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends order_status_historyUpdateArgs>(args: Prisma.SelectSubset<T, order_status_historyUpdateArgs<ExtArgs>>): Prisma.Prisma__order_status_historyClient<runtime.Types.Result.GetResult<Prisma.$order_status_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends order_status_historyDeleteManyArgs>(args?: Prisma.SelectSubset<T, order_status_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends order_status_historyUpdateManyArgs>(args: Prisma.SelectSubset<T, order_status_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends order_status_historyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, order_status_historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_status_historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends order_status_historyUpsertArgs>(args: Prisma.SelectSubset<T, order_status_historyUpsertArgs<ExtArgs>>): Prisma.Prisma__order_status_historyClient<runtime.Types.Result.GetResult<Prisma.$order_status_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends order_status_historyCountArgs>(args?: Prisma.Subset<T, order_status_historyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Order_status_historyCountAggregateOutputType> : number>;
    aggregate<T extends Order_status_historyAggregateArgs>(args: Prisma.Subset<T, Order_status_historyAggregateArgs>): Prisma.PrismaPromise<GetOrder_status_historyAggregateType<T>>;
    groupBy<T extends order_status_historyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: order_status_historyGroupByArgs['orderBy'];
    } : {
        orderBy?: order_status_historyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, order_status_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_status_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: order_status_historyFieldRefs;
}
export interface Prisma__order_status_historyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.order_status_history$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.order_status_history$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.ordersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ordersDefaultArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface order_status_historyFieldRefs {
    readonly id: Prisma.FieldRef<"order_status_history", 'String'>;
    readonly order_id: Prisma.FieldRef<"order_status_history", 'String'>;
    readonly old_status: Prisma.FieldRef<"order_status_history", 'order_status_type'>;
    readonly new_status: Prisma.FieldRef<"order_status_history", 'order_status_type'>;
    readonly changed_by_user_id: Prisma.FieldRef<"order_status_history", 'String'>;
    readonly source: Prisma.FieldRef<"order_status_history", 'status_change_source_type'>;
    readonly notes: Prisma.FieldRef<"order_status_history", 'String'>;
    readonly created_at: Prisma.FieldRef<"order_status_history", 'DateTime'>;
}
export type order_status_historyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_status_historySelect<ExtArgs> | null;
    omit?: Prisma.order_status_historyOmit<ExtArgs> | null;
    include?: Prisma.order_status_historyInclude<ExtArgs> | null;
    where: Prisma.order_status_historyWhereUniqueInput;
};
export type order_status_historyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_status_historySelect<ExtArgs> | null;
    omit?: Prisma.order_status_historyOmit<ExtArgs> | null;
    include?: Prisma.order_status_historyInclude<ExtArgs> | null;
    where: Prisma.order_status_historyWhereUniqueInput;
};
export type order_status_historyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_status_historySelect<ExtArgs> | null;
    omit?: Prisma.order_status_historyOmit<ExtArgs> | null;
    include?: Prisma.order_status_historyInclude<ExtArgs> | null;
    where?: Prisma.order_status_historyWhereInput;
    orderBy?: Prisma.order_status_historyOrderByWithRelationInput | Prisma.order_status_historyOrderByWithRelationInput[];
    cursor?: Prisma.order_status_historyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_status_historyScalarFieldEnum | Prisma.Order_status_historyScalarFieldEnum[];
};
export type order_status_historyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_status_historySelect<ExtArgs> | null;
    omit?: Prisma.order_status_historyOmit<ExtArgs> | null;
    include?: Prisma.order_status_historyInclude<ExtArgs> | null;
    where?: Prisma.order_status_historyWhereInput;
    orderBy?: Prisma.order_status_historyOrderByWithRelationInput | Prisma.order_status_historyOrderByWithRelationInput[];
    cursor?: Prisma.order_status_historyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_status_historyScalarFieldEnum | Prisma.Order_status_historyScalarFieldEnum[];
};
export type order_status_historyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_status_historySelect<ExtArgs> | null;
    omit?: Prisma.order_status_historyOmit<ExtArgs> | null;
    include?: Prisma.order_status_historyInclude<ExtArgs> | null;
    where?: Prisma.order_status_historyWhereInput;
    orderBy?: Prisma.order_status_historyOrderByWithRelationInput | Prisma.order_status_historyOrderByWithRelationInput[];
    cursor?: Prisma.order_status_historyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_status_historyScalarFieldEnum | Prisma.Order_status_historyScalarFieldEnum[];
};
export type order_status_historyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_status_historySelect<ExtArgs> | null;
    omit?: Prisma.order_status_historyOmit<ExtArgs> | null;
    include?: Prisma.order_status_historyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.order_status_historyCreateInput, Prisma.order_status_historyUncheckedCreateInput>;
};
export type order_status_historyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.order_status_historyCreateManyInput | Prisma.order_status_historyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type order_status_historyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_status_historySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.order_status_historyOmit<ExtArgs> | null;
    data: Prisma.order_status_historyCreateManyInput | Prisma.order_status_historyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.order_status_historyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type order_status_historyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_status_historySelect<ExtArgs> | null;
    omit?: Prisma.order_status_historyOmit<ExtArgs> | null;
    include?: Prisma.order_status_historyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.order_status_historyUpdateInput, Prisma.order_status_historyUncheckedUpdateInput>;
    where: Prisma.order_status_historyWhereUniqueInput;
};
export type order_status_historyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.order_status_historyUpdateManyMutationInput, Prisma.order_status_historyUncheckedUpdateManyInput>;
    where?: Prisma.order_status_historyWhereInput;
    limit?: number;
};
export type order_status_historyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_status_historySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.order_status_historyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.order_status_historyUpdateManyMutationInput, Prisma.order_status_historyUncheckedUpdateManyInput>;
    where?: Prisma.order_status_historyWhereInput;
    limit?: number;
    include?: Prisma.order_status_historyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type order_status_historyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_status_historySelect<ExtArgs> | null;
    omit?: Prisma.order_status_historyOmit<ExtArgs> | null;
    include?: Prisma.order_status_historyInclude<ExtArgs> | null;
    where: Prisma.order_status_historyWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_status_historyCreateInput, Prisma.order_status_historyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.order_status_historyUpdateInput, Prisma.order_status_historyUncheckedUpdateInput>;
};
export type order_status_historyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_status_historySelect<ExtArgs> | null;
    omit?: Prisma.order_status_historyOmit<ExtArgs> | null;
    include?: Prisma.order_status_historyInclude<ExtArgs> | null;
    where: Prisma.order_status_historyWhereUniqueInput;
};
export type order_status_historyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_status_historyWhereInput;
    limit?: number;
};
export type order_status_history$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type order_status_historyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_status_historySelect<ExtArgs> | null;
    omit?: Prisma.order_status_historyOmit<ExtArgs> | null;
    include?: Prisma.order_status_historyInclude<ExtArgs> | null;
};
export {};
