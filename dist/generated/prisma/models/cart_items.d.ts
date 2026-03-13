import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type cart_itemsModel = runtime.Types.Result.DefaultSelection<Prisma.$cart_itemsPayload>;
export type AggregateCart_items = {
    _count: Cart_itemsCountAggregateOutputType | null;
    _avg: Cart_itemsAvgAggregateOutputType | null;
    _sum: Cart_itemsSumAggregateOutputType | null;
    _min: Cart_itemsMinAggregateOutputType | null;
    _max: Cart_itemsMaxAggregateOutputType | null;
};
export type Cart_itemsAvgAggregateOutputType = {
    qty: number | null;
    unit_price_amount: runtime.Decimal | null;
};
export type Cart_itemsSumAggregateOutputType = {
    qty: number | null;
    unit_price_amount: runtime.Decimal | null;
};
export type Cart_itemsMinAggregateOutputType = {
    id: string | null;
    cart_id: string | null;
    catalog_item_id: string | null;
    variant_id: string | null;
    branch_catalog_item_id: string | null;
    qty: number | null;
    unit_price_amount: runtime.Decimal | null;
    notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Cart_itemsMaxAggregateOutputType = {
    id: string | null;
    cart_id: string | null;
    catalog_item_id: string | null;
    variant_id: string | null;
    branch_catalog_item_id: string | null;
    qty: number | null;
    unit_price_amount: runtime.Decimal | null;
    notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Cart_itemsCountAggregateOutputType = {
    id: number;
    cart_id: number;
    catalog_item_id: number;
    variant_id: number;
    branch_catalog_item_id: number;
    qty: number;
    unit_price_amount: number;
    notes: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Cart_itemsAvgAggregateInputType = {
    qty?: true;
    unit_price_amount?: true;
};
export type Cart_itemsSumAggregateInputType = {
    qty?: true;
    unit_price_amount?: true;
};
export type Cart_itemsMinAggregateInputType = {
    id?: true;
    cart_id?: true;
    catalog_item_id?: true;
    variant_id?: true;
    branch_catalog_item_id?: true;
    qty?: true;
    unit_price_amount?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
};
export type Cart_itemsMaxAggregateInputType = {
    id?: true;
    cart_id?: true;
    catalog_item_id?: true;
    variant_id?: true;
    branch_catalog_item_id?: true;
    qty?: true;
    unit_price_amount?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
};
export type Cart_itemsCountAggregateInputType = {
    id?: true;
    cart_id?: true;
    catalog_item_id?: true;
    variant_id?: true;
    branch_catalog_item_id?: true;
    qty?: true;
    unit_price_amount?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Cart_itemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cart_itemsWhereInput;
    orderBy?: Prisma.cart_itemsOrderByWithRelationInput | Prisma.cart_itemsOrderByWithRelationInput[];
    cursor?: Prisma.cart_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Cart_itemsCountAggregateInputType;
    _avg?: Cart_itemsAvgAggregateInputType;
    _sum?: Cart_itemsSumAggregateInputType;
    _min?: Cart_itemsMinAggregateInputType;
    _max?: Cart_itemsMaxAggregateInputType;
};
export type GetCart_itemsAggregateType<T extends Cart_itemsAggregateArgs> = {
    [P in keyof T & keyof AggregateCart_items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCart_items[P]> : Prisma.GetScalarType<T[P], AggregateCart_items[P]>;
};
export type cart_itemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cart_itemsWhereInput;
    orderBy?: Prisma.cart_itemsOrderByWithAggregationInput | Prisma.cart_itemsOrderByWithAggregationInput[];
    by: Prisma.Cart_itemsScalarFieldEnum[] | Prisma.Cart_itemsScalarFieldEnum;
    having?: Prisma.cart_itemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Cart_itemsCountAggregateInputType | true;
    _avg?: Cart_itemsAvgAggregateInputType;
    _sum?: Cart_itemsSumAggregateInputType;
    _min?: Cart_itemsMinAggregateInputType;
    _max?: Cart_itemsMaxAggregateInputType;
};
export type Cart_itemsGroupByOutputType = {
    id: string;
    cart_id: string;
    catalog_item_id: string;
    variant_id: string | null;
    branch_catalog_item_id: string;
    qty: number;
    unit_price_amount: runtime.Decimal;
    notes: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Cart_itemsCountAggregateOutputType | null;
    _avg: Cart_itemsAvgAggregateOutputType | null;
    _sum: Cart_itemsSumAggregateOutputType | null;
    _min: Cart_itemsMinAggregateOutputType | null;
    _max: Cart_itemsMaxAggregateOutputType | null;
};
type GetCart_itemsGroupByPayload<T extends cart_itemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Cart_itemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Cart_itemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Cart_itemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Cart_itemsGroupByOutputType[P]>;
}>>;
export type cart_itemsWhereInput = {
    AND?: Prisma.cart_itemsWhereInput | Prisma.cart_itemsWhereInput[];
    OR?: Prisma.cart_itemsWhereInput[];
    NOT?: Prisma.cart_itemsWhereInput | Prisma.cart_itemsWhereInput[];
    id?: Prisma.UuidFilter<"cart_items"> | string;
    cart_id?: Prisma.UuidFilter<"cart_items"> | string;
    catalog_item_id?: Prisma.UuidFilter<"cart_items"> | string;
    variant_id?: Prisma.UuidNullableFilter<"cart_items"> | string | null;
    branch_catalog_item_id?: Prisma.UuidFilter<"cart_items"> | string;
    qty?: Prisma.IntFilter<"cart_items"> | number;
    unit_price_amount?: Prisma.DecimalFilter<"cart_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"cart_items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"cart_items"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"cart_items"> | Date | string;
    cart_item_modifiers?: Prisma.Cart_item_modifiersListRelationFilter;
    branch_catalog_items?: Prisma.XOR<Prisma.Branch_catalog_itemsScalarRelationFilter, Prisma.branch_catalog_itemsWhereInput>;
    carts?: Prisma.XOR<Prisma.CartsScalarRelationFilter, Prisma.cartsWhereInput>;
    catalog_items?: Prisma.XOR<Prisma.Catalog_itemsScalarRelationFilter, Prisma.catalog_itemsWhereInput>;
    catalog_item_variants?: Prisma.XOR<Prisma.Catalog_item_variantsNullableScalarRelationFilter, Prisma.catalog_item_variantsWhereInput> | null;
};
export type cart_itemsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cart_id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    branch_catalog_item_id?: Prisma.SortOrder;
    qty?: Prisma.SortOrder;
    unit_price_amount?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    cart_item_modifiers?: Prisma.cart_item_modifiersOrderByRelationAggregateInput;
    branch_catalog_items?: Prisma.branch_catalog_itemsOrderByWithRelationInput;
    carts?: Prisma.cartsOrderByWithRelationInput;
    catalog_items?: Prisma.catalog_itemsOrderByWithRelationInput;
    catalog_item_variants?: Prisma.catalog_item_variantsOrderByWithRelationInput;
};
export type cart_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.cart_itemsWhereInput | Prisma.cart_itemsWhereInput[];
    OR?: Prisma.cart_itemsWhereInput[];
    NOT?: Prisma.cart_itemsWhereInput | Prisma.cart_itemsWhereInput[];
    cart_id?: Prisma.UuidFilter<"cart_items"> | string;
    catalog_item_id?: Prisma.UuidFilter<"cart_items"> | string;
    variant_id?: Prisma.UuidNullableFilter<"cart_items"> | string | null;
    branch_catalog_item_id?: Prisma.UuidFilter<"cart_items"> | string;
    qty?: Prisma.IntFilter<"cart_items"> | number;
    unit_price_amount?: Prisma.DecimalFilter<"cart_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"cart_items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"cart_items"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"cart_items"> | Date | string;
    cart_item_modifiers?: Prisma.Cart_item_modifiersListRelationFilter;
    branch_catalog_items?: Prisma.XOR<Prisma.Branch_catalog_itemsScalarRelationFilter, Prisma.branch_catalog_itemsWhereInput>;
    carts?: Prisma.XOR<Prisma.CartsScalarRelationFilter, Prisma.cartsWhereInput>;
    catalog_items?: Prisma.XOR<Prisma.Catalog_itemsScalarRelationFilter, Prisma.catalog_itemsWhereInput>;
    catalog_item_variants?: Prisma.XOR<Prisma.Catalog_item_variantsNullableScalarRelationFilter, Prisma.catalog_item_variantsWhereInput> | null;
}, "id">;
export type cart_itemsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cart_id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    branch_catalog_item_id?: Prisma.SortOrder;
    qty?: Prisma.SortOrder;
    unit_price_amount?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.cart_itemsCountOrderByAggregateInput;
    _avg?: Prisma.cart_itemsAvgOrderByAggregateInput;
    _max?: Prisma.cart_itemsMaxOrderByAggregateInput;
    _min?: Prisma.cart_itemsMinOrderByAggregateInput;
    _sum?: Prisma.cart_itemsSumOrderByAggregateInput;
};
export type cart_itemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.cart_itemsScalarWhereWithAggregatesInput | Prisma.cart_itemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.cart_itemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.cart_itemsScalarWhereWithAggregatesInput | Prisma.cart_itemsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"cart_items"> | string;
    cart_id?: Prisma.UuidWithAggregatesFilter<"cart_items"> | string;
    catalog_item_id?: Prisma.UuidWithAggregatesFilter<"cart_items"> | string;
    variant_id?: Prisma.UuidNullableWithAggregatesFilter<"cart_items"> | string | null;
    branch_catalog_item_id?: Prisma.UuidWithAggregatesFilter<"cart_items"> | string;
    qty?: Prisma.IntWithAggregatesFilter<"cart_items"> | number;
    unit_price_amount?: Prisma.DecimalWithAggregatesFilter<"cart_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"cart_items"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"cart_items"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"cart_items"> | Date | string;
};
export type cart_itemsCreateInput = {
    id?: string;
    qty: number;
    unit_price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersCreateNestedManyWithoutCart_itemsInput;
    branch_catalog_items: Prisma.branch_catalog_itemsCreateNestedOneWithoutCart_itemsInput;
    carts: Prisma.cartsCreateNestedOneWithoutCart_itemsInput;
    catalog_items: Prisma.catalog_itemsCreateNestedOneWithoutCart_itemsInput;
    catalog_item_variants?: Prisma.catalog_item_variantsCreateNestedOneWithoutCart_itemsInput;
};
export type cart_itemsUncheckedCreateInput = {
    id?: string;
    cart_id: string;
    catalog_item_id: string;
    variant_id?: string | null;
    branch_catalog_item_id: string;
    qty: number;
    unit_price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedCreateNestedManyWithoutCart_itemsInput;
};
export type cart_itemsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUpdateManyWithoutCart_itemsNestedInput;
    branch_catalog_items?: Prisma.branch_catalog_itemsUpdateOneRequiredWithoutCart_itemsNestedInput;
    carts?: Prisma.cartsUpdateOneRequiredWithoutCart_itemsNestedInput;
    catalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutCart_itemsNestedInput;
    catalog_item_variants?: Prisma.catalog_item_variantsUpdateOneWithoutCart_itemsNestedInput;
};
export type cart_itemsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cart_id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    variant_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    branch_catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedUpdateManyWithoutCart_itemsNestedInput;
};
export type cart_itemsCreateManyInput = {
    id?: string;
    cart_id: string;
    catalog_item_id: string;
    variant_id?: string | null;
    branch_catalog_item_id: string;
    qty: number;
    unit_price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type cart_itemsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cart_itemsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cart_id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    variant_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    branch_catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Cart_itemsListRelationFilter = {
    every?: Prisma.cart_itemsWhereInput;
    some?: Prisma.cart_itemsWhereInput;
    none?: Prisma.cart_itemsWhereInput;
};
export type cart_itemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Cart_itemsScalarRelationFilter = {
    is?: Prisma.cart_itemsWhereInput;
    isNot?: Prisma.cart_itemsWhereInput;
};
export type cart_itemsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cart_id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    branch_catalog_item_id?: Prisma.SortOrder;
    qty?: Prisma.SortOrder;
    unit_price_amount?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type cart_itemsAvgOrderByAggregateInput = {
    qty?: Prisma.SortOrder;
    unit_price_amount?: Prisma.SortOrder;
};
export type cart_itemsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cart_id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    branch_catalog_item_id?: Prisma.SortOrder;
    qty?: Prisma.SortOrder;
    unit_price_amount?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type cart_itemsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cart_id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    branch_catalog_item_id?: Prisma.SortOrder;
    qty?: Prisma.SortOrder;
    unit_price_amount?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type cart_itemsSumOrderByAggregateInput = {
    qty?: Prisma.SortOrder;
    unit_price_amount?: Prisma.SortOrder;
};
export type cart_itemsCreateNestedManyWithoutBranch_catalog_itemsInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutBranch_catalog_itemsInput, Prisma.cart_itemsUncheckedCreateWithoutBranch_catalog_itemsInput> | Prisma.cart_itemsCreateWithoutBranch_catalog_itemsInput[] | Prisma.cart_itemsUncheckedCreateWithoutBranch_catalog_itemsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutBranch_catalog_itemsInput | Prisma.cart_itemsCreateOrConnectWithoutBranch_catalog_itemsInput[];
    createMany?: Prisma.cart_itemsCreateManyBranch_catalog_itemsInputEnvelope;
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
};
export type cart_itemsUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutBranch_catalog_itemsInput, Prisma.cart_itemsUncheckedCreateWithoutBranch_catalog_itemsInput> | Prisma.cart_itemsCreateWithoutBranch_catalog_itemsInput[] | Prisma.cart_itemsUncheckedCreateWithoutBranch_catalog_itemsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutBranch_catalog_itemsInput | Prisma.cart_itemsCreateOrConnectWithoutBranch_catalog_itemsInput[];
    createMany?: Prisma.cart_itemsCreateManyBranch_catalog_itemsInputEnvelope;
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
};
export type cart_itemsUpdateManyWithoutBranch_catalog_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutBranch_catalog_itemsInput, Prisma.cart_itemsUncheckedCreateWithoutBranch_catalog_itemsInput> | Prisma.cart_itemsCreateWithoutBranch_catalog_itemsInput[] | Prisma.cart_itemsUncheckedCreateWithoutBranch_catalog_itemsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutBranch_catalog_itemsInput | Prisma.cart_itemsCreateOrConnectWithoutBranch_catalog_itemsInput[];
    upsert?: Prisma.cart_itemsUpsertWithWhereUniqueWithoutBranch_catalog_itemsInput | Prisma.cart_itemsUpsertWithWhereUniqueWithoutBranch_catalog_itemsInput[];
    createMany?: Prisma.cart_itemsCreateManyBranch_catalog_itemsInputEnvelope;
    set?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    disconnect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    delete?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    update?: Prisma.cart_itemsUpdateWithWhereUniqueWithoutBranch_catalog_itemsInput | Prisma.cart_itemsUpdateWithWhereUniqueWithoutBranch_catalog_itemsInput[];
    updateMany?: Prisma.cart_itemsUpdateManyWithWhereWithoutBranch_catalog_itemsInput | Prisma.cart_itemsUpdateManyWithWhereWithoutBranch_catalog_itemsInput[];
    deleteMany?: Prisma.cart_itemsScalarWhereInput | Prisma.cart_itemsScalarWhereInput[];
};
export type cart_itemsUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutBranch_catalog_itemsInput, Prisma.cart_itemsUncheckedCreateWithoutBranch_catalog_itemsInput> | Prisma.cart_itemsCreateWithoutBranch_catalog_itemsInput[] | Prisma.cart_itemsUncheckedCreateWithoutBranch_catalog_itemsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutBranch_catalog_itemsInput | Prisma.cart_itemsCreateOrConnectWithoutBranch_catalog_itemsInput[];
    upsert?: Prisma.cart_itemsUpsertWithWhereUniqueWithoutBranch_catalog_itemsInput | Prisma.cart_itemsUpsertWithWhereUniqueWithoutBranch_catalog_itemsInput[];
    createMany?: Prisma.cart_itemsCreateManyBranch_catalog_itemsInputEnvelope;
    set?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    disconnect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    delete?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    update?: Prisma.cart_itemsUpdateWithWhereUniqueWithoutBranch_catalog_itemsInput | Prisma.cart_itemsUpdateWithWhereUniqueWithoutBranch_catalog_itemsInput[];
    updateMany?: Prisma.cart_itemsUpdateManyWithWhereWithoutBranch_catalog_itemsInput | Prisma.cart_itemsUpdateManyWithWhereWithoutBranch_catalog_itemsInput[];
    deleteMany?: Prisma.cart_itemsScalarWhereInput | Prisma.cart_itemsScalarWhereInput[];
};
export type cart_itemsCreateNestedOneWithoutCart_item_modifiersInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutCart_item_modifiersInput, Prisma.cart_itemsUncheckedCreateWithoutCart_item_modifiersInput>;
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutCart_item_modifiersInput;
    connect?: Prisma.cart_itemsWhereUniqueInput;
};
export type cart_itemsUpdateOneRequiredWithoutCart_item_modifiersNestedInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutCart_item_modifiersInput, Prisma.cart_itemsUncheckedCreateWithoutCart_item_modifiersInput>;
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutCart_item_modifiersInput;
    upsert?: Prisma.cart_itemsUpsertWithoutCart_item_modifiersInput;
    connect?: Prisma.cart_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cart_itemsUpdateToOneWithWhereWithoutCart_item_modifiersInput, Prisma.cart_itemsUpdateWithoutCart_item_modifiersInput>, Prisma.cart_itemsUncheckedUpdateWithoutCart_item_modifiersInput>;
};
export type cart_itemsCreateNestedManyWithoutCartsInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutCartsInput, Prisma.cart_itemsUncheckedCreateWithoutCartsInput> | Prisma.cart_itemsCreateWithoutCartsInput[] | Prisma.cart_itemsUncheckedCreateWithoutCartsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutCartsInput | Prisma.cart_itemsCreateOrConnectWithoutCartsInput[];
    createMany?: Prisma.cart_itemsCreateManyCartsInputEnvelope;
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
};
export type cart_itemsUncheckedCreateNestedManyWithoutCartsInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutCartsInput, Prisma.cart_itemsUncheckedCreateWithoutCartsInput> | Prisma.cart_itemsCreateWithoutCartsInput[] | Prisma.cart_itemsUncheckedCreateWithoutCartsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutCartsInput | Prisma.cart_itemsCreateOrConnectWithoutCartsInput[];
    createMany?: Prisma.cart_itemsCreateManyCartsInputEnvelope;
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
};
export type cart_itemsUpdateManyWithoutCartsNestedInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutCartsInput, Prisma.cart_itemsUncheckedCreateWithoutCartsInput> | Prisma.cart_itemsCreateWithoutCartsInput[] | Prisma.cart_itemsUncheckedCreateWithoutCartsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutCartsInput | Prisma.cart_itemsCreateOrConnectWithoutCartsInput[];
    upsert?: Prisma.cart_itemsUpsertWithWhereUniqueWithoutCartsInput | Prisma.cart_itemsUpsertWithWhereUniqueWithoutCartsInput[];
    createMany?: Prisma.cart_itemsCreateManyCartsInputEnvelope;
    set?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    disconnect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    delete?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    update?: Prisma.cart_itemsUpdateWithWhereUniqueWithoutCartsInput | Prisma.cart_itemsUpdateWithWhereUniqueWithoutCartsInput[];
    updateMany?: Prisma.cart_itemsUpdateManyWithWhereWithoutCartsInput | Prisma.cart_itemsUpdateManyWithWhereWithoutCartsInput[];
    deleteMany?: Prisma.cart_itemsScalarWhereInput | Prisma.cart_itemsScalarWhereInput[];
};
export type cart_itemsUncheckedUpdateManyWithoutCartsNestedInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutCartsInput, Prisma.cart_itemsUncheckedCreateWithoutCartsInput> | Prisma.cart_itemsCreateWithoutCartsInput[] | Prisma.cart_itemsUncheckedCreateWithoutCartsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutCartsInput | Prisma.cart_itemsCreateOrConnectWithoutCartsInput[];
    upsert?: Prisma.cart_itemsUpsertWithWhereUniqueWithoutCartsInput | Prisma.cart_itemsUpsertWithWhereUniqueWithoutCartsInput[];
    createMany?: Prisma.cart_itemsCreateManyCartsInputEnvelope;
    set?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    disconnect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    delete?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    update?: Prisma.cart_itemsUpdateWithWhereUniqueWithoutCartsInput | Prisma.cart_itemsUpdateWithWhereUniqueWithoutCartsInput[];
    updateMany?: Prisma.cart_itemsUpdateManyWithWhereWithoutCartsInput | Prisma.cart_itemsUpdateManyWithWhereWithoutCartsInput[];
    deleteMany?: Prisma.cart_itemsScalarWhereInput | Prisma.cart_itemsScalarWhereInput[];
};
export type cart_itemsCreateNestedManyWithoutCatalog_item_variantsInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutCatalog_item_variantsInput, Prisma.cart_itemsUncheckedCreateWithoutCatalog_item_variantsInput> | Prisma.cart_itemsCreateWithoutCatalog_item_variantsInput[] | Prisma.cart_itemsUncheckedCreateWithoutCatalog_item_variantsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutCatalog_item_variantsInput | Prisma.cart_itemsCreateOrConnectWithoutCatalog_item_variantsInput[];
    createMany?: Prisma.cart_itemsCreateManyCatalog_item_variantsInputEnvelope;
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
};
export type cart_itemsUncheckedCreateNestedManyWithoutCatalog_item_variantsInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutCatalog_item_variantsInput, Prisma.cart_itemsUncheckedCreateWithoutCatalog_item_variantsInput> | Prisma.cart_itemsCreateWithoutCatalog_item_variantsInput[] | Prisma.cart_itemsUncheckedCreateWithoutCatalog_item_variantsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutCatalog_item_variantsInput | Prisma.cart_itemsCreateOrConnectWithoutCatalog_item_variantsInput[];
    createMany?: Prisma.cart_itemsCreateManyCatalog_item_variantsInputEnvelope;
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
};
export type cart_itemsUpdateManyWithoutCatalog_item_variantsNestedInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutCatalog_item_variantsInput, Prisma.cart_itemsUncheckedCreateWithoutCatalog_item_variantsInput> | Prisma.cart_itemsCreateWithoutCatalog_item_variantsInput[] | Prisma.cart_itemsUncheckedCreateWithoutCatalog_item_variantsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutCatalog_item_variantsInput | Prisma.cart_itemsCreateOrConnectWithoutCatalog_item_variantsInput[];
    upsert?: Prisma.cart_itemsUpsertWithWhereUniqueWithoutCatalog_item_variantsInput | Prisma.cart_itemsUpsertWithWhereUniqueWithoutCatalog_item_variantsInput[];
    createMany?: Prisma.cart_itemsCreateManyCatalog_item_variantsInputEnvelope;
    set?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    disconnect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    delete?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    update?: Prisma.cart_itemsUpdateWithWhereUniqueWithoutCatalog_item_variantsInput | Prisma.cart_itemsUpdateWithWhereUniqueWithoutCatalog_item_variantsInput[];
    updateMany?: Prisma.cart_itemsUpdateManyWithWhereWithoutCatalog_item_variantsInput | Prisma.cart_itemsUpdateManyWithWhereWithoutCatalog_item_variantsInput[];
    deleteMany?: Prisma.cart_itemsScalarWhereInput | Prisma.cart_itemsScalarWhereInput[];
};
export type cart_itemsUncheckedUpdateManyWithoutCatalog_item_variantsNestedInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutCatalog_item_variantsInput, Prisma.cart_itemsUncheckedCreateWithoutCatalog_item_variantsInput> | Prisma.cart_itemsCreateWithoutCatalog_item_variantsInput[] | Prisma.cart_itemsUncheckedCreateWithoutCatalog_item_variantsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutCatalog_item_variantsInput | Prisma.cart_itemsCreateOrConnectWithoutCatalog_item_variantsInput[];
    upsert?: Prisma.cart_itemsUpsertWithWhereUniqueWithoutCatalog_item_variantsInput | Prisma.cart_itemsUpsertWithWhereUniqueWithoutCatalog_item_variantsInput[];
    createMany?: Prisma.cart_itemsCreateManyCatalog_item_variantsInputEnvelope;
    set?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    disconnect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    delete?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    update?: Prisma.cart_itemsUpdateWithWhereUniqueWithoutCatalog_item_variantsInput | Prisma.cart_itemsUpdateWithWhereUniqueWithoutCatalog_item_variantsInput[];
    updateMany?: Prisma.cart_itemsUpdateManyWithWhereWithoutCatalog_item_variantsInput | Prisma.cart_itemsUpdateManyWithWhereWithoutCatalog_item_variantsInput[];
    deleteMany?: Prisma.cart_itemsScalarWhereInput | Prisma.cart_itemsScalarWhereInput[];
};
export type cart_itemsCreateNestedManyWithoutCatalog_itemsInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutCatalog_itemsInput, Prisma.cart_itemsUncheckedCreateWithoutCatalog_itemsInput> | Prisma.cart_itemsCreateWithoutCatalog_itemsInput[] | Prisma.cart_itemsUncheckedCreateWithoutCatalog_itemsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutCatalog_itemsInput | Prisma.cart_itemsCreateOrConnectWithoutCatalog_itemsInput[];
    createMany?: Prisma.cart_itemsCreateManyCatalog_itemsInputEnvelope;
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
};
export type cart_itemsUncheckedCreateNestedManyWithoutCatalog_itemsInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutCatalog_itemsInput, Prisma.cart_itemsUncheckedCreateWithoutCatalog_itemsInput> | Prisma.cart_itemsCreateWithoutCatalog_itemsInput[] | Prisma.cart_itemsUncheckedCreateWithoutCatalog_itemsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutCatalog_itemsInput | Prisma.cart_itemsCreateOrConnectWithoutCatalog_itemsInput[];
    createMany?: Prisma.cart_itemsCreateManyCatalog_itemsInputEnvelope;
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
};
export type cart_itemsUpdateManyWithoutCatalog_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutCatalog_itemsInput, Prisma.cart_itemsUncheckedCreateWithoutCatalog_itemsInput> | Prisma.cart_itemsCreateWithoutCatalog_itemsInput[] | Prisma.cart_itemsUncheckedCreateWithoutCatalog_itemsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutCatalog_itemsInput | Prisma.cart_itemsCreateOrConnectWithoutCatalog_itemsInput[];
    upsert?: Prisma.cart_itemsUpsertWithWhereUniqueWithoutCatalog_itemsInput | Prisma.cart_itemsUpsertWithWhereUniqueWithoutCatalog_itemsInput[];
    createMany?: Prisma.cart_itemsCreateManyCatalog_itemsInputEnvelope;
    set?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    disconnect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    delete?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    update?: Prisma.cart_itemsUpdateWithWhereUniqueWithoutCatalog_itemsInput | Prisma.cart_itemsUpdateWithWhereUniqueWithoutCatalog_itemsInput[];
    updateMany?: Prisma.cart_itemsUpdateManyWithWhereWithoutCatalog_itemsInput | Prisma.cart_itemsUpdateManyWithWhereWithoutCatalog_itemsInput[];
    deleteMany?: Prisma.cart_itemsScalarWhereInput | Prisma.cart_itemsScalarWhereInput[];
};
export type cart_itemsUncheckedUpdateManyWithoutCatalog_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.cart_itemsCreateWithoutCatalog_itemsInput, Prisma.cart_itemsUncheckedCreateWithoutCatalog_itemsInput> | Prisma.cart_itemsCreateWithoutCatalog_itemsInput[] | Prisma.cart_itemsUncheckedCreateWithoutCatalog_itemsInput[];
    connectOrCreate?: Prisma.cart_itemsCreateOrConnectWithoutCatalog_itemsInput | Prisma.cart_itemsCreateOrConnectWithoutCatalog_itemsInput[];
    upsert?: Prisma.cart_itemsUpsertWithWhereUniqueWithoutCatalog_itemsInput | Prisma.cart_itemsUpsertWithWhereUniqueWithoutCatalog_itemsInput[];
    createMany?: Prisma.cart_itemsCreateManyCatalog_itemsInputEnvelope;
    set?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    disconnect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    delete?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    connect?: Prisma.cart_itemsWhereUniqueInput | Prisma.cart_itemsWhereUniqueInput[];
    update?: Prisma.cart_itemsUpdateWithWhereUniqueWithoutCatalog_itemsInput | Prisma.cart_itemsUpdateWithWhereUniqueWithoutCatalog_itemsInput[];
    updateMany?: Prisma.cart_itemsUpdateManyWithWhereWithoutCatalog_itemsInput | Prisma.cart_itemsUpdateManyWithWhereWithoutCatalog_itemsInput[];
    deleteMany?: Prisma.cart_itemsScalarWhereInput | Prisma.cart_itemsScalarWhereInput[];
};
export type cart_itemsCreateWithoutBranch_catalog_itemsInput = {
    id?: string;
    qty: number;
    unit_price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersCreateNestedManyWithoutCart_itemsInput;
    carts: Prisma.cartsCreateNestedOneWithoutCart_itemsInput;
    catalog_items: Prisma.catalog_itemsCreateNestedOneWithoutCart_itemsInput;
    catalog_item_variants?: Prisma.catalog_item_variantsCreateNestedOneWithoutCart_itemsInput;
};
export type cart_itemsUncheckedCreateWithoutBranch_catalog_itemsInput = {
    id?: string;
    cart_id: string;
    catalog_item_id: string;
    variant_id?: string | null;
    qty: number;
    unit_price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedCreateNestedManyWithoutCart_itemsInput;
};
export type cart_itemsCreateOrConnectWithoutBranch_catalog_itemsInput = {
    where: Prisma.cart_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cart_itemsCreateWithoutBranch_catalog_itemsInput, Prisma.cart_itemsUncheckedCreateWithoutBranch_catalog_itemsInput>;
};
export type cart_itemsCreateManyBranch_catalog_itemsInputEnvelope = {
    data: Prisma.cart_itemsCreateManyBranch_catalog_itemsInput | Prisma.cart_itemsCreateManyBranch_catalog_itemsInput[];
    skipDuplicates?: boolean;
};
export type cart_itemsUpsertWithWhereUniqueWithoutBranch_catalog_itemsInput = {
    where: Prisma.cart_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.cart_itemsUpdateWithoutBranch_catalog_itemsInput, Prisma.cart_itemsUncheckedUpdateWithoutBranch_catalog_itemsInput>;
    create: Prisma.XOR<Prisma.cart_itemsCreateWithoutBranch_catalog_itemsInput, Prisma.cart_itemsUncheckedCreateWithoutBranch_catalog_itemsInput>;
};
export type cart_itemsUpdateWithWhereUniqueWithoutBranch_catalog_itemsInput = {
    where: Prisma.cart_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.cart_itemsUpdateWithoutBranch_catalog_itemsInput, Prisma.cart_itemsUncheckedUpdateWithoutBranch_catalog_itemsInput>;
};
export type cart_itemsUpdateManyWithWhereWithoutBranch_catalog_itemsInput = {
    where: Prisma.cart_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.cart_itemsUpdateManyMutationInput, Prisma.cart_itemsUncheckedUpdateManyWithoutBranch_catalog_itemsInput>;
};
export type cart_itemsScalarWhereInput = {
    AND?: Prisma.cart_itemsScalarWhereInput | Prisma.cart_itemsScalarWhereInput[];
    OR?: Prisma.cart_itemsScalarWhereInput[];
    NOT?: Prisma.cart_itemsScalarWhereInput | Prisma.cart_itemsScalarWhereInput[];
    id?: Prisma.UuidFilter<"cart_items"> | string;
    cart_id?: Prisma.UuidFilter<"cart_items"> | string;
    catalog_item_id?: Prisma.UuidFilter<"cart_items"> | string;
    variant_id?: Prisma.UuidNullableFilter<"cart_items"> | string | null;
    branch_catalog_item_id?: Prisma.UuidFilter<"cart_items"> | string;
    qty?: Prisma.IntFilter<"cart_items"> | number;
    unit_price_amount?: Prisma.DecimalFilter<"cart_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"cart_items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"cart_items"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"cart_items"> | Date | string;
};
export type cart_itemsCreateWithoutCart_item_modifiersInput = {
    id?: string;
    qty: number;
    unit_price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items: Prisma.branch_catalog_itemsCreateNestedOneWithoutCart_itemsInput;
    carts: Prisma.cartsCreateNestedOneWithoutCart_itemsInput;
    catalog_items: Prisma.catalog_itemsCreateNestedOneWithoutCart_itemsInput;
    catalog_item_variants?: Prisma.catalog_item_variantsCreateNestedOneWithoutCart_itemsInput;
};
export type cart_itemsUncheckedCreateWithoutCart_item_modifiersInput = {
    id?: string;
    cart_id: string;
    catalog_item_id: string;
    variant_id?: string | null;
    branch_catalog_item_id: string;
    qty: number;
    unit_price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type cart_itemsCreateOrConnectWithoutCart_item_modifiersInput = {
    where: Prisma.cart_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cart_itemsCreateWithoutCart_item_modifiersInput, Prisma.cart_itemsUncheckedCreateWithoutCart_item_modifiersInput>;
};
export type cart_itemsUpsertWithoutCart_item_modifiersInput = {
    update: Prisma.XOR<Prisma.cart_itemsUpdateWithoutCart_item_modifiersInput, Prisma.cart_itemsUncheckedUpdateWithoutCart_item_modifiersInput>;
    create: Prisma.XOR<Prisma.cart_itemsCreateWithoutCart_item_modifiersInput, Prisma.cart_itemsUncheckedCreateWithoutCart_item_modifiersInput>;
    where?: Prisma.cart_itemsWhereInput;
};
export type cart_itemsUpdateToOneWithWhereWithoutCart_item_modifiersInput = {
    where?: Prisma.cart_itemsWhereInput;
    data: Prisma.XOR<Prisma.cart_itemsUpdateWithoutCart_item_modifiersInput, Prisma.cart_itemsUncheckedUpdateWithoutCart_item_modifiersInput>;
};
export type cart_itemsUpdateWithoutCart_item_modifiersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUpdateOneRequiredWithoutCart_itemsNestedInput;
    carts?: Prisma.cartsUpdateOneRequiredWithoutCart_itemsNestedInput;
    catalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutCart_itemsNestedInput;
    catalog_item_variants?: Prisma.catalog_item_variantsUpdateOneWithoutCart_itemsNestedInput;
};
export type cart_itemsUncheckedUpdateWithoutCart_item_modifiersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cart_id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    variant_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    branch_catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cart_itemsCreateWithoutCartsInput = {
    id?: string;
    qty: number;
    unit_price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersCreateNestedManyWithoutCart_itemsInput;
    branch_catalog_items: Prisma.branch_catalog_itemsCreateNestedOneWithoutCart_itemsInput;
    catalog_items: Prisma.catalog_itemsCreateNestedOneWithoutCart_itemsInput;
    catalog_item_variants?: Prisma.catalog_item_variantsCreateNestedOneWithoutCart_itemsInput;
};
export type cart_itemsUncheckedCreateWithoutCartsInput = {
    id?: string;
    catalog_item_id: string;
    variant_id?: string | null;
    branch_catalog_item_id: string;
    qty: number;
    unit_price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedCreateNestedManyWithoutCart_itemsInput;
};
export type cart_itemsCreateOrConnectWithoutCartsInput = {
    where: Prisma.cart_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cart_itemsCreateWithoutCartsInput, Prisma.cart_itemsUncheckedCreateWithoutCartsInput>;
};
export type cart_itemsCreateManyCartsInputEnvelope = {
    data: Prisma.cart_itemsCreateManyCartsInput | Prisma.cart_itemsCreateManyCartsInput[];
    skipDuplicates?: boolean;
};
export type cart_itemsUpsertWithWhereUniqueWithoutCartsInput = {
    where: Prisma.cart_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.cart_itemsUpdateWithoutCartsInput, Prisma.cart_itemsUncheckedUpdateWithoutCartsInput>;
    create: Prisma.XOR<Prisma.cart_itemsCreateWithoutCartsInput, Prisma.cart_itemsUncheckedCreateWithoutCartsInput>;
};
export type cart_itemsUpdateWithWhereUniqueWithoutCartsInput = {
    where: Prisma.cart_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.cart_itemsUpdateWithoutCartsInput, Prisma.cart_itemsUncheckedUpdateWithoutCartsInput>;
};
export type cart_itemsUpdateManyWithWhereWithoutCartsInput = {
    where: Prisma.cart_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.cart_itemsUpdateManyMutationInput, Prisma.cart_itemsUncheckedUpdateManyWithoutCartsInput>;
};
export type cart_itemsCreateWithoutCatalog_item_variantsInput = {
    id?: string;
    qty: number;
    unit_price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersCreateNestedManyWithoutCart_itemsInput;
    branch_catalog_items: Prisma.branch_catalog_itemsCreateNestedOneWithoutCart_itemsInput;
    carts: Prisma.cartsCreateNestedOneWithoutCart_itemsInput;
    catalog_items: Prisma.catalog_itemsCreateNestedOneWithoutCart_itemsInput;
};
export type cart_itemsUncheckedCreateWithoutCatalog_item_variantsInput = {
    id?: string;
    cart_id: string;
    catalog_item_id: string;
    branch_catalog_item_id: string;
    qty: number;
    unit_price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedCreateNestedManyWithoutCart_itemsInput;
};
export type cart_itemsCreateOrConnectWithoutCatalog_item_variantsInput = {
    where: Prisma.cart_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cart_itemsCreateWithoutCatalog_item_variantsInput, Prisma.cart_itemsUncheckedCreateWithoutCatalog_item_variantsInput>;
};
export type cart_itemsCreateManyCatalog_item_variantsInputEnvelope = {
    data: Prisma.cart_itemsCreateManyCatalog_item_variantsInput | Prisma.cart_itemsCreateManyCatalog_item_variantsInput[];
    skipDuplicates?: boolean;
};
export type cart_itemsUpsertWithWhereUniqueWithoutCatalog_item_variantsInput = {
    where: Prisma.cart_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.cart_itemsUpdateWithoutCatalog_item_variantsInput, Prisma.cart_itemsUncheckedUpdateWithoutCatalog_item_variantsInput>;
    create: Prisma.XOR<Prisma.cart_itemsCreateWithoutCatalog_item_variantsInput, Prisma.cart_itemsUncheckedCreateWithoutCatalog_item_variantsInput>;
};
export type cart_itemsUpdateWithWhereUniqueWithoutCatalog_item_variantsInput = {
    where: Prisma.cart_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.cart_itemsUpdateWithoutCatalog_item_variantsInput, Prisma.cart_itemsUncheckedUpdateWithoutCatalog_item_variantsInput>;
};
export type cart_itemsUpdateManyWithWhereWithoutCatalog_item_variantsInput = {
    where: Prisma.cart_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.cart_itemsUpdateManyMutationInput, Prisma.cart_itemsUncheckedUpdateManyWithoutCatalog_item_variantsInput>;
};
export type cart_itemsCreateWithoutCatalog_itemsInput = {
    id?: string;
    qty: number;
    unit_price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersCreateNestedManyWithoutCart_itemsInput;
    branch_catalog_items: Prisma.branch_catalog_itemsCreateNestedOneWithoutCart_itemsInput;
    carts: Prisma.cartsCreateNestedOneWithoutCart_itemsInput;
    catalog_item_variants?: Prisma.catalog_item_variantsCreateNestedOneWithoutCart_itemsInput;
};
export type cart_itemsUncheckedCreateWithoutCatalog_itemsInput = {
    id?: string;
    cart_id: string;
    variant_id?: string | null;
    branch_catalog_item_id: string;
    qty: number;
    unit_price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedCreateNestedManyWithoutCart_itemsInput;
};
export type cart_itemsCreateOrConnectWithoutCatalog_itemsInput = {
    where: Prisma.cart_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cart_itemsCreateWithoutCatalog_itemsInput, Prisma.cart_itemsUncheckedCreateWithoutCatalog_itemsInput>;
};
export type cart_itemsCreateManyCatalog_itemsInputEnvelope = {
    data: Prisma.cart_itemsCreateManyCatalog_itemsInput | Prisma.cart_itemsCreateManyCatalog_itemsInput[];
    skipDuplicates?: boolean;
};
export type cart_itemsUpsertWithWhereUniqueWithoutCatalog_itemsInput = {
    where: Prisma.cart_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.cart_itemsUpdateWithoutCatalog_itemsInput, Prisma.cart_itemsUncheckedUpdateWithoutCatalog_itemsInput>;
    create: Prisma.XOR<Prisma.cart_itemsCreateWithoutCatalog_itemsInput, Prisma.cart_itemsUncheckedCreateWithoutCatalog_itemsInput>;
};
export type cart_itemsUpdateWithWhereUniqueWithoutCatalog_itemsInput = {
    where: Prisma.cart_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.cart_itemsUpdateWithoutCatalog_itemsInput, Prisma.cart_itemsUncheckedUpdateWithoutCatalog_itemsInput>;
};
export type cart_itemsUpdateManyWithWhereWithoutCatalog_itemsInput = {
    where: Prisma.cart_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.cart_itemsUpdateManyMutationInput, Prisma.cart_itemsUncheckedUpdateManyWithoutCatalog_itemsInput>;
};
export type cart_itemsCreateManyBranch_catalog_itemsInput = {
    id?: string;
    cart_id: string;
    catalog_item_id: string;
    variant_id?: string | null;
    qty: number;
    unit_price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type cart_itemsUpdateWithoutBranch_catalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUpdateManyWithoutCart_itemsNestedInput;
    carts?: Prisma.cartsUpdateOneRequiredWithoutCart_itemsNestedInput;
    catalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutCart_itemsNestedInput;
    catalog_item_variants?: Prisma.catalog_item_variantsUpdateOneWithoutCart_itemsNestedInput;
};
export type cart_itemsUncheckedUpdateWithoutBranch_catalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cart_id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    variant_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedUpdateManyWithoutCart_itemsNestedInput;
};
export type cart_itemsUncheckedUpdateManyWithoutBranch_catalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cart_id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    variant_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cart_itemsCreateManyCartsInput = {
    id?: string;
    catalog_item_id: string;
    variant_id?: string | null;
    branch_catalog_item_id: string;
    qty: number;
    unit_price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type cart_itemsUpdateWithoutCartsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUpdateManyWithoutCart_itemsNestedInput;
    branch_catalog_items?: Prisma.branch_catalog_itemsUpdateOneRequiredWithoutCart_itemsNestedInput;
    catalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutCart_itemsNestedInput;
    catalog_item_variants?: Prisma.catalog_item_variantsUpdateOneWithoutCart_itemsNestedInput;
};
export type cart_itemsUncheckedUpdateWithoutCartsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    variant_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    branch_catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedUpdateManyWithoutCart_itemsNestedInput;
};
export type cart_itemsUncheckedUpdateManyWithoutCartsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    variant_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    branch_catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cart_itemsCreateManyCatalog_item_variantsInput = {
    id?: string;
    cart_id: string;
    catalog_item_id: string;
    branch_catalog_item_id: string;
    qty: number;
    unit_price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type cart_itemsUpdateWithoutCatalog_item_variantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUpdateManyWithoutCart_itemsNestedInput;
    branch_catalog_items?: Prisma.branch_catalog_itemsUpdateOneRequiredWithoutCart_itemsNestedInput;
    carts?: Prisma.cartsUpdateOneRequiredWithoutCart_itemsNestedInput;
    catalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutCart_itemsNestedInput;
};
export type cart_itemsUncheckedUpdateWithoutCatalog_item_variantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cart_id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedUpdateManyWithoutCart_itemsNestedInput;
};
export type cart_itemsUncheckedUpdateManyWithoutCatalog_item_variantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cart_id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cart_itemsCreateManyCatalog_itemsInput = {
    id?: string;
    cart_id: string;
    variant_id?: string | null;
    branch_catalog_item_id: string;
    qty: number;
    unit_price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type cart_itemsUpdateWithoutCatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUpdateManyWithoutCart_itemsNestedInput;
    branch_catalog_items?: Prisma.branch_catalog_itemsUpdateOneRequiredWithoutCart_itemsNestedInput;
    carts?: Prisma.cartsUpdateOneRequiredWithoutCart_itemsNestedInput;
    catalog_item_variants?: Prisma.catalog_item_variantsUpdateOneWithoutCart_itemsNestedInput;
};
export type cart_itemsUncheckedUpdateWithoutCatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cart_id?: Prisma.StringFieldUpdateOperationsInput | string;
    variant_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    branch_catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedUpdateManyWithoutCart_itemsNestedInput;
};
export type cart_itemsUncheckedUpdateManyWithoutCatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cart_id?: Prisma.StringFieldUpdateOperationsInput | string;
    variant_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    branch_catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    qty?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Cart_itemsCountOutputType = {
    cart_item_modifiers: number;
};
export type Cart_itemsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cart_item_modifiers?: boolean | Cart_itemsCountOutputTypeCountCart_item_modifiersArgs;
};
export type Cart_itemsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Cart_itemsCountOutputTypeSelect<ExtArgs> | null;
};
export type Cart_itemsCountOutputTypeCountCart_item_modifiersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cart_item_modifiersWhereInput;
};
export type cart_itemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cart_id?: boolean;
    catalog_item_id?: boolean;
    variant_id?: boolean;
    branch_catalog_item_id?: boolean;
    qty?: boolean;
    unit_price_amount?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    cart_item_modifiers?: boolean | Prisma.cart_items$cart_item_modifiersArgs<ExtArgs>;
    branch_catalog_items?: boolean | Prisma.branch_catalog_itemsDefaultArgs<ExtArgs>;
    carts?: boolean | Prisma.cartsDefaultArgs<ExtArgs>;
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    catalog_item_variants?: boolean | Prisma.cart_items$catalog_item_variantsArgs<ExtArgs>;
    _count?: boolean | Prisma.Cart_itemsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cart_items"]>;
