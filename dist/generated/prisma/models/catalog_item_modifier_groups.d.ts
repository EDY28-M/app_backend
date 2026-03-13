import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type catalog_item_modifier_groupsModel = runtime.Types.Result.DefaultSelection<Prisma.$catalog_item_modifier_groupsPayload>;
export type AggregateCatalog_item_modifier_groups = {
    _count: Catalog_item_modifier_groupsCountAggregateOutputType | null;
    _avg: Catalog_item_modifier_groupsAvgAggregateOutputType | null;
    _sum: Catalog_item_modifier_groupsSumAggregateOutputType | null;
    _min: Catalog_item_modifier_groupsMinAggregateOutputType | null;
    _max: Catalog_item_modifier_groupsMaxAggregateOutputType | null;
};
export type Catalog_item_modifier_groupsAvgAggregateOutputType = {
    sort_order: number | null;
};
export type Catalog_item_modifier_groupsSumAggregateOutputType = {
    sort_order: number | null;
};
export type Catalog_item_modifier_groupsMinAggregateOutputType = {
    id: string | null;
    catalog_item_id: string | null;
    modifier_group_id: string | null;
    sort_order: number | null;
};
export type Catalog_item_modifier_groupsMaxAggregateOutputType = {
    id: string | null;
    catalog_item_id: string | null;
    modifier_group_id: string | null;
    sort_order: number | null;
};
export type Catalog_item_modifier_groupsCountAggregateOutputType = {
    id: number;
    catalog_item_id: number;
    modifier_group_id: number;
    sort_order: number;
    _all: number;
};
export type Catalog_item_modifier_groupsAvgAggregateInputType = {
    sort_order?: true;
};
export type Catalog_item_modifier_groupsSumAggregateInputType = {
    sort_order?: true;
};
export type Catalog_item_modifier_groupsMinAggregateInputType = {
    id?: true;
    catalog_item_id?: true;
    modifier_group_id?: true;
    sort_order?: true;
};
export type Catalog_item_modifier_groupsMaxAggregateInputType = {
    id?: true;
    catalog_item_id?: true;
    modifier_group_id?: true;
    sort_order?: true;
};
export type Catalog_item_modifier_groupsCountAggregateInputType = {
    id?: true;
    catalog_item_id?: true;
    modifier_group_id?: true;
    sort_order?: true;
    _all?: true;
};
export type Catalog_item_modifier_groupsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.catalog_item_modifier_groupsWhereInput;
    orderBy?: Prisma.catalog_item_modifier_groupsOrderByWithRelationInput | Prisma.catalog_item_modifier_groupsOrderByWithRelationInput[];
    cursor?: Prisma.catalog_item_modifier_groupsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Catalog_item_modifier_groupsCountAggregateInputType;
    _avg?: Catalog_item_modifier_groupsAvgAggregateInputType;
    _sum?: Catalog_item_modifier_groupsSumAggregateInputType;
    _min?: Catalog_item_modifier_groupsMinAggregateInputType;
    _max?: Catalog_item_modifier_groupsMaxAggregateInputType;
};
export type GetCatalog_item_modifier_groupsAggregateType<T extends Catalog_item_modifier_groupsAggregateArgs> = {
    [P in keyof T & keyof AggregateCatalog_item_modifier_groups]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCatalog_item_modifier_groups[P]> : Prisma.GetScalarType<T[P], AggregateCatalog_item_modifier_groups[P]>;
};
export type catalog_item_modifier_groupsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.catalog_item_modifier_groupsWhereInput;
    orderBy?: Prisma.catalog_item_modifier_groupsOrderByWithAggregationInput | Prisma.catalog_item_modifier_groupsOrderByWithAggregationInput[];
    by: Prisma.Catalog_item_modifier_groupsScalarFieldEnum[] | Prisma.Catalog_item_modifier_groupsScalarFieldEnum;
    having?: Prisma.catalog_item_modifier_groupsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Catalog_item_modifier_groupsCountAggregateInputType | true;
    _avg?: Catalog_item_modifier_groupsAvgAggregateInputType;
    _sum?: Catalog_item_modifier_groupsSumAggregateInputType;
    _min?: Catalog_item_modifier_groupsMinAggregateInputType;
    _max?: Catalog_item_modifier_groupsMaxAggregateInputType;
};
export type Catalog_item_modifier_groupsGroupByOutputType = {
    id: string;
    catalog_item_id: string;
    modifier_group_id: string;
    sort_order: number;
    _count: Catalog_item_modifier_groupsCountAggregateOutputType | null;
    _avg: Catalog_item_modifier_groupsAvgAggregateOutputType | null;
    _sum: Catalog_item_modifier_groupsSumAggregateOutputType | null;
    _min: Catalog_item_modifier_groupsMinAggregateOutputType | null;
    _max: Catalog_item_modifier_groupsMaxAggregateOutputType | null;
};
type GetCatalog_item_modifier_groupsGroupByPayload<T extends catalog_item_modifier_groupsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Catalog_item_modifier_groupsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Catalog_item_modifier_groupsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Catalog_item_modifier_groupsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Catalog_item_modifier_groupsGroupByOutputType[P]>;
}>>;
export type catalog_item_modifier_groupsWhereInput = {
    AND?: Prisma.catalog_item_modifier_groupsWhereInput | Prisma.catalog_item_modifier_groupsWhereInput[];
    OR?: Prisma.catalog_item_modifier_groupsWhereInput[];
    NOT?: Prisma.catalog_item_modifier_groupsWhereInput | Prisma.catalog_item_modifier_groupsWhereInput[];
    id?: Prisma.UuidFilter<"catalog_item_modifier_groups"> | string;
    catalog_item_id?: Prisma.UuidFilter<"catalog_item_modifier_groups"> | string;
    modifier_group_id?: Prisma.UuidFilter<"catalog_item_modifier_groups"> | string;
    sort_order?: Prisma.IntFilter<"catalog_item_modifier_groups"> | number;
    catalog_items?: Prisma.XOR<Prisma.Catalog_itemsScalarRelationFilter, Prisma.catalog_itemsWhereInput>;
    modifier_groups?: Prisma.XOR<Prisma.Modifier_groupsScalarRelationFilter, Prisma.modifier_groupsWhereInput>;
};
export type catalog_item_modifier_groupsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    modifier_group_id?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    catalog_items?: Prisma.catalog_itemsOrderByWithRelationInput;
    modifier_groups?: Prisma.modifier_groupsOrderByWithRelationInput;
};
export type catalog_item_modifier_groupsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    catalog_item_id_modifier_group_id?: Prisma.catalog_item_modifier_groupsCatalog_item_idModifier_group_idCompoundUniqueInput;
    AND?: Prisma.catalog_item_modifier_groupsWhereInput | Prisma.catalog_item_modifier_groupsWhereInput[];
    OR?: Prisma.catalog_item_modifier_groupsWhereInput[];
    NOT?: Prisma.catalog_item_modifier_groupsWhereInput | Prisma.catalog_item_modifier_groupsWhereInput[];
    catalog_item_id?: Prisma.UuidFilter<"catalog_item_modifier_groups"> | string;
    modifier_group_id?: Prisma.UuidFilter<"catalog_item_modifier_groups"> | string;
    sort_order?: Prisma.IntFilter<"catalog_item_modifier_groups"> | number;
    catalog_items?: Prisma.XOR<Prisma.Catalog_itemsScalarRelationFilter, Prisma.catalog_itemsWhereInput>;
    modifier_groups?: Prisma.XOR<Prisma.Modifier_groupsScalarRelationFilter, Prisma.modifier_groupsWhereInput>;
}, "id" | "catalog_item_id_modifier_group_id">;
export type catalog_item_modifier_groupsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    modifier_group_id?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    _count?: Prisma.catalog_item_modifier_groupsCountOrderByAggregateInput;
    _avg?: Prisma.catalog_item_modifier_groupsAvgOrderByAggregateInput;
    _max?: Prisma.catalog_item_modifier_groupsMaxOrderByAggregateInput;
    _min?: Prisma.catalog_item_modifier_groupsMinOrderByAggregateInput;
    _sum?: Prisma.catalog_item_modifier_groupsSumOrderByAggregateInput;
};
export type catalog_item_modifier_groupsScalarWhereWithAggregatesInput = {
    AND?: Prisma.catalog_item_modifier_groupsScalarWhereWithAggregatesInput | Prisma.catalog_item_modifier_groupsScalarWhereWithAggregatesInput[];
    OR?: Prisma.catalog_item_modifier_groupsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.catalog_item_modifier_groupsScalarWhereWithAggregatesInput | Prisma.catalog_item_modifier_groupsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"catalog_item_modifier_groups"> | string;
    catalog_item_id?: Prisma.UuidWithAggregatesFilter<"catalog_item_modifier_groups"> | string;
    modifier_group_id?: Prisma.UuidWithAggregatesFilter<"catalog_item_modifier_groups"> | string;
    sort_order?: Prisma.IntWithAggregatesFilter<"catalog_item_modifier_groups"> | number;
};
export type catalog_item_modifier_groupsCreateInput = {
    id?: string;
    sort_order?: number;
    catalog_items: Prisma.catalog_itemsCreateNestedOneWithoutCatalog_item_modifier_groupsInput;
    modifier_groups: Prisma.modifier_groupsCreateNestedOneWithoutCatalog_item_modifier_groupsInput;
};
export type catalog_item_modifier_groupsUncheckedCreateInput = {
    id?: string;
    catalog_item_id: string;
    modifier_group_id: string;
    sort_order?: number;
};
export type catalog_item_modifier_groupsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    catalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutCatalog_item_modifier_groupsNestedInput;
    modifier_groups?: Prisma.modifier_groupsUpdateOneRequiredWithoutCatalog_item_modifier_groupsNestedInput;
};
export type catalog_item_modifier_groupsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_id?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type catalog_item_modifier_groupsCreateManyInput = {
    id?: string;
    catalog_item_id: string;
    modifier_group_id: string;
    sort_order?: number;
};
export type catalog_item_modifier_groupsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type catalog_item_modifier_groupsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_id?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type catalog_item_modifier_groupsCatalog_item_idModifier_group_idCompoundUniqueInput = {
    catalog_item_id: string;
    modifier_group_id: string;
};
export type catalog_item_modifier_groupsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    modifier_group_id?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type catalog_item_modifier_groupsAvgOrderByAggregateInput = {
    sort_order?: Prisma.SortOrder;
};
export type catalog_item_modifier_groupsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    modifier_group_id?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type catalog_item_modifier_groupsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    modifier_group_id?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type catalog_item_modifier_groupsSumOrderByAggregateInput = {
    sort_order?: Prisma.SortOrder;
};
export type Catalog_item_modifier_groupsListRelationFilter = {
    every?: Prisma.catalog_item_modifier_groupsWhereInput;
    some?: Prisma.catalog_item_modifier_groupsWhereInput;
    none?: Prisma.catalog_item_modifier_groupsWhereInput;
};
export type catalog_item_modifier_groupsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type catalog_item_modifier_groupsCreateNestedManyWithoutCatalog_itemsInput = {
    create?: Prisma.XOR<Prisma.catalog_item_modifier_groupsCreateWithoutCatalog_itemsInput, Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutCatalog_itemsInput> | Prisma.catalog_item_modifier_groupsCreateWithoutCatalog_itemsInput[] | Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutCatalog_itemsInput[];
    connectOrCreate?: Prisma.catalog_item_modifier_groupsCreateOrConnectWithoutCatalog_itemsInput | Prisma.catalog_item_modifier_groupsCreateOrConnectWithoutCatalog_itemsInput[];
    createMany?: Prisma.catalog_item_modifier_groupsCreateManyCatalog_itemsInputEnvelope;
    connect?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
};
export type catalog_item_modifier_groupsUncheckedCreateNestedManyWithoutCatalog_itemsInput = {
    create?: Prisma.XOR<Prisma.catalog_item_modifier_groupsCreateWithoutCatalog_itemsInput, Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutCatalog_itemsInput> | Prisma.catalog_item_modifier_groupsCreateWithoutCatalog_itemsInput[] | Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutCatalog_itemsInput[];
    connectOrCreate?: Prisma.catalog_item_modifier_groupsCreateOrConnectWithoutCatalog_itemsInput | Prisma.catalog_item_modifier_groupsCreateOrConnectWithoutCatalog_itemsInput[];
    createMany?: Prisma.catalog_item_modifier_groupsCreateManyCatalog_itemsInputEnvelope;
    connect?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
};
export type catalog_item_modifier_groupsUpdateManyWithoutCatalog_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.catalog_item_modifier_groupsCreateWithoutCatalog_itemsInput, Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutCatalog_itemsInput> | Prisma.catalog_item_modifier_groupsCreateWithoutCatalog_itemsInput[] | Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutCatalog_itemsInput[];
    connectOrCreate?: Prisma.catalog_item_modifier_groupsCreateOrConnectWithoutCatalog_itemsInput | Prisma.catalog_item_modifier_groupsCreateOrConnectWithoutCatalog_itemsInput[];
    upsert?: Prisma.catalog_item_modifier_groupsUpsertWithWhereUniqueWithoutCatalog_itemsInput | Prisma.catalog_item_modifier_groupsUpsertWithWhereUniqueWithoutCatalog_itemsInput[];
    createMany?: Prisma.catalog_item_modifier_groupsCreateManyCatalog_itemsInputEnvelope;
    set?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
    disconnect?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
    delete?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
    connect?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
    update?: Prisma.catalog_item_modifier_groupsUpdateWithWhereUniqueWithoutCatalog_itemsInput | Prisma.catalog_item_modifier_groupsUpdateWithWhereUniqueWithoutCatalog_itemsInput[];
    updateMany?: Prisma.catalog_item_modifier_groupsUpdateManyWithWhereWithoutCatalog_itemsInput | Prisma.catalog_item_modifier_groupsUpdateManyWithWhereWithoutCatalog_itemsInput[];
    deleteMany?: Prisma.catalog_item_modifier_groupsScalarWhereInput | Prisma.catalog_item_modifier_groupsScalarWhereInput[];
};
export type catalog_item_modifier_groupsUncheckedUpdateManyWithoutCatalog_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.catalog_item_modifier_groupsCreateWithoutCatalog_itemsInput, Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutCatalog_itemsInput> | Prisma.catalog_item_modifier_groupsCreateWithoutCatalog_itemsInput[] | Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutCatalog_itemsInput[];
    connectOrCreate?: Prisma.catalog_item_modifier_groupsCreateOrConnectWithoutCatalog_itemsInput | Prisma.catalog_item_modifier_groupsCreateOrConnectWithoutCatalog_itemsInput[];
    upsert?: Prisma.catalog_item_modifier_groupsUpsertWithWhereUniqueWithoutCatalog_itemsInput | Prisma.catalog_item_modifier_groupsUpsertWithWhereUniqueWithoutCatalog_itemsInput[];
    createMany?: Prisma.catalog_item_modifier_groupsCreateManyCatalog_itemsInputEnvelope;
    set?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
    disconnect?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
    delete?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
    connect?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
    update?: Prisma.catalog_item_modifier_groupsUpdateWithWhereUniqueWithoutCatalog_itemsInput | Prisma.catalog_item_modifier_groupsUpdateWithWhereUniqueWithoutCatalog_itemsInput[];
    updateMany?: Prisma.catalog_item_modifier_groupsUpdateManyWithWhereWithoutCatalog_itemsInput | Prisma.catalog_item_modifier_groupsUpdateManyWithWhereWithoutCatalog_itemsInput[];
    deleteMany?: Prisma.catalog_item_modifier_groupsScalarWhereInput | Prisma.catalog_item_modifier_groupsScalarWhereInput[];
};
export type catalog_item_modifier_groupsCreateNestedManyWithoutModifier_groupsInput = {
    create?: Prisma.XOR<Prisma.catalog_item_modifier_groupsCreateWithoutModifier_groupsInput, Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutModifier_groupsInput> | Prisma.catalog_item_modifier_groupsCreateWithoutModifier_groupsInput[] | Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutModifier_groupsInput[];
    connectOrCreate?: Prisma.catalog_item_modifier_groupsCreateOrConnectWithoutModifier_groupsInput | Prisma.catalog_item_modifier_groupsCreateOrConnectWithoutModifier_groupsInput[];
    createMany?: Prisma.catalog_item_modifier_groupsCreateManyModifier_groupsInputEnvelope;
    connect?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
};
export type catalog_item_modifier_groupsUncheckedCreateNestedManyWithoutModifier_groupsInput = {
    create?: Prisma.XOR<Prisma.catalog_item_modifier_groupsCreateWithoutModifier_groupsInput, Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutModifier_groupsInput> | Prisma.catalog_item_modifier_groupsCreateWithoutModifier_groupsInput[] | Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutModifier_groupsInput[];
    connectOrCreate?: Prisma.catalog_item_modifier_groupsCreateOrConnectWithoutModifier_groupsInput | Prisma.catalog_item_modifier_groupsCreateOrConnectWithoutModifier_groupsInput[];
    createMany?: Prisma.catalog_item_modifier_groupsCreateManyModifier_groupsInputEnvelope;
    connect?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
};
export type catalog_item_modifier_groupsUpdateManyWithoutModifier_groupsNestedInput = {
    create?: Prisma.XOR<Prisma.catalog_item_modifier_groupsCreateWithoutModifier_groupsInput, Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutModifier_groupsInput> | Prisma.catalog_item_modifier_groupsCreateWithoutModifier_groupsInput[] | Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutModifier_groupsInput[];
    connectOrCreate?: Prisma.catalog_item_modifier_groupsCreateOrConnectWithoutModifier_groupsInput | Prisma.catalog_item_modifier_groupsCreateOrConnectWithoutModifier_groupsInput[];
    upsert?: Prisma.catalog_item_modifier_groupsUpsertWithWhereUniqueWithoutModifier_groupsInput | Prisma.catalog_item_modifier_groupsUpsertWithWhereUniqueWithoutModifier_groupsInput[];
    createMany?: Prisma.catalog_item_modifier_groupsCreateManyModifier_groupsInputEnvelope;
    set?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
    disconnect?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
    delete?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
    connect?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
    update?: Prisma.catalog_item_modifier_groupsUpdateWithWhereUniqueWithoutModifier_groupsInput | Prisma.catalog_item_modifier_groupsUpdateWithWhereUniqueWithoutModifier_groupsInput[];
    updateMany?: Prisma.catalog_item_modifier_groupsUpdateManyWithWhereWithoutModifier_groupsInput | Prisma.catalog_item_modifier_groupsUpdateManyWithWhereWithoutModifier_groupsInput[];
    deleteMany?: Prisma.catalog_item_modifier_groupsScalarWhereInput | Prisma.catalog_item_modifier_groupsScalarWhereInput[];
};
export type catalog_item_modifier_groupsUncheckedUpdateManyWithoutModifier_groupsNestedInput = {
    create?: Prisma.XOR<Prisma.catalog_item_modifier_groupsCreateWithoutModifier_groupsInput, Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutModifier_groupsInput> | Prisma.catalog_item_modifier_groupsCreateWithoutModifier_groupsInput[] | Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutModifier_groupsInput[];
    connectOrCreate?: Prisma.catalog_item_modifier_groupsCreateOrConnectWithoutModifier_groupsInput | Prisma.catalog_item_modifier_groupsCreateOrConnectWithoutModifier_groupsInput[];
    upsert?: Prisma.catalog_item_modifier_groupsUpsertWithWhereUniqueWithoutModifier_groupsInput | Prisma.catalog_item_modifier_groupsUpsertWithWhereUniqueWithoutModifier_groupsInput[];
    createMany?: Prisma.catalog_item_modifier_groupsCreateManyModifier_groupsInputEnvelope;
    set?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
    disconnect?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
    delete?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
    connect?: Prisma.catalog_item_modifier_groupsWhereUniqueInput | Prisma.catalog_item_modifier_groupsWhereUniqueInput[];
    update?: Prisma.catalog_item_modifier_groupsUpdateWithWhereUniqueWithoutModifier_groupsInput | Prisma.catalog_item_modifier_groupsUpdateWithWhereUniqueWithoutModifier_groupsInput[];
    updateMany?: Prisma.catalog_item_modifier_groupsUpdateManyWithWhereWithoutModifier_groupsInput | Prisma.catalog_item_modifier_groupsUpdateManyWithWhereWithoutModifier_groupsInput[];
    deleteMany?: Prisma.catalog_item_modifier_groupsScalarWhereInput | Prisma.catalog_item_modifier_groupsScalarWhereInput[];
};
export type catalog_item_modifier_groupsCreateWithoutCatalog_itemsInput = {
    id?: string;
    sort_order?: number;
    modifier_groups: Prisma.modifier_groupsCreateNestedOneWithoutCatalog_item_modifier_groupsInput;
};
export type catalog_item_modifier_groupsUncheckedCreateWithoutCatalog_itemsInput = {
    id?: string;
    modifier_group_id: string;
    sort_order?: number;
};
export type catalog_item_modifier_groupsCreateOrConnectWithoutCatalog_itemsInput = {
    where: Prisma.catalog_item_modifier_groupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.catalog_item_modifier_groupsCreateWithoutCatalog_itemsInput, Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutCatalog_itemsInput>;
};
export type catalog_item_modifier_groupsCreateManyCatalog_itemsInputEnvelope = {
    data: Prisma.catalog_item_modifier_groupsCreateManyCatalog_itemsInput | Prisma.catalog_item_modifier_groupsCreateManyCatalog_itemsInput[];
    skipDuplicates?: boolean;
};
export type catalog_item_modifier_groupsUpsertWithWhereUniqueWithoutCatalog_itemsInput = {
    where: Prisma.catalog_item_modifier_groupsWhereUniqueInput;
    update: Prisma.XOR<Prisma.catalog_item_modifier_groupsUpdateWithoutCatalog_itemsInput, Prisma.catalog_item_modifier_groupsUncheckedUpdateWithoutCatalog_itemsInput>;
    create: Prisma.XOR<Prisma.catalog_item_modifier_groupsCreateWithoutCatalog_itemsInput, Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutCatalog_itemsInput>;
};
export type catalog_item_modifier_groupsUpdateWithWhereUniqueWithoutCatalog_itemsInput = {
    where: Prisma.catalog_item_modifier_groupsWhereUniqueInput;
    data: Prisma.XOR<Prisma.catalog_item_modifier_groupsUpdateWithoutCatalog_itemsInput, Prisma.catalog_item_modifier_groupsUncheckedUpdateWithoutCatalog_itemsInput>;
};
export type catalog_item_modifier_groupsUpdateManyWithWhereWithoutCatalog_itemsInput = {
    where: Prisma.catalog_item_modifier_groupsScalarWhereInput;
    data: Prisma.XOR<Prisma.catalog_item_modifier_groupsUpdateManyMutationInput, Prisma.catalog_item_modifier_groupsUncheckedUpdateManyWithoutCatalog_itemsInput>;
};
export type catalog_item_modifier_groupsScalarWhereInput = {
    AND?: Prisma.catalog_item_modifier_groupsScalarWhereInput | Prisma.catalog_item_modifier_groupsScalarWhereInput[];
    OR?: Prisma.catalog_item_modifier_groupsScalarWhereInput[];
    NOT?: Prisma.catalog_item_modifier_groupsScalarWhereInput | Prisma.catalog_item_modifier_groupsScalarWhereInput[];
    id?: Prisma.UuidFilter<"catalog_item_modifier_groups"> | string;
    catalog_item_id?: Prisma.UuidFilter<"catalog_item_modifier_groups"> | string;
    modifier_group_id?: Prisma.UuidFilter<"catalog_item_modifier_groups"> | string;
    sort_order?: Prisma.IntFilter<"catalog_item_modifier_groups"> | number;
};
export type catalog_item_modifier_groupsCreateWithoutModifier_groupsInput = {
    id?: string;
    sort_order?: number;
    catalog_items: Prisma.catalog_itemsCreateNestedOneWithoutCatalog_item_modifier_groupsInput;
};
export type catalog_item_modifier_groupsUncheckedCreateWithoutModifier_groupsInput = {
    id?: string;
    catalog_item_id: string;
    sort_order?: number;
};
export type catalog_item_modifier_groupsCreateOrConnectWithoutModifier_groupsInput = {
    where: Prisma.catalog_item_modifier_groupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.catalog_item_modifier_groupsCreateWithoutModifier_groupsInput, Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutModifier_groupsInput>;
};
export type catalog_item_modifier_groupsCreateManyModifier_groupsInputEnvelope = {
    data: Prisma.catalog_item_modifier_groupsCreateManyModifier_groupsInput | Prisma.catalog_item_modifier_groupsCreateManyModifier_groupsInput[];
    skipDuplicates?: boolean;
};
export type catalog_item_modifier_groupsUpsertWithWhereUniqueWithoutModifier_groupsInput = {
    where: Prisma.catalog_item_modifier_groupsWhereUniqueInput;
    update: Prisma.XOR<Prisma.catalog_item_modifier_groupsUpdateWithoutModifier_groupsInput, Prisma.catalog_item_modifier_groupsUncheckedUpdateWithoutModifier_groupsInput>;
    create: Prisma.XOR<Prisma.catalog_item_modifier_groupsCreateWithoutModifier_groupsInput, Prisma.catalog_item_modifier_groupsUncheckedCreateWithoutModifier_groupsInput>;
};
export type catalog_item_modifier_groupsUpdateWithWhereUniqueWithoutModifier_groupsInput = {
    where: Prisma.catalog_item_modifier_groupsWhereUniqueInput;
    data: Prisma.XOR<Prisma.catalog_item_modifier_groupsUpdateWithoutModifier_groupsInput, Prisma.catalog_item_modifier_groupsUncheckedUpdateWithoutModifier_groupsInput>;
};
export type catalog_item_modifier_groupsUpdateManyWithWhereWithoutModifier_groupsInput = {
    where: Prisma.catalog_item_modifier_groupsScalarWhereInput;
    data: Prisma.XOR<Prisma.catalog_item_modifier_groupsUpdateManyMutationInput, Prisma.catalog_item_modifier_groupsUncheckedUpdateManyWithoutModifier_groupsInput>;
};
export type catalog_item_modifier_groupsCreateManyCatalog_itemsInput = {
    id?: string;
    modifier_group_id: string;
    sort_order?: number;
};
export type catalog_item_modifier_groupsUpdateWithoutCatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    modifier_groups?: Prisma.modifier_groupsUpdateOneRequiredWithoutCatalog_item_modifier_groupsNestedInput;
};
export type catalog_item_modifier_groupsUncheckedUpdateWithoutCatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_id?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type catalog_item_modifier_groupsUncheckedUpdateManyWithoutCatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_id?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type catalog_item_modifier_groupsCreateManyModifier_groupsInput = {
    id?: string;
    catalog_item_id: string;
    sort_order?: number;
};
export type catalog_item_modifier_groupsUpdateWithoutModifier_groupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    catalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutCatalog_item_modifier_groupsNestedInput;
};
export type catalog_item_modifier_groupsUncheckedUpdateWithoutModifier_groupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type catalog_item_modifier_groupsUncheckedUpdateManyWithoutModifier_groupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type catalog_item_modifier_groupsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    catalog_item_id?: boolean;
    modifier_group_id?: boolean;
    sort_order?: boolean;
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    modifier_groups?: boolean | Prisma.modifier_groupsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["catalog_item_modifier_groups"]>;
export type catalog_item_modifier_groupsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    catalog_item_id?: boolean;
    modifier_group_id?: boolean;
    sort_order?: boolean;
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    modifier_groups?: boolean | Prisma.modifier_groupsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["catalog_item_modifier_groups"]>;
export type catalog_item_modifier_groupsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    catalog_item_id?: boolean;
    modifier_group_id?: boolean;
    sort_order?: boolean;
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    modifier_groups?: boolean | Prisma.modifier_groupsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["catalog_item_modifier_groups"]>;
export type catalog_item_modifier_groupsSelectScalar = {
    id?: boolean;
    catalog_item_id?: boolean;
    modifier_group_id?: boolean;
    sort_order?: boolean;
};
export type catalog_item_modifier_groupsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "catalog_item_id" | "modifier_group_id" | "sort_order", ExtArgs["result"]["catalog_item_modifier_groups"]>;
export type catalog_item_modifier_groupsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    modifier_groups?: boolean | Prisma.modifier_groupsDefaultArgs<ExtArgs>;
};
export type catalog_item_modifier_groupsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    modifier_groups?: boolean | Prisma.modifier_groupsDefaultArgs<ExtArgs>;
};
export type catalog_item_modifier_groupsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    modifier_groups?: boolean | Prisma.modifier_groupsDefaultArgs<ExtArgs>;
};
export type $catalog_item_modifier_groupsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "catalog_item_modifier_groups";
    objects: {
        catalog_items: Prisma.$catalog_itemsPayload<ExtArgs>;
        modifier_groups: Prisma.$modifier_groupsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        catalog_item_id: string;
        modifier_group_id: string;
        sort_order: number;
    }, ExtArgs["result"]["catalog_item_modifier_groups"]>;
    composites: {};
};
export type catalog_item_modifier_groupsGetPayload<S extends boolean | null | undefined | catalog_item_modifier_groupsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$catalog_item_modifier_groupsPayload, S>;
export type catalog_item_modifier_groupsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<catalog_item_modifier_groupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Catalog_item_modifier_groupsCountAggregateInputType | true;
};
export interface catalog_item_modifier_groupsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['catalog_item_modifier_groups'];
        meta: {
            name: 'catalog_item_modifier_groups';
        };
    };
    findUnique<T extends catalog_item_modifier_groupsFindUniqueArgs>(args: Prisma.SelectSubset<T, catalog_item_modifier_groupsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__catalog_item_modifier_groupsClient<runtime.Types.Result.GetResult<Prisma.$catalog_item_modifier_groupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends catalog_item_modifier_groupsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, catalog_item_modifier_groupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__catalog_item_modifier_groupsClient<runtime.Types.Result.GetResult<Prisma.$catalog_item_modifier_groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends catalog_item_modifier_groupsFindFirstArgs>(args?: Prisma.SelectSubset<T, catalog_item_modifier_groupsFindFirstArgs<ExtArgs>>): Prisma.Prisma__catalog_item_modifier_groupsClient<runtime.Types.Result.GetResult<Prisma.$catalog_item_modifier_groupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends catalog_item_modifier_groupsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, catalog_item_modifier_groupsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__catalog_item_modifier_groupsClient<runtime.Types.Result.GetResult<Prisma.$catalog_item_modifier_groupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends catalog_item_modifier_groupsFindManyArgs>(args?: Prisma.SelectSubset<T, catalog_item_modifier_groupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$catalog_item_modifier_groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends catalog_item_modifier_groupsCreateArgs>(args: Prisma.SelectSubset<T, catalog_item_modifier_groupsCreateArgs<ExtArgs>>): Prisma.Prisma__catalog_item_modifier_groupsClient<runtime.Types.Result.GetResult<Prisma.$catalog_item_modifier_groupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends catalog_item_modifier_groupsCreateManyArgs>(args?: Prisma.SelectSubset<T, catalog_item_modifier_groupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends catalog_item_modifier_groupsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, catalog_item_modifier_groupsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$catalog_item_modifier_groupsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends catalog_item_modifier_groupsDeleteArgs>(args: Prisma.SelectSubset<T, catalog_item_modifier_groupsDeleteArgs<ExtArgs>>): Prisma.Prisma__catalog_item_modifier_groupsClient<runtime.Types.Result.GetResult<Prisma.$catalog_item_modifier_groupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends catalog_item_modifier_groupsUpdateArgs>(args: Prisma.SelectSubset<T, catalog_item_modifier_groupsUpdateArgs<ExtArgs>>): Prisma.Prisma__catalog_item_modifier_groupsClient<runtime.Types.Result.GetResult<Prisma.$catalog_item_modifier_groupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends catalog_item_modifier_groupsDeleteManyArgs>(args?: Prisma.SelectSubset<T, catalog_item_modifier_groupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends catalog_item_modifier_groupsUpdateManyArgs>(args: Prisma.SelectSubset<T, catalog_item_modifier_groupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends catalog_item_modifier_groupsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, catalog_item_modifier_groupsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$catalog_item_modifier_groupsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends catalog_item_modifier_groupsUpsertArgs>(args: Prisma.SelectSubset<T, catalog_item_modifier_groupsUpsertArgs<ExtArgs>>): Prisma.Prisma__catalog_item_modifier_groupsClient<runtime.Types.Result.GetResult<Prisma.$catalog_item_modifier_groupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends catalog_item_modifier_groupsCountArgs>(args?: Prisma.Subset<T, catalog_item_modifier_groupsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Catalog_item_modifier_groupsCountAggregateOutputType> : number>;
    aggregate<T extends Catalog_item_modifier_groupsAggregateArgs>(args: Prisma.Subset<T, Catalog_item_modifier_groupsAggregateArgs>): Prisma.PrismaPromise<GetCatalog_item_modifier_groupsAggregateType<T>>;
    groupBy<T extends catalog_item_modifier_groupsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: catalog_item_modifier_groupsGroupByArgs['orderBy'];
    } : {
        orderBy?: catalog_item_modifier_groupsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, catalog_item_modifier_groupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCatalog_item_modifier_groupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: catalog_item_modifier_groupsFieldRefs;
}
export interface Prisma__catalog_item_modifier_groupsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    catalog_items<T extends Prisma.catalog_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.catalog_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__catalog_itemsClient<runtime.Types.Result.GetResult<Prisma.$catalog_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    modifier_groups<T extends Prisma.modifier_groupsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.modifier_groupsDefaultArgs<ExtArgs>>): Prisma.Prisma__modifier_groupsClient<runtime.Types.Result.GetResult<Prisma.$modifier_groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface catalog_item_modifier_groupsFieldRefs {
    readonly id: Prisma.FieldRef<"catalog_item_modifier_groups", 'String'>;
    readonly catalog_item_id: Prisma.FieldRef<"catalog_item_modifier_groups", 'String'>;
    readonly modifier_group_id: Prisma.FieldRef<"catalog_item_modifier_groups", 'String'>;
    readonly sort_order: Prisma.FieldRef<"catalog_item_modifier_groups", 'Int'>;
}
export type catalog_item_modifier_groupsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_modifier_groupsInclude<ExtArgs> | null;
    where: Prisma.catalog_item_modifier_groupsWhereUniqueInput;
};
export type catalog_item_modifier_groupsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_modifier_groupsInclude<ExtArgs> | null;
    where: Prisma.catalog_item_modifier_groupsWhereUniqueInput;
};
export type catalog_item_modifier_groupsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_modifier_groupsInclude<ExtArgs> | null;
    where?: Prisma.catalog_item_modifier_groupsWhereInput;
    orderBy?: Prisma.catalog_item_modifier_groupsOrderByWithRelationInput | Prisma.catalog_item_modifier_groupsOrderByWithRelationInput[];
    cursor?: Prisma.catalog_item_modifier_groupsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Catalog_item_modifier_groupsScalarFieldEnum | Prisma.Catalog_item_modifier_groupsScalarFieldEnum[];
};
export type catalog_item_modifier_groupsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_modifier_groupsInclude<ExtArgs> | null;
    where?: Prisma.catalog_item_modifier_groupsWhereInput;
    orderBy?: Prisma.catalog_item_modifier_groupsOrderByWithRelationInput | Prisma.catalog_item_modifier_groupsOrderByWithRelationInput[];
    cursor?: Prisma.catalog_item_modifier_groupsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Catalog_item_modifier_groupsScalarFieldEnum | Prisma.Catalog_item_modifier_groupsScalarFieldEnum[];
};
export type catalog_item_modifier_groupsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_modifier_groupsInclude<ExtArgs> | null;
    where?: Prisma.catalog_item_modifier_groupsWhereInput;
    orderBy?: Prisma.catalog_item_modifier_groupsOrderByWithRelationInput | Prisma.catalog_item_modifier_groupsOrderByWithRelationInput[];
    cursor?: Prisma.catalog_item_modifier_groupsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Catalog_item_modifier_groupsScalarFieldEnum | Prisma.Catalog_item_modifier_groupsScalarFieldEnum[];
};
export type catalog_item_modifier_groupsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_modifier_groupsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.catalog_item_modifier_groupsCreateInput, Prisma.catalog_item_modifier_groupsUncheckedCreateInput>;
};
export type catalog_item_modifier_groupsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.catalog_item_modifier_groupsCreateManyInput | Prisma.catalog_item_modifier_groupsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type catalog_item_modifier_groupsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_modifier_groupsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.catalog_item_modifier_groupsOmit<ExtArgs> | null;
    data: Prisma.catalog_item_modifier_groupsCreateManyInput | Prisma.catalog_item_modifier_groupsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.catalog_item_modifier_groupsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type catalog_item_modifier_groupsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_modifier_groupsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.catalog_item_modifier_groupsUpdateInput, Prisma.catalog_item_modifier_groupsUncheckedUpdateInput>;
    where: Prisma.catalog_item_modifier_groupsWhereUniqueInput;
};
export type catalog_item_modifier_groupsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.catalog_item_modifier_groupsUpdateManyMutationInput, Prisma.catalog_item_modifier_groupsUncheckedUpdateManyInput>;
    where?: Prisma.catalog_item_modifier_groupsWhereInput;
    limit?: number;
};
export type catalog_item_modifier_groupsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_modifier_groupsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.catalog_item_modifier_groupsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.catalog_item_modifier_groupsUpdateManyMutationInput, Prisma.catalog_item_modifier_groupsUncheckedUpdateManyInput>;
    where?: Prisma.catalog_item_modifier_groupsWhereInput;
    limit?: number;
    include?: Prisma.catalog_item_modifier_groupsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type catalog_item_modifier_groupsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_modifier_groupsInclude<ExtArgs> | null;
    where: Prisma.catalog_item_modifier_groupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.catalog_item_modifier_groupsCreateInput, Prisma.catalog_item_modifier_groupsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.catalog_item_modifier_groupsUpdateInput, Prisma.catalog_item_modifier_groupsUncheckedUpdateInput>;
};
export type catalog_item_modifier_groupsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_modifier_groupsInclude<ExtArgs> | null;
    where: Prisma.catalog_item_modifier_groupsWhereUniqueInput;
};
export type catalog_item_modifier_groupsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.catalog_item_modifier_groupsWhereInput;
    limit?: number;
};
export type catalog_item_modifier_groupsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_modifier_groupsInclude<ExtArgs> | null;
};
export {};
