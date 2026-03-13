import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type delivery_zonesModel = runtime.Types.Result.DefaultSelection<Prisma.$delivery_zonesPayload>;
export type AggregateDelivery_zones = {
    _count: Delivery_zonesCountAggregateOutputType | null;
    _avg: Delivery_zonesAvgAggregateOutputType | null;
    _sum: Delivery_zonesSumAggregateOutputType | null;
    _min: Delivery_zonesMinAggregateOutputType | null;
    _max: Delivery_zonesMaxAggregateOutputType | null;
};
export type Delivery_zonesAvgAggregateOutputType = {
    center_lat: runtime.Decimal | null;
    center_lng: runtime.Decimal | null;
    radius_meters: number | null;
    base_fee_amount: runtime.Decimal | null;
    per_km_fee_amount: runtime.Decimal | null;
    min_eta_minutes: number | null;
    max_eta_minutes: number | null;
    priority: number | null;
};
export type Delivery_zonesSumAggregateOutputType = {
    center_lat: runtime.Decimal | null;
    center_lng: runtime.Decimal | null;
    radius_meters: number | null;
    base_fee_amount: runtime.Decimal | null;
    per_km_fee_amount: runtime.Decimal | null;
    min_eta_minutes: number | null;
    max_eta_minutes: number | null;
    priority: number | null;
};
export type Delivery_zonesMinAggregateOutputType = {
    id: string | null;
    branch_id: string | null;
    name: string | null;
    zone_type: $Enums.zone_type_enum | null;
    center_lat: runtime.Decimal | null;
    center_lng: runtime.Decimal | null;
    radius_meters: number | null;
    base_fee_amount: runtime.Decimal | null;
    per_km_fee_amount: runtime.Decimal | null;
    min_eta_minutes: number | null;
    max_eta_minutes: number | null;
    is_active: boolean | null;
    priority: number | null;
    created_at: Date | null;
};
export type Delivery_zonesMaxAggregateOutputType = {
    id: string | null;
    branch_id: string | null;
    name: string | null;
    zone_type: $Enums.zone_type_enum | null;
    center_lat: runtime.Decimal | null;
    center_lng: runtime.Decimal | null;
    radius_meters: number | null;
    base_fee_amount: runtime.Decimal | null;
    per_km_fee_amount: runtime.Decimal | null;
    min_eta_minutes: number | null;
    max_eta_minutes: number | null;
    is_active: boolean | null;
    priority: number | null;
    created_at: Date | null;
};
export type Delivery_zonesCountAggregateOutputType = {
    id: number;
    branch_id: number;
    name: number;
    zone_type: number;
    center_lat: number;
    center_lng: number;
    radius_meters: number;
    polygon_geojson: number;
    base_fee_amount: number;
    per_km_fee_amount: number;
    min_eta_minutes: number;
    max_eta_minutes: number;
    is_active: number;
    priority: number;
    created_at: number;
    _all: number;
};
export type Delivery_zonesAvgAggregateInputType = {
    center_lat?: true;
    center_lng?: true;
    radius_meters?: true;
    base_fee_amount?: true;
    per_km_fee_amount?: true;
    min_eta_minutes?: true;
    max_eta_minutes?: true;
    priority?: true;
};
export type Delivery_zonesSumAggregateInputType = {
    center_lat?: true;
    center_lng?: true;
    radius_meters?: true;
    base_fee_amount?: true;
    per_km_fee_amount?: true;
    min_eta_minutes?: true;
    max_eta_minutes?: true;
    priority?: true;
};
export type Delivery_zonesMinAggregateInputType = {
    id?: true;
    branch_id?: true;
    name?: true;
    zone_type?: true;
    center_lat?: true;
    center_lng?: true;
    radius_meters?: true;
    base_fee_amount?: true;
    per_km_fee_amount?: true;
    min_eta_minutes?: true;
    max_eta_minutes?: true;
    is_active?: true;
    priority?: true;
    created_at?: true;
};
export type Delivery_zonesMaxAggregateInputType = {
    id?: true;
    branch_id?: true;
    name?: true;
    zone_type?: true;
    center_lat?: true;
    center_lng?: true;
    radius_meters?: true;
    base_fee_amount?: true;
    per_km_fee_amount?: true;
    min_eta_minutes?: true;
    max_eta_minutes?: true;
    is_active?: true;
    priority?: true;
    created_at?: true;
};
export type Delivery_zonesCountAggregateInputType = {
    id?: true;
    branch_id?: true;
    name?: true;
    zone_type?: true;
    center_lat?: true;
    center_lng?: true;
    radius_meters?: true;
    polygon_geojson?: true;
    base_fee_amount?: true;
    per_km_fee_amount?: true;
    min_eta_minutes?: true;
    max_eta_minutes?: true;
    is_active?: true;
    priority?: true;
    created_at?: true;
    _all?: true;
};
export type Delivery_zonesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.delivery_zonesWhereInput;
    orderBy?: Prisma.delivery_zonesOrderByWithRelationInput | Prisma.delivery_zonesOrderByWithRelationInput[];
    cursor?: Prisma.delivery_zonesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Delivery_zonesCountAggregateInputType;
    _avg?: Delivery_zonesAvgAggregateInputType;
    _sum?: Delivery_zonesSumAggregateInputType;
    _min?: Delivery_zonesMinAggregateInputType;
    _max?: Delivery_zonesMaxAggregateInputType;
};
export type GetDelivery_zonesAggregateType<T extends Delivery_zonesAggregateArgs> = {
    [P in keyof T & keyof AggregateDelivery_zones]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDelivery_zones[P]> : Prisma.GetScalarType<T[P], AggregateDelivery_zones[P]>;
};
export type delivery_zonesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.delivery_zonesWhereInput;
    orderBy?: Prisma.delivery_zonesOrderByWithAggregationInput | Prisma.delivery_zonesOrderByWithAggregationInput[];
    by: Prisma.Delivery_zonesScalarFieldEnum[] | Prisma.Delivery_zonesScalarFieldEnum;
    having?: Prisma.delivery_zonesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Delivery_zonesCountAggregateInputType | true;
    _avg?: Delivery_zonesAvgAggregateInputType;
    _sum?: Delivery_zonesSumAggregateInputType;
    _min?: Delivery_zonesMinAggregateInputType;
    _max?: Delivery_zonesMaxAggregateInputType;
};
export type Delivery_zonesGroupByOutputType = {
    id: string;
    branch_id: string;
    name: string;
    zone_type: $Enums.zone_type_enum;
    center_lat: runtime.Decimal | null;
    center_lng: runtime.Decimal | null;
    radius_meters: number | null;
    polygon_geojson: runtime.JsonValue | null;
    base_fee_amount: runtime.Decimal;
    per_km_fee_amount: runtime.Decimal;
    min_eta_minutes: number;
    max_eta_minutes: number;
    is_active: boolean;
    priority: number;
    created_at: Date;
    _count: Delivery_zonesCountAggregateOutputType | null;
    _avg: Delivery_zonesAvgAggregateOutputType | null;
    _sum: Delivery_zonesSumAggregateOutputType | null;
    _min: Delivery_zonesMinAggregateOutputType | null;
    _max: Delivery_zonesMaxAggregateOutputType | null;
};
type GetDelivery_zonesGroupByPayload<T extends delivery_zonesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Delivery_zonesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Delivery_zonesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Delivery_zonesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Delivery_zonesGroupByOutputType[P]>;
}>>;
export type delivery_zonesWhereInput = {
    AND?: Prisma.delivery_zonesWhereInput | Prisma.delivery_zonesWhereInput[];
    OR?: Prisma.delivery_zonesWhereInput[];
    NOT?: Prisma.delivery_zonesWhereInput | Prisma.delivery_zonesWhereInput[];
    id?: Prisma.UuidFilter<"delivery_zones"> | string;
    branch_id?: Prisma.UuidFilter<"delivery_zones"> | string;
    name?: Prisma.StringFilter<"delivery_zones"> | string;
    zone_type?: Prisma.Enumzone_type_enumFilter<"delivery_zones"> | $Enums.zone_type_enum;
    center_lat?: Prisma.DecimalNullableFilter<"delivery_zones"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    center_lng?: Prisma.DecimalNullableFilter<"delivery_zones"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    radius_meters?: Prisma.IntNullableFilter<"delivery_zones"> | number | null;
    polygon_geojson?: Prisma.JsonNullableFilter<"delivery_zones">;
    base_fee_amount?: Prisma.DecimalFilter<"delivery_zones"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    per_km_fee_amount?: Prisma.DecimalFilter<"delivery_zones"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_eta_minutes?: Prisma.IntFilter<"delivery_zones"> | number;
    max_eta_minutes?: Prisma.IntFilter<"delivery_zones"> | number;
    is_active?: Prisma.BoolFilter<"delivery_zones"> | boolean;
    priority?: Prisma.IntFilter<"delivery_zones"> | number;
    created_at?: Prisma.DateTimeFilter<"delivery_zones"> | Date | string;
    store_branches?: Prisma.XOR<Prisma.Store_branchesScalarRelationFilter, Prisma.store_branchesWhereInput>;
};
export type delivery_zonesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    zone_type?: Prisma.SortOrder;
    center_lat?: Prisma.SortOrderInput | Prisma.SortOrder;
    center_lng?: Prisma.SortOrderInput | Prisma.SortOrder;
    radius_meters?: Prisma.SortOrderInput | Prisma.SortOrder;
    polygon_geojson?: Prisma.SortOrderInput | Prisma.SortOrder;
    base_fee_amount?: Prisma.SortOrder;
    per_km_fee_amount?: Prisma.SortOrder;
    min_eta_minutes?: Prisma.SortOrder;
    max_eta_minutes?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    store_branches?: Prisma.store_branchesOrderByWithRelationInput;
};
export type delivery_zonesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.delivery_zonesWhereInput | Prisma.delivery_zonesWhereInput[];
    OR?: Prisma.delivery_zonesWhereInput[];
    NOT?: Prisma.delivery_zonesWhereInput | Prisma.delivery_zonesWhereInput[];
    branch_id?: Prisma.UuidFilter<"delivery_zones"> | string;
    name?: Prisma.StringFilter<"delivery_zones"> | string;
    zone_type?: Prisma.Enumzone_type_enumFilter<"delivery_zones"> | $Enums.zone_type_enum;
    center_lat?: Prisma.DecimalNullableFilter<"delivery_zones"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    center_lng?: Prisma.DecimalNullableFilter<"delivery_zones"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    radius_meters?: Prisma.IntNullableFilter<"delivery_zones"> | number | null;
    polygon_geojson?: Prisma.JsonNullableFilter<"delivery_zones">;
    base_fee_amount?: Prisma.DecimalFilter<"delivery_zones"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    per_km_fee_amount?: Prisma.DecimalFilter<"delivery_zones"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_eta_minutes?: Prisma.IntFilter<"delivery_zones"> | number;
    max_eta_minutes?: Prisma.IntFilter<"delivery_zones"> | number;
    is_active?: Prisma.BoolFilter<"delivery_zones"> | boolean;
    priority?: Prisma.IntFilter<"delivery_zones"> | number;
    created_at?: Prisma.DateTimeFilter<"delivery_zones"> | Date | string;
    store_branches?: Prisma.XOR<Prisma.Store_branchesScalarRelationFilter, Prisma.store_branchesWhereInput>;
}, "id">;
export type delivery_zonesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    zone_type?: Prisma.SortOrder;
    center_lat?: Prisma.SortOrderInput | Prisma.SortOrder;
    center_lng?: Prisma.SortOrderInput | Prisma.SortOrder;
    radius_meters?: Prisma.SortOrderInput | Prisma.SortOrder;
    polygon_geojson?: Prisma.SortOrderInput | Prisma.SortOrder;
    base_fee_amount?: Prisma.SortOrder;
    per_km_fee_amount?: Prisma.SortOrder;
    min_eta_minutes?: Prisma.SortOrder;
    max_eta_minutes?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.delivery_zonesCountOrderByAggregateInput;
    _avg?: Prisma.delivery_zonesAvgOrderByAggregateInput;
    _max?: Prisma.delivery_zonesMaxOrderByAggregateInput;
    _min?: Prisma.delivery_zonesMinOrderByAggregateInput;
    _sum?: Prisma.delivery_zonesSumOrderByAggregateInput;
};
export type delivery_zonesScalarWhereWithAggregatesInput = {
    AND?: Prisma.delivery_zonesScalarWhereWithAggregatesInput | Prisma.delivery_zonesScalarWhereWithAggregatesInput[];
    OR?: Prisma.delivery_zonesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.delivery_zonesScalarWhereWithAggregatesInput | Prisma.delivery_zonesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"delivery_zones"> | string;
    branch_id?: Prisma.UuidWithAggregatesFilter<"delivery_zones"> | string;
    name?: Prisma.StringWithAggregatesFilter<"delivery_zones"> | string;
    zone_type?: Prisma.Enumzone_type_enumWithAggregatesFilter<"delivery_zones"> | $Enums.zone_type_enum;
    center_lat?: Prisma.DecimalNullableWithAggregatesFilter<"delivery_zones"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    center_lng?: Prisma.DecimalNullableWithAggregatesFilter<"delivery_zones"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    radius_meters?: Prisma.IntNullableWithAggregatesFilter<"delivery_zones"> | number | null;
    polygon_geojson?: Prisma.JsonNullableWithAggregatesFilter<"delivery_zones">;
    base_fee_amount?: Prisma.DecimalWithAggregatesFilter<"delivery_zones"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    per_km_fee_amount?: Prisma.DecimalWithAggregatesFilter<"delivery_zones"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_eta_minutes?: Prisma.IntWithAggregatesFilter<"delivery_zones"> | number;
    max_eta_minutes?: Prisma.IntWithAggregatesFilter<"delivery_zones"> | number;
    is_active?: Prisma.BoolWithAggregatesFilter<"delivery_zones"> | boolean;
    priority?: Prisma.IntWithAggregatesFilter<"delivery_zones"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"delivery_zones"> | Date | string;
};
export type delivery_zonesCreateInput = {
    id?: string;
    name: string;
    zone_type: $Enums.zone_type_enum;
    center_lat?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    center_lng?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    radius_meters?: number | null;
    polygon_geojson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    base_fee_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    per_km_fee_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_eta_minutes: number;
    max_eta_minutes: number;
    is_active?: boolean;
    priority?: number;
    created_at?: Date | string;
    store_branches: Prisma.store_branchesCreateNestedOneWithoutDelivery_zonesInput;
};
export type delivery_zonesUncheckedCreateInput = {
    id?: string;
    branch_id: string;
    name: string;
    zone_type: $Enums.zone_type_enum;
    center_lat?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    center_lng?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    radius_meters?: number | null;
    polygon_geojson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    base_fee_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    per_km_fee_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_eta_minutes: number;
    max_eta_minutes: number;
    is_active?: boolean;
    priority?: number;
    created_at?: Date | string;
};
export type delivery_zonesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone_type?: Prisma.Enumzone_type_enumFieldUpdateOperationsInput | $Enums.zone_type_enum;
    center_lat?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    center_lng?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    radius_meters?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    polygon_geojson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    base_fee_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    per_km_fee_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_eta_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_eta_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_branches?: Prisma.store_branchesUpdateOneRequiredWithoutDelivery_zonesNestedInput;
};
export type delivery_zonesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone_type?: Prisma.Enumzone_type_enumFieldUpdateOperationsInput | $Enums.zone_type_enum;
    center_lat?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    center_lng?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    radius_meters?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    polygon_geojson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    base_fee_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    per_km_fee_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_eta_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_eta_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type delivery_zonesCreateManyInput = {
    id?: string;
    branch_id: string;
    name: string;
    zone_type: $Enums.zone_type_enum;
    center_lat?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    center_lng?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    radius_meters?: number | null;
    polygon_geojson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    base_fee_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    per_km_fee_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_eta_minutes: number;
    max_eta_minutes: number;
    is_active?: boolean;
    priority?: number;
    created_at?: Date | string;
};
export type delivery_zonesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone_type?: Prisma.Enumzone_type_enumFieldUpdateOperationsInput | $Enums.zone_type_enum;
    center_lat?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    center_lng?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    radius_meters?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    polygon_geojson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    base_fee_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    per_km_fee_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_eta_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_eta_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type delivery_zonesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone_type?: Prisma.Enumzone_type_enumFieldUpdateOperationsInput | $Enums.zone_type_enum;
    center_lat?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    center_lng?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    radius_meters?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    polygon_geojson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    base_fee_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    per_km_fee_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_eta_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_eta_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type delivery_zonesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    zone_type?: Prisma.SortOrder;
    center_lat?: Prisma.SortOrder;
    center_lng?: Prisma.SortOrder;
    radius_meters?: Prisma.SortOrder;
    polygon_geojson?: Prisma.SortOrder;
    base_fee_amount?: Prisma.SortOrder;
    per_km_fee_amount?: Prisma.SortOrder;
    min_eta_minutes?: Prisma.SortOrder;
    max_eta_minutes?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type delivery_zonesAvgOrderByAggregateInput = {
    center_lat?: Prisma.SortOrder;
    center_lng?: Prisma.SortOrder;
    radius_meters?: Prisma.SortOrder;
    base_fee_amount?: Prisma.SortOrder;
    per_km_fee_amount?: Prisma.SortOrder;
    min_eta_minutes?: Prisma.SortOrder;
    max_eta_minutes?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
};
export type delivery_zonesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    zone_type?: Prisma.SortOrder;
    center_lat?: Prisma.SortOrder;
    center_lng?: Prisma.SortOrder;
    radius_meters?: Prisma.SortOrder;
    base_fee_amount?: Prisma.SortOrder;
    per_km_fee_amount?: Prisma.SortOrder;
    min_eta_minutes?: Prisma.SortOrder;
    max_eta_minutes?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type delivery_zonesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    zone_type?: Prisma.SortOrder;
    center_lat?: Prisma.SortOrder;
    center_lng?: Prisma.SortOrder;
    radius_meters?: Prisma.SortOrder;
    base_fee_amount?: Prisma.SortOrder;
    per_km_fee_amount?: Prisma.SortOrder;
    min_eta_minutes?: Prisma.SortOrder;
    max_eta_minutes?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type delivery_zonesSumOrderByAggregateInput = {
    center_lat?: Prisma.SortOrder;
    center_lng?: Prisma.SortOrder;
    radius_meters?: Prisma.SortOrder;
    base_fee_amount?: Prisma.SortOrder;
    per_km_fee_amount?: Prisma.SortOrder;
    min_eta_minutes?: Prisma.SortOrder;
    max_eta_minutes?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
};
export type Delivery_zonesListRelationFilter = {
    every?: Prisma.delivery_zonesWhereInput;
    some?: Prisma.delivery_zonesWhereInput;
    none?: Prisma.delivery_zonesWhereInput;
};
export type delivery_zonesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Enumzone_type_enumFieldUpdateOperationsInput = {
    set?: $Enums.zone_type_enum;
};
export type delivery_zonesCreateNestedManyWithoutStore_branchesInput = {
    create?: Prisma.XOR<Prisma.delivery_zonesCreateWithoutStore_branchesInput, Prisma.delivery_zonesUncheckedCreateWithoutStore_branchesInput> | Prisma.delivery_zonesCreateWithoutStore_branchesInput[] | Prisma.delivery_zonesUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.delivery_zonesCreateOrConnectWithoutStore_branchesInput | Prisma.delivery_zonesCreateOrConnectWithoutStore_branchesInput[];
    createMany?: Prisma.delivery_zonesCreateManyStore_branchesInputEnvelope;
    connect?: Prisma.delivery_zonesWhereUniqueInput | Prisma.delivery_zonesWhereUniqueInput[];
};
export type delivery_zonesUncheckedCreateNestedManyWithoutStore_branchesInput = {
    create?: Prisma.XOR<Prisma.delivery_zonesCreateWithoutStore_branchesInput, Prisma.delivery_zonesUncheckedCreateWithoutStore_branchesInput> | Prisma.delivery_zonesCreateWithoutStore_branchesInput[] | Prisma.delivery_zonesUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.delivery_zonesCreateOrConnectWithoutStore_branchesInput | Prisma.delivery_zonesCreateOrConnectWithoutStore_branchesInput[];
    createMany?: Prisma.delivery_zonesCreateManyStore_branchesInputEnvelope;
    connect?: Prisma.delivery_zonesWhereUniqueInput | Prisma.delivery_zonesWhereUniqueInput[];
};
export type delivery_zonesUpdateManyWithoutStore_branchesNestedInput = {
    create?: Prisma.XOR<Prisma.delivery_zonesCreateWithoutStore_branchesInput, Prisma.delivery_zonesUncheckedCreateWithoutStore_branchesInput> | Prisma.delivery_zonesCreateWithoutStore_branchesInput[] | Prisma.delivery_zonesUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.delivery_zonesCreateOrConnectWithoutStore_branchesInput | Prisma.delivery_zonesCreateOrConnectWithoutStore_branchesInput[];
    upsert?: Prisma.delivery_zonesUpsertWithWhereUniqueWithoutStore_branchesInput | Prisma.delivery_zonesUpsertWithWhereUniqueWithoutStore_branchesInput[];
    createMany?: Prisma.delivery_zonesCreateManyStore_branchesInputEnvelope;
    set?: Prisma.delivery_zonesWhereUniqueInput | Prisma.delivery_zonesWhereUniqueInput[];
    disconnect?: Prisma.delivery_zonesWhereUniqueInput | Prisma.delivery_zonesWhereUniqueInput[];
    delete?: Prisma.delivery_zonesWhereUniqueInput | Prisma.delivery_zonesWhereUniqueInput[];
    connect?: Prisma.delivery_zonesWhereUniqueInput | Prisma.delivery_zonesWhereUniqueInput[];
    update?: Prisma.delivery_zonesUpdateWithWhereUniqueWithoutStore_branchesInput | Prisma.delivery_zonesUpdateWithWhereUniqueWithoutStore_branchesInput[];
    updateMany?: Prisma.delivery_zonesUpdateManyWithWhereWithoutStore_branchesInput | Prisma.delivery_zonesUpdateManyWithWhereWithoutStore_branchesInput[];
    deleteMany?: Prisma.delivery_zonesScalarWhereInput | Prisma.delivery_zonesScalarWhereInput[];
};
export type delivery_zonesUncheckedUpdateManyWithoutStore_branchesNestedInput = {
    create?: Prisma.XOR<Prisma.delivery_zonesCreateWithoutStore_branchesInput, Prisma.delivery_zonesUncheckedCreateWithoutStore_branchesInput> | Prisma.delivery_zonesCreateWithoutStore_branchesInput[] | Prisma.delivery_zonesUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.delivery_zonesCreateOrConnectWithoutStore_branchesInput | Prisma.delivery_zonesCreateOrConnectWithoutStore_branchesInput[];
    upsert?: Prisma.delivery_zonesUpsertWithWhereUniqueWithoutStore_branchesInput | Prisma.delivery_zonesUpsertWithWhereUniqueWithoutStore_branchesInput[];
    createMany?: Prisma.delivery_zonesCreateManyStore_branchesInputEnvelope;
    set?: Prisma.delivery_zonesWhereUniqueInput | Prisma.delivery_zonesWhereUniqueInput[];
    disconnect?: Prisma.delivery_zonesWhereUniqueInput | Prisma.delivery_zonesWhereUniqueInput[];
    delete?: Prisma.delivery_zonesWhereUniqueInput | Prisma.delivery_zonesWhereUniqueInput[];
    connect?: Prisma.delivery_zonesWhereUniqueInput | Prisma.delivery_zonesWhereUniqueInput[];
    update?: Prisma.delivery_zonesUpdateWithWhereUniqueWithoutStore_branchesInput | Prisma.delivery_zonesUpdateWithWhereUniqueWithoutStore_branchesInput[];
    updateMany?: Prisma.delivery_zonesUpdateManyWithWhereWithoutStore_branchesInput | Prisma.delivery_zonesUpdateManyWithWhereWithoutStore_branchesInput[];
    deleteMany?: Prisma.delivery_zonesScalarWhereInput | Prisma.delivery_zonesScalarWhereInput[];
};
export type delivery_zonesCreateWithoutStore_branchesInput = {
    id?: string;
    name: string;
    zone_type: $Enums.zone_type_enum;
    center_lat?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    center_lng?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    radius_meters?: number | null;
    polygon_geojson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    base_fee_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    per_km_fee_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_eta_minutes: number;
    max_eta_minutes: number;
    is_active?: boolean;
    priority?: number;
    created_at?: Date | string;
};
export type delivery_zonesUncheckedCreateWithoutStore_branchesInput = {
    id?: string;
    name: string;
    zone_type: $Enums.zone_type_enum;
    center_lat?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    center_lng?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    radius_meters?: number | null;
    polygon_geojson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    base_fee_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    per_km_fee_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_eta_minutes: number;
    max_eta_minutes: number;
    is_active?: boolean;
    priority?: number;
    created_at?: Date | string;
};
export type delivery_zonesCreateOrConnectWithoutStore_branchesInput = {
    where: Prisma.delivery_zonesWhereUniqueInput;
    create: Prisma.XOR<Prisma.delivery_zonesCreateWithoutStore_branchesInput, Prisma.delivery_zonesUncheckedCreateWithoutStore_branchesInput>;
};
export type delivery_zonesCreateManyStore_branchesInputEnvelope = {
    data: Prisma.delivery_zonesCreateManyStore_branchesInput | Prisma.delivery_zonesCreateManyStore_branchesInput[];
    skipDuplicates?: boolean;
};
export type delivery_zonesUpsertWithWhereUniqueWithoutStore_branchesInput = {
    where: Prisma.delivery_zonesWhereUniqueInput;
    update: Prisma.XOR<Prisma.delivery_zonesUpdateWithoutStore_branchesInput, Prisma.delivery_zonesUncheckedUpdateWithoutStore_branchesInput>;
    create: Prisma.XOR<Prisma.delivery_zonesCreateWithoutStore_branchesInput, Prisma.delivery_zonesUncheckedCreateWithoutStore_branchesInput>;
};
export type delivery_zonesUpdateWithWhereUniqueWithoutStore_branchesInput = {
    where: Prisma.delivery_zonesWhereUniqueInput;
    data: Prisma.XOR<Prisma.delivery_zonesUpdateWithoutStore_branchesInput, Prisma.delivery_zonesUncheckedUpdateWithoutStore_branchesInput>;
};
export type delivery_zonesUpdateManyWithWhereWithoutStore_branchesInput = {
    where: Prisma.delivery_zonesScalarWhereInput;
    data: Prisma.XOR<Prisma.delivery_zonesUpdateManyMutationInput, Prisma.delivery_zonesUncheckedUpdateManyWithoutStore_branchesInput>;
};
export type delivery_zonesScalarWhereInput = {
    AND?: Prisma.delivery_zonesScalarWhereInput | Prisma.delivery_zonesScalarWhereInput[];
    OR?: Prisma.delivery_zonesScalarWhereInput[];
    NOT?: Prisma.delivery_zonesScalarWhereInput | Prisma.delivery_zonesScalarWhereInput[];
    id?: Prisma.UuidFilter<"delivery_zones"> | string;
    branch_id?: Prisma.UuidFilter<"delivery_zones"> | string;
    name?: Prisma.StringFilter<"delivery_zones"> | string;
    zone_type?: Prisma.Enumzone_type_enumFilter<"delivery_zones"> | $Enums.zone_type_enum;
    center_lat?: Prisma.DecimalNullableFilter<"delivery_zones"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    center_lng?: Prisma.DecimalNullableFilter<"delivery_zones"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    radius_meters?: Prisma.IntNullableFilter<"delivery_zones"> | number | null;
    polygon_geojson?: Prisma.JsonNullableFilter<"delivery_zones">;
    base_fee_amount?: Prisma.DecimalFilter<"delivery_zones"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    per_km_fee_amount?: Prisma.DecimalFilter<"delivery_zones"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_eta_minutes?: Prisma.IntFilter<"delivery_zones"> | number;
    max_eta_minutes?: Prisma.IntFilter<"delivery_zones"> | number;
    is_active?: Prisma.BoolFilter<"delivery_zones"> | boolean;
    priority?: Prisma.IntFilter<"delivery_zones"> | number;
    created_at?: Prisma.DateTimeFilter<"delivery_zones"> | Date | string;
};
export type delivery_zonesCreateManyStore_branchesInput = {
    id?: string;
    name: string;
    zone_type: $Enums.zone_type_enum;
    center_lat?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    center_lng?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    radius_meters?: number | null;
    polygon_geojson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    base_fee_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    per_km_fee_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_eta_minutes: number;
    max_eta_minutes: number;
    is_active?: boolean;
    priority?: number;
    created_at?: Date | string;
};
export type delivery_zonesUpdateWithoutStore_branchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone_type?: Prisma.Enumzone_type_enumFieldUpdateOperationsInput | $Enums.zone_type_enum;
    center_lat?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    center_lng?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    radius_meters?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    polygon_geojson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    base_fee_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    per_km_fee_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_eta_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_eta_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type delivery_zonesUncheckedUpdateWithoutStore_branchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone_type?: Prisma.Enumzone_type_enumFieldUpdateOperationsInput | $Enums.zone_type_enum;
    center_lat?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    center_lng?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    radius_meters?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    polygon_geojson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    base_fee_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    per_km_fee_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_eta_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_eta_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type delivery_zonesUncheckedUpdateManyWithoutStore_branchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone_type?: Prisma.Enumzone_type_enumFieldUpdateOperationsInput | $Enums.zone_type_enum;
    center_lat?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    center_lng?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    radius_meters?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    polygon_geojson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    base_fee_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    per_km_fee_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_eta_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    max_eta_minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type delivery_zonesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    branch_id?: boolean;
    name?: boolean;
    zone_type?: boolean;
    center_lat?: boolean;
    center_lng?: boolean;
    radius_meters?: boolean;
    polygon_geojson?: boolean;
    base_fee_amount?: boolean;
    per_km_fee_amount?: boolean;
    min_eta_minutes?: boolean;
    max_eta_minutes?: boolean;
    is_active?: boolean;
    priority?: boolean;
    created_at?: boolean;
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["delivery_zones"]>;
export type delivery_zonesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    branch_id?: boolean;
    name?: boolean;
    zone_type?: boolean;
    center_lat?: boolean;
    center_lng?: boolean;
    radius_meters?: boolean;
    polygon_geojson?: boolean;
    base_fee_amount?: boolean;
    per_km_fee_amount?: boolean;
    min_eta_minutes?: boolean;
    max_eta_minutes?: boolean;
    is_active?: boolean;
    priority?: boolean;
    created_at?: boolean;
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["delivery_zones"]>;
export type delivery_zonesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    branch_id?: boolean;
    name?: boolean;
    zone_type?: boolean;
    center_lat?: boolean;
    center_lng?: boolean;
    radius_meters?: boolean;
    polygon_geojson?: boolean;
    base_fee_amount?: boolean;
    per_km_fee_amount?: boolean;
    min_eta_minutes?: boolean;
    max_eta_minutes?: boolean;
    is_active?: boolean;
    priority?: boolean;
    created_at?: boolean;
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["delivery_zones"]>;
export type delivery_zonesSelectScalar = {
    id?: boolean;
    branch_id?: boolean;
    name?: boolean;
    zone_type?: boolean;
    center_lat?: boolean;
    center_lng?: boolean;
    radius_meters?: boolean;
    polygon_geojson?: boolean;
    base_fee_amount?: boolean;
    per_km_fee_amount?: boolean;
    min_eta_minutes?: boolean;
    max_eta_minutes?: boolean;
    is_active?: boolean;
    priority?: boolean;
    created_at?: boolean;
};
export type delivery_zonesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "branch_id" | "name" | "zone_type" | "center_lat" | "center_lng" | "radius_meters" | "polygon_geojson" | "base_fee_amount" | "per_km_fee_amount" | "min_eta_minutes" | "max_eta_minutes" | "is_active" | "priority" | "created_at", ExtArgs["result"]["delivery_zones"]>;
export type delivery_zonesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
};
export type delivery_zonesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
};
export type delivery_zonesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
};
export type $delivery_zonesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "delivery_zones";
    objects: {
        store_branches: Prisma.$store_branchesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        branch_id: string;
        name: string;
        zone_type: $Enums.zone_type_enum;
        center_lat: runtime.Decimal | null;
        center_lng: runtime.Decimal | null;
        radius_meters: number | null;
        polygon_geojson: runtime.JsonValue | null;
        base_fee_amount: runtime.Decimal;
        per_km_fee_amount: runtime.Decimal;
        min_eta_minutes: number;
        max_eta_minutes: number;
        is_active: boolean;
        priority: number;
        created_at: Date;
    }, ExtArgs["result"]["delivery_zones"]>;
    composites: {};
};
export type delivery_zonesGetPayload<S extends boolean | null | undefined | delivery_zonesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$delivery_zonesPayload, S>;
export type delivery_zonesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<delivery_zonesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Delivery_zonesCountAggregateInputType | true;
};
export interface delivery_zonesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['delivery_zones'];
        meta: {
            name: 'delivery_zones';
        };
    };
    findUnique<T extends delivery_zonesFindUniqueArgs>(args: Prisma.SelectSubset<T, delivery_zonesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__delivery_zonesClient<runtime.Types.Result.GetResult<Prisma.$delivery_zonesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends delivery_zonesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, delivery_zonesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__delivery_zonesClient<runtime.Types.Result.GetResult<Prisma.$delivery_zonesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends delivery_zonesFindFirstArgs>(args?: Prisma.SelectSubset<T, delivery_zonesFindFirstArgs<ExtArgs>>): Prisma.Prisma__delivery_zonesClient<runtime.Types.Result.GetResult<Prisma.$delivery_zonesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends delivery_zonesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, delivery_zonesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__delivery_zonesClient<runtime.Types.Result.GetResult<Prisma.$delivery_zonesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends delivery_zonesFindManyArgs>(args?: Prisma.SelectSubset<T, delivery_zonesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$delivery_zonesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends delivery_zonesCreateArgs>(args: Prisma.SelectSubset<T, delivery_zonesCreateArgs<ExtArgs>>): Prisma.Prisma__delivery_zonesClient<runtime.Types.Result.GetResult<Prisma.$delivery_zonesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends delivery_zonesCreateManyArgs>(args?: Prisma.SelectSubset<T, delivery_zonesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends delivery_zonesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, delivery_zonesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$delivery_zonesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends delivery_zonesDeleteArgs>(args: Prisma.SelectSubset<T, delivery_zonesDeleteArgs<ExtArgs>>): Prisma.Prisma__delivery_zonesClient<runtime.Types.Result.GetResult<Prisma.$delivery_zonesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends delivery_zonesUpdateArgs>(args: Prisma.SelectSubset<T, delivery_zonesUpdateArgs<ExtArgs>>): Prisma.Prisma__delivery_zonesClient<runtime.Types.Result.GetResult<Prisma.$delivery_zonesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends delivery_zonesDeleteManyArgs>(args?: Prisma.SelectSubset<T, delivery_zonesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends delivery_zonesUpdateManyArgs>(args: Prisma.SelectSubset<T, delivery_zonesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends delivery_zonesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, delivery_zonesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$delivery_zonesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends delivery_zonesUpsertArgs>(args: Prisma.SelectSubset<T, delivery_zonesUpsertArgs<ExtArgs>>): Prisma.Prisma__delivery_zonesClient<runtime.Types.Result.GetResult<Prisma.$delivery_zonesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends delivery_zonesCountArgs>(args?: Prisma.Subset<T, delivery_zonesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Delivery_zonesCountAggregateOutputType> : number>;
    aggregate<T extends Delivery_zonesAggregateArgs>(args: Prisma.Subset<T, Delivery_zonesAggregateArgs>): Prisma.PrismaPromise<GetDelivery_zonesAggregateType<T>>;
    groupBy<T extends delivery_zonesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: delivery_zonesGroupByArgs['orderBy'];
    } : {
        orderBy?: delivery_zonesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, delivery_zonesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDelivery_zonesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: delivery_zonesFieldRefs;
}
export interface Prisma__delivery_zonesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    store_branches<T extends Prisma.store_branchesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_branchesDefaultArgs<ExtArgs>>): Prisma.Prisma__store_branchesClient<runtime.Types.Result.GetResult<Prisma.$store_branchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface delivery_zonesFieldRefs {
    readonly id: Prisma.FieldRef<"delivery_zones", 'String'>;
    readonly branch_id: Prisma.FieldRef<"delivery_zones", 'String'>;
    readonly name: Prisma.FieldRef<"delivery_zones", 'String'>;
    readonly zone_type: Prisma.FieldRef<"delivery_zones", 'zone_type_enum'>;
    readonly center_lat: Prisma.FieldRef<"delivery_zones", 'Decimal'>;
    readonly center_lng: Prisma.FieldRef<"delivery_zones", 'Decimal'>;
    readonly radius_meters: Prisma.FieldRef<"delivery_zones", 'Int'>;
    readonly polygon_geojson: Prisma.FieldRef<"delivery_zones", 'Json'>;
    readonly base_fee_amount: Prisma.FieldRef<"delivery_zones", 'Decimal'>;
    readonly per_km_fee_amount: Prisma.FieldRef<"delivery_zones", 'Decimal'>;
    readonly min_eta_minutes: Prisma.FieldRef<"delivery_zones", 'Int'>;
    readonly max_eta_minutes: Prisma.FieldRef<"delivery_zones", 'Int'>;
    readonly is_active: Prisma.FieldRef<"delivery_zones", 'Boolean'>;
    readonly priority: Prisma.FieldRef<"delivery_zones", 'Int'>;
    readonly created_at: Prisma.FieldRef<"delivery_zones", 'DateTime'>;
}
export type delivery_zonesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.delivery_zonesSelect<ExtArgs> | null;
    omit?: Prisma.delivery_zonesOmit<ExtArgs> | null;
    include?: Prisma.delivery_zonesInclude<ExtArgs> | null;
    where: Prisma.delivery_zonesWhereUniqueInput;
};
export type delivery_zonesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.delivery_zonesSelect<ExtArgs> | null;
    omit?: Prisma.delivery_zonesOmit<ExtArgs> | null;
    include?: Prisma.delivery_zonesInclude<ExtArgs> | null;
    where: Prisma.delivery_zonesWhereUniqueInput;
};
export type delivery_zonesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.delivery_zonesSelect<ExtArgs> | null;
    omit?: Prisma.delivery_zonesOmit<ExtArgs> | null;
    include?: Prisma.delivery_zonesInclude<ExtArgs> | null;
    where?: Prisma.delivery_zonesWhereInput;
    orderBy?: Prisma.delivery_zonesOrderByWithRelationInput | Prisma.delivery_zonesOrderByWithRelationInput[];
    cursor?: Prisma.delivery_zonesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Delivery_zonesScalarFieldEnum | Prisma.Delivery_zonesScalarFieldEnum[];
};
export type delivery_zonesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.delivery_zonesSelect<ExtArgs> | null;
    omit?: Prisma.delivery_zonesOmit<ExtArgs> | null;
    include?: Prisma.delivery_zonesInclude<ExtArgs> | null;
    where?: Prisma.delivery_zonesWhereInput;
    orderBy?: Prisma.delivery_zonesOrderByWithRelationInput | Prisma.delivery_zonesOrderByWithRelationInput[];
    cursor?: Prisma.delivery_zonesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Delivery_zonesScalarFieldEnum | Prisma.Delivery_zonesScalarFieldEnum[];
};
export type delivery_zonesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.delivery_zonesSelect<ExtArgs> | null;
    omit?: Prisma.delivery_zonesOmit<ExtArgs> | null;
    include?: Prisma.delivery_zonesInclude<ExtArgs> | null;
    where?: Prisma.delivery_zonesWhereInput;
    orderBy?: Prisma.delivery_zonesOrderByWithRelationInput | Prisma.delivery_zonesOrderByWithRelationInput[];
    cursor?: Prisma.delivery_zonesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Delivery_zonesScalarFieldEnum | Prisma.Delivery_zonesScalarFieldEnum[];
};
export type delivery_zonesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.delivery_zonesSelect<ExtArgs> | null;
    omit?: Prisma.delivery_zonesOmit<ExtArgs> | null;
    include?: Prisma.delivery_zonesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.delivery_zonesCreateInput, Prisma.delivery_zonesUncheckedCreateInput>;
};
export type delivery_zonesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.delivery_zonesCreateManyInput | Prisma.delivery_zonesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type delivery_zonesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.delivery_zonesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.delivery_zonesOmit<ExtArgs> | null;
    data: Prisma.delivery_zonesCreateManyInput | Prisma.delivery_zonesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.delivery_zonesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type delivery_zonesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.delivery_zonesSelect<ExtArgs> | null;
    omit?: Prisma.delivery_zonesOmit<ExtArgs> | null;
    include?: Prisma.delivery_zonesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.delivery_zonesUpdateInput, Prisma.delivery_zonesUncheckedUpdateInput>;
    where: Prisma.delivery_zonesWhereUniqueInput;
};
export type delivery_zonesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.delivery_zonesUpdateManyMutationInput, Prisma.delivery_zonesUncheckedUpdateManyInput>;
    where?: Prisma.delivery_zonesWhereInput;
    limit?: number;
};
export type delivery_zonesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.delivery_zonesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.delivery_zonesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.delivery_zonesUpdateManyMutationInput, Prisma.delivery_zonesUncheckedUpdateManyInput>;
    where?: Prisma.delivery_zonesWhereInput;
    limit?: number;
    include?: Prisma.delivery_zonesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type delivery_zonesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.delivery_zonesSelect<ExtArgs> | null;
    omit?: Prisma.delivery_zonesOmit<ExtArgs> | null;
    include?: Prisma.delivery_zonesInclude<ExtArgs> | null;
    where: Prisma.delivery_zonesWhereUniqueInput;
    create: Prisma.XOR<Prisma.delivery_zonesCreateInput, Prisma.delivery_zonesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.delivery_zonesUpdateInput, Prisma.delivery_zonesUncheckedUpdateInput>;
};
export type delivery_zonesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.delivery_zonesSelect<ExtArgs> | null;
    omit?: Prisma.delivery_zonesOmit<ExtArgs> | null;
    include?: Prisma.delivery_zonesInclude<ExtArgs> | null;
    where: Prisma.delivery_zonesWhereUniqueInput;
};
export type delivery_zonesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.delivery_zonesWhereInput;
    limit?: number;
};
export type delivery_zonesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.delivery_zonesSelect<ExtArgs> | null;
    omit?: Prisma.delivery_zonesOmit<ExtArgs> | null;
    include?: Prisma.delivery_zonesInclude<ExtArgs> | null;
};
export {};
