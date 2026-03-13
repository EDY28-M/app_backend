import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type rider_locationsModel = runtime.Types.Result.DefaultSelection<Prisma.$rider_locationsPayload>;
export type AggregateRider_locations = {
    _count: Rider_locationsCountAggregateOutputType | null;
    _avg: Rider_locationsAvgAggregateOutputType | null;
    _sum: Rider_locationsSumAggregateOutputType | null;
    _min: Rider_locationsMinAggregateOutputType | null;
    _max: Rider_locationsMaxAggregateOutputType | null;
};
export type Rider_locationsAvgAggregateOutputType = {
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
    heading: runtime.Decimal | null;
    speed_kph: runtime.Decimal | null;
    accuracy_meters: runtime.Decimal | null;
};
export type Rider_locationsSumAggregateOutputType = {
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
    heading: runtime.Decimal | null;
    speed_kph: runtime.Decimal | null;
    accuracy_meters: runtime.Decimal | null;
};
export type Rider_locationsMinAggregateOutputType = {
    id: string | null;
    rider_profile_id: string | null;
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
    heading: runtime.Decimal | null;
    speed_kph: runtime.Decimal | null;
    accuracy_meters: runtime.Decimal | null;
    recorded_at: Date | null;
};
export type Rider_locationsMaxAggregateOutputType = {
    id: string | null;
    rider_profile_id: string | null;
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
    heading: runtime.Decimal | null;
    speed_kph: runtime.Decimal | null;
    accuracy_meters: runtime.Decimal | null;
    recorded_at: Date | null;
};
export type Rider_locationsCountAggregateOutputType = {
    id: number;
    rider_profile_id: number;
    latitude: number;
    longitude: number;
    heading: number;
    speed_kph: number;
    accuracy_meters: number;
    recorded_at: number;
    _all: number;
};
export type Rider_locationsAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
    heading?: true;
    speed_kph?: true;
    accuracy_meters?: true;
};
export type Rider_locationsSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
    heading?: true;
    speed_kph?: true;
    accuracy_meters?: true;
};
export type Rider_locationsMinAggregateInputType = {
    id?: true;
    rider_profile_id?: true;
    latitude?: true;
    longitude?: true;
    heading?: true;
    speed_kph?: true;
    accuracy_meters?: true;
    recorded_at?: true;
};
export type Rider_locationsMaxAggregateInputType = {
    id?: true;
    rider_profile_id?: true;
    latitude?: true;
    longitude?: true;
    heading?: true;
    speed_kph?: true;
    accuracy_meters?: true;
    recorded_at?: true;
};
export type Rider_locationsCountAggregateInputType = {
    id?: true;
    rider_profile_id?: true;
    latitude?: true;
    longitude?: true;
    heading?: true;
    speed_kph?: true;
    accuracy_meters?: true;
    recorded_at?: true;
    _all?: true;
};
export type Rider_locationsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rider_locationsWhereInput;
    orderBy?: Prisma.rider_locationsOrderByWithRelationInput | Prisma.rider_locationsOrderByWithRelationInput[];
    cursor?: Prisma.rider_locationsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Rider_locationsCountAggregateInputType;
    _avg?: Rider_locationsAvgAggregateInputType;
    _sum?: Rider_locationsSumAggregateInputType;
    _min?: Rider_locationsMinAggregateInputType;
    _max?: Rider_locationsMaxAggregateInputType;
};
export type GetRider_locationsAggregateType<T extends Rider_locationsAggregateArgs> = {
    [P in keyof T & keyof AggregateRider_locations]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRider_locations[P]> : Prisma.GetScalarType<T[P], AggregateRider_locations[P]>;
};
export type rider_locationsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rider_locationsWhereInput;
    orderBy?: Prisma.rider_locationsOrderByWithAggregationInput | Prisma.rider_locationsOrderByWithAggregationInput[];
    by: Prisma.Rider_locationsScalarFieldEnum[] | Prisma.Rider_locationsScalarFieldEnum;
    having?: Prisma.rider_locationsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Rider_locationsCountAggregateInputType | true;
    _avg?: Rider_locationsAvgAggregateInputType;
    _sum?: Rider_locationsSumAggregateInputType;
    _min?: Rider_locationsMinAggregateInputType;
    _max?: Rider_locationsMaxAggregateInputType;
};
export type Rider_locationsGroupByOutputType = {
    id: string;
    rider_profile_id: string;
    latitude: runtime.Decimal;
    longitude: runtime.Decimal;
    heading: runtime.Decimal | null;
    speed_kph: runtime.Decimal | null;
    accuracy_meters: runtime.Decimal | null;
    recorded_at: Date;
    _count: Rider_locationsCountAggregateOutputType | null;
    _avg: Rider_locationsAvgAggregateOutputType | null;
    _sum: Rider_locationsSumAggregateOutputType | null;
    _min: Rider_locationsMinAggregateOutputType | null;
    _max: Rider_locationsMaxAggregateOutputType | null;
};
type GetRider_locationsGroupByPayload<T extends rider_locationsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Rider_locationsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Rider_locationsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Rider_locationsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Rider_locationsGroupByOutputType[P]>;
}>>;
export type rider_locationsWhereInput = {
    AND?: Prisma.rider_locationsWhereInput | Prisma.rider_locationsWhereInput[];
    OR?: Prisma.rider_locationsWhereInput[];
    NOT?: Prisma.rider_locationsWhereInput | Prisma.rider_locationsWhereInput[];
    id?: Prisma.UuidFilter<"rider_locations"> | string;
    rider_profile_id?: Prisma.UuidFilter<"rider_locations"> | string;
    latitude?: Prisma.DecimalFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitude?: Prisma.DecimalFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    heading?: Prisma.DecimalNullableFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speed_kph?: Prisma.DecimalNullableFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    accuracy_meters?: Prisma.DecimalNullableFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    recorded_at?: Prisma.DateTimeFilter<"rider_locations"> | Date | string;
    rider_profiles?: Prisma.XOR<Prisma.Rider_profilesScalarRelationFilter, Prisma.rider_profilesWhereInput>;
};
export type rider_locationsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rider_profile_id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    heading?: Prisma.SortOrderInput | Prisma.SortOrder;
    speed_kph?: Prisma.SortOrderInput | Prisma.SortOrder;
    accuracy_meters?: Prisma.SortOrderInput | Prisma.SortOrder;
    recorded_at?: Prisma.SortOrder;
    rider_profiles?: Prisma.rider_profilesOrderByWithRelationInput;
};
export type rider_locationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.rider_locationsWhereInput | Prisma.rider_locationsWhereInput[];
    OR?: Prisma.rider_locationsWhereInput[];
    NOT?: Prisma.rider_locationsWhereInput | Prisma.rider_locationsWhereInput[];
    rider_profile_id?: Prisma.UuidFilter<"rider_locations"> | string;
    latitude?: Prisma.DecimalFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitude?: Prisma.DecimalFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    heading?: Prisma.DecimalNullableFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speed_kph?: Prisma.DecimalNullableFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    accuracy_meters?: Prisma.DecimalNullableFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    recorded_at?: Prisma.DateTimeFilter<"rider_locations"> | Date | string;
    rider_profiles?: Prisma.XOR<Prisma.Rider_profilesScalarRelationFilter, Prisma.rider_profilesWhereInput>;
}, "id">;
export type rider_locationsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rider_profile_id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    heading?: Prisma.SortOrderInput | Prisma.SortOrder;
    speed_kph?: Prisma.SortOrderInput | Prisma.SortOrder;
    accuracy_meters?: Prisma.SortOrderInput | Prisma.SortOrder;
    recorded_at?: Prisma.SortOrder;
    _count?: Prisma.rider_locationsCountOrderByAggregateInput;
    _avg?: Prisma.rider_locationsAvgOrderByAggregateInput;
    _max?: Prisma.rider_locationsMaxOrderByAggregateInput;
    _min?: Prisma.rider_locationsMinOrderByAggregateInput;
    _sum?: Prisma.rider_locationsSumOrderByAggregateInput;
};
export type rider_locationsScalarWhereWithAggregatesInput = {
    AND?: Prisma.rider_locationsScalarWhereWithAggregatesInput | Prisma.rider_locationsScalarWhereWithAggregatesInput[];
    OR?: Prisma.rider_locationsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.rider_locationsScalarWhereWithAggregatesInput | Prisma.rider_locationsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"rider_locations"> | string;
    rider_profile_id?: Prisma.UuidWithAggregatesFilter<"rider_locations"> | string;
    latitude?: Prisma.DecimalWithAggregatesFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitude?: Prisma.DecimalWithAggregatesFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    heading?: Prisma.DecimalNullableWithAggregatesFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speed_kph?: Prisma.DecimalNullableWithAggregatesFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    accuracy_meters?: Prisma.DecimalNullableWithAggregatesFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    recorded_at?: Prisma.DateTimeWithAggregatesFilter<"rider_locations"> | Date | string;
};
export type rider_locationsCreateInput = {
    id?: string;
    latitude: runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitude: runtime.Decimal | runtime.DecimalJsLike | number | string;
    heading?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speed_kph?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    accuracy_meters?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    recorded_at?: Date | string;
    rider_profiles: Prisma.rider_profilesCreateNestedOneWithoutRider_locationsInput;
};
export type rider_locationsUncheckedCreateInput = {
    id?: string;
    rider_profile_id: string;
    latitude: runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitude: runtime.Decimal | runtime.DecimalJsLike | number | string;
    heading?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speed_kph?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    accuracy_meters?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    recorded_at?: Date | string;
};
export type rider_locationsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitude?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    heading?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speed_kph?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    accuracy_meters?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    recorded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rider_profiles?: Prisma.rider_profilesUpdateOneRequiredWithoutRider_locationsNestedInput;
};
export type rider_locationsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rider_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitude?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    heading?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speed_kph?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    accuracy_meters?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    recorded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type rider_locationsCreateManyInput = {
    id?: string;
    rider_profile_id: string;
    latitude: runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitude: runtime.Decimal | runtime.DecimalJsLike | number | string;
    heading?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speed_kph?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    accuracy_meters?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    recorded_at?: Date | string;
};
export type rider_locationsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitude?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    heading?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speed_kph?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    accuracy_meters?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    recorded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type rider_locationsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rider_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitude?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    heading?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speed_kph?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    accuracy_meters?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    recorded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type rider_locationsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rider_profile_id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    speed_kph?: Prisma.SortOrder;
    accuracy_meters?: Prisma.SortOrder;
    recorded_at?: Prisma.SortOrder;
};
export type rider_locationsAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    speed_kph?: Prisma.SortOrder;
    accuracy_meters?: Prisma.SortOrder;
};
export type rider_locationsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rider_profile_id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    speed_kph?: Prisma.SortOrder;
    accuracy_meters?: Prisma.SortOrder;
    recorded_at?: Prisma.SortOrder;
};
export type rider_locationsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rider_profile_id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    speed_kph?: Prisma.SortOrder;
    accuracy_meters?: Prisma.SortOrder;
    recorded_at?: Prisma.SortOrder;
};
export type rider_locationsSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    speed_kph?: Prisma.SortOrder;
    accuracy_meters?: Prisma.SortOrder;
};
export type Rider_locationsListRelationFilter = {
    every?: Prisma.rider_locationsWhereInput;
    some?: Prisma.rider_locationsWhereInput;
    none?: Prisma.rider_locationsWhereInput;
};
export type rider_locationsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type rider_locationsCreateNestedManyWithoutRider_profilesInput = {
    create?: Prisma.XOR<Prisma.rider_locationsCreateWithoutRider_profilesInput, Prisma.rider_locationsUncheckedCreateWithoutRider_profilesInput> | Prisma.rider_locationsCreateWithoutRider_profilesInput[] | Prisma.rider_locationsUncheckedCreateWithoutRider_profilesInput[];
    connectOrCreate?: Prisma.rider_locationsCreateOrConnectWithoutRider_profilesInput | Prisma.rider_locationsCreateOrConnectWithoutRider_profilesInput[];
    createMany?: Prisma.rider_locationsCreateManyRider_profilesInputEnvelope;
    connect?: Prisma.rider_locationsWhereUniqueInput | Prisma.rider_locationsWhereUniqueInput[];
};
export type rider_locationsUncheckedCreateNestedManyWithoutRider_profilesInput = {
    create?: Prisma.XOR<Prisma.rider_locationsCreateWithoutRider_profilesInput, Prisma.rider_locationsUncheckedCreateWithoutRider_profilesInput> | Prisma.rider_locationsCreateWithoutRider_profilesInput[] | Prisma.rider_locationsUncheckedCreateWithoutRider_profilesInput[];
    connectOrCreate?: Prisma.rider_locationsCreateOrConnectWithoutRider_profilesInput | Prisma.rider_locationsCreateOrConnectWithoutRider_profilesInput[];
    createMany?: Prisma.rider_locationsCreateManyRider_profilesInputEnvelope;
    connect?: Prisma.rider_locationsWhereUniqueInput | Prisma.rider_locationsWhereUniqueInput[];
};
export type rider_locationsUpdateManyWithoutRider_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.rider_locationsCreateWithoutRider_profilesInput, Prisma.rider_locationsUncheckedCreateWithoutRider_profilesInput> | Prisma.rider_locationsCreateWithoutRider_profilesInput[] | Prisma.rider_locationsUncheckedCreateWithoutRider_profilesInput[];
    connectOrCreate?: Prisma.rider_locationsCreateOrConnectWithoutRider_profilesInput | Prisma.rider_locationsCreateOrConnectWithoutRider_profilesInput[];
    upsert?: Prisma.rider_locationsUpsertWithWhereUniqueWithoutRider_profilesInput | Prisma.rider_locationsUpsertWithWhereUniqueWithoutRider_profilesInput[];
    createMany?: Prisma.rider_locationsCreateManyRider_profilesInputEnvelope;
    set?: Prisma.rider_locationsWhereUniqueInput | Prisma.rider_locationsWhereUniqueInput[];
    disconnect?: Prisma.rider_locationsWhereUniqueInput | Prisma.rider_locationsWhereUniqueInput[];
    delete?: Prisma.rider_locationsWhereUniqueInput | Prisma.rider_locationsWhereUniqueInput[];
    connect?: Prisma.rider_locationsWhereUniqueInput | Prisma.rider_locationsWhereUniqueInput[];
    update?: Prisma.rider_locationsUpdateWithWhereUniqueWithoutRider_profilesInput | Prisma.rider_locationsUpdateWithWhereUniqueWithoutRider_profilesInput[];
    updateMany?: Prisma.rider_locationsUpdateManyWithWhereWithoutRider_profilesInput | Prisma.rider_locationsUpdateManyWithWhereWithoutRider_profilesInput[];
    deleteMany?: Prisma.rider_locationsScalarWhereInput | Prisma.rider_locationsScalarWhereInput[];
};
export type rider_locationsUncheckedUpdateManyWithoutRider_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.rider_locationsCreateWithoutRider_profilesInput, Prisma.rider_locationsUncheckedCreateWithoutRider_profilesInput> | Prisma.rider_locationsCreateWithoutRider_profilesInput[] | Prisma.rider_locationsUncheckedCreateWithoutRider_profilesInput[];
    connectOrCreate?: Prisma.rider_locationsCreateOrConnectWithoutRider_profilesInput | Prisma.rider_locationsCreateOrConnectWithoutRider_profilesInput[];
    upsert?: Prisma.rider_locationsUpsertWithWhereUniqueWithoutRider_profilesInput | Prisma.rider_locationsUpsertWithWhereUniqueWithoutRider_profilesInput[];
    createMany?: Prisma.rider_locationsCreateManyRider_profilesInputEnvelope;
    set?: Prisma.rider_locationsWhereUniqueInput | Prisma.rider_locationsWhereUniqueInput[];
    disconnect?: Prisma.rider_locationsWhereUniqueInput | Prisma.rider_locationsWhereUniqueInput[];
    delete?: Prisma.rider_locationsWhereUniqueInput | Prisma.rider_locationsWhereUniqueInput[];
    connect?: Prisma.rider_locationsWhereUniqueInput | Prisma.rider_locationsWhereUniqueInput[];
    update?: Prisma.rider_locationsUpdateWithWhereUniqueWithoutRider_profilesInput | Prisma.rider_locationsUpdateWithWhereUniqueWithoutRider_profilesInput[];
    updateMany?: Prisma.rider_locationsUpdateManyWithWhereWithoutRider_profilesInput | Prisma.rider_locationsUpdateManyWithWhereWithoutRider_profilesInput[];
    deleteMany?: Prisma.rider_locationsScalarWhereInput | Prisma.rider_locationsScalarWhereInput[];
};
export type rider_locationsCreateWithoutRider_profilesInput = {
    id?: string;
    latitude: runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitude: runtime.Decimal | runtime.DecimalJsLike | number | string;
    heading?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speed_kph?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    accuracy_meters?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    recorded_at?: Date | string;
};
export type rider_locationsUncheckedCreateWithoutRider_profilesInput = {
    id?: string;
    latitude: runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitude: runtime.Decimal | runtime.DecimalJsLike | number | string;
    heading?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speed_kph?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    accuracy_meters?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    recorded_at?: Date | string;
};
export type rider_locationsCreateOrConnectWithoutRider_profilesInput = {
    where: Prisma.rider_locationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.rider_locationsCreateWithoutRider_profilesInput, Prisma.rider_locationsUncheckedCreateWithoutRider_profilesInput>;
};
export type rider_locationsCreateManyRider_profilesInputEnvelope = {
    data: Prisma.rider_locationsCreateManyRider_profilesInput | Prisma.rider_locationsCreateManyRider_profilesInput[];
    skipDuplicates?: boolean;
};
export type rider_locationsUpsertWithWhereUniqueWithoutRider_profilesInput = {
    where: Prisma.rider_locationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.rider_locationsUpdateWithoutRider_profilesInput, Prisma.rider_locationsUncheckedUpdateWithoutRider_profilesInput>;
    create: Prisma.XOR<Prisma.rider_locationsCreateWithoutRider_profilesInput, Prisma.rider_locationsUncheckedCreateWithoutRider_profilesInput>;
};
export type rider_locationsUpdateWithWhereUniqueWithoutRider_profilesInput = {
    where: Prisma.rider_locationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.rider_locationsUpdateWithoutRider_profilesInput, Prisma.rider_locationsUncheckedUpdateWithoutRider_profilesInput>;
};
export type rider_locationsUpdateManyWithWhereWithoutRider_profilesInput = {
    where: Prisma.rider_locationsScalarWhereInput;
    data: Prisma.XOR<Prisma.rider_locationsUpdateManyMutationInput, Prisma.rider_locationsUncheckedUpdateManyWithoutRider_profilesInput>;
};
export type rider_locationsScalarWhereInput = {
    AND?: Prisma.rider_locationsScalarWhereInput | Prisma.rider_locationsScalarWhereInput[];
    OR?: Prisma.rider_locationsScalarWhereInput[];
    NOT?: Prisma.rider_locationsScalarWhereInput | Prisma.rider_locationsScalarWhereInput[];
    id?: Prisma.UuidFilter<"rider_locations"> | string;
    rider_profile_id?: Prisma.UuidFilter<"rider_locations"> | string;
    latitude?: Prisma.DecimalFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitude?: Prisma.DecimalFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    heading?: Prisma.DecimalNullableFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speed_kph?: Prisma.DecimalNullableFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    accuracy_meters?: Prisma.DecimalNullableFilter<"rider_locations"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    recorded_at?: Prisma.DateTimeFilter<"rider_locations"> | Date | string;
};
export type rider_locationsCreateManyRider_profilesInput = {
    id?: string;
    latitude: runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitude: runtime.Decimal | runtime.DecimalJsLike | number | string;
    heading?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speed_kph?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    accuracy_meters?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    recorded_at?: Date | string;
};
export type rider_locationsUpdateWithoutRider_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitude?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    heading?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speed_kph?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    accuracy_meters?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    recorded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type rider_locationsUncheckedUpdateWithoutRider_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitude?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    heading?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speed_kph?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    accuracy_meters?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    recorded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type rider_locationsUncheckedUpdateManyWithoutRider_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitude?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    heading?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speed_kph?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    accuracy_meters?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    recorded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type rider_locationsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rider_profile_id?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    heading?: boolean;
    speed_kph?: boolean;
    accuracy_meters?: boolean;
    recorded_at?: boolean;
    rider_profiles?: boolean | Prisma.rider_profilesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rider_locations"]>;
