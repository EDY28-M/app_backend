import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type paymentsModel = runtime.Types.Result.DefaultSelection<Prisma.$paymentsPayload>;
export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null;
    _avg: PaymentsAvgAggregateOutputType | null;
    _sum: PaymentsSumAggregateOutputType | null;
    _min: PaymentsMinAggregateOutputType | null;
    _max: PaymentsMaxAggregateOutputType | null;
};
export type PaymentsAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PaymentsSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PaymentsMinAggregateOutputType = {
    id: string | null;
    order_id: string | null;
    payment_method_id: string | null;
    provider: string | null;
    provider_transaction_id: string | null;
    status: $Enums.payment_record_status_type | null;
    amount: runtime.Decimal | null;
    paid_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type PaymentsMaxAggregateOutputType = {
    id: string | null;
    order_id: string | null;
    payment_method_id: string | null;
    provider: string | null;
    provider_transaction_id: string | null;
    status: $Enums.payment_record_status_type | null;
    amount: runtime.Decimal | null;
    paid_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type PaymentsCountAggregateOutputType = {
    id: number;
    order_id: number;
    payment_method_id: number;
    provider: number;
    provider_transaction_id: number;
    status: number;
    amount: number;
    paid_at: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type PaymentsAvgAggregateInputType = {
    amount?: true;
};
export type PaymentsSumAggregateInputType = {
    amount?: true;
};
export type PaymentsMinAggregateInputType = {
    id?: true;
    order_id?: true;
    payment_method_id?: true;
    provider?: true;
    provider_transaction_id?: true;
    status?: true;
    amount?: true;
    paid_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type PaymentsMaxAggregateInputType = {
    id?: true;
    order_id?: true;
    payment_method_id?: true;
    provider?: true;
    provider_transaction_id?: true;
    status?: true;
    amount?: true;
    paid_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type PaymentsCountAggregateInputType = {
    id?: true;
    order_id?: true;
    payment_method_id?: true;
    provider?: true;
    provider_transaction_id?: true;
    status?: true;
    amount?: true;
    paid_at?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type PaymentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithRelationInput | Prisma.paymentsOrderByWithRelationInput[];
    cursor?: Prisma.paymentsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentsCountAggregateInputType;
    _avg?: PaymentsAvgAggregateInputType;
    _sum?: PaymentsSumAggregateInputType;
    _min?: PaymentsMinAggregateInputType;
    _max?: PaymentsMaxAggregateInputType;
};
export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
    [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayments[P]> : Prisma.GetScalarType<T[P], AggregatePayments[P]>;
};
export type paymentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithAggregationInput | Prisma.paymentsOrderByWithAggregationInput[];
    by: Prisma.PaymentsScalarFieldEnum[] | Prisma.PaymentsScalarFieldEnum;
    having?: Prisma.paymentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentsCountAggregateInputType | true;
    _avg?: PaymentsAvgAggregateInputType;
    _sum?: PaymentsSumAggregateInputType;
    _min?: PaymentsMinAggregateInputType;
    _max?: PaymentsMaxAggregateInputType;
};
export type PaymentsGroupByOutputType = {
    id: string;
    order_id: string;
    payment_method_id: string;
    provider: string | null;
    provider_transaction_id: string | null;
    status: $Enums.payment_record_status_type;
    amount: runtime.Decimal;
    paid_at: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: PaymentsCountAggregateOutputType | null;
    _avg: PaymentsAvgAggregateOutputType | null;
    _sum: PaymentsSumAggregateOutputType | null;
    _min: PaymentsMinAggregateOutputType | null;
    _max: PaymentsMaxAggregateOutputType | null;
};
type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentsGroupByOutputType[P]>;
}>>;
export type paymentsWhereInput = {
    AND?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    OR?: Prisma.paymentsWhereInput[];
    NOT?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    id?: Prisma.UuidFilter<"payments"> | string;
    order_id?: Prisma.UuidFilter<"payments"> | string;
    payment_method_id?: Prisma.UuidFilter<"payments"> | string;
    provider?: Prisma.StringNullableFilter<"payments"> | string | null;
    provider_transaction_id?: Prisma.StringNullableFilter<"payments"> | string | null;
    status?: Prisma.Enumpayment_record_status_typeFilter<"payments"> | $Enums.payment_record_status_type;
    amount?: Prisma.DecimalFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
    payment_methods?: Prisma.XOR<Prisma.Payment_methodsScalarRelationFilter, Prisma.payment_methodsWhereInput>;
};
export type paymentsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    payment_method_id?: Prisma.SortOrder;
    provider?: Prisma.SortOrderInput | Prisma.SortOrder;
    provider_transaction_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    orders?: Prisma.ordersOrderByWithRelationInput;
    payment_methods?: Prisma.payment_methodsOrderByWithRelationInput;
};
export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    OR?: Prisma.paymentsWhereInput[];
    NOT?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    order_id?: Prisma.UuidFilter<"payments"> | string;
    payment_method_id?: Prisma.UuidFilter<"payments"> | string;
    provider?: Prisma.StringNullableFilter<"payments"> | string | null;
    provider_transaction_id?: Prisma.StringNullableFilter<"payments"> | string | null;
    status?: Prisma.Enumpayment_record_status_typeFilter<"payments"> | $Enums.payment_record_status_type;
    amount?: Prisma.DecimalFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
    payment_methods?: Prisma.XOR<Prisma.Payment_methodsScalarRelationFilter, Prisma.payment_methodsWhereInput>;
}, "id">;
export type paymentsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    payment_method_id?: Prisma.SortOrder;
    provider?: Prisma.SortOrderInput | Prisma.SortOrder;
    provider_transaction_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.paymentsCountOrderByAggregateInput;
    _avg?: Prisma.paymentsAvgOrderByAggregateInput;
    _max?: Prisma.paymentsMaxOrderByAggregateInput;
    _min?: Prisma.paymentsMinOrderByAggregateInput;
    _sum?: Prisma.paymentsSumOrderByAggregateInput;
};
export type paymentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.paymentsScalarWhereWithAggregatesInput | Prisma.paymentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.paymentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.paymentsScalarWhereWithAggregatesInput | Prisma.paymentsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"payments"> | string;
    order_id?: Prisma.UuidWithAggregatesFilter<"payments"> | string;
    payment_method_id?: Prisma.UuidWithAggregatesFilter<"payments"> | string;
    provider?: Prisma.StringNullableWithAggregatesFilter<"payments"> | string | null;
    provider_transaction_id?: Prisma.StringNullableWithAggregatesFilter<"payments"> | string | null;
    status?: Prisma.Enumpayment_record_status_typeWithAggregatesFilter<"payments"> | $Enums.payment_record_status_type;
    amount?: Prisma.DecimalWithAggregatesFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Prisma.DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"payments"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"payments"> | Date | string;
};
export type paymentsCreateInput = {
    id?: string;
    provider?: string | null;
    provider_transaction_id?: string | null;
    status: $Enums.payment_record_status_type;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    orders: Prisma.ordersCreateNestedOneWithoutPaymentsInput;
    payment_methods: Prisma.payment_methodsCreateNestedOneWithoutPaymentsInput;
};
export type paymentsUncheckedCreateInput = {
    id?: string;
    order_id: string;
    payment_method_id: string;
    provider?: string | null;
    provider_transaction_id?: string | null;
    status: $Enums.payment_record_status_type;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type paymentsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_record_status_typeFieldUpdateOperationsInput | $Enums.payment_record_status_type;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.ordersUpdateOneRequiredWithoutPaymentsNestedInput;
    payment_methods?: Prisma.payment_methodsUpdateOneRequiredWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_record_status_typeFieldUpdateOperationsInput | $Enums.payment_record_status_type;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentsCreateManyInput = {
    id?: string;
    order_id: string;
    payment_method_id: string;
    provider?: string | null;
    provider_transaction_id?: string | null;
    status: $Enums.payment_record_status_type;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type paymentsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_record_status_typeFieldUpdateOperationsInput | $Enums.payment_record_status_type;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_record_status_typeFieldUpdateOperationsInput | $Enums.payment_record_status_type;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentsListRelationFilter = {
    every?: Prisma.paymentsWhereInput;
    some?: Prisma.paymentsWhereInput;
    none?: Prisma.paymentsWhereInput;
};
export type paymentsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type paymentsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    payment_method_id?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    provider_transaction_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type paymentsAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type paymentsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    payment_method_id?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    provider_transaction_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type paymentsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    payment_method_id?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    provider_transaction_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type paymentsSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type paymentsCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutOrdersInput, Prisma.paymentsUncheckedCreateWithoutOrdersInput> | Prisma.paymentsCreateWithoutOrdersInput[] | Prisma.paymentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutOrdersInput | Prisma.paymentsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.paymentsCreateManyOrdersInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutOrdersInput, Prisma.paymentsUncheckedCreateWithoutOrdersInput> | Prisma.paymentsCreateWithoutOrdersInput[] | Prisma.paymentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutOrdersInput | Prisma.paymentsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.paymentsCreateManyOrdersInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutOrdersInput, Prisma.paymentsUncheckedCreateWithoutOrdersInput> | Prisma.paymentsCreateWithoutOrdersInput[] | Prisma.paymentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutOrdersInput | Prisma.paymentsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.paymentsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.paymentsCreateManyOrdersInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.paymentsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutOrdersInput | Prisma.paymentsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutOrdersInput, Prisma.paymentsUncheckedCreateWithoutOrdersInput> | Prisma.paymentsCreateWithoutOrdersInput[] | Prisma.paymentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutOrdersInput | Prisma.paymentsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.paymentsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.paymentsCreateManyOrdersInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.paymentsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutOrdersInput | Prisma.paymentsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsCreateNestedManyWithoutPayment_methodsInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutPayment_methodsInput, Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput> | Prisma.paymentsCreateWithoutPayment_methodsInput[] | Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutPayment_methodsInput | Prisma.paymentsCreateOrConnectWithoutPayment_methodsInput[];
    createMany?: Prisma.paymentsCreateManyPayment_methodsInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUncheckedCreateNestedManyWithoutPayment_methodsInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutPayment_methodsInput, Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput> | Prisma.paymentsCreateWithoutPayment_methodsInput[] | Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutPayment_methodsInput | Prisma.paymentsCreateOrConnectWithoutPayment_methodsInput[];
    createMany?: Prisma.paymentsCreateManyPayment_methodsInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUpdateManyWithoutPayment_methodsNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutPayment_methodsInput, Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput> | Prisma.paymentsCreateWithoutPayment_methodsInput[] | Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutPayment_methodsInput | Prisma.paymentsCreateOrConnectWithoutPayment_methodsInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutPayment_methodsInput | Prisma.paymentsUpsertWithWhereUniqueWithoutPayment_methodsInput[];
    createMany?: Prisma.paymentsCreateManyPayment_methodsInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutPayment_methodsInput | Prisma.paymentsUpdateWithWhereUniqueWithoutPayment_methodsInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutPayment_methodsInput | Prisma.paymentsUpdateManyWithWhereWithoutPayment_methodsInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsUncheckedUpdateManyWithoutPayment_methodsNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutPayment_methodsInput, Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput> | Prisma.paymentsCreateWithoutPayment_methodsInput[] | Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutPayment_methodsInput | Prisma.paymentsCreateOrConnectWithoutPayment_methodsInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutPayment_methodsInput | Prisma.paymentsUpsertWithWhereUniqueWithoutPayment_methodsInput[];
    createMany?: Prisma.paymentsCreateManyPayment_methodsInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutPayment_methodsInput | Prisma.paymentsUpdateWithWhereUniqueWithoutPayment_methodsInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutPayment_methodsInput | Prisma.paymentsUpdateManyWithWhereWithoutPayment_methodsInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type Enumpayment_record_status_typeFieldUpdateOperationsInput = {
    set?: $Enums.payment_record_status_type;
};
export type paymentsCreateWithoutOrdersInput = {
    id?: string;
    provider?: string | null;
    provider_transaction_id?: string | null;
    status: $Enums.payment_record_status_type;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment_methods: Prisma.payment_methodsCreateNestedOneWithoutPaymentsInput;
};
export type paymentsUncheckedCreateWithoutOrdersInput = {
    id?: string;
    payment_method_id: string;
    provider?: string | null;
    provider_transaction_id?: string | null;
    status: $Enums.payment_record_status_type;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type paymentsCreateOrConnectWithoutOrdersInput = {
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutOrdersInput, Prisma.paymentsUncheckedCreateWithoutOrdersInput>;
};
export type paymentsCreateManyOrdersInputEnvelope = {
    data: Prisma.paymentsCreateManyOrdersInput | Prisma.paymentsCreateManyOrdersInput[];
    skipDuplicates?: boolean;
};
export type paymentsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.paymentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.paymentsUpdateWithoutOrdersInput, Prisma.paymentsUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutOrdersInput, Prisma.paymentsUncheckedCreateWithoutOrdersInput>;
};
export type paymentsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.paymentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.paymentsUpdateWithoutOrdersInput, Prisma.paymentsUncheckedUpdateWithoutOrdersInput>;
};
export type paymentsUpdateManyWithWhereWithoutOrdersInput = {
    where: Prisma.paymentsScalarWhereInput;
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyWithoutOrdersInput>;
};
export type paymentsScalarWhereInput = {
    AND?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
    OR?: Prisma.paymentsScalarWhereInput[];
    NOT?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
    id?: Prisma.UuidFilter<"payments"> | string;
    order_id?: Prisma.UuidFilter<"payments"> | string;
    payment_method_id?: Prisma.UuidFilter<"payments"> | string;
    provider?: Prisma.StringNullableFilter<"payments"> | string | null;
    provider_transaction_id?: Prisma.StringNullableFilter<"payments"> | string | null;
    status?: Prisma.Enumpayment_record_status_typeFilter<"payments"> | $Enums.payment_record_status_type;
    amount?: Prisma.DecimalFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
};
export type paymentsCreateWithoutPayment_methodsInput = {
    id?: string;
    provider?: string | null;
    provider_transaction_id?: string | null;
    status: $Enums.payment_record_status_type;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    orders: Prisma.ordersCreateNestedOneWithoutPaymentsInput;
};
export type paymentsUncheckedCreateWithoutPayment_methodsInput = {
    id?: string;
    order_id: string;
    provider?: string | null;
    provider_transaction_id?: string | null;
    status: $Enums.payment_record_status_type;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type paymentsCreateOrConnectWithoutPayment_methodsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutPayment_methodsInput, Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput>;
};
export type paymentsCreateManyPayment_methodsInputEnvelope = {
    data: Prisma.paymentsCreateManyPayment_methodsInput | Prisma.paymentsCreateManyPayment_methodsInput[];
    skipDuplicates?: boolean;
};
export type paymentsUpsertWithWhereUniqueWithoutPayment_methodsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.paymentsUpdateWithoutPayment_methodsInput, Prisma.paymentsUncheckedUpdateWithoutPayment_methodsInput>;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutPayment_methodsInput, Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput>;
};
export type paymentsUpdateWithWhereUniqueWithoutPayment_methodsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.paymentsUpdateWithoutPayment_methodsInput, Prisma.paymentsUncheckedUpdateWithoutPayment_methodsInput>;
};
export type paymentsUpdateManyWithWhereWithoutPayment_methodsInput = {
    where: Prisma.paymentsScalarWhereInput;
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyWithoutPayment_methodsInput>;
};
export type paymentsCreateManyOrdersInput = {
    id?: string;
    payment_method_id: string;
    provider?: string | null;
    provider_transaction_id?: string | null;
    status: $Enums.payment_record_status_type;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type paymentsUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_record_status_typeFieldUpdateOperationsInput | $Enums.payment_record_status_type;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment_methods?: Prisma.payment_methodsUpdateOneRequiredWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_record_status_typeFieldUpdateOperationsInput | $Enums.payment_record_status_type;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentsUncheckedUpdateManyWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payment_method_id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_record_status_typeFieldUpdateOperationsInput | $Enums.payment_record_status_type;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentsCreateManyPayment_methodsInput = {
    id?: string;
    order_id: string;
    provider?: string | null;
    provider_transaction_id?: string | null;
    status: $Enums.payment_record_status_type;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type paymentsUpdateWithoutPayment_methodsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_record_status_typeFieldUpdateOperationsInput | $Enums.payment_record_status_type;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.ordersUpdateOneRequiredWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateWithoutPayment_methodsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_record_status_typeFieldUpdateOperationsInput | $Enums.payment_record_status_type;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentsUncheckedUpdateManyWithoutPayment_methodsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_record_status_typeFieldUpdateOperationsInput | $Enums.payment_record_status_type;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_id?: boolean;
    payment_method_id?: boolean;
    provider?: boolean;
    provider_transaction_id?: boolean;
    status?: boolean;
    amount?: boolean;
    paid_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    payment_methods?: boolean | Prisma.payment_methodsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type paymentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_id?: boolean;
    payment_method_id?: boolean;
    provider?: boolean;
    provider_transaction_id?: boolean;
    status?: boolean;
    amount?: boolean;
    paid_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    payment_methods?: boolean | Prisma.payment_methodsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type paymentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_id?: boolean;
    payment_method_id?: boolean;
    provider?: boolean;
    provider_transaction_id?: boolean;
    status?: boolean;
    amount?: boolean;
    paid_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    payment_methods?: boolean | Prisma.payment_methodsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type paymentsSelectScalar = {
    id?: boolean;
    order_id?: boolean;
    payment_method_id?: boolean;
    provider?: boolean;
    provider_transaction_id?: boolean;
    status?: boolean;
    amount?: boolean;
    paid_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type paymentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "order_id" | "payment_method_id" | "provider" | "provider_transaction_id" | "status" | "amount" | "paid_at" | "created_at" | "updated_at", ExtArgs["result"]["payments"]>;
export type paymentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    payment_methods?: boolean | Prisma.payment_methodsDefaultArgs<ExtArgs>;
};
export type paymentsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    payment_methods?: boolean | Prisma.payment_methodsDefaultArgs<ExtArgs>;
};
export type paymentsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    payment_methods?: boolean | Prisma.payment_methodsDefaultArgs<ExtArgs>;
};
export type $paymentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "payments";
    objects: {
        orders: Prisma.$ordersPayload<ExtArgs>;
        payment_methods: Prisma.$payment_methodsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        order_id: string;
        payment_method_id: string;
        provider: string | null;
        provider_transaction_id: string | null;
        status: $Enums.payment_record_status_type;
        amount: runtime.Decimal;
        paid_at: Date | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["payments"]>;
    composites: {};
};
export type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$paymentsPayload, S>;
export type paymentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentsCountAggregateInputType | true;
};
export interface paymentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['payments'];
        meta: {
            name: 'payments';
        };
    };
    findUnique<T extends paymentsFindUniqueArgs>(args: Prisma.SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends paymentsFindFirstArgs>(args?: Prisma.SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends paymentsFindManyArgs>(args?: Prisma.SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends paymentsCreateArgs>(args: Prisma.SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends paymentsCreateManyArgs>(args?: Prisma.SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends paymentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends paymentsDeleteArgs>(args: Prisma.SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends paymentsUpdateArgs>(args: Prisma.SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends paymentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends paymentsUpdateManyArgs>(args: Prisma.SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends paymentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends paymentsUpsertArgs>(args: Prisma.SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends paymentsCountArgs>(args?: Prisma.Subset<T, paymentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentsCountAggregateOutputType> : number>;
    aggregate<T extends PaymentsAggregateArgs>(args: Prisma.Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>;
    groupBy<T extends paymentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: paymentsGroupByArgs['orderBy'];
    } : {
        orderBy?: paymentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: paymentsFieldRefs;
}
export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.ordersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ordersDefaultArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    payment_methods<T extends Prisma.payment_methodsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.payment_methodsDefaultArgs<ExtArgs>>): Prisma.Prisma__payment_methodsClient<runtime.Types.Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface paymentsFieldRefs {
    readonly id: Prisma.FieldRef<"payments", 'String'>;
    readonly order_id: Prisma.FieldRef<"payments", 'String'>;
    readonly payment_method_id: Prisma.FieldRef<"payments", 'String'>;
    readonly provider: Prisma.FieldRef<"payments", 'String'>;
    readonly provider_transaction_id: Prisma.FieldRef<"payments", 'String'>;
    readonly status: Prisma.FieldRef<"payments", 'payment_record_status_type'>;
    readonly amount: Prisma.FieldRef<"payments", 'Decimal'>;
    readonly paid_at: Prisma.FieldRef<"payments", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"payments", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"payments", 'DateTime'>;
}
export type paymentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithRelationInput | Prisma.paymentsOrderByWithRelationInput[];
    cursor?: Prisma.paymentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentsScalarFieldEnum | Prisma.PaymentsScalarFieldEnum[];
};
export type paymentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithRelationInput | Prisma.paymentsOrderByWithRelationInput[];
    cursor?: Prisma.paymentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentsScalarFieldEnum | Prisma.PaymentsScalarFieldEnum[];
};
export type paymentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithRelationInput | Prisma.paymentsOrderByWithRelationInput[];
    cursor?: Prisma.paymentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentsScalarFieldEnum | Prisma.PaymentsScalarFieldEnum[];
};
export type paymentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentsCreateInput, Prisma.paymentsUncheckedCreateInput>;
};
export type paymentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.paymentsCreateManyInput | Prisma.paymentsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type paymentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    data: Prisma.paymentsCreateManyInput | Prisma.paymentsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.paymentsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type paymentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentsUpdateInput, Prisma.paymentsUncheckedUpdateInput>;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyInput>;
    where?: Prisma.paymentsWhereInput;
    limit?: number;
};
export type paymentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyInput>;
    where?: Prisma.paymentsWhereInput;
    limit?: number;
    include?: Prisma.paymentsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type paymentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateInput, Prisma.paymentsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.paymentsUpdateInput, Prisma.paymentsUncheckedUpdateInput>;
};
export type paymentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
    limit?: number;
};
export type paymentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
};
export {};
