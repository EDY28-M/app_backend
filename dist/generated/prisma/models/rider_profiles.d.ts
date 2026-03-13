import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type rider_profilesModel = runtime.Types.Result.DefaultSelection<Prisma.$rider_profilesPayload>;
export type AggregateRider_profiles = {
    _count: Rider_profilesCountAggregateOutputType | null;
    _avg: Rider_profilesAvgAggregateOutputType | null;
    _sum: Rider_profilesSumAggregateOutputType | null;
    _min: Rider_profilesMinAggregateOutputType | null;
    _max: Rider_profilesMaxAggregateOutputType | null;
};
export type Rider_profilesAvgAggregateOutputType = {
    rating_avg: runtime.Decimal | null;
    total_deliveries: number | null;
};
export type Rider_profilesSumAggregateOutputType = {
    rating_avg: runtime.Decimal | null;
    total_deliveries: number | null;
};
export type Rider_profilesMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    document_type: string | null;
    document_number: string | null;
    vehicle_type: $Enums.vehicle_type_enum | null;
    vehicle_plate: string | null;
    status: $Enums.rider_status_type | null;
    is_online: boolean | null;
    is_available: boolean | null;
    rating_avg: runtime.Decimal | null;
    total_deliveries: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Rider_profilesMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    document_type: string | null;
    document_number: string | null;
    vehicle_type: $Enums.vehicle_type_enum | null;
    vehicle_plate: string | null;
    status: $Enums.rider_status_type | null;
    is_online: boolean | null;
    is_available: boolean | null;
    rating_avg: runtime.Decimal | null;
    total_deliveries: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Rider_profilesCountAggregateOutputType = {
    id: number;
    user_id: number;
    document_type: number;
    document_number: number;
    vehicle_type: number;
    vehicle_plate: number;
    status: number;
    is_online: number;
    is_available: number;
    rating_avg: number;
    total_deliveries: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Rider_profilesAvgAggregateInputType = {
    rating_avg?: true;
    total_deliveries?: true;
};
export type Rider_profilesSumAggregateInputType = {
    rating_avg?: true;
    total_deliveries?: true;
};
export type Rider_profilesMinAggregateInputType = {
    id?: true;
    user_id?: true;
    document_type?: true;
    document_number?: true;
    vehicle_type?: true;
    vehicle_plate?: true;
    status?: true;
    is_online?: true;
    is_available?: true;
    rating_avg?: true;
    total_deliveries?: true;
    created_at?: true;
    updated_at?: true;
};
export type Rider_profilesMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    document_type?: true;
    document_number?: true;
    vehicle_type?: true;
    vehicle_plate?: true;
    status?: true;
    is_online?: true;
    is_available?: true;
    rating_avg?: true;
    total_deliveries?: true;
    created_at?: true;
    updated_at?: true;
};
export type Rider_profilesCountAggregateInputType = {
    id?: true;
    user_id?: true;
    document_type?: true;
    document_number?: true;
    vehicle_type?: true;
    vehicle_plate?: true;
    status?: true;
    is_online?: true;
    is_available?: true;
    rating_avg?: true;
    total_deliveries?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Rider_profilesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rider_profilesWhereInput;
    orderBy?: Prisma.rider_profilesOrderByWithRelationInput | Prisma.rider_profilesOrderByWithRelationInput[];
    cursor?: Prisma.rider_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Rider_profilesCountAggregateInputType;
    _avg?: Rider_profilesAvgAggregateInputType;
    _sum?: Rider_profilesSumAggregateInputType;
    _min?: Rider_profilesMinAggregateInputType;
    _max?: Rider_profilesMaxAggregateInputType;
};
export type GetRider_profilesAggregateType<T extends Rider_profilesAggregateArgs> = {
    [P in keyof T & keyof AggregateRider_profiles]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRider_profiles[P]> : Prisma.GetScalarType<T[P], AggregateRider_profiles[P]>;
};
export type rider_profilesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rider_profilesWhereInput;
    orderBy?: Prisma.rider_profilesOrderByWithAggregationInput | Prisma.rider_profilesOrderByWithAggregationInput[];
    by: Prisma.Rider_profilesScalarFieldEnum[] | Prisma.Rider_profilesScalarFieldEnum;
    having?: Prisma.rider_profilesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Rider_profilesCountAggregateInputType | true;
    _avg?: Rider_profilesAvgAggregateInputType;
    _sum?: Rider_profilesSumAggregateInputType;
    _min?: Rider_profilesMinAggregateInputType;
    _max?: Rider_profilesMaxAggregateInputType;
};
export type Rider_profilesGroupByOutputType = {
    id: string;
    user_id: string;
    document_type: string;
    document_number: string;
    vehicle_type: $Enums.vehicle_type_enum;
    vehicle_plate: string | null;
    status: $Enums.rider_status_type;
    is_online: boolean;
    is_available: boolean;
    rating_avg: runtime.Decimal | null;
    total_deliveries: number;
    created_at: Date;
    updated_at: Date;
    _count: Rider_profilesCountAggregateOutputType | null;
    _avg: Rider_profilesAvgAggregateOutputType | null;
    _sum: Rider_profilesSumAggregateOutputType | null;
    _min: Rider_profilesMinAggregateOutputType | null;
    _max: Rider_profilesMaxAggregateOutputType | null;
};
type GetRider_profilesGroupByPayload<T extends rider_profilesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Rider_profilesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Rider_profilesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Rider_profilesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Rider_profilesGroupByOutputType[P]>;
}>>;
export type rider_profilesWhereInput = {
    AND?: Prisma.rider_profilesWhereInput | Prisma.rider_profilesWhereInput[];
    OR?: Prisma.rider_profilesWhereInput[];
    NOT?: Prisma.rider_profilesWhereInput | Prisma.rider_profilesWhereInput[];
    id?: Prisma.UuidFilter<"rider_profiles"> | string;
    user_id?: Prisma.UuidFilter<"rider_profiles"> | string;
    document_type?: Prisma.StringFilter<"rider_profiles"> | string;
    document_number?: Prisma.StringFilter<"rider_profiles"> | string;
    vehicle_type?: Prisma.Enumvehicle_type_enumFilter<"rider_profiles"> | $Enums.vehicle_type_enum;
    vehicle_plate?: Prisma.StringNullableFilter<"rider_profiles"> | string | null;
    status?: Prisma.Enumrider_status_typeFilter<"rider_profiles"> | $Enums.rider_status_type;
    is_online?: Prisma.BoolFilter<"rider_profiles"> | boolean;
    is_available?: Prisma.BoolFilter<"rider_profiles"> | boolean;
    rating_avg?: Prisma.DecimalNullableFilter<"rider_profiles"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: Prisma.IntFilter<"rider_profiles"> | number;
    created_at?: Prisma.DateTimeFilter<"rider_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"rider_profiles"> | Date | string;
    deliveries?: Prisma.DeliveriesListRelationFilter;
    rider_locations?: Prisma.Rider_locationsListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    rider_settlements?: Prisma.Rider_settlementsListRelationFilter;
};
export type rider_profilesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    document_type?: Prisma.SortOrder;
    document_number?: Prisma.SortOrder;
    vehicle_type?: Prisma.SortOrder;
    vehicle_plate?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    is_online?: Prisma.SortOrder;
    is_available?: Prisma.SortOrder;
    rating_avg?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_deliveries?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deliveries?: Prisma.deliveriesOrderByRelationAggregateInput;
    rider_locations?: Prisma.rider_locationsOrderByRelationAggregateInput;
    users?: Prisma.usersOrderByWithRelationInput;
    rider_settlements?: Prisma.rider_settlementsOrderByRelationAggregateInput;
};
export type rider_profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id?: string;
    AND?: Prisma.rider_profilesWhereInput | Prisma.rider_profilesWhereInput[];
    OR?: Prisma.rider_profilesWhereInput[];
    NOT?: Prisma.rider_profilesWhereInput | Prisma.rider_profilesWhereInput[];
    document_type?: Prisma.StringFilter<"rider_profiles"> | string;
    document_number?: Prisma.StringFilter<"rider_profiles"> | string;
    vehicle_type?: Prisma.Enumvehicle_type_enumFilter<"rider_profiles"> | $Enums.vehicle_type_enum;
    vehicle_plate?: Prisma.StringNullableFilter<"rider_profiles"> | string | null;
    status?: Prisma.Enumrider_status_typeFilter<"rider_profiles"> | $Enums.rider_status_type;
    is_online?: Prisma.BoolFilter<"rider_profiles"> | boolean;
    is_available?: Prisma.BoolFilter<"rider_profiles"> | boolean;
    rating_avg?: Prisma.DecimalNullableFilter<"rider_profiles"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: Prisma.IntFilter<"rider_profiles"> | number;
    created_at?: Prisma.DateTimeFilter<"rider_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"rider_profiles"> | Date | string;
    deliveries?: Prisma.DeliveriesListRelationFilter;
    rider_locations?: Prisma.Rider_locationsListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    rider_settlements?: Prisma.Rider_settlementsListRelationFilter;
}, "id" | "user_id">;
export type rider_profilesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    document_type?: Prisma.SortOrder;
    document_number?: Prisma.SortOrder;
    vehicle_type?: Prisma.SortOrder;
    vehicle_plate?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    is_online?: Prisma.SortOrder;
    is_available?: Prisma.SortOrder;
    rating_avg?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_deliveries?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.rider_profilesCountOrderByAggregateInput;
    _avg?: Prisma.rider_profilesAvgOrderByAggregateInput;
    _max?: Prisma.rider_profilesMaxOrderByAggregateInput;
    _min?: Prisma.rider_profilesMinOrderByAggregateInput;
    _sum?: Prisma.rider_profilesSumOrderByAggregateInput;
};
export type rider_profilesScalarWhereWithAggregatesInput = {
    AND?: Prisma.rider_profilesScalarWhereWithAggregatesInput | Prisma.rider_profilesScalarWhereWithAggregatesInput[];
    OR?: Prisma.rider_profilesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.rider_profilesScalarWhereWithAggregatesInput | Prisma.rider_profilesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"rider_profiles"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"rider_profiles"> | string;
    document_type?: Prisma.StringWithAggregatesFilter<"rider_profiles"> | string;
    document_number?: Prisma.StringWithAggregatesFilter<"rider_profiles"> | string;
    vehicle_type?: Prisma.Enumvehicle_type_enumWithAggregatesFilter<"rider_profiles"> | $Enums.vehicle_type_enum;
    vehicle_plate?: Prisma.StringNullableWithAggregatesFilter<"rider_profiles"> | string | null;
    status?: Prisma.Enumrider_status_typeWithAggregatesFilter<"rider_profiles"> | $Enums.rider_status_type;
    is_online?: Prisma.BoolWithAggregatesFilter<"rider_profiles"> | boolean;
    is_available?: Prisma.BoolWithAggregatesFilter<"rider_profiles"> | boolean;
    rating_avg?: Prisma.DecimalNullableWithAggregatesFilter<"rider_profiles"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: Prisma.IntWithAggregatesFilter<"rider_profiles"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"rider_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"rider_profiles"> | Date | string;
};
export type rider_profilesCreateInput = {
    id?: string;
    document_type: string;
    document_number: string;
    vehicle_type: $Enums.vehicle_type_enum;
    vehicle_plate?: string | null;
    status?: $Enums.rider_status_type;
    is_online?: boolean;
    is_available?: boolean;
    rating_avg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deliveries?: Prisma.deliveriesCreateNestedManyWithoutRider_profilesInput;
    rider_locations?: Prisma.rider_locationsCreateNestedManyWithoutRider_profilesInput;
    users: Prisma.usersCreateNestedOneWithoutRider_profilesInput;
    rider_settlements?: Prisma.rider_settlementsCreateNestedManyWithoutRider_profilesInput;
};
export type rider_profilesUncheckedCreateInput = {
    id?: string;
    user_id: string;
    document_type: string;
    document_number: string;
    vehicle_type: $Enums.vehicle_type_enum;
    vehicle_plate?: string | null;
    status?: $Enums.rider_status_type;
    is_online?: boolean;
    is_available?: boolean;
    rating_avg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deliveries?: Prisma.deliveriesUncheckedCreateNestedManyWithoutRider_profilesInput;
    rider_locations?: Prisma.rider_locationsUncheckedCreateNestedManyWithoutRider_profilesInput;
    rider_settlements?: Prisma.rider_settlementsUncheckedCreateNestedManyWithoutRider_profilesInput;
};
export type rider_profilesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    document_type?: Prisma.StringFieldUpdateOperationsInput | string;
    document_number?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicle_type?: Prisma.Enumvehicle_type_enumFieldUpdateOperationsInput | $Enums.vehicle_type_enum;
    vehicle_plate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumrider_status_typeFieldUpdateOperationsInput | $Enums.rider_status_type;
    is_online?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating_avg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries?: Prisma.deliveriesUpdateManyWithoutRider_profilesNestedInput;
    rider_locations?: Prisma.rider_locationsUpdateManyWithoutRider_profilesNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutRider_profilesNestedInput;
    rider_settlements?: Prisma.rider_settlementsUpdateManyWithoutRider_profilesNestedInput;
};
export type rider_profilesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    document_type?: Prisma.StringFieldUpdateOperationsInput | string;
    document_number?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicle_type?: Prisma.Enumvehicle_type_enumFieldUpdateOperationsInput | $Enums.vehicle_type_enum;
    vehicle_plate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumrider_status_typeFieldUpdateOperationsInput | $Enums.rider_status_type;
    is_online?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating_avg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries?: Prisma.deliveriesUncheckedUpdateManyWithoutRider_profilesNestedInput;
    rider_locations?: Prisma.rider_locationsUncheckedUpdateManyWithoutRider_profilesNestedInput;
    rider_settlements?: Prisma.rider_settlementsUncheckedUpdateManyWithoutRider_profilesNestedInput;
};
export type rider_profilesCreateManyInput = {
    id?: string;
    user_id: string;
    document_type: string;
    document_number: string;
    vehicle_type: $Enums.vehicle_type_enum;
    vehicle_plate?: string | null;
    status?: $Enums.rider_status_type;
    is_online?: boolean;
    is_available?: boolean;
    rating_avg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type rider_profilesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    document_type?: Prisma.StringFieldUpdateOperationsInput | string;
    document_number?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicle_type?: Prisma.Enumvehicle_type_enumFieldUpdateOperationsInput | $Enums.vehicle_type_enum;
    vehicle_plate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumrider_status_typeFieldUpdateOperationsInput | $Enums.rider_status_type;
    is_online?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating_avg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type rider_profilesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    document_type?: Prisma.StringFieldUpdateOperationsInput | string;
    document_number?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicle_type?: Prisma.Enumvehicle_type_enumFieldUpdateOperationsInput | $Enums.vehicle_type_enum;
    vehicle_plate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumrider_status_typeFieldUpdateOperationsInput | $Enums.rider_status_type;
    is_online?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating_avg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Rider_profilesNullableScalarRelationFilter = {
    is?: Prisma.rider_profilesWhereInput | null;
    isNot?: Prisma.rider_profilesWhereInput | null;
};
export type Rider_profilesScalarRelationFilter = {
    is?: Prisma.rider_profilesWhereInput;
    isNot?: Prisma.rider_profilesWhereInput;
};
export type rider_profilesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    document_type?: Prisma.SortOrder;
    document_number?: Prisma.SortOrder;
    vehicle_type?: Prisma.SortOrder;
    vehicle_plate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    is_online?: Prisma.SortOrder;
    is_available?: Prisma.SortOrder;
    rating_avg?: Prisma.SortOrder;
    total_deliveries?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type rider_profilesAvgOrderByAggregateInput = {
    rating_avg?: Prisma.SortOrder;
    total_deliveries?: Prisma.SortOrder;
};
export type rider_profilesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    document_type?: Prisma.SortOrder;
    document_number?: Prisma.SortOrder;
    vehicle_type?: Prisma.SortOrder;
    vehicle_plate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    is_online?: Prisma.SortOrder;
    is_available?: Prisma.SortOrder;
    rating_avg?: Prisma.SortOrder;
    total_deliveries?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type rider_profilesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    document_type?: Prisma.SortOrder;
    document_number?: Prisma.SortOrder;
    vehicle_type?: Prisma.SortOrder;
    vehicle_plate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    is_online?: Prisma.SortOrder;
    is_available?: Prisma.SortOrder;
    rating_avg?: Prisma.SortOrder;
    total_deliveries?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type rider_profilesSumOrderByAggregateInput = {
    rating_avg?: Prisma.SortOrder;
    total_deliveries?: Prisma.SortOrder;
};
export type rider_profilesCreateNestedOneWithoutDeliveriesInput = {
    create?: Prisma.XOR<Prisma.rider_profilesCreateWithoutDeliveriesInput, Prisma.rider_profilesUncheckedCreateWithoutDeliveriesInput>;
    connectOrCreate?: Prisma.rider_profilesCreateOrConnectWithoutDeliveriesInput;
    connect?: Prisma.rider_profilesWhereUniqueInput;
};
export type rider_profilesUpdateOneWithoutDeliveriesNestedInput = {
    create?: Prisma.XOR<Prisma.rider_profilesCreateWithoutDeliveriesInput, Prisma.rider_profilesUncheckedCreateWithoutDeliveriesInput>;
    connectOrCreate?: Prisma.rider_profilesCreateOrConnectWithoutDeliveriesInput;
    upsert?: Prisma.rider_profilesUpsertWithoutDeliveriesInput;
    disconnect?: Prisma.rider_profilesWhereInput | boolean;
    delete?: Prisma.rider_profilesWhereInput | boolean;
    connect?: Prisma.rider_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.rider_profilesUpdateToOneWithWhereWithoutDeliveriesInput, Prisma.rider_profilesUpdateWithoutDeliveriesInput>, Prisma.rider_profilesUncheckedUpdateWithoutDeliveriesInput>;
};
export type rider_profilesCreateNestedOneWithoutRider_locationsInput = {
    create?: Prisma.XOR<Prisma.rider_profilesCreateWithoutRider_locationsInput, Prisma.rider_profilesUncheckedCreateWithoutRider_locationsInput>;
    connectOrCreate?: Prisma.rider_profilesCreateOrConnectWithoutRider_locationsInput;
    connect?: Prisma.rider_profilesWhereUniqueInput;
};
export type rider_profilesUpdateOneRequiredWithoutRider_locationsNestedInput = {
    create?: Prisma.XOR<Prisma.rider_profilesCreateWithoutRider_locationsInput, Prisma.rider_profilesUncheckedCreateWithoutRider_locationsInput>;
    connectOrCreate?: Prisma.rider_profilesCreateOrConnectWithoutRider_locationsInput;
    upsert?: Prisma.rider_profilesUpsertWithoutRider_locationsInput;
    connect?: Prisma.rider_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.rider_profilesUpdateToOneWithWhereWithoutRider_locationsInput, Prisma.rider_profilesUpdateWithoutRider_locationsInput>, Prisma.rider_profilesUncheckedUpdateWithoutRider_locationsInput>;
};
export type Enumvehicle_type_enumFieldUpdateOperationsInput = {
    set?: $Enums.vehicle_type_enum;
};
export type Enumrider_status_typeFieldUpdateOperationsInput = {
    set?: $Enums.rider_status_type;
};
export type rider_profilesCreateNestedOneWithoutRider_settlementsInput = {
    create?: Prisma.XOR<Prisma.rider_profilesCreateWithoutRider_settlementsInput, Prisma.rider_profilesUncheckedCreateWithoutRider_settlementsInput>;
    connectOrCreate?: Prisma.rider_profilesCreateOrConnectWithoutRider_settlementsInput;
    connect?: Prisma.rider_profilesWhereUniqueInput;
};
export type rider_profilesUpdateOneRequiredWithoutRider_settlementsNestedInput = {
    create?: Prisma.XOR<Prisma.rider_profilesCreateWithoutRider_settlementsInput, Prisma.rider_profilesUncheckedCreateWithoutRider_settlementsInput>;
    connectOrCreate?: Prisma.rider_profilesCreateOrConnectWithoutRider_settlementsInput;
    upsert?: Prisma.rider_profilesUpsertWithoutRider_settlementsInput;
    connect?: Prisma.rider_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.rider_profilesUpdateToOneWithWhereWithoutRider_settlementsInput, Prisma.rider_profilesUpdateWithoutRider_settlementsInput>, Prisma.rider_profilesUncheckedUpdateWithoutRider_settlementsInput>;
};
export type rider_profilesCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.rider_profilesCreateWithoutUsersInput, Prisma.rider_profilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.rider_profilesCreateOrConnectWithoutUsersInput;
    connect?: Prisma.rider_profilesWhereUniqueInput;
};
export type rider_profilesUncheckedCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.rider_profilesCreateWithoutUsersInput, Prisma.rider_profilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.rider_profilesCreateOrConnectWithoutUsersInput;
    connect?: Prisma.rider_profilesWhereUniqueInput;
};
export type rider_profilesUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.rider_profilesCreateWithoutUsersInput, Prisma.rider_profilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.rider_profilesCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.rider_profilesUpsertWithoutUsersInput;
    disconnect?: Prisma.rider_profilesWhereInput | boolean;
    delete?: Prisma.rider_profilesWhereInput | boolean;
    connect?: Prisma.rider_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.rider_profilesUpdateToOneWithWhereWithoutUsersInput, Prisma.rider_profilesUpdateWithoutUsersInput>, Prisma.rider_profilesUncheckedUpdateWithoutUsersInput>;
};
export type rider_profilesUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.rider_profilesCreateWithoutUsersInput, Prisma.rider_profilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.rider_profilesCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.rider_profilesUpsertWithoutUsersInput;
    disconnect?: Prisma.rider_profilesWhereInput | boolean;
    delete?: Prisma.rider_profilesWhereInput | boolean;
    connect?: Prisma.rider_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.rider_profilesUpdateToOneWithWhereWithoutUsersInput, Prisma.rider_profilesUpdateWithoutUsersInput>, Prisma.rider_profilesUncheckedUpdateWithoutUsersInput>;
};
export type rider_profilesCreateWithoutDeliveriesInput = {
    id?: string;
    document_type: string;
    document_number: string;
    vehicle_type: $Enums.vehicle_type_enum;
    vehicle_plate?: string | null;
    status?: $Enums.rider_status_type;
    is_online?: boolean;
    is_available?: boolean;
    rating_avg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    rider_locations?: Prisma.rider_locationsCreateNestedManyWithoutRider_profilesInput;
    users: Prisma.usersCreateNestedOneWithoutRider_profilesInput;
    rider_settlements?: Prisma.rider_settlementsCreateNestedManyWithoutRider_profilesInput;
};
export type rider_profilesUncheckedCreateWithoutDeliveriesInput = {
    id?: string;
    user_id: string;
    document_type: string;
    document_number: string;
    vehicle_type: $Enums.vehicle_type_enum;
    vehicle_plate?: string | null;
    status?: $Enums.rider_status_type;
    is_online?: boolean;
    is_available?: boolean;
    rating_avg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    rider_locations?: Prisma.rider_locationsUncheckedCreateNestedManyWithoutRider_profilesInput;
    rider_settlements?: Prisma.rider_settlementsUncheckedCreateNestedManyWithoutRider_profilesInput;
};
export type rider_profilesCreateOrConnectWithoutDeliveriesInput = {
    where: Prisma.rider_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.rider_profilesCreateWithoutDeliveriesInput, Prisma.rider_profilesUncheckedCreateWithoutDeliveriesInput>;
};
export type rider_profilesUpsertWithoutDeliveriesInput = {
    update: Prisma.XOR<Prisma.rider_profilesUpdateWithoutDeliveriesInput, Prisma.rider_profilesUncheckedUpdateWithoutDeliveriesInput>;
    create: Prisma.XOR<Prisma.rider_profilesCreateWithoutDeliveriesInput, Prisma.rider_profilesUncheckedCreateWithoutDeliveriesInput>;
    where?: Prisma.rider_profilesWhereInput;
};
export type rider_profilesUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: Prisma.rider_profilesWhereInput;
    data: Prisma.XOR<Prisma.rider_profilesUpdateWithoutDeliveriesInput, Prisma.rider_profilesUncheckedUpdateWithoutDeliveriesInput>;
};
export type rider_profilesUpdateWithoutDeliveriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    document_type?: Prisma.StringFieldUpdateOperationsInput | string;
    document_number?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicle_type?: Prisma.Enumvehicle_type_enumFieldUpdateOperationsInput | $Enums.vehicle_type_enum;
    vehicle_plate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumrider_status_typeFieldUpdateOperationsInput | $Enums.rider_status_type;
    is_online?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating_avg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rider_locations?: Prisma.rider_locationsUpdateManyWithoutRider_profilesNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutRider_profilesNestedInput;
    rider_settlements?: Prisma.rider_settlementsUpdateManyWithoutRider_profilesNestedInput;
};
export type rider_profilesUncheckedUpdateWithoutDeliveriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    document_type?: Prisma.StringFieldUpdateOperationsInput | string;
    document_number?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicle_type?: Prisma.Enumvehicle_type_enumFieldUpdateOperationsInput | $Enums.vehicle_type_enum;
    vehicle_plate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumrider_status_typeFieldUpdateOperationsInput | $Enums.rider_status_type;
    is_online?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating_avg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rider_locations?: Prisma.rider_locationsUncheckedUpdateManyWithoutRider_profilesNestedInput;
    rider_settlements?: Prisma.rider_settlementsUncheckedUpdateManyWithoutRider_profilesNestedInput;
};
export type rider_profilesCreateWithoutRider_locationsInput = {
    id?: string;
    document_type: string;
    document_number: string;
    vehicle_type: $Enums.vehicle_type_enum;
    vehicle_plate?: string | null;
    status?: $Enums.rider_status_type;
    is_online?: boolean;
    is_available?: boolean;
    rating_avg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deliveries?: Prisma.deliveriesCreateNestedManyWithoutRider_profilesInput;
    users: Prisma.usersCreateNestedOneWithoutRider_profilesInput;
    rider_settlements?: Prisma.rider_settlementsCreateNestedManyWithoutRider_profilesInput;
};
export type rider_profilesUncheckedCreateWithoutRider_locationsInput = {
    id?: string;
    user_id: string;
    document_type: string;
    document_number: string;
    vehicle_type: $Enums.vehicle_type_enum;
    vehicle_plate?: string | null;
    status?: $Enums.rider_status_type;
    is_online?: boolean;
    is_available?: boolean;
    rating_avg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deliveries?: Prisma.deliveriesUncheckedCreateNestedManyWithoutRider_profilesInput;
    rider_settlements?: Prisma.rider_settlementsUncheckedCreateNestedManyWithoutRider_profilesInput;
};
export type rider_profilesCreateOrConnectWithoutRider_locationsInput = {
    where: Prisma.rider_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.rider_profilesCreateWithoutRider_locationsInput, Prisma.rider_profilesUncheckedCreateWithoutRider_locationsInput>;
};
export type rider_profilesUpsertWithoutRider_locationsInput = {
    update: Prisma.XOR<Prisma.rider_profilesUpdateWithoutRider_locationsInput, Prisma.rider_profilesUncheckedUpdateWithoutRider_locationsInput>;
    create: Prisma.XOR<Prisma.rider_profilesCreateWithoutRider_locationsInput, Prisma.rider_profilesUncheckedCreateWithoutRider_locationsInput>;
    where?: Prisma.rider_profilesWhereInput;
};
export type rider_profilesUpdateToOneWithWhereWithoutRider_locationsInput = {
    where?: Prisma.rider_profilesWhereInput;
    data: Prisma.XOR<Prisma.rider_profilesUpdateWithoutRider_locationsInput, Prisma.rider_profilesUncheckedUpdateWithoutRider_locationsInput>;
};
export type rider_profilesUpdateWithoutRider_locationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    document_type?: Prisma.StringFieldUpdateOperationsInput | string;
    document_number?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicle_type?: Prisma.Enumvehicle_type_enumFieldUpdateOperationsInput | $Enums.vehicle_type_enum;
    vehicle_plate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumrider_status_typeFieldUpdateOperationsInput | $Enums.rider_status_type;
    is_online?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating_avg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries?: Prisma.deliveriesUpdateManyWithoutRider_profilesNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutRider_profilesNestedInput;
    rider_settlements?: Prisma.rider_settlementsUpdateManyWithoutRider_profilesNestedInput;
};
export type rider_profilesUncheckedUpdateWithoutRider_locationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    document_type?: Prisma.StringFieldUpdateOperationsInput | string;
    document_number?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicle_type?: Prisma.Enumvehicle_type_enumFieldUpdateOperationsInput | $Enums.vehicle_type_enum;
    vehicle_plate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumrider_status_typeFieldUpdateOperationsInput | $Enums.rider_status_type;
    is_online?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating_avg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries?: Prisma.deliveriesUncheckedUpdateManyWithoutRider_profilesNestedInput;
    rider_settlements?: Prisma.rider_settlementsUncheckedUpdateManyWithoutRider_profilesNestedInput;
};
export type rider_profilesCreateWithoutRider_settlementsInput = {
    id?: string;
    document_type: string;
    document_number: string;
    vehicle_type: $Enums.vehicle_type_enum;
    vehicle_plate?: string | null;
    status?: $Enums.rider_status_type;
    is_online?: boolean;
    is_available?: boolean;
    rating_avg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deliveries?: Prisma.deliveriesCreateNestedManyWithoutRider_profilesInput;
    rider_locations?: Prisma.rider_locationsCreateNestedManyWithoutRider_profilesInput;
    users: Prisma.usersCreateNestedOneWithoutRider_profilesInput;
};
export type rider_profilesUncheckedCreateWithoutRider_settlementsInput = {
    id?: string;
    user_id: string;
    document_type: string;
    document_number: string;
    vehicle_type: $Enums.vehicle_type_enum;
    vehicle_plate?: string | null;
    status?: $Enums.rider_status_type;
    is_online?: boolean;
    is_available?: boolean;
    rating_avg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deliveries?: Prisma.deliveriesUncheckedCreateNestedManyWithoutRider_profilesInput;
    rider_locations?: Prisma.rider_locationsUncheckedCreateNestedManyWithoutRider_profilesInput;
};
export type rider_profilesCreateOrConnectWithoutRider_settlementsInput = {
    where: Prisma.rider_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.rider_profilesCreateWithoutRider_settlementsInput, Prisma.rider_profilesUncheckedCreateWithoutRider_settlementsInput>;
};
export type rider_profilesUpsertWithoutRider_settlementsInput = {
    update: Prisma.XOR<Prisma.rider_profilesUpdateWithoutRider_settlementsInput, Prisma.rider_profilesUncheckedUpdateWithoutRider_settlementsInput>;
    create: Prisma.XOR<Prisma.rider_profilesCreateWithoutRider_settlementsInput, Prisma.rider_profilesUncheckedCreateWithoutRider_settlementsInput>;
    where?: Prisma.rider_profilesWhereInput;
};
export type rider_profilesUpdateToOneWithWhereWithoutRider_settlementsInput = {
    where?: Prisma.rider_profilesWhereInput;
    data: Prisma.XOR<Prisma.rider_profilesUpdateWithoutRider_settlementsInput, Prisma.rider_profilesUncheckedUpdateWithoutRider_settlementsInput>;
};
export type rider_profilesUpdateWithoutRider_settlementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    document_type?: Prisma.StringFieldUpdateOperationsInput | string;
    document_number?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicle_type?: Prisma.Enumvehicle_type_enumFieldUpdateOperationsInput | $Enums.vehicle_type_enum;
    vehicle_plate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumrider_status_typeFieldUpdateOperationsInput | $Enums.rider_status_type;
    is_online?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating_avg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries?: Prisma.deliveriesUpdateManyWithoutRider_profilesNestedInput;
    rider_locations?: Prisma.rider_locationsUpdateManyWithoutRider_profilesNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutRider_profilesNestedInput;
};
export type rider_profilesUncheckedUpdateWithoutRider_settlementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    document_type?: Prisma.StringFieldUpdateOperationsInput | string;
    document_number?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicle_type?: Prisma.Enumvehicle_type_enumFieldUpdateOperationsInput | $Enums.vehicle_type_enum;
    vehicle_plate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumrider_status_typeFieldUpdateOperationsInput | $Enums.rider_status_type;
    is_online?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating_avg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries?: Prisma.deliveriesUncheckedUpdateManyWithoutRider_profilesNestedInput;
    rider_locations?: Prisma.rider_locationsUncheckedUpdateManyWithoutRider_profilesNestedInput;
};
export type rider_profilesCreateWithoutUsersInput = {
    id?: string;
    document_type: string;
    document_number: string;
    vehicle_type: $Enums.vehicle_type_enum;
    vehicle_plate?: string | null;
    status?: $Enums.rider_status_type;
    is_online?: boolean;
    is_available?: boolean;
    rating_avg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deliveries?: Prisma.deliveriesCreateNestedManyWithoutRider_profilesInput;
    rider_locations?: Prisma.rider_locationsCreateNestedManyWithoutRider_profilesInput;
    rider_settlements?: Prisma.rider_settlementsCreateNestedManyWithoutRider_profilesInput;
};
export type rider_profilesUncheckedCreateWithoutUsersInput = {
    id?: string;
    document_type: string;
    document_number: string;
    vehicle_type: $Enums.vehicle_type_enum;
    vehicle_plate?: string | null;
    status?: $Enums.rider_status_type;
    is_online?: boolean;
    is_available?: boolean;
    rating_avg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deliveries?: Prisma.deliveriesUncheckedCreateNestedManyWithoutRider_profilesInput;
    rider_locations?: Prisma.rider_locationsUncheckedCreateNestedManyWithoutRider_profilesInput;
    rider_settlements?: Prisma.rider_settlementsUncheckedCreateNestedManyWithoutRider_profilesInput;
};
export type rider_profilesCreateOrConnectWithoutUsersInput = {
    where: Prisma.rider_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.rider_profilesCreateWithoutUsersInput, Prisma.rider_profilesUncheckedCreateWithoutUsersInput>;
};
export type rider_profilesUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.rider_profilesUpdateWithoutUsersInput, Prisma.rider_profilesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.rider_profilesCreateWithoutUsersInput, Prisma.rider_profilesUncheckedCreateWithoutUsersInput>;
    where?: Prisma.rider_profilesWhereInput;
};
export type rider_profilesUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.rider_profilesWhereInput;
    data: Prisma.XOR<Prisma.rider_profilesUpdateWithoutUsersInput, Prisma.rider_profilesUncheckedUpdateWithoutUsersInput>;
};
export type rider_profilesUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    document_type?: Prisma.StringFieldUpdateOperationsInput | string;
    document_number?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicle_type?: Prisma.Enumvehicle_type_enumFieldUpdateOperationsInput | $Enums.vehicle_type_enum;
    vehicle_plate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumrider_status_typeFieldUpdateOperationsInput | $Enums.rider_status_type;
    is_online?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating_avg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries?: Prisma.deliveriesUpdateManyWithoutRider_profilesNestedInput;
    rider_locations?: Prisma.rider_locationsUpdateManyWithoutRider_profilesNestedInput;
    rider_settlements?: Prisma.rider_settlementsUpdateManyWithoutRider_profilesNestedInput;
};
export type rider_profilesUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    document_type?: Prisma.StringFieldUpdateOperationsInput | string;
    document_number?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicle_type?: Prisma.Enumvehicle_type_enumFieldUpdateOperationsInput | $Enums.vehicle_type_enum;
    vehicle_plate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumrider_status_typeFieldUpdateOperationsInput | $Enums.rider_status_type;
    is_online?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating_avg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_deliveries?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries?: Prisma.deliveriesUncheckedUpdateManyWithoutRider_profilesNestedInput;
    rider_locations?: Prisma.rider_locationsUncheckedUpdateManyWithoutRider_profilesNestedInput;
    rider_settlements?: Prisma.rider_settlementsUncheckedUpdateManyWithoutRider_profilesNestedInput;
};
export type Rider_profilesCountOutputType = {
    deliveries: number;
    rider_locations: number;
    rider_settlements: number;
};
export type Rider_profilesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    deliveries?: boolean | Rider_profilesCountOutputTypeCountDeliveriesArgs;
    rider_locations?: boolean | Rider_profilesCountOutputTypeCountRider_locationsArgs;
    rider_settlements?: boolean | Rider_profilesCountOutputTypeCountRider_settlementsArgs;
};
export type Rider_profilesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Rider_profilesCountOutputTypeSelect<ExtArgs> | null;
};
export type Rider_profilesCountOutputTypeCountDeliveriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.deliveriesWhereInput;
};
export type Rider_profilesCountOutputTypeCountRider_locationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rider_locationsWhereInput;
};
export type Rider_profilesCountOutputTypeCountRider_settlementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rider_settlementsWhereInput;
};
export type rider_profilesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    document_type?: boolean;
    document_number?: boolean;
    vehicle_type?: boolean;
    vehicle_plate?: boolean;
    status?: boolean;
    is_online?: boolean;
    is_available?: boolean;
    rating_avg?: boolean;
    total_deliveries?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deliveries?: boolean | Prisma.rider_profiles$deliveriesArgs<ExtArgs>;
    rider_locations?: boolean | Prisma.rider_profiles$rider_locationsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    rider_settlements?: boolean | Prisma.rider_profiles$rider_settlementsArgs<ExtArgs>;
    _count?: boolean | Prisma.Rider_profilesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rider_profiles"]>;
