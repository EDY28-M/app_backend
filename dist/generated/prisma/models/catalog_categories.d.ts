import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type catalog_categoriesModel = runtime.Types.Result.DefaultSelection<Prisma.$catalog_categoriesPayload>;
export type AggregateCatalog_categories = {
    _count: Catalog_categoriesCountAggregateOutputType | null;
    _avg: Catalog_categoriesAvgAggregateOutputType | null;
    _sum: Catalog_categoriesSumAggregateOutputType | null;
    _min: Catalog_categoriesMinAggregateOutputType | null;
    _max: Catalog_categoriesMaxAggregateOutputType | null;
};
export type Catalog_categoriesAvgAggregateOutputType = {
    sort_order: number | null;
};
export type Catalog_categoriesSumAggregateOutputType = {
    sort_order: number | null;
};
export type Catalog_categoriesMinAggregateOutputType = {
    id: string | null;
    store_id: string | null;
    parent_id: string | null;
    name: string | null;
    slug: string | null;
    sort_order: number | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Catalog_categoriesMaxAggregateOutputType = {
    id: string | null;
    store_id: string | null;
    parent_id: string | null;
    name: string | null;
    slug: string | null;
    sort_order: number | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Catalog_categoriesCountAggregateOutputType = {
    id: number;
    store_id: number;
    parent_id: number;
    name: number;
    slug: number;
    sort_order: number;
    is_active: number;
    created_at: number;
    _all: number;
};
export type Catalog_categoriesAvgAggregateInputType = {
    sort_order?: true;
};
export type Catalog_categoriesSumAggregateInputType = {
    sort_order?: true;
};
export type Catalog_categoriesMinAggregateInputType = {
    id?: true;
    store_id?: true;
    parent_id?: true;
    name?: true;
    slug?: true;
    sort_order?: true;
    is_active?: true;
    created_at?: true;
};
export type Catalog_categoriesMaxAggregateInputType = {
    id?: true;
    store_id?: true;
    parent_id?: true;
    name?: true;
    slug?: true;
    sort_order?: true;
    is_active?: true;
    created_at?: true;
};
export type Catalog_categoriesCountAggregateInputType = {
    id?: true;
    store_id?: true;
    parent_id?: true;
    name?: true;
    slug?: true;
    sort_order?: true;
    is_active?: true;
    created_at?: true;
    _all?: true;
};
export type Catalog_categoriesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.catalog_categoriesWhereInput;
    orderBy?: Prisma.catalog_categoriesOrderByWithRelationInput | Prisma.catalog_categoriesOrderByWithRelationInput[];
    cursor?: Prisma.catalog_categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Catalog_categoriesCountAggregateInputType;
    _avg?: Catalog_categoriesAvgAggregateInputType;
    _sum?: Catalog_categoriesSumAggregateInputType;
    _min?: Catalog_categoriesMinAggregateInputType;
    _max?: Catalog_categoriesMaxAggregateInputType;
};
export type GetCatalog_categoriesAggregateType<T extends Catalog_categoriesAggregateArgs> = {
    [P in keyof T & keyof AggregateCatalog_categories]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCatalog_categories[P]> : Prisma.GetScalarType<T[P], AggregateCatalog_categories[P]>;
};
export type catalog_categoriesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.catalog_categoriesWhereInput;
    orderBy?: Prisma.catalog_categoriesOrderByWithAggregationInput | Prisma.catalog_categoriesOrderByWithAggregationInput[];
    by: Prisma.Catalog_categoriesScalarFieldEnum[] | Prisma.Catalog_categoriesScalarFieldEnum;
    having?: Prisma.catalog_categoriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Catalog_categoriesCountAggregateInputType | true;
    _avg?: Catalog_categoriesAvgAggregateInputType;
    _sum?: Catalog_categoriesSumAggregateInputType;
    _min?: Catalog_categoriesMinAggregateInputType;
    _max?: Catalog_categoriesMaxAggregateInputType;
};
export type Catalog_categoriesGroupByOutputType = {
    id: string;
    store_id: string;
    parent_id: string | null;
    name: string;
    slug: string;
    sort_order: number;
    is_active: boolean;
    created_at: Date;
    _count: Catalog_categoriesCountAggregateOutputType | null;
    _avg: Catalog_categoriesAvgAggregateOutputType | null;
    _sum: Catalog_categoriesSumAggregateOutputType | null;
    _min: Catalog_categoriesMinAggregateOutputType | null;
    _max: Catalog_categoriesMaxAggregateOutputType | null;
};
type GetCatalog_categoriesGroupByPayload<T extends catalog_categoriesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Catalog_categoriesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Catalog_categoriesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Catalog_categoriesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Catalog_categoriesGroupByOutputType[P]>;
}>>;
export type catalog_categoriesWhereInput = {
    AND?: Prisma.catalog_categoriesWhereInput | Prisma.catalog_categoriesWhereInput[];
    OR?: Prisma.catalog_categoriesWhereInput[];
    NOT?: Prisma.catalog_categoriesWhereInput | Prisma.catalog_categoriesWhereInput[];
    id?: Prisma.UuidFilter<"catalog_categories"> | string;
    store_id?: Prisma.UuidFilter<"catalog_categories"> | string;
    parent_id?: Prisma.UuidNullableFilter<"catalog_categories"> | string | null;
    name?: Prisma.StringFilter<"catalog_categories"> | string;
    slug?: Prisma.StringFilter<"catalog_categories"> | string;
    sort_order?: Prisma.IntFilter<"catalog_categories"> | number;
    is_active?: Prisma.BoolFilter<"catalog_categories"> | boolean;
    created_at?: Prisma.DateTimeFilter<"catalog_categories"> | Date | string;
    catalog_categories?: Prisma.XOR<Prisma.Catalog_categoriesNullableScalarRelationFilter, Prisma.catalog_categoriesWhereInput> | null;
    other_catalog_categories?: Prisma.Catalog_categoriesListRelationFilter;
    stores?: Prisma.XOR<Prisma.StoresScalarRelationFilter, Prisma.storesWhereInput>;
    catalog_items?: Prisma.Catalog_itemsListRelationFilter;
};
export type catalog_categoriesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    catalog_categories?: Prisma.catalog_categoriesOrderByWithRelationInput;
    other_catalog_categories?: Prisma.catalog_categoriesOrderByRelationAggregateInput;
    stores?: Prisma.storesOrderByWithRelationInput;
    catalog_items?: Prisma.catalog_itemsOrderByRelationAggregateInput;
};
export type catalog_categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    store_id_slug?: Prisma.catalog_categoriesStore_idSlugCompoundUniqueInput;
    AND?: Prisma.catalog_categoriesWhereInput | Prisma.catalog_categoriesWhereInput[];
    OR?: Prisma.catalog_categoriesWhereInput[];
    NOT?: Prisma.catalog_categoriesWhereInput | Prisma.catalog_categoriesWhereInput[];
    store_id?: Prisma.UuidFilter<"catalog_categories"> | string;
    parent_id?: Prisma.UuidNullableFilter<"catalog_categories"> | string | null;
    name?: Prisma.StringFilter<"catalog_categories"> | string;
    slug?: Prisma.StringFilter<"catalog_categories"> | string;
    sort_order?: Prisma.IntFilter<"catalog_categories"> | number;
    is_active?: Prisma.BoolFilter<"catalog_categories"> | boolean;
    created_at?: Prisma.DateTimeFilter<"catalog_categories"> | Date | string;
    catalog_categories?: Prisma.XOR<Prisma.Catalog_categoriesNullableScalarRelationFilter, Prisma.catalog_categoriesWhereInput> | null;
    other_catalog_categories?: Prisma.Catalog_categoriesListRelationFilter;
    stores?: Prisma.XOR<Prisma.StoresScalarRelationFilter, Prisma.storesWhereInput>;
    catalog_items?: Prisma.Catalog_itemsListRelationFilter;
}, "id" | "store_id_slug">;
export type catalog_categoriesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.catalog_categoriesCountOrderByAggregateInput;
    _avg?: Prisma.catalog_categoriesAvgOrderByAggregateInput;
    _max?: Prisma.catalog_categoriesMaxOrderByAggregateInput;
    _min?: Prisma.catalog_categoriesMinOrderByAggregateInput;
    _sum?: Prisma.catalog_categoriesSumOrderByAggregateInput;
};
export type catalog_categoriesScalarWhereWithAggregatesInput = {
    AND?: Prisma.catalog_categoriesScalarWhereWithAggregatesInput | Prisma.catalog_categoriesScalarWhereWithAggregatesInput[];
    OR?: Prisma.catalog_categoriesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.catalog_categoriesScalarWhereWithAggregatesInput | Prisma.catalog_categoriesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"catalog_categories"> | string;
    store_id?: Prisma.UuidWithAggregatesFilter<"catalog_categories"> | string;
    parent_id?: Prisma.UuidNullableWithAggregatesFilter<"catalog_categories"> | string | null;
    name?: Prisma.StringWithAggregatesFilter<"catalog_categories"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"catalog_categories"> | string;
    sort_order?: Prisma.IntWithAggregatesFilter<"catalog_categories"> | number;
    is_active?: Prisma.BoolWithAggregatesFilter<"catalog_categories"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"catalog_categories"> | Date | string;
};
export type catalog_categoriesCreateInput = {
    id?: string;
    name: string;
    slug: string;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    catalog_categories?: Prisma.catalog_categoriesCreateNestedOneWithoutOther_catalog_categoriesInput;
    other_catalog_categories?: Prisma.catalog_categoriesCreateNestedManyWithoutCatalog_categoriesInput;
    stores: Prisma.storesCreateNestedOneWithoutCatalog_categoriesInput;
    catalog_items?: Prisma.catalog_itemsCreateNestedManyWithoutCatalog_categoriesInput;
};
export type catalog_categoriesUncheckedCreateInput = {
    id?: string;
    store_id: string;
    parent_id?: string | null;
    name: string;
    slug: string;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    other_catalog_categories?: Prisma.catalog_categoriesUncheckedCreateNestedManyWithoutCatalog_categoriesInput;
    catalog_items?: Prisma.catalog_itemsUncheckedCreateNestedManyWithoutCatalog_categoriesInput;
};
export type catalog_categoriesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    catalog_categories?: Prisma.catalog_categoriesUpdateOneWithoutOther_catalog_categoriesNestedInput;
    other_catalog_categories?: Prisma.catalog_categoriesUpdateManyWithoutCatalog_categoriesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutCatalog_categoriesNestedInput;
    catalog_items?: Prisma.catalog_itemsUpdateManyWithoutCatalog_categoriesNestedInput;
};
export type catalog_categoriesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    parent_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    other_catalog_categories?: Prisma.catalog_categoriesUncheckedUpdateManyWithoutCatalog_categoriesNestedInput;
    catalog_items?: Prisma.catalog_itemsUncheckedUpdateManyWithoutCatalog_categoriesNestedInput;
};
export type catalog_categoriesCreateManyInput = {
    id?: string;
    store_id: string;
    parent_id?: string | null;
    name: string;
    slug: string;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
};
export type catalog_categoriesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type catalog_categoriesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    parent_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Catalog_categoriesNullableScalarRelationFilter = {
    is?: Prisma.catalog_categoriesWhereInput | null;
    isNot?: Prisma.catalog_categoriesWhereInput | null;
};
export type Catalog_categoriesListRelationFilter = {
    every?: Prisma.catalog_categoriesWhereInput;
    some?: Prisma.catalog_categoriesWhereInput;
    none?: Prisma.catalog_categoriesWhereInput;
};
export type catalog_categoriesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type catalog_categoriesStore_idSlugCompoundUniqueInput = {
    store_id: string;
    slug: string;
};
export type catalog_categoriesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type catalog_categoriesAvgOrderByAggregateInput = {
    sort_order?: Prisma.SortOrder;
};
export type catalog_categoriesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type catalog_categoriesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type catalog_categoriesSumOrderByAggregateInput = {
    sort_order?: Prisma.SortOrder;
};
export type catalog_categoriesCreateNestedOneWithoutOther_catalog_categoriesInput = {
    create?: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutOther_catalog_categoriesInput, Prisma.catalog_categoriesUncheckedCreateWithoutOther_catalog_categoriesInput>;
    connectOrCreate?: Prisma.catalog_categoriesCreateOrConnectWithoutOther_catalog_categoriesInput;
    connect?: Prisma.catalog_categoriesWhereUniqueInput;
};
export type catalog_categoriesCreateNestedManyWithoutCatalog_categoriesInput = {
    create?: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutCatalog_categoriesInput, Prisma.catalog_categoriesUncheckedCreateWithoutCatalog_categoriesInput> | Prisma.catalog_categoriesCreateWithoutCatalog_categoriesInput[] | Prisma.catalog_categoriesUncheckedCreateWithoutCatalog_categoriesInput[];
    connectOrCreate?: Prisma.catalog_categoriesCreateOrConnectWithoutCatalog_categoriesInput | Prisma.catalog_categoriesCreateOrConnectWithoutCatalog_categoriesInput[];
    createMany?: Prisma.catalog_categoriesCreateManyCatalog_categoriesInputEnvelope;
    connect?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
};
export type catalog_categoriesUncheckedCreateNestedManyWithoutCatalog_categoriesInput = {
    create?: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutCatalog_categoriesInput, Prisma.catalog_categoriesUncheckedCreateWithoutCatalog_categoriesInput> | Prisma.catalog_categoriesCreateWithoutCatalog_categoriesInput[] | Prisma.catalog_categoriesUncheckedCreateWithoutCatalog_categoriesInput[];
    connectOrCreate?: Prisma.catalog_categoriesCreateOrConnectWithoutCatalog_categoriesInput | Prisma.catalog_categoriesCreateOrConnectWithoutCatalog_categoriesInput[];
    createMany?: Prisma.catalog_categoriesCreateManyCatalog_categoriesInputEnvelope;
    connect?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
};
export type catalog_categoriesUpdateOneWithoutOther_catalog_categoriesNestedInput = {
    create?: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutOther_catalog_categoriesInput, Prisma.catalog_categoriesUncheckedCreateWithoutOther_catalog_categoriesInput>;
    connectOrCreate?: Prisma.catalog_categoriesCreateOrConnectWithoutOther_catalog_categoriesInput;
    upsert?: Prisma.catalog_categoriesUpsertWithoutOther_catalog_categoriesInput;
    disconnect?: Prisma.catalog_categoriesWhereInput | boolean;
    delete?: Prisma.catalog_categoriesWhereInput | boolean;
    connect?: Prisma.catalog_categoriesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.catalog_categoriesUpdateToOneWithWhereWithoutOther_catalog_categoriesInput, Prisma.catalog_categoriesUpdateWithoutOther_catalog_categoriesInput>, Prisma.catalog_categoriesUncheckedUpdateWithoutOther_catalog_categoriesInput>;
};
export type catalog_categoriesUpdateManyWithoutCatalog_categoriesNestedInput = {
    create?: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutCatalog_categoriesInput, Prisma.catalog_categoriesUncheckedCreateWithoutCatalog_categoriesInput> | Prisma.catalog_categoriesCreateWithoutCatalog_categoriesInput[] | Prisma.catalog_categoriesUncheckedCreateWithoutCatalog_categoriesInput[];
    connectOrCreate?: Prisma.catalog_categoriesCreateOrConnectWithoutCatalog_categoriesInput | Prisma.catalog_categoriesCreateOrConnectWithoutCatalog_categoriesInput[];
    upsert?: Prisma.catalog_categoriesUpsertWithWhereUniqueWithoutCatalog_categoriesInput | Prisma.catalog_categoriesUpsertWithWhereUniqueWithoutCatalog_categoriesInput[];
    createMany?: Prisma.catalog_categoriesCreateManyCatalog_categoriesInputEnvelope;
    set?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
    disconnect?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
    delete?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
    connect?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
    update?: Prisma.catalog_categoriesUpdateWithWhereUniqueWithoutCatalog_categoriesInput | Prisma.catalog_categoriesUpdateWithWhereUniqueWithoutCatalog_categoriesInput[];
    updateMany?: Prisma.catalog_categoriesUpdateManyWithWhereWithoutCatalog_categoriesInput | Prisma.catalog_categoriesUpdateManyWithWhereWithoutCatalog_categoriesInput[];
    deleteMany?: Prisma.catalog_categoriesScalarWhereInput | Prisma.catalog_categoriesScalarWhereInput[];
};
export type catalog_categoriesUncheckedUpdateManyWithoutCatalog_categoriesNestedInput = {
    create?: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutCatalog_categoriesInput, Prisma.catalog_categoriesUncheckedCreateWithoutCatalog_categoriesInput> | Prisma.catalog_categoriesCreateWithoutCatalog_categoriesInput[] | Prisma.catalog_categoriesUncheckedCreateWithoutCatalog_categoriesInput[];
    connectOrCreate?: Prisma.catalog_categoriesCreateOrConnectWithoutCatalog_categoriesInput | Prisma.catalog_categoriesCreateOrConnectWithoutCatalog_categoriesInput[];
    upsert?: Prisma.catalog_categoriesUpsertWithWhereUniqueWithoutCatalog_categoriesInput | Prisma.catalog_categoriesUpsertWithWhereUniqueWithoutCatalog_categoriesInput[];
    createMany?: Prisma.catalog_categoriesCreateManyCatalog_categoriesInputEnvelope;
    set?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
    disconnect?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
    delete?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
    connect?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
    update?: Prisma.catalog_categoriesUpdateWithWhereUniqueWithoutCatalog_categoriesInput | Prisma.catalog_categoriesUpdateWithWhereUniqueWithoutCatalog_categoriesInput[];
    updateMany?: Prisma.catalog_categoriesUpdateManyWithWhereWithoutCatalog_categoriesInput | Prisma.catalog_categoriesUpdateManyWithWhereWithoutCatalog_categoriesInput[];
    deleteMany?: Prisma.catalog_categoriesScalarWhereInput | Prisma.catalog_categoriesScalarWhereInput[];
};
export type catalog_categoriesCreateNestedOneWithoutCatalog_itemsInput = {
    create?: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutCatalog_itemsInput, Prisma.catalog_categoriesUncheckedCreateWithoutCatalog_itemsInput>;
    connectOrCreate?: Prisma.catalog_categoriesCreateOrConnectWithoutCatalog_itemsInput;
    connect?: Prisma.catalog_categoriesWhereUniqueInput;
};
export type catalog_categoriesUpdateOneWithoutCatalog_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutCatalog_itemsInput, Prisma.catalog_categoriesUncheckedCreateWithoutCatalog_itemsInput>;
    connectOrCreate?: Prisma.catalog_categoriesCreateOrConnectWithoutCatalog_itemsInput;
    upsert?: Prisma.catalog_categoriesUpsertWithoutCatalog_itemsInput;
    disconnect?: Prisma.catalog_categoriesWhereInput | boolean;
    delete?: Prisma.catalog_categoriesWhereInput | boolean;
    connect?: Prisma.catalog_categoriesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.catalog_categoriesUpdateToOneWithWhereWithoutCatalog_itemsInput, Prisma.catalog_categoriesUpdateWithoutCatalog_itemsInput>, Prisma.catalog_categoriesUncheckedUpdateWithoutCatalog_itemsInput>;
};
export type catalog_categoriesCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutStoresInput, Prisma.catalog_categoriesUncheckedCreateWithoutStoresInput> | Prisma.catalog_categoriesCreateWithoutStoresInput[] | Prisma.catalog_categoriesUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.catalog_categoriesCreateOrConnectWithoutStoresInput | Prisma.catalog_categoriesCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.catalog_categoriesCreateManyStoresInputEnvelope;
    connect?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
};
export type catalog_categoriesUncheckedCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutStoresInput, Prisma.catalog_categoriesUncheckedCreateWithoutStoresInput> | Prisma.catalog_categoriesCreateWithoutStoresInput[] | Prisma.catalog_categoriesUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.catalog_categoriesCreateOrConnectWithoutStoresInput | Prisma.catalog_categoriesCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.catalog_categoriesCreateManyStoresInputEnvelope;
    connect?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
};
export type catalog_categoriesUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutStoresInput, Prisma.catalog_categoriesUncheckedCreateWithoutStoresInput> | Prisma.catalog_categoriesCreateWithoutStoresInput[] | Prisma.catalog_categoriesUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.catalog_categoriesCreateOrConnectWithoutStoresInput | Prisma.catalog_categoriesCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.catalog_categoriesUpsertWithWhereUniqueWithoutStoresInput | Prisma.catalog_categoriesUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.catalog_categoriesCreateManyStoresInputEnvelope;
    set?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
    disconnect?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
    delete?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
    connect?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
    update?: Prisma.catalog_categoriesUpdateWithWhereUniqueWithoutStoresInput | Prisma.catalog_categoriesUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.catalog_categoriesUpdateManyWithWhereWithoutStoresInput | Prisma.catalog_categoriesUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.catalog_categoriesScalarWhereInput | Prisma.catalog_categoriesScalarWhereInput[];
};
export type catalog_categoriesUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutStoresInput, Prisma.catalog_categoriesUncheckedCreateWithoutStoresInput> | Prisma.catalog_categoriesCreateWithoutStoresInput[] | Prisma.catalog_categoriesUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.catalog_categoriesCreateOrConnectWithoutStoresInput | Prisma.catalog_categoriesCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.catalog_categoriesUpsertWithWhereUniqueWithoutStoresInput | Prisma.catalog_categoriesUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.catalog_categoriesCreateManyStoresInputEnvelope;
    set?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
    disconnect?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
    delete?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
    connect?: Prisma.catalog_categoriesWhereUniqueInput | Prisma.catalog_categoriesWhereUniqueInput[];
    update?: Prisma.catalog_categoriesUpdateWithWhereUniqueWithoutStoresInput | Prisma.catalog_categoriesUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.catalog_categoriesUpdateManyWithWhereWithoutStoresInput | Prisma.catalog_categoriesUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.catalog_categoriesScalarWhereInput | Prisma.catalog_categoriesScalarWhereInput[];
};
export type catalog_categoriesCreateWithoutOther_catalog_categoriesInput = {
    id?: string;
    name: string;
    slug: string;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    catalog_categories?: Prisma.catalog_categoriesCreateNestedOneWithoutOther_catalog_categoriesInput;
    stores: Prisma.storesCreateNestedOneWithoutCatalog_categoriesInput;
    catalog_items?: Prisma.catalog_itemsCreateNestedManyWithoutCatalog_categoriesInput;
};
export type catalog_categoriesUncheckedCreateWithoutOther_catalog_categoriesInput = {
    id?: string;
    store_id: string;
    parent_id?: string | null;
    name: string;
    slug: string;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    catalog_items?: Prisma.catalog_itemsUncheckedCreateNestedManyWithoutCatalog_categoriesInput;
};
export type catalog_categoriesCreateOrConnectWithoutOther_catalog_categoriesInput = {
    where: Prisma.catalog_categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutOther_catalog_categoriesInput, Prisma.catalog_categoriesUncheckedCreateWithoutOther_catalog_categoriesInput>;
};
export type catalog_categoriesCreateWithoutCatalog_categoriesInput = {
    id?: string;
    name: string;
    slug: string;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    other_catalog_categories?: Prisma.catalog_categoriesCreateNestedManyWithoutCatalog_categoriesInput;
    stores: Prisma.storesCreateNestedOneWithoutCatalog_categoriesInput;
    catalog_items?: Prisma.catalog_itemsCreateNestedManyWithoutCatalog_categoriesInput;
};
export type catalog_categoriesUncheckedCreateWithoutCatalog_categoriesInput = {
    id?: string;
    store_id: string;
    name: string;
    slug: string;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    other_catalog_categories?: Prisma.catalog_categoriesUncheckedCreateNestedManyWithoutCatalog_categoriesInput;
    catalog_items?: Prisma.catalog_itemsUncheckedCreateNestedManyWithoutCatalog_categoriesInput;
};
export type catalog_categoriesCreateOrConnectWithoutCatalog_categoriesInput = {
    where: Prisma.catalog_categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutCatalog_categoriesInput, Prisma.catalog_categoriesUncheckedCreateWithoutCatalog_categoriesInput>;
};
export type catalog_categoriesCreateManyCatalog_categoriesInputEnvelope = {
    data: Prisma.catalog_categoriesCreateManyCatalog_categoriesInput | Prisma.catalog_categoriesCreateManyCatalog_categoriesInput[];
    skipDuplicates?: boolean;
};
export type catalog_categoriesUpsertWithoutOther_catalog_categoriesInput = {
    update: Prisma.XOR<Prisma.catalog_categoriesUpdateWithoutOther_catalog_categoriesInput, Prisma.catalog_categoriesUncheckedUpdateWithoutOther_catalog_categoriesInput>;
    create: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutOther_catalog_categoriesInput, Prisma.catalog_categoriesUncheckedCreateWithoutOther_catalog_categoriesInput>;
    where?: Prisma.catalog_categoriesWhereInput;
};
export type catalog_categoriesUpdateToOneWithWhereWithoutOther_catalog_categoriesInput = {
    where?: Prisma.catalog_categoriesWhereInput;
    data: Prisma.XOR<Prisma.catalog_categoriesUpdateWithoutOther_catalog_categoriesInput, Prisma.catalog_categoriesUncheckedUpdateWithoutOther_catalog_categoriesInput>;
};
export type catalog_categoriesUpdateWithoutOther_catalog_categoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    catalog_categories?: Prisma.catalog_categoriesUpdateOneWithoutOther_catalog_categoriesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutCatalog_categoriesNestedInput;
    catalog_items?: Prisma.catalog_itemsUpdateManyWithoutCatalog_categoriesNestedInput;
};
export type catalog_categoriesUncheckedUpdateWithoutOther_catalog_categoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    parent_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    catalog_items?: Prisma.catalog_itemsUncheckedUpdateManyWithoutCatalog_categoriesNestedInput;
};
export type catalog_categoriesUpsertWithWhereUniqueWithoutCatalog_categoriesInput = {
    where: Prisma.catalog_categoriesWhereUniqueInput;
    update: Prisma.XOR<Prisma.catalog_categoriesUpdateWithoutCatalog_categoriesInput, Prisma.catalog_categoriesUncheckedUpdateWithoutCatalog_categoriesInput>;
    create: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutCatalog_categoriesInput, Prisma.catalog_categoriesUncheckedCreateWithoutCatalog_categoriesInput>;
};
export type catalog_categoriesUpdateWithWhereUniqueWithoutCatalog_categoriesInput = {
    where: Prisma.catalog_categoriesWhereUniqueInput;
    data: Prisma.XOR<Prisma.catalog_categoriesUpdateWithoutCatalog_categoriesInput, Prisma.catalog_categoriesUncheckedUpdateWithoutCatalog_categoriesInput>;
};
export type catalog_categoriesUpdateManyWithWhereWithoutCatalog_categoriesInput = {
    where: Prisma.catalog_categoriesScalarWhereInput;
    data: Prisma.XOR<Prisma.catalog_categoriesUpdateManyMutationInput, Prisma.catalog_categoriesUncheckedUpdateManyWithoutCatalog_categoriesInput>;
};
export type catalog_categoriesScalarWhereInput = {
    AND?: Prisma.catalog_categoriesScalarWhereInput | Prisma.catalog_categoriesScalarWhereInput[];
    OR?: Prisma.catalog_categoriesScalarWhereInput[];
    NOT?: Prisma.catalog_categoriesScalarWhereInput | Prisma.catalog_categoriesScalarWhereInput[];
    id?: Prisma.UuidFilter<"catalog_categories"> | string;
    store_id?: Prisma.UuidFilter<"catalog_categories"> | string;
    parent_id?: Prisma.UuidNullableFilter<"catalog_categories"> | string | null;
    name?: Prisma.StringFilter<"catalog_categories"> | string;
    slug?: Prisma.StringFilter<"catalog_categories"> | string;
    sort_order?: Prisma.IntFilter<"catalog_categories"> | number;
    is_active?: Prisma.BoolFilter<"catalog_categories"> | boolean;
    created_at?: Prisma.DateTimeFilter<"catalog_categories"> | Date | string;
};
export type catalog_categoriesCreateWithoutCatalog_itemsInput = {
    id?: string;
    name: string;
    slug: string;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    catalog_categories?: Prisma.catalog_categoriesCreateNestedOneWithoutOther_catalog_categoriesInput;
    other_catalog_categories?: Prisma.catalog_categoriesCreateNestedManyWithoutCatalog_categoriesInput;
    stores: Prisma.storesCreateNestedOneWithoutCatalog_categoriesInput;
};
export type catalog_categoriesUncheckedCreateWithoutCatalog_itemsInput = {
    id?: string;
    store_id: string;
    parent_id?: string | null;
    name: string;
    slug: string;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    other_catalog_categories?: Prisma.catalog_categoriesUncheckedCreateNestedManyWithoutCatalog_categoriesInput;
};
export type catalog_categoriesCreateOrConnectWithoutCatalog_itemsInput = {
    where: Prisma.catalog_categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutCatalog_itemsInput, Prisma.catalog_categoriesUncheckedCreateWithoutCatalog_itemsInput>;
};
export type catalog_categoriesUpsertWithoutCatalog_itemsInput = {
    update: Prisma.XOR<Prisma.catalog_categoriesUpdateWithoutCatalog_itemsInput, Prisma.catalog_categoriesUncheckedUpdateWithoutCatalog_itemsInput>;
    create: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutCatalog_itemsInput, Prisma.catalog_categoriesUncheckedCreateWithoutCatalog_itemsInput>;
    where?: Prisma.catalog_categoriesWhereInput;
};
export type catalog_categoriesUpdateToOneWithWhereWithoutCatalog_itemsInput = {
    where?: Prisma.catalog_categoriesWhereInput;
    data: Prisma.XOR<Prisma.catalog_categoriesUpdateWithoutCatalog_itemsInput, Prisma.catalog_categoriesUncheckedUpdateWithoutCatalog_itemsInput>;
};
export type catalog_categoriesUpdateWithoutCatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    catalog_categories?: Prisma.catalog_categoriesUpdateOneWithoutOther_catalog_categoriesNestedInput;
    other_catalog_categories?: Prisma.catalog_categoriesUpdateManyWithoutCatalog_categoriesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutCatalog_categoriesNestedInput;
};
export type catalog_categoriesUncheckedUpdateWithoutCatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    parent_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    other_catalog_categories?: Prisma.catalog_categoriesUncheckedUpdateManyWithoutCatalog_categoriesNestedInput;
};
export type catalog_categoriesCreateWithoutStoresInput = {
    id?: string;
    name: string;
    slug: string;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    catalog_categories?: Prisma.catalog_categoriesCreateNestedOneWithoutOther_catalog_categoriesInput;
    other_catalog_categories?: Prisma.catalog_categoriesCreateNestedManyWithoutCatalog_categoriesInput;
    catalog_items?: Prisma.catalog_itemsCreateNestedManyWithoutCatalog_categoriesInput;
};
export type catalog_categoriesUncheckedCreateWithoutStoresInput = {
    id?: string;
    parent_id?: string | null;
    name: string;
    slug: string;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    other_catalog_categories?: Prisma.catalog_categoriesUncheckedCreateNestedManyWithoutCatalog_categoriesInput;
    catalog_items?: Prisma.catalog_itemsUncheckedCreateNestedManyWithoutCatalog_categoriesInput;
};
export type catalog_categoriesCreateOrConnectWithoutStoresInput = {
    where: Prisma.catalog_categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutStoresInput, Prisma.catalog_categoriesUncheckedCreateWithoutStoresInput>;
};
export type catalog_categoriesCreateManyStoresInputEnvelope = {
    data: Prisma.catalog_categoriesCreateManyStoresInput | Prisma.catalog_categoriesCreateManyStoresInput[];
    skipDuplicates?: boolean;
};
export type catalog_categoriesUpsertWithWhereUniqueWithoutStoresInput = {
    where: Prisma.catalog_categoriesWhereUniqueInput;
    update: Prisma.XOR<Prisma.catalog_categoriesUpdateWithoutStoresInput, Prisma.catalog_categoriesUncheckedUpdateWithoutStoresInput>;
    create: Prisma.XOR<Prisma.catalog_categoriesCreateWithoutStoresInput, Prisma.catalog_categoriesUncheckedCreateWithoutStoresInput>;
};
export type catalog_categoriesUpdateWithWhereUniqueWithoutStoresInput = {
    where: Prisma.catalog_categoriesWhereUniqueInput;
    data: Prisma.XOR<Prisma.catalog_categoriesUpdateWithoutStoresInput, Prisma.catalog_categoriesUncheckedUpdateWithoutStoresInput>;
};
export type catalog_categoriesUpdateManyWithWhereWithoutStoresInput = {
    where: Prisma.catalog_categoriesScalarWhereInput;
    data: Prisma.XOR<Prisma.catalog_categoriesUpdateManyMutationInput, Prisma.catalog_categoriesUncheckedUpdateManyWithoutStoresInput>;
};
export type catalog_categoriesCreateManyCatalog_categoriesInput = {
    id?: string;
    store_id: string;
    name: string;
    slug: string;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
};
export type catalog_categoriesUpdateWithoutCatalog_categoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    other_catalog_categories?: Prisma.catalog_categoriesUpdateManyWithoutCatalog_categoriesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutCatalog_categoriesNestedInput;
    catalog_items?: Prisma.catalog_itemsUpdateManyWithoutCatalog_categoriesNestedInput;
};
export type catalog_categoriesUncheckedUpdateWithoutCatalog_categoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    other_catalog_categories?: Prisma.catalog_categoriesUncheckedUpdateManyWithoutCatalog_categoriesNestedInput;
    catalog_items?: Prisma.catalog_itemsUncheckedUpdateManyWithoutCatalog_categoriesNestedInput;
};
export type catalog_categoriesUncheckedUpdateManyWithoutCatalog_categoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type catalog_categoriesCreateManyStoresInput = {
    id?: string;
    parent_id?: string | null;
    name: string;
    slug: string;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
};
export type catalog_categoriesUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    catalog_categories?: Prisma.catalog_categoriesUpdateOneWithoutOther_catalog_categoriesNestedInput;
    other_catalog_categories?: Prisma.catalog_categoriesUpdateManyWithoutCatalog_categoriesNestedInput;
    catalog_items?: Prisma.catalog_itemsUpdateManyWithoutCatalog_categoriesNestedInput;
};
export type catalog_categoriesUncheckedUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parent_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    other_catalog_categories?: Prisma.catalog_categoriesUncheckedUpdateManyWithoutCatalog_categoriesNestedInput;
    catalog_items?: Prisma.catalog_itemsUncheckedUpdateManyWithoutCatalog_categoriesNestedInput;
};
export type catalog_categoriesUncheckedUpdateManyWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parent_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Catalog_categoriesCountOutputType = {
    other_catalog_categories: number;
    catalog_items: number;
};
export type Catalog_categoriesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    other_catalog_categories?: boolean | Catalog_categoriesCountOutputTypeCountOther_catalog_categoriesArgs;
    catalog_items?: boolean | Catalog_categoriesCountOutputTypeCountCatalog_itemsArgs;
};
export type Catalog_categoriesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Catalog_categoriesCountOutputTypeSelect<ExtArgs> | null;
};
export type Catalog_categoriesCountOutputTypeCountOther_catalog_categoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.catalog_categoriesWhereInput;
};
export type Catalog_categoriesCountOutputTypeCountCatalog_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.catalog_itemsWhereInput;
};
export type catalog_categoriesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    store_id?: boolean;
    parent_id?: boolean;
    name?: boolean;
    slug?: boolean;
    sort_order?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    catalog_categories?: boolean | Prisma.catalog_categories$catalog_categoriesArgs<ExtArgs>;
    other_catalog_categories?: boolean | Prisma.catalog_categories$other_catalog_categoriesArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
    catalog_items?: boolean | Prisma.catalog_categories$catalog_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Catalog_categoriesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["catalog_categories"]>;
