import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type modifier_optionsModel = runtime.Types.Result.DefaultSelection<Prisma.$modifier_optionsPayload>;
export type AggregateModifier_options = {
    _count: Modifier_optionsCountAggregateOutputType | null;
    _avg: Modifier_optionsAvgAggregateOutputType | null;
    _sum: Modifier_optionsSumAggregateOutputType | null;
    _min: Modifier_optionsMinAggregateOutputType | null;
    _max: Modifier_optionsMaxAggregateOutputType | null;
};
export type Modifier_optionsAvgAggregateOutputType = {
    price_delta_amount: runtime.Decimal | null;
    sort_order: number | null;
};
export type Modifier_optionsSumAggregateOutputType = {
    price_delta_amount: runtime.Decimal | null;
    sort_order: number | null;
};
export type Modifier_optionsMinAggregateOutputType = {
    id: string | null;
    modifier_group_id: string | null;
    name: string | null;
    price_delta_amount: runtime.Decimal | null;
    is_default: boolean | null;
    is_active: boolean | null;
    sort_order: number | null;
    created_at: Date | null;
};
export type Modifier_optionsMaxAggregateOutputType = {
    id: string | null;
    modifier_group_id: string | null;
    name: string | null;
    price_delta_amount: runtime.Decimal | null;
    is_default: boolean | null;
    is_active: boolean | null;
    sort_order: number | null;
    created_at: Date | null;
};
export type Modifier_optionsCountAggregateOutputType = {
    id: number;
    modifier_group_id: number;
    name: number;
    price_delta_amount: number;
    is_default: number;
    is_active: number;
    sort_order: number;
    created_at: number;
    _all: number;
};
export type Modifier_optionsAvgAggregateInputType = {
    price_delta_amount?: true;
    sort_order?: true;
};
export type Modifier_optionsSumAggregateInputType = {
    price_delta_amount?: true;
    sort_order?: true;
};
export type Modifier_optionsMinAggregateInputType = {
    id?: true;
    modifier_group_id?: true;
    name?: true;
    price_delta_amount?: true;
    is_default?: true;
    is_active?: true;
    sort_order?: true;
    created_at?: true;
};
export type Modifier_optionsMaxAggregateInputType = {
    id?: true;
    modifier_group_id?: true;
    name?: true;
    price_delta_amount?: true;
    is_default?: true;
    is_active?: true;
    sort_order?: true;
    created_at?: true;
};
export type Modifier_optionsCountAggregateInputType = {
    id?: true;
    modifier_group_id?: true;
    name?: true;
    price_delta_amount?: true;
    is_default?: true;
    is_active?: true;
    sort_order?: true;
    created_at?: true;
    _all?: true;
};
export type Modifier_optionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.modifier_optionsWhereInput;
    orderBy?: Prisma.modifier_optionsOrderByWithRelationInput | Prisma.modifier_optionsOrderByWithRelationInput[];
    cursor?: Prisma.modifier_optionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Modifier_optionsCountAggregateInputType;
    _avg?: Modifier_optionsAvgAggregateInputType;
    _sum?: Modifier_optionsSumAggregateInputType;
    _min?: Modifier_optionsMinAggregateInputType;
    _max?: Modifier_optionsMaxAggregateInputType;
};
export type GetModifier_optionsAggregateType<T extends Modifier_optionsAggregateArgs> = {
    [P in keyof T & keyof AggregateModifier_options]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateModifier_options[P]> : Prisma.GetScalarType<T[P], AggregateModifier_options[P]>;
};
export type modifier_optionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.modifier_optionsWhereInput;
    orderBy?: Prisma.modifier_optionsOrderByWithAggregationInput | Prisma.modifier_optionsOrderByWithAggregationInput[];
    by: Prisma.Modifier_optionsScalarFieldEnum[] | Prisma.Modifier_optionsScalarFieldEnum;
    having?: Prisma.modifier_optionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Modifier_optionsCountAggregateInputType | true;
    _avg?: Modifier_optionsAvgAggregateInputType;
    _sum?: Modifier_optionsSumAggregateInputType;
    _min?: Modifier_optionsMinAggregateInputType;
    _max?: Modifier_optionsMaxAggregateInputType;
};
export type Modifier_optionsGroupByOutputType = {
    id: string;
    modifier_group_id: string;
    name: string;
    price_delta_amount: runtime.Decimal;
    is_default: boolean;
    is_active: boolean;
    sort_order: number;
    created_at: Date;
    _count: Modifier_optionsCountAggregateOutputType | null;
    _avg: Modifier_optionsAvgAggregateOutputType | null;
    _sum: Modifier_optionsSumAggregateOutputType | null;
    _min: Modifier_optionsMinAggregateOutputType | null;
    _max: Modifier_optionsMaxAggregateOutputType | null;
};
type GetModifier_optionsGroupByPayload<T extends modifier_optionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Modifier_optionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Modifier_optionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Modifier_optionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Modifier_optionsGroupByOutputType[P]>;
}>>;
export type modifier_optionsWhereInput = {
    AND?: Prisma.modifier_optionsWhereInput | Prisma.modifier_optionsWhereInput[];
    OR?: Prisma.modifier_optionsWhereInput[];
    NOT?: Prisma.modifier_optionsWhereInput | Prisma.modifier_optionsWhereInput[];
    id?: Prisma.UuidFilter<"modifier_options"> | string;
    modifier_group_id?: Prisma.UuidFilter<"modifier_options"> | string;
    name?: Prisma.StringFilter<"modifier_options"> | string;
    price_delta_amount?: Prisma.DecimalFilter<"modifier_options"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFilter<"modifier_options"> | boolean;
    is_active?: Prisma.BoolFilter<"modifier_options"> | boolean;
    sort_order?: Prisma.IntFilter<"modifier_options"> | number;
    created_at?: Prisma.DateTimeFilter<"modifier_options"> | Date | string;
    cart_item_modifiers?: Prisma.Cart_item_modifiersListRelationFilter;
    modifier_groups?: Prisma.XOR<Prisma.Modifier_groupsScalarRelationFilter, Prisma.modifier_groupsWhereInput>;
};
export type modifier_optionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    modifier_group_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price_delta_amount?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    cart_item_modifiers?: Prisma.cart_item_modifiersOrderByRelationAggregateInput;
    modifier_groups?: Prisma.modifier_groupsOrderByWithRelationInput;
};
export type modifier_optionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.modifier_optionsWhereInput | Prisma.modifier_optionsWhereInput[];
    OR?: Prisma.modifier_optionsWhereInput[];
    NOT?: Prisma.modifier_optionsWhereInput | Prisma.modifier_optionsWhereInput[];
    modifier_group_id?: Prisma.UuidFilter<"modifier_options"> | string;
    name?: Prisma.StringFilter<"modifier_options"> | string;
    price_delta_amount?: Prisma.DecimalFilter<"modifier_options"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFilter<"modifier_options"> | boolean;
    is_active?: Prisma.BoolFilter<"modifier_options"> | boolean;
    sort_order?: Prisma.IntFilter<"modifier_options"> | number;
    created_at?: Prisma.DateTimeFilter<"modifier_options"> | Date | string;
    cart_item_modifiers?: Prisma.Cart_item_modifiersListRelationFilter;
    modifier_groups?: Prisma.XOR<Prisma.Modifier_groupsScalarRelationFilter, Prisma.modifier_groupsWhereInput>;
}, "id">;
export type modifier_optionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    modifier_group_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price_delta_amount?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.modifier_optionsCountOrderByAggregateInput;
    _avg?: Prisma.modifier_optionsAvgOrderByAggregateInput;
    _max?: Prisma.modifier_optionsMaxOrderByAggregateInput;
    _min?: Prisma.modifier_optionsMinOrderByAggregateInput;
    _sum?: Prisma.modifier_optionsSumOrderByAggregateInput;
};
export type modifier_optionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.modifier_optionsScalarWhereWithAggregatesInput | Prisma.modifier_optionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.modifier_optionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.modifier_optionsScalarWhereWithAggregatesInput | Prisma.modifier_optionsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"modifier_options"> | string;
    modifier_group_id?: Prisma.UuidWithAggregatesFilter<"modifier_options"> | string;
    name?: Prisma.StringWithAggregatesFilter<"modifier_options"> | string;
    price_delta_amount?: Prisma.DecimalWithAggregatesFilter<"modifier_options"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolWithAggregatesFilter<"modifier_options"> | boolean;
    is_active?: Prisma.BoolWithAggregatesFilter<"modifier_options"> | boolean;
    sort_order?: Prisma.IntWithAggregatesFilter<"modifier_options"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"modifier_options"> | Date | string;
};
export type modifier_optionsCreateInput = {
    id?: string;
    name: string;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    sort_order?: number;
    created_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersCreateNestedManyWithoutModifier_optionsInput;
    modifier_groups: Prisma.modifier_groupsCreateNestedOneWithoutModifier_optionsInput;
};
export type modifier_optionsUncheckedCreateInput = {
    id?: string;
    modifier_group_id: string;
    name: string;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    sort_order?: number;
    created_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedCreateNestedManyWithoutModifier_optionsInput;
};
export type modifier_optionsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUpdateManyWithoutModifier_optionsNestedInput;
    modifier_groups?: Prisma.modifier_groupsUpdateOneRequiredWithoutModifier_optionsNestedInput;
};
export type modifier_optionsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedUpdateManyWithoutModifier_optionsNestedInput;
};
export type modifier_optionsCreateManyInput = {
    id?: string;
    modifier_group_id: string;
    name: string;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    sort_order?: number;
    created_at?: Date | string;
};
export type modifier_optionsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type modifier_optionsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Modifier_optionsScalarRelationFilter = {
    is?: Prisma.modifier_optionsWhereInput;
    isNot?: Prisma.modifier_optionsWhereInput;
};
export type Modifier_optionsListRelationFilter = {
    every?: Prisma.modifier_optionsWhereInput;
    some?: Prisma.modifier_optionsWhereInput;
    none?: Prisma.modifier_optionsWhereInput;
};
export type modifier_optionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type modifier_optionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modifier_group_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price_delta_amount?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type modifier_optionsAvgOrderByAggregateInput = {
    price_delta_amount?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type modifier_optionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modifier_group_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price_delta_amount?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type modifier_optionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modifier_group_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price_delta_amount?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type modifier_optionsSumOrderByAggregateInput = {
    price_delta_amount?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type modifier_optionsCreateNestedOneWithoutCart_item_modifiersInput = {
    create?: Prisma.XOR<Prisma.modifier_optionsCreateWithoutCart_item_modifiersInput, Prisma.modifier_optionsUncheckedCreateWithoutCart_item_modifiersInput>;
    connectOrCreate?: Prisma.modifier_optionsCreateOrConnectWithoutCart_item_modifiersInput;
    connect?: Prisma.modifier_optionsWhereUniqueInput;
};
export type modifier_optionsUpdateOneRequiredWithoutCart_item_modifiersNestedInput = {
    create?: Prisma.XOR<Prisma.modifier_optionsCreateWithoutCart_item_modifiersInput, Prisma.modifier_optionsUncheckedCreateWithoutCart_item_modifiersInput>;
    connectOrCreate?: Prisma.modifier_optionsCreateOrConnectWithoutCart_item_modifiersInput;
    upsert?: Prisma.modifier_optionsUpsertWithoutCart_item_modifiersInput;
    connect?: Prisma.modifier_optionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.modifier_optionsUpdateToOneWithWhereWithoutCart_item_modifiersInput, Prisma.modifier_optionsUpdateWithoutCart_item_modifiersInput>, Prisma.modifier_optionsUncheckedUpdateWithoutCart_item_modifiersInput>;
};
export type modifier_optionsCreateNestedManyWithoutModifier_groupsInput = {
    create?: Prisma.XOR<Prisma.modifier_optionsCreateWithoutModifier_groupsInput, Prisma.modifier_optionsUncheckedCreateWithoutModifier_groupsInput> | Prisma.modifier_optionsCreateWithoutModifier_groupsInput[] | Prisma.modifier_optionsUncheckedCreateWithoutModifier_groupsInput[];
    connectOrCreate?: Prisma.modifier_optionsCreateOrConnectWithoutModifier_groupsInput | Prisma.modifier_optionsCreateOrConnectWithoutModifier_groupsInput[];
    createMany?: Prisma.modifier_optionsCreateManyModifier_groupsInputEnvelope;
    connect?: Prisma.modifier_optionsWhereUniqueInput | Prisma.modifier_optionsWhereUniqueInput[];
};
export type modifier_optionsUncheckedCreateNestedManyWithoutModifier_groupsInput = {
    create?: Prisma.XOR<Prisma.modifier_optionsCreateWithoutModifier_groupsInput, Prisma.modifier_optionsUncheckedCreateWithoutModifier_groupsInput> | Prisma.modifier_optionsCreateWithoutModifier_groupsInput[] | Prisma.modifier_optionsUncheckedCreateWithoutModifier_groupsInput[];
    connectOrCreate?: Prisma.modifier_optionsCreateOrConnectWithoutModifier_groupsInput | Prisma.modifier_optionsCreateOrConnectWithoutModifier_groupsInput[];
    createMany?: Prisma.modifier_optionsCreateManyModifier_groupsInputEnvelope;
    connect?: Prisma.modifier_optionsWhereUniqueInput | Prisma.modifier_optionsWhereUniqueInput[];
};
export type modifier_optionsUpdateManyWithoutModifier_groupsNestedInput = {
    create?: Prisma.XOR<Prisma.modifier_optionsCreateWithoutModifier_groupsInput, Prisma.modifier_optionsUncheckedCreateWithoutModifier_groupsInput> | Prisma.modifier_optionsCreateWithoutModifier_groupsInput[] | Prisma.modifier_optionsUncheckedCreateWithoutModifier_groupsInput[];
    connectOrCreate?: Prisma.modifier_optionsCreateOrConnectWithoutModifier_groupsInput | Prisma.modifier_optionsCreateOrConnectWithoutModifier_groupsInput[];
    upsert?: Prisma.modifier_optionsUpsertWithWhereUniqueWithoutModifier_groupsInput | Prisma.modifier_optionsUpsertWithWhereUniqueWithoutModifier_groupsInput[];
    createMany?: Prisma.modifier_optionsCreateManyModifier_groupsInputEnvelope;
    set?: Prisma.modifier_optionsWhereUniqueInput | Prisma.modifier_optionsWhereUniqueInput[];
    disconnect?: Prisma.modifier_optionsWhereUniqueInput | Prisma.modifier_optionsWhereUniqueInput[];
    delete?: Prisma.modifier_optionsWhereUniqueInput | Prisma.modifier_optionsWhereUniqueInput[];
    connect?: Prisma.modifier_optionsWhereUniqueInput | Prisma.modifier_optionsWhereUniqueInput[];
    update?: Prisma.modifier_optionsUpdateWithWhereUniqueWithoutModifier_groupsInput | Prisma.modifier_optionsUpdateWithWhereUniqueWithoutModifier_groupsInput[];
    updateMany?: Prisma.modifier_optionsUpdateManyWithWhereWithoutModifier_groupsInput | Prisma.modifier_optionsUpdateManyWithWhereWithoutModifier_groupsInput[];
    deleteMany?: Prisma.modifier_optionsScalarWhereInput | Prisma.modifier_optionsScalarWhereInput[];
};
export type modifier_optionsUncheckedUpdateManyWithoutModifier_groupsNestedInput = {
    create?: Prisma.XOR<Prisma.modifier_optionsCreateWithoutModifier_groupsInput, Prisma.modifier_optionsUncheckedCreateWithoutModifier_groupsInput> | Prisma.modifier_optionsCreateWithoutModifier_groupsInput[] | Prisma.modifier_optionsUncheckedCreateWithoutModifier_groupsInput[];
    connectOrCreate?: Prisma.modifier_optionsCreateOrConnectWithoutModifier_groupsInput | Prisma.modifier_optionsCreateOrConnectWithoutModifier_groupsInput[];
    upsert?: Prisma.modifier_optionsUpsertWithWhereUniqueWithoutModifier_groupsInput | Prisma.modifier_optionsUpsertWithWhereUniqueWithoutModifier_groupsInput[];
    createMany?: Prisma.modifier_optionsCreateManyModifier_groupsInputEnvelope;
    set?: Prisma.modifier_optionsWhereUniqueInput | Prisma.modifier_optionsWhereUniqueInput[];
    disconnect?: Prisma.modifier_optionsWhereUniqueInput | Prisma.modifier_optionsWhereUniqueInput[];
    delete?: Prisma.modifier_optionsWhereUniqueInput | Prisma.modifier_optionsWhereUniqueInput[];
    connect?: Prisma.modifier_optionsWhereUniqueInput | Prisma.modifier_optionsWhereUniqueInput[];
    update?: Prisma.modifier_optionsUpdateWithWhereUniqueWithoutModifier_groupsInput | Prisma.modifier_optionsUpdateWithWhereUniqueWithoutModifier_groupsInput[];
    updateMany?: Prisma.modifier_optionsUpdateManyWithWhereWithoutModifier_groupsInput | Prisma.modifier_optionsUpdateManyWithWhereWithoutModifier_groupsInput[];
    deleteMany?: Prisma.modifier_optionsScalarWhereInput | Prisma.modifier_optionsScalarWhereInput[];
};
export type modifier_optionsCreateWithoutCart_item_modifiersInput = {
    id?: string;
    name: string;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    sort_order?: number;
    created_at?: Date | string;
    modifier_groups: Prisma.modifier_groupsCreateNestedOneWithoutModifier_optionsInput;
};
export type modifier_optionsUncheckedCreateWithoutCart_item_modifiersInput = {
    id?: string;
    modifier_group_id: string;
    name: string;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    sort_order?: number;
    created_at?: Date | string;
};
export type modifier_optionsCreateOrConnectWithoutCart_item_modifiersInput = {
    where: Prisma.modifier_optionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.modifier_optionsCreateWithoutCart_item_modifiersInput, Prisma.modifier_optionsUncheckedCreateWithoutCart_item_modifiersInput>;
};
export type modifier_optionsUpsertWithoutCart_item_modifiersInput = {
    update: Prisma.XOR<Prisma.modifier_optionsUpdateWithoutCart_item_modifiersInput, Prisma.modifier_optionsUncheckedUpdateWithoutCart_item_modifiersInput>;
    create: Prisma.XOR<Prisma.modifier_optionsCreateWithoutCart_item_modifiersInput, Prisma.modifier_optionsUncheckedCreateWithoutCart_item_modifiersInput>;
    where?: Prisma.modifier_optionsWhereInput;
};
export type modifier_optionsUpdateToOneWithWhereWithoutCart_item_modifiersInput = {
    where?: Prisma.modifier_optionsWhereInput;
    data: Prisma.XOR<Prisma.modifier_optionsUpdateWithoutCart_item_modifiersInput, Prisma.modifier_optionsUncheckedUpdateWithoutCart_item_modifiersInput>;
};
export type modifier_optionsUpdateWithoutCart_item_modifiersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modifier_groups?: Prisma.modifier_groupsUpdateOneRequiredWithoutModifier_optionsNestedInput;
};
export type modifier_optionsUncheckedUpdateWithoutCart_item_modifiersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modifier_group_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type modifier_optionsCreateWithoutModifier_groupsInput = {
    id?: string;
    name: string;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    sort_order?: number;
    created_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersCreateNestedManyWithoutModifier_optionsInput;
};
export type modifier_optionsUncheckedCreateWithoutModifier_groupsInput = {
    id?: string;
    name: string;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    sort_order?: number;
    created_at?: Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedCreateNestedManyWithoutModifier_optionsInput;
};
export type modifier_optionsCreateOrConnectWithoutModifier_groupsInput = {
    where: Prisma.modifier_optionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.modifier_optionsCreateWithoutModifier_groupsInput, Prisma.modifier_optionsUncheckedCreateWithoutModifier_groupsInput>;
};
export type modifier_optionsCreateManyModifier_groupsInputEnvelope = {
    data: Prisma.modifier_optionsCreateManyModifier_groupsInput | Prisma.modifier_optionsCreateManyModifier_groupsInput[];
    skipDuplicates?: boolean;
};
export type modifier_optionsUpsertWithWhereUniqueWithoutModifier_groupsInput = {
    where: Prisma.modifier_optionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.modifier_optionsUpdateWithoutModifier_groupsInput, Prisma.modifier_optionsUncheckedUpdateWithoutModifier_groupsInput>;
    create: Prisma.XOR<Prisma.modifier_optionsCreateWithoutModifier_groupsInput, Prisma.modifier_optionsUncheckedCreateWithoutModifier_groupsInput>;
};
export type modifier_optionsUpdateWithWhereUniqueWithoutModifier_groupsInput = {
    where: Prisma.modifier_optionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.modifier_optionsUpdateWithoutModifier_groupsInput, Prisma.modifier_optionsUncheckedUpdateWithoutModifier_groupsInput>;
};
export type modifier_optionsUpdateManyWithWhereWithoutModifier_groupsInput = {
    where: Prisma.modifier_optionsScalarWhereInput;
    data: Prisma.XOR<Prisma.modifier_optionsUpdateManyMutationInput, Prisma.modifier_optionsUncheckedUpdateManyWithoutModifier_groupsInput>;
};
export type modifier_optionsScalarWhereInput = {
    AND?: Prisma.modifier_optionsScalarWhereInput | Prisma.modifier_optionsScalarWhereInput[];
    OR?: Prisma.modifier_optionsScalarWhereInput[];
    NOT?: Prisma.modifier_optionsScalarWhereInput | Prisma.modifier_optionsScalarWhereInput[];
    id?: Prisma.UuidFilter<"modifier_options"> | string;
    modifier_group_id?: Prisma.UuidFilter<"modifier_options"> | string;
    name?: Prisma.StringFilter<"modifier_options"> | string;
    price_delta_amount?: Prisma.DecimalFilter<"modifier_options"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFilter<"modifier_options"> | boolean;
    is_active?: Prisma.BoolFilter<"modifier_options"> | boolean;
    sort_order?: Prisma.IntFilter<"modifier_options"> | number;
    created_at?: Prisma.DateTimeFilter<"modifier_options"> | Date | string;
};
export type modifier_optionsCreateManyModifier_groupsInput = {
    id?: string;
    name: string;
    price_delta_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: boolean;
    is_active?: boolean;
    sort_order?: number;
    created_at?: Date | string;
};
export type modifier_optionsUpdateWithoutModifier_groupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUpdateManyWithoutModifier_optionsNestedInput;
};
export type modifier_optionsUncheckedUpdateWithoutModifier_groupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_item_modifiers?: Prisma.cart_item_modifiersUncheckedUpdateManyWithoutModifier_optionsNestedInput;
};
export type modifier_optionsUncheckedUpdateManyWithoutModifier_groupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price_delta_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Modifier_optionsCountOutputType = {
    cart_item_modifiers: number;
};
export type Modifier_optionsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cart_item_modifiers?: boolean | Modifier_optionsCountOutputTypeCountCart_item_modifiersArgs;
};
export type Modifier_optionsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Modifier_optionsCountOutputTypeSelect<ExtArgs> | null;
};
export type Modifier_optionsCountOutputTypeCountCart_item_modifiersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cart_item_modifiersWhereInput;
};
export type modifier_optionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    modifier_group_id?: boolean;
    name?: boolean;
    price_delta_amount?: boolean;
    is_default?: boolean;
    is_active?: boolean;
    sort_order?: boolean;
    created_at?: boolean;
    cart_item_modifiers?: boolean | Prisma.modifier_options$cart_item_modifiersArgs<ExtArgs>;
    modifier_groups?: boolean | Prisma.modifier_groupsDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Modifier_optionsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["modifier_options"]>;
