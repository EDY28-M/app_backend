import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type cartsModel = runtime.Types.Result.DefaultSelection<Prisma.$cartsPayload>;
export type AggregateCarts = {
    _count: CartsCountAggregateOutputType | null;
    _min: CartsMinAggregateOutputType | null;
    _max: CartsMaxAggregateOutputType | null;
};
export type CartsMinAggregateOutputType = {
    id: string | null;
    customer_user_id: string | null;
    store_id: string | null;
    branch_id: string | null;
    status: $Enums.cart_status_type | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CartsMaxAggregateOutputType = {
    id: string | null;
    customer_user_id: string | null;
    store_id: string | null;
    branch_id: string | null;
    status: $Enums.cart_status_type | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CartsCountAggregateOutputType = {
    id: number;
    customer_user_id: number;
    store_id: number;
    branch_id: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type CartsMinAggregateInputType = {
    id?: true;
    customer_user_id?: true;
    store_id?: true;
    branch_id?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type CartsMaxAggregateInputType = {
    id?: true;
    customer_user_id?: true;
    store_id?: true;
    branch_id?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type CartsCountAggregateInputType = {
    id?: true;
    customer_user_id?: true;
    store_id?: true;
    branch_id?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type CartsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cartsWhereInput;
    orderBy?: Prisma.cartsOrderByWithRelationInput | Prisma.cartsOrderByWithRelationInput[];
    cursor?: Prisma.cartsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CartsCountAggregateInputType;
    _min?: CartsMinAggregateInputType;
    _max?: CartsMaxAggregateInputType;
};
export type GetCartsAggregateType<T extends CartsAggregateArgs> = {
    [P in keyof T & keyof AggregateCarts]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCarts[P]> : Prisma.GetScalarType<T[P], AggregateCarts[P]>;
};
export type cartsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cartsWhereInput;
    orderBy?: Prisma.cartsOrderByWithAggregationInput | Prisma.cartsOrderByWithAggregationInput[];
    by: Prisma.CartsScalarFieldEnum[] | Prisma.CartsScalarFieldEnum;
    having?: Prisma.cartsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CartsCountAggregateInputType | true;
    _min?: CartsMinAggregateInputType;
    _max?: CartsMaxAggregateInputType;
};
export type CartsGroupByOutputType = {
    id: string;
    customer_user_id: string;
    store_id: string;
    branch_id: string;
    status: $Enums.cart_status_type;
    created_at: Date;
    updated_at: Date;
    _count: CartsCountAggregateOutputType | null;
    _min: CartsMinAggregateOutputType | null;
    _max: CartsMaxAggregateOutputType | null;
};
type GetCartsGroupByPayload<T extends cartsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CartsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CartsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CartsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CartsGroupByOutputType[P]>;
}>>;
export type cartsWhereInput = {
    AND?: Prisma.cartsWhereInput | Prisma.cartsWhereInput[];
    OR?: Prisma.cartsWhereInput[];
    NOT?: Prisma.cartsWhereInput | Prisma.cartsWhereInput[];
    id?: Prisma.UuidFilter<"carts"> | string;
    customer_user_id?: Prisma.UuidFilter<"carts"> | string;
    store_id?: Prisma.UuidFilter<"carts"> | string;
    branch_id?: Prisma.UuidFilter<"carts"> | string;
    status?: Prisma.Enumcart_status_typeFilter<"carts"> | $Enums.cart_status_type;
    created_at?: Prisma.DateTimeFilter<"carts"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"carts"> | Date | string;
    cart_items?: Prisma.Cart_itemsListRelationFilter;
    store_branches?: Prisma.XOR<Prisma.Store_branchesScalarRelationFilter, Prisma.store_branchesWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    stores?: Prisma.XOR<Prisma.StoresScalarRelationFilter, Prisma.storesWhereInput>;
};
export type cartsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customer_user_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    cart_items?: Prisma.cart_itemsOrderByRelationAggregateInput;
    store_branches?: Prisma.store_branchesOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
    stores?: Prisma.storesOrderByWithRelationInput;
};
export type cartsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.cartsWhereInput | Prisma.cartsWhereInput[];
    OR?: Prisma.cartsWhereInput[];
    NOT?: Prisma.cartsWhereInput | Prisma.cartsWhereInput[];
    customer_user_id?: Prisma.UuidFilter<"carts"> | string;
    store_id?: Prisma.UuidFilter<"carts"> | string;
    branch_id?: Prisma.UuidFilter<"carts"> | string;
    status?: Prisma.Enumcart_status_typeFilter<"carts"> | $Enums.cart_status_type;
    created_at?: Prisma.DateTimeFilter<"carts"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"carts"> | Date | string;
    cart_items?: Prisma.Cart_itemsListRelationFilter;
    store_branches?: Prisma.XOR<Prisma.Store_branchesScalarRelationFilter, Prisma.store_branchesWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    stores?: Prisma.XOR<Prisma.StoresScalarRelationFilter, Prisma.storesWhereInput>;
}, "id">;
export type cartsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customer_user_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.cartsCountOrderByAggregateInput;
    _max?: Prisma.cartsMaxOrderByAggregateInput;
    _min?: Prisma.cartsMinOrderByAggregateInput;
};
export type cartsScalarWhereWithAggregatesInput = {
    AND?: Prisma.cartsScalarWhereWithAggregatesInput | Prisma.cartsScalarWhereWithAggregatesInput[];
    OR?: Prisma.cartsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.cartsScalarWhereWithAggregatesInput | Prisma.cartsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"carts"> | string;
    customer_user_id?: Prisma.UuidWithAggregatesFilter<"carts"> | string;
    store_id?: Prisma.UuidWithAggregatesFilter<"carts"> | string;
    branch_id?: Prisma.UuidWithAggregatesFilter<"carts"> | string;
    status?: Prisma.Enumcart_status_typeWithAggregatesFilter<"carts"> | $Enums.cart_status_type;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"carts"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"carts"> | Date | string;
};
export type cartsCreateInput = {
    id?: string;
    status?: $Enums.cart_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutCartsInput;
    store_branches: Prisma.store_branchesCreateNestedOneWithoutCartsInput;
    users: Prisma.usersCreateNestedOneWithoutCartsInput;
    stores: Prisma.storesCreateNestedOneWithoutCartsInput;
};
export type cartsUncheckedCreateInput = {
    id?: string;
    customer_user_id: string;
    store_id: string;
    branch_id: string;
    status?: $Enums.cart_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutCartsInput;
};
export type cartsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumcart_status_typeFieldUpdateOperationsInput | $Enums.cart_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutCartsNestedInput;
    store_branches?: Prisma.store_branchesUpdateOneRequiredWithoutCartsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCartsNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutCartsNestedInput;
};
export type cartsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumcart_status_typeFieldUpdateOperationsInput | $Enums.cart_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutCartsNestedInput;
};
export type cartsCreateManyInput = {
    id?: string;
    customer_user_id: string;
    store_id: string;
    branch_id: string;
    status?: $Enums.cart_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type cartsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumcart_status_typeFieldUpdateOperationsInput | $Enums.cart_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cartsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumcart_status_typeFieldUpdateOperationsInput | $Enums.cart_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartsScalarRelationFilter = {
    is?: Prisma.cartsWhereInput;
    isNot?: Prisma.cartsWhereInput;
};
export type cartsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_user_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type cartsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_user_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type cartsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_user_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    branch_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type CartsListRelationFilter = {
    every?: Prisma.cartsWhereInput;
    some?: Prisma.cartsWhereInput;
    none?: Prisma.cartsWhereInput;
};
export type cartsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type cartsCreateNestedOneWithoutCart_itemsInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutCart_itemsInput, Prisma.cartsUncheckedCreateWithoutCart_itemsInput>;
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutCart_itemsInput;
    connect?: Prisma.cartsWhereUniqueInput;
};
export type cartsUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutCart_itemsInput, Prisma.cartsUncheckedCreateWithoutCart_itemsInput>;
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutCart_itemsInput;
    upsert?: Prisma.cartsUpsertWithoutCart_itemsInput;
    connect?: Prisma.cartsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cartsUpdateToOneWithWhereWithoutCart_itemsInput, Prisma.cartsUpdateWithoutCart_itemsInput>, Prisma.cartsUncheckedUpdateWithoutCart_itemsInput>;
};
export type Enumcart_status_typeFieldUpdateOperationsInput = {
    set?: $Enums.cart_status_type;
};
export type cartsCreateNestedManyWithoutStore_branchesInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutStore_branchesInput, Prisma.cartsUncheckedCreateWithoutStore_branchesInput> | Prisma.cartsCreateWithoutStore_branchesInput[] | Prisma.cartsUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutStore_branchesInput | Prisma.cartsCreateOrConnectWithoutStore_branchesInput[];
    createMany?: Prisma.cartsCreateManyStore_branchesInputEnvelope;
    connect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
};
export type cartsUncheckedCreateNestedManyWithoutStore_branchesInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutStore_branchesInput, Prisma.cartsUncheckedCreateWithoutStore_branchesInput> | Prisma.cartsCreateWithoutStore_branchesInput[] | Prisma.cartsUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutStore_branchesInput | Prisma.cartsCreateOrConnectWithoutStore_branchesInput[];
    createMany?: Prisma.cartsCreateManyStore_branchesInputEnvelope;
    connect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
};
export type cartsUpdateManyWithoutStore_branchesNestedInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutStore_branchesInput, Prisma.cartsUncheckedCreateWithoutStore_branchesInput> | Prisma.cartsCreateWithoutStore_branchesInput[] | Prisma.cartsUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutStore_branchesInput | Prisma.cartsCreateOrConnectWithoutStore_branchesInput[];
    upsert?: Prisma.cartsUpsertWithWhereUniqueWithoutStore_branchesInput | Prisma.cartsUpsertWithWhereUniqueWithoutStore_branchesInput[];
    createMany?: Prisma.cartsCreateManyStore_branchesInputEnvelope;
    set?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    disconnect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    delete?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    connect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    update?: Prisma.cartsUpdateWithWhereUniqueWithoutStore_branchesInput | Prisma.cartsUpdateWithWhereUniqueWithoutStore_branchesInput[];
    updateMany?: Prisma.cartsUpdateManyWithWhereWithoutStore_branchesInput | Prisma.cartsUpdateManyWithWhereWithoutStore_branchesInput[];
    deleteMany?: Prisma.cartsScalarWhereInput | Prisma.cartsScalarWhereInput[];
};
export type cartsUncheckedUpdateManyWithoutStore_branchesNestedInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutStore_branchesInput, Prisma.cartsUncheckedCreateWithoutStore_branchesInput> | Prisma.cartsCreateWithoutStore_branchesInput[] | Prisma.cartsUncheckedCreateWithoutStore_branchesInput[];
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutStore_branchesInput | Prisma.cartsCreateOrConnectWithoutStore_branchesInput[];
    upsert?: Prisma.cartsUpsertWithWhereUniqueWithoutStore_branchesInput | Prisma.cartsUpsertWithWhereUniqueWithoutStore_branchesInput[];
    createMany?: Prisma.cartsCreateManyStore_branchesInputEnvelope;
    set?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    disconnect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    delete?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    connect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    update?: Prisma.cartsUpdateWithWhereUniqueWithoutStore_branchesInput | Prisma.cartsUpdateWithWhereUniqueWithoutStore_branchesInput[];
    updateMany?: Prisma.cartsUpdateManyWithWhereWithoutStore_branchesInput | Prisma.cartsUpdateManyWithWhereWithoutStore_branchesInput[];
    deleteMany?: Prisma.cartsScalarWhereInput | Prisma.cartsScalarWhereInput[];
};
export type cartsCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutStoresInput, Prisma.cartsUncheckedCreateWithoutStoresInput> | Prisma.cartsCreateWithoutStoresInput[] | Prisma.cartsUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutStoresInput | Prisma.cartsCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.cartsCreateManyStoresInputEnvelope;
    connect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
};
export type cartsUncheckedCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutStoresInput, Prisma.cartsUncheckedCreateWithoutStoresInput> | Prisma.cartsCreateWithoutStoresInput[] | Prisma.cartsUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutStoresInput | Prisma.cartsCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.cartsCreateManyStoresInputEnvelope;
    connect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
};
export type cartsUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutStoresInput, Prisma.cartsUncheckedCreateWithoutStoresInput> | Prisma.cartsCreateWithoutStoresInput[] | Prisma.cartsUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutStoresInput | Prisma.cartsCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.cartsUpsertWithWhereUniqueWithoutStoresInput | Prisma.cartsUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.cartsCreateManyStoresInputEnvelope;
    set?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    disconnect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    delete?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    connect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    update?: Prisma.cartsUpdateWithWhereUniqueWithoutStoresInput | Prisma.cartsUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.cartsUpdateManyWithWhereWithoutStoresInput | Prisma.cartsUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.cartsScalarWhereInput | Prisma.cartsScalarWhereInput[];
};
export type cartsUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutStoresInput, Prisma.cartsUncheckedCreateWithoutStoresInput> | Prisma.cartsCreateWithoutStoresInput[] | Prisma.cartsUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutStoresInput | Prisma.cartsCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.cartsUpsertWithWhereUniqueWithoutStoresInput | Prisma.cartsUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.cartsCreateManyStoresInputEnvelope;
    set?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    disconnect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    delete?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    connect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    update?: Prisma.cartsUpdateWithWhereUniqueWithoutStoresInput | Prisma.cartsUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.cartsUpdateManyWithWhereWithoutStoresInput | Prisma.cartsUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.cartsScalarWhereInput | Prisma.cartsScalarWhereInput[];
};
export type cartsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutUsersInput, Prisma.cartsUncheckedCreateWithoutUsersInput> | Prisma.cartsCreateWithoutUsersInput[] | Prisma.cartsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutUsersInput | Prisma.cartsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.cartsCreateManyUsersInputEnvelope;
    connect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
};
export type cartsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutUsersInput, Prisma.cartsUncheckedCreateWithoutUsersInput> | Prisma.cartsCreateWithoutUsersInput[] | Prisma.cartsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutUsersInput | Prisma.cartsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.cartsCreateManyUsersInputEnvelope;
    connect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
};
export type cartsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutUsersInput, Prisma.cartsUncheckedCreateWithoutUsersInput> | Prisma.cartsCreateWithoutUsersInput[] | Prisma.cartsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutUsersInput | Prisma.cartsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.cartsUpsertWithWhereUniqueWithoutUsersInput | Prisma.cartsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.cartsCreateManyUsersInputEnvelope;
    set?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    disconnect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    delete?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    connect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    update?: Prisma.cartsUpdateWithWhereUniqueWithoutUsersInput | Prisma.cartsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.cartsUpdateManyWithWhereWithoutUsersInput | Prisma.cartsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.cartsScalarWhereInput | Prisma.cartsScalarWhereInput[];
};
export type cartsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.cartsCreateWithoutUsersInput, Prisma.cartsUncheckedCreateWithoutUsersInput> | Prisma.cartsCreateWithoutUsersInput[] | Prisma.cartsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.cartsCreateOrConnectWithoutUsersInput | Prisma.cartsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.cartsUpsertWithWhereUniqueWithoutUsersInput | Prisma.cartsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.cartsCreateManyUsersInputEnvelope;
    set?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    disconnect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    delete?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    connect?: Prisma.cartsWhereUniqueInput | Prisma.cartsWhereUniqueInput[];
    update?: Prisma.cartsUpdateWithWhereUniqueWithoutUsersInput | Prisma.cartsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.cartsUpdateManyWithWhereWithoutUsersInput | Prisma.cartsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.cartsScalarWhereInput | Prisma.cartsScalarWhereInput[];
};
export type cartsCreateWithoutCart_itemsInput = {
    id?: string;
    status?: $Enums.cart_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_branches: Prisma.store_branchesCreateNestedOneWithoutCartsInput;
    users: Prisma.usersCreateNestedOneWithoutCartsInput;
    stores: Prisma.storesCreateNestedOneWithoutCartsInput;
};
export type cartsUncheckedCreateWithoutCart_itemsInput = {
    id?: string;
    customer_user_id: string;
    store_id: string;
    branch_id: string;
    status?: $Enums.cart_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type cartsCreateOrConnectWithoutCart_itemsInput = {
    where: Prisma.cartsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cartsCreateWithoutCart_itemsInput, Prisma.cartsUncheckedCreateWithoutCart_itemsInput>;
};
export type cartsUpsertWithoutCart_itemsInput = {
    update: Prisma.XOR<Prisma.cartsUpdateWithoutCart_itemsInput, Prisma.cartsUncheckedUpdateWithoutCart_itemsInput>;
    create: Prisma.XOR<Prisma.cartsCreateWithoutCart_itemsInput, Prisma.cartsUncheckedCreateWithoutCart_itemsInput>;
    where?: Prisma.cartsWhereInput;
};
export type cartsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: Prisma.cartsWhereInput;
    data: Prisma.XOR<Prisma.cartsUpdateWithoutCart_itemsInput, Prisma.cartsUncheckedUpdateWithoutCart_itemsInput>;
};
export type cartsUpdateWithoutCart_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumcart_status_typeFieldUpdateOperationsInput | $Enums.cart_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_branches?: Prisma.store_branchesUpdateOneRequiredWithoutCartsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCartsNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutCartsNestedInput;
};
export type cartsUncheckedUpdateWithoutCart_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumcart_status_typeFieldUpdateOperationsInput | $Enums.cart_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cartsCreateWithoutStore_branchesInput = {
    id?: string;
    status?: $Enums.cart_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutCartsInput;
    users: Prisma.usersCreateNestedOneWithoutCartsInput;
    stores: Prisma.storesCreateNestedOneWithoutCartsInput;
};
export type cartsUncheckedCreateWithoutStore_branchesInput = {
    id?: string;
    customer_user_id: string;
    store_id: string;
    status?: $Enums.cart_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutCartsInput;
};
export type cartsCreateOrConnectWithoutStore_branchesInput = {
    where: Prisma.cartsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cartsCreateWithoutStore_branchesInput, Prisma.cartsUncheckedCreateWithoutStore_branchesInput>;
};
export type cartsCreateManyStore_branchesInputEnvelope = {
    data: Prisma.cartsCreateManyStore_branchesInput | Prisma.cartsCreateManyStore_branchesInput[];
    skipDuplicates?: boolean;
};
export type cartsUpsertWithWhereUniqueWithoutStore_branchesInput = {
    where: Prisma.cartsWhereUniqueInput;
    update: Prisma.XOR<Prisma.cartsUpdateWithoutStore_branchesInput, Prisma.cartsUncheckedUpdateWithoutStore_branchesInput>;
    create: Prisma.XOR<Prisma.cartsCreateWithoutStore_branchesInput, Prisma.cartsUncheckedCreateWithoutStore_branchesInput>;
};
export type cartsUpdateWithWhereUniqueWithoutStore_branchesInput = {
    where: Prisma.cartsWhereUniqueInput;
    data: Prisma.XOR<Prisma.cartsUpdateWithoutStore_branchesInput, Prisma.cartsUncheckedUpdateWithoutStore_branchesInput>;
};
export type cartsUpdateManyWithWhereWithoutStore_branchesInput = {
    where: Prisma.cartsScalarWhereInput;
    data: Prisma.XOR<Prisma.cartsUpdateManyMutationInput, Prisma.cartsUncheckedUpdateManyWithoutStore_branchesInput>;
};
export type cartsScalarWhereInput = {
    AND?: Prisma.cartsScalarWhereInput | Prisma.cartsScalarWhereInput[];
    OR?: Prisma.cartsScalarWhereInput[];
    NOT?: Prisma.cartsScalarWhereInput | Prisma.cartsScalarWhereInput[];
    id?: Prisma.UuidFilter<"carts"> | string;
    customer_user_id?: Prisma.UuidFilter<"carts"> | string;
    store_id?: Prisma.UuidFilter<"carts"> | string;
    branch_id?: Prisma.UuidFilter<"carts"> | string;
    status?: Prisma.Enumcart_status_typeFilter<"carts"> | $Enums.cart_status_type;
    created_at?: Prisma.DateTimeFilter<"carts"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"carts"> | Date | string;
};
export type cartsCreateWithoutStoresInput = {
    id?: string;
    status?: $Enums.cart_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutCartsInput;
    store_branches: Prisma.store_branchesCreateNestedOneWithoutCartsInput;
    users: Prisma.usersCreateNestedOneWithoutCartsInput;
};
export type cartsUncheckedCreateWithoutStoresInput = {
    id?: string;
    customer_user_id: string;
    branch_id: string;
    status?: $Enums.cart_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutCartsInput;
};
export type cartsCreateOrConnectWithoutStoresInput = {
    where: Prisma.cartsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cartsCreateWithoutStoresInput, Prisma.cartsUncheckedCreateWithoutStoresInput>;
};
export type cartsCreateManyStoresInputEnvelope = {
    data: Prisma.cartsCreateManyStoresInput | Prisma.cartsCreateManyStoresInput[];
    skipDuplicates?: boolean;
};
export type cartsUpsertWithWhereUniqueWithoutStoresInput = {
    where: Prisma.cartsWhereUniqueInput;
    update: Prisma.XOR<Prisma.cartsUpdateWithoutStoresInput, Prisma.cartsUncheckedUpdateWithoutStoresInput>;
    create: Prisma.XOR<Prisma.cartsCreateWithoutStoresInput, Prisma.cartsUncheckedCreateWithoutStoresInput>;
};
export type cartsUpdateWithWhereUniqueWithoutStoresInput = {
    where: Prisma.cartsWhereUniqueInput;
    data: Prisma.XOR<Prisma.cartsUpdateWithoutStoresInput, Prisma.cartsUncheckedUpdateWithoutStoresInput>;
};
export type cartsUpdateManyWithWhereWithoutStoresInput = {
    where: Prisma.cartsScalarWhereInput;
    data: Prisma.XOR<Prisma.cartsUpdateManyMutationInput, Prisma.cartsUncheckedUpdateManyWithoutStoresInput>;
};
export type cartsCreateWithoutUsersInput = {
    id?: string;
    status?: $Enums.cart_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutCartsInput;
    store_branches: Prisma.store_branchesCreateNestedOneWithoutCartsInput;
    stores: Prisma.storesCreateNestedOneWithoutCartsInput;
};
export type cartsUncheckedCreateWithoutUsersInput = {
    id?: string;
    store_id: string;
    branch_id: string;
    status?: $Enums.cart_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutCartsInput;
};
export type cartsCreateOrConnectWithoutUsersInput = {
    where: Prisma.cartsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cartsCreateWithoutUsersInput, Prisma.cartsUncheckedCreateWithoutUsersInput>;
};
export type cartsCreateManyUsersInputEnvelope = {
    data: Prisma.cartsCreateManyUsersInput | Prisma.cartsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type cartsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.cartsWhereUniqueInput;
    update: Prisma.XOR<Prisma.cartsUpdateWithoutUsersInput, Prisma.cartsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.cartsCreateWithoutUsersInput, Prisma.cartsUncheckedCreateWithoutUsersInput>;
};
export type cartsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.cartsWhereUniqueInput;
    data: Prisma.XOR<Prisma.cartsUpdateWithoutUsersInput, Prisma.cartsUncheckedUpdateWithoutUsersInput>;
};
export type cartsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.cartsScalarWhereInput;
    data: Prisma.XOR<Prisma.cartsUpdateManyMutationInput, Prisma.cartsUncheckedUpdateManyWithoutUsersInput>;
};
export type cartsCreateManyStore_branchesInput = {
    id?: string;
    customer_user_id: string;
    store_id: string;
    status?: $Enums.cart_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type cartsUpdateWithoutStore_branchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumcart_status_typeFieldUpdateOperationsInput | $Enums.cart_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutCartsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCartsNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutCartsNestedInput;
};
export type cartsUncheckedUpdateWithoutStore_branchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumcart_status_typeFieldUpdateOperationsInput | $Enums.cart_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutCartsNestedInput;
};
export type cartsUncheckedUpdateManyWithoutStore_branchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumcart_status_typeFieldUpdateOperationsInput | $Enums.cart_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cartsCreateManyStoresInput = {
    id?: string;
    customer_user_id: string;
    branch_id: string;
    status?: $Enums.cart_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type cartsUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumcart_status_typeFieldUpdateOperationsInput | $Enums.cart_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutCartsNestedInput;
    store_branches?: Prisma.store_branchesUpdateOneRequiredWithoutCartsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCartsNestedInput;
};
export type cartsUncheckedUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumcart_status_typeFieldUpdateOperationsInput | $Enums.cart_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutCartsNestedInput;
};
export type cartsUncheckedUpdateManyWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumcart_status_typeFieldUpdateOperationsInput | $Enums.cart_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cartsCreateManyUsersInput = {
    id?: string;
    store_id: string;
    branch_id: string;
    status?: $Enums.cart_status_type;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type cartsUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumcart_status_typeFieldUpdateOperationsInput | $Enums.cart_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutCartsNestedInput;
    store_branches?: Prisma.store_branchesUpdateOneRequiredWithoutCartsNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutCartsNestedInput;
};
export type cartsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumcart_status_typeFieldUpdateOperationsInput | $Enums.cart_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutCartsNestedInput;
};
export type cartsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    branch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumcart_status_typeFieldUpdateOperationsInput | $Enums.cart_status_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartsCountOutputType = {
    cart_items: number;
};
export type CartsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cart_items?: boolean | CartsCountOutputTypeCountCart_itemsArgs;
};
export type CartsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartsCountOutputTypeSelect<ExtArgs> | null;
};
export type CartsCountOutputTypeCountCart_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cart_itemsWhereInput;
};
export type cartsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_user_id?: boolean;
    store_id?: boolean;
    branch_id?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    cart_items?: boolean | Prisma.carts$cart_itemsArgs<ExtArgs>;
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.CartsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["carts"]>;
export type cartsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_user_id?: boolean;
    store_id?: boolean;
    branch_id?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["carts"]>;
