import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type merchant_profilesModel = runtime.Types.Result.DefaultSelection<Prisma.$merchant_profilesPayload>;
export type AggregateMerchant_profiles = {
    _count: Merchant_profilesCountAggregateOutputType | null;
    _min: Merchant_profilesMinAggregateOutputType | null;
    _max: Merchant_profilesMaxAggregateOutputType | null;
};
export type Merchant_profilesMinAggregateOutputType = {
    id: string | null;
    owner_user_id: string | null;
    business_name: string | null;
    legal_name: string | null;
    tax_id: string | null;
    billing_email: string | null;
    phone_e164: string | null;
    logo_url: string | null;
    status: $Enums.merchant_status_type | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Merchant_profilesMaxAggregateOutputType = {
    id: string | null;
    owner_user_id: string | null;
    business_name: string | null;
    legal_name: string | null;
    tax_id: string | null;
    billing_email: string | null;
    phone_e164: string | null;
    logo_url: string | null;
    status: $Enums.merchant_status_type | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Merchant_profilesCountAggregateOutputType = {
    id: number;
    owner_user_id: number;
    business_name: number;
    legal_name: number;
    tax_id: number;
    billing_email: number;
    phone_e164: number;
    logo_url: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Merchant_profilesMinAggregateInputType = {
    id?: true;
    owner_user_id?: true;
    business_name?: true;
    legal_name?: true;
    tax_id?: true;
    billing_email?: true;
    phone_e164?: true;
    logo_url?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type Merchant_profilesMaxAggregateInputType = {
    id?: true;
    owner_user_id?: true;
    business_name?: true;
    legal_name?: true;
    tax_id?: true;
    billing_email?: true;
    phone_e164?: true;
    logo_url?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type Merchant_profilesCountAggregateInputType = {
    id?: true;
    owner_user_id?: true;
    business_name?: true;
    legal_name?: true;
    tax_id?: true;
    billing_email?: true;
    phone_e164?: true;
    logo_url?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Merchant_profilesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.merchant_profilesWhereInput;
    orderBy?: Prisma.merchant_profilesOrderByWithRelationInput | Prisma.merchant_profilesOrderByWithRelationInput[];
    cursor?: Prisma.merchant_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Merchant_profilesCountAggregateInputType;
    _min?: Merchant_profilesMinAggregateInputType;
    _max?: Merchant_profilesMaxAggregateInputType;
};
export type GetMerchant_profilesAggregateType<T extends Merchant_profilesAggregateArgs> = {
    [P in keyof T & keyof AggregateMerchant_profiles]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMerchant_profiles[P]> : Prisma.GetScalarType<T[P], AggregateMerchant_profiles[P]>;
};
export type merchant_profilesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.merchant_profilesWhereInput;
    orderBy?: Prisma.merchant_profilesOrderByWithAggregationInput | Prisma.merchant_profilesOrderByWithAggregationInput[];
    by: Prisma.Merchant_profilesScalarFieldEnum[] | Prisma.Merchant_profilesScalarFieldEnum;
    having?: Prisma.merchant_profilesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Merchant_profilesCountAggregateInputType | true;
    _min?: Merchant_profilesMinAggregateInputType;
    _max?: Merchant_profilesMaxAggregateInputType;
};
export type Merchant_profilesGroupByOutputType = {
    id: string;
    owner_user_id: string;
    business_name: string;
    legal_name: string | null;
    tax_id: string | null;
    billing_email: string | null;
    phone_e164: string | null;
    logo_url: string | null;
    status: $Enums.merchant_status_type;
    created_at: Date;
    updated_at: Date;
    _count: Merchant_profilesCountAggregateOutputType | null;
    _min: Merchant_profilesMinAggregateOutputType | null;
    _max: Merchant_profilesMaxAggregateOutputType | null;
};
type GetMerchant_profilesGroupByPayload<T extends merchant_profilesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Merchant_profilesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Merchant_profilesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Merchant_profilesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Merchant_profilesGroupByOutputType[P]>;
}>>;
export type merchant_profilesWhereInput = {
    AND?: Prisma.merchant_profilesWhereInput | Prisma.merchant_profilesWhereInput[];
    OR?: Prisma.merchant_profilesWhereInput[];
    NOT?: Prisma.merchant_profilesWhereInput | Prisma.merchant_profilesWhereInput[];
    id?: Prisma.UuidFilter<"merchant_profiles"> | string;
    owner_user_id?: Prisma.UuidFilter<"merchant_profiles"> | string;
    business_name?: Prisma.StringFilter<"merchant_profiles"> | string;
    legal_name?: Prisma.StringNullableFilter<"merchant_profiles"> | string | null;
    tax_id?: Prisma.StringNullableFilter<"merchant_profiles"> | string | null;
    billing_email?: Prisma.StringNullableFilter<"merchant_profiles"> | string | null;
    phone_e164?: Prisma.StringNullableFilter<"merchant_profiles"> | string | null;
    logo_url?: Prisma.StringNullableFilter<"merchant_profiles"> | string | null;
    status?: Prisma.Enummerchant_status_typeFilter<"merchant_profiles"> | $Enums.merchant_status_type;
    created_at?: Prisma.DateTimeFilter<"merchant_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"merchant_profiles"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    merchant_settlements?: Prisma.Merchant_settlementsListRelationFilter;
    merchant_users?: Prisma.Merchant_usersListRelationFilter;
    stores?: Prisma.StoresListRelationFilter;
};
export type merchant_profilesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    owner_user_id?: Prisma.SortOrder;
    business_name?: Prisma.SortOrder;
    legal_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    tax_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    billing_email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone_e164?: Prisma.SortOrderInput | Prisma.SortOrder;
    logo_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    merchant_settlements?: Prisma.merchant_settlementsOrderByRelationAggregateInput;
    merchant_users?: Prisma.merchant_usersOrderByRelationAggregateInput;
    stores?: Prisma.storesOrderByRelationAggregateInput;
};
export type merchant_profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.merchant_profilesWhereInput | Prisma.merchant_profilesWhereInput[];
    OR?: Prisma.merchant_profilesWhereInput[];
    NOT?: Prisma.merchant_profilesWhereInput | Prisma.merchant_profilesWhereInput[];
    owner_user_id?: Prisma.UuidFilter<"merchant_profiles"> | string;
    business_name?: Prisma.StringFilter<"merchant_profiles"> | string;
    legal_name?: Prisma.StringNullableFilter<"merchant_profiles"> | string | null;
    tax_id?: Prisma.StringNullableFilter<"merchant_profiles"> | string | null;
    billing_email?: Prisma.StringNullableFilter<"merchant_profiles"> | string | null;
    phone_e164?: Prisma.StringNullableFilter<"merchant_profiles"> | string | null;
    logo_url?: Prisma.StringNullableFilter<"merchant_profiles"> | string | null;
    status?: Prisma.Enummerchant_status_typeFilter<"merchant_profiles"> | $Enums.merchant_status_type;
    created_at?: Prisma.DateTimeFilter<"merchant_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"merchant_profiles"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    merchant_settlements?: Prisma.Merchant_settlementsListRelationFilter;
    merchant_users?: Prisma.Merchant_usersListRelationFilter;
    stores?: Prisma.StoresListRelationFilter;
}, "id">;
export type merchant_profilesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    owner_user_id?: Prisma.SortOrder;
    business_name?: Prisma.SortOrder;
    legal_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    tax_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    billing_email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone_e164?: Prisma.SortOrderInput | Prisma.SortOrder;
    logo_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.merchant_profilesCountOrderByAggregateInput;
    _max?: Prisma.merchant_profilesMaxOrderByAggregateInput;
    _min?: Prisma.merchant_profilesMinOrderByAggregateInput;
};
export type merchant_profilesScalarWhereWithAggregatesInput = {
    AND?: Prisma.merchant_profilesScalarWhereWithAggregatesInput | Prisma.merchant_profilesScalarWhereWithAggregatesInput[];
    OR?: Prisma.merchant_profilesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.merchant_profilesScalarWhereWithAggregatesInput | Prisma.merchant_profilesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"merchant_profiles"> | string;
    owner_user_id?: Prisma.UuidWithAggregatesFilter<"merchant_profiles"> | string;
    business_name?: Prisma.StringWithAggregatesFilter<"merchant_profiles"> | string;
    legal_name?: Prisma.StringNullableWithAggregatesFilter<"merchant_profiles"> | string | null;
    tax_id?: Prisma.StringNullableWithAggregatesFilter<"merchant_profiles"> | string | null;
    billing_email?: Prisma.StringNullableWithAggregatesFilter<"merchant_profiles"> | string | null;
    phone_e164?: Prisma.StringNullableWithAggregatesFilter<"merchant_profiles"> | string | null;
    logo_url?: Prisma.StringNullableWithAggregatesFilter<"merchant_profiles"> | string | null;
    status?: Prisma.Enummerchant_status_typeWithAggregatesFilter<"merchant_profiles"> | $Enums.merchant_status_type;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"merchant_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"merchant_profiles"> | Date | string;
};
export type merchant_profilesCreateInput = {
    id?: string;
    business_name: string;
    legal_name?: string | null;
    tax_id?: string | null;
    billing_email?: string | null;
    phone_e164?: string | null;
    logo_url?: string | null;
    status?: $Enums.merchant_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
    users: Prisma.usersCreateNestedOneWithoutMerchant_profilesInput;
    merchant_settlements?: Prisma.merchant_settlementsCreateNestedManyWithoutMerchant_profilesInput;
    merchant_users?: Prisma.merchant_usersCreateNestedManyWithoutMerchant_profilesInput;
    stores?: Prisma.storesCreateNestedManyWithoutMerchant_profilesInput;
};
export type merchant_profilesUncheckedCreateInput = {
    id?: string;
    owner_user_id: string;
    business_name: string;
    legal_name?: string | null;
    tax_id?: string | null;
    billing_email?: string | null;
    phone_e164?: string | null;
    logo_url?: string | null;
    status?: $Enums.merchant_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
    merchant_settlements?: Prisma.merchant_settlementsUncheckedCreateNestedManyWithoutMerchant_profilesInput;
    merchant_users?: Prisma.merchant_usersUncheckedCreateNestedManyWithoutMerchant_profilesInput;
    stores?: Prisma.storesUncheckedCreateNestedManyWithoutMerchant_profilesInput;
};
export type merchant_profilesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    business_name?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    billing_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enummerchant_status_typeFieldUpdateOperationsInput | $Enums.merchant_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneRequiredWithoutMerchant_profilesNestedInput;
    merchant_settlements?: Prisma.merchant_settlementsUpdateManyWithoutMerchant_profilesNestedInput;
    merchant_users?: Prisma.merchant_usersUpdateManyWithoutMerchant_profilesNestedInput;
    stores?: Prisma.storesUpdateManyWithoutMerchant_profilesNestedInput;
};
export type merchant_profilesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    business_name?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    billing_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enummerchant_status_typeFieldUpdateOperationsInput | $Enums.merchant_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    merchant_settlements?: Prisma.merchant_settlementsUncheckedUpdateManyWithoutMerchant_profilesNestedInput;
    merchant_users?: Prisma.merchant_usersUncheckedUpdateManyWithoutMerchant_profilesNestedInput;
    stores?: Prisma.storesUncheckedUpdateManyWithoutMerchant_profilesNestedInput;
};
export type merchant_profilesCreateManyInput = {
    id?: string;
    owner_user_id: string;
    business_name: string;
    legal_name?: string | null;
    tax_id?: string | null;
    billing_email?: string | null;
    phone_e164?: string | null;
    logo_url?: string | null;
    status?: $Enums.merchant_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type merchant_profilesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    business_name?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    billing_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enummerchant_status_typeFieldUpdateOperationsInput | $Enums.merchant_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type merchant_profilesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    business_name?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    billing_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enummerchant_status_typeFieldUpdateOperationsInput | $Enums.merchant_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type merchant_profilesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    owner_user_id?: Prisma.SortOrder;
    business_name?: Prisma.SortOrder;
    legal_name?: Prisma.SortOrder;
    tax_id?: Prisma.SortOrder;
    billing_email?: Prisma.SortOrder;
    phone_e164?: Prisma.SortOrder;
    logo_url?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type merchant_profilesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    owner_user_id?: Prisma.SortOrder;
    business_name?: Prisma.SortOrder;
    legal_name?: Prisma.SortOrder;
    tax_id?: Prisma.SortOrder;
    billing_email?: Prisma.SortOrder;
    phone_e164?: Prisma.SortOrder;
    logo_url?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type merchant_profilesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    owner_user_id?: Prisma.SortOrder;
    business_name?: Prisma.SortOrder;
    legal_name?: Prisma.SortOrder;
    tax_id?: Prisma.SortOrder;
    billing_email?: Prisma.SortOrder;
    phone_e164?: Prisma.SortOrder;
    logo_url?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Merchant_profilesScalarRelationFilter = {
    is?: Prisma.merchant_profilesWhereInput;
    isNot?: Prisma.merchant_profilesWhereInput;
};
export type Merchant_profilesListRelationFilter = {
    every?: Prisma.merchant_profilesWhereInput;
    some?: Prisma.merchant_profilesWhereInput;
    none?: Prisma.merchant_profilesWhereInput;
};
export type merchant_profilesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Enummerchant_status_typeFieldUpdateOperationsInput = {
    set?: $Enums.merchant_status_type;
};
export type merchant_profilesCreateNestedOneWithoutMerchant_settlementsInput = {
    create?: Prisma.XOR<Prisma.merchant_profilesCreateWithoutMerchant_settlementsInput, Prisma.merchant_profilesUncheckedCreateWithoutMerchant_settlementsInput>;
    connectOrCreate?: Prisma.merchant_profilesCreateOrConnectWithoutMerchant_settlementsInput;
    connect?: Prisma.merchant_profilesWhereUniqueInput;
};
export type merchant_profilesUpdateOneRequiredWithoutMerchant_settlementsNestedInput = {
    create?: Prisma.XOR<Prisma.merchant_profilesCreateWithoutMerchant_settlementsInput, Prisma.merchant_profilesUncheckedCreateWithoutMerchant_settlementsInput>;
    connectOrCreate?: Prisma.merchant_profilesCreateOrConnectWithoutMerchant_settlementsInput;
    upsert?: Prisma.merchant_profilesUpsertWithoutMerchant_settlementsInput;
    connect?: Prisma.merchant_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.merchant_profilesUpdateToOneWithWhereWithoutMerchant_settlementsInput, Prisma.merchant_profilesUpdateWithoutMerchant_settlementsInput>, Prisma.merchant_profilesUncheckedUpdateWithoutMerchant_settlementsInput>;
};
export type merchant_profilesCreateNestedOneWithoutMerchant_usersInput = {
    create?: Prisma.XOR<Prisma.merchant_profilesCreateWithoutMerchant_usersInput, Prisma.merchant_profilesUncheckedCreateWithoutMerchant_usersInput>;
    connectOrCreate?: Prisma.merchant_profilesCreateOrConnectWithoutMerchant_usersInput;
    connect?: Prisma.merchant_profilesWhereUniqueInput;
};
export type merchant_profilesUpdateOneRequiredWithoutMerchant_usersNestedInput = {
    create?: Prisma.XOR<Prisma.merchant_profilesCreateWithoutMerchant_usersInput, Prisma.merchant_profilesUncheckedCreateWithoutMerchant_usersInput>;
    connectOrCreate?: Prisma.merchant_profilesCreateOrConnectWithoutMerchant_usersInput;
    upsert?: Prisma.merchant_profilesUpsertWithoutMerchant_usersInput;
    connect?: Prisma.merchant_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.merchant_profilesUpdateToOneWithWhereWithoutMerchant_usersInput, Prisma.merchant_profilesUpdateWithoutMerchant_usersInput>, Prisma.merchant_profilesUncheckedUpdateWithoutMerchant_usersInput>;
};
export type merchant_profilesCreateNestedOneWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.merchant_profilesCreateWithoutStoresInput, Prisma.merchant_profilesUncheckedCreateWithoutStoresInput>;
    connectOrCreate?: Prisma.merchant_profilesCreateOrConnectWithoutStoresInput;
    connect?: Prisma.merchant_profilesWhereUniqueInput;
};
export type merchant_profilesUpdateOneRequiredWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.merchant_profilesCreateWithoutStoresInput, Prisma.merchant_profilesUncheckedCreateWithoutStoresInput>;
    connectOrCreate?: Prisma.merchant_profilesCreateOrConnectWithoutStoresInput;
    upsert?: Prisma.merchant_profilesUpsertWithoutStoresInput;
    connect?: Prisma.merchant_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.merchant_profilesUpdateToOneWithWhereWithoutStoresInput, Prisma.merchant_profilesUpdateWithoutStoresInput>, Prisma.merchant_profilesUncheckedUpdateWithoutStoresInput>;
};
export type merchant_profilesCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.merchant_profilesCreateWithoutUsersInput, Prisma.merchant_profilesUncheckedCreateWithoutUsersInput> | Prisma.merchant_profilesCreateWithoutUsersInput[] | Prisma.merchant_profilesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.merchant_profilesCreateOrConnectWithoutUsersInput | Prisma.merchant_profilesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.merchant_profilesCreateManyUsersInputEnvelope;
    connect?: Prisma.merchant_profilesWhereUniqueInput | Prisma.merchant_profilesWhereUniqueInput[];
};
export type merchant_profilesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.merchant_profilesCreateWithoutUsersInput, Prisma.merchant_profilesUncheckedCreateWithoutUsersInput> | Prisma.merchant_profilesCreateWithoutUsersInput[] | Prisma.merchant_profilesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.merchant_profilesCreateOrConnectWithoutUsersInput | Prisma.merchant_profilesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.merchant_profilesCreateManyUsersInputEnvelope;
    connect?: Prisma.merchant_profilesWhereUniqueInput | Prisma.merchant_profilesWhereUniqueInput[];
};
export type merchant_profilesUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.merchant_profilesCreateWithoutUsersInput, Prisma.merchant_profilesUncheckedCreateWithoutUsersInput> | Prisma.merchant_profilesCreateWithoutUsersInput[] | Prisma.merchant_profilesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.merchant_profilesCreateOrConnectWithoutUsersInput | Prisma.merchant_profilesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.merchant_profilesUpsertWithWhereUniqueWithoutUsersInput | Prisma.merchant_profilesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.merchant_profilesCreateManyUsersInputEnvelope;
    set?: Prisma.merchant_profilesWhereUniqueInput | Prisma.merchant_profilesWhereUniqueInput[];
    disconnect?: Prisma.merchant_profilesWhereUniqueInput | Prisma.merchant_profilesWhereUniqueInput[];
    delete?: Prisma.merchant_profilesWhereUniqueInput | Prisma.merchant_profilesWhereUniqueInput[];
    connect?: Prisma.merchant_profilesWhereUniqueInput | Prisma.merchant_profilesWhereUniqueInput[];
    update?: Prisma.merchant_profilesUpdateWithWhereUniqueWithoutUsersInput | Prisma.merchant_profilesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.merchant_profilesUpdateManyWithWhereWithoutUsersInput | Prisma.merchant_profilesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.merchant_profilesScalarWhereInput | Prisma.merchant_profilesScalarWhereInput[];
};
export type merchant_profilesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.merchant_profilesCreateWithoutUsersInput, Prisma.merchant_profilesUncheckedCreateWithoutUsersInput> | Prisma.merchant_profilesCreateWithoutUsersInput[] | Prisma.merchant_profilesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.merchant_profilesCreateOrConnectWithoutUsersInput | Prisma.merchant_profilesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.merchant_profilesUpsertWithWhereUniqueWithoutUsersInput | Prisma.merchant_profilesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.merchant_profilesCreateManyUsersInputEnvelope;
    set?: Prisma.merchant_profilesWhereUniqueInput | Prisma.merchant_profilesWhereUniqueInput[];
    disconnect?: Prisma.merchant_profilesWhereUniqueInput | Prisma.merchant_profilesWhereUniqueInput[];
    delete?: Prisma.merchant_profilesWhereUniqueInput | Prisma.merchant_profilesWhereUniqueInput[];
    connect?: Prisma.merchant_profilesWhereUniqueInput | Prisma.merchant_profilesWhereUniqueInput[];
    update?: Prisma.merchant_profilesUpdateWithWhereUniqueWithoutUsersInput | Prisma.merchant_profilesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.merchant_profilesUpdateManyWithWhereWithoutUsersInput | Prisma.merchant_profilesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.merchant_profilesScalarWhereInput | Prisma.merchant_profilesScalarWhereInput[];
};
export type merchant_profilesCreateWithoutMerchant_settlementsInput = {
    id?: string;
    business_name: string;
    legal_name?: string | null;
    tax_id?: string | null;
    billing_email?: string | null;
    phone_e164?: string | null;
    logo_url?: string | null;
    status?: $Enums.merchant_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
    users: Prisma.usersCreateNestedOneWithoutMerchant_profilesInput;
    merchant_users?: Prisma.merchant_usersCreateNestedManyWithoutMerchant_profilesInput;
    stores?: Prisma.storesCreateNestedManyWithoutMerchant_profilesInput;
};
export type merchant_profilesUncheckedCreateWithoutMerchant_settlementsInput = {
    id?: string;
    owner_user_id: string;
    business_name: string;
    legal_name?: string | null;
    tax_id?: string | null;
    billing_email?: string | null;
    phone_e164?: string | null;
    logo_url?: string | null;
    status?: $Enums.merchant_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
    merchant_users?: Prisma.merchant_usersUncheckedCreateNestedManyWithoutMerchant_profilesInput;
    stores?: Prisma.storesUncheckedCreateNestedManyWithoutMerchant_profilesInput;
};
export type merchant_profilesCreateOrConnectWithoutMerchant_settlementsInput = {
    where: Prisma.merchant_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.merchant_profilesCreateWithoutMerchant_settlementsInput, Prisma.merchant_profilesUncheckedCreateWithoutMerchant_settlementsInput>;
};
export type merchant_profilesUpsertWithoutMerchant_settlementsInput = {
    update: Prisma.XOR<Prisma.merchant_profilesUpdateWithoutMerchant_settlementsInput, Prisma.merchant_profilesUncheckedUpdateWithoutMerchant_settlementsInput>;
    create: Prisma.XOR<Prisma.merchant_profilesCreateWithoutMerchant_settlementsInput, Prisma.merchant_profilesUncheckedCreateWithoutMerchant_settlementsInput>;
    where?: Prisma.merchant_profilesWhereInput;
};
export type merchant_profilesUpdateToOneWithWhereWithoutMerchant_settlementsInput = {
    where?: Prisma.merchant_profilesWhereInput;
    data: Prisma.XOR<Prisma.merchant_profilesUpdateWithoutMerchant_settlementsInput, Prisma.merchant_profilesUncheckedUpdateWithoutMerchant_settlementsInput>;
};
export type merchant_profilesUpdateWithoutMerchant_settlementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    business_name?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    billing_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enummerchant_status_typeFieldUpdateOperationsInput | $Enums.merchant_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneRequiredWithoutMerchant_profilesNestedInput;
    merchant_users?: Prisma.merchant_usersUpdateManyWithoutMerchant_profilesNestedInput;
    stores?: Prisma.storesUpdateManyWithoutMerchant_profilesNestedInput;
};
export type merchant_profilesUncheckedUpdateWithoutMerchant_settlementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    business_name?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    billing_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enummerchant_status_typeFieldUpdateOperationsInput | $Enums.merchant_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    merchant_users?: Prisma.merchant_usersUncheckedUpdateManyWithoutMerchant_profilesNestedInput;
    stores?: Prisma.storesUncheckedUpdateManyWithoutMerchant_profilesNestedInput;
};
export type merchant_profilesCreateWithoutMerchant_usersInput = {
    id?: string;
    business_name: string;
    legal_name?: string | null;
    tax_id?: string | null;
    billing_email?: string | null;
    phone_e164?: string | null;
    logo_url?: string | null;
    status?: $Enums.merchant_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
    users: Prisma.usersCreateNestedOneWithoutMerchant_profilesInput;
    merchant_settlements?: Prisma.merchant_settlementsCreateNestedManyWithoutMerchant_profilesInput;
    stores?: Prisma.storesCreateNestedManyWithoutMerchant_profilesInput;
};
export type merchant_profilesUncheckedCreateWithoutMerchant_usersInput = {
    id?: string;
    owner_user_id: string;
    business_name: string;
    legal_name?: string | null;
    tax_id?: string | null;
    billing_email?: string | null;
    phone_e164?: string | null;
    logo_url?: string | null;
    status?: $Enums.merchant_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
    merchant_settlements?: Prisma.merchant_settlementsUncheckedCreateNestedManyWithoutMerchant_profilesInput;
    stores?: Prisma.storesUncheckedCreateNestedManyWithoutMerchant_profilesInput;
};
export type merchant_profilesCreateOrConnectWithoutMerchant_usersInput = {
    where: Prisma.merchant_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.merchant_profilesCreateWithoutMerchant_usersInput, Prisma.merchant_profilesUncheckedCreateWithoutMerchant_usersInput>;
};
export type merchant_profilesUpsertWithoutMerchant_usersInput = {
    update: Prisma.XOR<Prisma.merchant_profilesUpdateWithoutMerchant_usersInput, Prisma.merchant_profilesUncheckedUpdateWithoutMerchant_usersInput>;
    create: Prisma.XOR<Prisma.merchant_profilesCreateWithoutMerchant_usersInput, Prisma.merchant_profilesUncheckedCreateWithoutMerchant_usersInput>;
    where?: Prisma.merchant_profilesWhereInput;
};
export type merchant_profilesUpdateToOneWithWhereWithoutMerchant_usersInput = {
    where?: Prisma.merchant_profilesWhereInput;
    data: Prisma.XOR<Prisma.merchant_profilesUpdateWithoutMerchant_usersInput, Prisma.merchant_profilesUncheckedUpdateWithoutMerchant_usersInput>;
};
export type merchant_profilesUpdateWithoutMerchant_usersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    business_name?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    billing_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enummerchant_status_typeFieldUpdateOperationsInput | $Enums.merchant_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneRequiredWithoutMerchant_profilesNestedInput;
    merchant_settlements?: Prisma.merchant_settlementsUpdateManyWithoutMerchant_profilesNestedInput;
    stores?: Prisma.storesUpdateManyWithoutMerchant_profilesNestedInput;
};
export type merchant_profilesUncheckedUpdateWithoutMerchant_usersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    business_name?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    billing_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enummerchant_status_typeFieldUpdateOperationsInput | $Enums.merchant_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    merchant_settlements?: Prisma.merchant_settlementsUncheckedUpdateManyWithoutMerchant_profilesNestedInput;
    stores?: Prisma.storesUncheckedUpdateManyWithoutMerchant_profilesNestedInput;
};
export type merchant_profilesCreateWithoutStoresInput = {
    id?: string;
    business_name: string;
    legal_name?: string | null;
    tax_id?: string | null;
    billing_email?: string | null;
    phone_e164?: string | null;
    logo_url?: string | null;
    status?: $Enums.merchant_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
    users: Prisma.usersCreateNestedOneWithoutMerchant_profilesInput;
    merchant_settlements?: Prisma.merchant_settlementsCreateNestedManyWithoutMerchant_profilesInput;
    merchant_users?: Prisma.merchant_usersCreateNestedManyWithoutMerchant_profilesInput;
};
export type merchant_profilesUncheckedCreateWithoutStoresInput = {
    id?: string;
    owner_user_id: string;
    business_name: string;
    legal_name?: string | null;
    tax_id?: string | null;
    billing_email?: string | null;
    phone_e164?: string | null;
    logo_url?: string | null;
    status?: $Enums.merchant_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
    merchant_settlements?: Prisma.merchant_settlementsUncheckedCreateNestedManyWithoutMerchant_profilesInput;
    merchant_users?: Prisma.merchant_usersUncheckedCreateNestedManyWithoutMerchant_profilesInput;
};
export type merchant_profilesCreateOrConnectWithoutStoresInput = {
    where: Prisma.merchant_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.merchant_profilesCreateWithoutStoresInput, Prisma.merchant_profilesUncheckedCreateWithoutStoresInput>;
};
export type merchant_profilesUpsertWithoutStoresInput = {
    update: Prisma.XOR<Prisma.merchant_profilesUpdateWithoutStoresInput, Prisma.merchant_profilesUncheckedUpdateWithoutStoresInput>;
    create: Prisma.XOR<Prisma.merchant_profilesCreateWithoutStoresInput, Prisma.merchant_profilesUncheckedCreateWithoutStoresInput>;
    where?: Prisma.merchant_profilesWhereInput;
};
export type merchant_profilesUpdateToOneWithWhereWithoutStoresInput = {
    where?: Prisma.merchant_profilesWhereInput;
    data: Prisma.XOR<Prisma.merchant_profilesUpdateWithoutStoresInput, Prisma.merchant_profilesUncheckedUpdateWithoutStoresInput>;
};
export type merchant_profilesUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    business_name?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    billing_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enummerchant_status_typeFieldUpdateOperationsInput | $Enums.merchant_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneRequiredWithoutMerchant_profilesNestedInput;
    merchant_settlements?: Prisma.merchant_settlementsUpdateManyWithoutMerchant_profilesNestedInput;
    merchant_users?: Prisma.merchant_usersUpdateManyWithoutMerchant_profilesNestedInput;
};
export type merchant_profilesUncheckedUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    business_name?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    billing_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enummerchant_status_typeFieldUpdateOperationsInput | $Enums.merchant_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    merchant_settlements?: Prisma.merchant_settlementsUncheckedUpdateManyWithoutMerchant_profilesNestedInput;
    merchant_users?: Prisma.merchant_usersUncheckedUpdateManyWithoutMerchant_profilesNestedInput;
};
export type merchant_profilesCreateWithoutUsersInput = {
    id?: string;
    business_name: string;
    legal_name?: string | null;
    tax_id?: string | null;
    billing_email?: string | null;
    phone_e164?: string | null;
    logo_url?: string | null;
    status?: $Enums.merchant_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
    merchant_settlements?: Prisma.merchant_settlementsCreateNestedManyWithoutMerchant_profilesInput;
    merchant_users?: Prisma.merchant_usersCreateNestedManyWithoutMerchant_profilesInput;
    stores?: Prisma.storesCreateNestedManyWithoutMerchant_profilesInput;
};
export type merchant_profilesUncheckedCreateWithoutUsersInput = {
    id?: string;
    business_name: string;
    legal_name?: string | null;
    tax_id?: string | null;
    billing_email?: string | null;
    phone_e164?: string | null;
    logo_url?: string | null;
    status?: $Enums.merchant_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
    merchant_settlements?: Prisma.merchant_settlementsUncheckedCreateNestedManyWithoutMerchant_profilesInput;
    merchant_users?: Prisma.merchant_usersUncheckedCreateNestedManyWithoutMerchant_profilesInput;
    stores?: Prisma.storesUncheckedCreateNestedManyWithoutMerchant_profilesInput;
};
export type merchant_profilesCreateOrConnectWithoutUsersInput = {
    where: Prisma.merchant_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.merchant_profilesCreateWithoutUsersInput, Prisma.merchant_profilesUncheckedCreateWithoutUsersInput>;
};
export type merchant_profilesCreateManyUsersInputEnvelope = {
    data: Prisma.merchant_profilesCreateManyUsersInput | Prisma.merchant_profilesCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type merchant_profilesUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.merchant_profilesWhereUniqueInput;
    update: Prisma.XOR<Prisma.merchant_profilesUpdateWithoutUsersInput, Prisma.merchant_profilesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.merchant_profilesCreateWithoutUsersInput, Prisma.merchant_profilesUncheckedCreateWithoutUsersInput>;
};
export type merchant_profilesUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.merchant_profilesWhereUniqueInput;
    data: Prisma.XOR<Prisma.merchant_profilesUpdateWithoutUsersInput, Prisma.merchant_profilesUncheckedUpdateWithoutUsersInput>;
};
export type merchant_profilesUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.merchant_profilesScalarWhereInput;
    data: Prisma.XOR<Prisma.merchant_profilesUpdateManyMutationInput, Prisma.merchant_profilesUncheckedUpdateManyWithoutUsersInput>;
};
export type merchant_profilesScalarWhereInput = {
    AND?: Prisma.merchant_profilesScalarWhereInput | Prisma.merchant_profilesScalarWhereInput[];
    OR?: Prisma.merchant_profilesScalarWhereInput[];
    NOT?: Prisma.merchant_profilesScalarWhereInput | Prisma.merchant_profilesScalarWhereInput[];
    id?: Prisma.UuidFilter<"merchant_profiles"> | string;
    owner_user_id?: Prisma.UuidFilter<"merchant_profiles"> | string;
    business_name?: Prisma.StringFilter<"merchant_profiles"> | string;
    legal_name?: Prisma.StringNullableFilter<"merchant_profiles"> | string | null;
    tax_id?: Prisma.StringNullableFilter<"merchant_profiles"> | string | null;
    billing_email?: Prisma.StringNullableFilter<"merchant_profiles"> | string | null;
    phone_e164?: Prisma.StringNullableFilter<"merchant_profiles"> | string | null;
    logo_url?: Prisma.StringNullableFilter<"merchant_profiles"> | string | null;
    status?: Prisma.Enummerchant_status_typeFilter<"merchant_profiles"> | $Enums.merchant_status_type;
    created_at?: Prisma.DateTimeFilter<"merchant_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"merchant_profiles"> | Date | string;
};
export type merchant_profilesCreateManyUsersInput = {
    id?: string;
    business_name: string;
    legal_name?: string | null;
    tax_id?: string | null;
    billing_email?: string | null;
    phone_e164?: string | null;
    logo_url?: string | null;
    status?: $Enums.merchant_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type merchant_profilesUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    business_name?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    billing_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enummerchant_status_typeFieldUpdateOperationsInput | $Enums.merchant_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    merchant_settlements?: Prisma.merchant_settlementsUpdateManyWithoutMerchant_profilesNestedInput;
    merchant_users?: Prisma.merchant_usersUpdateManyWithoutMerchant_profilesNestedInput;
    stores?: Prisma.storesUpdateManyWithoutMerchant_profilesNestedInput;
};
export type merchant_profilesUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    business_name?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    billing_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enummerchant_status_typeFieldUpdateOperationsInput | $Enums.merchant_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    merchant_settlements?: Prisma.merchant_settlementsUncheckedUpdateManyWithoutMerchant_profilesNestedInput;
    merchant_users?: Prisma.merchant_usersUncheckedUpdateManyWithoutMerchant_profilesNestedInput;
    stores?: Prisma.storesUncheckedUpdateManyWithoutMerchant_profilesNestedInput;
};
export type merchant_profilesUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    business_name?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    billing_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone_e164?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enummerchant_status_typeFieldUpdateOperationsInput | $Enums.merchant_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Merchant_profilesCountOutputType = {
    merchant_settlements: number;
    merchant_users: number;
    stores: number;
};
export type Merchant_profilesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    merchant_settlements?: boolean | Merchant_profilesCountOutputTypeCountMerchant_settlementsArgs;
    merchant_users?: boolean | Merchant_profilesCountOutputTypeCountMerchant_usersArgs;
    stores?: boolean | Merchant_profilesCountOutputTypeCountStoresArgs;
};
export type Merchant_profilesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Merchant_profilesCountOutputTypeSelect<ExtArgs> | null;
};
export type Merchant_profilesCountOutputTypeCountMerchant_settlementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.merchant_settlementsWhereInput;
};
export type Merchant_profilesCountOutputTypeCountMerchant_usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.merchant_usersWhereInput;
};
export type Merchant_profilesCountOutputTypeCountStoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.storesWhereInput;
};
export type merchant_profilesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    owner_user_id?: boolean;
    business_name?: boolean;
    legal_name?: boolean;
    tax_id?: boolean;
    billing_email?: boolean;
    phone_e164?: boolean;
    logo_url?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    merchant_settlements?: boolean | Prisma.merchant_profiles$merchant_settlementsArgs<ExtArgs>;
    merchant_users?: boolean | Prisma.merchant_profiles$merchant_usersArgs<ExtArgs>;
    stores?: boolean | Prisma.merchant_profiles$storesArgs<ExtArgs>;
    _count?: boolean | Prisma.Merchant_profilesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["merchant_profiles"]>;
