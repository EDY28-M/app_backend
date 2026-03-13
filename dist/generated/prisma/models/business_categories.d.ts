import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type business_categoriesModel = runtime.Types.Result.DefaultSelection<Prisma.$business_categoriesPayload>;
export type AggregateBusiness_categories = {
    _count: Business_categoriesCountAggregateOutputType | null;
    _min: Business_categoriesMinAggregateOutputType | null;
    _max: Business_categoriesMaxAggregateOutputType | null;
};
export type Business_categoriesMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Business_categoriesMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Business_categoriesCountAggregateOutputType = {
    id: number;
    code: number;
    name: number;
    is_active: number;
    created_at: number;
    _all: number;
};
export type Business_categoriesMinAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    is_active?: true;
    created_at?: true;
};
export type Business_categoriesMaxAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    is_active?: true;
    created_at?: true;
};
export type Business_categoriesCountAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    is_active?: true;
    created_at?: true;
    _all?: true;
};
export type Business_categoriesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.business_categoriesWhereInput;
    orderBy?: Prisma.business_categoriesOrderByWithRelationInput | Prisma.business_categoriesOrderByWithRelationInput[];
    cursor?: Prisma.business_categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Business_categoriesCountAggregateInputType;
    _min?: Business_categoriesMinAggregateInputType;
    _max?: Business_categoriesMaxAggregateInputType;
};
export type GetBusiness_categoriesAggregateType<T extends Business_categoriesAggregateArgs> = {
    [P in keyof T & keyof AggregateBusiness_categories]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBusiness_categories[P]> : Prisma.GetScalarType<T[P], AggregateBusiness_categories[P]>;
};
export type business_categoriesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.business_categoriesWhereInput;
    orderBy?: Prisma.business_categoriesOrderByWithAggregationInput | Prisma.business_categoriesOrderByWithAggregationInput[];
    by: Prisma.Business_categoriesScalarFieldEnum[] | Prisma.Business_categoriesScalarFieldEnum;
    having?: Prisma.business_categoriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Business_categoriesCountAggregateInputType | true;
    _min?: Business_categoriesMinAggregateInputType;
    _max?: Business_categoriesMaxAggregateInputType;
};
export type Business_categoriesGroupByOutputType = {
    id: string;
    code: string;
    name: string;
    is_active: boolean;
    created_at: Date;
    _count: Business_categoriesCountAggregateOutputType | null;
    _min: Business_categoriesMinAggregateOutputType | null;
    _max: Business_categoriesMaxAggregateOutputType | null;
};
type GetBusiness_categoriesGroupByPayload<T extends business_categoriesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Business_categoriesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Business_categoriesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Business_categoriesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Business_categoriesGroupByOutputType[P]>;
}>>;
export type business_categoriesWhereInput = {
    AND?: Prisma.business_categoriesWhereInput | Prisma.business_categoriesWhereInput[];
    OR?: Prisma.business_categoriesWhereInput[];
    NOT?: Prisma.business_categoriesWhereInput | Prisma.business_categoriesWhereInput[];
    id?: Prisma.UuidFilter<"business_categories"> | string;
    code?: Prisma.StringFilter<"business_categories"> | string;
    name?: Prisma.StringFilter<"business_categories"> | string;
    is_active?: Prisma.BoolFilter<"business_categories"> | boolean;
    created_at?: Prisma.DateTimeFilter<"business_categories"> | Date | string;
    stores?: Prisma.StoresListRelationFilter;
};
export type business_categoriesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    stores?: Prisma.storesOrderByRelationAggregateInput;
};
export type business_categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.business_categoriesWhereInput | Prisma.business_categoriesWhereInput[];
    OR?: Prisma.business_categoriesWhereInput[];
    NOT?: Prisma.business_categoriesWhereInput | Prisma.business_categoriesWhereInput[];
    name?: Prisma.StringFilter<"business_categories"> | string;
    is_active?: Prisma.BoolFilter<"business_categories"> | boolean;
    created_at?: Prisma.DateTimeFilter<"business_categories"> | Date | string;
    stores?: Prisma.StoresListRelationFilter;
}, "id" | "code">;
export type business_categoriesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.business_categoriesCountOrderByAggregateInput;
    _max?: Prisma.business_categoriesMaxOrderByAggregateInput;
    _min?: Prisma.business_categoriesMinOrderByAggregateInput;
};
export type business_categoriesScalarWhereWithAggregatesInput = {
    AND?: Prisma.business_categoriesScalarWhereWithAggregatesInput | Prisma.business_categoriesScalarWhereWithAggregatesInput[];
    OR?: Prisma.business_categoriesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.business_categoriesScalarWhereWithAggregatesInput | Prisma.business_categoriesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"business_categories"> | string;
    code?: Prisma.StringWithAggregatesFilter<"business_categories"> | string;
    name?: Prisma.StringWithAggregatesFilter<"business_categories"> | string;
    is_active?: Prisma.BoolWithAggregatesFilter<"business_categories"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"business_categories"> | Date | string;
};
export type business_categoriesCreateInput = {
    id?: string;
    code: string;
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
    stores?: Prisma.storesCreateNestedManyWithoutBusiness_categoriesInput;
};
export type business_categoriesUncheckedCreateInput = {
    id?: string;
    code: string;
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
    stores?: Prisma.storesUncheckedCreateNestedManyWithoutBusiness_categoriesInput;
};
export type business_categoriesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stores?: Prisma.storesUpdateManyWithoutBusiness_categoriesNestedInput;
};
export type business_categoriesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stores?: Prisma.storesUncheckedUpdateManyWithoutBusiness_categoriesNestedInput;
};
export type business_categoriesCreateManyInput = {
    id?: string;
    code: string;
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
};
export type business_categoriesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type business_categoriesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type business_categoriesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type business_categoriesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type business_categoriesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type Business_categoriesScalarRelationFilter = {
    is?: Prisma.business_categoriesWhereInput;
    isNot?: Prisma.business_categoriesWhereInput;
};
export type business_categoriesCreateNestedOneWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.business_categoriesCreateWithoutStoresInput, Prisma.business_categoriesUncheckedCreateWithoutStoresInput>;
    connectOrCreate?: Prisma.business_categoriesCreateOrConnectWithoutStoresInput;
    connect?: Prisma.business_categoriesWhereUniqueInput;
};
export type business_categoriesUpdateOneRequiredWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.business_categoriesCreateWithoutStoresInput, Prisma.business_categoriesUncheckedCreateWithoutStoresInput>;
    connectOrCreate?: Prisma.business_categoriesCreateOrConnectWithoutStoresInput;
    upsert?: Prisma.business_categoriesUpsertWithoutStoresInput;
    connect?: Prisma.business_categoriesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.business_categoriesUpdateToOneWithWhereWithoutStoresInput, Prisma.business_categoriesUpdateWithoutStoresInput>, Prisma.business_categoriesUncheckedUpdateWithoutStoresInput>;
};
export type business_categoriesCreateWithoutStoresInput = {
    id?: string;
    code: string;
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
};
export type business_categoriesUncheckedCreateWithoutStoresInput = {
    id?: string;
    code: string;
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
};
export type business_categoriesCreateOrConnectWithoutStoresInput = {
    where: Prisma.business_categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.business_categoriesCreateWithoutStoresInput, Prisma.business_categoriesUncheckedCreateWithoutStoresInput>;
};
export type business_categoriesUpsertWithoutStoresInput = {
    update: Prisma.XOR<Prisma.business_categoriesUpdateWithoutStoresInput, Prisma.business_categoriesUncheckedUpdateWithoutStoresInput>;
    create: Prisma.XOR<Prisma.business_categoriesCreateWithoutStoresInput, Prisma.business_categoriesUncheckedCreateWithoutStoresInput>;
    where?: Prisma.business_categoriesWhereInput;
};
export type business_categoriesUpdateToOneWithWhereWithoutStoresInput = {
    where?: Prisma.business_categoriesWhereInput;
    data: Prisma.XOR<Prisma.business_categoriesUpdateWithoutStoresInput, Prisma.business_categoriesUncheckedUpdateWithoutStoresInput>;
};
export type business_categoriesUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type business_categoriesUncheckedUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Business_categoriesCountOutputType = {
    stores: number;
};
export type Business_categoriesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    stores?: boolean | Business_categoriesCountOutputTypeCountStoresArgs;
};
export type Business_categoriesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Business_categoriesCountOutputTypeSelect<ExtArgs> | null;
};
export type Business_categoriesCountOutputTypeCountStoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.storesWhereInput;
};
export type business_categoriesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    stores?: boolean | Prisma.business_categories$storesArgs<ExtArgs>;
    _count?: boolean | Prisma.Business_categoriesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["business_categories"]>;
