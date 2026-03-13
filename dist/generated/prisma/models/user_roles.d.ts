import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type user_rolesModel = runtime.Types.Result.DefaultSelection<Prisma.$user_rolesPayload>;
export type AggregateUser_roles = {
    _count: User_rolesCountAggregateOutputType | null;
    _min: User_rolesMinAggregateOutputType | null;
    _max: User_rolesMaxAggregateOutputType | null;
};
export type User_rolesMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    role_id: string | null;
    scope_type: $Enums.role_scope_type | null;
    scope_id: string | null;
    created_at: Date | null;
};
export type User_rolesMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    role_id: string | null;
    scope_type: $Enums.role_scope_type | null;
    scope_id: string | null;
    created_at: Date | null;
};
export type User_rolesCountAggregateOutputType = {
    id: number;
    user_id: number;
    role_id: number;
    scope_type: number;
    scope_id: number;
    created_at: number;
    _all: number;
};
export type User_rolesMinAggregateInputType = {
    id?: true;
    user_id?: true;
    role_id?: true;
    scope_type?: true;
    scope_id?: true;
    created_at?: true;
};
export type User_rolesMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    role_id?: true;
    scope_type?: true;
    scope_id?: true;
    created_at?: true;
};
export type User_rolesCountAggregateInputType = {
    id?: true;
    user_id?: true;
    role_id?: true;
    scope_type?: true;
    scope_id?: true;
    created_at?: true;
    _all?: true;
};
export type User_rolesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_rolesWhereInput;
    orderBy?: Prisma.user_rolesOrderByWithRelationInput | Prisma.user_rolesOrderByWithRelationInput[];
    cursor?: Prisma.user_rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | User_rolesCountAggregateInputType;
    _min?: User_rolesMinAggregateInputType;
    _max?: User_rolesMaxAggregateInputType;
};
export type GetUser_rolesAggregateType<T extends User_rolesAggregateArgs> = {
    [P in keyof T & keyof AggregateUser_roles]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser_roles[P]> : Prisma.GetScalarType<T[P], AggregateUser_roles[P]>;
};
export type user_rolesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_rolesWhereInput;
    orderBy?: Prisma.user_rolesOrderByWithAggregationInput | Prisma.user_rolesOrderByWithAggregationInput[];
    by: Prisma.User_rolesScalarFieldEnum[] | Prisma.User_rolesScalarFieldEnum;
    having?: Prisma.user_rolesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_rolesCountAggregateInputType | true;
    _min?: User_rolesMinAggregateInputType;
    _max?: User_rolesMaxAggregateInputType;
};
export type User_rolesGroupByOutputType = {
    id: string;
    user_id: string;
    role_id: string;
    scope_type: $Enums.role_scope_type;
    scope_id: string | null;
    created_at: Date;
    _count: User_rolesCountAggregateOutputType | null;
    _min: User_rolesMinAggregateOutputType | null;
    _max: User_rolesMaxAggregateOutputType | null;
};
type GetUser_rolesGroupByPayload<T extends user_rolesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<User_rolesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof User_rolesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], User_rolesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], User_rolesGroupByOutputType[P]>;
}>>;
export type user_rolesWhereInput = {
    AND?: Prisma.user_rolesWhereInput | Prisma.user_rolesWhereInput[];
    OR?: Prisma.user_rolesWhereInput[];
    NOT?: Prisma.user_rolesWhereInput | Prisma.user_rolesWhereInput[];
    id?: Prisma.UuidFilter<"user_roles"> | string;
    user_id?: Prisma.UuidFilter<"user_roles"> | string;
    role_id?: Prisma.UuidFilter<"user_roles"> | string;
    scope_type?: Prisma.Enumrole_scope_typeFilter<"user_roles"> | $Enums.role_scope_type;
    scope_id?: Prisma.UuidNullableFilter<"user_roles"> | string | null;
    created_at?: Prisma.DateTimeFilter<"user_roles"> | Date | string;
    roles?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.rolesWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type user_rolesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    scope_type?: Prisma.SortOrder;
    scope_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    roles?: Prisma.rolesOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type user_rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id_role_id_scope_type_scope_id?: Prisma.user_rolesUser_idRole_idScope_typeScope_idCompoundUniqueInput;
    AND?: Prisma.user_rolesWhereInput | Prisma.user_rolesWhereInput[];
    OR?: Prisma.user_rolesWhereInput[];
    NOT?: Prisma.user_rolesWhereInput | Prisma.user_rolesWhereInput[];
    user_id?: Prisma.UuidFilter<"user_roles"> | string;
    role_id?: Prisma.UuidFilter<"user_roles"> | string;
    scope_type?: Prisma.Enumrole_scope_typeFilter<"user_roles"> | $Enums.role_scope_type;
    scope_id?: Prisma.UuidNullableFilter<"user_roles"> | string | null;
    created_at?: Prisma.DateTimeFilter<"user_roles"> | Date | string;
    roles?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.rolesWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "user_id_role_id_scope_type_scope_id">;
export type user_rolesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    scope_type?: Prisma.SortOrder;
    scope_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.user_rolesCountOrderByAggregateInput;
    _max?: Prisma.user_rolesMaxOrderByAggregateInput;
    _min?: Prisma.user_rolesMinOrderByAggregateInput;
};
export type user_rolesScalarWhereWithAggregatesInput = {
    AND?: Prisma.user_rolesScalarWhereWithAggregatesInput | Prisma.user_rolesScalarWhereWithAggregatesInput[];
    OR?: Prisma.user_rolesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.user_rolesScalarWhereWithAggregatesInput | Prisma.user_rolesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"user_roles"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"user_roles"> | string;
    role_id?: Prisma.UuidWithAggregatesFilter<"user_roles"> | string;
    scope_type?: Prisma.Enumrole_scope_typeWithAggregatesFilter<"user_roles"> | $Enums.role_scope_type;
    scope_id?: Prisma.UuidNullableWithAggregatesFilter<"user_roles"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"user_roles"> | Date | string;
};
export type user_rolesCreateInput = {
    id?: string;
    scope_type: $Enums.role_scope_type;
    scope_id?: string | null;
    created_at?: Date | string;
    roles: Prisma.rolesCreateNestedOneWithoutUser_rolesInput;
    users: Prisma.usersCreateNestedOneWithoutUser_rolesInput;
};
export type user_rolesUncheckedCreateInput = {
    id?: string;
    user_id: string;
    role_id: string;
    scope_type: $Enums.role_scope_type;
    scope_id?: string | null;
    created_at?: Date | string;
};
export type user_rolesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope_type?: Prisma.Enumrole_scope_typeFieldUpdateOperationsInput | $Enums.role_scope_type;
    scope_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.rolesUpdateOneRequiredWithoutUser_rolesNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutUser_rolesNestedInput;
};
export type user_rolesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role_id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope_type?: Prisma.Enumrole_scope_typeFieldUpdateOperationsInput | $Enums.role_scope_type;
    scope_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_rolesCreateManyInput = {
    id?: string;
    user_id: string;
    role_id: string;
    scope_type: $Enums.role_scope_type;
    scope_id?: string | null;
    created_at?: Date | string;
};
export type user_rolesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope_type?: Prisma.Enumrole_scope_typeFieldUpdateOperationsInput | $Enums.role_scope_type;
    scope_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_rolesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role_id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope_type?: Prisma.Enumrole_scope_typeFieldUpdateOperationsInput | $Enums.role_scope_type;
    scope_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type User_rolesListRelationFilter = {
    every?: Prisma.user_rolesWhereInput;
    some?: Prisma.user_rolesWhereInput;
    none?: Prisma.user_rolesWhereInput;
};
export type user_rolesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type user_rolesUser_idRole_idScope_typeScope_idCompoundUniqueInput = {
    user_id: string;
    role_id: string;
    scope_type: $Enums.role_scope_type;
    scope_id: string;
};
export type user_rolesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    scope_type?: Prisma.SortOrder;
    scope_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type user_rolesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    scope_type?: Prisma.SortOrder;
    scope_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type user_rolesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    scope_type?: Prisma.SortOrder;
    scope_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type user_rolesCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.user_rolesCreateWithoutRolesInput, Prisma.user_rolesUncheckedCreateWithoutRolesInput> | Prisma.user_rolesCreateWithoutRolesInput[] | Prisma.user_rolesUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.user_rolesCreateOrConnectWithoutRolesInput | Prisma.user_rolesCreateOrConnectWithoutRolesInput[];
    createMany?: Prisma.user_rolesCreateManyRolesInputEnvelope;
    connect?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
};
export type user_rolesUncheckedCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.user_rolesCreateWithoutRolesInput, Prisma.user_rolesUncheckedCreateWithoutRolesInput> | Prisma.user_rolesCreateWithoutRolesInput[] | Prisma.user_rolesUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.user_rolesCreateOrConnectWithoutRolesInput | Prisma.user_rolesCreateOrConnectWithoutRolesInput[];
    createMany?: Prisma.user_rolesCreateManyRolesInputEnvelope;
    connect?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
};
export type user_rolesUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.user_rolesCreateWithoutRolesInput, Prisma.user_rolesUncheckedCreateWithoutRolesInput> | Prisma.user_rolesCreateWithoutRolesInput[] | Prisma.user_rolesUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.user_rolesCreateOrConnectWithoutRolesInput | Prisma.user_rolesCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.user_rolesUpsertWithWhereUniqueWithoutRolesInput | Prisma.user_rolesUpsertWithWhereUniqueWithoutRolesInput[];
    createMany?: Prisma.user_rolesCreateManyRolesInputEnvelope;
    set?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
    disconnect?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
    delete?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
    connect?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
    update?: Prisma.user_rolesUpdateWithWhereUniqueWithoutRolesInput | Prisma.user_rolesUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.user_rolesUpdateManyWithWhereWithoutRolesInput | Prisma.user_rolesUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.user_rolesScalarWhereInput | Prisma.user_rolesScalarWhereInput[];
};
export type user_rolesUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.user_rolesCreateWithoutRolesInput, Prisma.user_rolesUncheckedCreateWithoutRolesInput> | Prisma.user_rolesCreateWithoutRolesInput[] | Prisma.user_rolesUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.user_rolesCreateOrConnectWithoutRolesInput | Prisma.user_rolesCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.user_rolesUpsertWithWhereUniqueWithoutRolesInput | Prisma.user_rolesUpsertWithWhereUniqueWithoutRolesInput[];
    createMany?: Prisma.user_rolesCreateManyRolesInputEnvelope;
    set?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
    disconnect?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
    delete?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
    connect?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
    update?: Prisma.user_rolesUpdateWithWhereUniqueWithoutRolesInput | Prisma.user_rolesUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.user_rolesUpdateManyWithWhereWithoutRolesInput | Prisma.user_rolesUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.user_rolesScalarWhereInput | Prisma.user_rolesScalarWhereInput[];
};
export type Enumrole_scope_typeFieldUpdateOperationsInput = {
    set?: $Enums.role_scope_type;
};
export type user_rolesCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.user_rolesCreateWithoutUsersInput, Prisma.user_rolesUncheckedCreateWithoutUsersInput> | Prisma.user_rolesCreateWithoutUsersInput[] | Prisma.user_rolesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.user_rolesCreateOrConnectWithoutUsersInput | Prisma.user_rolesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.user_rolesCreateManyUsersInputEnvelope;
    connect?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
};
export type user_rolesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.user_rolesCreateWithoutUsersInput, Prisma.user_rolesUncheckedCreateWithoutUsersInput> | Prisma.user_rolesCreateWithoutUsersInput[] | Prisma.user_rolesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.user_rolesCreateOrConnectWithoutUsersInput | Prisma.user_rolesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.user_rolesCreateManyUsersInputEnvelope;
    connect?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
};
export type user_rolesUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.user_rolesCreateWithoutUsersInput, Prisma.user_rolesUncheckedCreateWithoutUsersInput> | Prisma.user_rolesCreateWithoutUsersInput[] | Prisma.user_rolesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.user_rolesCreateOrConnectWithoutUsersInput | Prisma.user_rolesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.user_rolesUpsertWithWhereUniqueWithoutUsersInput | Prisma.user_rolesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.user_rolesCreateManyUsersInputEnvelope;
    set?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
    disconnect?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
    delete?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
    connect?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
    update?: Prisma.user_rolesUpdateWithWhereUniqueWithoutUsersInput | Prisma.user_rolesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.user_rolesUpdateManyWithWhereWithoutUsersInput | Prisma.user_rolesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.user_rolesScalarWhereInput | Prisma.user_rolesScalarWhereInput[];
};
export type user_rolesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.user_rolesCreateWithoutUsersInput, Prisma.user_rolesUncheckedCreateWithoutUsersInput> | Prisma.user_rolesCreateWithoutUsersInput[] | Prisma.user_rolesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.user_rolesCreateOrConnectWithoutUsersInput | Prisma.user_rolesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.user_rolesUpsertWithWhereUniqueWithoutUsersInput | Prisma.user_rolesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.user_rolesCreateManyUsersInputEnvelope;
    set?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
    disconnect?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
    delete?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
    connect?: Prisma.user_rolesWhereUniqueInput | Prisma.user_rolesWhereUniqueInput[];
    update?: Prisma.user_rolesUpdateWithWhereUniqueWithoutUsersInput | Prisma.user_rolesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.user_rolesUpdateManyWithWhereWithoutUsersInput | Prisma.user_rolesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.user_rolesScalarWhereInput | Prisma.user_rolesScalarWhereInput[];
};
export type user_rolesCreateWithoutRolesInput = {
    id?: string;
    scope_type: $Enums.role_scope_type;
    scope_id?: string | null;
    created_at?: Date | string;
    users: Prisma.usersCreateNestedOneWithoutUser_rolesInput;
};
export type user_rolesUncheckedCreateWithoutRolesInput = {
    id?: string;
    user_id: string;
    scope_type: $Enums.role_scope_type;
    scope_id?: string | null;
    created_at?: Date | string;
};
export type user_rolesCreateOrConnectWithoutRolesInput = {
    where: Prisma.user_rolesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_rolesCreateWithoutRolesInput, Prisma.user_rolesUncheckedCreateWithoutRolesInput>;
};
export type user_rolesCreateManyRolesInputEnvelope = {
    data: Prisma.user_rolesCreateManyRolesInput | Prisma.user_rolesCreateManyRolesInput[];
    skipDuplicates?: boolean;
};
export type user_rolesUpsertWithWhereUniqueWithoutRolesInput = {
    where: Prisma.user_rolesWhereUniqueInput;
    update: Prisma.XOR<Prisma.user_rolesUpdateWithoutRolesInput, Prisma.user_rolesUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.user_rolesCreateWithoutRolesInput, Prisma.user_rolesUncheckedCreateWithoutRolesInput>;
};
export type user_rolesUpdateWithWhereUniqueWithoutRolesInput = {
    where: Prisma.user_rolesWhereUniqueInput;
    data: Prisma.XOR<Prisma.user_rolesUpdateWithoutRolesInput, Prisma.user_rolesUncheckedUpdateWithoutRolesInput>;
};
export type user_rolesUpdateManyWithWhereWithoutRolesInput = {
    where: Prisma.user_rolesScalarWhereInput;
    data: Prisma.XOR<Prisma.user_rolesUpdateManyMutationInput, Prisma.user_rolesUncheckedUpdateManyWithoutRolesInput>;
};
export type user_rolesScalarWhereInput = {
    AND?: Prisma.user_rolesScalarWhereInput | Prisma.user_rolesScalarWhereInput[];
    OR?: Prisma.user_rolesScalarWhereInput[];
    NOT?: Prisma.user_rolesScalarWhereInput | Prisma.user_rolesScalarWhereInput[];
    id?: Prisma.UuidFilter<"user_roles"> | string;
    user_id?: Prisma.UuidFilter<"user_roles"> | string;
    role_id?: Prisma.UuidFilter<"user_roles"> | string;
    scope_type?: Prisma.Enumrole_scope_typeFilter<"user_roles"> | $Enums.role_scope_type;
    scope_id?: Prisma.UuidNullableFilter<"user_roles"> | string | null;
    created_at?: Prisma.DateTimeFilter<"user_roles"> | Date | string;
};
export type user_rolesCreateWithoutUsersInput = {
    id?: string;
    scope_type: $Enums.role_scope_type;
    scope_id?: string | null;
    created_at?: Date | string;
    roles: Prisma.rolesCreateNestedOneWithoutUser_rolesInput;
};
export type user_rolesUncheckedCreateWithoutUsersInput = {
    id?: string;
    role_id: string;
    scope_type: $Enums.role_scope_type;
    scope_id?: string | null;
    created_at?: Date | string;
};
export type user_rolesCreateOrConnectWithoutUsersInput = {
    where: Prisma.user_rolesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_rolesCreateWithoutUsersInput, Prisma.user_rolesUncheckedCreateWithoutUsersInput>;
};
export type user_rolesCreateManyUsersInputEnvelope = {
    data: Prisma.user_rolesCreateManyUsersInput | Prisma.user_rolesCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type user_rolesUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.user_rolesWhereUniqueInput;
    update: Prisma.XOR<Prisma.user_rolesUpdateWithoutUsersInput, Prisma.user_rolesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.user_rolesCreateWithoutUsersInput, Prisma.user_rolesUncheckedCreateWithoutUsersInput>;
};
export type user_rolesUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.user_rolesWhereUniqueInput;
    data: Prisma.XOR<Prisma.user_rolesUpdateWithoutUsersInput, Prisma.user_rolesUncheckedUpdateWithoutUsersInput>;
};
export type user_rolesUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.user_rolesScalarWhereInput;
    data: Prisma.XOR<Prisma.user_rolesUpdateManyMutationInput, Prisma.user_rolesUncheckedUpdateManyWithoutUsersInput>;
};
export type user_rolesCreateManyRolesInput = {
    id?: string;
    user_id: string;
    scope_type: $Enums.role_scope_type;
    scope_id?: string | null;
    created_at?: Date | string;
};
export type user_rolesUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope_type?: Prisma.Enumrole_scope_typeFieldUpdateOperationsInput | $Enums.role_scope_type;
    scope_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneRequiredWithoutUser_rolesNestedInput;
};
export type user_rolesUncheckedUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope_type?: Prisma.Enumrole_scope_typeFieldUpdateOperationsInput | $Enums.role_scope_type;
    scope_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_rolesUncheckedUpdateManyWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope_type?: Prisma.Enumrole_scope_typeFieldUpdateOperationsInput | $Enums.role_scope_type;
    scope_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_rolesCreateManyUsersInput = {
    id?: string;
    role_id: string;
    scope_type: $Enums.role_scope_type;
    scope_id?: string | null;
    created_at?: Date | string;
};
export type user_rolesUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope_type?: Prisma.Enumrole_scope_typeFieldUpdateOperationsInput | $Enums.role_scope_type;
    scope_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.rolesUpdateOneRequiredWithoutUser_rolesNestedInput;
};
export type user_rolesUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role_id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope_type?: Prisma.Enumrole_scope_typeFieldUpdateOperationsInput | $Enums.role_scope_type;
    scope_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_rolesUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role_id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope_type?: Prisma.Enumrole_scope_typeFieldUpdateOperationsInput | $Enums.role_scope_type;
    scope_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_rolesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    role_id?: boolean;
    scope_type?: boolean;
    scope_id?: boolean;
    created_at?: boolean;
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_roles"]>;
export type user_rolesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    role_id?: boolean;
    scope_type?: boolean;
    scope_id?: boolean;
    created_at?: boolean;
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_roles"]>;
export type user_rolesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    role_id?: boolean;
    scope_type?: boolean;
    scope_id?: boolean;
    created_at?: boolean;
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_roles"]>;
export type user_rolesSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    role_id?: boolean;
    scope_type?: boolean;
    scope_id?: boolean;
    created_at?: boolean;
};
export type user_rolesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "role_id" | "scope_type" | "scope_id" | "created_at", ExtArgs["result"]["user_roles"]>;
export type user_rolesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type user_rolesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type user_rolesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $user_rolesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "user_roles";
    objects: {
        roles: Prisma.$rolesPayload<ExtArgs>;
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        role_id: string;
        scope_type: $Enums.role_scope_type;
        scope_id: string | null;
        created_at: Date;
    }, ExtArgs["result"]["user_roles"]>;
    composites: {};
};
export type user_rolesGetPayload<S extends boolean | null | undefined | user_rolesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$user_rolesPayload, S>;
export type user_rolesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<user_rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: User_rolesCountAggregateInputType | true;
};
export interface user_rolesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['user_roles'];
        meta: {
            name: 'user_roles';
        };
    };
    findUnique<T extends user_rolesFindUniqueArgs>(args: Prisma.SelectSubset<T, user_rolesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__user_rolesClient<runtime.Types.Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends user_rolesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, user_rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__user_rolesClient<runtime.Types.Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends user_rolesFindFirstArgs>(args?: Prisma.SelectSubset<T, user_rolesFindFirstArgs<ExtArgs>>): Prisma.Prisma__user_rolesClient<runtime.Types.Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends user_rolesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, user_rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__user_rolesClient<runtime.Types.Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends user_rolesFindManyArgs>(args?: Prisma.SelectSubset<T, user_rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends user_rolesCreateArgs>(args: Prisma.SelectSubset<T, user_rolesCreateArgs<ExtArgs>>): Prisma.Prisma__user_rolesClient<runtime.Types.Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends user_rolesCreateManyArgs>(args?: Prisma.SelectSubset<T, user_rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends user_rolesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, user_rolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends user_rolesDeleteArgs>(args: Prisma.SelectSubset<T, user_rolesDeleteArgs<ExtArgs>>): Prisma.Prisma__user_rolesClient<runtime.Types.Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends user_rolesUpdateArgs>(args: Prisma.SelectSubset<T, user_rolesUpdateArgs<ExtArgs>>): Prisma.Prisma__user_rolesClient<runtime.Types.Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends user_rolesDeleteManyArgs>(args?: Prisma.SelectSubset<T, user_rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends user_rolesUpdateManyArgs>(args: Prisma.SelectSubset<T, user_rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends user_rolesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, user_rolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends user_rolesUpsertArgs>(args: Prisma.SelectSubset<T, user_rolesUpsertArgs<ExtArgs>>): Prisma.Prisma__user_rolesClient<runtime.Types.Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends user_rolesCountArgs>(args?: Prisma.Subset<T, user_rolesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], User_rolesCountAggregateOutputType> : number>;
    aggregate<T extends User_rolesAggregateArgs>(args: Prisma.Subset<T, User_rolesAggregateArgs>): Prisma.PrismaPromise<GetUser_rolesAggregateType<T>>;
    groupBy<T extends user_rolesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: user_rolesGroupByArgs['orderBy'];
    } : {
        orderBy?: user_rolesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, user_rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_rolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: user_rolesFieldRefs;
}
export interface Prisma__user_rolesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    roles<T extends Prisma.rolesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.rolesDefaultArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface user_rolesFieldRefs {
    readonly id: Prisma.FieldRef<"user_roles", 'String'>;
    readonly user_id: Prisma.FieldRef<"user_roles", 'String'>;
    readonly role_id: Prisma.FieldRef<"user_roles", 'String'>;
    readonly scope_type: Prisma.FieldRef<"user_roles", 'role_scope_type'>;
    readonly scope_id: Prisma.FieldRef<"user_roles", 'String'>;
    readonly created_at: Prisma.FieldRef<"user_roles", 'DateTime'>;
}
export type user_rolesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_rolesInclude<ExtArgs> | null;
    where: Prisma.user_rolesWhereUniqueInput;
};
export type user_rolesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_rolesInclude<ExtArgs> | null;
    where: Prisma.user_rolesWhereUniqueInput;
};
export type user_rolesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_rolesInclude<ExtArgs> | null;
    where?: Prisma.user_rolesWhereInput;
    orderBy?: Prisma.user_rolesOrderByWithRelationInput | Prisma.user_rolesOrderByWithRelationInput[];
    cursor?: Prisma.user_rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_rolesScalarFieldEnum | Prisma.User_rolesScalarFieldEnum[];
};
export type user_rolesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_rolesInclude<ExtArgs> | null;
    where?: Prisma.user_rolesWhereInput;
    orderBy?: Prisma.user_rolesOrderByWithRelationInput | Prisma.user_rolesOrderByWithRelationInput[];
    cursor?: Prisma.user_rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_rolesScalarFieldEnum | Prisma.User_rolesScalarFieldEnum[];
};
export type user_rolesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_rolesInclude<ExtArgs> | null;
    where?: Prisma.user_rolesWhereInput;
    orderBy?: Prisma.user_rolesOrderByWithRelationInput | Prisma.user_rolesOrderByWithRelationInput[];
    cursor?: Prisma.user_rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_rolesScalarFieldEnum | Prisma.User_rolesScalarFieldEnum[];
};
export type user_rolesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_rolesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_rolesCreateInput, Prisma.user_rolesUncheckedCreateInput>;
};
export type user_rolesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.user_rolesCreateManyInput | Prisma.user_rolesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type user_rolesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_rolesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.user_rolesOmit<ExtArgs> | null;
    data: Prisma.user_rolesCreateManyInput | Prisma.user_rolesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.user_rolesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type user_rolesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_rolesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_rolesUpdateInput, Prisma.user_rolesUncheckedUpdateInput>;
    where: Prisma.user_rolesWhereUniqueInput;
};
export type user_rolesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.user_rolesUpdateManyMutationInput, Prisma.user_rolesUncheckedUpdateManyInput>;
    where?: Prisma.user_rolesWhereInput;
    limit?: number;
};
export type user_rolesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_rolesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.user_rolesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_rolesUpdateManyMutationInput, Prisma.user_rolesUncheckedUpdateManyInput>;
    where?: Prisma.user_rolesWhereInput;
    limit?: number;
    include?: Prisma.user_rolesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type user_rolesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_rolesInclude<ExtArgs> | null;
    where: Prisma.user_rolesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_rolesCreateInput, Prisma.user_rolesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.user_rolesUpdateInput, Prisma.user_rolesUncheckedUpdateInput>;
};
export type user_rolesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_rolesInclude<ExtArgs> | null;
    where: Prisma.user_rolesWhereUniqueInput;
};
export type user_rolesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_rolesWhereInput;
    limit?: number;
};
export type user_rolesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_rolesInclude<ExtArgs> | null;
};
export {};
