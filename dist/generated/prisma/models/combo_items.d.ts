import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type combo_itemsModel = runtime.Types.Result.DefaultSelection<Prisma.$combo_itemsPayload>;
export type AggregateCombo_items = {
    _count: Combo_itemsCountAggregateOutputType | null;
    _avg: Combo_itemsAvgAggregateOutputType | null;
    _sum: Combo_itemsSumAggregateOutputType | null;
    _min: Combo_itemsMinAggregateOutputType | null;
    _max: Combo_itemsMaxAggregateOutputType | null;
};
export type Combo_itemsAvgAggregateOutputType = {
    default_qty: number | null;
    sort_order: number | null;
};
export type Combo_itemsSumAggregateOutputType = {
    default_qty: number | null;
    sort_order: number | null;
};
export type Combo_itemsMinAggregateOutputType = {
    id: string | null;
    combo_catalog_item_id: string | null;
    child_catalog_item_id: string | null;
    default_qty: number | null;
    is_required: boolean | null;
    sort_order: number | null;
    created_at: Date | null;
};
export type Combo_itemsMaxAggregateOutputType = {
    id: string | null;
    combo_catalog_item_id: string | null;
    child_catalog_item_id: string | null;
    default_qty: number | null;
    is_required: boolean | null;
    sort_order: number | null;
    created_at: Date | null;
};
export type Combo_itemsCountAggregateOutputType = {
    id: number;
    combo_catalog_item_id: number;
    child_catalog_item_id: number;
    default_qty: number;
    is_required: number;
    sort_order: number;
    created_at: number;
    _all: number;
};
export type Combo_itemsAvgAggregateInputType = {
    default_qty?: true;
    sort_order?: true;
};
export type Combo_itemsSumAggregateInputType = {
    default_qty?: true;
    sort_order?: true;
};
export type Combo_itemsMinAggregateInputType = {
    id?: true;
    combo_catalog_item_id?: true;
    child_catalog_item_id?: true;
    default_qty?: true;
    is_required?: true;
    sort_order?: true;
    created_at?: true;
};
export type Combo_itemsMaxAggregateInputType = {
    id?: true;
    combo_catalog_item_id?: true;
    child_catalog_item_id?: true;
    default_qty?: true;
    is_required?: true;
    sort_order?: true;
    created_at?: true;
};
export type Combo_itemsCountAggregateInputType = {
    id?: true;
    combo_catalog_item_id?: true;
    child_catalog_item_id?: true;
    default_qty?: true;
    is_required?: true;
    sort_order?: true;
    created_at?: true;
    _all?: true;
};
export type Combo_itemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.combo_itemsWhereInput;
    orderBy?: Prisma.combo_itemsOrderByWithRelationInput | Prisma.combo_itemsOrderByWithRelationInput[];
    cursor?: Prisma.combo_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Combo_itemsCountAggregateInputType;
    _avg?: Combo_itemsAvgAggregateInputType;
    _sum?: Combo_itemsSumAggregateInputType;
    _min?: Combo_itemsMinAggregateInputType;
    _max?: Combo_itemsMaxAggregateInputType;
};
export type GetCombo_itemsAggregateType<T extends Combo_itemsAggregateArgs> = {
    [P in keyof T & keyof AggregateCombo_items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCombo_items[P]> : Prisma.GetScalarType<T[P], AggregateCombo_items[P]>;
};
export type combo_itemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.combo_itemsWhereInput;
    orderBy?: Prisma.combo_itemsOrderByWithAggregationInput | Prisma.combo_itemsOrderByWithAggregationInput[];
    by: Prisma.Combo_itemsScalarFieldEnum[] | Prisma.Combo_itemsScalarFieldEnum;
    having?: Prisma.combo_itemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Combo_itemsCountAggregateInputType | true;
    _avg?: Combo_itemsAvgAggregateInputType;
    _sum?: Combo_itemsSumAggregateInputType;
    _min?: Combo_itemsMinAggregateInputType;
    _max?: Combo_itemsMaxAggregateInputType;
};
export type Combo_itemsGroupByOutputType = {
    id: string;
    combo_catalog_item_id: string;
    child_catalog_item_id: string;
    default_qty: number;
    is_required: boolean;
    sort_order: number;
    created_at: Date;
    _count: Combo_itemsCountAggregateOutputType | null;
    _avg: Combo_itemsAvgAggregateOutputType | null;
    _sum: Combo_itemsSumAggregateOutputType | null;
    _min: Combo_itemsMinAggregateOutputType | null;
    _max: Combo_itemsMaxAggregateOutputType | null;
};
type GetCombo_itemsGroupByPayload<T extends combo_itemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Combo_itemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Combo_itemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Combo_itemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Combo_itemsGroupByOutputType[P]>;
}>>;
export type combo_itemsWhereInput = {
    AND?: Prisma.combo_itemsWhereInput | Prisma.combo_itemsWhereInput[];
    OR?: Prisma.combo_itemsWhereInput[];
    NOT?: Prisma.combo_itemsWhereInput | Prisma.combo_itemsWhereInput[];
    id?: Prisma.UuidFilter<"combo_items"> | string;
    combo_catalog_item_id?: Prisma.UuidFilter<"combo_items"> | string;
    child_catalog_item_id?: Prisma.UuidFilter<"combo_items"> | string;
    default_qty?: Prisma.IntFilter<"combo_items"> | number;
    is_required?: Prisma.BoolFilter<"combo_items"> | boolean;
    sort_order?: Prisma.IntFilter<"combo_items"> | number;
    created_at?: Prisma.DateTimeFilter<"combo_items"> | Date | string;
    catalog_items_combo_items_child_catalog_item_idTocatalog_items?: Prisma.XOR<Prisma.Catalog_itemsScalarRelationFilter, Prisma.catalog_itemsWhereInput>;
    catalog_items_combo_items_combo_catalog_item_idTocatalog_items?: Prisma.XOR<Prisma.Catalog_itemsScalarRelationFilter, Prisma.catalog_itemsWhereInput>;
};
export type combo_itemsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    combo_catalog_item_id?: Prisma.SortOrder;
    child_catalog_item_id?: Prisma.SortOrder;
    default_qty?: Prisma.SortOrder;
    is_required?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    catalog_items_combo_items_child_catalog_item_idTocatalog_items?: Prisma.catalog_itemsOrderByWithRelationInput;
    catalog_items_combo_items_combo_catalog_item_idTocatalog_items?: Prisma.catalog_itemsOrderByWithRelationInput;
};
export type combo_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.combo_itemsWhereInput | Prisma.combo_itemsWhereInput[];
    OR?: Prisma.combo_itemsWhereInput[];
    NOT?: Prisma.combo_itemsWhereInput | Prisma.combo_itemsWhereInput[];
    combo_catalog_item_id?: Prisma.UuidFilter<"combo_items"> | string;
    child_catalog_item_id?: Prisma.UuidFilter<"combo_items"> | string;
    default_qty?: Prisma.IntFilter<"combo_items"> | number;
    is_required?: Prisma.BoolFilter<"combo_items"> | boolean;
    sort_order?: Prisma.IntFilter<"combo_items"> | number;
    created_at?: Prisma.DateTimeFilter<"combo_items"> | Date | string;
    catalog_items_combo_items_child_catalog_item_idTocatalog_items?: Prisma.XOR<Prisma.Catalog_itemsScalarRelationFilter, Prisma.catalog_itemsWhereInput>;
    catalog_items_combo_items_combo_catalog_item_idTocatalog_items?: Prisma.XOR<Prisma.Catalog_itemsScalarRelationFilter, Prisma.catalog_itemsWhereInput>;
}, "id">;
export type combo_itemsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    combo_catalog_item_id?: Prisma.SortOrder;
    child_catalog_item_id?: Prisma.SortOrder;
    default_qty?: Prisma.SortOrder;
    is_required?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.combo_itemsCountOrderByAggregateInput;
    _avg?: Prisma.combo_itemsAvgOrderByAggregateInput;
    _max?: Prisma.combo_itemsMaxOrderByAggregateInput;
    _min?: Prisma.combo_itemsMinOrderByAggregateInput;
    _sum?: Prisma.combo_itemsSumOrderByAggregateInput;
};
export type combo_itemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.combo_itemsScalarWhereWithAggregatesInput | Prisma.combo_itemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.combo_itemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.combo_itemsScalarWhereWithAggregatesInput | Prisma.combo_itemsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"combo_items"> | string;
    combo_catalog_item_id?: Prisma.UuidWithAggregatesFilter<"combo_items"> | string;
    child_catalog_item_id?: Prisma.UuidWithAggregatesFilter<"combo_items"> | string;
    default_qty?: Prisma.IntWithAggregatesFilter<"combo_items"> | number;
    is_required?: Prisma.BoolWithAggregatesFilter<"combo_items"> | boolean;
    sort_order?: Prisma.IntWithAggregatesFilter<"combo_items"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"combo_items"> | Date | string;
};
export type combo_itemsCreateInput = {
    id?: string;
    default_qty?: number;
    is_required?: boolean;
    sort_order?: number;
    created_at?: Date | string;
    catalog_items_combo_items_child_catalog_item_idTocatalog_items: Prisma.catalog_itemsCreateNestedOneWithoutCombo_items_combo_items_child_catalog_item_idTocatalog_itemsInput;
    catalog_items_combo_items_combo_catalog_item_idTocatalog_items: Prisma.catalog_itemsCreateNestedOneWithoutCombo_items_combo_items_combo_catalog_item_idTocatalog_itemsInput;
};
export type combo_itemsUncheckedCreateInput = {
    id?: string;
    combo_catalog_item_id: string;
    child_catalog_item_id: string;
    default_qty?: number;
    is_required?: boolean;
    sort_order?: number;
    created_at?: Date | string;
};
export type combo_itemsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    default_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    catalog_items_combo_items_child_catalog_item_idTocatalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutCombo_items_combo_items_child_catalog_item_idTocatalog_itemsNestedInput;
    catalog_items_combo_items_combo_catalog_item_idTocatalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutCombo_items_combo_items_combo_catalog_item_idTocatalog_itemsNestedInput;
};
export type combo_itemsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    combo_catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    child_catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    default_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type combo_itemsCreateManyInput = {
    id?: string;
    combo_catalog_item_id: string;
    child_catalog_item_id: string;
    default_qty?: number;
    is_required?: boolean;
    sort_order?: number;
    created_at?: Date | string;
};
export type combo_itemsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    default_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type combo_itemsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    combo_catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    child_catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    default_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Combo_itemsListRelationFilter = {
    every?: Prisma.combo_itemsWhereInput;
    some?: Prisma.combo_itemsWhereInput;
    none?: Prisma.combo_itemsWhereInput;
};
export type combo_itemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type combo_itemsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    combo_catalog_item_id?: Prisma.SortOrder;
    child_catalog_item_id?: Prisma.SortOrder;
    default_qty?: Prisma.SortOrder;
    is_required?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type combo_itemsAvgOrderByAggregateInput = {
    default_qty?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type combo_itemsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    combo_catalog_item_id?: Prisma.SortOrder;
    child_catalog_item_id?: Prisma.SortOrder;
    default_qty?: Prisma.SortOrder;
    is_required?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type combo_itemsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    combo_catalog_item_id?: Prisma.SortOrder;
    child_catalog_item_id?: Prisma.SortOrder;
    default_qty?: Prisma.SortOrder;
    is_required?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type combo_itemsSumOrderByAggregateInput = {
    default_qty?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type combo_itemsCreateNestedManyWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput = {
    create?: Prisma.XOR<Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput, Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput> | Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput[] | Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput[];
    connectOrCreate?: Prisma.combo_itemsCreateOrConnectWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsCreateOrConnectWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput[];
    createMany?: Prisma.combo_itemsCreateManyCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInputEnvelope;
    connect?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
};
export type combo_itemsCreateNestedManyWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput = {
    create?: Prisma.XOR<Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput, Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput> | Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput[] | Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput[];
    connectOrCreate?: Prisma.combo_itemsCreateOrConnectWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsCreateOrConnectWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput[];
    createMany?: Prisma.combo_itemsCreateManyCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInputEnvelope;
    connect?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
};
export type combo_itemsUncheckedCreateNestedManyWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput = {
    create?: Prisma.XOR<Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput, Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput> | Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput[] | Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput[];
    connectOrCreate?: Prisma.combo_itemsCreateOrConnectWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsCreateOrConnectWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput[];
    createMany?: Prisma.combo_itemsCreateManyCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInputEnvelope;
    connect?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
};
export type combo_itemsUncheckedCreateNestedManyWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput = {
    create?: Prisma.XOR<Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput, Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput> | Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput[] | Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput[];
    connectOrCreate?: Prisma.combo_itemsCreateOrConnectWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsCreateOrConnectWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput[];
    createMany?: Prisma.combo_itemsCreateManyCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInputEnvelope;
    connect?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
};
export type combo_itemsUpdateManyWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput, Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput> | Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput[] | Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput[];
    connectOrCreate?: Prisma.combo_itemsCreateOrConnectWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsCreateOrConnectWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput[];
    upsert?: Prisma.combo_itemsUpsertWithWhereUniqueWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsUpsertWithWhereUniqueWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput[];
    createMany?: Prisma.combo_itemsCreateManyCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInputEnvelope;
    set?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
    disconnect?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
    delete?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
    connect?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
    update?: Prisma.combo_itemsUpdateWithWhereUniqueWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsUpdateWithWhereUniqueWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput[];
    updateMany?: Prisma.combo_itemsUpdateManyWithWhereWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsUpdateManyWithWhereWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput[];
    deleteMany?: Prisma.combo_itemsScalarWhereInput | Prisma.combo_itemsScalarWhereInput[];
};
export type combo_itemsUpdateManyWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput, Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput> | Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput[] | Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput[];
    connectOrCreate?: Prisma.combo_itemsCreateOrConnectWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsCreateOrConnectWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput[];
    upsert?: Prisma.combo_itemsUpsertWithWhereUniqueWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsUpsertWithWhereUniqueWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput[];
    createMany?: Prisma.combo_itemsCreateManyCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInputEnvelope;
    set?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
    disconnect?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
    delete?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
    connect?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
    update?: Prisma.combo_itemsUpdateWithWhereUniqueWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsUpdateWithWhereUniqueWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput[];
    updateMany?: Prisma.combo_itemsUpdateManyWithWhereWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsUpdateManyWithWhereWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput[];
    deleteMany?: Prisma.combo_itemsScalarWhereInput | Prisma.combo_itemsScalarWhereInput[];
};
export type combo_itemsUncheckedUpdateManyWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput, Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput> | Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput[] | Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput[];
    connectOrCreate?: Prisma.combo_itemsCreateOrConnectWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsCreateOrConnectWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput[];
    upsert?: Prisma.combo_itemsUpsertWithWhereUniqueWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsUpsertWithWhereUniqueWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput[];
    createMany?: Prisma.combo_itemsCreateManyCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInputEnvelope;
    set?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
    disconnect?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
    delete?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
    connect?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
    update?: Prisma.combo_itemsUpdateWithWhereUniqueWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsUpdateWithWhereUniqueWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput[];
    updateMany?: Prisma.combo_itemsUpdateManyWithWhereWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsUpdateManyWithWhereWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput[];
    deleteMany?: Prisma.combo_itemsScalarWhereInput | Prisma.combo_itemsScalarWhereInput[];
};
export type combo_itemsUncheckedUpdateManyWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput, Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput> | Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput[] | Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput[];
    connectOrCreate?: Prisma.combo_itemsCreateOrConnectWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsCreateOrConnectWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput[];
    upsert?: Prisma.combo_itemsUpsertWithWhereUniqueWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsUpsertWithWhereUniqueWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput[];
    createMany?: Prisma.combo_itemsCreateManyCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInputEnvelope;
    set?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
    disconnect?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
    delete?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
    connect?: Prisma.combo_itemsWhereUniqueInput | Prisma.combo_itemsWhereUniqueInput[];
    update?: Prisma.combo_itemsUpdateWithWhereUniqueWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsUpdateWithWhereUniqueWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput[];
    updateMany?: Prisma.combo_itemsUpdateManyWithWhereWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsUpdateManyWithWhereWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput[];
    deleteMany?: Prisma.combo_itemsScalarWhereInput | Prisma.combo_itemsScalarWhereInput[];
};
export type combo_itemsCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput = {
    id?: string;
    default_qty?: number;
    is_required?: boolean;
    sort_order?: number;
    created_at?: Date | string;
    catalog_items_combo_items_combo_catalog_item_idTocatalog_items: Prisma.catalog_itemsCreateNestedOneWithoutCombo_items_combo_items_combo_catalog_item_idTocatalog_itemsInput;
};
export type combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput = {
    id?: string;
    combo_catalog_item_id: string;
    default_qty?: number;
    is_required?: boolean;
    sort_order?: number;
    created_at?: Date | string;
};
export type combo_itemsCreateOrConnectWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput = {
    where: Prisma.combo_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput, Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput>;
};
export type combo_itemsCreateManyCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInputEnvelope = {
    data: Prisma.combo_itemsCreateManyCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsCreateManyCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput[];
    skipDuplicates?: boolean;
};
export type combo_itemsCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput = {
    id?: string;
    default_qty?: number;
    is_required?: boolean;
    sort_order?: number;
    created_at?: Date | string;
    catalog_items_combo_items_child_catalog_item_idTocatalog_items: Prisma.catalog_itemsCreateNestedOneWithoutCombo_items_combo_items_child_catalog_item_idTocatalog_itemsInput;
};
export type combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput = {
    id?: string;
    child_catalog_item_id: string;
    default_qty?: number;
    is_required?: boolean;
    sort_order?: number;
    created_at?: Date | string;
};
export type combo_itemsCreateOrConnectWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput = {
    where: Prisma.combo_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput, Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput>;
};
export type combo_itemsCreateManyCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInputEnvelope = {
    data: Prisma.combo_itemsCreateManyCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput | Prisma.combo_itemsCreateManyCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput[];
    skipDuplicates?: boolean;
};
export type combo_itemsUpsertWithWhereUniqueWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput = {
    where: Prisma.combo_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.combo_itemsUpdateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput, Prisma.combo_itemsUncheckedUpdateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput>;
    create: Prisma.XOR<Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput, Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput>;
};
export type combo_itemsUpdateWithWhereUniqueWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput = {
    where: Prisma.combo_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.combo_itemsUpdateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput, Prisma.combo_itemsUncheckedUpdateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput>;
};
export type combo_itemsUpdateManyWithWhereWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput = {
    where: Prisma.combo_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.combo_itemsUpdateManyMutationInput, Prisma.combo_itemsUncheckedUpdateManyWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput>;
};
export type combo_itemsScalarWhereInput = {
    AND?: Prisma.combo_itemsScalarWhereInput | Prisma.combo_itemsScalarWhereInput[];
    OR?: Prisma.combo_itemsScalarWhereInput[];
    NOT?: Prisma.combo_itemsScalarWhereInput | Prisma.combo_itemsScalarWhereInput[];
    id?: Prisma.UuidFilter<"combo_items"> | string;
    combo_catalog_item_id?: Prisma.UuidFilter<"combo_items"> | string;
    child_catalog_item_id?: Prisma.UuidFilter<"combo_items"> | string;
    default_qty?: Prisma.IntFilter<"combo_items"> | number;
    is_required?: Prisma.BoolFilter<"combo_items"> | boolean;
    sort_order?: Prisma.IntFilter<"combo_items"> | number;
    created_at?: Prisma.DateTimeFilter<"combo_items"> | Date | string;
};
export type combo_itemsUpsertWithWhereUniqueWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput = {
    where: Prisma.combo_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.combo_itemsUpdateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput, Prisma.combo_itemsUncheckedUpdateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput>;
    create: Prisma.XOR<Prisma.combo_itemsCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput, Prisma.combo_itemsUncheckedCreateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput>;
};
export type combo_itemsUpdateWithWhereUniqueWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput = {
    where: Prisma.combo_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.combo_itemsUpdateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput, Prisma.combo_itemsUncheckedUpdateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput>;
};
export type combo_itemsUpdateManyWithWhereWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput = {
    where: Prisma.combo_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.combo_itemsUpdateManyMutationInput, Prisma.combo_itemsUncheckedUpdateManyWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput>;
};
export type combo_itemsCreateManyCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput = {
    id?: string;
    combo_catalog_item_id: string;
    default_qty?: number;
    is_required?: boolean;
    sort_order?: number;
    created_at?: Date | string;
};
export type combo_itemsCreateManyCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput = {
    id?: string;
    child_catalog_item_id: string;
    default_qty?: number;
    is_required?: boolean;
    sort_order?: number;
    created_at?: Date | string;
};
export type combo_itemsUpdateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    default_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    catalog_items_combo_items_combo_catalog_item_idTocatalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutCombo_items_combo_items_combo_catalog_item_idTocatalog_itemsNestedInput;
};
export type combo_itemsUncheckedUpdateWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    combo_catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    default_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type combo_itemsUncheckedUpdateManyWithoutCatalog_items_combo_items_child_catalog_item_idTocatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    combo_catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    default_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type combo_itemsUpdateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    default_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    catalog_items_combo_items_child_catalog_item_idTocatalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutCombo_items_combo_items_child_catalog_item_idTocatalog_itemsNestedInput;
};
export type combo_itemsUncheckedUpdateWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    child_catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    default_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type combo_itemsUncheckedUpdateManyWithoutCatalog_items_combo_items_combo_catalog_item_idTocatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    child_catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    default_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type combo_itemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    combo_catalog_item_id?: boolean;
    child_catalog_item_id?: boolean;
    default_qty?: boolean;
    is_required?: boolean;
    sort_order?: boolean;
    created_at?: boolean;
    catalog_items_combo_items_child_catalog_item_idTocatalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    catalog_items_combo_items_combo_catalog_item_idTocatalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["combo_items"]>;
