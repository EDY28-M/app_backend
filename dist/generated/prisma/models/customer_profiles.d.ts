import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type customer_profilesModel = runtime.Types.Result.DefaultSelection<Prisma.$customer_profilesPayload>;
export type AggregateCustomer_profiles = {
    _count: Customer_profilesCountAggregateOutputType | null;
    _min: Customer_profilesMinAggregateOutputType | null;
    _max: Customer_profilesMaxAggregateOutputType | null;
};
export type Customer_profilesMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    default_address_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Customer_profilesMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    default_address_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Customer_profilesCountAggregateOutputType = {
    id: number;
    user_id: number;
    default_address_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Customer_profilesMinAggregateInputType = {
    id?: true;
    user_id?: true;
    default_address_id?: true;
    created_at?: true;
    updated_at?: true;
};
export type Customer_profilesMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    default_address_id?: true;
    created_at?: true;
    updated_at?: true;
};
export type Customer_profilesCountAggregateInputType = {
    id?: true;
    user_id?: true;
    default_address_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Customer_profilesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customer_profilesWhereInput;
    orderBy?: Prisma.customer_profilesOrderByWithRelationInput | Prisma.customer_profilesOrderByWithRelationInput[];
    cursor?: Prisma.customer_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Customer_profilesCountAggregateInputType;
    _min?: Customer_profilesMinAggregateInputType;
    _max?: Customer_profilesMaxAggregateInputType;
};
export type GetCustomer_profilesAggregateType<T extends Customer_profilesAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer_profiles]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomer_profiles[P]> : Prisma.GetScalarType<T[P], AggregateCustomer_profiles[P]>;
};
export type customer_profilesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customer_profilesWhereInput;
    orderBy?: Prisma.customer_profilesOrderByWithAggregationInput | Prisma.customer_profilesOrderByWithAggregationInput[];
    by: Prisma.Customer_profilesScalarFieldEnum[] | Prisma.Customer_profilesScalarFieldEnum;
    having?: Prisma.customer_profilesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Customer_profilesCountAggregateInputType | true;
    _min?: Customer_profilesMinAggregateInputType;
    _max?: Customer_profilesMaxAggregateInputType;
};
export type Customer_profilesGroupByOutputType = {
    id: string;
    user_id: string;
    default_address_id: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Customer_profilesCountAggregateOutputType | null;
    _min: Customer_profilesMinAggregateOutputType | null;
    _max: Customer_profilesMaxAggregateOutputType | null;
};
type GetCustomer_profilesGroupByPayload<T extends customer_profilesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Customer_profilesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Customer_profilesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Customer_profilesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Customer_profilesGroupByOutputType[P]>;
}>>;
export type customer_profilesWhereInput = {
    AND?: Prisma.customer_profilesWhereInput | Prisma.customer_profilesWhereInput[];
    OR?: Prisma.customer_profilesWhereInput[];
    NOT?: Prisma.customer_profilesWhereInput | Prisma.customer_profilesWhereInput[];
    id?: Prisma.UuidFilter<"customer_profiles"> | string;
    user_id?: Prisma.UuidFilter<"customer_profiles"> | string;
    default_address_id?: Prisma.UuidNullableFilter<"customer_profiles"> | string | null;
    created_at?: Prisma.DateTimeFilter<"customer_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"customer_profiles"> | Date | string;
    addresses?: Prisma.XOR<Prisma.AddressesNullableScalarRelationFilter, Prisma.addressesWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type customer_profilesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    default_address_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    addresses?: Prisma.addressesOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type customer_profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id?: string;
    AND?: Prisma.customer_profilesWhereInput | Prisma.customer_profilesWhereInput[];
    OR?: Prisma.customer_profilesWhereInput[];
    NOT?: Prisma.customer_profilesWhereInput | Prisma.customer_profilesWhereInput[];
    default_address_id?: Prisma.UuidNullableFilter<"customer_profiles"> | string | null;
    created_at?: Prisma.DateTimeFilter<"customer_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"customer_profiles"> | Date | string;
    addresses?: Prisma.XOR<Prisma.AddressesNullableScalarRelationFilter, Prisma.addressesWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "user_id">;
export type customer_profilesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    default_address_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.customer_profilesCountOrderByAggregateInput;
    _max?: Prisma.customer_profilesMaxOrderByAggregateInput;
    _min?: Prisma.customer_profilesMinOrderByAggregateInput;
};
export type customer_profilesScalarWhereWithAggregatesInput = {
    AND?: Prisma.customer_profilesScalarWhereWithAggregatesInput | Prisma.customer_profilesScalarWhereWithAggregatesInput[];
    OR?: Prisma.customer_profilesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.customer_profilesScalarWhereWithAggregatesInput | Prisma.customer_profilesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"customer_profiles"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"customer_profiles"> | string;
    default_address_id?: Prisma.UuidNullableWithAggregatesFilter<"customer_profiles"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"customer_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"customer_profiles"> | Date | string;
};
export type customer_profilesCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    addresses?: Prisma.addressesCreateNestedOneWithoutCustomer_profilesInput;
    users: Prisma.usersCreateNestedOneWithoutCustomer_profilesInput;
};
export type customer_profilesUncheckedCreateInput = {
    id?: string;
    user_id: string;
    default_address_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type customer_profilesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    addresses?: Prisma.addressesUpdateOneWithoutCustomer_profilesNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCustomer_profilesNestedInput;
};
export type customer_profilesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    default_address_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type customer_profilesCreateManyInput = {
    id?: string;
    user_id: string;
    default_address_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type customer_profilesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type customer_profilesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    default_address_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Customer_profilesListRelationFilter = {
    every?: Prisma.customer_profilesWhereInput;
    some?: Prisma.customer_profilesWhereInput;
    none?: Prisma.customer_profilesWhereInput;
};
export type customer_profilesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type customer_profilesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    default_address_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type customer_profilesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    default_address_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type customer_profilesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    default_address_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Customer_profilesNullableScalarRelationFilter = {
    is?: Prisma.customer_profilesWhereInput | null;
    isNot?: Prisma.customer_profilesWhereInput | null;
};
export type customer_profilesCreateNestedManyWithoutAddressesInput = {
    create?: Prisma.XOR<Prisma.customer_profilesCreateWithoutAddressesInput, Prisma.customer_profilesUncheckedCreateWithoutAddressesInput> | Prisma.customer_profilesCreateWithoutAddressesInput[] | Prisma.customer_profilesUncheckedCreateWithoutAddressesInput[];
    connectOrCreate?: Prisma.customer_profilesCreateOrConnectWithoutAddressesInput | Prisma.customer_profilesCreateOrConnectWithoutAddressesInput[];
    createMany?: Prisma.customer_profilesCreateManyAddressesInputEnvelope;
    connect?: Prisma.customer_profilesWhereUniqueInput | Prisma.customer_profilesWhereUniqueInput[];
};
export type customer_profilesUncheckedCreateNestedManyWithoutAddressesInput = {
    create?: Prisma.XOR<Prisma.customer_profilesCreateWithoutAddressesInput, Prisma.customer_profilesUncheckedCreateWithoutAddressesInput> | Prisma.customer_profilesCreateWithoutAddressesInput[] | Prisma.customer_profilesUncheckedCreateWithoutAddressesInput[];
    connectOrCreate?: Prisma.customer_profilesCreateOrConnectWithoutAddressesInput | Prisma.customer_profilesCreateOrConnectWithoutAddressesInput[];
    createMany?: Prisma.customer_profilesCreateManyAddressesInputEnvelope;
    connect?: Prisma.customer_profilesWhereUniqueInput | Prisma.customer_profilesWhereUniqueInput[];
};
export type customer_profilesUpdateManyWithoutAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.customer_profilesCreateWithoutAddressesInput, Prisma.customer_profilesUncheckedCreateWithoutAddressesInput> | Prisma.customer_profilesCreateWithoutAddressesInput[] | Prisma.customer_profilesUncheckedCreateWithoutAddressesInput[];
    connectOrCreate?: Prisma.customer_profilesCreateOrConnectWithoutAddressesInput | Prisma.customer_profilesCreateOrConnectWithoutAddressesInput[];
    upsert?: Prisma.customer_profilesUpsertWithWhereUniqueWithoutAddressesInput | Prisma.customer_profilesUpsertWithWhereUniqueWithoutAddressesInput[];
    createMany?: Prisma.customer_profilesCreateManyAddressesInputEnvelope;
    set?: Prisma.customer_profilesWhereUniqueInput | Prisma.customer_profilesWhereUniqueInput[];
    disconnect?: Prisma.customer_profilesWhereUniqueInput | Prisma.customer_profilesWhereUniqueInput[];
    delete?: Prisma.customer_profilesWhereUniqueInput | Prisma.customer_profilesWhereUniqueInput[];
    connect?: Prisma.customer_profilesWhereUniqueInput | Prisma.customer_profilesWhereUniqueInput[];
    update?: Prisma.customer_profilesUpdateWithWhereUniqueWithoutAddressesInput | Prisma.customer_profilesUpdateWithWhereUniqueWithoutAddressesInput[];
    updateMany?: Prisma.customer_profilesUpdateManyWithWhereWithoutAddressesInput | Prisma.customer_profilesUpdateManyWithWhereWithoutAddressesInput[];
    deleteMany?: Prisma.customer_profilesScalarWhereInput | Prisma.customer_profilesScalarWhereInput[];
};
export type customer_profilesUncheckedUpdateManyWithoutAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.customer_profilesCreateWithoutAddressesInput, Prisma.customer_profilesUncheckedCreateWithoutAddressesInput> | Prisma.customer_profilesCreateWithoutAddressesInput[] | Prisma.customer_profilesUncheckedCreateWithoutAddressesInput[];
    connectOrCreate?: Prisma.customer_profilesCreateOrConnectWithoutAddressesInput | Prisma.customer_profilesCreateOrConnectWithoutAddressesInput[];
    upsert?: Prisma.customer_profilesUpsertWithWhereUniqueWithoutAddressesInput | Prisma.customer_profilesUpsertWithWhereUniqueWithoutAddressesInput[];
    createMany?: Prisma.customer_profilesCreateManyAddressesInputEnvelope;
    set?: Prisma.customer_profilesWhereUniqueInput | Prisma.customer_profilesWhereUniqueInput[];
    disconnect?: Prisma.customer_profilesWhereUniqueInput | Prisma.customer_profilesWhereUniqueInput[];
    delete?: Prisma.customer_profilesWhereUniqueInput | Prisma.customer_profilesWhereUniqueInput[];
    connect?: Prisma.customer_profilesWhereUniqueInput | Prisma.customer_profilesWhereUniqueInput[];
    update?: Prisma.customer_profilesUpdateWithWhereUniqueWithoutAddressesInput | Prisma.customer_profilesUpdateWithWhereUniqueWithoutAddressesInput[];
    updateMany?: Prisma.customer_profilesUpdateManyWithWhereWithoutAddressesInput | Prisma.customer_profilesUpdateManyWithWhereWithoutAddressesInput[];
    deleteMany?: Prisma.customer_profilesScalarWhereInput | Prisma.customer_profilesScalarWhereInput[];
};
export type customer_profilesCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.customer_profilesCreateWithoutUsersInput, Prisma.customer_profilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.customer_profilesCreateOrConnectWithoutUsersInput;
    connect?: Prisma.customer_profilesWhereUniqueInput;
};
export type customer_profilesUncheckedCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.customer_profilesCreateWithoutUsersInput, Prisma.customer_profilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.customer_profilesCreateOrConnectWithoutUsersInput;
    connect?: Prisma.customer_profilesWhereUniqueInput;
};
export type customer_profilesUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.customer_profilesCreateWithoutUsersInput, Prisma.customer_profilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.customer_profilesCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.customer_profilesUpsertWithoutUsersInput;
    disconnect?: Prisma.customer_profilesWhereInput | boolean;
    delete?: Prisma.customer_profilesWhereInput | boolean;
    connect?: Prisma.customer_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customer_profilesUpdateToOneWithWhereWithoutUsersInput, Prisma.customer_profilesUpdateWithoutUsersInput>, Prisma.customer_profilesUncheckedUpdateWithoutUsersInput>;
};
export type customer_profilesUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.customer_profilesCreateWithoutUsersInput, Prisma.customer_profilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.customer_profilesCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.customer_profilesUpsertWithoutUsersInput;
    disconnect?: Prisma.customer_profilesWhereInput | boolean;
    delete?: Prisma.customer_profilesWhereInput | boolean;
    connect?: Prisma.customer_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customer_profilesUpdateToOneWithWhereWithoutUsersInput, Prisma.customer_profilesUpdateWithoutUsersInput>, Prisma.customer_profilesUncheckedUpdateWithoutUsersInput>;
};
export type customer_profilesCreateWithoutAddressesInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    users: Prisma.usersCreateNestedOneWithoutCustomer_profilesInput;
};
export type customer_profilesUncheckedCreateWithoutAddressesInput = {
    id?: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type customer_profilesCreateOrConnectWithoutAddressesInput = {
    where: Prisma.customer_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.customer_profilesCreateWithoutAddressesInput, Prisma.customer_profilesUncheckedCreateWithoutAddressesInput>;
};
export type customer_profilesCreateManyAddressesInputEnvelope = {
    data: Prisma.customer_profilesCreateManyAddressesInput | Prisma.customer_profilesCreateManyAddressesInput[];
    skipDuplicates?: boolean;
};
export type customer_profilesUpsertWithWhereUniqueWithoutAddressesInput = {
    where: Prisma.customer_profilesWhereUniqueInput;
    update: Prisma.XOR<Prisma.customer_profilesUpdateWithoutAddressesInput, Prisma.customer_profilesUncheckedUpdateWithoutAddressesInput>;
    create: Prisma.XOR<Prisma.customer_profilesCreateWithoutAddressesInput, Prisma.customer_profilesUncheckedCreateWithoutAddressesInput>;
};
export type customer_profilesUpdateWithWhereUniqueWithoutAddressesInput = {
    where: Prisma.customer_profilesWhereUniqueInput;
    data: Prisma.XOR<Prisma.customer_profilesUpdateWithoutAddressesInput, Prisma.customer_profilesUncheckedUpdateWithoutAddressesInput>;
};
export type customer_profilesUpdateManyWithWhereWithoutAddressesInput = {
    where: Prisma.customer_profilesScalarWhereInput;
    data: Prisma.XOR<Prisma.customer_profilesUpdateManyMutationInput, Prisma.customer_profilesUncheckedUpdateManyWithoutAddressesInput>;
};
export type customer_profilesScalarWhereInput = {
    AND?: Prisma.customer_profilesScalarWhereInput | Prisma.customer_profilesScalarWhereInput[];
    OR?: Prisma.customer_profilesScalarWhereInput[];
    NOT?: Prisma.customer_profilesScalarWhereInput | Prisma.customer_profilesScalarWhereInput[];
    id?: Prisma.UuidFilter<"customer_profiles"> | string;
    user_id?: Prisma.UuidFilter<"customer_profiles"> | string;
    default_address_id?: Prisma.UuidNullableFilter<"customer_profiles"> | string | null;
    created_at?: Prisma.DateTimeFilter<"customer_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"customer_profiles"> | Date | string;
};
export type customer_profilesCreateWithoutUsersInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    addresses?: Prisma.addressesCreateNestedOneWithoutCustomer_profilesInput;
};
export type customer_profilesUncheckedCreateWithoutUsersInput = {
    id?: string;
    default_address_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type customer_profilesCreateOrConnectWithoutUsersInput = {
    where: Prisma.customer_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.customer_profilesCreateWithoutUsersInput, Prisma.customer_profilesUncheckedCreateWithoutUsersInput>;
};
export type customer_profilesUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.customer_profilesUpdateWithoutUsersInput, Prisma.customer_profilesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.customer_profilesCreateWithoutUsersInput, Prisma.customer_profilesUncheckedCreateWithoutUsersInput>;
    where?: Prisma.customer_profilesWhereInput;
};
export type customer_profilesUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.customer_profilesWhereInput;
    data: Prisma.XOR<Prisma.customer_profilesUpdateWithoutUsersInput, Prisma.customer_profilesUncheckedUpdateWithoutUsersInput>;
};
export type customer_profilesUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    addresses?: Prisma.addressesUpdateOneWithoutCustomer_profilesNestedInput;
};
export type customer_profilesUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    default_address_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type customer_profilesCreateManyAddressesInput = {
    id?: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type customer_profilesUpdateWithoutAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneRequiredWithoutCustomer_profilesNestedInput;
};
export type customer_profilesUncheckedUpdateWithoutAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type customer_profilesUncheckedUpdateManyWithoutAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type customer_profilesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    default_address_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    addresses?: boolean | Prisma.customer_profiles$addressesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer_profiles"]>;
export type customer_profilesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    default_address_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    addresses?: boolean | Prisma.customer_profiles$addressesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer_profiles"]>;
export type customer_profilesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    default_address_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    addresses?: boolean | Prisma.customer_profiles$addressesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer_profiles"]>;
export type customer_profilesSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    default_address_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type customer_profilesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "default_address_id" | "created_at" | "updated_at", ExtArgs["result"]["customer_profiles"]>;
export type customer_profilesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    addresses?: boolean | Prisma.customer_profiles$addressesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type customer_profilesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    addresses?: boolean | Prisma.customer_profiles$addressesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type customer_profilesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    addresses?: boolean | Prisma.customer_profiles$addressesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $customer_profilesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "customer_profiles";
    objects: {
        addresses: Prisma.$addressesPayload<ExtArgs> | null;
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        default_address_id: string | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["customer_profiles"]>;
    composites: {};
};
export type customer_profilesGetPayload<S extends boolean | null | undefined | customer_profilesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$customer_profilesPayload, S>;
export type customer_profilesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<customer_profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Customer_profilesCountAggregateInputType | true;
};
export interface customer_profilesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['customer_profiles'];
        meta: {
            name: 'customer_profiles';
        };
    };
    findUnique<T extends customer_profilesFindUniqueArgs>(args: Prisma.SelectSubset<T, customer_profilesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__customer_profilesClient<runtime.Types.Result.GetResult<Prisma.$customer_profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends customer_profilesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, customer_profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__customer_profilesClient<runtime.Types.Result.GetResult<Prisma.$customer_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends customer_profilesFindFirstArgs>(args?: Prisma.SelectSubset<T, customer_profilesFindFirstArgs<ExtArgs>>): Prisma.Prisma__customer_profilesClient<runtime.Types.Result.GetResult<Prisma.$customer_profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends customer_profilesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, customer_profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__customer_profilesClient<runtime.Types.Result.GetResult<Prisma.$customer_profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends customer_profilesFindManyArgs>(args?: Prisma.SelectSubset<T, customer_profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customer_profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends customer_profilesCreateArgs>(args: Prisma.SelectSubset<T, customer_profilesCreateArgs<ExtArgs>>): Prisma.Prisma__customer_profilesClient<runtime.Types.Result.GetResult<Prisma.$customer_profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends customer_profilesCreateManyArgs>(args?: Prisma.SelectSubset<T, customer_profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends customer_profilesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, customer_profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customer_profilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends customer_profilesDeleteArgs>(args: Prisma.SelectSubset<T, customer_profilesDeleteArgs<ExtArgs>>): Prisma.Prisma__customer_profilesClient<runtime.Types.Result.GetResult<Prisma.$customer_profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends customer_profilesUpdateArgs>(args: Prisma.SelectSubset<T, customer_profilesUpdateArgs<ExtArgs>>): Prisma.Prisma__customer_profilesClient<runtime.Types.Result.GetResult<Prisma.$customer_profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends customer_profilesDeleteManyArgs>(args?: Prisma.SelectSubset<T, customer_profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends customer_profilesUpdateManyArgs>(args: Prisma.SelectSubset<T, customer_profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends customer_profilesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, customer_profilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customer_profilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends customer_profilesUpsertArgs>(args: Prisma.SelectSubset<T, customer_profilesUpsertArgs<ExtArgs>>): Prisma.Prisma__customer_profilesClient<runtime.Types.Result.GetResult<Prisma.$customer_profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends customer_profilesCountArgs>(args?: Prisma.Subset<T, customer_profilesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Customer_profilesCountAggregateOutputType> : number>;
    aggregate<T extends Customer_profilesAggregateArgs>(args: Prisma.Subset<T, Customer_profilesAggregateArgs>): Prisma.PrismaPromise<GetCustomer_profilesAggregateType<T>>;
    groupBy<T extends customer_profilesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: customer_profilesGroupByArgs['orderBy'];
    } : {
        orderBy?: customer_profilesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, customer_profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomer_profilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: customer_profilesFieldRefs;
}
export interface Prisma__customer_profilesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    addresses<T extends Prisma.customer_profiles$addressesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customer_profiles$addressesArgs<ExtArgs>>): Prisma.Prisma__addressesClient<runtime.Types.Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface customer_profilesFieldRefs {
    readonly id: Prisma.FieldRef<"customer_profiles", 'String'>;
    readonly user_id: Prisma.FieldRef<"customer_profiles", 'String'>;
    readonly default_address_id: Prisma.FieldRef<"customer_profiles", 'String'>;
    readonly created_at: Prisma.FieldRef<"customer_profiles", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"customer_profiles", 'DateTime'>;
}
export type customer_profilesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_profilesSelect<ExtArgs> | null;
    omit?: Prisma.customer_profilesOmit<ExtArgs> | null;
    include?: Prisma.customer_profilesInclude<ExtArgs> | null;
    where: Prisma.customer_profilesWhereUniqueInput;
};
export type customer_profilesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_profilesSelect<ExtArgs> | null;
    omit?: Prisma.customer_profilesOmit<ExtArgs> | null;
    include?: Prisma.customer_profilesInclude<ExtArgs> | null;
    where: Prisma.customer_profilesWhereUniqueInput;
};
export type customer_profilesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_profilesSelect<ExtArgs> | null;
    omit?: Prisma.customer_profilesOmit<ExtArgs> | null;
    include?: Prisma.customer_profilesInclude<ExtArgs> | null;
    where?: Prisma.customer_profilesWhereInput;
    orderBy?: Prisma.customer_profilesOrderByWithRelationInput | Prisma.customer_profilesOrderByWithRelationInput[];
    cursor?: Prisma.customer_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Customer_profilesScalarFieldEnum | Prisma.Customer_profilesScalarFieldEnum[];
};
export type customer_profilesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_profilesSelect<ExtArgs> | null;
    omit?: Prisma.customer_profilesOmit<ExtArgs> | null;
    include?: Prisma.customer_profilesInclude<ExtArgs> | null;
    where?: Prisma.customer_profilesWhereInput;
    orderBy?: Prisma.customer_profilesOrderByWithRelationInput | Prisma.customer_profilesOrderByWithRelationInput[];
    cursor?: Prisma.customer_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Customer_profilesScalarFieldEnum | Prisma.Customer_profilesScalarFieldEnum[];
};
export type customer_profilesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_profilesSelect<ExtArgs> | null;
    omit?: Prisma.customer_profilesOmit<ExtArgs> | null;
    include?: Prisma.customer_profilesInclude<ExtArgs> | null;
    where?: Prisma.customer_profilesWhereInput;
    orderBy?: Prisma.customer_profilesOrderByWithRelationInput | Prisma.customer_profilesOrderByWithRelationInput[];
    cursor?: Prisma.customer_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Customer_profilesScalarFieldEnum | Prisma.Customer_profilesScalarFieldEnum[];
};
export type customer_profilesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_profilesSelect<ExtArgs> | null;
    omit?: Prisma.customer_profilesOmit<ExtArgs> | null;
    include?: Prisma.customer_profilesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customer_profilesCreateInput, Prisma.customer_profilesUncheckedCreateInput>;
};
export type customer_profilesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.customer_profilesCreateManyInput | Prisma.customer_profilesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type customer_profilesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_profilesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.customer_profilesOmit<ExtArgs> | null;
    data: Prisma.customer_profilesCreateManyInput | Prisma.customer_profilesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.customer_profilesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type customer_profilesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_profilesSelect<ExtArgs> | null;
    omit?: Prisma.customer_profilesOmit<ExtArgs> | null;
    include?: Prisma.customer_profilesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customer_profilesUpdateInput, Prisma.customer_profilesUncheckedUpdateInput>;
    where: Prisma.customer_profilesWhereUniqueInput;
};
export type customer_profilesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.customer_profilesUpdateManyMutationInput, Prisma.customer_profilesUncheckedUpdateManyInput>;
    where?: Prisma.customer_profilesWhereInput;
    limit?: number;
};
export type customer_profilesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_profilesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.customer_profilesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customer_profilesUpdateManyMutationInput, Prisma.customer_profilesUncheckedUpdateManyInput>;
    where?: Prisma.customer_profilesWhereInput;
    limit?: number;
    include?: Prisma.customer_profilesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type customer_profilesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_profilesSelect<ExtArgs> | null;
    omit?: Prisma.customer_profilesOmit<ExtArgs> | null;
    include?: Prisma.customer_profilesInclude<ExtArgs> | null;
    where: Prisma.customer_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.customer_profilesCreateInput, Prisma.customer_profilesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.customer_profilesUpdateInput, Prisma.customer_profilesUncheckedUpdateInput>;
};
export type customer_profilesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_profilesSelect<ExtArgs> | null;
    omit?: Prisma.customer_profilesOmit<ExtArgs> | null;
    include?: Prisma.customer_profilesInclude<ExtArgs> | null;
    where: Prisma.customer_profilesWhereUniqueInput;
};
export type customer_profilesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customer_profilesWhereInput;
    limit?: number;
};
export type customer_profiles$addressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressesSelect<ExtArgs> | null;
    omit?: Prisma.addressesOmit<ExtArgs> | null;
    include?: Prisma.addressesInclude<ExtArgs> | null;
    where?: Prisma.addressesWhereInput;
};
export type customer_profilesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_profilesSelect<ExtArgs> | null;
    omit?: Prisma.customer_profilesOmit<ExtArgs> | null;
    include?: Prisma.customer_profilesInclude<ExtArgs> | null;
};
export {};
