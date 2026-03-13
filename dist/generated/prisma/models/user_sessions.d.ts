import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type user_sessionsModel = runtime.Types.Result.DefaultSelection<Prisma.$user_sessionsPayload>;
export type AggregateUser_sessions = {
    _count: User_sessionsCountAggregateOutputType | null;
    _min: User_sessionsMinAggregateOutputType | null;
    _max: User_sessionsMaxAggregateOutputType | null;
};
export type User_sessionsMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    refresh_token_hash: string | null;
    device_name: string | null;
    device_os: string | null;
    app_version: string | null;
    ip_address: string | null;
    user_agent: string | null;
    expires_at: Date | null;
    revoked_at: Date | null;
    created_at: Date | null;
};
export type User_sessionsMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    refresh_token_hash: string | null;
    device_name: string | null;
    device_os: string | null;
    app_version: string | null;
    ip_address: string | null;
    user_agent: string | null;
    expires_at: Date | null;
    revoked_at: Date | null;
    created_at: Date | null;
};
export type User_sessionsCountAggregateOutputType = {
    id: number;
    user_id: number;
    refresh_token_hash: number;
    device_name: number;
    device_os: number;
    app_version: number;
    ip_address: number;
    user_agent: number;
    expires_at: number;
    revoked_at: number;
    created_at: number;
    _all: number;
};
export type User_sessionsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    refresh_token_hash?: true;
    device_name?: true;
    device_os?: true;
    app_version?: true;
    ip_address?: true;
    user_agent?: true;
    expires_at?: true;
    revoked_at?: true;
    created_at?: true;
};
export type User_sessionsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    refresh_token_hash?: true;
    device_name?: true;
    device_os?: true;
    app_version?: true;
    ip_address?: true;
    user_agent?: true;
    expires_at?: true;
    revoked_at?: true;
    created_at?: true;
};
export type User_sessionsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    refresh_token_hash?: true;
    device_name?: true;
    device_os?: true;
    app_version?: true;
    ip_address?: true;
    user_agent?: true;
    expires_at?: true;
    revoked_at?: true;
    created_at?: true;
    _all?: true;
};
export type User_sessionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_sessionsWhereInput;
    orderBy?: Prisma.user_sessionsOrderByWithRelationInput | Prisma.user_sessionsOrderByWithRelationInput[];
    cursor?: Prisma.user_sessionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | User_sessionsCountAggregateInputType;
    _min?: User_sessionsMinAggregateInputType;
    _max?: User_sessionsMaxAggregateInputType;
};
export type GetUser_sessionsAggregateType<T extends User_sessionsAggregateArgs> = {
    [P in keyof T & keyof AggregateUser_sessions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser_sessions[P]> : Prisma.GetScalarType<T[P], AggregateUser_sessions[P]>;
};
export type user_sessionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_sessionsWhereInput;
    orderBy?: Prisma.user_sessionsOrderByWithAggregationInput | Prisma.user_sessionsOrderByWithAggregationInput[];
    by: Prisma.User_sessionsScalarFieldEnum[] | Prisma.User_sessionsScalarFieldEnum;
    having?: Prisma.user_sessionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_sessionsCountAggregateInputType | true;
    _min?: User_sessionsMinAggregateInputType;
    _max?: User_sessionsMaxAggregateInputType;
};
export type User_sessionsGroupByOutputType = {
    id: string;
    user_id: string;
    refresh_token_hash: string;
    device_name: string | null;
    device_os: string | null;
    app_version: string | null;
    ip_address: string | null;
    user_agent: string | null;
    expires_at: Date;
    revoked_at: Date | null;
    created_at: Date;
    _count: User_sessionsCountAggregateOutputType | null;
    _min: User_sessionsMinAggregateOutputType | null;
    _max: User_sessionsMaxAggregateOutputType | null;
};
type GetUser_sessionsGroupByPayload<T extends user_sessionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<User_sessionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof User_sessionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], User_sessionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], User_sessionsGroupByOutputType[P]>;
}>>;
export type user_sessionsWhereInput = {
    AND?: Prisma.user_sessionsWhereInput | Prisma.user_sessionsWhereInput[];
    OR?: Prisma.user_sessionsWhereInput[];
    NOT?: Prisma.user_sessionsWhereInput | Prisma.user_sessionsWhereInput[];
    id?: Prisma.UuidFilter<"user_sessions"> | string;
    user_id?: Prisma.UuidFilter<"user_sessions"> | string;
    refresh_token_hash?: Prisma.StringFilter<"user_sessions"> | string;
    device_name?: Prisma.StringNullableFilter<"user_sessions"> | string | null;
    device_os?: Prisma.StringNullableFilter<"user_sessions"> | string | null;
    app_version?: Prisma.StringNullableFilter<"user_sessions"> | string | null;
    ip_address?: Prisma.StringNullableFilter<"user_sessions"> | string | null;
    user_agent?: Prisma.StringNullableFilter<"user_sessions"> | string | null;
    expires_at?: Prisma.DateTimeFilter<"user_sessions"> | Date | string;
    revoked_at?: Prisma.DateTimeNullableFilter<"user_sessions"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"user_sessions"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type user_sessionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    refresh_token_hash?: Prisma.SortOrder;
    device_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    device_os?: Prisma.SortOrderInput | Prisma.SortOrder;
    app_version?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_address?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_agent?: Prisma.SortOrderInput | Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    revoked_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type user_sessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.user_sessionsWhereInput | Prisma.user_sessionsWhereInput[];
    OR?: Prisma.user_sessionsWhereInput[];
    NOT?: Prisma.user_sessionsWhereInput | Prisma.user_sessionsWhereInput[];
    user_id?: Prisma.UuidFilter<"user_sessions"> | string;
    refresh_token_hash?: Prisma.StringFilter<"user_sessions"> | string;
    device_name?: Prisma.StringNullableFilter<"user_sessions"> | string | null;
    device_os?: Prisma.StringNullableFilter<"user_sessions"> | string | null;
    app_version?: Prisma.StringNullableFilter<"user_sessions"> | string | null;
    ip_address?: Prisma.StringNullableFilter<"user_sessions"> | string | null;
    user_agent?: Prisma.StringNullableFilter<"user_sessions"> | string | null;
    expires_at?: Prisma.DateTimeFilter<"user_sessions"> | Date | string;
    revoked_at?: Prisma.DateTimeNullableFilter<"user_sessions"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"user_sessions"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id">;
export type user_sessionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    refresh_token_hash?: Prisma.SortOrder;
    device_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    device_os?: Prisma.SortOrderInput | Prisma.SortOrder;
    app_version?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_address?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_agent?: Prisma.SortOrderInput | Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    revoked_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.user_sessionsCountOrderByAggregateInput;
    _max?: Prisma.user_sessionsMaxOrderByAggregateInput;
    _min?: Prisma.user_sessionsMinOrderByAggregateInput;
};
export type user_sessionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.user_sessionsScalarWhereWithAggregatesInput | Prisma.user_sessionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.user_sessionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.user_sessionsScalarWhereWithAggregatesInput | Prisma.user_sessionsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"user_sessions"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"user_sessions"> | string;
    refresh_token_hash?: Prisma.StringWithAggregatesFilter<"user_sessions"> | string;
    device_name?: Prisma.StringNullableWithAggregatesFilter<"user_sessions"> | string | null;
    device_os?: Prisma.StringNullableWithAggregatesFilter<"user_sessions"> | string | null;
    app_version?: Prisma.StringNullableWithAggregatesFilter<"user_sessions"> | string | null;
    ip_address?: Prisma.StringNullableWithAggregatesFilter<"user_sessions"> | string | null;
    user_agent?: Prisma.StringNullableWithAggregatesFilter<"user_sessions"> | string | null;
    expires_at?: Prisma.DateTimeWithAggregatesFilter<"user_sessions"> | Date | string;
    revoked_at?: Prisma.DateTimeNullableWithAggregatesFilter<"user_sessions"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"user_sessions"> | Date | string;
};
export type user_sessionsCreateInput = {
    id?: string;
    refresh_token_hash: string;
    device_name?: string | null;
    device_os?: string | null;
    app_version?: string | null;
    ip_address?: string | null;
    user_agent?: string | null;
    expires_at: Date | string;
    revoked_at?: Date | string | null;
    created_at?: Date | string;
    users: Prisma.usersCreateNestedOneWithoutUser_sessionsInput;
};
export type user_sessionsUncheckedCreateInput = {
    id?: string;
    user_id: string;
    refresh_token_hash: string;
    device_name?: string | null;
    device_os?: string | null;
    app_version?: string | null;
    ip_address?: string | null;
    user_agent?: string | null;
    expires_at: Date | string;
    revoked_at?: Date | string | null;
    created_at?: Date | string;
};
export type user_sessionsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    refresh_token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    device_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    app_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revoked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneRequiredWithoutUser_sessionsNestedInput;
};
export type user_sessionsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    refresh_token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    device_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    app_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revoked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_sessionsCreateManyInput = {
    id?: string;
    user_id: string;
    refresh_token_hash: string;
    device_name?: string | null;
    device_os?: string | null;
    app_version?: string | null;
    ip_address?: string | null;
    user_agent?: string | null;
    expires_at: Date | string;
    revoked_at?: Date | string | null;
    created_at?: Date | string;
};
export type user_sessionsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    refresh_token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    device_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    app_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revoked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_sessionsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    refresh_token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    device_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    app_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revoked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_sessionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    refresh_token_hash?: Prisma.SortOrder;
    device_name?: Prisma.SortOrder;
    device_os?: Prisma.SortOrder;
    app_version?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    revoked_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type user_sessionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    refresh_token_hash?: Prisma.SortOrder;
    device_name?: Prisma.SortOrder;
    device_os?: Prisma.SortOrder;
    app_version?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    revoked_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type user_sessionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    refresh_token_hash?: Prisma.SortOrder;
    device_name?: Prisma.SortOrder;
    device_os?: Prisma.SortOrder;
    app_version?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    revoked_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type User_sessionsListRelationFilter = {
    every?: Prisma.user_sessionsWhereInput;
    some?: Prisma.user_sessionsWhereInput;
    none?: Prisma.user_sessionsWhereInput;
};
export type user_sessionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type user_sessionsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.user_sessionsCreateWithoutUsersInput, Prisma.user_sessionsUncheckedCreateWithoutUsersInput> | Prisma.user_sessionsCreateWithoutUsersInput[] | Prisma.user_sessionsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.user_sessionsCreateOrConnectWithoutUsersInput | Prisma.user_sessionsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.user_sessionsCreateManyUsersInputEnvelope;
    connect?: Prisma.user_sessionsWhereUniqueInput | Prisma.user_sessionsWhereUniqueInput[];
};
export type user_sessionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.user_sessionsCreateWithoutUsersInput, Prisma.user_sessionsUncheckedCreateWithoutUsersInput> | Prisma.user_sessionsCreateWithoutUsersInput[] | Prisma.user_sessionsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.user_sessionsCreateOrConnectWithoutUsersInput | Prisma.user_sessionsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.user_sessionsCreateManyUsersInputEnvelope;
    connect?: Prisma.user_sessionsWhereUniqueInput | Prisma.user_sessionsWhereUniqueInput[];
};
export type user_sessionsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.user_sessionsCreateWithoutUsersInput, Prisma.user_sessionsUncheckedCreateWithoutUsersInput> | Prisma.user_sessionsCreateWithoutUsersInput[] | Prisma.user_sessionsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.user_sessionsCreateOrConnectWithoutUsersInput | Prisma.user_sessionsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.user_sessionsUpsertWithWhereUniqueWithoutUsersInput | Prisma.user_sessionsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.user_sessionsCreateManyUsersInputEnvelope;
    set?: Prisma.user_sessionsWhereUniqueInput | Prisma.user_sessionsWhereUniqueInput[];
    disconnect?: Prisma.user_sessionsWhereUniqueInput | Prisma.user_sessionsWhereUniqueInput[];
    delete?: Prisma.user_sessionsWhereUniqueInput | Prisma.user_sessionsWhereUniqueInput[];
    connect?: Prisma.user_sessionsWhereUniqueInput | Prisma.user_sessionsWhereUniqueInput[];
    update?: Prisma.user_sessionsUpdateWithWhereUniqueWithoutUsersInput | Prisma.user_sessionsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.user_sessionsUpdateManyWithWhereWithoutUsersInput | Prisma.user_sessionsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.user_sessionsScalarWhereInput | Prisma.user_sessionsScalarWhereInput[];
};
export type user_sessionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.user_sessionsCreateWithoutUsersInput, Prisma.user_sessionsUncheckedCreateWithoutUsersInput> | Prisma.user_sessionsCreateWithoutUsersInput[] | Prisma.user_sessionsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.user_sessionsCreateOrConnectWithoutUsersInput | Prisma.user_sessionsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.user_sessionsUpsertWithWhereUniqueWithoutUsersInput | Prisma.user_sessionsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.user_sessionsCreateManyUsersInputEnvelope;
    set?: Prisma.user_sessionsWhereUniqueInput | Prisma.user_sessionsWhereUniqueInput[];
    disconnect?: Prisma.user_sessionsWhereUniqueInput | Prisma.user_sessionsWhereUniqueInput[];
    delete?: Prisma.user_sessionsWhereUniqueInput | Prisma.user_sessionsWhereUniqueInput[];
    connect?: Prisma.user_sessionsWhereUniqueInput | Prisma.user_sessionsWhereUniqueInput[];
    update?: Prisma.user_sessionsUpdateWithWhereUniqueWithoutUsersInput | Prisma.user_sessionsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.user_sessionsUpdateManyWithWhereWithoutUsersInput | Prisma.user_sessionsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.user_sessionsScalarWhereInput | Prisma.user_sessionsScalarWhereInput[];
};
export type user_sessionsCreateWithoutUsersInput = {
    id?: string;
    refresh_token_hash: string;
    device_name?: string | null;
    device_os?: string | null;
    app_version?: string | null;
    ip_address?: string | null;
    user_agent?: string | null;
    expires_at: Date | string;
    revoked_at?: Date | string | null;
    created_at?: Date | string;
};
export type user_sessionsUncheckedCreateWithoutUsersInput = {
    id?: string;
    refresh_token_hash: string;
    device_name?: string | null;
    device_os?: string | null;
    app_version?: string | null;
    ip_address?: string | null;
    user_agent?: string | null;
    expires_at: Date | string;
    revoked_at?: Date | string | null;
    created_at?: Date | string;
};
export type user_sessionsCreateOrConnectWithoutUsersInput = {
    where: Prisma.user_sessionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_sessionsCreateWithoutUsersInput, Prisma.user_sessionsUncheckedCreateWithoutUsersInput>;
};
export type user_sessionsCreateManyUsersInputEnvelope = {
    data: Prisma.user_sessionsCreateManyUsersInput | Prisma.user_sessionsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type user_sessionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.user_sessionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.user_sessionsUpdateWithoutUsersInput, Prisma.user_sessionsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.user_sessionsCreateWithoutUsersInput, Prisma.user_sessionsUncheckedCreateWithoutUsersInput>;
};
export type user_sessionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.user_sessionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.user_sessionsUpdateWithoutUsersInput, Prisma.user_sessionsUncheckedUpdateWithoutUsersInput>;
};
export type user_sessionsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.user_sessionsScalarWhereInput;
    data: Prisma.XOR<Prisma.user_sessionsUpdateManyMutationInput, Prisma.user_sessionsUncheckedUpdateManyWithoutUsersInput>;
};
export type user_sessionsScalarWhereInput = {
    AND?: Prisma.user_sessionsScalarWhereInput | Prisma.user_sessionsScalarWhereInput[];
    OR?: Prisma.user_sessionsScalarWhereInput[];
    NOT?: Prisma.user_sessionsScalarWhereInput | Prisma.user_sessionsScalarWhereInput[];
    id?: Prisma.UuidFilter<"user_sessions"> | string;
    user_id?: Prisma.UuidFilter<"user_sessions"> | string;
    refresh_token_hash?: Prisma.StringFilter<"user_sessions"> | string;
    device_name?: Prisma.StringNullableFilter<"user_sessions"> | string | null;
    device_os?: Prisma.StringNullableFilter<"user_sessions"> | string | null;
    app_version?: Prisma.StringNullableFilter<"user_sessions"> | string | null;
    ip_address?: Prisma.StringNullableFilter<"user_sessions"> | string | null;
    user_agent?: Prisma.StringNullableFilter<"user_sessions"> | string | null;
    expires_at?: Prisma.DateTimeFilter<"user_sessions"> | Date | string;
    revoked_at?: Prisma.DateTimeNullableFilter<"user_sessions"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"user_sessions"> | Date | string;
};
export type user_sessionsCreateManyUsersInput = {
    id?: string;
    refresh_token_hash: string;
    device_name?: string | null;
    device_os?: string | null;
    app_version?: string | null;
    ip_address?: string | null;
    user_agent?: string | null;
    expires_at: Date | string;
    revoked_at?: Date | string | null;
    created_at?: Date | string;
};
export type user_sessionsUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    refresh_token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    device_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    app_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revoked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_sessionsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    refresh_token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    device_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    app_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revoked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_sessionsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    refresh_token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    device_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    app_version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revoked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_sessionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    refresh_token_hash?: boolean;
    device_name?: boolean;
    device_os?: boolean;
    app_version?: boolean;
    ip_address?: boolean;
    user_agent?: boolean;
    expires_at?: boolean;
    revoked_at?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_sessions"]>;
