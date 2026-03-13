import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type UuidFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidFilter<$PrismaModel> | string;
};
export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidNullableFilter<$PrismaModel> | string | null;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type DecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type Enumavailability_mode_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.availability_mode_type | Prisma.Enumavailability_mode_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.availability_mode_type[] | Prisma.ListEnumavailability_mode_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.availability_mode_type[] | Prisma.ListEnumavailability_mode_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumavailability_mode_typeFilter<$PrismaModel> | $Enums.availability_mode_type;
};
export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type Enumavailability_mode_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.availability_mode_type | Prisma.Enumavailability_mode_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.availability_mode_type[] | Prisma.ListEnumavailability_mode_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.availability_mode_type[] | Prisma.ListEnumavailability_mode_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumavailability_mode_typeWithAggregatesFilter<$PrismaModel> | $Enums.availability_mode_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumavailability_mode_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumavailability_mode_typeFilter<$PrismaModel>;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type Enumcart_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.cart_status_type | Prisma.Enumcart_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.cart_status_type[] | Prisma.ListEnumcart_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.cart_status_type[] | Prisma.ListEnumcart_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumcart_status_typeFilter<$PrismaModel> | $Enums.cart_status_type;
};
export type Enumcart_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cart_status_type | Prisma.Enumcart_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.cart_status_type[] | Prisma.ListEnumcart_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.cart_status_type[] | Prisma.ListEnumcart_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumcart_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.cart_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcart_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcart_status_typeFilter<$PrismaModel>;
};
export type Enumitem_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.item_type_enum | Prisma.Enumitem_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.item_type_enum[] | Prisma.ListEnumitem_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.item_type_enum[] | Prisma.ListEnumitem_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumitem_type_enumFilter<$PrismaModel> | $Enums.item_type_enum;
};
export type Enumitem_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.item_type_enum | Prisma.Enumitem_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.item_type_enum[] | Prisma.ListEnumitem_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.item_type_enum[] | Prisma.ListEnumitem_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumitem_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.item_type_enum;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumitem_type_enumFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumitem_type_enumFilter<$PrismaModel>;
};
export type Enumdelivery_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.delivery_status_type | Prisma.Enumdelivery_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.delivery_status_type[] | Prisma.ListEnumdelivery_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.delivery_status_type[] | Prisma.ListEnumdelivery_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumdelivery_status_typeFilter<$PrismaModel> | $Enums.delivery_status_type;
};
export type Enumdelivery_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.delivery_status_type | Prisma.Enumdelivery_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.delivery_status_type[] | Prisma.ListEnumdelivery_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.delivery_status_type[] | Prisma.ListEnumdelivery_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumdelivery_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.delivery_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumdelivery_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumdelivery_status_typeFilter<$PrismaModel>;
};
export type Enumzone_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.zone_type_enum | Prisma.Enumzone_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.zone_type_enum[] | Prisma.ListEnumzone_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.zone_type_enum[] | Prisma.ListEnumzone_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumzone_type_enumFilter<$PrismaModel> | $Enums.zone_type_enum;
};
export type JsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type Enumzone_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.zone_type_enum | Prisma.Enumzone_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.zone_type_enum[] | Prisma.ListEnumzone_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.zone_type_enum[] | Prisma.ListEnumzone_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumzone_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.zone_type_enum;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumzone_type_enumFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumzone_type_enumFilter<$PrismaModel>;
};
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
};
export type Enummerchant_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.merchant_status_type | Prisma.Enummerchant_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.merchant_status_type[] | Prisma.ListEnummerchant_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.merchant_status_type[] | Prisma.ListEnummerchant_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnummerchant_status_typeFilter<$PrismaModel> | $Enums.merchant_status_type;
};
export type Enummerchant_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.merchant_status_type | Prisma.Enummerchant_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.merchant_status_type[] | Prisma.ListEnummerchant_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.merchant_status_type[] | Prisma.ListEnummerchant_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnummerchant_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.merchant_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummerchant_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummerchant_status_typeFilter<$PrismaModel>;
};
export type Enumsettlement_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.settlement_status_type | Prisma.Enumsettlement_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.settlement_status_type[] | Prisma.ListEnumsettlement_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.settlement_status_type[] | Prisma.ListEnumsettlement_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumsettlement_status_typeFilter<$PrismaModel> | $Enums.settlement_status_type;
};
export type Enumsettlement_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.settlement_status_type | Prisma.Enumsettlement_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.settlement_status_type[] | Prisma.ListEnumsettlement_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.settlement_status_type[] | Prisma.ListEnumsettlement_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumsettlement_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.settlement_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumsettlement_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumsettlement_status_typeFilter<$PrismaModel>;
};
export type Enummerchant_user_role_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.merchant_user_role_type | Prisma.Enummerchant_user_role_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.merchant_user_role_type[] | Prisma.ListEnummerchant_user_role_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.merchant_user_role_type[] | Prisma.ListEnummerchant_user_role_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnummerchant_user_role_typeFilter<$PrismaModel> | $Enums.merchant_user_role_type;
};
export type Enummerchant_user_role_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.merchant_user_role_type | Prisma.Enummerchant_user_role_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.merchant_user_role_type[] | Prisma.ListEnummerchant_user_role_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.merchant_user_role_type[] | Prisma.ListEnummerchant_user_role_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnummerchant_user_role_typeWithAggregatesFilter<$PrismaModel> | $Enums.merchant_user_role_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummerchant_user_role_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummerchant_user_role_typeFilter<$PrismaModel>;
};
export type Enumorder_status_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status_type | Prisma.Enumorder_status_typeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.order_status_type[] | Prisma.ListEnumorder_status_typeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.order_status_type[] | Prisma.ListEnumorder_status_typeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumorder_status_typeNullableFilter<$PrismaModel> | $Enums.order_status_type | null;
};
export type Enumorder_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status_type | Prisma.Enumorder_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.order_status_type[] | Prisma.ListEnumorder_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.order_status_type[] | Prisma.ListEnumorder_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumorder_status_typeFilter<$PrismaModel> | $Enums.order_status_type;
};
export type Enumstatus_change_source_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.status_change_source_type | Prisma.Enumstatus_change_source_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.status_change_source_type[] | Prisma.ListEnumstatus_change_source_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.status_change_source_type[] | Prisma.ListEnumstatus_change_source_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumstatus_change_source_typeFilter<$PrismaModel> | $Enums.status_change_source_type;
};
export type Enumorder_status_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status_type | Prisma.Enumorder_status_typeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.order_status_type[] | Prisma.ListEnumorder_status_typeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.order_status_type[] | Prisma.ListEnumorder_status_typeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumorder_status_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.order_status_type | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumorder_status_typeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumorder_status_typeNullableFilter<$PrismaModel>;
};
export type Enumorder_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status_type | Prisma.Enumorder_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.order_status_type[] | Prisma.ListEnumorder_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.order_status_type[] | Prisma.ListEnumorder_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumorder_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.order_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumorder_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumorder_status_typeFilter<$PrismaModel>;
};
export type Enumstatus_change_source_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_change_source_type | Prisma.Enumstatus_change_source_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.status_change_source_type[] | Prisma.ListEnumstatus_change_source_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.status_change_source_type[] | Prisma.ListEnumstatus_change_source_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumstatus_change_source_typeWithAggregatesFilter<$PrismaModel> | $Enums.status_change_source_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumstatus_change_source_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumstatus_change_source_typeFilter<$PrismaModel>;
};
export type Enumsource_channel_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.source_channel_type | Prisma.Enumsource_channel_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.source_channel_type[] | Prisma.ListEnumsource_channel_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.source_channel_type[] | Prisma.ListEnumsource_channel_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumsource_channel_typeFilter<$PrismaModel> | $Enums.source_channel_type;
};
export type Enumorder_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.order_type_enum | Prisma.Enumorder_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.order_type_enum[] | Prisma.ListEnumorder_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.order_type_enum[] | Prisma.ListEnumorder_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumorder_type_enumFilter<$PrismaModel> | $Enums.order_type_enum;
};
export type Enumpayment_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status_type | Prisma.Enumpayment_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.payment_status_type[] | Prisma.ListEnumpayment_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payment_status_type[] | Prisma.ListEnumpayment_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayment_status_typeFilter<$PrismaModel> | $Enums.payment_status_type;
};
export type Enumfulfillment_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.fulfillment_status_type | Prisma.Enumfulfillment_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.fulfillment_status_type[] | Prisma.ListEnumfulfillment_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.fulfillment_status_type[] | Prisma.ListEnumfulfillment_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumfulfillment_status_typeFilter<$PrismaModel> | $Enums.fulfillment_status_type;
};
export type Enumsource_channel_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.source_channel_type | Prisma.Enumsource_channel_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.source_channel_type[] | Prisma.ListEnumsource_channel_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.source_channel_type[] | Prisma.ListEnumsource_channel_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumsource_channel_typeWithAggregatesFilter<$PrismaModel> | $Enums.source_channel_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumsource_channel_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumsource_channel_typeFilter<$PrismaModel>;
};
export type Enumorder_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_type_enum | Prisma.Enumorder_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.order_type_enum[] | Prisma.ListEnumorder_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.order_type_enum[] | Prisma.ListEnumorder_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumorder_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.order_type_enum;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumorder_type_enumFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumorder_type_enumFilter<$PrismaModel>;
};
export type Enumpayment_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status_type | Prisma.Enumpayment_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.payment_status_type[] | Prisma.ListEnumpayment_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payment_status_type[] | Prisma.ListEnumpayment_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayment_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.payment_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpayment_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpayment_status_typeFilter<$PrismaModel>;
};
export type Enumfulfillment_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.fulfillment_status_type | Prisma.Enumfulfillment_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.fulfillment_status_type[] | Prisma.ListEnumfulfillment_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.fulfillment_status_type[] | Prisma.ListEnumfulfillment_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumfulfillment_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.fulfillment_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumfulfillment_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumfulfillment_status_typeFilter<$PrismaModel>;
};
export type Enumotp_channel_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.otp_channel_type | Prisma.Enumotp_channel_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.otp_channel_type[] | Prisma.ListEnumotp_channel_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.otp_channel_type[] | Prisma.ListEnumotp_channel_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumotp_channel_typeFilter<$PrismaModel> | $Enums.otp_channel_type;
};
export type Enumotp_purpose_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.otp_purpose_type | Prisma.Enumotp_purpose_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.otp_purpose_type[] | Prisma.ListEnumotp_purpose_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.otp_purpose_type[] | Prisma.ListEnumotp_purpose_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumotp_purpose_typeFilter<$PrismaModel> | $Enums.otp_purpose_type;
};
export type Enumotp_channel_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.otp_channel_type | Prisma.Enumotp_channel_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.otp_channel_type[] | Prisma.ListEnumotp_channel_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.otp_channel_type[] | Prisma.ListEnumotp_channel_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumotp_channel_typeWithAggregatesFilter<$PrismaModel> | $Enums.otp_channel_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumotp_channel_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumotp_channel_typeFilter<$PrismaModel>;
};
export type Enumotp_purpose_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.otp_purpose_type | Prisma.Enumotp_purpose_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.otp_purpose_type[] | Prisma.ListEnumotp_purpose_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.otp_purpose_type[] | Prisma.ListEnumotp_purpose_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumotp_purpose_typeWithAggregatesFilter<$PrismaModel> | $Enums.otp_purpose_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumotp_purpose_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumotp_purpose_typeFilter<$PrismaModel>;
};
export type Enumpayment_record_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_record_status_type | Prisma.Enumpayment_record_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.payment_record_status_type[] | Prisma.ListEnumpayment_record_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payment_record_status_type[] | Prisma.ListEnumpayment_record_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayment_record_status_typeFilter<$PrismaModel> | $Enums.payment_record_status_type;
};
export type Enumpayment_record_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_record_status_type | Prisma.Enumpayment_record_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.payment_record_status_type[] | Prisma.ListEnumpayment_record_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payment_record_status_type[] | Prisma.ListEnumpayment_record_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayment_record_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.payment_record_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpayment_record_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpayment_record_status_typeFilter<$PrismaModel>;
};
export type Enumdiscount_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.discount_type_enum | Prisma.Enumdiscount_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.discount_type_enum[] | Prisma.ListEnumdiscount_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.discount_type_enum[] | Prisma.ListEnumdiscount_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumdiscount_type_enumFilter<$PrismaModel> | $Enums.discount_type_enum;
};
export type Enumpromotion_applies_to_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.promotion_applies_to_type | Prisma.Enumpromotion_applies_to_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.promotion_applies_to_type[] | Prisma.ListEnumpromotion_applies_to_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.promotion_applies_to_type[] | Prisma.ListEnumpromotion_applies_to_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpromotion_applies_to_typeFilter<$PrismaModel> | $Enums.promotion_applies_to_type;
};
export type Enumdiscount_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.discount_type_enum | Prisma.Enumdiscount_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.discount_type_enum[] | Prisma.ListEnumdiscount_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.discount_type_enum[] | Prisma.ListEnumdiscount_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumdiscount_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.discount_type_enum;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumdiscount_type_enumFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumdiscount_type_enumFilter<$PrismaModel>;
};
export type Enumpromotion_applies_to_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.promotion_applies_to_type | Prisma.Enumpromotion_applies_to_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.promotion_applies_to_type[] | Prisma.ListEnumpromotion_applies_to_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.promotion_applies_to_type[] | Prisma.ListEnumpromotion_applies_to_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpromotion_applies_to_typeWithAggregatesFilter<$PrismaModel> | $Enums.promotion_applies_to_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpromotion_applies_to_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpromotion_applies_to_typeFilter<$PrismaModel>;
};
export type Enumvehicle_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.vehicle_type_enum | Prisma.Enumvehicle_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.vehicle_type_enum[] | Prisma.ListEnumvehicle_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.vehicle_type_enum[] | Prisma.ListEnumvehicle_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumvehicle_type_enumFilter<$PrismaModel> | $Enums.vehicle_type_enum;
};
export type Enumrider_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.rider_status_type | Prisma.Enumrider_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.rider_status_type[] | Prisma.ListEnumrider_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.rider_status_type[] | Prisma.ListEnumrider_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumrider_status_typeFilter<$PrismaModel> | $Enums.rider_status_type;
};
export type Enumvehicle_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.vehicle_type_enum | Prisma.Enumvehicle_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.vehicle_type_enum[] | Prisma.ListEnumvehicle_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.vehicle_type_enum[] | Prisma.ListEnumvehicle_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumvehicle_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.vehicle_type_enum;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumvehicle_type_enumFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumvehicle_type_enumFilter<$PrismaModel>;
};
export type Enumrider_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rider_status_type | Prisma.Enumrider_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.rider_status_type[] | Prisma.ListEnumrider_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.rider_status_type[] | Prisma.ListEnumrider_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumrider_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.rider_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumrider_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumrider_status_typeFilter<$PrismaModel>;
};
export type Enumbranch_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.branch_status_type | Prisma.Enumbranch_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.branch_status_type[] | Prisma.ListEnumbranch_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.branch_status_type[] | Prisma.ListEnumbranch_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumbranch_status_typeFilter<$PrismaModel> | $Enums.branch_status_type;
};
export type Enumbranch_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.branch_status_type | Prisma.Enumbranch_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.branch_status_type[] | Prisma.ListEnumbranch_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.branch_status_type[] | Prisma.ListEnumbranch_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumbranch_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.branch_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumbranch_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumbranch_status_typeFilter<$PrismaModel>;
};
export type Enumservice_mode_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.service_mode_type | Prisma.Enumservice_mode_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.service_mode_type[] | Prisma.ListEnumservice_mode_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.service_mode_type[] | Prisma.ListEnumservice_mode_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumservice_mode_typeFilter<$PrismaModel> | $Enums.service_mode_type;
};
export type Enumcatalog_mode_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.catalog_mode_type | Prisma.Enumcatalog_mode_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.catalog_mode_type[] | Prisma.ListEnumcatalog_mode_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.catalog_mode_type[] | Prisma.ListEnumcatalog_mode_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumcatalog_mode_typeFilter<$PrismaModel> | $Enums.catalog_mode_type;
};
export type Enumstore_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.store_status_type | Prisma.Enumstore_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.store_status_type[] | Prisma.ListEnumstore_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.store_status_type[] | Prisma.ListEnumstore_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumstore_status_typeFilter<$PrismaModel> | $Enums.store_status_type;
};
export type Enumservice_mode_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.service_mode_type | Prisma.Enumservice_mode_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.service_mode_type[] | Prisma.ListEnumservice_mode_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.service_mode_type[] | Prisma.ListEnumservice_mode_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumservice_mode_typeWithAggregatesFilter<$PrismaModel> | $Enums.service_mode_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumservice_mode_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumservice_mode_typeFilter<$PrismaModel>;
};
export type Enumcatalog_mode_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.catalog_mode_type | Prisma.Enumcatalog_mode_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.catalog_mode_type[] | Prisma.ListEnumcatalog_mode_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.catalog_mode_type[] | Prisma.ListEnumcatalog_mode_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumcatalog_mode_typeWithAggregatesFilter<$PrismaModel> | $Enums.catalog_mode_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcatalog_mode_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcatalog_mode_typeFilter<$PrismaModel>;
};
export type Enumstore_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.store_status_type | Prisma.Enumstore_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.store_status_type[] | Prisma.ListEnumstore_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.store_status_type[] | Prisma.ListEnumstore_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumstore_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.store_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumstore_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumstore_status_typeFilter<$PrismaModel>;
};
export type Enumrole_scope_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.role_scope_type | Prisma.Enumrole_scope_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.role_scope_type[] | Prisma.ListEnumrole_scope_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.role_scope_type[] | Prisma.ListEnumrole_scope_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumrole_scope_typeFilter<$PrismaModel> | $Enums.role_scope_type;
};
export type Enumrole_scope_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role_scope_type | Prisma.Enumrole_scope_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.role_scope_type[] | Prisma.ListEnumrole_scope_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.role_scope_type[] | Prisma.ListEnumrole_scope_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumrole_scope_typeWithAggregatesFilter<$PrismaModel> | $Enums.role_scope_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumrole_scope_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumrole_scope_typeFilter<$PrismaModel>;
};
export type Enumauth_provider_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.auth_provider_type | Prisma.Enumauth_provider_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.auth_provider_type[] | Prisma.ListEnumauth_provider_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.auth_provider_type[] | Prisma.ListEnumauth_provider_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumauth_provider_typeFilter<$PrismaModel> | $Enums.auth_provider_type;
};
export type Enumuser_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.user_status_type | Prisma.Enumuser_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.user_status_type[] | Prisma.ListEnumuser_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.user_status_type[] | Prisma.ListEnumuser_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumuser_status_typeFilter<$PrismaModel> | $Enums.user_status_type;
};
export type Enumauth_provider_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.auth_provider_type | Prisma.Enumauth_provider_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.auth_provider_type[] | Prisma.ListEnumauth_provider_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.auth_provider_type[] | Prisma.ListEnumauth_provider_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumauth_provider_typeWithAggregatesFilter<$PrismaModel> | $Enums.auth_provider_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumauth_provider_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumauth_provider_typeFilter<$PrismaModel>;
};
export type Enumuser_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_status_type | Prisma.Enumuser_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.user_status_type[] | Prisma.ListEnumuser_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.user_status_type[] | Prisma.ListEnumuser_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumuser_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.user_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumuser_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumuser_status_typeFilter<$PrismaModel>;
};
export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidFilter<$PrismaModel> | string;
};
export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidNullableFilter<$PrismaModel> | string | null;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type NestedEnumavailability_mode_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.availability_mode_type | Prisma.Enumavailability_mode_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.availability_mode_type[] | Prisma.ListEnumavailability_mode_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.availability_mode_type[] | Prisma.ListEnumavailability_mode_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumavailability_mode_typeFilter<$PrismaModel> | $Enums.availability_mode_type;
};
export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedEnumavailability_mode_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.availability_mode_type | Prisma.Enumavailability_mode_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.availability_mode_type[] | Prisma.ListEnumavailability_mode_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.availability_mode_type[] | Prisma.ListEnumavailability_mode_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumavailability_mode_typeWithAggregatesFilter<$PrismaModel> | $Enums.availability_mode_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumavailability_mode_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumavailability_mode_typeFilter<$PrismaModel>;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedEnumcart_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.cart_status_type | Prisma.Enumcart_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.cart_status_type[] | Prisma.ListEnumcart_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.cart_status_type[] | Prisma.ListEnumcart_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumcart_status_typeFilter<$PrismaModel> | $Enums.cart_status_type;
};
export type NestedEnumcart_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cart_status_type | Prisma.Enumcart_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.cart_status_type[] | Prisma.ListEnumcart_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.cart_status_type[] | Prisma.ListEnumcart_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumcart_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.cart_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcart_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcart_status_typeFilter<$PrismaModel>;
};
export type NestedEnumitem_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.item_type_enum | Prisma.Enumitem_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.item_type_enum[] | Prisma.ListEnumitem_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.item_type_enum[] | Prisma.ListEnumitem_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumitem_type_enumFilter<$PrismaModel> | $Enums.item_type_enum;
};
export type NestedEnumitem_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.item_type_enum | Prisma.Enumitem_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.item_type_enum[] | Prisma.ListEnumitem_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.item_type_enum[] | Prisma.ListEnumitem_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumitem_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.item_type_enum;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumitem_type_enumFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumitem_type_enumFilter<$PrismaModel>;
};
export type NestedEnumdelivery_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.delivery_status_type | Prisma.Enumdelivery_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.delivery_status_type[] | Prisma.ListEnumdelivery_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.delivery_status_type[] | Prisma.ListEnumdelivery_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumdelivery_status_typeFilter<$PrismaModel> | $Enums.delivery_status_type;
};
export type NestedEnumdelivery_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.delivery_status_type | Prisma.Enumdelivery_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.delivery_status_type[] | Prisma.ListEnumdelivery_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.delivery_status_type[] | Prisma.ListEnumdelivery_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumdelivery_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.delivery_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumdelivery_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumdelivery_status_typeFilter<$PrismaModel>;
};
export type NestedEnumzone_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.zone_type_enum | Prisma.Enumzone_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.zone_type_enum[] | Prisma.ListEnumzone_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.zone_type_enum[] | Prisma.ListEnumzone_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumzone_type_enumFilter<$PrismaModel> | $Enums.zone_type_enum;
};
export type NestedEnumzone_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.zone_type_enum | Prisma.Enumzone_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.zone_type_enum[] | Prisma.ListEnumzone_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.zone_type_enum[] | Prisma.ListEnumzone_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumzone_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.zone_type_enum;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumzone_type_enumFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumzone_type_enumFilter<$PrismaModel>;
};
export type NestedJsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnummerchant_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.merchant_status_type | Prisma.Enummerchant_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.merchant_status_type[] | Prisma.ListEnummerchant_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.merchant_status_type[] | Prisma.ListEnummerchant_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnummerchant_status_typeFilter<$PrismaModel> | $Enums.merchant_status_type;
};
export type NestedEnummerchant_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.merchant_status_type | Prisma.Enummerchant_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.merchant_status_type[] | Prisma.ListEnummerchant_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.merchant_status_type[] | Prisma.ListEnummerchant_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnummerchant_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.merchant_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummerchant_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummerchant_status_typeFilter<$PrismaModel>;
};
export type NestedEnumsettlement_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.settlement_status_type | Prisma.Enumsettlement_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.settlement_status_type[] | Prisma.ListEnumsettlement_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.settlement_status_type[] | Prisma.ListEnumsettlement_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumsettlement_status_typeFilter<$PrismaModel> | $Enums.settlement_status_type;
};
export type NestedEnumsettlement_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.settlement_status_type | Prisma.Enumsettlement_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.settlement_status_type[] | Prisma.ListEnumsettlement_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.settlement_status_type[] | Prisma.ListEnumsettlement_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumsettlement_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.settlement_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumsettlement_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumsettlement_status_typeFilter<$PrismaModel>;
};
export type NestedEnummerchant_user_role_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.merchant_user_role_type | Prisma.Enummerchant_user_role_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.merchant_user_role_type[] | Prisma.ListEnummerchant_user_role_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.merchant_user_role_type[] | Prisma.ListEnummerchant_user_role_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnummerchant_user_role_typeFilter<$PrismaModel> | $Enums.merchant_user_role_type;
};
export type NestedEnummerchant_user_role_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.merchant_user_role_type | Prisma.Enummerchant_user_role_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.merchant_user_role_type[] | Prisma.ListEnummerchant_user_role_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.merchant_user_role_type[] | Prisma.ListEnummerchant_user_role_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnummerchant_user_role_typeWithAggregatesFilter<$PrismaModel> | $Enums.merchant_user_role_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummerchant_user_role_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummerchant_user_role_typeFilter<$PrismaModel>;
};
export type NestedEnumorder_status_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status_type | Prisma.Enumorder_status_typeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.order_status_type[] | Prisma.ListEnumorder_status_typeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.order_status_type[] | Prisma.ListEnumorder_status_typeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumorder_status_typeNullableFilter<$PrismaModel> | $Enums.order_status_type | null;
};
export type NestedEnumorder_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status_type | Prisma.Enumorder_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.order_status_type[] | Prisma.ListEnumorder_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.order_status_type[] | Prisma.ListEnumorder_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumorder_status_typeFilter<$PrismaModel> | $Enums.order_status_type;
};
export type NestedEnumstatus_change_source_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.status_change_source_type | Prisma.Enumstatus_change_source_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.status_change_source_type[] | Prisma.ListEnumstatus_change_source_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.status_change_source_type[] | Prisma.ListEnumstatus_change_source_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumstatus_change_source_typeFilter<$PrismaModel> | $Enums.status_change_source_type;
};
export type NestedEnumorder_status_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status_type | Prisma.Enumorder_status_typeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.order_status_type[] | Prisma.ListEnumorder_status_typeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.order_status_type[] | Prisma.ListEnumorder_status_typeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumorder_status_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.order_status_type | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumorder_status_typeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumorder_status_typeNullableFilter<$PrismaModel>;
};
export type NestedEnumorder_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status_type | Prisma.Enumorder_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.order_status_type[] | Prisma.ListEnumorder_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.order_status_type[] | Prisma.ListEnumorder_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumorder_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.order_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumorder_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumorder_status_typeFilter<$PrismaModel>;
};
export type NestedEnumstatus_change_source_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_change_source_type | Prisma.Enumstatus_change_source_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.status_change_source_type[] | Prisma.ListEnumstatus_change_source_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.status_change_source_type[] | Prisma.ListEnumstatus_change_source_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumstatus_change_source_typeWithAggregatesFilter<$PrismaModel> | $Enums.status_change_source_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumstatus_change_source_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumstatus_change_source_typeFilter<$PrismaModel>;
};
export type NestedEnumsource_channel_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.source_channel_type | Prisma.Enumsource_channel_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.source_channel_type[] | Prisma.ListEnumsource_channel_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.source_channel_type[] | Prisma.ListEnumsource_channel_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumsource_channel_typeFilter<$PrismaModel> | $Enums.source_channel_type;
};
export type NestedEnumorder_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.order_type_enum | Prisma.Enumorder_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.order_type_enum[] | Prisma.ListEnumorder_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.order_type_enum[] | Prisma.ListEnumorder_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumorder_type_enumFilter<$PrismaModel> | $Enums.order_type_enum;
};
export type NestedEnumpayment_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status_type | Prisma.Enumpayment_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.payment_status_type[] | Prisma.ListEnumpayment_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payment_status_type[] | Prisma.ListEnumpayment_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayment_status_typeFilter<$PrismaModel> | $Enums.payment_status_type;
};
export type NestedEnumfulfillment_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.fulfillment_status_type | Prisma.Enumfulfillment_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.fulfillment_status_type[] | Prisma.ListEnumfulfillment_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.fulfillment_status_type[] | Prisma.ListEnumfulfillment_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumfulfillment_status_typeFilter<$PrismaModel> | $Enums.fulfillment_status_type;
};
export type NestedEnumsource_channel_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.source_channel_type | Prisma.Enumsource_channel_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.source_channel_type[] | Prisma.ListEnumsource_channel_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.source_channel_type[] | Prisma.ListEnumsource_channel_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumsource_channel_typeWithAggregatesFilter<$PrismaModel> | $Enums.source_channel_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumsource_channel_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumsource_channel_typeFilter<$PrismaModel>;
};
export type NestedEnumorder_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_type_enum | Prisma.Enumorder_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.order_type_enum[] | Prisma.ListEnumorder_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.order_type_enum[] | Prisma.ListEnumorder_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumorder_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.order_type_enum;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumorder_type_enumFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumorder_type_enumFilter<$PrismaModel>;
};
export type NestedEnumpayment_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status_type | Prisma.Enumpayment_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.payment_status_type[] | Prisma.ListEnumpayment_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payment_status_type[] | Prisma.ListEnumpayment_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayment_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.payment_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpayment_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpayment_status_typeFilter<$PrismaModel>;
};
export type NestedEnumfulfillment_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.fulfillment_status_type | Prisma.Enumfulfillment_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.fulfillment_status_type[] | Prisma.ListEnumfulfillment_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.fulfillment_status_type[] | Prisma.ListEnumfulfillment_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumfulfillment_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.fulfillment_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumfulfillment_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumfulfillment_status_typeFilter<$PrismaModel>;
};
export type NestedEnumotp_channel_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.otp_channel_type | Prisma.Enumotp_channel_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.otp_channel_type[] | Prisma.ListEnumotp_channel_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.otp_channel_type[] | Prisma.ListEnumotp_channel_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumotp_channel_typeFilter<$PrismaModel> | $Enums.otp_channel_type;
};
export type NestedEnumotp_purpose_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.otp_purpose_type | Prisma.Enumotp_purpose_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.otp_purpose_type[] | Prisma.ListEnumotp_purpose_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.otp_purpose_type[] | Prisma.ListEnumotp_purpose_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumotp_purpose_typeFilter<$PrismaModel> | $Enums.otp_purpose_type;
};
export type NestedEnumotp_channel_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.otp_channel_type | Prisma.Enumotp_channel_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.otp_channel_type[] | Prisma.ListEnumotp_channel_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.otp_channel_type[] | Prisma.ListEnumotp_channel_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumotp_channel_typeWithAggregatesFilter<$PrismaModel> | $Enums.otp_channel_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumotp_channel_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumotp_channel_typeFilter<$PrismaModel>;
};
export type NestedEnumotp_purpose_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.otp_purpose_type | Prisma.Enumotp_purpose_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.otp_purpose_type[] | Prisma.ListEnumotp_purpose_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.otp_purpose_type[] | Prisma.ListEnumotp_purpose_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumotp_purpose_typeWithAggregatesFilter<$PrismaModel> | $Enums.otp_purpose_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumotp_purpose_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumotp_purpose_typeFilter<$PrismaModel>;
};
export type NestedEnumpayment_record_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_record_status_type | Prisma.Enumpayment_record_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.payment_record_status_type[] | Prisma.ListEnumpayment_record_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payment_record_status_type[] | Prisma.ListEnumpayment_record_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayment_record_status_typeFilter<$PrismaModel> | $Enums.payment_record_status_type;
};
export type NestedEnumpayment_record_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_record_status_type | Prisma.Enumpayment_record_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.payment_record_status_type[] | Prisma.ListEnumpayment_record_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payment_record_status_type[] | Prisma.ListEnumpayment_record_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayment_record_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.payment_record_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpayment_record_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpayment_record_status_typeFilter<$PrismaModel>;
};
export type NestedEnumdiscount_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.discount_type_enum | Prisma.Enumdiscount_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.discount_type_enum[] | Prisma.ListEnumdiscount_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.discount_type_enum[] | Prisma.ListEnumdiscount_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumdiscount_type_enumFilter<$PrismaModel> | $Enums.discount_type_enum;
};
export type NestedEnumpromotion_applies_to_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.promotion_applies_to_type | Prisma.Enumpromotion_applies_to_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.promotion_applies_to_type[] | Prisma.ListEnumpromotion_applies_to_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.promotion_applies_to_type[] | Prisma.ListEnumpromotion_applies_to_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpromotion_applies_to_typeFilter<$PrismaModel> | $Enums.promotion_applies_to_type;
};
export type NestedEnumdiscount_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.discount_type_enum | Prisma.Enumdiscount_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.discount_type_enum[] | Prisma.ListEnumdiscount_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.discount_type_enum[] | Prisma.ListEnumdiscount_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumdiscount_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.discount_type_enum;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumdiscount_type_enumFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumdiscount_type_enumFilter<$PrismaModel>;
};
export type NestedEnumpromotion_applies_to_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.promotion_applies_to_type | Prisma.Enumpromotion_applies_to_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.promotion_applies_to_type[] | Prisma.ListEnumpromotion_applies_to_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.promotion_applies_to_type[] | Prisma.ListEnumpromotion_applies_to_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpromotion_applies_to_typeWithAggregatesFilter<$PrismaModel> | $Enums.promotion_applies_to_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpromotion_applies_to_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpromotion_applies_to_typeFilter<$PrismaModel>;
};
export type NestedEnumvehicle_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.vehicle_type_enum | Prisma.Enumvehicle_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.vehicle_type_enum[] | Prisma.ListEnumvehicle_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.vehicle_type_enum[] | Prisma.ListEnumvehicle_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumvehicle_type_enumFilter<$PrismaModel> | $Enums.vehicle_type_enum;
};
export type NestedEnumrider_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.rider_status_type | Prisma.Enumrider_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.rider_status_type[] | Prisma.ListEnumrider_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.rider_status_type[] | Prisma.ListEnumrider_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumrider_status_typeFilter<$PrismaModel> | $Enums.rider_status_type;
};
export type NestedEnumvehicle_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.vehicle_type_enum | Prisma.Enumvehicle_type_enumFieldRefInput<$PrismaModel>;
    in?: $Enums.vehicle_type_enum[] | Prisma.ListEnumvehicle_type_enumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.vehicle_type_enum[] | Prisma.ListEnumvehicle_type_enumFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumvehicle_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.vehicle_type_enum;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumvehicle_type_enumFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumvehicle_type_enumFilter<$PrismaModel>;
};
export type NestedEnumrider_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rider_status_type | Prisma.Enumrider_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.rider_status_type[] | Prisma.ListEnumrider_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.rider_status_type[] | Prisma.ListEnumrider_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumrider_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.rider_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumrider_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumrider_status_typeFilter<$PrismaModel>;
};
export type NestedEnumbranch_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.branch_status_type | Prisma.Enumbranch_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.branch_status_type[] | Prisma.ListEnumbranch_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.branch_status_type[] | Prisma.ListEnumbranch_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumbranch_status_typeFilter<$PrismaModel> | $Enums.branch_status_type;
};
export type NestedEnumbranch_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.branch_status_type | Prisma.Enumbranch_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.branch_status_type[] | Prisma.ListEnumbranch_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.branch_status_type[] | Prisma.ListEnumbranch_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumbranch_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.branch_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumbranch_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumbranch_status_typeFilter<$PrismaModel>;
};
export type NestedEnumservice_mode_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.service_mode_type | Prisma.Enumservice_mode_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.service_mode_type[] | Prisma.ListEnumservice_mode_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.service_mode_type[] | Prisma.ListEnumservice_mode_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumservice_mode_typeFilter<$PrismaModel> | $Enums.service_mode_type;
};
export type NestedEnumcatalog_mode_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.catalog_mode_type | Prisma.Enumcatalog_mode_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.catalog_mode_type[] | Prisma.ListEnumcatalog_mode_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.catalog_mode_type[] | Prisma.ListEnumcatalog_mode_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumcatalog_mode_typeFilter<$PrismaModel> | $Enums.catalog_mode_type;
};
export type NestedEnumstore_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.store_status_type | Prisma.Enumstore_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.store_status_type[] | Prisma.ListEnumstore_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.store_status_type[] | Prisma.ListEnumstore_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumstore_status_typeFilter<$PrismaModel> | $Enums.store_status_type;
};
export type NestedEnumservice_mode_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.service_mode_type | Prisma.Enumservice_mode_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.service_mode_type[] | Prisma.ListEnumservice_mode_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.service_mode_type[] | Prisma.ListEnumservice_mode_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumservice_mode_typeWithAggregatesFilter<$PrismaModel> | $Enums.service_mode_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumservice_mode_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumservice_mode_typeFilter<$PrismaModel>;
};
export type NestedEnumcatalog_mode_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.catalog_mode_type | Prisma.Enumcatalog_mode_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.catalog_mode_type[] | Prisma.ListEnumcatalog_mode_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.catalog_mode_type[] | Prisma.ListEnumcatalog_mode_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumcatalog_mode_typeWithAggregatesFilter<$PrismaModel> | $Enums.catalog_mode_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcatalog_mode_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcatalog_mode_typeFilter<$PrismaModel>;
};
export type NestedEnumstore_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.store_status_type | Prisma.Enumstore_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.store_status_type[] | Prisma.ListEnumstore_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.store_status_type[] | Prisma.ListEnumstore_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumstore_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.store_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumstore_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumstore_status_typeFilter<$PrismaModel>;
};
export type NestedEnumrole_scope_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.role_scope_type | Prisma.Enumrole_scope_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.role_scope_type[] | Prisma.ListEnumrole_scope_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.role_scope_type[] | Prisma.ListEnumrole_scope_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumrole_scope_typeFilter<$PrismaModel> | $Enums.role_scope_type;
};
export type NestedEnumrole_scope_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role_scope_type | Prisma.Enumrole_scope_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.role_scope_type[] | Prisma.ListEnumrole_scope_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.role_scope_type[] | Prisma.ListEnumrole_scope_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumrole_scope_typeWithAggregatesFilter<$PrismaModel> | $Enums.role_scope_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumrole_scope_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumrole_scope_typeFilter<$PrismaModel>;
};
export type NestedEnumauth_provider_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.auth_provider_type | Prisma.Enumauth_provider_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.auth_provider_type[] | Prisma.ListEnumauth_provider_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.auth_provider_type[] | Prisma.ListEnumauth_provider_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumauth_provider_typeFilter<$PrismaModel> | $Enums.auth_provider_type;
};
export type NestedEnumuser_status_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.user_status_type | Prisma.Enumuser_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.user_status_type[] | Prisma.ListEnumuser_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.user_status_type[] | Prisma.ListEnumuser_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumuser_status_typeFilter<$PrismaModel> | $Enums.user_status_type;
};
export type NestedEnumauth_provider_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.auth_provider_type | Prisma.Enumauth_provider_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.auth_provider_type[] | Prisma.ListEnumauth_provider_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.auth_provider_type[] | Prisma.ListEnumauth_provider_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumauth_provider_typeWithAggregatesFilter<$PrismaModel> | $Enums.auth_provider_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumauth_provider_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumauth_provider_typeFilter<$PrismaModel>;
};
export type NestedEnumuser_status_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_status_type | Prisma.Enumuser_status_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.user_status_type[] | Prisma.ListEnumuser_status_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.user_status_type[] | Prisma.ListEnumuser_status_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumuser_status_typeWithAggregatesFilter<$PrismaModel> | $Enums.user_status_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumuser_status_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumuser_status_typeFilter<$PrismaModel>;
};
