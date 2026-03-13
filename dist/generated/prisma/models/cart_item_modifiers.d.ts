import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type cart_item_modifiersModel = runtime.Types.Result.DefaultSelection<Prisma.$cart_item_modifiersPayload>;
export type AggregateCart_item_modifiers = {
    _count: Cart_item_modifiersCountAggregateOutputType | null;
    _avg: Cart_item_modifiersAvgAggregateOutputType | null;
    _sum: Cart_item_modifiersSumAggregateOutputType | null;
    _min: Cart_item_modifiersMinAggregateOutputType | null;
    _max: Cart_item_modifiersMaxAggregateOutputType | null;
};
export type Cart_item_modifiersAvgAggregateOutputType = {
    qty: number | null;
    price_delta_amount: runtime.Decimal | null;
};
export type Cart_item_modifiersSumAggregateOutputType = {
    qty: number | null;
    price_delta_amount: runtime.Decimal | null;
};
export type Cart_item_modifiersMinAggregateOutputType = {
    id: string | null;
    cart_item_id: string | null;
    modifier_group_id: string | null;
    modifier_option_id: string | null;
    qty: number | null;
    price_delta_amount: runtime.Decimal | null;
    created_at: Date | null;
};
export type Cart_item_modifiersMaxAggregateOutputType = {
    id: string | null;
    cart_item_id: string | null;
    modifier_group_id: string | null;
    modifier_option_id: string | null;
    qty: number | null;
    price_delta_amount: runtime.Decimal | null;
    created_at: Date | null;
};
export type Cart_item_modifiersCountAggregateOutputType = {
    id: number;
    cart_item_id: number;
    modifier_group_id: number;
    modifier_option_id: number;
    qty: number;
    price_delta_amount: number;
    created_at: number;
    _all: number;
};
export type Cart_item_modifiersAvgAggregateInputType = {
    qty?: true;
    price_delta_amount?: true;
};
export type Cart_item_modifiersSumAggregateInputType = {
    qty?: true;
    price_delta_amount?: true;
};
export type Cart_item_modifiersMinAggregateInputType = {
    id?: true;
    cart_item_id?: true;
    modifier_group_id?: true;
    modifier_option_id?: true;
    qty?: true;
    price_delta_amount?: true;
    created_at?: true;
};
export type Cart_item_modifiersMaxAggregateInputType = {
    id?: true;
    cart_item_id?: true;
    modifier_group_id?: true;
    modifier_option_id?: true;
    qty?: true;
    price_delta_amount?: true;
    created_at?: true;
};
export type Cart_item_modifiersCountAggregateInputType = {
    id?: true;
    cart_item_id?: true;
    modifier_group_id?: true;
    modifier_option_id?: true;
    qty?: true;
    price_delta_amount?: true;
    created_at?: true;
    _all?: true;
};
export type Cart_item_modifiersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cart_item_modifiersWhereInput;
    orderBy?: Prisma.cart_item_modifiersOrderByWithRelationInput | Prisma.cart_item_modifiersOrderByWithRelationInput[];
    cursor?: Prisma.cart_item_modifiersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Cart_item_modifiersCountAggregateInputType;
    _avg?: Cart_item_modifiersAvgAggregateInputType;
    _sum?: Cart_item_modifiersSumAggregateInputType;
    _min?: Cart_item_modifiersMinAggregateInputType;
    _max?: Cart_item_modifiersMaxAggregateInputType;
};
export type GetCart_item_modifiersAggregateType<T extends Cart_item_modifiersAggregateArgs> = {
    [P in keyof T & keyof AggregateCart_item_modifiers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCart_item_modifiers[P]> : Prisma.GetScalarType<T[P], AggregateCart_item_modifiers[P]>;
};
export type cart_item_modifiersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cart_item_modifiersWhereInput;
    orderBy?: Prisma.cart_item_modifiersOrderByWithAggregationInput | Prisma.cart_item_modifiersOrderByWithAggregationInput[];
    by: Prisma.Cart_item_modifiersScalarFieldEnum[] | Prisma.Cart_item_modifiersScalarFieldEnum;
    having?: Prisma.cart_item_modifiersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Cart_item_modifiersCountAggregateInputType | true;
    _avg?: Cart_item_modifiersAvgAggregateInputType;
    _sum?: Cart_item_modifiersSumAggregateInputType;
    _min?: Cart_item_modifiersMinAggregateInputType;
    _max?: Cart_item_modifiersMaxAggregateInputType;
};
export type Cart_item_modifiersGroupByOutputType = {
    id: string;
    cart_item_id: string;
    modifier_group_id: string;
    modifier_option_id: string;
    qty: number;
    price_delta_amount: runtime.Decimal;
    created_at: Date;
    _count: Cart_item_modifiersCountAggregateOutputType | null;
    _avg: Cart_item_modifiersAvgAggregateOutputType | null;
    _sum: Cart_item_modifiersSumAggregateOutputType | null;
    _min: Cart_item_modifiersMinAggregateOutputType | null;
    _max: Cart_item_modifiersMaxAggregateOutputType | null;
};
type GetCart_item_modifiersGroupByPayload<T extends cart_item_modifiersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Cart_item_modifiersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Cart_item_modifiersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Cart_item_modifiersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Cart_item_modifiersGroupByOutputType[P]>;
}>>;
export type cart_item_modifiersWhereInput = {
    AND?: Prisma.cart_item_modifiersWhereInput | Prisma.cart_item_modifiersWhereInput[];
    OR?: Prisma.cart_item_modifiersWhereInput[];
    NOT?: Prisma.cart_item_modifiersWhereInput | Prisma.cart_item_modifiersWhereInput[];
    id?: Prisma.UuidFilter<"cart_item_modifiers"> | string;
    cart_item_id?: Prisma.UuidFilter<"cart_item_modifiers"> | string;
    modifier_group_id?: Prisma.UuidFilter<"cart_item_modifiers"> | string;
    modifier_option_id?: Prisma.UuidFilter<"cart_item_modifiers"> | string;
    qty?: Prisma.IntFilter<"cart_item_modifiers"> | number;
    price_delta_amount?: Prisma.DecimalFilter<"cart_item_modifiers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFilter<"cart_item_modifiers"> | Date | string;
    cart_items?: Prisma.XOR<Prisma.Cart_itemsScalarRelationFilter, Prisma.cart_itemsWhereInput>;
    modifier_groups?: Prisma.XOR<Prisma.Modifier_groupsScalarRelationFilter, Prisma.modifier_groupsWhereInput>;
    modifier_options?: Prisma.XOR<Prisma.Modifier_optionsScalarRelationFilter, Prisma.modifier_optionsWhereInput>;
};
export type cart_item_modifiersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cart_item_id?: Prisma.SortOrder;
    modifier_group_id?: Prisma.SortOrder;
    modifier_option_id?: Prisma.SortOrder;
    qty?: Prisma.SortOrder;
    price_delta_amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    cart_items?: Prisma.cart_itemsOrderByWithRelationInput;
    modifier_groups?: Prisma.modifier_groupsOrderByWithRelationInput;
    modifier_options?: Prisma.modifier_optionsOrderByWithRelationInput;
};
export type cart_item_modifiersWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.cart_item_modifiersWhereInput | Prisma.cart_item_modifiersWhereInput[];
    OR?: Prisma.cart_item_modifiersWhereInput[];
    NOT?: Prisma.cart_item_modifiersWhereInput | Prisma.cart_item_modifiersWhereInput[];
    cart_item_id?: Prisma.UuidFilter<"cart_item_modifiers"> | string;
    modifier_group_id?: Prisma.UuidFilter<"cart_item_modifiers"> | string;
    modifier_option_id?: Prisma.UuidFilter<"cart_item_modifiers"> | string;
    qty?: Prisma.IntFilter<"cart_item_modifiers"> | number;
    price_delta_amount?: Prisma.DecimalFilter<"cart_item_modifiers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFilter<"cart_item_modifiers"> | Date | string;
    cart_items?: Prisma.XOR<Prisma.Cart_itemsScalarRelationFilter, Prisma.cart_itemsWhereInput>;
    modifier_groups?: Prisma.XOR<Prisma.Modifier_groupsScalarRelationFilter, Prisma.modifier_groupsWhereInput>;
    modifier_options?: Prisma.XOR<Prisma.Modifier_optionsScalarRelationFilter, Prisma.modifier_optionsWhereInput>;
}, "id">;
export type cart_item_modifiersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cart_item_id?: Prisma.SortOrder;
    modifier_group_id?: Prisma.SortOrder;
    modifier_option_id?: Prisma.SortOrder;
    qty?: Prisma.SortOrder;
    price_delta_amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.cart_item_modifiersCountOrderByAggregateInput;
    _avg?: Prisma.cart_item_modifiersAvgOrderByAggregateInput;
    _max?: Prisma.cart_item_modifiersMaxOrderByAggregateInput;
    _min?: Prisma.cart_item_modifiersMinOrderByAggregateInput;
    _sum?: Prisma.cart_item_modifiersSumOrderByAggregateInput;
};
export type cart_item_modifiersScalarWhereWithAggregatesInput = {
    AND?: Prisma.cart_item_modifiersScalarWhereWithAggregatesInput | Prisma.cart_item_modifiersScalarWhereWithAggregatesInput[];
    OR?: Prisma.cart_item_modifiersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.cart_item_modifiersScalarWhereWithAggregatesInput | Prisma.cart_item_modifiersScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"cart_item_modifiers"> | string;
    cart_item_id?: Prisma.UuidWithAggregatesFilter<"cart_item_modifiers"> | string;
    modifier_group_id?: Prisma.UuidWithAggregatesFilter<"cart_item_modifiers"> | string;
    modifier_option_id?: Prisma.UuidWithAggregatesFilter<"cart_item_modifiers"> | string;
    qty?: Prisma.IntWithAggregatesFilter<"cart_item_modifiers"> | number;
    price_delta_amount?: Prisma.DecimalWithAggregatesFilter<"cart_item_modifiers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"cart_item_modifiers"> | Date | string;
};
export type cart_item_modifiersCreateInput = {
    id?: string;
    qty?: number;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    cart_items: Prisma.cart_itemsCreateNestedOneWithoutCart_item_modifiersInput;
    modifier_groups: Prisma.modifier_groupsCreateNestedOneWithoutCart_item_modifiersInput;
    modifier_options: Prisma.modifier_optionsCreateNestedOneWithoutCart_item_modifiersInput;
};
export type cart_item_modifiersUncheckedCreateInput = {
    id?: string;
    cart_item_id: string;
    modifier_group_id: string;
    modifier_option_id: string;
    qty?: number;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type cart_item_modifiersUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_items?: Prisma.cart_itemsUpdateOneRequiredWithoutCart_item_modifiersNestedInput;
    modifier_groups?: Prisma.modifier_groupsUpdateOneRequiredWithoutCart_item_modifiersNestedInput;
    modifier_options?: Prisma.modifier_optionsUpdateOneRequiredWithoutCart_item_modifiersNestedInput;
};
export type cart_item_modifiersUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cart_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_option_id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cart_item_modifiersCreateManyInput = {
    id?: string;
    cart_item_id: string;
    modifier_group_id: string;
    modifier_option_id: string;
    qty?: number;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type cart_item_modifiersUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cart_item_modifiersUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cart_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_option_id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cart_item_modifiersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cart_item_id?: Prisma.SortOrder;
    modifier_group_id?: Prisma.SortOrder;
    modifier_option_id?: Prisma.SortOrder;
    qty?: Prisma.SortOrder;
    price_delta_amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type cart_item_modifiersAvgOrderByAggregateInput = {
    qty?: Prisma.SortOrder;
    price_delta_amount?: Prisma.SortOrder;
};
export type cart_item_modifiersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cart_item_id?: Prisma.SortOrder;
    modifier_group_id?: Prisma.SortOrder;
    modifier_option_id?: Prisma.SortOrder;
    qty?: Prisma.SortOrder;
    price_delta_amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type cart_item_modifiersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cart_item_id?: Prisma.SortOrder;
    modifier_group_id?: Prisma.SortOrder;
    modifier_option_id?: Prisma.SortOrder;
    qty?: Prisma.SortOrder;
    price_delta_amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type cart_item_modifiersSumOrderByAggregateInput = {
    qty?: Prisma.SortOrder;
    price_delta_amount?: Prisma.SortOrder;
};
export type Cart_item_modifiersListRelationFilter = {
    every?: Prisma.cart_item_modifiersWhereInput;
    some?: Prisma.cart_item_modifiersWhereInput;
    none?: Prisma.cart_item_modifiersWhereInput;
};
export type cart_item_modifiersOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type cart_item_modifiersCreateNestedManyWithoutCart_itemsInput = {
    create?: Prisma.XOR<Prisma.cart_item_modifiersCreateWithoutCart_itemsInput, Prisma.cart_item_modifiersUncheckedCreateWithoutCart_itemsInput> | Prisma.cart_item_modifiersCreateWithoutCart_itemsInput[] | Prisma.cart_item_modifiersUncheckedCreateWithoutCart_itemsInput[];
    connectOrCreate?: Prisma.cart_item_modifiersCreateOrConnectWithoutCart_itemsInput | Prisma.cart_item_modifiersCreateOrConnectWithoutCart_itemsInput[];
    createMany?: Prisma.cart_item_modifiersCreateManyCart_itemsInputEnvelope;
    connect?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
};
export type cart_item_modifiersUncheckedCreateNestedManyWithoutCart_itemsInput = {
    create?: Prisma.XOR<Prisma.cart_item_modifiersCreateWithoutCart_itemsInput, Prisma.cart_item_modifiersUncheckedCreateWithoutCart_itemsInput> | Prisma.cart_item_modifiersCreateWithoutCart_itemsInput[] | Prisma.cart_item_modifiersUncheckedCreateWithoutCart_itemsInput[];
    connectOrCreate?: Prisma.cart_item_modifiersCreateOrConnectWithoutCart_itemsInput | Prisma.cart_item_modifiersCreateOrConnectWithoutCart_itemsInput[];
    createMany?: Prisma.cart_item_modifiersCreateManyCart_itemsInputEnvelope;
    connect?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
};
export type cart_item_modifiersUpdateManyWithoutCart_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.cart_item_modifiersCreateWithoutCart_itemsInput, Prisma.cart_item_modifiersUncheckedCreateWithoutCart_itemsInput> | Prisma.cart_item_modifiersCreateWithoutCart_itemsInput[] | Prisma.cart_item_modifiersUncheckedCreateWithoutCart_itemsInput[];
    connectOrCreate?: Prisma.cart_item_modifiersCreateOrConnectWithoutCart_itemsInput | Prisma.cart_item_modifiersCreateOrConnectWithoutCart_itemsInput[];
    upsert?: Prisma.cart_item_modifiersUpsertWithWhereUniqueWithoutCart_itemsInput | Prisma.cart_item_modifiersUpsertWithWhereUniqueWithoutCart_itemsInput[];
    createMany?: Prisma.cart_item_modifiersCreateManyCart_itemsInputEnvelope;
    set?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    disconnect?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    delete?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    connect?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    update?: Prisma.cart_item_modifiersUpdateWithWhereUniqueWithoutCart_itemsInput | Prisma.cart_item_modifiersUpdateWithWhereUniqueWithoutCart_itemsInput[];
    updateMany?: Prisma.cart_item_modifiersUpdateManyWithWhereWithoutCart_itemsInput | Prisma.cart_item_modifiersUpdateManyWithWhereWithoutCart_itemsInput[];
    deleteMany?: Prisma.cart_item_modifiersScalarWhereInput | Prisma.cart_item_modifiersScalarWhereInput[];
};
export type cart_item_modifiersUncheckedUpdateManyWithoutCart_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.cart_item_modifiersCreateWithoutCart_itemsInput, Prisma.cart_item_modifiersUncheckedCreateWithoutCart_itemsInput> | Prisma.cart_item_modifiersCreateWithoutCart_itemsInput[] | Prisma.cart_item_modifiersUncheckedCreateWithoutCart_itemsInput[];
    connectOrCreate?: Prisma.cart_item_modifiersCreateOrConnectWithoutCart_itemsInput | Prisma.cart_item_modifiersCreateOrConnectWithoutCart_itemsInput[];
    upsert?: Prisma.cart_item_modifiersUpsertWithWhereUniqueWithoutCart_itemsInput | Prisma.cart_item_modifiersUpsertWithWhereUniqueWithoutCart_itemsInput[];
    createMany?: Prisma.cart_item_modifiersCreateManyCart_itemsInputEnvelope;
    set?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    disconnect?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    delete?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    connect?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    update?: Prisma.cart_item_modifiersUpdateWithWhereUniqueWithoutCart_itemsInput | Prisma.cart_item_modifiersUpdateWithWhereUniqueWithoutCart_itemsInput[];
    updateMany?: Prisma.cart_item_modifiersUpdateManyWithWhereWithoutCart_itemsInput | Prisma.cart_item_modifiersUpdateManyWithWhereWithoutCart_itemsInput[];
    deleteMany?: Prisma.cart_item_modifiersScalarWhereInput | Prisma.cart_item_modifiersScalarWhereInput[];
};
export type cart_item_modifiersCreateNestedManyWithoutModifier_groupsInput = {
    create?: Prisma.XOR<Prisma.cart_item_modifiersCreateWithoutModifier_groupsInput, Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_groupsInput> | Prisma.cart_item_modifiersCreateWithoutModifier_groupsInput[] | Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_groupsInput[];
    connectOrCreate?: Prisma.cart_item_modifiersCreateOrConnectWithoutModifier_groupsInput | Prisma.cart_item_modifiersCreateOrConnectWithoutModifier_groupsInput[];
    createMany?: Prisma.cart_item_modifiersCreateManyModifier_groupsInputEnvelope;
    connect?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
};
export type cart_item_modifiersUncheckedCreateNestedManyWithoutModifier_groupsInput = {
    create?: Prisma.XOR<Prisma.cart_item_modifiersCreateWithoutModifier_groupsInput, Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_groupsInput> | Prisma.cart_item_modifiersCreateWithoutModifier_groupsInput[] | Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_groupsInput[];
    connectOrCreate?: Prisma.cart_item_modifiersCreateOrConnectWithoutModifier_groupsInput | Prisma.cart_item_modifiersCreateOrConnectWithoutModifier_groupsInput[];
    createMany?: Prisma.cart_item_modifiersCreateManyModifier_groupsInputEnvelope;
    connect?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
};
export type cart_item_modifiersUpdateManyWithoutModifier_groupsNestedInput = {
    create?: Prisma.XOR<Prisma.cart_item_modifiersCreateWithoutModifier_groupsInput, Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_groupsInput> | Prisma.cart_item_modifiersCreateWithoutModifier_groupsInput[] | Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_groupsInput[];
    connectOrCreate?: Prisma.cart_item_modifiersCreateOrConnectWithoutModifier_groupsInput | Prisma.cart_item_modifiersCreateOrConnectWithoutModifier_groupsInput[];
    upsert?: Prisma.cart_item_modifiersUpsertWithWhereUniqueWithoutModifier_groupsInput | Prisma.cart_item_modifiersUpsertWithWhereUniqueWithoutModifier_groupsInput[];
    createMany?: Prisma.cart_item_modifiersCreateManyModifier_groupsInputEnvelope;
    set?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    disconnect?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    delete?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    connect?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    update?: Prisma.cart_item_modifiersUpdateWithWhereUniqueWithoutModifier_groupsInput | Prisma.cart_item_modifiersUpdateWithWhereUniqueWithoutModifier_groupsInput[];
    updateMany?: Prisma.cart_item_modifiersUpdateManyWithWhereWithoutModifier_groupsInput | Prisma.cart_item_modifiersUpdateManyWithWhereWithoutModifier_groupsInput[];
    deleteMany?: Prisma.cart_item_modifiersScalarWhereInput | Prisma.cart_item_modifiersScalarWhereInput[];
};
export type cart_item_modifiersUncheckedUpdateManyWithoutModifier_groupsNestedInput = {
    create?: Prisma.XOR<Prisma.cart_item_modifiersCreateWithoutModifier_groupsInput, Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_groupsInput> | Prisma.cart_item_modifiersCreateWithoutModifier_groupsInput[] | Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_groupsInput[];
    connectOrCreate?: Prisma.cart_item_modifiersCreateOrConnectWithoutModifier_groupsInput | Prisma.cart_item_modifiersCreateOrConnectWithoutModifier_groupsInput[];
    upsert?: Prisma.cart_item_modifiersUpsertWithWhereUniqueWithoutModifier_groupsInput | Prisma.cart_item_modifiersUpsertWithWhereUniqueWithoutModifier_groupsInput[];
    createMany?: Prisma.cart_item_modifiersCreateManyModifier_groupsInputEnvelope;
    set?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    disconnect?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    delete?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    connect?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    update?: Prisma.cart_item_modifiersUpdateWithWhereUniqueWithoutModifier_groupsInput | Prisma.cart_item_modifiersUpdateWithWhereUniqueWithoutModifier_groupsInput[];
    updateMany?: Prisma.cart_item_modifiersUpdateManyWithWhereWithoutModifier_groupsInput | Prisma.cart_item_modifiersUpdateManyWithWhereWithoutModifier_groupsInput[];
    deleteMany?: Prisma.cart_item_modifiersScalarWhereInput | Prisma.cart_item_modifiersScalarWhereInput[];
};
export type cart_item_modifiersCreateNestedManyWithoutModifier_optionsInput = {
    create?: Prisma.XOR<Prisma.cart_item_modifiersCreateWithoutModifier_optionsInput, Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_optionsInput> | Prisma.cart_item_modifiersCreateWithoutModifier_optionsInput[] | Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_optionsInput[];
    connectOrCreate?: Prisma.cart_item_modifiersCreateOrConnectWithoutModifier_optionsInput | Prisma.cart_item_modifiersCreateOrConnectWithoutModifier_optionsInput[];
    createMany?: Prisma.cart_item_modifiersCreateManyModifier_optionsInputEnvelope;
    connect?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
};
export type cart_item_modifiersUncheckedCreateNestedManyWithoutModifier_optionsInput = {
    create?: Prisma.XOR<Prisma.cart_item_modifiersCreateWithoutModifier_optionsInput, Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_optionsInput> | Prisma.cart_item_modifiersCreateWithoutModifier_optionsInput[] | Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_optionsInput[];
    connectOrCreate?: Prisma.cart_item_modifiersCreateOrConnectWithoutModifier_optionsInput | Prisma.cart_item_modifiersCreateOrConnectWithoutModifier_optionsInput[];
    createMany?: Prisma.cart_item_modifiersCreateManyModifier_optionsInputEnvelope;
    connect?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
};
export type cart_item_modifiersUpdateManyWithoutModifier_optionsNestedInput = {
    create?: Prisma.XOR<Prisma.cart_item_modifiersCreateWithoutModifier_optionsInput, Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_optionsInput> | Prisma.cart_item_modifiersCreateWithoutModifier_optionsInput[] | Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_optionsInput[];
    connectOrCreate?: Prisma.cart_item_modifiersCreateOrConnectWithoutModifier_optionsInput | Prisma.cart_item_modifiersCreateOrConnectWithoutModifier_optionsInput[];
    upsert?: Prisma.cart_item_modifiersUpsertWithWhereUniqueWithoutModifier_optionsInput | Prisma.cart_item_modifiersUpsertWithWhereUniqueWithoutModifier_optionsInput[];
    createMany?: Prisma.cart_item_modifiersCreateManyModifier_optionsInputEnvelope;
    set?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    disconnect?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    delete?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    connect?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    update?: Prisma.cart_item_modifiersUpdateWithWhereUniqueWithoutModifier_optionsInput | Prisma.cart_item_modifiersUpdateWithWhereUniqueWithoutModifier_optionsInput[];
    updateMany?: Prisma.cart_item_modifiersUpdateManyWithWhereWithoutModifier_optionsInput | Prisma.cart_item_modifiersUpdateManyWithWhereWithoutModifier_optionsInput[];
    deleteMany?: Prisma.cart_item_modifiersScalarWhereInput | Prisma.cart_item_modifiersScalarWhereInput[];
};
export type cart_item_modifiersUncheckedUpdateManyWithoutModifier_optionsNestedInput = {
    create?: Prisma.XOR<Prisma.cart_item_modifiersCreateWithoutModifier_optionsInput, Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_optionsInput> | Prisma.cart_item_modifiersCreateWithoutModifier_optionsInput[] | Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_optionsInput[];
    connectOrCreate?: Prisma.cart_item_modifiersCreateOrConnectWithoutModifier_optionsInput | Prisma.cart_item_modifiersCreateOrConnectWithoutModifier_optionsInput[];
    upsert?: Prisma.cart_item_modifiersUpsertWithWhereUniqueWithoutModifier_optionsInput | Prisma.cart_item_modifiersUpsertWithWhereUniqueWithoutModifier_optionsInput[];
    createMany?: Prisma.cart_item_modifiersCreateManyModifier_optionsInputEnvelope;
    set?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    disconnect?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    delete?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    connect?: Prisma.cart_item_modifiersWhereUniqueInput | Prisma.cart_item_modifiersWhereUniqueInput[];
    update?: Prisma.cart_item_modifiersUpdateWithWhereUniqueWithoutModifier_optionsInput | Prisma.cart_item_modifiersUpdateWithWhereUniqueWithoutModifier_optionsInput[];
    updateMany?: Prisma.cart_item_modifiersUpdateManyWithWhereWithoutModifier_optionsInput | Prisma.cart_item_modifiersUpdateManyWithWhereWithoutModifier_optionsInput[];
    deleteMany?: Prisma.cart_item_modifiersScalarWhereInput | Prisma.cart_item_modifiersScalarWhereInput[];
};
export type cart_item_modifiersCreateWithoutCart_itemsInput = {
    id?: string;
    qty?: number;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    modifier_groups: Prisma.modifier_groupsCreateNestedOneWithoutCart_item_modifiersInput;
    modifier_options: Prisma.modifier_optionsCreateNestedOneWithoutCart_item_modifiersInput;
};
export type cart_item_modifiersUncheckedCreateWithoutCart_itemsInput = {
    id?: string;
    modifier_group_id: string;
    modifier_option_id: string;
    qty?: number;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type cart_item_modifiersCreateOrConnectWithoutCart_itemsInput = {
    where: Prisma.cart_item_modifiersWhereUniqueInput;
    create: Prisma.XOR<Prisma.cart_item_modifiersCreateWithoutCart_itemsInput, Prisma.cart_item_modifiersUncheckedCreateWithoutCart_itemsInput>;
};
export type cart_item_modifiersCreateManyCart_itemsInputEnvelope = {
    data: Prisma.cart_item_modifiersCreateManyCart_itemsInput | Prisma.cart_item_modifiersCreateManyCart_itemsInput[];
    skipDuplicates?: boolean;
};
export type cart_item_modifiersUpsertWithWhereUniqueWithoutCart_itemsInput = {
    where: Prisma.cart_item_modifiersWhereUniqueInput;
    update: Prisma.XOR<Prisma.cart_item_modifiersUpdateWithoutCart_itemsInput, Prisma.cart_item_modifiersUncheckedUpdateWithoutCart_itemsInput>;
    create: Prisma.XOR<Prisma.cart_item_modifiersCreateWithoutCart_itemsInput, Prisma.cart_item_modifiersUncheckedCreateWithoutCart_itemsInput>;
};
export type cart_item_modifiersUpdateWithWhereUniqueWithoutCart_itemsInput = {
    where: Prisma.cart_item_modifiersWhereUniqueInput;
    data: Prisma.XOR<Prisma.cart_item_modifiersUpdateWithoutCart_itemsInput, Prisma.cart_item_modifiersUncheckedUpdateWithoutCart_itemsInput>;
};
export type cart_item_modifiersUpdateManyWithWhereWithoutCart_itemsInput = {
    where: Prisma.cart_item_modifiersScalarWhereInput;
    data: Prisma.XOR<Prisma.cart_item_modifiersUpdateManyMutationInput, Prisma.cart_item_modifiersUncheckedUpdateManyWithoutCart_itemsInput>;
};
export type cart_item_modifiersScalarWhereInput = {
    AND?: Prisma.cart_item_modifiersScalarWhereInput | Prisma.cart_item_modifiersScalarWhereInput[];
    OR?: Prisma.cart_item_modifiersScalarWhereInput[];
    NOT?: Prisma.cart_item_modifiersScalarWhereInput | Prisma.cart_item_modifiersScalarWhereInput[];
    id?: Prisma.UuidFilter<"cart_item_modifiers"> | string;
    cart_item_id?: Prisma.UuidFilter<"cart_item_modifiers"> | string;
    modifier_group_id?: Prisma.UuidFilter<"cart_item_modifiers"> | string;
    modifier_option_id?: Prisma.UuidFilter<"cart_item_modifiers"> | string;
    qty?: Prisma.IntFilter<"cart_item_modifiers"> | number;
    price_delta_amount?: Prisma.DecimalFilter<"cart_item_modifiers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFilter<"cart_item_modifiers"> | Date | string;
};
export type cart_item_modifiersCreateWithoutModifier_groupsInput = {
    id?: string;
    qty?: number;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    cart_items: Prisma.cart_itemsCreateNestedOneWithoutCart_item_modifiersInput;
    modifier_options: Prisma.modifier_optionsCreateNestedOneWithoutCart_item_modifiersInput;
};
export type cart_item_modifiersUncheckedCreateWithoutModifier_groupsInput = {
    id?: string;
    cart_item_id: string;
    modifier_option_id: string;
    qty?: number;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type cart_item_modifiersCreateOrConnectWithoutModifier_groupsInput = {
    where: Prisma.cart_item_modifiersWhereUniqueInput;
    create: Prisma.XOR<Prisma.cart_item_modifiersCreateWithoutModifier_groupsInput, Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_groupsInput>;
};
export type cart_item_modifiersCreateManyModifier_groupsInputEnvelope = {
    data: Prisma.cart_item_modifiersCreateManyModifier_groupsInput | Prisma.cart_item_modifiersCreateManyModifier_groupsInput[];
    skipDuplicates?: boolean;
};
export type cart_item_modifiersUpsertWithWhereUniqueWithoutModifier_groupsInput = {
    where: Prisma.cart_item_modifiersWhereUniqueInput;
    update: Prisma.XOR<Prisma.cart_item_modifiersUpdateWithoutModifier_groupsInput, Prisma.cart_item_modifiersUncheckedUpdateWithoutModifier_groupsInput>;
    create: Prisma.XOR<Prisma.cart_item_modifiersCreateWithoutModifier_groupsInput, Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_groupsInput>;
};
export type cart_item_modifiersUpdateWithWhereUniqueWithoutModifier_groupsInput = {
    where: Prisma.cart_item_modifiersWhereUniqueInput;
    data: Prisma.XOR<Prisma.cart_item_modifiersUpdateWithoutModifier_groupsInput, Prisma.cart_item_modifiersUncheckedUpdateWithoutModifier_groupsInput>;
};
export type cart_item_modifiersUpdateManyWithWhereWithoutModifier_groupsInput = {
    where: Prisma.cart_item_modifiersScalarWhereInput;
    data: Prisma.XOR<Prisma.cart_item_modifiersUpdateManyMutationInput, Prisma.cart_item_modifiersUncheckedUpdateManyWithoutModifier_groupsInput>;
};
export type cart_item_modifiersCreateWithoutModifier_optionsInput = {
    id?: string;
    qty?: number;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    cart_items: Prisma.cart_itemsCreateNestedOneWithoutCart_item_modifiersInput;
    modifier_groups: Prisma.modifier_groupsCreateNestedOneWithoutCart_item_modifiersInput;
};
export type cart_item_modifiersUncheckedCreateWithoutModifier_optionsInput = {
    id?: string;
    cart_item_id: string;
    modifier_group_id: string;
    qty?: number;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type cart_item_modifiersCreateOrConnectWithoutModifier_optionsInput = {
    where: Prisma.cart_item_modifiersWhereUniqueInput;
    create: Prisma.XOR<Prisma.cart_item_modifiersCreateWithoutModifier_optionsInput, Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_optionsInput>;
};
export type cart_item_modifiersCreateManyModifier_optionsInputEnvelope = {
    data: Prisma.cart_item_modifiersCreateManyModifier_optionsInput | Prisma.cart_item_modifiersCreateManyModifier_optionsInput[];
    skipDuplicates?: boolean;
};
export type cart_item_modifiersUpsertWithWhereUniqueWithoutModifier_optionsInput = {
    where: Prisma.cart_item_modifiersWhereUniqueInput;
    update: Prisma.XOR<Prisma.cart_item_modifiersUpdateWithoutModifier_optionsInput, Prisma.cart_item_modifiersUncheckedUpdateWithoutModifier_optionsInput>;
    create: Prisma.XOR<Prisma.cart_item_modifiersCreateWithoutModifier_optionsInput, Prisma.cart_item_modifiersUncheckedCreateWithoutModifier_optionsInput>;
};
export type cart_item_modifiersUpdateWithWhereUniqueWithoutModifier_optionsInput = {
    where: Prisma.cart_item_modifiersWhereUniqueInput;
    data: Prisma.XOR<Prisma.cart_item_modifiersUpdateWithoutModifier_optionsInput, Prisma.cart_item_modifiersUncheckedUpdateWithoutModifier_optionsInput>;
};
export type cart_item_modifiersUpdateManyWithWhereWithoutModifier_optionsInput = {
    where: Prisma.cart_item_modifiersScalarWhereInput;
    data: Prisma.XOR<Prisma.cart_item_modifiersUpdateManyMutationInput, Prisma.cart_item_modifiersUncheckedUpdateManyWithoutModifier_optionsInput>;
};
export type cart_item_modifiersCreateManyCart_itemsInput = {
    id?: string;
    modifier_group_id: string;
    modifier_option_id: string;
    qty?: number;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type cart_item_modifiersUpdateWithoutCart_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modifier_groups?: Prisma.modifier_groupsUpdateOneRequiredWithoutCart_item_modifiersNestedInput;
    modifier_options?: Prisma.modifier_optionsUpdateOneRequiredWithoutCart_item_modifiersNestedInput;
};
export type cart_item_modifiersUncheckedUpdateWithoutCart_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_option_id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cart_item_modifiersUncheckedUpdateManyWithoutCart_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_option_id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cart_item_modifiersCreateManyModifier_groupsInput = {
    id?: string;
    cart_item_id: string;
    modifier_option_id: string;
    qty?: number;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type cart_item_modifiersUpdateWithoutModifier_groupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_items?: Prisma.cart_itemsUpdateOneRequiredWithoutCart_item_modifiersNestedInput;
    modifier_options?: Prisma.modifier_optionsUpdateOneRequiredWithoutCart_item_modifiersNestedInput;
};
export type cart_item_modifiersUncheckedUpdateWithoutModifier_groupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cart_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_option_id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cart_item_modifiersUncheckedUpdateManyWithoutModifier_groupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cart_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_option_id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cart_item_modifiersCreateManyModifier_optionsInput = {
    id?: string;
    cart_item_id: string;
    modifier_group_id: string;
    qty?: number;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type cart_item_modifiersUpdateWithoutModifier_optionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_items?: Prisma.cart_itemsUpdateOneRequiredWithoutCart_item_modifiersNestedInput;
    modifier_groups?: Prisma.modifier_groupsUpdateOneRequiredWithoutCart_item_modifiersNestedInput;
};
export type cart_item_modifiersUncheckedUpdateWithoutModifier_optionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cart_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cart_item_modifiersUncheckedUpdateManyWithoutModifier_optionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cart_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cart_item_modifiersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cart_item_id?: boolean;
    modifier_group_id?: boolean;
    modifier_option_id?: boolean;
    qty?: boolean;
    price_delta_amount?: boolean;
    created_at?: boolean;
    cart_items?: boolean | Prisma.cart_itemsDefaultArgs<ExtArgs>;
    modifier_groups?: boolean | Prisma.modifier_groupsDefaultArgs<ExtArgs>;
    modifier_options?: boolean | Prisma.modifier_optionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cart_item_modifiers"]>;
export type cart_item_modifiersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cart_item_id?: boolean;
    modifier_group_id?: boolean;
    modifier_option_id?: boolean;
    qty?: boolean;
    price_delta_amount?: boolean;
    created_at?: boolean;
    cart_items?: boolean | Prisma.cart_itemsDefaultArgs<ExtArgs>;
    modifier_groups?: boolean | Prisma.modifier_groupsDefaultArgs<ExtArgs>;
    modifier_options?: boolean | Prisma.modifier_optionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cart_item_modifiers"]>;
export type cart_item_modifiersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cart_item_id?: boolean;
    modifier_group_id?: boolean;
    modifier_option_id?: boolean;
    qty?: boolean;
    price_delta_amount?: boolean;
    created_at?: boolean;
    cart_items?: boolean | Prisma.cart_itemsDefaultArgs<ExtArgs>;
    modifier_groups?: boolean | Prisma.modifier_groupsDefaultArgs<ExtArgs>;
    modifier_options?: boolean | Prisma.modifier_optionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cart_item_modifiers"]>;
export type cart_item_modifiersSelectScalar = {
    id?: boolean;
    cart_item_id?: boolean;
    modifier_group_id?: boolean;
    modifier_option_id?: boolean;
    qty?: boolean;
    price_delta_amount?: boolean;
    created_at?: boolean;
};
export type cart_item_modifiersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cart_item_id" | "modifier_group_id" | "modifier_option_id" | "qty" | "price_delta_amount" | "created_at", ExtArgs["result"]["cart_item_modifiers"]>;
export type cart_item_modifiersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cart_items?: boolean | Prisma.cart_itemsDefaultArgs<ExtArgs>;
    modifier_groups?: boolean | Prisma.modifier_groupsDefaultArgs<ExtArgs>;
    modifier_options?: boolean | Prisma.modifier_optionsDefaultArgs<ExtArgs>;
};
export type cart_item_modifiersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cart_items?: boolean | Prisma.cart_itemsDefaultArgs<ExtArgs>;
    modifier_groups?: boolean | Prisma.modifier_groupsDefaultArgs<ExtArgs>;
    modifier_options?: boolean | Prisma.modifier_optionsDefaultArgs<ExtArgs>;
};
export type cart_item_modifiersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cart_items?: boolean | Prisma.cart_itemsDefaultArgs<ExtArgs>;
    modifier_groups?: boolean | Prisma.modifier_groupsDefaultArgs<ExtArgs>;
    modifier_options?: boolean | Prisma.modifier_optionsDefaultArgs<ExtArgs>;
};
export type $cart_item_modifiersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "cart_item_modifiers";
    objects: {
        cart_items: Prisma.$cart_itemsPayload<ExtArgs>;
        modifier_groups: Prisma.$modifier_groupsPayload<ExtArgs>;
        modifier_options: Prisma.$modifier_optionsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        cart_item_id: string;
        modifier_group_id: string;
        modifier_option_id: string;
        qty: number;
        price_delta_amount: runtime.Decimal;
        created_at: Date;
    }, ExtArgs["result"]["cart_item_modifiers"]>;
    composites: {};
};
export type cart_item_modifiersGetPayload<S extends boolean | null | undefined | cart_item_modifiersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$cart_item_modifiersPayload, S>;
export type cart_item_modifiersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<cart_item_modifiersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Cart_item_modifiersCountAggregateInputType | true;
};
export interface cart_item_modifiersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['cart_item_modifiers'];
        meta: {
            name: 'cart_item_modifiers';
        };
    };
    findUnique<T extends cart_item_modifiersFindUniqueArgs>(args: Prisma.SelectSubset<T, cart_item_modifiersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__cart_item_modifiersClient<runtime.Types.Result.GetResult<Prisma.$cart_item_modifiersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends cart_item_modifiersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, cart_item_modifiersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__cart_item_modifiersClient<runtime.Types.Result.GetResult<Prisma.$cart_item_modifiersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends cart_item_modifiersFindFirstArgs>(args?: Prisma.SelectSubset<T, cart_item_modifiersFindFirstArgs<ExtArgs>>): Prisma.Prisma__cart_item_modifiersClient<runtime.Types.Result.GetResult<Prisma.$cart_item_modifiersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends cart_item_modifiersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, cart_item_modifiersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__cart_item_modifiersClient<runtime.Types.Result.GetResult<Prisma.$cart_item_modifiersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends cart_item_modifiersFindManyArgs>(args?: Prisma.SelectSubset<T, cart_item_modifiersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cart_item_modifiersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends cart_item_modifiersCreateArgs>(args: Prisma.SelectSubset<T, cart_item_modifiersCreateArgs<ExtArgs>>): Prisma.Prisma__cart_item_modifiersClient<runtime.Types.Result.GetResult<Prisma.$cart_item_modifiersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends cart_item_modifiersCreateManyArgs>(args?: Prisma.SelectSubset<T, cart_item_modifiersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends cart_item_modifiersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, cart_item_modifiersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cart_item_modifiersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends cart_item_modifiersDeleteArgs>(args: Prisma.SelectSubset<T, cart_item_modifiersDeleteArgs<ExtArgs>>): Prisma.Prisma__cart_item_modifiersClient<runtime.Types.Result.GetResult<Prisma.$cart_item_modifiersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends cart_item_modifiersUpdateArgs>(args: Prisma.SelectSubset<T, cart_item_modifiersUpdateArgs<ExtArgs>>): Prisma.Prisma__cart_item_modifiersClient<runtime.Types.Result.GetResult<Prisma.$cart_item_modifiersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends cart_item_modifiersDeleteManyArgs>(args?: Prisma.SelectSubset<T, cart_item_modifiersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends cart_item_modifiersUpdateManyArgs>(args: Prisma.SelectSubset<T, cart_item_modifiersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends cart_item_modifiersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, cart_item_modifiersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cart_item_modifiersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends cart_item_modifiersUpsertArgs>(args: Prisma.SelectSubset<T, cart_item_modifiersUpsertArgs<ExtArgs>>): Prisma.Prisma__cart_item_modifiersClient<runtime.Types.Result.GetResult<Prisma.$cart_item_modifiersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends cart_item_modifiersCountArgs>(args?: Prisma.Subset<T, cart_item_modifiersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Cart_item_modifiersCountAggregateOutputType> : number>;
    aggregate<T extends Cart_item_modifiersAggregateArgs>(args: Prisma.Subset<T, Cart_item_modifiersAggregateArgs>): Prisma.PrismaPromise<GetCart_item_modifiersAggregateType<T>>;
    groupBy<T extends cart_item_modifiersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: cart_item_modifiersGroupByArgs['orderBy'];
    } : {
        orderBy?: cart_item_modifiersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, cart_item_modifiersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCart_item_modifiersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: cart_item_modifiersFieldRefs;
}
export interface Prisma__cart_item_modifiersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cart_items<T extends Prisma.cart_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cart_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__cart_itemsClient<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    modifier_groups<T extends Prisma.modifier_groupsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.modifier_groupsDefaultArgs<ExtArgs>>): Prisma.Prisma__modifier_groupsClient<runtime.Types.Result.GetResult<Prisma.$modifier_groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    modifier_options<T extends Prisma.modifier_optionsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.modifier_optionsDefaultArgs<ExtArgs>>): Prisma.Prisma__modifier_optionsClient<runtime.Types.Result.GetResult<Prisma.$modifier_optionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface cart_item_modifiersFieldRefs {
    readonly id: Prisma.FieldRef<"cart_item_modifiers", 'String'>;
    readonly cart_item_id: Prisma.FieldRef<"cart_item_modifiers", 'String'>;
    readonly modifier_group_id: Prisma.FieldRef<"cart_item_modifiers", 'String'>;
    readonly modifier_option_id: Prisma.FieldRef<"cart_item_modifiers", 'String'>;
    readonly qty: Prisma.FieldRef<"cart_item_modifiers", 'Int'>;
    readonly price_delta_amount: Prisma.FieldRef<"cart_item_modifiers", 'Decimal'>;
    readonly created_at: Prisma.FieldRef<"cart_item_modifiers", 'DateTime'>;
}
export type cart_item_modifiersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.cart_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.cart_item_modifiersInclude<ExtArgs> | null;
    where: Prisma.cart_item_modifiersWhereUniqueInput;
};
export type cart_item_modifiersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.cart_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.cart_item_modifiersInclude<ExtArgs> | null;
    where: Prisma.cart_item_modifiersWhereUniqueInput;
};
export type cart_item_modifiersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.cart_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.cart_item_modifiersInclude<ExtArgs> | null;
    where?: Prisma.cart_item_modifiersWhereInput;
    orderBy?: Prisma.cart_item_modifiersOrderByWithRelationInput | Prisma.cart_item_modifiersOrderByWithRelationInput[];
    cursor?: Prisma.cart_item_modifiersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cart_item_modifiersScalarFieldEnum | Prisma.Cart_item_modifiersScalarFieldEnum[];
};
export type cart_item_modifiersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.cart_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.cart_item_modifiersInclude<ExtArgs> | null;
    where?: Prisma.cart_item_modifiersWhereInput;
    orderBy?: Prisma.cart_item_modifiersOrderByWithRelationInput | Prisma.cart_item_modifiersOrderByWithRelationInput[];
    cursor?: Prisma.cart_item_modifiersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cart_item_modifiersScalarFieldEnum | Prisma.Cart_item_modifiersScalarFieldEnum[];
};
export type cart_item_modifiersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.cart_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.cart_item_modifiersInclude<ExtArgs> | null;
    where?: Prisma.cart_item_modifiersWhereInput;
    orderBy?: Prisma.cart_item_modifiersOrderByWithRelationInput | Prisma.cart_item_modifiersOrderByWithRelationInput[];
    cursor?: Prisma.cart_item_modifiersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cart_item_modifiersScalarFieldEnum | Prisma.Cart_item_modifiersScalarFieldEnum[];
};
export type cart_item_modifiersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.cart_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.cart_item_modifiersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cart_item_modifiersCreateInput, Prisma.cart_item_modifiersUncheckedCreateInput>;
};
export type cart_item_modifiersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.cart_item_modifiersCreateManyInput | Prisma.cart_item_modifiersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type cart_item_modifiersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_item_modifiersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.cart_item_modifiersOmit<ExtArgs> | null;
    data: Prisma.cart_item_modifiersCreateManyInput | Prisma.cart_item_modifiersCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.cart_item_modifiersIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type cart_item_modifiersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.cart_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.cart_item_modifiersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cart_item_modifiersUpdateInput, Prisma.cart_item_modifiersUncheckedUpdateInput>;
    where: Prisma.cart_item_modifiersWhereUniqueInput;
};
export type cart_item_modifiersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.cart_item_modifiersUpdateManyMutationInput, Prisma.cart_item_modifiersUncheckedUpdateManyInput>;
    where?: Prisma.cart_item_modifiersWhereInput;
    limit?: number;
};
export type cart_item_modifiersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_item_modifiersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.cart_item_modifiersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cart_item_modifiersUpdateManyMutationInput, Prisma.cart_item_modifiersUncheckedUpdateManyInput>;
    where?: Prisma.cart_item_modifiersWhereInput;
    limit?: number;
    include?: Prisma.cart_item_modifiersIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type cart_item_modifiersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.cart_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.cart_item_modifiersInclude<ExtArgs> | null;
    where: Prisma.cart_item_modifiersWhereUniqueInput;
    create: Prisma.XOR<Prisma.cart_item_modifiersCreateInput, Prisma.cart_item_modifiersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.cart_item_modifiersUpdateInput, Prisma.cart_item_modifiersUncheckedUpdateInput>;
};
export type cart_item_modifiersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.cart_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.cart_item_modifiersInclude<ExtArgs> | null;
    where: Prisma.cart_item_modifiersWhereUniqueInput;
};
export type cart_item_modifiersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cart_item_modifiersWhereInput;
    limit?: number;
};
export type cart_item_modifiersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.cart_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.cart_item_modifiersInclude<ExtArgs> | null;
};
export {};
