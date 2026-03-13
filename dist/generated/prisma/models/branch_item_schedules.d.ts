import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type branch_item_schedulesModel = runtime.Types.Result.DefaultSelection<Prisma.$branch_item_schedulesPayload>;
export type AggregateBranch_item_schedules = {
    _count: Branch_item_schedulesCountAggregateOutputType | null;
    _avg: Branch_item_schedulesAvgAggregateOutputType | null;
    _sum: Branch_item_schedulesSumAggregateOutputType | null;
    _min: Branch_item_schedulesMinAggregateOutputType | null;
    _max: Branch_item_schedulesMaxAggregateOutputType | null;
};
export type Branch_item_schedulesAvgAggregateOutputType = {
    day_of_week: number | null;
};
export type Branch_item_schedulesSumAggregateOutputType = {
    day_of_week: number | null;
};
export type Branch_item_schedulesMinAggregateOutputType = {
    id: string | null;
    branch_catalog_item_id: string | null;
    day_of_week: number | null;
    start_time: Date | null;
    end_time: Date | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Branch_item_schedulesMaxAggregateOutputType = {
    id: string | null;
    branch_catalog_item_id: string | null;
    day_of_week: number | null;
    start_time: Date | null;
    end_time: Date | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Branch_item_schedulesCountAggregateOutputType = {
    id: number;
    branch_catalog_item_id: number;
    day_of_week: number;
    start_time: number;
    end_time: number;
    is_active: number;
    created_at: number;
    _all: number;
};
export type Branch_item_schedulesAvgAggregateInputType = {
    day_of_week?: true;
};
export type Branch_item_schedulesSumAggregateInputType = {
    day_of_week?: true;
};
export type Branch_item_schedulesMinAggregateInputType = {
    id?: true;
    branch_catalog_item_id?: true;
    day_of_week?: true;
    start_time?: true;
    end_time?: true;
    is_active?: true;
    created_at?: true;
};
export type Branch_item_schedulesMaxAggregateInputType = {
    id?: true;
    branch_catalog_item_id?: true;
    day_of_week?: true;
    start_time?: true;
    end_time?: true;
    is_active?: true;
    created_at?: true;
};
export type Branch_item_schedulesCountAggregateInputType = {
    id?: true;
    branch_catalog_item_id?: true;
    day_of_week?: true;
    start_time?: true;
    end_time?: true;
    is_active?: true;
    created_at?: true;
    _all?: true;
};
export type Branch_item_schedulesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.branch_item_schedulesWhereInput;
    orderBy?: Prisma.branch_item_schedulesOrderByWithRelationInput | Prisma.branch_item_schedulesOrderByWithRelationInput[];
    cursor?: Prisma.branch_item_schedulesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Branch_item_schedulesCountAggregateInputType;
    _avg?: Branch_item_schedulesAvgAggregateInputType;
    _sum?: Branch_item_schedulesSumAggregateInputType;
    _min?: Branch_item_schedulesMinAggregateInputType;
    _max?: Branch_item_schedulesMaxAggregateInputType;
};
export type GetBranch_item_schedulesAggregateType<T extends Branch_item_schedulesAggregateArgs> = {
    [P in keyof T & keyof AggregateBranch_item_schedules]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBranch_item_schedules[P]> : Prisma.GetScalarType<T[P], AggregateBranch_item_schedules[P]>;
};
export type branch_item_schedulesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.branch_item_schedulesWhereInput;
    orderBy?: Prisma.branch_item_schedulesOrderByWithAggregationInput | Prisma.branch_item_schedulesOrderByWithAggregationInput[];
    by: Prisma.Branch_item_schedulesScalarFieldEnum[] | Prisma.Branch_item_schedulesScalarFieldEnum;
    having?: Prisma.branch_item_schedulesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Branch_item_schedulesCountAggregateInputType | true;
    _avg?: Branch_item_schedulesAvgAggregateInputType;
    _sum?: Branch_item_schedulesSumAggregateInputType;
    _min?: Branch_item_schedulesMinAggregateInputType;
    _max?: Branch_item_schedulesMaxAggregateInputType;
};
export type Branch_item_schedulesGroupByOutputType = {
    id: string;
    branch_catalog_item_id: string;
    day_of_week: number;
    start_time: Date;
    end_time: Date;
    is_active: boolean;
    created_at: Date;
    _count: Branch_item_schedulesCountAggregateOutputType | null;
    _avg: Branch_item_schedulesAvgAggregateOutputType | null;
    _sum: Branch_item_schedulesSumAggregateOutputType | null;
    _min: Branch_item_schedulesMinAggregateOutputType | null;
    _max: Branch_item_schedulesMaxAggregateOutputType | null;
};
type GetBranch_item_schedulesGroupByPayload<T extends branch_item_schedulesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Branch_item_schedulesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Branch_item_schedulesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Branch_item_schedulesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Branch_item_schedulesGroupByOutputType[P]>;
}>>;
export type branch_item_schedulesWhereInput = {
    AND?: Prisma.branch_item_schedulesWhereInput | Prisma.branch_item_schedulesWhereInput[];
    OR?: Prisma.branch_item_schedulesWhereInput[];
    NOT?: Prisma.branch_item_schedulesWhereInput | Prisma.branch_item_schedulesWhereInput[];
    id?: Prisma.UuidFilter<"branch_item_schedules"> | string;
    branch_catalog_item_id?: Prisma.UuidFilter<"branch_item_schedules"> | string;
    day_of_week?: Prisma.IntFilter<"branch_item_schedules"> | number;
    start_time?: Prisma.DateTimeFilter<"branch_item_schedules"> | Date | string;
    end_time?: Prisma.DateTimeFilter<"branch_item_schedules"> | Date | string;
    is_active?: Prisma.BoolFilter<"branch_item_schedules"> | boolean;
    created_at?: Prisma.DateTimeFilter<"branch_item_schedules"> | Date | string;
    branch_catalog_items?: Prisma.XOR<Prisma.Branch_catalog_itemsScalarRelationFilter, Prisma.branch_catalog_itemsWhereInput>;
};
export type branch_item_schedulesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    branch_catalog_item_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    branch_catalog_items?: Prisma.branch_catalog_itemsOrderByWithRelationInput;
};
export type branch_item_schedulesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.branch_item_schedulesWhereInput | Prisma.branch_item_schedulesWhereInput[];
    OR?: Prisma.branch_item_schedulesWhereInput[];
    NOT?: Prisma.branch_item_schedulesWhereInput | Prisma.branch_item_schedulesWhereInput[];
    branch_catalog_item_id?: Prisma.UuidFilter<"branch_item_schedules"> | string;
    day_of_week?: Prisma.IntFilter<"branch_item_schedules"> | number;
    start_time?: Prisma.DateTimeFilter<"branch_item_schedules"> | Date | string;
    end_time?: Prisma.DateTimeFilter<"branch_item_schedules"> | Date | string;
    is_active?: Prisma.BoolFilter<"branch_item_schedules"> | boolean;
    created_at?: Prisma.DateTimeFilter<"branch_item_schedules"> | Date | string;
    branch_catalog_items?: Prisma.XOR<Prisma.Branch_catalog_itemsScalarRelationFilter, Prisma.branch_catalog_itemsWhereInput>;
}, "id">;
export type branch_item_schedulesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    branch_catalog_item_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.branch_item_schedulesCountOrderByAggregateInput;
    _avg?: Prisma.branch_item_schedulesAvgOrderByAggregateInput;
    _max?: Prisma.branch_item_schedulesMaxOrderByAggregateInput;
    _min?: Prisma.branch_item_schedulesMinOrderByAggregateInput;
    _sum?: Prisma.branch_item_schedulesSumOrderByAggregateInput;
};
export type branch_item_schedulesScalarWhereWithAggregatesInput = {
    AND?: Prisma.branch_item_schedulesScalarWhereWithAggregatesInput | Prisma.branch_item_schedulesScalarWhereWithAggregatesInput[];
    OR?: Prisma.branch_item_schedulesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.branch_item_schedulesScalarWhereWithAggregatesInput | Prisma.branch_item_schedulesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"branch_item_schedules"> | string;
    branch_catalog_item_id?: Prisma.UuidWithAggregatesFilter<"branch_item_schedules"> | string;
    day_of_week?: Prisma.IntWithAggregatesFilter<"branch_item_schedules"> | number;
    start_time?: Prisma.DateTimeWithAggregatesFilter<"branch_item_schedules"> | Date | string;
    end_time?: Prisma.DateTimeWithAggregatesFilter<"branch_item_schedules"> | Date | string;
    is_active?: Prisma.BoolWithAggregatesFilter<"branch_item_schedules"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"branch_item_schedules"> | Date | string;
};
export type branch_item_schedulesCreateInput = {
    id?: string;
    day_of_week: number;
    start_time: Date | string;
    end_time: Date | string;
    is_active?: boolean;
    created_at?: Date | string;
    branch_catalog_items: Prisma.branch_catalog_itemsCreateNestedOneWithoutBranch_item_schedulesInput;
};
export type branch_item_schedulesUncheckedCreateInput = {
    id?: string;
    branch_catalog_item_id: string;
    day_of_week: number;
    start_time: Date | string;
    end_time: Date | string;
    is_active?: boolean;
    created_at?: Date | string;
};
export type branch_item_schedulesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_catalog_items?: Prisma.branch_catalog_itemsUpdateOneRequiredWithoutBranch_item_schedulesNestedInput;
};
export type branch_item_schedulesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type branch_item_schedulesCreateManyInput = {
    id?: string;
    branch_catalog_item_id: string;
    day_of_week: number;
    start_time: Date | string;
    end_time: Date | string;
    is_active?: boolean;
    created_at?: Date | string;
};
export type branch_item_schedulesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type branch_item_schedulesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Branch_item_schedulesListRelationFilter = {
    every?: Prisma.branch_item_schedulesWhereInput;
    some?: Prisma.branch_item_schedulesWhereInput;
    none?: Prisma.branch_item_schedulesWhereInput;
};
export type branch_item_schedulesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type branch_item_schedulesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    branch_catalog_item_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type branch_item_schedulesAvgOrderByAggregateInput = {
    day_of_week?: Prisma.SortOrder;
};
export type branch_item_schedulesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    branch_catalog_item_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type branch_item_schedulesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    branch_catalog_item_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type branch_item_schedulesSumOrderByAggregateInput = {
    day_of_week?: Prisma.SortOrder;
};
export type branch_item_schedulesCreateNestedManyWithoutBranch_catalog_itemsInput = {
    create?: Prisma.XOR<Prisma.branch_item_schedulesCreateWithoutBranch_catalog_itemsInput, Prisma.branch_item_schedulesUncheckedCreateWithoutBranch_catalog_itemsInput> | Prisma.branch_item_schedulesCreateWithoutBranch_catalog_itemsInput[] | Prisma.branch_item_schedulesUncheckedCreateWithoutBranch_catalog_itemsInput[];
    connectOrCreate?: Prisma.branch_item_schedulesCreateOrConnectWithoutBranch_catalog_itemsInput | Prisma.branch_item_schedulesCreateOrConnectWithoutBranch_catalog_itemsInput[];
    createMany?: Prisma.branch_item_schedulesCreateManyBranch_catalog_itemsInputEnvelope;
    connect?: Prisma.branch_item_schedulesWhereUniqueInput | Prisma.branch_item_schedulesWhereUniqueInput[];
};
export type branch_item_schedulesUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput = {
    create?: Prisma.XOR<Prisma.branch_item_schedulesCreateWithoutBranch_catalog_itemsInput, Prisma.branch_item_schedulesUncheckedCreateWithoutBranch_catalog_itemsInput> | Prisma.branch_item_schedulesCreateWithoutBranch_catalog_itemsInput[] | Prisma.branch_item_schedulesUncheckedCreateWithoutBranch_catalog_itemsInput[];
    connectOrCreate?: Prisma.branch_item_schedulesCreateOrConnectWithoutBranch_catalog_itemsInput | Prisma.branch_item_schedulesCreateOrConnectWithoutBranch_catalog_itemsInput[];
    createMany?: Prisma.branch_item_schedulesCreateManyBranch_catalog_itemsInputEnvelope;
    connect?: Prisma.branch_item_schedulesWhereUniqueInput | Prisma.branch_item_schedulesWhereUniqueInput[];
};
export type branch_item_schedulesUpdateManyWithoutBranch_catalog_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.branch_item_schedulesCreateWithoutBranch_catalog_itemsInput, Prisma.branch_item_schedulesUncheckedCreateWithoutBranch_catalog_itemsInput> | Prisma.branch_item_schedulesCreateWithoutBranch_catalog_itemsInput[] | Prisma.branch_item_schedulesUncheckedCreateWithoutBranch_catalog_itemsInput[];
    connectOrCreate?: Prisma.branch_item_schedulesCreateOrConnectWithoutBranch_catalog_itemsInput | Prisma.branch_item_schedulesCreateOrConnectWithoutBranch_catalog_itemsInput[];
    upsert?: Prisma.branch_item_schedulesUpsertWithWhereUniqueWithoutBranch_catalog_itemsInput | Prisma.branch_item_schedulesUpsertWithWhereUniqueWithoutBranch_catalog_itemsInput[];
    createMany?: Prisma.branch_item_schedulesCreateManyBranch_catalog_itemsInputEnvelope;
    set?: Prisma.branch_item_schedulesWhereUniqueInput | Prisma.branch_item_schedulesWhereUniqueInput[];
    disconnect?: Prisma.branch_item_schedulesWhereUniqueInput | Prisma.branch_item_schedulesWhereUniqueInput[];
    delete?: Prisma.branch_item_schedulesWhereUniqueInput | Prisma.branch_item_schedulesWhereUniqueInput[];
    connect?: Prisma.branch_item_schedulesWhereUniqueInput | Prisma.branch_item_schedulesWhereUniqueInput[];
    update?: Prisma.branch_item_schedulesUpdateWithWhereUniqueWithoutBranch_catalog_itemsInput | Prisma.branch_item_schedulesUpdateWithWhereUniqueWithoutBranch_catalog_itemsInput[];
    updateMany?: Prisma.branch_item_schedulesUpdateManyWithWhereWithoutBranch_catalog_itemsInput | Prisma.branch_item_schedulesUpdateManyWithWhereWithoutBranch_catalog_itemsInput[];
    deleteMany?: Prisma.branch_item_schedulesScalarWhereInput | Prisma.branch_item_schedulesScalarWhereInput[];
};
export type branch_item_schedulesUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.branch_item_schedulesCreateWithoutBranch_catalog_itemsInput, Prisma.branch_item_schedulesUncheckedCreateWithoutBranch_catalog_itemsInput> | Prisma.branch_item_schedulesCreateWithoutBranch_catalog_itemsInput[] | Prisma.branch_item_schedulesUncheckedCreateWithoutBranch_catalog_itemsInput[];
    connectOrCreate?: Prisma.branch_item_schedulesCreateOrConnectWithoutBranch_catalog_itemsInput | Prisma.branch_item_schedulesCreateOrConnectWithoutBranch_catalog_itemsInput[];
    upsert?: Prisma.branch_item_schedulesUpsertWithWhereUniqueWithoutBranch_catalog_itemsInput | Prisma.branch_item_schedulesUpsertWithWhereUniqueWithoutBranch_catalog_itemsInput[];
    createMany?: Prisma.branch_item_schedulesCreateManyBranch_catalog_itemsInputEnvelope;
    set?: Prisma.branch_item_schedulesWhereUniqueInput | Prisma.branch_item_schedulesWhereUniqueInput[];
    disconnect?: Prisma.branch_item_schedulesWhereUniqueInput | Prisma.branch_item_schedulesWhereUniqueInput[];
    delete?: Prisma.branch_item_schedulesWhereUniqueInput | Prisma.branch_item_schedulesWhereUniqueInput[];
    connect?: Prisma.branch_item_schedulesWhereUniqueInput | Prisma.branch_item_schedulesWhereUniqueInput[];
    update?: Prisma.branch_item_schedulesUpdateWithWhereUniqueWithoutBranch_catalog_itemsInput | Prisma.branch_item_schedulesUpdateWithWhereUniqueWithoutBranch_catalog_itemsInput[];
    updateMany?: Prisma.branch_item_schedulesUpdateManyWithWhereWithoutBranch_catalog_itemsInput | Prisma.branch_item_schedulesUpdateManyWithWhereWithoutBranch_catalog_itemsInput[];
    deleteMany?: Prisma.branch_item_schedulesScalarWhereInput | Prisma.branch_item_schedulesScalarWhereInput[];
};
export type branch_item_schedulesCreateWithoutBranch_catalog_itemsInput = {
    id?: string;
    day_of_week: number;
    start_time: Date | string;
    end_time: Date | string;
    is_active?: boolean;
    created_at?: Date | string;
};
export type branch_item_schedulesUncheckedCreateWithoutBranch_catalog_itemsInput = {
    id?: string;
    day_of_week: number;
    start_time: Date | string;
    end_time: Date | string;
    is_active?: boolean;
    created_at?: Date | string;
};
export type branch_item_schedulesCreateOrConnectWithoutBranch_catalog_itemsInput = {
    where: Prisma.branch_item_schedulesWhereUniqueInput;
    create: Prisma.XOR<Prisma.branch_item_schedulesCreateWithoutBranch_catalog_itemsInput, Prisma.branch_item_schedulesUncheckedCreateWithoutBranch_catalog_itemsInput>;
};
export type branch_item_schedulesCreateManyBranch_catalog_itemsInputEnvelope = {
    data: Prisma.branch_item_schedulesCreateManyBranch_catalog_itemsInput | Prisma.branch_item_schedulesCreateManyBranch_catalog_itemsInput[];
    skipDuplicates?: boolean;
};
export type branch_item_schedulesUpsertWithWhereUniqueWithoutBranch_catalog_itemsInput = {
    where: Prisma.branch_item_schedulesWhereUniqueInput;
    update: Prisma.XOR<Prisma.branch_item_schedulesUpdateWithoutBranch_catalog_itemsInput, Prisma.branch_item_schedulesUncheckedUpdateWithoutBranch_catalog_itemsInput>;
    create: Prisma.XOR<Prisma.branch_item_schedulesCreateWithoutBranch_catalog_itemsInput, Prisma.branch_item_schedulesUncheckedCreateWithoutBranch_catalog_itemsInput>;
};
export type branch_item_schedulesUpdateWithWhereUniqueWithoutBranch_catalog_itemsInput = {
    where: Prisma.branch_item_schedulesWhereUniqueInput;
    data: Prisma.XOR<Prisma.branch_item_schedulesUpdateWithoutBranch_catalog_itemsInput, Prisma.branch_item_schedulesUncheckedUpdateWithoutBranch_catalog_itemsInput>;
};
export type branch_item_schedulesUpdateManyWithWhereWithoutBranch_catalog_itemsInput = {
    where: Prisma.branch_item_schedulesScalarWhereInput;
    data: Prisma.XOR<Prisma.branch_item_schedulesUpdateManyMutationInput, Prisma.branch_item_schedulesUncheckedUpdateManyWithoutBranch_catalog_itemsInput>;
};
export type branch_item_schedulesScalarWhereInput = {
    AND?: Prisma.branch_item_schedulesScalarWhereInput | Prisma.branch_item_schedulesScalarWhereInput[];
    OR?: Prisma.branch_item_schedulesScalarWhereInput[];
    NOT?: Prisma.branch_item_schedulesScalarWhereInput | Prisma.branch_item_schedulesScalarWhereInput[];
    id?: Prisma.UuidFilter<"branch_item_schedules"> | string;
    branch_catalog_item_id?: Prisma.UuidFilter<"branch_item_schedules"> | string;
    day_of_week?: Prisma.IntFilter<"branch_item_schedules"> | number;
    start_time?: Prisma.DateTimeFilter<"branch_item_schedules"> | Date | string;
    end_time?: Prisma.DateTimeFilter<"branch_item_schedules"> | Date | string;
    is_active?: Prisma.BoolFilter<"branch_item_schedules"> | boolean;
    created_at?: Prisma.DateTimeFilter<"branch_item_schedules"> | Date | string;
};
export type branch_item_schedulesCreateManyBranch_catalog_itemsInput = {
    id?: string;
    day_of_week: number;
    start_time: Date | string;
    end_time: Date | string;
    is_active?: boolean;
    created_at?: Date | string;
};
export type branch_item_schedulesUpdateWithoutBranch_catalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type branch_item_schedulesUncheckedUpdateWithoutBranch_catalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type branch_item_schedulesUncheckedUpdateManyWithoutBranch_catalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type branch_item_schedulesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    branch_catalog_item_id?: boolean;
    day_of_week?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    branch_catalog_items?: boolean | Prisma.branch_catalog_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["branch_item_schedules"]>;
