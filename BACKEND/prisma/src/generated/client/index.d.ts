
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Customer_types
 * 
 */
export type Customer_types = {
  id: number
  type_name: string | null
  status: number
  is_deleted: number
  created_at: Date
  updated_at: Date
}

/**
 * Model Roles
 * 
 */
export type Roles = {
  id: number
  title: string | null
  status: number
  is_deleted: number
  created_at: Date
  updated_at: Date
}

/**
 * Model Users
 * 
 */
export type Users = {
  id: number
  name: string | null
  contact_name: string | null
  email: string | null
  password: string | null
  address: string | null
  contact: string | null
  customer_type_id: number
  user_type: number
  status: number
  is_deleted: number
  created_at: Date
  updated_at: Date
}

/**
 * Model Contract_types
 * 
 */
export type Contract_types = {
  id: number
  type_name: string | null
  status: number
  is_deleted: number
  created_at: Date
  updated_at: Date
}

/**
 * Model GeneratorBrands
 * 
 */
export type GeneratorBrands = {
  id: number
  brand_name: string | null
  status: number
  is_deleted: number
  created_at: Date
  updated_at: Date
}

/**
 * Model GeneratorModels
 * 
 */
export type GeneratorModels = {
  id: number
  model_name: string | null
  brand_id: number
  status: number
  is_deleted: number
  created_at: Date
  updated_at: Date
}

/**
 * Model GeneratorPhaseTypes
 * 
 */
export type GeneratorPhaseTypes = {
  id: number
  phase_type: string | null
  status: number
  is_deleted: number
  created_at: Date
  updated_at: Date
}

/**
 * Model WorkOrderStatus
 * 
 */
export type WorkOrderStatus = {
  id: number
  status_name: string | null
  color_code: string | null
  description: string | null
  applies_to: number
  status: number
  is_deleted: number
  created_at: Date
  updated_at: Date
}

/**
 * Model WorkOrderTypes
 * 
 */
export type WorkOrderTypes = {
  id: number
  order_type: string | null
  on_screen_color_code: string | null
  on_report_color_code: string | null
  status: number
  is_deleted: number
  created_at: Date
  updated_at: Date
}

/**
 * Model service_levels
 * 
 */
export type service_levels = {
  id: number
  service_name: number
  service_limit: number
  default_load_test_duration: number
  on_screen_color_code: string
  on_report_color_code: string
  default_duration: number
  status: number
  is_deleted: number
  created_by: number
  created_date: Date
  updated_date: Date
}

/**
 * Model BlackOutDayTypes
 * 
 */
export type BlackOutDayTypes = {
  id: number
  type: string
  status: number
  is_deleted: number
  created_at: Date
  updated_at: Date
}

/**
 * Model BlackOutDays
 * 
 */
export type BlackOutDays = {
  id: number
  day_type_id: number
  title: string
  start_date: Date
  end_date: Date
  applies_to: number
  color_code: string | null
  status: number
  is_deleted: number
  created_at: Date
  updated_at: Date
}

/**
 * Model ReminderThresoldDays
 * 
 */
