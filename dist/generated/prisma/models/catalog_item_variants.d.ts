import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type catalog_item_variantsModel = runtime.Types.Result.DefaultSelection<Prisma.$catalog_item_variantsPayload>;
export type AggregateCatalog_item_variants = {
    _count: Catalog_item_variantsCountAggregateOutputType | null;
    _avg: Catalog_item_variantsAvgAggregateOutputType | null;
    _sum: Catalog_item_variantsSumAggregateOutputType | null;
    _min: Catalog_item_variantsMinAggregateOutputType | null;
    _max: Catalog_item_variantsMaxAggregateOutputType | null;
};
export type Catalog_item_variantsAvgAggregateOutputType = {
    price_modifier_amount: runtime.Decimal | null;
};
export type Catalog_item_variantsSumAggregateOutputType = {
    price_modifier_amount: runtime.Decimal | null;
};
export type Catalog_item_variantsMinAggregateOutputType = {
    id: string | null;
    catalog_item_id: string | null;
    name: string | null;
    sku: string | null;
    barcode: string | null;
    price_modifier_amount: runtime.Decimal | null;
    is_default: boolean | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Catalog_item_variantsMaxAggregateOutputType = {
    id: string | null;
    catalog_item_id: string | null;
    name: string | null;
    sku: string | null;
    barcode: string | null;
    price_modifier_amount: runtime.Decimal | null;
    is_default: boolean | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Catalog_item_variantsCountAggregateOutputType = {
    id: number;
    catalog_item_id: number;
    name: number;
    sku: number;
    barcode: number;
    price_modifier_amount: number;
    is_default: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Catalog_item_variantsAvgAggregateInputType = {
    price_modifier_amount?: true;
};
export type Catalog_item_variantsSumAggregateInputType = {
    price_modifier_amount?: true;
};
export type Catalog_item_variantsMinAggregateInputType = {
    id?: true;
    catalog_item_id?: true;
    name?: true;
    sku?: true;
    barcode?: true;
    price_modifier_amount?: true;
    is_default?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type Catalog_item_variantsMaxAggregateInputType = {
    id?: true;
    catalog_item_id?: true;
    name?: true;
    sku?: true;
    barcode?: true;
    price_modifier_amount?: true;
    is_default?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type Catalog_item_variantsCountAggregateInputType = {
    id?: true;
    catalog_item_id?: true;
    name?: true;
    sku?: true;
    barcode?: true;
    price_modifier_amount?: true;
    is_default?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Catalog_item_variantsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.catalog_item_variantsWhereInput;
    orderBy?: Prisma.catalog_item_variantsOrderByWithRelationInput | Prisma.catalog_item_variantsOrderByWithRelationInput[];
    cursor?: Prisma.catalog_item_variantsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Catalog_item_variantsCountAggregateInputType;
    _avg?: Catalog_item_variantsAvgAggregateInputType;
    _sum?: Catalog_item_variantsSumAggregateInputType;
    _min?: Catalog_item_variantsMinAggregateInputType;
    _max?: Catalog_item_variantsMaxAggregateInputType;
};
export type GetCatalog_item_variantsAggregateType<T extends Catalog_item_variantsAggregateArgs> = {
    [P in keyof T & keyof AggregateCatalog_item_variants]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCatalog_item_variants[P]> : Prisma.GetScalarType<T[P], AggregateCatalog_item_variants[P]>;
};
export type catalog_item_variantsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.catalog_item_variantsWhereInput;
    orderBy?: Prisma.catalog_item_variantsOrderByWithAggregationInput | Prisma.catalog_item_variantsOrderByWithAggregationInput[];
    by: Prisma.Catalog_item_variantsScalarFieldEnum[] | Prisma.Catalog_item_variantsScalarFieldEnum;
    having?: Prisma.catalog_item_variantsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Catalog_item_variantsCountAggregateInputType | true;
    _avg?: Catalog_item_variantsAvgAggregateInputType;
    _sum?: Catalog_item_variantsSumAggregateInputType;
    _min?: Catalog_item_variantsMinAggregateInputType;
    _max?: Catalog_item_variantsMaxAggregateInputType;
};
export type Catalog_item_variantsGroupByOutputType = {
    id: string;
    catalog_item_id: string;
    name: string;
    sku: string | null;
    barcode: string | null;
    price_modifier_amount: runtime.Decimal;
    is_default: boolean;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: Catalog_item_variantsCountAggregateOutputType | null;
    _avg: Catalog_item_variantsAvgAggregateOutputType | null;
    _sum: Catalog_item_variantsSumAggregateOutputType | null;
    _min: Catalog_item_variantsMinAggregateOutputType | null;
    _max: Catalog_item_variantsMaxAggregateOutputType | null;
};
type GetCatalog_item_variantsGroupByPayload<T extends catalog_item_variantsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Catalog_item_variantsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Catalog_item_variantsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Catalog_item_variantsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Catalog_item_variantsGroupByOutputType[P]>;
}>>;
export type catalog_item_variantsWhereInput = {
    AND?: Prisma.catalog_item_variantsWhereInput | Prisma.catalog_item_variantsWhereInput[];
    OR?: Prisma.catalog_item_variantsWhereInput[];
    NOT?: Prisma.catalog_item_variantsWhereInput | Prisma.catalog_item_variantsWhereInput[];
    id?: Prisma.UuidFilter<"catalog_item_variants"> | string;
    catalog_item_id?: Prisma.UuidFilter<"catalog_item_variants"> | string;
    name?: Prisma.StringFilter<"catalog_item_variants"> | string;
    sku?: Prisma.StringNullableFilter<"catalog_item_variants"> | string | null;
    barcode?: Prisma.StringNullableFilter<"catalog_item_variants"> | string | null;
    price_modifier_amount?: Prisma.DecimalFilter<"catalog_item_variants"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFilter<"catalog_item_variants"> | boolean;
    is_active?: Prisma.BoolFilter<"catalog_item_variants"> | boolean;
    created_at?: Prisma.DateTimeFilter<"catalog_item_variants"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"catalog_item_variants"> | Date | string;
    branch_catalog_items?: Prisma.Branch_catalog_itemsListRelationFilter;
    cart_items?: Prisma.Cart_itemsListRelationFilter;
    catalog_items?: Prisma.XOR<Prisma.Catalog_itemsScalarRelationFilter, Prisma.catalog_itemsWhereInput>;
    order_items?: Prisma.Order_itemsListRelationFilter;
};
export type catalog_item_variantsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    sku?: Prisma.SortOrderInput | Prisma.SortOrder;
    barcode?: Prisma.SortOrderInput | Prisma.SortOrder;
    price_modifier_amount?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    branch_catalog_items?: Prisma.branch_catalog_itemsOrderByRelationAggregateInput;
    cart_items?: Prisma.cart_itemsOrderByRelationAggregateInput;
    catalog_items?: Prisma.catalog_itemsOrderByWithRelationInput;
    order_items?: Prisma.order_itemsOrderByRelationAggregateInput;
};
export type catalog_item_variantsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.catalog_item_variantsWhereInput | Prisma.catalog_item_variantsWhereInput[];
    OR?: Prisma.catalog_item_variantsWhereInput[];
    NOT?: Prisma.catalog_item_variantsWhereInput | Prisma.catalog_item_variantsWhereInput[];
    catalog_item_id?: Prisma.UuidFilter<"catalog_item_variants"> | string;
    name?: Prisma.StringFilter<"catalog_item_variants"> | string;
    sku?: Prisma.StringNullableFilter<"catalog_item_variants"> | string | null;
    barcode?: Prisma.StringNullableFilter<"catalog_item_variants"> | string | null;
    price_modifier_amount?: Prisma.DecimalFilter<"catalog_item_variants"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFilter<"catalog_item_variants"> | boolean;
    is_active?: Prisma.BoolFilter<"catalog_item_variants"> | boolean;
    created_at?: Prisma.DateTimeFilter<"catalog_item_variants"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"catalog_item_variants"> | Date | string;
    branch_catalog_items?: Prisma.Branch_catalog_itemsListRelationFilter;
    cart_items?: Prisma.Cart_itemsListRelationFilter;
    catalog_items?: Prisma.XOR<Prisma.Catalog_itemsScalarRelationFilter, Prisma.catalog_itemsWhereInput>;
    order_items?: Prisma.Order_itemsListRelationFilter;
}, "id">;
export type catalog_item_variantsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    sku?: Prisma.SortOrderInput | Prisma.SortOrder;
    barcode?: Prisma.SortOrderInput | Prisma.SortOrder;
    price_modifier_amount?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.catalog_item_variantsCountOrderByAggregateInput;
    _avg?: Prisma.catalog_item_variantsAvgOrderByAggregateInput;
    _max?: Prisma.catalog_item_variantsMaxOrderByAggregateInput;
    _min?: Prisma.catalog_item_variantsMinOrderByAggregateInput;
    _sum?: Prisma.catalog_item_variantsSumOrderByAggregateInput;
};
export type catalog_item_variantsScalarWhereWithAggregatesInput = {
    AND?: Prisma.catalog_item_variantsScalarWhereWithAggregatesInput | Prisma.catalog_item_variantsScalarWhereWithAggregatesInput[];
    OR?: Prisma.catalog_item_variantsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.catalog_item_variantsScalarWhereWithAggregatesInput | Prisma.catalog_item_variantsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"catalog_item_variants"> | string;
    catalog_item_id?: Prisma.UuidWithAggregatesFilter<"catalog_item_variants"> | string;
    name?: Prisma.StringWithAggregatesFilter<"catalog_item_variants"> | string;
    sku?: Prisma.StringNullableWithAggregatesFilter<"catalog_item_variants"> | string | null;
    barcode?: Prisma.StringNullableWithAggregatesFilter<"catalog_item_variants"> | string | null;
    price_modifier_amount?: Prisma.DecimalWithAggregatesFilter<"catalog_item_variants"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolWithAggregatesFilter<"catalog_item_variants"> | boolean;
    is_active?: Prisma.BoolWithAggregatesFilter<"catalog_item_variants"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"catalog_item_variants"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"catalog_item_variants"> | Date | string;
};
export type catalog_item_variantsCreateInput = {
    id?: string;
    name: string;
    sku?: string | null;
    barcode?: string | null;
    price_modifier_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsCreateNestedManyWithoutCatalog_item_variantsInput;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutCatalog_item_variantsInput;
    catalog_items: Prisma.catalog_itemsCreateNestedOneWithoutCatalog_item_variantsInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutCatalog_item_variantsInput;
};
export type catalog_item_variantsUncheckedCreateInput = {
    id?: string;
    catalog_item_id: string;
    name: string;
    sku?: string | null;
    barcode?: string | null;
    price_modifier_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedCreateNestedManyWithoutCatalog_item_variantsInput;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutCatalog_item_variantsInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutCatalog_item_variantsInput;
};
export type catalog_item_variantsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_modifier_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUpdateManyWithoutCatalog_item_variantsNestedInput;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutCatalog_item_variantsNestedInput;
    catalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutCatalog_item_variantsNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutCatalog_item_variantsNestedInput;
};
export type catalog_item_variantsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_modifier_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedUpdateManyWithoutCatalog_item_variantsNestedInput;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutCatalog_item_variantsNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutCatalog_item_variantsNestedInput;
};
export type catalog_item_variantsCreateManyInput = {
    id?: string;
    catalog_item_id: string;
    name: string;
    sku?: string | null;
    barcode?: string | null;
    price_modifier_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type catalog_item_variantsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_modifier_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type catalog_item_variantsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_modifier_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Catalog_item_variantsNullableScalarRelationFilter = {
    is?: Prisma.catalog_item_variantsWhereInput | null;
    isNot?: Prisma.catalog_item_variantsWhereInput | null;
};
export type catalog_item_variantsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    barcode?: Prisma.SortOrder;
    price_modifier_amount?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type catalog_item_variantsAvgOrderByAggregateInput = {
    price_modifier_amount?: Prisma.SortOrder;
};
export type catalog_item_variantsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    barcode?: Prisma.SortOrder;
    price_modifier_amount?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type catalog_item_variantsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    barcode?: Prisma.SortOrder;
    price_modifier_amount?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type catalog_item_variantsSumOrderByAggregateInput = {
    price_modifier_amount?: Prisma.SortOrder;
};
export type Catalog_item_variantsListRelationFilter = {
    every?: Prisma.catalog_item_variantsWhereInput;
    some?: Prisma.catalog_item_variantsWhereInput;
    none?: Prisma.catalog_item_variantsWhereInput;
};
export type catalog_item_variantsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type catalog_item_variantsCreateNestedOneWithoutBranch_catalog_itemsInput = {
    create?: Prisma.XOR<Prisma.catalog_item_variantsCreateWithoutBranch_catalog_itemsInput, Prisma.catalog_item_variantsUncheckedCreateWithoutBranch_catalog_itemsInput>;
    connectOrCreate?: Prisma.catalog_item_variantsCreateOrConnectWithoutBranch_catalog_itemsInput;
    connect?: Prisma.catalog_item_variantsWhereUniqueInput;
};
export type catalog_item_variantsUpdateOneWithoutBranch_catalog_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.catalog_item_variantsCreateWithoutBranch_catalog_itemsInput, Prisma.catalog_item_variantsUncheckedCreateWithoutBranch_catalog_itemsInput>;
    connectOrCreate?: Prisma.catalog_item_variantsCreateOrConnectWithoutBranch_catalog_itemsInput;
    upsert?: Prisma.catalog_item_variantsUpsertWithoutBranch_catalog_itemsInput;
    disconnect?: Prisma.catalog_item_variantsWhereInput | boolean;
    delete?: Prisma.catalog_item_variantsWhereInput | boolean;
    connect?: Prisma.catalog_item_variantsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.catalog_item_variantsUpdateToOneWithWhereWithoutBranch_catalog_itemsInput, Prisma.catalog_item_variantsUpdateWithoutBranch_catalog_itemsInput>, Prisma.catalog_item_variantsUncheckedUpdateWithoutBranch_catalog_itemsInput>;
};
export type catalog_item_variantsCreateNestedOneWithoutCart_itemsInput = {
    create?: Prisma.XOR<Prisma.catalog_item_variantsCreateWithoutCart_itemsInput, Prisma.catalog_item_variantsUncheckedCreateWithoutCart_itemsInput>;
    connectOrCreate?: Prisma.catalog_item_variantsCreateOrConnectWithoutCart_itemsInput;
    connect?: Prisma.catalog_item_variantsWhereUniqueInput;
};
export type catalog_item_variantsUpdateOneWithoutCart_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.catalog_item_variantsCreateWithoutCart_itemsInput, Prisma.catalog_item_variantsUncheckedCreateWithoutCart_itemsInput>;
    connectOrCreate?: Prisma.catalog_item_variantsCreateOrConnectWithoutCart_itemsInput;
    upsert?: Prisma.catalog_item_variantsUpsertWithoutCart_itemsInput;
    disconnect?: Prisma.catalog_item_variantsWhereInput | boolean;
    delete?: Prisma.catalog_item_variantsWhereInput | boolean;
    connect?: Prisma.catalog_item_variantsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.catalog_item_variantsUpdateToOneWithWhereWithoutCart_itemsInput, Prisma.catalog_item_variantsUpdateWithoutCart_itemsInput>, Prisma.catalog_item_variantsUncheckedUpdateWithoutCart_itemsInput>;
};
export type catalog_item_variantsCreateNestedManyWithoutCatalog_itemsInput = {
    create?: Prisma.XOR<Prisma.catalog_item_variantsCreateWithoutCatalog_itemsInput, Prisma.catalog_item_variantsUncheckedCreateWithoutCatalog_itemsInput> | Prisma.catalog_item_variantsCreateWithoutCatalog_itemsInput[] | Prisma.catalog_item_variantsUncheckedCreateWithoutCatalog_itemsInput[];
    connectOrCreate?: Prisma.catalog_item_variantsCreateOrConnectWithoutCatalog_itemsInput | Prisma.catalog_item_variantsCreateOrConnectWithoutCatalog_itemsInput[];
    createMany?: Prisma.catalog_item_variantsCreateManyCatalog_itemsInputEnvelope;
    connect?: Prisma.catalog_item_variantsWhereUniqueInput | Prisma.catalog_item_variantsWhereUniqueInput[];
};
export type catalog_item_variantsUncheckedCreateNestedManyWithoutCatalog_itemsInput = {
    create?: Prisma.XOR<Prisma.catalog_item_variantsCreateWithoutCatalog_itemsInput, Prisma.catalog_item_variantsUncheckedCreateWithoutCatalog_itemsInput> | Prisma.catalog_item_variantsCreateWithoutCatalog_itemsInput[] | Prisma.catalog_item_variantsUncheckedCreateWithoutCatalog_itemsInput[];
    connectOrCreate?: Prisma.catalog_item_variantsCreateOrConnectWithoutCatalog_itemsInput | Prisma.catalog_item_variantsCreateOrConnectWithoutCatalog_itemsInput[];
    createMany?: Prisma.catalog_item_variantsCreateManyCatalog_itemsInputEnvelope;
    connect?: Prisma.catalog_item_variantsWhereUniqueInput | Prisma.catalog_item_variantsWhereUniqueInput[];
};
export type catalog_item_variantsUpdateManyWithoutCatalog_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.catalog_item_variantsCreateWithoutCatalog_itemsInput, Prisma.catalog_item_variantsUncheckedCreateWithoutCatalog_itemsInput> | Prisma.catalog_item_variantsCreateWithoutCatalog_itemsInput[] | Prisma.catalog_item_variantsUncheckedCreateWithoutCatalog_itemsInput[];
    connectOrCreate?: Prisma.catalog_item_variantsCreateOrConnectWithoutCatalog_itemsInput | Prisma.catalog_item_variantsCreateOrConnectWithoutCatalog_itemsInput[];
    upsert?: Prisma.catalog_item_variantsUpsertWithWhereUniqueWithoutCatalog_itemsInput | Prisma.catalog_item_variantsUpsertWithWhereUniqueWithoutCatalog_itemsInput[];
    createMany?: Prisma.catalog_item_variantsCreateManyCatalog_itemsInputEnvelope;
    set?: Prisma.catalog_item_variantsWhereUniqueInput | Prisma.catalog_item_variantsWhereUniqueInput[];
    disconnect?: Prisma.catalog_item_variantsWhereUniqueInput | Prisma.catalog_item_variantsWhereUniqueInput[];
    delete?: Prisma.catalog_item_variantsWhereUniqueInput | Prisma.catalog_item_variantsWhereUniqueInput[];
    connect?: Prisma.catalog_item_variantsWhereUniqueInput | Prisma.catalog_item_variantsWhereUniqueInput[];
    update?: Prisma.catalog_item_variantsUpdateWithWhereUniqueWithoutCatalog_itemsInput | Prisma.catalog_item_variantsUpdateWithWhereUniqueWithoutCatalog_itemsInput[];
    updateMany?: Prisma.catalog_item_variantsUpdateManyWithWhereWithoutCatalog_itemsInput | Prisma.catalog_item_variantsUpdateManyWithWhereWithoutCatalog_itemsInput[];
    deleteMany?: Prisma.catalog_item_variantsScalarWhereInput | Prisma.catalog_item_variantsScalarWhereInput[];
};
export type catalog_item_variantsUncheckedUpdateManyWithoutCatalog_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.catalog_item_variantsCreateWithoutCatalog_itemsInput, Prisma.catalog_item_variantsUncheckedCreateWithoutCatalog_itemsInput> | Prisma.catalog_item_variantsCreateWithoutCatalog_itemsInput[] | Prisma.catalog_item_variantsUncheckedCreateWithoutCatalog_itemsInput[];
    connectOrCreate?: Prisma.catalog_item_variantsCreateOrConnectWithoutCatalog_itemsInput | Prisma.catalog_item_variantsCreateOrConnectWithoutCatalog_itemsInput[];
    upsert?: Prisma.catalog_item_variantsUpsertWithWhereUniqueWithoutCatalog_itemsInput | Prisma.catalog_item_variantsUpsertWithWhereUniqueWithoutCatalog_itemsInput[];
    createMany?: Prisma.catalog_item_variantsCreateManyCatalog_itemsInputEnvelope;
    set?: Prisma.catalog_item_variantsWhereUniqueInput | Prisma.catalog_item_variantsWhereUniqueInput[];
    disconnect?: Prisma.catalog_item_variantsWhereUniqueInput | Prisma.catalog_item_variantsWhereUniqueInput[];
    delete?: Prisma.catalog_item_variantsWhereUniqueInput | Prisma.catalog_item_variantsWhereUniqueInput[];
    connect?: Prisma.catalog_item_variantsWhereUniqueInput | Prisma.catalog_item_variantsWhereUniqueInput[];
    update?: Prisma.catalog_item_variantsUpdateWithWhereUniqueWithoutCatalog_itemsInput | Prisma.catalog_item_variantsUpdateWithWhereUniqueWithoutCatalog_itemsInput[];
    updateMany?: Prisma.catalog_item_variantsUpdateManyWithWhereWithoutCatalog_itemsInput | Prisma.catalog_item_variantsUpdateManyWithWhereWithoutCatalog_itemsInput[];
    deleteMany?: Prisma.catalog_item_variantsScalarWhereInput | Prisma.catalog_item_variantsScalarWhereInput[];
};
export type catalog_item_variantsCreateNestedOneWithoutOrder_itemsInput = {
    create?: Prisma.XOR<Prisma.catalog_item_variantsCreateWithoutOrder_itemsInput, Prisma.catalog_item_variantsUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.catalog_item_variantsCreateOrConnectWithoutOrder_itemsInput;
    connect?: Prisma.catalog_item_variantsWhereUniqueInput;
};
export type catalog_item_variantsUpdateOneWithoutOrder_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.catalog_item_variantsCreateWithoutOrder_itemsInput, Prisma.catalog_item_variantsUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.catalog_item_variantsCreateOrConnectWithoutOrder_itemsInput;
    upsert?: Prisma.catalog_item_variantsUpsertWithoutOrder_itemsInput;
    disconnect?: Prisma.catalog_item_variantsWhereInput | boolean;
    delete?: Prisma.catalog_item_variantsWhereInput | boolean;
    connect?: Prisma.catalog_item_variantsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.catalog_item_variantsUpdateToOneWithWhereWithoutOrder_itemsInput, Prisma.catalog_item_variantsUpdateWithoutOrder_itemsInput>, Prisma.catalog_item_variantsUncheckedUpdateWithoutOrder_itemsInput>;
};
export type catalog_item_variantsCreateWithoutBranch_catalog_itemsInput = {
    id?: string;
    name: string;
    sku?: string | null;
    barcode?: string | null;
    price_modifier_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutCatalog_item_variantsInput;
    catalog_items: Prisma.catalog_itemsCreateNestedOneWithoutCatalog_item_variantsInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutCatalog_item_variantsInput;
};
export type catalog_item_variantsUncheckedCreateWithoutBranch_catalog_itemsInput = {
    id?: string;
    catalog_item_id: string;
    name: string;
    sku?: string | null;
    barcode?: string | null;
    price_modifier_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutCatalog_item_variantsInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutCatalog_item_variantsInput;
};
export type catalog_item_variantsCreateOrConnectWithoutBranch_catalog_itemsInput = {
    where: Prisma.catalog_item_variantsWhereUniqueInput;
    create: Prisma.XOR<Prisma.catalog_item_variantsCreateWithoutBranch_catalog_itemsInput, Prisma.catalog_item_variantsUncheckedCreateWithoutBranch_catalog_itemsInput>;
};
export type catalog_item_variantsUpsertWithoutBranch_catalog_itemsInput = {
    update: Prisma.XOR<Prisma.catalog_item_variantsUpdateWithoutBranch_catalog_itemsInput, Prisma.catalog_item_variantsUncheckedUpdateWithoutBranch_catalog_itemsInput>;
    create: Prisma.XOR<Prisma.catalog_item_variantsCreateWithoutBranch_catalog_itemsInput, Prisma.catalog_item_variantsUncheckedCreateWithoutBranch_catalog_itemsInput>;
    where?: Prisma.catalog_item_variantsWhereInput;
};
export type catalog_item_variantsUpdateToOneWithWhereWithoutBranch_catalog_itemsInput = {
    where?: Prisma.catalog_item_variantsWhereInput;
    data: Prisma.XOR<Prisma.catalog_item_variantsUpdateWithoutBranch_catalog_itemsInput, Prisma.catalog_item_variantsUncheckedUpdateWithoutBranch_catalog_itemsInput>;
};
export type catalog_item_variantsUpdateWithoutBranch_catalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_modifier_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutCatalog_item_variantsNestedInput;
    catalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutCatalog_item_variantsNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutCatalog_item_variantsNestedInput;
};
export type catalog_item_variantsUncheckedUpdateWithoutBranch_catalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_modifier_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutCatalog_item_variantsNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutCatalog_item_variantsNestedInput;
};
export type catalog_item_variantsCreateWithoutCart_itemsInput = {
    id?: string;
    name: string;
    sku?: string | null;
    barcode?: string | null;
    price_modifier_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsCreateNestedManyWithoutCatalog_item_variantsInput;
    catalog_items: Prisma.catalog_itemsCreateNestedOneWithoutCatalog_item_variantsInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutCatalog_item_variantsInput;
};
export type catalog_item_variantsUncheckedCreateWithoutCart_itemsInput = {
    id?: string;
    catalog_item_id: string;
    name: string;
    sku?: string | null;
    barcode?: string | null;
    price_modifier_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedCreateNestedManyWithoutCatalog_item_variantsInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutCatalog_item_variantsInput;
};
export type catalog_item_variantsCreateOrConnectWithoutCart_itemsInput = {
    where: Prisma.catalog_item_variantsWhereUniqueInput;
    create: Prisma.XOR<Prisma.catalog_item_variantsCreateWithoutCart_itemsInput, Prisma.catalog_item_variantsUncheckedCreateWithoutCart_itemsInput>;
};
export type catalog_item_variantsUpsertWithoutCart_itemsInput = {
    update: Prisma.XOR<Prisma.catalog_item_variantsUpdateWithoutCart_itemsInput, Prisma.catalog_item_variantsUncheckedUpdateWithoutCart_itemsInput>;
    create: Prisma.XOR<Prisma.catalog_item_variantsCreateWithoutCart_itemsInput, Prisma.catalog_item_variantsUncheckedCreateWithoutCart_itemsInput>;
    where?: Prisma.catalog_item_variantsWhereInput;
};
export type catalog_item_variantsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: Prisma.catalog_item_variantsWhereInput;
    data: Prisma.XOR<Prisma.catalog_item_variantsUpdateWithoutCart_itemsInput, Prisma.catalog_item_variantsUncheckedUpdateWithoutCart_itemsInput>;
};
export type catalog_item_variantsUpdateWithoutCart_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_modifier_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUpdateManyWithoutCatalog_item_variantsNestedInput;
    catalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutCatalog_item_variantsNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutCatalog_item_variantsNestedInput;
};
export type catalog_item_variantsUncheckedUpdateWithoutCart_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_modifier_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedUpdateManyWithoutCatalog_item_variantsNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutCatalog_item_variantsNestedInput;
};
export type catalog_item_variantsCreateWithoutCatalog_itemsInput = {
    id?: string;
    name: string;
    sku?: string | null;
    barcode?: string | null;
    price_modifier_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsCreateNestedManyWithoutCatalog_item_variantsInput;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutCatalog_item_variantsInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutCatalog_item_variantsInput;
};
export type catalog_item_variantsUncheckedCreateWithoutCatalog_itemsInput = {
    id?: string;
    name: string;
    sku?: string | null;
    barcode?: string | null;
    price_modifier_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedCreateNestedManyWithoutCatalog_item_variantsInput;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutCatalog_item_variantsInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutCatalog_item_variantsInput;
};
export type catalog_item_variantsCreateOrConnectWithoutCatalog_itemsInput = {
    where: Prisma.catalog_item_variantsWhereUniqueInput;
    create: Prisma.XOR<Prisma.catalog_item_variantsCreateWithoutCatalog_itemsInput, Prisma.catalog_item_variantsUncheckedCreateWithoutCatalog_itemsInput>;
};
export type catalog_item_variantsCreateManyCatalog_itemsInputEnvelope = {
    data: Prisma.catalog_item_variantsCreateManyCatalog_itemsInput | Prisma.catalog_item_variantsCreateManyCatalog_itemsInput[];
    skipDuplicates?: boolean;
};
export type catalog_item_variantsUpsertWithWhereUniqueWithoutCatalog_itemsInput = {
    where: Prisma.catalog_item_variantsWhereUniqueInput;
    update: Prisma.XOR<Prisma.catalog_item_variantsUpdateWithoutCatalog_itemsInput, Prisma.catalog_item_variantsUncheckedUpdateWithoutCatalog_itemsInput>;
    create: Prisma.XOR<Prisma.catalog_item_variantsCreateWithoutCatalog_itemsInput, Prisma.catalog_item_variantsUncheckedCreateWithoutCatalog_itemsInput>;
};
export type catalog_item_variantsUpdateWithWhereUniqueWithoutCatalog_itemsInput = {
    where: Prisma.catalog_item_variantsWhereUniqueInput;
    data: Prisma.XOR<Prisma.catalog_item_variantsUpdateWithoutCatalog_itemsInput, Prisma.catalog_item_variantsUncheckedUpdateWithoutCatalog_itemsInput>;
};
export type catalog_item_variantsUpdateManyWithWhereWithoutCatalog_itemsInput = {
    where: Prisma.catalog_item_variantsScalarWhereInput;
    data: Prisma.XOR<Prisma.catalog_item_variantsUpdateManyMutationInput, Prisma.catalog_item_variantsUncheckedUpdateManyWithoutCatalog_itemsInput>;
};
export type catalog_item_variantsScalarWhereInput = {
    AND?: Prisma.catalog_item_variantsScalarWhereInput | Prisma.catalog_item_variantsScalarWhereInput[];
    OR?: Prisma.catalog_item_variantsScalarWhereInput[];
    NOT?: Prisma.catalog_item_variantsScalarWhereInput | Prisma.catalog_item_variantsScalarWhereInput[];
    id?: Prisma.UuidFilter<"catalog_item_variants"> | string;
    catalog_item_id?: Prisma.UuidFilter<"catalog_item_variants"> | string;
    name?: Prisma.StringFilter<"catalog_item_variants"> | string;
    sku?: Prisma.StringNullableFilter<"catalog_item_variants"> | string | null;
    barcode?: Prisma.StringNullableFilter<"catalog_item_variants"> | string | null;
    price_modifier_amount?: Prisma.DecimalFilter<"catalog_item_variants"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFilter<"catalog_item_variants"> | boolean;
    is_active?: Prisma.BoolFilter<"catalog_item_variants"> | boolean;
    created_at?: Prisma.DateTimeFilter<"catalog_item_variants"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"catalog_item_variants"> | Date | string;
};
export type catalog_item_variantsCreateWithoutOrder_itemsInput = {
    id?: string;
    name: string;
    sku?: string | null;
    barcode?: string | null;
    price_modifier_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsCreateNestedManyWithoutCatalog_item_variantsInput;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutCatalog_item_variantsInput;
    catalog_items: Prisma.catalog_itemsCreateNestedOneWithoutCatalog_item_variantsInput;
};
export type catalog_item_variantsUncheckedCreateWithoutOrder_itemsInput = {
    id?: string;
    catalog_item_id: string;
    name: string;
    sku?: string | null;
    barcode?: string | null;
    price_modifier_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedCreateNestedManyWithoutCatalog_item_variantsInput;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutCatalog_item_variantsInput;
};
export type catalog_item_variantsCreateOrConnectWithoutOrder_itemsInput = {
    where: Prisma.catalog_item_variantsWhereUniqueInput;
    create: Prisma.XOR<Prisma.catalog_item_variantsCreateWithoutOrder_itemsInput, Prisma.catalog_item_variantsUncheckedCreateWithoutOrder_itemsInput>;
};
export type catalog_item_variantsUpsertWithoutOrder_itemsInput = {
    update: Prisma.XOR<Prisma.catalog_item_variantsUpdateWithoutOrder_itemsInput, Prisma.catalog_item_variantsUncheckedUpdateWithoutOrder_itemsInput>;
    create: Prisma.XOR<Prisma.catalog_item_variantsCreateWithoutOrder_itemsInput, Prisma.catalog_item_variantsUncheckedCreateWithoutOrder_itemsInput>;
    where?: Prisma.catalog_item_variantsWhereInput;
};
export type catalog_item_variantsUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: Prisma.catalog_item_variantsWhereInput;
    data: Prisma.XOR<Prisma.catalog_item_variantsUpdateWithoutOrder_itemsInput, Prisma.catalog_item_variantsUncheckedUpdateWithoutOrder_itemsInput>;
};
export type catalog_item_variantsUpdateWithoutOrder_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_modifier_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUpdateManyWithoutCatalog_item_variantsNestedInput;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutCatalog_item_variantsNestedInput;
    catalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutCatalog_item_variantsNestedInput;
};
export type catalog_item_variantsUncheckedUpdateWithoutOrder_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_modifier_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedUpdateManyWithoutCatalog_item_variantsNestedInput;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutCatalog_item_variantsNestedInput;
};
export type catalog_item_variantsCreateManyCatalog_itemsInput = {
    id?: string;
    name: string;
    sku?: string | null;
    barcode?: string | null;
    price_modifier_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type catalog_item_variantsUpdateWithoutCatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_modifier_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUpdateManyWithoutCatalog_item_variantsNestedInput;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutCatalog_item_variantsNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutCatalog_item_variantsNestedInput;
};
export type catalog_item_variantsUncheckedUpdateWithoutCatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_modifier_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUncheckedUpdateManyWithoutCatalog_item_variantsNestedInput;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutCatalog_item_variantsNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutCatalog_item_variantsNestedInput;
};
export type catalog_item_variantsUncheckedUpdateManyWithoutCatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_modifier_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Catalog_item_variantsCountOutputType = {
    branch_catalog_items: number;
    cart_items: number;
    order_items: number;
};
export type Catalog_item_variantsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    branch_catalog_items?: boolean | Catalog_item_variantsCountOutputTypeCountBranch_catalog_itemsArgs;
    cart_items?: boolean | Catalog_item_variantsCountOutputTypeCountCart_itemsArgs;
    order_items?: boolean | Catalog_item_variantsCountOutputTypeCountOrder_itemsArgs;
};
export type Catalog_item_variantsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Catalog_item_variantsCountOutputTypeSelect<ExtArgs> | null;
};
export type Catalog_item_variantsCountOutputTypeCountBranch_catalog_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.branch_catalog_itemsWhereInput;
};
export type Catalog_item_variantsCountOutputTypeCountCart_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cart_itemsWhereInput;
};
export type Catalog_item_variantsCountOutputTypeCountOrder_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_itemsWhereInput;
};
export type catalog_item_variantsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    catalog_item_id?: boolean;
    name?: boolean;
    sku?: boolean;
    barcode?: boolean;
    price_modifier_amount?: boolean;
    is_default?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    branch_catalog_items?: boolean | Prisma.catalog_item_variants$branch_catalog_itemsArgs<ExtArgs>;
    cart_items?: boolean | Prisma.catalog_item_variants$cart_itemsArgs<ExtArgs>;
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    order_items?: boolean | Prisma.catalog_item_variants$order_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Catalog_item_variantsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["catalog_item_variants"]>;
export type catalog_item_variantsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    catalog_item_id?: boolean;
    name?: boolean;
    sku?: boolean;
    barcode?: boolean;
    price_modifier_amount?: boolean;
    is_default?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["catalog_item_variants"]>;
