import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly addresses: "addresses";
    readonly branch_catalog_items: "branch_catalog_items";
    readonly branch_item_schedules: "branch_item_schedules";
    readonly branch_operating_hours: "branch_operating_hours";
    readonly business_categories: "business_categories";
    readonly cart_item_modifiers: "cart_item_modifiers";
    readonly cart_items: "cart_items";
    readonly carts: "carts";
    readonly catalog_categories: "catalog_categories";
    readonly catalog_item_modifier_groups: "catalog_item_modifier_groups";
    readonly catalog_item_variants: "catalog_item_variants";
    readonly catalog_items: "catalog_items";
    readonly combo_items: "combo_items";
    readonly customer_profiles: "customer_profiles";
    readonly deliveries: "deliveries";
    readonly delivery_zones: "delivery_zones";
    readonly merchant_profiles: "merchant_profiles";
    readonly merchant_settlements: "merchant_settlements";
    readonly merchant_users: "merchant_users";
    readonly modifier_groups: "modifier_groups";
    readonly modifier_options: "modifier_options";
    readonly order_item_modifiers: "order_item_modifiers";
    readonly order_items: "order_items";
    readonly order_status_history: "order_status_history";
    readonly orders: "orders";
    readonly otp_verifications: "otp_verifications";
    readonly payment_methods: "payment_methods";
    readonly payments: "payments";
    readonly promotions: "promotions";
    readonly rider_locations: "rider_locations";
    readonly rider_profiles: "rider_profiles";
    readonly rider_settlements: "rider_settlements";
    readonly roles: "roles";
    readonly store_branches: "store_branches";
    readonly stores: "stores";
    readonly user_roles: "user_roles";
    readonly user_sessions: "user_sessions";
    readonly users: "users";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "addresses" | "branch_catalog_items" | "branch_item_schedules" | "branch_operating_hours" | "business_categories" | "cart_item_modifiers" | "cart_items" | "carts" | "catalog_categories" | "catalog_item_modifier_groups" | "catalog_item_variants" | "catalog_items" | "combo_items" | "customer_profiles" | "deliveries" | "delivery_zones" | "merchant_profiles" | "merchant_settlements" | "merchant_users" | "modifier_groups" | "modifier_options" | "order_item_modifiers" | "order_items" | "order_status_history" | "orders" | "otp_verifications" | "payment_methods" | "payments" | "promotions" | "rider_locations" | "rider_profiles" | "rider_settlements" | "roles" | "store_branches" | "stores" | "user_roles" | "user_sessions" | "users";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        addresses: {
            payload: Prisma.$addressesPayload<ExtArgs>;
            fields: Prisma.addressesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.addressesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.addressesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload>;
                };
                findFirst: {
                    args: Prisma.addressesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.addressesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload>;
                };
                findMany: {
                    args: Prisma.addressesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload>[];
                };
                create: {
                    args: Prisma.addressesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload>;
                };
                createMany: {
                    args: Prisma.addressesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.addressesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload>[];
                };
                delete: {
                    args: Prisma.addressesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload>;
                };
                update: {
                    args: Prisma.addressesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload>;
                };
                deleteMany: {
                    args: Prisma.addressesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.addressesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.addressesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload>[];
                };
                upsert: {
                    args: Prisma.addressesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload>;
                };
                aggregate: {
                    args: Prisma.AddressesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAddresses>;
                };
                groupBy: {
                    args: Prisma.addressesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AddressesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.addressesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AddressesCountAggregateOutputType> | number;
                };
            };
        };
        branch_catalog_items: {
            payload: Prisma.$branch_catalog_itemsPayload<ExtArgs>;
            fields: Prisma.branch_catalog_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.branch_catalog_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_catalog_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.branch_catalog_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_catalog_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.branch_catalog_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_catalog_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.branch_catalog_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_catalog_itemsPayload>;
                };
                findMany: {
                    args: Prisma.branch_catalog_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_catalog_itemsPayload>[];
                };
                create: {
                    args: Prisma.branch_catalog_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_catalog_itemsPayload>;
                };
                createMany: {
                    args: Prisma.branch_catalog_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.branch_catalog_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_catalog_itemsPayload>[];
                };
                delete: {
                    args: Prisma.branch_catalog_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_catalog_itemsPayload>;
                };
                update: {
                    args: Prisma.branch_catalog_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_catalog_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.branch_catalog_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.branch_catalog_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.branch_catalog_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_catalog_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.branch_catalog_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_catalog_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Branch_catalog_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBranch_catalog_items>;
                };
                groupBy: {
                    args: Prisma.branch_catalog_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Branch_catalog_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.branch_catalog_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Branch_catalog_itemsCountAggregateOutputType> | number;
                };
            };
        };
        branch_item_schedules: {
            payload: Prisma.$branch_item_schedulesPayload<ExtArgs>;
            fields: Prisma.branch_item_schedulesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.branch_item_schedulesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_item_schedulesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.branch_item_schedulesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_item_schedulesPayload>;
                };
                findFirst: {
                    args: Prisma.branch_item_schedulesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_item_schedulesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.branch_item_schedulesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_item_schedulesPayload>;
                };
                findMany: {
                    args: Prisma.branch_item_schedulesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_item_schedulesPayload>[];
                };
                create: {
                    args: Prisma.branch_item_schedulesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_item_schedulesPayload>;
                };
                createMany: {
                    args: Prisma.branch_item_schedulesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.branch_item_schedulesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_item_schedulesPayload>[];
                };
                delete: {
                    args: Prisma.branch_item_schedulesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_item_schedulesPayload>;
                };
                update: {
                    args: Prisma.branch_item_schedulesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_item_schedulesPayload>;
                };
                deleteMany: {
                    args: Prisma.branch_item_schedulesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.branch_item_schedulesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.branch_item_schedulesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_item_schedulesPayload>[];
                };
                upsert: {
                    args: Prisma.branch_item_schedulesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_item_schedulesPayload>;
                };
                aggregate: {
                    args: Prisma.Branch_item_schedulesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBranch_item_schedules>;
                };
                groupBy: {
                    args: Prisma.branch_item_schedulesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Branch_item_schedulesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.branch_item_schedulesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Branch_item_schedulesCountAggregateOutputType> | number;
                };
            };
        };
        branch_operating_hours: {
            payload: Prisma.$branch_operating_hoursPayload<ExtArgs>;
            fields: Prisma.branch_operating_hoursFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.branch_operating_hoursFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_operating_hoursPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.branch_operating_hoursFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_operating_hoursPayload>;
                };
                findFirst: {
                    args: Prisma.branch_operating_hoursFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_operating_hoursPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.branch_operating_hoursFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_operating_hoursPayload>;
                };
                findMany: {
                    args: Prisma.branch_operating_hoursFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_operating_hoursPayload>[];
                };
                create: {
                    args: Prisma.branch_operating_hoursCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_operating_hoursPayload>;
                };
                createMany: {
                    args: Prisma.branch_operating_hoursCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.branch_operating_hoursCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_operating_hoursPayload>[];
                };
                delete: {
                    args: Prisma.branch_operating_hoursDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_operating_hoursPayload>;
                };
                update: {
                    args: Prisma.branch_operating_hoursUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_operating_hoursPayload>;
                };
                deleteMany: {
                    args: Prisma.branch_operating_hoursDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.branch_operating_hoursUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.branch_operating_hoursUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_operating_hoursPayload>[];
                };
                upsert: {
                    args: Prisma.branch_operating_hoursUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$branch_operating_hoursPayload>;
                };
                aggregate: {
                    args: Prisma.Branch_operating_hoursAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBranch_operating_hours>;
                };
                groupBy: {
                    args: Prisma.branch_operating_hoursGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Branch_operating_hoursGroupByOutputType>[];
                };
                count: {
                    args: Prisma.branch_operating_hoursCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Branch_operating_hoursCountAggregateOutputType> | number;
                };
            };
        };
        business_categories: {
            payload: Prisma.$business_categoriesPayload<ExtArgs>;
            fields: Prisma.business_categoriesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.business_categoriesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$business_categoriesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.business_categoriesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$business_categoriesPayload>;
                };
                findFirst: {
                    args: Prisma.business_categoriesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$business_categoriesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.business_categoriesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$business_categoriesPayload>;
                };
                findMany: {
                    args: Prisma.business_categoriesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$business_categoriesPayload>[];
                };
                create: {
                    args: Prisma.business_categoriesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$business_categoriesPayload>;
                };
                createMany: {
                    args: Prisma.business_categoriesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.business_categoriesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$business_categoriesPayload>[];
                };
                delete: {
                    args: Prisma.business_categoriesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$business_categoriesPayload>;
                };
                update: {
                    args: Prisma.business_categoriesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$business_categoriesPayload>;
                };
                deleteMany: {
                    args: Prisma.business_categoriesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.business_categoriesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.business_categoriesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$business_categoriesPayload>[];
                };
                upsert: {
                    args: Prisma.business_categoriesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$business_categoriesPayload>;
                };
                aggregate: {
                    args: Prisma.Business_categoriesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBusiness_categories>;
                };
                groupBy: {
                    args: Prisma.business_categoriesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Business_categoriesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.business_categoriesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Business_categoriesCountAggregateOutputType> | number;
                };
            };
        };
        cart_item_modifiers: {
            payload: Prisma.$cart_item_modifiersPayload<ExtArgs>;
            fields: Prisma.cart_item_modifiersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.cart_item_modifiersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_item_modifiersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.cart_item_modifiersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_item_modifiersPayload>;
                };
                findFirst: {
                    args: Prisma.cart_item_modifiersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_item_modifiersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.cart_item_modifiersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_item_modifiersPayload>;
                };
                findMany: {
                    args: Prisma.cart_item_modifiersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_item_modifiersPayload>[];
                };
                create: {
                    args: Prisma.cart_item_modifiersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_item_modifiersPayload>;
                };
                createMany: {
                    args: Prisma.cart_item_modifiersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.cart_item_modifiersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_item_modifiersPayload>[];
                };
                delete: {
                    args: Prisma.cart_item_modifiersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_item_modifiersPayload>;
                };
                update: {
                    args: Prisma.cart_item_modifiersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_item_modifiersPayload>;
                };
                deleteMany: {
                    args: Prisma.cart_item_modifiersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.cart_item_modifiersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.cart_item_modifiersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_item_modifiersPayload>[];
                };
                upsert: {
                    args: Prisma.cart_item_modifiersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_item_modifiersPayload>;
                };
                aggregate: {
                    args: Prisma.Cart_item_modifiersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCart_item_modifiers>;
                };
                groupBy: {
                    args: Prisma.cart_item_modifiersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Cart_item_modifiersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.cart_item_modifiersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Cart_item_modifiersCountAggregateOutputType> | number;
                };
            };
        };
        cart_items: {
            payload: Prisma.$cart_itemsPayload<ExtArgs>;
            fields: Prisma.cart_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.cart_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.cart_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.cart_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.cart_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload>;
                };
                findMany: {
                    args: Prisma.cart_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload>[];
                };
                create: {
                    args: Prisma.cart_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload>;
                };
                createMany: {
                    args: Prisma.cart_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.cart_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload>[];
                };
                delete: {
                    args: Prisma.cart_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload>;
                };
                update: {
                    args: Prisma.cart_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.cart_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.cart_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.cart_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.cart_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Cart_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCart_items>;
                };
                groupBy: {
                    args: Prisma.cart_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Cart_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.cart_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Cart_itemsCountAggregateOutputType> | number;
                };
            };
        };
        carts: {
            payload: Prisma.$cartsPayload<ExtArgs>;
            fields: Prisma.cartsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.cartsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.cartsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload>;
                };
                findFirst: {
                    args: Prisma.cartsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.cartsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload>;
                };
                findMany: {
                    args: Prisma.cartsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload>[];
                };
                create: {
                    args: Prisma.cartsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload>;
                };
                createMany: {
                    args: Prisma.cartsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.cartsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload>[];
                };
                delete: {
                    args: Prisma.cartsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload>;
                };
                update: {
                    args: Prisma.cartsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload>;
                };
                deleteMany: {
                    args: Prisma.cartsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.cartsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.cartsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload>[];
                };
                upsert: {
                    args: Prisma.cartsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload>;
                };
                aggregate: {
                    args: Prisma.CartsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCarts>;
                };
                groupBy: {
                    args: Prisma.cartsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.cartsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartsCountAggregateOutputType> | number;
                };
            };
        };
        catalog_categories: {
            payload: Prisma.$catalog_categoriesPayload<ExtArgs>;
            fields: Prisma.catalog_categoriesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.catalog_categoriesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_categoriesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.catalog_categoriesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_categoriesPayload>;
                };
                findFirst: {
                    args: Prisma.catalog_categoriesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_categoriesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.catalog_categoriesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_categoriesPayload>;
                };
                findMany: {
                    args: Prisma.catalog_categoriesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_categoriesPayload>[];
                };
                create: {
                    args: Prisma.catalog_categoriesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_categoriesPayload>;
                };
                createMany: {
                    args: Prisma.catalog_categoriesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.catalog_categoriesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_categoriesPayload>[];
                };
                delete: {
                    args: Prisma.catalog_categoriesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_categoriesPayload>;
                };
                update: {
                    args: Prisma.catalog_categoriesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_categoriesPayload>;
                };
                deleteMany: {
                    args: Prisma.catalog_categoriesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.catalog_categoriesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.catalog_categoriesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_categoriesPayload>[];
                };
                upsert: {
                    args: Prisma.catalog_categoriesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_categoriesPayload>;
                };
                aggregate: {
                    args: Prisma.Catalog_categoriesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCatalog_categories>;
                };
                groupBy: {
                    args: Prisma.catalog_categoriesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Catalog_categoriesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.catalog_categoriesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Catalog_categoriesCountAggregateOutputType> | number;
                };
            };
        };
        catalog_item_modifier_groups: {
            payload: Prisma.$catalog_item_modifier_groupsPayload<ExtArgs>;
            fields: Prisma.catalog_item_modifier_groupsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.catalog_item_modifier_groupsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_modifier_groupsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.catalog_item_modifier_groupsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_modifier_groupsPayload>;
                };
                findFirst: {
                    args: Prisma.catalog_item_modifier_groupsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_modifier_groupsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.catalog_item_modifier_groupsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_modifier_groupsPayload>;
                };
                findMany: {
                    args: Prisma.catalog_item_modifier_groupsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_modifier_groupsPayload>[];
                };
                create: {
                    args: Prisma.catalog_item_modifier_groupsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_modifier_groupsPayload>;
                };
                createMany: {
                    args: Prisma.catalog_item_modifier_groupsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.catalog_item_modifier_groupsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_modifier_groupsPayload>[];
                };
                delete: {
                    args: Prisma.catalog_item_modifier_groupsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_modifier_groupsPayload>;
                };
                update: {
                    args: Prisma.catalog_item_modifier_groupsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_modifier_groupsPayload>;
                };
                deleteMany: {
                    args: Prisma.catalog_item_modifier_groupsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.catalog_item_modifier_groupsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.catalog_item_modifier_groupsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_modifier_groupsPayload>[];
                };
                upsert: {
                    args: Prisma.catalog_item_modifier_groupsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_modifier_groupsPayload>;
                };
                aggregate: {
                    args: Prisma.Catalog_item_modifier_groupsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCatalog_item_modifier_groups>;
                };
                groupBy: {
                    args: Prisma.catalog_item_modifier_groupsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Catalog_item_modifier_groupsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.catalog_item_modifier_groupsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Catalog_item_modifier_groupsCountAggregateOutputType> | number;
                };
            };
        };
        catalog_item_variants: {
            payload: Prisma.$catalog_item_variantsPayload<ExtArgs>;
            fields: Prisma.catalog_item_variantsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.catalog_item_variantsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_variantsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.catalog_item_variantsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_variantsPayload>;
                };
                findFirst: {
                    args: Prisma.catalog_item_variantsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_variantsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.catalog_item_variantsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_variantsPayload>;
                };
                findMany: {
                    args: Prisma.catalog_item_variantsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_variantsPayload>[];
                };
                create: {
                    args: Prisma.catalog_item_variantsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_variantsPayload>;
                };
                createMany: {
                    args: Prisma.catalog_item_variantsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.catalog_item_variantsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_variantsPayload>[];
                };
                delete: {
                    args: Prisma.catalog_item_variantsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_variantsPayload>;
                };
                update: {
                    args: Prisma.catalog_item_variantsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_variantsPayload>;
                };
                deleteMany: {
                    args: Prisma.catalog_item_variantsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.catalog_item_variantsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.catalog_item_variantsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_variantsPayload>[];
                };
                upsert: {
                    args: Prisma.catalog_item_variantsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_item_variantsPayload>;
                };
                aggregate: {
                    args: Prisma.Catalog_item_variantsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCatalog_item_variants>;
                };
                groupBy: {
                    args: Prisma.catalog_item_variantsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Catalog_item_variantsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.catalog_item_variantsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Catalog_item_variantsCountAggregateOutputType> | number;
                };
            };
        };
        catalog_items: {
            payload: Prisma.$catalog_itemsPayload<ExtArgs>;
            fields: Prisma.catalog_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.catalog_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.catalog_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.catalog_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.catalog_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_itemsPayload>;
                };
                findMany: {
                    args: Prisma.catalog_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_itemsPayload>[];
                };
                create: {
                    args: Prisma.catalog_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_itemsPayload>;
                };
                createMany: {
                    args: Prisma.catalog_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.catalog_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_itemsPayload>[];
                };
                delete: {
                    args: Prisma.catalog_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_itemsPayload>;
                };
                update: {
                    args: Prisma.catalog_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.catalog_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.catalog_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.catalog_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.catalog_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$catalog_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Catalog_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCatalog_items>;
                };
                groupBy: {
                    args: Prisma.catalog_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Catalog_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.catalog_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Catalog_itemsCountAggregateOutputType> | number;
                };
            };
        };
        combo_items: {
            payload: Prisma.$combo_itemsPayload<ExtArgs>;
            fields: Prisma.combo_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.combo_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$combo_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.combo_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$combo_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.combo_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$combo_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.combo_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$combo_itemsPayload>;
                };
                findMany: {
                    args: Prisma.combo_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$combo_itemsPayload>[];
                };
                create: {
                    args: Prisma.combo_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$combo_itemsPayload>;
                };
                createMany: {
                    args: Prisma.combo_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.combo_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$combo_itemsPayload>[];
                };
                delete: {
                    args: Prisma.combo_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$combo_itemsPayload>;
                };
                update: {
                    args: Prisma.combo_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$combo_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.combo_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.combo_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.combo_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$combo_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.combo_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$combo_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Combo_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCombo_items>;
                };
                groupBy: {
                    args: Prisma.combo_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Combo_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.combo_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Combo_itemsCountAggregateOutputType> | number;
                };
            };
        };
        customer_profiles: {
            payload: Prisma.$customer_profilesPayload<ExtArgs>;
            fields: Prisma.customer_profilesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.customer_profilesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_profilesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.customer_profilesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_profilesPayload>;
                };
                findFirst: {
                    args: Prisma.customer_profilesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_profilesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.customer_profilesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_profilesPayload>;
                };
                findMany: {
                    args: Prisma.customer_profilesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_profilesPayload>[];
                };
                create: {
                    args: Prisma.customer_profilesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_profilesPayload>;
                };
                createMany: {
                    args: Prisma.customer_profilesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.customer_profilesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_profilesPayload>[];
                };
                delete: {
                    args: Prisma.customer_profilesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_profilesPayload>;
                };
                update: {
                    args: Prisma.customer_profilesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_profilesPayload>;
                };
                deleteMany: {
                    args: Prisma.customer_profilesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.customer_profilesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.customer_profilesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_profilesPayload>[];
                };
                upsert: {
                    args: Prisma.customer_profilesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_profilesPayload>;
                };
                aggregate: {
                    args: Prisma.Customer_profilesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomer_profiles>;
                };
                groupBy: {
                    args: Prisma.customer_profilesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Customer_profilesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.customer_profilesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Customer_profilesCountAggregateOutputType> | number;
                };
            };
        };
        deliveries: {
            payload: Prisma.$deliveriesPayload<ExtArgs>;
            fields: Prisma.deliveriesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.deliveriesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$deliveriesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.deliveriesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$deliveriesPayload>;
                };
                findFirst: {
                    args: Prisma.deliveriesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$deliveriesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.deliveriesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$deliveriesPayload>;
                };
                findMany: {
                    args: Prisma.deliveriesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$deliveriesPayload>[];
                };
                create: {
                    args: Prisma.deliveriesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$deliveriesPayload>;
                };
                createMany: {
                    args: Prisma.deliveriesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.deliveriesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$deliveriesPayload>[];
                };
                delete: {
                    args: Prisma.deliveriesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$deliveriesPayload>;
                };
                update: {
                    args: Prisma.deliveriesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$deliveriesPayload>;
                };
                deleteMany: {
                    args: Prisma.deliveriesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.deliveriesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.deliveriesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$deliveriesPayload>[];
                };
                upsert: {
                    args: Prisma.deliveriesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$deliveriesPayload>;
                };
                aggregate: {
                    args: Prisma.DeliveriesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeliveries>;
                };
                groupBy: {
                    args: Prisma.deliveriesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeliveriesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.deliveriesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeliveriesCountAggregateOutputType> | number;
                };
            };
        };
        delivery_zones: {
            payload: Prisma.$delivery_zonesPayload<ExtArgs>;
            fields: Prisma.delivery_zonesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.delivery_zonesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$delivery_zonesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.delivery_zonesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$delivery_zonesPayload>;
                };
                findFirst: {
                    args: Prisma.delivery_zonesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$delivery_zonesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.delivery_zonesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$delivery_zonesPayload>;
                };
                findMany: {
                    args: Prisma.delivery_zonesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$delivery_zonesPayload>[];
                };
                create: {
                    args: Prisma.delivery_zonesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$delivery_zonesPayload>;
                };
                createMany: {
                    args: Prisma.delivery_zonesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.delivery_zonesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$delivery_zonesPayload>[];
                };
                delete: {
                    args: Prisma.delivery_zonesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$delivery_zonesPayload>;
                };
                update: {
                    args: Prisma.delivery_zonesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$delivery_zonesPayload>;
                };
                deleteMany: {
                    args: Prisma.delivery_zonesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.delivery_zonesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.delivery_zonesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$delivery_zonesPayload>[];
                };
                upsert: {
                    args: Prisma.delivery_zonesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$delivery_zonesPayload>;
                };
                aggregate: {
                    args: Prisma.Delivery_zonesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDelivery_zones>;
                };
                groupBy: {
                    args: Prisma.delivery_zonesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Delivery_zonesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.delivery_zonesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Delivery_zonesCountAggregateOutputType> | number;
                };
            };
        };
        merchant_profiles: {
            payload: Prisma.$merchant_profilesPayload<ExtArgs>;
            fields: Prisma.merchant_profilesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.merchant_profilesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_profilesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.merchant_profilesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_profilesPayload>;
                };
                findFirst: {
                    args: Prisma.merchant_profilesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_profilesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.merchant_profilesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_profilesPayload>;
                };
                findMany: {
                    args: Prisma.merchant_profilesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_profilesPayload>[];
                };
                create: {
                    args: Prisma.merchant_profilesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_profilesPayload>;
                };
                createMany: {
                    args: Prisma.merchant_profilesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.merchant_profilesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_profilesPayload>[];
                };
                delete: {
                    args: Prisma.merchant_profilesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_profilesPayload>;
                };
                update: {
                    args: Prisma.merchant_profilesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_profilesPayload>;
                };
                deleteMany: {
                    args: Prisma.merchant_profilesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.merchant_profilesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.merchant_profilesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_profilesPayload>[];
                };
                upsert: {
                    args: Prisma.merchant_profilesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_profilesPayload>;
                };
                aggregate: {
                    args: Prisma.Merchant_profilesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMerchant_profiles>;
                };
                groupBy: {
                    args: Prisma.merchant_profilesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Merchant_profilesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.merchant_profilesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Merchant_profilesCountAggregateOutputType> | number;
                };
            };
        };
        merchant_settlements: {
            payload: Prisma.$merchant_settlementsPayload<ExtArgs>;
            fields: Prisma.merchant_settlementsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.merchant_settlementsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_settlementsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.merchant_settlementsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_settlementsPayload>;
                };
                findFirst: {
                    args: Prisma.merchant_settlementsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_settlementsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.merchant_settlementsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_settlementsPayload>;
                };
                findMany: {
                    args: Prisma.merchant_settlementsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_settlementsPayload>[];
                };
                create: {
                    args: Prisma.merchant_settlementsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_settlementsPayload>;
                };
                createMany: {
                    args: Prisma.merchant_settlementsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.merchant_settlementsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_settlementsPayload>[];
                };
                delete: {
                    args: Prisma.merchant_settlementsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_settlementsPayload>;
                };
                update: {
                    args: Prisma.merchant_settlementsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_settlementsPayload>;
                };
                deleteMany: {
                    args: Prisma.merchant_settlementsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.merchant_settlementsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.merchant_settlementsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_settlementsPayload>[];
                };
                upsert: {
                    args: Prisma.merchant_settlementsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_settlementsPayload>;
                };
                aggregate: {
                    args: Prisma.Merchant_settlementsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMerchant_settlements>;
                };
                groupBy: {
                    args: Prisma.merchant_settlementsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Merchant_settlementsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.merchant_settlementsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Merchant_settlementsCountAggregateOutputType> | number;
                };
            };
        };
        merchant_users: {
            payload: Prisma.$merchant_usersPayload<ExtArgs>;
            fields: Prisma.merchant_usersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.merchant_usersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_usersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.merchant_usersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_usersPayload>;
                };
                findFirst: {
                    args: Prisma.merchant_usersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_usersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.merchant_usersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_usersPayload>;
                };
                findMany: {
                    args: Prisma.merchant_usersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_usersPayload>[];
                };
                create: {
                    args: Prisma.merchant_usersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_usersPayload>;
                };
                createMany: {
                    args: Prisma.merchant_usersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.merchant_usersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_usersPayload>[];
                };
                delete: {
                    args: Prisma.merchant_usersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_usersPayload>;
                };
                update: {
                    args: Prisma.merchant_usersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_usersPayload>;
                };
                deleteMany: {
                    args: Prisma.merchant_usersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.merchant_usersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.merchant_usersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_usersPayload>[];
                };
                upsert: {
                    args: Prisma.merchant_usersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$merchant_usersPayload>;
                };
                aggregate: {
                    args: Prisma.Merchant_usersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMerchant_users>;
                };
                groupBy: {
                    args: Prisma.merchant_usersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Merchant_usersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.merchant_usersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Merchant_usersCountAggregateOutputType> | number;
                };
            };
        };
        modifier_groups: {
            payload: Prisma.$modifier_groupsPayload<ExtArgs>;
            fields: Prisma.modifier_groupsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.modifier_groupsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_groupsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.modifier_groupsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_groupsPayload>;
                };
                findFirst: {
                    args: Prisma.modifier_groupsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_groupsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.modifier_groupsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_groupsPayload>;
                };
                findMany: {
                    args: Prisma.modifier_groupsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_groupsPayload>[];
                };
                create: {
                    args: Prisma.modifier_groupsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_groupsPayload>;
                };
                createMany: {
                    args: Prisma.modifier_groupsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.modifier_groupsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_groupsPayload>[];
                };
                delete: {
                    args: Prisma.modifier_groupsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_groupsPayload>;
                };
                update: {
                    args: Prisma.modifier_groupsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_groupsPayload>;
                };
                deleteMany: {
                    args: Prisma.modifier_groupsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.modifier_groupsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.modifier_groupsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_groupsPayload>[];
                };
                upsert: {
                    args: Prisma.modifier_groupsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_groupsPayload>;
                };
                aggregate: {
                    args: Prisma.Modifier_groupsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateModifier_groups>;
                };
                groupBy: {
                    args: Prisma.modifier_groupsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Modifier_groupsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.modifier_groupsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Modifier_groupsCountAggregateOutputType> | number;
                };
            };
        };
        modifier_options: {
            payload: Prisma.$modifier_optionsPayload<ExtArgs>;
            fields: Prisma.modifier_optionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.modifier_optionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_optionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.modifier_optionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_optionsPayload>;
                };
                findFirst: {
                    args: Prisma.modifier_optionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_optionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.modifier_optionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_optionsPayload>;
                };
                findMany: {
                    args: Prisma.modifier_optionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_optionsPayload>[];
                };
                create: {
                    args: Prisma.modifier_optionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_optionsPayload>;
                };
                createMany: {
                    args: Prisma.modifier_optionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.modifier_optionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_optionsPayload>[];
                };
                delete: {
                    args: Prisma.modifier_optionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_optionsPayload>;
                };
                update: {
                    args: Prisma.modifier_optionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_optionsPayload>;
                };
                deleteMany: {
                    args: Prisma.modifier_optionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.modifier_optionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.modifier_optionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_optionsPayload>[];
                };
                upsert: {
                    args: Prisma.modifier_optionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$modifier_optionsPayload>;
                };
                aggregate: {
                    args: Prisma.Modifier_optionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateModifier_options>;
                };
                groupBy: {
                    args: Prisma.modifier_optionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Modifier_optionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.modifier_optionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Modifier_optionsCountAggregateOutputType> | number;
                };
            };
        };
        order_item_modifiers: {
            payload: Prisma.$order_item_modifiersPayload<ExtArgs>;
            fields: Prisma.order_item_modifiersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.order_item_modifiersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_item_modifiersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.order_item_modifiersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_item_modifiersPayload>;
                };
                findFirst: {
                    args: Prisma.order_item_modifiersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_item_modifiersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.order_item_modifiersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_item_modifiersPayload>;
                };
                findMany: {
                    args: Prisma.order_item_modifiersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_item_modifiersPayload>[];
                };
                create: {
                    args: Prisma.order_item_modifiersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_item_modifiersPayload>;
                };
                createMany: {
                    args: Prisma.order_item_modifiersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.order_item_modifiersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_item_modifiersPayload>[];
                };
                delete: {
                    args: Prisma.order_item_modifiersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_item_modifiersPayload>;
                };
                update: {
                    args: Prisma.order_item_modifiersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_item_modifiersPayload>;
                };
                deleteMany: {
                    args: Prisma.order_item_modifiersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.order_item_modifiersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.order_item_modifiersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_item_modifiersPayload>[];
                };
                upsert: {
                    args: Prisma.order_item_modifiersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_item_modifiersPayload>;
                };
                aggregate: {
                    args: Prisma.Order_item_modifiersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder_item_modifiers>;
                };
                groupBy: {
                    args: Prisma.order_item_modifiersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_item_modifiersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.order_item_modifiersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_item_modifiersCountAggregateOutputType> | number;
                };
            };
        };
        order_items: {
            payload: Prisma.$order_itemsPayload<ExtArgs>;
            fields: Prisma.order_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.order_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.order_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.order_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.order_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                findMany: {
                    args: Prisma.order_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>[];
                };
                create: {
                    args: Prisma.order_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                createMany: {
                    args: Prisma.order_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.order_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>[];
                };
                delete: {
                    args: Prisma.order_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                update: {
                    args: Prisma.order_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.order_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.order_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.order_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.order_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Order_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder_items>;
                };
                groupBy: {
                    args: Prisma.order_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.order_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_itemsCountAggregateOutputType> | number;
                };
            };
        };
        order_status_history: {
            payload: Prisma.$order_status_historyPayload<ExtArgs>;
            fields: Prisma.order_status_historyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.order_status_historyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.order_status_historyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>;
                };
                findFirst: {
                    args: Prisma.order_status_historyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.order_status_historyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>;
                };
                findMany: {
                    args: Prisma.order_status_historyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>[];
                };
                create: {
                    args: Prisma.order_status_historyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>;
                };
                createMany: {
                    args: Prisma.order_status_historyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.order_status_historyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>[];
                };
                delete: {
                    args: Prisma.order_status_historyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>;
                };
                update: {
                    args: Prisma.order_status_historyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>;
                };
                deleteMany: {
                    args: Prisma.order_status_historyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.order_status_historyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.order_status_historyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>[];
                };
                upsert: {
                    args: Prisma.order_status_historyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>;
                };
                aggregate: {
                    args: Prisma.Order_status_historyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder_status_history>;
                };
                groupBy: {
                    args: Prisma.order_status_historyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_status_historyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.order_status_historyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_status_historyCountAggregateOutputType> | number;
                };
            };
        };
        orders: {
            payload: Prisma.$ordersPayload<ExtArgs>;
            fields: Prisma.ordersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ordersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                findFirst: {
                    args: Prisma.ordersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                findMany: {
                    args: Prisma.ordersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>[];
                };
                create: {
                    args: Prisma.ordersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                createMany: {
                    args: Prisma.ordersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>[];
                };
                delete: {
                    args: Prisma.ordersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                update: {
                    args: Prisma.ordersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                deleteMany: {
                    args: Prisma.ordersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ordersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>[];
                };
                upsert: {
                    args: Prisma.ordersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                aggregate: {
                    args: Prisma.OrdersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrders>;
                };
                groupBy: {
                    args: Prisma.ordersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrdersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ordersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrdersCountAggregateOutputType> | number;
                };
            };
        };
        otp_verifications: {
            payload: Prisma.$otp_verificationsPayload<ExtArgs>;
            fields: Prisma.otp_verificationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.otp_verificationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$otp_verificationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.otp_verificationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$otp_verificationsPayload>;
                };
                findFirst: {
                    args: Prisma.otp_verificationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$otp_verificationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.otp_verificationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$otp_verificationsPayload>;
                };
                findMany: {
                    args: Prisma.otp_verificationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$otp_verificationsPayload>[];
                };
                create: {
                    args: Prisma.otp_verificationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$otp_verificationsPayload>;
                };
                createMany: {
                    args: Prisma.otp_verificationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.otp_verificationsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$otp_verificationsPayload>[];
                };
                delete: {
                    args: Prisma.otp_verificationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$otp_verificationsPayload>;
                };
                update: {
                    args: Prisma.otp_verificationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$otp_verificationsPayload>;
                };
                deleteMany: {
                    args: Prisma.otp_verificationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.otp_verificationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.otp_verificationsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$otp_verificationsPayload>[];
                };
                upsert: {
                    args: Prisma.otp_verificationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$otp_verificationsPayload>;
                };
                aggregate: {
                    args: Prisma.Otp_verificationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOtp_verifications>;
                };
                groupBy: {
                    args: Prisma.otp_verificationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Otp_verificationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.otp_verificationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Otp_verificationsCountAggregateOutputType> | number;
                };
            };
        };
        payment_methods: {
            payload: Prisma.$payment_methodsPayload<ExtArgs>;
            fields: Prisma.payment_methodsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.payment_methodsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.payment_methodsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload>;
                };
                findFirst: {
                    args: Prisma.payment_methodsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.payment_methodsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload>;
                };
                findMany: {
                    args: Prisma.payment_methodsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload>[];
                };
                create: {
                    args: Prisma.payment_methodsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload>;
                };
                createMany: {
                    args: Prisma.payment_methodsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.payment_methodsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload>[];
                };
                delete: {
                    args: Prisma.payment_methodsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload>;
                };
                update: {
                    args: Prisma.payment_methodsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload>;
                };
                deleteMany: {
                    args: Prisma.payment_methodsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.payment_methodsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.payment_methodsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload>[];
                };
                upsert: {
                    args: Prisma.payment_methodsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload>;
                };
                aggregate: {
                    args: Prisma.Payment_methodsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayment_methods>;
                };
                groupBy: {
                    args: Prisma.payment_methodsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Payment_methodsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.payment_methodsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Payment_methodsCountAggregateOutputType> | number;
                };
            };
        };
        payments: {
            payload: Prisma.$paymentsPayload<ExtArgs>;
            fields: Prisma.paymentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.paymentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                findFirst: {
                    args: Prisma.paymentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                findMany: {
                    args: Prisma.paymentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                create: {
                    args: Prisma.paymentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                createMany: {
                    args: Prisma.paymentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                delete: {
                    args: Prisma.paymentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                update: {
                    args: Prisma.paymentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                deleteMany: {
                    args: Prisma.paymentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.paymentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                upsert: {
                    args: Prisma.paymentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayments>;
                };
                groupBy: {
                    args: Prisma.paymentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.paymentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentsCountAggregateOutputType> | number;
                };
            };
        };
        promotions: {
            payload: Prisma.$promotionsPayload<ExtArgs>;
            fields: Prisma.promotionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.promotionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.promotionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>;
                };
                findFirst: {
                    args: Prisma.promotionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.promotionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>;
                };
                findMany: {
                    args: Prisma.promotionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>[];
                };
                create: {
                    args: Prisma.promotionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>;
                };
                createMany: {
                    args: Prisma.promotionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.promotionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>[];
                };
                delete: {
                    args: Prisma.promotionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>;
                };
                update: {
                    args: Prisma.promotionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>;
                };
                deleteMany: {
                    args: Prisma.promotionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.promotionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.promotionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>[];
                };
                upsert: {
                    args: Prisma.promotionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>;
                };
                aggregate: {
                    args: Prisma.PromotionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePromotions>;
                };
                groupBy: {
                    args: Prisma.promotionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PromotionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.promotionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PromotionsCountAggregateOutputType> | number;
                };
            };
        };
        rider_locations: {
            payload: Prisma.$rider_locationsPayload<ExtArgs>;
            fields: Prisma.rider_locationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.rider_locationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_locationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.rider_locationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_locationsPayload>;
                };
                findFirst: {
                    args: Prisma.rider_locationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_locationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.rider_locationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_locationsPayload>;
                };
                findMany: {
                    args: Prisma.rider_locationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_locationsPayload>[];
                };
                create: {
                    args: Prisma.rider_locationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_locationsPayload>;
                };
                createMany: {
                    args: Prisma.rider_locationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.rider_locationsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_locationsPayload>[];
                };
                delete: {
                    args: Prisma.rider_locationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_locationsPayload>;
                };
                update: {
                    args: Prisma.rider_locationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_locationsPayload>;
                };
                deleteMany: {
                    args: Prisma.rider_locationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.rider_locationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.rider_locationsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_locationsPayload>[];
                };
                upsert: {
                    args: Prisma.rider_locationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_locationsPayload>;
                };
                aggregate: {
                    args: Prisma.Rider_locationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRider_locations>;
                };
                groupBy: {
                    args: Prisma.rider_locationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Rider_locationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.rider_locationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Rider_locationsCountAggregateOutputType> | number;
                };
            };
        };
        rider_profiles: {
            payload: Prisma.$rider_profilesPayload<ExtArgs>;
            fields: Prisma.rider_profilesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.rider_profilesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_profilesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.rider_profilesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_profilesPayload>;
                };
                findFirst: {
                    args: Prisma.rider_profilesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_profilesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.rider_profilesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_profilesPayload>;
                };
                findMany: {
                    args: Prisma.rider_profilesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_profilesPayload>[];
                };
                create: {
                    args: Prisma.rider_profilesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_profilesPayload>;
                };
                createMany: {
                    args: Prisma.rider_profilesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.rider_profilesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_profilesPayload>[];
                };
                delete: {
                    args: Prisma.rider_profilesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_profilesPayload>;
                };
                update: {
                    args: Prisma.rider_profilesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_profilesPayload>;
                };
                deleteMany: {
                    args: Prisma.rider_profilesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.rider_profilesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.rider_profilesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_profilesPayload>[];
                };
                upsert: {
                    args: Prisma.rider_profilesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_profilesPayload>;
                };
                aggregate: {
                    args: Prisma.Rider_profilesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRider_profiles>;
                };
                groupBy: {
                    args: Prisma.rider_profilesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Rider_profilesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.rider_profilesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Rider_profilesCountAggregateOutputType> | number;
                };
            };
        };
        rider_settlements: {
            payload: Prisma.$rider_settlementsPayload<ExtArgs>;
            fields: Prisma.rider_settlementsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.rider_settlementsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_settlementsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.rider_settlementsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_settlementsPayload>;
                };
                findFirst: {
                    args: Prisma.rider_settlementsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_settlementsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.rider_settlementsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_settlementsPayload>;
                };
                findMany: {
                    args: Prisma.rider_settlementsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_settlementsPayload>[];
                };
                create: {
                    args: Prisma.rider_settlementsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_settlementsPayload>;
                };
                createMany: {
                    args: Prisma.rider_settlementsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.rider_settlementsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_settlementsPayload>[];
                };
                delete: {
                    args: Prisma.rider_settlementsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_settlementsPayload>;
                };
                update: {
                    args: Prisma.rider_settlementsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_settlementsPayload>;
                };
                deleteMany: {
                    args: Prisma.rider_settlementsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.rider_settlementsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.rider_settlementsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_settlementsPayload>[];
                };
                upsert: {
                    args: Prisma.rider_settlementsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rider_settlementsPayload>;
                };
                aggregate: {
                    args: Prisma.Rider_settlementsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRider_settlements>;
                };
                groupBy: {
                    args: Prisma.rider_settlementsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Rider_settlementsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.rider_settlementsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Rider_settlementsCountAggregateOutputType> | number;
                };
            };
        };
        roles: {
            payload: Prisma.$rolesPayload<ExtArgs>;
            fields: Prisma.rolesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.rolesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                findFirst: {
                    args: Prisma.rolesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                findMany: {
                    args: Prisma.rolesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[];
                };
                create: {
                    args: Prisma.rolesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                createMany: {
                    args: Prisma.rolesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.rolesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[];
                };
                delete: {
                    args: Prisma.rolesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                update: {
                    args: Prisma.rolesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                deleteMany: {
                    args: Prisma.rolesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.rolesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.rolesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[];
                };
                upsert: {
                    args: Prisma.rolesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                aggregate: {
                    args: Prisma.RolesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRoles>;
                };
                groupBy: {
                    args: Prisma.rolesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.rolesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesCountAggregateOutputType> | number;
                };
            };
        };
        store_branches: {
            payload: Prisma.$store_branchesPayload<ExtArgs>;
            fields: Prisma.store_branchesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.store_branchesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_branchesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.store_branchesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_branchesPayload>;
                };
                findFirst: {
                    args: Prisma.store_branchesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_branchesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.store_branchesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_branchesPayload>;
                };
                findMany: {
                    args: Prisma.store_branchesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_branchesPayload>[];
                };
                create: {
                    args: Prisma.store_branchesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_branchesPayload>;
                };
                createMany: {
                    args: Prisma.store_branchesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.store_branchesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_branchesPayload>[];
                };
                delete: {
                    args: Prisma.store_branchesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_branchesPayload>;
                };
                update: {
                    args: Prisma.store_branchesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_branchesPayload>;
                };
                deleteMany: {
                    args: Prisma.store_branchesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.store_branchesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.store_branchesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_branchesPayload>[];
                };
                upsert: {
                    args: Prisma.store_branchesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_branchesPayload>;
                };
                aggregate: {
                    args: Prisma.Store_branchesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStore_branches>;
                };
                groupBy: {
                    args: Prisma.store_branchesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Store_branchesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.store_branchesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Store_branchesCountAggregateOutputType> | number;
                };
            };
        };
        stores: {
            payload: Prisma.$storesPayload<ExtArgs>;
            fields: Prisma.storesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.storesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.storesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload>;
                };
                findFirst: {
                    args: Prisma.storesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.storesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload>;
                };
                findMany: {
                    args: Prisma.storesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload>[];
                };
                create: {
                    args: Prisma.storesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload>;
                };
                createMany: {
                    args: Prisma.storesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.storesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload>[];
                };
                delete: {
                    args: Prisma.storesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload>;
                };
                update: {
                    args: Prisma.storesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload>;
                };
                deleteMany: {
                    args: Prisma.storesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.storesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.storesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload>[];
                };
                upsert: {
                    args: Prisma.storesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload>;
                };
                aggregate: {
                    args: Prisma.StoresAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStores>;
                };
                groupBy: {
                    args: Prisma.storesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StoresGroupByOutputType>[];
                };
                count: {
                    args: Prisma.storesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StoresCountAggregateOutputType> | number;
                };
            };
        };
        user_roles: {
            payload: Prisma.$user_rolesPayload<ExtArgs>;
            fields: Prisma.user_rolesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.user_rolesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.user_rolesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                findFirst: {
                    args: Prisma.user_rolesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.user_rolesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                findMany: {
                    args: Prisma.user_rolesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>[];
                };
                create: {
                    args: Prisma.user_rolesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                createMany: {
                    args: Prisma.user_rolesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.user_rolesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>[];
                };
                delete: {
                    args: Prisma.user_rolesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                update: {
                    args: Prisma.user_rolesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                deleteMany: {
                    args: Prisma.user_rolesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.user_rolesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.user_rolesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>[];
                };
                upsert: {
                    args: Prisma.user_rolesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                aggregate: {
                    args: Prisma.User_rolesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser_roles>;
                };
                groupBy: {
                    args: Prisma.user_rolesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_rolesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.user_rolesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_rolesCountAggregateOutputType> | number;
                };
            };
        };
        user_sessions: {
            payload: Prisma.$user_sessionsPayload<ExtArgs>;
            fields: Prisma.user_sessionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.user_sessionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.user_sessionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload>;
                };
                findFirst: {
                    args: Prisma.user_sessionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.user_sessionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload>;
                };
                findMany: {
                    args: Prisma.user_sessionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload>[];
                };
                create: {
                    args: Prisma.user_sessionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload>;
                };
                createMany: {
                    args: Prisma.user_sessionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.user_sessionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload>[];
                };
                delete: {
                    args: Prisma.user_sessionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload>;
                };
                update: {
                    args: Prisma.user_sessionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload>;
                };
                deleteMany: {
                    args: Prisma.user_sessionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.user_sessionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.user_sessionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload>[];
                };
                upsert: {
                    args: Prisma.user_sessionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload>;
                };
                aggregate: {
                    args: Prisma.User_sessionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser_sessions>;
                };
                groupBy: {
                    args: Prisma.user_sessionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_sessionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.user_sessionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_sessionsCountAggregateOutputType> | number;
                };
            };
        };
        users: {
            payload: Prisma.$usersPayload<ExtArgs>;
            fields: Prisma.usersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findFirst: {
                    args: Prisma.usersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findMany: {
                    args: Prisma.usersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                create: {
                    args: Prisma.usersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                createMany: {
                    args: Prisma.usersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                delete: {
                    args: Prisma.usersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                update: {
                    args: Prisma.usersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                deleteMany: {
                    args: Prisma.usersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                upsert: {
                    args: Prisma.usersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                aggregate: {
                    args: Prisma.UsersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsers>;
                };
                groupBy: {
                    args: Prisma.usersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AddressesScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly label: "label";
    readonly contact_name: "contact_name";
    readonly contact_phone: "contact_phone";
    readonly country_code: "country_code";
    readonly region: "region";
    readonly province: "province";
    readonly district: "district";
    readonly city: "city";
    readonly address_line1: "address_line1";
    readonly address_line2: "address_line2";
    readonly reference: "reference";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly is_default: "is_default";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type AddressesScalarFieldEnum = (typeof AddressesScalarFieldEnum)[keyof typeof AddressesScalarFieldEnum];
export declare const Branch_catalog_itemsScalarFieldEnum: {
    readonly id: "id";
    readonly branch_id: "branch_id";
    readonly catalog_item_id: "catalog_item_id";
    readonly variant_id: "variant_id";
    readonly price_amount: "price_amount";
    readonly compare_at_amount: "compare_at_amount";
    readonly stock_qty: "stock_qty";
    readonly reserved_qty: "reserved_qty";
    readonly is_available: "is_available";
    readonly availability_mode: "availability_mode";
    readonly prep_time_minutes: "prep_time_minutes";
    readonly sort_order: "sort_order";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Branch_catalog_itemsScalarFieldEnum = (typeof Branch_catalog_itemsScalarFieldEnum)[keyof typeof Branch_catalog_itemsScalarFieldEnum];
export declare const Branch_item_schedulesScalarFieldEnum: {
    readonly id: "id";
    readonly branch_catalog_item_id: "branch_catalog_item_id";
    readonly day_of_week: "day_of_week";
    readonly start_time: "start_time";
    readonly end_time: "end_time";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
};
export type Branch_item_schedulesScalarFieldEnum = (typeof Branch_item_schedulesScalarFieldEnum)[keyof typeof Branch_item_schedulesScalarFieldEnum];
export declare const Branch_operating_hoursScalarFieldEnum: {
    readonly id: "id";
    readonly branch_id: "branch_id";
    readonly day_of_week: "day_of_week";
    readonly open_time: "open_time";
    readonly close_time: "close_time";
    readonly is_closed: "is_closed";
    readonly created_at: "created_at";
};
export type Branch_operating_hoursScalarFieldEnum = (typeof Branch_operating_hoursScalarFieldEnum)[keyof typeof Branch_operating_hoursScalarFieldEnum];
export declare const Business_categoriesScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
};
export type Business_categoriesScalarFieldEnum = (typeof Business_categoriesScalarFieldEnum)[keyof typeof Business_categoriesScalarFieldEnum];
export declare const Cart_item_modifiersScalarFieldEnum: {
    readonly id: "id";
    readonly cart_item_id: "cart_item_id";
    readonly modifier_group_id: "modifier_group_id";
    readonly modifier_option_id: "modifier_option_id";
    readonly qty: "qty";
    readonly price_delta_amount: "price_delta_amount";
    readonly created_at: "created_at";
};
export type Cart_item_modifiersScalarFieldEnum = (typeof Cart_item_modifiersScalarFieldEnum)[keyof typeof Cart_item_modifiersScalarFieldEnum];
export declare const Cart_itemsScalarFieldEnum: {
    readonly id: "id";
    readonly cart_id: "cart_id";
    readonly catalog_item_id: "catalog_item_id";
    readonly variant_id: "variant_id";
    readonly branch_catalog_item_id: "branch_catalog_item_id";
    readonly qty: "qty";
    readonly unit_price_amount: "unit_price_amount";
    readonly notes: "notes";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Cart_itemsScalarFieldEnum = (typeof Cart_itemsScalarFieldEnum)[keyof typeof Cart_itemsScalarFieldEnum];
export declare const CartsScalarFieldEnum: {
    readonly id: "id";
    readonly customer_user_id: "customer_user_id";
    readonly store_id: "store_id";
    readonly branch_id: "branch_id";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type CartsScalarFieldEnum = (typeof CartsScalarFieldEnum)[keyof typeof CartsScalarFieldEnum];
export declare const Catalog_categoriesScalarFieldEnum: {
    readonly id: "id";
    readonly store_id: "store_id";
    readonly parent_id: "parent_id";
    readonly name: "name";
    readonly slug: "slug";
    readonly sort_order: "sort_order";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
};
export type Catalog_categoriesScalarFieldEnum = (typeof Catalog_categoriesScalarFieldEnum)[keyof typeof Catalog_categoriesScalarFieldEnum];
export declare const Catalog_item_modifier_groupsScalarFieldEnum: {
    readonly id: "id";
    readonly catalog_item_id: "catalog_item_id";
    readonly modifier_group_id: "modifier_group_id";
    readonly sort_order: "sort_order";
};
export type Catalog_item_modifier_groupsScalarFieldEnum = (typeof Catalog_item_modifier_groupsScalarFieldEnum)[keyof typeof Catalog_item_modifier_groupsScalarFieldEnum];
export declare const Catalog_item_variantsScalarFieldEnum: {
    readonly id: "id";
    readonly catalog_item_id: "catalog_item_id";
    readonly name: "name";
    readonly sku: "sku";
    readonly barcode: "barcode";
    readonly price_modifier_amount: "price_modifier_amount";
    readonly is_default: "is_default";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Catalog_item_variantsScalarFieldEnum = (typeof Catalog_item_variantsScalarFieldEnum)[keyof typeof Catalog_item_variantsScalarFieldEnum];
export declare const Catalog_itemsScalarFieldEnum: {
    readonly id: "id";
    readonly store_id: "store_id";
    readonly category_id: "category_id";
    readonly item_type: "item_type";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly image_url: "image_url";
    readonly sku: "sku";
    readonly barcode: "barcode";
    readonly brand: "brand";
    readonly unit_label: "unit_label";
    readonly base_price_amount: "base_price_amount";
    readonly requires_age_verification: "requires_age_verification";
    readonly allows_notes: "allows_notes";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Catalog_itemsScalarFieldEnum = (typeof Catalog_itemsScalarFieldEnum)[keyof typeof Catalog_itemsScalarFieldEnum];
export declare const Combo_itemsScalarFieldEnum: {
    readonly id: "id";
    readonly combo_catalog_item_id: "combo_catalog_item_id";
    readonly child_catalog_item_id: "child_catalog_item_id";
    readonly default_qty: "default_qty";
    readonly is_required: "is_required";
    readonly sort_order: "sort_order";
    readonly created_at: "created_at";
};
export type Combo_itemsScalarFieldEnum = (typeof Combo_itemsScalarFieldEnum)[keyof typeof Combo_itemsScalarFieldEnum];
export declare const Customer_profilesScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly default_address_id: "default_address_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Customer_profilesScalarFieldEnum = (typeof Customer_profilesScalarFieldEnum)[keyof typeof Customer_profilesScalarFieldEnum];
export declare const DeliveriesScalarFieldEnum: {
    readonly id: "id";
    readonly order_id: "order_id";
    readonly rider_profile_id: "rider_profile_id";
    readonly pickup_branch_id: "pickup_branch_id";
    readonly dropoff_address_id: "dropoff_address_id";
    readonly status: "status";
    readonly distance_km: "distance_km";
    readonly estimated_minutes: "estimated_minutes";
    readonly assigned_at: "assigned_at";
    readonly picked_up_at: "picked_up_at";
    readonly delivered_at: "delivered_at";
    readonly failed_at: "failed_at";
    readonly failure_reason: "failure_reason";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type DeliveriesScalarFieldEnum = (typeof DeliveriesScalarFieldEnum)[keyof typeof DeliveriesScalarFieldEnum];
export declare const Delivery_zonesScalarFieldEnum: {
    readonly id: "id";
    readonly branch_id: "branch_id";
    readonly name: "name";
    readonly zone_type: "zone_type";
    readonly center_lat: "center_lat";
    readonly center_lng: "center_lng";
    readonly radius_meters: "radius_meters";
    readonly polygon_geojson: "polygon_geojson";
    readonly base_fee_amount: "base_fee_amount";
    readonly per_km_fee_amount: "per_km_fee_amount";
    readonly min_eta_minutes: "min_eta_minutes";
    readonly max_eta_minutes: "max_eta_minutes";
    readonly is_active: "is_active";
    readonly priority: "priority";
    readonly created_at: "created_at";
};
export type Delivery_zonesScalarFieldEnum = (typeof Delivery_zonesScalarFieldEnum)[keyof typeof Delivery_zonesScalarFieldEnum];
export declare const Merchant_profilesScalarFieldEnum: {
    readonly id: "id";
    readonly owner_user_id: "owner_user_id";
    readonly business_name: "business_name";
    readonly legal_name: "legal_name";
    readonly tax_id: "tax_id";
    readonly billing_email: "billing_email";
    readonly phone_e164: "phone_e164";
    readonly logo_url: "logo_url";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Merchant_profilesScalarFieldEnum = (typeof Merchant_profilesScalarFieldEnum)[keyof typeof Merchant_profilesScalarFieldEnum];
export declare const Merchant_settlementsScalarFieldEnum: {
    readonly id: "id";
    readonly merchant_id: "merchant_id";
    readonly period_start: "period_start";
    readonly period_end: "period_end";
    readonly gross_sales_amount: "gross_sales_amount";
    readonly commission_amount: "commission_amount";
    readonly delivery_fee_collected: "delivery_fee_collected";
    readonly service_fee_collected: "service_fee_collected";
    readonly adjustments_amount: "adjustments_amount";
    readonly net_payable_amount: "net_payable_amount";
    readonly status: "status";
    readonly generated_at: "generated_at";
    readonly paid_at: "paid_at";
};
export type Merchant_settlementsScalarFieldEnum = (typeof Merchant_settlementsScalarFieldEnum)[keyof typeof Merchant_settlementsScalarFieldEnum];
export declare const Merchant_usersScalarFieldEnum: {
    readonly id: "id";
    readonly merchant_id: "merchant_id";
    readonly user_id: "user_id";
    readonly role_code: "role_code";
    readonly status: "status";
    readonly created_at: "created_at";
};
export type Merchant_usersScalarFieldEnum = (typeof Merchant_usersScalarFieldEnum)[keyof typeof Merchant_usersScalarFieldEnum];
export declare const Modifier_groupsScalarFieldEnum: {
    readonly id: "id";
    readonly store_id: "store_id";
    readonly name: "name";
    readonly min_select: "min_select";
    readonly max_select: "max_select";
    readonly is_required: "is_required";
    readonly sort_order: "sort_order";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
};
export type Modifier_groupsScalarFieldEnum = (typeof Modifier_groupsScalarFieldEnum)[keyof typeof Modifier_groupsScalarFieldEnum];
export declare const Modifier_optionsScalarFieldEnum: {
    readonly id: "id";
    readonly modifier_group_id: "modifier_group_id";
    readonly name: "name";
    readonly price_delta_amount: "price_delta_amount";
    readonly is_default: "is_default";
    readonly is_active: "is_active";
    readonly sort_order: "sort_order";
    readonly created_at: "created_at";
};
export type Modifier_optionsScalarFieldEnum = (typeof Modifier_optionsScalarFieldEnum)[keyof typeof Modifier_optionsScalarFieldEnum];
export declare const Order_item_modifiersScalarFieldEnum: {
    readonly id: "id";
    readonly order_item_id: "order_item_id";
    readonly modifier_group_name_snapshot: "modifier_group_name_snapshot";
    readonly modifier_option_name_snapshot: "modifier_option_name_snapshot";
    readonly qty: "qty";
    readonly unit_price_delta_amount: "unit_price_delta_amount";
    readonly created_at: "created_at";
};
export type Order_item_modifiersScalarFieldEnum = (typeof Order_item_modifiersScalarFieldEnum)[keyof typeof Order_item_modifiersScalarFieldEnum];
export declare const Order_itemsScalarFieldEnum: {
    readonly id: "id";
    readonly order_id: "order_id";
    readonly catalog_item_id: "catalog_item_id";
    readonly variant_id: "variant_id";
    readonly branch_catalog_item_id: "branch_catalog_item_id";
    readonly item_type: "item_type";
    readonly item_name_snapshot: "item_name_snapshot";
    readonly variant_name_snapshot: "variant_name_snapshot";
    readonly sku_snapshot: "sku_snapshot";
    readonly base_unit_price_amount: "base_unit_price_amount";
    readonly modifier_unit_total_amount: "modifier_unit_total_amount";
    readonly qty: "qty";
    readonly line_total_amount: "line_total_amount";
    readonly notes: "notes";
    readonly created_at: "created_at";
};
export type Order_itemsScalarFieldEnum = (typeof Order_itemsScalarFieldEnum)[keyof typeof Order_itemsScalarFieldEnum];
export declare const Order_status_historyScalarFieldEnum: {
    readonly id: "id";
    readonly order_id: "order_id";
    readonly old_status: "old_status";
    readonly new_status: "new_status";
    readonly changed_by_user_id: "changed_by_user_id";
    readonly source: "source";
    readonly notes: "notes";
    readonly created_at: "created_at";
};
export type Order_status_historyScalarFieldEnum = (typeof Order_status_historyScalarFieldEnum)[keyof typeof Order_status_historyScalarFieldEnum];
export declare const OrdersScalarFieldEnum: {
    readonly id: "id";
    readonly order_code: "order_code";
    readonly customer_user_id: "customer_user_id";
    readonly store_id: "store_id";
    readonly branch_id: "branch_id";
    readonly rider_user_id: "rider_user_id";
    readonly delivery_address_id: "delivery_address_id";
    readonly source_channel: "source_channel";
    readonly order_type: "order_type";
    readonly business_category_snapshot: "business_category_snapshot";
    readonly status: "status";
    readonly payment_status: "payment_status";
    readonly fulfillment_status: "fulfillment_status";
    readonly subtotal_amount: "subtotal_amount";
    readonly modifier_total_amount: "modifier_total_amount";
    readonly discount_amount: "discount_amount";
    readonly delivery_fee_amount: "delivery_fee_amount";
    readonly service_fee_amount: "service_fee_amount";
    readonly tip_amount: "tip_amount";
    readonly total_amount: "total_amount";
    readonly notes: "notes";
    readonly customer_name_snapshot: "customer_name_snapshot";
    readonly customer_phone_snapshot: "customer_phone_snapshot";
    readonly scheduled_for: "scheduled_for";
    readonly accepted_at: "accepted_at";
    readonly preparing_at: "preparing_at";
    readonly ready_for_pickup_at: "ready_for_pickup_at";
    readonly rider_assigned_at: "rider_assigned_at";
    readonly picked_up_at: "picked_up_at";
    readonly delivered_at: "delivered_at";
    readonly cancelled_at: "cancelled_at";
    readonly cancellation_reason: "cancellation_reason";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum];
export declare const Otp_verificationsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly target: "target";
    readonly channel: "channel";
    readonly purpose: "purpose";
    readonly code_hash: "code_hash";
    readonly expires_at: "expires_at";
    readonly consumed_at: "consumed_at";
    readonly created_at: "created_at";
};
export type Otp_verificationsScalarFieldEnum = (typeof Otp_verificationsScalarFieldEnum)[keyof typeof Otp_verificationsScalarFieldEnum];
export declare const Payment_methodsScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
};
export type Payment_methodsScalarFieldEnum = (typeof Payment_methodsScalarFieldEnum)[keyof typeof Payment_methodsScalarFieldEnum];
export declare const PaymentsScalarFieldEnum: {
    readonly id: "id";
    readonly order_id: "order_id";
    readonly payment_method_id: "payment_method_id";
    readonly provider: "provider";
    readonly provider_transaction_id: "provider_transaction_id";
    readonly status: "status";
    readonly amount: "amount";
    readonly paid_at: "paid_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum];
export declare const PromotionsScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly discount_type: "discount_type";
    readonly discount_value: "discount_value";
    readonly applies_to: "applies_to";
    readonly starts_at: "starts_at";
    readonly ends_at: "ends_at";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
};
export type PromotionsScalarFieldEnum = (typeof PromotionsScalarFieldEnum)[keyof typeof PromotionsScalarFieldEnum];
export declare const Rider_locationsScalarFieldEnum: {
    readonly id: "id";
    readonly rider_profile_id: "rider_profile_id";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly heading: "heading";
    readonly speed_kph: "speed_kph";
    readonly accuracy_meters: "accuracy_meters";
    readonly recorded_at: "recorded_at";
};
export type Rider_locationsScalarFieldEnum = (typeof Rider_locationsScalarFieldEnum)[keyof typeof Rider_locationsScalarFieldEnum];
export declare const Rider_profilesScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly document_type: "document_type";
    readonly document_number: "document_number";
    readonly vehicle_type: "vehicle_type";
    readonly vehicle_plate: "vehicle_plate";
    readonly status: "status";
    readonly is_online: "is_online";
    readonly is_available: "is_available";
    readonly rating_avg: "rating_avg";
    readonly total_deliveries: "total_deliveries";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Rider_profilesScalarFieldEnum = (typeof Rider_profilesScalarFieldEnum)[keyof typeof Rider_profilesScalarFieldEnum];
export declare const Rider_settlementsScalarFieldEnum: {
    readonly id: "id";
    readonly rider_profile_id: "rider_profile_id";
    readonly period_start: "period_start";
    readonly period_end: "period_end";
    readonly deliveries_count: "deliveries_count";
    readonly total_earnings_amount: "total_earnings_amount";
    readonly bonuses_amount: "bonuses_amount";
    readonly penalties_amount: "penalties_amount";
    readonly net_payable_amount: "net_payable_amount";
    readonly status: "status";
    readonly generated_at: "generated_at";
    readonly paid_at: "paid_at";
};
export type Rider_settlementsScalarFieldEnum = (typeof Rider_settlementsScalarFieldEnum)[keyof typeof Rider_settlementsScalarFieldEnum];
export declare const RolesScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly description: "description";
    readonly created_at: "created_at";
};
export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum];
export declare const Store_branchesScalarFieldEnum: {
    readonly id: "id";
    readonly store_id: "store_id";
    readonly address_id: "address_id";
    readonly name: "name";
    readonly phone_e164: "phone_e164";
    readonly manager_user_id: "manager_user_id";
    readonly status: "status";
    readonly accepts_orders: "accepts_orders";
    readonly avg_prep_time_minutes: "avg_prep_time_minutes";
    readonly max_concurrent_orders: "max_concurrent_orders";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Store_branchesScalarFieldEnum = (typeof Store_branchesScalarFieldEnum)[keyof typeof Store_branchesScalarFieldEnum];
export declare const StoresScalarFieldEnum: {
    readonly id: "id";
    readonly merchant_id: "merchant_id";
    readonly business_category_id: "business_category_id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly logo_url: "logo_url";
    readonly cover_image_url: "cover_image_url";
    readonly service_mode: "service_mode";
    readonly catalog_mode: "catalog_mode";
    readonly status: "status";
    readonly avg_rating: "avg_rating";
    readonly total_reviews: "total_reviews";
    readonly min_order_amount: "min_order_amount";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type StoresScalarFieldEnum = (typeof StoresScalarFieldEnum)[keyof typeof StoresScalarFieldEnum];
export declare const User_rolesScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly role_id: "role_id";
    readonly scope_type: "scope_type";
    readonly scope_id: "scope_id";
    readonly created_at: "created_at";
};
export type User_rolesScalarFieldEnum = (typeof User_rolesScalarFieldEnum)[keyof typeof User_rolesScalarFieldEnum];
export declare const User_sessionsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly refresh_token_hash: "refresh_token_hash";
    readonly device_name: "device_name";
    readonly device_os: "device_os";
    readonly app_version: "app_version";
    readonly ip_address: "ip_address";
    readonly user_agent: "user_agent";
    readonly expires_at: "expires_at";
    readonly revoked_at: "revoked_at";
    readonly created_at: "created_at";
};
export type User_sessionsScalarFieldEnum = (typeof User_sessionsScalarFieldEnum)[keyof typeof User_sessionsScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly id: "id";
    readonly phone_e164: "phone_e164";
    readonly email: "email";
    readonly password_hash: "password_hash";
    readonly auth_provider: "auth_provider";
    readonly google_sub: "google_sub";
    readonly first_name: "first_name";
    readonly last_name: "last_name";
    readonly photo_url: "photo_url";
    readonly status: "status";
    readonly is_phone_verified: "is_phone_verified";
    readonly is_email_verified: "is_email_verified";
    readonly last_login_at: "last_login_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type Enumavailability_mode_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'availability_mode_type'>;
export type ListEnumavailability_mode_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'availability_mode_type[]'>;
export type Enumcart_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cart_status_type'>;
export type ListEnumcart_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cart_status_type[]'>;
export type Enumitem_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'item_type_enum'>;
export type ListEnumitem_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'item_type_enum[]'>;
export type Enumdelivery_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'delivery_status_type'>;
export type ListEnumdelivery_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'delivery_status_type[]'>;
export type Enumzone_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'zone_type_enum'>;
export type ListEnumzone_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'zone_type_enum[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type Enummerchant_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'merchant_status_type'>;
export type ListEnummerchant_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'merchant_status_type[]'>;
export type Enumsettlement_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'settlement_status_type'>;
export type ListEnumsettlement_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'settlement_status_type[]'>;
export type Enummerchant_user_role_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'merchant_user_role_type'>;
export type ListEnummerchant_user_role_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'merchant_user_role_type[]'>;
export type Enumorder_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_status_type'>;
export type ListEnumorder_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_status_type[]'>;
export type Enumstatus_change_source_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_change_source_type'>;
export type ListEnumstatus_change_source_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_change_source_type[]'>;
export type Enumsource_channel_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'source_channel_type'>;
export type ListEnumsource_channel_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'source_channel_type[]'>;
export type Enumorder_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_type_enum'>;
export type ListEnumorder_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_type_enum[]'>;
export type Enumpayment_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status_type'>;
export type ListEnumpayment_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status_type[]'>;
export type Enumfulfillment_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'fulfillment_status_type'>;
export type ListEnumfulfillment_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'fulfillment_status_type[]'>;
export type Enumotp_channel_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'otp_channel_type'>;
export type ListEnumotp_channel_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'otp_channel_type[]'>;
export type Enumotp_purpose_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'otp_purpose_type'>;
export type ListEnumotp_purpose_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'otp_purpose_type[]'>;
export type Enumpayment_record_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_record_status_type'>;
export type ListEnumpayment_record_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_record_status_type[]'>;
export type Enumdiscount_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'discount_type_enum'>;
export type ListEnumdiscount_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'discount_type_enum[]'>;
export type Enumpromotion_applies_to_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'promotion_applies_to_type'>;
export type ListEnumpromotion_applies_to_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'promotion_applies_to_type[]'>;
export type Enumvehicle_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'vehicle_type_enum'>;
export type ListEnumvehicle_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'vehicle_type_enum[]'>;
export type Enumrider_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rider_status_type'>;
export type ListEnumrider_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rider_status_type[]'>;
export type Enumbranch_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'branch_status_type'>;
export type ListEnumbranch_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'branch_status_type[]'>;
export type Enumservice_mode_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'service_mode_type'>;
export type ListEnumservice_mode_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'service_mode_type[]'>;
export type Enumcatalog_mode_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'catalog_mode_type'>;
export type ListEnumcatalog_mode_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'catalog_mode_type[]'>;
export type Enumstore_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'store_status_type'>;
export type ListEnumstore_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'store_status_type[]'>;
export type Enumrole_scope_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role_scope_type'>;
export type ListEnumrole_scope_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role_scope_type[]'>;
export type Enumauth_provider_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'auth_provider_type'>;
export type ListEnumauth_provider_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'auth_provider_type[]'>;
export type Enumuser_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_status_type'>;
export type ListEnumuser_status_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_status_type[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    addresses?: Prisma.addressesOmit;
    branch_catalog_items?: Prisma.branch_catalog_itemsOmit;
    branch_item_schedules?: Prisma.branch_item_schedulesOmit;
    branch_operating_hours?: Prisma.branch_operating_hoursOmit;
    business_categories?: Prisma.business_categoriesOmit;
    cart_item_modifiers?: Prisma.cart_item_modifiersOmit;
    cart_items?: Prisma.cart_itemsOmit;
    carts?: Prisma.cartsOmit;
    catalog_categories?: Prisma.catalog_categoriesOmit;
    catalog_item_modifier_groups?: Prisma.catalog_item_modifier_groupsOmit;
    catalog_item_variants?: Prisma.catalog_item_variantsOmit;
    catalog_items?: Prisma.catalog_itemsOmit;
    combo_items?: Prisma.combo_itemsOmit;
    customer_profiles?: Prisma.customer_profilesOmit;
    deliveries?: Prisma.deliveriesOmit;
    delivery_zones?: Prisma.delivery_zonesOmit;
    merchant_profiles?: Prisma.merchant_profilesOmit;
    merchant_settlements?: Prisma.merchant_settlementsOmit;
    merchant_users?: Prisma.merchant_usersOmit;
    modifier_groups?: Prisma.modifier_groupsOmit;
    modifier_options?: Prisma.modifier_optionsOmit;
    order_item_modifiers?: Prisma.order_item_modifiersOmit;
    order_items?: Prisma.order_itemsOmit;
    order_status_history?: Prisma.order_status_historyOmit;
    orders?: Prisma.ordersOmit;
    otp_verifications?: Prisma.otp_verificationsOmit;
    payment_methods?: Prisma.payment_methodsOmit;
    payments?: Prisma.paymentsOmit;
    promotions?: Prisma.promotionsOmit;
    rider_locations?: Prisma.rider_locationsOmit;
    rider_profiles?: Prisma.rider_profilesOmit;
    rider_settlements?: Prisma.rider_settlementsOmit;
    roles?: Prisma.rolesOmit;
    store_branches?: Prisma.store_branchesOmit;
    stores?: Prisma.storesOmit;
    user_roles?: Prisma.user_rolesOmit;
    user_sessions?: Prisma.user_sessionsOmit;
    users?: Prisma.usersOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
