import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type merchant_usersModel = runtime.Types.Result.DefaultSelection<Prisma.$merchant_usersPayload>;
export type AggregateMerchant_users = {
    _count: Merchant_usersCountAggregateOutputType | null;
    _min: Merchant_usersMinAggregateOutputType | null;
    _max: Merchant_usersMaxAggregateOutputType | null;
};
export type Merchant_usersMinAggregateOutputType = {
    id: string | null;
    merchant_id: string | null;
    user_id: string | null;
    role_code: $Enums.merchant_user_role_type | null;
    status: string | null;
    created_at: Date | null;
};
export type Merchant_usersMaxAggregateOutputType = {
    id: string | null;
    merchant_id: string | null;
    user_id: string | null;
    role_code: $Enums.merchant_user_role_type | null;
    status: string | null;
    created_at: Date | null;
};
export type Merchant_usersCountAggregateOutputType = {
    id: number;
    merchant_id: number;
    user_id: number;
    role_code: number;
    status: number;
    created_at: number;
    _all: number;
};
export type Merchant_usersMinAggregateInputType = {
    id?: true;
    merchant_id?: true;
    user_id?: true;
    role_code?: true;
    status?: true;
    created_at?: true;
};
export type Merchant_usersMaxAggregateInputType = {
    id?: true;
    merchant_id?: true;
    user_id?: true;
    role_code?: true;
    status?: true;
    created_at?: true;
};
export type Merchant_usersCountAggregateInputType = {
    id?: true;
    merchant_id?: true;
    user_id?: true;
    role_code?: true;
    status?: true;
    created_at?: true;
    _all?: true;
};
export type Merchant_usersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.merchant_usersWhereInput;
    orderBy?: Prisma.merchant_usersOrderByWithRelationInput | Prisma.merchant_usersOrderByWithRelationInput[];
    cursor?: Prisma.merchant_usersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Merchant_usersCountAggregateInputType;
    _min?: Merchant_usersMinAggregateInputType;
    _max?: Merchant_usersMaxAggregateInputType;
};
export type GetMerchant_usersAggregateType<T extends Merchant_usersAggregateArgs> = {
    [P in keyof T & keyof AggregateMerchant_users]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMerchant_users[P]> : Prisma.GetScalarType<T[P], AggregateMerchant_users[P]>;
};
export type merchant_usersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.merchant_usersWhereInput;
    orderBy?: Prisma.merchant_usersOrderByWithAggregationInput | Prisma.merchant_usersOrderByWithAggregationInput[];
    by: Prisma.Merchant_usersScalarFieldEnum[] | Prisma.Merchant_usersScalarFieldEnum;
    having?: Prisma.merchant_usersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Merchant_usersCountAggregateInputType | true;
    _min?: Merchant_usersMinAggregateInputType;
    _max?: Merchant_usersMaxAggregateInputType;
};
export type Merchant_usersGroupByOutputType = {
    id: string;
    merchant_id: string;
    user_id: string;
    role_code: $Enums.merchant_user_role_type;
    status: string;
    created_at: Date;
    _count: Merchant_usersCountAggregateOutputType | null;
    _min: Merchant_usersMinAggregateOutputType | null;
    _max: Merchant_usersMaxAggregateOutputType | null;
};
type GetMerchant_usersGroupByPayload<T extends merchant_usersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Merchant_usersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Merchant_usersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Merchant_usersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Merchant_usersGroupByOutputType[P]>;
}>>;
export type merchant_usersWhereInput = {
    AND?: Prisma.merchant_usersWhereInput | Prisma.merchant_usersWhereInput[];
    OR?: Prisma.merchant_usersWhereInput[];
    NOT?: Prisma.merchant_usersWhereInput | Prisma.merchant_usersWhereInput[];
    id?: Prisma.UuidFilter<"merchant_users"> | string;
    merchant_id?: Prisma.UuidFilter<"merchant_users"> | string;
    user_id?: Prisma.UuidFilter<"merchant_users"> | string;
    role_code?: Prisma.Enummerchant_user_role_typeFilter<"merchant_users"> | $Enums.merchant_user_role_type;
    status?: Prisma.StringFilter<"merchant_users"> | string;
    created_at?: Prisma.DateTimeFilter<"merchant_users"> | Date | string;
    merchant_profiles?: Prisma.XOR<Prisma.Merchant_profilesScalarRelationFilter, Prisma.merchant_profilesWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type merchant_usersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    merchant_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    role_code?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    merchant_profiles?: Prisma.merchant_profilesOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type merchant_usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    merchant_id_user_id?: Prisma.merchant_usersMerchant_idUser_idCompoundUniqueInput;
    AND?: Prisma.merchant_usersWhereInput | Prisma.merchant_usersWhereInput[];
    OR?: Prisma.merchant_usersWhereInput[];
    NOT?: Prisma.merchant_usersWhereInput | Prisma.merchant_usersWhereInput[];
    merchant_id?: Prisma.UuidFilter<"merchant_users"> | string;
    user_id?: Prisma.UuidFilter<"merchant_users"> | string;
    role_code?: Prisma.Enummerchant_user_role_typeFilter<"merchant_users"> | $Enums.merchant_user_role_type;
    status?: Prisma.StringFilter<"merchant_users"> | string;
    created_at?: Prisma.DateTimeFilter<"merchant_users"> | Date | string;
    merchant_profiles?: Prisma.XOR<Prisma.Merchant_profilesScalarRelationFilter, Prisma.merchant_profilesWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "merchant_id_user_id">;
export type merchant_usersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    merchant_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    role_code?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.merchant_usersCountOrderByAggregateInput;
    _max?: Prisma.merchant_usersMaxOrderByAggregateInput;
    _min?: Prisma.merchant_usersMinOrderByAggregateInput;
};
export type merchant_usersScalarWhereWithAggregatesInput = {
    AND?: Prisma.merchant_usersScalarWhereWithAggregatesInput | Prisma.merchant_usersScalarWhereWithAggregatesInput[];
    OR?: Prisma.merchant_usersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.merchant_usersScalarWhereWithAggregatesInput | Prisma.merchant_usersScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"merchant_users"> | string;
    merchant_id?: Prisma.UuidWithAggregatesFilter<"merchant_users"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"merchant_users"> | string;
    role_code?: Prisma.Enummerchant_user_role_typeWithAggregatesFilter<"merchant_users"> | $Enums.merchant_user_role_type;
    status?: Prisma.StringWithAggregatesFilter<"merchant_users"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"merchant_users"> | Date | string;
};
export type merchant_usersCreateInput = {
    id?: string;
    role_code: $Enums.merchant_user_role_type;
    status?: string;
    created_at?: Date | string;
    merchant_profiles: Prisma.merchant_profilesCreateNestedOneWithoutMerchant_usersInput;
    users: Prisma.usersCreateNestedOneWithoutMerchant_usersInput;
};
export type merchant_usersUncheckedCreateInput = {
    id?: string;
    merchant_id: string;
    user_id: string;
    role_code: $Enums.merchant_user_role_type;
    status?: string;
    created_at?: Date | string;
};
export type merchant_usersUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role_code?: Prisma.Enummerchant_user_role_typeFieldUpdateOperationsInput | $Enums.merchant_user_role_type;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    merchant_profiles?: Prisma.merchant_profilesUpdateOneRequiredWithoutMerchant_usersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutMerchant_usersNestedInput;
};
export type merchant_usersUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    merchant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role_code?: Prisma.Enummerchant_user_role_typeFieldUpdateOperationsInput | $Enums.merchant_user_role_type;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type merchant_usersCreateManyInput = {
    id?: string;
    merchant_id: string;
    user_id: string;
    role_code: $Enums.merchant_user_role_type;
    status?: string;
    created_at?: Date | string;
};
export type merchant_usersUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role_code?: Prisma.Enummerchant_user_role_typeFieldUpdateOperationsInput | $Enums.merchant_user_role_type;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type merchant_usersUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    merchant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role_code?: Prisma.Enummerchant_user_role_typeFieldUpdateOperationsInput | $Enums.merchant_user_role_type;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Merchant_usersListRelationFilter = {
    every?: Prisma.merchant_usersWhereInput;
    some?: Prisma.merchant_usersWhereInput;
    none?: Prisma.merchant_usersWhereInput;
};
export type merchant_usersOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type merchant_usersMerchant_idUser_idCompoundUniqueInput = {
    merchant_id: string;
    user_id: string;
};
export type merchant_usersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    merchant_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    role_code?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type merchant_usersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    merchant_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    role_code?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type merchant_usersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    merchant_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    role_code?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type merchant_usersCreateNestedManyWithoutMerchant_profilesInput = {
    create?: Prisma.XOR<Prisma.merchant_usersCreateWithoutMerchant_profilesInput, Prisma.merchant_usersUncheckedCreateWithoutMerchant_profilesInput> | Prisma.merchant_usersCreateWithoutMerchant_profilesInput[] | Prisma.merchant_usersUncheckedCreateWithoutMerchant_profilesInput[];
    connectOrCreate?: Prisma.merchant_usersCreateOrConnectWithoutMerchant_profilesInput | Prisma.merchant_usersCreateOrConnectWithoutMerchant_profilesInput[];
    createMany?: Prisma.merchant_usersCreateManyMerchant_profilesInputEnvelope;
    connect?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
};
export type merchant_usersUncheckedCreateNestedManyWithoutMerchant_profilesInput = {
    create?: Prisma.XOR<Prisma.merchant_usersCreateWithoutMerchant_profilesInput, Prisma.merchant_usersUncheckedCreateWithoutMerchant_profilesInput> | Prisma.merchant_usersCreateWithoutMerchant_profilesInput[] | Prisma.merchant_usersUncheckedCreateWithoutMerchant_profilesInput[];
    connectOrCreate?: Prisma.merchant_usersCreateOrConnectWithoutMerchant_profilesInput | Prisma.merchant_usersCreateOrConnectWithoutMerchant_profilesInput[];
    createMany?: Prisma.merchant_usersCreateManyMerchant_profilesInputEnvelope;
    connect?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
};
export type merchant_usersUpdateManyWithoutMerchant_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.merchant_usersCreateWithoutMerchant_profilesInput, Prisma.merchant_usersUncheckedCreateWithoutMerchant_profilesInput> | Prisma.merchant_usersCreateWithoutMerchant_profilesInput[] | Prisma.merchant_usersUncheckedCreateWithoutMerchant_profilesInput[];
    connectOrCreate?: Prisma.merchant_usersCreateOrConnectWithoutMerchant_profilesInput | Prisma.merchant_usersCreateOrConnectWithoutMerchant_profilesInput[];
    upsert?: Prisma.merchant_usersUpsertWithWhereUniqueWithoutMerchant_profilesInput | Prisma.merchant_usersUpsertWithWhereUniqueWithoutMerchant_profilesInput[];
    createMany?: Prisma.merchant_usersCreateManyMerchant_profilesInputEnvelope;
    set?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
    disconnect?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
    delete?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
    connect?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
    update?: Prisma.merchant_usersUpdateWithWhereUniqueWithoutMerchant_profilesInput | Prisma.merchant_usersUpdateWithWhereUniqueWithoutMerchant_profilesInput[];
    updateMany?: Prisma.merchant_usersUpdateManyWithWhereWithoutMerchant_profilesInput | Prisma.merchant_usersUpdateManyWithWhereWithoutMerchant_profilesInput[];
    deleteMany?: Prisma.merchant_usersScalarWhereInput | Prisma.merchant_usersScalarWhereInput[];
};
export type merchant_usersUncheckedUpdateManyWithoutMerchant_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.merchant_usersCreateWithoutMerchant_profilesInput, Prisma.merchant_usersUncheckedCreateWithoutMerchant_profilesInput> | Prisma.merchant_usersCreateWithoutMerchant_profilesInput[] | Prisma.merchant_usersUncheckedCreateWithoutMerchant_profilesInput[];
    connectOrCreate?: Prisma.merchant_usersCreateOrConnectWithoutMerchant_profilesInput | Prisma.merchant_usersCreateOrConnectWithoutMerchant_profilesInput[];
    upsert?: Prisma.merchant_usersUpsertWithWhereUniqueWithoutMerchant_profilesInput | Prisma.merchant_usersUpsertWithWhereUniqueWithoutMerchant_profilesInput[];
    createMany?: Prisma.merchant_usersCreateManyMerchant_profilesInputEnvelope;
    set?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
    disconnect?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
    delete?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
    connect?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
    update?: Prisma.merchant_usersUpdateWithWhereUniqueWithoutMerchant_profilesInput | Prisma.merchant_usersUpdateWithWhereUniqueWithoutMerchant_profilesInput[];
    updateMany?: Prisma.merchant_usersUpdateManyWithWhereWithoutMerchant_profilesInput | Prisma.merchant_usersUpdateManyWithWhereWithoutMerchant_profilesInput[];
    deleteMany?: Prisma.merchant_usersScalarWhereInput | Prisma.merchant_usersScalarWhereInput[];
};
export type Enummerchant_user_role_typeFieldUpdateOperationsInput = {
    set?: $Enums.merchant_user_role_type;
};
export type merchant_usersCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.merchant_usersCreateWithoutUsersInput, Prisma.merchant_usersUncheckedCreateWithoutUsersInput> | Prisma.merchant_usersCreateWithoutUsersInput[] | Prisma.merchant_usersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.merchant_usersCreateOrConnectWithoutUsersInput | Prisma.merchant_usersCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.merchant_usersCreateManyUsersInputEnvelope;
    connect?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
};
export type merchant_usersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.merchant_usersCreateWithoutUsersInput, Prisma.merchant_usersUncheckedCreateWithoutUsersInput> | Prisma.merchant_usersCreateWithoutUsersInput[] | Prisma.merchant_usersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.merchant_usersCreateOrConnectWithoutUsersInput | Prisma.merchant_usersCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.merchant_usersCreateManyUsersInputEnvelope;
    connect?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
};
export type merchant_usersUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.merchant_usersCreateWithoutUsersInput, Prisma.merchant_usersUncheckedCreateWithoutUsersInput> | Prisma.merchant_usersCreateWithoutUsersInput[] | Prisma.merchant_usersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.merchant_usersCreateOrConnectWithoutUsersInput | Prisma.merchant_usersCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.merchant_usersUpsertWithWhereUniqueWithoutUsersInput | Prisma.merchant_usersUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.merchant_usersCreateManyUsersInputEnvelope;
    set?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
    disconnect?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
    delete?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
    connect?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
    update?: Prisma.merchant_usersUpdateWithWhereUniqueWithoutUsersInput | Prisma.merchant_usersUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.merchant_usersUpdateManyWithWhereWithoutUsersInput | Prisma.merchant_usersUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.merchant_usersScalarWhereInput | Prisma.merchant_usersScalarWhereInput[];
};
export type merchant_usersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.merchant_usersCreateWithoutUsersInput, Prisma.merchant_usersUncheckedCreateWithoutUsersInput> | Prisma.merchant_usersCreateWithoutUsersInput[] | Prisma.merchant_usersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.merchant_usersCreateOrConnectWithoutUsersInput | Prisma.merchant_usersCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.merchant_usersUpsertWithWhereUniqueWithoutUsersInput | Prisma.merchant_usersUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.merchant_usersCreateManyUsersInputEnvelope;
    set?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
    disconnect?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
    delete?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
    connect?: Prisma.merchant_usersWhereUniqueInput | Prisma.merchant_usersWhereUniqueInput[];
    update?: Prisma.merchant_usersUpdateWithWhereUniqueWithoutUsersInput | Prisma.merchant_usersUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.merchant_usersUpdateManyWithWhereWithoutUsersInput | Prisma.merchant_usersUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.merchant_usersScalarWhereInput | Prisma.merchant_usersScalarWhereInput[];
};
export type merchant_usersCreateWithoutMerchant_profilesInput = {
    id?: string;
    role_code: $Enums.merchant_user_role_type;
    status?: string;
    created_at?: Date | string;
    users: Prisma.usersCreateNestedOneWithoutMerchant_usersInput;
};
export type merchant_usersUncheckedCreateWithoutMerchant_profilesInput = {
    id?: string;
    user_id: string;
    role_code: $Enums.merchant_user_role_type;
    status?: string;
    created_at?: Date | string;
};
export type merchant_usersCreateOrConnectWithoutMerchant_profilesInput = {
    where: Prisma.merchant_usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.merchant_usersCreateWithoutMerchant_profilesInput, Prisma.merchant_usersUncheckedCreateWithoutMerchant_profilesInput>;
};
export type merchant_usersCreateManyMerchant_profilesInputEnvelope = {
    data: Prisma.merchant_usersCreateManyMerchant_profilesInput | Prisma.merchant_usersCreateManyMerchant_profilesInput[];
    skipDuplicates?: boolean;
};
export type merchant_usersUpsertWithWhereUniqueWithoutMerchant_profilesInput = {
    where: Prisma.merchant_usersWhereUniqueInput;
    update: Prisma.XOR<Prisma.merchant_usersUpdateWithoutMerchant_profilesInput, Prisma.merchant_usersUncheckedUpdateWithoutMerchant_profilesInput>;
    create: Prisma.XOR<Prisma.merchant_usersCreateWithoutMerchant_profilesInput, Prisma.merchant_usersUncheckedCreateWithoutMerchant_profilesInput>;
};
export type merchant_usersUpdateWithWhereUniqueWithoutMerchant_profilesInput = {
    where: Prisma.merchant_usersWhereUniqueInput;
    data: Prisma.XOR<Prisma.merchant_usersUpdateWithoutMerchant_profilesInput, Prisma.merchant_usersUncheckedUpdateWithoutMerchant_profilesInput>;
};
export type merchant_usersUpdateManyWithWhereWithoutMerchant_profilesInput = {
    where: Prisma.merchant_usersScalarWhereInput;
    data: Prisma.XOR<Prisma.merchant_usersUpdateManyMutationInput, Prisma.merchant_usersUncheckedUpdateManyWithoutMerchant_profilesInput>;
};
export type merchant_usersScalarWhereInput = {
    AND?: Prisma.merchant_usersScalarWhereInput | Prisma.merchant_usersScalarWhereInput[];
    OR?: Prisma.merchant_usersScalarWhereInput[];
    NOT?: Prisma.merchant_usersScalarWhereInput | Prisma.merchant_usersScalarWhereInput[];
    id?: Prisma.UuidFilter<"merchant_users"> | string;
    merchant_id?: Prisma.UuidFilter<"merchant_users"> | string;
    user_id?: Prisma.UuidFilter<"merchant_users"> | string;
    role_code?: Prisma.Enummerchant_user_role_typeFilter<"merchant_users"> | $Enums.merchant_user_role_type;
    status?: Prisma.StringFilter<"merchant_users"> | string;
    created_at?: Prisma.DateTimeFilter<"merchant_users"> | Date | string;
};
export type merchant_usersCreateWithoutUsersInput = {
    id?: string;
    role_code: $Enums.merchant_user_role_type;
    status?: string;
    created_at?: Date | string;
    merchant_profiles: Prisma.merchant_profilesCreateNestedOneWithoutMerchant_usersInput;
};
export type merchant_usersUncheckedCreateWithoutUsersInput = {
    id?: string;
    merchant_id: string;
    role_code: $Enums.merchant_user_role_type;
    status?: string;
    created_at?: Date | string;
};
export type merchant_usersCreateOrConnectWithoutUsersInput = {
    where: Prisma.merchant_usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.merchant_usersCreateWithoutUsersInput, Prisma.merchant_usersUncheckedCreateWithoutUsersInput>;
};
export type merchant_usersCreateManyUsersInputEnvelope = {
    data: Prisma.merchant_usersCreateManyUsersInput | Prisma.merchant_usersCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type merchant_usersUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.merchant_usersWhereUniqueInput;
    update: Prisma.XOR<Prisma.merchant_usersUpdateWithoutUsersInput, Prisma.merchant_usersUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.merchant_usersCreateWithoutUsersInput, Prisma.merchant_usersUncheckedCreateWithoutUsersInput>;
};
export type merchant_usersUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.merchant_usersWhereUniqueInput;
    data: Prisma.XOR<Prisma.merchant_usersUpdateWithoutUsersInput, Prisma.merchant_usersUncheckedUpdateWithoutUsersInput>;
};
export type merchant_usersUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.merchant_usersScalarWhereInput;
    data: Prisma.XOR<Prisma.merchant_usersUpdateManyMutationInput, Prisma.merchant_usersUncheckedUpdateManyWithoutUsersInput>;
};
export type merchant_usersCreateManyMerchant_profilesInput = {
    id?: string;
    user_id: string;
    role_code: $Enums.merchant_user_role_type;
    status?: string;
    created_at?: Date | string;
};
export type merchant_usersUpdateWithoutMerchant_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role_code?: Prisma.Enummerchant_user_role_typeFieldUpdateOperationsInput | $Enums.merchant_user_role_type;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneRequiredWithoutMerchant_usersNestedInput;
};
export type merchant_usersUncheckedUpdateWithoutMerchant_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role_code?: Prisma.Enummerchant_user_role_typeFieldUpdateOperationsInput | $Enums.merchant_user_role_type;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type merchant_usersUncheckedUpdateManyWithoutMerchant_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role_code?: Prisma.Enummerchant_user_role_typeFieldUpdateOperationsInput | $Enums.merchant_user_role_type;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type merchant_usersCreateManyUsersInput = {
    id?: string;
    merchant_id: string;
    role_code: $Enums.merchant_user_role_type;
    status?: string;
    created_at?: Date | string;
};
export type merchant_usersUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role_code?: Prisma.Enummerchant_user_role_typeFieldUpdateOperationsInput | $Enums.merchant_user_role_type;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    merchant_profiles?: Prisma.merchant_profilesUpdateOneRequiredWithoutMerchant_usersNestedInput;
};
export type merchant_usersUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    merchant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role_code?: Prisma.Enummerchant_user_role_typeFieldUpdateOperationsInput | $Enums.merchant_user_role_type;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type merchant_usersUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    merchant_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role_code?: Prisma.Enummerchant_user_role_typeFieldUpdateOperationsInput | $Enums.merchant_user_role_type;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type merchant_usersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    merchant_id?: boolean;
    user_id?: boolean;
    role_code?: boolean;
    status?: boolean;
    created_at?: boolean;
    merchant_profiles?: boolean | Prisma.merchant_profilesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["merchant_users"]>;