export type cart_itemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cart_id?: boolean;
    catalog_item_id?: boolean;
    variant_id?: boolean;
    branch_catalog_item_id?: boolean;
    qty?: boolean;
    unit_price_amount?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    branch_catalog_items?: boolean | Prisma.branch_catalog_itemsDefaultArgs<ExtArgs>;
    carts?: boolean | Prisma.cartsDefaultArgs<ExtArgs>;
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    catalog_item_variants?: boolean | Prisma.cart_items$catalog_item_variantsArgs<ExtArgs>;
}, ExtArgs["result"]["cart_items"]>;
export type cart_itemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cart_id?: boolean;
    catalog_item_id?: boolean;
    variant_id?: boolean;
    branch_catalog_item_id?: boolean;
    qty?: boolean;
    unit_price_amount?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    branch_catalog_items?: boolean | Prisma.branch_catalog_itemsDefaultArgs<ExtArgs>;
    carts?: boolean | Prisma.cartsDefaultArgs<ExtArgs>;
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    catalog_item_variants?: boolean | Prisma.cart_items$catalog_item_variantsArgs<ExtArgs>;
}, ExtArgs["result"]["cart_items"]>;
export type cart_itemsSelectScalar = {
    id?: boolean;
    cart_id?: boolean;
    catalog_item_id?: boolean;
    variant_id?: boolean;
    branch_catalog_item_id?: boolean;
    qty?: boolean;
    unit_price_amount?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type cart_itemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cart_id" | "catalog_item_id" | "variant_id" | "branch_catalog_item_id" | "qty" | "unit_price_amount" | "notes" | "created_at" | "updated_at", ExtArgs["result"]["cart_items"]>;
export type cart_itemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cart_item_modifiers?: boolean | Prisma.cart_items$cart_item_modifiersArgs<ExtArgs>;
    branch_catalog_items?: boolean | Prisma.branch_catalog_itemsDefaultArgs<ExtArgs>;
    carts?: boolean | Prisma.cartsDefaultArgs<ExtArgs>;
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    catalog_item_variants?: boolean | Prisma.cart_items$catalog_item_variantsArgs<ExtArgs>;
    _count?: boolean | Prisma.Cart_itemsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type cart_itemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    branch_catalog_items?: boolean | Prisma.branch_catalog_itemsDefaultArgs<ExtArgs>;
    carts?: boolean | Prisma.cartsDefaultArgs<ExtArgs>;
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    catalog_item_variants?: boolean | Prisma.cart_items$catalog_item_variantsArgs<ExtArgs>;
};
export type cart_itemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    branch_catalog_items?: boolean | Prisma.branch_catalog_itemsDefaultArgs<ExtArgs>;
    carts?: boolean | Prisma.cartsDefaultArgs<ExtArgs>;
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    catalog_item_variants?: boolean | Prisma.cart_items$catalog_item_variantsArgs<ExtArgs>;
};
export type $cart_itemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "cart_items";
    objects: {
        cart_item_modifiers: Prisma.$cart_item_modifiersPayload<ExtArgs>[];
        branch_catalog_items: Prisma.$branch_catalog_itemsPayload<ExtArgs>;
        carts: Prisma.$cartsPayload<ExtArgs>;
        catalog_items: Prisma.$catalog_itemsPayload<ExtArgs>;
        catalog_item_variants: Prisma.$catalog_item_variantsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        cart_id: string;
        catalog_item_id: string;
        variant_id: string | null;
        branch_catalog_item_id: string;
        qty: number;
        unit_price_amount: runtime.Decimal;
        notes: string | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["cart_items"]>;
    composites: {};
};
export type cart_itemsGetPayload<S extends boolean | null | undefined | cart_itemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload, S>;
export type cart_itemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<cart_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Cart_itemsCountAggregateInputType | true;
};
export interface cart_itemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['cart_items'];
        meta: {
            name: 'cart_items';
        };
    };
    findUnique<T extends cart_itemsFindUniqueArgs>(args: Prisma.SelectSubset<T, cart_itemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__cart_itemsClient<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends cart_itemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, cart_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__cart_itemsClient<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends cart_itemsFindFirstArgs>(args?: Prisma.SelectSubset<T, cart_itemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__cart_itemsClient<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends cart_itemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, cart_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__cart_itemsClient<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends cart_itemsFindManyArgs>(args?: Prisma.SelectSubset<T, cart_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends cart_itemsCreateArgs>(args: Prisma.SelectSubset<T, cart_itemsCreateArgs<ExtArgs>>): Prisma.Prisma__cart_itemsClient<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends cart_itemsCreateManyArgs>(args?: Prisma.SelectSubset<T, cart_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends cart_itemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, cart_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends cart_itemsDeleteArgs>(args: Prisma.SelectSubset<T, cart_itemsDeleteArgs<ExtArgs>>): Prisma.Prisma__cart_itemsClient<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends cart_itemsUpdateArgs>(args: Prisma.SelectSubset<T, cart_itemsUpdateArgs<ExtArgs>>): Prisma.Prisma__cart_itemsClient<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends cart_itemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, cart_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends cart_itemsUpdateManyArgs>(args: Prisma.SelectSubset<T, cart_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends cart_itemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, cart_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends cart_itemsUpsertArgs>(args: Prisma.SelectSubset<T, cart_itemsUpsertArgs<ExtArgs>>): Prisma.Prisma__cart_itemsClient<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends cart_itemsCountArgs>(args?: Prisma.Subset<T, cart_itemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Cart_itemsCountAggregateOutputType> : number>;
    aggregate<T extends Cart_itemsAggregateArgs>(args: Prisma.Subset<T, Cart_itemsAggregateArgs>): Prisma.PrismaPromise<GetCart_itemsAggregateType<T>>;
    groupBy<T extends cart_itemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: cart_itemsGroupByArgs['orderBy'];
    } : {
        orderBy?: cart_itemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, cart_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCart_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: cart_itemsFieldRefs;
}
export interface Prisma__cart_itemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cart_item_modifiers<T extends Prisma.cart_items$cart_item_modifiersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cart_items$cart_item_modifiersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cart_item_modifiersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    branch_catalog_items<T extends Prisma.branch_catalog_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.branch_catalog_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__branch_catalog_itemsClient<runtime.Types.Result.GetResult<Prisma.$branch_catalog_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    carts<T extends Prisma.cartsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cartsDefaultArgs<ExtArgs>>): Prisma.Prisma__cartsClient<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    catalog_items<T extends Prisma.catalog_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.catalog_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__catalog_itemsClient<runtime.Types.Result.GetResult<Prisma.$catalog_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    catalog_item_variants<T extends Prisma.cart_items$catalog_item_variantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cart_items$catalog_item_variantsArgs<ExtArgs>>): Prisma.Prisma__catalog_item_variantsClient<runtime.Types.Result.GetResult<Prisma.$catalog_item_variantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface cart_itemsFieldRefs {
    readonly id: Prisma.FieldRef<"cart_items", 'String'>;
    readonly cart_id: Prisma.FieldRef<"cart_items", 'String'>;
    readonly catalog_item_id: Prisma.FieldRef<"cart_items", 'String'>;
    readonly variant_id: Prisma.FieldRef<"cart_items", 'String'>;
    readonly branch_catalog_item_id: Prisma.FieldRef<"cart_items", 'String'>;
    readonly qty: Prisma.FieldRef<"cart_items", 'Int'>;
    readonly unit_price_amount: Prisma.FieldRef<"cart_items", 'Decimal'>;
    readonly notes: Prisma.FieldRef<"cart_items", 'String'>;
    readonly created_at: Prisma.FieldRef<"cart_items", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"cart_items", 'DateTime'>;
}
export type cart_itemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    where: Prisma.cart_itemsWhereUniqueInput;
};
export type cart_itemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    where: Prisma.cart_itemsWhereUniqueInput;
};
export type cart_itemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    where?: Prisma.cart_itemsWhereInput;
    orderBy?: Prisma.cart_itemsOrderByWithRelationInput | Prisma.cart_itemsOrderByWithRelationInput[];
    cursor?: Prisma.cart_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cart_itemsScalarFieldEnum | Prisma.Cart_itemsScalarFieldEnum[];
};
export type cart_itemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    where?: Prisma.cart_itemsWhereInput;
    orderBy?: Prisma.cart_itemsOrderByWithRelationInput | Prisma.cart_itemsOrderByWithRelationInput[];
    cursor?: Prisma.cart_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cart_itemsScalarFieldEnum | Prisma.Cart_itemsScalarFieldEnum[];
};
export type cart_itemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    where?: Prisma.cart_itemsWhereInput;
    orderBy?: Prisma.cart_itemsOrderByWithRelationInput | Prisma.cart_itemsOrderByWithRelationInput[];
    cursor?: Prisma.cart_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cart_itemsScalarFieldEnum | Prisma.Cart_itemsScalarFieldEnum[];
};
export type cart_itemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cart_itemsCreateInput, Prisma.cart_itemsUncheckedCreateInput>;
};
export type cart_itemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.cart_itemsCreateManyInput | Prisma.cart_itemsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type cart_itemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    data: Prisma.cart_itemsCreateManyInput | Prisma.cart_itemsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.cart_itemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type cart_itemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cart_itemsUpdateInput, Prisma.cart_itemsUncheckedUpdateInput>;
    where: Prisma.cart_itemsWhereUniqueInput;
};
export type cart_itemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.cart_itemsUpdateManyMutationInput, Prisma.cart_itemsUncheckedUpdateManyInput>;
    where?: Prisma.cart_itemsWhereInput;
    limit?: number;
};
export type cart_itemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cart_itemsUpdateManyMutationInput, Prisma.cart_itemsUncheckedUpdateManyInput>;
    where?: Prisma.cart_itemsWhereInput;
    limit?: number;
    include?: Prisma.cart_itemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type cart_itemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    where: Prisma.cart_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cart_itemsCreateInput, Prisma.cart_itemsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.cart_itemsUpdateInput, Prisma.cart_itemsUncheckedUpdateInput>;
};
export type cart_itemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    where: Prisma.cart_itemsWhereUniqueInput;
};
export type cart_itemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cart_itemsWhereInput;
    limit?: number;
};
export type cart_items$cart_item_modifiersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type cart_items$catalog_item_variantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_variantsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_variantsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_variantsInclude<ExtArgs> | null;
    where?: Prisma.catalog_item_variantsWhereInput;
};
export type cart_itemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
};
export {};