export type ReminderThresoldDays = {
  id: number
  thresold_day: number
  status: number
  is_deleted: number
  created_at: Date
  updated_at: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customer_types
 * const customer_types = await prisma.customer_types.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customer_types
   * const customer_types = await prisma.customer_types.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.customer_types`: Exposes CRUD operations for the **Customer_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customer_types
    * const customer_types = await prisma.customer_types.findMany()
    * ```
    */
  get customer_types(): Prisma.Customer_typesDelegate<GlobalReject>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.RolesDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<GlobalReject>;

  /**
   * `prisma.contract_types`: Exposes CRUD operations for the **Contract_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contract_types
    * const contract_types = await prisma.contract_types.findMany()
    * ```
    */
  get contract_types(): Prisma.Contract_typesDelegate<GlobalReject>;

  /**
   * `prisma.generatorBrands`: Exposes CRUD operations for the **GeneratorBrands** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneratorBrands
    * const generatorBrands = await prisma.generatorBrands.findMany()
    * ```
    */
  get generatorBrands(): Prisma.GeneratorBrandsDelegate<GlobalReject>;

  /**
   * `prisma.generatorModels`: Exposes CRUD operations for the **GeneratorModels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneratorModels
    * const generatorModels = await prisma.generatorModels.findMany()
    * ```
    */
  get generatorModels(): Prisma.GeneratorModelsDelegate<GlobalReject>;

  /**
   * `prisma.generatorPhaseTypes`: Exposes CRUD operations for the **GeneratorPhaseTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneratorPhaseTypes
    * const generatorPhaseTypes = await prisma.generatorPhaseTypes.findMany()
    * ```
    */
  get generatorPhaseTypes(): Prisma.GeneratorPhaseTypesDelegate<GlobalReject>;

  /**
   * `prisma.workOrderStatus`: Exposes CRUD operations for the **WorkOrderStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkOrderStatuses
    * const workOrderStatuses = await prisma.workOrderStatus.findMany()
    * ```
    */
  get workOrderStatus(): Prisma.WorkOrderStatusDelegate<GlobalReject>;

  /**
   * `prisma.workOrderTypes`: Exposes CRUD operations for the **WorkOrderTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkOrderTypes
    * const workOrderTypes = await prisma.workOrderTypes.findMany()
    * ```
    */
  get workOrderTypes(): Prisma.WorkOrderTypesDelegate<GlobalReject>;

  /**
   * `prisma.service_levels`: Exposes CRUD operations for the **service_levels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Service_levels
    * const service_levels = await prisma.service_levels.findMany()
    * ```
    */
  get service_levels(): Prisma.service_levelsDelegate<GlobalReject>;

  /**
   * `prisma.blackOutDayTypes`: Exposes CRUD operations for the **BlackOutDayTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlackOutDayTypes
    * const blackOutDayTypes = await prisma.blackOutDayTypes.findMany()
    * ```
    */
  get blackOutDayTypes(): Prisma.BlackOutDayTypesDelegate<GlobalReject>;

  /**
   * `prisma.blackOutDays`: Exposes CRUD operations for the **BlackOutDays** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlackOutDays
    * const blackOutDays = await prisma.blackOutDays.findMany()
    * ```
    */
  get blackOutDays(): Prisma.BlackOutDaysDelegate<GlobalReject>;

  /**
   * `prisma.reminderThresoldDays`: Exposes CRUD operations for the **ReminderThresoldDays** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReminderThresoldDays
    * const reminderThresoldDays = await prisma.reminderThresoldDays.findMany()
    * ```
    */
  get reminderThresoldDays(): Prisma.ReminderThresoldDaysDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.15.0
   * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Customer_types: 'Customer_types',
    Roles: 'Roles',
    Users: 'Users',
    Contract_types: 'Contract_types',
    GeneratorBrands: 'GeneratorBrands',
    GeneratorModels: 'GeneratorModels',
    GeneratorPhaseTypes: 'GeneratorPhaseTypes',
    WorkOrderStatus: 'WorkOrderStatus',
    WorkOrderTypes: 'WorkOrderTypes',
    service_levels: 'service_levels',
    BlackOutDayTypes: 'BlackOutDayTypes',
    BlackOutDays: 'BlackOutDays',
    ReminderThresoldDays: 'ReminderThresoldDays'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RolesCountOutputType
   */


  export type RolesCountOutputType = {
    role_type: number
  }

  export type RolesCountOutputTypeSelect = {
    role_type?: boolean
  }

  export type RolesCountOutputTypeGetPayload<S extends boolean | null | undefined | RolesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RolesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RolesCountOutputTypeArgs)
    ? RolesCountOutputType 
    : S extends { select: any } & (RolesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RolesCountOutputType ? RolesCountOutputType[P] : never
  } 
      : RolesCountOutputType




  // Custom InputTypes

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect | null
  }



  /**
   * Count Type GeneratorBrandsCountOutputType
   */


  export type GeneratorBrandsCountOutputType = {
    brand_type: number
  }

  export type GeneratorBrandsCountOutputTypeSelect = {
    brand_type?: boolean
  }

  export type GeneratorBrandsCountOutputTypeGetPayload<S extends boolean | null | undefined | GeneratorBrandsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GeneratorBrandsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (GeneratorBrandsCountOutputTypeArgs)
    ? GeneratorBrandsCountOutputType 
    : S extends { select: any } & (GeneratorBrandsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof GeneratorBrandsCountOutputType ? GeneratorBrandsCountOutputType[P] : never
  } 
      : GeneratorBrandsCountOutputType




  // Custom InputTypes

  /**
   * GeneratorBrandsCountOutputType without action
   */
  export type GeneratorBrandsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GeneratorBrandsCountOutputType
     */
    select?: GeneratorBrandsCountOutputTypeSelect | null
  }



  /**
   * Count Type BlackOutDayTypesCountOutputType
   */


  export type BlackOutDayTypesCountOutputType = {
    blackout_day_type: number
  }

  export type BlackOutDayTypesCountOutputTypeSelect = {
    blackout_day_type?: boolean
  }

  export type BlackOutDayTypesCountOutputTypeGetPayload<S extends boolean | null | undefined | BlackOutDayTypesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BlackOutDayTypesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BlackOutDayTypesCountOutputTypeArgs)
    ? BlackOutDayTypesCountOutputType 
    : S extends { select: any } & (BlackOutDayTypesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BlackOutDayTypesCountOutputType ? BlackOutDayTypesCountOutputType[P] : never
  } 
      : BlackOutDayTypesCountOutputType




  // Custom InputTypes

  /**
   * BlackOutDayTypesCountOutputType without action
   */
  export type BlackOutDayTypesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BlackOutDayTypesCountOutputType
     */
    select?: BlackOutDayTypesCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Customer_types
   */


  export type AggregateCustomer_types = {
    _count: Customer_typesCountAggregateOutputType | null
    _avg: Customer_typesAvgAggregateOutputType | null
    _sum: Customer_typesSumAggregateOutputType | null
    _min: Customer_typesMinAggregateOutputType | null
    _max: Customer_typesMaxAggregateOutputType | null
  }

  export type Customer_typesAvgAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Customer_typesSumAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Customer_typesMinAggregateOutputType = {
    id: number | null
    type_name: string | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Customer_typesMaxAggregateOutputType = {
    id: number | null
    type_name: string | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Customer_typesCountAggregateOutputType = {
    id: number
    type_name: number
    status: number
    is_deleted: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Customer_typesAvgAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type Customer_typesSumAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type Customer_typesMinAggregateInputType = {
    id?: true
    type_name?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type Customer_typesMaxAggregateInputType = {
    id?: true
    type_name?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type Customer_typesCountAggregateInputType = {
    id?: true
    type_name?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Customer_typesAggregateArgs = {
    /**
     * Filter which Customer_types to aggregate.
     */
    where?: Customer_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customer_types to fetch.
     */
    orderBy?: Enumerable<Customer_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Customer_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customer_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customer_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customer_types
    **/
    _count?: true | Customer_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Customer_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Customer_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Customer_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Customer_typesMaxAggregateInputType
  }

  export type GetCustomer_typesAggregateType<T extends Customer_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer_types[P]>
      : GetScalarType<T[P], AggregateCustomer_types[P]>
  }




  export type Customer_typesGroupByArgs = {
    where?: Customer_typesWhereInput
    orderBy?: Enumerable<Customer_typesOrderByWithAggregationInput>
    by: Customer_typesScalarFieldEnum[]
    having?: Customer_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Customer_typesCountAggregateInputType | true
    _avg?: Customer_typesAvgAggregateInputType
    _sum?: Customer_typesSumAggregateInputType
    _min?: Customer_typesMinAggregateInputType
    _max?: Customer_typesMaxAggregateInputType
  }


  export type Customer_typesGroupByOutputType = {
    id: number
    type_name: string | null
    status: number
    is_deleted: number
    created_at: Date
    updated_at: Date
    _count: Customer_typesCountAggregateOutputType | null
    _avg: Customer_typesAvgAggregateOutputType | null
    _sum: Customer_typesSumAggregateOutputType | null
    _min: Customer_typesMinAggregateOutputType | null
    _max: Customer_typesMaxAggregateOutputType | null
  }

  type GetCustomer_typesGroupByPayload<T extends Customer_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Customer_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Customer_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Customer_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Customer_typesGroupByOutputType[P]>
        }
      >
    >


  export type Customer_typesSelect = {
    id?: boolean
    type_name?: boolean
    status?: boolean
    is_deleted?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type Customer_typesGetPayload<S extends boolean | null | undefined | Customer_typesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Customer_types :
    S extends undefined ? never :
    S extends { include: any } & (Customer_typesArgs | Customer_typesFindManyArgs)
    ? Customer_types 
    : S extends { select: any } & (Customer_typesArgs | Customer_typesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Customer_types ? Customer_types[P] : never
  } 
      : Customer_types


  type Customer_typesCountArgs = 
    Omit<Customer_typesFindManyArgs, 'select' | 'include'> & {
      select?: Customer_typesCountAggregateInputType | true
    }

  export interface Customer_typesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Customer_types that matches the filter.
     * @param {Customer_typesFindUniqueArgs} args - Arguments to find a Customer_types
     * @example
     * // Get one Customer_types
     * const customer_types = await prisma.customer_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Customer_typesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Customer_typesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Customer_types'> extends True ? Prisma__Customer_typesClient<Customer_typesGetPayload<T>> : Prisma__Customer_typesClient<Customer_typesGetPayload<T> | null, null>

    /**
     * Find one Customer_types that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Customer_typesFindUniqueOrThrowArgs} args - Arguments to find a Customer_types
     * @example
     * // Get one Customer_types
     * const customer_types = await prisma.customer_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Customer_typesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Customer_typesFindUniqueOrThrowArgs>
    ): Prisma__Customer_typesClient<Customer_typesGetPayload<T>>

    /**
     * Find the first Customer_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_typesFindFirstArgs} args - Arguments to find a Customer_types
     * @example
     * // Get one Customer_types
     * const customer_types = await prisma.customer_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Customer_typesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Customer_typesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Customer_types'> extends True ? Prisma__Customer_typesClient<Customer_typesGetPayload<T>> : Prisma__Customer_typesClient<Customer_typesGetPayload<T> | null, null>

    /**
     * Find the first Customer_types that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_typesFindFirstOrThrowArgs} args - Arguments to find a Customer_types
     * @example
     * // Get one Customer_types
     * const customer_types = await prisma.customer_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Customer_typesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Customer_typesFindFirstOrThrowArgs>
    ): Prisma__Customer_typesClient<Customer_typesGetPayload<T>>

    /**
     * Find zero or more Customer_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_typesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customer_types
     * const customer_types = await prisma.customer_types.findMany()
     * 
     * // Get first 10 Customer_types
     * const customer_types = await prisma.customer_types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customer_typesWithIdOnly = await prisma.customer_types.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Customer_typesFindManyArgs>(
      args?: SelectSubset<T, Customer_typesFindManyArgs>
    ): Prisma.PrismaPromise<Array<Customer_typesGetPayload<T>>>

    /**
     * Create a Customer_types.
     * @param {Customer_typesCreateArgs} args - Arguments to create a Customer_types.
     * @example
     * // Create one Customer_types
     * const Customer_types = await prisma.customer_types.create({
     *   data: {
     *     // ... data to create a Customer_types
     *   }
     * })
     * 
    **/
    create<T extends Customer_typesCreateArgs>(
      args: SelectSubset<T, Customer_typesCreateArgs>
    ): Prisma__Customer_typesClient<Customer_typesGetPayload<T>>

    /**
     * Create many Customer_types.
     *     @param {Customer_typesCreateManyArgs} args - Arguments to create many Customer_types.
     *     @example
     *     // Create many Customer_types
     *     const customer_types = await prisma.customer_types.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Customer_typesCreateManyArgs>(
      args?: SelectSubset<T, Customer_typesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer_types.
     * @param {Customer_typesDeleteArgs} args - Arguments to delete one Customer_types.
     * @example
     * // Delete one Customer_types
     * const Customer_types = await prisma.customer_types.delete({
     *   where: {
     *     // ... filter to delete one Customer_types
     *   }
     * })
     * 
    **/
    delete<T extends Customer_typesDeleteArgs>(
      args: SelectSubset<T, Customer_typesDeleteArgs>
    ): Prisma__Customer_typesClient<Customer_typesGetPayload<T>>

    /**
     * Update one Customer_types.
     * @param {Customer_typesUpdateArgs} args - Arguments to update one Customer_types.
     * @example
     * // Update one Customer_types
     * const customer_types = await prisma.customer_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Customer_typesUpdateArgs>(
      args: SelectSubset<T, Customer_typesUpdateArgs>
    ): Prisma__Customer_typesClient<Customer_typesGetPayload<T>>

    /**
     * Delete zero or more Customer_types.
     * @param {Customer_typesDeleteManyArgs} args - Arguments to filter Customer_types to delete.
     * @example
     * // Delete a few Customer_types
     * const { count } = await prisma.customer_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Customer_typesDeleteManyArgs>(
      args?: SelectSubset<T, Customer_typesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customer_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customer_types
     * const customer_types = await prisma.customer_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Customer_typesUpdateManyArgs>(
      args: SelectSubset<T, Customer_typesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer_types.
     * @param {Customer_typesUpsertArgs} args - Arguments to update or create a Customer_types.
     * @example
     * // Update or create a Customer_types
     * const customer_types = await prisma.customer_types.upsert({
     *   create: {
     *     // ... data to create a Customer_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer_types we want to update
     *   }
     * })
    **/
    upsert<T extends Customer_typesUpsertArgs>(
      args: SelectSubset<T, Customer_typesUpsertArgs>
    ): Prisma__Customer_typesClient<Customer_typesGetPayload<T>>

    /**
     * Count the number of Customer_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_typesCountArgs} args - Arguments to filter Customer_types to count.
     * @example
     * // Count the number of Customer_types
     * const count = await prisma.customer_types.count({
     *   where: {
     *     // ... the filter for the Customer_types we want to count
     *   }
     * })
    **/
    count<T extends Customer_typesCountArgs>(
      args?: Subset<T, Customer_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Customer_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Customer_typesAggregateArgs>(args: Subset<T, Customer_typesAggregateArgs>): Prisma.PrismaPromise<GetCustomer_typesAggregateType<T>>

    /**
     * Group by Customer_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_typesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Customer_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Customer_typesGroupByArgs['orderBy'] }
        : { orderBy?: Customer_typesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Customer_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomer_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Customer_typesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Customer_types base type for findUnique actions
   */
  export type Customer_typesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Customer_types
     */
    select?: Customer_typesSelect | null
    /**
     * Filter, which Customer_types to fetch.
     */
    where: Customer_typesWhereUniqueInput
  }

  /**
   * Customer_types findUnique
   */
  export interface Customer_typesFindUniqueArgs extends Customer_typesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customer_types findUniqueOrThrow
   */
  export type Customer_typesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Customer_types
     */
    select?: Customer_typesSelect | null
    /**
     * Filter, which Customer_types to fetch.
     */
    where: Customer_typesWhereUniqueInput
  }


  /**
   * Customer_types base type for findFirst actions
   */
  export type Customer_typesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Customer_types
     */
    select?: Customer_typesSelect | null
    /**
     * Filter, which Customer_types to fetch.
     */
    where?: Customer_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customer_types to fetch.
     */
    orderBy?: Enumerable<Customer_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customer_types.
     */
    cursor?: Customer_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customer_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customer_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customer_types.
     */
    distinct?: Enumerable<Customer_typesScalarFieldEnum>
  }

  /**
   * Customer_types findFirst
   */
  export interface Customer_typesFindFirstArgs extends Customer_typesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customer_types findFirstOrThrow
   */
  export type Customer_typesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Customer_types
     */
    select?: Customer_typesSelect | null
    /**
     * Filter, which Customer_types to fetch.
     */
    where?: Customer_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customer_types to fetch.
     */
    orderBy?: Enumerable<Customer_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customer_types.
     */
    cursor?: Customer_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customer_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customer_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customer_types.
     */
    distinct?: Enumerable<Customer_typesScalarFieldEnum>
  }


  /**
   * Customer_types findMany
   */
  export type Customer_typesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Customer_types
     */
    select?: Customer_typesSelect | null
    /**
     * Filter, which Customer_types to fetch.
     */
    where?: Customer_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customer_types to fetch.
     */
    orderBy?: Enumerable<Customer_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customer_types.
     */
    cursor?: Customer_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customer_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customer_types.
     */
    skip?: number
    distinct?: Enumerable<Customer_typesScalarFieldEnum>
  }


  /**
   * Customer_types create
   */
  export type Customer_typesCreateArgs = {
    /**
     * Select specific fields to fetch from the Customer_types
     */
    select?: Customer_typesSelect | null
    /**
     * The data needed to create a Customer_types.
     */
    data: XOR<Customer_typesCreateInput, Customer_typesUncheckedCreateInput>
  }


  /**
   * Customer_types createMany
   */
  export type Customer_typesCreateManyArgs = {
    /**
     * The data used to create many Customer_types.
     */
    data: Enumerable<Customer_typesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Customer_types update
   */
  export type Customer_typesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Customer_types
     */
    select?: Customer_typesSelect | null
    /**
     * The data needed to update a Customer_types.
     */
    data: XOR<Customer_typesUpdateInput, Customer_typesUncheckedUpdateInput>
    /**
     * Choose, which Customer_types to update.
     */
    where: Customer_typesWhereUniqueInput
  }


  /**
   * Customer_types updateMany
   */
  export type Customer_typesUpdateManyArgs = {
    /**
     * The data used to update Customer_types.
     */
    data: XOR<Customer_typesUpdateManyMutationInput, Customer_typesUncheckedUpdateManyInput>
    /**
     * Filter which Customer_types to update
     */
    where?: Customer_typesWhereInput
  }


  /**
   * Customer_types upsert
   */
  export type Customer_typesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Customer_types
     */
    select?: Customer_typesSelect | null
    /**
     * The filter to search for the Customer_types to update in case it exists.
     */
    where: Customer_typesWhereUniqueInput
    /**
     * In case the Customer_types found by the `where` argument doesn't exist, create a new Customer_types with this data.
     */
    create: XOR<Customer_typesCreateInput, Customer_typesUncheckedCreateInput>
    /**
     * In case the Customer_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Customer_typesUpdateInput, Customer_typesUncheckedUpdateInput>
  }


  /**
   * Customer_types delete
   */
  export type Customer_typesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Customer_types
     */
    select?: Customer_typesSelect | null
    /**
     * Filter which Customer_types to delete.
     */
    where: Customer_typesWhereUniqueInput
  }


  /**
   * Customer_types deleteMany
   */
  export type Customer_typesDeleteManyArgs = {
    /**
     * Filter which Customer_types to delete
     */
    where?: Customer_typesWhereInput
  }


  /**
   * Customer_types without action
   */
  export type Customer_typesArgs = {
    /**
     * Select specific fields to fetch from the Customer_types
     */
    select?: Customer_typesSelect | null
  }



  /**
   * Model Roles
   */


  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    title: string | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    title: number
    status: number
    is_deleted: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    title?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    title?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    title?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RolesAggregateArgs = {
    /**
     * Filter which Roles to aggregate.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: Enumerable<RolesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type RolesGroupByArgs = {
    where?: RolesWhereInput
    orderBy?: Enumerable<RolesOrderByWithAggregationInput>
    by: RolesScalarFieldEnum[]
    having?: RolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }


  export type RolesGroupByOutputType = {
    id: number
    title: string | null
    status: number
    is_deleted: number
    created_at: Date
    updated_at: Date
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type RolesSelect = {
    id?: boolean
    title?: boolean
    status?: boolean
    is_deleted?: boolean
    created_at?: boolean
    updated_at?: boolean
    role_type?: boolean | Roles$role_typeArgs
    _count?: boolean | RolesCountOutputTypeArgs
  }


  export type RolesInclude = {
    role_type?: boolean | Roles$role_typeArgs
    _count?: boolean | RolesCountOutputTypeArgs
  }

  export type RolesGetPayload<S extends boolean | null | undefined | RolesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Roles :
    S extends undefined ? never :
    S extends { include: any } & (RolesArgs | RolesFindManyArgs)
    ? Roles  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'role_type' ? Array < UsersGetPayload<S['include'][P]>>  :
        P extends '_count' ? RolesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RolesArgs | RolesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'role_type' ? Array < UsersGetPayload<S['select'][P]>>  :
        P extends '_count' ? RolesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Roles ? Roles[P] : never
  } 
      : Roles


  type RolesCountArgs = 
    Omit<RolesFindManyArgs, 'select' | 'include'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface RolesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Roles that matches the filter.
     * @param {RolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RolesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RolesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Roles'> extends True ? Prisma__RolesClient<RolesGetPayload<T>> : Prisma__RolesClient<RolesGetPayload<T> | null, null>

    /**
     * Find one Roles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RolesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RolesFindUniqueOrThrowArgs>
    ): Prisma__RolesClient<RolesGetPayload<T>>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RolesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RolesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Roles'> extends True ? Prisma__RolesClient<RolesGetPayload<T>> : Prisma__RolesClient<RolesGetPayload<T> | null, null>

    /**
     * Find the first Roles that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RolesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RolesFindFirstOrThrowArgs>
    ): Prisma__RolesClient<RolesGetPayload<T>>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RolesFindManyArgs>(
      args?: SelectSubset<T, RolesFindManyArgs>
    ): Prisma.PrismaPromise<Array<RolesGetPayload<T>>>

    /**
     * Create a Roles.
     * @param {RolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
    **/
    create<T extends RolesCreateArgs>(
      args: SelectSubset<T, RolesCreateArgs>
    ): Prisma__RolesClient<RolesGetPayload<T>>

    /**
     * Create many Roles.
     *     @param {RolesCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const roles = await prisma.roles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RolesCreateManyArgs>(
      args?: SelectSubset<T, RolesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {RolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
    **/
    delete<T extends RolesDeleteArgs>(
      args: SelectSubset<T, RolesDeleteArgs>
    ): Prisma__RolesClient<RolesGetPayload<T>>

    /**
     * Update one Roles.
     * @param {RolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RolesUpdateArgs>(
      args: SelectSubset<T, RolesUpdateArgs>
    ): Prisma__RolesClient<RolesGetPayload<T>>

    /**
     * Delete zero or more Roles.
     * @param {RolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RolesDeleteManyArgs>(
      args?: SelectSubset<T, RolesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RolesUpdateManyArgs>(
      args: SelectSubset<T, RolesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {RolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
    **/
    upsert<T extends RolesUpsertArgs>(
      args: SelectSubset<T, RolesUpsertArgs>
    ): Prisma__RolesClient<RolesGetPayload<T>>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RolesCountArgs>(
      args?: Subset<T, RolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs['orderBy'] }
        : { orderBy?: RolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RolesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    role_type<T extends Roles$role_typeArgs= {}>(args?: Subset<T, Roles$role_typeArgs>): Prisma.PrismaPromise<Array<UsersGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Roles base type for findUnique actions
   */
  export type RolesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findUnique
   */
  export interface RolesFindUniqueArgs extends RolesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Roles findUniqueOrThrow
   */
  export type RolesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }


  /**
   * Roles base type for findFirst actions
   */
  export type RolesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: Enumerable<RolesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: Enumerable<RolesScalarFieldEnum>
  }

  /**
   * Roles findFirst
   */
  export interface RolesFindFirstArgs extends RolesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Roles findFirstOrThrow
   */
  export type RolesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: Enumerable<RolesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: Enumerable<RolesScalarFieldEnum>
  }


  /**
   * Roles findMany
   */
  export type RolesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: Enumerable<RolesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: Enumerable<RolesScalarFieldEnum>
  }


  /**
   * Roles create
   */
  export type RolesCreateArgs = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude | null
    /**
     * The data needed to create a Roles.
     */
    data: XOR<RolesCreateInput, RolesUncheckedCreateInput>
  }


  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs = {
    /**
     * The data used to create many Roles.
     */
    data: Enumerable<RolesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Roles update
   */
  export type RolesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude | null
    /**
     * The data needed to update a Roles.
     */
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
    /**
     * Choose, which Roles to update.
     */
    where: RolesWhereUniqueInput
  }


  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
  }


  /**
   * Roles upsert
   */
  export type RolesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude | null
    /**
     * The filter to search for the Roles to update in case it exists.
     */
    where: RolesWhereUniqueInput
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     */
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
  }


  /**
   * Roles delete
   */
  export type RolesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude | null
    /**
     * Filter which Roles to delete.
     */
    where: RolesWhereUniqueInput
  }


  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs = {
    /**
     * Filter which Roles to delete
     */
    where?: RolesWhereInput
  }


  /**
   * Roles.role_type
   */
  export type Roles$role_typeArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    where?: UsersWhereInput
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Roles without action
   */
  export type RolesArgs = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude | null
  }



  /**
   * Model Users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    customer_type_id: number | null
    user_type: number | null
    status: number | null
    is_deleted: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    customer_type_id: number | null
    user_type: number | null
    status: number | null
    is_deleted: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    contact_name: string | null
    email: string | null
    password: string | null
    address: string | null
    contact: string | null
    customer_type_id: number | null
    user_type: number | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    contact_name: string | null
    email: string | null
    password: string | null
    address: string | null
    contact: string | null
    customer_type_id: number | null
    user_type: number | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    contact_name: number
    email: number
    password: number
    address: number
    contact: number
    customer_type_id: number
    user_type: number
    status: number
    is_deleted: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    customer_type_id?: true
    user_type?: true
    status?: true
    is_deleted?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    customer_type_id?: true
    user_type?: true
    status?: true
    is_deleted?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    contact_name?: true
    email?: true
    password?: true
    address?: true
    contact?: true
    customer_type_id?: true
    user_type?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    contact_name?: true
    email?: true
    password?: true
    address?: true
    contact?: true
    customer_type_id?: true
    user_type?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    contact_name?: true
    email?: true
    password?: true
    address?: true
    contact?: true
    customer_type_id?: true
    user_type?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: UsersWhereInput
    orderBy?: Enumerable<UsersOrderByWithAggregationInput>
    by: UsersScalarFieldEnum[]
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: number
    name: string | null
    contact_name: string | null
    email: string | null
    password: string | null
    address: string | null
    contact: string | null
    customer_type_id: number
    user_type: number
    status: number
    is_deleted: number
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect = {
    id?: boolean
    name?: boolean
    contact_name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    contact?: boolean
    customer_type_id?: boolean
    user_type?: boolean
    status?: boolean
    is_deleted?: boolean
    created_at?: boolean
    updated_at?: boolean
    role_type?: boolean | RolesArgs
  }


  export type UsersInclude = {
    role_type?: boolean | RolesArgs
  }

  export type UsersGetPayload<S extends boolean | null | undefined | UsersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Users :
    S extends undefined ? never :
    S extends { include: any } & (UsersArgs | UsersFindManyArgs)
    ? Users  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'role_type' ? RolesGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (UsersArgs | UsersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'role_type' ? RolesGetPayload<S['select'][P]> | null :  P extends keyof Users ? Users[P] : never
  } 
      : Users


  type UsersCountArgs = 
    Omit<UsersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Users'> extends True ? Prisma__UsersClient<UsersGetPayload<T>> : Prisma__UsersClient<UsersGetPayload<T> | null, null>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Users'> extends True ? Prisma__UsersClient<UsersGetPayload<T>> : Prisma__UsersClient<UsersGetPayload<T> | null, null>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs>(
      args?: SelectSubset<T, UsersFindManyArgs>
    ): Prisma.PrismaPromise<Array<UsersGetPayload<T>>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs>(
      args: SelectSubset<T, UsersCreateArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs>(
      args?: SelectSubset<T, UsersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs>(
      args: SelectSubset<T, UsersDeleteArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs>(
      args: SelectSubset<T, UsersUpdateArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs>(
      args?: SelectSubset<T, UsersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs>(
      args: SelectSubset<T, UsersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs>(
      args: SelectSubset<T, UsersUpsertArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    role_type<T extends RolesArgs= {}>(args?: Subset<T, RolesArgs>): Prisma__RolesClient<RolesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Users base type for findUnique actions
   */
  export type UsersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUnique
   */
  export interface UsersFindUniqueArgs extends UsersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users base type for findFirst actions
   */
  export type UsersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * Users findFirst
   */
  export interface UsersFindFirstArgs extends UsersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users create
   */
  export type UsersCreateArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }


  /**
   * Users without action
   */
  export type UsersArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
  }



  /**
   * Model Contract_types
   */


  export type AggregateContract_types = {
    _count: Contract_typesCountAggregateOutputType | null
    _avg: Contract_typesAvgAggregateOutputType | null
    _sum: Contract_typesSumAggregateOutputType | null
    _min: Contract_typesMinAggregateOutputType | null
    _max: Contract_typesMaxAggregateOutputType | null
  }

  export type Contract_typesAvgAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Contract_typesSumAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type Contract_typesMinAggregateOutputType = {
    id: number | null
    type_name: string | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Contract_typesMaxAggregateOutputType = {
    id: number | null
    type_name: string | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Contract_typesCountAggregateOutputType = {
    id: number
    type_name: number
    status: number
    is_deleted: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Contract_typesAvgAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type Contract_typesSumAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type Contract_typesMinAggregateInputType = {
    id?: true
    type_name?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type Contract_typesMaxAggregateInputType = {
    id?: true
    type_name?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type Contract_typesCountAggregateInputType = {
    id?: true
    type_name?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Contract_typesAggregateArgs = {
    /**
     * Filter which Contract_types to aggregate.
     */
    where?: Contract_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contract_types to fetch.
     */
    orderBy?: Enumerable<Contract_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Contract_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contract_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contract_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contract_types
    **/
    _count?: true | Contract_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Contract_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Contract_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Contract_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Contract_typesMaxAggregateInputType
  }

  export type GetContract_typesAggregateType<T extends Contract_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateContract_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract_types[P]>
      : GetScalarType<T[P], AggregateContract_types[P]>
  }




  export type Contract_typesGroupByArgs = {
    where?: Contract_typesWhereInput
    orderBy?: Enumerable<Contract_typesOrderByWithAggregationInput>
    by: Contract_typesScalarFieldEnum[]
    having?: Contract_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Contract_typesCountAggregateInputType | true
    _avg?: Contract_typesAvgAggregateInputType
    _sum?: Contract_typesSumAggregateInputType
    _min?: Contract_typesMinAggregateInputType
    _max?: Contract_typesMaxAggregateInputType
  }


  export type Contract_typesGroupByOutputType = {
    id: number
    type_name: string | null
    status: number
    is_deleted: number
    created_at: Date
    updated_at: Date
    _count: Contract_typesCountAggregateOutputType | null
    _avg: Contract_typesAvgAggregateOutputType | null
    _sum: Contract_typesSumAggregateOutputType | null
    _min: Contract_typesMinAggregateOutputType | null
    _max: Contract_typesMaxAggregateOutputType | null
  }

  type GetContract_typesGroupByPayload<T extends Contract_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Contract_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Contract_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Contract_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Contract_typesGroupByOutputType[P]>
        }
      >
    >


  export type Contract_typesSelect = {
    id?: boolean
    type_name?: boolean
    status?: boolean
    is_deleted?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type Contract_typesGetPayload<S extends boolean | null | undefined | Contract_typesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Contract_types :
    S extends undefined ? never :
    S extends { include: any } & (Contract_typesArgs | Contract_typesFindManyArgs)
    ? Contract_types 
    : S extends { select: any } & (Contract_typesArgs | Contract_typesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Contract_types ? Contract_types[P] : never
  } 
      : Contract_types


  type Contract_typesCountArgs = 
    Omit<Contract_typesFindManyArgs, 'select' | 'include'> & {
      select?: Contract_typesCountAggregateInputType | true
    }

  export interface Contract_typesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Contract_types that matches the filter.
     * @param {Contract_typesFindUniqueArgs} args - Arguments to find a Contract_types
     * @example
     * // Get one Contract_types
     * const contract_types = await prisma.contract_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Contract_typesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Contract_typesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Contract_types'> extends True ? Prisma__Contract_typesClient<Contract_typesGetPayload<T>> : Prisma__Contract_typesClient<Contract_typesGetPayload<T> | null, null>

    /**
     * Find one Contract_types that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Contract_typesFindUniqueOrThrowArgs} args - Arguments to find a Contract_types
     * @example
     * // Get one Contract_types
     * const contract_types = await prisma.contract_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Contract_typesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Contract_typesFindUniqueOrThrowArgs>
    ): Prisma__Contract_typesClient<Contract_typesGetPayload<T>>

    /**
     * Find the first Contract_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contract_typesFindFirstArgs} args - Arguments to find a Contract_types
     * @example
     * // Get one Contract_types
     * const contract_types = await prisma.contract_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Contract_typesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Contract_typesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Contract_types'> extends True ? Prisma__Contract_typesClient<Contract_typesGetPayload<T>> : Prisma__Contract_typesClient<Contract_typesGetPayload<T> | null, null>

    /**
     * Find the first Contract_types that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contract_typesFindFirstOrThrowArgs} args - Arguments to find a Contract_types
     * @example
     * // Get one Contract_types
     * const contract_types = await prisma.contract_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Contract_typesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Contract_typesFindFirstOrThrowArgs>
    ): Prisma__Contract_typesClient<Contract_typesGetPayload<T>>

    /**
     * Find zero or more Contract_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contract_typesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contract_types
     * const contract_types = await prisma.contract_types.findMany()
     * 
     * // Get first 10 Contract_types
     * const contract_types = await prisma.contract_types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contract_typesWithIdOnly = await prisma.contract_types.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Contract_typesFindManyArgs>(
      args?: SelectSubset<T, Contract_typesFindManyArgs>
    ): Prisma.PrismaPromise<Array<Contract_typesGetPayload<T>>>

    /**
     * Create a Contract_types.
     * @param {Contract_typesCreateArgs} args - Arguments to create a Contract_types.
     * @example
     * // Create one Contract_types
     * const Contract_types = await prisma.contract_types.create({
     *   data: {
     *     // ... data to create a Contract_types
     *   }
     * })
     * 
    **/
    create<T extends Contract_typesCreateArgs>(
      args: SelectSubset<T, Contract_typesCreateArgs>
    ): Prisma__Contract_typesClient<Contract_typesGetPayload<T>>

    /**
     * Create many Contract_types.
     *     @param {Contract_typesCreateManyArgs} args - Arguments to create many Contract_types.
     *     @example
     *     // Create many Contract_types
     *     const contract_types = await prisma.contract_types.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Contract_typesCreateManyArgs>(
      args?: SelectSubset<T, Contract_typesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contract_types.
     * @param {Contract_typesDeleteArgs} args - Arguments to delete one Contract_types.
     * @example
     * // Delete one Contract_types
     * const Contract_types = await prisma.contract_types.delete({
     *   where: {
     *     // ... filter to delete one Contract_types
     *   }
     * })
     * 
    **/
    delete<T extends Contract_typesDeleteArgs>(
      args: SelectSubset<T, Contract_typesDeleteArgs>
    ): Prisma__Contract_typesClient<Contract_typesGetPayload<T>>

    /**
     * Update one Contract_types.
     * @param {Contract_typesUpdateArgs} args - Arguments to update one Contract_types.
     * @example
     * // Update one Contract_types
     * const contract_types = await prisma.contract_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Contract_typesUpdateArgs>(
      args: SelectSubset<T, Contract_typesUpdateArgs>
    ): Prisma__Contract_typesClient<Contract_typesGetPayload<T>>

    /**
     * Delete zero or more Contract_types.
     * @param {Contract_typesDeleteManyArgs} args - Arguments to filter Contract_types to delete.
     * @example
     * // Delete a few Contract_types
     * const { count } = await prisma.contract_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Contract_typesDeleteManyArgs>(
      args?: SelectSubset<T, Contract_typesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contract_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contract_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contract_types
     * const contract_types = await prisma.contract_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Contract_typesUpdateManyArgs>(
      args: SelectSubset<T, Contract_typesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contract_types.
     * @param {Contract_typesUpsertArgs} args - Arguments to update or create a Contract_types.
     * @example
     * // Update or create a Contract_types
     * const contract_types = await prisma.contract_types.upsert({
     *   create: {
     *     // ... data to create a Contract_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract_types we want to update
     *   }
     * })
    **/
    upsert<T extends Contract_typesUpsertArgs>(
      args: SelectSubset<T, Contract_typesUpsertArgs>
    ): Prisma__Contract_typesClient<Contract_typesGetPayload<T>>

    /**
     * Count the number of Contract_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contract_typesCountArgs} args - Arguments to filter Contract_types to count.
     * @example
     * // Count the number of Contract_types
     * const count = await prisma.contract_types.count({
     *   where: {
     *     // ... the filter for the Contract_types we want to count
     *   }
     * })
    **/
    count<T extends Contract_typesCountArgs>(
      args?: Subset<T, Contract_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Contract_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contract_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Contract_typesAggregateArgs>(args: Subset<T, Contract_typesAggregateArgs>): Prisma.PrismaPromise<GetContract_typesAggregateType<T>>

    /**
     * Group by Contract_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contract_typesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Contract_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Contract_typesGroupByArgs['orderBy'] }
        : { orderBy?: Contract_typesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Contract_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContract_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Contract_typesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Contract_types base type for findUnique actions
   */
  export type Contract_typesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Contract_types
     */
    select?: Contract_typesSelect | null
    /**
     * Filter, which Contract_types to fetch.
     */
    where: Contract_typesWhereUniqueInput
  }

  /**
   * Contract_types findUnique
   */
  export interface Contract_typesFindUniqueArgs extends Contract_typesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Contract_types findUniqueOrThrow
   */
  export type Contract_typesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Contract_types
     */
    select?: Contract_typesSelect | null
    /**
     * Filter, which Contract_types to fetch.
     */
    where: Contract_typesWhereUniqueInput
  }


  /**
   * Contract_types base type for findFirst actions
   */
  export type Contract_typesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Contract_types
     */
    select?: Contract_typesSelect | null
    /**
     * Filter, which Contract_types to fetch.
     */
    where?: Contract_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contract_types to fetch.
     */
    orderBy?: Enumerable<Contract_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contract_types.
     */
    cursor?: Contract_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contract_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contract_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contract_types.
     */
    distinct?: Enumerable<Contract_typesScalarFieldEnum>
  }

  /**
   * Contract_types findFirst
   */
  export interface Contract_typesFindFirstArgs extends Contract_typesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Contract_types findFirstOrThrow
   */
  export type Contract_typesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Contract_types
     */
    select?: Contract_typesSelect | null
    /**
     * Filter, which Contract_types to fetch.
     */
    where?: Contract_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contract_types to fetch.
     */
    orderBy?: Enumerable<Contract_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contract_types.
     */
    cursor?: Contract_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contract_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contract_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contract_types.
     */
    distinct?: Enumerable<Contract_typesScalarFieldEnum>
  }


  /**
   * Contract_types findMany
   */
  export type Contract_typesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Contract_types
     */
    select?: Contract_typesSelect | null
    /**
     * Filter, which Contract_types to fetch.
     */
    where?: Contract_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contract_types to fetch.
     */
    orderBy?: Enumerable<Contract_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contract_types.
     */
    cursor?: Contract_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contract_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contract_types.
     */
    skip?: number
    distinct?: Enumerable<Contract_typesScalarFieldEnum>
  }


  /**
   * Contract_types create
   */
  export type Contract_typesCreateArgs = {
    /**
     * Select specific fields to fetch from the Contract_types
     */
    select?: Contract_typesSelect | null
    /**
     * The data needed to create a Contract_types.
     */
    data: XOR<Contract_typesCreateInput, Contract_typesUncheckedCreateInput>
  }


  /**
   * Contract_types createMany
   */
  export type Contract_typesCreateManyArgs = {
    /**
     * The data used to create many Contract_types.
     */
    data: Enumerable<Contract_typesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Contract_types update
   */
  export type Contract_typesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Contract_types
     */
    select?: Contract_typesSelect | null
    /**
     * The data needed to update a Contract_types.
     */
    data: XOR<Contract_typesUpdateInput, Contract_typesUncheckedUpdateInput>
    /**
     * Choose, which Contract_types to update.
     */
    where: Contract_typesWhereUniqueInput
  }


  /**
   * Contract_types updateMany
   */
  export type Contract_typesUpdateManyArgs = {
    /**
     * The data used to update Contract_types.
     */
    data: XOR<Contract_typesUpdateManyMutationInput, Contract_typesUncheckedUpdateManyInput>
    /**
     * Filter which Contract_types to update
     */
    where?: Contract_typesWhereInput
  }


  /**
   * Contract_types upsert
   */
  export type Contract_typesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Contract_types
     */
    select?: Contract_typesSelect | null
    /**
     * The filter to search for the Contract_types to update in case it exists.
     */
    where: Contract_typesWhereUniqueInput
    /**
     * In case the Contract_types found by the `where` argument doesn't exist, create a new Contract_types with this data.
     */
    create: XOR<Contract_typesCreateInput, Contract_typesUncheckedCreateInput>
    /**
     * In case the Contract_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Contract_typesUpdateInput, Contract_typesUncheckedUpdateInput>
  }


  /**
   * Contract_types delete
   */
  export type Contract_typesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Contract_types
     */
    select?: Contract_typesSelect | null
    /**
     * Filter which Contract_types to delete.
     */
    where: Contract_typesWhereUniqueInput
  }


  /**
   * Contract_types deleteMany
   */
  export type Contract_typesDeleteManyArgs = {
    /**
     * Filter which Contract_types to delete
     */
    where?: Contract_typesWhereInput
  }


  /**
   * Contract_types without action
   */
  export type Contract_typesArgs = {
    /**
     * Select specific fields to fetch from the Contract_types
     */
    select?: Contract_typesSelect | null
  }



  /**
   * Model GeneratorBrands
   */


  export type AggregateGeneratorBrands = {
    _count: GeneratorBrandsCountAggregateOutputType | null
    _avg: GeneratorBrandsAvgAggregateOutputType | null
    _sum: GeneratorBrandsSumAggregateOutputType | null
    _min: GeneratorBrandsMinAggregateOutputType | null
    _max: GeneratorBrandsMaxAggregateOutputType | null
  }

  export type GeneratorBrandsAvgAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type GeneratorBrandsSumAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type GeneratorBrandsMinAggregateOutputType = {
    id: number | null
    brand_name: string | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GeneratorBrandsMaxAggregateOutputType = {
    id: number | null
    brand_name: string | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GeneratorBrandsCountAggregateOutputType = {
    id: number
    brand_name: number
    status: number
    is_deleted: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type GeneratorBrandsAvgAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type GeneratorBrandsSumAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type GeneratorBrandsMinAggregateInputType = {
    id?: true
    brand_name?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type GeneratorBrandsMaxAggregateInputType = {
    id?: true
    brand_name?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type GeneratorBrandsCountAggregateInputType = {
    id?: true
    brand_name?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type GeneratorBrandsAggregateArgs = {
    /**
     * Filter which GeneratorBrands to aggregate.
     */
    where?: GeneratorBrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratorBrands to fetch.
     */
    orderBy?: Enumerable<GeneratorBrandsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneratorBrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratorBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratorBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneratorBrands
    **/
    _count?: true | GeneratorBrandsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneratorBrandsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneratorBrandsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneratorBrandsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneratorBrandsMaxAggregateInputType
  }

  export type GetGeneratorBrandsAggregateType<T extends GeneratorBrandsAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneratorBrands]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneratorBrands[P]>
      : GetScalarType<T[P], AggregateGeneratorBrands[P]>
  }




  export type GeneratorBrandsGroupByArgs = {
    where?: GeneratorBrandsWhereInput
    orderBy?: Enumerable<GeneratorBrandsOrderByWithAggregationInput>
    by: GeneratorBrandsScalarFieldEnum[]
    having?: GeneratorBrandsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneratorBrandsCountAggregateInputType | true
    _avg?: GeneratorBrandsAvgAggregateInputType
    _sum?: GeneratorBrandsSumAggregateInputType
    _min?: GeneratorBrandsMinAggregateInputType
    _max?: GeneratorBrandsMaxAggregateInputType
  }


  export type GeneratorBrandsGroupByOutputType = {
    id: number
    brand_name: string | null
    status: number
    is_deleted: number
    created_at: Date
    updated_at: Date
    _count: GeneratorBrandsCountAggregateOutputType | null
    _avg: GeneratorBrandsAvgAggregateOutputType | null
    _sum: GeneratorBrandsSumAggregateOutputType | null
    _min: GeneratorBrandsMinAggregateOutputType | null
    _max: GeneratorBrandsMaxAggregateOutputType | null
  }

  type GetGeneratorBrandsGroupByPayload<T extends GeneratorBrandsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GeneratorBrandsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneratorBrandsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneratorBrandsGroupByOutputType[P]>
            : GetScalarType<T[P], GeneratorBrandsGroupByOutputType[P]>
        }
      >
    >


  export type GeneratorBrandsSelect = {
    id?: boolean
    brand_name?: boolean
    status?: boolean
    is_deleted?: boolean
    created_at?: boolean
    updated_at?: boolean
    brand_type?: boolean | GeneratorBrands$brand_typeArgs
    _count?: boolean | GeneratorBrandsCountOutputTypeArgs
  }


  export type GeneratorBrandsInclude = {
    brand_type?: boolean | GeneratorBrands$brand_typeArgs
    _count?: boolean | GeneratorBrandsCountOutputTypeArgs
  }

  export type GeneratorBrandsGetPayload<S extends boolean | null | undefined | GeneratorBrandsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GeneratorBrands :
    S extends undefined ? never :
    S extends { include: any } & (GeneratorBrandsArgs | GeneratorBrandsFindManyArgs)
    ? GeneratorBrands  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'brand_type' ? Array < GeneratorModelsGetPayload<S['include'][P]>>  :
        P extends '_count' ? GeneratorBrandsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (GeneratorBrandsArgs | GeneratorBrandsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'brand_type' ? Array < GeneratorModelsGetPayload<S['select'][P]>>  :
        P extends '_count' ? GeneratorBrandsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof GeneratorBrands ? GeneratorBrands[P] : never
  } 
      : GeneratorBrands


  type GeneratorBrandsCountArgs = 
    Omit<GeneratorBrandsFindManyArgs, 'select' | 'include'> & {
      select?: GeneratorBrandsCountAggregateInputType | true
    }

  export interface GeneratorBrandsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one GeneratorBrands that matches the filter.
     * @param {GeneratorBrandsFindUniqueArgs} args - Arguments to find a GeneratorBrands
     * @example
     * // Get one GeneratorBrands
     * const generatorBrands = await prisma.generatorBrands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GeneratorBrandsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GeneratorBrandsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GeneratorBrands'> extends True ? Prisma__GeneratorBrandsClient<GeneratorBrandsGetPayload<T>> : Prisma__GeneratorBrandsClient<GeneratorBrandsGetPayload<T> | null, null>

    /**
     * Find one GeneratorBrands that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GeneratorBrandsFindUniqueOrThrowArgs} args - Arguments to find a GeneratorBrands
     * @example
     * // Get one GeneratorBrands
     * const generatorBrands = await prisma.generatorBrands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GeneratorBrandsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GeneratorBrandsFindUniqueOrThrowArgs>
    ): Prisma__GeneratorBrandsClient<GeneratorBrandsGetPayload<T>>

    /**
     * Find the first GeneratorBrands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorBrandsFindFirstArgs} args - Arguments to find a GeneratorBrands
     * @example
     * // Get one GeneratorBrands
     * const generatorBrands = await prisma.generatorBrands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GeneratorBrandsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GeneratorBrandsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GeneratorBrands'> extends True ? Prisma__GeneratorBrandsClient<GeneratorBrandsGetPayload<T>> : Prisma__GeneratorBrandsClient<GeneratorBrandsGetPayload<T> | null, null>

    /**
     * Find the first GeneratorBrands that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorBrandsFindFirstOrThrowArgs} args - Arguments to find a GeneratorBrands
     * @example
     * // Get one GeneratorBrands
     * const generatorBrands = await prisma.generatorBrands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GeneratorBrandsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GeneratorBrandsFindFirstOrThrowArgs>
    ): Prisma__GeneratorBrandsClient<GeneratorBrandsGetPayload<T>>

    /**
     * Find zero or more GeneratorBrands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorBrandsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneratorBrands
     * const generatorBrands = await prisma.generatorBrands.findMany()
     * 
     * // Get first 10 GeneratorBrands
     * const generatorBrands = await prisma.generatorBrands.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generatorBrandsWithIdOnly = await prisma.generatorBrands.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GeneratorBrandsFindManyArgs>(
      args?: SelectSubset<T, GeneratorBrandsFindManyArgs>
    ): Prisma.PrismaPromise<Array<GeneratorBrandsGetPayload<T>>>

    /**
     * Create a GeneratorBrands.
     * @param {GeneratorBrandsCreateArgs} args - Arguments to create a GeneratorBrands.
     * @example
     * // Create one GeneratorBrands
     * const GeneratorBrands = await prisma.generatorBrands.create({
     *   data: {
     *     // ... data to create a GeneratorBrands
     *   }
     * })
     * 
    **/
    create<T extends GeneratorBrandsCreateArgs>(
      args: SelectSubset<T, GeneratorBrandsCreateArgs>
    ): Prisma__GeneratorBrandsClient<GeneratorBrandsGetPayload<T>>

    /**
     * Create many GeneratorBrands.
     *     @param {GeneratorBrandsCreateManyArgs} args - Arguments to create many GeneratorBrands.
     *     @example
     *     // Create many GeneratorBrands
     *     const generatorBrands = await prisma.generatorBrands.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GeneratorBrandsCreateManyArgs>(
      args?: SelectSubset<T, GeneratorBrandsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GeneratorBrands.
     * @param {GeneratorBrandsDeleteArgs} args - Arguments to delete one GeneratorBrands.
     * @example
     * // Delete one GeneratorBrands
     * const GeneratorBrands = await prisma.generatorBrands.delete({
     *   where: {
     *     // ... filter to delete one GeneratorBrands
     *   }
     * })
     * 
    **/
    delete<T extends GeneratorBrandsDeleteArgs>(
      args: SelectSubset<T, GeneratorBrandsDeleteArgs>
    ): Prisma__GeneratorBrandsClient<GeneratorBrandsGetPayload<T>>

    /**
     * Update one GeneratorBrands.
     * @param {GeneratorBrandsUpdateArgs} args - Arguments to update one GeneratorBrands.
     * @example
     * // Update one GeneratorBrands
     * const generatorBrands = await prisma.generatorBrands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GeneratorBrandsUpdateArgs>(
      args: SelectSubset<T, GeneratorBrandsUpdateArgs>
    ): Prisma__GeneratorBrandsClient<GeneratorBrandsGetPayload<T>>

    /**
     * Delete zero or more GeneratorBrands.
     * @param {GeneratorBrandsDeleteManyArgs} args - Arguments to filter GeneratorBrands to delete.
     * @example
     * // Delete a few GeneratorBrands
     * const { count } = await prisma.generatorBrands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GeneratorBrandsDeleteManyArgs>(
      args?: SelectSubset<T, GeneratorBrandsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratorBrands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorBrandsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneratorBrands
     * const generatorBrands = await prisma.generatorBrands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GeneratorBrandsUpdateManyArgs>(
      args: SelectSubset<T, GeneratorBrandsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GeneratorBrands.
     * @param {GeneratorBrandsUpsertArgs} args - Arguments to update or create a GeneratorBrands.
     * @example
     * // Update or create a GeneratorBrands
     * const generatorBrands = await prisma.generatorBrands.upsert({
     *   create: {
     *     // ... data to create a GeneratorBrands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneratorBrands we want to update
     *   }
     * })
    **/
    upsert<T extends GeneratorBrandsUpsertArgs>(
      args: SelectSubset<T, GeneratorBrandsUpsertArgs>
    ): Prisma__GeneratorBrandsClient<GeneratorBrandsGetPayload<T>>

    /**
     * Count the number of GeneratorBrands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorBrandsCountArgs} args - Arguments to filter GeneratorBrands to count.
     * @example
     * // Count the number of GeneratorBrands
     * const count = await prisma.generatorBrands.count({
     *   where: {
     *     // ... the filter for the GeneratorBrands we want to count
     *   }
     * })
    **/
    count<T extends GeneratorBrandsCountArgs>(
      args?: Subset<T, GeneratorBrandsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneratorBrandsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneratorBrands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorBrandsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GeneratorBrandsAggregateArgs>(args: Subset<T, GeneratorBrandsAggregateArgs>): Prisma.PrismaPromise<GetGeneratorBrandsAggregateType<T>>

    /**
     * Group by GeneratorBrands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorBrandsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GeneratorBrandsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneratorBrandsGroupByArgs['orderBy'] }
        : { orderBy?: GeneratorBrandsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GeneratorBrandsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneratorBrandsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneratorBrands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GeneratorBrandsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    brand_type<T extends GeneratorBrands$brand_typeArgs= {}>(args?: Subset<T, GeneratorBrands$brand_typeArgs>): Prisma.PrismaPromise<Array<GeneratorModelsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * GeneratorBrands base type for findUnique actions
   */
  export type GeneratorBrandsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the GeneratorBrands
     */
    select?: GeneratorBrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorBrandsInclude | null
    /**
     * Filter, which GeneratorBrands to fetch.
     */
    where: GeneratorBrandsWhereUniqueInput
  }

  /**
   * GeneratorBrands findUnique
   */
  export interface GeneratorBrandsFindUniqueArgs extends GeneratorBrandsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GeneratorBrands findUniqueOrThrow
   */
  export type GeneratorBrandsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the GeneratorBrands
     */
    select?: GeneratorBrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorBrandsInclude | null
    /**
     * Filter, which GeneratorBrands to fetch.
     */
    where: GeneratorBrandsWhereUniqueInput
  }


  /**
   * GeneratorBrands base type for findFirst actions
   */
  export type GeneratorBrandsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the GeneratorBrands
     */
    select?: GeneratorBrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorBrandsInclude | null
    /**
     * Filter, which GeneratorBrands to fetch.
     */
    where?: GeneratorBrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratorBrands to fetch.
     */
    orderBy?: Enumerable<GeneratorBrandsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratorBrands.
     */
    cursor?: GeneratorBrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratorBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratorBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratorBrands.
     */
    distinct?: Enumerable<GeneratorBrandsScalarFieldEnum>
  }

  /**
   * GeneratorBrands findFirst
   */
  export interface GeneratorBrandsFindFirstArgs extends GeneratorBrandsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GeneratorBrands findFirstOrThrow
   */
  export type GeneratorBrandsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the GeneratorBrands
     */
    select?: GeneratorBrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorBrandsInclude | null
    /**
     * Filter, which GeneratorBrands to fetch.
     */
    where?: GeneratorBrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratorBrands to fetch.
     */
    orderBy?: Enumerable<GeneratorBrandsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratorBrands.
     */
    cursor?: GeneratorBrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratorBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratorBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratorBrands.
     */
    distinct?: Enumerable<GeneratorBrandsScalarFieldEnum>
  }


  /**
   * GeneratorBrands findMany
   */
  export type GeneratorBrandsFindManyArgs = {
    /**
     * Select specific fields to fetch from the GeneratorBrands
     */
    select?: GeneratorBrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorBrandsInclude | null
    /**
     * Filter, which GeneratorBrands to fetch.
     */
    where?: GeneratorBrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratorBrands to fetch.
     */
    orderBy?: Enumerable<GeneratorBrandsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneratorBrands.
     */
    cursor?: GeneratorBrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratorBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratorBrands.
     */
    skip?: number
    distinct?: Enumerable<GeneratorBrandsScalarFieldEnum>
  }


  /**
   * GeneratorBrands create
   */
  export type GeneratorBrandsCreateArgs = {
    /**
     * Select specific fields to fetch from the GeneratorBrands
     */
    select?: GeneratorBrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorBrandsInclude | null
    /**
     * The data needed to create a GeneratorBrands.
     */
    data: XOR<GeneratorBrandsCreateInput, GeneratorBrandsUncheckedCreateInput>
  }


  /**
   * GeneratorBrands createMany
   */
  export type GeneratorBrandsCreateManyArgs = {
    /**
     * The data used to create many GeneratorBrands.
     */
    data: Enumerable<GeneratorBrandsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GeneratorBrands update
   */
  export type GeneratorBrandsUpdateArgs = {
    /**
     * Select specific fields to fetch from the GeneratorBrands
     */
    select?: GeneratorBrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorBrandsInclude | null
    /**
     * The data needed to update a GeneratorBrands.
     */
    data: XOR<GeneratorBrandsUpdateInput, GeneratorBrandsUncheckedUpdateInput>
    /**
     * Choose, which GeneratorBrands to update.
     */
    where: GeneratorBrandsWhereUniqueInput
  }


  /**
   * GeneratorBrands updateMany
   */
  export type GeneratorBrandsUpdateManyArgs = {
    /**
     * The data used to update GeneratorBrands.
     */
    data: XOR<GeneratorBrandsUpdateManyMutationInput, GeneratorBrandsUncheckedUpdateManyInput>
    /**
     * Filter which GeneratorBrands to update
     */
    where?: GeneratorBrandsWhereInput
  }


  /**
   * GeneratorBrands upsert
   */
  export type GeneratorBrandsUpsertArgs = {
    /**
     * Select specific fields to fetch from the GeneratorBrands
     */
    select?: GeneratorBrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorBrandsInclude | null
    /**
     * The filter to search for the GeneratorBrands to update in case it exists.
     */
    where: GeneratorBrandsWhereUniqueInput
    /**
     * In case the GeneratorBrands found by the `where` argument doesn't exist, create a new GeneratorBrands with this data.
     */
    create: XOR<GeneratorBrandsCreateInput, GeneratorBrandsUncheckedCreateInput>
    /**
     * In case the GeneratorBrands was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneratorBrandsUpdateInput, GeneratorBrandsUncheckedUpdateInput>
  }


  /**
   * GeneratorBrands delete
   */
  export type GeneratorBrandsDeleteArgs = {
    /**
     * Select specific fields to fetch from the GeneratorBrands
     */
    select?: GeneratorBrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorBrandsInclude | null
    /**
     * Filter which GeneratorBrands to delete.
     */
    where: GeneratorBrandsWhereUniqueInput
  }


  /**
   * GeneratorBrands deleteMany
   */
  export type GeneratorBrandsDeleteManyArgs = {
    /**
     * Filter which GeneratorBrands to delete
     */
    where?: GeneratorBrandsWhereInput
  }


  /**
   * GeneratorBrands.brand_type
   */
  export type GeneratorBrands$brand_typeArgs = {
    /**
     * Select specific fields to fetch from the GeneratorModels
     */
    select?: GeneratorModelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorModelsInclude | null
    where?: GeneratorModelsWhereInput
    orderBy?: Enumerable<GeneratorModelsOrderByWithRelationInput>
    cursor?: GeneratorModelsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GeneratorModelsScalarFieldEnum>
  }


  /**
   * GeneratorBrands without action
   */
  export type GeneratorBrandsArgs = {
    /**
     * Select specific fields to fetch from the GeneratorBrands
     */
    select?: GeneratorBrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorBrandsInclude | null
  }



  /**
   * Model GeneratorModels
   */


  export type AggregateGeneratorModels = {
    _count: GeneratorModelsCountAggregateOutputType | null
    _avg: GeneratorModelsAvgAggregateOutputType | null
    _sum: GeneratorModelsSumAggregateOutputType | null
    _min: GeneratorModelsMinAggregateOutputType | null
    _max: GeneratorModelsMaxAggregateOutputType | null
  }

  export type GeneratorModelsAvgAggregateOutputType = {
    id: number | null
    brand_id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type GeneratorModelsSumAggregateOutputType = {
    id: number | null
    brand_id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type GeneratorModelsMinAggregateOutputType = {
    id: number | null
    model_name: string | null
    brand_id: number | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GeneratorModelsMaxAggregateOutputType = {
    id: number | null
    model_name: string | null
    brand_id: number | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GeneratorModelsCountAggregateOutputType = {
    id: number
    model_name: number
    brand_id: number
    status: number
    is_deleted: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type GeneratorModelsAvgAggregateInputType = {
    id?: true
    brand_id?: true
    status?: true
    is_deleted?: true
  }

  export type GeneratorModelsSumAggregateInputType = {
    id?: true
    brand_id?: true
    status?: true
    is_deleted?: true
  }

  export type GeneratorModelsMinAggregateInputType = {
    id?: true
    model_name?: true
    brand_id?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type GeneratorModelsMaxAggregateInputType = {
    id?: true
    model_name?: true
    brand_id?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type GeneratorModelsCountAggregateInputType = {
    id?: true
    model_name?: true
    brand_id?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type GeneratorModelsAggregateArgs = {
    /**
     * Filter which GeneratorModels to aggregate.
     */
    where?: GeneratorModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratorModels to fetch.
     */
    orderBy?: Enumerable<GeneratorModelsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneratorModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratorModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratorModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneratorModels
    **/
    _count?: true | GeneratorModelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneratorModelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneratorModelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneratorModelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneratorModelsMaxAggregateInputType
  }

  export type GetGeneratorModelsAggregateType<T extends GeneratorModelsAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneratorModels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneratorModels[P]>
      : GetScalarType<T[P], AggregateGeneratorModels[P]>
  }




  export type GeneratorModelsGroupByArgs = {
    where?: GeneratorModelsWhereInput
    orderBy?: Enumerable<GeneratorModelsOrderByWithAggregationInput>
    by: GeneratorModelsScalarFieldEnum[]
    having?: GeneratorModelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneratorModelsCountAggregateInputType | true
    _avg?: GeneratorModelsAvgAggregateInputType
    _sum?: GeneratorModelsSumAggregateInputType
    _min?: GeneratorModelsMinAggregateInputType
    _max?: GeneratorModelsMaxAggregateInputType
  }


  export type GeneratorModelsGroupByOutputType = {
    id: number
    model_name: string | null
    brand_id: number
    status: number
    is_deleted: number
    created_at: Date
    updated_at: Date
    _count: GeneratorModelsCountAggregateOutputType | null
    _avg: GeneratorModelsAvgAggregateOutputType | null
    _sum: GeneratorModelsSumAggregateOutputType | null
    _min: GeneratorModelsMinAggregateOutputType | null
    _max: GeneratorModelsMaxAggregateOutputType | null
  }

  type GetGeneratorModelsGroupByPayload<T extends GeneratorModelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GeneratorModelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneratorModelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneratorModelsGroupByOutputType[P]>
            : GetScalarType<T[P], GeneratorModelsGroupByOutputType[P]>
        }
      >
    >


  export type GeneratorModelsSelect = {
    id?: boolean
    model_name?: boolean
    brand_id?: boolean
    status?: boolean
    is_deleted?: boolean
    created_at?: boolean
    updated_at?: boolean
    brand_type?: boolean | GeneratorBrandsArgs
  }


  export type GeneratorModelsInclude = {
    brand_type?: boolean | GeneratorBrandsArgs
  }

  export type GeneratorModelsGetPayload<S extends boolean | null | undefined | GeneratorModelsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GeneratorModels :
    S extends undefined ? never :
    S extends { include: any } & (GeneratorModelsArgs | GeneratorModelsFindManyArgs)
    ? GeneratorModels  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'brand_type' ? GeneratorBrandsGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (GeneratorModelsArgs | GeneratorModelsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'brand_type' ? GeneratorBrandsGetPayload<S['select'][P]> | null :  P extends keyof GeneratorModels ? GeneratorModels[P] : never
  } 
      : GeneratorModels


  type GeneratorModelsCountArgs = 
    Omit<GeneratorModelsFindManyArgs, 'select' | 'include'> & {
      select?: GeneratorModelsCountAggregateInputType | true
    }

  export interface GeneratorModelsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one GeneratorModels that matches the filter.
     * @param {GeneratorModelsFindUniqueArgs} args - Arguments to find a GeneratorModels
     * @example
     * // Get one GeneratorModels
     * const generatorModels = await prisma.generatorModels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GeneratorModelsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GeneratorModelsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GeneratorModels'> extends True ? Prisma__GeneratorModelsClient<GeneratorModelsGetPayload<T>> : Prisma__GeneratorModelsClient<GeneratorModelsGetPayload<T> | null, null>

    /**
     * Find one GeneratorModels that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GeneratorModelsFindUniqueOrThrowArgs} args - Arguments to find a GeneratorModels
     * @example
     * // Get one GeneratorModels
     * const generatorModels = await prisma.generatorModels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GeneratorModelsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GeneratorModelsFindUniqueOrThrowArgs>
    ): Prisma__GeneratorModelsClient<GeneratorModelsGetPayload<T>>

    /**
     * Find the first GeneratorModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorModelsFindFirstArgs} args - Arguments to find a GeneratorModels
     * @example
     * // Get one GeneratorModels
     * const generatorModels = await prisma.generatorModels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GeneratorModelsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GeneratorModelsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GeneratorModels'> extends True ? Prisma__GeneratorModelsClient<GeneratorModelsGetPayload<T>> : Prisma__GeneratorModelsClient<GeneratorModelsGetPayload<T> | null, null>

    /**
     * Find the first GeneratorModels that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorModelsFindFirstOrThrowArgs} args - Arguments to find a GeneratorModels
     * @example
     * // Get one GeneratorModels
     * const generatorModels = await prisma.generatorModels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GeneratorModelsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GeneratorModelsFindFirstOrThrowArgs>
    ): Prisma__GeneratorModelsClient<GeneratorModelsGetPayload<T>>

    /**
     * Find zero or more GeneratorModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorModelsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneratorModels
     * const generatorModels = await prisma.generatorModels.findMany()
     * 
     * // Get first 10 GeneratorModels
     * const generatorModels = await prisma.generatorModels.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generatorModelsWithIdOnly = await prisma.generatorModels.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GeneratorModelsFindManyArgs>(
      args?: SelectSubset<T, GeneratorModelsFindManyArgs>
    ): Prisma.PrismaPromise<Array<GeneratorModelsGetPayload<T>>>

    /**
     * Create a GeneratorModels.
     * @param {GeneratorModelsCreateArgs} args - Arguments to create a GeneratorModels.
     * @example
     * // Create one GeneratorModels
     * const GeneratorModels = await prisma.generatorModels.create({
     *   data: {
     *     // ... data to create a GeneratorModels
     *   }
     * })
     * 
    **/
    create<T extends GeneratorModelsCreateArgs>(
      args: SelectSubset<T, GeneratorModelsCreateArgs>
    ): Prisma__GeneratorModelsClient<GeneratorModelsGetPayload<T>>

    /**
     * Create many GeneratorModels.
     *     @param {GeneratorModelsCreateManyArgs} args - Arguments to create many GeneratorModels.
     *     @example
     *     // Create many GeneratorModels
     *     const generatorModels = await prisma.generatorModels.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GeneratorModelsCreateManyArgs>(
      args?: SelectSubset<T, GeneratorModelsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GeneratorModels.
     * @param {GeneratorModelsDeleteArgs} args - Arguments to delete one GeneratorModels.
     * @example
     * // Delete one GeneratorModels
     * const GeneratorModels = await prisma.generatorModels.delete({
     *   where: {
     *     // ... filter to delete one GeneratorModels
     *   }
     * })
     * 
    **/
    delete<T extends GeneratorModelsDeleteArgs>(
      args: SelectSubset<T, GeneratorModelsDeleteArgs>
    ): Prisma__GeneratorModelsClient<GeneratorModelsGetPayload<T>>

    /**
     * Update one GeneratorModels.
     * @param {GeneratorModelsUpdateArgs} args - Arguments to update one GeneratorModels.
     * @example
     * // Update one GeneratorModels
     * const generatorModels = await prisma.generatorModels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GeneratorModelsUpdateArgs>(
      args: SelectSubset<T, GeneratorModelsUpdateArgs>
    ): Prisma__GeneratorModelsClient<GeneratorModelsGetPayload<T>>

    /**
     * Delete zero or more GeneratorModels.
     * @param {GeneratorModelsDeleteManyArgs} args - Arguments to filter GeneratorModels to delete.
     * @example
     * // Delete a few GeneratorModels
     * const { count } = await prisma.generatorModels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GeneratorModelsDeleteManyArgs>(
      args?: SelectSubset<T, GeneratorModelsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratorModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorModelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneratorModels
     * const generatorModels = await prisma.generatorModels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GeneratorModelsUpdateManyArgs>(
      args: SelectSubset<T, GeneratorModelsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GeneratorModels.
     * @param {GeneratorModelsUpsertArgs} args - Arguments to update or create a GeneratorModels.
     * @example
     * // Update or create a GeneratorModels
     * const generatorModels = await prisma.generatorModels.upsert({
     *   create: {
     *     // ... data to create a GeneratorModels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneratorModels we want to update
     *   }
     * })
    **/
    upsert<T extends GeneratorModelsUpsertArgs>(
      args: SelectSubset<T, GeneratorModelsUpsertArgs>
    ): Prisma__GeneratorModelsClient<GeneratorModelsGetPayload<T>>

    /**
     * Count the number of GeneratorModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorModelsCountArgs} args - Arguments to filter GeneratorModels to count.
     * @example
     * // Count the number of GeneratorModels
     * const count = await prisma.generatorModels.count({
     *   where: {
     *     // ... the filter for the GeneratorModels we want to count
     *   }
     * })
    **/
    count<T extends GeneratorModelsCountArgs>(
      args?: Subset<T, GeneratorModelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneratorModelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneratorModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorModelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GeneratorModelsAggregateArgs>(args: Subset<T, GeneratorModelsAggregateArgs>): Prisma.PrismaPromise<GetGeneratorModelsAggregateType<T>>

    /**
     * Group by GeneratorModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorModelsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GeneratorModelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneratorModelsGroupByArgs['orderBy'] }
        : { orderBy?: GeneratorModelsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GeneratorModelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneratorModelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneratorModels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GeneratorModelsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    brand_type<T extends GeneratorBrandsArgs= {}>(args?: Subset<T, GeneratorBrandsArgs>): Prisma__GeneratorBrandsClient<GeneratorBrandsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * GeneratorModels base type for findUnique actions
   */
  export type GeneratorModelsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the GeneratorModels
     */
    select?: GeneratorModelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorModelsInclude | null
    /**
     * Filter, which GeneratorModels to fetch.
     */
    where: GeneratorModelsWhereUniqueInput
  }

  /**
   * GeneratorModels findUnique
   */
  export interface GeneratorModelsFindUniqueArgs extends GeneratorModelsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GeneratorModels findUniqueOrThrow
   */
  export type GeneratorModelsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the GeneratorModels
     */
    select?: GeneratorModelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorModelsInclude | null
    /**
     * Filter, which GeneratorModels to fetch.
     */
    where: GeneratorModelsWhereUniqueInput
  }


  /**
   * GeneratorModels base type for findFirst actions
   */
  export type GeneratorModelsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the GeneratorModels
     */
    select?: GeneratorModelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorModelsInclude | null
    /**
     * Filter, which GeneratorModels to fetch.
     */
    where?: GeneratorModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratorModels to fetch.
     */
    orderBy?: Enumerable<GeneratorModelsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratorModels.
     */
    cursor?: GeneratorModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratorModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratorModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratorModels.
     */
    distinct?: Enumerable<GeneratorModelsScalarFieldEnum>
  }

  /**
   * GeneratorModels findFirst
   */
  export interface GeneratorModelsFindFirstArgs extends GeneratorModelsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GeneratorModels findFirstOrThrow
   */
  export type GeneratorModelsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the GeneratorModels
     */
    select?: GeneratorModelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorModelsInclude | null
    /**
     * Filter, which GeneratorModels to fetch.
     */
    where?: GeneratorModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratorModels to fetch.
     */
    orderBy?: Enumerable<GeneratorModelsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratorModels.
     */
    cursor?: GeneratorModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratorModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratorModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratorModels.
     */
    distinct?: Enumerable<GeneratorModelsScalarFieldEnum>
  }


  /**
   * GeneratorModels findMany
   */
  export type GeneratorModelsFindManyArgs = {
    /**
     * Select specific fields to fetch from the GeneratorModels
     */
    select?: GeneratorModelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorModelsInclude | null
    /**
     * Filter, which GeneratorModels to fetch.
     */
    where?: GeneratorModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratorModels to fetch.
     */
    orderBy?: Enumerable<GeneratorModelsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneratorModels.
     */
    cursor?: GeneratorModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratorModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratorModels.
     */
    skip?: number
    distinct?: Enumerable<GeneratorModelsScalarFieldEnum>
  }


  /**
   * GeneratorModels create
   */
  export type GeneratorModelsCreateArgs = {
    /**
     * Select specific fields to fetch from the GeneratorModels
     */
    select?: GeneratorModelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorModelsInclude | null
    /**
     * The data needed to create a GeneratorModels.
     */
    data: XOR<GeneratorModelsCreateInput, GeneratorModelsUncheckedCreateInput>
  }


  /**
   * GeneratorModels createMany
   */
  export type GeneratorModelsCreateManyArgs = {
    /**
     * The data used to create many GeneratorModels.
     */
    data: Enumerable<GeneratorModelsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GeneratorModels update
   */
  export type GeneratorModelsUpdateArgs = {
    /**
     * Select specific fields to fetch from the GeneratorModels
     */
    select?: GeneratorModelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorModelsInclude | null
    /**
     * The data needed to update a GeneratorModels.
     */
    data: XOR<GeneratorModelsUpdateInput, GeneratorModelsUncheckedUpdateInput>
    /**
     * Choose, which GeneratorModels to update.
     */
    where: GeneratorModelsWhereUniqueInput
  }


  /**
   * GeneratorModels updateMany
   */
  export type GeneratorModelsUpdateManyArgs = {
    /**
     * The data used to update GeneratorModels.
     */
    data: XOR<GeneratorModelsUpdateManyMutationInput, GeneratorModelsUncheckedUpdateManyInput>
    /**
     * Filter which GeneratorModels to update
     */
    where?: GeneratorModelsWhereInput
  }


  /**
   * GeneratorModels upsert
   */
  export type GeneratorModelsUpsertArgs = {
    /**
     * Select specific fields to fetch from the GeneratorModels
     */
    select?: GeneratorModelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorModelsInclude | null
    /**
     * The filter to search for the GeneratorModels to update in case it exists.
     */
    where: GeneratorModelsWhereUniqueInput
    /**
     * In case the GeneratorModels found by the `where` argument doesn't exist, create a new GeneratorModels with this data.
     */
    create: XOR<GeneratorModelsCreateInput, GeneratorModelsUncheckedCreateInput>
    /**
     * In case the GeneratorModels was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneratorModelsUpdateInput, GeneratorModelsUncheckedUpdateInput>
  }


  /**
   * GeneratorModels delete
   */
  export type GeneratorModelsDeleteArgs = {
    /**
     * Select specific fields to fetch from the GeneratorModels
     */
    select?: GeneratorModelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorModelsInclude | null
    /**
     * Filter which GeneratorModels to delete.
     */
    where: GeneratorModelsWhereUniqueInput
  }


  /**
   * GeneratorModels deleteMany
   */
  export type GeneratorModelsDeleteManyArgs = {
    /**
     * Filter which GeneratorModels to delete
     */
    where?: GeneratorModelsWhereInput
  }


  /**
   * GeneratorModels without action
   */
  export type GeneratorModelsArgs = {
    /**
     * Select specific fields to fetch from the GeneratorModels
     */
    select?: GeneratorModelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GeneratorModelsInclude | null
  }



  /**
   * Model GeneratorPhaseTypes
   */


  export type AggregateGeneratorPhaseTypes = {
    _count: GeneratorPhaseTypesCountAggregateOutputType | null
    _avg: GeneratorPhaseTypesAvgAggregateOutputType | null
    _sum: GeneratorPhaseTypesSumAggregateOutputType | null
    _min: GeneratorPhaseTypesMinAggregateOutputType | null
    _max: GeneratorPhaseTypesMaxAggregateOutputType | null
  }

  export type GeneratorPhaseTypesAvgAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type GeneratorPhaseTypesSumAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type GeneratorPhaseTypesMinAggregateOutputType = {
    id: number | null
    phase_type: string | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GeneratorPhaseTypesMaxAggregateOutputType = {
    id: number | null
    phase_type: string | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GeneratorPhaseTypesCountAggregateOutputType = {
    id: number
    phase_type: number
    status: number
    is_deleted: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type GeneratorPhaseTypesAvgAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type GeneratorPhaseTypesSumAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type GeneratorPhaseTypesMinAggregateInputType = {
    id?: true
    phase_type?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type GeneratorPhaseTypesMaxAggregateInputType = {
    id?: true
    phase_type?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type GeneratorPhaseTypesCountAggregateInputType = {
    id?: true
    phase_type?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type GeneratorPhaseTypesAggregateArgs = {
    /**
     * Filter which GeneratorPhaseTypes to aggregate.
     */
    where?: GeneratorPhaseTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratorPhaseTypes to fetch.
     */
    orderBy?: Enumerable<GeneratorPhaseTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneratorPhaseTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratorPhaseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratorPhaseTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneratorPhaseTypes
    **/
    _count?: true | GeneratorPhaseTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneratorPhaseTypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneratorPhaseTypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneratorPhaseTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneratorPhaseTypesMaxAggregateInputType
  }

  export type GetGeneratorPhaseTypesAggregateType<T extends GeneratorPhaseTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneratorPhaseTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneratorPhaseTypes[P]>
      : GetScalarType<T[P], AggregateGeneratorPhaseTypes[P]>
  }




  export type GeneratorPhaseTypesGroupByArgs = {
    where?: GeneratorPhaseTypesWhereInput
    orderBy?: Enumerable<GeneratorPhaseTypesOrderByWithAggregationInput>
    by: GeneratorPhaseTypesScalarFieldEnum[]
    having?: GeneratorPhaseTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneratorPhaseTypesCountAggregateInputType | true
    _avg?: GeneratorPhaseTypesAvgAggregateInputType
    _sum?: GeneratorPhaseTypesSumAggregateInputType
    _min?: GeneratorPhaseTypesMinAggregateInputType
    _max?: GeneratorPhaseTypesMaxAggregateInputType
  }


  export type GeneratorPhaseTypesGroupByOutputType = {
    id: number
    phase_type: string | null
    status: number
    is_deleted: number
    created_at: Date
    updated_at: Date
    _count: GeneratorPhaseTypesCountAggregateOutputType | null
    _avg: GeneratorPhaseTypesAvgAggregateOutputType | null
    _sum: GeneratorPhaseTypesSumAggregateOutputType | null
    _min: GeneratorPhaseTypesMinAggregateOutputType | null
    _max: GeneratorPhaseTypesMaxAggregateOutputType | null
  }

  type GetGeneratorPhaseTypesGroupByPayload<T extends GeneratorPhaseTypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GeneratorPhaseTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneratorPhaseTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneratorPhaseTypesGroupByOutputType[P]>
            : GetScalarType<T[P], GeneratorPhaseTypesGroupByOutputType[P]>
        }
      >
    >


  export type GeneratorPhaseTypesSelect = {
    id?: boolean
    phase_type?: boolean
    status?: boolean
    is_deleted?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type GeneratorPhaseTypesGetPayload<S extends boolean | null | undefined | GeneratorPhaseTypesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GeneratorPhaseTypes :
    S extends undefined ? never :
    S extends { include: any } & (GeneratorPhaseTypesArgs | GeneratorPhaseTypesFindManyArgs)
    ? GeneratorPhaseTypes 
    : S extends { select: any } & (GeneratorPhaseTypesArgs | GeneratorPhaseTypesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof GeneratorPhaseTypes ? GeneratorPhaseTypes[P] : never
  } 
      : GeneratorPhaseTypes


  type GeneratorPhaseTypesCountArgs = 
    Omit<GeneratorPhaseTypesFindManyArgs, 'select' | 'include'> & {
      select?: GeneratorPhaseTypesCountAggregateInputType | true
    }

  export interface GeneratorPhaseTypesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one GeneratorPhaseTypes that matches the filter.
     * @param {GeneratorPhaseTypesFindUniqueArgs} args - Arguments to find a GeneratorPhaseTypes
     * @example
     * // Get one GeneratorPhaseTypes
     * const generatorPhaseTypes = await prisma.generatorPhaseTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GeneratorPhaseTypesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GeneratorPhaseTypesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GeneratorPhaseTypes'> extends True ? Prisma__GeneratorPhaseTypesClient<GeneratorPhaseTypesGetPayload<T>> : Prisma__GeneratorPhaseTypesClient<GeneratorPhaseTypesGetPayload<T> | null, null>

    /**
     * Find one GeneratorPhaseTypes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GeneratorPhaseTypesFindUniqueOrThrowArgs} args - Arguments to find a GeneratorPhaseTypes
     * @example
     * // Get one GeneratorPhaseTypes
     * const generatorPhaseTypes = await prisma.generatorPhaseTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GeneratorPhaseTypesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GeneratorPhaseTypesFindUniqueOrThrowArgs>
    ): Prisma__GeneratorPhaseTypesClient<GeneratorPhaseTypesGetPayload<T>>

    /**
     * Find the first GeneratorPhaseTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorPhaseTypesFindFirstArgs} args - Arguments to find a GeneratorPhaseTypes
     * @example
     * // Get one GeneratorPhaseTypes
     * const generatorPhaseTypes = await prisma.generatorPhaseTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GeneratorPhaseTypesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GeneratorPhaseTypesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GeneratorPhaseTypes'> extends True ? Prisma__GeneratorPhaseTypesClient<GeneratorPhaseTypesGetPayload<T>> : Prisma__GeneratorPhaseTypesClient<GeneratorPhaseTypesGetPayload<T> | null, null>

    /**
     * Find the first GeneratorPhaseTypes that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorPhaseTypesFindFirstOrThrowArgs} args - Arguments to find a GeneratorPhaseTypes
     * @example
     * // Get one GeneratorPhaseTypes
     * const generatorPhaseTypes = await prisma.generatorPhaseTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GeneratorPhaseTypesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GeneratorPhaseTypesFindFirstOrThrowArgs>
    ): Prisma__GeneratorPhaseTypesClient<GeneratorPhaseTypesGetPayload<T>>

    /**
     * Find zero or more GeneratorPhaseTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorPhaseTypesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneratorPhaseTypes
     * const generatorPhaseTypes = await prisma.generatorPhaseTypes.findMany()
     * 
     * // Get first 10 GeneratorPhaseTypes
     * const generatorPhaseTypes = await prisma.generatorPhaseTypes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generatorPhaseTypesWithIdOnly = await prisma.generatorPhaseTypes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GeneratorPhaseTypesFindManyArgs>(
      args?: SelectSubset<T, GeneratorPhaseTypesFindManyArgs>
    ): Prisma.PrismaPromise<Array<GeneratorPhaseTypesGetPayload<T>>>

    /**
     * Create a GeneratorPhaseTypes.
     * @param {GeneratorPhaseTypesCreateArgs} args - Arguments to create a GeneratorPhaseTypes.
     * @example
     * // Create one GeneratorPhaseTypes
     * const GeneratorPhaseTypes = await prisma.generatorPhaseTypes.create({
     *   data: {
     *     // ... data to create a GeneratorPhaseTypes
     *   }
     * })
     * 
    **/
    create<T extends GeneratorPhaseTypesCreateArgs>(
      args: SelectSubset<T, GeneratorPhaseTypesCreateArgs>
    ): Prisma__GeneratorPhaseTypesClient<GeneratorPhaseTypesGetPayload<T>>

    /**
     * Create many GeneratorPhaseTypes.
     *     @param {GeneratorPhaseTypesCreateManyArgs} args - Arguments to create many GeneratorPhaseTypes.
     *     @example
     *     // Create many GeneratorPhaseTypes
     *     const generatorPhaseTypes = await prisma.generatorPhaseTypes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GeneratorPhaseTypesCreateManyArgs>(
      args?: SelectSubset<T, GeneratorPhaseTypesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GeneratorPhaseTypes.
     * @param {GeneratorPhaseTypesDeleteArgs} args - Arguments to delete one GeneratorPhaseTypes.
     * @example
     * // Delete one GeneratorPhaseTypes
     * const GeneratorPhaseTypes = await prisma.generatorPhaseTypes.delete({
     *   where: {
     *     // ... filter to delete one GeneratorPhaseTypes
     *   }
     * })
     * 
    **/
    delete<T extends GeneratorPhaseTypesDeleteArgs>(
      args: SelectSubset<T, GeneratorPhaseTypesDeleteArgs>
    ): Prisma__GeneratorPhaseTypesClient<GeneratorPhaseTypesGetPayload<T>>

    /**
     * Update one GeneratorPhaseTypes.
     * @param {GeneratorPhaseTypesUpdateArgs} args - Arguments to update one GeneratorPhaseTypes.
     * @example
     * // Update one GeneratorPhaseTypes
     * const generatorPhaseTypes = await prisma.generatorPhaseTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GeneratorPhaseTypesUpdateArgs>(
      args: SelectSubset<T, GeneratorPhaseTypesUpdateArgs>
    ): Prisma__GeneratorPhaseTypesClient<GeneratorPhaseTypesGetPayload<T>>

    /**
     * Delete zero or more GeneratorPhaseTypes.
     * @param {GeneratorPhaseTypesDeleteManyArgs} args - Arguments to filter GeneratorPhaseTypes to delete.
     * @example
     * // Delete a few GeneratorPhaseTypes
     * const { count } = await prisma.generatorPhaseTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GeneratorPhaseTypesDeleteManyArgs>(
      args?: SelectSubset<T, GeneratorPhaseTypesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratorPhaseTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorPhaseTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneratorPhaseTypes
     * const generatorPhaseTypes = await prisma.generatorPhaseTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GeneratorPhaseTypesUpdateManyArgs>(
      args: SelectSubset<T, GeneratorPhaseTypesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GeneratorPhaseTypes.
     * @param {GeneratorPhaseTypesUpsertArgs} args - Arguments to update or create a GeneratorPhaseTypes.
     * @example
     * // Update or create a GeneratorPhaseTypes
     * const generatorPhaseTypes = await prisma.generatorPhaseTypes.upsert({
     *   create: {
     *     // ... data to create a GeneratorPhaseTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneratorPhaseTypes we want to update
     *   }
     * })
    **/
    upsert<T extends GeneratorPhaseTypesUpsertArgs>(
      args: SelectSubset<T, GeneratorPhaseTypesUpsertArgs>
    ): Prisma__GeneratorPhaseTypesClient<GeneratorPhaseTypesGetPayload<T>>

    /**
     * Count the number of GeneratorPhaseTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorPhaseTypesCountArgs} args - Arguments to filter GeneratorPhaseTypes to count.
     * @example
     * // Count the number of GeneratorPhaseTypes
     * const count = await prisma.generatorPhaseTypes.count({
     *   where: {
     *     // ... the filter for the GeneratorPhaseTypes we want to count
     *   }
     * })
    **/
    count<T extends GeneratorPhaseTypesCountArgs>(
      args?: Subset<T, GeneratorPhaseTypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneratorPhaseTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneratorPhaseTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorPhaseTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GeneratorPhaseTypesAggregateArgs>(args: Subset<T, GeneratorPhaseTypesAggregateArgs>): Prisma.PrismaPromise<GetGeneratorPhaseTypesAggregateType<T>>

    /**
     * Group by GeneratorPhaseTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratorPhaseTypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GeneratorPhaseTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneratorPhaseTypesGroupByArgs['orderBy'] }
        : { orderBy?: GeneratorPhaseTypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GeneratorPhaseTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneratorPhaseTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneratorPhaseTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GeneratorPhaseTypesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * GeneratorPhaseTypes base type for findUnique actions
   */
  export type GeneratorPhaseTypesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the GeneratorPhaseTypes
     */
    select?: GeneratorPhaseTypesSelect | null
    /**
     * Filter, which GeneratorPhaseTypes to fetch.
     */
    where: GeneratorPhaseTypesWhereUniqueInput
  }

  /**
   * GeneratorPhaseTypes findUnique
   */
  export interface GeneratorPhaseTypesFindUniqueArgs extends GeneratorPhaseTypesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GeneratorPhaseTypes findUniqueOrThrow
   */
  export type GeneratorPhaseTypesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the GeneratorPhaseTypes
     */
    select?: GeneratorPhaseTypesSelect | null
    /**
     * Filter, which GeneratorPhaseTypes to fetch.
     */
    where: GeneratorPhaseTypesWhereUniqueInput
  }


  /**
   * GeneratorPhaseTypes base type for findFirst actions
   */
  export type GeneratorPhaseTypesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the GeneratorPhaseTypes
     */
    select?: GeneratorPhaseTypesSelect | null
    /**
     * Filter, which GeneratorPhaseTypes to fetch.
     */
    where?: GeneratorPhaseTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratorPhaseTypes to fetch.
     */
    orderBy?: Enumerable<GeneratorPhaseTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratorPhaseTypes.
     */
    cursor?: GeneratorPhaseTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratorPhaseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratorPhaseTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratorPhaseTypes.
     */
    distinct?: Enumerable<GeneratorPhaseTypesScalarFieldEnum>
  }

  /**
   * GeneratorPhaseTypes findFirst
   */
  export interface GeneratorPhaseTypesFindFirstArgs extends GeneratorPhaseTypesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GeneratorPhaseTypes findFirstOrThrow
   */
  export type GeneratorPhaseTypesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the GeneratorPhaseTypes
     */
    select?: GeneratorPhaseTypesSelect | null
    /**
     * Filter, which GeneratorPhaseTypes to fetch.
     */
    where?: GeneratorPhaseTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratorPhaseTypes to fetch.
     */
    orderBy?: Enumerable<GeneratorPhaseTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratorPhaseTypes.
     */
    cursor?: GeneratorPhaseTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratorPhaseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratorPhaseTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratorPhaseTypes.
     */
    distinct?: Enumerable<GeneratorPhaseTypesScalarFieldEnum>
  }


  /**
   * GeneratorPhaseTypes findMany
   */
  export type GeneratorPhaseTypesFindManyArgs = {
    /**
     * Select specific fields to fetch from the GeneratorPhaseTypes
     */
    select?: GeneratorPhaseTypesSelect | null
    /**
     * Filter, which GeneratorPhaseTypes to fetch.
     */
    where?: GeneratorPhaseTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratorPhaseTypes to fetch.
     */
    orderBy?: Enumerable<GeneratorPhaseTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneratorPhaseTypes.
     */
    cursor?: GeneratorPhaseTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratorPhaseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratorPhaseTypes.
     */
    skip?: number
    distinct?: Enumerable<GeneratorPhaseTypesScalarFieldEnum>
  }


  /**
   * GeneratorPhaseTypes create
   */
  export type GeneratorPhaseTypesCreateArgs = {
    /**
     * Select specific fields to fetch from the GeneratorPhaseTypes
     */
    select?: GeneratorPhaseTypesSelect | null
    /**
     * The data needed to create a GeneratorPhaseTypes.
     */
    data: XOR<GeneratorPhaseTypesCreateInput, GeneratorPhaseTypesUncheckedCreateInput>
  }


  /**
   * GeneratorPhaseTypes createMany
   */
  export type GeneratorPhaseTypesCreateManyArgs = {
    /**
     * The data used to create many GeneratorPhaseTypes.
     */
    data: Enumerable<GeneratorPhaseTypesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GeneratorPhaseTypes update
   */
  export type GeneratorPhaseTypesUpdateArgs = {
    /**
     * Select specific fields to fetch from the GeneratorPhaseTypes
     */
    select?: GeneratorPhaseTypesSelect | null
    /**
     * The data needed to update a GeneratorPhaseTypes.
     */
    data: XOR<GeneratorPhaseTypesUpdateInput, GeneratorPhaseTypesUncheckedUpdateInput>
    /**
     * Choose, which GeneratorPhaseTypes to update.
     */
    where: GeneratorPhaseTypesWhereUniqueInput
  }


  /**
   * GeneratorPhaseTypes updateMany
   */
  export type GeneratorPhaseTypesUpdateManyArgs = {
    /**
     * The data used to update GeneratorPhaseTypes.
     */
    data: XOR<GeneratorPhaseTypesUpdateManyMutationInput, GeneratorPhaseTypesUncheckedUpdateManyInput>
    /**
     * Filter which GeneratorPhaseTypes to update
     */
    where?: GeneratorPhaseTypesWhereInput
  }


  /**
   * GeneratorPhaseTypes upsert
   */
  export type GeneratorPhaseTypesUpsertArgs = {
    /**
     * Select specific fields to fetch from the GeneratorPhaseTypes
     */
    select?: GeneratorPhaseTypesSelect | null
    /**
     * The filter to search for the GeneratorPhaseTypes to update in case it exists.
     */
    where: GeneratorPhaseTypesWhereUniqueInput
    /**
     * In case the GeneratorPhaseTypes found by the `where` argument doesn't exist, create a new GeneratorPhaseTypes with this data.
     */
    create: XOR<GeneratorPhaseTypesCreateInput, GeneratorPhaseTypesUncheckedCreateInput>
    /**
     * In case the GeneratorPhaseTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneratorPhaseTypesUpdateInput, GeneratorPhaseTypesUncheckedUpdateInput>
  }


  /**
   * GeneratorPhaseTypes delete
   */
  export type GeneratorPhaseTypesDeleteArgs = {
    /**
     * Select specific fields to fetch from the GeneratorPhaseTypes
     */
    select?: GeneratorPhaseTypesSelect | null
    /**
     * Filter which GeneratorPhaseTypes to delete.
     */
    where: GeneratorPhaseTypesWhereUniqueInput
  }


  /**
   * GeneratorPhaseTypes deleteMany
   */
  export type GeneratorPhaseTypesDeleteManyArgs = {
    /**
     * Filter which GeneratorPhaseTypes to delete
     */
    where?: GeneratorPhaseTypesWhereInput
  }


  /**
   * GeneratorPhaseTypes without action
   */
  export type GeneratorPhaseTypesArgs = {
    /**
     * Select specific fields to fetch from the GeneratorPhaseTypes
     */
    select?: GeneratorPhaseTypesSelect | null
  }



  /**
   * Model WorkOrderStatus
   */


  export type AggregateWorkOrderStatus = {
    _count: WorkOrderStatusCountAggregateOutputType | null
    _avg: WorkOrderStatusAvgAggregateOutputType | null
    _sum: WorkOrderStatusSumAggregateOutputType | null
    _min: WorkOrderStatusMinAggregateOutputType | null
    _max: WorkOrderStatusMaxAggregateOutputType | null
  }

  export type WorkOrderStatusAvgAggregateOutputType = {
    id: number | null
    applies_to: number | null
    status: number | null
    is_deleted: number | null
  }

  export type WorkOrderStatusSumAggregateOutputType = {
    id: number | null
    applies_to: number | null
    status: number | null
    is_deleted: number | null
  }

  export type WorkOrderStatusMinAggregateOutputType = {
    id: number | null
    status_name: string | null
    color_code: string | null
    description: string | null
    applies_to: number | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WorkOrderStatusMaxAggregateOutputType = {
    id: number | null
    status_name: string | null
    color_code: string | null
    description: string | null
    applies_to: number | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WorkOrderStatusCountAggregateOutputType = {
    id: number
    status_name: number
    color_code: number
    description: number
    applies_to: number
    status: number
    is_deleted: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WorkOrderStatusAvgAggregateInputType = {
    id?: true
    applies_to?: true
    status?: true
    is_deleted?: true
  }

  export type WorkOrderStatusSumAggregateInputType = {
    id?: true
    applies_to?: true
    status?: true
    is_deleted?: true
  }

  export type WorkOrderStatusMinAggregateInputType = {
    id?: true
    status_name?: true
    color_code?: true
    description?: true
    applies_to?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type WorkOrderStatusMaxAggregateInputType = {
    id?: true
    status_name?: true
    color_code?: true
    description?: true
    applies_to?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type WorkOrderStatusCountAggregateInputType = {
    id?: true
    status_name?: true
    color_code?: true
    description?: true
    applies_to?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WorkOrderStatusAggregateArgs = {
    /**
     * Filter which WorkOrderStatus to aggregate.
     */
    where?: WorkOrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrderStatuses to fetch.
     */
    orderBy?: Enumerable<WorkOrderStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkOrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrderStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkOrderStatuses
    **/
    _count?: true | WorkOrderStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkOrderStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkOrderStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkOrderStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkOrderStatusMaxAggregateInputType
  }

  export type GetWorkOrderStatusAggregateType<T extends WorkOrderStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkOrderStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkOrderStatus[P]>
      : GetScalarType<T[P], AggregateWorkOrderStatus[P]>
  }




  export type WorkOrderStatusGroupByArgs = {
    where?: WorkOrderStatusWhereInput
    orderBy?: Enumerable<WorkOrderStatusOrderByWithAggregationInput>
    by: WorkOrderStatusScalarFieldEnum[]
    having?: WorkOrderStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkOrderStatusCountAggregateInputType | true
    _avg?: WorkOrderStatusAvgAggregateInputType
    _sum?: WorkOrderStatusSumAggregateInputType
    _min?: WorkOrderStatusMinAggregateInputType
    _max?: WorkOrderStatusMaxAggregateInputType
  }


  export type WorkOrderStatusGroupByOutputType = {
    id: number
    status_name: string | null
    color_code: string | null
    description: string | null
    applies_to: number
    status: number
    is_deleted: number
    created_at: Date
    updated_at: Date
    _count: WorkOrderStatusCountAggregateOutputType | null
    _avg: WorkOrderStatusAvgAggregateOutputType | null
    _sum: WorkOrderStatusSumAggregateOutputType | null
    _min: WorkOrderStatusMinAggregateOutputType | null
    _max: WorkOrderStatusMaxAggregateOutputType | null
  }

  type GetWorkOrderStatusGroupByPayload<T extends WorkOrderStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WorkOrderStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkOrderStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkOrderStatusGroupByOutputType[P]>
            : GetScalarType<T[P], WorkOrderStatusGroupByOutputType[P]>
        }
      >
    >


  export type WorkOrderStatusSelect = {
    id?: boolean
    status_name?: boolean
    color_code?: boolean
    description?: boolean
    applies_to?: boolean
    status?: boolean
    is_deleted?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type WorkOrderStatusGetPayload<S extends boolean | null | undefined | WorkOrderStatusArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WorkOrderStatus :
    S extends undefined ? never :
    S extends { include: any } & (WorkOrderStatusArgs | WorkOrderStatusFindManyArgs)
    ? WorkOrderStatus 
    : S extends { select: any } & (WorkOrderStatusArgs | WorkOrderStatusFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof WorkOrderStatus ? WorkOrderStatus[P] : never
  } 
      : WorkOrderStatus


  type WorkOrderStatusCountArgs = 
    Omit<WorkOrderStatusFindManyArgs, 'select' | 'include'> & {
      select?: WorkOrderStatusCountAggregateInputType | true
    }

  export interface WorkOrderStatusDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one WorkOrderStatus that matches the filter.
     * @param {WorkOrderStatusFindUniqueArgs} args - Arguments to find a WorkOrderStatus
     * @example
     * // Get one WorkOrderStatus
     * const workOrderStatus = await prisma.workOrderStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorkOrderStatusFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WorkOrderStatusFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'WorkOrderStatus'> extends True ? Prisma__WorkOrderStatusClient<WorkOrderStatusGetPayload<T>> : Prisma__WorkOrderStatusClient<WorkOrderStatusGetPayload<T> | null, null>

    /**
     * Find one WorkOrderStatus that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorkOrderStatusFindUniqueOrThrowArgs} args - Arguments to find a WorkOrderStatus
     * @example
     * // Get one WorkOrderStatus
     * const workOrderStatus = await prisma.workOrderStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorkOrderStatusFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WorkOrderStatusFindUniqueOrThrowArgs>
    ): Prisma__WorkOrderStatusClient<WorkOrderStatusGetPayload<T>>

    /**
     * Find the first WorkOrderStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderStatusFindFirstArgs} args - Arguments to find a WorkOrderStatus
     * @example
     * // Get one WorkOrderStatus
     * const workOrderStatus = await prisma.workOrderStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorkOrderStatusFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WorkOrderStatusFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'WorkOrderStatus'> extends True ? Prisma__WorkOrderStatusClient<WorkOrderStatusGetPayload<T>> : Prisma__WorkOrderStatusClient<WorkOrderStatusGetPayload<T> | null, null>

    /**
     * Find the first WorkOrderStatus that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderStatusFindFirstOrThrowArgs} args - Arguments to find a WorkOrderStatus
     * @example
     * // Get one WorkOrderStatus
     * const workOrderStatus = await prisma.workOrderStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorkOrderStatusFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WorkOrderStatusFindFirstOrThrowArgs>
    ): Prisma__WorkOrderStatusClient<WorkOrderStatusGetPayload<T>>

    /**
     * Find zero or more WorkOrderStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderStatusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkOrderStatuses
     * const workOrderStatuses = await prisma.workOrderStatus.findMany()
     * 
     * // Get first 10 WorkOrderStatuses
     * const workOrderStatuses = await prisma.workOrderStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workOrderStatusWithIdOnly = await prisma.workOrderStatus.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorkOrderStatusFindManyArgs>(
      args?: SelectSubset<T, WorkOrderStatusFindManyArgs>
    ): Prisma.PrismaPromise<Array<WorkOrderStatusGetPayload<T>>>

    /**
     * Create a WorkOrderStatus.
     * @param {WorkOrderStatusCreateArgs} args - Arguments to create a WorkOrderStatus.
     * @example
     * // Create one WorkOrderStatus
     * const WorkOrderStatus = await prisma.workOrderStatus.create({
     *   data: {
     *     // ... data to create a WorkOrderStatus
     *   }
     * })
     * 
    **/
    create<T extends WorkOrderStatusCreateArgs>(
      args: SelectSubset<T, WorkOrderStatusCreateArgs>
    ): Prisma__WorkOrderStatusClient<WorkOrderStatusGetPayload<T>>

    /**
     * Create many WorkOrderStatuses.
     *     @param {WorkOrderStatusCreateManyArgs} args - Arguments to create many WorkOrderStatuses.
     *     @example
     *     // Create many WorkOrderStatuses
     *     const workOrderStatus = await prisma.workOrderStatus.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorkOrderStatusCreateManyArgs>(
      args?: SelectSubset<T, WorkOrderStatusCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkOrderStatus.
     * @param {WorkOrderStatusDeleteArgs} args - Arguments to delete one WorkOrderStatus.
     * @example
     * // Delete one WorkOrderStatus
     * const WorkOrderStatus = await prisma.workOrderStatus.delete({
     *   where: {
     *     // ... filter to delete one WorkOrderStatus
     *   }
     * })
     * 
    **/
    delete<T extends WorkOrderStatusDeleteArgs>(
      args: SelectSubset<T, WorkOrderStatusDeleteArgs>
    ): Prisma__WorkOrderStatusClient<WorkOrderStatusGetPayload<T>>

    /**
     * Update one WorkOrderStatus.
     * @param {WorkOrderStatusUpdateArgs} args - Arguments to update one WorkOrderStatus.
     * @example
     * // Update one WorkOrderStatus
     * const workOrderStatus = await prisma.workOrderStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorkOrderStatusUpdateArgs>(
      args: SelectSubset<T, WorkOrderStatusUpdateArgs>
    ): Prisma__WorkOrderStatusClient<WorkOrderStatusGetPayload<T>>

    /**
     * Delete zero or more WorkOrderStatuses.
     * @param {WorkOrderStatusDeleteManyArgs} args - Arguments to filter WorkOrderStatuses to delete.
     * @example
     * // Delete a few WorkOrderStatuses
     * const { count } = await prisma.workOrderStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorkOrderStatusDeleteManyArgs>(
      args?: SelectSubset<T, WorkOrderStatusDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkOrderStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkOrderStatuses
     * const workOrderStatus = await prisma.workOrderStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorkOrderStatusUpdateManyArgs>(
      args: SelectSubset<T, WorkOrderStatusUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkOrderStatus.
     * @param {WorkOrderStatusUpsertArgs} args - Arguments to update or create a WorkOrderStatus.
     * @example
     * // Update or create a WorkOrderStatus
     * const workOrderStatus = await prisma.workOrderStatus.upsert({
     *   create: {
     *     // ... data to create a WorkOrderStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkOrderStatus we want to update
     *   }
     * })
    **/
    upsert<T extends WorkOrderStatusUpsertArgs>(
      args: SelectSubset<T, WorkOrderStatusUpsertArgs>
    ): Prisma__WorkOrderStatusClient<WorkOrderStatusGetPayload<T>>

    /**
     * Count the number of WorkOrderStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderStatusCountArgs} args - Arguments to filter WorkOrderStatuses to count.
     * @example
     * // Count the number of WorkOrderStatuses
     * const count = await prisma.workOrderStatus.count({
     *   where: {
     *     // ... the filter for the WorkOrderStatuses we want to count
     *   }
     * })
    **/
    count<T extends WorkOrderStatusCountArgs>(
      args?: Subset<T, WorkOrderStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkOrderStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkOrderStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkOrderStatusAggregateArgs>(args: Subset<T, WorkOrderStatusAggregateArgs>): Prisma.PrismaPromise<GetWorkOrderStatusAggregateType<T>>

    /**
     * Group by WorkOrderStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkOrderStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkOrderStatusGroupByArgs['orderBy'] }
        : { orderBy?: WorkOrderStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkOrderStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkOrderStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkOrderStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WorkOrderStatusClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * WorkOrderStatus base type for findUnique actions
   */
  export type WorkOrderStatusFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the WorkOrderStatus
     */
    select?: WorkOrderStatusSelect | null
    /**
     * Filter, which WorkOrderStatus to fetch.
     */
    where: WorkOrderStatusWhereUniqueInput
  }

  /**
   * WorkOrderStatus findUnique
   */
  export interface WorkOrderStatusFindUniqueArgs extends WorkOrderStatusFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorkOrderStatus findUniqueOrThrow
   */
  export type WorkOrderStatusFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WorkOrderStatus
     */
    select?: WorkOrderStatusSelect | null
    /**
     * Filter, which WorkOrderStatus to fetch.
     */
    where: WorkOrderStatusWhereUniqueInput
  }


  /**
   * WorkOrderStatus base type for findFirst actions
   */
  export type WorkOrderStatusFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the WorkOrderStatus
     */
    select?: WorkOrderStatusSelect | null
    /**
     * Filter, which WorkOrderStatus to fetch.
     */
    where?: WorkOrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrderStatuses to fetch.
     */
    orderBy?: Enumerable<WorkOrderStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkOrderStatuses.
     */
    cursor?: WorkOrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrderStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkOrderStatuses.
     */
    distinct?: Enumerable<WorkOrderStatusScalarFieldEnum>
  }

  /**
   * WorkOrderStatus findFirst
   */
  export interface WorkOrderStatusFindFirstArgs extends WorkOrderStatusFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorkOrderStatus findFirstOrThrow
   */
  export type WorkOrderStatusFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WorkOrderStatus
     */
    select?: WorkOrderStatusSelect | null
    /**
     * Filter, which WorkOrderStatus to fetch.
     */
    where?: WorkOrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrderStatuses to fetch.
     */
    orderBy?: Enumerable<WorkOrderStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkOrderStatuses.
     */
    cursor?: WorkOrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrderStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkOrderStatuses.
     */
    distinct?: Enumerable<WorkOrderStatusScalarFieldEnum>
  }


  /**
   * WorkOrderStatus findMany
   */
  export type WorkOrderStatusFindManyArgs = {
    /**
     * Select specific fields to fetch from the WorkOrderStatus
     */
    select?: WorkOrderStatusSelect | null
    /**
     * Filter, which WorkOrderStatuses to fetch.
     */
    where?: WorkOrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrderStatuses to fetch.
     */
    orderBy?: Enumerable<WorkOrderStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkOrderStatuses.
     */
    cursor?: WorkOrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrderStatuses.
     */
    skip?: number
    distinct?: Enumerable<WorkOrderStatusScalarFieldEnum>
  }


  /**
   * WorkOrderStatus create
   */
  export type WorkOrderStatusCreateArgs = {
    /**
     * Select specific fields to fetch from the WorkOrderStatus
     */
    select?: WorkOrderStatusSelect | null
    /**
     * The data needed to create a WorkOrderStatus.
     */
    data: XOR<WorkOrderStatusCreateInput, WorkOrderStatusUncheckedCreateInput>
  }


  /**
   * WorkOrderStatus createMany
   */
  export type WorkOrderStatusCreateManyArgs = {
    /**
     * The data used to create many WorkOrderStatuses.
     */
    data: Enumerable<WorkOrderStatusCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * WorkOrderStatus update
   */
  export type WorkOrderStatusUpdateArgs = {
    /**
     * Select specific fields to fetch from the WorkOrderStatus
     */
    select?: WorkOrderStatusSelect | null
    /**
     * The data needed to update a WorkOrderStatus.
     */
    data: XOR<WorkOrderStatusUpdateInput, WorkOrderStatusUncheckedUpdateInput>
    /**
     * Choose, which WorkOrderStatus to update.
     */
    where: WorkOrderStatusWhereUniqueInput
  }


  /**
   * WorkOrderStatus updateMany
   */
  export type WorkOrderStatusUpdateManyArgs = {
    /**
     * The data used to update WorkOrderStatuses.
     */
    data: XOR<WorkOrderStatusUpdateManyMutationInput, WorkOrderStatusUncheckedUpdateManyInput>
    /**
     * Filter which WorkOrderStatuses to update
     */
    where?: WorkOrderStatusWhereInput
  }


  /**
   * WorkOrderStatus upsert
   */
  export type WorkOrderStatusUpsertArgs = {
    /**
     * Select specific fields to fetch from the WorkOrderStatus
     */
    select?: WorkOrderStatusSelect | null
    /**
     * The filter to search for the WorkOrderStatus to update in case it exists.
     */
    where: WorkOrderStatusWhereUniqueInput
    /**
     * In case the WorkOrderStatus found by the `where` argument doesn't exist, create a new WorkOrderStatus with this data.
     */
    create: XOR<WorkOrderStatusCreateInput, WorkOrderStatusUncheckedCreateInput>
    /**
     * In case the WorkOrderStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkOrderStatusUpdateInput, WorkOrderStatusUncheckedUpdateInput>
  }


  /**
   * WorkOrderStatus delete
   */
  export type WorkOrderStatusDeleteArgs = {
    /**
     * Select specific fields to fetch from the WorkOrderStatus
     */
    select?: WorkOrderStatusSelect | null
    /**
     * Filter which WorkOrderStatus to delete.
     */
    where: WorkOrderStatusWhereUniqueInput
  }


  /**
   * WorkOrderStatus deleteMany
   */
  export type WorkOrderStatusDeleteManyArgs = {
    /**
     * Filter which WorkOrderStatuses to delete
     */
    where?: WorkOrderStatusWhereInput
  }


  /**
   * WorkOrderStatus without action
   */
  export type WorkOrderStatusArgs = {
    /**
     * Select specific fields to fetch from the WorkOrderStatus
     */
    select?: WorkOrderStatusSelect | null
  }



  /**
   * Model WorkOrderTypes
   */


  export type AggregateWorkOrderTypes = {
    _count: WorkOrderTypesCountAggregateOutputType | null
    _avg: WorkOrderTypesAvgAggregateOutputType | null
    _sum: WorkOrderTypesSumAggregateOutputType | null
    _min: WorkOrderTypesMinAggregateOutputType | null
    _max: WorkOrderTypesMaxAggregateOutputType | null
  }

  export type WorkOrderTypesAvgAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type WorkOrderTypesSumAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type WorkOrderTypesMinAggregateOutputType = {
    id: number | null
    order_type: string | null
    on_screen_color_code: string | null
    on_report_color_code: string | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WorkOrderTypesMaxAggregateOutputType = {
    id: number | null
    order_type: string | null
    on_screen_color_code: string | null
    on_report_color_code: string | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WorkOrderTypesCountAggregateOutputType = {
    id: number
    order_type: number
    on_screen_color_code: number
    on_report_color_code: number
    status: number
    is_deleted: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WorkOrderTypesAvgAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type WorkOrderTypesSumAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type WorkOrderTypesMinAggregateInputType = {
    id?: true
    order_type?: true
    on_screen_color_code?: true
    on_report_color_code?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type WorkOrderTypesMaxAggregateInputType = {
    id?: true
    order_type?: true
    on_screen_color_code?: true
    on_report_color_code?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type WorkOrderTypesCountAggregateInputType = {
    id?: true
    order_type?: true
    on_screen_color_code?: true
    on_report_color_code?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WorkOrderTypesAggregateArgs = {
    /**
     * Filter which WorkOrderTypes to aggregate.
     */
    where?: WorkOrderTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrderTypes to fetch.
     */
    orderBy?: Enumerable<WorkOrderTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkOrderTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrderTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrderTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkOrderTypes
    **/
    _count?: true | WorkOrderTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkOrderTypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkOrderTypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkOrderTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkOrderTypesMaxAggregateInputType
  }

  export type GetWorkOrderTypesAggregateType<T extends WorkOrderTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkOrderTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkOrderTypes[P]>
      : GetScalarType<T[P], AggregateWorkOrderTypes[P]>
  }




  export type WorkOrderTypesGroupByArgs = {
    where?: WorkOrderTypesWhereInput
    orderBy?: Enumerable<WorkOrderTypesOrderByWithAggregationInput>
    by: WorkOrderTypesScalarFieldEnum[]
    having?: WorkOrderTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkOrderTypesCountAggregateInputType | true
    _avg?: WorkOrderTypesAvgAggregateInputType
    _sum?: WorkOrderTypesSumAggregateInputType
    _min?: WorkOrderTypesMinAggregateInputType
    _max?: WorkOrderTypesMaxAggregateInputType
  }


  export type WorkOrderTypesGroupByOutputType = {
    id: number
    order_type: string | null
    on_screen_color_code: string | null
    on_report_color_code: string | null
    status: number
    is_deleted: number
    created_at: Date
    updated_at: Date
    _count: WorkOrderTypesCountAggregateOutputType | null
    _avg: WorkOrderTypesAvgAggregateOutputType | null
    _sum: WorkOrderTypesSumAggregateOutputType | null
    _min: WorkOrderTypesMinAggregateOutputType | null
    _max: WorkOrderTypesMaxAggregateOutputType | null
  }

  type GetWorkOrderTypesGroupByPayload<T extends WorkOrderTypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WorkOrderTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkOrderTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkOrderTypesGroupByOutputType[P]>
            : GetScalarType<T[P], WorkOrderTypesGroupByOutputType[P]>
        }
      >
    >


  export type WorkOrderTypesSelect = {
    id?: boolean
    order_type?: boolean
    on_screen_color_code?: boolean
    on_report_color_code?: boolean
    status?: boolean
    is_deleted?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type WorkOrderTypesGetPayload<S extends boolean | null | undefined | WorkOrderTypesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WorkOrderTypes :
    S extends undefined ? never :
    S extends { include: any } & (WorkOrderTypesArgs | WorkOrderTypesFindManyArgs)
    ? WorkOrderTypes 
    : S extends { select: any } & (WorkOrderTypesArgs | WorkOrderTypesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof WorkOrderTypes ? WorkOrderTypes[P] : never
  } 
      : WorkOrderTypes


  type WorkOrderTypesCountArgs = 
    Omit<WorkOrderTypesFindManyArgs, 'select' | 'include'> & {
      select?: WorkOrderTypesCountAggregateInputType | true
    }

  export interface WorkOrderTypesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one WorkOrderTypes that matches the filter.
     * @param {WorkOrderTypesFindUniqueArgs} args - Arguments to find a WorkOrderTypes
     * @example
     * // Get one WorkOrderTypes
     * const workOrderTypes = await prisma.workOrderTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorkOrderTypesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WorkOrderTypesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'WorkOrderTypes'> extends True ? Prisma__WorkOrderTypesClient<WorkOrderTypesGetPayload<T>> : Prisma__WorkOrderTypesClient<WorkOrderTypesGetPayload<T> | null, null>

    /**
     * Find one WorkOrderTypes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorkOrderTypesFindUniqueOrThrowArgs} args - Arguments to find a WorkOrderTypes
     * @example
     * // Get one WorkOrderTypes
     * const workOrderTypes = await prisma.workOrderTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorkOrderTypesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WorkOrderTypesFindUniqueOrThrowArgs>
    ): Prisma__WorkOrderTypesClient<WorkOrderTypesGetPayload<T>>

    /**
     * Find the first WorkOrderTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderTypesFindFirstArgs} args - Arguments to find a WorkOrderTypes
     * @example
     * // Get one WorkOrderTypes
     * const workOrderTypes = await prisma.workOrderTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorkOrderTypesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WorkOrderTypesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'WorkOrderTypes'> extends True ? Prisma__WorkOrderTypesClient<WorkOrderTypesGetPayload<T>> : Prisma__WorkOrderTypesClient<WorkOrderTypesGetPayload<T> | null, null>

    /**
     * Find the first WorkOrderTypes that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderTypesFindFirstOrThrowArgs} args - Arguments to find a WorkOrderTypes
     * @example
     * // Get one WorkOrderTypes
     * const workOrderTypes = await prisma.workOrderTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorkOrderTypesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WorkOrderTypesFindFirstOrThrowArgs>
    ): Prisma__WorkOrderTypesClient<WorkOrderTypesGetPayload<T>>

    /**
     * Find zero or more WorkOrderTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderTypesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkOrderTypes
     * const workOrderTypes = await prisma.workOrderTypes.findMany()
     * 
     * // Get first 10 WorkOrderTypes
     * const workOrderTypes = await prisma.workOrderTypes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workOrderTypesWithIdOnly = await prisma.workOrderTypes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorkOrderTypesFindManyArgs>(
      args?: SelectSubset<T, WorkOrderTypesFindManyArgs>
    ): Prisma.PrismaPromise<Array<WorkOrderTypesGetPayload<T>>>

    /**
     * Create a WorkOrderTypes.
     * @param {WorkOrderTypesCreateArgs} args - Arguments to create a WorkOrderTypes.
     * @example
     * // Create one WorkOrderTypes
     * const WorkOrderTypes = await prisma.workOrderTypes.create({
     *   data: {
     *     // ... data to create a WorkOrderTypes
     *   }
     * })
     * 
    **/
    create<T extends WorkOrderTypesCreateArgs>(
      args: SelectSubset<T, WorkOrderTypesCreateArgs>
    ): Prisma__WorkOrderTypesClient<WorkOrderTypesGetPayload<T>>

    /**
     * Create many WorkOrderTypes.
     *     @param {WorkOrderTypesCreateManyArgs} args - Arguments to create many WorkOrderTypes.
     *     @example
     *     // Create many WorkOrderTypes
     *     const workOrderTypes = await prisma.workOrderTypes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorkOrderTypesCreateManyArgs>(
      args?: SelectSubset<T, WorkOrderTypesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkOrderTypes.
     * @param {WorkOrderTypesDeleteArgs} args - Arguments to delete one WorkOrderTypes.
     * @example
     * // Delete one WorkOrderTypes
     * const WorkOrderTypes = await prisma.workOrderTypes.delete({
     *   where: {
     *     // ... filter to delete one WorkOrderTypes
     *   }
     * })
     * 
    **/
    delete<T extends WorkOrderTypesDeleteArgs>(
      args: SelectSubset<T, WorkOrderTypesDeleteArgs>
    ): Prisma__WorkOrderTypesClient<WorkOrderTypesGetPayload<T>>

    /**
     * Update one WorkOrderTypes.
     * @param {WorkOrderTypesUpdateArgs} args - Arguments to update one WorkOrderTypes.
     * @example
     * // Update one WorkOrderTypes
     * const workOrderTypes = await prisma.workOrderTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorkOrderTypesUpdateArgs>(
      args: SelectSubset<T, WorkOrderTypesUpdateArgs>
    ): Prisma__WorkOrderTypesClient<WorkOrderTypesGetPayload<T>>

    /**
     * Delete zero or more WorkOrderTypes.
     * @param {WorkOrderTypesDeleteManyArgs} args - Arguments to filter WorkOrderTypes to delete.
     * @example
     * // Delete a few WorkOrderTypes
     * const { count } = await prisma.workOrderTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorkOrderTypesDeleteManyArgs>(
      args?: SelectSubset<T, WorkOrderTypesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkOrderTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkOrderTypes
     * const workOrderTypes = await prisma.workOrderTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorkOrderTypesUpdateManyArgs>(
      args: SelectSubset<T, WorkOrderTypesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkOrderTypes.
     * @param {WorkOrderTypesUpsertArgs} args - Arguments to update or create a WorkOrderTypes.
     * @example
     * // Update or create a WorkOrderTypes
     * const workOrderTypes = await prisma.workOrderTypes.upsert({
     *   create: {
     *     // ... data to create a WorkOrderTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkOrderTypes we want to update
     *   }
     * })
    **/
    upsert<T extends WorkOrderTypesUpsertArgs>(
      args: SelectSubset<T, WorkOrderTypesUpsertArgs>
    ): Prisma__WorkOrderTypesClient<WorkOrderTypesGetPayload<T>>

    /**
     * Count the number of WorkOrderTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderTypesCountArgs} args - Arguments to filter WorkOrderTypes to count.
     * @example
     * // Count the number of WorkOrderTypes
     * const count = await prisma.workOrderTypes.count({
     *   where: {
     *     // ... the filter for the WorkOrderTypes we want to count
     *   }
     * })
    **/
    count<T extends WorkOrderTypesCountArgs>(
      args?: Subset<T, WorkOrderTypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkOrderTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkOrderTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkOrderTypesAggregateArgs>(args: Subset<T, WorkOrderTypesAggregateArgs>): Prisma.PrismaPromise<GetWorkOrderTypesAggregateType<T>>

    /**
     * Group by WorkOrderTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderTypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkOrderTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkOrderTypesGroupByArgs['orderBy'] }
        : { orderBy?: WorkOrderTypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkOrderTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkOrderTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkOrderTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WorkOrderTypesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * WorkOrderTypes base type for findUnique actions
   */
  export type WorkOrderTypesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the WorkOrderTypes
     */
    select?: WorkOrderTypesSelect | null
    /**
     * Filter, which WorkOrderTypes to fetch.
     */
    where: WorkOrderTypesWhereUniqueInput
  }

  /**
   * WorkOrderTypes findUnique
   */
  export interface WorkOrderTypesFindUniqueArgs extends WorkOrderTypesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorkOrderTypes findUniqueOrThrow
   */
  export type WorkOrderTypesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WorkOrderTypes
     */
    select?: WorkOrderTypesSelect | null
    /**
     * Filter, which WorkOrderTypes to fetch.
     */
    where: WorkOrderTypesWhereUniqueInput
  }


  /**
   * WorkOrderTypes base type for findFirst actions
   */
  export type WorkOrderTypesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the WorkOrderTypes
     */
    select?: WorkOrderTypesSelect | null
    /**
     * Filter, which WorkOrderTypes to fetch.
     */
    where?: WorkOrderTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrderTypes to fetch.
     */
    orderBy?: Enumerable<WorkOrderTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkOrderTypes.
     */
    cursor?: WorkOrderTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrderTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrderTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkOrderTypes.
     */
    distinct?: Enumerable<WorkOrderTypesScalarFieldEnum>
  }

  /**
   * WorkOrderTypes findFirst
   */
  export interface WorkOrderTypesFindFirstArgs extends WorkOrderTypesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorkOrderTypes findFirstOrThrow
   */
  export type WorkOrderTypesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WorkOrderTypes
     */
    select?: WorkOrderTypesSelect | null
    /**
     * Filter, which WorkOrderTypes to fetch.
     */
    where?: WorkOrderTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrderTypes to fetch.
     */
    orderBy?: Enumerable<WorkOrderTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkOrderTypes.
     */
    cursor?: WorkOrderTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrderTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrderTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkOrderTypes.
     */
    distinct?: Enumerable<WorkOrderTypesScalarFieldEnum>
  }


  /**
   * WorkOrderTypes findMany
   */
  export type WorkOrderTypesFindManyArgs = {
    /**
     * Select specific fields to fetch from the WorkOrderTypes
     */
    select?: WorkOrderTypesSelect | null
    /**
     * Filter, which WorkOrderTypes to fetch.
     */
    where?: WorkOrderTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrderTypes to fetch.
     */
    orderBy?: Enumerable<WorkOrderTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkOrderTypes.
     */
    cursor?: WorkOrderTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrderTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrderTypes.
     */
    skip?: number
    distinct?: Enumerable<WorkOrderTypesScalarFieldEnum>
  }


  /**
   * WorkOrderTypes create
   */
  export type WorkOrderTypesCreateArgs = {
    /**
     * Select specific fields to fetch from the WorkOrderTypes
     */
    select?: WorkOrderTypesSelect | null
    /**
     * The data needed to create a WorkOrderTypes.
     */
    data: XOR<WorkOrderTypesCreateInput, WorkOrderTypesUncheckedCreateInput>
  }


  /**
   * WorkOrderTypes createMany
   */
  export type WorkOrderTypesCreateManyArgs = {
    /**
     * The data used to create many WorkOrderTypes.
     */
    data: Enumerable<WorkOrderTypesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * WorkOrderTypes update
   */
  export type WorkOrderTypesUpdateArgs = {
    /**
     * Select specific fields to fetch from the WorkOrderTypes
     */
    select?: WorkOrderTypesSelect | null
    /**
     * The data needed to update a WorkOrderTypes.
     */
    data: XOR<WorkOrderTypesUpdateInput, WorkOrderTypesUncheckedUpdateInput>
    /**
     * Choose, which WorkOrderTypes to update.
     */
    where: WorkOrderTypesWhereUniqueInput
  }


  /**
   * WorkOrderTypes updateMany
   */
  export type WorkOrderTypesUpdateManyArgs = {
    /**
     * The data used to update WorkOrderTypes.
     */
    data: XOR<WorkOrderTypesUpdateManyMutationInput, WorkOrderTypesUncheckedUpdateManyInput>
    /**
     * Filter which WorkOrderTypes to update
     */
    where?: WorkOrderTypesWhereInput
  }


  /**
   * WorkOrderTypes upsert
   */
  export type WorkOrderTypesUpsertArgs = {
    /**
     * Select specific fields to fetch from the WorkOrderTypes
     */
    select?: WorkOrderTypesSelect | null
    /**
     * The filter to search for the WorkOrderTypes to update in case it exists.
     */
    where: WorkOrderTypesWhereUniqueInput
    /**
     * In case the WorkOrderTypes found by the `where` argument doesn't exist, create a new WorkOrderTypes with this data.
     */
    create: XOR<WorkOrderTypesCreateInput, WorkOrderTypesUncheckedCreateInput>
    /**
     * In case the WorkOrderTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkOrderTypesUpdateInput, WorkOrderTypesUncheckedUpdateInput>
  }


  /**
   * WorkOrderTypes delete
   */
  export type WorkOrderTypesDeleteArgs = {
    /**
     * Select specific fields to fetch from the WorkOrderTypes
     */
    select?: WorkOrderTypesSelect | null
    /**
     * Filter which WorkOrderTypes to delete.
     */
    where: WorkOrderTypesWhereUniqueInput
  }


  /**
   * WorkOrderTypes deleteMany
   */
  export type WorkOrderTypesDeleteManyArgs = {
    /**
     * Filter which WorkOrderTypes to delete
     */
    where?: WorkOrderTypesWhereInput
  }


  /**
   * WorkOrderTypes without action
   */
  export type WorkOrderTypesArgs = {
    /**
     * Select specific fields to fetch from the WorkOrderTypes
     */
    select?: WorkOrderTypesSelect | null
  }



  /**
   * Model service_levels
   */


  export type AggregateService_levels = {
    _count: Service_levelsCountAggregateOutputType | null
    _avg: Service_levelsAvgAggregateOutputType | null
    _sum: Service_levelsSumAggregateOutputType | null
    _min: Service_levelsMinAggregateOutputType | null
    _max: Service_levelsMaxAggregateOutputType | null
  }

  export type Service_levelsAvgAggregateOutputType = {
    id: number | null
    service_name: number | null
    service_limit: number | null
    default_load_test_duration: number | null
    default_duration: number | null
    status: number | null
    is_deleted: number | null
    created_by: number | null
  }

  export type Service_levelsSumAggregateOutputType = {
    id: number | null
    service_name: number | null
    service_limit: number | null
    default_load_test_duration: number | null
    default_duration: number | null
    status: number | null
    is_deleted: number | null
    created_by: number | null
  }

  export type Service_levelsMinAggregateOutputType = {
    id: number | null
    service_name: number | null
    service_limit: number | null
    default_load_test_duration: number | null
    on_screen_color_code: string | null
    on_report_color_code: string | null
    default_duration: number | null
    status: number | null
    is_deleted: number | null
    created_by: number | null
    created_date: Date | null
    updated_date: Date | null
  }

  export type Service_levelsMaxAggregateOutputType = {
    id: number | null
    service_name: number | null
    service_limit: number | null
    default_load_test_duration: number | null
    on_screen_color_code: string | null
    on_report_color_code: string | null
    default_duration: number | null
    status: number | null
    is_deleted: number | null
    created_by: number | null
    created_date: Date | null
    updated_date: Date | null
  }

  export type Service_levelsCountAggregateOutputType = {
    id: number
    service_name: number
    service_limit: number
    default_load_test_duration: number
    on_screen_color_code: number
    on_report_color_code: number
    default_duration: number
    status: number
    is_deleted: number
    created_by: number
    created_date: number
    updated_date: number
    _all: number
  }


  export type Service_levelsAvgAggregateInputType = {
    id?: true
    service_name?: true
    service_limit?: true
    default_load_test_duration?: true
    default_duration?: true
    status?: true
    is_deleted?: true
    created_by?: true
  }

  export type Service_levelsSumAggregateInputType = {
    id?: true
    service_name?: true
    service_limit?: true
    default_load_test_duration?: true
    default_duration?: true
    status?: true
    is_deleted?: true
    created_by?: true
  }

  export type Service_levelsMinAggregateInputType = {
    id?: true
    service_name?: true
    service_limit?: true
    default_load_test_duration?: true
    on_screen_color_code?: true
    on_report_color_code?: true
    default_duration?: true
    status?: true
    is_deleted?: true
    created_by?: true
    created_date?: true
    updated_date?: true
  }

  export type Service_levelsMaxAggregateInputType = {
    id?: true
    service_name?: true
    service_limit?: true
    default_load_test_duration?: true
    on_screen_color_code?: true
    on_report_color_code?: true
    default_duration?: true
    status?: true
    is_deleted?: true
    created_by?: true
    created_date?: true
    updated_date?: true
  }

  export type Service_levelsCountAggregateInputType = {
    id?: true
    service_name?: true
    service_limit?: true
    default_load_test_duration?: true
    on_screen_color_code?: true
    on_report_color_code?: true
    default_duration?: true
    status?: true
    is_deleted?: true
    created_by?: true
    created_date?: true
    updated_date?: true
    _all?: true
  }

  export type Service_levelsAggregateArgs = {
    /**
     * Filter which service_levels to aggregate.
     */
    where?: service_levelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of service_levels to fetch.
     */
    orderBy?: Enumerable<service_levelsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: service_levelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` service_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` service_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned service_levels
    **/
    _count?: true | Service_levelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Service_levelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Service_levelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Service_levelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Service_levelsMaxAggregateInputType
  }

  export type GetService_levelsAggregateType<T extends Service_levelsAggregateArgs> = {
        [P in keyof T & keyof AggregateService_levels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService_levels[P]>
      : GetScalarType<T[P], AggregateService_levels[P]>
  }




  export type Service_levelsGroupByArgs = {
    where?: service_levelsWhereInput
    orderBy?: Enumerable<service_levelsOrderByWithAggregationInput>
    by: Service_levelsScalarFieldEnum[]
    having?: service_levelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Service_levelsCountAggregateInputType | true
    _avg?: Service_levelsAvgAggregateInputType
    _sum?: Service_levelsSumAggregateInputType
    _min?: Service_levelsMinAggregateInputType
    _max?: Service_levelsMaxAggregateInputType
  }


  export type Service_levelsGroupByOutputType = {
    id: number
    service_name: number
    service_limit: number
    default_load_test_duration: number
    on_screen_color_code: string
    on_report_color_code: string
    default_duration: number
    status: number
    is_deleted: number
    created_by: number
    created_date: Date
    updated_date: Date
    _count: Service_levelsCountAggregateOutputType | null
    _avg: Service_levelsAvgAggregateOutputType | null
    _sum: Service_levelsSumAggregateOutputType | null
    _min: Service_levelsMinAggregateOutputType | null
    _max: Service_levelsMaxAggregateOutputType | null
  }

  type GetService_levelsGroupByPayload<T extends Service_levelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Service_levelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Service_levelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Service_levelsGroupByOutputType[P]>
            : GetScalarType<T[P], Service_levelsGroupByOutputType[P]>
        }
      >
    >


  export type service_levelsSelect = {
    id?: boolean
    service_name?: boolean
    service_limit?: boolean
    default_load_test_duration?: boolean
    on_screen_color_code?: boolean
    on_report_color_code?: boolean
    default_duration?: boolean
    status?: boolean
    is_deleted?: boolean
    created_by?: boolean
    created_date?: boolean
    updated_date?: boolean
  }


  export type service_levelsGetPayload<S extends boolean | null | undefined | service_levelsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? service_levels :
    S extends undefined ? never :
    S extends { include: any } & (service_levelsArgs | service_levelsFindManyArgs)
    ? service_levels 
    : S extends { select: any } & (service_levelsArgs | service_levelsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof service_levels ? service_levels[P] : never
  } 
      : service_levels


  type service_levelsCountArgs = 
    Omit<service_levelsFindManyArgs, 'select' | 'include'> & {
      select?: Service_levelsCountAggregateInputType | true
    }

  export interface service_levelsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Service_levels that matches the filter.
     * @param {service_levelsFindUniqueArgs} args - Arguments to find a Service_levels
     * @example
     * // Get one Service_levels
     * const service_levels = await prisma.service_levels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends service_levelsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, service_levelsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'service_levels'> extends True ? Prisma__service_levelsClient<service_levelsGetPayload<T>> : Prisma__service_levelsClient<service_levelsGetPayload<T> | null, null>

    /**
     * Find one Service_levels that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {service_levelsFindUniqueOrThrowArgs} args - Arguments to find a Service_levels
     * @example
     * // Get one Service_levels
     * const service_levels = await prisma.service_levels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends service_levelsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, service_levelsFindUniqueOrThrowArgs>
    ): Prisma__service_levelsClient<service_levelsGetPayload<T>>

    /**
     * Find the first Service_levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {service_levelsFindFirstArgs} args - Arguments to find a Service_levels
     * @example
     * // Get one Service_levels
     * const service_levels = await prisma.service_levels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends service_levelsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, service_levelsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'service_levels'> extends True ? Prisma__service_levelsClient<service_levelsGetPayload<T>> : Prisma__service_levelsClient<service_levelsGetPayload<T> | null, null>

    /**
     * Find the first Service_levels that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {service_levelsFindFirstOrThrowArgs} args - Arguments to find a Service_levels
     * @example
     * // Get one Service_levels
     * const service_levels = await prisma.service_levels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends service_levelsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, service_levelsFindFirstOrThrowArgs>
    ): Prisma__service_levelsClient<service_levelsGetPayload<T>>

    /**
     * Find zero or more Service_levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {service_levelsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Service_levels
     * const service_levels = await prisma.service_levels.findMany()
     * 
     * // Get first 10 Service_levels
     * const service_levels = await prisma.service_levels.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const service_levelsWithIdOnly = await prisma.service_levels.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends service_levelsFindManyArgs>(
      args?: SelectSubset<T, service_levelsFindManyArgs>
    ): Prisma.PrismaPromise<Array<service_levelsGetPayload<T>>>

    /**
     * Create a Service_levels.
     * @param {service_levelsCreateArgs} args - Arguments to create a Service_levels.
     * @example
     * // Create one Service_levels
     * const Service_levels = await prisma.service_levels.create({
     *   data: {
     *     // ... data to create a Service_levels
     *   }
     * })
     * 
    **/
    create<T extends service_levelsCreateArgs>(
      args: SelectSubset<T, service_levelsCreateArgs>
    ): Prisma__service_levelsClient<service_levelsGetPayload<T>>

    /**
     * Create many Service_levels.
     *     @param {service_levelsCreateManyArgs} args - Arguments to create many Service_levels.
     *     @example
     *     // Create many Service_levels
     *     const service_levels = await prisma.service_levels.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends service_levelsCreateManyArgs>(
      args?: SelectSubset<T, service_levelsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service_levels.
     * @param {service_levelsDeleteArgs} args - Arguments to delete one Service_levels.
     * @example
     * // Delete one Service_levels
     * const Service_levels = await prisma.service_levels.delete({
     *   where: {
     *     // ... filter to delete one Service_levels
     *   }
     * })
     * 
    **/
    delete<T extends service_levelsDeleteArgs>(
      args: SelectSubset<T, service_levelsDeleteArgs>
    ): Prisma__service_levelsClient<service_levelsGetPayload<T>>

    /**
     * Update one Service_levels.
     * @param {service_levelsUpdateArgs} args - Arguments to update one Service_levels.
     * @example
     * // Update one Service_levels
     * const service_levels = await prisma.service_levels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends service_levelsUpdateArgs>(
      args: SelectSubset<T, service_levelsUpdateArgs>
    ): Prisma__service_levelsClient<service_levelsGetPayload<T>>

    /**
     * Delete zero or more Service_levels.
     * @param {service_levelsDeleteManyArgs} args - Arguments to filter Service_levels to delete.
     * @example
     * // Delete a few Service_levels
     * const { count } = await prisma.service_levels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends service_levelsDeleteManyArgs>(
      args?: SelectSubset<T, service_levelsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Service_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {service_levelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Service_levels
     * const service_levels = await prisma.service_levels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends service_levelsUpdateManyArgs>(
      args: SelectSubset<T, service_levelsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service_levels.
     * @param {service_levelsUpsertArgs} args - Arguments to update or create a Service_levels.
     * @example
     * // Update or create a Service_levels
     * const service_levels = await prisma.service_levels.upsert({
     *   create: {
     *     // ... data to create a Service_levels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service_levels we want to update
     *   }
     * })
    **/
    upsert<T extends service_levelsUpsertArgs>(
      args: SelectSubset<T, service_levelsUpsertArgs>
    ): Prisma__service_levelsClient<service_levelsGetPayload<T>>

    /**
     * Count the number of Service_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {service_levelsCountArgs} args - Arguments to filter Service_levels to count.
     * @example
     * // Count the number of Service_levels
     * const count = await prisma.service_levels.count({
     *   where: {
     *     // ... the filter for the Service_levels we want to count
     *   }
     * })
    **/
    count<T extends service_levelsCountArgs>(
      args?: Subset<T, service_levelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Service_levelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_levelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Service_levelsAggregateArgs>(args: Subset<T, Service_levelsAggregateArgs>): Prisma.PrismaPromise<GetService_levelsAggregateType<T>>

    /**
     * Group by Service_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_levelsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Service_levelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Service_levelsGroupByArgs['orderBy'] }
        : { orderBy?: Service_levelsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Service_levelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetService_levelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for service_levels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__service_levelsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * service_levels base type for findUnique actions
   */
  export type service_levelsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the service_levels
     */
    select?: service_levelsSelect | null
    /**
     * Filter, which service_levels to fetch.
     */
    where: service_levelsWhereUniqueInput
  }

  /**
   * service_levels findUnique
   */
  export interface service_levelsFindUniqueArgs extends service_levelsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * service_levels findUniqueOrThrow
   */
  export type service_levelsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the service_levels
     */
    select?: service_levelsSelect | null
    /**
     * Filter, which service_levels to fetch.
     */
    where: service_levelsWhereUniqueInput
  }


  /**
   * service_levels base type for findFirst actions
   */
  export type service_levelsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the service_levels
     */
    select?: service_levelsSelect | null
    /**
     * Filter, which service_levels to fetch.
     */
    where?: service_levelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of service_levels to fetch.
     */
    orderBy?: Enumerable<service_levelsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for service_levels.
     */
    cursor?: service_levelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` service_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` service_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of service_levels.
     */
    distinct?: Enumerable<Service_levelsScalarFieldEnum>
  }

  /**
   * service_levels findFirst
   */
  export interface service_levelsFindFirstArgs extends service_levelsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * service_levels findFirstOrThrow
   */
  export type service_levelsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the service_levels
     */
    select?: service_levelsSelect | null
    /**
     * Filter, which service_levels to fetch.
     */
    where?: service_levelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of service_levels to fetch.
     */
    orderBy?: Enumerable<service_levelsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for service_levels.
     */
    cursor?: service_levelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` service_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` service_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of service_levels.
     */
    distinct?: Enumerable<Service_levelsScalarFieldEnum>
  }


  /**
   * service_levels findMany
   */
  export type service_levelsFindManyArgs = {
    /**
     * Select specific fields to fetch from the service_levels
     */
    select?: service_levelsSelect | null
    /**
     * Filter, which service_levels to fetch.
     */
    where?: service_levelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of service_levels to fetch.
     */
    orderBy?: Enumerable<service_levelsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing service_levels.
     */
    cursor?: service_levelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` service_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` service_levels.
     */
    skip?: number
    distinct?: Enumerable<Service_levelsScalarFieldEnum>
  }


  /**
   * service_levels create
   */
  export type service_levelsCreateArgs = {
    /**
     * Select specific fields to fetch from the service_levels
     */
    select?: service_levelsSelect | null
    /**
     * The data needed to create a service_levels.
     */
    data: XOR<service_levelsCreateInput, service_levelsUncheckedCreateInput>
  }


  /**
   * service_levels createMany
   */
  export type service_levelsCreateManyArgs = {
    /**
     * The data used to create many service_levels.
     */
    data: Enumerable<service_levelsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * service_levels update
   */
  export type service_levelsUpdateArgs = {
    /**
     * Select specific fields to fetch from the service_levels
     */
    select?: service_levelsSelect | null
    /**
     * The data needed to update a service_levels.
     */
    data: XOR<service_levelsUpdateInput, service_levelsUncheckedUpdateInput>
    /**
     * Choose, which service_levels to update.
     */
    where: service_levelsWhereUniqueInput
  }


  /**
   * service_levels updateMany
   */
  export type service_levelsUpdateManyArgs = {
    /**
     * The data used to update service_levels.
     */
    data: XOR<service_levelsUpdateManyMutationInput, service_levelsUncheckedUpdateManyInput>
    /**
     * Filter which service_levels to update
     */
    where?: service_levelsWhereInput
  }


  /**
   * service_levels upsert
   */
  export type service_levelsUpsertArgs = {
    /**
     * Select specific fields to fetch from the service_levels
     */
    select?: service_levelsSelect | null
    /**
     * The filter to search for the service_levels to update in case it exists.
     */
    where: service_levelsWhereUniqueInput
    /**
     * In case the service_levels found by the `where` argument doesn't exist, create a new service_levels with this data.
     */
    create: XOR<service_levelsCreateInput, service_levelsUncheckedCreateInput>
    /**
     * In case the service_levels was found with the provided `where` argument, update it with this data.
     */
    update: XOR<service_levelsUpdateInput, service_levelsUncheckedUpdateInput>
  }


  /**
   * service_levels delete
   */
  export type service_levelsDeleteArgs = {
    /**
     * Select specific fields to fetch from the service_levels
     */
    select?: service_levelsSelect | null
    /**
     * Filter which service_levels to delete.
     */
    where: service_levelsWhereUniqueInput
  }


  /**
   * service_levels deleteMany
   */
  export type service_levelsDeleteManyArgs = {
    /**
     * Filter which service_levels to delete
     */
    where?: service_levelsWhereInput
  }


  /**
   * service_levels without action
   */
  export type service_levelsArgs = {
    /**
     * Select specific fields to fetch from the service_levels
     */
    select?: service_levelsSelect | null
  }



  /**
   * Model BlackOutDayTypes
   */


  export type AggregateBlackOutDayTypes = {
    _count: BlackOutDayTypesCountAggregateOutputType | null
    _avg: BlackOutDayTypesAvgAggregateOutputType | null
    _sum: BlackOutDayTypesSumAggregateOutputType | null
    _min: BlackOutDayTypesMinAggregateOutputType | null
    _max: BlackOutDayTypesMaxAggregateOutputType | null
  }

  export type BlackOutDayTypesAvgAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type BlackOutDayTypesSumAggregateOutputType = {
    id: number | null
    status: number | null
    is_deleted: number | null
  }

  export type BlackOutDayTypesMinAggregateOutputType = {
    id: number | null
    type: string | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BlackOutDayTypesMaxAggregateOutputType = {
    id: number | null
    type: string | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BlackOutDayTypesCountAggregateOutputType = {
    id: number
    type: number
    status: number
    is_deleted: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BlackOutDayTypesAvgAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type BlackOutDayTypesSumAggregateInputType = {
    id?: true
    status?: true
    is_deleted?: true
  }

  export type BlackOutDayTypesMinAggregateInputType = {
    id?: true
    type?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type BlackOutDayTypesMaxAggregateInputType = {
    id?: true
    type?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type BlackOutDayTypesCountAggregateInputType = {
    id?: true
    type?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BlackOutDayTypesAggregateArgs = {
    /**
     * Filter which BlackOutDayTypes to aggregate.
     */
    where?: BlackOutDayTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlackOutDayTypes to fetch.
     */
    orderBy?: Enumerable<BlackOutDayTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlackOutDayTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlackOutDayTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlackOutDayTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlackOutDayTypes
    **/
    _count?: true | BlackOutDayTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlackOutDayTypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlackOutDayTypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlackOutDayTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlackOutDayTypesMaxAggregateInputType
  }

  export type GetBlackOutDayTypesAggregateType<T extends BlackOutDayTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateBlackOutDayTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlackOutDayTypes[P]>
      : GetScalarType<T[P], AggregateBlackOutDayTypes[P]>
  }




  export type BlackOutDayTypesGroupByArgs = {
    where?: BlackOutDayTypesWhereInput
    orderBy?: Enumerable<BlackOutDayTypesOrderByWithAggregationInput>
    by: BlackOutDayTypesScalarFieldEnum[]
    having?: BlackOutDayTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlackOutDayTypesCountAggregateInputType | true
    _avg?: BlackOutDayTypesAvgAggregateInputType
    _sum?: BlackOutDayTypesSumAggregateInputType
    _min?: BlackOutDayTypesMinAggregateInputType
    _max?: BlackOutDayTypesMaxAggregateInputType
  }


  export type BlackOutDayTypesGroupByOutputType = {
    id: number
    type: string
    status: number
    is_deleted: number
    created_at: Date
    updated_at: Date
    _count: BlackOutDayTypesCountAggregateOutputType | null
    _avg: BlackOutDayTypesAvgAggregateOutputType | null
    _sum: BlackOutDayTypesSumAggregateOutputType | null
    _min: BlackOutDayTypesMinAggregateOutputType | null
    _max: BlackOutDayTypesMaxAggregateOutputType | null
  }

  type GetBlackOutDayTypesGroupByPayload<T extends BlackOutDayTypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BlackOutDayTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlackOutDayTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlackOutDayTypesGroupByOutputType[P]>
            : GetScalarType<T[P], BlackOutDayTypesGroupByOutputType[P]>
        }
      >
    >


  export type BlackOutDayTypesSelect = {
    id?: boolean
    type?: boolean
    status?: boolean
    is_deleted?: boolean
    created_at?: boolean
    updated_at?: boolean
    blackout_day_type?: boolean | BlackOutDayTypes$blackout_day_typeArgs
    _count?: boolean | BlackOutDayTypesCountOutputTypeArgs
  }


  export type BlackOutDayTypesInclude = {
    blackout_day_type?: boolean | BlackOutDayTypes$blackout_day_typeArgs
    _count?: boolean | BlackOutDayTypesCountOutputTypeArgs
  }

  export type BlackOutDayTypesGetPayload<S extends boolean | null | undefined | BlackOutDayTypesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BlackOutDayTypes :
    S extends undefined ? never :
    S extends { include: any } & (BlackOutDayTypesArgs | BlackOutDayTypesFindManyArgs)
    ? BlackOutDayTypes  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'blackout_day_type' ? Array < BlackOutDaysGetPayload<S['include'][P]>>  :
        P extends '_count' ? BlackOutDayTypesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BlackOutDayTypesArgs | BlackOutDayTypesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'blackout_day_type' ? Array < BlackOutDaysGetPayload<S['select'][P]>>  :
        P extends '_count' ? BlackOutDayTypesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof BlackOutDayTypes ? BlackOutDayTypes[P] : never
  } 
      : BlackOutDayTypes


  type BlackOutDayTypesCountArgs = 
    Omit<BlackOutDayTypesFindManyArgs, 'select' | 'include'> & {
      select?: BlackOutDayTypesCountAggregateInputType | true
    }

  export interface BlackOutDayTypesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BlackOutDayTypes that matches the filter.
     * @param {BlackOutDayTypesFindUniqueArgs} args - Arguments to find a BlackOutDayTypes
     * @example
     * // Get one BlackOutDayTypes
     * const blackOutDayTypes = await prisma.blackOutDayTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlackOutDayTypesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BlackOutDayTypesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BlackOutDayTypes'> extends True ? Prisma__BlackOutDayTypesClient<BlackOutDayTypesGetPayload<T>> : Prisma__BlackOutDayTypesClient<BlackOutDayTypesGetPayload<T> | null, null>

    /**
     * Find one BlackOutDayTypes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BlackOutDayTypesFindUniqueOrThrowArgs} args - Arguments to find a BlackOutDayTypes
     * @example
     * // Get one BlackOutDayTypes
     * const blackOutDayTypes = await prisma.blackOutDayTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BlackOutDayTypesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BlackOutDayTypesFindUniqueOrThrowArgs>
    ): Prisma__BlackOutDayTypesClient<BlackOutDayTypesGetPayload<T>>

    /**
     * Find the first BlackOutDayTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackOutDayTypesFindFirstArgs} args - Arguments to find a BlackOutDayTypes
     * @example
     * // Get one BlackOutDayTypes
     * const blackOutDayTypes = await prisma.blackOutDayTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlackOutDayTypesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BlackOutDayTypesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BlackOutDayTypes'> extends True ? Prisma__BlackOutDayTypesClient<BlackOutDayTypesGetPayload<T>> : Prisma__BlackOutDayTypesClient<BlackOutDayTypesGetPayload<T> | null, null>

    /**
     * Find the first BlackOutDayTypes that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackOutDayTypesFindFirstOrThrowArgs} args - Arguments to find a BlackOutDayTypes
     * @example
     * // Get one BlackOutDayTypes
     * const blackOutDayTypes = await prisma.blackOutDayTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BlackOutDayTypesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BlackOutDayTypesFindFirstOrThrowArgs>
    ): Prisma__BlackOutDayTypesClient<BlackOutDayTypesGetPayload<T>>

    /**
     * Find zero or more BlackOutDayTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackOutDayTypesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlackOutDayTypes
     * const blackOutDayTypes = await prisma.blackOutDayTypes.findMany()
     * 
     * // Get first 10 BlackOutDayTypes
     * const blackOutDayTypes = await prisma.blackOutDayTypes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blackOutDayTypesWithIdOnly = await prisma.blackOutDayTypes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BlackOutDayTypesFindManyArgs>(
      args?: SelectSubset<T, BlackOutDayTypesFindManyArgs>
    ): Prisma.PrismaPromise<Array<BlackOutDayTypesGetPayload<T>>>

    /**
     * Create a BlackOutDayTypes.
     * @param {BlackOutDayTypesCreateArgs} args - Arguments to create a BlackOutDayTypes.
     * @example
     * // Create one BlackOutDayTypes
     * const BlackOutDayTypes = await prisma.blackOutDayTypes.create({
     *   data: {
     *     // ... data to create a BlackOutDayTypes
     *   }
     * })
     * 
    **/
    create<T extends BlackOutDayTypesCreateArgs>(
      args: SelectSubset<T, BlackOutDayTypesCreateArgs>
    ): Prisma__BlackOutDayTypesClient<BlackOutDayTypesGetPayload<T>>

    /**
     * Create many BlackOutDayTypes.
     *     @param {BlackOutDayTypesCreateManyArgs} args - Arguments to create many BlackOutDayTypes.
     *     @example
     *     // Create many BlackOutDayTypes
     *     const blackOutDayTypes = await prisma.blackOutDayTypes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BlackOutDayTypesCreateManyArgs>(
      args?: SelectSubset<T, BlackOutDayTypesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BlackOutDayTypes.
     * @param {BlackOutDayTypesDeleteArgs} args - Arguments to delete one BlackOutDayTypes.
     * @example
     * // Delete one BlackOutDayTypes
     * const BlackOutDayTypes = await prisma.blackOutDayTypes.delete({
     *   where: {
     *     // ... filter to delete one BlackOutDayTypes
     *   }
     * })
     * 
    **/
    delete<T extends BlackOutDayTypesDeleteArgs>(
      args: SelectSubset<T, BlackOutDayTypesDeleteArgs>
    ): Prisma__BlackOutDayTypesClient<BlackOutDayTypesGetPayload<T>>

    /**
     * Update one BlackOutDayTypes.
     * @param {BlackOutDayTypesUpdateArgs} args - Arguments to update one BlackOutDayTypes.
     * @example
     * // Update one BlackOutDayTypes
     * const blackOutDayTypes = await prisma.blackOutDayTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlackOutDayTypesUpdateArgs>(
      args: SelectSubset<T, BlackOutDayTypesUpdateArgs>
    ): Prisma__BlackOutDayTypesClient<BlackOutDayTypesGetPayload<T>>

    /**
     * Delete zero or more BlackOutDayTypes.
     * @param {BlackOutDayTypesDeleteManyArgs} args - Arguments to filter BlackOutDayTypes to delete.
     * @example
     * // Delete a few BlackOutDayTypes
     * const { count } = await prisma.blackOutDayTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlackOutDayTypesDeleteManyArgs>(
      args?: SelectSubset<T, BlackOutDayTypesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlackOutDayTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackOutDayTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlackOutDayTypes
     * const blackOutDayTypes = await prisma.blackOutDayTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlackOutDayTypesUpdateManyArgs>(
      args: SelectSubset<T, BlackOutDayTypesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlackOutDayTypes.
     * @param {BlackOutDayTypesUpsertArgs} args - Arguments to update or create a BlackOutDayTypes.
     * @example
     * // Update or create a BlackOutDayTypes
     * const blackOutDayTypes = await prisma.blackOutDayTypes.upsert({
     *   create: {
     *     // ... data to create a BlackOutDayTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlackOutDayTypes we want to update
     *   }
     * })
    **/
    upsert<T extends BlackOutDayTypesUpsertArgs>(
      args: SelectSubset<T, BlackOutDayTypesUpsertArgs>
    ): Prisma__BlackOutDayTypesClient<BlackOutDayTypesGetPayload<T>>

    /**
     * Count the number of BlackOutDayTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackOutDayTypesCountArgs} args - Arguments to filter BlackOutDayTypes to count.
     * @example
     * // Count the number of BlackOutDayTypes
     * const count = await prisma.blackOutDayTypes.count({
     *   where: {
     *     // ... the filter for the BlackOutDayTypes we want to count
     *   }
     * })
    **/
    count<T extends BlackOutDayTypesCountArgs>(
      args?: Subset<T, BlackOutDayTypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlackOutDayTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlackOutDayTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackOutDayTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlackOutDayTypesAggregateArgs>(args: Subset<T, BlackOutDayTypesAggregateArgs>): Prisma.PrismaPromise<GetBlackOutDayTypesAggregateType<T>>

    /**
     * Group by BlackOutDayTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackOutDayTypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlackOutDayTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlackOutDayTypesGroupByArgs['orderBy'] }
        : { orderBy?: BlackOutDayTypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlackOutDayTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlackOutDayTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BlackOutDayTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BlackOutDayTypesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    blackout_day_type<T extends BlackOutDayTypes$blackout_day_typeArgs= {}>(args?: Subset<T, BlackOutDayTypes$blackout_day_typeArgs>): Prisma.PrismaPromise<Array<BlackOutDaysGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BlackOutDayTypes base type for findUnique actions
   */
  export type BlackOutDayTypesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BlackOutDayTypes
     */
    select?: BlackOutDayTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDayTypesInclude | null
    /**
     * Filter, which BlackOutDayTypes to fetch.
     */
    where: BlackOutDayTypesWhereUniqueInput
  }

  /**
   * BlackOutDayTypes findUnique
   */
  export interface BlackOutDayTypesFindUniqueArgs extends BlackOutDayTypesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BlackOutDayTypes findUniqueOrThrow
   */
  export type BlackOutDayTypesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BlackOutDayTypes
     */
    select?: BlackOutDayTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDayTypesInclude | null
    /**
     * Filter, which BlackOutDayTypes to fetch.
     */
    where: BlackOutDayTypesWhereUniqueInput
  }


  /**
   * BlackOutDayTypes base type for findFirst actions
   */
  export type BlackOutDayTypesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BlackOutDayTypes
     */
    select?: BlackOutDayTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDayTypesInclude | null
    /**
     * Filter, which BlackOutDayTypes to fetch.
     */
    where?: BlackOutDayTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlackOutDayTypes to fetch.
     */
    orderBy?: Enumerable<BlackOutDayTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlackOutDayTypes.
     */
    cursor?: BlackOutDayTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlackOutDayTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlackOutDayTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlackOutDayTypes.
     */
    distinct?: Enumerable<BlackOutDayTypesScalarFieldEnum>
  }

  /**
   * BlackOutDayTypes findFirst
   */
  export interface BlackOutDayTypesFindFirstArgs extends BlackOutDayTypesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BlackOutDayTypes findFirstOrThrow
   */
  export type BlackOutDayTypesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BlackOutDayTypes
     */
    select?: BlackOutDayTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDayTypesInclude | null
    /**
     * Filter, which BlackOutDayTypes to fetch.
     */
    where?: BlackOutDayTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlackOutDayTypes to fetch.
     */
    orderBy?: Enumerable<BlackOutDayTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlackOutDayTypes.
     */
    cursor?: BlackOutDayTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlackOutDayTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlackOutDayTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlackOutDayTypes.
     */
    distinct?: Enumerable<BlackOutDayTypesScalarFieldEnum>
  }


  /**
   * BlackOutDayTypes findMany
   */
  export type BlackOutDayTypesFindManyArgs = {
    /**
     * Select specific fields to fetch from the BlackOutDayTypes
     */
    select?: BlackOutDayTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDayTypesInclude | null
    /**
     * Filter, which BlackOutDayTypes to fetch.
     */
    where?: BlackOutDayTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlackOutDayTypes to fetch.
     */
    orderBy?: Enumerable<BlackOutDayTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlackOutDayTypes.
     */
    cursor?: BlackOutDayTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlackOutDayTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlackOutDayTypes.
     */
    skip?: number
    distinct?: Enumerable<BlackOutDayTypesScalarFieldEnum>
  }


  /**
   * BlackOutDayTypes create
   */
  export type BlackOutDayTypesCreateArgs = {
    /**
     * Select specific fields to fetch from the BlackOutDayTypes
     */
    select?: BlackOutDayTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDayTypesInclude | null
    /**
     * The data needed to create a BlackOutDayTypes.
     */
    data: XOR<BlackOutDayTypesCreateInput, BlackOutDayTypesUncheckedCreateInput>
  }


  /**
   * BlackOutDayTypes createMany
   */
  export type BlackOutDayTypesCreateManyArgs = {
    /**
     * The data used to create many BlackOutDayTypes.
     */
    data: Enumerable<BlackOutDayTypesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BlackOutDayTypes update
   */
  export type BlackOutDayTypesUpdateArgs = {
    /**
     * Select specific fields to fetch from the BlackOutDayTypes
     */
    select?: BlackOutDayTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDayTypesInclude | null
    /**
     * The data needed to update a BlackOutDayTypes.
     */
    data: XOR<BlackOutDayTypesUpdateInput, BlackOutDayTypesUncheckedUpdateInput>
    /**
     * Choose, which BlackOutDayTypes to update.
     */
    where: BlackOutDayTypesWhereUniqueInput
  }


  /**
   * BlackOutDayTypes updateMany
   */
  export type BlackOutDayTypesUpdateManyArgs = {
    /**
     * The data used to update BlackOutDayTypes.
     */
    data: XOR<BlackOutDayTypesUpdateManyMutationInput, BlackOutDayTypesUncheckedUpdateManyInput>
    /**
     * Filter which BlackOutDayTypes to update
     */
    where?: BlackOutDayTypesWhereInput
  }


  /**
   * BlackOutDayTypes upsert
   */
  export type BlackOutDayTypesUpsertArgs = {
    /**
     * Select specific fields to fetch from the BlackOutDayTypes
     */
    select?: BlackOutDayTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDayTypesInclude | null
    /**
     * The filter to search for the BlackOutDayTypes to update in case it exists.
     */
    where: BlackOutDayTypesWhereUniqueInput
    /**
     * In case the BlackOutDayTypes found by the `where` argument doesn't exist, create a new BlackOutDayTypes with this data.
     */
    create: XOR<BlackOutDayTypesCreateInput, BlackOutDayTypesUncheckedCreateInput>
    /**
     * In case the BlackOutDayTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlackOutDayTypesUpdateInput, BlackOutDayTypesUncheckedUpdateInput>
  }


  /**
   * BlackOutDayTypes delete
   */
  export type BlackOutDayTypesDeleteArgs = {
    /**
     * Select specific fields to fetch from the BlackOutDayTypes
     */
    select?: BlackOutDayTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDayTypesInclude | null
    /**
     * Filter which BlackOutDayTypes to delete.
     */
    where: BlackOutDayTypesWhereUniqueInput
  }


  /**
   * BlackOutDayTypes deleteMany
   */
  export type BlackOutDayTypesDeleteManyArgs = {
    /**
     * Filter which BlackOutDayTypes to delete
     */
    where?: BlackOutDayTypesWhereInput
  }


  /**
   * BlackOutDayTypes.blackout_day_type
   */
  export type BlackOutDayTypes$blackout_day_typeArgs = {
    /**
     * Select specific fields to fetch from the BlackOutDays
     */
    select?: BlackOutDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDaysInclude | null
    where?: BlackOutDaysWhereInput
    orderBy?: Enumerable<BlackOutDaysOrderByWithRelationInput>
    cursor?: BlackOutDaysWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BlackOutDaysScalarFieldEnum>
  }


  /**
   * BlackOutDayTypes without action
   */
  export type BlackOutDayTypesArgs = {
    /**
     * Select specific fields to fetch from the BlackOutDayTypes
     */
    select?: BlackOutDayTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDayTypesInclude | null
  }



  /**
   * Model BlackOutDays
   */


  export type AggregateBlackOutDays = {
    _count: BlackOutDaysCountAggregateOutputType | null
    _avg: BlackOutDaysAvgAggregateOutputType | null
    _sum: BlackOutDaysSumAggregateOutputType | null
    _min: BlackOutDaysMinAggregateOutputType | null
    _max: BlackOutDaysMaxAggregateOutputType | null
  }

  export type BlackOutDaysAvgAggregateOutputType = {
    id: number | null
    day_type_id: number | null
    applies_to: number | null
    status: number | null
    is_deleted: number | null
  }

  export type BlackOutDaysSumAggregateOutputType = {
    id: number | null
    day_type_id: number | null
    applies_to: number | null
    status: number | null
    is_deleted: number | null
  }

  export type BlackOutDaysMinAggregateOutputType = {
    id: number | null
    day_type_id: number | null
    title: string | null
    start_date: Date | null
    end_date: Date | null
    applies_to: number | null
    color_code: string | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BlackOutDaysMaxAggregateOutputType = {
    id: number | null
    day_type_id: number | null
    title: string | null
    start_date: Date | null
    end_date: Date | null
    applies_to: number | null
    color_code: string | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BlackOutDaysCountAggregateOutputType = {
    id: number
    day_type_id: number
    title: number
    start_date: number
    end_date: number
    applies_to: number
    color_code: number
    status: number
    is_deleted: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BlackOutDaysAvgAggregateInputType = {
    id?: true
    day_type_id?: true
    applies_to?: true
    status?: true
    is_deleted?: true
  }

  export type BlackOutDaysSumAggregateInputType = {
    id?: true
    day_type_id?: true
    applies_to?: true
    status?: true
    is_deleted?: true
  }

  export type BlackOutDaysMinAggregateInputType = {
    id?: true
    day_type_id?: true
    title?: true
    start_date?: true
    end_date?: true
    applies_to?: true
    color_code?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type BlackOutDaysMaxAggregateInputType = {
    id?: true
    day_type_id?: true
    title?: true
    start_date?: true
    end_date?: true
    applies_to?: true
    color_code?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type BlackOutDaysCountAggregateInputType = {
    id?: true
    day_type_id?: true
    title?: true
    start_date?: true
    end_date?: true
    applies_to?: true
    color_code?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BlackOutDaysAggregateArgs = {
    /**
     * Filter which BlackOutDays to aggregate.
     */
    where?: BlackOutDaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlackOutDays to fetch.
     */
    orderBy?: Enumerable<BlackOutDaysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlackOutDaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlackOutDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlackOutDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlackOutDays
    **/
    _count?: true | BlackOutDaysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlackOutDaysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlackOutDaysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlackOutDaysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlackOutDaysMaxAggregateInputType
  }

  export type GetBlackOutDaysAggregateType<T extends BlackOutDaysAggregateArgs> = {
        [P in keyof T & keyof AggregateBlackOutDays]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlackOutDays[P]>
      : GetScalarType<T[P], AggregateBlackOutDays[P]>
  }




  export type BlackOutDaysGroupByArgs = {
    where?: BlackOutDaysWhereInput
    orderBy?: Enumerable<BlackOutDaysOrderByWithAggregationInput>
    by: BlackOutDaysScalarFieldEnum[]
    having?: BlackOutDaysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlackOutDaysCountAggregateInputType | true
    _avg?: BlackOutDaysAvgAggregateInputType
    _sum?: BlackOutDaysSumAggregateInputType
    _min?: BlackOutDaysMinAggregateInputType
    _max?: BlackOutDaysMaxAggregateInputType
  }


  export type BlackOutDaysGroupByOutputType = {
    id: number
    day_type_id: number
    title: string
    start_date: Date
    end_date: Date
    applies_to: number
    color_code: string | null
    status: number
    is_deleted: number
    created_at: Date
    updated_at: Date
    _count: BlackOutDaysCountAggregateOutputType | null
    _avg: BlackOutDaysAvgAggregateOutputType | null
    _sum: BlackOutDaysSumAggregateOutputType | null
    _min: BlackOutDaysMinAggregateOutputType | null
    _max: BlackOutDaysMaxAggregateOutputType | null
  }

  type GetBlackOutDaysGroupByPayload<T extends BlackOutDaysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BlackOutDaysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlackOutDaysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlackOutDaysGroupByOutputType[P]>
            : GetScalarType<T[P], BlackOutDaysGroupByOutputType[P]>
        }
      >
    >


  export type BlackOutDaysSelect = {
    id?: boolean
    day_type_id?: boolean
    title?: boolean
    start_date?: boolean
    end_date?: boolean
    applies_to?: boolean
    color_code?: boolean
    status?: boolean
    is_deleted?: boolean
    created_at?: boolean
    updated_at?: boolean
    blackout_day_type?: boolean | BlackOutDayTypesArgs
  }


  export type BlackOutDaysInclude = {
    blackout_day_type?: boolean | BlackOutDayTypesArgs
  }

  export type BlackOutDaysGetPayload<S extends boolean | null | undefined | BlackOutDaysArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BlackOutDays :
    S extends undefined ? never :
    S extends { include: any } & (BlackOutDaysArgs | BlackOutDaysFindManyArgs)
    ? BlackOutDays  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'blackout_day_type' ? BlackOutDayTypesGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (BlackOutDaysArgs | BlackOutDaysFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'blackout_day_type' ? BlackOutDayTypesGetPayload<S['select'][P]> | null :  P extends keyof BlackOutDays ? BlackOutDays[P] : never
  } 
      : BlackOutDays


  type BlackOutDaysCountArgs = 
    Omit<BlackOutDaysFindManyArgs, 'select' | 'include'> & {
      select?: BlackOutDaysCountAggregateInputType | true
    }

  export interface BlackOutDaysDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BlackOutDays that matches the filter.
     * @param {BlackOutDaysFindUniqueArgs} args - Arguments to find a BlackOutDays
     * @example
     * // Get one BlackOutDays
     * const blackOutDays = await prisma.blackOutDays.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlackOutDaysFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BlackOutDaysFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BlackOutDays'> extends True ? Prisma__BlackOutDaysClient<BlackOutDaysGetPayload<T>> : Prisma__BlackOutDaysClient<BlackOutDaysGetPayload<T> | null, null>

    /**
     * Find one BlackOutDays that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BlackOutDaysFindUniqueOrThrowArgs} args - Arguments to find a BlackOutDays
     * @example
     * // Get one BlackOutDays
     * const blackOutDays = await prisma.blackOutDays.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BlackOutDaysFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BlackOutDaysFindUniqueOrThrowArgs>
    ): Prisma__BlackOutDaysClient<BlackOutDaysGetPayload<T>>

    /**
     * Find the first BlackOutDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackOutDaysFindFirstArgs} args - Arguments to find a BlackOutDays
     * @example
     * // Get one BlackOutDays
     * const blackOutDays = await prisma.blackOutDays.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlackOutDaysFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BlackOutDaysFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BlackOutDays'> extends True ? Prisma__BlackOutDaysClient<BlackOutDaysGetPayload<T>> : Prisma__BlackOutDaysClient<BlackOutDaysGetPayload<T> | null, null>

    /**
     * Find the first BlackOutDays that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackOutDaysFindFirstOrThrowArgs} args - Arguments to find a BlackOutDays
     * @example
     * // Get one BlackOutDays
     * const blackOutDays = await prisma.blackOutDays.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BlackOutDaysFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BlackOutDaysFindFirstOrThrowArgs>
    ): Prisma__BlackOutDaysClient<BlackOutDaysGetPayload<T>>

    /**
     * Find zero or more BlackOutDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackOutDaysFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlackOutDays
     * const blackOutDays = await prisma.blackOutDays.findMany()
     * 
     * // Get first 10 BlackOutDays
     * const blackOutDays = await prisma.blackOutDays.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blackOutDaysWithIdOnly = await prisma.blackOutDays.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BlackOutDaysFindManyArgs>(
      args?: SelectSubset<T, BlackOutDaysFindManyArgs>
    ): Prisma.PrismaPromise<Array<BlackOutDaysGetPayload<T>>>

    /**
     * Create a BlackOutDays.
     * @param {BlackOutDaysCreateArgs} args - Arguments to create a BlackOutDays.
     * @example
     * // Create one BlackOutDays
     * const BlackOutDays = await prisma.blackOutDays.create({
     *   data: {
     *     // ... data to create a BlackOutDays
     *   }
     * })
     * 
    **/
    create<T extends BlackOutDaysCreateArgs>(
      args: SelectSubset<T, BlackOutDaysCreateArgs>
    ): Prisma__BlackOutDaysClient<BlackOutDaysGetPayload<T>>

    /**
     * Create many BlackOutDays.
     *     @param {BlackOutDaysCreateManyArgs} args - Arguments to create many BlackOutDays.
     *     @example
     *     // Create many BlackOutDays
     *     const blackOutDays = await prisma.blackOutDays.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BlackOutDaysCreateManyArgs>(
      args?: SelectSubset<T, BlackOutDaysCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BlackOutDays.
     * @param {BlackOutDaysDeleteArgs} args - Arguments to delete one BlackOutDays.
     * @example
     * // Delete one BlackOutDays
     * const BlackOutDays = await prisma.blackOutDays.delete({
     *   where: {
     *     // ... filter to delete one BlackOutDays
     *   }
     * })
     * 
    **/
    delete<T extends BlackOutDaysDeleteArgs>(
      args: SelectSubset<T, BlackOutDaysDeleteArgs>
    ): Prisma__BlackOutDaysClient<BlackOutDaysGetPayload<T>>

    /**
     * Update one BlackOutDays.
     * @param {BlackOutDaysUpdateArgs} args - Arguments to update one BlackOutDays.
     * @example
     * // Update one BlackOutDays
     * const blackOutDays = await prisma.blackOutDays.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlackOutDaysUpdateArgs>(
      args: SelectSubset<T, BlackOutDaysUpdateArgs>
    ): Prisma__BlackOutDaysClient<BlackOutDaysGetPayload<T>>

    /**
     * Delete zero or more BlackOutDays.
     * @param {BlackOutDaysDeleteManyArgs} args - Arguments to filter BlackOutDays to delete.
     * @example
     * // Delete a few BlackOutDays
     * const { count } = await prisma.blackOutDays.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlackOutDaysDeleteManyArgs>(
      args?: SelectSubset<T, BlackOutDaysDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlackOutDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackOutDaysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlackOutDays
     * const blackOutDays = await prisma.blackOutDays.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlackOutDaysUpdateManyArgs>(
      args: SelectSubset<T, BlackOutDaysUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlackOutDays.
     * @param {BlackOutDaysUpsertArgs} args - Arguments to update or create a BlackOutDays.
     * @example
     * // Update or create a BlackOutDays
     * const blackOutDays = await prisma.blackOutDays.upsert({
     *   create: {
     *     // ... data to create a BlackOutDays
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlackOutDays we want to update
     *   }
     * })
    **/
    upsert<T extends BlackOutDaysUpsertArgs>(
      args: SelectSubset<T, BlackOutDaysUpsertArgs>
    ): Prisma__BlackOutDaysClient<BlackOutDaysGetPayload<T>>

    /**
     * Count the number of BlackOutDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackOutDaysCountArgs} args - Arguments to filter BlackOutDays to count.
     * @example
     * // Count the number of BlackOutDays
     * const count = await prisma.blackOutDays.count({
     *   where: {
     *     // ... the filter for the BlackOutDays we want to count
     *   }
     * })
    **/
    count<T extends BlackOutDaysCountArgs>(
      args?: Subset<T, BlackOutDaysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlackOutDaysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlackOutDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackOutDaysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlackOutDaysAggregateArgs>(args: Subset<T, BlackOutDaysAggregateArgs>): Prisma.PrismaPromise<GetBlackOutDaysAggregateType<T>>

    /**
     * Group by BlackOutDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackOutDaysGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlackOutDaysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlackOutDaysGroupByArgs['orderBy'] }
        : { orderBy?: BlackOutDaysGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlackOutDaysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlackOutDaysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BlackOutDays.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BlackOutDaysClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    blackout_day_type<T extends BlackOutDayTypesArgs= {}>(args?: Subset<T, BlackOutDayTypesArgs>): Prisma__BlackOutDayTypesClient<BlackOutDayTypesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BlackOutDays base type for findUnique actions
   */
  export type BlackOutDaysFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BlackOutDays
     */
    select?: BlackOutDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDaysInclude | null
    /**
     * Filter, which BlackOutDays to fetch.
     */
    where: BlackOutDaysWhereUniqueInput
  }

  /**
   * BlackOutDays findUnique
   */
  export interface BlackOutDaysFindUniqueArgs extends BlackOutDaysFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BlackOutDays findUniqueOrThrow
   */
  export type BlackOutDaysFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BlackOutDays
     */
    select?: BlackOutDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDaysInclude | null
    /**
     * Filter, which BlackOutDays to fetch.
     */
    where: BlackOutDaysWhereUniqueInput
  }


  /**
   * BlackOutDays base type for findFirst actions
   */
  export type BlackOutDaysFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BlackOutDays
     */
    select?: BlackOutDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDaysInclude | null
    /**
     * Filter, which BlackOutDays to fetch.
     */
    where?: BlackOutDaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlackOutDays to fetch.
     */
    orderBy?: Enumerable<BlackOutDaysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlackOutDays.
     */
    cursor?: BlackOutDaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlackOutDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlackOutDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlackOutDays.
     */
    distinct?: Enumerable<BlackOutDaysScalarFieldEnum>
  }

  /**
   * BlackOutDays findFirst
   */
  export interface BlackOutDaysFindFirstArgs extends BlackOutDaysFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BlackOutDays findFirstOrThrow
   */
  export type BlackOutDaysFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BlackOutDays
     */
    select?: BlackOutDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDaysInclude | null
    /**
     * Filter, which BlackOutDays to fetch.
     */
    where?: BlackOutDaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlackOutDays to fetch.
     */
    orderBy?: Enumerable<BlackOutDaysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlackOutDays.
     */
    cursor?: BlackOutDaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlackOutDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlackOutDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlackOutDays.
     */
    distinct?: Enumerable<BlackOutDaysScalarFieldEnum>
  }


  /**
   * BlackOutDays findMany
   */
  export type BlackOutDaysFindManyArgs = {
    /**
     * Select specific fields to fetch from the BlackOutDays
     */
    select?: BlackOutDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDaysInclude | null
    /**
     * Filter, which BlackOutDays to fetch.
     */
    where?: BlackOutDaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlackOutDays to fetch.
     */
    orderBy?: Enumerable<BlackOutDaysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlackOutDays.
     */
    cursor?: BlackOutDaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlackOutDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlackOutDays.
     */
    skip?: number
    distinct?: Enumerable<BlackOutDaysScalarFieldEnum>
  }


  /**
   * BlackOutDays create
   */
  export type BlackOutDaysCreateArgs = {
    /**
     * Select specific fields to fetch from the BlackOutDays
     */
    select?: BlackOutDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDaysInclude | null
    /**
     * The data needed to create a BlackOutDays.
     */
    data: XOR<BlackOutDaysCreateInput, BlackOutDaysUncheckedCreateInput>
  }


  /**
   * BlackOutDays createMany
   */
  export type BlackOutDaysCreateManyArgs = {
    /**
     * The data used to create many BlackOutDays.
     */
    data: Enumerable<BlackOutDaysCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BlackOutDays update
   */
  export type BlackOutDaysUpdateArgs = {
    /**
     * Select specific fields to fetch from the BlackOutDays
     */
    select?: BlackOutDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDaysInclude | null
    /**
     * The data needed to update a BlackOutDays.
     */
    data: XOR<BlackOutDaysUpdateInput, BlackOutDaysUncheckedUpdateInput>
    /**
     * Choose, which BlackOutDays to update.
     */
    where: BlackOutDaysWhereUniqueInput
  }


  /**
   * BlackOutDays updateMany
   */
  export type BlackOutDaysUpdateManyArgs = {
    /**
     * The data used to update BlackOutDays.
     */
    data: XOR<BlackOutDaysUpdateManyMutationInput, BlackOutDaysUncheckedUpdateManyInput>
    /**
     * Filter which BlackOutDays to update
     */
    where?: BlackOutDaysWhereInput
  }


  /**
   * BlackOutDays upsert
   */
  export type BlackOutDaysUpsertArgs = {
    /**
     * Select specific fields to fetch from the BlackOutDays
     */
    select?: BlackOutDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDaysInclude | null
    /**
     * The filter to search for the BlackOutDays to update in case it exists.
     */
    where: BlackOutDaysWhereUniqueInput
    /**
     * In case the BlackOutDays found by the `where` argument doesn't exist, create a new BlackOutDays with this data.
     */
    create: XOR<BlackOutDaysCreateInput, BlackOutDaysUncheckedCreateInput>
    /**
     * In case the BlackOutDays was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlackOutDaysUpdateInput, BlackOutDaysUncheckedUpdateInput>
  }


  /**
   * BlackOutDays delete
   */
  export type BlackOutDaysDeleteArgs = {
    /**
     * Select specific fields to fetch from the BlackOutDays
     */
    select?: BlackOutDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDaysInclude | null
    /**
     * Filter which BlackOutDays to delete.
     */
    where: BlackOutDaysWhereUniqueInput
  }


  /**
   * BlackOutDays deleteMany
   */
  export type BlackOutDaysDeleteManyArgs = {
    /**
     * Filter which BlackOutDays to delete
     */
    where?: BlackOutDaysWhereInput
  }


  /**
   * BlackOutDays without action
   */
  export type BlackOutDaysArgs = {
    /**
     * Select specific fields to fetch from the BlackOutDays
     */
    select?: BlackOutDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlackOutDaysInclude | null
  }



  /**
   * Model ReminderThresoldDays
   */


  export type AggregateReminderThresoldDays = {
    _count: ReminderThresoldDaysCountAggregateOutputType | null
    _avg: ReminderThresoldDaysAvgAggregateOutputType | null
    _sum: ReminderThresoldDaysSumAggregateOutputType | null
    _min: ReminderThresoldDaysMinAggregateOutputType | null
    _max: ReminderThresoldDaysMaxAggregateOutputType | null
  }

  export type ReminderThresoldDaysAvgAggregateOutputType = {
    id: number | null
    thresold_day: number | null
    status: number | null
    is_deleted: number | null
  }

  export type ReminderThresoldDaysSumAggregateOutputType = {
    id: number | null
    thresold_day: number | null
    status: number | null
    is_deleted: number | null
  }

  export type ReminderThresoldDaysMinAggregateOutputType = {
    id: number | null
    thresold_day: number | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReminderThresoldDaysMaxAggregateOutputType = {
    id: number | null
    thresold_day: number | null
    status: number | null
    is_deleted: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReminderThresoldDaysCountAggregateOutputType = {
    id: number
    thresold_day: number
    status: number
    is_deleted: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ReminderThresoldDaysAvgAggregateInputType = {
    id?: true
    thresold_day?: true
    status?: true
    is_deleted?: true
  }

  export type ReminderThresoldDaysSumAggregateInputType = {
    id?: true
    thresold_day?: true
    status?: true
    is_deleted?: true
  }

  export type ReminderThresoldDaysMinAggregateInputType = {
    id?: true
    thresold_day?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type ReminderThresoldDaysMaxAggregateInputType = {
    id?: true
    thresold_day?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type ReminderThresoldDaysCountAggregateInputType = {
    id?: true
    thresold_day?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ReminderThresoldDaysAggregateArgs = {
    /**
     * Filter which ReminderThresoldDays to aggregate.
     */
    where?: ReminderThresoldDaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderThresoldDays to fetch.
     */
    orderBy?: Enumerable<ReminderThresoldDaysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReminderThresoldDaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderThresoldDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderThresoldDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReminderThresoldDays
    **/
    _count?: true | ReminderThresoldDaysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReminderThresoldDaysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReminderThresoldDaysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReminderThresoldDaysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReminderThresoldDaysMaxAggregateInputType
  }

  export type GetReminderThresoldDaysAggregateType<T extends ReminderThresoldDaysAggregateArgs> = {
        [P in keyof T & keyof AggregateReminderThresoldDays]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminderThresoldDays[P]>
      : GetScalarType<T[P], AggregateReminderThresoldDays[P]>
  }




  export type ReminderThresoldDaysGroupByArgs = {
    where?: ReminderThresoldDaysWhereInput
    orderBy?: Enumerable<ReminderThresoldDaysOrderByWithAggregationInput>
    by: ReminderThresoldDaysScalarFieldEnum[]
    having?: ReminderThresoldDaysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReminderThresoldDaysCountAggregateInputType | true
    _avg?: ReminderThresoldDaysAvgAggregateInputType
    _sum?: ReminderThresoldDaysSumAggregateInputType
    _min?: ReminderThresoldDaysMinAggregateInputType
    _max?: ReminderThresoldDaysMaxAggregateInputType
  }


  export type ReminderThresoldDaysGroupByOutputType = {
    id: number
    thresold_day: number
    status: number
    is_deleted: number
    created_at: Date
    updated_at: Date
    _count: ReminderThresoldDaysCountAggregateOutputType | null
    _avg: ReminderThresoldDaysAvgAggregateOutputType | null
    _sum: ReminderThresoldDaysSumAggregateOutputType | null
    _min: ReminderThresoldDaysMinAggregateOutputType | null
    _max: ReminderThresoldDaysMaxAggregateOutputType | null
  }

  type GetReminderThresoldDaysGroupByPayload<T extends ReminderThresoldDaysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ReminderThresoldDaysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReminderThresoldDaysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReminderThresoldDaysGroupByOutputType[P]>
            : GetScalarType<T[P], ReminderThresoldDaysGroupByOutputType[P]>
        }
      >
    >


  export type ReminderThresoldDaysSelect = {
    id?: boolean
    thresold_day?: boolean
    status?: boolean
    is_deleted?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type ReminderThresoldDaysGetPayload<S extends boolean | null | undefined | ReminderThresoldDaysArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ReminderThresoldDays :
    S extends undefined ? never :
    S extends { include: any } & (ReminderThresoldDaysArgs | ReminderThresoldDaysFindManyArgs)
    ? ReminderThresoldDays 
    : S extends { select: any } & (ReminderThresoldDaysArgs | ReminderThresoldDaysFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ReminderThresoldDays ? ReminderThresoldDays[P] : never
  } 
      : ReminderThresoldDays


  type ReminderThresoldDaysCountArgs = 
    Omit<ReminderThresoldDaysFindManyArgs, 'select' | 'include'> & {
      select?: ReminderThresoldDaysCountAggregateInputType | true
    }

  export interface ReminderThresoldDaysDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ReminderThresoldDays that matches the filter.
     * @param {ReminderThresoldDaysFindUniqueArgs} args - Arguments to find a ReminderThresoldDays
     * @example
     * // Get one ReminderThresoldDays
     * const reminderThresoldDays = await prisma.reminderThresoldDays.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReminderThresoldDaysFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ReminderThresoldDaysFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ReminderThresoldDays'> extends True ? Prisma__ReminderThresoldDaysClient<ReminderThresoldDaysGetPayload<T>> : Prisma__ReminderThresoldDaysClient<ReminderThresoldDaysGetPayload<T> | null, null>

    /**
     * Find one ReminderThresoldDays that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReminderThresoldDaysFindUniqueOrThrowArgs} args - Arguments to find a ReminderThresoldDays
     * @example
     * // Get one ReminderThresoldDays
     * const reminderThresoldDays = await prisma.reminderThresoldDays.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReminderThresoldDaysFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ReminderThresoldDaysFindUniqueOrThrowArgs>
    ): Prisma__ReminderThresoldDaysClient<ReminderThresoldDaysGetPayload<T>>

    /**
     * Find the first ReminderThresoldDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderThresoldDaysFindFirstArgs} args - Arguments to find a ReminderThresoldDays
     * @example
     * // Get one ReminderThresoldDays
     * const reminderThresoldDays = await prisma.reminderThresoldDays.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReminderThresoldDaysFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ReminderThresoldDaysFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ReminderThresoldDays'> extends True ? Prisma__ReminderThresoldDaysClient<ReminderThresoldDaysGetPayload<T>> : Prisma__ReminderThresoldDaysClient<ReminderThresoldDaysGetPayload<T> | null, null>

    /**
     * Find the first ReminderThresoldDays that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderThresoldDaysFindFirstOrThrowArgs} args - Arguments to find a ReminderThresoldDays
     * @example
     * // Get one ReminderThresoldDays
     * const reminderThresoldDays = await prisma.reminderThresoldDays.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReminderThresoldDaysFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReminderThresoldDaysFindFirstOrThrowArgs>
    ): Prisma__ReminderThresoldDaysClient<ReminderThresoldDaysGetPayload<T>>

    /**
     * Find zero or more ReminderThresoldDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderThresoldDaysFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReminderThresoldDays
     * const reminderThresoldDays = await prisma.reminderThresoldDays.findMany()
     * 
     * // Get first 10 ReminderThresoldDays
     * const reminderThresoldDays = await prisma.reminderThresoldDays.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reminderThresoldDaysWithIdOnly = await prisma.reminderThresoldDays.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReminderThresoldDaysFindManyArgs>(
      args?: SelectSubset<T, ReminderThresoldDaysFindManyArgs>
    ): Prisma.PrismaPromise<Array<ReminderThresoldDaysGetPayload<T>>>

    /**
     * Create a ReminderThresoldDays.
     * @param {ReminderThresoldDaysCreateArgs} args - Arguments to create a ReminderThresoldDays.
     * @example
     * // Create one ReminderThresoldDays
     * const ReminderThresoldDays = await prisma.reminderThresoldDays.create({
     *   data: {
     *     // ... data to create a ReminderThresoldDays
     *   }
     * })
     * 
    **/
    create<T extends ReminderThresoldDaysCreateArgs>(
      args: SelectSubset<T, ReminderThresoldDaysCreateArgs>
    ): Prisma__ReminderThresoldDaysClient<ReminderThresoldDaysGetPayload<T>>

    /**
     * Create many ReminderThresoldDays.
     *     @param {ReminderThresoldDaysCreateManyArgs} args - Arguments to create many ReminderThresoldDays.
     *     @example
     *     // Create many ReminderThresoldDays
     *     const reminderThresoldDays = await prisma.reminderThresoldDays.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReminderThresoldDaysCreateManyArgs>(
      args?: SelectSubset<T, ReminderThresoldDaysCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReminderThresoldDays.
     * @param {ReminderThresoldDaysDeleteArgs} args - Arguments to delete one ReminderThresoldDays.
     * @example
     * // Delete one ReminderThresoldDays
     * const ReminderThresoldDays = await prisma.reminderThresoldDays.delete({
     *   where: {
     *     // ... filter to delete one ReminderThresoldDays
     *   }
     * })
     * 
    **/
    delete<T extends ReminderThresoldDaysDeleteArgs>(
      args: SelectSubset<T, ReminderThresoldDaysDeleteArgs>
    ): Prisma__ReminderThresoldDaysClient<ReminderThresoldDaysGetPayload<T>>

    /**
     * Update one ReminderThresoldDays.
     * @param {ReminderThresoldDaysUpdateArgs} args - Arguments to update one ReminderThresoldDays.
     * @example
     * // Update one ReminderThresoldDays
     * const reminderThresoldDays = await prisma.reminderThresoldDays.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReminderThresoldDaysUpdateArgs>(
      args: SelectSubset<T, ReminderThresoldDaysUpdateArgs>
    ): Prisma__ReminderThresoldDaysClient<ReminderThresoldDaysGetPayload<T>>

    /**
     * Delete zero or more ReminderThresoldDays.
     * @param {ReminderThresoldDaysDeleteManyArgs} args - Arguments to filter ReminderThresoldDays to delete.
     * @example
     * // Delete a few ReminderThresoldDays
     * const { count } = await prisma.reminderThresoldDays.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReminderThresoldDaysDeleteManyArgs>(
      args?: SelectSubset<T, ReminderThresoldDaysDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReminderThresoldDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderThresoldDaysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReminderThresoldDays
     * const reminderThresoldDays = await prisma.reminderThresoldDays.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReminderThresoldDaysUpdateManyArgs>(
      args: SelectSubset<T, ReminderThresoldDaysUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReminderThresoldDays.
     * @param {ReminderThresoldDaysUpsertArgs} args - Arguments to update or create a ReminderThresoldDays.
     * @example
     * // Update or create a ReminderThresoldDays
     * const reminderThresoldDays = await prisma.reminderThresoldDays.upsert({
     *   create: {
     *     // ... data to create a ReminderThresoldDays
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReminderThresoldDays we want to update
     *   }
     * })
    **/
    upsert<T extends ReminderThresoldDaysUpsertArgs>(
      args: SelectSubset<T, ReminderThresoldDaysUpsertArgs>
    ): Prisma__ReminderThresoldDaysClient<ReminderThresoldDaysGetPayload<T>>

    /**
     * Count the number of ReminderThresoldDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderThresoldDaysCountArgs} args - Arguments to filter ReminderThresoldDays to count.
     * @example
     * // Count the number of ReminderThresoldDays
     * const count = await prisma.reminderThresoldDays.count({
     *   where: {
     *     // ... the filter for the ReminderThresoldDays we want to count
     *   }
     * })
    **/
    count<T extends ReminderThresoldDaysCountArgs>(
      args?: Subset<T, ReminderThresoldDaysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReminderThresoldDaysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReminderThresoldDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderThresoldDaysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReminderThresoldDaysAggregateArgs>(args: Subset<T, ReminderThresoldDaysAggregateArgs>): Prisma.PrismaPromise<GetReminderThresoldDaysAggregateType<T>>

    /**
     * Group by ReminderThresoldDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderThresoldDaysGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReminderThresoldDaysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReminderThresoldDaysGroupByArgs['orderBy'] }
        : { orderBy?: ReminderThresoldDaysGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReminderThresoldDaysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReminderThresoldDaysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ReminderThresoldDays.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ReminderThresoldDaysClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ReminderThresoldDays base type for findUnique actions
   */
  export type ReminderThresoldDaysFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ReminderThresoldDays
     */
    select?: ReminderThresoldDaysSelect | null
    /**
     * Filter, which ReminderThresoldDays to fetch.
     */
    where: ReminderThresoldDaysWhereUniqueInput
  }

  /**
   * ReminderThresoldDays findUnique
   */
  export interface ReminderThresoldDaysFindUniqueArgs extends ReminderThresoldDaysFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ReminderThresoldDays findUniqueOrThrow
   */
  export type ReminderThresoldDaysFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ReminderThresoldDays
     */
    select?: ReminderThresoldDaysSelect | null
    /**
     * Filter, which ReminderThresoldDays to fetch.
     */
    where: ReminderThresoldDaysWhereUniqueInput
  }


  /**
   * ReminderThresoldDays base type for findFirst actions
   */
  export type ReminderThresoldDaysFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ReminderThresoldDays
     */
    select?: ReminderThresoldDaysSelect | null
    /**
     * Filter, which ReminderThresoldDays to fetch.
     */
    where?: ReminderThresoldDaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderThresoldDays to fetch.
     */
    orderBy?: Enumerable<ReminderThresoldDaysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReminderThresoldDays.
     */
    cursor?: ReminderThresoldDaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderThresoldDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderThresoldDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReminderThresoldDays.
     */
    distinct?: Enumerable<ReminderThresoldDaysScalarFieldEnum>
  }

  /**
   * ReminderThresoldDays findFirst
   */
  export interface ReminderThresoldDaysFindFirstArgs extends ReminderThresoldDaysFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ReminderThresoldDays findFirstOrThrow
   */
  export type ReminderThresoldDaysFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ReminderThresoldDays
     */
    select?: ReminderThresoldDaysSelect | null
    /**
     * Filter, which ReminderThresoldDays to fetch.
     */
    where?: ReminderThresoldDaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderThresoldDays to fetch.
     */
    orderBy?: Enumerable<ReminderThresoldDaysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReminderThresoldDays.
     */
    cursor?: ReminderThresoldDaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderThresoldDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderThresoldDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReminderThresoldDays.
     */
    distinct?: Enumerable<ReminderThresoldDaysScalarFieldEnum>
  }


  /**
   * ReminderThresoldDays findMany
   */
  export type ReminderThresoldDaysFindManyArgs = {
    /**
     * Select specific fields to fetch from the ReminderThresoldDays
     */
    select?: ReminderThresoldDaysSelect | null
    /**
     * Filter, which ReminderThresoldDays to fetch.
     */
    where?: ReminderThresoldDaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderThresoldDays to fetch.
     */
    orderBy?: Enumerable<ReminderThresoldDaysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReminderThresoldDays.
     */
    cursor?: ReminderThresoldDaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderThresoldDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderThresoldDays.
     */
    skip?: number
    distinct?: Enumerable<ReminderThresoldDaysScalarFieldEnum>
  }


  /**
   * ReminderThresoldDays create
   */
  export type ReminderThresoldDaysCreateArgs = {
    /**
     * Select specific fields to fetch from the ReminderThresoldDays
     */
    select?: ReminderThresoldDaysSelect | null
    /**
     * The data needed to create a ReminderThresoldDays.
     */
    data: XOR<ReminderThresoldDaysCreateInput, ReminderThresoldDaysUncheckedCreateInput>
  }


  /**
   * ReminderThresoldDays createMany
   */
  export type ReminderThresoldDaysCreateManyArgs = {
    /**
     * The data used to create many ReminderThresoldDays.
     */
    data: Enumerable<ReminderThresoldDaysCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ReminderThresoldDays update
   */
  export type ReminderThresoldDaysUpdateArgs = {
    /**
     * Select specific fields to fetch from the ReminderThresoldDays
     */
    select?: ReminderThresoldDaysSelect | null
    /**
     * The data needed to update a ReminderThresoldDays.
     */
    data: XOR<ReminderThresoldDaysUpdateInput, ReminderThresoldDaysUncheckedUpdateInput>
    /**
     * Choose, which ReminderThresoldDays to update.
     */
    where: ReminderThresoldDaysWhereUniqueInput
  }


  /**
   * ReminderThresoldDays updateMany
   */
  export type ReminderThresoldDaysUpdateManyArgs = {
    /**
     * The data used to update ReminderThresoldDays.
     */
    data: XOR<ReminderThresoldDaysUpdateManyMutationInput, ReminderThresoldDaysUncheckedUpdateManyInput>
    /**
     * Filter which ReminderThresoldDays to update
     */
    where?: ReminderThresoldDaysWhereInput
  }


  /**
   * ReminderThresoldDays upsert
   */
  export type ReminderThresoldDaysUpsertArgs = {
    /**
     * Select specific fields to fetch from the ReminderThresoldDays
     */
    select?: ReminderThresoldDaysSelect | null
    /**
     * The filter to search for the ReminderThresoldDays to update in case it exists.
     */
    where: ReminderThresoldDaysWhereUniqueInput
    /**
     * In case the ReminderThresoldDays found by the `where` argument doesn't exist, create a new ReminderThresoldDays with this data.
     */
    create: XOR<ReminderThresoldDaysCreateInput, ReminderThresoldDaysUncheckedCreateInput>
    /**
     * In case the ReminderThresoldDays was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReminderThresoldDaysUpdateInput, ReminderThresoldDaysUncheckedUpdateInput>
  }


  /**
   * ReminderThresoldDays delete
   */
  export type ReminderThresoldDaysDeleteArgs = {
    /**
     * Select specific fields to fetch from the ReminderThresoldDays
     */
    select?: ReminderThresoldDaysSelect | null
    /**
     * Filter which ReminderThresoldDays to delete.
     */
    where: ReminderThresoldDaysWhereUniqueInput
  }


  /**
   * ReminderThresoldDays deleteMany
   */
  export type ReminderThresoldDaysDeleteManyArgs = {
    /**
     * Filter which ReminderThresoldDays to delete
     */
    where?: ReminderThresoldDaysWhereInput
  }


  /**
   * ReminderThresoldDays without action
   */
  export type ReminderThresoldDaysArgs = {
    /**
     * Select specific fields to fetch from the ReminderThresoldDays
     */
    select?: ReminderThresoldDaysSelect | null
  }



  /**
   * Enums
   */

  export const BlackOutDayTypesScalarFieldEnum: {
    id: 'id',
    type: 'type',
    status: 'status',
    is_deleted: 'is_deleted',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BlackOutDayTypesScalarFieldEnum = (typeof BlackOutDayTypesScalarFieldEnum)[keyof typeof BlackOutDayTypesScalarFieldEnum]


  export const BlackOutDaysScalarFieldEnum: {
    id: 'id',
    day_type_id: 'day_type_id',
    title: 'title',
    start_date: 'start_date',
    end_date: 'end_date',
    applies_to: 'applies_to',
    color_code: 'color_code',
    status: 'status',
    is_deleted: 'is_deleted',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BlackOutDaysScalarFieldEnum = (typeof BlackOutDaysScalarFieldEnum)[keyof typeof BlackOutDaysScalarFieldEnum]


  export const Contract_typesScalarFieldEnum: {
    id: 'id',
    type_name: 'type_name',
    status: 'status',
    is_deleted: 'is_deleted',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Contract_typesScalarFieldEnum = (typeof Contract_typesScalarFieldEnum)[keyof typeof Contract_typesScalarFieldEnum]


  export const Customer_typesScalarFieldEnum: {
    id: 'id',
    type_name: 'type_name',
    status: 'status',
    is_deleted: 'is_deleted',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Customer_typesScalarFieldEnum = (typeof Customer_typesScalarFieldEnum)[keyof typeof Customer_typesScalarFieldEnum]


  export const GeneratorBrandsScalarFieldEnum: {
    id: 'id',
    brand_name: 'brand_name',
    status: 'status',
    is_deleted: 'is_deleted',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type GeneratorBrandsScalarFieldEnum = (typeof GeneratorBrandsScalarFieldEnum)[keyof typeof GeneratorBrandsScalarFieldEnum]


  export const GeneratorModelsScalarFieldEnum: {
    id: 'id',
    model_name: 'model_name',
    brand_id: 'brand_id',
    status: 'status',
    is_deleted: 'is_deleted',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type GeneratorModelsScalarFieldEnum = (typeof GeneratorModelsScalarFieldEnum)[keyof typeof GeneratorModelsScalarFieldEnum]


  export const GeneratorPhaseTypesScalarFieldEnum: {
    id: 'id',
    phase_type: 'phase_type',
    status: 'status',
    is_deleted: 'is_deleted',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type GeneratorPhaseTypesScalarFieldEnum = (typeof GeneratorPhaseTypesScalarFieldEnum)[keyof typeof GeneratorPhaseTypesScalarFieldEnum]


  export const ReminderThresoldDaysScalarFieldEnum: {
    id: 'id',
    thresold_day: 'thresold_day',
    status: 'status',
    is_deleted: 'is_deleted',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ReminderThresoldDaysScalarFieldEnum = (typeof ReminderThresoldDaysScalarFieldEnum)[keyof typeof ReminderThresoldDaysScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    status: 'status',
    is_deleted: 'is_deleted',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const Service_levelsScalarFieldEnum: {
    id: 'id',
    service_name: 'service_name',
    service_limit: 'service_limit',
    default_load_test_duration: 'default_load_test_duration',
    on_screen_color_code: 'on_screen_color_code',
    on_report_color_code: 'on_report_color_code',
    default_duration: 'default_duration',
    status: 'status',
    is_deleted: 'is_deleted',
    created_by: 'created_by',
    created_date: 'created_date',
    updated_date: 'updated_date'
  };

  export type Service_levelsScalarFieldEnum = (typeof Service_levelsScalarFieldEnum)[keyof typeof Service_levelsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    contact_name: 'contact_name',
    email: 'email',
    password: 'password',
    address: 'address',
    contact: 'contact',
    customer_type_id: 'customer_type_id',
    user_type: 'user_type',
    status: 'status',
    is_deleted: 'is_deleted',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const WorkOrderStatusScalarFieldEnum: {
    id: 'id',
    status_name: 'status_name',
    color_code: 'color_code',
    description: 'description',
    applies_to: 'applies_to',
    status: 'status',
    is_deleted: 'is_deleted',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WorkOrderStatusScalarFieldEnum = (typeof WorkOrderStatusScalarFieldEnum)[keyof typeof WorkOrderStatusScalarFieldEnum]


  export const WorkOrderTypesScalarFieldEnum: {
    id: 'id',
    order_type: 'order_type',
    on_screen_color_code: 'on_screen_color_code',
    on_report_color_code: 'on_report_color_code',
    status: 'status',
    is_deleted: 'is_deleted',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WorkOrderTypesScalarFieldEnum = (typeof WorkOrderTypesScalarFieldEnum)[keyof typeof WorkOrderTypesScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type Customer_typesWhereInput = {
    AND?: Enumerable<Customer_typesWhereInput>
    OR?: Enumerable<Customer_typesWhereInput>
    NOT?: Enumerable<Customer_typesWhereInput>
    id?: IntFilter | number
    type_name?: StringNullableFilter | string | null
    status?: IntFilter | number
    is_deleted?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type Customer_typesOrderByWithRelationInput = {
    id?: SortOrder
    type_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Customer_typesWhereUniqueInput = {
    id?: number
  }

  export type Customer_typesOrderByWithAggregationInput = {
    id?: SortOrder
    type_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: Customer_typesCountOrderByAggregateInput
    _avg?: Customer_typesAvgOrderByAggregateInput
    _max?: Customer_typesMaxOrderByAggregateInput
    _min?: Customer_typesMinOrderByAggregateInput
    _sum?: Customer_typesSumOrderByAggregateInput
  }

  export type Customer_typesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Customer_typesScalarWhereWithAggregatesInput>
    OR?: Enumerable<Customer_typesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Customer_typesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    type_name?: StringNullableWithAggregatesFilter | string | null
    status?: IntWithAggregatesFilter | number
    is_deleted?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type RolesWhereInput = {
    AND?: Enumerable<RolesWhereInput>
    OR?: Enumerable<RolesWhereInput>
    NOT?: Enumerable<RolesWhereInput>
    id?: IntFilter | number
    title?: StringNullableFilter | string | null
    status?: IntFilter | number
    is_deleted?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    role_type?: UsersListRelationFilter
  }

  export type RolesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role_type?: UsersOrderByRelationAggregateInput
  }

  export type RolesWhereUniqueInput = {
    id?: number
  }

  export type RolesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RolesCountOrderByAggregateInput
    _avg?: RolesAvgOrderByAggregateInput
    _max?: RolesMaxOrderByAggregateInput
    _min?: RolesMinOrderByAggregateInput
    _sum?: RolesSumOrderByAggregateInput
  }

  export type RolesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RolesScalarWhereWithAggregatesInput>
    OR?: Enumerable<RolesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RolesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringNullableWithAggregatesFilter | string | null
    status?: IntWithAggregatesFilter | number
    is_deleted?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UsersWhereInput = {
    AND?: Enumerable<UsersWhereInput>
    OR?: Enumerable<UsersWhereInput>
    NOT?: Enumerable<UsersWhereInput>
    id?: IntFilter | number
    name?: StringNullableFilter | string | null
    contact_name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    password?: StringNullableFilter | string | null
    address?: StringNullableFilter | string | null
    contact?: StringNullableFilter | string | null
    customer_type_id?: IntFilter | number
    user_type?: IntFilter | number
    status?: IntFilter | number
    is_deleted?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    role_type?: XOR<RolesRelationFilter, RolesWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    contact_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    customer_type_id?: SortOrder
    user_type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role_type?: RolesOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = {
    id?: number
  }

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    contact_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    customer_type_id?: SortOrder
    user_type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    contact_name?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    password?: StringNullableWithAggregatesFilter | string | null
    address?: StringNullableWithAggregatesFilter | string | null
    contact?: StringNullableWithAggregatesFilter | string | null
    customer_type_id?: IntWithAggregatesFilter | number
    user_type?: IntWithAggregatesFilter | number
    status?: IntWithAggregatesFilter | number
    is_deleted?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type Contract_typesWhereInput = {
    AND?: Enumerable<Contract_typesWhereInput>
    OR?: Enumerable<Contract_typesWhereInput>
    NOT?: Enumerable<Contract_typesWhereInput>
    id?: IntFilter | number
    type_name?: StringNullableFilter | string | null
    status?: IntFilter | number
    is_deleted?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type Contract_typesOrderByWithRelationInput = {
    id?: SortOrder
    type_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Contract_typesWhereUniqueInput = {
    id?: number
  }

  export type Contract_typesOrderByWithAggregationInput = {
    id?: SortOrder
    type_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: Contract_typesCountOrderByAggregateInput
    _avg?: Contract_typesAvgOrderByAggregateInput
    _max?: Contract_typesMaxOrderByAggregateInput
    _min?: Contract_typesMinOrderByAggregateInput
    _sum?: Contract_typesSumOrderByAggregateInput
  }

  export type Contract_typesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Contract_typesScalarWhereWithAggregatesInput>
    OR?: Enumerable<Contract_typesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Contract_typesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    type_name?: StringNullableWithAggregatesFilter | string | null
    status?: IntWithAggregatesFilter | number
    is_deleted?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type GeneratorBrandsWhereInput = {
    AND?: Enumerable<GeneratorBrandsWhereInput>
    OR?: Enumerable<GeneratorBrandsWhereInput>
    NOT?: Enumerable<GeneratorBrandsWhereInput>
    id?: IntFilter | number
    brand_name?: StringNullableFilter | string | null
    status?: IntFilter | number
    is_deleted?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    brand_type?: GeneratorModelsListRelationFilter
  }

  export type GeneratorBrandsOrderByWithRelationInput = {
    id?: SortOrder
    brand_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    brand_type?: GeneratorModelsOrderByRelationAggregateInput
  }

  export type GeneratorBrandsWhereUniqueInput = {
    id?: number
  }

  export type GeneratorBrandsOrderByWithAggregationInput = {
    id?: SortOrder
    brand_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: GeneratorBrandsCountOrderByAggregateInput
    _avg?: GeneratorBrandsAvgOrderByAggregateInput
    _max?: GeneratorBrandsMaxOrderByAggregateInput
    _min?: GeneratorBrandsMinOrderByAggregateInput
    _sum?: GeneratorBrandsSumOrderByAggregateInput
  }

  export type GeneratorBrandsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GeneratorBrandsScalarWhereWithAggregatesInput>
    OR?: Enumerable<GeneratorBrandsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GeneratorBrandsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    brand_name?: StringNullableWithAggregatesFilter | string | null
    status?: IntWithAggregatesFilter | number
    is_deleted?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type GeneratorModelsWhereInput = {
    AND?: Enumerable<GeneratorModelsWhereInput>
    OR?: Enumerable<GeneratorModelsWhereInput>
    NOT?: Enumerable<GeneratorModelsWhereInput>
    id?: IntFilter | number
    model_name?: StringNullableFilter | string | null
    brand_id?: IntFilter | number
    status?: IntFilter | number
    is_deleted?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    brand_type?: XOR<GeneratorBrandsRelationFilter, GeneratorBrandsWhereInput> | null
  }

  export type GeneratorModelsOrderByWithRelationInput = {
    id?: SortOrder
    model_name?: SortOrder
    brand_id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    brand_type?: GeneratorBrandsOrderByWithRelationInput
  }

  export type GeneratorModelsWhereUniqueInput = {
    id?: number
  }

  export type GeneratorModelsOrderByWithAggregationInput = {
    id?: SortOrder
    model_name?: SortOrder
    brand_id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: GeneratorModelsCountOrderByAggregateInput
    _avg?: GeneratorModelsAvgOrderByAggregateInput
    _max?: GeneratorModelsMaxOrderByAggregateInput
    _min?: GeneratorModelsMinOrderByAggregateInput
    _sum?: GeneratorModelsSumOrderByAggregateInput
  }

  export type GeneratorModelsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GeneratorModelsScalarWhereWithAggregatesInput>
    OR?: Enumerable<GeneratorModelsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GeneratorModelsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    model_name?: StringNullableWithAggregatesFilter | string | null
    brand_id?: IntWithAggregatesFilter | number
    status?: IntWithAggregatesFilter | number
    is_deleted?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type GeneratorPhaseTypesWhereInput = {
    AND?: Enumerable<GeneratorPhaseTypesWhereInput>
    OR?: Enumerable<GeneratorPhaseTypesWhereInput>
    NOT?: Enumerable<GeneratorPhaseTypesWhereInput>
    id?: IntFilter | number
    phase_type?: StringNullableFilter | string | null
    status?: IntFilter | number
    is_deleted?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type GeneratorPhaseTypesOrderByWithRelationInput = {
    id?: SortOrder
    phase_type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type GeneratorPhaseTypesWhereUniqueInput = {
    id?: number
  }

  export type GeneratorPhaseTypesOrderByWithAggregationInput = {
    id?: SortOrder
    phase_type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: GeneratorPhaseTypesCountOrderByAggregateInput
    _avg?: GeneratorPhaseTypesAvgOrderByAggregateInput
    _max?: GeneratorPhaseTypesMaxOrderByAggregateInput
    _min?: GeneratorPhaseTypesMinOrderByAggregateInput
    _sum?: GeneratorPhaseTypesSumOrderByAggregateInput
  }

  export type GeneratorPhaseTypesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GeneratorPhaseTypesScalarWhereWithAggregatesInput>
    OR?: Enumerable<GeneratorPhaseTypesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GeneratorPhaseTypesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    phase_type?: StringNullableWithAggregatesFilter | string | null
    status?: IntWithAggregatesFilter | number
    is_deleted?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type WorkOrderStatusWhereInput = {
    AND?: Enumerable<WorkOrderStatusWhereInput>
    OR?: Enumerable<WorkOrderStatusWhereInput>
    NOT?: Enumerable<WorkOrderStatusWhereInput>
    id?: IntFilter | number
    status_name?: StringNullableFilter | string | null
    color_code?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    applies_to?: IntFilter | number
    status?: IntFilter | number
    is_deleted?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type WorkOrderStatusOrderByWithRelationInput = {
    id?: SortOrder
    status_name?: SortOrder
    color_code?: SortOrder
    description?: SortOrder
    applies_to?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WorkOrderStatusWhereUniqueInput = {
    id?: number
  }

  export type WorkOrderStatusOrderByWithAggregationInput = {
    id?: SortOrder
    status_name?: SortOrder
    color_code?: SortOrder
    description?: SortOrder
    applies_to?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: WorkOrderStatusCountOrderByAggregateInput
    _avg?: WorkOrderStatusAvgOrderByAggregateInput
    _max?: WorkOrderStatusMaxOrderByAggregateInput
    _min?: WorkOrderStatusMinOrderByAggregateInput
    _sum?: WorkOrderStatusSumOrderByAggregateInput
  }

  export type WorkOrderStatusScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WorkOrderStatusScalarWhereWithAggregatesInput>
    OR?: Enumerable<WorkOrderStatusScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WorkOrderStatusScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    status_name?: StringNullableWithAggregatesFilter | string | null
    color_code?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    applies_to?: IntWithAggregatesFilter | number
    status?: IntWithAggregatesFilter | number
    is_deleted?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type WorkOrderTypesWhereInput = {
    AND?: Enumerable<WorkOrderTypesWhereInput>
    OR?: Enumerable<WorkOrderTypesWhereInput>
    NOT?: Enumerable<WorkOrderTypesWhereInput>
    id?: IntFilter | number
    order_type?: StringNullableFilter | string | null
    on_screen_color_code?: StringNullableFilter | string | null
    on_report_color_code?: StringNullableFilter | string | null
    status?: IntFilter | number
    is_deleted?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type WorkOrderTypesOrderByWithRelationInput = {
    id?: SortOrder
    order_type?: SortOrder
    on_screen_color_code?: SortOrder
    on_report_color_code?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WorkOrderTypesWhereUniqueInput = {
    id?: number
  }

  export type WorkOrderTypesOrderByWithAggregationInput = {
    id?: SortOrder
    order_type?: SortOrder
    on_screen_color_code?: SortOrder
    on_report_color_code?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: WorkOrderTypesCountOrderByAggregateInput
    _avg?: WorkOrderTypesAvgOrderByAggregateInput
    _max?: WorkOrderTypesMaxOrderByAggregateInput
    _min?: WorkOrderTypesMinOrderByAggregateInput
    _sum?: WorkOrderTypesSumOrderByAggregateInput
  }

  export type WorkOrderTypesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WorkOrderTypesScalarWhereWithAggregatesInput>
    OR?: Enumerable<WorkOrderTypesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WorkOrderTypesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    order_type?: StringNullableWithAggregatesFilter | string | null
    on_screen_color_code?: StringNullableWithAggregatesFilter | string | null
    on_report_color_code?: StringNullableWithAggregatesFilter | string | null
    status?: IntWithAggregatesFilter | number
    is_deleted?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type service_levelsWhereInput = {
    AND?: Enumerable<service_levelsWhereInput>
    OR?: Enumerable<service_levelsWhereInput>
    NOT?: Enumerable<service_levelsWhereInput>
    id?: IntFilter | number
    service_name?: IntFilter | number
    service_limit?: IntFilter | number
    default_load_test_duration?: IntFilter | number
    on_screen_color_code?: StringFilter | string
    on_report_color_code?: StringFilter | string
    default_duration?: IntFilter | number
    status?: IntFilter | number
    is_deleted?: IntFilter | number
    created_by?: IntFilter | number
    created_date?: DateTimeFilter | Date | string
    updated_date?: DateTimeFilter | Date | string
  }

  export type service_levelsOrderByWithRelationInput = {
    id?: SortOrder
    service_name?: SortOrder
    service_limit?: SortOrder
    default_load_test_duration?: SortOrder
    on_screen_color_code?: SortOrder
    on_report_color_code?: SortOrder
    default_duration?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
  }

  export type service_levelsWhereUniqueInput = {
    id?: number
    service_name?: number
  }

  export type service_levelsOrderByWithAggregationInput = {
    id?: SortOrder
    service_name?: SortOrder
    service_limit?: SortOrder
    default_load_test_duration?: SortOrder
    on_screen_color_code?: SortOrder
    on_report_color_code?: SortOrder
    default_duration?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
    _count?: service_levelsCountOrderByAggregateInput
    _avg?: service_levelsAvgOrderByAggregateInput
    _max?: service_levelsMaxOrderByAggregateInput
    _min?: service_levelsMinOrderByAggregateInput
    _sum?: service_levelsSumOrderByAggregateInput
  }

  export type service_levelsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<service_levelsScalarWhereWithAggregatesInput>
    OR?: Enumerable<service_levelsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<service_levelsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    service_name?: IntWithAggregatesFilter | number
    service_limit?: IntWithAggregatesFilter | number
    default_load_test_duration?: IntWithAggregatesFilter | number
    on_screen_color_code?: StringWithAggregatesFilter | string
    on_report_color_code?: StringWithAggregatesFilter | string
    default_duration?: IntWithAggregatesFilter | number
    status?: IntWithAggregatesFilter | number
    is_deleted?: IntWithAggregatesFilter | number
    created_by?: IntWithAggregatesFilter | number
    created_date?: DateTimeWithAggregatesFilter | Date | string
    updated_date?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BlackOutDayTypesWhereInput = {
    AND?: Enumerable<BlackOutDayTypesWhereInput>
    OR?: Enumerable<BlackOutDayTypesWhereInput>
    NOT?: Enumerable<BlackOutDayTypesWhereInput>
    id?: IntFilter | number
    type?: StringFilter | string
    status?: IntFilter | number
    is_deleted?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    blackout_day_type?: BlackOutDaysListRelationFilter
  }

  export type BlackOutDayTypesOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    blackout_day_type?: BlackOutDaysOrderByRelationAggregateInput
  }

  export type BlackOutDayTypesWhereUniqueInput = {
    id?: number
    type?: string
  }

  export type BlackOutDayTypesOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BlackOutDayTypesCountOrderByAggregateInput
    _avg?: BlackOutDayTypesAvgOrderByAggregateInput
    _max?: BlackOutDayTypesMaxOrderByAggregateInput
    _min?: BlackOutDayTypesMinOrderByAggregateInput
    _sum?: BlackOutDayTypesSumOrderByAggregateInput
  }

  export type BlackOutDayTypesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BlackOutDayTypesScalarWhereWithAggregatesInput>
    OR?: Enumerable<BlackOutDayTypesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BlackOutDayTypesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    type?: StringWithAggregatesFilter | string
    status?: IntWithAggregatesFilter | number
    is_deleted?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BlackOutDaysWhereInput = {
    AND?: Enumerable<BlackOutDaysWhereInput>
    OR?: Enumerable<BlackOutDaysWhereInput>
    NOT?: Enumerable<BlackOutDaysWhereInput>
    id?: IntFilter | number
    day_type_id?: IntFilter | number
    title?: StringFilter | string
    start_date?: DateTimeFilter | Date | string
    end_date?: DateTimeFilter | Date | string
    applies_to?: IntFilter | number
    color_code?: StringNullableFilter | string | null
    status?: IntFilter | number
    is_deleted?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    blackout_day_type?: XOR<BlackOutDayTypesRelationFilter, BlackOutDayTypesWhereInput> | null
  }

  export type BlackOutDaysOrderByWithRelationInput = {
    id?: SortOrder
    day_type_id?: SortOrder
    title?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    applies_to?: SortOrder
    color_code?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    blackout_day_type?: BlackOutDayTypesOrderByWithRelationInput
  }

  export type BlackOutDaysWhereUniqueInput = {
    id?: number
    title?: string
  }

  export type BlackOutDaysOrderByWithAggregationInput = {
    id?: SortOrder
    day_type_id?: SortOrder
    title?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    applies_to?: SortOrder
    color_code?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BlackOutDaysCountOrderByAggregateInput
    _avg?: BlackOutDaysAvgOrderByAggregateInput
    _max?: BlackOutDaysMaxOrderByAggregateInput
    _min?: BlackOutDaysMinOrderByAggregateInput
    _sum?: BlackOutDaysSumOrderByAggregateInput
  }

  export type BlackOutDaysScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BlackOutDaysScalarWhereWithAggregatesInput>
    OR?: Enumerable<BlackOutDaysScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BlackOutDaysScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    day_type_id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    start_date?: DateTimeWithAggregatesFilter | Date | string
    end_date?: DateTimeWithAggregatesFilter | Date | string
    applies_to?: IntWithAggregatesFilter | number
    color_code?: StringNullableWithAggregatesFilter | string | null
    status?: IntWithAggregatesFilter | number
    is_deleted?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ReminderThresoldDaysWhereInput = {
    AND?: Enumerable<ReminderThresoldDaysWhereInput>
    OR?: Enumerable<ReminderThresoldDaysWhereInput>
    NOT?: Enumerable<ReminderThresoldDaysWhereInput>
    id?: IntFilter | number
    thresold_day?: IntFilter | number
    status?: IntFilter | number
    is_deleted?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type ReminderThresoldDaysOrderByWithRelationInput = {
    id?: SortOrder
    thresold_day?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReminderThresoldDaysWhereUniqueInput = {
    id?: number
  }

  export type ReminderThresoldDaysOrderByWithAggregationInput = {
    id?: SortOrder
    thresold_day?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ReminderThresoldDaysCountOrderByAggregateInput
    _avg?: ReminderThresoldDaysAvgOrderByAggregateInput
    _max?: ReminderThresoldDaysMaxOrderByAggregateInput
    _min?: ReminderThresoldDaysMinOrderByAggregateInput
    _sum?: ReminderThresoldDaysSumOrderByAggregateInput
  }

  export type ReminderThresoldDaysScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ReminderThresoldDaysScalarWhereWithAggregatesInput>
    OR?: Enumerable<ReminderThresoldDaysScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ReminderThresoldDaysScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    thresold_day?: IntWithAggregatesFilter | number
    status?: IntWithAggregatesFilter | number
    is_deleted?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type Customer_typesCreateInput = {
    type_name?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Customer_typesUncheckedCreateInput = {
    id?: number
    type_name?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Customer_typesUpdateInput = {
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Customer_typesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Customer_typesCreateManyInput = {
    id?: number
    type_name?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Customer_typesUpdateManyMutationInput = {
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Customer_typesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesCreateInput = {
    title?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
    role_type?: UsersCreateNestedManyWithoutRole_typeInput
  }

  export type RolesUncheckedCreateInput = {
    id?: number
    title?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
    role_type?: UsersUncheckedCreateNestedManyWithoutRole_typeInput
  }

  export type RolesUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_type?: UsersUpdateManyWithoutRole_typeNestedInput
  }

  export type RolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_type?: UsersUncheckedUpdateManyWithoutRole_typeNestedInput
  }

  export type RolesCreateManyInput = {
    id?: number
    title?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RolesUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    name?: string | null
    contact_name?: string | null
    email?: string | null
    password?: string | null
    address?: string | null
    contact?: string | null
    customer_type_id?: number
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
    role_type?: RolesCreateNestedOneWithoutRole_typeInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name?: string | null
    contact_name?: string | null
    email?: string | null
    password?: string | null
    address?: string | null
    contact?: string | null
    customer_type_id?: number
    user_type?: number
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type_id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_type?: RolesUpdateOneWithoutRole_typeNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type_id?: IntFieldUpdateOperationsInput | number
    user_type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyInput = {
    id?: number
    name?: string | null
    contact_name?: string | null
    email?: string | null
    password?: string | null
    address?: string | null
    contact?: string | null
    customer_type_id?: number
    user_type?: number
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type_id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type_id?: IntFieldUpdateOperationsInput | number
    user_type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Contract_typesCreateInput = {
    type_name?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Contract_typesUncheckedCreateInput = {
    id?: number
    type_name?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Contract_typesUpdateInput = {
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Contract_typesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Contract_typesCreateManyInput = {
    id?: number
    type_name?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Contract_typesUpdateManyMutationInput = {
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Contract_typesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratorBrandsCreateInput = {
    brand_name?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
    brand_type?: GeneratorModelsCreateNestedManyWithoutBrand_typeInput
  }

  export type GeneratorBrandsUncheckedCreateInput = {
    id?: number
    brand_name?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
    brand_type?: GeneratorModelsUncheckedCreateNestedManyWithoutBrand_typeInput
  }

  export type GeneratorBrandsUpdateInput = {
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    brand_type?: GeneratorModelsUpdateManyWithoutBrand_typeNestedInput
  }

  export type GeneratorBrandsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    brand_type?: GeneratorModelsUncheckedUpdateManyWithoutBrand_typeNestedInput
  }

  export type GeneratorBrandsCreateManyInput = {
    id?: number
    brand_name?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type GeneratorBrandsUpdateManyMutationInput = {
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratorBrandsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratorModelsCreateInput = {
    model_name?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
    brand_type?: GeneratorBrandsCreateNestedOneWithoutBrand_typeInput
  }

  export type GeneratorModelsUncheckedCreateInput = {
    id?: number
    model_name?: string | null
    brand_id?: number
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type GeneratorModelsUpdateInput = {
    model_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    brand_type?: GeneratorBrandsUpdateOneWithoutBrand_typeNestedInput
  }

  export type GeneratorModelsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    model_name?: NullableStringFieldUpdateOperationsInput | string | null
    brand_id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratorModelsCreateManyInput = {
    id?: number
    model_name?: string | null
    brand_id?: number
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type GeneratorModelsUpdateManyMutationInput = {
    model_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratorModelsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    model_name?: NullableStringFieldUpdateOperationsInput | string | null
    brand_id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratorPhaseTypesCreateInput = {
    phase_type?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type GeneratorPhaseTypesUncheckedCreateInput = {
    id?: number
    phase_type?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type GeneratorPhaseTypesUpdateInput = {
    phase_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratorPhaseTypesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phase_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratorPhaseTypesCreateManyInput = {
    id?: number
    phase_type?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type GeneratorPhaseTypesUpdateManyMutationInput = {
    phase_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratorPhaseTypesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phase_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkOrderStatusCreateInput = {
    status_name?: string | null
    color_code?: string | null
    description?: string | null
    applies_to?: number
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WorkOrderStatusUncheckedCreateInput = {
    id?: number
    status_name?: string | null
    color_code?: string | null
    description?: string | null
    applies_to?: number
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WorkOrderStatusUpdateInput = {
    status_name?: NullableStringFieldUpdateOperationsInput | string | null
    color_code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applies_to?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkOrderStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status_name?: NullableStringFieldUpdateOperationsInput | string | null
    color_code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applies_to?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkOrderStatusCreateManyInput = {
    id?: number
    status_name?: string | null
    color_code?: string | null
    description?: string | null
    applies_to?: number
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WorkOrderStatusUpdateManyMutationInput = {
    status_name?: NullableStringFieldUpdateOperationsInput | string | null
    color_code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applies_to?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkOrderStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status_name?: NullableStringFieldUpdateOperationsInput | string | null
    color_code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applies_to?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkOrderTypesCreateInput = {
    order_type?: string | null
    on_screen_color_code?: string | null
    on_report_color_code?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WorkOrderTypesUncheckedCreateInput = {
    id?: number
    order_type?: string | null
    on_screen_color_code?: string | null
    on_report_color_code?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WorkOrderTypesUpdateInput = {
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    on_screen_color_code?: NullableStringFieldUpdateOperationsInput | string | null
    on_report_color_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkOrderTypesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    on_screen_color_code?: NullableStringFieldUpdateOperationsInput | string | null
    on_report_color_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkOrderTypesCreateManyInput = {
    id?: number
    order_type?: string | null
    on_screen_color_code?: string | null
    on_report_color_code?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WorkOrderTypesUpdateManyMutationInput = {
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    on_screen_color_code?: NullableStringFieldUpdateOperationsInput | string | null
    on_report_color_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkOrderTypesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    on_screen_color_code?: NullableStringFieldUpdateOperationsInput | string | null
    on_report_color_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type service_levelsCreateInput = {
    service_name: number
    service_limit: number
    default_load_test_duration: number
    on_screen_color_code: string
    on_report_color_code: string
    default_duration: number
    status?: number
    is_deleted?: number
    created_by?: number
    created_date?: Date | string
    updated_date?: Date | string
  }

  export type service_levelsUncheckedCreateInput = {
    id?: number
    service_name: number
    service_limit: number
    default_load_test_duration: number
    on_screen_color_code: string
    on_report_color_code: string
    default_duration: number
    status?: number
    is_deleted?: number
    created_by?: number
    created_date?: Date | string
    updated_date?: Date | string
  }

  export type service_levelsUpdateInput = {
    service_name?: IntFieldUpdateOperationsInput | number
    service_limit?: IntFieldUpdateOperationsInput | number
    default_load_test_duration?: IntFieldUpdateOperationsInput | number
    on_screen_color_code?: StringFieldUpdateOperationsInput | string
    on_report_color_code?: StringFieldUpdateOperationsInput | string
    default_duration?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type service_levelsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_name?: IntFieldUpdateOperationsInput | number
    service_limit?: IntFieldUpdateOperationsInput | number
    default_load_test_duration?: IntFieldUpdateOperationsInput | number
    on_screen_color_code?: StringFieldUpdateOperationsInput | string
    on_report_color_code?: StringFieldUpdateOperationsInput | string
    default_duration?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type service_levelsCreateManyInput = {
    id?: number
    service_name: number
    service_limit: number
    default_load_test_duration: number
    on_screen_color_code: string
    on_report_color_code: string
    default_duration: number
    status?: number
    is_deleted?: number
    created_by?: number
    created_date?: Date | string
    updated_date?: Date | string
  }

  export type service_levelsUpdateManyMutationInput = {
    service_name?: IntFieldUpdateOperationsInput | number
    service_limit?: IntFieldUpdateOperationsInput | number
    default_load_test_duration?: IntFieldUpdateOperationsInput | number
    on_screen_color_code?: StringFieldUpdateOperationsInput | string
    on_report_color_code?: StringFieldUpdateOperationsInput | string
    default_duration?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type service_levelsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_name?: IntFieldUpdateOperationsInput | number
    service_limit?: IntFieldUpdateOperationsInput | number
    default_load_test_duration?: IntFieldUpdateOperationsInput | number
    on_screen_color_code?: StringFieldUpdateOperationsInput | string
    on_report_color_code?: StringFieldUpdateOperationsInput | string
    default_duration?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlackOutDayTypesCreateInput = {
    type: string
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
    blackout_day_type?: BlackOutDaysCreateNestedManyWithoutBlackout_day_typeInput
  }

  export type BlackOutDayTypesUncheckedCreateInput = {
    id?: number
    type: string
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
    blackout_day_type?: BlackOutDaysUncheckedCreateNestedManyWithoutBlackout_day_typeInput
  }

  export type BlackOutDayTypesUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blackout_day_type?: BlackOutDaysUpdateManyWithoutBlackout_day_typeNestedInput
  }

  export type BlackOutDayTypesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blackout_day_type?: BlackOutDaysUncheckedUpdateManyWithoutBlackout_day_typeNestedInput
  }

  export type BlackOutDayTypesCreateManyInput = {
    id?: number
    type: string
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BlackOutDayTypesUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlackOutDayTypesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlackOutDaysCreateInput = {
    title: string
    start_date: Date | string
    end_date: Date | string
    applies_to?: number
    color_code?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
    blackout_day_type?: BlackOutDayTypesCreateNestedOneWithoutBlackout_day_typeInput
  }

  export type BlackOutDaysUncheckedCreateInput = {
    id?: number
    day_type_id?: number
    title: string
    start_date: Date | string
    end_date: Date | string
    applies_to?: number
    color_code?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BlackOutDaysUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    applies_to?: IntFieldUpdateOperationsInput | number
    color_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blackout_day_type?: BlackOutDayTypesUpdateOneWithoutBlackout_day_typeNestedInput
  }

  export type BlackOutDaysUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    day_type_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    applies_to?: IntFieldUpdateOperationsInput | number
    color_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlackOutDaysCreateManyInput = {
    id?: number
    day_type_id?: number
    title: string
    start_date: Date | string
    end_date: Date | string
    applies_to?: number
    color_code?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BlackOutDaysUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    applies_to?: IntFieldUpdateOperationsInput | number
    color_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlackOutDaysUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    day_type_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    applies_to?: IntFieldUpdateOperationsInput | number
    color_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderThresoldDaysCreateInput = {
    thresold_day: number
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReminderThresoldDaysUncheckedCreateInput = {
    id?: number
    thresold_day: number
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReminderThresoldDaysUpdateInput = {
    thresold_day?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderThresoldDaysUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    thresold_day?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderThresoldDaysCreateManyInput = {
    id?: number
    thresold_day: number
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReminderThresoldDaysUpdateManyMutationInput = {
    thresold_day?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderThresoldDaysUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    thresold_day?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type Customer_typesCountOrderByAggregateInput = {
    id?: SortOrder
    type_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Customer_typesAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type Customer_typesMaxOrderByAggregateInput = {
    id?: SortOrder
    type_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Customer_typesMinOrderByAggregateInput = {
    id?: SortOrder
    type_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Customer_typesSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RolesAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type RolesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RolesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RolesSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type RolesRelationFilter = {
    is?: RolesWhereInput | null
    isNot?: RolesWhereInput | null
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    customer_type_id?: SortOrder
    user_type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    customer_type_id?: SortOrder
    user_type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    customer_type_id?: SortOrder
    user_type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    customer_type_id?: SortOrder
    user_type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    customer_type_id?: SortOrder
    user_type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type Contract_typesCountOrderByAggregateInput = {
    id?: SortOrder
    type_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Contract_typesAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type Contract_typesMaxOrderByAggregateInput = {
    id?: SortOrder
    type_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Contract_typesMinOrderByAggregateInput = {
    id?: SortOrder
    type_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Contract_typesSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type GeneratorModelsListRelationFilter = {
    every?: GeneratorModelsWhereInput
    some?: GeneratorModelsWhereInput
    none?: GeneratorModelsWhereInput
  }

  export type GeneratorModelsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GeneratorBrandsCountOrderByAggregateInput = {
    id?: SortOrder
    brand_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type GeneratorBrandsAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type GeneratorBrandsMaxOrderByAggregateInput = {
    id?: SortOrder
    brand_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type GeneratorBrandsMinOrderByAggregateInput = {
    id?: SortOrder
    brand_name?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type GeneratorBrandsSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type GeneratorBrandsRelationFilter = {
    is?: GeneratorBrandsWhereInput | null
    isNot?: GeneratorBrandsWhereInput | null
  }

  export type GeneratorModelsCountOrderByAggregateInput = {
    id?: SortOrder
    model_name?: SortOrder
    brand_id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type GeneratorModelsAvgOrderByAggregateInput = {
    id?: SortOrder
    brand_id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type GeneratorModelsMaxOrderByAggregateInput = {
    id?: SortOrder
    model_name?: SortOrder
    brand_id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type GeneratorModelsMinOrderByAggregateInput = {
    id?: SortOrder
    model_name?: SortOrder
    brand_id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type GeneratorModelsSumOrderByAggregateInput = {
    id?: SortOrder
    brand_id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type GeneratorPhaseTypesCountOrderByAggregateInput = {
    id?: SortOrder
    phase_type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type GeneratorPhaseTypesAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type GeneratorPhaseTypesMaxOrderByAggregateInput = {
    id?: SortOrder
    phase_type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type GeneratorPhaseTypesMinOrderByAggregateInput = {
    id?: SortOrder
    phase_type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type GeneratorPhaseTypesSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type WorkOrderStatusCountOrderByAggregateInput = {
    id?: SortOrder
    status_name?: SortOrder
    color_code?: SortOrder
    description?: SortOrder
    applies_to?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WorkOrderStatusAvgOrderByAggregateInput = {
    id?: SortOrder
    applies_to?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type WorkOrderStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    status_name?: SortOrder
    color_code?: SortOrder
    description?: SortOrder
    applies_to?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WorkOrderStatusMinOrderByAggregateInput = {
    id?: SortOrder
    status_name?: SortOrder
    color_code?: SortOrder
    description?: SortOrder
    applies_to?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WorkOrderStatusSumOrderByAggregateInput = {
    id?: SortOrder
    applies_to?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type WorkOrderTypesCountOrderByAggregateInput = {
    id?: SortOrder
    order_type?: SortOrder
    on_screen_color_code?: SortOrder
    on_report_color_code?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WorkOrderTypesAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type WorkOrderTypesMaxOrderByAggregateInput = {
    id?: SortOrder
    order_type?: SortOrder
    on_screen_color_code?: SortOrder
    on_report_color_code?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WorkOrderTypesMinOrderByAggregateInput = {
    id?: SortOrder
    order_type?: SortOrder
    on_screen_color_code?: SortOrder
    on_report_color_code?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WorkOrderTypesSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type service_levelsCountOrderByAggregateInput = {
    id?: SortOrder
    service_name?: SortOrder
    service_limit?: SortOrder
    default_load_test_duration?: SortOrder
    on_screen_color_code?: SortOrder
    on_report_color_code?: SortOrder
    default_duration?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
  }

  export type service_levelsAvgOrderByAggregateInput = {
    id?: SortOrder
    service_name?: SortOrder
    service_limit?: SortOrder
    default_load_test_duration?: SortOrder
    default_duration?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_by?: SortOrder
  }

  export type service_levelsMaxOrderByAggregateInput = {
    id?: SortOrder
    service_name?: SortOrder
    service_limit?: SortOrder
    default_load_test_duration?: SortOrder
    on_screen_color_code?: SortOrder
    on_report_color_code?: SortOrder
    default_duration?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
  }

  export type service_levelsMinOrderByAggregateInput = {
    id?: SortOrder
    service_name?: SortOrder
    service_limit?: SortOrder
    default_load_test_duration?: SortOrder
    on_screen_color_code?: SortOrder
    on_report_color_code?: SortOrder
    default_duration?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
  }

  export type service_levelsSumOrderByAggregateInput = {
    id?: SortOrder
    service_name?: SortOrder
    service_limit?: SortOrder
    default_load_test_duration?: SortOrder
    default_duration?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_by?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BlackOutDaysListRelationFilter = {
    every?: BlackOutDaysWhereInput
    some?: BlackOutDaysWhereInput
    none?: BlackOutDaysWhereInput
  }

  export type BlackOutDaysOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlackOutDayTypesCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BlackOutDayTypesAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type BlackOutDayTypesMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BlackOutDayTypesMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BlackOutDayTypesSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type BlackOutDayTypesRelationFilter = {
    is?: BlackOutDayTypesWhereInput | null
    isNot?: BlackOutDayTypesWhereInput | null
  }

  export type BlackOutDaysCountOrderByAggregateInput = {
    id?: SortOrder
    day_type_id?: SortOrder
    title?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    applies_to?: SortOrder
    color_code?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BlackOutDaysAvgOrderByAggregateInput = {
    id?: SortOrder
    day_type_id?: SortOrder
    applies_to?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type BlackOutDaysMaxOrderByAggregateInput = {
    id?: SortOrder
    day_type_id?: SortOrder
    title?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    applies_to?: SortOrder
    color_code?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BlackOutDaysMinOrderByAggregateInput = {
    id?: SortOrder
    day_type_id?: SortOrder
    title?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    applies_to?: SortOrder
    color_code?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BlackOutDaysSumOrderByAggregateInput = {
    id?: SortOrder
    day_type_id?: SortOrder
    applies_to?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type ReminderThresoldDaysCountOrderByAggregateInput = {
    id?: SortOrder
    thresold_day?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReminderThresoldDaysAvgOrderByAggregateInput = {
    id?: SortOrder
    thresold_day?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type ReminderThresoldDaysMaxOrderByAggregateInput = {
    id?: SortOrder
    thresold_day?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReminderThresoldDaysMinOrderByAggregateInput = {
    id?: SortOrder
    thresold_day?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReminderThresoldDaysSumOrderByAggregateInput = {
    id?: SortOrder
    thresold_day?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersCreateNestedManyWithoutRole_typeInput = {
    create?: XOR<Enumerable<UsersCreateWithoutRole_typeInput>, Enumerable<UsersUncheckedCreateWithoutRole_typeInput>>
    connectOrCreate?: Enumerable<UsersCreateOrConnectWithoutRole_typeInput>
    createMany?: UsersCreateManyRole_typeInputEnvelope
    connect?: Enumerable<UsersWhereUniqueInput>
  }

  export type UsersUncheckedCreateNestedManyWithoutRole_typeInput = {
    create?: XOR<Enumerable<UsersCreateWithoutRole_typeInput>, Enumerable<UsersUncheckedCreateWithoutRole_typeInput>>
    connectOrCreate?: Enumerable<UsersCreateOrConnectWithoutRole_typeInput>
    createMany?: UsersCreateManyRole_typeInputEnvelope
    connect?: Enumerable<UsersWhereUniqueInput>
  }

  export type UsersUpdateManyWithoutRole_typeNestedInput = {
    create?: XOR<Enumerable<UsersCreateWithoutRole_typeInput>, Enumerable<UsersUncheckedCreateWithoutRole_typeInput>>
    connectOrCreate?: Enumerable<UsersCreateOrConnectWithoutRole_typeInput>
    upsert?: Enumerable<UsersUpsertWithWhereUniqueWithoutRole_typeInput>
    createMany?: UsersCreateManyRole_typeInputEnvelope
    set?: Enumerable<UsersWhereUniqueInput>
    disconnect?: Enumerable<UsersWhereUniqueInput>
    delete?: Enumerable<UsersWhereUniqueInput>
    connect?: Enumerable<UsersWhereUniqueInput>
    update?: Enumerable<UsersUpdateWithWhereUniqueWithoutRole_typeInput>
    updateMany?: Enumerable<UsersUpdateManyWithWhereWithoutRole_typeInput>
    deleteMany?: Enumerable<UsersScalarWhereInput>
  }

  export type UsersUncheckedUpdateManyWithoutRole_typeNestedInput = {
    create?: XOR<Enumerable<UsersCreateWithoutRole_typeInput>, Enumerable<UsersUncheckedCreateWithoutRole_typeInput>>
    connectOrCreate?: Enumerable<UsersCreateOrConnectWithoutRole_typeInput>
    upsert?: Enumerable<UsersUpsertWithWhereUniqueWithoutRole_typeInput>
    createMany?: UsersCreateManyRole_typeInputEnvelope
    set?: Enumerable<UsersWhereUniqueInput>
    disconnect?: Enumerable<UsersWhereUniqueInput>
    delete?: Enumerable<UsersWhereUniqueInput>
    connect?: Enumerable<UsersWhereUniqueInput>
    update?: Enumerable<UsersUpdateWithWhereUniqueWithoutRole_typeInput>
    updateMany?: Enumerable<UsersUpdateManyWithWhereWithoutRole_typeInput>
    deleteMany?: Enumerable<UsersScalarWhereInput>
  }

  export type RolesCreateNestedOneWithoutRole_typeInput = {
    create?: XOR<RolesCreateWithoutRole_typeInput, RolesUncheckedCreateWithoutRole_typeInput>
    connectOrCreate?: RolesCreateOrConnectWithoutRole_typeInput
    connect?: RolesWhereUniqueInput
  }

  export type RolesUpdateOneWithoutRole_typeNestedInput = {
    create?: XOR<RolesCreateWithoutRole_typeInput, RolesUncheckedCreateWithoutRole_typeInput>
    connectOrCreate?: RolesCreateOrConnectWithoutRole_typeInput
    upsert?: RolesUpsertWithoutRole_typeInput
    disconnect?: boolean
    delete?: boolean
    connect?: RolesWhereUniqueInput
    update?: XOR<RolesUpdateWithoutRole_typeInput, RolesUncheckedUpdateWithoutRole_typeInput>
  }

  export type GeneratorModelsCreateNestedManyWithoutBrand_typeInput = {
    create?: XOR<Enumerable<GeneratorModelsCreateWithoutBrand_typeInput>, Enumerable<GeneratorModelsUncheckedCreateWithoutBrand_typeInput>>
    connectOrCreate?: Enumerable<GeneratorModelsCreateOrConnectWithoutBrand_typeInput>
    createMany?: GeneratorModelsCreateManyBrand_typeInputEnvelope
    connect?: Enumerable<GeneratorModelsWhereUniqueInput>
  }

  export type GeneratorModelsUncheckedCreateNestedManyWithoutBrand_typeInput = {
    create?: XOR<Enumerable<GeneratorModelsCreateWithoutBrand_typeInput>, Enumerable<GeneratorModelsUncheckedCreateWithoutBrand_typeInput>>
    connectOrCreate?: Enumerable<GeneratorModelsCreateOrConnectWithoutBrand_typeInput>
    createMany?: GeneratorModelsCreateManyBrand_typeInputEnvelope
    connect?: Enumerable<GeneratorModelsWhereUniqueInput>
  }

  export type GeneratorModelsUpdateManyWithoutBrand_typeNestedInput = {
    create?: XOR<Enumerable<GeneratorModelsCreateWithoutBrand_typeInput>, Enumerable<GeneratorModelsUncheckedCreateWithoutBrand_typeInput>>
    connectOrCreate?: Enumerable<GeneratorModelsCreateOrConnectWithoutBrand_typeInput>
    upsert?: Enumerable<GeneratorModelsUpsertWithWhereUniqueWithoutBrand_typeInput>
    createMany?: GeneratorModelsCreateManyBrand_typeInputEnvelope
    set?: Enumerable<GeneratorModelsWhereUniqueInput>
    disconnect?: Enumerable<GeneratorModelsWhereUniqueInput>
    delete?: Enumerable<GeneratorModelsWhereUniqueInput>
    connect?: Enumerable<GeneratorModelsWhereUniqueInput>
    update?: Enumerable<GeneratorModelsUpdateWithWhereUniqueWithoutBrand_typeInput>
    updateMany?: Enumerable<GeneratorModelsUpdateManyWithWhereWithoutBrand_typeInput>
    deleteMany?: Enumerable<GeneratorModelsScalarWhereInput>
  }

  export type GeneratorModelsUncheckedUpdateManyWithoutBrand_typeNestedInput = {
    create?: XOR<Enumerable<GeneratorModelsCreateWithoutBrand_typeInput>, Enumerable<GeneratorModelsUncheckedCreateWithoutBrand_typeInput>>
    connectOrCreate?: Enumerable<GeneratorModelsCreateOrConnectWithoutBrand_typeInput>
    upsert?: Enumerable<GeneratorModelsUpsertWithWhereUniqueWithoutBrand_typeInput>
    createMany?: GeneratorModelsCreateManyBrand_typeInputEnvelope
    set?: Enumerable<GeneratorModelsWhereUniqueInput>
    disconnect?: Enumerable<GeneratorModelsWhereUniqueInput>
    delete?: Enumerable<GeneratorModelsWhereUniqueInput>
    connect?: Enumerable<GeneratorModelsWhereUniqueInput>
    update?: Enumerable<GeneratorModelsUpdateWithWhereUniqueWithoutBrand_typeInput>
    updateMany?: Enumerable<GeneratorModelsUpdateManyWithWhereWithoutBrand_typeInput>
    deleteMany?: Enumerable<GeneratorModelsScalarWhereInput>
  }

  export type GeneratorBrandsCreateNestedOneWithoutBrand_typeInput = {
    create?: XOR<GeneratorBrandsCreateWithoutBrand_typeInput, GeneratorBrandsUncheckedCreateWithoutBrand_typeInput>
    connectOrCreate?: GeneratorBrandsCreateOrConnectWithoutBrand_typeInput
    connect?: GeneratorBrandsWhereUniqueInput
  }

  export type GeneratorBrandsUpdateOneWithoutBrand_typeNestedInput = {
    create?: XOR<GeneratorBrandsCreateWithoutBrand_typeInput, GeneratorBrandsUncheckedCreateWithoutBrand_typeInput>
    connectOrCreate?: GeneratorBrandsCreateOrConnectWithoutBrand_typeInput
    upsert?: GeneratorBrandsUpsertWithoutBrand_typeInput
    disconnect?: boolean
    delete?: boolean
    connect?: GeneratorBrandsWhereUniqueInput
    update?: XOR<GeneratorBrandsUpdateWithoutBrand_typeInput, GeneratorBrandsUncheckedUpdateWithoutBrand_typeInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BlackOutDaysCreateNestedManyWithoutBlackout_day_typeInput = {
    create?: XOR<Enumerable<BlackOutDaysCreateWithoutBlackout_day_typeInput>, Enumerable<BlackOutDaysUncheckedCreateWithoutBlackout_day_typeInput>>
    connectOrCreate?: Enumerable<BlackOutDaysCreateOrConnectWithoutBlackout_day_typeInput>
    createMany?: BlackOutDaysCreateManyBlackout_day_typeInputEnvelope
    connect?: Enumerable<BlackOutDaysWhereUniqueInput>
  }

  export type BlackOutDaysUncheckedCreateNestedManyWithoutBlackout_day_typeInput = {
    create?: XOR<Enumerable<BlackOutDaysCreateWithoutBlackout_day_typeInput>, Enumerable<BlackOutDaysUncheckedCreateWithoutBlackout_day_typeInput>>
    connectOrCreate?: Enumerable<BlackOutDaysCreateOrConnectWithoutBlackout_day_typeInput>
    createMany?: BlackOutDaysCreateManyBlackout_day_typeInputEnvelope
    connect?: Enumerable<BlackOutDaysWhereUniqueInput>
  }

  export type BlackOutDaysUpdateManyWithoutBlackout_day_typeNestedInput = {
    create?: XOR<Enumerable<BlackOutDaysCreateWithoutBlackout_day_typeInput>, Enumerable<BlackOutDaysUncheckedCreateWithoutBlackout_day_typeInput>>
    connectOrCreate?: Enumerable<BlackOutDaysCreateOrConnectWithoutBlackout_day_typeInput>
    upsert?: Enumerable<BlackOutDaysUpsertWithWhereUniqueWithoutBlackout_day_typeInput>
    createMany?: BlackOutDaysCreateManyBlackout_day_typeInputEnvelope
    set?: Enumerable<BlackOutDaysWhereUniqueInput>
    disconnect?: Enumerable<BlackOutDaysWhereUniqueInput>
    delete?: Enumerable<BlackOutDaysWhereUniqueInput>
    connect?: Enumerable<BlackOutDaysWhereUniqueInput>
    update?: Enumerable<BlackOutDaysUpdateWithWhereUniqueWithoutBlackout_day_typeInput>
    updateMany?: Enumerable<BlackOutDaysUpdateManyWithWhereWithoutBlackout_day_typeInput>
    deleteMany?: Enumerable<BlackOutDaysScalarWhereInput>
  }

  export type BlackOutDaysUncheckedUpdateManyWithoutBlackout_day_typeNestedInput = {
    create?: XOR<Enumerable<BlackOutDaysCreateWithoutBlackout_day_typeInput>, Enumerable<BlackOutDaysUncheckedCreateWithoutBlackout_day_typeInput>>
    connectOrCreate?: Enumerable<BlackOutDaysCreateOrConnectWithoutBlackout_day_typeInput>
    upsert?: Enumerable<BlackOutDaysUpsertWithWhereUniqueWithoutBlackout_day_typeInput>
    createMany?: BlackOutDaysCreateManyBlackout_day_typeInputEnvelope
    set?: Enumerable<BlackOutDaysWhereUniqueInput>
    disconnect?: Enumerable<BlackOutDaysWhereUniqueInput>
    delete?: Enumerable<BlackOutDaysWhereUniqueInput>
    connect?: Enumerable<BlackOutDaysWhereUniqueInput>
    update?: Enumerable<BlackOutDaysUpdateWithWhereUniqueWithoutBlackout_day_typeInput>
    updateMany?: Enumerable<BlackOutDaysUpdateManyWithWhereWithoutBlackout_day_typeInput>
    deleteMany?: Enumerable<BlackOutDaysScalarWhereInput>
  }

  export type BlackOutDayTypesCreateNestedOneWithoutBlackout_day_typeInput = {
    create?: XOR<BlackOutDayTypesCreateWithoutBlackout_day_typeInput, BlackOutDayTypesUncheckedCreateWithoutBlackout_day_typeInput>
    connectOrCreate?: BlackOutDayTypesCreateOrConnectWithoutBlackout_day_typeInput
    connect?: BlackOutDayTypesWhereUniqueInput
  }

  export type BlackOutDayTypesUpdateOneWithoutBlackout_day_typeNestedInput = {
    create?: XOR<BlackOutDayTypesCreateWithoutBlackout_day_typeInput, BlackOutDayTypesUncheckedCreateWithoutBlackout_day_typeInput>
    connectOrCreate?: BlackOutDayTypesCreateOrConnectWithoutBlackout_day_typeInput
    upsert?: BlackOutDayTypesUpsertWithoutBlackout_day_typeInput
    disconnect?: boolean
    delete?: boolean
    connect?: BlackOutDayTypesWhereUniqueInput
    update?: XOR<BlackOutDayTypesUpdateWithoutBlackout_day_typeInput, BlackOutDayTypesUncheckedUpdateWithoutBlackout_day_typeInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type UsersCreateWithoutRole_typeInput = {
    name?: string | null
    contact_name?: string | null
    email?: string | null
    password?: string | null
    address?: string | null
    contact?: string | null
    customer_type_id?: number
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUncheckedCreateWithoutRole_typeInput = {
    id?: number
    name?: string | null
    contact_name?: string | null
    email?: string | null
    password?: string | null
    address?: string | null
    contact?: string | null
    customer_type_id?: number
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersCreateOrConnectWithoutRole_typeInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRole_typeInput, UsersUncheckedCreateWithoutRole_typeInput>
  }

  export type UsersCreateManyRole_typeInputEnvelope = {
    data: Enumerable<UsersCreateManyRole_typeInput>
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutRole_typeInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutRole_typeInput, UsersUncheckedUpdateWithoutRole_typeInput>
    create: XOR<UsersCreateWithoutRole_typeInput, UsersUncheckedCreateWithoutRole_typeInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutRole_typeInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutRole_typeInput, UsersUncheckedUpdateWithoutRole_typeInput>
  }

  export type UsersUpdateManyWithWhereWithoutRole_typeInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutRole_typeInput>
  }

  export type UsersScalarWhereInput = {
    AND?: Enumerable<UsersScalarWhereInput>
    OR?: Enumerable<UsersScalarWhereInput>
    NOT?: Enumerable<UsersScalarWhereInput>
    id?: IntFilter | number
    name?: StringNullableFilter | string | null
    contact_name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    password?: StringNullableFilter | string | null
    address?: StringNullableFilter | string | null
    contact?: StringNullableFilter | string | null
    customer_type_id?: IntFilter | number
    user_type?: IntFilter | number
    status?: IntFilter | number
    is_deleted?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type RolesCreateWithoutRole_typeInput = {
    title?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RolesUncheckedCreateWithoutRole_typeInput = {
    id?: number
    title?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RolesCreateOrConnectWithoutRole_typeInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutRole_typeInput, RolesUncheckedCreateWithoutRole_typeInput>
  }

  export type RolesUpsertWithoutRole_typeInput = {
    update: XOR<RolesUpdateWithoutRole_typeInput, RolesUncheckedUpdateWithoutRole_typeInput>
    create: XOR<RolesCreateWithoutRole_typeInput, RolesUncheckedCreateWithoutRole_typeInput>
  }

  export type RolesUpdateWithoutRole_typeInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesUncheckedUpdateWithoutRole_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratorModelsCreateWithoutBrand_typeInput = {
    model_name?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type GeneratorModelsUncheckedCreateWithoutBrand_typeInput = {
    id?: number
    model_name?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type GeneratorModelsCreateOrConnectWithoutBrand_typeInput = {
    where: GeneratorModelsWhereUniqueInput
    create: XOR<GeneratorModelsCreateWithoutBrand_typeInput, GeneratorModelsUncheckedCreateWithoutBrand_typeInput>
  }

  export type GeneratorModelsCreateManyBrand_typeInputEnvelope = {
    data: Enumerable<GeneratorModelsCreateManyBrand_typeInput>
    skipDuplicates?: boolean
  }

  export type GeneratorModelsUpsertWithWhereUniqueWithoutBrand_typeInput = {
    where: GeneratorModelsWhereUniqueInput
    update: XOR<GeneratorModelsUpdateWithoutBrand_typeInput, GeneratorModelsUncheckedUpdateWithoutBrand_typeInput>
    create: XOR<GeneratorModelsCreateWithoutBrand_typeInput, GeneratorModelsUncheckedCreateWithoutBrand_typeInput>
  }

  export type GeneratorModelsUpdateWithWhereUniqueWithoutBrand_typeInput = {
    where: GeneratorModelsWhereUniqueInput
    data: XOR<GeneratorModelsUpdateWithoutBrand_typeInput, GeneratorModelsUncheckedUpdateWithoutBrand_typeInput>
  }

  export type GeneratorModelsUpdateManyWithWhereWithoutBrand_typeInput = {
    where: GeneratorModelsScalarWhereInput
    data: XOR<GeneratorModelsUpdateManyMutationInput, GeneratorModelsUncheckedUpdateManyWithoutBrand_typeInput>
  }

  export type GeneratorModelsScalarWhereInput = {
    AND?: Enumerable<GeneratorModelsScalarWhereInput>
    OR?: Enumerable<GeneratorModelsScalarWhereInput>
    NOT?: Enumerable<GeneratorModelsScalarWhereInput>
    id?: IntFilter | number
    model_name?: StringNullableFilter | string | null
    brand_id?: IntFilter | number
    status?: IntFilter | number
    is_deleted?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type GeneratorBrandsCreateWithoutBrand_typeInput = {
    brand_name?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type GeneratorBrandsUncheckedCreateWithoutBrand_typeInput = {
    id?: number
    brand_name?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type GeneratorBrandsCreateOrConnectWithoutBrand_typeInput = {
    where: GeneratorBrandsWhereUniqueInput
    create: XOR<GeneratorBrandsCreateWithoutBrand_typeInput, GeneratorBrandsUncheckedCreateWithoutBrand_typeInput>
  }

  export type GeneratorBrandsUpsertWithoutBrand_typeInput = {
    update: XOR<GeneratorBrandsUpdateWithoutBrand_typeInput, GeneratorBrandsUncheckedUpdateWithoutBrand_typeInput>
    create: XOR<GeneratorBrandsCreateWithoutBrand_typeInput, GeneratorBrandsUncheckedCreateWithoutBrand_typeInput>
  }

  export type GeneratorBrandsUpdateWithoutBrand_typeInput = {
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratorBrandsUncheckedUpdateWithoutBrand_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlackOutDaysCreateWithoutBlackout_day_typeInput = {
    title: string
    start_date: Date | string
    end_date: Date | string
    applies_to?: number
    color_code?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BlackOutDaysUncheckedCreateWithoutBlackout_day_typeInput = {
    id?: number
    title: string
    start_date: Date | string
    end_date: Date | string
    applies_to?: number
    color_code?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BlackOutDaysCreateOrConnectWithoutBlackout_day_typeInput = {
    where: BlackOutDaysWhereUniqueInput
    create: XOR<BlackOutDaysCreateWithoutBlackout_day_typeInput, BlackOutDaysUncheckedCreateWithoutBlackout_day_typeInput>
  }

  export type BlackOutDaysCreateManyBlackout_day_typeInputEnvelope = {
    data: Enumerable<BlackOutDaysCreateManyBlackout_day_typeInput>
    skipDuplicates?: boolean
  }

  export type BlackOutDaysUpsertWithWhereUniqueWithoutBlackout_day_typeInput = {
    where: BlackOutDaysWhereUniqueInput
    update: XOR<BlackOutDaysUpdateWithoutBlackout_day_typeInput, BlackOutDaysUncheckedUpdateWithoutBlackout_day_typeInput>
    create: XOR<BlackOutDaysCreateWithoutBlackout_day_typeInput, BlackOutDaysUncheckedCreateWithoutBlackout_day_typeInput>
  }

  export type BlackOutDaysUpdateWithWhereUniqueWithoutBlackout_day_typeInput = {
    where: BlackOutDaysWhereUniqueInput
    data: XOR<BlackOutDaysUpdateWithoutBlackout_day_typeInput, BlackOutDaysUncheckedUpdateWithoutBlackout_day_typeInput>
  }

  export type BlackOutDaysUpdateManyWithWhereWithoutBlackout_day_typeInput = {
    where: BlackOutDaysScalarWhereInput
    data: XOR<BlackOutDaysUpdateManyMutationInput, BlackOutDaysUncheckedUpdateManyWithoutBlackout_day_typeInput>
  }

  export type BlackOutDaysScalarWhereInput = {
    AND?: Enumerable<BlackOutDaysScalarWhereInput>
    OR?: Enumerable<BlackOutDaysScalarWhereInput>
    NOT?: Enumerable<BlackOutDaysScalarWhereInput>
    id?: IntFilter | number
    day_type_id?: IntFilter | number
    title?: StringFilter | string
    start_date?: DateTimeFilter | Date | string
    end_date?: DateTimeFilter | Date | string
    applies_to?: IntFilter | number
    color_code?: StringNullableFilter | string | null
    status?: IntFilter | number
    is_deleted?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type BlackOutDayTypesCreateWithoutBlackout_day_typeInput = {
    type: string
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BlackOutDayTypesUncheckedCreateWithoutBlackout_day_typeInput = {
    id?: number
    type: string
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BlackOutDayTypesCreateOrConnectWithoutBlackout_day_typeInput = {
    where: BlackOutDayTypesWhereUniqueInput
    create: XOR<BlackOutDayTypesCreateWithoutBlackout_day_typeInput, BlackOutDayTypesUncheckedCreateWithoutBlackout_day_typeInput>
  }

  export type BlackOutDayTypesUpsertWithoutBlackout_day_typeInput = {
    update: XOR<BlackOutDayTypesUpdateWithoutBlackout_day_typeInput, BlackOutDayTypesUncheckedUpdateWithoutBlackout_day_typeInput>
    create: XOR<BlackOutDayTypesCreateWithoutBlackout_day_typeInput, BlackOutDayTypesUncheckedCreateWithoutBlackout_day_typeInput>
  }

  export type BlackOutDayTypesUpdateWithoutBlackout_day_typeInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlackOutDayTypesUncheckedUpdateWithoutBlackout_day_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyRole_typeInput = {
    id?: number
    name?: string | null
    contact_name?: string | null
    email?: string | null
    password?: string | null
    address?: string | null
    contact?: string | null
    customer_type_id?: number
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUpdateWithoutRole_typeInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type_id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateWithoutRole_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type_id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyWithoutRole_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type_id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratorModelsCreateManyBrand_typeInput = {
    id?: number
    model_name?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type GeneratorModelsUpdateWithoutBrand_typeInput = {
    model_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratorModelsUncheckedUpdateWithoutBrand_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    model_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratorModelsUncheckedUpdateManyWithoutBrand_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    model_name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlackOutDaysCreateManyBlackout_day_typeInput = {
    id?: number
    title: string
    start_date: Date | string
    end_date: Date | string
    applies_to?: number
    color_code?: string | null
    status?: number
    is_deleted?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BlackOutDaysUpdateWithoutBlackout_day_typeInput = {
    title?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    applies_to?: IntFieldUpdateOperationsInput | number
    color_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlackOutDaysUncheckedUpdateWithoutBlackout_day_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    applies_to?: IntFieldUpdateOperationsInput | number
    color_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlackOutDaysUncheckedUpdateManyWithoutBlackout_day_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    applies_to?: IntFieldUpdateOperationsInput | number
    color_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    is_deleted?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}