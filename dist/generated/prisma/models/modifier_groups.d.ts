import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type modifier_groupsModel = runtime.Types.Result.DefaultSelection<Prisma.$modifier_groupsPayload>;
export type AggregateModifier_groups = {
    _count: Modifier_groupsCountAggregateOutputType | null;
    _avg: Modifier_groupsAvgAggregateOutputType | null;
    _sum: Modifier_groupsSumAggregateOutputType | null;
    _min: Modifier_groupsMinAggregateOutputType | null;
    _max: Modifier_groupsMaxAggregateOutputType | null;
};
export type Modifier_groupsAvgAggregateOutputType = {
    min_select: number | null;
    max_select: number | null;
    sort_order: number | null;
};
export type Modifier_groupsSumAggregateOutputType = {
    min_select: number | null;
    max_select: number | null;
    sort_order: number | null;
};
export type Modifier_groupsMinAggregateOutputType = {
    id: string | null;
    store_id: string | null;
    name: string | null;
    min_select: number | null;
    max_select: number | null;
    is_required: boolean | null;
    sort_order: number | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Modifier_groupsMaxAggregateOutputType = {
    id: string | null;
    store_id: string | null;
    name: string | null;
    min_select: number | null;
    max_select: number | null;
    is_required: boolean | null;
    sort_order: number | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Modifier_groupsCountAggregateOutputType = {
    id: number;
    store_id: number;
    name: number;
    min_select: number;
    max_select: number;
    is_required: number;
    sort_order: number;
    is_active: number;
    created_at: number;
    _all: number;
};
export type Modifier_groupsAvgAggregateInputType = {
    min_select?: true;
    max_select?: true;
    sort_order?: true;
};
export type Modifier_groupsSumAggregateInputType = {
    min_select?: true;
    max_select?: true;
    sort_order?: true;
};
export type Modifier_groupsMinAggregateInputType = {
    id?: true;
    store_id?: true;
    name?: true;
    min_select?: true;
    max_select?: true;
    is_required?: true;
    sort_order?: true;
    is_active?: true;
    created_at?: true;
};
export type Modifier_groupsMaxAggregateInputType = {
    id?: true;
    store_id?: true;
    name?: true;
    min_select?: true;
    max_select?: true;
    is_required?: true;
    sort_order?: true;
    is_active?: true;
    created_at?: true;
};
export type Modifier_groupsCountAggregateInputType = {
    id?: true;
    store_id?: true;
    name?: true;
    min_select?: true;
    max_select?: true;
    is_required?: true;
    sort_order?: true;
    is_active?: true;
    created_at?: true;
    _all?: true;
};
export type Modifier_groupsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.modifier_groupsWhereInput;
    orderBy?: Prisma.modifier_groupsOrderByWithRelationInput | Prisma.modifier_groupsOrderByWithRelationInput[];
    cursor?: Prisma.modifier_groupsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Modifier_groupsCountAggregateInputType;
    _avg?: Modifier_groupsAvgAggregateInputType;
    _sum?: Modifier_groupsSumAggregateInputType;
    _min?: Modifier_groupsMinAggregateInputType;
    _max?: Modifier_groupsMaxAggregateInputType;
};
export type GetModifier_groupsAggregateType<T extends Modifier_groupsAggregateArgs> = {
    [P in keyof T & keyof AggregateModifier_groups]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateModifier_groups[P]> : Prisma.GetScalarType<T[P], AggregateModifier_groups[P]>;
};
export type modifier_groupsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.modifier_groupsWhereInput;
    orderBy?: Prisma.modifier_groupsOrderByWithAggregationInput | Prisma.modifier_groupsOrderByWithAggregationInput[];
    by: Prisma.Modifier_groupsScalarFieldEnum[] | Prisma.Modifier_groupsScalarFieldEnum;
    having?: Prisma.modifier_groupsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Modifier_groupsCountAggregateInputType | true;
    _avg?: Modifier_groupsAvgAggregateInputType;
    _sum?: Modifier_groupsSumAggregateInputType;
    _min?: Modifier_groupsMinAggregateInputType;
    _max?: Modifier_groupsMaxAggregateInputType;
};
export type Modifier_groupsGroupByOutputType = {
    id: string;
    store_id: string;
    name: string;
    min_select: number;
    max_select: number;
    is_required: boolean;
    sort_order: number;
    is_active: boolean;
    created_at: Date;
    _count: Modifier_groupsCountAggregateOutputType | null;
    _avg: Modifier_groupsAvgAggregateOutputType | null;
    _sum: Modifier_groupsSumAggregateOutputType | null;
    _min: Modifier_groupsMinAggregateOutputType | null;
    _max: Modifier_groupsMaxAggregateOutputType | null;
};
type GetModifier_groupsGroupByPayload<T extends modifier_groupsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Modifier_groupsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Modifier_groupsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Modifier_groupsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Modifier_groupsGroupByOutputType[P]>;
}>>;
export type modifier_groupsWhereInput = {
    AND?: Prisma.modifier_groupsWhereInput | Prisma.modifier_groupsWhereInput[];
    OR?: Prisma.modifier_groupsWhereInput[];
    NOT?: Prisma.modifier_groupsWhereInput | Prisma.modifier_groupsWhereInput[];
    id?: Prisma.UuidFilter<"modifier_groups"> | string;
    store_id?: Prisma.UuidFilter<"modifier_groups"> | string;
    name?: Prisma.StringFilter<"modifier_groups"> | string;
    min_select?: Prisma.IntFilter<"modifier_groups"> | number;
    max_select?: Prisma.IntFilter<"modifier_groups"> | number;
    is_required?: Prisma.BoolFilter<"modifier_groups"> | boolean;
    sort_order?: Prisma.IntFilter<"modifier_groups"> | number;
    is_active?: Prisma.BoolFilter<"modifier_groups"> | boolean;
    created_at?: Prisma.DateTimeFilter<"modifier_groups"> | Date | string;
    cart_item_modifiers?: Prisma.Cart_item_modifiersListRelationFilter;
    catalog_item_modifier_groups?: Prisma.Catalog_item_modifier_groupsListRelationFilter;
    stores?: Prisma.XOR<Prisma.StoresScalarRelationFilter, Prisma.storesWhereInput>;
    modifier_options?: Prisma.Modifier_optionsListRelationFilter;
};
export type modifier_groupsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    min_select?: Prisma.SortOrder;
    max_select?: Prisma.SortOrder;
    is_required?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    cart_item_modifiers?: Prisma.cart_item_modifiersOrderByRelationAggregateInput;
    catalog_item_modifier_groups?: Prisma.catalog_item_modifier_groupsOrderByRelationAggregateInput;
    stores?: Prisma.storesOrderByWithRelationInput;
    modifier_options?: Prisma.modifier_optionsOrderByRelationAggregateInput;
};
export type modifier_groupsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.modifier_groupsWhereInput | Prisma.modifier_groupsWhereInput[];
    OR?: Prisma.modifier_groupsWhereInput[];
    NOT?: Prisma.modifier_groupsWhereInput | Prisma.modifier_groupsWhereInput[];
    store_id?: Prisma.UuidFilter<"modifier_groups"> | string;
    name?: Prisma.StringFilter<"modifier_groups"> | string;
    min_select?: Prisma.IntFilter<"modifier_groups"> | number;
    max_select?: Prisma.IntFilter<"modifier_groups"> | number;
    is_required?: Prisma.BoolFilter<"modifier_groups"> | boolean;
    sort_order?: Prisma.IntFilter<"modifier_groups"> | number;
    is_active?: Prisma.BoolFilter<"modifier_groups"> | boolean;
    created_at?: Prisma.DateTimeFilter<"modifier_groups"> | Date | string;
    cart_item_modifiers?: Prisma.Cart_item_modifiersListRelationFilter;
    catalog_item_modifier_groups?: Prisma.Catalog_item_modifier_groupsListRelationFilter;
    stores?: Prisma.XOR<Prisma.StoresScalarRelationFilter, Prisma.storesWhereInput>;
    modifier_options?: Prisma.Modifier_optionsListRelationFilter;
}, "id">;
export type modifier_groupsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    min_select?: Prisma.SortOrder;
    max_select?: Prisma.SortOrder;
    is_required?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.modifier_groupsCountOrderByAggregateInput;
    _avg?: Prisma.modifier_groupsAvgOrderByAggregateInput;
    _max?: Prisma.modifier_groupsMaxOrderByAggregateInput;
    _min?: Prisma.modifier_groupsMinOrderByAggregateInput;
    _sum?: Prisma.modifier_groupsSumOrderByAggregateInput;
};
export type modifier_groupsScalarWhereWithAggregatesInput = {
    AND?: Prisma.modifier_groupsScalarWhereWithAggregatesInput | Prisma.modifier_groupsScalarWhereWithAggregatesInput[];
    OR?: Prisma.modifier_groupsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.modifier_groupsScalarWhereWithAggregatesInput | Prisma.modifier_groupsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"modifier_groups"> | string;
    store_id?: Prisma.UuidWithAggregatesFilter<"modifier_groups"> | string;
    name?: Prisma.StringWithAggregatesFilter<"modifier_groups"> | string;
    min_select?: Prisma.IntWithAggregatesFilter<"modifier_groups"> | number;
    max_select?: Prisma.IntWithAggregatesFilter<"modifier_groups"> | number;
    is_required?: Prisma.BoolWithAggregatesFilter<"modifier_groups"> | boolean;
    sort_order?: Prisma.IntWithAggregatesFilter<"modifier_groups"> | number;
    is_active?: Prisma.BoolWithAggregatesFilter<"modifier_groups"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"modifier_groups"> | Date | string;
};
export type modifier_groupsCreateInput = {
    id?: string;
    name: string;
    min_select?: number;
    max_select?: number;
    is_required?: boolean;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersCreateNestedManyWithoutModifier_groupsInput;
    catalog_item_modifier_groups?: Prisma.catalog_item_modifier_groupsCreateNestedManyWithoutModifier_groupsInput;
    stores: Prisma.storesCreateNestedOneWithoutModifier_groupsInput;
    modifier_options?: Prisma.modifier_optionsCreateNestedManyWithoutModifier_groupsInput;
};
export type modifier_groupsUncheckedCreateInput = {
    id?: string;
    store_id: string;
    name: string;
    min_select?: number;
    max_select?: number;
    is_required?: boolean;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedCreateNestedManyWithoutModifier_groupsInput;
    catalog_item_modifier_groups?: Prisma.catalog_item_modifier_groupsUncheckedCreateNestedManyWithoutModifier_groupsInput;
    modifier_options?: Prisma.modifier_optionsUncheckedCreateNestedManyWithoutModifier_groupsInput;
};
export type modifier_groupsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    min_select?: Prisma.IntFieldUpdateOperationsInput | number;
    max_select?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUpdateManyWithoutModifier_groupsNestedInput;
    catalog_item_modifier_groups?: Prisma.catalog_item_modifier_groupsUpdateManyWithoutModifier_groupsNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutModifier_groupsNestedInput;
    modifier_options?: Prisma.modifier_optionsUpdateManyWithoutModifier_groupsNestedInput;
};
export type modifier_groupsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    min_select?: Prisma.IntFieldUpdateOperationsInput | number;
    max_select?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedUpdateManyWithoutModifier_groupsNestedInput;
    catalog_item_modifier_groups?: Prisma.catalog_item_modifier_groupsUncheckedUpdateManyWithoutModifier_groupsNestedInput;
    modifier_options?: Prisma.modifier_optionsUncheckedUpdateManyWithoutModifier_groupsNestedInput;
};
export type modifier_groupsCreateManyInput = {
    id?: string;
    store_id: string;
    name: string;
    min_select?: number;
    max_select?: number;
    is_required?: boolean;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
};
export type modifier_groupsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    min_select?: Prisma.IntFieldUpdateOperationsInput | number;
    max_select?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type modifier_groupsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    min_select?: Prisma.IntFieldUpdateOperationsInput | number;
    max_select?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Modifier_groupsScalarRelationFilter = {
    is?: Prisma.modifier_groupsWhereInput;
    isNot?: Prisma.modifier_groupsWhereInput;
};
export type modifier_groupsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    min_select?: Prisma.SortOrder;
    max_select?: Prisma.SortOrder;
    is_required?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type modifier_groupsAvgOrderByAggregateInput = {
    min_select?: Prisma.SortOrder;
    max_select?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type modifier_groupsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    min_select?: Prisma.SortOrder;
    max_select?: Prisma.SortOrder;
    is_required?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type modifier_groupsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    min_select?: Prisma.SortOrder;
    max_select?: Prisma.SortOrder;
    is_required?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type modifier_groupsSumOrderByAggregateInput = {
    min_select?: Prisma.SortOrder;
    max_select?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type Modifier_groupsListRelationFilter = {
    every?: Prisma.modifier_groupsWhereInput;
    some?: Prisma.modifier_groupsWhereInput;
    none?: Prisma.modifier_groupsWhereInput;
};
export type modifier_groupsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type modifier_groupsCreateNestedOneWithoutCart_item_modifiersInput = {
    create?: Prisma.XOR<Prisma.modifier_groupsCreateWithoutCart_item_modifiersInput, Prisma.modifier_groupsUncheckedCreateWithoutCart_item_modifiersInput>;
    connectOrCreate?: Prisma.modifier_groupsCreateOrConnectWithoutCart_item_modifiersInput;
    connect?: Prisma.modifier_groupsWhereUniqueInput;
};
export type modifier_groupsUpdateOneRequiredWithoutCart_item_modifiersNestedInput = {
    create?: Prisma.XOR<Prisma.modifier_groupsCreateWithoutCart_item_modifiersInput, Prisma.modifier_groupsUncheckedCreateWithoutCart_item_modifiersInput>;
    connectOrCreate?: Prisma.modifier_groupsCreateOrConnectWithoutCart_item_modifiersInput;
    upsert?: Prisma.modifier_groupsUpsertWithoutCart_item_modifiersInput;
    connect?: Prisma.modifier_groupsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.modifier_groupsUpdateToOneWithWhereWithoutCart_item_modifiersInput, Prisma.modifier_groupsUpdateWithoutCart_item_modifiersInput>, Prisma.modifier_groupsUncheckedUpdateWithoutCart_item_modifiersInput>;
};
export type modifier_groupsCreateNestedOneWithoutCatalog_item_modifier_groupsInput = {
    create?: Prisma.XOR<Prisma.modifier_groupsCreateWithoutCatalog_item_modifier_groupsInput, Prisma.modifier_groupsUncheckedCreateWithoutCatalog_item_modifier_groupsInput>;
    connectOrCreate?: Prisma.modifier_groupsCreateOrConnectWithoutCatalog_item_modifier_groupsInput;
    connect?: Prisma.modifier_groupsWhereUniqueInput;
};
export type modifier_groupsUpdateOneRequiredWithoutCatalog_item_modifier_groupsNestedInput = {
    create?: Prisma.XOR<Prisma.modifier_groupsCreateWithoutCatalog_item_modifier_groupsInput, Prisma.modifier_groupsUncheckedCreateWithoutCatalog_item_modifier_groupsInput>;
    connectOrCreate?: Prisma.modifier_groupsCreateOrConnectWithoutCatalog_item_modifier_groupsInput;
    upsert?: Prisma.modifier_groupsUpsertWithoutCatalog_item_modifier_groupsInput;
    connect?: Prisma.modifier_groupsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.modifier_groupsUpdateToOneWithWhereWithoutCatalog_item_modifier_groupsInput, Prisma.modifier_groupsUpdateWithoutCatalog_item_modifier_groupsInput>, Prisma.modifier_groupsUncheckedUpdateWithoutCatalog_item_modifier_groupsInput>;
};
export type modifier_groupsCreateNestedOneWithoutModifier_optionsInput = {
    create?: Prisma.XOR<Prisma.modifier_groupsCreateWithoutModifier_optionsInput, Prisma.modifier_groupsUncheckedCreateWithoutModifier_optionsInput>;
    connectOrCreate?: Prisma.modifier_groupsCreateOrConnectWithoutModifier_optionsInput;
    connect?: Prisma.modifier_groupsWhereUniqueInput;
};
export type modifier_groupsUpdateOneRequiredWithoutModifier_optionsNestedInput = {
    create?: Prisma.XOR<Prisma.modifier_groupsCreateWithoutModifier_optionsInput, Prisma.modifier_groupsUncheckedCreateWithoutModifier_optionsInput>;
    connectOrCreate?: Prisma.modifier_groupsCreateOrConnectWithoutModifier_optionsInput;
    upsert?: Prisma.modifier_groupsUpsertWithoutModifier_optionsInput;
    connect?: Prisma.modifier_groupsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.modifier_groupsUpdateToOneWithWhereWithoutModifier_optionsInput, Prisma.modifier_groupsUpdateWithoutModifier_optionsInput>, Prisma.modifier_groupsUncheckedUpdateWithoutModifier_optionsInput>;
};
export type modifier_groupsCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.modifier_groupsCreateWithoutStoresInput, Prisma.modifier_groupsUncheckedCreateWithoutStoresInput> | Prisma.modifier_groupsCreateWithoutStoresInput[] | Prisma.modifier_groupsUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.modifier_groupsCreateOrConnectWithoutStoresInput | Prisma.modifier_groupsCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.modifier_groupsCreateManyStoresInputEnvelope;
    connect?: Prisma.modifier_groupsWhereUniqueInput | Prisma.modifier_groupsWhereUniqueInput[];
};
export type modifier_groupsUncheckedCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.modifier_groupsCreateWithoutStoresInput, Prisma.modifier_groupsUncheckedCreateWithoutStoresInput> | Prisma.modifier_groupsCreateWithoutStoresInput[] | Prisma.modifier_groupsUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.modifier_groupsCreateOrConnectWithoutStoresInput | Prisma.modifier_groupsCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.modifier_groupsCreateManyStoresInputEnvelope;
    connect?: Prisma.modifier_groupsWhereUniqueInput | Prisma.modifier_groupsWhereUniqueInput[];
};
export type modifier_groupsUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.modifier_groupsCreateWithoutStoresInput, Prisma.modifier_groupsUncheckedCreateWithoutStoresInput> | Prisma.modifier_groupsCreateWithoutStoresInput[] | Prisma.modifier_groupsUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.modifier_groupsCreateOrConnectWithoutStoresInput | Prisma.modifier_groupsCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.modifier_groupsUpsertWithWhereUniqueWithoutStoresInput | Prisma.modifier_groupsUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.modifier_groupsCreateManyStoresInputEnvelope;
    set?: Prisma.modifier_groupsWhereUniqueInput | Prisma.modifier_groupsWhereUniqueInput[];
    disconnect?: Prisma.modifier_groupsWhereUniqueInput | Prisma.modifier_groupsWhereUniqueInput[];
    delete?: Prisma.modifier_groupsWhereUniqueInput | Prisma.modifier_groupsWhereUniqueInput[];
    connect?: Prisma.modifier_groupsWhereUniqueInput | Prisma.modifier_groupsWhereUniqueInput[];
    update?: Prisma.modifier_groupsUpdateWithWhereUniqueWithoutStoresInput | Prisma.modifier_groupsUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.modifier_groupsUpdateManyWithWhereWithoutStoresInput | Prisma.modifier_groupsUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.modifier_groupsScalarWhereInput | Prisma.modifier_groupsScalarWhereInput[];
};
export type modifier_groupsUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.modifier_groupsCreateWithoutStoresInput, Prisma.modifier_groupsUncheckedCreateWithoutStoresInput> | Prisma.modifier_groupsCreateWithoutStoresInput[] | Prisma.modifier_groupsUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.modifier_groupsCreateOrConnectWithoutStoresInput | Prisma.modifier_groupsCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.modifier_groupsUpsertWithWhereUniqueWithoutStoresInput | Prisma.modifier_groupsUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.modifier_groupsCreateManyStoresInputEnvelope;
    set?: Prisma.modifier_groupsWhereUniqueInput | Prisma.modifier_groupsWhereUniqueInput[];
    disconnect?: Prisma.modifier_groupsWhereUniqueInput | Prisma.modifier_groupsWhereUniqueInput[];
    delete?: Prisma.modifier_groupsWhereUniqueInput | Prisma.modifier_groupsWhereUniqueInput[];
    connect?: Prisma.modifier_groupsWhereUniqueInput | Prisma.modifier_groupsWhereUniqueInput[];
    update?: Prisma.modifier_groupsUpdateWithWhereUniqueWithoutStoresInput | Prisma.modifier_groupsUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.modifier_groupsUpdateManyWithWhereWithoutStoresInput | Prisma.modifier_groupsUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.modifier_groupsScalarWhereInput | Prisma.modifier_groupsScalarWhereInput[];
};
export type modifier_groupsCreateWithoutCart_item_modifiersInput = {
    id?: string;
    name: string;
    min_select?: number;
    max_select?: number;
    is_required?: boolean;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    catalog_item_modifier_groups?: Prisma.catalog_item_modifier_groupsCreateNestedManyWithoutModifier_groupsInput;
    stores: Prisma.storesCreateNestedOneWithoutModifier_groupsInput;
    modifier_options?: Prisma.modifier_optionsCreateNestedManyWithoutModifier_groupsInput;
};
export type modifier_groupsUncheckedCreateWithoutCart_item_modifiersInput = {
    id?: string;
    store_id: string;
    name: string;
    min_select?: number;
    max_select?: number;
    is_required?: boolean;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    catalog_item_modifier_groups?: Prisma.catalog_item_modifier_groupsUncheckedCreateNestedManyWithoutModifier_groupsInput;
    modifier_options?: Prisma.modifier_optionsUncheckedCreateNestedManyWithoutModifier_groupsInput;
};
export type modifier_groupsCreateOrConnectWithoutCart_item_modifiersInput = {
    where: Prisma.modifier_groupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.modifier_groupsCreateWithoutCart_item_modifiersInput, Prisma.modifier_groupsUncheckedCreateWithoutCart_item_modifiersInput>;
};
export type modifier_groupsUpsertWithoutCart_item_modifiersInput = {
    update: Prisma.XOR<Prisma.modifier_groupsUpdateWithoutCart_item_modifiersInput, Prisma.modifier_groupsUncheckedUpdateWithoutCart_item_modifiersInput>;
    create: Prisma.XOR<Prisma.modifier_groupsCreateWithoutCart_item_modifiersInput, Prisma.modifier_groupsUncheckedCreateWithoutCart_item_modifiersInput>;
    where?: Prisma.modifier_groupsWhereInput;
};
export type modifier_groupsUpdateToOneWithWhereWithoutCart_item_modifiersInput = {
    where?: Prisma.modifier_groupsWhereInput;
    data: Prisma.XOR<Prisma.modifier_groupsUpdateWithoutCart_item_modifiersInput, Prisma.modifier_groupsUncheckedUpdateWithoutCart_item_modifiersInput>;
};
export type modifier_groupsUpdateWithoutCart_item_modifiersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    min_select?: Prisma.IntFieldUpdateOperationsInput | number;
    max_select?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    catalog_item_modifier_groups?: Prisma.catalog_item_modifier_groupsUpdateManyWithoutModifier_groupsNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutModifier_groupsNestedInput;
    modifier_options?: Prisma.modifier_optionsUpdateManyWithoutModifier_groupsNestedInput;
};
export type modifier_groupsUncheckedUpdateWithoutCart_item_modifiersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    min_select?: Prisma.IntFieldUpdateOperationsInput | number;
    max_select?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    catalog_item_modifier_groups?: Prisma.catalog_item_modifier_groupsUncheckedUpdateManyWithoutModifier_groupsNestedInput;
    modifier_options?: Prisma.modifier_optionsUncheckedUpdateManyWithoutModifier_groupsNestedInput;
};
export type modifier_groupsCreateWithoutCatalog_item_modifier_groupsInput = {
    id?: string;
    name: string;
    min_select?: number;
    max_select?: number;
    is_required?: boolean;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersCreateNestedManyWithoutModifier_groupsInput;
    stores: Prisma.storesCreateNestedOneWithoutModifier_groupsInput;
    modifier_options?: Prisma.modifier_optionsCreateNestedManyWithoutModifier_groupsInput;
};
export type modifier_groupsUncheckedCreateWithoutCatalog_item_modifier_groupsInput = {
    id?: string;
    store_id: string;
    name: string;
    min_select?: number;
    max_select?: number;
    is_required?: boolean;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedCreateNestedManyWithoutModifier_groupsInput;
    modifier_options?: Prisma.modifier_optionsUncheckedCreateNestedManyWithoutModifier_groupsInput;
};
export type modifier_groupsCreateOrConnectWithoutCatalog_item_modifier_groupsInput = {
    where: Prisma.modifier_groupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.modifier_groupsCreateWithoutCatalog_item_modifier_groupsInput, Prisma.modifier_groupsUncheckedCreateWithoutCatalog_item_modifier_groupsInput>;
};
export type modifier_groupsUpsertWithoutCatalog_item_modifier_groupsInput = {
    update: Prisma.XOR<Prisma.modifier_groupsUpdateWithoutCatalog_item_modifier_groupsInput, Prisma.modifier_groupsUncheckedUpdateWithoutCatalog_item_modifier_groupsInput>;
    create: Prisma.XOR<Prisma.modifier_groupsCreateWithoutCatalog_item_modifier_groupsInput, Prisma.modifier_groupsUncheckedCreateWithoutCatalog_item_modifier_groupsInput>;
    where?: Prisma.modifier_groupsWhereInput;
};
export type modifier_groupsUpdateToOneWithWhereWithoutCatalog_item_modifier_groupsInput = {
    where?: Prisma.modifier_groupsWhereInput;
    data: Prisma.XOR<Prisma.modifier_groupsUpdateWithoutCatalog_item_modifier_groupsInput, Prisma.modifier_groupsUncheckedUpdateWithoutCatalog_item_modifier_groupsInput>;
};
export type modifier_groupsUpdateWithoutCatalog_item_modifier_groupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    min_select?: Prisma.IntFieldUpdateOperationsInput | number;
    max_select?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUpdateManyWithoutModifier_groupsNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutModifier_groupsNestedInput;
    modifier_options?: Prisma.modifier_optionsUpdateManyWithoutModifier_groupsNestedInput;
};
export type modifier_groupsUncheckedUpdateWithoutCatalog_item_modifier_groupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    min_select?: Prisma.IntFieldUpdateOperationsInput | number;
    max_select?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedUpdateManyWithoutModifier_groupsNestedInput;
    modifier_options?: Prisma.modifier_optionsUncheckedUpdateManyWithoutModifier_groupsNestedInput;
};
export type modifier_groupsCreateWithoutModifier_optionsInput = {
    id?: string;
    name: string;
    min_select?: number;
    max_select?: number;
    is_required?: boolean;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersCreateNestedManyWithoutModifier_groupsInput;
    catalog_item_modifier_groups?: Prisma.catalog_item_modifier_groupsCreateNestedManyWithoutModifier_groupsInput;
    stores: Prisma.storesCreateNestedOneWithoutModifier_groupsInput;
};
export type modifier_groupsUncheckedCreateWithoutModifier_optionsInput = {
    id?: string;
    store_id: string;
    name: string;
    min_select?: number;
    max_select?: number;
    is_required?: boolean;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedCreateNestedManyWithoutModifier_groupsInput;
    catalog_item_modifier_groups?: Prisma.catalog_item_modifier_groupsUncheckedCreateNestedManyWithoutModifier_groupsInput;
};
export type modifier_groupsCreateOrConnectWithoutModifier_optionsInput = {
    where: Prisma.modifier_groupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.modifier_groupsCreateWithoutModifier_optionsInput, Prisma.modifier_groupsUncheckedCreateWithoutModifier_optionsInput>;
};
export type modifier_groupsUpsertWithoutModifier_optionsInput = {
    update: Prisma.XOR<Prisma.modifier_groupsUpdateWithoutModifier_optionsInput, Prisma.modifier_groupsUncheckedUpdateWithoutModifier_optionsInput>;
    create: Prisma.XOR<Prisma.modifier_groupsCreateWithoutModifier_optionsInput, Prisma.modifier_groupsUncheckedCreateWithoutModifier_optionsInput>;
    where?: Prisma.modifier_groupsWhereInput;
};
export type modifier_groupsUpdateToOneWithWhereWithoutModifier_optionsInput = {
    where?: Prisma.modifier_groupsWhereInput;
    data: Prisma.XOR<Prisma.modifier_groupsUpdateWithoutModifier_optionsInput, Prisma.modifier_groupsUncheckedUpdateWithoutModifier_optionsInput>;
};
export type modifier_groupsUpdateWithoutModifier_optionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    min_select?: Prisma.IntFieldUpdateOperationsInput | number;
    max_select?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUpdateManyWithoutModifier_groupsNestedInput;
    catalog_item_modifier_groups?: Prisma.catalog_item_modifier_groupsUpdateManyWithoutModifier_groupsNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutModifier_groupsNestedInput;
};
export type modifier_groupsUncheckedUpdateWithoutModifier_optionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    min_select?: Prisma.IntFieldUpdateOperationsInput | number;
    max_select?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedUpdateManyWithoutModifier_groupsNestedInput;
    catalog_item_modifier_groups?: Prisma.catalog_item_modifier_groupsUncheckedUpdateManyWithoutModifier_groupsNestedInput;
};
export type modifier_groupsCreateWithoutStoresInput = {
    id?: string;
    name: string;
    min_select?: number;
    max_select?: number;
    is_required?: boolean;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersCreateNestedManyWithoutModifier_groupsInput;
    catalog_item_modifier_groups?: Prisma.catalog_item_modifier_groupsCreateNestedManyWithoutModifier_groupsInput;
    modifier_options?: Prisma.modifier_optionsCreateNestedManyWithoutModifier_groupsInput;
};
export type modifier_groupsUncheckedCreateWithoutStoresInput = {
    id?: string;
    name: string;
    min_select?: number;
    max_select?: number;
    is_required?: boolean;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedCreateNestedManyWithoutModifier_groupsInput;
    catalog_item_modifier_groups?: Prisma.catalog_item_modifier_groupsUncheckedCreateNestedManyWithoutModifier_groupsInput;
    modifier_options?: Prisma.modifier_optionsUncheckedCreateNestedManyWithoutModifier_groupsInput;
};
export type modifier_groupsCreateOrConnectWithoutStoresInput = {
    where: Prisma.modifier_groupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.modifier_groupsCreateWithoutStoresInput, Prisma.modifier_groupsUncheckedCreateWithoutStoresInput>;
};
export type modifier_groupsCreateManyStoresInputEnvelope = {
    data: Prisma.modifier_groupsCreateManyStoresInput | Prisma.modifier_groupsCreateManyStoresInput[];
    skipDuplicates?: boolean;
};
export type modifier_groupsUpsertWithWhereUniqueWithoutStoresInput = {
    where: Prisma.modifier_groupsWhereUniqueInput;
    update: Prisma.XOR<Prisma.modifier_groupsUpdateWithoutStoresInput, Prisma.modifier_groupsUncheckedUpdateWithoutStoresInput>;
    create: Prisma.XOR<Prisma.modifier_groupsCreateWithoutStoresInput, Prisma.modifier_groupsUncheckedCreateWithoutStoresInput>;
};
export type modifier_groupsUpdateWithWhereUniqueWithoutStoresInput = {
    where: Prisma.modifier_groupsWhereUniqueInput;
    data: Prisma.XOR<Prisma.modifier_groupsUpdateWithoutStoresInput, Prisma.modifier_groupsUncheckedUpdateWithoutStoresInput>;
};
export type modifier_groupsUpdateManyWithWhereWithoutStoresInput = {
    where: Prisma.modifier_groupsScalarWhereInput;
    data: Prisma.XOR<Prisma.modifier_groupsUpdateManyMutationInput, Prisma.modifier_groupsUncheckedUpdateManyWithoutStoresInput>;
};
export type modifier_groupsScalarWhereInput = {
    AND?: Prisma.modifier_groupsScalarWhereInput | Prisma.modifier_groupsScalarWhereInput[];
    OR?: Prisma.modifier_groupsScalarWhereInput[];
    NOT?: Prisma.modifier_groupsScalarWhereInput | Prisma.modifier_groupsScalarWhereInput[];
    id?: Prisma.UuidFilter<"modifier_groups"> | string;
    store_id?: Prisma.UuidFilter<"modifier_groups"> | string;
    name?: Prisma.StringFilter<"modifier_groups"> | string;
    min_select?: Prisma.IntFilter<"modifier_groups"> | number;
    max_select?: Prisma.IntFilter<"modifier_groups"> | number;
    is_required?: Prisma.BoolFilter<"modifier_groups"> | boolean;
    sort_order?: Prisma.IntFilter<"modifier_groups"> | number;
    is_active?: Prisma.BoolFilter<"modifier_groups"> | boolean;
    created_at?: Prisma.DateTimeFilter<"modifier_groups"> | Date | string;
};
export type modifier_groupsCreateManyStoresInput = {
    id?: string;
    name: string;
    min_select?: number;
    max_select?: number;
    is_required?: boolean;
    sort_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
};
export type modifier_groupsUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    min_select?: Prisma.IntFieldUpdateOperationsInput | number;
    max_select?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUpdateManyWithoutModifier_groupsNestedInput;
    catalog_item_modifier_groups?: Prisma.catalog_item_modifier_groupsUpdateManyWithoutModifier_groupsNestedInput;
    modifier_options?: Prisma.modifier_optionsUpdateManyWithoutModifier_groupsNestedInput;
};
export type modifier_groupsUncheckedUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    min_select?: Prisma.IntFieldUpdateOperationsInput | number;
    max_select?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedUpdateManyWithoutModifier_groupsNestedInput;
    catalog_item_modifier_groups?: Prisma.catalog_item_modifier_groupsUncheckedUpdateManyWithoutModifier_groupsNestedInput;
    modifier_options?: Prisma.modifier_optionsUncheckedUpdateManyWithoutModifier_groupsNestedInput;
};
export type modifier_groupsUncheckedUpdateManyWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    min_select?: Prisma.IntFieldUpdateOperationsInput | number;
    max_select?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Modifier_groupsCountOutputType = {
    cart_item_modifiers: number;
    catalog_item_modifier_groups: number;
    modifier_options: number;
};
export type Modifier_groupsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cart_item_modifiers?: boolean | Modifier_groupsCountOutputTypeCountCart_item_modifiersArgs;
    catalog_item_modifier_groups?: boolean | Modifier_groupsCountOutputTypeCountCatalog_item_modifier_groupsArgs;
    modifier_options?: boolean | Modifier_groupsCountOutputTypeCountModifier_optionsArgs;
};
export type Modifier_groupsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Modifier_groupsCountOutputTypeSelect<ExtArgs> | null;
};
export type Modifier_groupsCountOutputTypeCountCart_item_modifiersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cart_item_modifiersWhereInput;
};
export type Modifier_groupsCountOutputTypeCountCatalog_item_modifier_groupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.catalog_item_modifier_groupsWhereInput;
};
export type Modifier_groupsCountOutputTypeCountModifier_optionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.modifier_optionsWhereInput;
};
export type modifier_groupsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    store_id?: boolean;
    name?: boolean;
    min_select?: boolean;
    max_select?: boolean;
    is_required?: boolean;
    sort_order?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    cart_item_modifiers?: boolean | Prisma.modifier_groups$cart_item_modifiersArgs<ExtArgs>;
    catalog_item_modifier_groups?: boolean | Prisma.modifier_groups$catalog_item_modifier_groupsArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
    modifier_options?: boolean | Prisma.modifier_groups$modifier_optionsArgs<ExtArgs>;
    _count?: boolean | Prisma.Modifier_groupsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["modifier_groups"]>;
