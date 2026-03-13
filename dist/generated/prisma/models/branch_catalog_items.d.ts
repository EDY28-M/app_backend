import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type branch_catalog_itemsModel = runtime.Types.Result.DefaultSelection<Prisma.$branch_catalog_itemsPayload>;
export type AggregateBranch_catalog_items = {
    _count: Branch_catalog_itemsCountAggregateOutputType | null;
    _avg: Branch_catalog_itemsAvgAggregateOutputType | null;
    _sum: Branch_catalog_itemsSumAggregateOutputType | null;
    _min: Branch_catalog_itemsMinAggregateOutputType | null;
    _max: Branch_catalog_itemsMaxAggregateOutputType | null;
};
export type Branch_catalog_itemsAvgAggregateOutputType = {
    price_amount: runtime.Decimal | null;
    compare_at_amount: runtime.Decimal | null;
    stock_qty: number | null;
    reserved_qty: number | null;
    prep_time_minutes: number | null;
    sort_order: number | null;
};
export type Branch_catalog_itemsSumAggregateOutputType = {
    price_amount: runtime.Decimal | null;
    compare_at_amount: runtime.Decimal | null;
    stock_qty: number | null;
    reserved_qty: number | null;
    prep_time_minutes: number | null;
    sort_order: number | null;
};
export type Branch_catalog_itemsMinAggregateOutputType = {
    id: string | null;
    branch_id: string | null;
    catalog_item_id: string | null;
    variant_id: string | null;
    price_amount: runtime.Decimal | null;
    compare_at_amount: runtime.Decimal | null;
    stock_qty: number | null;
    reserved_qty: number | null;
    is_available: boolean | null;
    availability_mode: $Enums.availability_mode_type | null;
    prep_time_minutes: number | null;
    sort_order: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Branch_catalog_itemsMaxAggregateOutputType = {
    id: string | null;
    branch_id: string | null;
    catalog_item_id: string | null;
    variant_id: string | null;
    price_amount: runtime.Decimal | null;
    compare_at_amount: runtime.Decimal | null;
    stock_qty: number | null;
    reserved_qty: number | null;
    is_available: boolean | null;
    availability_mode: $Enums.availability_mode_type | null;
    prep_time_minutes: number | null;
    sort_order: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Branch_catalog_itemsCountAggregateOutputType = {
    id: number;
    branch_id: number;
    catalog_item_id: number;
    variant_id: number;
    price_amount: number;
    compare_at_amount: number;
    stock_qty: number;
    reserved_qty: number;
    is_available: number;
    availability_mode: number;
    prep_time_minutes: number;
    sort_order: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Branch_catalog_itemsAvgAggregateInputType = {
    price_amount?: true;
    compare_at_amount?: true;
    stock_qty?: true;
    reserved_qty?: true;
    prep_time_minutes?: true;
    sort_order?: true;
};
export type Branch_catalog_itemsSumAggregateInputType = {
    price_amount?: true;
    compare_at_amount?: true;
    stock_qty?: true;
    reserved_qty?: true;
    prep_time_minutes?: true;
    sort_order?: true;
};
export type Branch_catalog_itemsMinAggregateInputType = {
    id?: true;
    branch_id?: true;
    catalog_item_id?: true;
    variant_id?: true;
    price_amount?: true;
    compare_at_amount?: true;
    stock_qty?: true;
    reserved_qty?: true;
    is_available?: true;
    availability_mode?: true;
    prep_time_minutes?: true;
    sort_order?: true;
    created_at?: true;
    updated_at?: true;
};
export type Branch_catalog_itemsMaxAggregateInputType = {
    id?: true;
    branch_id?: true;
    catalog_item_id?: true;
    variant_id?: true;
    price_amount?: true;
    compare_at_amount?: true;
    stock_qty?: true;
    reserved_qty?: true;
    is_available?: true;
    availability_mode?: true;
    prep_time_minutes?: true;
    sort_order?: true;
    created_at?: true;
    updated_at?: true;
};
export type Branch_catalog_itemsCountAggregateInputType = {
    id?: true;
    branch_id?: true;
    catalog_item_id?: true;
    variant_id?: true;
    price_amount?: true;
    compare_at_amount?: true;
    stock_qty?: true;
    reserved_qty?: true;
    is_available?: true;
    availability_mode?: true;
    prep_time_minutes?: true;
    sort_order?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Branch_catalog_itemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.branch_catalog_itemsWhereInput;
    orderBy?: Prisma.branch_catalog_itemsOrderByWithRelationInput | Prisma.branch_catalog_itemsOrderByWithRelationInput[];
    cursor?: Prisma.branch_catalog_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Branch_catalog_itemsCountAggregateInputType;
    _avg?: Branch_catalog_itemsAvgAggregateInputType;
    _sum?: Branch_catalog_itemsSumAggregateInputType;
    _min?: Branch_catalog_itemsMinAggregateInputType;
    _max?: Branch_catalog_itemsMaxAggregateInputType;
};
export type GetBranch_catalog_itemsAggregateType<T extends Branch_catalog_itemsAggregateArgs> = {
    [P in keyof T & keyof AggregateBranch_catalog_items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBranch_catalog_items[P]> : Prisma.GetScalarType<T[P], AggregateBranch_catalog_items[P]>;
};
export type branch_catalog_itemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.branch_catalog_itemsWhereInput;
    orderBy?: Prisma.branch_catalog_itemsOrderByWithAggregationInput | Prisma.branch_catalog_itemsOrderByWithAggregationInput[];
    by: Prisma.Branch_catalog_itemsScalarFieldEnum[] | Prisma.Branch_catalog_itemsScalarFieldEnum;
    having?: Prisma.branch_catalog_itemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Branch_catalog_itemsCountAggregateInputType | true;
    _avg?: Branch_catalog_itemsAvgAggregateInputType;
    _sum?: Branch_catalog_itemsSumAggregateInputType;
    _min?: Branch_catalog_itemsMinAggregateInputType;
    _max?: Branch_catalog_itemsMaxAggregateInputType;
};
export type Branch_catalog_itemsGroupByOutputType = {
    id: string;
    branch_id: string;
    catalog_item_id: string;
    variant_id: string | null;
    price_amount: runtime.Decimal;
    compare_at_amount: runtime.Decimal | null;
    stock_qty: number | null;
    reserved_qty: number;
    is_available: boolean;
    availability_mode: $Enums.availability_mode_type;
    prep_time_minutes: number | null;
    sort_order: number;
    created_at: Date;
    updated_at: Date;
    _count: Branch_catalog_itemsCountAggregateOutputType | null;
    _avg: Branch_catalog_itemsAvgAggregateOutputType | null;
    _sum: Branch_catalog_itemsSumAggregateOutputType | null;
    _min: Branch_catalog_itemsMinAggregateOutputType | null;
    _max: Branch_catalog_itemsMaxAggregateOutputType | null;
};
type GetBranch_catalog_itemsGroupByPayload<T extends branch_catalog_itemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Branch_catalog_itemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Branch_catalog_itemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Branch_catalog_itemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Branch_catalog_itemsGroupByOutputType[P]>;
}>>;
export type branch_catalog_itemsWhereInput = {
    AND?: Prisma.branch_catalog_itemsWhereInput | Prisma.branch_catalog_itemsWhereInput[];
    OR?: Prisma.branch_catalog_itemsWhereInput[];
    NOT?: Prisma.branch_catalog_itemsWhereInput | Prisma.branch_catalog_itemsWhereInput[];
    id?: Prisma.UuidFilter<"branch_catalog_items"> | string;
    branch_id?: Prisma.UuidFilter<"branch_catalog_items"> | string;
    catalog_item_id?: Prisma.UuidFilter<"branch_catalog_items"> | string;
    variant_id?: Prisma.UuidNullableFilter<"branch_catalog_items"> | string | null;
    price_amount?: Prisma.DecimalFilter<"branch_catalog_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.DecimalNullableFilter<"branch_catalog_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.IntNullableFilter<"branch_catalog_items"> | number | null;
    reserved_qty?: Prisma.IntFilter<"branch_catalog_items"> | number;
    is_available?: Prisma.BoolFilter<"branch_catalog_items"> | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFilter<"branch_catalog_items"> | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.IntNullableFilter<"branch_catalog_items"> | number | null;
    sort_order?: Prisma.IntFilter<"branch_catalog_items"> | number;
    created_at?: Prisma.DateTimeFilter<"branch_catalog_items"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"branch_catalog_items"> | Date | string;
    store_branches?: Prisma.XOR<Prisma.Store_branchesScalarRelationFilter, Prisma.store_branchesWhereInput>;
    catalog_items?: Prisma.XOR<Prisma.Catalog_itemsScalarRelationFilter, Prisma.catalog_itemsWhereInput>;
    catalog_item_variants?: Prisma.XOR<Prisma.Catalog_item_variantsNullableScalarRelationFilter, Prisma.catalog_item_variantsWhereInput> | null;
    branch_item_schedules?: Prisma.Branch_item_schedulesListRelationFilter;
    cart_items?: Prisma.Cart_itemsListRelationFilter;
    order_items?: Prisma.Order_itemsListRelationFilter;
};
export type branch_catalog_itemsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    price_amount?: Prisma.SortOrder;
    compare_at_amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    stock_qty?: Prisma.SortOrderInput | Prisma.SortOrder;
    reserved_qty?: Prisma.SortOrder;
    is_available?: Prisma.SortOrder;
    availability_mode?: Prisma.SortOrder;
    prep_time_minutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    store_branches?: Prisma.store_branchesOrderByWithRelationInput;
    catalog_items?: Prisma.catalog_itemsOrderByWithRelationInput;
    catalog_item_variants?: Prisma.catalog_item_variantsOrderByWithRelationInput;
    branch_item_schedules?: Prisma.branch_item_schedulesOrderByRelationAggregateInput;
    cart_items?: Prisma.cart_itemsOrderByRelationAggregateInput;
    order_items?: Prisma.order_itemsOrderByRelationAggregateInput;
};
export type branch_catalog_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.branch_catalog_itemsWhereInput | Prisma.branch_catalog_itemsWhereInput[];
    OR?: Prisma.branch_catalog_itemsWhereInput[];
    NOT?: Prisma.branch_catalog_itemsWhereInput | Prisma.branch_catalog_itemsWhereInput[];
    branch_id?: Prisma.UuidFilter<"branch_catalog_items"> | string;
    catalog_item_id?: Prisma.UuidFilter<"branch_catalog_items"> | string;
    variant_id?: Prisma.UuidNullableFilter<"branch_catalog_items"> | string | null;
    price_amount?: Prisma.DecimalFilter<"branch_catalog_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.DecimalNullableFilter<"branch_catalog_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.IntNullableFilter<"branch_catalog_items"> | number | null;
    reserved_qty?: Prisma.IntFilter<"branch_catalog_items"> | number;
    is_available?: Prisma.BoolFilter<"branch_catalog_items"> | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFilter<"branch_catalog_items"> | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.IntNullableFilter<"branch_catalog_items"> | number | null;
    sort_order?: Prisma.IntFilter<"branch_catalog_items"> | number;
    created_at?: Prisma.DateTimeFilter<"branch_catalog_items"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"branch_catalog_items"> | Date | string;
    store_branches?: Prisma.XOR<Prisma.Store_branchesScalarRelationFilter, Prisma.store_branchesWhereInput>;
    catalog_items?: Prisma.XOR<Prisma.Catalog_itemsScalarRelationFilter, Prisma.catalog_itemsWhereInput>;
    catalog_item_variants?: Prisma.XOR<Prisma.Catalog_item_variantsNullableScalarRelationFilter, Prisma.catalog_item_variantsWhereInput> | null;
    branch_item_schedules?: Prisma.Branch_item_schedulesListRelationFilter;
    cart_items?: Prisma.Cart_itemsListRelationFilter;
    order_items?: Prisma.Order_itemsListRelationFilter;
}, "id">;
export type branch_catalog_itemsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    price_amount?: Prisma.SortOrder;
    compare_at_amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    stock_qty?: Prisma.SortOrderInput | Prisma.SortOrder;
    reserved_qty?: Prisma.SortOrder;
    is_available?: Prisma.SortOrder;
    availability_mode?: Prisma.SortOrder;
    prep_time_minutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.branch_catalog_itemsCountOrderByAggregateInput;
    _avg?: Prisma.branch_catalog_itemsAvgOrderByAggregateInput;
    _max?: Prisma.branch_catalog_itemsMaxOrderByAggregateInput;
    _min?: Prisma.branch_catalog_itemsMinOrderByAggregateInput;
    _sum?: Prisma.branch_catalog_itemsSumOrderByAggregateInput;
};
export type branch_catalog_itemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.branch_catalog_itemsScalarWhereWithAggregatesInput | Prisma.branch_catalog_itemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.branch_catalog_itemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.branch_catalog_itemsScalarWhereWithAggregatesInput | Prisma.branch_catalog_itemsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"branch_catalog_items"> | string;
    branch_id?: Prisma.UuidWithAggregatesFilter<"branch_catalog_items"> | string;
    catalog_item_id?: Prisma.UuidWithAggregatesFilter<"branch_catalog_items"> | string;
    variant_id?: Prisma.UuidNullableWithAggregatesFilter<"branch_catalog_items"> | string | null;
    price_amount?: Prisma.DecimalWithAggregatesFilter<"branch_catalog_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.DecimalNullableWithAggregatesFilter<"branch_catalog_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.IntNullableWithAggregatesFilter<"branch_catalog_items"> | number | null;
    reserved_qty?: Prisma.IntWithAggregatesFilter<"branch_catalog_items"> | number;
    is_available?: Prisma.BoolWithAggregatesFilter<"branch_catalog_items"> | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeWithAggregatesFilter<"branch_catalog_items"> | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.IntNullableWithAggregatesFilter<"branch_catalog_items"> | number | null;
    sort_order?: Prisma.IntWithAggregatesFilter<"branch_catalog_items"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"branch_catalog_items"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"branch_catalog_items"> | Date | string;
};
export type branch_catalog_itemsCreateInput = {
    id?: string;
    price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: number | null;
    reserved_qty?: number;
    is_available?: boolean;
    availability_mode: $Enums.availability_mode_type;
    prep_time_minutes?: number | null;
    sort_order?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_branches: Prisma.store_branchesCreateNestedOneWithoutBranch_catalog_itemsInput;
    catalog_items: Prisma.catalog_itemsCreateNestedOneWithoutBranch_catalog_itemsInput;
    catalog_item_variants?: Prisma.catalog_item_variantsCreateNestedOneWithoutBranch_catalog_itemsInput;
    branch_item_schedules?: Prisma.branch_item_schedulesCreateNestedManyWithoutBranch_catalog_itemsInput;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutBranch_catalog_itemsInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutBranch_catalog_itemsInput;
};
export type branch_catalog_itemsUncheckedCreateInput = {
    id?: string;
    branch_id: string;
    catalog_item_id: string;
    variant_id?: string | null;
    price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: number | null;
    reserved_qty?: number;
    is_available?: boolean;
    availability_mode: $Enums.availability_mode_type;
    prep_time_minutes?: number | null;
    sort_order?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_item_schedules?: Prisma.branch_item_schedulesUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput;
};
export type branch_catalog_itemsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reserved_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFieldUpdateOperationsInput | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_branches?: Prisma.store_branchesUpdateOneRequiredWithoutBranch_catalog_itemsNestedInput;
    catalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutBranch_catalog_itemsNestedInput;
    catalog_item_variants?: Prisma.catalog_item_variantsUpdateOneWithoutBranch_catalog_itemsNestedInput;
    branch_item_schedules?: Prisma.branch_item_schedulesUpdateManyWithoutBranch_catalog_itemsNestedInput;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutBranch_catalog_itemsNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutBranch_catalog_itemsNestedInput;
};
export type branch_catalog_itemsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    variant_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reserved_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFieldUpdateOperationsInput | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_item_schedules?: Prisma.branch_item_schedulesUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput;
};
export type branch_catalog_itemsCreateManyInput = {
    id?: string;
    branch_id: string;
    catalog_item_id: string;
    variant_id?: string | null;
    price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: number | null;
    reserved_qty?: number;
    is_available?: boolean;
    availability_mode: $Enums.availability_mode_type;
    prep_time_minutes?: number | null;
    sort_order?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type branch_catalog_itemsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reserved_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFieldUpdateOperationsInput | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type branch_catalog_itemsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    variant_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reserved_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFieldUpdateOperationsInput | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type branch_catalog_itemsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    price_amount?: Prisma.SortOrder;
    compare_at_amount?: Prisma.SortOrder;
    stock_qty?: Prisma.SortOrder;
    reserved_qty?: Prisma.SortOrder;
    is_available?: Prisma.SortOrder;
    availability_mode?: Prisma.SortOrder;
    prep_time_minutes?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type branch_catalog_itemsAvgOrderByAggregateInput = {
    price_amount?: Prisma.SortOrder;
    compare_at_amount?: Prisma.SortOrder;
    stock_qty?: Prisma.SortOrder;
    reserved_qty?: Prisma.SortOrder;
    prep_time_minutes?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type branch_catalog_itemsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    price_amount?: Prisma.SortOrder;
    compare_at_amount?: Prisma.SortOrder;
    stock_qty?: Prisma.SortOrder;
    reserved_qty?: Prisma.SortOrder;
    is_available?: Prisma.SortOrder;
    availability_mode?: Prisma.SortOrder;
    prep_time_minutes?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type branch_catalog_itemsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    catalog_item_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    price_amount?: Prisma.SortOrder;
    compare_at_amount?: Prisma.SortOrder;
    stock_qty?: Prisma.SortOrder;
    reserved_qty?: Prisma.SortOrder;
    is_available?: Prisma.SortOrder;
    availability_mode?: Prisma.SortOrder;
    prep_time_minutes?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type branch_catalog_itemsSumOrderByAggregateInput = {
    price_amount?: Prisma.SortOrder;
    compare_at_amount?: Prisma.SortOrder;
    stock_qty?: Prisma.SortOrder;
    reserved_qty?: Prisma.SortOrder;
    prep_time_minutes?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type Branch_catalog_itemsScalarRelationFilter = {
    is?: Prisma.branch_catalog_itemsWhereInput;
    isNot?: Prisma.branch_catalog_itemsWhereInput;
};
export type Branch_catalog_itemsListRelationFilter = {
    every?: Prisma.branch_catalog_itemsWhereInput;
    some?: Prisma.branch_catalog_itemsWhereInput;
    none?: Prisma.branch_catalog_itemsWhereInput;
};
export type branch_catalog_itemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Branch_catalog_itemsNullableScalarRelationFilter = {
    is?: Prisma.branch_catalog_itemsWhereInput | null;
    isNot?: Prisma.branch_catalog_itemsWhereInput | null;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type Enumavailability_mode_typeFieldUpdateOperationsInput = {
    set?: $Enums.availability_mode_type;
};
export type branch_catalog_itemsCreateNestedOneWithoutBranch_item_schedulesInput = {
    create?: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutBranch_item_schedulesInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutBranch_item_schedulesInput>;
    connectOrCreate?: Prisma.branch_catalog_itemsCreateOrConnectWithoutBranch_item_schedulesInput;
    connect?: Prisma.branch_catalog_itemsWhereUniqueInput;
};
export type branch_catalog_itemsUpdateOneRequiredWithoutBranch_item_schedulesNestedInput = {
    create?: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutBranch_item_schedulesInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutBranch_item_schedulesInput>;
    connectOrCreate?: Prisma.branch_catalog_itemsCreateOrConnectWithoutBranch_item_schedulesInput;
    upsert?: Prisma.branch_catalog_itemsUpsertWithoutBranch_item_schedulesInput;
    connect?: Prisma.branch_catalog_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.branch_catalog_itemsUpdateToOneWithWhereWithoutBranch_item_schedulesInput, Prisma.branch_catalog_itemsUpdateWithoutBranch_item_schedulesInput>, Prisma.branch_catalog_itemsUncheckedUpdateWithoutBranch_item_schedulesInput>;
};
export type branch_catalog_itemsCreateNestedOneWithoutCart_itemsInput = {
    create?: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutCart_itemsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutCart_itemsInput>;
    connectOrCreate?: Prisma.branch_catalog_itemsCreateOrConnectWithoutCart_itemsInput;
    connect?: Prisma.branch_catalog_itemsWhereUniqueInput;
};
export type branch_catalog_itemsUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutCart_itemsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutCart_itemsInput>;
    connectOrCreate?: Prisma.branch_catalog_itemsCreateOrConnectWithoutCart_itemsInput;
    upsert?: Prisma.branch_catalog_itemsUpsertWithoutCart_itemsInput;
    connect?: Prisma.branch_catalog_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.branch_catalog_itemsUpdateToOneWithWhereWithoutCart_itemsInput, Prisma.branch_catalog_itemsUpdateWithoutCart_itemsInput>, Prisma.branch_catalog_itemsUncheckedUpdateWithoutCart_itemsInput>;
};
export type branch_catalog_itemsCreateNestedManyWithoutCatalog_item_variantsInput = {
    create?: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutCatalog_item_variantsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_item_variantsInput> | Prisma.branch_catalog_itemsCreateWithoutCatalog_item_variantsInput[] | Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_item_variantsInput[];
    connectOrCreate?: Prisma.branch_catalog_itemsCreateOrConnectWithoutCatalog_item_variantsInput | Prisma.branch_catalog_itemsCreateOrConnectWithoutCatalog_item_variantsInput[];
    createMany?: Prisma.branch_catalog_itemsCreateManyCatalog_item_variantsInputEnvelope;
    connect?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
};
export type branch_catalog_itemsUncheckedCreateNestedManyWithoutCatalog_item_variantsInput = {
    create?: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutCatalog_item_variantsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_item_variantsInput> | Prisma.branch_catalog_itemsCreateWithoutCatalog_item_variantsInput[] | Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_item_variantsInput[];
    connectOrCreate?: Prisma.branch_catalog_itemsCreateOrConnectWithoutCatalog_item_variantsInput | Prisma.branch_catalog_itemsCreateOrConnectWithoutCatalog_item_variantsInput[];
    createMany?: Prisma.branch_catalog_itemsCreateManyCatalog_item_variantsInputEnvelope;
    connect?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
};
export type branch_catalog_itemsUpdateManyWithoutCatalog_item_variantsNestedInput = {
    create?: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutCatalog_item_variantsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_item_variantsInput> | Prisma.branch_catalog_itemsCreateWithoutCatalog_item_variantsInput[] | Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_item_variantsInput[];
    connectOrCreate?: Prisma.branch_catalog_itemsCreateOrConnectWithoutCatalog_item_variantsInput | Prisma.branch_catalog_itemsCreateOrConnectWithoutCatalog_item_variantsInput[];
    upsert?: Prisma.branch_catalog_itemsUpsertWithWhereUniqueWithoutCatalog_item_variantsInput | Prisma.branch_catalog_itemsUpsertWithWhereUniqueWithoutCatalog_item_variantsInput[];
    createMany?: Prisma.branch_catalog_itemsCreateManyCatalog_item_variantsInputEnvelope;
    set?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    disconnect?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    delete?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    connect?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    update?: Prisma.branch_catalog_itemsUpdateWithWhereUniqueWithoutCatalog_item_variantsInput | Prisma.branch_catalog_itemsUpdateWithWhereUniqueWithoutCatalog_item_variantsInput[];
    updateMany?: Prisma.branch_catalog_itemsUpdateManyWithWhereWithoutCatalog_item_variantsInput | Prisma.branch_catalog_itemsUpdateManyWithWhereWithoutCatalog_item_variantsInput[];
    deleteMany?: Prisma.branch_catalog_itemsScalarWhereInput | Prisma.branch_catalog_itemsScalarWhereInput[];
};
export type branch_catalog_itemsUncheckedUpdateManyWithoutCatalog_item_variantsNestedInput = {
    create?: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutCatalog_item_variantsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_item_variantsInput> | Prisma.branch_catalog_itemsCreateWithoutCatalog_item_variantsInput[] | Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_item_variantsInput[];
    connectOrCreate?: Prisma.branch_catalog_itemsCreateOrConnectWithoutCatalog_item_variantsInput | Prisma.branch_catalog_itemsCreateOrConnectWithoutCatalog_item_variantsInput[];
    upsert?: Prisma.branch_catalog_itemsUpsertWithWhereUniqueWithoutCatalog_item_variantsInput | Prisma.branch_catalog_itemsUpsertWithWhereUniqueWithoutCatalog_item_variantsInput[];
    createMany?: Prisma.branch_catalog_itemsCreateManyCatalog_item_variantsInputEnvelope;
    set?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    disconnect?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    delete?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    connect?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    update?: Prisma.branch_catalog_itemsUpdateWithWhereUniqueWithoutCatalog_item_variantsInput | Prisma.branch_catalog_itemsUpdateWithWhereUniqueWithoutCatalog_item_variantsInput[];
    updateMany?: Prisma.branch_catalog_itemsUpdateManyWithWhereWithoutCatalog_item_variantsInput | Prisma.branch_catalog_itemsUpdateManyWithWhereWithoutCatalog_item_variantsInput[];
    deleteMany?: Prisma.branch_catalog_itemsScalarWhereInput | Prisma.branch_catalog_itemsScalarWhereInput[];
};
export type branch_catalog_itemsCreateNestedManyWithoutCatalog_itemsInput = {
    create?: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutCatalog_itemsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_itemsInput> | Prisma.branch_catalog_itemsCreateWithoutCatalog_itemsInput[] | Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_itemsInput[];
    connectOrCreate?: Prisma.branch_catalog_itemsCreateOrConnectWithoutCatalog_itemsInput | Prisma.branch_catalog_itemsCreateOrConnectWithoutCatalog_itemsInput[];
    createMany?: Prisma.branch_catalog_itemsCreateManyCatalog_itemsInputEnvelope;
    connect?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
};
export type branch_catalog_itemsUncheckedCreateNestedManyWithoutCatalog_itemsInput = {
    create?: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutCatalog_itemsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_itemsInput> | Prisma.branch_catalog_itemsCreateWithoutCatalog_itemsInput[] | Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_itemsInput[];
    connectOrCreate?: Prisma.branch_catalog_itemsCreateOrConnectWithoutCatalog_itemsInput | Prisma.branch_catalog_itemsCreateOrConnectWithoutCatalog_itemsInput[];
    createMany?: Prisma.branch_catalog_itemsCreateManyCatalog_itemsInputEnvelope;
    connect?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
};
export type branch_catalog_itemsUpdateManyWithoutCatalog_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutCatalog_itemsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_itemsInput> | Prisma.branch_catalog_itemsCreateWithoutCatalog_itemsInput[] | Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_itemsInput[];
    connectOrCreate?: Prisma.branch_catalog_itemsCreateOrConnectWithoutCatalog_itemsInput | Prisma.branch_catalog_itemsCreateOrConnectWithoutCatalog_itemsInput[];
    upsert?: Prisma.branch_catalog_itemsUpsertWithWhereUniqueWithoutCatalog_itemsInput | Prisma.branch_catalog_itemsUpsertWithWhereUniqueWithoutCatalog_itemsInput[];
    createMany?: Prisma.branch_catalog_itemsCreateManyCatalog_itemsInputEnvelope;
    set?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    disconnect?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    delete?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    connect?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    update?: Prisma.branch_catalog_itemsUpdateWithWhereUniqueWithoutCatalog_itemsInput | Prisma.branch_catalog_itemsUpdateWithWhereUniqueWithoutCatalog_itemsInput[];
    updateMany?: Prisma.branch_catalog_itemsUpdateManyWithWhereWithoutCatalog_itemsInput | Prisma.branch_catalog_itemsUpdateManyWithWhereWithoutCatalog_itemsInput[];
    deleteMany?: Prisma.branch_catalog_itemsScalarWhereInput | Prisma.branch_catalog_itemsScalarWhereInput[];
};
export type branch_catalog_itemsUncheckedUpdateManyWithoutCatalog_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutCatalog_itemsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_itemsInput> | Prisma.branch_catalog_itemsCreateWithoutCatalog_itemsInput[] | Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_itemsInput[];
    connectOrCreate?: Prisma.branch_catalog_itemsCreateOrConnectWithoutCatalog_itemsInput | Prisma.branch_catalog_itemsCreateOrConnectWithoutCatalog_itemsInput[];
    upsert?: Prisma.branch_catalog_itemsUpsertWithWhereUniqueWithoutCatalog_itemsInput | Prisma.branch_catalog_itemsUpsertWithWhereUniqueWithoutCatalog_itemsInput[];
    createMany?: Prisma.branch_catalog_itemsCreateManyCatalog_itemsInputEnvelope;
    set?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    disconnect?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    delete?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    connect?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    update?: Prisma.branch_catalog_itemsUpdateWithWhereUniqueWithoutCatalog_itemsInput | Prisma.branch_catalog_itemsUpdateWithWhereUniqueWithoutCatalog_itemsInput[];
    updateMany?: Prisma.branch_catalog_itemsUpdateManyWithWhereWithoutCatalog_itemsInput | Prisma.branch_catalog_itemsUpdateManyWithWhereWithoutCatalog_itemsInput[];
    deleteMany?: Prisma.branch_catalog_itemsScalarWhereInput | Prisma.branch_catalog_itemsScalarWhereInput[];
};
export type branch_catalog_itemsCreateNestedOneWithoutOrder_itemsInput = {
    create?: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutOrder_itemsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.branch_catalog_itemsCreateOrConnectWithoutOrder_itemsInput;
    connect?: Prisma.branch_catalog_itemsWhereUniqueInput;
};
export type branch_catalog_itemsUpdateOneWithoutOrder_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutOrder_itemsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.branch_catalog_itemsCreateOrConnectWithoutOrder_itemsInput;
    upsert?: Prisma.branch_catalog_itemsUpsertWithoutOrder_itemsInput;
    disconnect?: Prisma.branch_catalog_itemsWhereInput | boolean;
    delete?: Prisma.branch_catalog_itemsWhereInput | boolean;
    connect?: Prisma.branch_catalog_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.branch_catalog_itemsUpdateToOneWithWhereWithoutOrder_itemsInput, Prisma.branch_catalog_itemsUpdateWithoutOrder_itemsInput>, Prisma.branch_catalog_itemsUncheckedUpdateWithoutOrder_itemsInput>;
};
export type branch_catalog_itemsCreateNestedManyWithoutStore_branchesInput = {
    create?: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutStore_branchesInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutStore_branchesInput> | Prisma.branch_catalog_itemsCreateWithoutStore_branchesInput[] | Prisma.branch_catalog_itemsUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.branch_catalog_itemsCreateOrConnectWithoutStore_branchesInput | Prisma.branch_catalog_itemsCreateOrConnectWithoutStore_branchesInput[];
    createMany?: Prisma.branch_catalog_itemsCreateManyStore_branchesInputEnvelope;
    connect?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
};
export type branch_catalog_itemsUncheckedCreateNestedManyWithoutStore_branchesInput = {
    create?: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutStore_branchesInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutStore_branchesInput> | Prisma.branch_catalog_itemsCreateWithoutStore_branchesInput[] | Prisma.branch_catalog_itemsUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.branch_catalog_itemsCreateOrConnectWithoutStore_branchesInput | Prisma.branch_catalog_itemsCreateOrConnectWithoutStore_branchesInput[];
    createMany?: Prisma.branch_catalog_itemsCreateManyStore_branchesInputEnvelope;
    connect?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
};
export type branch_catalog_itemsUpdateManyWithoutStore_branchesNestedInput = {
    create?: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutStore_branchesInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutStore_branchesInput> | Prisma.branch_catalog_itemsCreateWithoutStore_branchesInput[] | Prisma.branch_catalog_itemsUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.branch_catalog_itemsCreateOrConnectWithoutStore_branchesInput | Prisma.branch_catalog_itemsCreateOrConnectWithoutStore_branchesInput[];
    upsert?: Prisma.branch_catalog_itemsUpsertWithWhereUniqueWithoutStore_branchesInput | Prisma.branch_catalog_itemsUpsertWithWhereUniqueWithoutStore_branchesInput[];
    createMany?: Prisma.branch_catalog_itemsCreateManyStore_branchesInputEnvelope;
    set?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    disconnect?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    delete?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    connect?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    update?: Prisma.branch_catalog_itemsUpdateWithWhereUniqueWithoutStore_branchesInput | Prisma.branch_catalog_itemsUpdateWithWhereUniqueWithoutStore_branchesInput[];
    updateMany?: Prisma.branch_catalog_itemsUpdateManyWithWhereWithoutStore_branchesInput | Prisma.branch_catalog_itemsUpdateManyWithWhereWithoutStore_branchesInput[];
    deleteMany?: Prisma.branch_catalog_itemsScalarWhereInput | Prisma.branch_catalog_itemsScalarWhereInput[];
};
export type branch_catalog_itemsUncheckedUpdateManyWithoutStore_branchesNestedInput = {
    create?: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutStore_branchesInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutStore_branchesInput> | Prisma.branch_catalog_itemsCreateWithoutStore_branchesInput[] | Prisma.branch_catalog_itemsUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.branch_catalog_itemsCreateOrConnectWithoutStore_branchesInput | Prisma.branch_catalog_itemsCreateOrConnectWithoutStore_branchesInput[];
    upsert?: Prisma.branch_catalog_itemsUpsertWithWhereUniqueWithoutStore_branchesInput | Prisma.branch_catalog_itemsUpsertWithWhereUniqueWithoutStore_branchesInput[];
    createMany?: Prisma.branch_catalog_itemsCreateManyStore_branchesInputEnvelope;
    set?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    disconnect?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    delete?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    connect?: Prisma.branch_catalog_itemsWhereUniqueInput | Prisma.branch_catalog_itemsWhereUniqueInput[];
    update?: Prisma.branch_catalog_itemsUpdateWithWhereUniqueWithoutStore_branchesInput | Prisma.branch_catalog_itemsUpdateWithWhereUniqueWithoutStore_branchesInput[];
    updateMany?: Prisma.branch_catalog_itemsUpdateManyWithWhereWithoutStore_branchesInput | Prisma.branch_catalog_itemsUpdateManyWithWhereWithoutStore_branchesInput[];
    deleteMany?: Prisma.branch_catalog_itemsScalarWhereInput | Prisma.branch_catalog_itemsScalarWhereInput[];
};
export type branch_catalog_itemsCreateWithoutBranch_item_schedulesInput = {
    id?: string;
    price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: number | null;
    reserved_qty?: number;
    is_available?: boolean;
    availability_mode: $Enums.availability_mode_type;
    prep_time_minutes?: number | null;
    sort_order?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_branches: Prisma.store_branchesCreateNestedOneWithoutBranch_catalog_itemsInput;
    catalog_items: Prisma.catalog_itemsCreateNestedOneWithoutBranch_catalog_itemsInput;
    catalog_item_variants?: Prisma.catalog_item_variantsCreateNestedOneWithoutBranch_catalog_itemsInput;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutBranch_catalog_itemsInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutBranch_catalog_itemsInput;
};
export type branch_catalog_itemsUncheckedCreateWithoutBranch_item_schedulesInput = {
    id?: string;
    branch_id: string;
    catalog_item_id: string;
    variant_id?: string | null;
    price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: number | null;
    reserved_qty?: number;
    is_available?: boolean;
    availability_mode: $Enums.availability_mode_type;
    prep_time_minutes?: number | null;
    sort_order?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput;
};
export type branch_catalog_itemsCreateOrConnectWithoutBranch_item_schedulesInput = {
    where: Prisma.branch_catalog_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutBranch_item_schedulesInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutBranch_item_schedulesInput>;
};
export type branch_catalog_itemsUpsertWithoutBranch_item_schedulesInput = {
    update: Prisma.XOR<Prisma.branch_catalog_itemsUpdateWithoutBranch_item_schedulesInput, Prisma.branch_catalog_itemsUncheckedUpdateWithoutBranch_item_schedulesInput>;
    create: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutBranch_item_schedulesInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutBranch_item_schedulesInput>;
    where?: Prisma.branch_catalog_itemsWhereInput;
};
export type branch_catalog_itemsUpdateToOneWithWhereWithoutBranch_item_schedulesInput = {
    where?: Prisma.branch_catalog_itemsWhereInput;
    data: Prisma.XOR<Prisma.branch_catalog_itemsUpdateWithoutBranch_item_schedulesInput, Prisma.branch_catalog_itemsUncheckedUpdateWithoutBranch_item_schedulesInput>;
};
export type branch_catalog_itemsUpdateWithoutBranch_item_schedulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reserved_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFieldUpdateOperationsInput | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_branches?: Prisma.store_branchesUpdateOneRequiredWithoutBranch_catalog_itemsNestedInput;
    catalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutBranch_catalog_itemsNestedInput;
    catalog_item_variants?: Prisma.catalog_item_variantsUpdateOneWithoutBranch_catalog_itemsNestedInput;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutBranch_catalog_itemsNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutBranch_catalog_itemsNestedInput;
};
export type branch_catalog_itemsUncheckedUpdateWithoutBranch_item_schedulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    variant_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reserved_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFieldUpdateOperationsInput | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput;
};
export type branch_catalog_itemsCreateWithoutCart_itemsInput = {
    id?: string;
    price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: number | null;
    reserved_qty?: number;
    is_available?: boolean;
    availability_mode: $Enums.availability_mode_type;
    prep_time_minutes?: number | null;
    sort_order?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_branches: Prisma.store_branchesCreateNestedOneWithoutBranch_catalog_itemsInput;
    catalog_items: Prisma.catalog_itemsCreateNestedOneWithoutBranch_catalog_itemsInput;
    catalog_item_variants?: Prisma.catalog_item_variantsCreateNestedOneWithoutBranch_catalog_itemsInput;
    branch_item_schedules?: Prisma.branch_item_schedulesCreateNestedManyWithoutBranch_catalog_itemsInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutBranch_catalog_itemsInput;
};
export type branch_catalog_itemsUncheckedCreateWithoutCart_itemsInput = {
    id?: string;
    branch_id: string;
    catalog_item_id: string;
    variant_id?: string | null;
    price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: number | null;
    reserved_qty?: number;
    is_available?: boolean;
    availability_mode: $Enums.availability_mode_type;
    prep_time_minutes?: number | null;
    sort_order?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_item_schedules?: Prisma.branch_item_schedulesUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput;
};
export type branch_catalog_itemsCreateOrConnectWithoutCart_itemsInput = {
    where: Prisma.branch_catalog_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutCart_itemsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutCart_itemsInput>;
};
export type branch_catalog_itemsUpsertWithoutCart_itemsInput = {
    update: Prisma.XOR<Prisma.branch_catalog_itemsUpdateWithoutCart_itemsInput, Prisma.branch_catalog_itemsUncheckedUpdateWithoutCart_itemsInput>;
    create: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutCart_itemsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutCart_itemsInput>;
    where?: Prisma.branch_catalog_itemsWhereInput;
};
export type branch_catalog_itemsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: Prisma.branch_catalog_itemsWhereInput;
    data: Prisma.XOR<Prisma.branch_catalog_itemsUpdateWithoutCart_itemsInput, Prisma.branch_catalog_itemsUncheckedUpdateWithoutCart_itemsInput>;
};
export type branch_catalog_itemsUpdateWithoutCart_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reserved_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFieldUpdateOperationsInput | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_branches?: Prisma.store_branchesUpdateOneRequiredWithoutBranch_catalog_itemsNestedInput;
    catalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutBranch_catalog_itemsNestedInput;
    catalog_item_variants?: Prisma.catalog_item_variantsUpdateOneWithoutBranch_catalog_itemsNestedInput;
    branch_item_schedules?: Prisma.branch_item_schedulesUpdateManyWithoutBranch_catalog_itemsNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutBranch_catalog_itemsNestedInput;
};
export type branch_catalog_itemsUncheckedUpdateWithoutCart_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    variant_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reserved_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFieldUpdateOperationsInput | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_item_schedules?: Prisma.branch_item_schedulesUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput;
};
export type branch_catalog_itemsCreateWithoutCatalog_item_variantsInput = {
    id?: string;
    price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: number | null;
    reserved_qty?: number;
    is_available?: boolean;
    availability_mode: $Enums.availability_mode_type;
    prep_time_minutes?: number | null;
    sort_order?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_branches: Prisma.store_branchesCreateNestedOneWithoutBranch_catalog_itemsInput;
    catalog_items: Prisma.catalog_itemsCreateNestedOneWithoutBranch_catalog_itemsInput;
    branch_item_schedules?: Prisma.branch_item_schedulesCreateNestedManyWithoutBranch_catalog_itemsInput;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutBranch_catalog_itemsInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutBranch_catalog_itemsInput;
};
export type branch_catalog_itemsUncheckedCreateWithoutCatalog_item_variantsInput = {
    id?: string;
    branch_id: string;
    catalog_item_id: string;
    price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: number | null;
    reserved_qty?: number;
    is_available?: boolean;
    availability_mode: $Enums.availability_mode_type;
    prep_time_minutes?: number | null;
    sort_order?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_item_schedules?: Prisma.branch_item_schedulesUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput;
};
export type branch_catalog_itemsCreateOrConnectWithoutCatalog_item_variantsInput = {
    where: Prisma.branch_catalog_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutCatalog_item_variantsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_item_variantsInput>;
};
export type branch_catalog_itemsCreateManyCatalog_item_variantsInputEnvelope = {
    data: Prisma.branch_catalog_itemsCreateManyCatalog_item_variantsInput | Prisma.branch_catalog_itemsCreateManyCatalog_item_variantsInput[];
    skipDuplicates?: boolean;
};
export type branch_catalog_itemsUpsertWithWhereUniqueWithoutCatalog_item_variantsInput = {
    where: Prisma.branch_catalog_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.branch_catalog_itemsUpdateWithoutCatalog_item_variantsInput, Prisma.branch_catalog_itemsUncheckedUpdateWithoutCatalog_item_variantsInput>;
    create: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutCatalog_item_variantsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_item_variantsInput>;
};
export type branch_catalog_itemsUpdateWithWhereUniqueWithoutCatalog_item_variantsInput = {
    where: Prisma.branch_catalog_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.branch_catalog_itemsUpdateWithoutCatalog_item_variantsInput, Prisma.branch_catalog_itemsUncheckedUpdateWithoutCatalog_item_variantsInput>;
};
export type branch_catalog_itemsUpdateManyWithWhereWithoutCatalog_item_variantsInput = {
    where: Prisma.branch_catalog_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.branch_catalog_itemsUpdateManyMutationInput, Prisma.branch_catalog_itemsUncheckedUpdateManyWithoutCatalog_item_variantsInput>;
};
export type branch_catalog_itemsScalarWhereInput = {
    AND?: Prisma.branch_catalog_itemsScalarWhereInput | Prisma.branch_catalog_itemsScalarWhereInput[];
    OR?: Prisma.branch_catalog_itemsScalarWhereInput[];
    NOT?: Prisma.branch_catalog_itemsScalarWhereInput | Prisma.branch_catalog_itemsScalarWhereInput[];
    id?: Prisma.UuidFilter<"branch_catalog_items"> | string;
    branch_id?: Prisma.UuidFilter<"branch_catalog_items"> | string;
    catalog_item_id?: Prisma.UuidFilter<"branch_catalog_items"> | string;
    variant_id?: Prisma.UuidNullableFilter<"branch_catalog_items"> | string | null;
    price_amount?: Prisma.DecimalFilter<"branch_catalog_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.DecimalNullableFilter<"branch_catalog_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.IntNullableFilter<"branch_catalog_items"> | number | null;
    reserved_qty?: Prisma.IntFilter<"branch_catalog_items"> | number;
    is_available?: Prisma.BoolFilter<"branch_catalog_items"> | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFilter<"branch_catalog_items"> | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.IntNullableFilter<"branch_catalog_items"> | number | null;
    sort_order?: Prisma.IntFilter<"branch_catalog_items"> | number;
    created_at?: Prisma.DateTimeFilter<"branch_catalog_items"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"branch_catalog_items"> | Date | string;
};
export type branch_catalog_itemsCreateWithoutCatalog_itemsInput = {
    id?: string;
    price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: number | null;
    reserved_qty?: number;
    is_available?: boolean;
    availability_mode: $Enums.availability_mode_type;
    prep_time_minutes?: number | null;
    sort_order?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_branches: Prisma.store_branchesCreateNestedOneWithoutBranch_catalog_itemsInput;
    catalog_item_variants?: Prisma.catalog_item_variantsCreateNestedOneWithoutBranch_catalog_itemsInput;
    branch_item_schedules?: Prisma.branch_item_schedulesCreateNestedManyWithoutBranch_catalog_itemsInput;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutBranch_catalog_itemsInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutBranch_catalog_itemsInput;
};
export type branch_catalog_itemsUncheckedCreateWithoutCatalog_itemsInput = {
    id?: string;
    branch_id: string;
    variant_id?: string | null;
    price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: number | null;
    reserved_qty?: number;
    is_available?: boolean;
    availability_mode: $Enums.availability_mode_type;
    prep_time_minutes?: number | null;
    sort_order?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_item_schedules?: Prisma.branch_item_schedulesUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput;
};
export type branch_catalog_itemsCreateOrConnectWithoutCatalog_itemsInput = {
    where: Prisma.branch_catalog_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutCatalog_itemsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_itemsInput>;
};
export type branch_catalog_itemsCreateManyCatalog_itemsInputEnvelope = {
    data: Prisma.branch_catalog_itemsCreateManyCatalog_itemsInput | Prisma.branch_catalog_itemsCreateManyCatalog_itemsInput[];
    skipDuplicates?: boolean;
};
export type branch_catalog_itemsUpsertWithWhereUniqueWithoutCatalog_itemsInput = {
    where: Prisma.branch_catalog_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.branch_catalog_itemsUpdateWithoutCatalog_itemsInput, Prisma.branch_catalog_itemsUncheckedUpdateWithoutCatalog_itemsInput>;
    create: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutCatalog_itemsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutCatalog_itemsInput>;
};
export type branch_catalog_itemsUpdateWithWhereUniqueWithoutCatalog_itemsInput = {
    where: Prisma.branch_catalog_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.branch_catalog_itemsUpdateWithoutCatalog_itemsInput, Prisma.branch_catalog_itemsUncheckedUpdateWithoutCatalog_itemsInput>;
};
export type branch_catalog_itemsUpdateManyWithWhereWithoutCatalog_itemsInput = {
    where: Prisma.branch_catalog_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.branch_catalog_itemsUpdateManyMutationInput, Prisma.branch_catalog_itemsUncheckedUpdateManyWithoutCatalog_itemsInput>;
};
export type branch_catalog_itemsCreateWithoutOrder_itemsInput = {
    id?: string;
    price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: number | null;
    reserved_qty?: number;
    is_available?: boolean;
    availability_mode: $Enums.availability_mode_type;
    prep_time_minutes?: number | null;
    sort_order?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_branches: Prisma.store_branchesCreateNestedOneWithoutBranch_catalog_itemsInput;
    catalog_items: Prisma.catalog_itemsCreateNestedOneWithoutBranch_catalog_itemsInput;
    catalog_item_variants?: Prisma.catalog_item_variantsCreateNestedOneWithoutBranch_catalog_itemsInput;
    branch_item_schedules?: Prisma.branch_item_schedulesCreateNestedManyWithoutBranch_catalog_itemsInput;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutBranch_catalog_itemsInput;
};
export type branch_catalog_itemsUncheckedCreateWithoutOrder_itemsInput = {
    id?: string;
    branch_id: string;
    catalog_item_id: string;
    variant_id?: string | null;
    price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: number | null;
    reserved_qty?: number;
    is_available?: boolean;
    availability_mode: $Enums.availability_mode_type;
    prep_time_minutes?: number | null;
    sort_order?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_item_schedules?: Prisma.branch_item_schedulesUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput;
};
export type branch_catalog_itemsCreateOrConnectWithoutOrder_itemsInput = {
    where: Prisma.branch_catalog_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutOrder_itemsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutOrder_itemsInput>;
};
export type branch_catalog_itemsUpsertWithoutOrder_itemsInput = {
    update: Prisma.XOR<Prisma.branch_catalog_itemsUpdateWithoutOrder_itemsInput, Prisma.branch_catalog_itemsUncheckedUpdateWithoutOrder_itemsInput>;
    create: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutOrder_itemsInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutOrder_itemsInput>;
    where?: Prisma.branch_catalog_itemsWhereInput;
};
export type branch_catalog_itemsUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: Prisma.branch_catalog_itemsWhereInput;
    data: Prisma.XOR<Prisma.branch_catalog_itemsUpdateWithoutOrder_itemsInput, Prisma.branch_catalog_itemsUncheckedUpdateWithoutOrder_itemsInput>;
};
export type branch_catalog_itemsUpdateWithoutOrder_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reserved_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFieldUpdateOperationsInput | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_branches?: Prisma.store_branchesUpdateOneRequiredWithoutBranch_catalog_itemsNestedInput;
    catalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutBranch_catalog_itemsNestedInput;
    catalog_item_variants?: Prisma.catalog_item_variantsUpdateOneWithoutBranch_catalog_itemsNestedInput;
    branch_item_schedules?: Prisma.branch_item_schedulesUpdateManyWithoutBranch_catalog_itemsNestedInput;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutBranch_catalog_itemsNestedInput;
};
export type branch_catalog_itemsUncheckedUpdateWithoutOrder_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    variant_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reserved_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFieldUpdateOperationsInput | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_item_schedules?: Prisma.branch_item_schedulesUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput;
};
export type branch_catalog_itemsCreateWithoutStore_branchesInput = {
    id?: string;
    price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: number | null;
    reserved_qty?: number;
    is_available?: boolean;
    availability_mode: $Enums.availability_mode_type;
    prep_time_minutes?: number | null;
    sort_order?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    catalog_items: Prisma.catalog_itemsCreateNestedOneWithoutBranch_catalog_itemsInput;
    catalog_item_variants?: Prisma.catalog_item_variantsCreateNestedOneWithoutBranch_catalog_itemsInput;
    branch_item_schedules?: Prisma.branch_item_schedulesCreateNestedManyWithoutBranch_catalog_itemsInput;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutBranch_catalog_itemsInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutBranch_catalog_itemsInput;
};
export type branch_catalog_itemsUncheckedCreateWithoutStore_branchesInput = {
    id?: string;
    catalog_item_id: string;
    variant_id?: string | null;
    price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: number | null;
    reserved_qty?: number;
    is_available?: boolean;
    availability_mode: $Enums.availability_mode_type;
    prep_time_minutes?: number | null;
    sort_order?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    branch_item_schedules?: Prisma.branch_item_schedulesUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutBranch_catalog_itemsInput;
};
export type branch_catalog_itemsCreateOrConnectWithoutStore_branchesInput = {
    where: Prisma.branch_catalog_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutStore_branchesInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutStore_branchesInput>;
};
export type branch_catalog_itemsCreateManyStore_branchesInputEnvelope = {
    data: Prisma.branch_catalog_itemsCreateManyStore_branchesInput | Prisma.branch_catalog_itemsCreateManyStore_branchesInput[];
    skipDuplicates?: boolean;
};
export type branch_catalog_itemsUpsertWithWhereUniqueWithoutStore_branchesInput = {
    where: Prisma.branch_catalog_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.branch_catalog_itemsUpdateWithoutStore_branchesInput, Prisma.branch_catalog_itemsUncheckedUpdateWithoutStore_branchesInput>;
    create: Prisma.XOR<Prisma.branch_catalog_itemsCreateWithoutStore_branchesInput, Prisma.branch_catalog_itemsUncheckedCreateWithoutStore_branchesInput>;
};
export type branch_catalog_itemsUpdateWithWhereUniqueWithoutStore_branchesInput = {
    where: Prisma.branch_catalog_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.branch_catalog_itemsUpdateWithoutStore_branchesInput, Prisma.branch_catalog_itemsUncheckedUpdateWithoutStore_branchesInput>;
};
export type branch_catalog_itemsUpdateManyWithWhereWithoutStore_branchesInput = {
    where: Prisma.branch_catalog_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.branch_catalog_itemsUpdateManyMutationInput, Prisma.branch_catalog_itemsUncheckedUpdateManyWithoutStore_branchesInput>;
};
export type branch_catalog_itemsCreateManyCatalog_item_variantsInput = {
    id?: string;
    branch_id: string;
    catalog_item_id: string;
    price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: number | null;
    reserved_qty?: number;
    is_available?: boolean;
    availability_mode: $Enums.availability_mode_type;
    prep_time_minutes?: number | null;
    sort_order?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type branch_catalog_itemsUpdateWithoutCatalog_item_variantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reserved_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFieldUpdateOperationsInput | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_branches?: Prisma.store_branchesUpdateOneRequiredWithoutBranch_catalog_itemsNestedInput;
    catalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutBranch_catalog_itemsNestedInput;
    branch_item_schedules?: Prisma.branch_item_schedulesUpdateManyWithoutBranch_catalog_itemsNestedInput;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutBranch_catalog_itemsNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutBranch_catalog_itemsNestedInput;
};
export type branch_catalog_itemsUncheckedUpdateWithoutCatalog_item_variantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reserved_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFieldUpdateOperationsInput | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_item_schedules?: Prisma.branch_item_schedulesUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput;
};
export type branch_catalog_itemsUncheckedUpdateManyWithoutCatalog_item_variantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reserved_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFieldUpdateOperationsInput | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type branch_catalog_itemsCreateManyCatalog_itemsInput = {
    id?: string;
    branch_id: string;
    variant_id?: string | null;
    price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: number | null;
    reserved_qty?: number;
    is_available?: boolean;
    availability_mode: $Enums.availability_mode_type;
    prep_time_minutes?: number | null;
    sort_order?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type branch_catalog_itemsUpdateWithoutCatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reserved_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFieldUpdateOperationsInput | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_branches?: Prisma.store_branchesUpdateOneRequiredWithoutBranch_catalog_itemsNestedInput;
    catalog_item_variants?: Prisma.catalog_item_variantsUpdateOneWithoutBranch_catalog_itemsNestedInput;
    branch_item_schedules?: Prisma.branch_item_schedulesUpdateManyWithoutBranch_catalog_itemsNestedInput;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutBranch_catalog_itemsNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutBranch_catalog_itemsNestedInput;
};
export type branch_catalog_itemsUncheckedUpdateWithoutCatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    variant_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reserved_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFieldUpdateOperationsInput | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_item_schedules?: Prisma.branch_item_schedulesUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput;
};
export type branch_catalog_itemsUncheckedUpdateManyWithoutCatalog_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    variant_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reserved_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFieldUpdateOperationsInput | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type branch_catalog_itemsCreateManyStore_branchesInput = {
    id?: string;
    catalog_item_id: string;
    variant_id?: string | null;
    price_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: number | null;
    reserved_qty?: number;
    is_available?: boolean;
    availability_mode: $Enums.availability_mode_type;
    prep_time_minutes?: number | null;
    sort_order?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type branch_catalog_itemsUpdateWithoutStore_branchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reserved_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFieldUpdateOperationsInput | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    catalog_items?: Prisma.catalog_itemsUpdateOneRequiredWithoutBranch_catalog_itemsNestedInput;
    catalog_item_variants?: Prisma.catalog_item_variantsUpdateOneWithoutBranch_catalog_itemsNestedInput;
    branch_item_schedules?: Prisma.branch_item_schedulesUpdateManyWithoutBranch_catalog_itemsNestedInput;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutBranch_catalog_itemsNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutBranch_catalog_itemsNestedInput;
};
export type branch_catalog_itemsUncheckedUpdateWithoutStore_branchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    variant_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reserved_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFieldUpdateOperationsInput | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch_item_schedules?: Prisma.branch_item_schedulesUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutBranch_catalog_itemsNestedInput;
};
export type branch_catalog_itemsUncheckedUpdateManyWithoutStore_branchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    catalog_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    variant_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compare_at_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    stock_qty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reserved_qty?: Prisma.IntFieldUpdateOperationsInput | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    availability_mode?: Prisma.Enumavailability_mode_typeFieldUpdateOperationsInput | $Enums.availability_mode_type;
    prep_time_minutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Branch_catalog_itemsCountOutputType = {
    branch_item_schedules: number;
    cart_items: number;
    order_items: number;
};
export type Branch_catalog_itemsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    branch_item_schedules?: boolean | Branch_catalog_itemsCountOutputTypeCountBranch_item_schedulesArgs;
    cart_items?: boolean | Branch_catalog_itemsCountOutputTypeCountCart_itemsArgs;
    order_items?: boolean | Branch_catalog_itemsCountOutputTypeCountOrder_itemsArgs;
};
export type Branch_catalog_itemsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Branch_catalog_itemsCountOutputTypeSelect<ExtArgs> | null;
};
export type Branch_catalog_itemsCountOutputTypeCountBranch_item_schedulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.branch_item_schedulesWhereInput;
};
export type Branch_catalog_itemsCountOutputTypeCountCart_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cart_itemsWhereInput;
};
export type Branch_catalog_itemsCountOutputTypeCountOrder_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_itemsWhereInput;
};
export type branch_catalog_itemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    branch_id?: boolean;
    catalog_item_id?: boolean;
    variant_id?: boolean;
    price_amount?: boolean;
    compare_at_amount?: boolean;
    stock_qty?: boolean;
    reserved_qty?: boolean;
    is_available?: boolean;
    availability_mode?: boolean;
    prep_time_minutes?: boolean;
    sort_order?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    catalog_item_variants?: boolean | Prisma.branch_catalog_items$catalog_item_variantsArgs<ExtArgs>;
    branch_item_schedules?: boolean | Prisma.branch_catalog_items$branch_item_schedulesArgs<ExtArgs>;
    cart_items?: boolean | Prisma.branch_catalog_items$cart_itemsArgs<ExtArgs>;
    order_items?: boolean | Prisma.branch_catalog_items$order_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Branch_catalog_itemsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["branch_catalog_items"]>;
