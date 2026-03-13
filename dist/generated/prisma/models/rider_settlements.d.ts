import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type rider_settlementsModel = runtime.Types.Result.DefaultSelection<Prisma.$rider_settlementsPayload>;
export type AggregateRider_settlements = {
    _count: Rider_settlementsCountAggregateOutputType | null;
    _avg: Rider_settlementsAvgAggregateOutputType | null;
    _sum: Rider_settlementsSumAggregateOutputType | null;
    _min: Rider_settlementsMinAggregateOutputType | null;
    _max: Rider_settlementsMaxAggregateOutputType | null;
};
export type Rider_settlementsAvgAggregateOutputType = {
    deliveries_count: number | null;
    total_earnings_amount: runtime.Decimal | null;
    bonuses_amount: runtime.Decimal | null;
    penalties_amount: runtime.Decimal | null;
    net_payable_amount: runtime.Decimal | null;
};
export type Rider_settlementsSumAggregateOutputType = {
    deliveries_count: number | null;
    total_earnings_amount: runtime.Decimal | null;
    bonuses_amount: runtime.Decimal | null;
    penalties_amount: runtime.Decimal | null;
    net_payable_amount: runtime.Decimal | null;
};
export type Rider_settlementsMinAggregateOutputType = {
    id: string | null;
    rider_profile_id: string | null;
    period_start: Date | null;
    period_end: Date | null;
    deliveries_count: number | null;
    total_earnings_amount: runtime.Decimal | null;
    bonuses_amount: runtime.Decimal | null;
    penalties_amount: runtime.Decimal | null;
    net_payable_amount: runtime.Decimal | null;
    status: $Enums.settlement_status_type | null;
    generated_at: Date | null;
    paid_at: Date | null;
};
export type Rider_settlementsMaxAggregateOutputType = {
    id: string | null;
    rider_profile_id: string | null;
    period_start: Date | null;
    period_end: Date | null;
    deliveries_count: number | null;
    total_earnings_amount: runtime.Decimal | null;
    bonuses_amount: runtime.Decimal | null;
    penalties_amount: runtime.Decimal | null;
    net_payable_amount: runtime.Decimal | null;
    status: $Enums.settlement_status_type | null;
    generated_at: Date | null;
    paid_at: Date | null;
};
export type Rider_settlementsCountAggregateOutputType = {
    id: number;
    rider_profile_id: number;
    period_start: number;
    period_end: number;
    deliveries_count: number;
    total_earnings_amount: number;
    bonuses_amount: number;
    penalties_amount: number;
    net_payable_amount: number;
    status: number;
    generated_at: number;
    paid_at: number;
    _all: number;
};
export type Rider_settlementsAvgAggregateInputType = {
    deliveries_count?: true;
    total_earnings_amount?: true;
    bonuses_amount?: true;
    penalties_amount?: true;
    net_payable_amount?: true;
};
export type Rider_settlementsSumAggregateInputType = {
    deliveries_count?: true;
    total_earnings_amount?: true;
    bonuses_amount?: true;
    penalties_amount?: true;
    net_payable_amount?: true;
};
export type Rider_settlementsMinAggregateInputType = {
    id?: true;
    rider_profile_id?: true;
    period_start?: true;
    period_end?: true;
    deliveries_count?: true;
    total_earnings_amount?: true;
    bonuses_amount?: true;
    penalties_amount?: true;
    net_payable_amount?: true;
    status?: true;
    generated_at?: true;
    paid_at?: true;
};
export type Rider_settlementsMaxAggregateInputType = {
    id?: true;
    rider_profile_id?: true;
    period_start?: true;
    period_end?: true;
    deliveries_count?: true;
    total_earnings_amount?: true;
    bonuses_amount?: true;
    penalties_amount?: true;
    net_payable_amount?: true;
    status?: true;
    generated_at?: true;
    paid_at?: true;
};
export type Rider_settlementsCountAggregateInputType = {
    id?: true;
    rider_profile_id?: true;
    period_start?: true;
    period_end?: true;
    deliveries_count?: true;
    total_earnings_amount?: true;
    bonuses_amount?: true;
    penalties_amount?: true;
    net_payable_amount?: true;
    status?: true;
    generated_at?: true;
    paid_at?: true;
    _all?: true;
};
export type Rider_settlementsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rider_settlementsWhereInput;
    orderBy?: Prisma.rider_settlementsOrderByWithRelationInput | Prisma.rider_settlementsOrderByWithRelationInput[];
    cursor?: Prisma.rider_settlementsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Rider_settlementsCountAggregateInputType;
    _avg?: Rider_settlementsAvgAggregateInputType;
    _sum?: Rider_settlementsSumAggregateInputType;
    _min?: Rider_settlementsMinAggregateInputType;
    _max?: Rider_settlementsMaxAggregateInputType;
};
export type GetRider_settlementsAggregateType<T extends Rider_settlementsAggregateArgs> = {
    [P in keyof T & keyof AggregateRider_settlements]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRider_settlements[P]> : Prisma.GetScalarType<T[P], AggregateRider_settlements[P]>;
};
export type rider_settlementsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rider_settlementsWhereInput;
    orderBy?: Prisma.rider_settlementsOrderByWithAggregationInput | Prisma.rider_settlementsOrderByWithAggregationInput[];
    by: Prisma.Rider_settlementsScalarFieldEnum[] | Prisma.Rider_settlementsScalarFieldEnum;
    having?: Prisma.rider_settlementsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Rider_settlementsCountAggregateInputType | true;
    _avg?: Rider_settlementsAvgAggregateInputType;
    _sum?: Rider_settlementsSumAggregateInputType;
    _min?: Rider_settlementsMinAggregateInputType;
    _max?: Rider_settlementsMaxAggregateInputType;
};
export type Rider_settlementsGroupByOutputType = {
    id: string;
    rider_profile_id: string;
    period_start: Date;
    period_end: Date;
    deliveries_count: number;
    total_earnings_amount: runtime.Decimal;
    bonuses_amount: runtime.Decimal;
    penalties_amount: runtime.Decimal;
    net_payable_amount: runtime.Decimal;
    status: $Enums.settlement_status_type;
    generated_at: Date;
    paid_at: Date | null;
    _count: Rider_settlementsCountAggregateOutputType | null;
    _avg: Rider_settlementsAvgAggregateOutputType | null;
    _sum: Rider_settlementsSumAggregateOutputType | null;
    _min: Rider_settlementsMinAggregateOutputType | null;
    _max: Rider_settlementsMaxAggregateOutputType | null;
};
type GetRider_settlementsGroupByPayload<T extends rider_settlementsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Rider_settlementsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Rider_settlementsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Rider_settlementsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Rider_settlementsGroupByOutputType[P]>;
}>>;
export type rider_settlementsWhereInput = {
    AND?: Prisma.rider_settlementsWhereInput | Prisma.rider_settlementsWhereInput[];
    OR?: Prisma.rider_settlementsWhereInput[];
    NOT?: Prisma.rider_settlementsWhereInput | Prisma.rider_settlementsWhereInput[];
    id?: Prisma.UuidFilter<"rider_settlements"> | string;
    rider_profile_id?: Prisma.UuidFilter<"rider_settlements"> | string;
    period_start?: Prisma.DateTimeFilter<"rider_settlements"> | Date | string;
    period_end?: Prisma.DateTimeFilter<"rider_settlements"> | Date | string;
    deliveries_count?: Prisma.IntFilter<"rider_settlements"> | number;
    total_earnings_amount?: Prisma.DecimalFilter<"rider_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bonuses_amount?: Prisma.DecimalFilter<"rider_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    penalties_amount?: Prisma.DecimalFilter<"rider_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFilter<"rider_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFilter<"rider_settlements"> | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFilter<"rider_settlements"> | Date | string;
    paid_at?: Prisma.DateTimeNullableFilter<"rider_settlements"> | Date | string | null;
    rider_profiles?: Prisma.XOR<Prisma.Rider_profilesScalarRelationFilter, Prisma.rider_profilesWhereInput>;
};
export type rider_settlementsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rider_profile_id?: Prisma.SortOrder;
    period_start?: Prisma.SortOrder;
    period_end?: Prisma.SortOrder;
    deliveries_count?: Prisma.SortOrder;
    total_earnings_amount?: Prisma.SortOrder;
    bonuses_amount?: Prisma.SortOrder;
    penalties_amount?: Prisma.SortOrder;
    net_payable_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    rider_profiles?: Prisma.rider_profilesOrderByWithRelationInput;
};
export type rider_settlementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.rider_settlementsWhereInput | Prisma.rider_settlementsWhereInput[];
    OR?: Prisma.rider_settlementsWhereInput[];
    NOT?: Prisma.rider_settlementsWhereInput | Prisma.rider_settlementsWhereInput[];
    rider_profile_id?: Prisma.UuidFilter<"rider_settlements"> | string;
    period_start?: Prisma.DateTimeFilter<"rider_settlements"> | Date | string;
    period_end?: Prisma.DateTimeFilter<"rider_settlements"> | Date | string;
    deliveries_count?: Prisma.IntFilter<"rider_settlements"> | number;
    total_earnings_amount?: Prisma.DecimalFilter<"rider_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bonuses_amount?: Prisma.DecimalFilter<"rider_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    penalties_amount?: Prisma.DecimalFilter<"rider_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFilter<"rider_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFilter<"rider_settlements"> | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFilter<"rider_settlements"> | Date | string;
    paid_at?: Prisma.DateTimeNullableFilter<"rider_settlements"> | Date | string | null;
    rider_profiles?: Prisma.XOR<Prisma.Rider_profilesScalarRelationFilter, Prisma.rider_profilesWhereInput>;
}, "id">;
export type rider_settlementsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rider_profile_id?: Prisma.SortOrder;
    period_start?: Prisma.SortOrder;
    period_end?: Prisma.SortOrder;
    deliveries_count?: Prisma.SortOrder;
    total_earnings_amount?: Prisma.SortOrder;
    bonuses_amount?: Prisma.SortOrder;
    penalties_amount?: Prisma.SortOrder;
    net_payable_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.rider_settlementsCountOrderByAggregateInput;
    _avg?: Prisma.rider_settlementsAvgOrderByAggregateInput;
    _max?: Prisma.rider_settlementsMaxOrderByAggregateInput;
    _min?: Prisma.rider_settlementsMinOrderByAggregateInput;
    _sum?: Prisma.rider_settlementsSumOrderByAggregateInput;
};
export type rider_settlementsScalarWhereWithAggregatesInput = {
    AND?: Prisma.rider_settlementsScalarWhereWithAggregatesInput | Prisma.rider_settlementsScalarWhereWithAggregatesInput[];
    OR?: Prisma.rider_settlementsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.rider_settlementsScalarWhereWithAggregatesInput | Prisma.rider_settlementsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"rider_settlements"> | string;
    rider_profile_id?: Prisma.UuidWithAggregatesFilter<"rider_settlements"> | string;
    period_start?: Prisma.DateTimeWithAggregatesFilter<"rider_settlements"> | Date | string;
    period_end?: Prisma.DateTimeWithAggregatesFilter<"rider_settlements"> | Date | string;
    deliveries_count?: Prisma.IntWithAggregatesFilter<"rider_settlements"> | number;
    total_earnings_amount?: Prisma.DecimalWithAggregatesFilter<"rider_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bonuses_amount?: Prisma.DecimalWithAggregatesFilter<"rider_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    penalties_amount?: Prisma.DecimalWithAggregatesFilter<"rider_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalWithAggregatesFilter<"rider_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeWithAggregatesFilter<"rider_settlements"> | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeWithAggregatesFilter<"rider_settlements"> | Date | string;
    paid_at?: Prisma.DateTimeNullableWithAggregatesFilter<"rider_settlements"> | Date | string | null;
};
export type rider_settlementsCreateInput = {
    id?: string;
    period_start: Date | string;
    period_end: Date | string;
    deliveries_count: number;
    total_earnings_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bonuses_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    penalties_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.settlement_status_type;
    generated_at?: Date | string;
    paid_at?: Date | string | null;
    rider_profiles: Prisma.rider_profilesCreateNestedOneWithoutRider_settlementsInput;
};
export type rider_settlementsUncheckedCreateInput = {
    id?: string;
    rider_profile_id: string;
    period_start: Date | string;
    period_end: Date | string;
    deliveries_count: number;
    total_earnings_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bonuses_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    penalties_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.settlement_status_type;
    generated_at?: Date | string;
    paid_at?: Date | string | null;
};
export type rider_settlementsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    period_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries_count?: Prisma.IntFieldUpdateOperationsInput | number;
    total_earnings_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bonuses_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    penalties_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFieldUpdateOperationsInput | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rider_profiles?: Prisma.rider_profilesUpdateOneRequiredWithoutRider_settlementsNestedInput;
};
export type rider_settlementsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rider_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    period_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    period_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries_count?: Prisma.IntFieldUpdateOperationsInput | number;
    total_earnings_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bonuses_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    penalties_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFieldUpdateOperationsInput | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type rider_settlementsCreateManyInput = {
    id?: string;
    rider_profile_id: string;
    period_start: Date | string;
    period_end: Date | string;
    deliveries_count: number;
    total_earnings_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bonuses_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    penalties_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.settlement_status_type;
    generated_at?: Date | string;
    paid_at?: Date | string | null;
};
export type rider_settlementsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    period_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries_count?: Prisma.IntFieldUpdateOperationsInput | number;
    total_earnings_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bonuses_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    penalties_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFieldUpdateOperationsInput | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type rider_settlementsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rider_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    period_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    period_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries_count?: Prisma.IntFieldUpdateOperationsInput | number;
    total_earnings_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bonuses_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    penalties_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFieldUpdateOperationsInput | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Rider_settlementsListRelationFilter = {
    every?: Prisma.rider_settlementsWhereInput;
    some?: Prisma.rider_settlementsWhereInput;
    none?: Prisma.rider_settlementsWhereInput;
};
export type rider_settlementsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type rider_settlementsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rider_profile_id?: Prisma.SortOrder;
    period_start?: Prisma.SortOrder;
    period_end?: Prisma.SortOrder;
    deliveries_count?: Prisma.SortOrder;
    total_earnings_amount?: Prisma.SortOrder;
    bonuses_amount?: Prisma.SortOrder;
    penalties_amount?: Prisma.SortOrder;
    net_payable_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
};
export type rider_settlementsAvgOrderByAggregateInput = {
    deliveries_count?: Prisma.SortOrder;
    total_earnings_amount?: Prisma.SortOrder;
    bonuses_amount?: Prisma.SortOrder;
    penalties_amount?: Prisma.SortOrder;
    net_payable_amount?: Prisma.SortOrder;
};
export type rider_settlementsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rider_profile_id?: Prisma.SortOrder;
    period_start?: Prisma.SortOrder;
    period_end?: Prisma.SortOrder;
    deliveries_count?: Prisma.SortOrder;
    total_earnings_amount?: Prisma.SortOrder;
    bonuses_amount?: Prisma.SortOrder;
    penalties_amount?: Prisma.SortOrder;
    net_payable_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
};
export type rider_settlementsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rider_profile_id?: Prisma.SortOrder;
    period_start?: Prisma.SortOrder;
    period_end?: Prisma.SortOrder;
    deliveries_count?: Prisma.SortOrder;
    total_earnings_amount?: Prisma.SortOrder;
    bonuses_amount?: Prisma.SortOrder;
    penalties_amount?: Prisma.SortOrder;
    net_payable_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
};
export type rider_settlementsSumOrderByAggregateInput = {
    deliveries_count?: Prisma.SortOrder;
    total_earnings_amount?: Prisma.SortOrder;
    bonuses_amount?: Prisma.SortOrder;
    penalties_amount?: Prisma.SortOrder;
    net_payable_amount?: Prisma.SortOrder;
};
export type rider_settlementsCreateNestedManyWithoutRider_profilesInput = {
    create?: Prisma.XOR<Prisma.rider_settlementsCreateWithoutRider_profilesInput, Prisma.rider_settlementsUncheckedCreateWithoutRider_profilesInput> | Prisma.rider_settlementsCreateWithoutRider_profilesInput[] | Prisma.rider_settlementsUncheckedCreateWithoutRider_profilesInput[];
    connectOrCreate?: Prisma.rider_settlementsCreateOrConnectWithoutRider_profilesInput | Prisma.rider_settlementsCreateOrConnectWithoutRider_profilesInput[];
    createMany?: Prisma.rider_settlementsCreateManyRider_profilesInputEnvelope;
    connect?: Prisma.rider_settlementsWhereUniqueInput | Prisma.rider_settlementsWhereUniqueInput[];
};
export type rider_settlementsUncheckedCreateNestedManyWithoutRider_profilesInput = {
    create?: Prisma.XOR<Prisma.rider_settlementsCreateWithoutRider_profilesInput, Prisma.rider_settlementsUncheckedCreateWithoutRider_profilesInput> | Prisma.rider_settlementsCreateWithoutRider_profilesInput[] | Prisma.rider_settlementsUncheckedCreateWithoutRider_profilesInput[];
    connectOrCreate?: Prisma.rider_settlementsCreateOrConnectWithoutRider_profilesInput | Prisma.rider_settlementsCreateOrConnectWithoutRider_profilesInput[];
    createMany?: Prisma.rider_settlementsCreateManyRider_profilesInputEnvelope;
    connect?: Prisma.rider_settlementsWhereUniqueInput | Prisma.rider_settlementsWhereUniqueInput[];
};
export type rider_settlementsUpdateManyWithoutRider_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.rider_settlementsCreateWithoutRider_profilesInput, Prisma.rider_settlementsUncheckedCreateWithoutRider_profilesInput> | Prisma.rider_settlementsCreateWithoutRider_profilesInput[] | Prisma.rider_settlementsUncheckedCreateWithoutRider_profilesInput[];
    connectOrCreate?: Prisma.rider_settlementsCreateOrConnectWithoutRider_profilesInput | Prisma.rider_settlementsCreateOrConnectWithoutRider_profilesInput[];
    upsert?: Prisma.rider_settlementsUpsertWithWhereUniqueWithoutRider_profilesInput | Prisma.rider_settlementsUpsertWithWhereUniqueWithoutRider_profilesInput[];
    createMany?: Prisma.rider_settlementsCreateManyRider_profilesInputEnvelope;
    set?: Prisma.rider_settlementsWhereUniqueInput | Prisma.rider_settlementsWhereUniqueInput[];
    disconnect?: Prisma.rider_settlementsWhereUniqueInput | Prisma.rider_settlementsWhereUniqueInput[];
    delete?: Prisma.rider_settlementsWhereUniqueInput | Prisma.rider_settlementsWhereUniqueInput[];
    connect?: Prisma.rider_settlementsWhereUniqueInput | Prisma.rider_settlementsWhereUniqueInput[];
    update?: Prisma.rider_settlementsUpdateWithWhereUniqueWithoutRider_profilesInput | Prisma.rider_settlementsUpdateWithWhereUniqueWithoutRider_profilesInput[];
    updateMany?: Prisma.rider_settlementsUpdateManyWithWhereWithoutRider_profilesInput | Prisma.rider_settlementsUpdateManyWithWhereWithoutRider_profilesInput[];
    deleteMany?: Prisma.rider_settlementsScalarWhereInput | Prisma.rider_settlementsScalarWhereInput[];
};
export type rider_settlementsUncheckedUpdateManyWithoutRider_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.rider_settlementsCreateWithoutRider_profilesInput, Prisma.rider_settlementsUncheckedCreateWithoutRider_profilesInput> | Prisma.rider_settlementsCreateWithoutRider_profilesInput[] | Prisma.rider_settlementsUncheckedCreateWithoutRider_profilesInput[];
    connectOrCreate?: Prisma.rider_settlementsCreateOrConnectWithoutRider_profilesInput | Prisma.rider_settlementsCreateOrConnectWithoutRider_profilesInput[];
    upsert?: Prisma.rider_settlementsUpsertWithWhereUniqueWithoutRider_profilesInput | Prisma.rider_settlementsUpsertWithWhereUniqueWithoutRider_profilesInput[];
    createMany?: Prisma.rider_settlementsCreateManyRider_profilesInputEnvelope;
    set?: Prisma.rider_settlementsWhereUniqueInput | Prisma.rider_settlementsWhereUniqueInput[];
    disconnect?: Prisma.rider_settlementsWhereUniqueInput | Prisma.rider_settlementsWhereUniqueInput[];
    delete?: Prisma.rider_settlementsWhereUniqueInput | Prisma.rider_settlementsWhereUniqueInput[];
    connect?: Prisma.rider_settlementsWhereUniqueInput | Prisma.rider_settlementsWhereUniqueInput[];
    update?: Prisma.rider_settlementsUpdateWithWhereUniqueWithoutRider_profilesInput | Prisma.rider_settlementsUpdateWithWhereUniqueWithoutRider_profilesInput[];
    updateMany?: Prisma.rider_settlementsUpdateManyWithWhereWithoutRider_profilesInput | Prisma.rider_settlementsUpdateManyWithWhereWithoutRider_profilesInput[];
    deleteMany?: Prisma.rider_settlementsScalarWhereInput | Prisma.rider_settlementsScalarWhereInput[];
};
export type rider_settlementsCreateWithoutRider_profilesInput = {
    id?: string;
    period_start: Date | string;
    period_end: Date | string;
    deliveries_count: number;
    total_earnings_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bonuses_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    penalties_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.settlement_status_type;
    generated_at?: Date | string;
    paid_at?: Date | string | null;
};
export type rider_settlementsUncheckedCreateWithoutRider_profilesInput = {
    id?: string;
    period_start: Date | string;
    period_end: Date | string;
    deliveries_count: number;
    total_earnings_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bonuses_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    penalties_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.settlement_status_type;
    generated_at?: Date | string;
    paid_at?: Date | string | null;
};
export type rider_settlementsCreateOrConnectWithoutRider_profilesInput = {
    where: Prisma.rider_settlementsWhereUniqueInput;
    create: Prisma.XOR<Prisma.rider_settlementsCreateWithoutRider_profilesInput, Prisma.rider_settlementsUncheckedCreateWithoutRider_profilesInput>;
};
export type rider_settlementsCreateManyRider_profilesInputEnvelope = {
    data: Prisma.rider_settlementsCreateManyRider_profilesInput | Prisma.rider_settlementsCreateManyRider_profilesInput[];
    skipDuplicates?: boolean;
};
export type rider_settlementsUpsertWithWhereUniqueWithoutRider_profilesInput = {
    where: Prisma.rider_settlementsWhereUniqueInput;
    update: Prisma.XOR<Prisma.rider_settlementsUpdateWithoutRider_profilesInput, Prisma.rider_settlementsUncheckedUpdateWithoutRider_profilesInput>;
    create: Prisma.XOR<Prisma.rider_settlementsCreateWithoutRider_profilesInput, Prisma.rider_settlementsUncheckedCreateWithoutRider_profilesInput>;
};
export type rider_settlementsUpdateWithWhereUniqueWithoutRider_profilesInput = {
    where: Prisma.rider_settlementsWhereUniqueInput;
    data: Prisma.XOR<Prisma.rider_settlementsUpdateWithoutRider_profilesInput, Prisma.rider_settlementsUncheckedUpdateWithoutRider_profilesInput>;
};
export type rider_settlementsUpdateManyWithWhereWithoutRider_profilesInput = {
    where: Prisma.rider_settlementsScalarWhereInput;
    data: Prisma.XOR<Prisma.rider_settlementsUpdateManyMutationInput, Prisma.rider_settlementsUncheckedUpdateManyWithoutRider_profilesInput>;
};
export type rider_settlementsScalarWhereInput = {
    AND?: Prisma.rider_settlementsScalarWhereInput | Prisma.rider_settlementsScalarWhereInput[];
    OR?: Prisma.rider_settlementsScalarWhereInput[];
    NOT?: Prisma.rider_settlementsScalarWhereInput | Prisma.rider_settlementsScalarWhereInput[];
    id?: Prisma.UuidFilter<"rider_settlements"> | string;
    rider_profile_id?: Prisma.UuidFilter<"rider_settlements"> | string;
    period_start?: Prisma.DateTimeFilter<"rider_settlements"> | Date | string;
    period_end?: Prisma.DateTimeFilter<"rider_settlements"> | Date | string;
    deliveries_count?: Prisma.IntFilter<"rider_settlements"> | number;
    total_earnings_amount?: Prisma.DecimalFilter<"rider_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bonuses_amount?: Prisma.DecimalFilter<"rider_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    penalties_amount?: Prisma.DecimalFilter<"rider_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFilter<"rider_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFilter<"rider_settlements"> | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFilter<"rider_settlements"> | Date | string;
    paid_at?: Prisma.DateTimeNullableFilter<"rider_settlements"> | Date | string | null;
};
export type rider_settlementsCreateManyRider_profilesInput = {
    id?: string;
    period_start: Date | string;
    period_end: Date | string;
    deliveries_count: number;
    total_earnings_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    bonuses_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    penalties_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.settlement_status_type;
    generated_at?: Date | string;
    paid_at?: Date | string | null;
};
export type rider_settlementsUpdateWithoutRider_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    period_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries_count?: Prisma.IntFieldUpdateOperationsInput | number;
    total_earnings_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bonuses_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    penalties_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFieldUpdateOperationsInput | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type rider_settlementsUncheckedUpdateWithoutRider_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    period_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries_count?: Prisma.IntFieldUpdateOperationsInput | number;
    total_earnings_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bonuses_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    penalties_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFieldUpdateOperationsInput | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type rider_settlementsUncheckedUpdateManyWithoutRider_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    period_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries_count?: Prisma.IntFieldUpdateOperationsInput | number;
    total_earnings_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    bonuses_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    penalties_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFieldUpdateOperationsInput | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type rider_settlementsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rider_profile_id?: boolean;
    period_start?: boolean;
    period_end?: boolean;
    deliveries_count?: boolean;
    total_earnings_amount?: boolean;
    bonuses_amount?: boolean;
    penalties_amount?: boolean;
    net_payable_amount?: boolean;
    status?: boolean;
    generated_at?: boolean;
    paid_at?: boolean;
    rider_profiles?: boolean | Prisma.rider_profilesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rider_settlements"]>;