export type branch_item_schedulesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    branch_catalog_item_id?: boolean;
    day_of_week?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    branch_catalog_items?: boolean | Prisma.branch_catalog_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["branch_item_schedules"]>;
export type branch_item_schedulesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    branch_catalog_item_id?: boolean;
    day_of_week?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    branch_catalog_items?: boolean | Prisma.branch_catalog_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["branch_item_schedules"]>;
export type branch_item_schedulesSelectScalar = {
    id?: boolean;
    branch_catalog_item_id?: boolean;
    day_of_week?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    is_active?: boolean;
    created_at?: boolean;
};
export type branch_item_schedulesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "branch_catalog_item_id" | "day_of_week" | "start_time" | "end_time" | "is_active" | "created_at", ExtArgs["result"]["branch_item_schedules"]>;
export type branch_item_schedulesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    branch_catalog_items?: boolean | Prisma.branch_catalog_itemsDefaultArgs<ExtArgs>;
};
export type branch_item_schedulesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    branch_catalog_items?: boolean | Prisma.branch_catalog_itemsDefaultArgs<ExtArgs>;
};
export type branch_item_schedulesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    branch_catalog_items?: boolean | Prisma.branch_catalog_itemsDefaultArgs<ExtArgs>;
};
export type $branch_item_schedulesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "branch_item_schedules";
    objects: {
        branch_catalog_items: Prisma.$branch_catalog_itemsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        branch_catalog_item_id: string;
        day_of_week: number;
        start_time: Date;
        end_time: Date;
        is_active: boolean;
        created_at: Date;
    }, ExtArgs["result"]["branch_item_schedules"]>;
    composites: {};
};
export type branch_item_schedulesGetPayload<S extends boolean | null | undefined | branch_item_schedulesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$branch_item_schedulesPayload, S>;
export type branch_item_schedulesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<branch_item_schedulesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Branch_item_schedulesCountAggregateInputType | true;
};
export interface branch_item_schedulesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['branch_item_schedules'];
        meta: {
            name: 'branch_item_schedules';
        };
    };
    findUnique<T extends branch_item_schedulesFindUniqueArgs>(args: Prisma.SelectSubset<T, branch_item_schedulesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__branch_item_schedulesClient<runtime.Types.Result.GetResult<Prisma.$branch_item_schedulesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends branch_item_schedulesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, branch_item_schedulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__branch_item_schedulesClient<runtime.Types.Result.GetResult<Prisma.$branch_item_schedulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends branch_item_schedulesFindFirstArgs>(args?: Prisma.SelectSubset<T, branch_item_schedulesFindFirstArgs<ExtArgs>>): Prisma.Prisma__branch_item_schedulesClient<runtime.Types.Result.GetResult<Prisma.$branch_item_schedulesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends branch_item_schedulesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, branch_item_schedulesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__branch_item_schedulesClient<runtime.Types.Result.GetResult<Prisma.$branch_item_schedulesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends branch_item_schedulesFindManyArgs>(args?: Prisma.SelectSubset<T, branch_item_schedulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$branch_item_schedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends branch_item_schedulesCreateArgs>(args: Prisma.SelectSubset<T, branch_item_schedulesCreateArgs<ExtArgs>>): Prisma.Prisma__branch_item_schedulesClient<runtime.Types.Result.GetResult<Prisma.$branch_item_schedulesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends branch_item_schedulesCreateManyArgs>(args?: Prisma.SelectSubset<T, branch_item_schedulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends branch_item_schedulesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, branch_item_schedulesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$branch_item_schedulesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends branch_item_schedulesDeleteArgs>(args: Prisma.SelectSubset<T, branch_item_schedulesDeleteArgs<ExtArgs>>): Prisma.Prisma__branch_item_schedulesClient<runtime.Types.Result.GetResult<Prisma.$branch_item_schedulesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends branch_item_schedulesUpdateArgs>(args: Prisma.SelectSubset<T, branch_item_schedulesUpdateArgs<ExtArgs>>): Prisma.Prisma__branch_item_schedulesClient<runtime.Types.Result.GetResult<Prisma.$branch_item_schedulesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends branch_item_schedulesDeleteManyArgs>(args?: Prisma.SelectSubset<T, branch_item_schedulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends branch_item_schedulesUpdateManyArgs>(args: Prisma.SelectSubset<T, branch_item_schedulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends branch_item_schedulesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, branch_item_schedulesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$branch_item_schedulesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends branch_item_schedulesUpsertArgs>(args: Prisma.SelectSubset<T, branch_item_schedulesUpsertArgs<ExtArgs>>): Prisma.Prisma__branch_item_schedulesClient<runtime.Types.Result.GetResult<Prisma.$branch_item_schedulesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends branch_item_schedulesCountArgs>(args?: Prisma.Subset<T, branch_item_schedulesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Branch_item_schedulesCountAggregateOutputType> : number>;
    aggregate<T extends Branch_item_schedulesAggregateArgs>(args: Prisma.Subset<T, Branch_item_schedulesAggregateArgs>): Prisma.PrismaPromise<GetBranch_item_schedulesAggregateType<T>>;
    groupBy<T extends branch_item_schedulesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: branch_item_schedulesGroupByArgs['orderBy'];
    } : {
        orderBy?: branch_item_schedulesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, branch_item_schedulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranch_item_schedulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: branch_item_schedulesFieldRefs;
}
export interface Prisma__branch_item_schedulesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    branch_catalog_items<T extends Prisma.branch_catalog_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.branch_catalog_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__branch_catalog_itemsClient<runtime.Types.Result.GetResult<Prisma.$branch_catalog_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface branch_item_schedulesFieldRefs {
    readonly id: Prisma.FieldRef<"branch_item_schedules", 'String'>;
    readonly branch_catalog_item_id: Prisma.FieldRef<"branch_item_schedules", 'String'>;
    readonly day_of_week: Prisma.FieldRef<"branch_item_schedules", 'Int'>;
    readonly start_time: Prisma.FieldRef<"branch_item_schedules", 'DateTime'>;
    readonly end_time: Prisma.FieldRef<"branch_item_schedules", 'DateTime'>;
    readonly is_active: Prisma.FieldRef<"branch_item_schedules", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"branch_item_schedules", 'DateTime'>;
}
export type branch_item_schedulesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_item_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.branch_item_schedulesOmit<ExtArgs> | null;
    include?: Prisma.branch_item_schedulesInclude<ExtArgs> | null;
    where: Prisma.branch_item_schedulesWhereUniqueInput;
};
export type branch_item_schedulesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_item_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.branch_item_schedulesOmit<ExtArgs> | null;
    include?: Prisma.branch_item_schedulesInclude<ExtArgs> | null;
    where: Prisma.branch_item_schedulesWhereUniqueInput;
};
export type branch_item_schedulesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_item_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.branch_item_schedulesOmit<ExtArgs> | null;
    include?: Prisma.branch_item_schedulesInclude<ExtArgs> | null;
    where?: Prisma.branch_item_schedulesWhereInput;
    orderBy?: Prisma.branch_item_schedulesOrderByWithRelationInput | Prisma.branch_item_schedulesOrderByWithRelationInput[];
    cursor?: Prisma.branch_item_schedulesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Branch_item_schedulesScalarFieldEnum | Prisma.Branch_item_schedulesScalarFieldEnum[];
};
export type branch_item_schedulesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_item_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.branch_item_schedulesOmit<ExtArgs> | null;
    include?: Prisma.branch_item_schedulesInclude<ExtArgs> | null;
    where?: Prisma.branch_item_schedulesWhereInput;
    orderBy?: Prisma.branch_item_schedulesOrderByWithRelationInput | Prisma.branch_item_schedulesOrderByWithRelationInput[];
    cursor?: Prisma.branch_item_schedulesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Branch_item_schedulesScalarFieldEnum | Prisma.Branch_item_schedulesScalarFieldEnum[];
};
export type branch_item_schedulesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_item_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.branch_item_schedulesOmit<ExtArgs> | null;
    include?: Prisma.branch_item_schedulesInclude<ExtArgs> | null;
    where?: Prisma.branch_item_schedulesWhereInput;
    orderBy?: Prisma.branch_item_schedulesOrderByWithRelationInput | Prisma.branch_item_schedulesOrderByWithRelationInput[];
    cursor?: Prisma.branch_item_schedulesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Branch_item_schedulesScalarFieldEnum | Prisma.Branch_item_schedulesScalarFieldEnum[];
};
export type branch_item_schedulesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_item_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.branch_item_schedulesOmit<ExtArgs> | null;
    include?: Prisma.branch_item_schedulesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.branch_item_schedulesCreateInput, Prisma.branch_item_schedulesUncheckedCreateInput>;
};
export type branch_item_schedulesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.branch_item_schedulesCreateManyInput | Prisma.branch_item_schedulesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type branch_item_schedulesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_item_schedulesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.branch_item_schedulesOmit<ExtArgs> | null;
    data: Prisma.branch_item_schedulesCreateManyInput | Prisma.branch_item_schedulesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.branch_item_schedulesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type branch_item_schedulesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_item_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.branch_item_schedulesOmit<ExtArgs> | null;
    include?: Prisma.branch_item_schedulesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.branch_item_schedulesUpdateInput, Prisma.branch_item_schedulesUncheckedUpdateInput>;
    where: Prisma.branch_item_schedulesWhereUniqueInput;
};
export type branch_item_schedulesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.branch_item_schedulesUpdateManyMutationInput, Prisma.branch_item_schedulesUncheckedUpdateManyInput>;
    where?: Prisma.branch_item_schedulesWhereInput;
    limit?: number;
};
export type branch_item_schedulesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_item_schedulesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.branch_item_schedulesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.branch_item_schedulesUpdateManyMutationInput, Prisma.branch_item_schedulesUncheckedUpdateManyInput>;
    where?: Prisma.branch_item_schedulesWhereInput;
    limit?: number;
    include?: Prisma.branch_item_schedulesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type branch_item_schedulesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_item_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.branch_item_schedulesOmit<ExtArgs> | null;
    include?: Prisma.branch_item_schedulesInclude<ExtArgs> | null;
    where: Prisma.branch_item_schedulesWhereUniqueInput;
    create: Prisma.XOR<Prisma.branch_item_schedulesCreateInput, Prisma.branch_item_schedulesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.branch_item_schedulesUpdateInput, Prisma.branch_item_schedulesUncheckedUpdateInput>;
};
export type branch_item_schedulesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_item_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.branch_item_schedulesOmit<ExtArgs> | null;
    include?: Prisma.branch_item_schedulesInclude<ExtArgs> | null;
    where: Prisma.branch_item_schedulesWhereUniqueInput;
};
export type branch_item_schedulesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.branch_item_schedulesWhereInput;
    limit?: number;
};
export type branch_item_schedulesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_item_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.branch_item_schedulesOmit<ExtArgs> | null;
    include?: Prisma.branch_item_schedulesInclude<ExtArgs> | null;
};
export {};
