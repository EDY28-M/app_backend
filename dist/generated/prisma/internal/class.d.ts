import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get addresses(): Prisma.addressesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get branch_catalog_items(): Prisma.branch_catalog_itemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get branch_item_schedules(): Prisma.branch_item_schedulesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get branch_operating_hours(): Prisma.branch_operating_hoursDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get business_categories(): Prisma.business_categoriesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get cart_item_modifiers(): Prisma.cart_item_modifiersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get cart_items(): Prisma.cart_itemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get carts(): Prisma.cartsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get catalog_categories(): Prisma.catalog_categoriesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get catalog_item_modifier_groups(): Prisma.catalog_item_modifier_groupsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get catalog_item_variants(): Prisma.catalog_item_variantsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get catalog_items(): Prisma.catalog_itemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get combo_items(): Prisma.combo_itemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get customer_profiles(): Prisma.customer_profilesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get deliveries(): Prisma.deliveriesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get delivery_zones(): Prisma.delivery_zonesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get merchant_profiles(): Prisma.merchant_profilesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get merchant_settlements(): Prisma.merchant_settlementsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get merchant_users(): Prisma.merchant_usersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get modifier_groups(): Prisma.modifier_groupsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get modifier_options(): Prisma.modifier_optionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get order_item_modifiers(): Prisma.order_item_modifiersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get order_items(): Prisma.order_itemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get order_status_history(): Prisma.order_status_historyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orders(): Prisma.ordersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get otp_verifications(): Prisma.otp_verificationsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payment_methods(): Prisma.payment_methodsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payments(): Prisma.paymentsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get promotions(): Prisma.promotionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get rider_locations(): Prisma.rider_locationsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get rider_profiles(): Prisma.rider_profilesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get rider_settlements(): Prisma.rider_settlementsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get roles(): Prisma.rolesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get store_branches(): Prisma.store_branchesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get stores(): Prisma.storesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get user_roles(): Prisma.user_rolesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get user_sessions(): Prisma.user_sessionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get users(): Prisma.usersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
