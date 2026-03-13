import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type merchant_settlementsModel = runtime.Types.Result.DefaultSelection<Prisma.$merchant_settlementsPayload>;
export type AggregateMerchant_settlements = {
    _count: Merchant_settlementsCountAggregateOutputType | null;
    _avg: Merchant_settlementsAvgAggregateOutputType | null;
    _sum: Merchant_settlementsSumAggregateOutputType | null;
    _min: Merchant_settlementsMinAggregateOutputType | null;
    _max: Merchant_settlementsMaxAggregateOutputType | null;
};
export type Merchant_settlementsAvgAggregateOutputType = {
    gross_sales_amount: runtime.Decimal | null;
    commission_amount: runtime.Decimal | null;
    delivery_fee_collected: runtime.Decimal | null;
    service_fee_collected: runtime.Decimal | null;
    adjustments_amount: runtime.Decimal | null;
    net_payable_amount: runtime.Decimal | null;
};
export type Merchant_settlementsSumAggregateOutputType = {
    gross_sales_amount: runtime.Decimal | null;
    commission_amount: runtime.Decimal | null;
    delivery_fee_collected: runtime.Decimal | null;
    service_fee_collected: runtime.Decimal | null;
    adjustments_amount: runtime.Decimal | null;
    net_payable_amount: runtime.Decimal | null;
};
export type Merchant_settlementsMinAggregateOutputType = {
    id: string | null;
    merchant_id: string | null;
    period_start: Date | null;
    period_end: Date | null;
    gross_sales_amount: runtime.Decimal | null;
    commission_amount: runtime.Decimal | null;
    delivery_fee_collected: runtime.Decimal | null;
    service_fee_collected: runtime.Decimal | null;
    adjustments_amount: runtime.Decimal | null;
    net_payable_amount: runtime.Decimal | null;
    status: $Enums.settlement_status_type | null;
    generated_at: Date | null;
    paid_at: Date | null;
};
export type Merchant_settlementsMaxAggregateOutputType = {
    id: string | null;
    merchant_id: string | null;
    period_start: Date | null;
    period_end: Date | null;
    gross_sales_amount: runtime.Decimal | null;
    commission_amount: runtime.Decimal | null;
    delivery_fee_collected: runtime.Decimal | null;
    service_fee_collected: runtime.Decimal | null;
    adjustments_amount: runtime.Decimal | null;
    net_payable_amount: runtime.Decimal | null;
    status: $Enums.settlement_status_type | null;
    generated_at: Date | null;
    paid_at: Date | null;
};
export type Merchant_settlementsCountAggregateOutputType = {
    id: number;
    merchant_id: number;
    period_start: number;
    period_end: number;
    gross_sales_amount: number;
    commission_amount: number;
    delivery_fee_collected: number;
    service_fee_collected: number;
    adjustments_amount: number;
    net_payable_amount: number;
    status: number;
    generated_at: number;
    paid_at: number;
    _all: number;
};
export type Merchant_settlementsAvgAggregateInputType = {
    gross_sales_amount?: true;
    commission_amount?: true;
    delivery_fee_collected?: true;
    service_fee_collected?: true;
    adjustments_amount?: true;
    net_payable_amount?: true;
};
export type Merchant_settlementsSumAggregateInputType = {
    gross_sales_amount?: true;
    commission_amount?: true;
    delivery_fee_collected?: true;
    service_fee_collected?: true;
    adjustments_amount?: true;
    net_payable_amount?: true;
};
export type Merchant_settlementsMinAggregateInputType = {
    id?: true;
    merchant_id?: true;
    period_start?: true;
    period_end?: true;
    gross_sales_amount?: true;
    commission_amount?: true;
    delivery_fee_collected?: true;
    service_fee_collected?: true;
    adjustments_amount?: true;
    net_payable_amount?: true;
    status?: true;
    generated_at?: true;
    paid_at?: true;
};
export type Merchant_settlementsMaxAggregateInputType = {
    id?: true;
    merchant_id?: true;
    period_start?: true;
    period_end?: true;
    gross_sales_amount?: true;
    commission_amount?: true;
    delivery_fee_collected?: true;
    service_fee_collected?: true;
    adjustments_amount?: true;
    net_payable_amount?: true;
    status?: true;
    generated_at?: true;
    paid_at?: true;
};
export type Merchant_settlementsCountAggregateInputType = {
    id?: true;
    merchant_id?: true;
    period_start?: true;
    period_end?: true;
    gross_sales_amount?: true;
    commission_amount?: true;
    delivery_fee_collected?: true;
    service_fee_collected?: true;
    adjustments_amount?: true;
    net_payable_amount?: true;
    status?: true;
    generated_at?: true;
    paid_at?: true;
    _all?: true;
};
export type Merchant_settlementsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.merchant_settlementsWhereInput;
    orderBy?: Prisma.merchant_settlementsOrderByWithRelationInput | Prisma.merchant_settlementsOrderByWithRelationInput[];
    cursor?: Prisma.merchant_settlementsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Merchant_settlementsCountAggregateInputType;
    _avg?: Merchant_settlementsAvgAggregateInputType;
    _sum?: Merchant_settlementsSumAggregateInputType;
    _min?: Merchant_settlementsMinAggregateInputType;
    _max?: Merchant_settlementsMaxAggregateInputType;
};
export type GetMerchant_settlementsAggregateType<T extends Merchant_settlementsAggregateArgs> = {
    [P in keyof T & keyof AggregateMerchant_settlements]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMerchant_settlements[P]> : Prisma.GetScalarType<T[P], AggregateMerchant_settlements[P]>;
};
export type merchant_settlementsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.merchant_settlementsWhereInput;
    orderBy?: Prisma.merchant_settlementsOrderByWithAggregationInput | Prisma.merchant_settlementsOrderByWithAggregationInput[];
    by: Prisma.Merchant_settlementsScalarFieldEnum[] | Prisma.Merchant_settlementsScalarFieldEnum;
    having?: Prisma.merchant_settlementsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Merchant_settlementsCountAggregateInputType | true;
    _avg?: Merchant_settlementsAvgAggregateInputType;
    _sum?: Merchant_settlementsSumAggregateInputType;
    _min?: Merchant_settlementsMinAggregateInputType;
    _max?: Merchant_settlementsMaxAggregateInputType;
};
export type Merchant_settlementsGroupByOutputType = {
    id: string;
    merchant_id: string;
    period_start: Date;
    period_end: Date;
    gross_sales_amount: runtime.Decimal;
    commission_amount: runtime.Decimal;
    delivery_fee_collected: runtime.Decimal;
    service_fee_collected: runtime.Decimal;
    adjustments_amount: runtime.Decimal;
    net_payable_amount: runtime.Decimal;
    status: $Enums.settlement_status_type;
    generated_at: Date;
    paid_at: Date | null;
    _count: Merchant_settlementsCountAggregateOutputType | null;
    _avg: Merchant_settlementsAvgAggregateOutputType | null;
    _sum: Merchant_settlementsSumAggregateOutputType | null;
    _min: Merchant_settlementsMinAggregateOutputType | null;
    _max: Merchant_settlementsMaxAggregateOutputType | null;
};
type GetMerchant_settlementsGroupByPayload<T extends merchant_settlementsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Merchant_settlementsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Merchant_settlementsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Merchant_settlementsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Merchant_settlementsGroupByOutputType[P]>;
}>>;
export type merchant_settlementsWhereInput = {
    AND?: Prisma.merchant_settlementsWhereInput | Prisma.merchant_settlementsWhereInput[];
    OR?: Prisma.merchant_settlementsWhereInput[];
    NOT?: Prisma.merchant_settlementsWhereInput | Prisma.merchant_settlementsWhereInput[];
    id?: Prisma.UuidFilter<"merchant_settlements"> | string;
    merchant_id?: Prisma.UuidFilter<"merchant_settlements"> | string;
    period_start?: Prisma.DateTimeFilter<"merchant_settlements"> | Date | string;
    period_end?: Prisma.DateTimeFilter<"merchant_settlements"> | Date | string;
    gross_sales_amount?: Prisma.DecimalFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission_amount?: Prisma.DecimalFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee_collected?: Prisma.DecimalFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    service_fee_collected?: Prisma.DecimalFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjustments_amount?: Prisma.DecimalFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFilter<"merchant_settlements"> | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFilter<"merchant_settlements"> | Date | string;
    paid_at?: Prisma.DateTimeNullableFilter<"merchant_settlements"> | Date | string | null;
    merchant_profiles?: Prisma.XOR<Prisma.Merchant_profilesScalarRelationFilter, Prisma.merchant_profilesWhereInput>;
};
export type merchant_settlementsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    merchant_id?: Prisma.SortOrder;
    period_start?: Prisma.SortOrder;
    period_end?: Prisma.SortOrder;
    gross_sales_amount?: Prisma.SortOrder;
    commission_amount?: Prisma.SortOrder;
    delivery_fee_collected?: Prisma.SortOrder;
    service_fee_collected?: Prisma.SortOrder;
    adjustments_amount?: Prisma.SortOrder;
    net_payable_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    merchant_profiles?: Prisma.merchant_profilesOrderByWithRelationInput;
};
export type merchant_settlementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.merchant_settlementsWhereInput | Prisma.merchant_settlementsWhereInput[];
    OR?: Prisma.merchant_settlementsWhereInput[];
    NOT?: Prisma.merchant_settlementsWhereInput | Prisma.merchant_settlementsWhereInput[];
    merchant_id?: Prisma.UuidFilter<"merchant_settlements"> | string;
    period_start?: Prisma.DateTimeFilter<"merchant_settlements"> | Date | string;
    period_end?: Prisma.DateTimeFilter<"merchant_settlements"> | Date | string;
    gross_sales_amount?: Prisma.DecimalFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission_amount?: Prisma.DecimalFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee_collected?: Prisma.DecimalFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    service_fee_collected?: Prisma.DecimalFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjustments_amount?: Prisma.DecimalFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFilter<"merchant_settlements"> | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFilter<"merchant_settlements"> | Date | string;
    paid_at?: Prisma.DateTimeNullableFilter<"merchant_settlements"> | Date | string | null;
    merchant_profiles?: Prisma.XOR<Prisma.Merchant_profilesScalarRelationFilter, Prisma.merchant_profilesWhereInput>;
}, "id">;
export type merchant_settlementsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    merchant_id?: Prisma.SortOrder;
    period_start?: Prisma.SortOrder;
    period_end?: Prisma.SortOrder;
    gross_sales_amount?: Prisma.SortOrder;
    commission_amount?: Prisma.SortOrder;
    delivery_fee_collected?: Prisma.SortOrder;
    service_fee_collected?: Prisma.SortOrder;
    adjustments_amount?: Prisma.SortOrder;
    net_payable_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.merchant_settlementsCountOrderByAggregateInput;
    _avg?: Prisma.merchant_settlementsAvgOrderByAggregateInput;
    _max?: Prisma.merchant_settlementsMaxOrderByAggregateInput;
    _min?: Prisma.merchant_settlementsMinOrderByAggregateInput;
    _sum?: Prisma.merchant_settlementsSumOrderByAggregateInput;
};
export type merchant_settlementsScalarWhereWithAggregatesInput = {
    AND?: Prisma.merchant_settlementsScalarWhereWithAggregatesInput | Prisma.merchant_settlementsScalarWhereWithAggregatesInput[];
    OR?: Prisma.merchant_settlementsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.merchant_settlementsScalarWhereWithAggregatesInput | Prisma.merchant_settlementsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"merchant_settlements"> | string;
    merchant_id?: Prisma.UuidWithAggregatesFilter<"merchant_settlements"> | string;
    period_start?: Prisma.DateTimeWithAggregatesFilter<"merchant_settlements"> | Date | string;
    period_end?: Prisma.DateTimeWithAggregatesFilter<"merchant_settlements"> | Date | string;
    gross_sales_amount?: Prisma.DecimalWithAggregatesFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission_amount?: Prisma.DecimalWithAggregatesFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee_collected?: Prisma.DecimalWithAggregatesFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    service_fee_collected?: Prisma.DecimalWithAggregatesFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjustments_amount?: Prisma.DecimalWithAggregatesFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalWithAggregatesFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeWithAggregatesFilter<"merchant_settlements"> | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeWithAggregatesFilter<"merchant_settlements"> | Date | string;
    paid_at?: Prisma.DateTimeNullableWithAggregatesFilter<"merchant_settlements"> | Date | string | null;
};
export type merchant_settlementsCreateInput = {
    id?: string;
    period_start: Date | string;
    period_end: Date | string;
    gross_sales_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee_collected?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    service_fee_collected?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjustments_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.settlement_status_type;
    generated_at?: Date | string;
    paid_at?: Date | string | null;
    merchant_profiles: Prisma.merchant_profilesCreateNestedOneWithoutMerchant_settlementsInput;
};
export type merchant_settlementsUncheckedCreateInput = {
    id?: string;
    merchant_id: string;
    period_start: Date | string;
    period_end: Date | string;
    gross_sales_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee_collected?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    service_fee_collected?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjustments_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.settlement_status_type;
    generated_at?: Date | string;
    paid_at?: Date | string | null;
};
export type merchant_settlementsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    period_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gross_sales_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee_collected?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    service_fee_collected?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjustments_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFieldUpdateOperationsInput | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    merchant_profiles?: Prisma.merchant_profilesUpdateOneRequiredWithoutMerchant_settlementsNestedInput;
};
export type merchant_settlementsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    merchant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    period_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    period_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gross_sales_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee_collected?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    service_fee_collected?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjustments_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFieldUpdateOperationsInput | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type merchant_settlementsCreateManyInput = {
    id?: string;
    merchant_id: string;
    period_start: Date | string;
    period_end: Date | string;
    gross_sales_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee_collected?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    service_fee_collected?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjustments_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.settlement_status_type;
    generated_at?: Date | string;
    paid_at?: Date | string | null;
};
export type merchant_settlementsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    period_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gross_sales_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee_collected?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    service_fee_collected?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjustments_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFieldUpdateOperationsInput | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type merchant_settlementsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    merchant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    period_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    period_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gross_sales_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee_collected?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    service_fee_collected?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjustments_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFieldUpdateOperationsInput | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Merchant_settlementsListRelationFilter = {
    every?: Prisma.merchant_settlementsWhereInput;
    some?: Prisma.merchant_settlementsWhereInput;
    none?: Prisma.merchant_settlementsWhereInput;
};
export type merchant_settlementsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type merchant_settlementsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    merchant_id?: Prisma.SortOrder;
    period_start?: Prisma.SortOrder;
    period_end?: Prisma.SortOrder;
    gross_sales_amount?: Prisma.SortOrder;
    commission_amount?: Prisma.SortOrder;
    delivery_fee_collected?: Prisma.SortOrder;
    service_fee_collected?: Prisma.SortOrder;
    adjustments_amount?: Prisma.SortOrder;
    net_payable_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
};
export type merchant_settlementsAvgOrderByAggregateInput = {
    gross_sales_amount?: Prisma.SortOrder;
    commission_amount?: Prisma.SortOrder;
    delivery_fee_collected?: Prisma.SortOrder;
    service_fee_collected?: Prisma.SortOrder;
    adjustments_amount?: Prisma.SortOrder;
    net_payable_amount?: Prisma.SortOrder;
};
export type merchant_settlementsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    merchant_id?: Prisma.SortOrder;
    period_start?: Prisma.SortOrder;
    period_end?: Prisma.SortOrder;
    gross_sales_amount?: Prisma.SortOrder;
    commission_amount?: Prisma.SortOrder;
    delivery_fee_collected?: Prisma.SortOrder;
    service_fee_collected?: Prisma.SortOrder;
    adjustments_amount?: Prisma.SortOrder;
    net_payable_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
};
export type merchant_settlementsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    merchant_id?: Prisma.SortOrder;
    period_start?: Prisma.SortOrder;
    period_end?: Prisma.SortOrder;
    gross_sales_amount?: Prisma.SortOrder;
    commission_amount?: Prisma.SortOrder;
    delivery_fee_collected?: Prisma.SortOrder;
    service_fee_collected?: Prisma.SortOrder;
    adjustments_amount?: Prisma.SortOrder;
    net_payable_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
};
export type merchant_settlementsSumOrderByAggregateInput = {
    gross_sales_amount?: Prisma.SortOrder;
    commission_amount?: Prisma.SortOrder;
    delivery_fee_collected?: Prisma.SortOrder;
    service_fee_collected?: Prisma.SortOrder;
    adjustments_amount?: Prisma.SortOrder;
    net_payable_amount?: Prisma.SortOrder;
};
export type merchant_settlementsCreateNestedManyWithoutMerchant_profilesInput = {
    create?: Prisma.XOR<Prisma.merchant_settlementsCreateWithoutMerchant_profilesInput, Prisma.merchant_settlementsUncheckedCreateWithoutMerchant_profilesInput> | Prisma.merchant_settlementsCreateWithoutMerchant_profilesInput[] | Prisma.merchant_settlementsUncheckedCreateWithoutMerchant_profilesInput[];
    connectOrCreate?: Prisma.merchant_settlementsCreateOrConnectWithoutMerchant_profilesInput | Prisma.merchant_settlementsCreateOrConnectWithoutMerchant_profilesInput[];
    createMany?: Prisma.merchant_settlementsCreateManyMerchant_profilesInputEnvelope;
    connect?: Prisma.merchant_settlementsWhereUniqueInput | Prisma.merchant_settlementsWhereUniqueInput[];
};
export type merchant_settlementsUncheckedCreateNestedManyWithoutMerchant_profilesInput = {
    create?: Prisma.XOR<Prisma.merchant_settlementsCreateWithoutMerchant_profilesInput, Prisma.merchant_settlementsUncheckedCreateWithoutMerchant_profilesInput> | Prisma.merchant_settlementsCreateWithoutMerchant_profilesInput[] | Prisma.merchant_settlementsUncheckedCreateWithoutMerchant_profilesInput[];
    connectOrCreate?: Prisma.merchant_settlementsCreateOrConnectWithoutMerchant_profilesInput | Prisma.merchant_settlementsCreateOrConnectWithoutMerchant_profilesInput[];
    createMany?: Prisma.merchant_settlementsCreateManyMerchant_profilesInputEnvelope;
    connect?: Prisma.merchant_settlementsWhereUniqueInput | Prisma.merchant_settlementsWhereUniqueInput[];
};
export type merchant_settlementsUpdateManyWithoutMerchant_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.merchant_settlementsCreateWithoutMerchant_profilesInput, Prisma.merchant_settlementsUncheckedCreateWithoutMerchant_profilesInput> | Prisma.merchant_settlementsCreateWithoutMerchant_profilesInput[] | Prisma.merchant_settlementsUncheckedCreateWithoutMerchant_profilesInput[];
    connectOrCreate?: Prisma.merchant_settlementsCreateOrConnectWithoutMerchant_profilesInput | Prisma.merchant_settlementsCreateOrConnectWithoutMerchant_profilesInput[];
    upsert?: Prisma.merchant_settlementsUpsertWithWhereUniqueWithoutMerchant_profilesInput | Prisma.merchant_settlementsUpsertWithWhereUniqueWithoutMerchant_profilesInput[];
    createMany?: Prisma.merchant_settlementsCreateManyMerchant_profilesInputEnvelope;
    set?: Prisma.merchant_settlementsWhereUniqueInput | Prisma.merchant_settlementsWhereUniqueInput[];
    disconnect?: Prisma.merchant_settlementsWhereUniqueInput | Prisma.merchant_settlementsWhereUniqueInput[];
    delete?: Prisma.merchant_settlementsWhereUniqueInput | Prisma.merchant_settlementsWhereUniqueInput[];
    connect?: Prisma.merchant_settlementsWhereUniqueInput | Prisma.merchant_settlementsWhereUniqueInput[];
    update?: Prisma.merchant_settlementsUpdateWithWhereUniqueWithoutMerchant_profilesInput | Prisma.merchant_settlementsUpdateWithWhereUniqueWithoutMerchant_profilesInput[];
    updateMany?: Prisma.merchant_settlementsUpdateManyWithWhereWithoutMerchant_profilesInput | Prisma.merchant_settlementsUpdateManyWithWhereWithoutMerchant_profilesInput[];
    deleteMany?: Prisma.merchant_settlementsScalarWhereInput | Prisma.merchant_settlementsScalarWhereInput[];
};
export type merchant_settlementsUncheckedUpdateManyWithoutMerchant_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.merchant_settlementsCreateWithoutMerchant_profilesInput, Prisma.merchant_settlementsUncheckedCreateWithoutMerchant_profilesInput> | Prisma.merchant_settlementsCreateWithoutMerchant_profilesInput[] | Prisma.merchant_settlementsUncheckedCreateWithoutMerchant_profilesInput[];
    connectOrCreate?: Prisma.merchant_settlementsCreateOrConnectWithoutMerchant_profilesInput | Prisma.merchant_settlementsCreateOrConnectWithoutMerchant_profilesInput[];
    upsert?: Prisma.merchant_settlementsUpsertWithWhereUniqueWithoutMerchant_profilesInput | Prisma.merchant_settlementsUpsertWithWhereUniqueWithoutMerchant_profilesInput[];
    createMany?: Prisma.merchant_settlementsCreateManyMerchant_profilesInputEnvelope;
    set?: Prisma.merchant_settlementsWhereUniqueInput | Prisma.merchant_settlementsWhereUniqueInput[];
    disconnect?: Prisma.merchant_settlementsWhereUniqueInput | Prisma.merchant_settlementsWhereUniqueInput[];
    delete?: Prisma.merchant_settlementsWhereUniqueInput | Prisma.merchant_settlementsWhereUniqueInput[];
    connect?: Prisma.merchant_settlementsWhereUniqueInput | Prisma.merchant_settlementsWhereUniqueInput[];
    update?: Prisma.merchant_settlementsUpdateWithWhereUniqueWithoutMerchant_profilesInput | Prisma.merchant_settlementsUpdateWithWhereUniqueWithoutMerchant_profilesInput[];
    updateMany?: Prisma.merchant_settlementsUpdateManyWithWhereWithoutMerchant_profilesInput | Prisma.merchant_settlementsUpdateManyWithWhereWithoutMerchant_profilesInput[];
    deleteMany?: Prisma.merchant_settlementsScalarWhereInput | Prisma.merchant_settlementsScalarWhereInput[];
};
export type Enumsettlement_status_typeFieldUpdateOperationsInput = {
    set?: $Enums.settlement_status_type;
};
export type merchant_settlementsCreateWithoutMerchant_profilesInput = {
    id?: string;
    period_start: Date | string;
    period_end: Date | string;
    gross_sales_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee_collected?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    service_fee_collected?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjustments_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.settlement_status_type;
    generated_at?: Date | string;
    paid_at?: Date | string | null;
};
export type merchant_settlementsUncheckedCreateWithoutMerchant_profilesInput = {
    id?: string;
    period_start: Date | string;
    period_end: Date | string;
    gross_sales_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee_collected?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    service_fee_collected?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjustments_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.settlement_status_type;
    generated_at?: Date | string;
    paid_at?: Date | string | null;
};
export type merchant_settlementsCreateOrConnectWithoutMerchant_profilesInput = {
    where: Prisma.merchant_settlementsWhereUniqueInput;
    create: Prisma.XOR<Prisma.merchant_settlementsCreateWithoutMerchant_profilesInput, Prisma.merchant_settlementsUncheckedCreateWithoutMerchant_profilesInput>;
};
export type merchant_settlementsCreateManyMerchant_profilesInputEnvelope = {
    data: Prisma.merchant_settlementsCreateManyMerchant_profilesInput | Prisma.merchant_settlementsCreateManyMerchant_profilesInput[];
    skipDuplicates?: boolean;
};
export type merchant_settlementsUpsertWithWhereUniqueWithoutMerchant_profilesInput = {
    where: Prisma.merchant_settlementsWhereUniqueInput;
    update: Prisma.XOR<Prisma.merchant_settlementsUpdateWithoutMerchant_profilesInput, Prisma.merchant_settlementsUncheckedUpdateWithoutMerchant_profilesInput>;
    create: Prisma.XOR<Prisma.merchant_settlementsCreateWithoutMerchant_profilesInput, Prisma.merchant_settlementsUncheckedCreateWithoutMerchant_profilesInput>;
};
export type merchant_settlementsUpdateWithWhereUniqueWithoutMerchant_profilesInput = {
    where: Prisma.merchant_settlementsWhereUniqueInput;
    data: Prisma.XOR<Prisma.merchant_settlementsUpdateWithoutMerchant_profilesInput, Prisma.merchant_settlementsUncheckedUpdateWithoutMerchant_profilesInput>;
};
export type merchant_settlementsUpdateManyWithWhereWithoutMerchant_profilesInput = {
    where: Prisma.merchant_settlementsScalarWhereInput;
    data: Prisma.XOR<Prisma.merchant_settlementsUpdateManyMutationInput, Prisma.merchant_settlementsUncheckedUpdateManyWithoutMerchant_profilesInput>;
};
export type merchant_settlementsScalarWhereInput = {
    AND?: Prisma.merchant_settlementsScalarWhereInput | Prisma.merchant_settlementsScalarWhereInput[];
    OR?: Prisma.merchant_settlementsScalarWhereInput[];
    NOT?: Prisma.merchant_settlementsScalarWhereInput | Prisma.merchant_settlementsScalarWhereInput[];
    id?: Prisma.UuidFilter<"merchant_settlements"> | string;
    merchant_id?: Prisma.UuidFilter<"merchant_settlements"> | string;
    period_start?: Prisma.DateTimeFilter<"merchant_settlements"> | Date | string;
    period_end?: Prisma.DateTimeFilter<"merchant_settlements"> | Date | string;
    gross_sales_amount?: Prisma.DecimalFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission_amount?: Prisma.DecimalFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee_collected?: Prisma.DecimalFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    service_fee_collected?: Prisma.DecimalFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjustments_amount?: Prisma.DecimalFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFilter<"merchant_settlements"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFilter<"merchant_settlements"> | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFilter<"merchant_settlements"> | Date | string;
    paid_at?: Prisma.DateTimeNullableFilter<"merchant_settlements"> | Date | string | null;
};
export type merchant_settlementsCreateManyMerchant_profilesInput = {
    id?: string;
    period_start: Date | string;
    period_end: Date | string;
    gross_sales_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee_collected?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    service_fee_collected?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjustments_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.settlement_status_type;
    generated_at?: Date | string;
    paid_at?: Date | string | null;
};
export type merchant_settlementsUpdateWithoutMerchant_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    period_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gross_sales_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee_collected?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    service_fee_collected?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjustments_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFieldUpdateOperationsInput | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type merchant_settlementsUncheckedUpdateWithoutMerchant_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    period_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gross_sales_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee_collected?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    service_fee_collected?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjustments_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFieldUpdateOperationsInput | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type merchant_settlementsUncheckedUpdateManyWithoutMerchant_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    period_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gross_sales_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_fee_collected?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    service_fee_collected?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjustments_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    net_payable_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsettlement_status_typeFieldUpdateOperationsInput | $Enums.settlement_status_type;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type merchant_settlementsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    merchant_id?: boolean;
    period_start?: boolean;
    period_end?: boolean;
    gross_sales_amount?: boolean;
    commission_amount?: boolean;
    delivery_fee_collected?: boolean;
    service_fee_collected?: boolean;
    adjustments_amount?: boolean;
    net_payable_amount?: boolean;
    status?: boolean;
    generated_at?: boolean;
    paid_at?: boolean;
    merchant_profiles?: boolean | Prisma.merchant_profilesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["merchant_settlements"]>;