export type cartsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_user_id?: boolean;
    store_id?: boolean;
    branch_id?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["carts"]>;
export type cartsSelectScalar = {
    id?: boolean;
    customer_user_id?: boolean;
    store_id?: boolean;
    branch_id?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type cartsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customer_user_id" | "store_id" | "branch_id" | "status" | "created_at" | "updated_at", ExtArgs["result"]["carts"]>;
export type cartsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cart_items?: boolean | Prisma.carts$cart_itemsArgs<ExtArgs>;
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.CartsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type cartsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
};
export type cartsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_branches?: boolean | Prisma.store_branchesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
};
export type $cartsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "carts";
    objects: {
        cart_items: Prisma.$cart_itemsPayload<ExtArgs>[];
        store_branches: Prisma.$store_branchesPayload<ExtArgs>;
        users: Prisma.$usersPayload<ExtArgs>;
        stores: Prisma.$storesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customer_user_id: string;
        store_id: string;
        branch_id: string;
        status: $Enums.cart_status_type;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["carts"]>;
    composites: {};
};
export type cartsGetPayload<S extends boolean | null | undefined | cartsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$cartsPayload, S>;
export type cartsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<cartsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CartsCountAggregateInputType | true;
};
export interface cartsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['carts'];
        meta: {
            name: 'carts';
        };
    };
    findUnique<T extends cartsFindUniqueArgs>(args: Prisma.SelectSubset<T, cartsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__cartsClient<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends cartsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, cartsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__cartsClient<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends cartsFindFirstArgs>(args?: Prisma.SelectSubset<T, cartsFindFirstArgs<ExtArgs>>): Prisma.Prisma__cartsClient<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends cartsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, cartsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__cartsClient<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends cartsFindManyArgs>(args?: Prisma.SelectSubset<T, cartsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends cartsCreateArgs>(args: Prisma.SelectSubset<T, cartsCreateArgs<ExtArgs>>): Prisma.Prisma__cartsClient<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends cartsCreateManyArgs>(args?: Prisma.SelectSubset<T, cartsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends cartsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, cartsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends cartsDeleteArgs>(args: Prisma.SelectSubset<T, cartsDeleteArgs<ExtArgs>>): Prisma.Prisma__cartsClient<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends cartsUpdateArgs>(args: Prisma.SelectSubset<T, cartsUpdateArgs<ExtArgs>>): Prisma.Prisma__cartsClient<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends cartsDeleteManyArgs>(args?: Prisma.SelectSubset<T, cartsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends cartsUpdateManyArgs>(args: Prisma.SelectSubset<T, cartsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends cartsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, cartsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends cartsUpsertArgs>(args: Prisma.SelectSubset<T, cartsUpsertArgs<ExtArgs>>): Prisma.Prisma__cartsClient<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends cartsCountArgs>(args?: Prisma.Subset<T, cartsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CartsCountAggregateOutputType> : number>;
    aggregate<T extends CartsAggregateArgs>(args: Prisma.Subset<T, CartsAggregateArgs>): Prisma.PrismaPromise<GetCartsAggregateType<T>>;
    groupBy<T extends cartsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: cartsGroupByArgs['orderBy'];
    } : {
        orderBy?: cartsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, cartsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: cartsFieldRefs;
}
export interface Prisma__cartsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cart_items<T extends Prisma.carts$cart_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.carts$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    store_branches<T extends Prisma.store_branchesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_branchesDefaultArgs<ExtArgs>>): Prisma.Prisma__store_branchesClient<runtime.Types.Result.GetResult<Prisma.$store_branchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    stores<T extends Prisma.storesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.storesDefaultArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface cartsFieldRefs {
    readonly id: Prisma.FieldRef<"carts", 'String'>;
    readonly customer_user_id: Prisma.FieldRef<"carts", 'String'>;
    readonly store_id: Prisma.FieldRef<"carts", 'String'>;
    readonly branch_id: Prisma.FieldRef<"carts", 'String'>;
    readonly status: Prisma.FieldRef<"carts", 'cart_status_type'>;
    readonly created_at: Prisma.FieldRef<"carts", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"carts", 'DateTime'>;
}
export type cartsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    where: Prisma.cartsWhereUniqueInput;
};
export type cartsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    where: Prisma.cartsWhereUniqueInput;
};
export type cartsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    where?: Prisma.cartsWhereInput;
    orderBy?: Prisma.cartsOrderByWithRelationInput | Prisma.cartsOrderByWithRelationInput[];
    cursor?: Prisma.cartsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartsScalarFieldEnum | Prisma.CartsScalarFieldEnum[];
};
export type cartsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    where?: Prisma.cartsWhereInput;
    orderBy?: Prisma.cartsOrderByWithRelationInput | Prisma.cartsOrderByWithRelationInput[];
    cursor?: Prisma.cartsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartsScalarFieldEnum | Prisma.CartsScalarFieldEnum[];
};
export type cartsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    where?: Prisma.cartsWhereInput;
    orderBy?: Prisma.cartsOrderByWithRelationInput | Prisma.cartsOrderByWithRelationInput[];
    cursor?: Prisma.cartsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartsScalarFieldEnum | Prisma.CartsScalarFieldEnum[];
};
export type cartsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cartsCreateInput, Prisma.cartsUncheckedCreateInput>;
};
export type cartsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.cartsCreateManyInput | Prisma.cartsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type cartsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    data: Prisma.cartsCreateManyInput | Prisma.cartsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.cartsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type cartsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cartsUpdateInput, Prisma.cartsUncheckedUpdateInput>;
    where: Prisma.cartsWhereUniqueInput;
};
export type cartsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.cartsUpdateManyMutationInput, Prisma.cartsUncheckedUpdateManyInput>;
    where?: Prisma.cartsWhereInput;
    limit?: number;
};
export type cartsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cartsUpdateManyMutationInput, Prisma.cartsUncheckedUpdateManyInput>;
    where?: Prisma.cartsWhereInput;
    limit?: number;
    include?: Prisma.cartsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type cartsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    where: Prisma.cartsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cartsCreateInput, Prisma.cartsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.cartsUpdateInput, Prisma.cartsUncheckedUpdateInput>;
};
export type cartsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    where: Prisma.cartsWhereUniqueInput;
};
export type cartsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cartsWhereInput;
    limit?: number;
};
export type carts$cart_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type cartsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
};
export {};
