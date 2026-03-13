import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type branch_operating_hoursModel = runtime.Types.Result.DefaultSelection<Prisma.$branch_operating_hoursPayload>;
export type AggregateBranch_operating_hours = {
    _count: Branch_operating_hoursCountAggregateOutputType | null;
    _avg: Branch_operating_hoursAvgAggregateOutputType | null;
    _sum: Branch_operating_hoursSumAggregateOutputType | null;
    _min: Branch_operating_hoursMinAggregateOutputType | null;
    _max: Branch_operating_hoursMaxAggregateOutputType | null;
};
export type Branch_operating_hoursAvgAggregateOutputType = {
    day_of_week: number | null;
};
export type Branch_operating_hoursSumAggregateOutputType = {
    day_of_week: number | null;
};
export type Branch_operating_hoursMinAggregateOutputType = {
    id: string | null;
    branch_id: string | null;
    day_of_week: number | null;
    open_time: Date | null;
    close_time: Date | null;
    is_closed: boolean | null;
    created_at: Date | null;
};
export type Branch_operating_hoursMaxAggregateOutputType = {
    id: string | null;
    branch_id: string | null;
    day_of_week: number | null;
    open_time: Date | null;
    close_time: Date | null;
    is_closed: boolean | null;
    created_at: Date | null;
};
export type Branch_operating_hoursCountAggregateOutputType = {
    id: number;
    branch_id: number;
    day_of_week: number;
    open_time: number;
    close_time: number;
    is_closed: number;
    created_at: number;
    _all: number;
};
export type Branch_operating_hoursAvgAggregateInputType = {
    day_of_week?: true;
};
export type Branch_operating_hoursSumAggregateInputType = {
    day_of_week?: true;
};
export type Branch_operating_hoursMinAggregateInputType = {
    id?: true;
    branch_id?: true;
    day_of_week?: true;
    open_time?: true;
    close_time?: true;
    is_closed?: true;
    created_at?: true;
};
export type Branch_operating_hoursMaxAggregateInputType = {
    id?: true;
    branch_id?: true;
    day_of_week?: true;
    open_time?: true;
    close_time?: true;
    is_closed?: true;
    created_at?: true;
};
export type Branch_operating_hoursCountAggregateInputType = {
    id?: true;
    branch_id?: true;
    day_of_week?: true;
    open_time?: true;
    close_time?: true;
    is_closed?: true;
    created_at?: true;
    _all?: true;
};
export type Branch_operating_hoursAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.branch_operating_hoursWhereInput;
    orderBy?: Prisma.branch_operating_hoursOrderByWithRelationInput | Prisma.branch_operating_hoursOrderByWithRelationInput[];
    cursor?: Prisma.branch_operating_hoursWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Branch_operating_hoursCountAggregateInputType;
    _avg?: Branch_operating_hoursAvgAggregateInputType;
    _sum?: Branch_operating_hoursSumAggregateInputType;
    _min?: Branch_operating_hoursMinAggregateInputType;
    _max?: Branch_operating_hoursMaxAggregateInputType;
};
export type GetBranch_operating_hoursAggregateType<T extends Branch_operating_hoursAggregateArgs> = {
    [P in keyof T & keyof AggregateBranch_operating_hours]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBranch_operating_hours[P]> : Prisma.GetScalarType<T[P], AggregateBranch_operating_hours[P]>;
};
export type branch_operating_hoursGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.branch_operating_hoursWhereInput;
    orderBy?: Prisma.branch_operating_hoursOrderByWithAggregationInput | Prisma.branch_operating_hoursOrderByWithAggregationInput[];
    by: Prisma.Branch_operating_hoursScalarFieldEnum[] | Prisma.Branch_operating_hoursScalarFieldEnum;
    having?: Prisma.branch_operating_hoursScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Branch_operating_hoursCountAggregateInputType | true;
    _avg?: Branch_operating_hoursAvgAggregateInputType;
    _sum?: Branch_operating_hoursSumAggregateInputType;
    _min?: Branch_operating_hoursMinAggregateInputType;
    _max?: Branch_operating_hoursMaxAggregateInputType;
};
export type Branch_operating_hoursGroupByOutputType = {
    id: string;
    branch_id: string;
    day_of_week: number;
    open_time: Date | null;
    close_time: Date | null;
    is_closed: boolean;
    created_at: Date;
    _count: Branch_operating_hoursCountAggregateOutputType | null;
    _avg: Branch_operating_hoursAvgAggregateOutputType | null;
    _sum: Branch_operating_hoursSumAggregateOutputType | null;
    _min: Branch_operating_hoursMinAggregateOutputType | null;
    _max: Branch_operating_hoursMaxAggregateOutputType | null;
};
type GetBranch_operating_hoursGroupByPayload<T extends branch_operating_hoursGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Branch_operating_hoursGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Branch_operating_hoursGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Branch_operating_hoursGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Branch_operating_hoursGroupByOutputType[P]>;
}>>;
export type branch_operating_hoursWhereInput = {
    AND?: Prisma.branch_operating_hoursWhereInput | Prisma.branch_operating_hoursWhereInput[];
    OR?: Prisma.branch_operating_hoursWhereInput[];
    NOT?: Prisma.branch_operating_hoursWhereInput | Prisma.branch_operating_hoursWhereInput[];
    id?: Prisma.UuidFilter<"branch_operating_hours"> | string;
    branch_id?: Prisma.UuidFilter<"branch_operating_hours"> | string;
    day_of_week?: Prisma.IntFilter<"branch_operating_hours"> | number;
    open_time?: Prisma.DateTimeNullableFilter<"branch_operating_hours"> | Date | string | null;
    close_time?: Prisma.DateTimeNullableFilter<"branch_operating_hours"> | Date | string | null;
    is_closed?: Prisma.BoolFilter<"branch_operating_hours"> | boolean;
    created_at?: Prisma.DateTimeFilter<"branch_operating_hours"> | Date | string;
    store_branches?: Prisma.XOR<Prisma.Store_branchesScalarRelationFilter, Prisma.store_branchesWhereInput>;
};
export type branch_operating_hoursOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
    open_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    close_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_closed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    store_branches?: Prisma.store_branchesOrderByWithRelationInput;
};
export type branch_operating_hoursWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    branch_id_day_of_week?: Prisma.branch_operating_hoursBranch_idDay_of_weekCompoundUniqueInput;
    AND?: Prisma.branch_operating_hoursWhereInput | Prisma.branch_operating_hoursWhereInput[];
    OR?: Prisma.branch_operating_hoursWhereInput[];
    NOT?: Prisma.branch_operating_hoursWhereInput | Prisma.branch_operating_hoursWhereInput[];
    branch_id?: Prisma.UuidFilter<"branch_operating_hours"> | string;
    day_of_week?: Prisma.IntFilter<"branch_operating_hours"> | number;
    open_time?: Prisma.DateTimeNullableFilter<"branch_operating_hours"> | Date | string | null;
    close_time?: Prisma.DateTimeNullableFilter<"branch_operating_hours"> | Date | string | null;
    is_closed?: Prisma.BoolFilter<"branch_operating_hours"> | boolean;
    created_at?: Prisma.DateTimeFilter<"branch_operating_hours"> | Date | string;
    store_branches?: Prisma.XOR<Prisma.Store_branchesScalarRelationFilter, Prisma.store_branchesWhereInput>;
}, "id" | "branch_id_day_of_week">;
export type branch_operating_hoursOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
    open_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    close_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_closed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.branch_operating_hoursCountOrderByAggregateInput;
    _avg?: Prisma.branch_operating_hoursAvgOrderByAggregateInput;
    _max?: Prisma.branch_operating_hoursMaxOrderByAggregateInput;
    _min?: Prisma.branch_operating_hoursMinOrderByAggregateInput;
    _sum?: Prisma.branch_operating_hoursSumOrderByAggregateInput;
};
export type branch_operating_hoursScalarWhereWithAggregatesInput = {
    AND?: Prisma.branch_operating_hoursScalarWhereWithAggregatesInput | Prisma.branch_operating_hoursScalarWhereWithAggregatesInput[];
    OR?: Prisma.branch_operating_hoursScalarWhereWithAggregatesInput[];
    NOT?: Prisma.branch_operating_hoursScalarWhereWithAggregatesInput | Prisma.branch_operating_hoursScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"branch_operating_hours"> | string;
    branch_id?: Prisma.UuidWithAggregatesFilter<"branch_operating_hours"> | string;
    day_of_week?: Prisma.IntWithAggregatesFilter<"branch_operating_hours"> | number;
    open_time?: Prisma.DateTimeNullableWithAggregatesFilter<"branch_operating_hours"> | Date | string | null;
    close_time?: Prisma.DateTimeNullableWithAggregatesFilter<"branch_operating_hours"> | Date | string | null;
    is_closed?: Prisma.BoolWithAggregatesFilter<"branch_operating_hours"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"branch_operating_hours"> | Date | string;
};
export type branch_operating_hoursCreateInput = {
    id?: string;
    day_of_week: number;
    open_time?: Date | string | null;
    close_time?: Date | string | null;
    is_closed?: boolean;
    created_at?: Date | string;
    store_branches: Prisma.store_branchesCreateNestedOneWithoutBranch_operating_hoursInput;
};
export type branch_operating_hoursUncheckedCreateInput = {
    id?: string;
    branch_id: string;
    day_of_week: number;
    open_time?: Date | string | null;
    close_time?: Date | string | null;
    is_closed?: boolean;
    created_at?: Date | string;
};
export type branch_operating_hoursUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
    open_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    close_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_closed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_branches?: Prisma.store_branchesUpdateOneRequiredWithoutBranch_operating_hoursNestedInput;
};
export type branch_operating_hoursUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
    open_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    close_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_closed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type branch_operating_hoursCreateManyInput = {
    id?: string;
    branch_id: string;
    day_of_week: number;
    open_time?: Date | string | null;
    close_time?: Date | string | null;
    is_closed?: boolean;
    created_at?: Date | string;
};
export type branch_operating_hoursUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
    open_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    close_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_closed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type branch_operating_hoursUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
    open_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    close_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_closed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type branch_operating_hoursBranch_idDay_of_weekCompoundUniqueInput = {
    branch_id: string;
    day_of_week: number;
};
export type branch_operating_hoursCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
    open_time?: Prisma.SortOrder;
    close_time?: Prisma.SortOrder;
    is_closed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type branch_operating_hoursAvgOrderByAggregateInput = {
    day_of_week?: Prisma.SortOrder;
};
export type branch_operating_hoursMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
    open_time?: Prisma.SortOrder;
    close_time?: Prisma.SortOrder;
    is_closed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type branch_operating_hoursMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
    open_time?: Prisma.SortOrder;
    close_time?: Prisma.SortOrder;
    is_closed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type branch_operating_hoursSumOrderByAggregateInput = {
    day_of_week?: Prisma.SortOrder;
};
export type Branch_operating_hoursListRelationFilter = {
    every?: Prisma.branch_operating_hoursWhereInput;
    some?: Prisma.branch_operating_hoursWhereInput;
    none?: Prisma.branch_operating_hoursWhereInput;
};
export type branch_operating_hoursOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type branch_operating_hoursCreateNestedManyWithoutStore_branchesInput = {
    create?: Prisma.XOR<Prisma.branch_operating_hoursCreateWithoutStore_branchesInput, Prisma.branch_operating_hoursUncheckedCreateWithoutStore_branchesInput> | Prisma.branch_operating_hoursCreateWithoutStore_branchesInput[] | Prisma.branch_operating_hoursUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.branch_operating_hoursCreateOrConnectWithoutStore_branchesInput | Prisma.branch_operating_hoursCreateOrConnectWithoutStore_branchesInput[];
    createMany?: Prisma.branch_operating_hoursCreateManyStore_branchesInputEnvelope;
    connect?: Prisma.branch_operating_hoursWhereUniqueInput | Prisma.branch_operating_hoursWhereUniqueInput[];
};
export type branch_operating_hoursUncheckedCreateNestedManyWithoutStore_branchesInput = {
    create?: Prisma.XOR<Prisma.branch_operating_hoursCreateWithoutStore_branchesInput, Prisma.branch_operating_hoursUncheckedCreateWithoutStore_branchesInput> | Prisma.branch_operating_hoursCreateWithoutStore_branchesInput[] | Prisma.branch_operating_hoursUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.branch_operating_hoursCreateOrConnectWithoutStore_branchesInput | Prisma.branch_operating_hoursCreateOrConnectWithoutStore_branchesInput[];
    createMany?: Prisma.branch_operating_hoursCreateManyStore_branchesInputEnvelope;
    connect?: Prisma.branch_operating_hoursWhereUniqueInput | Prisma.branch_operating_hoursWhereUniqueInput[];
};
export type branch_operating_hoursUpdateManyWithoutStore_branchesNestedInput = {
    create?: Prisma.XOR<Prisma.branch_operating_hoursCreateWithoutStore_branchesInput, Prisma.branch_operating_hoursUncheckedCreateWithoutStore_branchesInput> | Prisma.branch_operating_hoursCreateWithoutStore_branchesInput[] | Prisma.branch_operating_hoursUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.branch_operating_hoursCreateOrConnectWithoutStore_branchesInput | Prisma.branch_operating_hoursCreateOrConnectWithoutStore_branchesInput[];
    upsert?: Prisma.branch_operating_hoursUpsertWithWhereUniqueWithoutStore_branchesInput | Prisma.branch_operating_hoursUpsertWithWhereUniqueWithoutStore_branchesInput[];
    createMany?: Prisma.branch_operating_hoursCreateManyStore_branchesInputEnvelope;
    set?: Prisma.branch_operating_hoursWhereUniqueInput | Prisma.branch_operating_hoursWhereUniqueInput[];
    disconnect?: Prisma.branch_operating_hoursWhereUniqueInput | Prisma.branch_operating_hoursWhereUniqueInput[];
    delete?: Prisma.branch_operating_hoursWhereUniqueInput | Prisma.branch_operating_hoursWhereUniqueInput[];
    connect?: Prisma.branch_operating_hoursWhereUniqueInput | Prisma.branch_operating_hoursWhereUniqueInput[];
    update?: Prisma.branch_operating_hoursUpdateWithWhereUniqueWithoutStore_branchesInput | Prisma.branch_operating_hoursUpdateWithWhereUniqueWithoutStore_branchesInput[];
    updateMany?: Prisma.branch_operating_hoursUpdateManyWithWhereWithoutStore_branchesInput | Prisma.branch_operating_hoursUpdateManyWithWhereWithoutStore_branchesInput[];
    deleteMany?: Prisma.branch_operating_hoursScalarWhereInput | Prisma.branch_operating_hoursScalarWhereInput[];
};
export type branch_operating_hoursUncheckedUpdateManyWithoutStore_branchesNestedInput = {
    create?: Prisma.XOR<Prisma.branch_operating_hoursCreateWithoutStore_branchesInput, Prisma.branch_operating_hoursUncheckedCreateWithoutStore_branchesInput> | Prisma.branch_operating_hoursCreateWithoutStore_branchesInput[] | Prisma.branch_operating_hoursUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.branch_operating_hoursCreateOrConnectWithoutStore_branchesInput | Prisma.branch_operating_hoursCreateOrConnectWithoutStore_branchesInput[];
    upsert?: Prisma.branch_operating_hoursUpsertWithWhereUniqueWithoutStore_branchesInput | Prisma.branch_operating_hoursUpsertWithWhereUniqueWithoutStore_branchesInput[];
    createMany?: Prisma.branch_operating_hoursCreateManyStore_branchesInputEnvelope;
    set?: Prisma.branch_operating_hoursWhereUniqueInput | Prisma.branch_operating_hoursWhereUniqueInput[];
    disconnect?: Prisma.branch_operating_hoursWhereUniqueInput | Prisma.branch_operating_hoursWhereUniqueInput[];
    delete?: Prisma.branch_operating_hoursWhereUniqueInput | Prisma.branch_operating_hoursWhereUniqueInput[];
    connect?: Prisma.branch_operating_hoursWhereUniqueInput | Prisma.branch_operating_hoursWhereUniqueInput[];
    update?: Prisma.branch_operating_hoursUpdateWithWhereUniqueWithoutStore_branchesInput | Prisma.branch_operating_hoursUpdateWithWhereUniqueWithoutStore_branchesInput[];
    updateMany?: Prisma.branch_operating_hoursUpdateManyWithWhereWithoutStore_branchesInput | Prisma.branch_operating_hoursUpdateManyWithWhereWithoutStore_branchesInput[];
    deleteMany?: Prisma.branch_operating_hoursScalarWhereInput | Prisma.branch_operating_hoursScalarWhereInput[];
};
export type branch_operating_hoursCreateWithoutStore_branchesInput = {
    id?: string;
    day_of_week: number;
    open_time?: Date | string | null;
    close_time?: Date | string | null;
    is_closed?: boolean;
    created_at?: Date | string;
};
export type branch_operating_hoursUncheckedCreateWithoutStore_branchesInput = {
    id?: string;
    day_of_week: number;
    open_time?: Date | string | null;
    close_time?: Date | string | null;
    is_closed?: boolean;
    created_at?: Date | string;
};
export type branch_operating_hoursCreateOrConnectWithoutStore_branchesInput = {
    where: Prisma.branch_operating_hoursWhereUniqueInput;
    create: Prisma.XOR<Prisma.branch_operating_hoursCreateWithoutStore_branchesInput, Prisma.branch_operating_hoursUncheckedCreateWithoutStore_branchesInput>;
};
export type branch_operating_hoursCreateManyStore_branchesInputEnvelope = {
    data: Prisma.branch_operating_hoursCreateManyStore_branchesInput | Prisma.branch_operating_hoursCreateManyStore_branchesInput[];
    skipDuplicates?: boolean;
};
export type branch_operating_hoursUpsertWithWhereUniqueWithoutStore_branchesInput = {
    where: Prisma.branch_operating_hoursWhereUniqueInput;
    update: Prisma.XOR<Prisma.branch_operating_hoursUpdateWithoutStore_branchesInput, Prisma.branch_operating_hoursUncheckedUpdateWithoutStore_branchesInput>;
    create: Prisma.XOR<Prisma.branch_operating_hoursCreateWithoutStore_branchesInput, Prisma.branch_operating_hoursUncheckedCreateWithoutStore_branchesInput>;
};
export type branch_operating_hoursUpdateWithWhereUniqueWithoutStore_branchesInput = {
    where: Prisma.branch_operating_hoursWhereUniqueInput;
    data: Prisma.XOR<Prisma.branch_operating_hoursUpdateWithoutStore_branchesInput, Prisma.branch_operating_hoursUncheckedUpdateWithoutStore_branchesInput>;
};
export type branch_operating_hoursUpdateManyWithWhereWithoutStore_branchesInput = {
    where: Prisma.branch_operating_hoursScalarWhereInput;
    data: Prisma.XOR<Prisma.branch_operating_hoursUpdateManyMutationInput, Prisma.branch_operating_hoursUncheckedUpdateManyWithoutStore_branchesInput>;
};
export type branch_operating_hoursScalarWhereInput = {
    AND?: Prisma.branch_operating_hoursScalarWhereInput | Prisma.branch_operating_hoursScalarWhereInput[];
    OR?: Prisma.branch_operating_hoursScalarWhereInput[];
    NOT?: Prisma.branch_operating_hoursScalarWhereInput | Prisma.branch_operating_hoursScalarWhereInput[];
    id?: Prisma.UuidFilter<"branch_operating_hours"> | string;
    branch_id?: Prisma.UuidFilter<"branch_operating_hours"> | string;
    day_of_week?: Prisma.IntFilter<"branch_operating_hours"> | number;
    open_time?: Prisma.DateTimeNullableFilter<"branch_operating_hours"> | Date | string | null;
    close_time?: Prisma.DateTimeNullableFilter<"branch_operating_hours"> | Date | string | null;
    is_closed?: Prisma.BoolFilter<"branch_operating_hours"> | boolean;
    created_at?: Prisma.DateTimeFilter<"branch_operating_hours"> | Date | string;
};
export type branch_operating_hoursCreateManyStore_branchesInput = {
    id?: string;
    day_of_week: number;
    open_time?: Date | string | null;
    close_time?: Date | string | null;
    is_closed?: boolean;
    created_at?: Date | string;
};
export type branch_operating_hoursUpdateWithoutStore_branchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
    open_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    close_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_closed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type branch_operating_hoursUncheckedUpdateWithoutStore_branchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
    open_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    close_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_closed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type branch_operating_hoursUncheckedUpdateManyWithoutStore_branchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
    open_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    close_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_closed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type branch_operating_hoursSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    branch_id?: boolean;
    day_of_week?: boolean;
    open_time?: boolean;
    close_time?: boolean;
    is_closed?: boolean;
    created_at?: boolean;
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["branch_operating_hours"]>;
export type branch_operating_hoursSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    branch_id?: boolean;
    day_of_week?: boolean;
    open_time?: boolean;
    close_time?: boolean;
    is_closed?: boolean;
    created_at?: boolean;
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["branch_operating_hours"]>;
export type branch_operating_hoursSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    branch_id?: boolean;
    day_of_week?: boolean;
    open_time?: boolean;
    close_time?: boolean;
    is_closed?: boolean;
    created_at?: boolean;
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["branch_operating_hours"]>;
export type branch_operating_hoursSelectScalar = {
    id?: boolean;
    branch_id?: boolean;
    day_of_week?: boolean;
    open_time?: boolean;
    close_time?: boolean;
    is_closed?: boolean;
    created_at?: boolean;
};
export type branch_operating_hoursOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "branch_id" | "day_of_week" | "open_time" | "close_time" | "is_closed" | "created_at", ExtArgs["result"]["branch_operating_hours"]>;
export type branch_operating_hoursInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
};
export type branch_operating_hoursIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
};
export type branch_operating_hoursIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
};
export type $branch_operating_hoursPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "branch_operating_hours";
    objects: {
        store_branches: Prisma.$store_branchesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        branch_id: string;
        day_of_week: number;
        open_time: Date | null;
        close_time: Date | null;
        is_closed: boolean;
        created_at: Date;
    }, ExtArgs["result"]["branch_operating_hours"]>;
    composites: {};
};
export type branch_operating_hoursGetPayload<S extends boolean | null | undefined | branch_operating_hoursDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$branch_operating_hoursPayload, S>;
export type branch_operating_hoursCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<branch_operating_hoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Branch_operating_hoursCountAggregateInputType | true;
};
export interface branch_operating_hoursDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['branch_operating_hours'];
        meta: {
            name: 'branch_operating_hours';
        };
    };
    findUnique<T extends branch_operating_hoursFindUniqueArgs>(args: Prisma.SelectSubset<T, branch_operating_hoursFindUniqueArgs<ExtArgs>>): Prisma.Prisma__branch_operating_hoursClient<runtime.Types.Result.GetResult<Prisma.$branch_operating_hoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends branch_operating_hoursFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, branch_operating_hoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__branch_operating_hoursClient<runtime.Types.Result.GetResult<Prisma.$branch_operating_hoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends branch_operating_hoursFindFirstArgs>(args?: Prisma.SelectSubset<T, branch_operating_hoursFindFirstArgs<ExtArgs>>): Prisma.Prisma__branch_operating_hoursClient<runtime.Types.Result.GetResult<Prisma.$branch_operating_hoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends branch_operating_hoursFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, branch_operating_hoursFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__branch_operating_hoursClient<runtime.Types.Result.GetResult<Prisma.$branch_operating_hoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends branch_operating_hoursFindManyArgs>(args?: Prisma.SelectSubset<T, branch_operating_hoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$branch_operating_hoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends branch_operating_hoursCreateArgs>(args: Prisma.SelectSubset<T, branch_operating_hoursCreateArgs<ExtArgs>>): Prisma.Prisma__branch_operating_hoursClient<runtime.Types.Result.GetResult<Prisma.$branch_operating_hoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends branch_operating_hoursCreateManyArgs>(args?: Prisma.SelectSubset<T, branch_operating_hoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends branch_operating_hoursCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, branch_operating_hoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$branch_operating_hoursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends branch_operating_hoursDeleteArgs>(args: Prisma.SelectSubset<T, branch_operating_hoursDeleteArgs<ExtArgs>>): Prisma.Prisma__branch_operating_hoursClient<runtime.Types.Result.GetResult<Prisma.$branch_operating_hoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends branch_operating_hoursUpdateArgs>(args: Prisma.SelectSubset<T, branch_operating_hoursUpdateArgs<ExtArgs>>): Prisma.Prisma__branch_operating_hoursClient<runtime.Types.Result.GetResult<Prisma.$branch_operating_hoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends branch_operating_hoursDeleteManyArgs>(args?: Prisma.SelectSubset<T, branch_operating_hoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends branch_operating_hoursUpdateManyArgs>(args: Prisma.SelectSubset<T, branch_operating_hoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends branch_operating_hoursUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, branch_operating_hoursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$branch_operating_hoursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends branch_operating_hoursUpsertArgs>(args: Prisma.SelectSubset<T, branch_operating_hoursUpsertArgs<ExtArgs>>): Prisma.Prisma__branch_operating_hoursClient<runtime.Types.Result.GetResult<Prisma.$branch_operating_hoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends branch_operating_hoursCountArgs>(args?: Prisma.Subset<T, branch_operating_hoursCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Branch_operating_hoursCountAggregateOutputType> : number>;
    aggregate<T extends Branch_operating_hoursAggregateArgs>(args: Prisma.Subset<T, Branch_operating_hoursAggregateArgs>): Prisma.PrismaPromise<GetBranch_operating_hoursAggregateType<T>>;
    groupBy<T extends branch_operating_hoursGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: branch_operating_hoursGroupByArgs['orderBy'];
    } : {
        orderBy?: branch_operating_hoursGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, branch_operating_hoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranch_operating_hoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: branch_operating_hoursFieldRefs;
}
export interface Prisma__branch_operating_hoursClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    store_branches<T extends Prisma.store_branchesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_branchesDefaultArgs<ExtArgs>>): Prisma.Prisma__store_branchesClient<runtime.Types.Result.GetResult<Prisma.$store_branchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface branch_operating_hoursFieldRefs {
    readonly id: Prisma.FieldRef<"branch_operating_hours", 'String'>;
    readonly branch_id: Prisma.FieldRef<"branch_operating_hours", 'String'>;
    readonly day_of_week: Prisma.FieldRef<"branch_operating_hours", 'Int'>;
    readonly open_time: Prisma.FieldRef<"branch_operating_hours", 'DateTime'>;
    readonly close_time: Prisma.FieldRef<"branch_operating_hours", 'DateTime'>;
    readonly is_closed: Prisma.FieldRef<"branch_operating_hours", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"branch_operating_hours", 'DateTime'>;
}
export type branch_operating_hoursFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_operating_hoursSelect<ExtArgs> | null;
    omit?: Prisma.branch_operating_hoursOmit<ExtArgs> | null;
    include?: Prisma.branch_operating_hoursInclude<ExtArgs> | null;
    where: Prisma.branch_operating_hoursWhereUniqueInput;
};
export type branch_operating_hoursFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_operating_hoursSelect<ExtArgs> | null;
    omit?: Prisma.branch_operating_hoursOmit<ExtArgs> | null;
    include?: Prisma.branch_operating_hoursInclude<ExtArgs> | null;
    where: Prisma.branch_operating_hoursWhereUniqueInput;
};
export type branch_operating_hoursFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_operating_hoursSelect<ExtArgs> | null;
    omit?: Prisma.branch_operating_hoursOmit<ExtArgs> | null;
    include?: Prisma.branch_operating_hoursInclude<ExtArgs> | null;
    where?: Prisma.branch_operating_hoursWhereInput;
    orderBy?: Prisma.branch_operating_hoursOrderByWithRelationInput | Prisma.branch_operating_hoursOrderByWithRelationInput[];
    cursor?: Prisma.branch_operating_hoursWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Branch_operating_hoursScalarFieldEnum | Prisma.Branch_operating_hoursScalarFieldEnum[];
};
export type branch_operating_hoursFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_operating_hoursSelect<ExtArgs> | null;
    omit?: Prisma.branch_operating_hoursOmit<ExtArgs> | null;
    include?: Prisma.branch_operating_hoursInclude<ExtArgs> | null;
    where?: Prisma.branch_operating_hoursWhereInput;
    orderBy?: Prisma.branch_operating_hoursOrderByWithRelationInput | Prisma.branch_operating_hoursOrderByWithRelationInput[];
    cursor?: Prisma.branch_operating_hoursWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Branch_operating_hoursScalarFieldEnum | Prisma.Branch_operating_hoursScalarFieldEnum[];
};
export type branch_operating_hoursFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_operating_hoursSelect<ExtArgs> | null;
    omit?: Prisma.branch_operating_hoursOmit<ExtArgs> | null;
    include?: Prisma.branch_operating_hoursInclude<ExtArgs> | null;
    where?: Prisma.branch_operating_hoursWhereInput;
    orderBy?: Prisma.branch_operating_hoursOrderByWithRelationInput | Prisma.branch_operating_hoursOrderByWithRelationInput[];
    cursor?: Prisma.branch_operating_hoursWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Branch_operating_hoursScalarFieldEnum | Prisma.Branch_operating_hoursScalarFieldEnum[];
};
export type branch_operating_hoursCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_operating_hoursSelect<ExtArgs> | null;
    omit?: Prisma.branch_operating_hoursOmit<ExtArgs> | null;
    include?: Prisma.branch_operating_hoursInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.branch_operating_hoursCreateInput, Prisma.branch_operating_hoursUncheckedCreateInput>;
};
export type branch_operating_hoursCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.branch_operating_hoursCreateManyInput | Prisma.branch_operating_hoursCreateManyInput[];
    skipDuplicates?: boolean;
};
export type branch_operating_hoursCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_operating_hoursSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.branch_operating_hoursOmit<ExtArgs> | null;
    data: Prisma.branch_operating_hoursCreateManyInput | Prisma.branch_operating_hoursCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.branch_operating_hoursIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type branch_operating_hoursUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_operating_hoursSelect<ExtArgs> | null;
    omit?: Prisma.branch_operating_hoursOmit<ExtArgs> | null;
    include?: Prisma.branch_operating_hoursInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.branch_operating_hoursUpdateInput, Prisma.branch_operating_hoursUncheckedUpdateInput>;
    where: Prisma.branch_operating_hoursWhereUniqueInput;
};
export type branch_operating_hoursUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.branch_operating_hoursUpdateManyMutationInput, Prisma.branch_operating_hoursUncheckedUpdateManyInput>;
    where?: Prisma.branch_operating_hoursWhereInput;
    limit?: number;
};
export type branch_operating_hoursUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_operating_hoursSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.branch_operating_hoursOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.branch_operating_hoursUpdateManyMutationInput, Prisma.branch_operating_hoursUncheckedUpdateManyInput>;
    where?: Prisma.branch_operating_hoursWhereInput;
    limit?: number;
    include?: Prisma.branch_operating_hoursIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type branch_operating_hoursUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_operating_hoursSelect<ExtArgs> | null;
    omit?: Prisma.branch_operating_hoursOmit<ExtArgs> | null;
    include?: Prisma.branch_operating_hoursInclude<ExtArgs> | null;
    where: Prisma.branch_operating_hoursWhereUniqueInput;
    create: Prisma.XOR<Prisma.branch_operating_hoursCreateInput, Prisma.branch_operating_hoursUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.branch_operating_hoursUpdateInput, Prisma.branch_operating_hoursUncheckedUpdateInput>;
};
export type branch_operating_hoursDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_operating_hoursSelect<ExtArgs> | null;
    omit?: Prisma.branch_operating_hoursOmit<ExtArgs> | null;
    include?: Prisma.branch_operating_hoursInclude<ExtArgs> | null;
    where: Prisma.branch_operating_hoursWhereUniqueInput;
};
export type branch_operating_hoursDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.branch_operating_hoursWhereInput;
    limit?: number;
};
export type branch_operating_hoursDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_operating_hoursSelect<ExtArgs> | null;
    omit?: Prisma.branch_operating_hoursOmit<ExtArgs> | null;
    include?: Prisma.branch_operating_hoursInclude<ExtArgs> | null;
};
export {};