export type modifier_groupsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    store_id?: boolean;
    name?: boolean;
    min_select?: boolean;
    max_select?: boolean;
    is_required?: boolean;
    sort_order?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["modifier_groups"]>;
export type modifier_groupsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    store_id?: boolean;
    name?: boolean;
    min_select?: boolean;
    max_select?: boolean;
    is_required?: boolean;
    sort_order?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["modifier_groups"]>;
export type modifier_groupsSelectScalar = {
    id?: boolean;
    store_id?: boolean;
    name?: boolean;
    min_select?: boolean;
    max_select?: boolean;
    is_required?: boolean;
    sort_order?: boolean;
    is_active?: boolean;
    created_at?: boolean;
};
export type modifier_groupsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "store_id" | "name" | "min_select" | "max_select" | "is_required" | "sort_order" | "is_active" | "created_at", ExtArgs["result"]["modifier_groups"]>;
export type modifier_groupsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cart_item_modifiers?: boolean | Prisma.modifier_groups$cart_item_modifiersArgs<ExtArgs>;
    catalog_item_modifier_groups?: boolean | Prisma.modifier_groups$catalog_item_modifier_groupsArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
    modifier_options?: boolean | Prisma.modifier_groups$modifier_optionsArgs<ExtArgs>;
    _count?: boolean | Prisma.Modifier_groupsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type modifier_groupsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
};
export type modifier_groupsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
};
export type $modifier_groupsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "modifier_groups";
    objects: {
        cart_item_modifiers: Prisma.$cart_item_modifiersPayload<ExtArgs>[];
        catalog_item_modifier_groups: Prisma.$catalog_item_modifier_groupsPayload<ExtArgs>[];
        stores: Prisma.$storesPayload<ExtArgs>;
        modifier_options: Prisma.$modifier_optionsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        store_id: string;
        name: string;
        min_select: number;
        max_select: number;
        is_required: boolean;
        sort_order: number;
        is_active: boolean;
        created_at: Date;
    }, ExtArgs["result"]["modifier_groups"]>;
    composites: {};
};
export type modifier_groupsGetPayload<S extends boolean | null | undefined | modifier_groupsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$modifier_groupsPayload, S>;
export type modifier_groupsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<modifier_groupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Modifier_groupsCountAggregateInputType | true;
};
export interface modifier_groupsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['modifier_groups'];
        meta: {
            name: 'modifier_groups';
        };
    };
    findUnique<T extends modifier_groupsFindUniqueArgs>(args: Prisma.SelectSubset<T, modifier_groupsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__modifier_groupsClient<runtime.Types.Result.GetResult<Prisma.$modifier_groupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends modifier_groupsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, modifier_groupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__modifier_groupsClient<runtime.Types.Result.GetResult<Prisma.$modifier_groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends modifier_groupsFindFirstArgs>(args?: Prisma.SelectSubset<T, modifier_groupsFindFirstArgs<ExtArgs>>): Prisma.Prisma__modifier_groupsClient<runtime.Types.Result.GetResult<Prisma.$modifier_groupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends modifier_groupsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, modifier_groupsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__modifier_groupsClient<runtime.Types.Result.GetResult<Prisma.$modifier_groupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends modifier_groupsFindManyArgs>(args?: Prisma.SelectSubset<T, modifier_groupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$modifier_groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends modifier_groupsCreateArgs>(args: Prisma.SelectSubset<T, modifier_groupsCreateArgs<ExtArgs>>): Prisma.Prisma__modifier_groupsClient<runtime.Types.Result.GetResult<Prisma.$modifier_groupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends modifier_groupsCreateManyArgs>(args?: Prisma.SelectSubset<T, modifier_groupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends modifier_groupsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, modifier_groupsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$modifier_groupsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends modifier_groupsDeleteArgs>(args: Prisma.SelectSubset<T, modifier_groupsDeleteArgs<ExtArgs>>): Prisma.Prisma__modifier_groupsClient<runtime.Types.Result.GetResult<Prisma.$modifier_groupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends modifier_groupsUpdateArgs>(args: Prisma.SelectSubset<T, modifier_groupsUpdateArgs<ExtArgs>>): Prisma.Prisma__modifier_groupsClient<runtime.Types.Result.GetResult<Prisma.$modifier_groupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends modifier_groupsDeleteManyArgs>(args?: Prisma.SelectSubset<T, modifier_groupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends modifier_groupsUpdateManyArgs>(args: Prisma.SelectSubset<T, modifier_groupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends modifier_groupsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, modifier_groupsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$modifier_groupsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends modifier_groupsUpsertArgs>(args: Prisma.SelectSubset<T, modifier_groupsUpsertArgs<ExtArgs>>): Prisma.Prisma__modifier_groupsClient<runtime.Types.Result.GetResult<Prisma.$modifier_groupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends modifier_groupsCountArgs>(args?: Prisma.Subset<T, modifier_groupsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Modifier_groupsCountAggregateOutputType> : number>;
    aggregate<T extends Modifier_groupsAggregateArgs>(args: Prisma.Subset<T, Modifier_groupsAggregateArgs>): Prisma.PrismaPromise<GetModifier_groupsAggregateType<T>>;
    groupBy<T extends modifier_groupsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: modifier_groupsGroupByArgs['orderBy'];
    } : {
        orderBy?: modifier_groupsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, modifier_groupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModifier_groupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: modifier_groupsFieldRefs;
}
export interface Prisma__modifier_groupsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cart_item_modifiers<T extends Prisma.modifier_groups$cart_item_modifiersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.modifier_groups$cart_item_modifiersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cart_item_modifiersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    catalog_item_modifier_groups<T extends Prisma.modifier_groups$catalog_item_modifier_groupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.modifier_groups$catalog_item_modifier_groupsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$catalog_item_modifier_groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    stores<T extends Prisma.storesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.storesDefaultArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    modifier_options<T extends Prisma.modifier_groups$modifier_optionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.modifier_groups$modifier_optionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$modifier_optionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface modifier_groupsFieldRefs {
    readonly id: Prisma.FieldRef<"modifier_groups", 'String'>;
    readonly store_id: Prisma.FieldRef<"modifier_groups", 'String'>;
    readonly name: Prisma.FieldRef<"modifier_groups", 'String'>;
    readonly min_select: Prisma.FieldRef<"modifier_groups", 'Int'>;
    readonly max_select: Prisma.FieldRef<"modifier_groups", 'Int'>;
    readonly is_required: Prisma.FieldRef<"modifier_groups", 'Boolean'>;
    readonly sort_order: Prisma.FieldRef<"modifier_groups", 'Int'>;
    readonly is_active: Prisma.FieldRef<"modifier_groups", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"modifier_groups", 'DateTime'>;
}
export type modifier_groupsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.modifier_groupsInclude<ExtArgs> | null;
    where: Prisma.modifier_groupsWhereUniqueInput;
};
export type modifier_groupsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.modifier_groupsInclude<ExtArgs> | null;
    where: Prisma.modifier_groupsWhereUniqueInput;
};
export type modifier_groupsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.modifier_groupsInclude<ExtArgs> | null;
    where?: Prisma.modifier_groupsWhereInput;
    orderBy?: Prisma.modifier_groupsOrderByWithRelationInput | Prisma.modifier_groupsOrderByWithRelationInput[];
    cursor?: Prisma.modifier_groupsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Modifier_groupsScalarFieldEnum | Prisma.Modifier_groupsScalarFieldEnum[];
};
export type modifier_groupsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.modifier_groupsInclude<ExtArgs> | null;
    where?: Prisma.modifier_groupsWhereInput;
    orderBy?: Prisma.modifier_groupsOrderByWithRelationInput | Prisma.modifier_groupsOrderByWithRelationInput[];
    cursor?: Prisma.modifier_groupsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Modifier_groupsScalarFieldEnum | Prisma.Modifier_groupsScalarFieldEnum[];
};
export type modifier_groupsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.modifier_groupsInclude<ExtArgs> | null;
    where?: Prisma.modifier_groupsWhereInput;
    orderBy?: Prisma.modifier_groupsOrderByWithRelationInput | Prisma.modifier_groupsOrderByWithRelationInput[];
    cursor?: Prisma.modifier_groupsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Modifier_groupsScalarFieldEnum | Prisma.Modifier_groupsScalarFieldEnum[];
};
export type modifier_groupsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.modifier_groupsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.modifier_groupsCreateInput, Prisma.modifier_groupsUncheckedCreateInput>;
};
export type modifier_groupsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.modifier_groupsCreateManyInput | Prisma.modifier_groupsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type modifier_groupsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_groupsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.modifier_groupsOmit<ExtArgs> | null;
    data: Prisma.modifier_groupsCreateManyInput | Prisma.modifier_groupsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.modifier_groupsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type modifier_groupsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.modifier_groupsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.modifier_groupsUpdateInput, Prisma.modifier_groupsUncheckedUpdateInput>;
    where: Prisma.modifier_groupsWhereUniqueInput;
};
export type modifier_groupsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.modifier_groupsUpdateManyMutationInput, Prisma.modifier_groupsUncheckedUpdateManyInput>;
    where?: Prisma.modifier_groupsWhereInput;
    limit?: number;
};
export type modifier_groupsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_groupsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.modifier_groupsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.modifier_groupsUpdateManyMutationInput, Prisma.modifier_groupsUncheckedUpdateManyInput>;
    where?: Prisma.modifier_groupsWhereInput;
    limit?: number;
    include?: Prisma.modifier_groupsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type modifier_groupsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.modifier_groupsInclude<ExtArgs> | null;
    where: Prisma.modifier_groupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.modifier_groupsCreateInput, Prisma.modifier_groupsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.modifier_groupsUpdateInput, Prisma.modifier_groupsUncheckedUpdateInput>;
};
export type modifier_groupsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.modifier_groupsInclude<ExtArgs> | null;
    where: Prisma.modifier_groupsWhereUniqueInput;
};
export type modifier_groupsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.modifier_groupsWhereInput;
    limit?: number;
};
export type modifier_groups$cart_item_modifiersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type modifier_groups$catalog_item_modifier_groupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type modifier_groups$modifier_optionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_optionsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_optionsOmit<ExtArgs> | null;
    include?: Prisma.modifier_optionsInclude<ExtArgs> | null;
    where?: Prisma.modifier_optionsWhereInput;
    orderBy?: Prisma.modifier_optionsOrderByWithRelationInput | Prisma.modifier_optionsOrderByWithRelationInput[];
    cursor?: Prisma.modifier_optionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Modifier_optionsScalarFieldEnum | Prisma.Modifier_optionsScalarFieldEnum[];
};
export type modifier_groupsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_groupsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_groupsOmit<ExtArgs> | null;
    include?: Prisma.modifier_groupsInclude<ExtArgs> | null;
};
export {};