export type merchant_usersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    merchant_id?: boolean;
    user_id?: boolean;
    role_code?: boolean;
    status?: boolean;
    created_at?: boolean;
    merchant_profiles?: boolean | Prisma.merchant_profilesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["merchant_users"]>;
export type merchant_usersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    merchant_id?: boolean;
    user_id?: boolean;
    role_code?: boolean;
    status?: boolean;
    created_at?: boolean;
    merchant_profiles?: boolean | Prisma.merchant_profilesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["merchant_users"]>;
export type merchant_usersSelectScalar = {
    id?: boolean;
    merchant_id?: boolean;
    user_id?: boolean;
    role_code?: boolean;
    status?: boolean;
    created_at?: boolean;
};
export type merchant_usersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "merchant_id" | "user_id" | "role_code" | "status" | "created_at", ExtArgs["result"]["merchant_users"]>;
export type merchant_usersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    merchant_profiles?: boolean | Prisma.merchant_profilesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type merchant_usersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    merchant_profiles?: boolean | Prisma.merchant_profilesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type merchant_usersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    merchant_profiles?: boolean | Prisma.merchant_profilesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $merchant_usersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "merchant_users";
    objects: {
        merchant_profiles: Prisma.$merchant_profilesPayload<ExtArgs>;
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        merchant_id: string;
        user_id: string;
        role_code: $Enums.merchant_user_role_type;
        status: string;
        created_at: Date;
    }, ExtArgs["result"]["merchant_users"]>;
    composites: {};
};
export type merchant_usersGetPayload<S extends boolean | null | undefined | merchant_usersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$merchant_usersPayload, S>;
export type merchant_usersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<merchant_usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Merchant_usersCountAggregateInputType | true;
};
export interface merchant_usersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['merchant_users'];
        meta: {
            name: 'merchant_users';
        };
    };
    findUnique<T extends merchant_usersFindUniqueArgs>(args: Prisma.SelectSubset<T, merchant_usersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__merchant_usersClient<runtime.Types.Result.GetResult<Prisma.$merchant_usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends merchant_usersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, merchant_usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__merchant_usersClient<runtime.Types.Result.GetResult<Prisma.$merchant_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends merchant_usersFindFirstArgs>(args?: Prisma.SelectSubset<T, merchant_usersFindFirstArgs<ExtArgs>>): Prisma.Prisma__merchant_usersClient<runtime.Types.Result.GetResult<Prisma.$merchant_usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends merchant_usersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, merchant_usersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__merchant_usersClient<runtime.Types.Result.GetResult<Prisma.$merchant_usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends merchant_usersFindManyArgs>(args?: Prisma.SelectSubset<T, merchant_usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$merchant_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends merchant_usersCreateArgs>(args: Prisma.SelectSubset<T, merchant_usersCreateArgs<ExtArgs>>): Prisma.Prisma__merchant_usersClient<runtime.Types.Result.GetResult<Prisma.$merchant_usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends merchant_usersCreateManyArgs>(args?: Prisma.SelectSubset<T, merchant_usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends merchant_usersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, merchant_usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$merchant_usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends merchant_usersDeleteArgs>(args: Prisma.SelectSubset<T, merchant_usersDeleteArgs<ExtArgs>>): Prisma.Prisma__merchant_usersClient<runtime.Types.Result.GetResult<Prisma.$merchant_usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends merchant_usersUpdateArgs>(args: Prisma.SelectSubset<T, merchant_usersUpdateArgs<ExtArgs>>): Prisma.Prisma__merchant_usersClient<runtime.Types.Result.GetResult<Prisma.$merchant_usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends merchant_usersDeleteManyArgs>(args?: Prisma.SelectSubset<T, merchant_usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends merchant_usersUpdateManyArgs>(args: Prisma.SelectSubset<T, merchant_usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends merchant_usersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, merchant_usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$merchant_usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends merchant_usersUpsertArgs>(args: Prisma.SelectSubset<T, merchant_usersUpsertArgs<ExtArgs>>): Prisma.Prisma__merchant_usersClient<runtime.Types.Result.GetResult<Prisma.$merchant_usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends merchant_usersCountArgs>(args?: Prisma.Subset<T, merchant_usersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Merchant_usersCountAggregateOutputType> : number>;
    aggregate<T extends Merchant_usersAggregateArgs>(args: Prisma.Subset<T, Merchant_usersAggregateArgs>): Prisma.PrismaPromise<GetMerchant_usersAggregateType<T>>;
    groupBy<T extends merchant_usersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: merchant_usersGroupByArgs['orderBy'];
    } : {
        orderBy?: merchant_usersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, merchant_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchant_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: merchant_usersFieldRefs;
}
export interface Prisma__merchant_usersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    merchant_profiles<T extends Prisma.merchant_profilesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.merchant_profilesDefaultArgs<ExtArgs>>): Prisma.Prisma__merchant_profilesClient<runtime.Types.Result.GetResult<Prisma.$merchant_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface merchant_usersFieldRefs {
    readonly id: Prisma.FieldRef<"merchant_users", 'String'>;
    readonly merchant_id: Prisma.FieldRef<"merchant_users", 'String'>;
    readonly user_id: Prisma.FieldRef<"merchant_users", 'String'>;
    readonly role_code: Prisma.FieldRef<"merchant_users", 'merchant_user_role_type'>;
    readonly status: Prisma.FieldRef<"merchant_users", 'String'>;
    readonly created_at: Prisma.FieldRef<"merchant_users", 'DateTime'>;
}
export type merchant_usersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_usersSelect<ExtArgs> | null;
    omit?: Prisma.merchant_usersOmit<ExtArgs> | null;
    include?: Prisma.merchant_usersInclude<ExtArgs> | null;
    where: Prisma.merchant_usersWhereUniqueInput;
};
export type merchant_usersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_usersSelect<ExtArgs> | null;
    omit?: Prisma.merchant_usersOmit<ExtArgs> | null;
    include?: Prisma.merchant_usersInclude<ExtArgs> | null;
    where: Prisma.merchant_usersWhereUniqueInput;
};
export type merchant_usersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type merchant_usersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type merchant_usersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type merchant_usersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_usersSelect<ExtArgs> | null;
    omit?: Prisma.merchant_usersOmit<ExtArgs> | null;
    include?: Prisma.merchant_usersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.merchant_usersCreateInput, Prisma.merchant_usersUncheckedCreateInput>;
};
export type merchant_usersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.merchant_usersCreateManyInput | Prisma.merchant_usersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type merchant_usersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_usersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.merchant_usersOmit<ExtArgs> | null;
    data: Prisma.merchant_usersCreateManyInput | Prisma.merchant_usersCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.merchant_usersIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type merchant_usersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_usersSelect<ExtArgs> | null;
    omit?: Prisma.merchant_usersOmit<ExtArgs> | null;
    include?: Prisma.merchant_usersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.merchant_usersUpdateInput, Prisma.merchant_usersUncheckedUpdateInput>;
    where: Prisma.merchant_usersWhereUniqueInput;
};
export type merchant_usersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.merchant_usersUpdateManyMutationInput, Prisma.merchant_usersUncheckedUpdateManyInput>;
    where?: Prisma.merchant_usersWhereInput;
    limit?: number;
};
export type merchant_usersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_usersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.merchant_usersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.merchant_usersUpdateManyMutationInput, Prisma.merchant_usersUncheckedUpdateManyInput>;
    where?: Prisma.merchant_usersWhereInput;
    limit?: number;
    include?: Prisma.merchant_usersIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type merchant_usersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_usersSelect<ExtArgs> | null;
    omit?: Prisma.merchant_usersOmit<ExtArgs> | null;
    include?: Prisma.merchant_usersInclude<ExtArgs> | null;
    where: Prisma.merchant_usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.merchant_usersCreateInput, Prisma.merchant_usersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.merchant_usersUpdateInput, Prisma.merchant_usersUncheckedUpdateInput>;
};
export type merchant_usersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_usersSelect<ExtArgs> | null;
    omit?: Prisma.merchant_usersOmit<ExtArgs> | null;
    include?: Prisma.merchant_usersInclude<ExtArgs> | null;
    where: Prisma.merchant_usersWhereUniqueInput;
};
export type merchant_usersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.merchant_usersWhereInput;
    limit?: number;
};
export type merchant_usersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.merchant_usersSelect<ExtArgs> | null;
    omit?: Prisma.merchant_usersOmit<ExtArgs> | null;
    include?: Prisma.merchant_usersInclude<ExtArgs> | null;
};
export {};