export type business_categoriesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["business_categories"]>;
export type business_categoriesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["business_categories"]>;
export type business_categoriesSelectScalar = {
    id?: boolean;
    code?: boolean;
    name?: boolean;
    is_active?: boolean;
    created_at?: boolean;
};
export type business_categoriesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "name" | "is_active" | "created_at", ExtArgs["result"]["business_categories"]>;
export type business_categoriesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    stores?: boolean | Prisma.business_categories$storesArgs<ExtArgs>;
    _count?: boolean | Prisma.Business_categoriesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type business_categoriesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type business_categoriesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $business_categoriesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "business_categories";
    objects: {
        stores: Prisma.$storesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        name: string;
        is_active: boolean;
        created_at: Date;
    }, ExtArgs["result"]["business_categories"]>;
    composites: {};
};
export type business_categoriesGetPayload<S extends boolean | null | undefined | business_categoriesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$business_categoriesPayload, S>;
export type business_categoriesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<business_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Business_categoriesCountAggregateInputType | true;
};
export interface business_categoriesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['business_categories'];
        meta: {
            name: 'business_categories';
        };
    };
    findUnique<T extends business_categoriesFindUniqueArgs>(args: Prisma.SelectSubset<T, business_categoriesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__business_categoriesClient<runtime.Types.Result.GetResult<Prisma.$business_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends business_categoriesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, business_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__business_categoriesClient<runtime.Types.Result.GetResult<Prisma.$business_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends business_categoriesFindFirstArgs>(args?: Prisma.SelectSubset<T, business_categoriesFindFirstArgs<ExtArgs>>): Prisma.Prisma__business_categoriesClient<runtime.Types.Result.GetResult<Prisma.$business_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends business_categoriesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, business_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__business_categoriesClient<runtime.Types.Result.GetResult<Prisma.$business_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends business_categoriesFindManyArgs>(args?: Prisma.SelectSubset<T, business_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$business_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends business_categoriesCreateArgs>(args: Prisma.SelectSubset<T, business_categoriesCreateArgs<ExtArgs>>): Prisma.Prisma__business_categoriesClient<runtime.Types.Result.GetResult<Prisma.$business_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends business_categoriesCreateManyArgs>(args?: Prisma.SelectSubset<T, business_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends business_categoriesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, business_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$business_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends business_categoriesDeleteArgs>(args: Prisma.SelectSubset<T, business_categoriesDeleteArgs<ExtArgs>>): Prisma.Prisma__business_categoriesClient<runtime.Types.Result.GetResult<Prisma.$business_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends business_categoriesUpdateArgs>(args: Prisma.SelectSubset<T, business_categoriesUpdateArgs<ExtArgs>>): Prisma.Prisma__business_categoriesClient<runtime.Types.Result.GetResult<Prisma.$business_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends business_categoriesDeleteManyArgs>(args?: Prisma.SelectSubset<T, business_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends business_categoriesUpdateManyArgs>(args: Prisma.SelectSubset<T, business_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends business_categoriesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, business_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$business_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends business_categoriesUpsertArgs>(args: Prisma.SelectSubset<T, business_categoriesUpsertArgs<ExtArgs>>): Prisma.Prisma__business_categoriesClient<runtime.Types.Result.GetResult<Prisma.$business_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends business_categoriesCountArgs>(args?: Prisma.Subset<T, business_categoriesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Business_categoriesCountAggregateOutputType> : number>;
    aggregate<T extends Business_categoriesAggregateArgs>(args: Prisma.Subset<T, Business_categoriesAggregateArgs>): Prisma.PrismaPromise<GetBusiness_categoriesAggregateType<T>>;
    groupBy<T extends business_categoriesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: business_categoriesGroupByArgs['orderBy'];
    } : {
        orderBy?: business_categoriesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, business_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusiness_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: business_categoriesFieldRefs;
}
export interface Prisma__business_categoriesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    stores<T extends Prisma.business_categories$storesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.business_categories$storesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface business_categoriesFieldRefs {
    readonly id: Prisma.FieldRef<"business_categories", 'String'>;
    readonly code: Prisma.FieldRef<"business_categories", 'String'>;
    readonly name: Prisma.FieldRef<"business_categories", 'String'>;
    readonly is_active: Prisma.FieldRef<"business_categories", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"business_categories", 'DateTime'>;
}
export type business_categoriesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.business_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.business_categoriesOmit<ExtArgs> | null;
    include?: Prisma.business_categoriesInclude<ExtArgs> | null;
    where: Prisma.business_categoriesWhereUniqueInput;
};
export type business_categoriesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.business_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.business_categoriesOmit<ExtArgs> | null;
    include?: Prisma.business_categoriesInclude<ExtArgs> | null;
    where: Prisma.business_categoriesWhereUniqueInput;
};
export type business_categoriesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.business_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.business_categoriesOmit<ExtArgs> | null;
    include?: Prisma.business_categoriesInclude<ExtArgs> | null;
    where?: Prisma.business_categoriesWhereInput;
    orderBy?: Prisma.business_categoriesOrderByWithRelationInput | Prisma.business_categoriesOrderByWithRelationInput[];
    cursor?: Prisma.business_categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Business_categoriesScalarFieldEnum | Prisma.Business_categoriesScalarFieldEnum[];
};
export type business_categoriesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.business_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.business_categoriesOmit<ExtArgs> | null;
    include?: Prisma.business_categoriesInclude<ExtArgs> | null;
    where?: Prisma.business_categoriesWhereInput;
    orderBy?: Prisma.business_categoriesOrderByWithRelationInput | Prisma.business_categoriesOrderByWithRelationInput[];
    cursor?: Prisma.business_categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Business_categoriesScalarFieldEnum | Prisma.Business_categoriesScalarFieldEnum[];
};
export type business_categoriesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.business_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.business_categoriesOmit<ExtArgs> | null;
    include?: Prisma.business_categoriesInclude<ExtArgs> | null;
    where?: Prisma.business_categoriesWhereInput;
    orderBy?: Prisma.business_categoriesOrderByWithRelationInput | Prisma.business_categoriesOrderByWithRelationInput[];
    cursor?: Prisma.business_categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Business_categoriesScalarFieldEnum | Prisma.Business_categoriesScalarFieldEnum[];
};
export type business_categoriesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.business_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.business_categoriesOmit<ExtArgs> | null;
    include?: Prisma.business_categoriesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.business_categoriesCreateInput, Prisma.business_categoriesUncheckedCreateInput>;
};
export type business_categoriesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.business_categoriesCreateManyInput | Prisma.business_categoriesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type business_categoriesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.business_categoriesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.business_categoriesOmit<ExtArgs> | null;
    data: Prisma.business_categoriesCreateManyInput | Prisma.business_categoriesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type business_categoriesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.business_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.business_categoriesOmit<ExtArgs> | null;
    include?: Prisma.business_categoriesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.business_categoriesUpdateInput, Prisma.business_categoriesUncheckedUpdateInput>;
    where: Prisma.business_categoriesWhereUniqueInput;
};
export type business_categoriesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.business_categoriesUpdateManyMutationInput, Prisma.business_categoriesUncheckedUpdateManyInput>;
    where?: Prisma.business_categoriesWhereInput;
    limit?: number;
};
export type business_categoriesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.business_categoriesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.business_categoriesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.business_categoriesUpdateManyMutationInput, Prisma.business_categoriesUncheckedUpdateManyInput>;
    where?: Prisma.business_categoriesWhereInput;
    limit?: number;
};
export type business_categoriesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.business_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.business_categoriesOmit<ExtArgs> | null;
    include?: Prisma.business_categoriesInclude<ExtArgs> | null;
    where: Prisma.business_categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.business_categoriesCreateInput, Prisma.business_categoriesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.business_categoriesUpdateInput, Prisma.business_categoriesUncheckedUpdateInput>;
};
export type business_categoriesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.business_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.business_categoriesOmit<ExtArgs> | null;
    include?: Prisma.business_categoriesInclude<ExtArgs> | null;
    where: Prisma.business_categoriesWhereUniqueInput;
};
export type business_categoriesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.business_categoriesWhereInput;
    limit?: number;
};
export type business_categories$storesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storesSelect<ExtArgs> | null;
    omit?: Prisma.storesOmit<ExtArgs> | null;
    include?: Prisma.storesInclude<ExtArgs> | null;
    where?: Prisma.storesWhereInput;
    orderBy?: Prisma.storesOrderByWithRelationInput | Prisma.storesOrderByWithRelationInput[];
    cursor?: Prisma.storesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StoresScalarFieldEnum | Prisma.StoresScalarFieldEnum[];
};
export type business_categoriesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.business_categoriesSelect<ExtArgs> | null;
    omit?: Prisma.business_categoriesOmit<ExtArgs> | null;
    include?: Prisma.business_categoriesInclude<ExtArgs> | null;
};
export {};