export type branch_catalog_itemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    branch_id?: boolean;
    catalog_item_id?: boolean;
    variant_id?: boolean;
    price_amount?: boolean;
    compare_at_amount?: boolean;
    stock_qty?: boolean;
    reserved_qty?: boolean;
    is_available?: boolean;
    availability_mode?: boolean;
    prep_time_minutes?: boolean;
    sort_order?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    catalog_item_variants?: boolean | Prisma.branch_catalog_items$catalog_item_variantsArgs<ExtArgs>;
}, ExtArgs["result"]["branch_catalog_items"]>;
export type branch_catalog_itemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    branch_id?: boolean;
    catalog_item_id?: boolean;
    variant_id?: boolean;
    price_amount?: boolean;
    compare_at_amount?: boolean;
    stock_qty?: boolean;
    reserved_qty?: boolean;
    is_available?: boolean;
    availability_mode?: boolean;
    prep_time_minutes?: boolean;
    sort_order?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    catalog_item_variants?: boolean | Prisma.branch_catalog_items$catalog_item_variantsArgs<ExtArgs>;
}, ExtArgs["result"]["branch_catalog_items"]>;
export type branch_catalog_itemsSelectScalar = {
    id?: boolean;
    branch_id?: boolean;
    catalog_item_id?: boolean;
    variant_id?: boolean;
    price_amount?: boolean;
    compare_at_amount?: boolean;
    stock_qty?: boolean;
    reserved_qty?: boolean;
    is_available?: boolean;
    availability_mode?: boolean;
    prep_time_minutes?: boolean;
    sort_order?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type branch_catalog_itemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "branch_id" | "catalog_item_id" | "variant_id" | "price_amount" | "compare_at_amount" | "stock_qty" | "reserved_qty" | "is_available" | "availability_mode" | "prep_time_minutes" | "sort_order" | "created_at" | "updated_at", ExtArgs["result"]["branch_catalog_items"]>;
export type branch_catalog_itemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    catalog_item_variants?: boolean | Prisma.branch_catalog_items$catalog_item_variantsArgs<ExtArgs>;
    branch_item_schedules?: boolean | Prisma.branch_catalog_items$branch_item_schedulesArgs<ExtArgs>;
    cart_items?: boolean | Prisma.branch_catalog_items$cart_itemsArgs<ExtArgs>;
    order_items?: boolean | Prisma.branch_catalog_items$order_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Branch_catalog_itemsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type branch_catalog_itemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    catalog_item_variants?: boolean | Prisma.branch_catalog_items$catalog_item_variantsArgs<ExtArgs>;
};
export type branch_catalog_itemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
    catalog_items?: boolean | Prisma.catalog_itemsDefaultArgs<ExtArgs>;
    catalog_item_variants?: boolean | Prisma.branch_catalog_items$catalog_item_variantsArgs<ExtArgs>;
};
export type $branch_catalog_itemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "branch_catalog_items";
    objects: {
        store_branches: Prisma.$store_branchesPayload<ExtArgs>;
        catalog_items: Prisma.$catalog_itemsPayload<ExtArgs>;
        catalog_item_variants: Prisma.$catalog_item_variantsPayload<ExtArgs> | null;
        branch_item_schedules: Prisma.$branch_item_schedulesPayload<ExtArgs>[];
        cart_items: Prisma.$cart_itemsPayload<ExtArgs>[];
        order_items: Prisma.$order_itemsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        branch_id: string;
        catalog_item_id: string;
        variant_id: string | null;
        price_amount: runtime.Decimal;
        compare_at_amount: runtime.Decimal | null;
        stock_qty: number | null;
        reserved_qty: number;
        is_available: boolean;
        availability_mode: $Enums.availability_mode_type;
        prep_time_minutes: number | null;
        sort_order: number;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["branch_catalog_items"]>;
    composites: {};
};
export type branch_catalog_itemsGetPayload<S extends boolean | null | undefined | branch_catalog_itemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$branch_catalog_itemsPayload, S>;
export type branch_catalog_itemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<branch_catalog_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Branch_catalog_itemsCountAggregateInputType | true;
};
export interface branch_catalog_itemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['branch_catalog_items'];
        meta: {
            name: 'branch_catalog_items';
        };
    };
    findUnique<T extends branch_catalog_itemsFindUniqueArgs>(args: Prisma.SelectSubset<T, branch_catalog_itemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__branch_catalog_itemsClient<runtime.Types.Result.GetResult<Prisma.$branch_catalog_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends branch_catalog_itemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, branch_catalog_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__branch_catalog_itemsClient<runtime.Types.Result.GetResult<Prisma.$branch_catalog_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends branch_catalog_itemsFindFirstArgs>(args?: Prisma.SelectSubset<T, branch_catalog_itemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__branch_catalog_itemsClient<runtime.Types.Result.GetResult<Prisma.$branch_catalog_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends branch_catalog_itemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, branch_catalog_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__branch_catalog_itemsClient<runtime.Types.Result.GetResult<Prisma.$branch_catalog_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends branch_catalog_itemsFindManyArgs>(args?: Prisma.SelectSubset<T, branch_catalog_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$branch_catalog_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends branch_catalog_itemsCreateArgs>(args: Prisma.SelectSubset<T, branch_catalog_itemsCreateArgs<ExtArgs>>): Prisma.Prisma__branch_catalog_itemsClient<runtime.Types.Result.GetResult<Prisma.$branch_catalog_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends branch_catalog_itemsCreateManyArgs>(args?: Prisma.SelectSubset<T, branch_catalog_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends branch_catalog_itemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, branch_catalog_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$branch_catalog_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends branch_catalog_itemsDeleteArgs>(args: Prisma.SelectSubset<T, branch_catalog_itemsDeleteArgs<ExtArgs>>): Prisma.Prisma__branch_catalog_itemsClient<runtime.Types.Result.GetResult<Prisma.$branch_catalog_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends branch_catalog_itemsUpdateArgs>(args: Prisma.SelectSubset<T, branch_catalog_itemsUpdateArgs<ExtArgs>>): Prisma.Prisma__branch_catalog_itemsClient<runtime.Types.Result.GetResult<Prisma.$branch_catalog_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends branch_catalog_itemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, branch_catalog_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends branch_catalog_itemsUpdateManyArgs>(args: Prisma.SelectSubset<T, branch_catalog_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends branch_catalog_itemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, branch_catalog_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$branch_catalog_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends branch_catalog_itemsUpsertArgs>(args: Prisma.SelectSubset<T, branch_catalog_itemsUpsertArgs<ExtArgs>>): Prisma.Prisma__branch_catalog_itemsClient<runtime.Types.Result.GetResult<Prisma.$branch_catalog_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends branch_catalog_itemsCountArgs>(args?: Prisma.Subset<T, branch_catalog_itemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Branch_catalog_itemsCountAggregateOutputType> : number>;
    aggregate<T extends Branch_catalog_itemsAggregateArgs>(args: Prisma.Subset<T, Branch_catalog_itemsAggregateArgs>): Prisma.PrismaPromise<GetBranch_catalog_itemsAggregateType<T>>;
    groupBy<T extends branch_catalog_itemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: branch_catalog_itemsGroupByArgs['orderBy'];
    } : {
        orderBy?: branch_catalog_itemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, branch_catalog_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranch_catalog_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: branch_catalog_itemsFieldRefs;
}
export interface Prisma__branch_catalog_itemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    store_branches<T extends Prisma.store_branchesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_branchesDefaultArgs<ExtArgs>>): Prisma.Prisma__store_branchesClient<runtime.Types.Result.GetResult<Prisma.$store_branchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    catalog_items<T extends Prisma.catalog_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.catalog_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__catalog_itemsClient<runtime.Types.Result.GetResult<Prisma.$catalog_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    catalog_item_variants<T extends Prisma.branch_catalog_items$catalog_item_variantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.branch_catalog_items$catalog_item_variantsArgs<ExtArgs>>): Prisma.Prisma__catalog_item_variantsClient<runtime.Types.Result.GetResult<Prisma.$catalog_item_variantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    branch_item_schedules<T extends Prisma.branch_catalog_items$branch_item_schedulesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.branch_catalog_items$branch_item_schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$branch_item_schedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cart_items<T extends Prisma.branch_catalog_items$cart_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.branch_catalog_items$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    order_items<T extends Prisma.branch_catalog_items$order_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.branch_catalog_items$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface branch_catalog_itemsFieldRefs {
    readonly id: Prisma.FieldRef<"branch_catalog_items", 'String'>;
    readonly branch_id: Prisma.FieldRef<"branch_catalog_items", 'String'>;
    readonly catalog_item_id: Prisma.FieldRef<"branch_catalog_items", 'String'>;
    readonly variant_id: Prisma.FieldRef<"branch_catalog_items", 'String'>;
    readonly price_amount: Prisma.FieldRef<"branch_catalog_items", 'Decimal'>;
    readonly compare_at_amount: Prisma.FieldRef<"branch_catalog_items", 'Decimal'>;
    readonly stock_qty: Prisma.FieldRef<"branch_catalog_items", 'Int'>;
    readonly reserved_qty: Prisma.FieldRef<"branch_catalog_items", 'Int'>;
    readonly is_available: Prisma.FieldRef<"branch_catalog_items", 'Boolean'>;
    readonly availability_mode: Prisma.FieldRef<"branch_catalog_items", 'availability_mode_type'>;
    readonly prep_time_minutes: Prisma.FieldRef<"branch_catalog_items", 'Int'>;
    readonly sort_order: Prisma.FieldRef<"branch_catalog_items", 'Int'>;
    readonly created_at: Prisma.FieldRef<"branch_catalog_items", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"branch_catalog_items", 'DateTime'>;
}
export type branch_catalog_itemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_catalog_itemsSelect<ExtArgs> | null;
    omit?: Prisma.branch_catalog_itemsOmit<ExtArgs> | null;
    include?: Prisma.branch_catalog_itemsInclude<ExtArgs> | null;
    where: Prisma.branch_catalog_itemsWhereUniqueInput;
};
export type branch_catalog_itemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_catalog_itemsSelect<ExtArgs> | null;
    omit?: Prisma.branch_catalog_itemsOmit<ExtArgs> | null;
    include?: Prisma.branch_catalog_itemsInclude<ExtArgs> | null;
    where: Prisma.branch_catalog_itemsWhereUniqueInput;
};
export type branch_catalog_itemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_catalog_itemsSelect<ExtArgs> | null;
    omit?: Prisma.branch_catalog_itemsOmit<ExtArgs> | null;
    include?: Prisma.branch_catalog_itemsInclude<ExtArgs> | null;
    where?: Prisma.branch_catalog_itemsWhereInput;
    orderBy?: Prisma.branch_catalog_itemsOrderByWithRelationInput | Prisma.branch_catalog_itemsOrderByWithRelationInput[];
    cursor?: Prisma.branch_catalog_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Branch_catalog_itemsScalarFieldEnum | Prisma.Branch_catalog_itemsScalarFieldEnum[];
};
export type branch_catalog_itemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_catalog_itemsSelect<ExtArgs> | null;
    omit?: Prisma.branch_catalog_itemsOmit<ExtArgs> | null;
    include?: Prisma.branch_catalog_itemsInclude<ExtArgs> | null;
    where?: Prisma.branch_catalog_itemsWhereInput;
    orderBy?: Prisma.branch_catalog_itemsOrderByWithRelationInput | Prisma.branch_catalog_itemsOrderByWithRelationInput[];
    cursor?: Prisma.branch_catalog_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Branch_catalog_itemsScalarFieldEnum | Prisma.Branch_catalog_itemsScalarFieldEnum[];
};
export type branch_catalog_itemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_catalog_itemsSelect<ExtArgs> | null;
    omit?: Prisma.branch_catalog_itemsOmit<ExtArgs> | null;
    include?: Prisma.branch_catalog_itemsInclude<ExtArgs> | null;
    where?: Prisma.branch_catalog_itemsWhereInput;
    orderBy?: Prisma.branch_catalog_itemsOrderByWithRelationInput | Prisma.branch_catalog_itemsOrderByWithRelationInput[];
    cursor?: Prisma.branch_catalog_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Branch_catalog_itemsScalarFieldEnum | Prisma.Branch_catalog_itemsScalarFieldEnum[];
};
export type branch_catalog_itemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_catalog_itemsSelect<ExtArgs> | null;
    omit?: Prisma.branch_catalog_itemsOmit<ExtArgs> | null;
    include?: Prisma.branch_catalog_itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.branch_catalog_itemsCreateInput, Prisma.branch_catalog_itemsUncheckedCreateInput>;
};
export type branch_catalog_itemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.branch_catalog_itemsCreateManyInput | Prisma.branch_catalog_itemsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type branch_catalog_itemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_catalog_itemsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.branch_catalog_itemsOmit<ExtArgs> | null;
    data: Prisma.branch_catalog_itemsCreateManyInput | Prisma.branch_catalog_itemsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.branch_catalog_itemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type branch_catalog_itemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_catalog_itemsSelect<ExtArgs> | null;
    omit?: Prisma.branch_catalog_itemsOmit<ExtArgs> | null;
    include?: Prisma.branch_catalog_itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.branch_catalog_itemsUpdateInput, Prisma.branch_catalog_itemsUncheckedUpdateInput>;
    where: Prisma.branch_catalog_itemsWhereUniqueInput;
};
export type branch_catalog_itemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.branch_catalog_itemsUpdateManyMutationInput, Prisma.branch_catalog_itemsUncheckedUpdateManyInput>;
    where?: Prisma.branch_catalog_itemsWhereInput;
    limit?: number;
};
export type branch_catalog_itemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_catalog_itemsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.branch_catalog_itemsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.branch_catalog_itemsUpdateManyMutationInput, Prisma.branch_catalog_itemsUncheckedUpdateManyInput>;
    where?: Prisma.branch_catalog_itemsWhereInput;
    limit?: number;
    include?: Prisma.branch_catalog_itemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type branch_catalog_itemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_catalog_itemsSelect<ExtArgs> | null;
    omit?: Prisma.branch_catalog_itemsOmit<ExtArgs> | null;
    include?: Prisma.branch_catalog_itemsInclude<ExtArgs> | null;
    where: Prisma.branch_catalog_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.branch_catalog_itemsCreateInput, Prisma.branch_catalog_itemsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.branch_catalog_itemsUpdateInput, Prisma.branch_catalog_itemsUncheckedUpdateInput>;
};
export type branch_catalog_itemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_catalog_itemsSelect<ExtArgs> | null;
    omit?: Prisma.branch_catalog_itemsOmit<ExtArgs> | null;
    include?: Prisma.branch_catalog_itemsInclude<ExtArgs> | null;
    where: Prisma.branch_catalog_itemsWhereUniqueInput;
};
export type branch_catalog_itemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.branch_catalog_itemsWhereInput;
    limit?: number;
};
export type branch_catalog_items$catalog_item_variantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.catalog_item_variantsSelect<ExtArgs> | null;
    omit?: Prisma.catalog_item_variantsOmit<ExtArgs> | null;
    include?: Prisma.catalog_item_variantsInclude<ExtArgs> | null;
    where?: Prisma.catalog_item_variantsWhereInput;
};
export type branch_catalog_items$branch_item_schedulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_item_schedulesSelect<ExtArgs> | null;
    omit?: Prisma.branch_item_schedulesOmit<ExtArgs> | null;
    include?: Prisma.branch_item_schedulesInclude<ExtArgs> | null;
    where?: Prisma.branch_item_schedulesWhereInput;
    orderBy?: Prisma.branch_item_schedulesOrderByWithRelationInput | Prisma.branch_item_schedulesOrderByWithRelationInput[];
    cursor?: Prisma.branch_item_schedulesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Branch_item_schedulesScalarFieldEnum | Prisma.Branch_item_schedulesScalarFieldEnum[];
};
export type branch_catalog_items$cart_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    where?: Prisma.cart_itemsWhereInput;
    orderBy?: Prisma.cart_itemsOrderByWithRelationInput | Prisma.cart_itemsOrderByWithRelationInput[];
    cursor?: Prisma.cart_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cart_itemsScalarFieldEnum | Prisma.Cart_itemsScalarFieldEnum[];
};
export type branch_catalog_items$order_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where?: Prisma.order_itemsWhereInput;
    orderBy?: Prisma.order_itemsOrderByWithRelationInput | Prisma.order_itemsOrderByWithRelationInput[];
    cursor?: Prisma.order_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_itemsScalarFieldEnum | Prisma.Order_itemsScalarFieldEnum[];
};
export type branch_catalog_itemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.branch_catalog_itemsSelect<ExtArgs> | null;
    omit?: Prisma.branch_catalog_itemsOmit<ExtArgs> | null;
    include?: Prisma.branch_catalog_itemsInclude<ExtArgs> | null;
};
export {};
