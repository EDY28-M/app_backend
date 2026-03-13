import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type order_item_modifiersModel = runtime.Types.Result.DefaultSelection<Prisma.$order_item_modifiersPayload>;
export type AggregateOrder_item_modifiers = {
    _count: Order_item_modifiersCountAggregateOutputType | null;
    _avg: Order_item_modifiersAvgAggregateOutputType | null;
    _sum: Order_item_modifiersSumAggregateOutputType | null;
    _min: Order_item_modifiersMinAggregateOutputType | null;
    _max: Order_item_modifiersMaxAggregateOutputType | null;
};
export type Order_item_modifiersAvgAggregateOutputType = {
    qty: number | null;
    unit_price_delta_amount: runtime.Decimal | null;
};
export type Order_item_modifiersSumAggregateOutputType = {
    qty: number | null;
    unit_price_delta_amount: runtime.Decimal | null;
};
export type Order_item_modifiersMinAggregateOutputType = {
    id: string | null;
    order_item_id: string | null;
    modifier_group_name_snapshot: string | null;
    modifier_option_name_snapshot: string | null;
    qty: number | null;
    unit_price_delta_amount: runtime.Decimal | null;
    created_at: Date | null;
};
export type Order_item_modifiersMaxAggregateOutputType = {
    id: string | null;
    order_item_id: string | null;
    modifier_group_name_snapshot: string | null;
    modifier_option_name_snapshot: string | null;
    qty: number | null;
    unit_price_delta_amount: runtime.Decimal | null;
    created_at: Date | null;
};
export type Order_item_modifiersCountAggregateOutputType = {
    id: number;
    order_item_id: number;
    modifier_group_name_snapshot: number;
    modifier_option_name_snapshot: number;
    qty: number;
    unit_price_delta_amount: number;
    created_at: number;
    _all: number;
};
export type Order_item_modifiersAvgAggregateInputType = {
    qty?: true;
    unit_price_delta_amount?: true;
};
export type Order_item_modifiersSumAggregateInputType = {
    qty?: true;
    unit_price_delta_amount?: true;
};
export type Order_item_modifiersMinAggregateInputType = {
    id?: true;
    order_item_id?: true;
    modifier_group_name_snapshot?: true;
    modifier_option_name_snapshot?: true;
    qty?: true;
    unit_price_delta_amount?: true;
    created_at?: true;
};
export type Order_item_modifiersMaxAggregateInputType = {
    id?: true;
    order_item_id?: true;
    modifier_group_name_snapshot?: true;
    modifier_option_name_snapshot?: true;
    qty?: true;
    unit_price_delta_amount?: true;
    created_at?: true;
};
export type Order_item_modifiersCountAggregateInputType = {
    id?: true;
    order_item_id?: true;
    modifier_group_name_snapshot?: true;
    modifier_option_name_snapshot?: true;
    qty?: true;
    unit_price_delta_amount?: true;
    created_at?: true;
    _all?: true;
};
export type Order_item_modifiersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_item_modifiersWhereInput;
    orderBy?: Prisma.order_item_modifiersOrderByWithRelationInput | Prisma.order_item_modifiersOrderByWithRelationInput[];
    cursor?: Prisma.order_item_modifiersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Order_item_modifiersCountAggregateInputType;
    _avg?: Order_item_modifiersAvgAggregateInputType;
    _sum?: Order_item_modifiersSumAggregateInputType;
    _min?: Order_item_modifiersMinAggregateInputType;
    _max?: Order_item_modifiersMaxAggregateInputType;
};
export type GetOrder_item_modifiersAggregateType<T extends Order_item_modifiersAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder_item_modifiers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder_item_modifiers[P]> : Prisma.GetScalarType<T[P], AggregateOrder_item_modifiers[P]>;
};
export type order_item_modifiersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_item_modifiersWhereInput;
    orderBy?: Prisma.order_item_modifiersOrderByWithAggregationInput | Prisma.order_item_modifiersOrderByWithAggregationInput[];
    by: Prisma.Order_item_modifiersScalarFieldEnum[] | Prisma.Order_item_modifiersScalarFieldEnum;
    having?: Prisma.order_item_modifiersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Order_item_modifiersCountAggregateInputType | true;
    _avg?: Order_item_modifiersAvgAggregateInputType;
    _sum?: Order_item_modifiersSumAggregateInputType;
    _min?: Order_item_modifiersMinAggregateInputType;
    _max?: Order_item_modifiersMaxAggregateInputType;
};
export type Order_item_modifiersGroupByOutputType = {
    id: string;
    order_item_id: string;
    modifier_group_name_snapshot: string;
    modifier_option_name_snapshot: string;
    qty: number;
    unit_price_delta_amount: runtime.Decimal;
    created_at: Date;
    _count: Order_item_modifiersCountAggregateOutputType | null;
    _avg: Order_item_modifiersAvgAggregateOutputType | null;
    _sum: Order_item_modifiersSumAggregateOutputType | null;
    _min: Order_item_modifiersMinAggregateOutputType | null;
    _max: Order_item_modifiersMaxAggregateOutputType | null;
};
type GetOrder_item_modifiersGroupByPayload<T extends order_item_modifiersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Order_item_modifiersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Order_item_modifiersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Order_item_modifiersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Order_item_modifiersGroupByOutputType[P]>;
}>>;
export type order_item_modifiersWhereInput = {
    AND?: Prisma.order_item_modifiersWhereInput | Prisma.order_item_modifiersWhereInput[];
    OR?: Prisma.order_item_modifiersWhereInput[];
    NOT?: Prisma.order_item_modifiersWhereInput | Prisma.order_item_modifiersWhereInput[];
    id?: Prisma.UuidFilter<"order_item_modifiers"> | string;
    order_item_id?: Prisma.UuidFilter<"order_item_modifiers"> | string;
    modifier_group_name_snapshot?: Prisma.StringFilter<"order_item_modifiers"> | string;
    modifier_option_name_snapshot?: Prisma.StringFilter<"order_item_modifiers"> | string;
    qty?: Prisma.IntFilter<"order_item_modifiers"> | number;
    unit_price_delta_amount?: Prisma.DecimalFilter<"order_item_modifiers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFilter<"order_item_modifiers"> | Date | string;
    order_items?: Prisma.XOR<Prisma.Order_itemsScalarRelationFilter, Prisma.order_itemsWhereInput>;
};
export type order_item_modifiersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    modifier_group_name_snapshot?: Prisma.SortOrder;
    modifier_option_name_snapshot?: Prisma.SortOrder;
    qty?: Prisma.SortOrder;
    unit_price_delta_amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    order_items?: Prisma.order_itemsOrderByWithRelationInput;
};
export type order_item_modifiersWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.order_item_modifiersWhereInput | Prisma.order_item_modifiersWhereInput[];
    OR?: Prisma.order_item_modifiersWhereInput[];
    NOT?: Prisma.order_item_modifiersWhereInput | Prisma.order_item_modifiersWhereInput[];
    order_item_id?: Prisma.UuidFilter<"order_item_modifiers"> | string;
    modifier_group_name_snapshot?: Prisma.StringFilter<"order_item_modifiers"> | string;
    modifier_option_name_snapshot?: Prisma.StringFilter<"order_item_modifiers"> | string;
    qty?: Prisma.IntFilter<"order_item_modifiers"> | number;
    unit_price_delta_amount?: Prisma.DecimalFilter<"order_item_modifiers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFilter<"order_item_modifiers"> | Date | string;
    order_items?: Prisma.XOR<Prisma.Order_itemsScalarRelationFilter, Prisma.order_itemsWhereInput>;
}, "id">;
export type order_item_modifiersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    modifier_group_name_snapshot?: Prisma.SortOrder;
    modifier_option_name_snapshot?: Prisma.SortOrder;
    qty?: Prisma.SortOrder;
    unit_price_delta_amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.order_item_modifiersCountOrderByAggregateInput;
    _avg?: Prisma.order_item_modifiersAvgOrderByAggregateInput;
    _max?: Prisma.order_item_modifiersMaxOrderByAggregateInput;
    _min?: Prisma.order_item_modifiersMinOrderByAggregateInput;
    _sum?: Prisma.order_item_modifiersSumOrderByAggregateInput;
};
export type order_item_modifiersScalarWhereWithAggregatesInput = {
    AND?: Prisma.order_item_modifiersScalarWhereWithAggregatesInput | Prisma.order_item_modifiersScalarWhereWithAggregatesInput[];
    OR?: Prisma.order_item_modifiersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.order_item_modifiersScalarWhereWithAggregatesInput | Prisma.order_item_modifiersScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"order_item_modifiers"> | string;
    order_item_id?: Prisma.UuidWithAggregatesFilter<"order_item_modifiers"> | string;
    modifier_group_name_snapshot?: Prisma.StringWithAggregatesFilter<"order_item_modifiers"> | string;
    modifier_option_name_snapshot?: Prisma.StringWithAggregatesFilter<"order_item_modifiers"> | string;
    qty?: Prisma.IntWithAggregatesFilter<"order_item_modifiers"> | number;
    unit_price_delta_amount?: Prisma.DecimalWithAggregatesFilter<"order_item_modifiers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"order_item_modifiers"> | Date | string;
};
export type order_item_modifiersCreateInput = {
    id?: string;
    modifier_group_name_snapshot: string;
    modifier_option_name_snapshot: string;
    qty?: number;
    unit_price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    order_items: Prisma.order_itemsCreateNestedOneWithoutOrder_item_modifiersInput;
};
export type order_item_modifiersUncheckedCreateInput = {
    id?: string;
    order_item_id: string;
    modifier_group_name_snapshot: string;
    modifier_option_name_snapshot: string;
    qty?: number;
    unit_price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type order_item_modifiersUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_name_snapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_option_name_snapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_items?: Prisma.order_itemsUpdateOneRequiredWithoutOrder_item_modifiersNestedInput;
};
export type order_item_modifiersUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_name_snapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_option_name_snapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type order_item_modifiersCreateManyInput = {
    id?: string;
    order_item_id: string;
    modifier_group_name_snapshot: string;
    modifier_option_name_snapshot: string;
    qty?: number;
    unit_price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type order_item_modifiersUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_name_snapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_option_name_snapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type order_item_modifiersUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_name_snapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_option_name_snapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type order_item_modifiersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    modifier_group_name_snapshot?: Prisma.SortOrder;
    modifier_option_name_snapshot?: Prisma.SortOrder;
    qty?: Prisma.SortOrder;
    unit_price_delta_amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type order_item_modifiersAvgOrderByAggregateInput = {
    qty?: Prisma.SortOrder;
    unit_price_delta_amount?: Prisma.SortOrder;
};
export type order_item_modifiersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    modifier_group_name_snapshot?: Prisma.SortOrder;
    modifier_option_name_snapshot?: Prisma.SortOrder;
    qty?: Prisma.SortOrder;
    unit_price_delta_amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type order_item_modifiersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    modifier_group_name_snapshot?: Prisma.SortOrder;
    modifier_option_name_snapshot?: Prisma.SortOrder;
    qty?: Prisma.SortOrder;
    unit_price_delta_amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type order_item_modifiersSumOrderByAggregateInput = {
    qty?: Prisma.SortOrder;
    unit_price_delta_amount?: Prisma.SortOrder;
};
export type Order_item_modifiersListRelationFilter = {
    every?: Prisma.order_item_modifiersWhereInput;
    some?: Prisma.order_item_modifiersWhereInput;
    none?: Prisma.order_item_modifiersWhereInput;
};
export type order_item_modifiersOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type order_item_modifiersCreateNestedManyWithoutOrder_itemsInput = {
    create?: Prisma.XOR<Prisma.order_item_modifiersCreateWithoutOrder_itemsInput, Prisma.order_item_modifiersUncheckedCreateWithoutOrder_itemsInput> | Prisma.order_item_modifiersCreateWithoutOrder_itemsInput[] | Prisma.order_item_modifiersUncheckedCreateWithoutOrder_itemsInput[];
    connectOrCreate?: Prisma.order_item_modifiersCreateOrConnectWithoutOrder_itemsInput | Prisma.order_item_modifiersCreateOrConnectWithoutOrder_itemsInput[];
    createMany?: Prisma.order_item_modifiersCreateManyOrder_itemsInputEnvelope;
    connect?: Prisma.order_item_modifiersWhereUniqueInput | Prisma.order_item_modifiersWhereUniqueInput[];
};
export type order_item_modifiersUncheckedCreateNestedManyWithoutOrder_itemsInput = {
    create?: Prisma.XOR<Prisma.order_item_modifiersCreateWithoutOrder_itemsInput, Prisma.order_item_modifiersUncheckedCreateWithoutOrder_itemsInput> | Prisma.order_item_modifiersCreateWithoutOrder_itemsInput[] | Prisma.order_item_modifiersUncheckedCreateWithoutOrder_itemsInput[];
    connectOrCreate?: Prisma.order_item_modifiersCreateOrConnectWithoutOrder_itemsInput | Prisma.order_item_modifiersCreateOrConnectWithoutOrder_itemsInput[];
    createMany?: Prisma.order_item_modifiersCreateManyOrder_itemsInputEnvelope;
    connect?: Prisma.order_item_modifiersWhereUniqueInput | Prisma.order_item_modifiersWhereUniqueInput[];
};
export type order_item_modifiersUpdateManyWithoutOrder_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.order_item_modifiersCreateWithoutOrder_itemsInput, Prisma.order_item_modifiersUncheckedCreateWithoutOrder_itemsInput> | Prisma.order_item_modifiersCreateWithoutOrder_itemsInput[] | Prisma.order_item_modifiersUncheckedCreateWithoutOrder_itemsInput[];
    connectOrCreate?: Prisma.order_item_modifiersCreateOrConnectWithoutOrder_itemsInput | Prisma.order_item_modifiersCreateOrConnectWithoutOrder_itemsInput[];
    upsert?: Prisma.order_item_modifiersUpsertWithWhereUniqueWithoutOrder_itemsInput | Prisma.order_item_modifiersUpsertWithWhereUniqueWithoutOrder_itemsInput[];
    createMany?: Prisma.order_item_modifiersCreateManyOrder_itemsInputEnvelope;
    set?: Prisma.order_item_modifiersWhereUniqueInput | Prisma.order_item_modifiersWhereUniqueInput[];
    disconnect?: Prisma.order_item_modifiersWhereUniqueInput | Prisma.order_item_modifiersWhereUniqueInput[];
    delete?: Prisma.order_item_modifiersWhereUniqueInput | Prisma.order_item_modifiersWhereUniqueInput[];
    connect?: Prisma.order_item_modifiersWhereUniqueInput | Prisma.order_item_modifiersWhereUniqueInput[];
    update?: Prisma.order_item_modifiersUpdateWithWhereUniqueWithoutOrder_itemsInput | Prisma.order_item_modifiersUpdateWithWhereUniqueWithoutOrder_itemsInput[];
    updateMany?: Prisma.order_item_modifiersUpdateManyWithWhereWithoutOrder_itemsInput | Prisma.order_item_modifiersUpdateManyWithWhereWithoutOrder_itemsInput[];
    deleteMany?: Prisma.order_item_modifiersScalarWhereInput | Prisma.order_item_modifiersScalarWhereInput[];
};
export type order_item_modifiersUncheckedUpdateManyWithoutOrder_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.order_item_modifiersCreateWithoutOrder_itemsInput, Prisma.order_item_modifiersUncheckedCreateWithoutOrder_itemsInput> | Prisma.order_item_modifiersCreateWithoutOrder_itemsInput[] | Prisma.order_item_modifiersUncheckedCreateWithoutOrder_itemsInput[];
    connectOrCreate?: Prisma.order_item_modifiersCreateOrConnectWithoutOrder_itemsInput | Prisma.order_item_modifiersCreateOrConnectWithoutOrder_itemsInput[];
    upsert?: Prisma.order_item_modifiersUpsertWithWhereUniqueWithoutOrder_itemsInput | Prisma.order_item_modifiersUpsertWithWhereUniqueWithoutOrder_itemsInput[];
    createMany?: Prisma.order_item_modifiersCreateManyOrder_itemsInputEnvelope;
    set?: Prisma.order_item_modifiersWhereUniqueInput | Prisma.order_item_modifiersWhereUniqueInput[];
    disconnect?: Prisma.order_item_modifiersWhereUniqueInput | Prisma.order_item_modifiersWhereUniqueInput[];
    delete?: Prisma.order_item_modifiersWhereUniqueInput | Prisma.order_item_modifiersWhereUniqueInput[];
    connect?: Prisma.order_item_modifiersWhereUniqueInput | Prisma.order_item_modifiersWhereUniqueInput[];
    update?: Prisma.order_item_modifiersUpdateWithWhereUniqueWithoutOrder_itemsInput | Prisma.order_item_modifiersUpdateWithWhereUniqueWithoutOrder_itemsInput[];
    updateMany?: Prisma.order_item_modifiersUpdateManyWithWhereWithoutOrder_itemsInput | Prisma.order_item_modifiersUpdateManyWithWhereWithoutOrder_itemsInput[];
    deleteMany?: Prisma.order_item_modifiersScalarWhereInput | Prisma.order_item_modifiersScalarWhereInput[];
};
export type order_item_modifiersCreateWithoutOrder_itemsInput = {
    id?: string;
    modifier_group_name_snapshot: string;
    modifier_option_name_snapshot: string;
    qty?: number;
    unit_price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type order_item_modifiersUncheckedCreateWithoutOrder_itemsInput = {
    id?: string;
    modifier_group_name_snapshot: string;
    modifier_option_name_snapshot: string;
    qty?: number;
    unit_price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type order_item_modifiersCreateOrConnectWithoutOrder_itemsInput = {
    where: Prisma.order_item_modifiersWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_item_modifiersCreateWithoutOrder_itemsInput, Prisma.order_item_modifiersUncheckedCreateWithoutOrder_itemsInput>;
};
export type order_item_modifiersCreateManyOrder_itemsInputEnvelope = {
    data: Prisma.order_item_modifiersCreateManyOrder_itemsInput | Prisma.order_item_modifiersCreateManyOrder_itemsInput[];
    skipDuplicates?: boolean;
};
export type order_item_modifiersUpsertWithWhereUniqueWithoutOrder_itemsInput = {
    where: Prisma.order_item_modifiersWhereUniqueInput;
    update: Prisma.XOR<Prisma.order_item_modifiersUpdateWithoutOrder_itemsInput, Prisma.order_item_modifiersUncheckedUpdateWithoutOrder_itemsInput>;
    create: Prisma.XOR<Prisma.order_item_modifiersCreateWithoutOrder_itemsInput, Prisma.order_item_modifiersUncheckedCreateWithoutOrder_itemsInput>;
};
export type order_item_modifiersUpdateWithWhereUniqueWithoutOrder_itemsInput = {
    where: Prisma.order_item_modifiersWhereUniqueInput;
    data: Prisma.XOR<Prisma.order_item_modifiersUpdateWithoutOrder_itemsInput, Prisma.order_item_modifiersUncheckedUpdateWithoutOrder_itemsInput>;
};
export type order_item_modifiersUpdateManyWithWhereWithoutOrder_itemsInput = {
    where: Prisma.order_item_modifiersScalarWhereInput;
    data: Prisma.XOR<Prisma.order_item_modifiersUpdateManyMutationInput, Prisma.order_item_modifiersUncheckedUpdateManyWithoutOrder_itemsInput>;
};
export type order_item_modifiersScalarWhereInput = {
    AND?: Prisma.order_item_modifiersScalarWhereInput | Prisma.order_item_modifiersScalarWhereInput[];
    OR?: Prisma.order_item_modifiersScalarWhereInput[];
    NOT?: Prisma.order_item_modifiersScalarWhereInput | Prisma.order_item_modifiersScalarWhereInput[];
    id?: Prisma.UuidFilter<"order_item_modifiers"> | string;
    order_item_id?: Prisma.UuidFilter<"order_item_modifiers"> | string;
    modifier_group_name_snapshot?: Prisma.StringFilter<"order_item_modifiers"> | string;
    modifier_option_name_snapshot?: Prisma.StringFilter<"order_item_modifiers"> | string;
    qty?: Prisma.IntFilter<"order_item_modifiers"> | number;
    unit_price_delta_amount?: Prisma.DecimalFilter<"order_item_modifiers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFilter<"order_item_modifiers"> | Date | string;
};
export type order_item_modifiersCreateManyOrder_itemsInput = {
    id?: string;
    modifier_group_name_snapshot: string;
    modifier_option_name_snapshot: string;
    qty?: number;
    unit_price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type order_item_modifiersUpdateWithoutOrder_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_name_snapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_option_name_snapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type order_item_modifiersUncheckedUpdateWithoutOrder_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_name_snapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_option_name_snapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type order_item_modifiersUncheckedUpdateManyWithoutOrder_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_name_snapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_option_name_snapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type order_item_modifiersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_item_id?: boolean;
    modifier_group_name_snapshot?: boolean;
    modifier_option_name_snapshot?: boolean;
    qty?: boolean;
    unit_price_delta_amount?: boolean;
    created_at?: boolean;
    order_items?: boolean | Prisma.order_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order_item_modifiers"]>;
export type order_item_modifiersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_item_id?: boolean;
    modifier_group_name_snapshot?: boolean;
    modifier_option_name_snapshot?: boolean;
    qty?: boolean;
    unit_price_delta_amount?: boolean;
    created_at?: boolean;
    order_items?: boolean | Prisma.order_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order_item_modifiers"]>;
export type order_item_modifiersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_item_id?: boolean;
    modifier_group_name_snapshot?: boolean;
    modifier_option_name_snapshot?: boolean;
    qty?: boolean;
    unit_price_delta_amount?: boolean;
    created_at?: boolean;
    order_items?: boolean | Prisma.order_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order_item_modifiers"]>;
export type order_item_modifiersSelectScalar = {
    id?: boolean;
    order_item_id?: boolean;
    modifier_group_name_snapshot?: boolean;
    modifier_option_name_snapshot?: boolean;
    qty?: boolean;
    unit_price_delta_amount?: boolean;
    created_at?: boolean;
};
export type order_item_modifiersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "order_item_id" | "modifier_group_name_snapshot" | "modifier_option_name_snapshot" | "qty" | "unit_price_delta_amount" | "created_at", ExtArgs["result"]["order_item_modifiers"]>;
export type order_item_modifiersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_items?: boolean | Prisma.order_itemsDefaultArgs<ExtArgs>;
};
export type order_item_modifiersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_items?: boolean | Prisma.order_itemsDefaultArgs<ExtArgs>;
};
export type order_item_modifiersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_items?: boolean | Prisma.order_itemsDefaultArgs<ExtArgs>;
};
export type $order_item_modifiersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "order_item_modifiers";
    objects: {
        order_items: Prisma.$order_itemsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        order_item_id: string;
        modifier_group_name_snapshot: string;
        modifier_option_name_snapshot: string;
        qty: number;
        unit_price_delta_amount: runtime.Decimal;
        created_at: Date;
    }, ExtArgs["result"]["order_item_modifiers"]>;
    composites: {};
};
export type order_item_modifiersGetPayload<S extends boolean | null | undefined | order_item_modifiersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$order_item_modifiersPayload, S>;
export type order_item_modifiersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<order_item_modifiersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Order_item_modifiersCountAggregateInputType | true;
};
export interface order_item_modifiersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['order_item_modifiers'];
        meta: {
            name: 'order_item_modifiers';
        };
    };
    findUnique<T extends order_item_modifiersFindUniqueArgs>(args: Prisma.SelectSubset<T, order_item_modifiersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__order_item_modifiersClient<runtime.Types.Result.GetResult<Prisma.$order_item_modifiersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends order_item_modifiersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, order_item_modifiersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__order_item_modifiersClient<runtime.Types.Result.GetResult<Prisma.$order_item_modifiersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends order_item_modifiersFindFirstArgs>(args?: Prisma.SelectSubset<T, order_item_modifiersFindFirstArgs<ExtArgs>>): Prisma.Prisma__order_item_modifiersClient<runtime.Types.Result.GetResult<Prisma.$order_item_modifiersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends order_item_modifiersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, order_item_modifiersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__order_item_modifiersClient<runtime.Types.Result.GetResult<Prisma.$order_item_modifiersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends order_item_modifiersFindManyArgs>(args?: Prisma.SelectSubset<T, order_item_modifiersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_item_modifiersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends order_item_modifiersCreateArgs>(args: Prisma.SelectSubset<T, order_item_modifiersCreateArgs<ExtArgs>>): Prisma.Prisma__order_item_modifiersClient<runtime.Types.Result.GetResult<Prisma.$order_item_modifiersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends order_item_modifiersCreateManyArgs>(args?: Prisma.SelectSubset<T, order_item_modifiersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends order_item_modifiersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, order_item_modifiersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_item_modifiersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends order_item_modifiersDeleteArgs>(args: Prisma.SelectSubset<T, order_item_modifiersDeleteArgs<ExtArgs>>): Prisma.Prisma__order_item_modifiersClient<runtime.Types.Result.GetResult<Prisma.$order_item_modifiersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends order_item_modifiersUpdateArgs>(args: Prisma.SelectSubset<T, order_item_modifiersUpdateArgs<ExtArgs>>): Prisma.Prisma__order_item_modifiersClient<runtime.Types.Result.GetResult<Prisma.$order_item_modifiersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends order_item_modifiersDeleteManyArgs>(args?: Prisma.SelectSubset<T, order_item_modifiersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends order_item_modifiersUpdateManyArgs>(args: Prisma.SelectSubset<T, order_item_modifiersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends order_item_modifiersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, order_item_modifiersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_item_modifiersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends order_item_modifiersUpsertArgs>(args: Prisma.SelectSubset<T, order_item_modifiersUpsertArgs<ExtArgs>>): Prisma.Prisma__order_item_modifiersClient<runtime.Types.Result.GetResult<Prisma.$order_item_modifiersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends order_item_modifiersCountArgs>(args?: Prisma.Subset<T, order_item_modifiersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Order_item_modifiersCountAggregateOutputType> : number>;
    aggregate<T extends Order_item_modifiersAggregateArgs>(args: Prisma.Subset<T, Order_item_modifiersAggregateArgs>): Prisma.PrismaPromise<GetOrder_item_modifiersAggregateType<T>>;
    groupBy<T extends order_item_modifiersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: order_item_modifiersGroupByArgs['orderBy'];
    } : {
        orderBy?: order_item_modifiersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, order_item_modifiersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_item_modifiersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: order_item_modifiersFieldRefs;
}
export interface Prisma__order_item_modifiersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order_items<T extends Prisma.order_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.order_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface order_item_modifiersFieldRefs {
    readonly id: Prisma.FieldRef<"order_item_modifiers", 'String'>;
    readonly order_item_id: Prisma.FieldRef<"order_item_modifiers", 'String'>;
    readonly modifier_group_name_snapshot: Prisma.FieldRef<"order_item_modifiers", 'String'>;
    readonly modifier_option_name_snapshot: Prisma.FieldRef<"order_item_modifiers", 'String'>;
    readonly qty: Prisma.FieldRef<"order_item_modifiers", 'Int'>;
    readonly unit_price_delta_amount: Prisma.FieldRef<"order_item_modifiers", 'Decimal'>;
    readonly created_at: Prisma.FieldRef<"order_item_modifiers", 'DateTime'>;
}
export type order_item_modifiersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.order_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.order_item_modifiersInclude<ExtArgs> | null;
    where: Prisma.order_item_modifiersWhereUniqueInput;
};
export type order_item_modifiersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.order_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.order_item_modifiersInclude<ExtArgs> | null;
    where: Prisma.order_item_modifiersWhereUniqueInput;
};
export type order_item_modifiersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.order_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.order_item_modifiersInclude<ExtArgs> | null;
    where?: Prisma.order_item_modifiersWhereInput;
    orderBy?: Prisma.order_item_modifiersOrderByWithRelationInput | Prisma.order_item_modifiersOrderByWithRelationInput[];
    cursor?: Prisma.order_item_modifiersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_item_modifiersScalarFieldEnum | Prisma.Order_item_modifiersScalarFieldEnum[];
};
export type order_item_modifiersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.order_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.order_item_modifiersInclude<ExtArgs> | null;
    where?: Prisma.order_item_modifiersWhereInput;
    orderBy?: Prisma.order_item_modifiersOrderByWithRelationInput | Prisma.order_item_modifiersOrderByWithRelationInput[];
    cursor?: Prisma.order_item_modifiersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_item_modifiersScalarFieldEnum | Prisma.Order_item_modifiersScalarFieldEnum[];
};
export type order_item_modifiersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.order_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.order_item_modifiersInclude<ExtArgs> | null;
    where?: Prisma.order_item_modifiersWhereInput;
    orderBy?: Prisma.order_item_modifiersOrderByWithRelationInput | Prisma.order_item_modifiersOrderByWithRelationInput[];
    cursor?: Prisma.order_item_modifiersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_item_modifiersScalarFieldEnum | Prisma.Order_item_modifiersScalarFieldEnum[];
};
export type order_item_modifiersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.order_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.order_item_modifiersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.order_item_modifiersCreateInput, Prisma.order_item_modifiersUncheckedCreateInput>;
};
export type order_item_modifiersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.order_item_modifiersCreateManyInput | Prisma.order_item_modifiersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type order_item_modifiersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_item_modifiersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.order_item_modifiersOmit<ExtArgs> | null;
    data: Prisma.order_item_modifiersCreateManyInput | Prisma.order_item_modifiersCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.order_item_modifiersIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type order_item_modifiersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.order_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.order_item_modifiersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.order_item_modifiersUpdateInput, Prisma.order_item_modifiersUncheckedUpdateInput>;
    where: Prisma.order_item_modifiersWhereUniqueInput;
};
export type order_item_modifiersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.order_item_modifiersUpdateManyMutationInput, Prisma.order_item_modifiersUncheckedUpdateManyInput>;
    where?: Prisma.order_item_modifiersWhereInput;
    limit?: number;
};
export type order_item_modifiersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_item_modifiersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.order_item_modifiersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.order_item_modifiersUpdateManyMutationInput, Prisma.order_item_modifiersUncheckedUpdateManyInput>;
    where?: Prisma.order_item_modifiersWhereInput;
    limit?: number;
    include?: Prisma.order_item_modifiersIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type order_item_modifiersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.order_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.order_item_modifiersInclude<ExtArgs> | null;
    where: Prisma.order_item_modifiersWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_item_modifiersCreateInput, Prisma.order_item_modifiersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.order_item_modifiersUpdateInput, Prisma.order_item_modifiersUncheckedUpdateInput>;
};
export type order_item_modifiersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.order_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.order_item_modifiersInclude<ExtArgs> | null;
    where: Prisma.order_item_modifiersWhereUniqueInput;
};
export type order_item_modifiersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_item_modifiersWhereInput;
    limit?: number;
};
export type order_item_modifiersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.order_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.order_item_modifiersInclude<ExtArgs> | null;
};
export {};