export type combo_itemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    combo_catalog_item_id?: boolean;
    child_catalog_item_id?: boolean;
    default_qty?: boolean;
    is_required?: boolean;
    sort_order?: boolean;
    created_at?: boolean;
    catalog_items_combo_items_child_catalog_item_idTocatalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    catalog_items_combo_items_combo_catalog_item_idTocatalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["combo_items"]>;
export type combo_itemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    combo_catalog_item_id?: boolean;
    child_catalog_item_id?: boolean;
    default_qty?: boolean;
    is_required?: boolean;
    sort_order?: boolean;
    created_at?: boolean;
    catalog_items_combo_items_child_catalog_item_idTocatalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    catalog_items_combo_items_combo_catalog_item_idTocatalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["combo_items"]>;
export type combo_itemsSelectScalar = {
    id?: boolean;
    combo_catalog_item_id?: boolean;
    child_catalog_item_id?: boolean;
    default_qty?: boolean;
    is_required?: boolean;
    sort_order?: boolean;
    created_at?: boolean;
};
export type combo_itemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "combo_catalog_item_id" | "child_catalog_item_id" | "default_qty" | "is_required" | "sort_order" | "created_at", ExtArgs["result"]["combo_items"]>;
export type combo_itemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    catalog_items_combo_items_child_catalog_item_idTocatalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    catalog_items_combo_items_combo_catalog_item_idTocatalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
};
export type combo_itemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    catalog_items_combo_items_child_catalog_item_idTocatalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    catalog_items_combo_items_combo_catalog_item_idTocatalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
};
export type combo_itemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    catalog_items_combo_items_child_catalog_item_idTocatalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    catalog_items_combo_items_combo_catalog_item_idTocatalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
};
export type $combo_itemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "combo_items";
    objects: {
        catalog_items_combo_items_child_catalog_item_idTocatalog_items: Prisma.$catalog_itemsPayload<ExtArgs>;
        catalog_items_combo_items_combo_catalog_item_idTocatalog_items: Prisma.$catalog_itemsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        combo_catalog_item_id: string;
        child_catalog_item_id: string;
        default_qty: number;
        is_required: boolean;
        sort_order: number;
        created_at: Date;
    }, ExtArgs["result"]["combo_items"]>;
    composites: {};
};
export type combo_itemsGetPayload<S extends boolean | null | undefined | combo_itemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$combo_itemsPayload, S>;
export type combo_itemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<combo_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Combo_itemsCountAggregateInputType | true;
};
export interface combo_itemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['combo_items'];
        meta: {
            name: 'combo_items';
        };
    };
    findUnique<T extends combo_itemsFindUniqueArgs>(args: Prisma.SelectSubset<T, combo_itemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__combo_itemsClient<runtime.Types.Result.GetResult<Prisma.$combo_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends combo_itemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, combo_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__combo_itemsClient<runtime.Types.Result.GetResult<Prisma.$combo_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends combo_itemsFindFirstArgs>(args?: Prisma.SelectSubset<T, combo_itemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__combo_itemsClient<runtime.Types.Result.GetResult<Prisma.$combo_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends combo_itemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, combo_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__combo_itemsClient<runtime.Types.Result.GetResult<Prisma.$combo_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends combo_itemsFindManyArgs>(args?: Prisma.SelectSubset<T, combo_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$combo_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends combo_itemsCreateArgs>(args: Prisma.SelectSubset<T, combo_itemsCreateArgs<ExtArgs>>): Prisma.Prisma__combo_itemsClient<runtime.Types.Result.GetResult<Prisma.$combo_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends combo_itemsCreateManyArgs>(args?: Prisma.SelectSubset<T, combo_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends combo_itemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, combo_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$combo_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends combo_itemsDeleteArgs>(args: Prisma.SelectSubset<T, combo_itemsDeleteArgs<ExtArgs>>): Prisma.Prisma__combo_itemsClient<runtime.Types.Result.GetResult<Prisma.$combo_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends combo_itemsUpdateArgs>(args: Prisma.SelectSubset<T, combo_itemsUpdateArgs<ExtArgs>>): Prisma.Prisma__combo_itemsClient<runtime.Types.Result.GetResult<Prisma.$combo_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends combo_itemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, combo_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends combo_itemsUpdateManyArgs>(args: Prisma.SelectSubset<T, combo_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends combo_itemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, combo_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$combo_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends combo_itemsUpsertArgs>(args: Prisma.SelectSubset<T, combo_itemsUpsertArgs<ExtArgs>>): Prisma.Prisma__combo_itemsClient<runtime.Types.Result.GetResult<Prisma.$combo_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends combo_itemsCountArgs>(args?: Prisma.Subset<T, combo_itemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Combo_itemsCountAggregateOutputType> : number>;
    aggregate<T extends Combo_itemsAggregateArgs>(args: Prisma.Subset<T, Combo_itemsAggregateArgs>): Prisma.PrismaPromise<GetCombo_itemsAggregateType<T>>;
    groupBy<T extends combo_itemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: combo_itemsGroupByArgs['orderBy'];
    } : {
        orderBy?: combo_itemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, combo_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCombo_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: combo_itemsFieldRefs;
}
export interface Prisma__combo_itemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    catalog_items_combo_items_child_catalog_item_idTocatalog_items<T extends Prisma.catalog_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.catalog_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__catalog_itemsClient<runtime.Types.Result.GetResult<Prisma.$catalog_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    catalog_items_combo_items_combo_catalog_item_idTocatalog_items<T extends Prisma.catalog_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.catalog_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__catalog_itemsClient<runtime.Types.Result.GetResult<Prisma.$catalog_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface combo_itemsFieldRefs {
    readonly id: Prisma.FieldRef<"combo_items", 'String'>;
    readonly combo_catalog_item_id: Prisma.FieldRef<"combo_items", 'String'>;
    readonly child_catalog_item_id: Prisma.FieldRef<"combo_items", 'String'>;
    readonly default_qty: Prisma.FieldRef<"combo_items", 'Int'>;
    readonly is_required: Prisma.FieldRef<"combo_items", 'Boolean'>;
    readonly sort_order: Prisma.FieldRef<"combo_items", 'Int'>;
    readonly created_at: Prisma.FieldRef<"combo_items", 'DateTime'>;
}
export type combo_itemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.combo_itemsSelect<ExtArgs> | null;
    omit?: Prisma.combo_itemsOmit<ExtArgs> | null;
    include?: Prisma.combo_itemsInclude<ExtArgs> | null;
    where: Prisma.combo_itemsWhereUniqueInput;
};
export type combo_itemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.combo_itemsSelect<ExtArgs> | null;
    omit?: Prisma.combo_itemsOmit<ExtArgs> | null;
    include?: Prisma.combo_itemsInclude<ExtArgs> | null;
    where: Prisma.combo_itemsWhereUniqueInput;
};
export type combo_itemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.combo_itemsSelect<ExtArgs> | null;
    omit?: Prisma.combo_itemsOmit<ExtArgs> | null;
    include?: Prisma.combo_itemsInclude<ExtArgs> | null;
    where?: Prisma.combo_itemsWhereInput;
    orderBy?: Prisma.combo_itemsOrderByWithRelationInput | Prisma.combo_itemsOrderByWithRelationInput[];
    cursor?: Prisma.combo_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Combo_itemsScalarFieldEnum | Prisma.Combo_itemsScalarFieldEnum[];
};
export type combo_itemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.combo_itemsSelect<ExtArgs> | null;
    omit?: Prisma.combo_itemsOmit<ExtArgs> | null;
    include?: Prisma.combo_itemsInclude<ExtArgs> | null;
    where?: Prisma.combo_itemsWhereInput;
    orderBy?: Prisma.combo_itemsOrderByWithRelationInput | Prisma.combo_itemsOrderByWithRelationInput[];
    cursor?: Prisma.combo_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Combo_itemsScalarFieldEnum | Prisma.Combo_itemsScalarFieldEnum[];
};
export type combo_itemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.combo_itemsSelect<ExtArgs> | null;
    omit?: Prisma.combo_itemsOmit<ExtArgs> | null;
    include?: Prisma.combo_itemsInclude<ExtArgs> | null;
    where?: Prisma.combo_itemsWhereInput;
    orderBy?: Prisma.combo_itemsOrderByWithRelationInput | Prisma.combo_itemsOrderByWithRelationInput[];
    cursor?: Prisma.combo_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Combo_itemsScalarFieldEnum | Prisma.Combo_itemsScalarFieldEnum[];
};
export type combo_itemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.combo_itemsSelect<ExtArgs> | null;
    omit?: Prisma.combo_itemsOmit<ExtArgs> | null;
    include?: Prisma.combo_itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.combo_itemsCreateInput, Prisma.combo_itemsUncheckedCreateInput>;
};
export type combo_itemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.combo_itemsCreateManyInput | Prisma.combo_itemsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type combo_itemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.combo_itemsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.combo_itemsOmit<ExtArgs> | null;
    data: Prisma.combo_itemsCreateManyInput | Prisma.combo_itemsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.combo_itemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type combo_itemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.combo_itemsSelect<ExtArgs> | null;
    omit?: Prisma.combo_itemsOmit<ExtArgs> | null;
    include?: Prisma.combo_itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.combo_itemsUpdateInput, Prisma.combo_itemsUncheckedUpdateInput>;
    where: Prisma.combo_itemsWhereUniqueInput;
};
export type combo_itemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.combo_itemsUpdateManyMutationInput, Prisma.combo_itemsUncheckedUpdateManyInput>;
    where?: Prisma.combo_itemsWhereInput;
    limit?: number;
};
export type combo_itemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.combo_itemsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.combo_itemsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.combo_itemsUpdateManyMutationInput, Prisma.combo_itemsUncheckedUpdateManyInput>;
    where?: Prisma.combo_itemsWhereInput;
    limit?: number;
    include?: Prisma.combo_itemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type combo_itemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.combo_itemsSelect<ExtArgs> | null;
    omit?: Prisma.combo_itemsOmit<ExtArgs> | null;
    include?: Prisma.combo_itemsInclude<ExtArgs> | null;
    where: Prisma.combo_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.combo_itemsCreateInput, Prisma.combo_itemsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.combo_itemsUpdateInput, Prisma.combo_itemsUncheckedUpdateInput>;
};
export type combo_itemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.combo_itemsSelect<ExtArgs> | null;
    omit?: Prisma.combo_itemsOmit<ExtArgs> | null;
    include?: Prisma.combo_itemsInclude<ExtArgs> | null;
    where: Prisma.combo_itemsWhereUniqueInput;
};
export type combo_itemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.combo_itemsWhereInput;
    limit?: number;
};
export type combo_itemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.combo_itemsSelect<ExtArgs> | null;
    omit?: Prisma.combo_itemsOmit<ExtArgs> | null;
    include?: Prisma.combo_itemsInclude<ExtArgs> | null;
};
export {};