export type user_sessionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    refresh_token_hash?: boolean;
    device_name?: boolean;
    device_os?: boolean;
    app_version?: boolean;
    ip_address?: boolean;
    user_agent?: boolean;
    expires_at?: boolean;
    revoked_at?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_sessions"]>;
export type user_sessionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    refresh_token_hash?: boolean;
    device_name?: boolean;
    device_os?: boolean;
    app_version?: boolean;
    ip_address?: boolean;
    user_agent?: boolean;
    expires_at?: boolean;
    revoked_at?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_sessions"]>;
export type user_sessionsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    refresh_token_hash?: boolean;
    device_name?: boolean;
    device_os?: boolean;
    app_version?: boolean;
    ip_address?: boolean;
    user_agent?: boolean;
    expires_at?: boolean;
    revoked_at?: boolean;
    created_at?: boolean;
};
export type user_sessionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "refresh_token_hash" | "device_name" | "device_os" | "app_version" | "ip_address" | "user_agent" | "expires_at" | "revoked_at" | "created_at", ExtArgs["result"]["user_sessions"]>;
export type user_sessionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type user_sessionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type user_sessionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $user_sessionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "user_sessions";
    objects: {
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        refresh_token_hash: string;
        device_name: string | null;
        device_os: string | null;
        app_version: string | null;
        ip_address: string | null;
        user_agent: string | null;
        expires_at: Date;
        revoked_at: Date | null;
        created_at: Date;
    }, ExtArgs["result"]["user_sessions"]>;
    composites: {};
};
export type user_sessionsGetPayload<S extends boolean | null | undefined | user_sessionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$user_sessionsPayload, S>;
export type user_sessionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<user_sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: User_sessionsCountAggregateInputType | true;
};
export interface user_sessionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['user_sessions'];
        meta: {
            name: 'user_sessions';
        };
    };
    findUnique<T extends user_sessionsFindUniqueArgs>(args: Prisma.SelectSubset<T, user_sessionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__user_sessionsClient<runtime.Types.Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends user_sessionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, user_sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__user_sessionsClient<runtime.Types.Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends user_sessionsFindFirstArgs>(args?: Prisma.SelectSubset<T, user_sessionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__user_sessionsClient<runtime.Types.Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends user_sessionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, user_sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__user_sessionsClient<runtime.Types.Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends user_sessionsFindManyArgs>(args?: Prisma.SelectSubset<T, user_sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends user_sessionsCreateArgs>(args: Prisma.SelectSubset<T, user_sessionsCreateArgs<ExtArgs>>): Prisma.Prisma__user_sessionsClient<runtime.Types.Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends user_sessionsCreateManyArgs>(args?: Prisma.SelectSubset<T, user_sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends user_sessionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, user_sessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends user_sessionsDeleteArgs>(args: Prisma.SelectSubset<T, user_sessionsDeleteArgs<ExtArgs>>): Prisma.Prisma__user_sessionsClient<runtime.Types.Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends user_sessionsUpdateArgs>(args: Prisma.SelectSubset<T, user_sessionsUpdateArgs<ExtArgs>>): Prisma.Prisma__user_sessionsClient<runtime.Types.Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends user_sessionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, user_sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends user_sessionsUpdateManyArgs>(args: Prisma.SelectSubset<T, user_sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends user_sessionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, user_sessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends user_sessionsUpsertArgs>(args: Prisma.SelectSubset<T, user_sessionsUpsertArgs<ExtArgs>>): Prisma.Prisma__user_sessionsClient<runtime.Types.Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends user_sessionsCountArgs>(args?: Prisma.Subset<T, user_sessionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], User_sessionsCountAggregateOutputType> : number>;
    aggregate<T extends User_sessionsAggregateArgs>(args: Prisma.Subset<T, User_sessionsAggregateArgs>): Prisma.PrismaPromise<GetUser_sessionsAggregateType<T>>;
    groupBy<T extends user_sessionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: user_sessionsGroupByArgs['orderBy'];
    } : {
        orderBy?: user_sessionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, user_sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_sessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: user_sessionsFieldRefs;
}
export interface Prisma__user_sessionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface user_sessionsFieldRefs {
    readonly id: Prisma.FieldRef<"user_sessions", 'String'>;
    readonly user_id: Prisma.FieldRef<"user_sessions", 'String'>;
    readonly refresh_token_hash: Prisma.FieldRef<"user_sessions", 'String'>;
    readonly device_name: Prisma.FieldRef<"user_sessions", 'String'>;
    readonly device_os: Prisma.FieldRef<"user_sessions", 'String'>;
    readonly app_version: Prisma.FieldRef<"user_sessions", 'String'>;
    readonly ip_address: Prisma.FieldRef<"user_sessions", 'String'>;
    readonly user_agent: Prisma.FieldRef<"user_sessions", 'String'>;
    readonly expires_at: Prisma.FieldRef<"user_sessions", 'DateTime'>;
    readonly revoked_at: Prisma.FieldRef<"user_sessions", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"user_sessions", 'DateTime'>;
}
export type user_sessionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_sessionsSelect<ExtArgs> | null;
    omit?: Prisma.user_sessionsOmit<ExtArgs> | null;
    include?: Prisma.user_sessionsInclude<ExtArgs> | null;
    where: Prisma.user_sessionsWhereUniqueInput;
};
export type user_sessionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_sessionsSelect<ExtArgs> | null;
    omit?: Prisma.user_sessionsOmit<ExtArgs> | null;
    include?: Prisma.user_sessionsInclude<ExtArgs> | null;
    where: Prisma.user_sessionsWhereUniqueInput;
};
export type user_sessionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_sessionsSelect<ExtArgs> | null;
    omit?: Prisma.user_sessionsOmit<ExtArgs> | null;
    include?: Prisma.user_sessionsInclude<ExtArgs> | null;
    where?: Prisma.user_sessionsWhereInput;
    orderBy?: Prisma.user_sessionsOrderByWithRelationInput | Prisma.user_sessionsOrderByWithRelationInput[];
    cursor?: Prisma.user_sessionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_sessionsScalarFieldEnum | Prisma.User_sessionsScalarFieldEnum[];
};
export type user_sessionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_sessionsSelect<ExtArgs> | null;
    omit?: Prisma.user_sessionsOmit<ExtArgs> | null;
    include?: Prisma.user_sessionsInclude<ExtArgs> | null;
    where?: Prisma.user_sessionsWhereInput;
    orderBy?: Prisma.user_sessionsOrderByWithRelationInput | Prisma.user_sessionsOrderByWithRelationInput[];
    cursor?: Prisma.user_sessionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_sessionsScalarFieldEnum | Prisma.User_sessionsScalarFieldEnum[];
};
export type user_sessionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_sessionsSelect<ExtArgs> | null;
    omit?: Prisma.user_sessionsOmit<ExtArgs> | null;
    include?: Prisma.user_sessionsInclude<ExtArgs> | null;
    where?: Prisma.user_sessionsWhereInput;
    orderBy?: Prisma.user_sessionsOrderByWithRelationInput | Prisma.user_sessionsOrderByWithRelationInput[];
    cursor?: Prisma.user_sessionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_sessionsScalarFieldEnum | Prisma.User_sessionsScalarFieldEnum[];
};
export type user_sessionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_sessionsSelect<ExtArgs> | null;
    omit?: Prisma.user_sessionsOmit<ExtArgs> | null;
    include?: Prisma.user_sessionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_sessionsCreateInput, Prisma.user_sessionsUncheckedCreateInput>;
};
export type user_sessionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.user_sessionsCreateManyInput | Prisma.user_sessionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type user_sessionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_sessionsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.user_sessionsOmit<ExtArgs> | null;
    data: Prisma.user_sessionsCreateManyInput | Prisma.user_sessionsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.user_sessionsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type user_sessionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_sessionsSelect<ExtArgs> | null;
    omit?: Prisma.user_sessionsOmit<ExtArgs> | null;
    include?: Prisma.user_sessionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_sessionsUpdateInput, Prisma.user_sessionsUncheckedUpdateInput>;
    where: Prisma.user_sessionsWhereUniqueInput;
};
export type user_sessionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.user_sessionsUpdateManyMutationInput, Prisma.user_sessionsUncheckedUpdateManyInput>;
    where?: Prisma.user_sessionsWhereInput;
    limit?: number;
};
export type user_sessionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_sessionsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.user_sessionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_sessionsUpdateManyMutationInput, Prisma.user_sessionsUncheckedUpdateManyInput>;
    where?: Prisma.user_sessionsWhereInput;
    limit?: number;
    include?: Prisma.user_sessionsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type user_sessionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_sessionsSelect<ExtArgs> | null;
    omit?: Prisma.user_sessionsOmit<ExtArgs> | null;
    include?: Prisma.user_sessionsInclude<ExtArgs> | null;
    where: Prisma.user_sessionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_sessionsCreateInput, Prisma.user_sessionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.user_sessionsUpdateInput, Prisma.user_sessionsUncheckedUpdateInput>;
};
export type user_sessionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_sessionsSelect<ExtArgs> | null;
    omit?: Prisma.user_sessionsOmit<ExtArgs> | null;
    include?: Prisma.user_sessionsInclude<ExtArgs> | null;
    where: Prisma.user_sessionsWhereUniqueInput;
};
export type user_sessionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_sessionsWhereInput;
    limit?: number;
};
export type user_sessionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_sessionsSelect<ExtArgs> | null;
    omit?: Prisma.user_sessionsOmit<ExtArgs> | null;
    include?: Prisma.user_sessionsInclude<ExtArgs> | null;
};
export {};