export type merchant_profilesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    owner_user_id?: boolean;
    business_name?: boolean;
    legal_name?: boolean;
    tax_id?: boolean;
    billing_email?: boolean;
    phone_e164?: boolean;
    logo_url?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["merchant_profiles"]>;
export type merchant_profilesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    owner_user_id?: boolean;
    business_name?: boolean;
    legal_name?: boolean;
    tax_id?: boolean;
    billing_email?: boolean;
    phone_e164?: boolean;
    logo_url?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["merchant_profiles"]>;
export type merchant_profilesSelectScalar = {
    id?: boolean;
    owner_user_id?: boolean;
    business_name?: boolean;
    legal_name?: boolean;
    tax_id?: boolean;
    billing_email?: boolean;
    phone_e164?: boolean;
    logo_url?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type merchant_profilesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "owner_user_id" | "business_name" | "legal_name" | "tax_id" | "billing_email" | "phone_e164" | "logo_url" | "status" | "created_at" | "updated_at", ExtArgs["result"]["merchant_profiles"]>;
export type merchant_profilesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    merchant_settlements?: boolean | Prisma.merchant_profiles$merchant_settlementsArgs<ExtArgs>;
    merchant_users?: boolean | Prisma.merchant_profiles$merchant_usersArgs<ExtArgs>;
    stores?: boolean | Prisma.merchant_profiles$storesArgs<ExtArgs>;
    _count?: boolean | Prisma.Merchant_profilesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type merchant_profilesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type merchant_profilesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $merchant_profilesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "merchant_profiles";
    objects: {
        users: Prisma.$usersPayload<ExtArgs>;
        merchant_settlements: Prisma.$merchant_settlementsPayload<ExtArgs>[];
        merchant_users: Prisma.$merchant_usersPayload<ExtArgs>[];
        stores: Prisma.$storesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        owner_user_id: string;
        business_name: string;
        legal_name: string | null;
        tax_id: string | null;
        billing_email: string | null;
        phone_e164: string | null;
        logo_url: string | null;
        status: $Enums.merchant_status_type;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["merchant_profiles"]>;
    composites: {};
};
export type merchant_profilesGetPayload<S extends boolean | null | undefined | merchant_profilesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$merchant_profilesPayload, S>;
export type merchant_profilesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<merchant_profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Merchant_profilesCountAggregateInputType | true;
};
export interface merchant_profilesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['merchant_profiles'];
        meta: {
            name: 'merchant_profiles';
        };
    };
    findUnique<T extends merchant_profilesFindUniqueArgs>(args: Prisma.SelectSubset<T, merchant_profilesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__merchant_profilesClient<runtime.Types.Result.GetResult<Prisma.$merchant_profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends merchant_profilesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, merchant_profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__merchant_profilesClient<runtime.Types.Result.GetResult<Prisma.$merchant_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends merchant_profilesFindFirstArgs>(args?: Prisma.SelectSubset<T, merchant_profilesFindFirstArgs<ExtArgs>>): Prisma.Prisma__merchant_profilesClient<runtime.Types.Result.GetResult<Prisma.$merchant_profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends merchant_profilesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, merchant_profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__merchant_profilesClient<runtime.Types.Result.GetResult<Prisma.$merchant_profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends merchant_profilesFindManyArgs>(args?: Prisma.SelectSubset<T, merchant_profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$merchant_profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends merchant_profilesCreateArgs>(args: Prisma.SelectSubset<T, merchant_profilesCreateArgs<ExtArgs>>): Prisma.Prisma__merchant_profilesClient<runtime.Types.Result.GetResult<Prisma.$merchant_profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends merchant_profilesCreateManyArgs>(args?: Prisma.SelectSubset<T, merchant_profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends merchant_profilesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, merchant_profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$merchant_profilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends merchant_profilesDeleteArgs>(args: Prisma.SelectSubset<T, merchant_profilesDeleteArgs<ExtArgs>>): Prisma.Prisma__merchant_profilesClient<runtime.Types.Result.GetResult<Prisma.$merchant_profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends merchant_profilesUpdateArgs>(args: Prisma.SelectSubset<T, merchant_profilesUpdateArgs<ExtArgs>>): Prisma.Prisma__merchant_profilesClient<runtime.Types.Result.GetResult<Prisma.$merchant_profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends merchant_profilesDeleteManyArgs>(args?: Prisma.SelectSubset<T, merchant_profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends merchant_profilesUpdateManyArgs>(args: Prisma.SelectSubset<T, merchant_profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends merchant_profilesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, merchant_profilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$merchant_profilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends merchant_profilesUpsertArgs>(args: Prisma.SelectSubset<T, merchant_profilesUpsertArgs<ExtArgs>>): Prisma.Prisma__merchant_profilesClient<runtime.Types.Result.GetResult<Prisma.$merchant_profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends merchant_profilesCountArgs>(args?: Prisma.Subset<T, merchant_profilesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Merchant_profilesCountAggregateOutputType> : number>;
    aggregate<T extends Merchant_profilesAggregateArgs>(args: Prisma.Subset<T, Merchant_profilesAggregateArgs>): Prisma.PrismaPromise<GetMerchant_profilesAggregateType<T>>;
    groupBy<T extends merchant_profilesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: merchant_profilesGroupByArgs['orderBy'];
    } : {
        orderBy?: merchant_profilesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, merchant_profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchant_profilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: merchant_profilesFieldRefs;
}
export interface Prisma__merchant_profilesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    merchant_settlements<T extends Prisma.merchant_profiles$merchant_settlementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.merchant_profiles$merchant_settlementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$merchant_settlementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    merchant_users<T extends Prisma.merchant_profiles$merchant_usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.merchant_profiles$merchant_usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$merchant_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    stores<T extends Prisma.merchant_profiles$storesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.merchant_profiles$storesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface merchant_profilesFieldRefs {
    readonly id: Prisma.FieldRef<"merchant_profiles", 'String'>;
    readonly owner_user_id: Prisma.FieldRef<"merchant_profiles", 'String'>;
    readonly business_name: Prisma.FieldRef<"merchant_profiles", 'String'>;
    readonly legal_name: Prisma.FieldRef<"merchant_profiles", 'String'>;
    readonly tax_id: Prisma.FieldRef<"merchant_profiles", 'String'>;
    readonly billing_email: Prisma.FieldRef<"merchant_profiles", 'String'>;
    readonly phone_e164: Prisma.FieldRef<"merchant_profiles", 'String'>;
    readonly logo_url: Prisma.FieldRef<"merchant_profiles", 'String'>;
    readonly status: Prisma.FieldRef<"merchant_profiles", 'merchant_status_type'>;
    readonly created_at: Prisma.FieldRef<"merchant_profiles", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"merchant_profiles", 'DateTime'>;
}
export type merchant_profilesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_profilesSelect<ExtArgs> | null;
    omit?: Prisma.merchant_profilesOmit<ExtArgs> | null;
    include?: Prisma.merchant_profilesInclude<ExtArgs> | null;
    where: Prisma.merchant_profilesWhereUniqueInput;
};
export type merchant_profilesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_profilesSelect<ExtArgs> | null;
    omit?: Prisma.merchant_profilesOmit<ExtArgs> | null;
    include?: Prisma.merchant_profilesInclude<ExtArgs> | null;
    where: Prisma.merchant_profilesWhereUniqueInput;
};
export type merchant_profilesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_profilesSelect<ExtArgs> | null;
    omit?: Prisma.merchant_profilesOmit<ExtArgs> | null;
    include?: Prisma.merchant_profilesInclude<ExtArgs> | null;
    where?: Prisma.merchant_profilesWhereInput;
    orderBy?: Prisma.merchant_profilesOrderByWithRelationInput | Prisma.merchant_profilesOrderByWithRelationInput[];
    cursor?: Prisma.merchant_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Merchant_profilesScalarFieldEnum | Prisma.Merchant_profilesScalarFieldEnum[];
};
export type merchant_profilesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_profilesSelect<ExtArgs> | null;
    omit?: Prisma.merchant_profilesOmit<ExtArgs> | null;
    include?: Prisma.merchant_profilesInclude<ExtArgs> | null;
    where?: Prisma.merchant_profilesWhereInput;
    orderBy?: Prisma.merchant_profilesOrderByWithRelationInput | Prisma.merchant_profilesOrderByWithRelationInput[];
    cursor?: Prisma.merchant_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Merchant_profilesScalarFieldEnum | Prisma.Merchant_profilesScalarFieldEnum[];
};
export type merchant_profilesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_profilesSelect<ExtArgs> | null;
    omit?: Prisma.merchant_profilesOmit<ExtArgs> | null;
    include?: Prisma.merchant_profilesInclude<ExtArgs> | null;
    where?: Prisma.merchant_profilesWhereInput;
    orderBy?: Prisma.merchant_profilesOrderByWithRelationInput | Prisma.merchant_profilesOrderByWithRelationInput[];
    cursor?: Prisma.merchant_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Merchant_profilesScalarFieldEnum | Prisma.Merchant_profilesScalarFieldEnum[];
};
export type merchant_profilesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_profilesSelect<ExtArgs> | null;
    omit?: Prisma.merchant_profilesOmit<ExtArgs> | null;
    include?: Prisma.merchant_profilesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.merchant_profilesCreateInput, Prisma.merchant_profilesUncheckedCreateInput>;
};
export type merchant_profilesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.merchant_profilesCreateManyInput | Prisma.merchant_profilesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type merchant_profilesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_profilesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.merchant_profilesOmit<ExtArgs> | null;
    data: Prisma.merchant_profilesCreateManyInput | Prisma.merchant_profilesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.merchant_profilesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type merchant_profilesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_profilesSelect<ExtArgs> | null;
    omit?: Prisma.merchant_profilesOmit<ExtArgs> | null;
    include?: Prisma.merchant_profilesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.merchant_profilesUpdateInput, Prisma.merchant_profilesUncheckedUpdateInput>;
    where: Prisma.merchant_profilesWhereUniqueInput;
};
export type merchant_profilesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.merchant_profilesUpdateManyMutationInput, Prisma.merchant_profilesUncheckedUpdateManyInput>;
    where?: Prisma.merchant_profilesWhereInput;
    limit?: number;
};
export type merchant_profilesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_profilesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.merchant_profilesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.merchant_profilesUpdateManyMutationInput, Prisma.merchant_profilesUncheckedUpdateManyInput>;
    where?: Prisma.merchant_profilesWhereInput;
    limit?: number;
    include?: Prisma.merchant_profilesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type merchant_profilesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_profilesSelect<ExtArgs> | null;
    omit?: Prisma.merchant_profilesOmit<ExtArgs> | null;
    include?: Prisma.merchant_profilesInclude<ExtArgs> | null;
    where: Prisma.merchant_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.merchant_profilesCreateInput, Prisma.merchant_profilesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.merchant_profilesUpdateInput, Prisma.merchant_profilesUncheckedUpdateInput>;
};
export type merchant_profilesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_profilesSelect<ExtArgs> | null;
    omit?: Prisma.merchant_profilesOmit<ExtArgs> | null;
    include?: Prisma.merchant_profilesInclude<ExtArgs> | null;
    where: Prisma.merchant_profilesWhereUniqueInput;
};
export type merchant_profilesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.merchant_profilesWhereInput;
    limit?: number;
};
export type merchant_profiles$merchant_settlementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type merchant_profiles$merchant_usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_usersSelect<ExtArgs> | null;
    omit?: Prisma.merchant_usersOmit<ExtArgs> | null;
    include?: Prisma.merchant_usersInclude<ExtArgs> | null;
    where?: Prisma.merchant_usersWhereInput;
    orderBy?: Prisma.merchant_usersOrderByWithRelationInput | Prisma.merchant_usersOrderByWithRelationInput[];
    cursor?: Prisma.merchant_usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Merchant_usersScalarFieldEnum | Prisma.Merchant_usersScalarFieldEnum[];
};
export type merchant_profiles$storesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type merchant_profilesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_profilesSelect<ExtArgs> | null;
    omit?: Prisma.merchant_profilesOmit<ExtArgs> | null;
    include?: Prisma.merchant_profilesInclude<ExtArgs> | null;
};
export {};