export type rider_profilesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    document_type?: boolean;
    document_number?: boolean;
    vehicle_type?: boolean;
    vehicle_plate?: boolean;
    status?: boolean;
    is_online?: boolean;
    is_available?: boolean;
    rating_avg?: boolean;
    total_deliveries?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rider_profiles"]>;
export type rider_profilesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    document_type?: boolean;
    document_number?: boolean;
    vehicle_type?: boolean;
    vehicle_plate?: boolean;
    status?: boolean;
    is_online?: boolean;
    is_available?: boolean;
    rating_avg?: boolean;
    total_deliveries?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rider_profiles"]>;
export type rider_profilesSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    document_type?: boolean;
    document_number?: boolean;
    vehicle_type?: boolean;
    vehicle_plate?: boolean;
    status?: boolean;
    is_online?: boolean;
    is_available?: boolean;
    rating_avg?: boolean;
    total_deliveries?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type rider_profilesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "document_type" | "document_number" | "vehicle_type" | "vehicle_plate" | "status" | "is_online" | "is_available" | "rating_avg" | "total_deliveries" | "created_at" | "updated_at", ExtArgs["result"]["rider_profiles"]>;
export type rider_profilesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    deliveries?: boolean | Prisma.rider_profiles$deliveriesArgs<ExtArgs>;
    rider_locations?: boolean | Prisma.rider_profiles$rider_locationsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    rider_settlements?: boolean | Prisma.rider_profiles$rider_settlementsArgs<ExtArgs>;
    _count?: boolean | Prisma.Rider_profilesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type rider_profilesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type rider_profilesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $rider_profilesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "rider_profiles";
    objects: {
        deliveries: Prisma.$deliveriesPayload<ExtArgs>[];
        rider_locations: Prisma.$rider_locationsPayload<ExtArgs>[];
        users: Prisma.$usersPayload<ExtArgs>;
        rider_settlements: Prisma.$rider_settlementsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        document_type: string;
        document_number: string;
        vehicle_type: $Enums.vehicle_type_enum;
        vehicle_plate: string | null;
        status: $Enums.rider_status_type;
        is_online: boolean;
        is_available: boolean;
        rating_avg: runtime.Decimal | null;
        total_deliveries: number;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["rider_profiles"]>;
    composites: {};
};
export type rider_profilesGetPayload<S extends boolean | null | undefined | rider_profilesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$rider_profilesPayload, S>;
export type rider_profilesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<rider_profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Rider_profilesCountAggregateInputType | true;
};
export interface rider_profilesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['rider_profiles'];
        meta: {
            name: 'rider_profiles';
        };
    };
    findUnique<T extends rider_profilesFindUniqueArgs>(args: Prisma.SelectSubset<T, rider_profilesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__rider_profilesClient<runtime.Types.Result.GetResult<Prisma.$rider_profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends rider_profilesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, rider_profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__rider_profilesClient<runtime.Types.Result.GetResult<Prisma.$rider_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends rider_profilesFindFirstArgs>(args?: Prisma.SelectSubset<T, rider_profilesFindFirstArgs<ExtArgs>>): Prisma.Prisma__rider_profilesClient<runtime.Types.Result.GetResult<Prisma.$rider_profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends rider_profilesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, rider_profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__rider_profilesClient<runtime.Types.Result.GetResult<Prisma.$rider_profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends rider_profilesFindManyArgs>(args?: Prisma.SelectSubset<T, rider_profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rider_profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends rider_profilesCreateArgs>(args: Prisma.SelectSubset<T, rider_profilesCreateArgs<ExtArgs>>): Prisma.Prisma__rider_profilesClient<runtime.Types.Result.GetResult<Prisma.$rider_profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends rider_profilesCreateManyArgs>(args?: Prisma.SelectSubset<T, rider_profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends rider_profilesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, rider_profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rider_profilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends rider_profilesDeleteArgs>(args: Prisma.SelectSubset<T, rider_profilesDeleteArgs<ExtArgs>>): Prisma.Prisma__rider_profilesClient<runtime.Types.Result.GetResult<Prisma.$rider_profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends rider_profilesUpdateArgs>(args: Prisma.SelectSubset<T, rider_profilesUpdateArgs<ExtArgs>>): Prisma.Prisma__rider_profilesClient<runtime.Types.Result.GetResult<Prisma.$rider_profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends rider_profilesDeleteManyArgs>(args?: Prisma.SelectSubset<T, rider_profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends rider_profilesUpdateManyArgs>(args: Prisma.SelectSubset<T, rider_profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends rider_profilesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, rider_profilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rider_profilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends rider_profilesUpsertArgs>(args: Prisma.SelectSubset<T, rider_profilesUpsertArgs<ExtArgs>>): Prisma.Prisma__rider_profilesClient<runtime.Types.Result.GetResult<Prisma.$rider_profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends rider_profilesCountArgs>(args?: Prisma.Subset<T, rider_profilesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Rider_profilesCountAggregateOutputType> : number>;
    aggregate<T extends Rider_profilesAggregateArgs>(args: Prisma.Subset<T, Rider_profilesAggregateArgs>): Prisma.PrismaPromise<GetRider_profilesAggregateType<T>>;
    groupBy<T extends rider_profilesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: rider_profilesGroupByArgs['orderBy'];
    } : {
        orderBy?: rider_profilesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, rider_profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRider_profilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: rider_profilesFieldRefs;
}
export interface Prisma__rider_profilesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    deliveries<T extends Prisma.rider_profiles$deliveriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.rider_profiles$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    rider_locations<T extends Prisma.rider_profiles$rider_locationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.rider_profiles$rider_locationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rider_locationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    rider_settlements<T extends Prisma.rider_profiles$rider_settlementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.rider_profiles$rider_settlementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rider_settlementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface rider_profilesFieldRefs {
    readonly id: Prisma.FieldRef<"rider_profiles", 'String'>;
    readonly user_id: Prisma.FieldRef<"rider_profiles", 'String'>;
    readonly document_type: Prisma.FieldRef<"rider_profiles", 'String'>;
    readonly document_number: Prisma.FieldRef<"rider_profiles", 'String'>;
    readonly vehicle_type: Prisma.FieldRef<"rider_profiles", 'vehicle_type_enum'>;
    readonly vehicle_plate: Prisma.FieldRef<"rider_profiles", 'String'>;
    readonly status: Prisma.FieldRef<"rider_profiles", 'rider_status_type'>;
    readonly is_online: Prisma.FieldRef<"rider_profiles", 'Boolean'>;
    readonly is_available: Prisma.FieldRef<"rider_profiles", 'Boolean'>;
    readonly rating_avg: Prisma.FieldRef<"rider_profiles", 'Decimal'>;
    readonly total_deliveries: Prisma.FieldRef<"rider_profiles", 'Int'>;
    readonly created_at: Prisma.FieldRef<"rider_profiles", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"rider_profiles", 'DateTime'>;
}
export type rider_profilesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_profilesSelect<ExtArgs> | null;
    omit?: Prisma.rider_profilesOmit<ExtArgs> | null;
    include?: Prisma.rider_profilesInclude<ExtArgs> | null;
    where: Prisma.rider_profilesWhereUniqueInput;
};
export type rider_profilesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_profilesSelect<ExtArgs> | null;
    omit?: Prisma.rider_profilesOmit<ExtArgs> | null;
    include?: Prisma.rider_profilesInclude<ExtArgs> | null;
    where: Prisma.rider_profilesWhereUniqueInput;
};
export type rider_profilesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_profilesSelect<ExtArgs> | null;
    omit?: Prisma.rider_profilesOmit<ExtArgs> | null;
    include?: Prisma.rider_profilesInclude<ExtArgs> | null;
    where?: Prisma.rider_profilesWhereInput;
    orderBy?: Prisma.rider_profilesOrderByWithRelationInput | Prisma.rider_profilesOrderByWithRelationInput[];
    cursor?: Prisma.rider_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Rider_profilesScalarFieldEnum | Prisma.Rider_profilesScalarFieldEnum[];
};
export type rider_profilesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_profilesSelect<ExtArgs> | null;
    omit?: Prisma.rider_profilesOmit<ExtArgs> | null;
    include?: Prisma.rider_profilesInclude<ExtArgs> | null;
    where?: Prisma.rider_profilesWhereInput;
    orderBy?: Prisma.rider_profilesOrderByWithRelationInput | Prisma.rider_profilesOrderByWithRelationInput[];
    cursor?: Prisma.rider_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Rider_profilesScalarFieldEnum | Prisma.Rider_profilesScalarFieldEnum[];
};
export type rider_profilesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_profilesSelect<ExtArgs> | null;
    omit?: Prisma.rider_profilesOmit<ExtArgs> | null;
    include?: Prisma.rider_profilesInclude<ExtArgs> | null;
    where?: Prisma.rider_profilesWhereInput;
    orderBy?: Prisma.rider_profilesOrderByWithRelationInput | Prisma.rider_profilesOrderByWithRelationInput[];
    cursor?: Prisma.rider_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Rider_profilesScalarFieldEnum | Prisma.Rider_profilesScalarFieldEnum[];
};
export type rider_profilesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_profilesSelect<ExtArgs> | null;
    omit?: Prisma.rider_profilesOmit<ExtArgs> | null;
    include?: Prisma.rider_profilesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rider_profilesCreateInput, Prisma.rider_profilesUncheckedCreateInput>;
};
export type rider_profilesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.rider_profilesCreateManyInput | Prisma.rider_profilesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type rider_profilesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_profilesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.rider_profilesOmit<ExtArgs> | null;
    data: Prisma.rider_profilesCreateManyInput | Prisma.rider_profilesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.rider_profilesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type rider_profilesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_profilesSelect<ExtArgs> | null;
    omit?: Prisma.rider_profilesOmit<ExtArgs> | null;
    include?: Prisma.rider_profilesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rider_profilesUpdateInput, Prisma.rider_profilesUncheckedUpdateInput>;
    where: Prisma.rider_profilesWhereUniqueInput;
};
export type rider_profilesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.rider_profilesUpdateManyMutationInput, Prisma.rider_profilesUncheckedUpdateManyInput>;
    where?: Prisma.rider_profilesWhereInput;
    limit?: number;
};
export type rider_profilesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_profilesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.rider_profilesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rider_profilesUpdateManyMutationInput, Prisma.rider_profilesUncheckedUpdateManyInput>;
    where?: Prisma.rider_profilesWhereInput;
    limit?: number;
    include?: Prisma.rider_profilesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type rider_profilesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_profilesSelect<ExtArgs> | null;
    omit?: Prisma.rider_profilesOmit<ExtArgs> | null;
    include?: Prisma.rider_profilesInclude<ExtArgs> | null;
    where: Prisma.rider_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.rider_profilesCreateInput, Prisma.rider_profilesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.rider_profilesUpdateInput, Prisma.rider_profilesUncheckedUpdateInput>;
};
export type rider_profilesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_profilesSelect<ExtArgs> | null;
    omit?: Prisma.rider_profilesOmit<ExtArgs> | null;
    include?: Prisma.rider_profilesInclude<ExtArgs> | null;
    where: Prisma.rider_profilesWhereUniqueInput;
};
export type rider_profilesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rider_profilesWhereInput;
    limit?: number;
};
export type rider_profiles$deliveriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.deliveriesSelect<ExtArgs> | null;
    omit?: Prisma.deliveriesOmit<ExtArgs> | null;
    include?: Prisma.deliveriesInclude<ExtArgs> | null;
    where?: Prisma.deliveriesWhereInput;
    orderBy?: Prisma.deliveriesOrderByWithRelationInput | Prisma.deliveriesOrderByWithRelationInput[];
    cursor?: Prisma.deliveriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeliveriesScalarFieldEnum | Prisma.DeliveriesScalarFieldEnum[];
};
export type rider_profiles$rider_locationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type rider_profiles$rider_settlementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_settlementsSelect<ExtArgs> | null;
    omit?: Prisma.rider_settlementsOmit<ExtArgs> | null;
    include?: Prisma.rider_settlementsInclude<ExtArgs> | null;
    where?: Prisma.rider_settlementsWhereInput;
    orderBy?: Prisma.rider_settlementsOrderByWithRelationInput | Prisma.rider_settlementsOrderByWithRelationInput[];
    cursor?: Prisma.rider_settlementsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Rider_settlementsScalarFieldEnum | Prisma.Rider_settlementsScalarFieldEnum[];
};
export type rider_profilesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rider_profilesSelect<ExtArgs> | null;
    omit?: Prisma.rider_profilesOmit<ExtArgs> | null;
    include?: Prisma.rider_profilesInclude<ExtArgs> | null;
};
export {};
