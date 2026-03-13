import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type otp_verificationsModel = runtime.Types.Result.DefaultSelection<Prisma.$otp_verificationsPayload>;
export type AggregateOtp_verifications = {
    _count: Otp_verificationsCountAggregateOutputType | null;
    _min: Otp_verificationsMinAggregateOutputType | null;
    _max: Otp_verificationsMaxAggregateOutputType | null;
};
export type Otp_verificationsMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    target: string | null;
    channel: $Enums.otp_channel_type | null;
    purpose: $Enums.otp_purpose_type | null;
    code_hash: string | null;
    expires_at: Date | null;
    consumed_at: Date | null;
    created_at: Date | null;
};
export type Otp_verificationsMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    target: string | null;
    channel: $Enums.otp_channel_type | null;
    purpose: $Enums.otp_purpose_type | null;
    code_hash: string | null;
    expires_at: Date | null;
    consumed_at: Date | null;
    created_at: Date | null;
};
export type Otp_verificationsCountAggregateOutputType = {
    id: number;
    user_id: number;
    target: number;
    channel: number;
    purpose: number;
    code_hash: number;
    expires_at: number;
    consumed_at: number;
    created_at: number;
    _all: number;
};
export type Otp_verificationsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    target?: true;
    channel?: true;
    purpose?: true;
    code_hash?: true;
    expires_at?: true;
    consumed_at?: true;
    created_at?: true;
};
export type Otp_verificationsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    target?: true;
    channel?: true;
    purpose?: true;
    code_hash?: true;
    expires_at?: true;
    consumed_at?: true;
    created_at?: true;
};
export type Otp_verificationsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    target?: true;
    channel?: true;
    purpose?: true;
    code_hash?: true;
    expires_at?: true;
    consumed_at?: true;
    created_at?: true;
    _all?: true;
};
export type Otp_verificationsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.otp_verificationsWhereInput;
    orderBy?: Prisma.otp_verificationsOrderByWithRelationInput | Prisma.otp_verificationsOrderByWithRelationInput[];
    cursor?: Prisma.otp_verificationsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Otp_verificationsCountAggregateInputType;
    _min?: Otp_verificationsMinAggregateInputType;
    _max?: Otp_verificationsMaxAggregateInputType;
};
export type GetOtp_verificationsAggregateType<T extends Otp_verificationsAggregateArgs> = {
    [P in keyof T & keyof AggregateOtp_verifications]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOtp_verifications[P]> : Prisma.GetScalarType<T[P], AggregateOtp_verifications[P]>;
};
export type otp_verificationsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.otp_verificationsWhereInput;
    orderBy?: Prisma.otp_verificationsOrderByWithAggregationInput | Prisma.otp_verificationsOrderByWithAggregationInput[];
    by: Prisma.Otp_verificationsScalarFieldEnum[] | Prisma.Otp_verificationsScalarFieldEnum;
    having?: Prisma.otp_verificationsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Otp_verificationsCountAggregateInputType | true;
    _min?: Otp_verificationsMinAggregateInputType;
    _max?: Otp_verificationsMaxAggregateInputType;
};
export type Otp_verificationsGroupByOutputType = {
    id: string;
    user_id: string | null;
    target: string;
    channel: $Enums.otp_channel_type;
    purpose: $Enums.otp_purpose_type;
    code_hash: string;
    expires_at: Date;
    consumed_at: Date | null;
    created_at: Date;
    _count: Otp_verificationsCountAggregateOutputType | null;
    _min: Otp_verificationsMinAggregateOutputType | null;
    _max: Otp_verificationsMaxAggregateOutputType | null;
};
type GetOtp_verificationsGroupByPayload<T extends otp_verificationsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Otp_verificationsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Otp_verificationsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Otp_verificationsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Otp_verificationsGroupByOutputType[P]>;
}>>;
export type otp_verificationsWhereInput = {
    AND?: Prisma.otp_verificationsWhereInput | Prisma.otp_verificationsWhereInput[];
    OR?: Prisma.otp_verificationsWhereInput[];
    NOT?: Prisma.otp_verificationsWhereInput | Prisma.otp_verificationsWhereInput[];
    id?: Prisma.UuidFilter<"otp_verifications"> | string;
    user_id?: Prisma.UuidNullableFilter<"otp_verifications"> | string | null;
    target?: Prisma.StringFilter<"otp_verifications"> | string;
    channel?: Prisma.Enumotp_channel_typeFilter<"otp_verifications"> | $Enums.otp_channel_type;
    purpose?: Prisma.Enumotp_purpose_typeFilter<"otp_verifications"> | $Enums.otp_purpose_type;
    code_hash?: Prisma.StringFilter<"otp_verifications"> | string;
    expires_at?: Prisma.DateTimeFilter<"otp_verifications"> | Date | string;
    consumed_at?: Prisma.DateTimeNullableFilter<"otp_verifications"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"otp_verifications"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type otp_verificationsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    target?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    code_hash?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    consumed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type otp_verificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.otp_verificationsWhereInput | Prisma.otp_verificationsWhereInput[];
    OR?: Prisma.otp_verificationsWhereInput[];
    NOT?: Prisma.otp_verificationsWhereInput | Prisma.otp_verificationsWhereInput[];
    user_id?: Prisma.UuidNullableFilter<"otp_verifications"> | string | null;
    target?: Prisma.StringFilter<"otp_verifications"> | string;
    channel?: Prisma.Enumotp_channel_typeFilter<"otp_verifications"> | $Enums.otp_channel_type;
    purpose?: Prisma.Enumotp_purpose_typeFilter<"otp_verifications"> | $Enums.otp_purpose_type;
    code_hash?: Prisma.StringFilter<"otp_verifications"> | string;
    expires_at?: Prisma.DateTimeFilter<"otp_verifications"> | Date | string;
    consumed_at?: Prisma.DateTimeNullableFilter<"otp_verifications"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"otp_verifications"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "id">;
export type otp_verificationsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    target?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    code_hash?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    consumed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.otp_verificationsCountOrderByAggregateInput;
    _max?: Prisma.otp_verificationsMaxOrderByAggregateInput;
    _min?: Prisma.otp_verificationsMinOrderByAggregateInput;
};
export type otp_verificationsScalarWhereWithAggregatesInput = {
    AND?: Prisma.otp_verificationsScalarWhereWithAggregatesInput | Prisma.otp_verificationsScalarWhereWithAggregatesInput[];
    OR?: Prisma.otp_verificationsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.otp_verificationsScalarWhereWithAggregatesInput | Prisma.otp_verificationsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"otp_verifications"> | string;
    user_id?: Prisma.UuidNullableWithAggregatesFilter<"otp_verifications"> | string | null;
    target?: Prisma.StringWithAggregatesFilter<"otp_verifications"> | string;
    channel?: Prisma.Enumotp_channel_typeWithAggregatesFilter<"otp_verifications"> | $Enums.otp_channel_type;
    purpose?: Prisma.Enumotp_purpose_typeWithAggregatesFilter<"otp_verifications"> | $Enums.otp_purpose_type;
    code_hash?: Prisma.StringWithAggregatesFilter<"otp_verifications"> | string;
    expires_at?: Prisma.DateTimeWithAggregatesFilter<"otp_verifications"> | Date | string;
    consumed_at?: Prisma.DateTimeNullableWithAggregatesFilter<"otp_verifications"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"otp_verifications"> | Date | string;
};
export type otp_verificationsCreateInput = {
    id?: string;
    target: string;
    channel: $Enums.otp_channel_type;
    purpose: $Enums.otp_purpose_type;
    code_hash: string;
    expires_at: Date | string;
    consumed_at?: Date | string | null;
    created_at?: Date | string;
    users?: Prisma.usersCreateNestedOneWithoutOtp_verificationsInput;
};
export type otp_verificationsUncheckedCreateInput = {
    id?: string;
    user_id?: string | null;
    target: string;
    channel: $Enums.otp_channel_type;
    purpose: $Enums.otp_purpose_type;
    code_hash: string;
    expires_at: Date | string;
    consumed_at?: Date | string | null;
    created_at?: Date | string;
};
export type otp_verificationsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    target?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.Enumotp_channel_typeFieldUpdateOperationsInput | $Enums.otp_channel_type;
    purpose?: Prisma.Enumotp_purpose_typeFieldUpdateOperationsInput | $Enums.otp_purpose_type;
    code_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consumed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneWithoutOtp_verificationsNestedInput;
};
export type otp_verificationsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.Enumotp_channel_typeFieldUpdateOperationsInput | $Enums.otp_channel_type;
    purpose?: Prisma.Enumotp_purpose_typeFieldUpdateOperationsInput | $Enums.otp_purpose_type;
    code_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consumed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type otp_verificationsCreateManyInput = {
    id?: string;
    user_id?: string | null;
    target: string;
    channel: $Enums.otp_channel_type;
    purpose: $Enums.otp_purpose_type;
    code_hash: string;
    expires_at: Date | string;
    consumed_at?: Date | string | null;
    created_at?: Date | string;
};
export type otp_verificationsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    target?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.Enumotp_channel_typeFieldUpdateOperationsInput | $Enums.otp_channel_type;
    purpose?: Prisma.Enumotp_purpose_typeFieldUpdateOperationsInput | $Enums.otp_purpose_type;
    code_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consumed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type otp_verificationsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.Enumotp_channel_typeFieldUpdateOperationsInput | $Enums.otp_channel_type;
    purpose?: Prisma.Enumotp_purpose_typeFieldUpdateOperationsInput | $Enums.otp_purpose_type;
    code_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consumed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type otp_verificationsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    code_hash?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    consumed_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type otp_verificationsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    code_hash?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    consumed_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type otp_verificationsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    code_hash?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    consumed_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type Otp_verificationsListRelationFilter = {
    every?: Prisma.otp_verificationsWhereInput;
    some?: Prisma.otp_verificationsWhereInput;
    none?: Prisma.otp_verificationsWhereInput;
};
export type otp_verificationsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Enumotp_channel_typeFieldUpdateOperationsInput = {
    set?: $Enums.otp_channel_type;
};
export type Enumotp_purpose_typeFieldUpdateOperationsInput = {
    set?: $Enums.otp_purpose_type;
};
export type otp_verificationsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.otp_verificationsCreateWithoutUsersInput, Prisma.otp_verificationsUncheckedCreateWithoutUsersInput> | Prisma.otp_verificationsCreateWithoutUsersInput[] | Prisma.otp_verificationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.otp_verificationsCreateOrConnectWithoutUsersInput | Prisma.otp_verificationsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.otp_verificationsCreateManyUsersInputEnvelope;
    connect?: Prisma.otp_verificationsWhereUniqueInput | Prisma.otp_verificationsWhereUniqueInput[];
};
export type otp_verificationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.otp_verificationsCreateWithoutUsersInput, Prisma.otp_verificationsUncheckedCreateWithoutUsersInput> | Prisma.otp_verificationsCreateWithoutUsersInput[] | Prisma.otp_verificationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.otp_verificationsCreateOrConnectWithoutUsersInput | Prisma.otp_verificationsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.otp_verificationsCreateManyUsersInputEnvelope;
    connect?: Prisma.otp_verificationsWhereUniqueInput | Prisma.otp_verificationsWhereUniqueInput[];
};
export type otp_verificationsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.otp_verificationsCreateWithoutUsersInput, Prisma.otp_verificationsUncheckedCreateWithoutUsersInput> | Prisma.otp_verificationsCreateWithoutUsersInput[] | Prisma.otp_verificationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.otp_verificationsCreateOrConnectWithoutUsersInput | Prisma.otp_verificationsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.otp_verificationsUpsertWithWhereUniqueWithoutUsersInput | Prisma.otp_verificationsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.otp_verificationsCreateManyUsersInputEnvelope;
    set?: Prisma.otp_verificationsWhereUniqueInput | Prisma.otp_verificationsWhereUniqueInput[];
    disconnect?: Prisma.otp_verificationsWhereUniqueInput | Prisma.otp_verificationsWhereUniqueInput[];
    delete?: Prisma.otp_verificationsWhereUniqueInput | Prisma.otp_verificationsWhereUniqueInput[];
    connect?: Prisma.otp_verificationsWhereUniqueInput | Prisma.otp_verificationsWhereUniqueInput[];
    update?: Prisma.otp_verificationsUpdateWithWhereUniqueWithoutUsersInput | Prisma.otp_verificationsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.otp_verificationsUpdateManyWithWhereWithoutUsersInput | Prisma.otp_verificationsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.otp_verificationsScalarWhereInput | Prisma.otp_verificationsScalarWhereInput[];
};
export type otp_verificationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.otp_verificationsCreateWithoutUsersInput, Prisma.otp_verificationsUncheckedCreateWithoutUsersInput> | Prisma.otp_verificationsCreateWithoutUsersInput[] | Prisma.otp_verificationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.otp_verificationsCreateOrConnectWithoutUsersInput | Prisma.otp_verificationsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.otp_verificationsUpsertWithWhereUniqueWithoutUsersInput | Prisma.otp_verificationsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.otp_verificationsCreateManyUsersInputEnvelope;
    set?: Prisma.otp_verificationsWhereUniqueInput | Prisma.otp_verificationsWhereUniqueInput[];
    disconnect?: Prisma.otp_verificationsWhereUniqueInput | Prisma.otp_verificationsWhereUniqueInput[];
    delete?: Prisma.otp_verificationsWhereUniqueInput | Prisma.otp_verificationsWhereUniqueInput[];
    connect?: Prisma.otp_verificationsWhereUniqueInput | Prisma.otp_verificationsWhereUniqueInput[];
    update?: Prisma.otp_verificationsUpdateWithWhereUniqueWithoutUsersInput | Prisma.otp_verificationsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.otp_verificationsUpdateManyWithWhereWithoutUsersInput | Prisma.otp_verificationsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.otp_verificationsScalarWhereInput | Prisma.otp_verificationsScalarWhereInput[];
};
export type otp_verificationsCreateWithoutUsersInput = {
    id?: string;
    target: string;
    channel: $Enums.otp_channel_type;
    purpose: $Enums.otp_purpose_type;
    code_hash: string;
    expires_at: Date | string;
    consumed_at?: Date | string | null;
    created_at?: Date | string;
};
export type otp_verificationsUncheckedCreateWithoutUsersInput = {
    id?: string;
    target: string;
    channel: $Enums.otp_channel_type;
    purpose: $Enums.otp_purpose_type;
    code_hash: string;
    expires_at: Date | string;
    consumed_at?: Date | string | null;
    created_at?: Date | string;
};
export type otp_verificationsCreateOrConnectWithoutUsersInput = {
    where: Prisma.otp_verificationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.otp_verificationsCreateWithoutUsersInput, Prisma.otp_verificationsUncheckedCreateWithoutUsersInput>;
};
export type otp_verificationsCreateManyUsersInputEnvelope = {
    data: Prisma.otp_verificationsCreateManyUsersInput | Prisma.otp_verificationsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type otp_verificationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.otp_verificationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.otp_verificationsUpdateWithoutUsersInput, Prisma.otp_verificationsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.otp_verificationsCreateWithoutUsersInput, Prisma.otp_verificationsUncheckedCreateWithoutUsersInput>;
};
export type otp_verificationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.otp_verificationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.otp_verificationsUpdateWithoutUsersInput, Prisma.otp_verificationsUncheckedUpdateWithoutUsersInput>;
};
export type otp_verificationsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.otp_verificationsScalarWhereInput;
    data: Prisma.XOR<Prisma.otp_verificationsUpdateManyMutationInput, Prisma.otp_verificationsUncheckedUpdateManyWithoutUsersInput>;
};
export type otp_verificationsScalarWhereInput = {
    AND?: Prisma.otp_verificationsScalarWhereInput | Prisma.otp_verificationsScalarWhereInput[];
    OR?: Prisma.otp_verificationsScalarWhereInput[];
    NOT?: Prisma.otp_verificationsScalarWhereInput | Prisma.otp_verificationsScalarWhereInput[];
    id?: Prisma.UuidFilter<"otp_verifications"> | string;
    user_id?: Prisma.UuidNullableFilter<"otp_verifications"> | string | null;
    target?: Prisma.StringFilter<"otp_verifications"> | string;
    channel?: Prisma.Enumotp_channel_typeFilter<"otp_verifications"> | $Enums.otp_channel_type;
    purpose?: Prisma.Enumotp_purpose_typeFilter<"otp_verifications"> | $Enums.otp_purpose_type;
    code_hash?: Prisma.StringFilter<"otp_verifications"> | string;
    expires_at?: Prisma.DateTimeFilter<"otp_verifications"> | Date | string;
    consumed_at?: Prisma.DateTimeNullableFilter<"otp_verifications"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"otp_verifications"> | Date | string;
};
export type otp_verificationsCreateManyUsersInput = {
    id?: string;
    target: string;
    channel: $Enums.otp_channel_type;
    purpose: $Enums.otp_purpose_type;
    code_hash: string;
    expires_at: Date | string;
    consumed_at?: Date | string | null;
    created_at?: Date | string;
};
export type otp_verificationsUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    target?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.Enumotp_channel_typeFieldUpdateOperationsInput | $Enums.otp_channel_type;
    purpose?: Prisma.Enumotp_purpose_typeFieldUpdateOperationsInput | $Enums.otp_purpose_type;
    code_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consumed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type otp_verificationsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    target?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.Enumotp_channel_typeFieldUpdateOperationsInput | $Enums.otp_channel_type;
    purpose?: Prisma.Enumotp_purpose_typeFieldUpdateOperationsInput | $Enums.otp_purpose_type;
    code_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consumed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type otp_verificationsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    target?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.Enumotp_channel_typeFieldUpdateOperationsInput | $Enums.otp_channel_type;
    purpose?: Prisma.Enumotp_purpose_typeFieldUpdateOperationsInput | $Enums.otp_purpose_type;
    code_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consumed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type otp_verificationsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    target?: boolean;
    channel?: boolean;
    purpose?: boolean;
    code_hash?: boolean;
    expires_at?: boolean;
    consumed_at?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.otp_verifications$usersArgs<ExtArgs>;
}, ExtArgs["result"]["otp_verifications"]>;
export type otp_verificationsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    target?: boolean;
    channel?: boolean;
    purpose?: boolean;
    code_hash?: boolean;
    expires_at?: boolean;
    consumed_at?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.otp_verifications$usersArgs<ExtArgs>;
}, ExtArgs["result"]["otp_verifications"]>;
export type otp_verificationsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    target?: boolean;
    channel?: boolean;
    purpose?: boolean;
    code_hash?: boolean;
    expires_at?: boolean;
    consumed_at?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.otp_verifications$usersArgs<ExtArgs>;
}, ExtArgs["result"]["otp_verifications"]>;
export type otp_verificationsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    target?: boolean;
    channel?: boolean;
    purpose?: boolean;
    code_hash?: boolean;
    expires_at?: boolean;
    consumed_at?: boolean;
    created_at?: boolean;
};
export type otp_verificationsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "target" | "channel" | "purpose" | "code_hash" | "expires_at" | "consumed_at" | "created_at", ExtArgs["result"]["otp_verifications"]>;
export type otp_verificationsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.otp_verifications$usersArgs<ExtArgs>;
};
export type otp_verificationsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.otp_verifications$usersArgs<ExtArgs>;
};
export type otp_verificationsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.otp_verifications$usersArgs<ExtArgs>;
};
export type $otp_verificationsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "otp_verifications";
    objects: {
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string | null;
        target: string;
        channel: $Enums.otp_channel_type;
        purpose: $Enums.otp_purpose_type;
        code_hash: string;
        expires_at: Date;
        consumed_at: Date | null;
        created_at: Date;
    }, ExtArgs["result"]["otp_verifications"]>;
    composites: {};
};
export type otp_verificationsGetPayload<S extends boolean | null | undefined | otp_verificationsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$otp_verificationsPayload, S>;
export type otp_verificationsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<otp_verificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Otp_verificationsCountAggregateInputType | true;
};
export interface otp_verificationsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['otp_verifications'];
        meta: {
            name: 'otp_verifications';
        };
    };
    findUnique<T extends otp_verificationsFindUniqueArgs>(args: Prisma.SelectSubset<T, otp_verificationsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__otp_verificationsClient<runtime.Types.Result.GetResult<Prisma.$otp_verificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends otp_verificationsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, otp_verificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__otp_verificationsClient<runtime.Types.Result.GetResult<Prisma.$otp_verificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends otp_verificationsFindFirstArgs>(args?: Prisma.SelectSubset<T, otp_verificationsFindFirstArgs<ExtArgs>>): Prisma.Prisma__otp_verificationsClient<runtime.Types.Result.GetResult<Prisma.$otp_verificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends otp_verificationsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, otp_verificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__otp_verificationsClient<runtime.Types.Result.GetResult<Prisma.$otp_verificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends otp_verificationsFindManyArgs>(args?: Prisma.SelectSubset<T, otp_verificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$otp_verificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends otp_verificationsCreateArgs>(args: Prisma.SelectSubset<T, otp_verificationsCreateArgs<ExtArgs>>): Prisma.Prisma__otp_verificationsClient<runtime.Types.Result.GetResult<Prisma.$otp_verificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends otp_verificationsCreateManyArgs>(args?: Prisma.SelectSubset<T, otp_verificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends otp_verificationsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, otp_verificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$otp_verificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends otp_verificationsDeleteArgs>(args: Prisma.SelectSubset<T, otp_verificationsDeleteArgs<ExtArgs>>): Prisma.Prisma__otp_verificationsClient<runtime.Types.Result.GetResult<Prisma.$otp_verificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends otp_verificationsUpdateArgs>(args: Prisma.SelectSubset<T, otp_verificationsUpdateArgs<ExtArgs>>): Prisma.Prisma__otp_verificationsClient<runtime.Types.Result.GetResult<Prisma.$otp_verificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends otp_verificationsDeleteManyArgs>(args?: Prisma.SelectSubset<T, otp_verificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends otp_verificationsUpdateManyArgs>(args: Prisma.SelectSubset<T, otp_verificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends otp_verificationsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, otp_verificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$otp_verificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends otp_verificationsUpsertArgs>(args: Prisma.SelectSubset<T, otp_verificationsUpsertArgs<ExtArgs>>): Prisma.Prisma__otp_verificationsClient<runtime.Types.Result.GetResult<Prisma.$otp_verificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends otp_verificationsCountArgs>(args?: Prisma.Subset<T, otp_verificationsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Otp_verificationsCountAggregateOutputType> : number>;
    aggregate<T extends Otp_verificationsAggregateArgs>(args: Prisma.Subset<T, Otp_verificationsAggregateArgs>): Prisma.PrismaPromise<GetOtp_verificationsAggregateType<T>>;
    groupBy<T extends otp_verificationsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: otp_verificationsGroupByArgs['orderBy'];
    } : {
        orderBy?: otp_verificationsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, otp_verificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtp_verificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: otp_verificationsFieldRefs;
}
export interface Prisma__otp_verificationsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.otp_verifications$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.otp_verifications$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface otp_verificationsFieldRefs {
    readonly id: Prisma.FieldRef<"otp_verifications", 'String'>;
    readonly user_id: Prisma.FieldRef<"otp_verifications", 'String'>;
    readonly target: Prisma.FieldRef<"otp_verifications", 'String'>;
    readonly channel: Prisma.FieldRef<"otp_verifications", 'otp_channel_type'>;
    readonly purpose: Prisma.FieldRef<"otp_verifications", 'otp_purpose_type'>;
    readonly code_hash: Prisma.FieldRef<"otp_verifications", 'String'>;
    readonly expires_at: Prisma.FieldRef<"otp_verifications", 'DateTime'>;
    readonly consumed_at: Prisma.FieldRef<"otp_verifications", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"otp_verifications", 'DateTime'>;
}
export type otp_verificationsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.otp_verificationsSelect<ExtArgs> | null;
    omit?: Prisma.otp_verificationsOmit<ExtArgs> | null;
    include?: Prisma.otp_verificationsInclude<ExtArgs> | null;
    where: Prisma.otp_verificationsWhereUniqueInput;
};
export type otp_verificationsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.otp_verificationsSelect<ExtArgs> | null;
    omit?: Prisma.otp_verificationsOmit<ExtArgs> | null;
    include?: Prisma.otp_verificationsInclude<ExtArgs> | null;
    where: Prisma.otp_verificationsWhereUniqueInput;
};
export type otp_verificationsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.otp_verificationsSelect<ExtArgs> | null;
    omit?: Prisma.otp_verificationsOmit<ExtArgs> | null;
    include?: Prisma.otp_verificationsInclude<ExtArgs> | null;
    where?: Prisma.otp_verificationsWhereInput;
    orderBy?: Prisma.otp_verificationsOrderByWithRelationInput | Prisma.otp_verificationsOrderByWithRelationInput[];
    cursor?: Prisma.otp_verificationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Otp_verificationsScalarFieldEnum | Prisma.Otp_verificationsScalarFieldEnum[];
};
export type otp_verificationsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.otp_verificationsSelect<ExtArgs> | null;
    omit?: Prisma.otp_verificationsOmit<ExtArgs> | null;
    include?: Prisma.otp_verificationsInclude<ExtArgs> | null;
    where?: Prisma.otp_verificationsWhereInput;
    orderBy?: Prisma.otp_verificationsOrderByWithRelationInput | Prisma.otp_verificationsOrderByWithRelationInput[];
    cursor?: Prisma.otp_verificationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Otp_verificationsScalarFieldEnum | Prisma.Otp_verificationsScalarFieldEnum[];
};
export type otp_verificationsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.otp_verificationsSelect<ExtArgs> | null;
    omit?: Prisma.otp_verificationsOmit<ExtArgs> | null;
    include?: Prisma.otp_verificationsInclude<ExtArgs> | null;
    where?: Prisma.otp_verificationsWhereInput;
    orderBy?: Prisma.otp_verificationsOrderByWithRelationInput | Prisma.otp_verificationsOrderByWithRelationInput[];
    cursor?: Prisma.otp_verificationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Otp_verificationsScalarFieldEnum | Prisma.Otp_verificationsScalarFieldEnum[];
};
export type otp_verificationsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.otp_verificationsSelect<ExtArgs> | null;
    omit?: Prisma.otp_verificationsOmit<ExtArgs> | null;
    include?: Prisma.otp_verificationsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.otp_verificationsCreateInput, Prisma.otp_verificationsUncheckedCreateInput>;
};
export type otp_verificationsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.otp_verificationsCreateManyInput | Prisma.otp_verificationsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type otp_verificationsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.otp_verificationsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.otp_verificationsOmit<ExtArgs> | null;
    data: Prisma.otp_verificationsCreateManyInput | Prisma.otp_verificationsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.otp_verificationsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type otp_verificationsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.otp_verificationsSelect<ExtArgs> | null;
    omit?: Prisma.otp_verificationsOmit<ExtArgs> | null;
    include?: Prisma.otp_verificationsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.otp_verificationsUpdateInput, Prisma.otp_verificationsUncheckedUpdateInput>;
    where: Prisma.otp_verificationsWhereUniqueInput;
};
export type otp_verificationsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.otp_verificationsUpdateManyMutationInput, Prisma.otp_verificationsUncheckedUpdateManyInput>;
    where?: Prisma.otp_verificationsWhereInput;
    limit?: number;
};
export type otp_verificationsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.otp_verificationsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.otp_verificationsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.otp_verificationsUpdateManyMutationInput, Prisma.otp_verificationsUncheckedUpdateManyInput>;
    where?: Prisma.otp_verificationsWhereInput;
    limit?: number;
    include?: Prisma.otp_verificationsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type otp_verificationsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.otp_verificationsSelect<ExtArgs> | null;
    omit?: Prisma.otp_verificationsOmit<ExtArgs> | null;
    include?: Prisma.otp_verificationsInclude<ExtArgs> | null;
    where: Prisma.otp_verificationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.otp_verificationsCreateInput, Prisma.otp_verificationsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.otp_verificationsUpdateInput, Prisma.otp_verificationsUncheckedUpdateInput>;
};
export type otp_verificationsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.otp_verificationsSelect<ExtArgs> | null;
    omit?: Prisma.otp_verificationsOmit<ExtArgs> | null;
    include?: Prisma.otp_verificationsInclude<ExtArgs> | null;
    where: Prisma.otp_verificationsWhereUniqueInput;
};
export type otp_verificationsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.otp_verificationsWhereInput;
    limit?: number;
};
export type otp_verifications$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type otp_verificationsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.otp_verificationsSelect<ExtArgs> | null;
    omit?: Prisma.otp_verificationsOmit<ExtArgs> | null;
    include?: Prisma.otp_verificationsInclude<ExtArgs> | null;
};
export {};