export type rider_settlementsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rider_profile_id?: boolean;
    period_start?: boolean;
    period_end?: boolean;
    deliveries_count?: boolean;
    total_earnings_amount?: boolean;
    bonuses_amount?: boolean;
    penalties_amount?: boolean;
    net_payable_amount?: boolean;
    status?: boolean;
    generated_at?: boolean;
    paid_at?: boolean;
    rider_profiles?: boolean | Prisma.rider_profilesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rider_settlements"]>;
export type rider_settlementsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rider_profile_id?: boolean;
    period_start?: boolean;
    period_end?: boolean;
    deliveries_count?: boolean;
    total_earnings_amount?: boolean;
    bonuses_amount?: boolean;
    penalties_amount?: boolean;
    net_payable_amount?: boolean;
    status?: boolean;
    generated_at?: boolean;
    paid_at?: boolean;
    rider_profiles?: boolean | Prisma.rider_profilesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rider_settlements"]>;
export type rider_settlementsSelectScalar = {
    id?: boolean;
    rider_profile_id?: boolean;
    period_start?: boolean;
    period_end?: boolean;
    deliveries_count?: boolean;
    total_earnings_amount?: boolean;
    bonuses_amount?: boolean;
    penalties_amount?: boolean;
    net_payable_amount?: boolean;
    status?: boolean;
    generated_at?: boolean;
    paid_at?: boolean;
};
export type rider_settlementsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rider_profile_id" | "period_start" | "period_end" | "deliveries_count" | "total_earnings_amount" | "bonuses_amount" | "penalties_amount" | "net_payable_amount" | "status" | "generated_at" | "paid_at", ExtArgs["result"]["rider_settlements"]>;
export type rider_settlementsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rider_profiles?: boolean | Prisma.rider_profilesDefaultArgs<ExtArgs>;
};
export type rider_settlementsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rider_profiles?: boolean | Prisma.rider_profilesDefaultArgs<ExtArgs>;
};
export type rider_settlementsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rider_profiles?: boolean | Prisma.rider_profilesDefaultArgs<ExtArgs>;
};
export type $rider_settlementsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "rider_settlements";
    objects: {
        rider_profiles: Prisma.$rider_profilesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        rider_profile_id: string;
        period_start: Date;
        period_end: Date;
        deliveries_count: number;
        total_earnings_amount: runtime.Decimal;
        bonuses_amount: runtime.Decimal;
        penalties_amount: runtime.Decimal;
        net_payable_amount: runtime.Decimal;
        status: $Enums.settlement_status_type;
        generated_at: Date;
        paid_at: Date | null;
    }, ExtArgs["result"]["rider_settlements"]>;
    composites: {};
};
export type rider_settlementsGetPayload<S extends boolean | null | undefined | rider_settlementsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$rider_settlementsPayload, S>;
export type rider_settlementsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<rider_settlementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Rider_settlementsCountAggregateInputType | true;
};
export interface rider_settlementsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['rider_settlements'];
        meta: {
            name: 'rider_settlements';
        };
    };
    findUnique<T extends rider_settlementsFindUniqueArgs>(args: Prisma.SelectSubset<T, rider_settlementsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__rider_settlementsClient<runtime.Types.Result.GetResult<Prisma.$rider_settlementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends rider_settlementsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, rider_settlementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__rider_settlementsClient<runtime.Types.Result.GetResult<Prisma.$rider_settlementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends rider_settlementsFindFirstArgs>(args?: Prisma.SelectSubset<T, rider_settlementsFindFirstArgs<ExtArgs>>): Prisma.Prisma__rider_settlementsClient<runtime.Types.Result.GetResult<Prisma.$rider_settlementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends rider_settlementsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, rider_settlementsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__rider_settlementsClient<runtime.Types.Result.GetResult<Prisma.$rider_settlementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends rider_settlementsFindManyArgs>(args?: Prisma.SelectSubset<T, rider_settlementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rider_settlementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends rider_settlementsCreateArgs>(args: Prisma.SelectSubset<T, rider_settlementsCreateArgs<ExtArgs>>): Prisma.Prisma__rider_settlementsClient<runtime.Types.Result.GetResult<Prisma.$rider_settlementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends rider_settlementsCreateManyArgs>(args?: Prisma.SelectSubset<T, rider_settlementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends rider_settlementsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, rider_settlementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rider_settlementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends rider_settlementsDeleteArgs>(args: Prisma.SelectSubset<T, rider_settlementsDeleteArgs<ExtArgs>>): Prisma.Prisma__rider_settlementsClient<runtime.Types.Result.GetResult<Prisma.$rider_settlementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends rider_settlementsUpdateArgs>(args: Prisma.SelectSubset<T, rider_settlementsUpdateArgs<ExtArgs>>): Prisma.Prisma__rider_settlementsClient<runtime.Types.Result.GetResult<Prisma.$rider_settlementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends rider_settlementsDeleteManyArgs>(args?: Prisma.SelectSubset<T, rider_settlementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends rider_settlementsUpdateManyArgs>(args: Prisma.SelectSubset<T, rider_settlementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends rider_settlementsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, rider_settlementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rider_settlementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends rider_settlementsUpsertArgs>(args: Prisma.SelectSubset<T, rider_settlementsUpsertArgs<ExtArgs>>): Prisma.Prisma__rider_settlementsClient<runtime.Types.Result.GetResult<Prisma.$rider_settlementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends rider_settlementsCountArgs>(args?: Prisma.Subset<T, rider_settlementsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Rider_settlementsCountAggregateOutputType> : number>;
    aggregate<T extends Rider_settlementsAggregateArgs>(args: Prisma.Subset<T, Rider_settlementsAggregateArgs>): Prisma.PrismaPromise<GetRider_settlementsAggregateType<T>>;
    groupBy<T extends rider_settlementsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: rider_settlementsGroupByArgs['orderBy'];
    } : {
        orderBy?: rider_settlementsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, rider_settlementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRider_settlementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: rider_settlementsFieldRefs;
}
export interface Prisma__rider_settlementsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rider_profiles<T extends Prisma.rider_profilesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.rider_profilesDefaultArgs<ExtArgs>>): Prisma.Prisma__rider_profilesClient<runtime.Types.Result.GetResult<Prisma.$rider_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface rider_settlementsFieldRefs {
    readonly id: Prisma.FieldRef<"rider_settlements", 'String'>;
    readonly rider_profile_id: Prisma.FieldRef<"rider_settlements", 'String'>;
    readonly period_start: Prisma.FieldRef<"rider_settlements", 'DateTime'>;
    readonly period_end: Prisma.FieldRef<"rider_settlements", 'DateTime'>;
    readonly deliveries_count: Prisma.FieldRef<"rider_settlements", 'Int'>;
    readonly total_earnings_amount: Prisma.FieldRef<"rider_settlements", 'Decimal'>;
    readonly bonuses_amount: Prisma.FieldRef<"rider_settlements", 'Decimal'>;
    readonly penalties_amount: Prisma.FieldRef<"rider_settlements", 'Decimal'>;
    readonly net_payable_amount: Prisma.FieldRef<"rider_settlements", 'Decimal'>;
    readonly status: Prisma.FieldRef<"rider_settlements", 'settlement_status_type'>;
    readonly generated_at: Prisma.FieldRef<"rider_settlements", 'DateTime'>;
    readonly paid_at: Prisma.FieldRef<"rider_settlements", 'DateTime'>;
}
export type rider_settlementsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.rider_settlementsOmit<ExtArgs> | null;
    include?: Prisma.rider_settlementsInclude<ExtArgs> | null;
    where: Prisma.rider_settlementsWhereUniqueInput;
};
export type rider_settlementsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.rider_settlementsOmit<ExtArgs> | null;
    include?: Prisma.rider_settlementsInclude<ExtArgs> | null;
    where: Prisma.rider_settlementsWhereUniqueInput;
};
export type rider_settlementsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.rider_settlementsOmit<ExtArgs> | null;
    include?: Prisma.rider_settlementsInclude<ExtArgs> | null;
    where?: Prisma.rider_settlementsWhereInput;
    orderBy?: Prisma.rider_settlementsOrderByWithRelationInput | Prisma.rider_settlementsOrderByWithRelationInput[];
    cursor?: Prisma.rider_settlementsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Rider_settlementsScalarFieldEnum | Prisma.Rider_settlementsScalarFieldEnum[];
};
export type rider_settlementsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.rider_settlementsOmit<ExtArgs> | null;
    include?: Prisma.rider_settlementsInclude<ExtArgs> | null;
    where?: Prisma.rider_settlementsWhereInput;
    orderBy?: Prisma.rider_settlementsOrderByWithRelationInput | Prisma.rider_settlementsOrderByWithRelationInput[];
    cursor?: Prisma.rider_settlementsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Rider_settlementsScalarFieldEnum | Prisma.Rider_settlementsScalarFieldEnum[];
};
export type rider_settlementsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.rider_settlementsOmit<ExtArgs> | null;
    include?: Prisma.rider_settlementsInclude<ExtArgs> | null;
    where?: Prisma.rider_settlementsWhereInput;
    orderBy?: Prisma.rider_settlementsOrderByWithRelationInput | Prisma.rider_settlementsOrderByWithRelationInput[];
    cursor?: Prisma.rider_settlementsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Rider_settlementsScalarFieldEnum | Prisma.Rider_settlementsScalarFieldEnum[];
};
export type rider_settlementsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.rider_settlementsOmit<ExtArgs> | null;
    include?: Prisma.rider_settlementsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rider_settlementsCreateInput, Prisma.rider_settlementsUncheckedCreateInput>;
};
export type rider_settlementsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.rider_settlementsCreateManyInput | Prisma.rider_settlementsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type rider_settlementsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_settlementsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.rider_settlementsOmit<ExtArgs> | null;
    data: Prisma.rider_settlementsCreateManyInput | Prisma.rider_settlementsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.rider_settlementsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type rider_settlementsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.rider_settlementsOmit<ExtArgs> | null;
    include?: Prisma.rider_settlementsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rider_settlementsUpdateInput, Prisma.rider_settlementsUncheckedUpdateInput>;
    where: Prisma.rider_settlementsWhereUniqueInput;
};
export type rider_settlementsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.rider_settlementsUpdateManyMutationInput, Prisma.rider_settlementsUncheckedUpdateManyInput>;
    where?: Prisma.rider_settlementsWhereInput;
    limit?: number;
};
export type rider_settlementsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_settlementsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.rider_settlementsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rider_settlementsUpdateManyMutationInput, Prisma.rider_settlementsUncheckedUpdateManyInput>;
    where?: Prisma.rider_settlementsWhereInput;
    limit?: number;
    include?: Prisma.rider_settlementsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type rider_settlementsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.rider_settlementsOmit<ExtArgs> | null;
    include?: Prisma.rider_settlementsInclude<ExtArgs> | null;
    where: Prisma.rider_settlementsWhereUniqueInput;
    create: Prisma.XOR<Prisma.rider_settlementsCreateInput, Prisma.rider_settlementsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.rider_settlementsUpdateInput, Prisma.rider_settlementsUncheckedUpdateInput>;
};
export type rider_settlementsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.rider_settlementsOmit<ExtArgs> | null;
    include?: Prisma.rider_settlementsInclude<ExtArgs> | null;
    where: Prisma.rider_settlementsWhereUniqueInput;
};
export type rider_settlementsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rider_settlementsWhereInput;
    limit?: number;
};
export type rider_settlementsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.rider_settlementsOmit<ExtArgs> | null;
    include?: Prisma.rider_settlementsInclude<ExtArgs> | null;
};
export {};
