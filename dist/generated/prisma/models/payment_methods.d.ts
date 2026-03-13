import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type payment_methodsModel = runtime.Types.Result.DefaultSelection<Prisma.$payment_methodsPayload>;
export type AggregatePayment_methods = {
    _count: Payment_methodsCountAggregateOutputType | null;
    _min: Payment_methodsMinAggregateOutputType | null;
    _max: Payment_methodsMaxAggregateOutputType | null;
};
export type Payment_methodsMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Payment_methodsMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Payment_methodsCountAggregateOutputType = {
    id: number;
    code: number;
    name: number;
    is_active: number;
    created_at: number;
    _all: number;
};
export type Payment_methodsMinAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    is_active?: true;
    created_at?: true;
};
export type Payment_methodsMaxAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    is_active?: true;
    created_at?: true;
};
export type Payment_methodsCountAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    is_active?: true;
    created_at?: true;
    _all?: true;
};
export type Payment_methodsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.payment_methodsWhereInput;
    orderBy?: Prisma.payment_methodsOrderByWithRelationInput | Prisma.payment_methodsOrderByWithRelationInput[];
    cursor?: Prisma.payment_methodsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Payment_methodsCountAggregateInputType;
    _min?: Payment_methodsMinAggregateInputType;
    _max?: Payment_methodsMaxAggregateInputType;
};
export type GetPayment_methodsAggregateType<T extends Payment_methodsAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment_methods]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayment_methods[P]> : Prisma.GetScalarType<T[P], AggregatePayment_methods[P]>;
};
export type payment_methodsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.payment_methodsWhereInput;
    orderBy?: Prisma.payment_methodsOrderByWithAggregationInput | Prisma.payment_methodsOrderByWithAggregationInput[];
    by: Prisma.Payment_methodsScalarFieldEnum[] | Prisma.Payment_methodsScalarFieldEnum;
    having?: Prisma.payment_methodsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Payment_methodsCountAggregateInputType | true;
    _min?: Payment_methodsMinAggregateInputType;
    _max?: Payment_methodsMaxAggregateInputType;
};
export type Payment_methodsGroupByOutputType = {
    id: string;
    code: string;
    name: string;
    is_active: boolean;
    created_at: Date;
    _count: Payment_methodsCountAggregateOutputType | null;
    _min: Payment_methodsMinAggregateOutputType | null;
    _max: Payment_methodsMaxAggregateOutputType | null;
};
type GetPayment_methodsGroupByPayload<T extends payment_methodsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Payment_methodsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Payment_methodsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Payment_methodsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Payment_methodsGroupByOutputType[P]>;
}>>;
export type payment_methodsWhereInput = {
    AND?: Prisma.payment_methodsWhereInput | Prisma.payment_methodsWhereInput[];
    OR?: Prisma.payment_methodsWhereInput[];
    NOT?: Prisma.payment_methodsWhereInput | Prisma.payment_methodsWhereInput[];
    id?: Prisma.UuidFilter<"payment_methods"> | string;
    code?: Prisma.StringFilter<"payment_methods"> | string;
    name?: Prisma.StringFilter<"payment_methods"> | string;
    is_active?: Prisma.BoolFilter<"payment_methods"> | boolean;
    created_at?: Prisma.DateTimeFilter<"payment_methods"> | Date | string;
    payments?: Prisma.PaymentsListRelationFilter;
};
export type payment_methodsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    payments?: Prisma.paymentsOrderByRelationAggregateInput;
};
export type payment_methodsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.payment_methodsWhereInput | Prisma.payment_methodsWhereInput[];
    OR?: Prisma.payment_methodsWhereInput[];
    NOT?: Prisma.payment_methodsWhereInput | Prisma.payment_methodsWhereInput[];
    name?: Prisma.StringFilter<"payment_methods"> | string;
    is_active?: Prisma.BoolFilter<"payment_methods"> | boolean;
    created_at?: Prisma.DateTimeFilter<"payment_methods"> | Date | string;
    payments?: Prisma.PaymentsListRelationFilter;
}, "id" | "code">;
export type payment_methodsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.payment_methodsCountOrderByAggregateInput;
    _max?: Prisma.payment_methodsMaxOrderByAggregateInput;
    _min?: Prisma.payment_methodsMinOrderByAggregateInput;
};
export type payment_methodsScalarWhereWithAggregatesInput = {
    AND?: Prisma.payment_methodsScalarWhereWithAggregatesInput | Prisma.payment_methodsScalarWhereWithAggregatesInput[];
    OR?: Prisma.payment_methodsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.payment_methodsScalarWhereWithAggregatesInput | Prisma.payment_methodsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"payment_methods"> | string;
    code?: Prisma.StringWithAggregatesFilter<"payment_methods"> | string;
    name?: Prisma.StringWithAggregatesFilter<"payment_methods"> | string;
    is_active?: Prisma.BoolWithAggregatesFilter<"payment_methods"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"payment_methods"> | Date | string;
};
export type payment_methodsCreateInput = {
    id?: string;
    code: string;
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
    payments?: Prisma.paymentsCreateNestedManyWithoutPayment_methodsInput;
};
export type payment_methodsUncheckedCreateInput = {
    id?: string;
    code: string;
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutPayment_methodsInput;
};
export type payment_methodsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.paymentsUpdateManyWithoutPayment_methodsNestedInput;
};
export type payment_methodsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutPayment_methodsNestedInput;
};
export type payment_methodsCreateManyInput = {
    id?: string;
    code: string;
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
};
export type payment_methodsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type payment_methodsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type payment_methodsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type payment_methodsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type payment_methodsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type Payment_methodsScalarRelationFilter = {
    is?: Prisma.payment_methodsWhereInput;
    isNot?: Prisma.payment_methodsWhereInput;
};
export type payment_methodsCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.payment_methodsCreateWithoutPaymentsInput, Prisma.payment_methodsUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.payment_methodsCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.payment_methodsWhereUniqueInput;
};
export type payment_methodsUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.payment_methodsCreateWithoutPaymentsInput, Prisma.payment_methodsUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.payment_methodsCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.payment_methodsUpsertWithoutPaymentsInput;
    connect?: Prisma.payment_methodsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.payment_methodsUpdateToOneWithWhereWithoutPaymentsInput, Prisma.payment_methodsUpdateWithoutPaymentsInput>, Prisma.payment_methodsUncheckedUpdateWithoutPaymentsInput>;
};
export type payment_methodsCreateWithoutPaymentsInput = {
    id?: string;
    code: string;
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
};
export type payment_methodsUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    code: string;
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
};
export type payment_methodsCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.payment_methodsWhereUniqueInput;
    create: Prisma.XOR<Prisma.payment_methodsCreateWithoutPaymentsInput, Prisma.payment_methodsUncheckedCreateWithoutPaymentsInput>;
};
export type payment_methodsUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.payment_methodsUpdateWithoutPaymentsInput, Prisma.payment_methodsUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.payment_methodsCreateWithoutPaymentsInput, Prisma.payment_methodsUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.payment_methodsWhereInput;
};
export type payment_methodsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.payment_methodsWhereInput;
    data: Prisma.XOR<Prisma.payment_methodsUpdateWithoutPaymentsInput, Prisma.payment_methodsUncheckedUpdateWithoutPaymentsInput>;
};
export type payment_methodsUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type payment_methodsUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Payment_methodsCountOutputType = {
    payments: number;
};
export type Payment_methodsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payments?: boolean | Payment_methodsCountOutputTypeCountPaymentsArgs;
};
export type Payment_methodsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Payment_methodsCountOutputTypeSelect<ExtArgs> | null;
};
export type Payment_methodsCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
};
export type payment_methodsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    payments?: boolean | Prisma.payment_methods$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.Payment_methodsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payment_methods"]>;
export type payment_methodsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["payment_methods"]>;
export type payment_methodsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["payment_methods"]>;
export type payment_methodsSelectScalar = {
    id?: boolean;
    code?: boolean;
    name?: boolean;
    is_active?: boolean;
    created_at?: boolean;
};
export type payment_methodsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "name" | "is_active" | "created_at", ExtArgs["result"]["payment_methods"]>;
export type payment_methodsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payments?: boolean | Prisma.payment_methods$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.Payment_methodsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type payment_methodsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type payment_methodsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $payment_methodsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "payment_methods";
    objects: {
        payments: Prisma.$paymentsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        name: string;
        is_active: boolean;
        created_at: Date;
    }, ExtArgs["result"]["payment_methods"]>;
    composites: {};
};
export type payment_methodsGetPayload<S extends boolean | null | undefined | payment_methodsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$payment_methodsPayload, S>;
export type payment_methodsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<payment_methodsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Payment_methodsCountAggregateInputType | true;
};
export interface payment_methodsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['payment_methods'];
        meta: {
            name: 'payment_methods';
        };
    };
    findUnique<T extends payment_methodsFindUniqueArgs>(args: Prisma.SelectSubset<T, payment_methodsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__payment_methodsClient<runtime.Types.Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends payment_methodsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, payment_methodsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__payment_methodsClient<runtime.Types.Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends payment_methodsFindFirstArgs>(args?: Prisma.SelectSubset<T, payment_methodsFindFirstArgs<ExtArgs>>): Prisma.Prisma__payment_methodsClient<runtime.Types.Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends payment_methodsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, payment_methodsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__payment_methodsClient<runtime.Types.Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends payment_methodsFindManyArgs>(args?: Prisma.SelectSubset<T, payment_methodsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends payment_methodsCreateArgs>(args: Prisma.SelectSubset<T, payment_methodsCreateArgs<ExtArgs>>): Prisma.Prisma__payment_methodsClient<runtime.Types.Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends payment_methodsCreateManyArgs>(args?: Prisma.SelectSubset<T, payment_methodsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends payment_methodsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, payment_methodsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends payment_methodsDeleteArgs>(args: Prisma.SelectSubset<T, payment_methodsDeleteArgs<ExtArgs>>): Prisma.Prisma__payment_methodsClient<runtime.Types.Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends payment_methodsUpdateArgs>(args: Prisma.SelectSubset<T, payment_methodsUpdateArgs<ExtArgs>>): Prisma.Prisma__payment_methodsClient<runtime.Types.Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends payment_methodsDeleteManyArgs>(args?: Prisma.SelectSubset<T, payment_methodsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends payment_methodsUpdateManyArgs>(args: Prisma.SelectSubset<T, payment_methodsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends payment_methodsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, payment_methodsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends payment_methodsUpsertArgs>(args: Prisma.SelectSubset<T, payment_methodsUpsertArgs<ExtArgs>>): Prisma.Prisma__payment_methodsClient<runtime.Types.Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends payment_methodsCountArgs>(args?: Prisma.Subset<T, payment_methodsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Payment_methodsCountAggregateOutputType> : number>;
    aggregate<T extends Payment_methodsAggregateArgs>(args: Prisma.Subset<T, Payment_methodsAggregateArgs>): Prisma.PrismaPromise<GetPayment_methodsAggregateType<T>>;
    groupBy<T extends payment_methodsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: payment_methodsGroupByArgs['orderBy'];
    } : {
        orderBy?: payment_methodsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, payment_methodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayment_methodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: payment_methodsFieldRefs;
}
export interface Prisma__payment_methodsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    payments<T extends Prisma.payment_methods$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.payment_methods$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface payment_methodsFieldRefs {
    readonly id: Prisma.FieldRef<"payment_methods", 'String'>;
    readonly code: Prisma.FieldRef<"payment_methods", 'String'>;
    readonly name: Prisma.FieldRef<"payment_methods", 'String'>;
    readonly is_active: Prisma.FieldRef<"payment_methods", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"payment_methods", 'DateTime'>;
}
export type payment_methodsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_methodsSelect<ExtArgs> | null;
    omit?: Prisma.payment_methodsOmit<ExtArgs> | null;
    include?: Prisma.payment_methodsInclude<ExtArgs> | null;
    where: Prisma.payment_methodsWhereUniqueInput;
};
export type payment_methodsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_methodsSelect<ExtArgs> | null;
    omit?: Prisma.payment_methodsOmit<ExtArgs> | null;
    include?: Prisma.payment_methodsInclude<ExtArgs> | null;
    where: Prisma.payment_methodsWhereUniqueInput;
};
export type payment_methodsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_methodsSelect<ExtArgs> | null;
    omit?: Prisma.payment_methodsOmit<ExtArgs> | null;
    include?: Prisma.payment_methodsInclude<ExtArgs> | null;
    where?: Prisma.payment_methodsWhereInput;
    orderBy?: Prisma.payment_methodsOrderByWithRelationInput | Prisma.payment_methodsOrderByWithRelationInput[];
    cursor?: Prisma.payment_methodsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Payment_methodsScalarFieldEnum | Prisma.Payment_methodsScalarFieldEnum[];
};
export type payment_methodsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_methodsSelect<ExtArgs> | null;
    omit?: Prisma.payment_methodsOmit<ExtArgs> | null;
    include?: Prisma.payment_methodsInclude<ExtArgs> | null;
    where?: Prisma.payment_methodsWhereInput;
    orderBy?: Prisma.payment_methodsOrderByWithRelationInput | Prisma.payment_methodsOrderByWithRelationInput[];
    cursor?: Prisma.payment_methodsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Payment_methodsScalarFieldEnum | Prisma.Payment_methodsScalarFieldEnum[];
};
export type payment_methodsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_methodsSelect<ExtArgs> | null;
    omit?: Prisma.payment_methodsOmit<ExtArgs> | null;
    include?: Prisma.payment_methodsInclude<ExtArgs> | null;
    where?: Prisma.payment_methodsWhereInput;
    orderBy?: Prisma.payment_methodsOrderByWithRelationInput | Prisma.payment_methodsOrderByWithRelationInput[];
    cursor?: Prisma.payment_methodsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Payment_methodsScalarFieldEnum | Prisma.Payment_methodsScalarFieldEnum[];
};
export type payment_methodsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_methodsSelect<ExtArgs> | null;
    omit?: Prisma.payment_methodsOmit<ExtArgs> | null;
    include?: Prisma.payment_methodsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.payment_methodsCreateInput, Prisma.payment_methodsUncheckedCreateInput>;
};
export type payment_methodsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.payment_methodsCreateManyInput | Prisma.payment_methodsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type payment_methodsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_methodsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.payment_methodsOmit<ExtArgs> | null;
    data: Prisma.payment_methodsCreateManyInput | Prisma.payment_methodsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type payment_methodsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_methodsSelect<ExtArgs> | null;
    omit?: Prisma.payment_methodsOmit<ExtArgs> | null;
    include?: Prisma.payment_methodsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.payment_methodsUpdateInput, Prisma.payment_methodsUncheckedUpdateInput>;
    where: Prisma.payment_methodsWhereUniqueInput;
};
export type payment_methodsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.payment_methodsUpdateManyMutationInput, Prisma.payment_methodsUncheckedUpdateManyInput>;
    where?: Prisma.payment_methodsWhereInput;
    limit?: number;
};
export type payment_methodsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_methodsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.payment_methodsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.payment_methodsUpdateManyMutationInput, Prisma.payment_methodsUncheckedUpdateManyInput>;
    where?: Prisma.payment_methodsWhereInput;
    limit?: number;
};
export type payment_methodsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_methodsSelect<ExtArgs> | null;
    omit?: Prisma.payment_methodsOmit<ExtArgs> | null;
    include?: Prisma.payment_methodsInclude<ExtArgs> | null;
    where: Prisma.payment_methodsWhereUniqueInput;
    create: Prisma.XOR<Prisma.payment_methodsCreateInput, Prisma.payment_methodsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.payment_methodsUpdateInput, Prisma.payment_methodsUncheckedUpdateInput>;
};
export type payment_methodsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_methodsSelect<ExtArgs> | null;
    omit?: Prisma.payment_methodsOmit<ExtArgs> | null;
    include?: Prisma.payment_methodsInclude<ExtArgs> | null;
    where: Prisma.payment_methodsWhereUniqueInput;
};
export type payment_methodsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.payment_methodsWhereInput;
    limit?: number;
};
export type payment_methods$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type payment_methodsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payment_methodsSelect<ExtArgs> | null;
    omit?: Prisma.payment_methodsOmit<ExtArgs> | null;
    include?: Prisma.payment_methodsInclude<ExtArgs> | null;
};
export {};