export type merchant_settlementsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    merchant_id?: boolean;
    period_start?: boolean;
    period_end?: boolean;
    gross_sales_amount?: boolean;
    commission_amount?: boolean;
    delivery_fee_collected?: boolean;
    service_fee_collected?: boolean;
    adjustments_amount?: boolean;
    net_payable_amount?: boolean;
    status?: boolean;
    generated_at?: boolean;
    paid_at?: boolean;
    merchant_profiles?: boolean | Prisma.merchant_profilesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["merchant_settlements"]>;
export type merchant_settlementsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    merchant_id?: boolean;
    period_start?: boolean;
    period_end?: boolean;
    gross_sales_amount?: boolean;
    commission_amount?: boolean;
    delivery_fee_collected?: boolean;
    service_fee_collected?: boolean;
    adjustments_amount?: boolean;
    net_payable_amount?: boolean;
    status?: boolean;
    generated_at?: boolean;
    paid_at?: boolean;
    merchant_profiles?: boolean | Prisma.merchant_profilesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["merchant_settlements"]>;
export type merchant_settlementsSelectScalar = {
    id?: boolean;
    merchant_id?: boolean;
    period_start?: boolean;
    period_end?: boolean;
    gross_sales_amount?: boolean;
    commission_amount?: boolean;
    delivery_fee_collected?: boolean;
    service_fee_collected?: boolean;
    adjustments_amount?: boolean;
    net_payable_amount?: boolean;
    status?: boolean;
    generated_at?: boolean;
    paid_at?: boolean;
};
export type merchant_settlementsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "merchant_id" | "period_start" | "period_end" | "gross_sales_amount" | "commission_amount" | "delivery_fee_collected" | "service_fee_collected" | "adjustments_amount" | "net_payable_amount" | "status" | "generated_at" | "paid_at", ExtArgs["result"]["merchant_settlements"]>;
export type merchant_settlementsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    merchant_profiles?: boolean | Prisma.merchant_profilesDefaultArgs<ExtArgs>;
};
export type merchant_settlementsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    merchant_profiles?: boolean | Prisma.merchant_profilesDefaultArgs<ExtArgs>;
};
export type merchant_settlementsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    merchant_profiles?: boolean | Prisma.merchant_profilesDefaultArgs<ExtArgs>;
};
export type $merchant_settlementsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "merchant_settlements";
    objects: {
        merchant_profiles: Prisma.$merchant_profilesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        merchant_id: string;
        period_start: Date;
        period_end: Date;
        gross_sales_amount: runtime.Decimal;
        commission_amount: runtime.Decimal;
        delivery_fee_collected: runtime.Decimal;
        service_fee_collected: runtime.Decimal;
        adjustments_amount: runtime.Decimal;
        net_payable_amount: runtime.Decimal;
        status: $Enums.settlement_status_type;
        generated_at: Date;
        paid_at: Date | null;
    }, ExtArgs["result"]["merchant_settlements"]>;
    composites: {};
};
export type merchant_settlementsGetPayload<S extends boolean | null | undefined | merchant_settlementsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$merchant_settlementsPayload, S>;
export type merchant_settlementsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<merchant_settlementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Merchant_settlementsCountAggregateInputType | true;
};
export interface merchant_settlementsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['merchant_settlements'];
        meta: {
            name: 'merchant_settlements';
        };
    };
    findUnique<T extends merchant_settlementsFindUniqueArgs>(args: Prisma.SelectSubset<T, merchant_settlementsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__merchant_settlementsClient<runtime.Types.Result.GetResult<Prisma.$merchant_settlementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends merchant_settlementsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, merchant_settlementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__merchant_settlementsClient<runtime.Types.Result.GetResult<Prisma.$merchant_settlementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends merchant_settlementsFindFirstArgs>(args?: Prisma.SelectSubset<T, merchant_settlementsFindFirstArgs<ExtArgs>>): Prisma.Prisma__merchant_settlementsClient<runtime.Types.Result.GetResult<Prisma.$merchant_settlementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends merchant_settlementsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, merchant_settlementsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__merchant_settlementsClient<runtime.Types.Result.GetResult<Prisma.$merchant_settlementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends merchant_settlementsFindManyArgs>(args?: Prisma.SelectSubset<T, merchant_settlementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$merchant_settlementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends merchant_settlementsCreateArgs>(args: Prisma.SelectSubset<T, merchant_settlementsCreateArgs<ExtArgs>>): Prisma.Prisma__merchant_settlementsClient<runtime.Types.Result.GetResult<Prisma.$merchant_settlementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends merchant_settlementsCreateManyArgs>(args?: Prisma.SelectSubset<T, merchant_settlementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends merchant_settlementsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, merchant_settlementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$merchant_settlementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends merchant_settlementsDeleteArgs>(args: Prisma.SelectSubset<T, merchant_settlementsDeleteArgs<ExtArgs>>): Prisma.Prisma__merchant_settlementsClient<runtime.Types.Result.GetResult<Prisma.$merchant_settlementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends merchant_settlementsUpdateArgs>(args: Prisma.SelectSubset<T, merchant_settlementsUpdateArgs<ExtArgs>>): Prisma.Prisma__merchant_settlementsClient<runtime.Types.Result.GetResult<Prisma.$merchant_settlementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends merchant_settlementsDeleteManyArgs>(args?: Prisma.SelectSubset<T, merchant_settlementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends merchant_settlementsUpdateManyArgs>(args: Prisma.SelectSubset<T, merchant_settlementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends merchant_settlementsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, merchant_settlementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$merchant_settlementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends merchant_settlementsUpsertArgs>(args: Prisma.SelectSubset<T, merchant_settlementsUpsertArgs<ExtArgs>>): Prisma.Prisma__merchant_settlementsClient<runtime.Types.Result.GetResult<Prisma.$merchant_settlementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends merchant_settlementsCountArgs>(args?: Prisma.Subset<T, merchant_settlementsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Merchant_settlementsCountAggregateOutputType> : number>;
    aggregate<T extends Merchant_settlementsAggregateArgs>(args: Prisma.Subset<T, Merchant_settlementsAggregateArgs>): Prisma.PrismaPromise<GetMerchant_settlementsAggregateType<T>>;
    groupBy<T extends merchant_settlementsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: merchant_settlementsGroupByArgs['orderBy'];
    } : {
        orderBy?: merchant_settlementsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, merchant_settlementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchant_settlementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: merchant_settlementsFieldRefs;
}
export interface Prisma__merchant_settlementsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    merchant_profiles<T extends Prisma.merchant_profilesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.merchant_profilesDefaultArgs<ExtArgs>>): Prisma.Prisma__merchant_profilesClient<runtime.Types.Result.GetResult<Prisma.$merchant_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface merchant_settlementsFieldRefs {
    readonly id: Prisma.FieldRef<"merchant_settlements", 'String'>;
    readonly merchant_id: Prisma.FieldRef<"merchant_settlements", 'String'>;
    readonly period_start: Prisma.FieldRef<"merchant_settlements", 'DateTime'>;
    readonly period_end: Prisma.FieldRef<"merchant_settlements", 'DateTime'>;
    readonly gross_sales_amount: Prisma.FieldRef<"merchant_settlements", 'Decimal'>;
    readonly commission_amount: Prisma.FieldRef<"merchant_settlements", 'Decimal'>;
    readonly delivery_fee_collected: Prisma.FieldRef<"merchant_settlements", 'Decimal'>;
    readonly service_fee_collected: Prisma.FieldRef<"merchant_settlements", 'Decimal'>;
    readonly adjustments_amount: Prisma.FieldRef<"merchant_settlements", 'Decimal'>;
    readonly net_payable_amount: Prisma.FieldRef<"merchant_settlements", 'Decimal'>;
    readonly status: Prisma.FieldRef<"merchant_settlements", 'settlement_status_type'>;
    readonly generated_at: Prisma.FieldRef<"merchant_settlements", 'DateTime'>;
    readonly paid_at: Prisma.FieldRef<"merchant_settlements", 'DateTime'>;
}
export type merchant_settlementsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.merchant_settlementsOmit<ExtArgs> | null;
    include?: Prisma.merchant_settlementsInclude<ExtArgs> | null;
    where: Prisma.merchant_settlementsWhereUniqueInput;
};
export type merchant_settlementsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.merchant_settlementsOmit<ExtArgs> | null;
    include?: Prisma.merchant_settlementsInclude<ExtArgs> | null;
    where: Prisma.merchant_settlementsWhereUniqueInput;
};
export type merchant_settlementsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.merchant_settlementsOmit<ExtArgs> | null;
    include?: Prisma.merchant_settlementsInclude<ExtArgs> | null;
    where?: Prisma.merchant_settlementsWhereInput;
    orderBy?: Prisma.merchant_settlementsOrderByWithRelationInput | Prisma.merchant_settlementsOrderByWithRelationInput[];
    cursor?: Prisma.merchant_settlementsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Merchant_settlementsScalarFieldEnum | Prisma.Merchant_settlementsScalarFieldEnum[];
};
export type merchant_settlementsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.merchant_settlementsOmit<ExtArgs> | null;
    include?: Prisma.merchant_settlementsInclude<ExtArgs> | null;
    where?: Prisma.merchant_settlementsWhereInput;
    orderBy?: Prisma.merchant_settlementsOrderByWithRelationInput | Prisma.merchant_settlementsOrderByWithRelationInput[];
    cursor?: Prisma.merchant_settlementsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Merchant_settlementsScalarFieldEnum | Prisma.Merchant_settlementsScalarFieldEnum[];
};
export type merchant_settlementsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.merchant_settlementsOmit<ExtArgs> | null;
    include?: Prisma.merchant_settlementsInclude<ExtArgs> | null;
    where?: Prisma.merchant_settlementsWhereInput;
    orderBy?: Prisma.merchant_settlementsOrderByWithRelationInput | Prisma.merchant_settlementsOrderByWithRelationInput[];
    cursor?: Prisma.merchant_settlementsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Merchant_settlementsScalarFieldEnum | Prisma.Merchant_settlementsScalarFieldEnum[];
};
export type merchant_settlementsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.merchant_settlementsOmit<ExtArgs> | null;
    include?: Prisma.merchant_settlementsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.merchant_settlementsCreateInput, Prisma.merchant_settlementsUncheckedCreateInput>;
};
export type merchant_settlementsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.merchant_settlementsCreateManyInput | Prisma.merchant_settlementsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type merchant_settlementsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_settlementsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.merchant_settlementsOmit<ExtArgs> | null;
    data: Prisma.merchant_settlementsCreateManyInput | Prisma.merchant_settlementsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.merchant_settlementsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type merchant_settlementsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.merchant_settlementsOmit<ExtArgs> | null;
    include?: Prisma.merchant_settlementsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.merchant_settlementsUpdateInput, Prisma.merchant_settlementsUncheckedUpdateInput>;
    where: Prisma.merchant_settlementsWhereUniqueInput;
};
export type merchant_settlementsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.merchant_settlementsUpdateManyMutationInput, Prisma.merchant_settlementsUncheckedUpdateManyInput>;
    where?: Prisma.merchant_settlementsWhereInput;
    limit?: number;
};
export type merchant_settlementsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_settlementsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.merchant_settlementsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.merchant_settlementsUpdateManyMutationInput, Prisma.merchant_settlementsUncheckedUpdateManyInput>;
    where?: Prisma.merchant_settlementsWhereInput;
    limit?: number;
    include?: Prisma.merchant_settlementsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type merchant_settlementsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.merchant_settlementsOmit<ExtArgs> | null;
    include?: Prisma.merchant_settlementsInclude<ExtArgs> | null;
    where: Prisma.merchant_settlementsWhereUniqueInput;
    create: Prisma.XOR<Prisma.merchant_settlementsCreateInput, Prisma.merchant_settlementsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.merchant_settlementsUpdateInput, Prisma.merchant_settlementsUncheckedUpdateInput>;
};
export type merchant_settlementsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.merchant_settlementsOmit<ExtArgs> | null;
    include?: Prisma.merchant_settlementsInclude<ExtArgs> | null;
    where: Prisma.merchant_settlementsWhereUniqueInput;
};
export type merchant_settlementsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.merchant_settlementsWhereInput;
    limit?: number;
};
export type merchant_settlementsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.merchant_settlementsOmit<ExtArgs> | null;
    include?: Prisma.merchant_settlementsInclude<ExtArgs> | null;
};
export {};