export type catalog_item_variantsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    catalog_item_id?: boolean;
    name?: boolean;
    sku?: boolean;
    barcode?: boolean;
    price_modifier_amount?: boolean;
    is_default?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["catalog_item_variants"]>;
export type catalog_item_variantsSelectScalar = {
    id?: boolean;
    catalog_item_id?: boolean;
    name?: boolean;
    sku?: boolean;
    barcode?: boolean;
    price_modifier_amount?: boolean;
    is_default?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type catalog_item_variantsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "catalog_item_id" | "name" | "sku" | "barcode" | "price_modifier_amount" | "is_default" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["catalog_item_variants"]>;
export type catalog_item_variantsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    branch_catalog_items?: boolean | Prisma.catalog_item_variants$branch_catalog_itemsArgs<ExtArgs>;
    cart_items?: boolean | Prisma.catalog_item_variants$cart_itemsArgs<ExtArgs>;
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    order_items?: boolean | Prisma.catalog_item_variants$order_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Catalog_item_variantsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type catalog_item_variantsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
};
export type catalog_item_variantsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
};
export type $catalog_item_variantsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "catalog_item_variants";
    objects: {
        branch_catalog_items: Prisma.$branch_catalog_itemsPayload<ExtArgs>[];
        cart_items: Prisma.$cart_itemsPayload<ExtArgs>[];
        catalog_items: Prisma.$catalog_itemsPayload<ExtArgs>;
        order_items: Prisma.$order_itemsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        catalog_item_id: string;
        name: string;
        sku: string | null;
        barcode: string | null;
        price_modifier_amount: runtime.Decimal;
        is_default: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["catalog_item_variants"]>;
    composites: {};
};
export type catalog_item_variantsGetPayload<S extends boolean | null | undefined | catalog_item_variantsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$catalog_item_variantsPayload, S>;
export type catalog_item_variantsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<catalog_item_variantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Catalog_item_variantsCountAggregateInputType | true;
};
export interface catalog_item_variantsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['catalog_item_variants'];
        meta: {
            name: 'catalog_item_variants';
        };
    };
    findUnique<T extends catalog_item_variantsFindUniqueArgs>(args: Prisma.SelectSubset<T, catalog_item_variantsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__catalog_item_variantsClient<runtime.Types.Result.GetResult<Prisma.$catalog_item_variantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends catalog_item_variantsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, catalog_item_variantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__catalog_item_variantsClient<runtime.Types.Result.GetResult<Prisma.$catalog_item_variantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends catalog_item_variantsFindFirstArgs>(args?: Prisma.SelectSubset<T, catalog_item_variantsFindFirstArgs<ExtArgs>>): Prisma.Prisma__catalog_item_variantsClient<runtime.Types.Result.GetResult<Prisma.$catalog_item_variantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends catalog_item_variantsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, catalog_item_variantsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__catalog_item_variantsClient<runtime.Types.Result.GetResult<Prisma.$catalog_item_variantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends catalog_item_variantsFindManyArgs>(args?: Prisma.SelectSubset<T, catalog_item_variantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$catalog_item_variantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends catalog_item_variantsCreateArgs>(args: Prisma.SelectSubset<T, catalog_item_variantsCreateArgs<ExtArgs>>): Prisma.Prisma__catalog_item_variantsClient<runtime.Types.Result.GetResult<Prisma.$catalog_item_variantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends catalog_item_variantsCreateManyArgs>(args?: Prisma.SelectSubset<T, catalog_item_variantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends catalog_item_variantsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, catalog_item_variantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$catalog_item_variantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends catalog_item_variantsDeleteArgs>(args: Prisma.SelectSubset<T, catalog_item_variantsDeleteArgs<ExtArgs>>): Prisma.Prisma__catalog_item_variantsClient<runtime.Types.Result.GetResult<Prisma.$catalog_item_variantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends catalog_item_variantsUpdateArgs>(args: Prisma.SelectSubset<T, catalog_item_variantsUpdateArgs<ExtArgs>>): Prisma.Prisma__catalog_item_variantsClient<runtime.Types.Result.GetResult<Prisma.$catalog_item_variantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends catalog_item_variantsDeleteManyArgs>(args?: Prisma.SelectSubset<T, catalog_item_variantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends catalog_item_variantsUpdateManyArgs>(args: Prisma.SelectSubset<T, catalog_item_variantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends catalog_item_variantsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, catalog_item_variantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$catalog_item_variantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends catalog_item_variantsUpsertArgs>(args: Prisma.SelectSubset<T, catalog_item_variantsUpsertArgs<ExtArgs>>): Prisma.Prisma__catalog_item_variantsClient<runtime.Types.Result.GetResult<Prisma.$catalog_item_variantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends catalog_item_variantsCountArgs>(args?: Prisma.Subset<T, catalog_item_variantsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Catalog_item_variantsCountAggregateOutputType> : number>;
    aggregate<T extends Catalog_item_variantsAggregateArgs>(args: Prisma.Subset<T, Catalog_item_variantsAggregateArgs>): Prisma.PrismaPromise<GetCatalog_item_variantsAggregateType<T>>;
    groupBy<T extends catalog_item_variantsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: catalog_item_variantsGroupByArgs['orderBy'];
    } : {
        orderBy?: catalog_item_variantsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, catalog_item_variantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCatalog_item_variantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: catalog_item_variantsFieldRefs;
}
export interface Prisma__catalog_item_variantsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    branch_catalog_items<T extends Prisma.catalog_item_variants$branch_catalog_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.catalog_item_variants$branch_catalog_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$branch_catalog_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cart_items<T extends Prisma.catalog_item_variants$cart_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.catalog_item_variants$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    catalog_items<T extends Prisma.catalog_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.catalog_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__catalog_itemsClient<runtime.Types.Result.GetResult<Prisma.$catalog_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    order_items<T extends Prisma.catalog_item_variants$order_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.catalog_item_variants$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface catalog_item_variantsFieldRefs {
    readonly id: Prisma.FieldRef<"catalog_item_variants", 'String'>;
    readonly catalog_item_id: Prisma.FieldRef<"catalog_item_variants", 'String'>;
    readonly name: Prisma.FieldRef<"catalog_item_variants", 'String'>;
    readonly sku: Prisma.FieldRef<"catalog_item_variants", 'String'>;
    readonly barcode: Prisma.FieldRef<"catalog_item_variants", 'String'>;
    readonly price_modifier_amount: Prisma.FieldRef<"catalog_item_variants", 'Decimal'>;
    readonly is_default: Prisma.FieldRef<"catalog_item_variants", 'Boolean'>;
    readonly is_active: Prisma.FieldRef<"catalog_item_variants", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"catalog_item_variants", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"catalog_item_variants", 'DateTime'>;
}
export type catalog_item_variantsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_variantsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_variantsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_variantsInclude<ExtArgs> | null;
    where: Prisma.catalog_item_variantsWhereUniqueInput;
};
export type catalog_item_variantsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_variantsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_variantsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_variantsInclude<ExtArgs> | null;
    where: Prisma.catalog_item_variantsWhereUniqueInput;
};
export type catalog_item_variantsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_variantsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_variantsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_variantsInclude<ExtArgs> | null;
    where?: Prisma.catalog_item_variantsWhereInput;
    orderBy?: Prisma.catalog_item_variantsOrderByWithRelationInput | Prisma.catalog_item_variantsOrderByWithRelationInput[];
    cursor?: Prisma.catalog_item_variantsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Catalog_item_variantsScalarFieldEnum | Prisma.Catalog_item_variantsScalarFieldEnum[];
};
export type catalog_item_variantsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_variantsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_variantsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_variantsInclude<ExtArgs> | null;
    where?: Prisma.catalog_item_variantsWhereInput;
    orderBy?: Prisma.catalog_item_variantsOrderByWithRelationInput | Prisma.catalog_item_variantsOrderByWithRelationInput[];
    cursor?: Prisma.catalog_item_variantsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Catalog_item_variantsScalarFieldEnum | Prisma.Catalog_item_variantsScalarFieldEnum[];
};
export type catalog_item_variantsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_variantsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_variantsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_variantsInclude<ExtArgs> | null;
    where?: Prisma.catalog_item_variantsWhereInput;
    orderBy?: Prisma.catalog_item_variantsOrderByWithRelationInput | Prisma.catalog_item_variantsOrderByWithRelationInput[];
    cursor?: Prisma.catalog_item_variantsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Catalog_item_variantsScalarFieldEnum | Prisma.Catalog_item_variantsScalarFieldEnum[];
};
export type catalog_item_variantsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_variantsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_variantsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_variantsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.catalog_item_variantsCreateInput, Prisma.catalog_item_variantsUncheckedCreateInput>;
};
export type catalog_item_variantsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.catalog_item_variantsCreateManyInput | Prisma.catalog_item_variantsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type catalog_item_variantsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_variantsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.catalog_item_variantsOmit<ExtArgs> | null;
    data: Prisma.catalog_item_variantsCreateManyInput | Prisma.catalog_item_variantsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.catalog_item_variantsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type catalog_item_variantsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_variantsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_variantsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_variantsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.catalog_item_variantsUpdateInput, Prisma.catalog_item_variantsUncheckedUpdateInput>;
    where: Prisma.catalog_item_variantsWhereUniqueInput;
};
export type catalog_item_variantsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.catalog_item_variantsUpdateManyMutationInput, Prisma.catalog_item_variantsUncheckedUpdateManyInput>;
    where?: Prisma.catalog_item_variantsWhereInput;
    limit?: number;
};
export type catalog_item_variantsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_variantsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.catalog_item_variantsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.catalog_item_variantsUpdateManyMutationInput, Prisma.catalog_item_variantsUncheckedUpdateManyInput>;
    where?: Prisma.catalog_item_variantsWhereInput;
    limit?: number;
    include?: Prisma.catalog_item_variantsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type catalog_item_variantsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_variantsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_variantsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_variantsInclude<ExtArgs> | null;
    where: Prisma.catalog_item_variantsWhereUniqueInput;
    create: Prisma.XOR<Prisma.catalog_item_variantsCreateInput, Prisma.catalog_item_variantsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.catalog_item_variantsUpdateInput, Prisma.catalog_item_variantsUncheckedUpdateInput>;
};
export type catalog_item_variantsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_variantsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_variantsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_variantsInclude<ExtArgs> | null;
    where: Prisma.catalog_item_variantsWhereUniqueInput;
};
export type catalog_item_variantsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.catalog_item_variantsWhereInput;
    limit?: number;
};
export type catalog_item_variants$branch_catalog_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type catalog_item_variants$cart_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type catalog_item_variants$order_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where?: Prisma.order_itemsWhereInput;
    orderBy?: Prisma.order_itemsOrderByWithRelationInput | Prisma.order_itemsOrderByWithRelationInput[];
    cursor?: Prisma.order_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_itemsScalarFieldEnum | Prisma.Order_itemsScalarFieldEnum[];
};
export type catalog_item_variantsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_variantsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_variantsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_variantsInclude<ExtArgs> | null;
};
export {};