export type rider_locationsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rider_profile_id?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    heading?: boolean;
    speed_kph?: boolean;
    accuracy_meters?: boolean;
    recorded_at?: boolean;
    rider_profiles?: boolean | Prisma.rider_profilesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rider_locations"]>;
export type rider_locationsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rider_profile_id?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    heading?: boolean;
    speed_kph?: boolean;
    accuracy_meters?: boolean;
    recorded_at?: boolean;
    rider_profiles?: boolean | Prisma.rider_profilesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rider_locations"]>;
export type rider_locationsSelectScalar = {
    id?: boolean;
    rider_profile_id?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    heading?: boolean;
    speed_kph?: boolean;
    accuracy_meters?: boolean;
    recorded_at?: boolean;
};
export type rider_locationsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rider_profile_id" | "latitude" | "longitude" | "heading" | "speed_kph" | "accuracy_meters" | "recorded_at", ExtArgs["result"]["rider_locations"]>;
export type rider_locationsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rider_profiles?: boolean | Prisma.rider_profilesDefaultArgs<ExtArgs>;
};
export type rider_locationsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rider_profiles?: boolean | Prisma.rider_profilesDefaultArgs<ExtArgs>;
};
export type rider_locationsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rider_profiles?: boolean | Prisma.rider_profilesDefaultArgs<ExtArgs>;
};
export type $rider_locationsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "rider_locations";
    objects: {
        rider_profiles: Prisma.$rider_profilesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        rider_profile_id: string;
        latitude: runtime.Decimal;
        longitude: runtime.Decimal;
        heading: runtime.Decimal | null;
        speed_kph: runtime.Decimal | null;
        accuracy_meters: runtime.Decimal | null;
        recorded_at: Date;
    }, ExtArgs["result"]["rider_locations"]>;
    composites: {};
};
export type rider_locationsGetPayload<S extends boolean | null | undefined | rider_locationsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$rider_locationsPayload, S>;
export type rider_locationsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<rider_locationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Rider_locationsCountAggregateInputType | true;
};
export interface rider_locationsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['rider_locations'];
        meta: {
            name: 'rider_locations';
        };
    };
    findUnique<T extends rider_locationsFindUniqueArgs>(args: Prisma.SelectSubset<T, rider_locationsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__rider_locationsClient<runtime.Types.Result.GetResult<Prisma.$rider_locationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends rider_locationsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, rider_locationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__rider_locationsClient<runtime.Types.Result.GetResult<Prisma.$rider_locationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends rider_locationsFindFirstArgs>(args?: Prisma.SelectSubset<T, rider_locationsFindFirstArgs<ExtArgs>>): Prisma.Prisma__rider_locationsClient<runtime.Types.Result.GetResult<Prisma.$rider_locationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends rider_locationsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, rider_locationsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__rider_locationsClient<runtime.Types.Result.GetResult<Prisma.$rider_locationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends rider_locationsFindManyArgs>(args?: Prisma.SelectSubset<T, rider_locationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rider_locationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends rider_locationsCreateArgs>(args: Prisma.SelectSubset<T, rider_locationsCreateArgs<ExtArgs>>): Prisma.Prisma__rider_locationsClient<runtime.Types.Result.GetResult<Prisma.$rider_locationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends rider_locationsCreateManyArgs>(args?: Prisma.SelectSubset<T, rider_locationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends rider_locationsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, rider_locationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rider_locationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends rider_locationsDeleteArgs>(args: Prisma.SelectSubset<T, rider_locationsDeleteArgs<ExtArgs>>): Prisma.Prisma__rider_locationsClient<runtime.Types.Result.GetResult<Prisma.$rider_locationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends rider_locationsUpdateArgs>(args: Prisma.SelectSubset<T, rider_locationsUpdateArgs<ExtArgs>>): Prisma.Prisma__rider_locationsClient<runtime.Types.Result.GetResult<Prisma.$rider_locationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends rider_locationsDeleteManyArgs>(args?: Prisma.SelectSubset<T, rider_locationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends rider_locationsUpdateManyArgs>(args: Prisma.SelectSubset<T, rider_locationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends rider_locationsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, rider_locationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rider_locationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends rider_locationsUpsertArgs>(args: Prisma.SelectSubset<T, rider_locationsUpsertArgs<ExtArgs>>): Prisma.Prisma__rider_locationsClient<runtime.Types.Result.GetResult<Prisma.$rider_locationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends rider_locationsCountArgs>(args?: Prisma.Subset<T, rider_locationsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Rider_locationsCountAggregateOutputType> : number>;
    aggregate<T extends Rider_locationsAggregateArgs>(args: Prisma.Subset<T, Rider_locationsAggregateArgs>): Prisma.PrismaPromise<GetRider_locationsAggregateType<T>>;
    groupBy<T extends rider_locationsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: rider_locationsGroupByArgs['orderBy'];
    } : {
        orderBy?: rider_locationsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, rider_locationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRider_locationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: rider_locationsFieldRefs;
}
export interface Prisma__rider_locationsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rider_profiles<T extends Prisma.rider_profilesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.rider_profilesDefaultArgs<ExtArgs>>): Prisma.Prisma__rider_profilesClient<runtime.Types.Result.GetResult<Prisma.$rider_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface rider_locationsFieldRefs {
    readonly id: Prisma.FieldRef<"rider_locations", 'String'>;
    readonly rider_profile_id: Prisma.FieldRef<"rider_locations", 'String'>;
    readonly latitude: Prisma.FieldRef<"rider_locations", 'Decimal'>;
    readonly longitude: Prisma.FieldRef<"rider_locations", 'Decimal'>;
    readonly heading: Prisma.FieldRef<"rider_locations", 'Decimal'>;
    readonly speed_kph: Prisma.FieldRef<"rider_locations", 'Decimal'>;
    readonly accuracy_meters: Prisma.FieldRef<"rider_locations", 'Decimal'>;
    readonly recorded_at: Prisma.FieldRef<"rider_locations", 'DateTime'>;
}
export type rider_locationsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_locationsSelect<ExtArgs> | null;
    omit?: Prisma.rider_locationsOmit<ExtArgs> | null;
    include?: Prisma.rider_locationsInclude<ExtArgs> | null;
    where: Prisma.rider_locationsWhereUniqueInput;
};
export type rider_locationsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_locationsSelect<ExtArgs> | null;
    omit?: Prisma.rider_locationsOmit<ExtArgs> | null;
    include?: Prisma.rider_locationsInclude<ExtArgs> | null;
    where: Prisma.rider_locationsWhereUniqueInput;
};
export type rider_locationsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_locationsSelect<ExtArgs> | null;
    omit?: Prisma.rider_locationsOmit<ExtArgs> | null;
    include?: Prisma.rider_locationsInclude<ExtArgs> | null;
    where?: Prisma.rider_locationsWhereInput;
    orderBy?: Prisma.rider_locationsOrderByWithRelationInput | Prisma.rider_locationsOrderByWithRelationInput[];
    cursor?: Prisma.rider_locationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Rider_locationsScalarFieldEnum | Prisma.Rider_locationsScalarFieldEnum[];
};
export type rider_locationsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_locationsSelect<ExtArgs> | null;
    omit?: Prisma.rider_locationsOmit<ExtArgs> | null;
    include?: Prisma.rider_locationsInclude<ExtArgs> | null;
    where?: Prisma.rider_locationsWhereInput;
    orderBy?: Prisma.rider_locationsOrderByWithRelationInput | Prisma.rider_locationsOrderByWithRelationInput[];
    cursor?: Prisma.rider_locationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Rider_locationsScalarFieldEnum | Prisma.Rider_locationsScalarFieldEnum[];
};
export type rider_locationsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_locationsSelect<ExtArgs> | null;
    omit?: Prisma.rider_locationsOmit<ExtArgs> | null;
    include?: Prisma.rider_locationsInclude<ExtArgs> | null;
    where?: Prisma.rider_locationsWhereInput;
    orderBy?: Prisma.rider_locationsOrderByWithRelationInput | Prisma.rider_locationsOrderByWithRelationInput[];
    cursor?: Prisma.rider_locationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Rider_locationsScalarFieldEnum | Prisma.Rider_locationsScalarFieldEnum[];
};
export type rider_locationsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_locationsSelect<ExtArgs> | null;
    omit?: Prisma.rider_locationsOmit<ExtArgs> | null;
    include?: Prisma.rider_locationsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rider_locationsCreateInput, Prisma.rider_locationsUncheckedCreateInput>;
};
export type rider_locationsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.rider_locationsCreateManyInput | Prisma.rider_locationsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type rider_locationsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_locationsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.rider_locationsOmit<ExtArgs> | null;
    data: Prisma.rider_locationsCreateManyInput | Prisma.rider_locationsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.rider_locationsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type rider_locationsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_locationsSelect<ExtArgs> | null;
    omit?: Prisma.rider_locationsOmit<ExtArgs> | null;
    include?: Prisma.rider_locationsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rider_locationsUpdateInput, Prisma.rider_locationsUncheckedUpdateInput>;
    where: Prisma.rider_locationsWhereUniqueInput;
};
export type rider_locationsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.rider_locationsUpdateManyMutationInput, Prisma.rider_locationsUncheckedUpdateManyInput>;
    where?: Prisma.rider_locationsWhereInput;
    limit?: number;
};
export type rider_locationsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_locationsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.rider_locationsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rider_locationsUpdateManyMutationInput, Prisma.rider_locationsUncheckedUpdateManyInput>;
    where?: Prisma.rider_locationsWhereInput;
    limit?: number;
    include?: Prisma.rider_locationsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type rider_locationsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_locationsSelect<ExtArgs> | null;
    omit?: Prisma.rider_locationsOmit<ExtArgs> | null;
    include?: Prisma.rider_locationsInclude<ExtArgs> | null;
    where: Prisma.rider_locationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.rider_locationsCreateInput, Prisma.rider_locationsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.rider_locationsUpdateInput, Prisma.rider_locationsUncheckedUpdateInput>;
};
export type rider_locationsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_locationsSelect<ExtArgs> | null;
    omit?: Prisma.rider_locationsOmit<ExtArgs> | null;
    include?: Prisma.rider_locationsInclude<ExtArgs> | null;
    where: Prisma.rider_locationsWhereUniqueInput;
};
export type rider_locationsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rider_locationsWhereInput;
    limit?: number;
};
export type rider_locationsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_locationsSelect<ExtArgs> | null;
    omit?: Prisma.rider_locationsOmit<ExtArgs> | null;
    include?: Prisma.rider_locationsInclude<ExtArgs> | null;
};
export {};