export type modifier_optionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    modifier_group_id?: boolean;
    name?: boolean;
    price_delta_amount?: boolean;
    is_default?: boolean;
    is_active?: boolean;
    sort_order?: boolean;
    created_at?: boolean;
    modifier_groups?: boolean | Prisma.modifier_groupsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["modifier_options"]>;
export type modifier_optionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    modifier_group_id?: boolean;
    name?: boolean;
    price_delta_amount?: boolean;
    is_default?: boolean;
    is_active?: boolean;
    sort_order?: boolean;
    created_at?: boolean;
    modifier_groups?: boolean | Prisma.modifier_groupsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["modifier_options"]>;
export type modifier_optionsSelectScalar = {
    id?: boolean;
    modifier_group_id?: boolean;
    name?: boolean;
    price_delta_amount?: boolean;
    is_default?: boolean;
    is_active?: boolean;
    sort_order?: boolean;
    created_at?: boolean;
};
export type modifier_optionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "modifier_group_id" | "name" | "price_delta_amount" | "is_default" | "is_active" | "sort_order" | "created_at", ExtArgs["result"]["modifier_options"]>;
export type modifier_optionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cart_item_modifiers?: boolean | Prisma.modifier_options$cart_item_modifiersArgs<ExtArgs>;
    modifier_groups?: boolean | Prisma.modifier_groupsDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Modifier_optionsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type modifier_optionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    modifier_groups?: boolean | Prisma.modifier_groupsDefaultArgs<ExtArgs>;
};
export type modifier_optionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    modifier_groups?: boolean | Prisma.modifier_groupsDefaultArgs<ExtArgs>;
};
export type $modifier_optionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "modifier_options";
    objects: {
        cart_item_modifiers: Prisma.$cart_item_modifiersPayload<ExtArgs>[];
        modifier_groups: Prisma.$modifier_groupsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        modifier_group_id: string;
        name: string;
        price_delta_amount: runtime.Decimal;
        is_default: boolean;
        is_active: boolean;
        sort_order: number;
        created_at: Date;
    }, ExtArgs["result"]["modifier_options"]>;
    composites: {};
};
export type modifier_optionsGetPayload<S extends boolean | null | undefined | modifier_optionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$modifier_optionsPayload, S>;
export type modifier_optionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<modifier_optionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Modifier_optionsCountAggregateInputType | true;
};
export interface modifier_optionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['modifier_options'];
        meta: {
            name: 'modifier_options';
        };
    };
    findUnique<T extends modifier_optionsFindUniqueArgs>(args: Prisma.SelectSubset<T, modifier_optionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__modifier_optionsClient<runtime.Types.Result.GetResult<Prisma.$modifier_optionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends modifier_optionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, modifier_optionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__modifier_optionsClient<runtime.Types.Result.GetResult<Prisma.$modifier_optionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends modifier_optionsFindFirstArgs>(args?: Prisma.SelectSubset<T, modifier_optionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__modifier_optionsClient<runtime.Types.Result.GetResult<Prisma.$modifier_optionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends modifier_optionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, modifier_optionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__modifier_optionsClient<runtime.Types.Result.GetResult<Prisma.$modifier_optionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends modifier_optionsFindManyArgs>(args?: Prisma.SelectSubset<T, modifier_optionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$modifier_optionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends modifier_optionsCreateArgs>(args: Prisma.SelectSubset<T, modifier_optionsCreateArgs<ExtArgs>>): Prisma.Prisma__modifier_optionsClient<runtime.Types.Result.GetResult<Prisma.$modifier_optionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends modifier_optionsCreateManyArgs>(args?: Prisma.SelectSubset<T, modifier_optionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends modifier_optionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, modifier_optionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$modifier_optionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends modifier_optionsDeleteArgs>(args: Prisma.SelectSubset<T, modifier_optionsDeleteArgs<ExtArgs>>): Prisma.Prisma__modifier_optionsClient<runtime.Types.Result.GetResult<Prisma.$modifier_optionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends modifier_optionsUpdateArgs>(args: Prisma.SelectSubset<T, modifier_optionsUpdateArgs<ExtArgs>>): Prisma.Prisma__modifier_optionsClient<runtime.Types.Result.GetResult<Prisma.$modifier_optionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends modifier_optionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, modifier_optionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends modifier_optionsUpdateManyArgs>(args: Prisma.SelectSubset<T, modifier_optionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends modifier_optionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, modifier_optionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$modifier_optionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends modifier_optionsUpsertArgs>(args: Prisma.SelectSubset<T, modifier_optionsUpsertArgs<ExtArgs>>): Prisma.Prisma__modifier_optionsClient<runtime.Types.Result.GetResult<Prisma.$modifier_optionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends modifier_optionsCountArgs>(args?: Prisma.Subset<T, modifier_optionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Modifier_optionsCountAggregateOutputType> : number>;
    aggregate<T extends Modifier_optionsAggregateArgs>(args: Prisma.Subset<T, Modifier_optionsAggregateArgs>): Prisma.PrismaPromise<GetModifier_optionsAggregateType<T>>;
    groupBy<T extends modifier_optionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: modifier_optionsGroupByArgs['orderBy'];
    } : {
        orderBy?: modifier_optionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, modifier_optionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModifier_optionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: modifier_optionsFieldRefs;
}
export interface Prisma__modifier_optionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cart_item_modifiers<T extends Prisma.modifier_options$cart_item_modifiersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.modifier_options$cart_item_modifiersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cart_item_modifiersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    modifier_groups<T extends Prisma.modifier_groupsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.modifier_groupsDefaultArgs<ExtArgs>>): Prisma.Prisma__modifier_groupsClient<runtime.Types.Result.GetResult<Prisma.$modifier_groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface modifier_optionsFieldRefs {
    readonly id: Prisma.FieldRef<"modifier_options", 'String'>;
    readonly modifier_group_id: Prisma.FieldRef<"modifier_options", 'String'>;
    readonly name: Prisma.FieldRef<"modifier_options", 'String'>;
    readonly price_delta_amount: Prisma.FieldRef<"modifier_options", 'Decimal'>;
    readonly is_default: Prisma.FieldRef<"modifier_options", 'Boolean'>;
    readonly is_active: Prisma.FieldRef<"modifier_options", 'Boolean'>;
    readonly sort_order: Prisma.FieldRef<"modifier_options", 'Int'>;
    readonly created_at: Prisma.FieldRef<"modifier_options", 'DateTime'>;
}
export type modifier_optionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_optionsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_optionsOmit<ExtArgs> | null;
    include?: Prisma.modifier_optionsInclude<ExtArgs> | null;
    where: Prisma.modifier_optionsWhereUniqueInput;
};
export type modifier_optionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_optionsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_optionsOmit<ExtArgs> | null;
    include?: Prisma.modifier_optionsInclude<ExtArgs> | null;
    where: Prisma.modifier_optionsWhereUniqueInput;
};
export type modifier_optionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_optionsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_optionsOmit<ExtArgs> | null;
    include?: Prisma.modifier_optionsInclude<ExtArgs> | null;
    where?: Prisma.modifier_optionsWhereInput;
    orderBy?: Prisma.modifier_optionsOrderByWithRelationInput | Prisma.modifier_optionsOrderByWithRelationInput[];
    cursor?: Prisma.modifier_optionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Modifier_optionsScalarFieldEnum | Prisma.Modifier_optionsScalarFieldEnum[];
};
export type modifier_optionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_optionsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_optionsOmit<ExtArgs> | null;
    include?: Prisma.modifier_optionsInclude<ExtArgs> | null;
    where?: Prisma.modifier_optionsWhereInput;
    orderBy?: Prisma.modifier_optionsOrderByWithRelationInput | Prisma.modifier_optionsOrderByWithRelationInput[];
    cursor?: Prisma.modifier_optionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Modifier_optionsScalarFieldEnum | Prisma.Modifier_optionsScalarFieldEnum[];
};
export type modifier_optionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_optionsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_optionsOmit<ExtArgs> | null;
    include?: Prisma.modifier_optionsInclude<ExtArgs> | null;
    where?: Prisma.modifier_optionsWhereInput;
    orderBy?: Prisma.modifier_optionsOrderByWithRelationInput | Prisma.modifier_optionsOrderByWithRelationInput[];
    cursor?: Prisma.modifier_optionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Modifier_optionsScalarFieldEnum | Prisma.Modifier_optionsScalarFieldEnum[];
};
export type modifier_optionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_optionsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_optionsOmit<ExtArgs> | null;
    include?: Prisma.modifier_optionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.modifier_optionsCreateInput, Prisma.modifier_optionsUncheckedCreateInput>;
};
export type modifier_optionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.modifier_optionsCreateManyInput | Prisma.modifier_optionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type modifier_optionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_optionsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.modifier_optionsOmit<ExtArgs> | null;
    data: Prisma.modifier_optionsCreateManyInput | Prisma.modifier_optionsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.modifier_optionsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type modifier_optionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_optionsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_optionsOmit<ExtArgs> | null;
    include?: Prisma.modifier_optionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.modifier_optionsUpdateInput, Prisma.modifier_optionsUncheckedUpdateInput>;
    where: Prisma.modifier_optionsWhereUniqueInput;
};
export type modifier_optionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.modifier_optionsUpdateManyMutationInput, Prisma.modifier_optionsUncheckedUpdateManyInput>;
    where?: Prisma.modifier_optionsWhereInput;
    limit?: number;
};
export type modifier_optionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_optionsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.modifier_optionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.modifier_optionsUpdateManyMutationInput, Prisma.modifier_optionsUncheckedUpdateManyInput>;
    where?: Prisma.modifier_optionsWhereInput;
    limit?: number;
    include?: Prisma.modifier_optionsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type modifier_optionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_optionsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_optionsOmit<ExtArgs> | null;
    include?: Prisma.modifier_optionsInclude<ExtArgs> | null;
    where: Prisma.modifier_optionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.modifier_optionsCreateInput, Prisma.modifier_optionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.modifier_optionsUpdateInput, Prisma.modifier_optionsUncheckedUpdateInput>;
};
export type modifier_optionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_optionsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_optionsOmit<ExtArgs> | null;
    include?: Prisma.modifier_optionsInclude<ExtArgs> | null;
    where: Prisma.modifier_optionsWhereUniqueInput;
};
export type modifier_optionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.modifier_optionsWhereInput;
    limit?: number;
};
export type modifier_options$cart_item_modifiersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_item_modifiersSelect<ExtArgs> | null;
    omit?: Prisma.cart_item_modifiersOmit<ExtArgs> | null;
    include?: Prisma.cart_item_modifiersInclude<ExtArgs> | null;
    where?: Prisma.cart_item_modifiersWhereInput;
    orderBy?: Prisma.cart_item_modifiersOrderByWithRelationInput | Prisma.cart_item_modifiersOrderByWithRelationInput[];
    cursor?: Prisma.cart_item_modifiersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cart_item_modifiersScalarFieldEnum | Prisma.Cart_item_modifiersScalarFieldEnum[];
};
export type modifier_optionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.modifier_optionsSelect<ExtArgs> | null;
    omit?: Prisma.modifier_optionsOmit<ExtArgs> | null;
    include?: Prisma.modifier_optionsInclude<ExtArgs> | null;
};
export {};