export type catalog_categoriesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    store_id?: boolean;
    parent_id?: boolean;
    name?: boolean;
    slug?: boolean;
    sort_order?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    catalog_categories?: boolean | Prisma.catalog_categories$catalog_categoriesArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["catalog_categories"]>;
export type catalog_categoriesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    store_id?: boolean;
    parent_id?: boolean;
    name?: boolean;
    slug?: boolean;
    sort_order?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    catalog_categories?: boolean | Prisma.catalog_categories$catalog_categoriesArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["catalog_categories"]>;
export type catalog_categoriesSelectScalar = {
    id?: boolean;
    store_id?: boolean;
    parent_id?: boolean;
    name?: boolean;
    slug?: boolean;
    sort_order?: boolean;
    is_active?: boolean;
    created_at?: boolean;
};
export type catalog_categoriesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "store_id" | "parent_id" | "name" | "slug" | "sort_order" | "is_active" | "created_at", ExtArgs["result"]["catalog_categories"]>;
export type catalog_categoriesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    catalog_categories?: boolean | Prisma.catalog_categories$catalog_categoriesArgs<ExtArgs>;
    other_catalog_categories?: boolean | Prisma.catalog_categories$other_catalog_categoriesArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
    catalog_items?: boolean | Prisma.catalog_categories$catalog_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Catalog_categoriesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type catalog_categoriesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    catalog_categories?: boolean | Prisma.catalog_categories$catalog_categoriesArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
};
export type catalog_categoriesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    catalog_categories?: boolean | Prisma.catalog_categories$catalog_categoriesArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
};
export type $catalog_categoriesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "catalog_categories";
    objects: {
        catalog_categories: Prisma.$catalog_categoriesPayload<ExtArgs> | null;
        other_catalog_categories: Prisma.$catalog_categoriesPayload<ExtArgs>[];
        stores: Prisma.$storesPayload<ExtArgs>;
        catalog_items: Prisma.$catalog_itemsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        store_id: string;
        parent_id: string | null;
        name: string;
        slug: string;
        sort_order: number;
        is_active: boolean;
        created_at: Date;
    }, ExtArgs["result"]["catalog_categories"]>;
    composites: {};
};
export type catalog_categoriesGetPayload<S extends boolean | null | undefined | catalog_categoriesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$catalog_categoriesPayload, S>;
export type catalog_categoriesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<catalog_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Catalog_categoriesCountAggregateInputType | true;
};
export interface catalog_categoriesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['catalog_categories'];
        meta: {
            name: 'catalog_categories';
        };
    };
    findUnique<T extends catalog_categoriesFindUniqueArgs>(args: Prisma.SelectSubset<T, catalog_categoriesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__catalog_categoriesClient<runtime.Types.Result.GetResult<Prisma.$catalog_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends catalog_categoriesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, catalog_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__catalog_categoriesClient<runtime.Types.Result.GetResult<Prisma.$catalog_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends catalog_categoriesFindFirstArgs>(args?: Prisma.SelectSubset<T, catalog_categoriesFindFirstArgs<ExtArgs>>): Prisma.Prisma__catalog_categoriesClient<runtime.Types.Result.GetResult<Prisma.$catalog_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends catalog_categoriesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, catalog_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__catalog_categoriesClient<runtime.Types.Result.GetResult<Prisma.$catalog_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends catalog_categoriesFindManyArgs>(args?: Prisma.SelectSubset<T, catalog_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$catalog_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends catalog_categoriesCreateArgs>(args: Prisma.SelectSubset<T, catalog_categoriesCreateArgs<ExtArgs>>): Prisma.Prisma__catalog_categoriesClient<runtime.Types.Result.GetResult<Prisma.$catalog_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends catalog_categoriesCreateManyArgs>(args?: Prisma.SelectSubset<T, catalog_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends catalog_categoriesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, catalog_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$catalog_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends catalog_categoriesDeleteArgs>(args: Prisma.SelectSubset<T, catalog_categoriesDeleteArgs<ExtArgs>>): Prisma.Prisma__catalog_categoriesClient<runtime.Types.Result.GetResult<Prisma.$catalog_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends catalog_categoriesUpdateArgs>(args: Prisma.SelectSubset<T, catalog_categoriesUpdateArgs<ExtArgs>>): Prisma.Prisma__catalog_categoriesClient<runtime.Types.Result.GetResult<Prisma.$catalog_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends catalog_categoriesDeleteManyArgs>(args?: Prisma.SelectSubset<T, catalog_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends catalog_categoriesUpdateManyArgs>(args: Prisma.SelectSubset<T, catalog_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends catalog_categoriesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, catalog_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$catalog_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends catalog_categoriesUpsertArgs>(args: Prisma.SelectSubset<T, catalog_categoriesUpsertArgs<ExtArgs>>): Prisma.Prisma__catalog_categoriesClient<runtime.Types.Result.GetResult<Prisma.$catalog_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends catalog_categoriesCountArgs>(args?: Prisma.Subset<T, catalog_categoriesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Catalog_categoriesCountAggregateOutputType> : number>;
    aggregate<T extends Catalog_categoriesAggregateArgs>(args: Prisma.Subset<T, Catalog_categoriesAggregateArgs>): Prisma.PrismaPromise<GetCatalog_categoriesAggregateType<T>>;
    groupBy<T extends catalog_categoriesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: catalog_categoriesGroupByArgs['orderBy'];
    } : {
        orderBy?: catalog_categoriesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, catalog_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCatalog_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: catalog_categoriesFieldRefs;
}
export interface Prisma__catalog_categoriesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    catalog_categories<T extends Prisma.catalog_categories$catalog_categoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.catalog_categories$catalog_categoriesArgs<ExtArgs>>): Prisma.Prisma__catalog_categoriesClient<runtime.Types.Result.GetResult<Prisma.$catalog_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    other_catalog_categories<T extends Prisma.catalog_categories$other_catalog_categoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.catalog_categories$other_catalog_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$catalog_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    stores<T extends Prisma.storesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.storesDefaultArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    catalog_items<T extends Prisma.catalog_categories$catalog_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.catalog_categories$catalog_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$catalog_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface catalog_categoriesFieldRefs {
    readonly id: Prisma.FieldRef<"catalog_categories", 'String'>;
    readonly store_id: Prisma.FieldRef<"catalog_categories", 'String'>;
    readonly parent_id: Prisma.FieldRef<"catalog_categories", 'String'>;
    readonly name: Prisma.FieldRef<"catalog_categories", 'String'>;
    readonly slug: Prisma.FieldRef<"catalog_categories", 'String'>;
    readonly sort_order: Prisma.FieldRef<"catalog_categories", 'Int'>;
    readonly is_active: Prisma.FieldRef<"catalog_categories", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"catalog_categories", 'DateTime'>;
}
export type catalog_categoriesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.catalog_categoriesOmit<ExtArgs> | null;
    include?: Prisma.catalog_categoriesInclude<ExtArgs> | null;
    where: Prisma.catalog_categoriesWhereUniqueInput;
};
export type catalog_categoriesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.catalog_categoriesOmit<ExtArgs> | null;
    include?: Prisma.catalog_categoriesInclude<ExtArgs> | null;
    where: Prisma.catalog_categoriesWhereUniqueInput;
};
export type catalog_categoriesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.catalog_categoriesOmit<ExtArgs> | null;
    include?: Prisma.catalog_categoriesInclude<ExtArgs> | null;
    where?: Prisma.catalog_categoriesWhereInput;
    orderBy?: Prisma.catalog_categoriesOrderByWithRelationInput | Prisma.catalog_categoriesOrderByWithRelationInput[];
    cursor?: Prisma.catalog_categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Catalog_categoriesScalarFieldEnum | Prisma.Catalog_categoriesScalarFieldEnum[];
};
export type catalog_categoriesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.catalog_categoriesOmit<ExtArgs> | null;
    include?: Prisma.catalog_categoriesInclude<ExtArgs> | null;
    where?: Prisma.catalog_categoriesWhereInput;
    orderBy?: Prisma.catalog_categoriesOrderByWithRelationInput | Prisma.catalog_categoriesOrderByWithRelationInput[];
    cursor?: Prisma.catalog_categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Catalog_categoriesScalarFieldEnum | Prisma.Catalog_categoriesScalarFieldEnum[];
};
export type catalog_categoriesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.catalog_categoriesOmit<ExtArgs> | null;
    include?: Prisma.catalog_categoriesInclude<ExtArgs> | null;
    where?: Prisma.catalog_categoriesWhereInput;
    orderBy?: Prisma.catalog_categoriesOrderByWithRelationInput | Prisma.catalog_categoriesOrderByWithRelationInput[];
    cursor?: Prisma.catalog_categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Catalog_categoriesScalarFieldEnum | Prisma.Catalog_categoriesScalarFieldEnum[];
};
export type catalog_categoriesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.catalog_categoriesOmit<ExtArgs> | null;
    include?: Prisma.catalog_categoriesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.catalog_categoriesCreateInput, Prisma.catalog_categoriesUncheckedCreateInput>;
};
export type catalog_categoriesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.catalog_categoriesCreateManyInput | Prisma.catalog_categoriesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type catalog_categoriesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_categoriesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.catalog_categoriesOmit<ExtArgs> | null;
    data: Prisma.catalog_categoriesCreateManyInput | Prisma.catalog_categoriesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.catalog_categoriesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type catalog_categoriesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.catalog_categoriesOmit<ExtArgs> | null;
    include?: Prisma.catalog_categoriesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.catalog_categoriesUpdateInput, Prisma.catalog_categoriesUncheckedUpdateInput>;
    where: Prisma.catalog_categoriesWhereUniqueInput;
};
export type catalog_categoriesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.catalog_categoriesUpdateManyMutationInput, Prisma.catalog_categoriesUncheckedUpdateManyInput>;
    where?: Prisma.catalog_categoriesWhereInput;
    limit?: number;
};
export type catalog_categoriesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_categoriesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.catalog_categoriesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.catalog_categoriesUpdateManyMutationInput, Prisma.catalog_categoriesUncheckedUpdateManyInput>;
    where?: Prisma.catalog_categoriesWhereInput;
    limit?: number;
    include?: Prisma.catalog_categoriesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type catalog_categoriesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.catalog_categoriesOmit<ExtArgs> | null;
    include?: Prisma.catalog_categoriesInclude<ExtArgs> | null;
    where: Prisma.catalog_categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.catalog_categoriesCreateInput, Prisma.catalog_categoriesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.catalog_categoriesUpdateInput, Prisma.catalog_categoriesUncheckedUpdateInput>;
};
export type catalog_categoriesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.catalog_categoriesOmit<ExtArgs> | null;
    include?: Prisma.catalog_categoriesInclude<ExtArgs> | null;
    where: Prisma.catalog_categoriesWhereUniqueInput;
};
export type catalog_categoriesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.catalog_categoriesWhereInput;
    limit?: number;
};
export type catalog_categories$catalog_categoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.catalog_categoriesOmit<ExtArgs> | null;
    include?: Prisma.catalog_categoriesInclude<ExtArgs> | null;
    where?: Prisma.catalog_categoriesWhereInput;
};
export type catalog_categories$other_catalog_categoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.catalog_categoriesOmit<ExtArgs> | null;
    include?: Prisma.catalog_categoriesInclude<ExtArgs> | null;
    where?: Prisma.catalog_categoriesWhereInput;
    orderBy?: Prisma.catalog_categoriesOrderByWithRelationInput | Prisma.catalog_categoriesOrderByWithRelationInput[];
    cursor?: Prisma.catalog_categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Catalog_categoriesScalarFieldEnum | Prisma.Catalog_categoriesScalarFieldEnum[];
};
export type catalog_categories$catalog_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_itemsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_itemsOmit<ExtArgs> | null;
    include?: Prisma.catalog_itemsInclude<ExtArgs> | null;
    where?: Prisma.catalog_itemsWhereInput;
    orderBy?: Prisma.catalog_itemsOrderByWithRelationInput | Prisma.catalog_itemsOrderByWithRelationInput[];
    cursor?: Prisma.catalog_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Catalog_itemsScalarFieldEnum | Prisma.Catalog_itemsScalarFieldEnum[];
};
export type catalog_categoriesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.catalog_categoriesOmit<ExtArgs> | null;
    include?: Prisma.catalog_categoriesInclude<ExtArgs> | null;
};
export {};
