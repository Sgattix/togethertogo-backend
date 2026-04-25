
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Sprint
 * 
 */
export type Sprint = $Result.DefaultSelection<Prisma.$SprintPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskComment
 * 
 */
export type TaskComment = $Result.DefaultSelection<Prisma.$TaskCommentPayload>
/**
 * Model TaskActivity
 * 
 */
export type TaskActivity = $Result.DefaultSelection<Prisma.$TaskActivityPayload>
/**
 * Model Volunteer
 * 
 */
export type Volunteer = $Result.DefaultSelection<Prisma.$VolunteerPayload>
/**
 * Model ApprovalHistory
 * 
 */
export type ApprovalHistory = $Result.DefaultSelection<Prisma.$ApprovalHistoryPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model TwoFactorAuth
 * 
 */
export type TwoFactorAuth = $Result.DefaultSelection<Prisma.$TwoFactorAuthPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  COORDINATOR: 'COORDINATOR',
  VOLUNTEER: 'VOLUNTEER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AccountStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  DELETED: 'DELETED'
};

export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AccountStatus = $Enums.AccountStatus

export const AccountStatus: typeof $Enums.AccountStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sprint`: Exposes CRUD operations for the **Sprint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sprints
    * const sprints = await prisma.sprint.findMany()
    * ```
    */
  get sprint(): Prisma.SprintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskComment`: Exposes CRUD operations for the **TaskComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskComments
    * const taskComments = await prisma.taskComment.findMany()
    * ```
    */
  get taskComment(): Prisma.TaskCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskActivity`: Exposes CRUD operations for the **TaskActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskActivities
    * const taskActivities = await prisma.taskActivity.findMany()
    * ```
    */
  get taskActivity(): Prisma.TaskActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volunteer`: Exposes CRUD operations for the **Volunteer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Volunteers
    * const volunteers = await prisma.volunteer.findMany()
    * ```
    */
  get volunteer(): Prisma.VolunteerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.approvalHistory`: Exposes CRUD operations for the **ApprovalHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApprovalHistories
    * const approvalHistories = await prisma.approvalHistory.findMany()
    * ```
    */
  get approvalHistory(): Prisma.ApprovalHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.twoFactorAuth`: Exposes CRUD operations for the **TwoFactorAuth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwoFactorAuths
    * const twoFactorAuths = await prisma.twoFactorAuth.findMany()
    * ```
    */
  get twoFactorAuth(): Prisma.TwoFactorAuthDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Sprint: 'Sprint',
    Task: 'Task',
    TaskComment: 'TaskComment',
    TaskActivity: 'TaskActivity',
    Volunteer: 'Volunteer',
    ApprovalHistory: 'ApprovalHistory',
    Notification: 'Notification',
    TwoFactorAuth: 'TwoFactorAuth'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "sprint" | "task" | "taskComment" | "taskActivity" | "volunteer" | "approvalHistory" | "notification" | "twoFactorAuth"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Sprint: {
        payload: Prisma.$SprintPayload<ExtArgs>
        fields: Prisma.SprintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SprintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SprintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          findFirst: {
            args: Prisma.SprintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SprintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          findMany: {
            args: Prisma.SprintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>[]
          }
          create: {
            args: Prisma.SprintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          createMany: {
            args: Prisma.SprintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SprintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          update: {
            args: Prisma.SprintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          deleteMany: {
            args: Prisma.SprintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SprintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SprintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SprintPayload>
          }
          aggregate: {
            args: Prisma.SprintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSprint>
          }
          groupBy: {
            args: Prisma.SprintGroupByArgs<ExtArgs>
            result: $Utils.Optional<SprintGroupByOutputType>[]
          }
          count: {
            args: Prisma.SprintCountArgs<ExtArgs>
            result: $Utils.Optional<SprintCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskComment: {
        payload: Prisma.$TaskCommentPayload<ExtArgs>
        fields: Prisma.TaskCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload>
          }
          findFirst: {
            args: Prisma.TaskCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload>
          }
          findMany: {
            args: Prisma.TaskCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload>[]
          }
          create: {
            args: Prisma.TaskCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload>
          }
          createMany: {
            args: Prisma.TaskCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TaskCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload>
          }
          update: {
            args: Prisma.TaskCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload>
          }
          deleteMany: {
            args: Prisma.TaskCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload>
          }
          aggregate: {
            args: Prisma.TaskCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskComment>
          }
          groupBy: {
            args: Prisma.TaskCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCommentCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCommentCountAggregateOutputType> | number
          }
        }
      }
      TaskActivity: {
        payload: Prisma.$TaskActivityPayload<ExtArgs>
        fields: Prisma.TaskActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>
          }
          findFirst: {
            args: Prisma.TaskActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>
          }
          findMany: {
            args: Prisma.TaskActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>[]
          }
          create: {
            args: Prisma.TaskActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>
          }
          createMany: {
            args: Prisma.TaskActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TaskActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>
          }
          update: {
            args: Prisma.TaskActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>
          }
          deleteMany: {
            args: Prisma.TaskActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskActivityPayload>
          }
          aggregate: {
            args: Prisma.TaskActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskActivity>
          }
          groupBy: {
            args: Prisma.TaskActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskActivityCountArgs<ExtArgs>
            result: $Utils.Optional<TaskActivityCountAggregateOutputType> | number
          }
        }
      }
      Volunteer: {
        payload: Prisma.$VolunteerPayload<ExtArgs>
        fields: Prisma.VolunteerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VolunteerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VolunteerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          findFirst: {
            args: Prisma.VolunteerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VolunteerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          findMany: {
            args: Prisma.VolunteerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>[]
          }
          create: {
            args: Prisma.VolunteerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          createMany: {
            args: Prisma.VolunteerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VolunteerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          update: {
            args: Prisma.VolunteerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          deleteMany: {
            args: Prisma.VolunteerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VolunteerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VolunteerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          aggregate: {
            args: Prisma.VolunteerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolunteer>
          }
          groupBy: {
            args: Prisma.VolunteerGroupByArgs<ExtArgs>
            result: $Utils.Optional<VolunteerGroupByOutputType>[]
          }
          count: {
            args: Prisma.VolunteerCountArgs<ExtArgs>
            result: $Utils.Optional<VolunteerCountAggregateOutputType> | number
          }
        }
      }
      ApprovalHistory: {
        payload: Prisma.$ApprovalHistoryPayload<ExtArgs>
        fields: Prisma.ApprovalHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApprovalHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApprovalHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalHistoryPayload>
          }
          findFirst: {
            args: Prisma.ApprovalHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApprovalHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalHistoryPayload>
          }
          findMany: {
            args: Prisma.ApprovalHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalHistoryPayload>[]
          }
          create: {
            args: Prisma.ApprovalHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalHistoryPayload>
          }
          createMany: {
            args: Prisma.ApprovalHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ApprovalHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalHistoryPayload>
          }
          update: {
            args: Prisma.ApprovalHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ApprovalHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApprovalHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApprovalHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalHistoryPayload>
          }
          aggregate: {
            args: Prisma.ApprovalHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApprovalHistory>
          }
          groupBy: {
            args: Prisma.ApprovalHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApprovalHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApprovalHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ApprovalHistoryCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      TwoFactorAuth: {
        payload: Prisma.$TwoFactorAuthPayload<ExtArgs>
        fields: Prisma.TwoFactorAuthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TwoFactorAuthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TwoFactorAuthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload>
          }
          findFirst: {
            args: Prisma.TwoFactorAuthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TwoFactorAuthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload>
          }
          findMany: {
            args: Prisma.TwoFactorAuthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload>[]
          }
          create: {
            args: Prisma.TwoFactorAuthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload>
          }
          createMany: {
            args: Prisma.TwoFactorAuthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TwoFactorAuthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload>
          }
          update: {
            args: Prisma.TwoFactorAuthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload>
          }
          deleteMany: {
            args: Prisma.TwoFactorAuthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TwoFactorAuthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TwoFactorAuthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorAuthPayload>
          }
          aggregate: {
            args: Prisma.TwoFactorAuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTwoFactorAuth>
          }
          groupBy: {
            args: Prisma.TwoFactorAuthGroupByArgs<ExtArgs>
            result: $Utils.Optional<TwoFactorAuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.TwoFactorAuthCountArgs<ExtArgs>
            result: $Utils.Optional<TwoFactorAuthCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    sprint?: SprintOmit
    task?: TaskOmit
    taskComment?: TaskCommentOmit
    taskActivity?: TaskActivityOmit
    volunteer?: VolunteerOmit
    approvalHistory?: ApprovalHistoryOmit
    notification?: NotificationOmit
    twoFactorAuth?: TwoFactorAuthOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sprints: number
    sessions: number
    approvals: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sprints?: boolean | UserCountOutputTypeCountSprintsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    approvals?: boolean | UserCountOutputTypeCountApprovalsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSprintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SprintWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type SprintCountOutputType
   */

  export type SprintCountOutputType = {
    tasks: number
    approvalHistory: number
  }

  export type SprintCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | SprintCountOutputTypeCountTasksArgs
    approvalHistory?: boolean | SprintCountOutputTypeCountApprovalHistoryArgs
  }

  // Custom InputTypes
  /**
   * SprintCountOutputType without action
   */
  export type SprintCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SprintCountOutputType
     */
    select?: SprintCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SprintCountOutputType without action
   */
  export type SprintCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * SprintCountOutputType without action
   */
  export type SprintCountOutputTypeCountApprovalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalHistoryWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    comments: number
    activities: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | TaskCountOutputTypeCountCommentsArgs
    activities?: boolean | TaskCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskCommentWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskActivityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.UserRole | null
    accountStatus: $Enums.AccountStatus | null
    deletedAt: Date | null
    emailVerified: boolean | null
    verificationToken: string | null
    verificationTokenExpiresAt: Date | null
    resetToken: string | null
    resetTokenExpiresAt: Date | null
    emailChangeToken: string | null
    emailChangeTokenExpiresAt: Date | null
    pendingEmail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.UserRole | null
    accountStatus: $Enums.AccountStatus | null
    deletedAt: Date | null
    emailVerified: boolean | null
    verificationToken: string | null
    verificationTokenExpiresAt: Date | null
    resetToken: string | null
    resetTokenExpiresAt: Date | null
    emailChangeToken: string | null
    emailChangeTokenExpiresAt: Date | null
    pendingEmail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    accountStatus: number
    deletedAt: number
    emailVerified: number
    verificationToken: number
    verificationTokenExpiresAt: number
    resetToken: number
    resetTokenExpiresAt: number
    emailChangeToken: number
    emailChangeTokenExpiresAt: number
    pendingEmail: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    accountStatus?: true
    deletedAt?: true
    emailVerified?: true
    verificationToken?: true
    verificationTokenExpiresAt?: true
    resetToken?: true
    resetTokenExpiresAt?: true
    emailChangeToken?: true
    emailChangeTokenExpiresAt?: true
    pendingEmail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    accountStatus?: true
    deletedAt?: true
    emailVerified?: true
    verificationToken?: true
    verificationTokenExpiresAt?: true
    resetToken?: true
    resetTokenExpiresAt?: true
    emailChangeToken?: true
    emailChangeTokenExpiresAt?: true
    pendingEmail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    accountStatus?: true
    deletedAt?: true
    emailVerified?: true
    verificationToken?: true
    verificationTokenExpiresAt?: true
    resetToken?: true
    resetTokenExpiresAt?: true
    emailChangeToken?: true
    emailChangeTokenExpiresAt?: true
    pendingEmail?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: $Enums.UserRole
    accountStatus: $Enums.AccountStatus
    deletedAt: Date | null
    emailVerified: boolean
    verificationToken: string | null
    verificationTokenExpiresAt: Date | null
    resetToken: string | null
    resetTokenExpiresAt: Date | null
    emailChangeToken: string | null
    emailChangeTokenExpiresAt: Date | null
    pendingEmail: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    accountStatus?: boolean
    deletedAt?: boolean
    emailVerified?: boolean
    verificationToken?: boolean
    verificationTokenExpiresAt?: boolean
    resetToken?: boolean
    resetTokenExpiresAt?: boolean
    emailChangeToken?: boolean
    emailChangeTokenExpiresAt?: boolean
    pendingEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sprints?: boolean | User$sprintsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    approvals?: boolean | User$approvalsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    volunteer?: boolean | User$volunteerArgs<ExtArgs>
    twoFactorAuth?: boolean | User$twoFactorAuthArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    accountStatus?: boolean
    deletedAt?: boolean
    emailVerified?: boolean
    verificationToken?: boolean
    verificationTokenExpiresAt?: boolean
    resetToken?: boolean
    resetTokenExpiresAt?: boolean
    emailChangeToken?: boolean
    emailChangeTokenExpiresAt?: boolean
    pendingEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "accountStatus" | "deletedAt" | "emailVerified" | "verificationToken" | "verificationTokenExpiresAt" | "resetToken" | "resetTokenExpiresAt" | "emailChangeToken" | "emailChangeTokenExpiresAt" | "pendingEmail" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sprints?: boolean | User$sprintsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    approvals?: boolean | User$approvalsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    volunteer?: boolean | User$volunteerArgs<ExtArgs>
    twoFactorAuth?: boolean | User$twoFactorAuthArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sprints: Prisma.$SprintPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      approvals: Prisma.$ApprovalHistoryPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      volunteer: Prisma.$VolunteerPayload<ExtArgs> | null
      twoFactorAuth: Prisma.$TwoFactorAuthPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: $Enums.UserRole
      accountStatus: $Enums.AccountStatus
      deletedAt: Date | null
      emailVerified: boolean
      verificationToken: string | null
      verificationTokenExpiresAt: Date | null
      resetToken: string | null
      resetTokenExpiresAt: Date | null
      emailChangeToken: string | null
      emailChangeTokenExpiresAt: Date | null
      pendingEmail: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sprints<T extends User$sprintsArgs<ExtArgs> = {}>(args?: Subset<T, User$sprintsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvals<T extends User$approvalsArgs<ExtArgs> = {}>(args?: Subset<T, User$approvalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    volunteer<T extends User$volunteerArgs<ExtArgs> = {}>(args?: Subset<T, User$volunteerArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    twoFactorAuth<T extends User$twoFactorAuthArgs<ExtArgs> = {}>(args?: Subset<T, User$twoFactorAuthArgs<ExtArgs>>): Prisma__TwoFactorAuthClient<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly accountStatus: FieldRef<"User", 'AccountStatus'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly verificationToken: FieldRef<"User", 'String'>
    readonly verificationTokenExpiresAt: FieldRef<"User", 'DateTime'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiresAt: FieldRef<"User", 'DateTime'>
    readonly emailChangeToken: FieldRef<"User", 'String'>
    readonly emailChangeTokenExpiresAt: FieldRef<"User", 'DateTime'>
    readonly pendingEmail: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sprints
   */
  export type User$sprintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    where?: SprintWhereInput
    orderBy?: SprintOrderByWithRelationInput | SprintOrderByWithRelationInput[]
    cursor?: SprintWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SprintScalarFieldEnum | SprintScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.approvals
   */
  export type User$approvalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalHistory
     */
    select?: ApprovalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalHistory
     */
    omit?: ApprovalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalHistoryInclude<ExtArgs> | null
    where?: ApprovalHistoryWhereInput
    orderBy?: ApprovalHistoryOrderByWithRelationInput | ApprovalHistoryOrderByWithRelationInput[]
    cursor?: ApprovalHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalHistoryScalarFieldEnum | ApprovalHistoryScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.volunteer
   */
  export type User$volunteerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    where?: VolunteerWhereInput
  }

  /**
   * User.twoFactorAuth
   */
  export type User$twoFactorAuthArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    where?: TwoFactorAuthWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    deviceInfo: string | null
    ipAddress: string | null
    location: string | null
    lastActivityAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    deviceInfo: string | null
    ipAddress: string | null
    location: string | null
    lastActivityAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    deviceInfo: number
    ipAddress: number
    location: number
    lastActivityAt: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    deviceInfo?: true
    ipAddress?: true
    location?: true
    lastActivityAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    deviceInfo?: true
    ipAddress?: true
    location?: true
    lastActivityAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    deviceInfo?: true
    ipAddress?: true
    location?: true
    lastActivityAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    deviceInfo: string | null
    ipAddress: string | null
    location: string | null
    lastActivityAt: Date
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    location?: boolean
    lastActivityAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    location?: boolean
    lastActivityAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "deviceInfo" | "ipAddress" | "location" | "lastActivityAt" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      deviceInfo: string | null
      ipAddress: string | null
      location: string | null
      lastActivityAt: Date
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly deviceInfo: FieldRef<"Session", 'String'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly location: FieldRef<"Session", 'String'>
    readonly lastActivityAt: FieldRef<"Session", 'DateTime'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Sprint
   */

  export type AggregateSprint = {
    _count: SprintCountAggregateOutputType | null
    _avg: SprintAvgAggregateOutputType | null
    _sum: SprintSumAggregateOutputType | null
    _min: SprintMinAggregateOutputType | null
    _max: SprintMaxAggregateOutputType | null
  }

  export type SprintAvgAggregateOutputType = {
    progress: number | null
  }

  export type SprintSumAggregateOutputType = {
    progress: number | null
  }

  export type SprintMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    location: string | null
    progressStatus: string | null
    governmentAuthorizationStatus: string | null
    platformAuthorizationStatus: string | null
    coordinatorId: string | null
    startDate: Date | null
    endDate: Date | null
    progress: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SprintMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    location: string | null
    progressStatus: string | null
    governmentAuthorizationStatus: string | null
    platformAuthorizationStatus: string | null
    coordinatorId: string | null
    startDate: Date | null
    endDate: Date | null
    progress: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SprintCountAggregateOutputType = {
    id: number
    title: number
    description: number
    location: number
    progressStatus: number
    governmentAuthorizationStatus: number
    platformAuthorizationStatus: number
    coordinatorId: number
    startDate: number
    endDate: number
    progress: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SprintAvgAggregateInputType = {
    progress?: true
  }

  export type SprintSumAggregateInputType = {
    progress?: true
  }

  export type SprintMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    progressStatus?: true
    governmentAuthorizationStatus?: true
    platformAuthorizationStatus?: true
    coordinatorId?: true
    startDate?: true
    endDate?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SprintMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    progressStatus?: true
    governmentAuthorizationStatus?: true
    platformAuthorizationStatus?: true
    coordinatorId?: true
    startDate?: true
    endDate?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SprintCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    progressStatus?: true
    governmentAuthorizationStatus?: true
    platformAuthorizationStatus?: true
    coordinatorId?: true
    startDate?: true
    endDate?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SprintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sprint to aggregate.
     */
    where?: SprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprints to fetch.
     */
    orderBy?: SprintOrderByWithRelationInput | SprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sprints
    **/
    _count?: true | SprintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SprintAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SprintSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SprintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SprintMaxAggregateInputType
  }

  export type GetSprintAggregateType<T extends SprintAggregateArgs> = {
        [P in keyof T & keyof AggregateSprint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSprint[P]>
      : GetScalarType<T[P], AggregateSprint[P]>
  }




  export type SprintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SprintWhereInput
    orderBy?: SprintOrderByWithAggregationInput | SprintOrderByWithAggregationInput[]
    by: SprintScalarFieldEnum[] | SprintScalarFieldEnum
    having?: SprintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SprintCountAggregateInputType | true
    _avg?: SprintAvgAggregateInputType
    _sum?: SprintSumAggregateInputType
    _min?: SprintMinAggregateInputType
    _max?: SprintMaxAggregateInputType
  }

  export type SprintGroupByOutputType = {
    id: string
    title: string
    description: string | null
    location: string
    progressStatus: string
    governmentAuthorizationStatus: string
    platformAuthorizationStatus: string
    coordinatorId: string
    startDate: Date
    endDate: Date
    progress: number
    createdAt: Date
    updatedAt: Date
    _count: SprintCountAggregateOutputType | null
    _avg: SprintAvgAggregateOutputType | null
    _sum: SprintSumAggregateOutputType | null
    _min: SprintMinAggregateOutputType | null
    _max: SprintMaxAggregateOutputType | null
  }

  type GetSprintGroupByPayload<T extends SprintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SprintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SprintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SprintGroupByOutputType[P]>
            : GetScalarType<T[P], SprintGroupByOutputType[P]>
        }
      >
    >


  export type SprintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    progressStatus?: boolean
    governmentAuthorizationStatus?: boolean
    platformAuthorizationStatus?: boolean
    coordinatorId?: boolean
    startDate?: boolean
    endDate?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    coordinator?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Sprint$tasksArgs<ExtArgs>
    approvalHistory?: boolean | Sprint$approvalHistoryArgs<ExtArgs>
    _count?: boolean | SprintCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sprint"]>



  export type SprintSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    progressStatus?: boolean
    governmentAuthorizationStatus?: boolean
    platformAuthorizationStatus?: boolean
    coordinatorId?: boolean
    startDate?: boolean
    endDate?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SprintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "location" | "progressStatus" | "governmentAuthorizationStatus" | "platformAuthorizationStatus" | "coordinatorId" | "startDate" | "endDate" | "progress" | "createdAt" | "updatedAt", ExtArgs["result"]["sprint"]>
  export type SprintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coordinator?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Sprint$tasksArgs<ExtArgs>
    approvalHistory?: boolean | Sprint$approvalHistoryArgs<ExtArgs>
    _count?: boolean | SprintCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SprintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sprint"
    objects: {
      coordinator: Prisma.$UserPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      approvalHistory: Prisma.$ApprovalHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      location: string
      progressStatus: string
      governmentAuthorizationStatus: string
      platformAuthorizationStatus: string
      coordinatorId: string
      startDate: Date
      endDate: Date
      progress: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sprint"]>
    composites: {}
  }

  type SprintGetPayload<S extends boolean | null | undefined | SprintDefaultArgs> = $Result.GetResult<Prisma.$SprintPayload, S>

  type SprintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SprintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SprintCountAggregateInputType | true
    }

  export interface SprintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sprint'], meta: { name: 'Sprint' } }
    /**
     * Find zero or one Sprint that matches the filter.
     * @param {SprintFindUniqueArgs} args - Arguments to find a Sprint
     * @example
     * // Get one Sprint
     * const sprint = await prisma.sprint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SprintFindUniqueArgs>(args: SelectSubset<T, SprintFindUniqueArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sprint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SprintFindUniqueOrThrowArgs} args - Arguments to find a Sprint
     * @example
     * // Get one Sprint
     * const sprint = await prisma.sprint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SprintFindUniqueOrThrowArgs>(args: SelectSubset<T, SprintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sprint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintFindFirstArgs} args - Arguments to find a Sprint
     * @example
     * // Get one Sprint
     * const sprint = await prisma.sprint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SprintFindFirstArgs>(args?: SelectSubset<T, SprintFindFirstArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sprint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintFindFirstOrThrowArgs} args - Arguments to find a Sprint
     * @example
     * // Get one Sprint
     * const sprint = await prisma.sprint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SprintFindFirstOrThrowArgs>(args?: SelectSubset<T, SprintFindFirstOrThrowArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sprints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sprints
     * const sprints = await prisma.sprint.findMany()
     * 
     * // Get first 10 Sprints
     * const sprints = await prisma.sprint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sprintWithIdOnly = await prisma.sprint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SprintFindManyArgs>(args?: SelectSubset<T, SprintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sprint.
     * @param {SprintCreateArgs} args - Arguments to create a Sprint.
     * @example
     * // Create one Sprint
     * const Sprint = await prisma.sprint.create({
     *   data: {
     *     // ... data to create a Sprint
     *   }
     * })
     * 
     */
    create<T extends SprintCreateArgs>(args: SelectSubset<T, SprintCreateArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sprints.
     * @param {SprintCreateManyArgs} args - Arguments to create many Sprints.
     * @example
     * // Create many Sprints
     * const sprint = await prisma.sprint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SprintCreateManyArgs>(args?: SelectSubset<T, SprintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sprint.
     * @param {SprintDeleteArgs} args - Arguments to delete one Sprint.
     * @example
     * // Delete one Sprint
     * const Sprint = await prisma.sprint.delete({
     *   where: {
     *     // ... filter to delete one Sprint
     *   }
     * })
     * 
     */
    delete<T extends SprintDeleteArgs>(args: SelectSubset<T, SprintDeleteArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sprint.
     * @param {SprintUpdateArgs} args - Arguments to update one Sprint.
     * @example
     * // Update one Sprint
     * const sprint = await prisma.sprint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SprintUpdateArgs>(args: SelectSubset<T, SprintUpdateArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sprints.
     * @param {SprintDeleteManyArgs} args - Arguments to filter Sprints to delete.
     * @example
     * // Delete a few Sprints
     * const { count } = await prisma.sprint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SprintDeleteManyArgs>(args?: SelectSubset<T, SprintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sprints
     * const sprint = await prisma.sprint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SprintUpdateManyArgs>(args: SelectSubset<T, SprintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sprint.
     * @param {SprintUpsertArgs} args - Arguments to update or create a Sprint.
     * @example
     * // Update or create a Sprint
     * const sprint = await prisma.sprint.upsert({
     *   create: {
     *     // ... data to create a Sprint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sprint we want to update
     *   }
     * })
     */
    upsert<T extends SprintUpsertArgs>(args: SelectSubset<T, SprintUpsertArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintCountArgs} args - Arguments to filter Sprints to count.
     * @example
     * // Count the number of Sprints
     * const count = await prisma.sprint.count({
     *   where: {
     *     // ... the filter for the Sprints we want to count
     *   }
     * })
    **/
    count<T extends SprintCountArgs>(
      args?: Subset<T, SprintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SprintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SprintAggregateArgs>(args: Subset<T, SprintAggregateArgs>): Prisma.PrismaPromise<GetSprintAggregateType<T>>

    /**
     * Group by Sprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SprintGroupByArgs} args - Group by arguments.
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
      T extends SprintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SprintGroupByArgs['orderBy'] }
        : { orderBy?: SprintGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SprintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSprintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sprint model
   */
  readonly fields: SprintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sprint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SprintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coordinator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Sprint$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Sprint$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvalHistory<T extends Sprint$approvalHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Sprint$approvalHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sprint model
   */
  interface SprintFieldRefs {
    readonly id: FieldRef<"Sprint", 'String'>
    readonly title: FieldRef<"Sprint", 'String'>
    readonly description: FieldRef<"Sprint", 'String'>
    readonly location: FieldRef<"Sprint", 'String'>
    readonly progressStatus: FieldRef<"Sprint", 'String'>
    readonly governmentAuthorizationStatus: FieldRef<"Sprint", 'String'>
    readonly platformAuthorizationStatus: FieldRef<"Sprint", 'String'>
    readonly coordinatorId: FieldRef<"Sprint", 'String'>
    readonly startDate: FieldRef<"Sprint", 'DateTime'>
    readonly endDate: FieldRef<"Sprint", 'DateTime'>
    readonly progress: FieldRef<"Sprint", 'Int'>
    readonly createdAt: FieldRef<"Sprint", 'DateTime'>
    readonly updatedAt: FieldRef<"Sprint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sprint findUnique
   */
  export type SprintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprint to fetch.
     */
    where: SprintWhereUniqueInput
  }

  /**
   * Sprint findUniqueOrThrow
   */
  export type SprintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprint to fetch.
     */
    where: SprintWhereUniqueInput
  }

  /**
   * Sprint findFirst
   */
  export type SprintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprint to fetch.
     */
    where?: SprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprints to fetch.
     */
    orderBy?: SprintOrderByWithRelationInput | SprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sprints.
     */
    cursor?: SprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sprints.
     */
    distinct?: SprintScalarFieldEnum | SprintScalarFieldEnum[]
  }

  /**
   * Sprint findFirstOrThrow
   */
  export type SprintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprint to fetch.
     */
    where?: SprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprints to fetch.
     */
    orderBy?: SprintOrderByWithRelationInput | SprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sprints.
     */
    cursor?: SprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sprints.
     */
    distinct?: SprintScalarFieldEnum | SprintScalarFieldEnum[]
  }

  /**
   * Sprint findMany
   */
  export type SprintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter, which Sprints to fetch.
     */
    where?: SprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sprints to fetch.
     */
    orderBy?: SprintOrderByWithRelationInput | SprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sprints.
     */
    cursor?: SprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sprints.
     */
    distinct?: SprintScalarFieldEnum | SprintScalarFieldEnum[]
  }

  /**
   * Sprint create
   */
  export type SprintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * The data needed to create a Sprint.
     */
    data: XOR<SprintCreateInput, SprintUncheckedCreateInput>
  }

  /**
   * Sprint createMany
   */
  export type SprintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sprints.
     */
    data: SprintCreateManyInput | SprintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sprint update
   */
  export type SprintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * The data needed to update a Sprint.
     */
    data: XOR<SprintUpdateInput, SprintUncheckedUpdateInput>
    /**
     * Choose, which Sprint to update.
     */
    where: SprintWhereUniqueInput
  }

  /**
   * Sprint updateMany
   */
  export type SprintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sprints.
     */
    data: XOR<SprintUpdateManyMutationInput, SprintUncheckedUpdateManyInput>
    /**
     * Filter which Sprints to update
     */
    where?: SprintWhereInput
    /**
     * Limit how many Sprints to update.
     */
    limit?: number
  }

  /**
   * Sprint upsert
   */
  export type SprintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * The filter to search for the Sprint to update in case it exists.
     */
    where: SprintWhereUniqueInput
    /**
     * In case the Sprint found by the `where` argument doesn't exist, create a new Sprint with this data.
     */
    create: XOR<SprintCreateInput, SprintUncheckedCreateInput>
    /**
     * In case the Sprint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SprintUpdateInput, SprintUncheckedUpdateInput>
  }

  /**
   * Sprint delete
   */
  export type SprintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
    /**
     * Filter which Sprint to delete.
     */
    where: SprintWhereUniqueInput
  }

  /**
   * Sprint deleteMany
   */
  export type SprintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sprints to delete
     */
    where?: SprintWhereInput
    /**
     * Limit how many Sprints to delete.
     */
    limit?: number
  }

  /**
   * Sprint.tasks
   */
  export type Sprint$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Sprint.approvalHistory
   */
  export type Sprint$approvalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalHistory
     */
    select?: ApprovalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalHistory
     */
    omit?: ApprovalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalHistoryInclude<ExtArgs> | null
    where?: ApprovalHistoryWhereInput
    orderBy?: ApprovalHistoryOrderByWithRelationInput | ApprovalHistoryOrderByWithRelationInput[]
    cursor?: ApprovalHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalHistoryScalarFieldEnum | ApprovalHistoryScalarFieldEnum[]
  }

  /**
   * Sprint without action
   */
  export type SprintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sprint
     */
    select?: SprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sprint
     */
    omit?: SprintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SprintInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: string | null
    priority: string | null
    dueDate: Date | null
    assignedTo: string | null
    sprintId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: string | null
    priority: string | null
    dueDate: Date | null
    assignedTo: string | null
    sprintId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    priority: number
    dueDate: number
    assignedTo: number
    sprintId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    assignedTo?: true
    sprintId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    assignedTo?: true
    sprintId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    dueDate?: true
    assignedTo?: true
    sprintId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string | null
    status: string
    priority: string
    dueDate: Date
    assignedTo: string | null
    sprintId: string
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    assignedTo?: boolean
    sprintId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
    comments?: boolean | Task$commentsArgs<ExtArgs>
    activities?: boolean | Task$activitiesArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>



  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    dueDate?: boolean
    assignedTo?: boolean
    sprintId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "priority" | "dueDate" | "assignedTo" | "sprintId" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
    comments?: boolean | Task$commentsArgs<ExtArgs>
    activities?: boolean | Task$activitiesArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      sprint: Prisma.$SprintPayload<ExtArgs>
      comments: Prisma.$TaskCommentPayload<ExtArgs>[]
      activities: Prisma.$TaskActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      status: string
      priority: string
      dueDate: Date
      assignedTo: string | null
      sprintId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sprint<T extends SprintDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SprintDefaultArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Task$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Task$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Task$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Task$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'String'>
    readonly priority: FieldRef<"Task", 'String'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly assignedTo: FieldRef<"Task", 'String'>
    readonly sprintId: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.comments
   */
  export type Task$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    where?: TaskCommentWhereInput
    orderBy?: TaskCommentOrderByWithRelationInput | TaskCommentOrderByWithRelationInput[]
    cursor?: TaskCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskCommentScalarFieldEnum | TaskCommentScalarFieldEnum[]
  }

  /**
   * Task.activities
   */
  export type Task$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    where?: TaskActivityWhereInput
    orderBy?: TaskActivityOrderByWithRelationInput | TaskActivityOrderByWithRelationInput[]
    cursor?: TaskActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskActivityScalarFieldEnum | TaskActivityScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskComment
   */

  export type AggregateTaskComment = {
    _count: TaskCommentCountAggregateOutputType | null
    _min: TaskCommentMinAggregateOutputType | null
    _max: TaskCommentMaxAggregateOutputType | null
  }

  export type TaskCommentMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    userId: string | null
    userName: string | null
    userRole: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCommentMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    userId: string | null
    userName: string | null
    userRole: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCommentCountAggregateOutputType = {
    id: number
    taskId: number
    userId: number
    userName: number
    userRole: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskCommentMinAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    userName?: true
    userRole?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCommentMaxAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    userName?: true
    userRole?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCommentCountAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    userName?: true
    userRole?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskComment to aggregate.
     */
    where?: TaskCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskComments to fetch.
     */
    orderBy?: TaskCommentOrderByWithRelationInput | TaskCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskComments
    **/
    _count?: true | TaskCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskCommentMaxAggregateInputType
  }

  export type GetTaskCommentAggregateType<T extends TaskCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskComment[P]>
      : GetScalarType<T[P], AggregateTaskComment[P]>
  }




  export type TaskCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskCommentWhereInput
    orderBy?: TaskCommentOrderByWithAggregationInput | TaskCommentOrderByWithAggregationInput[]
    by: TaskCommentScalarFieldEnum[] | TaskCommentScalarFieldEnum
    having?: TaskCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCommentCountAggregateInputType | true
    _min?: TaskCommentMinAggregateInputType
    _max?: TaskCommentMaxAggregateInputType
  }

  export type TaskCommentGroupByOutputType = {
    id: string
    taskId: string
    userId: string
    userName: string
    userRole: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: TaskCommentCountAggregateOutputType | null
    _min: TaskCommentMinAggregateOutputType | null
    _max: TaskCommentMaxAggregateOutputType | null
  }

  type GetTaskCommentGroupByPayload<T extends TaskCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskCommentGroupByOutputType[P]>
            : GetScalarType<T[P], TaskCommentGroupByOutputType[P]>
        }
      >
    >


  export type TaskCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    userName?: boolean
    userRole?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskComment"]>



  export type TaskCommentSelectScalar = {
    id?: boolean
    taskId?: boolean
    userId?: boolean
    userName?: boolean
    userRole?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "userId" | "userName" | "userRole" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["taskComment"]>
  export type TaskCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $TaskCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskComment"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      userId: string
      userName: string
      userRole: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["taskComment"]>
    composites: {}
  }

  type TaskCommentGetPayload<S extends boolean | null | undefined | TaskCommentDefaultArgs> = $Result.GetResult<Prisma.$TaskCommentPayload, S>

  type TaskCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCommentCountAggregateInputType | true
    }

  export interface TaskCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskComment'], meta: { name: 'TaskComment' } }
    /**
     * Find zero or one TaskComment that matches the filter.
     * @param {TaskCommentFindUniqueArgs} args - Arguments to find a TaskComment
     * @example
     * // Get one TaskComment
     * const taskComment = await prisma.taskComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskCommentFindUniqueArgs>(args: SelectSubset<T, TaskCommentFindUniqueArgs<ExtArgs>>): Prisma__TaskCommentClient<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskCommentFindUniqueOrThrowArgs} args - Arguments to find a TaskComment
     * @example
     * // Get one TaskComment
     * const taskComment = await prisma.taskComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskCommentClient<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCommentFindFirstArgs} args - Arguments to find a TaskComment
     * @example
     * // Get one TaskComment
     * const taskComment = await prisma.taskComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskCommentFindFirstArgs>(args?: SelectSubset<T, TaskCommentFindFirstArgs<ExtArgs>>): Prisma__TaskCommentClient<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCommentFindFirstOrThrowArgs} args - Arguments to find a TaskComment
     * @example
     * // Get one TaskComment
     * const taskComment = await prisma.taskComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskCommentClient<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskComments
     * const taskComments = await prisma.taskComment.findMany()
     * 
     * // Get first 10 TaskComments
     * const taskComments = await prisma.taskComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskCommentWithIdOnly = await prisma.taskComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskCommentFindManyArgs>(args?: SelectSubset<T, TaskCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskComment.
     * @param {TaskCommentCreateArgs} args - Arguments to create a TaskComment.
     * @example
     * // Create one TaskComment
     * const TaskComment = await prisma.taskComment.create({
     *   data: {
     *     // ... data to create a TaskComment
     *   }
     * })
     * 
     */
    create<T extends TaskCommentCreateArgs>(args: SelectSubset<T, TaskCommentCreateArgs<ExtArgs>>): Prisma__TaskCommentClient<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskComments.
     * @param {TaskCommentCreateManyArgs} args - Arguments to create many TaskComments.
     * @example
     * // Create many TaskComments
     * const taskComment = await prisma.taskComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCommentCreateManyArgs>(args?: SelectSubset<T, TaskCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TaskComment.
     * @param {TaskCommentDeleteArgs} args - Arguments to delete one TaskComment.
     * @example
     * // Delete one TaskComment
     * const TaskComment = await prisma.taskComment.delete({
     *   where: {
     *     // ... filter to delete one TaskComment
     *   }
     * })
     * 
     */
    delete<T extends TaskCommentDeleteArgs>(args: SelectSubset<T, TaskCommentDeleteArgs<ExtArgs>>): Prisma__TaskCommentClient<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskComment.
     * @param {TaskCommentUpdateArgs} args - Arguments to update one TaskComment.
     * @example
     * // Update one TaskComment
     * const taskComment = await prisma.taskComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskCommentUpdateArgs>(args: SelectSubset<T, TaskCommentUpdateArgs<ExtArgs>>): Prisma__TaskCommentClient<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskComments.
     * @param {TaskCommentDeleteManyArgs} args - Arguments to filter TaskComments to delete.
     * @example
     * // Delete a few TaskComments
     * const { count } = await prisma.taskComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskCommentDeleteManyArgs>(args?: SelectSubset<T, TaskCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskComments
     * const taskComment = await prisma.taskComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskCommentUpdateManyArgs>(args: SelectSubset<T, TaskCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskComment.
     * @param {TaskCommentUpsertArgs} args - Arguments to update or create a TaskComment.
     * @example
     * // Update or create a TaskComment
     * const taskComment = await prisma.taskComment.upsert({
     *   create: {
     *     // ... data to create a TaskComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskComment we want to update
     *   }
     * })
     */
    upsert<T extends TaskCommentUpsertArgs>(args: SelectSubset<T, TaskCommentUpsertArgs<ExtArgs>>): Prisma__TaskCommentClient<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCommentCountArgs} args - Arguments to filter TaskComments to count.
     * @example
     * // Count the number of TaskComments
     * const count = await prisma.taskComment.count({
     *   where: {
     *     // ... the filter for the TaskComments we want to count
     *   }
     * })
    **/
    count<T extends TaskCommentCountArgs>(
      args?: Subset<T, TaskCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskCommentAggregateArgs>(args: Subset<T, TaskCommentAggregateArgs>): Prisma.PrismaPromise<GetTaskCommentAggregateType<T>>

    /**
     * Group by TaskComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCommentGroupByArgs} args - Group by arguments.
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
      T extends TaskCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskCommentGroupByArgs['orderBy'] }
        : { orderBy?: TaskCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TaskCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskComment model
   */
  readonly fields: TaskCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskComment model
   */
  interface TaskCommentFieldRefs {
    readonly id: FieldRef<"TaskComment", 'String'>
    readonly taskId: FieldRef<"TaskComment", 'String'>
    readonly userId: FieldRef<"TaskComment", 'String'>
    readonly userName: FieldRef<"TaskComment", 'String'>
    readonly userRole: FieldRef<"TaskComment", 'String'>
    readonly content: FieldRef<"TaskComment", 'String'>
    readonly createdAt: FieldRef<"TaskComment", 'DateTime'>
    readonly updatedAt: FieldRef<"TaskComment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskComment findUnique
   */
  export type TaskCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    /**
     * Filter, which TaskComment to fetch.
     */
    where: TaskCommentWhereUniqueInput
  }

  /**
   * TaskComment findUniqueOrThrow
   */
  export type TaskCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    /**
     * Filter, which TaskComment to fetch.
     */
    where: TaskCommentWhereUniqueInput
  }

  /**
   * TaskComment findFirst
   */
  export type TaskCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    /**
     * Filter, which TaskComment to fetch.
     */
    where?: TaskCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskComments to fetch.
     */
    orderBy?: TaskCommentOrderByWithRelationInput | TaskCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskComments.
     */
    cursor?: TaskCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskComments.
     */
    distinct?: TaskCommentScalarFieldEnum | TaskCommentScalarFieldEnum[]
  }

  /**
   * TaskComment findFirstOrThrow
   */
  export type TaskCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    /**
     * Filter, which TaskComment to fetch.
     */
    where?: TaskCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskComments to fetch.
     */
    orderBy?: TaskCommentOrderByWithRelationInput | TaskCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskComments.
     */
    cursor?: TaskCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskComments.
     */
    distinct?: TaskCommentScalarFieldEnum | TaskCommentScalarFieldEnum[]
  }

  /**
   * TaskComment findMany
   */
  export type TaskCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    /**
     * Filter, which TaskComments to fetch.
     */
    where?: TaskCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskComments to fetch.
     */
    orderBy?: TaskCommentOrderByWithRelationInput | TaskCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskComments.
     */
    cursor?: TaskCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskComments.
     */
    distinct?: TaskCommentScalarFieldEnum | TaskCommentScalarFieldEnum[]
  }

  /**
   * TaskComment create
   */
  export type TaskCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskComment.
     */
    data: XOR<TaskCommentCreateInput, TaskCommentUncheckedCreateInput>
  }

  /**
   * TaskComment createMany
   */
  export type TaskCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskComments.
     */
    data: TaskCommentCreateManyInput | TaskCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskComment update
   */
  export type TaskCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskComment.
     */
    data: XOR<TaskCommentUpdateInput, TaskCommentUncheckedUpdateInput>
    /**
     * Choose, which TaskComment to update.
     */
    where: TaskCommentWhereUniqueInput
  }

  /**
   * TaskComment updateMany
   */
  export type TaskCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskComments.
     */
    data: XOR<TaskCommentUpdateManyMutationInput, TaskCommentUncheckedUpdateManyInput>
    /**
     * Filter which TaskComments to update
     */
    where?: TaskCommentWhereInput
    /**
     * Limit how many TaskComments to update.
     */
    limit?: number
  }

  /**
   * TaskComment upsert
   */
  export type TaskCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskComment to update in case it exists.
     */
    where: TaskCommentWhereUniqueInput
    /**
     * In case the TaskComment found by the `where` argument doesn't exist, create a new TaskComment with this data.
     */
    create: XOR<TaskCommentCreateInput, TaskCommentUncheckedCreateInput>
    /**
     * In case the TaskComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskCommentUpdateInput, TaskCommentUncheckedUpdateInput>
  }

  /**
   * TaskComment delete
   */
  export type TaskCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    /**
     * Filter which TaskComment to delete.
     */
    where: TaskCommentWhereUniqueInput
  }

  /**
   * TaskComment deleteMany
   */
  export type TaskCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskComments to delete
     */
    where?: TaskCommentWhereInput
    /**
     * Limit how many TaskComments to delete.
     */
    limit?: number
  }

  /**
   * TaskComment without action
   */
  export type TaskCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
  }


  /**
   * Model TaskActivity
   */

  export type AggregateTaskActivity = {
    _count: TaskActivityCountAggregateOutputType | null
    _min: TaskActivityMinAggregateOutputType | null
    _max: TaskActivityMaxAggregateOutputType | null
  }

  export type TaskActivityMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    userId: string | null
    userName: string | null
    action: string | null
    fieldName: string | null
    oldValue: string | null
    newValue: string | null
    description: string | null
    createdAt: Date | null
  }

  export type TaskActivityMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    userId: string | null
    userName: string | null
    action: string | null
    fieldName: string | null
    oldValue: string | null
    newValue: string | null
    description: string | null
    createdAt: Date | null
  }

  export type TaskActivityCountAggregateOutputType = {
    id: number
    taskId: number
    userId: number
    userName: number
    action: number
    fieldName: number
    oldValue: number
    newValue: number
    description: number
    createdAt: number
    _all: number
  }


  export type TaskActivityMinAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    userName?: true
    action?: true
    fieldName?: true
    oldValue?: true
    newValue?: true
    description?: true
    createdAt?: true
  }

  export type TaskActivityMaxAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    userName?: true
    action?: true
    fieldName?: true
    oldValue?: true
    newValue?: true
    description?: true
    createdAt?: true
  }

  export type TaskActivityCountAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    userName?: true
    action?: true
    fieldName?: true
    oldValue?: true
    newValue?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type TaskActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskActivity to aggregate.
     */
    where?: TaskActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskActivities to fetch.
     */
    orderBy?: TaskActivityOrderByWithRelationInput | TaskActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskActivities
    **/
    _count?: true | TaskActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskActivityMaxAggregateInputType
  }

  export type GetTaskActivityAggregateType<T extends TaskActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskActivity[P]>
      : GetScalarType<T[P], AggregateTaskActivity[P]>
  }




  export type TaskActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskActivityWhereInput
    orderBy?: TaskActivityOrderByWithAggregationInput | TaskActivityOrderByWithAggregationInput[]
    by: TaskActivityScalarFieldEnum[] | TaskActivityScalarFieldEnum
    having?: TaskActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskActivityCountAggregateInputType | true
    _min?: TaskActivityMinAggregateInputType
    _max?: TaskActivityMaxAggregateInputType
  }

  export type TaskActivityGroupByOutputType = {
    id: string
    taskId: string
    userId: string | null
    userName: string | null
    action: string
    fieldName: string | null
    oldValue: string | null
    newValue: string | null
    description: string
    createdAt: Date
    _count: TaskActivityCountAggregateOutputType | null
    _min: TaskActivityMinAggregateOutputType | null
    _max: TaskActivityMaxAggregateOutputType | null
  }

  type GetTaskActivityGroupByPayload<T extends TaskActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskActivityGroupByOutputType[P]>
            : GetScalarType<T[P], TaskActivityGroupByOutputType[P]>
        }
      >
    >


  export type TaskActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    userName?: boolean
    action?: boolean
    fieldName?: boolean
    oldValue?: boolean
    newValue?: boolean
    description?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskActivity"]>



  export type TaskActivitySelectScalar = {
    id?: boolean
    taskId?: boolean
    userId?: boolean
    userName?: boolean
    action?: boolean
    fieldName?: boolean
    oldValue?: boolean
    newValue?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type TaskActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "userId" | "userName" | "action" | "fieldName" | "oldValue" | "newValue" | "description" | "createdAt", ExtArgs["result"]["taskActivity"]>
  export type TaskActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $TaskActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskActivity"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      userId: string | null
      userName: string | null
      action: string
      fieldName: string | null
      oldValue: string | null
      newValue: string | null
      description: string
      createdAt: Date
    }, ExtArgs["result"]["taskActivity"]>
    composites: {}
  }

  type TaskActivityGetPayload<S extends boolean | null | undefined | TaskActivityDefaultArgs> = $Result.GetResult<Prisma.$TaskActivityPayload, S>

  type TaskActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskActivityCountAggregateInputType | true
    }

  export interface TaskActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskActivity'], meta: { name: 'TaskActivity' } }
    /**
     * Find zero or one TaskActivity that matches the filter.
     * @param {TaskActivityFindUniqueArgs} args - Arguments to find a TaskActivity
     * @example
     * // Get one TaskActivity
     * const taskActivity = await prisma.taskActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskActivityFindUniqueArgs>(args: SelectSubset<T, TaskActivityFindUniqueArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskActivityFindUniqueOrThrowArgs} args - Arguments to find a TaskActivity
     * @example
     * // Get one TaskActivity
     * const taskActivity = await prisma.taskActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityFindFirstArgs} args - Arguments to find a TaskActivity
     * @example
     * // Get one TaskActivity
     * const taskActivity = await prisma.taskActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskActivityFindFirstArgs>(args?: SelectSubset<T, TaskActivityFindFirstArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityFindFirstOrThrowArgs} args - Arguments to find a TaskActivity
     * @example
     * // Get one TaskActivity
     * const taskActivity = await prisma.taskActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskActivities
     * const taskActivities = await prisma.taskActivity.findMany()
     * 
     * // Get first 10 TaskActivities
     * const taskActivities = await prisma.taskActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskActivityWithIdOnly = await prisma.taskActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskActivityFindManyArgs>(args?: SelectSubset<T, TaskActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskActivity.
     * @param {TaskActivityCreateArgs} args - Arguments to create a TaskActivity.
     * @example
     * // Create one TaskActivity
     * const TaskActivity = await prisma.taskActivity.create({
     *   data: {
     *     // ... data to create a TaskActivity
     *   }
     * })
     * 
     */
    create<T extends TaskActivityCreateArgs>(args: SelectSubset<T, TaskActivityCreateArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskActivities.
     * @param {TaskActivityCreateManyArgs} args - Arguments to create many TaskActivities.
     * @example
     * // Create many TaskActivities
     * const taskActivity = await prisma.taskActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskActivityCreateManyArgs>(args?: SelectSubset<T, TaskActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TaskActivity.
     * @param {TaskActivityDeleteArgs} args - Arguments to delete one TaskActivity.
     * @example
     * // Delete one TaskActivity
     * const TaskActivity = await prisma.taskActivity.delete({
     *   where: {
     *     // ... filter to delete one TaskActivity
     *   }
     * })
     * 
     */
    delete<T extends TaskActivityDeleteArgs>(args: SelectSubset<T, TaskActivityDeleteArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskActivity.
     * @param {TaskActivityUpdateArgs} args - Arguments to update one TaskActivity.
     * @example
     * // Update one TaskActivity
     * const taskActivity = await prisma.taskActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskActivityUpdateArgs>(args: SelectSubset<T, TaskActivityUpdateArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskActivities.
     * @param {TaskActivityDeleteManyArgs} args - Arguments to filter TaskActivities to delete.
     * @example
     * // Delete a few TaskActivities
     * const { count } = await prisma.taskActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskActivityDeleteManyArgs>(args?: SelectSubset<T, TaskActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskActivities
     * const taskActivity = await prisma.taskActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskActivityUpdateManyArgs>(args: SelectSubset<T, TaskActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskActivity.
     * @param {TaskActivityUpsertArgs} args - Arguments to update or create a TaskActivity.
     * @example
     * // Update or create a TaskActivity
     * const taskActivity = await prisma.taskActivity.upsert({
     *   create: {
     *     // ... data to create a TaskActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskActivity we want to update
     *   }
     * })
     */
    upsert<T extends TaskActivityUpsertArgs>(args: SelectSubset<T, TaskActivityUpsertArgs<ExtArgs>>): Prisma__TaskActivityClient<$Result.GetResult<Prisma.$TaskActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityCountArgs} args - Arguments to filter TaskActivities to count.
     * @example
     * // Count the number of TaskActivities
     * const count = await prisma.taskActivity.count({
     *   where: {
     *     // ... the filter for the TaskActivities we want to count
     *   }
     * })
    **/
    count<T extends TaskActivityCountArgs>(
      args?: Subset<T, TaskActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskActivityAggregateArgs>(args: Subset<T, TaskActivityAggregateArgs>): Prisma.PrismaPromise<GetTaskActivityAggregateType<T>>

    /**
     * Group by TaskActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskActivityGroupByArgs} args - Group by arguments.
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
      T extends TaskActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskActivityGroupByArgs['orderBy'] }
        : { orderBy?: TaskActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TaskActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskActivity model
   */
  readonly fields: TaskActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskActivity model
   */
  interface TaskActivityFieldRefs {
    readonly id: FieldRef<"TaskActivity", 'String'>
    readonly taskId: FieldRef<"TaskActivity", 'String'>
    readonly userId: FieldRef<"TaskActivity", 'String'>
    readonly userName: FieldRef<"TaskActivity", 'String'>
    readonly action: FieldRef<"TaskActivity", 'String'>
    readonly fieldName: FieldRef<"TaskActivity", 'String'>
    readonly oldValue: FieldRef<"TaskActivity", 'String'>
    readonly newValue: FieldRef<"TaskActivity", 'String'>
    readonly description: FieldRef<"TaskActivity", 'String'>
    readonly createdAt: FieldRef<"TaskActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskActivity findUnique
   */
  export type TaskActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * Filter, which TaskActivity to fetch.
     */
    where: TaskActivityWhereUniqueInput
  }

  /**
   * TaskActivity findUniqueOrThrow
   */
  export type TaskActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * Filter, which TaskActivity to fetch.
     */
    where: TaskActivityWhereUniqueInput
  }

  /**
   * TaskActivity findFirst
   */
  export type TaskActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * Filter, which TaskActivity to fetch.
     */
    where?: TaskActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskActivities to fetch.
     */
    orderBy?: TaskActivityOrderByWithRelationInput | TaskActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskActivities.
     */
    cursor?: TaskActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskActivities.
     */
    distinct?: TaskActivityScalarFieldEnum | TaskActivityScalarFieldEnum[]
  }

  /**
   * TaskActivity findFirstOrThrow
   */
  export type TaskActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * Filter, which TaskActivity to fetch.
     */
    where?: TaskActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskActivities to fetch.
     */
    orderBy?: TaskActivityOrderByWithRelationInput | TaskActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskActivities.
     */
    cursor?: TaskActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskActivities.
     */
    distinct?: TaskActivityScalarFieldEnum | TaskActivityScalarFieldEnum[]
  }

  /**
   * TaskActivity findMany
   */
  export type TaskActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * Filter, which TaskActivities to fetch.
     */
    where?: TaskActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskActivities to fetch.
     */
    orderBy?: TaskActivityOrderByWithRelationInput | TaskActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskActivities.
     */
    cursor?: TaskActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskActivities.
     */
    distinct?: TaskActivityScalarFieldEnum | TaskActivityScalarFieldEnum[]
  }

  /**
   * TaskActivity create
   */
  export type TaskActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskActivity.
     */
    data: XOR<TaskActivityCreateInput, TaskActivityUncheckedCreateInput>
  }

  /**
   * TaskActivity createMany
   */
  export type TaskActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskActivities.
     */
    data: TaskActivityCreateManyInput | TaskActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskActivity update
   */
  export type TaskActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskActivity.
     */
    data: XOR<TaskActivityUpdateInput, TaskActivityUncheckedUpdateInput>
    /**
     * Choose, which TaskActivity to update.
     */
    where: TaskActivityWhereUniqueInput
  }

  /**
   * TaskActivity updateMany
   */
  export type TaskActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskActivities.
     */
    data: XOR<TaskActivityUpdateManyMutationInput, TaskActivityUncheckedUpdateManyInput>
    /**
     * Filter which TaskActivities to update
     */
    where?: TaskActivityWhereInput
    /**
     * Limit how many TaskActivities to update.
     */
    limit?: number
  }

  /**
   * TaskActivity upsert
   */
  export type TaskActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskActivity to update in case it exists.
     */
    where: TaskActivityWhereUniqueInput
    /**
     * In case the TaskActivity found by the `where` argument doesn't exist, create a new TaskActivity with this data.
     */
    create: XOR<TaskActivityCreateInput, TaskActivityUncheckedCreateInput>
    /**
     * In case the TaskActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskActivityUpdateInput, TaskActivityUncheckedUpdateInput>
  }

  /**
   * TaskActivity delete
   */
  export type TaskActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
    /**
     * Filter which TaskActivity to delete.
     */
    where: TaskActivityWhereUniqueInput
  }

  /**
   * TaskActivity deleteMany
   */
  export type TaskActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskActivities to delete
     */
    where?: TaskActivityWhereInput
    /**
     * Limit how many TaskActivities to delete.
     */
    limit?: number
  }

  /**
   * TaskActivity without action
   */
  export type TaskActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskActivity
     */
    select?: TaskActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskActivity
     */
    omit?: TaskActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskActivityInclude<ExtArgs> | null
  }


  /**
   * Model Volunteer
   */

  export type AggregateVolunteer = {
    _count: VolunteerCountAggregateOutputType | null
    _avg: VolunteerAvgAggregateOutputType | null
    _sum: VolunteerSumAggregateOutputType | null
    _min: VolunteerMinAggregateOutputType | null
    _max: VolunteerMaxAggregateOutputType | null
  }

  export type VolunteerAvgAggregateOutputType = {
    reputation: number | null
    completedTasks: number | null
  }

  export type VolunteerSumAggregateOutputType = {
    reputation: number | null
    completedTasks: number | null
  }

  export type VolunteerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    userId: string | null
    skills: string | null
    reputation: number | null
    completedTasks: number | null
    emailVisible: boolean | null
    joinedDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VolunteerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    userId: string | null
    skills: string | null
    reputation: number | null
    completedTasks: number | null
    emailVisible: boolean | null
    joinedDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VolunteerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    userId: number
    skills: number
    reputation: number
    completedTasks: number
    emailVisible: number
    joinedDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VolunteerAvgAggregateInputType = {
    reputation?: true
    completedTasks?: true
  }

  export type VolunteerSumAggregateInputType = {
    reputation?: true
    completedTasks?: true
  }

  export type VolunteerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    userId?: true
    skills?: true
    reputation?: true
    completedTasks?: true
    emailVisible?: true
    joinedDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VolunteerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    userId?: true
    skills?: true
    reputation?: true
    completedTasks?: true
    emailVisible?: true
    joinedDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VolunteerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    userId?: true
    skills?: true
    reputation?: true
    completedTasks?: true
    emailVisible?: true
    joinedDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VolunteerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volunteer to aggregate.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Volunteers
    **/
    _count?: true | VolunteerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VolunteerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VolunteerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolunteerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolunteerMaxAggregateInputType
  }

  export type GetVolunteerAggregateType<T extends VolunteerAggregateArgs> = {
        [P in keyof T & keyof AggregateVolunteer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolunteer[P]>
      : GetScalarType<T[P], AggregateVolunteer[P]>
  }




  export type VolunteerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerWhereInput
    orderBy?: VolunteerOrderByWithAggregationInput | VolunteerOrderByWithAggregationInput[]
    by: VolunteerScalarFieldEnum[] | VolunteerScalarFieldEnum
    having?: VolunteerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolunteerCountAggregateInputType | true
    _avg?: VolunteerAvgAggregateInputType
    _sum?: VolunteerSumAggregateInputType
    _min?: VolunteerMinAggregateInputType
    _max?: VolunteerMaxAggregateInputType
  }

  export type VolunteerGroupByOutputType = {
    id: string
    name: string
    email: string
    userId: string | null
    skills: string | null
    reputation: number
    completedTasks: number
    emailVisible: boolean
    joinedDate: Date
    createdAt: Date
    updatedAt: Date
    _count: VolunteerCountAggregateOutputType | null
    _avg: VolunteerAvgAggregateOutputType | null
    _sum: VolunteerSumAggregateOutputType | null
    _min: VolunteerMinAggregateOutputType | null
    _max: VolunteerMaxAggregateOutputType | null
  }

  type GetVolunteerGroupByPayload<T extends VolunteerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolunteerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolunteerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolunteerGroupByOutputType[P]>
            : GetScalarType<T[P], VolunteerGroupByOutputType[P]>
        }
      >
    >


  export type VolunteerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    userId?: boolean
    skills?: boolean
    reputation?: boolean
    completedTasks?: boolean
    emailVisible?: boolean
    joinedDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Volunteer$userArgs<ExtArgs>
  }, ExtArgs["result"]["volunteer"]>



  export type VolunteerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    userId?: boolean
    skills?: boolean
    reputation?: boolean
    completedTasks?: boolean
    emailVisible?: boolean
    joinedDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VolunteerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "userId" | "skills" | "reputation" | "completedTasks" | "emailVisible" | "joinedDate" | "createdAt" | "updatedAt", ExtArgs["result"]["volunteer"]>
  export type VolunteerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Volunteer$userArgs<ExtArgs>
  }

  export type $VolunteerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Volunteer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      userId: string | null
      skills: string | null
      reputation: number
      completedTasks: number
      emailVisible: boolean
      joinedDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["volunteer"]>
    composites: {}
  }

  type VolunteerGetPayload<S extends boolean | null | undefined | VolunteerDefaultArgs> = $Result.GetResult<Prisma.$VolunteerPayload, S>

  type VolunteerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VolunteerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VolunteerCountAggregateInputType | true
    }

  export interface VolunteerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Volunteer'], meta: { name: 'Volunteer' } }
    /**
     * Find zero or one Volunteer that matches the filter.
     * @param {VolunteerFindUniqueArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VolunteerFindUniqueArgs>(args: SelectSubset<T, VolunteerFindUniqueArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Volunteer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VolunteerFindUniqueOrThrowArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VolunteerFindUniqueOrThrowArgs>(args: SelectSubset<T, VolunteerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volunteer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindFirstArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VolunteerFindFirstArgs>(args?: SelectSubset<T, VolunteerFindFirstArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volunteer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindFirstOrThrowArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VolunteerFindFirstOrThrowArgs>(args?: SelectSubset<T, VolunteerFindFirstOrThrowArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Volunteers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Volunteers
     * const volunteers = await prisma.volunteer.findMany()
     * 
     * // Get first 10 Volunteers
     * const volunteers = await prisma.volunteer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volunteerWithIdOnly = await prisma.volunteer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VolunteerFindManyArgs>(args?: SelectSubset<T, VolunteerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Volunteer.
     * @param {VolunteerCreateArgs} args - Arguments to create a Volunteer.
     * @example
     * // Create one Volunteer
     * const Volunteer = await prisma.volunteer.create({
     *   data: {
     *     // ... data to create a Volunteer
     *   }
     * })
     * 
     */
    create<T extends VolunteerCreateArgs>(args: SelectSubset<T, VolunteerCreateArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Volunteers.
     * @param {VolunteerCreateManyArgs} args - Arguments to create many Volunteers.
     * @example
     * // Create many Volunteers
     * const volunteer = await prisma.volunteer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VolunteerCreateManyArgs>(args?: SelectSubset<T, VolunteerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Volunteer.
     * @param {VolunteerDeleteArgs} args - Arguments to delete one Volunteer.
     * @example
     * // Delete one Volunteer
     * const Volunteer = await prisma.volunteer.delete({
     *   where: {
     *     // ... filter to delete one Volunteer
     *   }
     * })
     * 
     */
    delete<T extends VolunteerDeleteArgs>(args: SelectSubset<T, VolunteerDeleteArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Volunteer.
     * @param {VolunteerUpdateArgs} args - Arguments to update one Volunteer.
     * @example
     * // Update one Volunteer
     * const volunteer = await prisma.volunteer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VolunteerUpdateArgs>(args: SelectSubset<T, VolunteerUpdateArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Volunteers.
     * @param {VolunteerDeleteManyArgs} args - Arguments to filter Volunteers to delete.
     * @example
     * // Delete a few Volunteers
     * const { count } = await prisma.volunteer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VolunteerDeleteManyArgs>(args?: SelectSubset<T, VolunteerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volunteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Volunteers
     * const volunteer = await prisma.volunteer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VolunteerUpdateManyArgs>(args: SelectSubset<T, VolunteerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Volunteer.
     * @param {VolunteerUpsertArgs} args - Arguments to update or create a Volunteer.
     * @example
     * // Update or create a Volunteer
     * const volunteer = await prisma.volunteer.upsert({
     *   create: {
     *     // ... data to create a Volunteer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Volunteer we want to update
     *   }
     * })
     */
    upsert<T extends VolunteerUpsertArgs>(args: SelectSubset<T, VolunteerUpsertArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Volunteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerCountArgs} args - Arguments to filter Volunteers to count.
     * @example
     * // Count the number of Volunteers
     * const count = await prisma.volunteer.count({
     *   where: {
     *     // ... the filter for the Volunteers we want to count
     *   }
     * })
    **/
    count<T extends VolunteerCountArgs>(
      args?: Subset<T, VolunteerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolunteerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Volunteer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VolunteerAggregateArgs>(args: Subset<T, VolunteerAggregateArgs>): Prisma.PrismaPromise<GetVolunteerAggregateType<T>>

    /**
     * Group by Volunteer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerGroupByArgs} args - Group by arguments.
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
      T extends VolunteerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VolunteerGroupByArgs['orderBy'] }
        : { orderBy?: VolunteerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, VolunteerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolunteerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Volunteer model
   */
  readonly fields: VolunteerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Volunteer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VolunteerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Volunteer$userArgs<ExtArgs> = {}>(args?: Subset<T, Volunteer$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Volunteer model
   */
  interface VolunteerFieldRefs {
    readonly id: FieldRef<"Volunteer", 'String'>
    readonly name: FieldRef<"Volunteer", 'String'>
    readonly email: FieldRef<"Volunteer", 'String'>
    readonly userId: FieldRef<"Volunteer", 'String'>
    readonly skills: FieldRef<"Volunteer", 'String'>
    readonly reputation: FieldRef<"Volunteer", 'Int'>
    readonly completedTasks: FieldRef<"Volunteer", 'Int'>
    readonly emailVisible: FieldRef<"Volunteer", 'Boolean'>
    readonly joinedDate: FieldRef<"Volunteer", 'DateTime'>
    readonly createdAt: FieldRef<"Volunteer", 'DateTime'>
    readonly updatedAt: FieldRef<"Volunteer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Volunteer findUnique
   */
  export type VolunteerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer findUniqueOrThrow
   */
  export type VolunteerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer findFirst
   */
  export type VolunteerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volunteers.
     */
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * Volunteer findFirstOrThrow
   */
  export type VolunteerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volunteers.
     */
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * Volunteer findMany
   */
  export type VolunteerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteers to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volunteers.
     */
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * Volunteer create
   */
  export type VolunteerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The data needed to create a Volunteer.
     */
    data: XOR<VolunteerCreateInput, VolunteerUncheckedCreateInput>
  }

  /**
   * Volunteer createMany
   */
  export type VolunteerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Volunteers.
     */
    data: VolunteerCreateManyInput | VolunteerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Volunteer update
   */
  export type VolunteerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The data needed to update a Volunteer.
     */
    data: XOR<VolunteerUpdateInput, VolunteerUncheckedUpdateInput>
    /**
     * Choose, which Volunteer to update.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer updateMany
   */
  export type VolunteerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Volunteers.
     */
    data: XOR<VolunteerUpdateManyMutationInput, VolunteerUncheckedUpdateManyInput>
    /**
     * Filter which Volunteers to update
     */
    where?: VolunteerWhereInput
    /**
     * Limit how many Volunteers to update.
     */
    limit?: number
  }

  /**
   * Volunteer upsert
   */
  export type VolunteerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The filter to search for the Volunteer to update in case it exists.
     */
    where: VolunteerWhereUniqueInput
    /**
     * In case the Volunteer found by the `where` argument doesn't exist, create a new Volunteer with this data.
     */
    create: XOR<VolunteerCreateInput, VolunteerUncheckedCreateInput>
    /**
     * In case the Volunteer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VolunteerUpdateInput, VolunteerUncheckedUpdateInput>
  }

  /**
   * Volunteer delete
   */
  export type VolunteerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter which Volunteer to delete.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer deleteMany
   */
  export type VolunteerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volunteers to delete
     */
    where?: VolunteerWhereInput
    /**
     * Limit how many Volunteers to delete.
     */
    limit?: number
  }

  /**
   * Volunteer.user
   */
  export type Volunteer$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Volunteer without action
   */
  export type VolunteerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
  }


  /**
   * Model ApprovalHistory
   */

  export type AggregateApprovalHistory = {
    _count: ApprovalHistoryCountAggregateOutputType | null
    _min: ApprovalHistoryMinAggregateOutputType | null
    _max: ApprovalHistoryMaxAggregateOutputType | null
  }

  export type ApprovalHistoryMinAggregateOutputType = {
    id: string | null
    sprintId: string | null
    requestedBy: string | null
    status: string | null
    notes: string | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApprovalHistoryMaxAggregateOutputType = {
    id: string | null
    sprintId: string | null
    requestedBy: string | null
    status: string | null
    notes: string | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApprovalHistoryCountAggregateOutputType = {
    id: number
    sprintId: number
    requestedBy: number
    status: number
    notes: number
    approvedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApprovalHistoryMinAggregateInputType = {
    id?: true
    sprintId?: true
    requestedBy?: true
    status?: true
    notes?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApprovalHistoryMaxAggregateInputType = {
    id?: true
    sprintId?: true
    requestedBy?: true
    status?: true
    notes?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApprovalHistoryCountAggregateInputType = {
    id?: true
    sprintId?: true
    requestedBy?: true
    status?: true
    notes?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApprovalHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalHistory to aggregate.
     */
    where?: ApprovalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalHistories to fetch.
     */
    orderBy?: ApprovalHistoryOrderByWithRelationInput | ApprovalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApprovalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApprovalHistories
    **/
    _count?: true | ApprovalHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApprovalHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApprovalHistoryMaxAggregateInputType
  }

  export type GetApprovalHistoryAggregateType<T extends ApprovalHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateApprovalHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApprovalHistory[P]>
      : GetScalarType<T[P], AggregateApprovalHistory[P]>
  }




  export type ApprovalHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalHistoryWhereInput
    orderBy?: ApprovalHistoryOrderByWithAggregationInput | ApprovalHistoryOrderByWithAggregationInput[]
    by: ApprovalHistoryScalarFieldEnum[] | ApprovalHistoryScalarFieldEnum
    having?: ApprovalHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApprovalHistoryCountAggregateInputType | true
    _min?: ApprovalHistoryMinAggregateInputType
    _max?: ApprovalHistoryMaxAggregateInputType
  }

  export type ApprovalHistoryGroupByOutputType = {
    id: string
    sprintId: string
    requestedBy: string
    status: string
    notes: string | null
    approvedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ApprovalHistoryCountAggregateOutputType | null
    _min: ApprovalHistoryMinAggregateOutputType | null
    _max: ApprovalHistoryMaxAggregateOutputType | null
  }

  type GetApprovalHistoryGroupByPayload<T extends ApprovalHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApprovalHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApprovalHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApprovalHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ApprovalHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ApprovalHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sprintId?: boolean
    requestedBy?: boolean
    status?: boolean
    notes?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
    requestedByUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalHistory"]>



  export type ApprovalHistorySelectScalar = {
    id?: boolean
    sprintId?: boolean
    requestedBy?: boolean
    status?: boolean
    notes?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApprovalHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sprintId" | "requestedBy" | "status" | "notes" | "approvedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["approvalHistory"]>
  export type ApprovalHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sprint?: boolean | SprintDefaultArgs<ExtArgs>
    requestedByUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApprovalHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApprovalHistory"
    objects: {
      sprint: Prisma.$SprintPayload<ExtArgs>
      requestedByUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sprintId: string
      requestedBy: string
      status: string
      notes: string | null
      approvedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["approvalHistory"]>
    composites: {}
  }

  type ApprovalHistoryGetPayload<S extends boolean | null | undefined | ApprovalHistoryDefaultArgs> = $Result.GetResult<Prisma.$ApprovalHistoryPayload, S>

  type ApprovalHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApprovalHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApprovalHistoryCountAggregateInputType | true
    }

  export interface ApprovalHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApprovalHistory'], meta: { name: 'ApprovalHistory' } }
    /**
     * Find zero or one ApprovalHistory that matches the filter.
     * @param {ApprovalHistoryFindUniqueArgs} args - Arguments to find a ApprovalHistory
     * @example
     * // Get one ApprovalHistory
     * const approvalHistory = await prisma.approvalHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApprovalHistoryFindUniqueArgs>(args: SelectSubset<T, ApprovalHistoryFindUniqueArgs<ExtArgs>>): Prisma__ApprovalHistoryClient<$Result.GetResult<Prisma.$ApprovalHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApprovalHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApprovalHistoryFindUniqueOrThrowArgs} args - Arguments to find a ApprovalHistory
     * @example
     * // Get one ApprovalHistory
     * const approvalHistory = await prisma.approvalHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApprovalHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ApprovalHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApprovalHistoryClient<$Result.GetResult<Prisma.$ApprovalHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovalHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalHistoryFindFirstArgs} args - Arguments to find a ApprovalHistory
     * @example
     * // Get one ApprovalHistory
     * const approvalHistory = await prisma.approvalHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApprovalHistoryFindFirstArgs>(args?: SelectSubset<T, ApprovalHistoryFindFirstArgs<ExtArgs>>): Prisma__ApprovalHistoryClient<$Result.GetResult<Prisma.$ApprovalHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovalHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalHistoryFindFirstOrThrowArgs} args - Arguments to find a ApprovalHistory
     * @example
     * // Get one ApprovalHistory
     * const approvalHistory = await prisma.approvalHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApprovalHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ApprovalHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApprovalHistoryClient<$Result.GetResult<Prisma.$ApprovalHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApprovalHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApprovalHistories
     * const approvalHistories = await prisma.approvalHistory.findMany()
     * 
     * // Get first 10 ApprovalHistories
     * const approvalHistories = await prisma.approvalHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const approvalHistoryWithIdOnly = await prisma.approvalHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApprovalHistoryFindManyArgs>(args?: SelectSubset<T, ApprovalHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApprovalHistory.
     * @param {ApprovalHistoryCreateArgs} args - Arguments to create a ApprovalHistory.
     * @example
     * // Create one ApprovalHistory
     * const ApprovalHistory = await prisma.approvalHistory.create({
     *   data: {
     *     // ... data to create a ApprovalHistory
     *   }
     * })
     * 
     */
    create<T extends ApprovalHistoryCreateArgs>(args: SelectSubset<T, ApprovalHistoryCreateArgs<ExtArgs>>): Prisma__ApprovalHistoryClient<$Result.GetResult<Prisma.$ApprovalHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApprovalHistories.
     * @param {ApprovalHistoryCreateManyArgs} args - Arguments to create many ApprovalHistories.
     * @example
     * // Create many ApprovalHistories
     * const approvalHistory = await prisma.approvalHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApprovalHistoryCreateManyArgs>(args?: SelectSubset<T, ApprovalHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ApprovalHistory.
     * @param {ApprovalHistoryDeleteArgs} args - Arguments to delete one ApprovalHistory.
     * @example
     * // Delete one ApprovalHistory
     * const ApprovalHistory = await prisma.approvalHistory.delete({
     *   where: {
     *     // ... filter to delete one ApprovalHistory
     *   }
     * })
     * 
     */
    delete<T extends ApprovalHistoryDeleteArgs>(args: SelectSubset<T, ApprovalHistoryDeleteArgs<ExtArgs>>): Prisma__ApprovalHistoryClient<$Result.GetResult<Prisma.$ApprovalHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApprovalHistory.
     * @param {ApprovalHistoryUpdateArgs} args - Arguments to update one ApprovalHistory.
     * @example
     * // Update one ApprovalHistory
     * const approvalHistory = await prisma.approvalHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApprovalHistoryUpdateArgs>(args: SelectSubset<T, ApprovalHistoryUpdateArgs<ExtArgs>>): Prisma__ApprovalHistoryClient<$Result.GetResult<Prisma.$ApprovalHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApprovalHistories.
     * @param {ApprovalHistoryDeleteManyArgs} args - Arguments to filter ApprovalHistories to delete.
     * @example
     * // Delete a few ApprovalHistories
     * const { count } = await prisma.approvalHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApprovalHistoryDeleteManyArgs>(args?: SelectSubset<T, ApprovalHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApprovalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApprovalHistories
     * const approvalHistory = await prisma.approvalHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApprovalHistoryUpdateManyArgs>(args: SelectSubset<T, ApprovalHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApprovalHistory.
     * @param {ApprovalHistoryUpsertArgs} args - Arguments to update or create a ApprovalHistory.
     * @example
     * // Update or create a ApprovalHistory
     * const approvalHistory = await prisma.approvalHistory.upsert({
     *   create: {
     *     // ... data to create a ApprovalHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApprovalHistory we want to update
     *   }
     * })
     */
    upsert<T extends ApprovalHistoryUpsertArgs>(args: SelectSubset<T, ApprovalHistoryUpsertArgs<ExtArgs>>): Prisma__ApprovalHistoryClient<$Result.GetResult<Prisma.$ApprovalHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApprovalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalHistoryCountArgs} args - Arguments to filter ApprovalHistories to count.
     * @example
     * // Count the number of ApprovalHistories
     * const count = await prisma.approvalHistory.count({
     *   where: {
     *     // ... the filter for the ApprovalHistories we want to count
     *   }
     * })
    **/
    count<T extends ApprovalHistoryCountArgs>(
      args?: Subset<T, ApprovalHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApprovalHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApprovalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApprovalHistoryAggregateArgs>(args: Subset<T, ApprovalHistoryAggregateArgs>): Prisma.PrismaPromise<GetApprovalHistoryAggregateType<T>>

    /**
     * Group by ApprovalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalHistoryGroupByArgs} args - Group by arguments.
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
      T extends ApprovalHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApprovalHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ApprovalHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ApprovalHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApprovalHistory model
   */
  readonly fields: ApprovalHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApprovalHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApprovalHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sprint<T extends SprintDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SprintDefaultArgs<ExtArgs>>): Prisma__SprintClient<$Result.GetResult<Prisma.$SprintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requestedByUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApprovalHistory model
   */
  interface ApprovalHistoryFieldRefs {
    readonly id: FieldRef<"ApprovalHistory", 'String'>
    readonly sprintId: FieldRef<"ApprovalHistory", 'String'>
    readonly requestedBy: FieldRef<"ApprovalHistory", 'String'>
    readonly status: FieldRef<"ApprovalHistory", 'String'>
    readonly notes: FieldRef<"ApprovalHistory", 'String'>
    readonly approvedAt: FieldRef<"ApprovalHistory", 'DateTime'>
    readonly createdAt: FieldRef<"ApprovalHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"ApprovalHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApprovalHistory findUnique
   */
  export type ApprovalHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalHistory
     */
    select?: ApprovalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalHistory
     */
    omit?: ApprovalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalHistory to fetch.
     */
    where: ApprovalHistoryWhereUniqueInput
  }

  /**
   * ApprovalHistory findUniqueOrThrow
   */
  export type ApprovalHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalHistory
     */
    select?: ApprovalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalHistory
     */
    omit?: ApprovalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalHistory to fetch.
     */
    where: ApprovalHistoryWhereUniqueInput
  }

  /**
   * ApprovalHistory findFirst
   */
  export type ApprovalHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalHistory
     */
    select?: ApprovalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalHistory
     */
    omit?: ApprovalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalHistory to fetch.
     */
    where?: ApprovalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalHistories to fetch.
     */
    orderBy?: ApprovalHistoryOrderByWithRelationInput | ApprovalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovalHistories.
     */
    cursor?: ApprovalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalHistories.
     */
    distinct?: ApprovalHistoryScalarFieldEnum | ApprovalHistoryScalarFieldEnum[]
  }

  /**
   * ApprovalHistory findFirstOrThrow
   */
  export type ApprovalHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalHistory
     */
    select?: ApprovalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalHistory
     */
    omit?: ApprovalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalHistory to fetch.
     */
    where?: ApprovalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalHistories to fetch.
     */
    orderBy?: ApprovalHistoryOrderByWithRelationInput | ApprovalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovalHistories.
     */
    cursor?: ApprovalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalHistories.
     */
    distinct?: ApprovalHistoryScalarFieldEnum | ApprovalHistoryScalarFieldEnum[]
  }

  /**
   * ApprovalHistory findMany
   */
  export type ApprovalHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalHistory
     */
    select?: ApprovalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalHistory
     */
    omit?: ApprovalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalHistories to fetch.
     */
    where?: ApprovalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalHistories to fetch.
     */
    orderBy?: ApprovalHistoryOrderByWithRelationInput | ApprovalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApprovalHistories.
     */
    cursor?: ApprovalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalHistories.
     */
    distinct?: ApprovalHistoryScalarFieldEnum | ApprovalHistoryScalarFieldEnum[]
  }

  /**
   * ApprovalHistory create
   */
  export type ApprovalHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalHistory
     */
    select?: ApprovalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalHistory
     */
    omit?: ApprovalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ApprovalHistory.
     */
    data: XOR<ApprovalHistoryCreateInput, ApprovalHistoryUncheckedCreateInput>
  }

  /**
   * ApprovalHistory createMany
   */
  export type ApprovalHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApprovalHistories.
     */
    data: ApprovalHistoryCreateManyInput | ApprovalHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApprovalHistory update
   */
  export type ApprovalHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalHistory
     */
    select?: ApprovalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalHistory
     */
    omit?: ApprovalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ApprovalHistory.
     */
    data: XOR<ApprovalHistoryUpdateInput, ApprovalHistoryUncheckedUpdateInput>
    /**
     * Choose, which ApprovalHistory to update.
     */
    where: ApprovalHistoryWhereUniqueInput
  }

  /**
   * ApprovalHistory updateMany
   */
  export type ApprovalHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApprovalHistories.
     */
    data: XOR<ApprovalHistoryUpdateManyMutationInput, ApprovalHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ApprovalHistories to update
     */
    where?: ApprovalHistoryWhereInput
    /**
     * Limit how many ApprovalHistories to update.
     */
    limit?: number
  }

  /**
   * ApprovalHistory upsert
   */
  export type ApprovalHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalHistory
     */
    select?: ApprovalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalHistory
     */
    omit?: ApprovalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ApprovalHistory to update in case it exists.
     */
    where: ApprovalHistoryWhereUniqueInput
    /**
     * In case the ApprovalHistory found by the `where` argument doesn't exist, create a new ApprovalHistory with this data.
     */
    create: XOR<ApprovalHistoryCreateInput, ApprovalHistoryUncheckedCreateInput>
    /**
     * In case the ApprovalHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApprovalHistoryUpdateInput, ApprovalHistoryUncheckedUpdateInput>
  }

  /**
   * ApprovalHistory delete
   */
  export type ApprovalHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalHistory
     */
    select?: ApprovalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalHistory
     */
    omit?: ApprovalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalHistoryInclude<ExtArgs> | null
    /**
     * Filter which ApprovalHistory to delete.
     */
    where: ApprovalHistoryWhereUniqueInput
  }

  /**
   * ApprovalHistory deleteMany
   */
  export type ApprovalHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalHistories to delete
     */
    where?: ApprovalHistoryWhereInput
    /**
     * Limit how many ApprovalHistories to delete.
     */
    limit?: number
  }

  /**
   * ApprovalHistory without action
   */
  export type ApprovalHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalHistory
     */
    select?: ApprovalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalHistory
     */
    omit?: ApprovalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    message: string | null
    relatedTaskId: string | null
    relatedSprintId: string | null
    isRead: boolean | null
    metadata: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    message: string | null
    relatedTaskId: string | null
    relatedSprintId: string | null
    isRead: boolean | null
    metadata: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    message: number
    relatedTaskId: number
    relatedSprintId: number
    isRead: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    relatedTaskId?: true
    relatedSprintId?: true
    isRead?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    relatedTaskId?: true
    relatedSprintId?: true
    isRead?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    relatedTaskId?: true
    relatedSprintId?: true
    isRead?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    type: string
    title: string
    message: string
    relatedTaskId: string | null
    relatedSprintId: string | null
    isRead: boolean
    metadata: string | null
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    relatedTaskId?: boolean
    relatedSprintId?: boolean
    isRead?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    relatedTaskId?: boolean
    relatedSprintId?: boolean
    isRead?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "title" | "message" | "relatedTaskId" | "relatedSprintId" | "isRead" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      title: string
      message: string
      relatedTaskId: string | null
      relatedSprintId: string | null
      isRead: boolean
      metadata: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly relatedTaskId: FieldRef<"Notification", 'String'>
    readonly relatedSprintId: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly metadata: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model TwoFactorAuth
   */

  export type AggregateTwoFactorAuth = {
    _count: TwoFactorAuthCountAggregateOutputType | null
    _min: TwoFactorAuthMinAggregateOutputType | null
    _max: TwoFactorAuthMaxAggregateOutputType | null
  }

  export type TwoFactorAuthMinAggregateOutputType = {
    id: string | null
    userId: string | null
    isEnabled: boolean | null
    totpSecret: string | null
    backupCodes: string | null
    backupCodesUsed: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwoFactorAuthMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    isEnabled: boolean | null
    totpSecret: string | null
    backupCodes: string | null
    backupCodesUsed: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwoFactorAuthCountAggregateOutputType = {
    id: number
    userId: number
    isEnabled: number
    totpSecret: number
    backupCodes: number
    backupCodesUsed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TwoFactorAuthMinAggregateInputType = {
    id?: true
    userId?: true
    isEnabled?: true
    totpSecret?: true
    backupCodes?: true
    backupCodesUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwoFactorAuthMaxAggregateInputType = {
    id?: true
    userId?: true
    isEnabled?: true
    totpSecret?: true
    backupCodes?: true
    backupCodesUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwoFactorAuthCountAggregateInputType = {
    id?: true
    userId?: true
    isEnabled?: true
    totpSecret?: true
    backupCodes?: true
    backupCodesUsed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TwoFactorAuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TwoFactorAuth to aggregate.
     */
    where?: TwoFactorAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorAuths to fetch.
     */
    orderBy?: TwoFactorAuthOrderByWithRelationInput | TwoFactorAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwoFactorAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwoFactorAuths
    **/
    _count?: true | TwoFactorAuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwoFactorAuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwoFactorAuthMaxAggregateInputType
  }

  export type GetTwoFactorAuthAggregateType<T extends TwoFactorAuthAggregateArgs> = {
        [P in keyof T & keyof AggregateTwoFactorAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwoFactorAuth[P]>
      : GetScalarType<T[P], AggregateTwoFactorAuth[P]>
  }




  export type TwoFactorAuthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TwoFactorAuthWhereInput
    orderBy?: TwoFactorAuthOrderByWithAggregationInput | TwoFactorAuthOrderByWithAggregationInput[]
    by: TwoFactorAuthScalarFieldEnum[] | TwoFactorAuthScalarFieldEnum
    having?: TwoFactorAuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwoFactorAuthCountAggregateInputType | true
    _min?: TwoFactorAuthMinAggregateInputType
    _max?: TwoFactorAuthMaxAggregateInputType
  }

  export type TwoFactorAuthGroupByOutputType = {
    id: string
    userId: string
    isEnabled: boolean
    totpSecret: string | null
    backupCodes: string | null
    backupCodesUsed: string | null
    createdAt: Date
    updatedAt: Date
    _count: TwoFactorAuthCountAggregateOutputType | null
    _min: TwoFactorAuthMinAggregateOutputType | null
    _max: TwoFactorAuthMaxAggregateOutputType | null
  }

  type GetTwoFactorAuthGroupByPayload<T extends TwoFactorAuthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TwoFactorAuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwoFactorAuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwoFactorAuthGroupByOutputType[P]>
            : GetScalarType<T[P], TwoFactorAuthGroupByOutputType[P]>
        }
      >
    >


  export type TwoFactorAuthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isEnabled?: boolean
    totpSecret?: boolean
    backupCodes?: boolean
    backupCodesUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["twoFactorAuth"]>



  export type TwoFactorAuthSelectScalar = {
    id?: boolean
    userId?: boolean
    isEnabled?: boolean
    totpSecret?: boolean
    backupCodes?: boolean
    backupCodesUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TwoFactorAuthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "isEnabled" | "totpSecret" | "backupCodes" | "backupCodesUsed" | "createdAt" | "updatedAt", ExtArgs["result"]["twoFactorAuth"]>
  export type TwoFactorAuthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TwoFactorAuthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TwoFactorAuth"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      isEnabled: boolean
      totpSecret: string | null
      backupCodes: string | null
      backupCodesUsed: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["twoFactorAuth"]>
    composites: {}
  }

  type TwoFactorAuthGetPayload<S extends boolean | null | undefined | TwoFactorAuthDefaultArgs> = $Result.GetResult<Prisma.$TwoFactorAuthPayload, S>

  type TwoFactorAuthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TwoFactorAuthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TwoFactorAuthCountAggregateInputType | true
    }

  export interface TwoFactorAuthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TwoFactorAuth'], meta: { name: 'TwoFactorAuth' } }
    /**
     * Find zero or one TwoFactorAuth that matches the filter.
     * @param {TwoFactorAuthFindUniqueArgs} args - Arguments to find a TwoFactorAuth
     * @example
     * // Get one TwoFactorAuth
     * const twoFactorAuth = await prisma.twoFactorAuth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TwoFactorAuthFindUniqueArgs>(args: SelectSubset<T, TwoFactorAuthFindUniqueArgs<ExtArgs>>): Prisma__TwoFactorAuthClient<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TwoFactorAuth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TwoFactorAuthFindUniqueOrThrowArgs} args - Arguments to find a TwoFactorAuth
     * @example
     * // Get one TwoFactorAuth
     * const twoFactorAuth = await prisma.twoFactorAuth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TwoFactorAuthFindUniqueOrThrowArgs>(args: SelectSubset<T, TwoFactorAuthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TwoFactorAuthClient<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TwoFactorAuth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorAuthFindFirstArgs} args - Arguments to find a TwoFactorAuth
     * @example
     * // Get one TwoFactorAuth
     * const twoFactorAuth = await prisma.twoFactorAuth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TwoFactorAuthFindFirstArgs>(args?: SelectSubset<T, TwoFactorAuthFindFirstArgs<ExtArgs>>): Prisma__TwoFactorAuthClient<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TwoFactorAuth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorAuthFindFirstOrThrowArgs} args - Arguments to find a TwoFactorAuth
     * @example
     * // Get one TwoFactorAuth
     * const twoFactorAuth = await prisma.twoFactorAuth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TwoFactorAuthFindFirstOrThrowArgs>(args?: SelectSubset<T, TwoFactorAuthFindFirstOrThrowArgs<ExtArgs>>): Prisma__TwoFactorAuthClient<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TwoFactorAuths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorAuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwoFactorAuths
     * const twoFactorAuths = await prisma.twoFactorAuth.findMany()
     * 
     * // Get first 10 TwoFactorAuths
     * const twoFactorAuths = await prisma.twoFactorAuth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const twoFactorAuthWithIdOnly = await prisma.twoFactorAuth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TwoFactorAuthFindManyArgs>(args?: SelectSubset<T, TwoFactorAuthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TwoFactorAuth.
     * @param {TwoFactorAuthCreateArgs} args - Arguments to create a TwoFactorAuth.
     * @example
     * // Create one TwoFactorAuth
     * const TwoFactorAuth = await prisma.twoFactorAuth.create({
     *   data: {
     *     // ... data to create a TwoFactorAuth
     *   }
     * })
     * 
     */
    create<T extends TwoFactorAuthCreateArgs>(args: SelectSubset<T, TwoFactorAuthCreateArgs<ExtArgs>>): Prisma__TwoFactorAuthClient<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TwoFactorAuths.
     * @param {TwoFactorAuthCreateManyArgs} args - Arguments to create many TwoFactorAuths.
     * @example
     * // Create many TwoFactorAuths
     * const twoFactorAuth = await prisma.twoFactorAuth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TwoFactorAuthCreateManyArgs>(args?: SelectSubset<T, TwoFactorAuthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TwoFactorAuth.
     * @param {TwoFactorAuthDeleteArgs} args - Arguments to delete one TwoFactorAuth.
     * @example
     * // Delete one TwoFactorAuth
     * const TwoFactorAuth = await prisma.twoFactorAuth.delete({
     *   where: {
     *     // ... filter to delete one TwoFactorAuth
     *   }
     * })
     * 
     */
    delete<T extends TwoFactorAuthDeleteArgs>(args: SelectSubset<T, TwoFactorAuthDeleteArgs<ExtArgs>>): Prisma__TwoFactorAuthClient<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TwoFactorAuth.
     * @param {TwoFactorAuthUpdateArgs} args - Arguments to update one TwoFactorAuth.
     * @example
     * // Update one TwoFactorAuth
     * const twoFactorAuth = await prisma.twoFactorAuth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TwoFactorAuthUpdateArgs>(args: SelectSubset<T, TwoFactorAuthUpdateArgs<ExtArgs>>): Prisma__TwoFactorAuthClient<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TwoFactorAuths.
     * @param {TwoFactorAuthDeleteManyArgs} args - Arguments to filter TwoFactorAuths to delete.
     * @example
     * // Delete a few TwoFactorAuths
     * const { count } = await prisma.twoFactorAuth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TwoFactorAuthDeleteManyArgs>(args?: SelectSubset<T, TwoFactorAuthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwoFactorAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorAuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwoFactorAuths
     * const twoFactorAuth = await prisma.twoFactorAuth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TwoFactorAuthUpdateManyArgs>(args: SelectSubset<T, TwoFactorAuthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TwoFactorAuth.
     * @param {TwoFactorAuthUpsertArgs} args - Arguments to update or create a TwoFactorAuth.
     * @example
     * // Update or create a TwoFactorAuth
     * const twoFactorAuth = await prisma.twoFactorAuth.upsert({
     *   create: {
     *     // ... data to create a TwoFactorAuth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwoFactorAuth we want to update
     *   }
     * })
     */
    upsert<T extends TwoFactorAuthUpsertArgs>(args: SelectSubset<T, TwoFactorAuthUpsertArgs<ExtArgs>>): Prisma__TwoFactorAuthClient<$Result.GetResult<Prisma.$TwoFactorAuthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TwoFactorAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorAuthCountArgs} args - Arguments to filter TwoFactorAuths to count.
     * @example
     * // Count the number of TwoFactorAuths
     * const count = await prisma.twoFactorAuth.count({
     *   where: {
     *     // ... the filter for the TwoFactorAuths we want to count
     *   }
     * })
    **/
    count<T extends TwoFactorAuthCountArgs>(
      args?: Subset<T, TwoFactorAuthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwoFactorAuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwoFactorAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorAuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TwoFactorAuthAggregateArgs>(args: Subset<T, TwoFactorAuthAggregateArgs>): Prisma.PrismaPromise<GetTwoFactorAuthAggregateType<T>>

    /**
     * Group by TwoFactorAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorAuthGroupByArgs} args - Group by arguments.
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
      T extends TwoFactorAuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwoFactorAuthGroupByArgs['orderBy'] }
        : { orderBy?: TwoFactorAuthGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TwoFactorAuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwoFactorAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TwoFactorAuth model
   */
  readonly fields: TwoFactorAuthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TwoFactorAuth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TwoFactorAuthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TwoFactorAuth model
   */
  interface TwoFactorAuthFieldRefs {
    readonly id: FieldRef<"TwoFactorAuth", 'String'>
    readonly userId: FieldRef<"TwoFactorAuth", 'String'>
    readonly isEnabled: FieldRef<"TwoFactorAuth", 'Boolean'>
    readonly totpSecret: FieldRef<"TwoFactorAuth", 'String'>
    readonly backupCodes: FieldRef<"TwoFactorAuth", 'String'>
    readonly backupCodesUsed: FieldRef<"TwoFactorAuth", 'String'>
    readonly createdAt: FieldRef<"TwoFactorAuth", 'DateTime'>
    readonly updatedAt: FieldRef<"TwoFactorAuth", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TwoFactorAuth findUnique
   */
  export type TwoFactorAuthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorAuth to fetch.
     */
    where: TwoFactorAuthWhereUniqueInput
  }

  /**
   * TwoFactorAuth findUniqueOrThrow
   */
  export type TwoFactorAuthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorAuth to fetch.
     */
    where: TwoFactorAuthWhereUniqueInput
  }

  /**
   * TwoFactorAuth findFirst
   */
  export type TwoFactorAuthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorAuth to fetch.
     */
    where?: TwoFactorAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorAuths to fetch.
     */
    orderBy?: TwoFactorAuthOrderByWithRelationInput | TwoFactorAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwoFactorAuths.
     */
    cursor?: TwoFactorAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwoFactorAuths.
     */
    distinct?: TwoFactorAuthScalarFieldEnum | TwoFactorAuthScalarFieldEnum[]
  }

  /**
   * TwoFactorAuth findFirstOrThrow
   */
  export type TwoFactorAuthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorAuth to fetch.
     */
    where?: TwoFactorAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorAuths to fetch.
     */
    orderBy?: TwoFactorAuthOrderByWithRelationInput | TwoFactorAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwoFactorAuths.
     */
    cursor?: TwoFactorAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwoFactorAuths.
     */
    distinct?: TwoFactorAuthScalarFieldEnum | TwoFactorAuthScalarFieldEnum[]
  }

  /**
   * TwoFactorAuth findMany
   */
  export type TwoFactorAuthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorAuths to fetch.
     */
    where?: TwoFactorAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorAuths to fetch.
     */
    orderBy?: TwoFactorAuthOrderByWithRelationInput | TwoFactorAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwoFactorAuths.
     */
    cursor?: TwoFactorAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwoFactorAuths.
     */
    distinct?: TwoFactorAuthScalarFieldEnum | TwoFactorAuthScalarFieldEnum[]
  }

  /**
   * TwoFactorAuth create
   */
  export type TwoFactorAuthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    /**
     * The data needed to create a TwoFactorAuth.
     */
    data: XOR<TwoFactorAuthCreateInput, TwoFactorAuthUncheckedCreateInput>
  }

  /**
   * TwoFactorAuth createMany
   */
  export type TwoFactorAuthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TwoFactorAuths.
     */
    data: TwoFactorAuthCreateManyInput | TwoFactorAuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TwoFactorAuth update
   */
  export type TwoFactorAuthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    /**
     * The data needed to update a TwoFactorAuth.
     */
    data: XOR<TwoFactorAuthUpdateInput, TwoFactorAuthUncheckedUpdateInput>
    /**
     * Choose, which TwoFactorAuth to update.
     */
    where: TwoFactorAuthWhereUniqueInput
  }

  /**
   * TwoFactorAuth updateMany
   */
  export type TwoFactorAuthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TwoFactorAuths.
     */
    data: XOR<TwoFactorAuthUpdateManyMutationInput, TwoFactorAuthUncheckedUpdateManyInput>
    /**
     * Filter which TwoFactorAuths to update
     */
    where?: TwoFactorAuthWhereInput
    /**
     * Limit how many TwoFactorAuths to update.
     */
    limit?: number
  }

  /**
   * TwoFactorAuth upsert
   */
  export type TwoFactorAuthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    /**
     * The filter to search for the TwoFactorAuth to update in case it exists.
     */
    where: TwoFactorAuthWhereUniqueInput
    /**
     * In case the TwoFactorAuth found by the `where` argument doesn't exist, create a new TwoFactorAuth with this data.
     */
    create: XOR<TwoFactorAuthCreateInput, TwoFactorAuthUncheckedCreateInput>
    /**
     * In case the TwoFactorAuth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwoFactorAuthUpdateInput, TwoFactorAuthUncheckedUpdateInput>
  }

  /**
   * TwoFactorAuth delete
   */
  export type TwoFactorAuthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
    /**
     * Filter which TwoFactorAuth to delete.
     */
    where: TwoFactorAuthWhereUniqueInput
  }

  /**
   * TwoFactorAuth deleteMany
   */
  export type TwoFactorAuthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TwoFactorAuths to delete
     */
    where?: TwoFactorAuthWhereInput
    /**
     * Limit how many TwoFactorAuths to delete.
     */
    limit?: number
  }

  /**
   * TwoFactorAuth without action
   */
  export type TwoFactorAuthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorAuth
     */
    select?: TwoFactorAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwoFactorAuth
     */
    omit?: TwoFactorAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorAuthInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    accountStatus: 'accountStatus',
    deletedAt: 'deletedAt',
    emailVerified: 'emailVerified',
    verificationToken: 'verificationToken',
    verificationTokenExpiresAt: 'verificationTokenExpiresAt',
    resetToken: 'resetToken',
    resetTokenExpiresAt: 'resetTokenExpiresAt',
    emailChangeToken: 'emailChangeToken',
    emailChangeTokenExpiresAt: 'emailChangeTokenExpiresAt',
    pendingEmail: 'pendingEmail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    deviceInfo: 'deviceInfo',
    ipAddress: 'ipAddress',
    location: 'location',
    lastActivityAt: 'lastActivityAt',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SprintScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    location: 'location',
    progressStatus: 'progressStatus',
    governmentAuthorizationStatus: 'governmentAuthorizationStatus',
    platformAuthorizationStatus: 'platformAuthorizationStatus',
    coordinatorId: 'coordinatorId',
    startDate: 'startDate',
    endDate: 'endDate',
    progress: 'progress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SprintScalarFieldEnum = (typeof SprintScalarFieldEnum)[keyof typeof SprintScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    dueDate: 'dueDate',
    assignedTo: 'assignedTo',
    sprintId: 'sprintId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskCommentScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    userId: 'userId',
    userName: 'userName',
    userRole: 'userRole',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskCommentScalarFieldEnum = (typeof TaskCommentScalarFieldEnum)[keyof typeof TaskCommentScalarFieldEnum]


  export const TaskActivityScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    userId: 'userId',
    userName: 'userName',
    action: 'action',
    fieldName: 'fieldName',
    oldValue: 'oldValue',
    newValue: 'newValue',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type TaskActivityScalarFieldEnum = (typeof TaskActivityScalarFieldEnum)[keyof typeof TaskActivityScalarFieldEnum]


  export const VolunteerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    userId: 'userId',
    skills: 'skills',
    reputation: 'reputation',
    completedTasks: 'completedTasks',
    emailVisible: 'emailVisible',
    joinedDate: 'joinedDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VolunteerScalarFieldEnum = (typeof VolunteerScalarFieldEnum)[keyof typeof VolunteerScalarFieldEnum]


  export const ApprovalHistoryScalarFieldEnum: {
    id: 'id',
    sprintId: 'sprintId',
    requestedBy: 'requestedBy',
    status: 'status',
    notes: 'notes',
    approvedAt: 'approvedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApprovalHistoryScalarFieldEnum = (typeof ApprovalHistoryScalarFieldEnum)[keyof typeof ApprovalHistoryScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    message: 'message',
    relatedTaskId: 'relatedTaskId',
    relatedSprintId: 'relatedSprintId',
    isRead: 'isRead',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const TwoFactorAuthScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    isEnabled: 'isEnabled',
    totpSecret: 'totpSecret',
    backupCodes: 'backupCodes',
    backupCodesUsed: 'backupCodesUsed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TwoFactorAuthScalarFieldEnum = (typeof TwoFactorAuthScalarFieldEnum)[keyof typeof TwoFactorAuthScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    verificationToken: 'verificationToken',
    resetToken: 'resetToken',
    emailChangeToken: 'emailChangeToken',
    pendingEmail: 'pendingEmail'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    deviceInfo: 'deviceInfo',
    ipAddress: 'ipAddress',
    location: 'location'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const SprintOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    location: 'location',
    progressStatus: 'progressStatus',
    governmentAuthorizationStatus: 'governmentAuthorizationStatus',
    platformAuthorizationStatus: 'platformAuthorizationStatus',
    coordinatorId: 'coordinatorId'
  };

  export type SprintOrderByRelevanceFieldEnum = (typeof SprintOrderByRelevanceFieldEnum)[keyof typeof SprintOrderByRelevanceFieldEnum]


  export const TaskOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    assignedTo: 'assignedTo',
    sprintId: 'sprintId'
  };

  export type TaskOrderByRelevanceFieldEnum = (typeof TaskOrderByRelevanceFieldEnum)[keyof typeof TaskOrderByRelevanceFieldEnum]


  export const TaskCommentOrderByRelevanceFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    userId: 'userId',
    userName: 'userName',
    userRole: 'userRole',
    content: 'content'
  };

  export type TaskCommentOrderByRelevanceFieldEnum = (typeof TaskCommentOrderByRelevanceFieldEnum)[keyof typeof TaskCommentOrderByRelevanceFieldEnum]


  export const TaskActivityOrderByRelevanceFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    userId: 'userId',
    userName: 'userName',
    action: 'action',
    fieldName: 'fieldName',
    oldValue: 'oldValue',
    newValue: 'newValue',
    description: 'description'
  };

  export type TaskActivityOrderByRelevanceFieldEnum = (typeof TaskActivityOrderByRelevanceFieldEnum)[keyof typeof TaskActivityOrderByRelevanceFieldEnum]


  export const VolunteerOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    userId: 'userId',
    skills: 'skills'
  };

  export type VolunteerOrderByRelevanceFieldEnum = (typeof VolunteerOrderByRelevanceFieldEnum)[keyof typeof VolunteerOrderByRelevanceFieldEnum]


  export const ApprovalHistoryOrderByRelevanceFieldEnum: {
    id: 'id',
    sprintId: 'sprintId',
    requestedBy: 'requestedBy',
    status: 'status',
    notes: 'notes'
  };

  export type ApprovalHistoryOrderByRelevanceFieldEnum = (typeof ApprovalHistoryOrderByRelevanceFieldEnum)[keyof typeof ApprovalHistoryOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    message: 'message',
    relatedTaskId: 'relatedTaskId',
    relatedSprintId: 'relatedSprintId',
    metadata: 'metadata'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  export const TwoFactorAuthOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    totpSecret: 'totpSecret',
    backupCodes: 'backupCodes',
    backupCodesUsed: 'backupCodesUsed'
  };

  export type TwoFactorAuthOrderByRelevanceFieldEnum = (typeof TwoFactorAuthOrderByRelevanceFieldEnum)[keyof typeof TwoFactorAuthOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'AccountStatus'
   */
  export type EnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    accountStatus?: EnumAccountStatusFilter<"User"> | $Enums.AccountStatus
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    verificationToken?: StringNullableFilter<"User"> | string | null
    verificationTokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    emailChangeToken?: StringNullableFilter<"User"> | string | null
    emailChangeTokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    pendingEmail?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sprints?: SprintListRelationFilter
    sessions?: SessionListRelationFilter
    approvals?: ApprovalHistoryListRelationFilter
    notifications?: NotificationListRelationFilter
    volunteer?: XOR<VolunteerNullableScalarRelationFilter, VolunteerWhereInput> | null
    twoFactorAuth?: XOR<TwoFactorAuthNullableScalarRelationFilter, TwoFactorAuthWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    accountStatus?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationTokenExpiresAt?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiresAt?: SortOrderInput | SortOrder
    emailChangeToken?: SortOrderInput | SortOrder
    emailChangeTokenExpiresAt?: SortOrderInput | SortOrder
    pendingEmail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sprints?: SprintOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    approvals?: ApprovalHistoryOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    volunteer?: VolunteerOrderByWithRelationInput
    twoFactorAuth?: TwoFactorAuthOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    verificationToken?: string
    resetToken?: string
    emailChangeToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    accountStatus?: EnumAccountStatusFilter<"User"> | $Enums.AccountStatus
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    verificationTokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    resetTokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    emailChangeTokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    pendingEmail?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sprints?: SprintListRelationFilter
    sessions?: SessionListRelationFilter
    approvals?: ApprovalHistoryListRelationFilter
    notifications?: NotificationListRelationFilter
    volunteer?: XOR<VolunteerNullableScalarRelationFilter, VolunteerWhereInput> | null
    twoFactorAuth?: XOR<TwoFactorAuthNullableScalarRelationFilter, TwoFactorAuthWhereInput> | null
  }, "id" | "email" | "verificationToken" | "resetToken" | "emailChangeToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    accountStatus?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationTokenExpiresAt?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiresAt?: SortOrderInput | SortOrder
    emailChangeToken?: SortOrderInput | SortOrder
    emailChangeTokenExpiresAt?: SortOrderInput | SortOrder
    pendingEmail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    accountStatus?: EnumAccountStatusWithAggregatesFilter<"User"> | $Enums.AccountStatus
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    verificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    verificationTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    emailChangeToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailChangeTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    pendingEmail?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    deviceInfo?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    location?: StringNullableFilter<"Session"> | string | null
    lastActivityAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceInfo?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    lastActivityAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    deviceInfo?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    location?: StringNullableFilter<"Session"> | string | null
    lastActivityAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceInfo?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    lastActivityAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    deviceInfo?: StringNullableWithAggregatesFilter<"Session"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    location?: StringNullableWithAggregatesFilter<"Session"> | string | null
    lastActivityAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type SprintWhereInput = {
    AND?: SprintWhereInput | SprintWhereInput[]
    OR?: SprintWhereInput[]
    NOT?: SprintWhereInput | SprintWhereInput[]
    id?: StringFilter<"Sprint"> | string
    title?: StringFilter<"Sprint"> | string
    description?: StringNullableFilter<"Sprint"> | string | null
    location?: StringFilter<"Sprint"> | string
    progressStatus?: StringFilter<"Sprint"> | string
    governmentAuthorizationStatus?: StringFilter<"Sprint"> | string
    platformAuthorizationStatus?: StringFilter<"Sprint"> | string
    coordinatorId?: StringFilter<"Sprint"> | string
    startDate?: DateTimeFilter<"Sprint"> | Date | string
    endDate?: DateTimeFilter<"Sprint"> | Date | string
    progress?: IntFilter<"Sprint"> | number
    createdAt?: DateTimeFilter<"Sprint"> | Date | string
    updatedAt?: DateTimeFilter<"Sprint"> | Date | string
    coordinator?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
    approvalHistory?: ApprovalHistoryListRelationFilter
  }

  export type SprintOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrder
    progressStatus?: SortOrder
    governmentAuthorizationStatus?: SortOrder
    platformAuthorizationStatus?: SortOrder
    coordinatorId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    coordinator?: UserOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
    approvalHistory?: ApprovalHistoryOrderByRelationAggregateInput
    _relevance?: SprintOrderByRelevanceInput
  }

  export type SprintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SprintWhereInput | SprintWhereInput[]
    OR?: SprintWhereInput[]
    NOT?: SprintWhereInput | SprintWhereInput[]
    title?: StringFilter<"Sprint"> | string
    description?: StringNullableFilter<"Sprint"> | string | null
    location?: StringFilter<"Sprint"> | string
    progressStatus?: StringFilter<"Sprint"> | string
    governmentAuthorizationStatus?: StringFilter<"Sprint"> | string
    platformAuthorizationStatus?: StringFilter<"Sprint"> | string
    coordinatorId?: StringFilter<"Sprint"> | string
    startDate?: DateTimeFilter<"Sprint"> | Date | string
    endDate?: DateTimeFilter<"Sprint"> | Date | string
    progress?: IntFilter<"Sprint"> | number
    createdAt?: DateTimeFilter<"Sprint"> | Date | string
    updatedAt?: DateTimeFilter<"Sprint"> | Date | string
    coordinator?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
    approvalHistory?: ApprovalHistoryListRelationFilter
  }, "id">

  export type SprintOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrder
    progressStatus?: SortOrder
    governmentAuthorizationStatus?: SortOrder
    platformAuthorizationStatus?: SortOrder
    coordinatorId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SprintCountOrderByAggregateInput
    _avg?: SprintAvgOrderByAggregateInput
    _max?: SprintMaxOrderByAggregateInput
    _min?: SprintMinOrderByAggregateInput
    _sum?: SprintSumOrderByAggregateInput
  }

  export type SprintScalarWhereWithAggregatesInput = {
    AND?: SprintScalarWhereWithAggregatesInput | SprintScalarWhereWithAggregatesInput[]
    OR?: SprintScalarWhereWithAggregatesInput[]
    NOT?: SprintScalarWhereWithAggregatesInput | SprintScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sprint"> | string
    title?: StringWithAggregatesFilter<"Sprint"> | string
    description?: StringNullableWithAggregatesFilter<"Sprint"> | string | null
    location?: StringWithAggregatesFilter<"Sprint"> | string
    progressStatus?: StringWithAggregatesFilter<"Sprint"> | string
    governmentAuthorizationStatus?: StringWithAggregatesFilter<"Sprint"> | string
    platformAuthorizationStatus?: StringWithAggregatesFilter<"Sprint"> | string
    coordinatorId?: StringWithAggregatesFilter<"Sprint"> | string
    startDate?: DateTimeWithAggregatesFilter<"Sprint"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Sprint"> | Date | string
    progress?: IntWithAggregatesFilter<"Sprint"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Sprint"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sprint"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: StringFilter<"Task"> | string
    priority?: StringFilter<"Task"> | string
    dueDate?: DateTimeFilter<"Task"> | Date | string
    assignedTo?: StringNullableFilter<"Task"> | string | null
    sprintId?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    sprint?: XOR<SprintScalarRelationFilter, SprintWhereInput>
    comments?: TaskCommentListRelationFilter
    activities?: TaskActivityListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    sprintId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sprint?: SprintOrderByWithRelationInput
    comments?: TaskCommentOrderByRelationAggregateInput
    activities?: TaskActivityOrderByRelationAggregateInput
    _relevance?: TaskOrderByRelevanceInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: StringFilter<"Task"> | string
    priority?: StringFilter<"Task"> | string
    dueDate?: DateTimeFilter<"Task"> | Date | string
    assignedTo?: StringNullableFilter<"Task"> | string | null
    sprintId?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    sprint?: XOR<SprintScalarRelationFilter, SprintWhereInput>
    comments?: TaskCommentListRelationFilter
    activities?: TaskActivityListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    sprintId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    status?: StringWithAggregatesFilter<"Task"> | string
    priority?: StringWithAggregatesFilter<"Task"> | string
    dueDate?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    assignedTo?: StringNullableWithAggregatesFilter<"Task"> | string | null
    sprintId?: StringWithAggregatesFilter<"Task"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type TaskCommentWhereInput = {
    AND?: TaskCommentWhereInput | TaskCommentWhereInput[]
    OR?: TaskCommentWhereInput[]
    NOT?: TaskCommentWhereInput | TaskCommentWhereInput[]
    id?: StringFilter<"TaskComment"> | string
    taskId?: StringFilter<"TaskComment"> | string
    userId?: StringFilter<"TaskComment"> | string
    userName?: StringFilter<"TaskComment"> | string
    userRole?: StringFilter<"TaskComment"> | string
    content?: StringFilter<"TaskComment"> | string
    createdAt?: DateTimeFilter<"TaskComment"> | Date | string
    updatedAt?: DateTimeFilter<"TaskComment"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type TaskCommentOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userRole?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    _relevance?: TaskCommentOrderByRelevanceInput
  }

  export type TaskCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskCommentWhereInput | TaskCommentWhereInput[]
    OR?: TaskCommentWhereInput[]
    NOT?: TaskCommentWhereInput | TaskCommentWhereInput[]
    taskId?: StringFilter<"TaskComment"> | string
    userId?: StringFilter<"TaskComment"> | string
    userName?: StringFilter<"TaskComment"> | string
    userRole?: StringFilter<"TaskComment"> | string
    content?: StringFilter<"TaskComment"> | string
    createdAt?: DateTimeFilter<"TaskComment"> | Date | string
    updatedAt?: DateTimeFilter<"TaskComment"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type TaskCommentOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userRole?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCommentCountOrderByAggregateInput
    _max?: TaskCommentMaxOrderByAggregateInput
    _min?: TaskCommentMinOrderByAggregateInput
  }

  export type TaskCommentScalarWhereWithAggregatesInput = {
    AND?: TaskCommentScalarWhereWithAggregatesInput | TaskCommentScalarWhereWithAggregatesInput[]
    OR?: TaskCommentScalarWhereWithAggregatesInput[]
    NOT?: TaskCommentScalarWhereWithAggregatesInput | TaskCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskComment"> | string
    taskId?: StringWithAggregatesFilter<"TaskComment"> | string
    userId?: StringWithAggregatesFilter<"TaskComment"> | string
    userName?: StringWithAggregatesFilter<"TaskComment"> | string
    userRole?: StringWithAggregatesFilter<"TaskComment"> | string
    content?: StringWithAggregatesFilter<"TaskComment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TaskComment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TaskComment"> | Date | string
  }

  export type TaskActivityWhereInput = {
    AND?: TaskActivityWhereInput | TaskActivityWhereInput[]
    OR?: TaskActivityWhereInput[]
    NOT?: TaskActivityWhereInput | TaskActivityWhereInput[]
    id?: StringFilter<"TaskActivity"> | string
    taskId?: StringFilter<"TaskActivity"> | string
    userId?: StringNullableFilter<"TaskActivity"> | string | null
    userName?: StringNullableFilter<"TaskActivity"> | string | null
    action?: StringFilter<"TaskActivity"> | string
    fieldName?: StringNullableFilter<"TaskActivity"> | string | null
    oldValue?: StringNullableFilter<"TaskActivity"> | string | null
    newValue?: StringNullableFilter<"TaskActivity"> | string | null
    description?: StringFilter<"TaskActivity"> | string
    createdAt?: DateTimeFilter<"TaskActivity"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type TaskActivityOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    action?: SortOrder
    fieldName?: SortOrderInput | SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    _relevance?: TaskActivityOrderByRelevanceInput
  }

  export type TaskActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskActivityWhereInput | TaskActivityWhereInput[]
    OR?: TaskActivityWhereInput[]
    NOT?: TaskActivityWhereInput | TaskActivityWhereInput[]
    taskId?: StringFilter<"TaskActivity"> | string
    userId?: StringNullableFilter<"TaskActivity"> | string | null
    userName?: StringNullableFilter<"TaskActivity"> | string | null
    action?: StringFilter<"TaskActivity"> | string
    fieldName?: StringNullableFilter<"TaskActivity"> | string | null
    oldValue?: StringNullableFilter<"TaskActivity"> | string | null
    newValue?: StringNullableFilter<"TaskActivity"> | string | null
    description?: StringFilter<"TaskActivity"> | string
    createdAt?: DateTimeFilter<"TaskActivity"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type TaskActivityOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    action?: SortOrder
    fieldName?: SortOrderInput | SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: TaskActivityCountOrderByAggregateInput
    _max?: TaskActivityMaxOrderByAggregateInput
    _min?: TaskActivityMinOrderByAggregateInput
  }

  export type TaskActivityScalarWhereWithAggregatesInput = {
    AND?: TaskActivityScalarWhereWithAggregatesInput | TaskActivityScalarWhereWithAggregatesInput[]
    OR?: TaskActivityScalarWhereWithAggregatesInput[]
    NOT?: TaskActivityScalarWhereWithAggregatesInput | TaskActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskActivity"> | string
    taskId?: StringWithAggregatesFilter<"TaskActivity"> | string
    userId?: StringNullableWithAggregatesFilter<"TaskActivity"> | string | null
    userName?: StringNullableWithAggregatesFilter<"TaskActivity"> | string | null
    action?: StringWithAggregatesFilter<"TaskActivity"> | string
    fieldName?: StringNullableWithAggregatesFilter<"TaskActivity"> | string | null
    oldValue?: StringNullableWithAggregatesFilter<"TaskActivity"> | string | null
    newValue?: StringNullableWithAggregatesFilter<"TaskActivity"> | string | null
    description?: StringWithAggregatesFilter<"TaskActivity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TaskActivity"> | Date | string
  }

  export type VolunteerWhereInput = {
    AND?: VolunteerWhereInput | VolunteerWhereInput[]
    OR?: VolunteerWhereInput[]
    NOT?: VolunteerWhereInput | VolunteerWhereInput[]
    id?: StringFilter<"Volunteer"> | string
    name?: StringFilter<"Volunteer"> | string
    email?: StringFilter<"Volunteer"> | string
    userId?: StringNullableFilter<"Volunteer"> | string | null
    skills?: StringNullableFilter<"Volunteer"> | string | null
    reputation?: IntFilter<"Volunteer"> | number
    completedTasks?: IntFilter<"Volunteer"> | number
    emailVisible?: BoolFilter<"Volunteer"> | boolean
    joinedDate?: DateTimeFilter<"Volunteer"> | Date | string
    createdAt?: DateTimeFilter<"Volunteer"> | Date | string
    updatedAt?: DateTimeFilter<"Volunteer"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type VolunteerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    userId?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    reputation?: SortOrder
    completedTasks?: SortOrder
    emailVisible?: SortOrder
    joinedDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: VolunteerOrderByRelevanceInput
  }

  export type VolunteerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    userId?: string
    AND?: VolunteerWhereInput | VolunteerWhereInput[]
    OR?: VolunteerWhereInput[]
    NOT?: VolunteerWhereInput | VolunteerWhereInput[]
    name?: StringFilter<"Volunteer"> | string
    skills?: StringNullableFilter<"Volunteer"> | string | null
    reputation?: IntFilter<"Volunteer"> | number
    completedTasks?: IntFilter<"Volunteer"> | number
    emailVisible?: BoolFilter<"Volunteer"> | boolean
    joinedDate?: DateTimeFilter<"Volunteer"> | Date | string
    createdAt?: DateTimeFilter<"Volunteer"> | Date | string
    updatedAt?: DateTimeFilter<"Volunteer"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "email" | "userId">

  export type VolunteerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    userId?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    reputation?: SortOrder
    completedTasks?: SortOrder
    emailVisible?: SortOrder
    joinedDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VolunteerCountOrderByAggregateInput
    _avg?: VolunteerAvgOrderByAggregateInput
    _max?: VolunteerMaxOrderByAggregateInput
    _min?: VolunteerMinOrderByAggregateInput
    _sum?: VolunteerSumOrderByAggregateInput
  }

  export type VolunteerScalarWhereWithAggregatesInput = {
    AND?: VolunteerScalarWhereWithAggregatesInput | VolunteerScalarWhereWithAggregatesInput[]
    OR?: VolunteerScalarWhereWithAggregatesInput[]
    NOT?: VolunteerScalarWhereWithAggregatesInput | VolunteerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Volunteer"> | string
    name?: StringWithAggregatesFilter<"Volunteer"> | string
    email?: StringWithAggregatesFilter<"Volunteer"> | string
    userId?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    skills?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    reputation?: IntWithAggregatesFilter<"Volunteer"> | number
    completedTasks?: IntWithAggregatesFilter<"Volunteer"> | number
    emailVisible?: BoolWithAggregatesFilter<"Volunteer"> | boolean
    joinedDate?: DateTimeWithAggregatesFilter<"Volunteer"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Volunteer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Volunteer"> | Date | string
  }

  export type ApprovalHistoryWhereInput = {
    AND?: ApprovalHistoryWhereInput | ApprovalHistoryWhereInput[]
    OR?: ApprovalHistoryWhereInput[]
    NOT?: ApprovalHistoryWhereInput | ApprovalHistoryWhereInput[]
    id?: StringFilter<"ApprovalHistory"> | string
    sprintId?: StringFilter<"ApprovalHistory"> | string
    requestedBy?: StringFilter<"ApprovalHistory"> | string
    status?: StringFilter<"ApprovalHistory"> | string
    notes?: StringNullableFilter<"ApprovalHistory"> | string | null
    approvedAt?: DateTimeNullableFilter<"ApprovalHistory"> | Date | string | null
    createdAt?: DateTimeFilter<"ApprovalHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ApprovalHistory"> | Date | string
    sprint?: XOR<SprintScalarRelationFilter, SprintWhereInput>
    requestedByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApprovalHistoryOrderByWithRelationInput = {
    id?: SortOrder
    sprintId?: SortOrder
    requestedBy?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sprint?: SprintOrderByWithRelationInput
    requestedByUser?: UserOrderByWithRelationInput
    _relevance?: ApprovalHistoryOrderByRelevanceInput
  }

  export type ApprovalHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApprovalHistoryWhereInput | ApprovalHistoryWhereInput[]
    OR?: ApprovalHistoryWhereInput[]
    NOT?: ApprovalHistoryWhereInput | ApprovalHistoryWhereInput[]
    sprintId?: StringFilter<"ApprovalHistory"> | string
    requestedBy?: StringFilter<"ApprovalHistory"> | string
    status?: StringFilter<"ApprovalHistory"> | string
    notes?: StringNullableFilter<"ApprovalHistory"> | string | null
    approvedAt?: DateTimeNullableFilter<"ApprovalHistory"> | Date | string | null
    createdAt?: DateTimeFilter<"ApprovalHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ApprovalHistory"> | Date | string
    sprint?: XOR<SprintScalarRelationFilter, SprintWhereInput>
    requestedByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ApprovalHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    sprintId?: SortOrder
    requestedBy?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApprovalHistoryCountOrderByAggregateInput
    _max?: ApprovalHistoryMaxOrderByAggregateInput
    _min?: ApprovalHistoryMinOrderByAggregateInput
  }

  export type ApprovalHistoryScalarWhereWithAggregatesInput = {
    AND?: ApprovalHistoryScalarWhereWithAggregatesInput | ApprovalHistoryScalarWhereWithAggregatesInput[]
    OR?: ApprovalHistoryScalarWhereWithAggregatesInput[]
    NOT?: ApprovalHistoryScalarWhereWithAggregatesInput | ApprovalHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApprovalHistory"> | string
    sprintId?: StringWithAggregatesFilter<"ApprovalHistory"> | string
    requestedBy?: StringWithAggregatesFilter<"ApprovalHistory"> | string
    status?: StringWithAggregatesFilter<"ApprovalHistory"> | string
    notes?: StringNullableWithAggregatesFilter<"ApprovalHistory"> | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"ApprovalHistory"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApprovalHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApprovalHistory"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    relatedTaskId?: StringNullableFilter<"Notification"> | string | null
    relatedSprintId?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    metadata?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    relatedTaskId?: SortOrderInput | SortOrder
    relatedSprintId?: SortOrderInput | SortOrder
    isRead?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    relatedTaskId?: StringNullableFilter<"Notification"> | string | null
    relatedSprintId?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    metadata?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    relatedTaskId?: SortOrderInput | SortOrder
    relatedSprintId?: SortOrderInput | SortOrder
    isRead?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    relatedTaskId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    relatedSprintId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    metadata?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type TwoFactorAuthWhereInput = {
    AND?: TwoFactorAuthWhereInput | TwoFactorAuthWhereInput[]
    OR?: TwoFactorAuthWhereInput[]
    NOT?: TwoFactorAuthWhereInput | TwoFactorAuthWhereInput[]
    id?: StringFilter<"TwoFactorAuth"> | string
    userId?: StringFilter<"TwoFactorAuth"> | string
    isEnabled?: BoolFilter<"TwoFactorAuth"> | boolean
    totpSecret?: StringNullableFilter<"TwoFactorAuth"> | string | null
    backupCodes?: StringNullableFilter<"TwoFactorAuth"> | string | null
    backupCodesUsed?: StringNullableFilter<"TwoFactorAuth"> | string | null
    createdAt?: DateTimeFilter<"TwoFactorAuth"> | Date | string
    updatedAt?: DateTimeFilter<"TwoFactorAuth"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TwoFactorAuthOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    isEnabled?: SortOrder
    totpSecret?: SortOrderInput | SortOrder
    backupCodes?: SortOrderInput | SortOrder
    backupCodesUsed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: TwoFactorAuthOrderByRelevanceInput
  }

  export type TwoFactorAuthWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: TwoFactorAuthWhereInput | TwoFactorAuthWhereInput[]
    OR?: TwoFactorAuthWhereInput[]
    NOT?: TwoFactorAuthWhereInput | TwoFactorAuthWhereInput[]
    isEnabled?: BoolFilter<"TwoFactorAuth"> | boolean
    totpSecret?: StringNullableFilter<"TwoFactorAuth"> | string | null
    backupCodes?: StringNullableFilter<"TwoFactorAuth"> | string | null
    backupCodesUsed?: StringNullableFilter<"TwoFactorAuth"> | string | null
    createdAt?: DateTimeFilter<"TwoFactorAuth"> | Date | string
    updatedAt?: DateTimeFilter<"TwoFactorAuth"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type TwoFactorAuthOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    isEnabled?: SortOrder
    totpSecret?: SortOrderInput | SortOrder
    backupCodes?: SortOrderInput | SortOrder
    backupCodesUsed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TwoFactorAuthCountOrderByAggregateInput
    _max?: TwoFactorAuthMaxOrderByAggregateInput
    _min?: TwoFactorAuthMinOrderByAggregateInput
  }

  export type TwoFactorAuthScalarWhereWithAggregatesInput = {
    AND?: TwoFactorAuthScalarWhereWithAggregatesInput | TwoFactorAuthScalarWhereWithAggregatesInput[]
    OR?: TwoFactorAuthScalarWhereWithAggregatesInput[]
    NOT?: TwoFactorAuthScalarWhereWithAggregatesInput | TwoFactorAuthScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TwoFactorAuth"> | string
    userId?: StringWithAggregatesFilter<"TwoFactorAuth"> | string
    isEnabled?: BoolWithAggregatesFilter<"TwoFactorAuth"> | boolean
    totpSecret?: StringNullableWithAggregatesFilter<"TwoFactorAuth"> | string | null
    backupCodes?: StringNullableWithAggregatesFilter<"TwoFactorAuth"> | string | null
    backupCodesUsed?: StringNullableWithAggregatesFilter<"TwoFactorAuth"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TwoFactorAuth"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TwoFactorAuth"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    accountStatus?: $Enums.AccountStatus
    deletedAt?: Date | string | null
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiresAt?: Date | string | null
    emailChangeToken?: string | null
    emailChangeTokenExpiresAt?: Date | string | null
    pendingEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sprints?: SprintCreateNestedManyWithoutCoordinatorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    approvals?: ApprovalHistoryCreateNestedManyWithoutRequestedByUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    volunteer?: VolunteerCreateNestedOneWithoutUserInput
    twoFactorAuth?: TwoFactorAuthCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    accountStatus?: $Enums.AccountStatus
    deletedAt?: Date | string | null
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiresAt?: Date | string | null
    emailChangeToken?: string | null
    emailChangeTokenExpiresAt?: Date | string | null
    pendingEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sprints?: SprintUncheckedCreateNestedManyWithoutCoordinatorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    approvals?: ApprovalHistoryUncheckedCreateNestedManyWithoutRequestedByUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    volunteer?: VolunteerUncheckedCreateNestedOneWithoutUserInput
    twoFactorAuth?: TwoFactorAuthUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailChangeTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprints?: SprintUpdateManyWithoutCoordinatorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    approvals?: ApprovalHistoryUpdateManyWithoutRequestedByUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    volunteer?: VolunteerUpdateOneWithoutUserNestedInput
    twoFactorAuth?: TwoFactorAuthUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailChangeTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprints?: SprintUncheckedUpdateManyWithoutCoordinatorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    approvals?: ApprovalHistoryUncheckedUpdateManyWithoutRequestedByUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    volunteer?: VolunteerUncheckedUpdateOneWithoutUserNestedInput
    twoFactorAuth?: TwoFactorAuthUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    accountStatus?: $Enums.AccountStatus
    deletedAt?: Date | string | null
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiresAt?: Date | string | null
    emailChangeToken?: string | null
    emailChangeTokenExpiresAt?: Date | string | null
    pendingEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailChangeTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailChangeTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    deviceInfo?: string | null
    ipAddress?: string | null
    location?: string | null
    lastActivityAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    deviceInfo?: string | null
    ipAddress?: string | null
    location?: string | null
    lastActivityAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    deviceInfo?: string | null
    ipAddress?: string | null
    location?: string | null
    lastActivityAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SprintCreateInput = {
    id?: string
    title: string
    description?: string | null
    location: string
    progressStatus?: string
    governmentAuthorizationStatus?: string
    platformAuthorizationStatus?: string
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinator: UserCreateNestedOneWithoutSprintsInput
    tasks?: TaskCreateNestedManyWithoutSprintInput
    approvalHistory?: ApprovalHistoryCreateNestedManyWithoutSprintInput
  }

  export type SprintUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    location: string
    progressStatus?: string
    governmentAuthorizationStatus?: string
    platformAuthorizationStatus?: string
    coordinatorId: string
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutSprintInput
    approvalHistory?: ApprovalHistoryUncheckedCreateNestedManyWithoutSprintInput
  }

  export type SprintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    progressStatus?: StringFieldUpdateOperationsInput | string
    governmentAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    platformAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinator?: UserUpdateOneRequiredWithoutSprintsNestedInput
    tasks?: TaskUpdateManyWithoutSprintNestedInput
    approvalHistory?: ApprovalHistoryUpdateManyWithoutSprintNestedInput
  }

  export type SprintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    progressStatus?: StringFieldUpdateOperationsInput | string
    governmentAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    platformAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    coordinatorId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutSprintNestedInput
    approvalHistory?: ApprovalHistoryUncheckedUpdateManyWithoutSprintNestedInput
  }

  export type SprintCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    location: string
    progressStatus?: string
    governmentAuthorizationStatus?: string
    platformAuthorizationStatus?: string
    coordinatorId: string
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SprintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    progressStatus?: StringFieldUpdateOperationsInput | string
    governmentAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    platformAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SprintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    progressStatus?: StringFieldUpdateOperationsInput | string
    governmentAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    platformAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    coordinatorId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    dueDate: Date | string
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sprint: SprintCreateNestedOneWithoutTasksInput
    comments?: TaskCommentCreateNestedManyWithoutTaskInput
    activities?: TaskActivityCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    dueDate: Date | string
    assignedTo?: string | null
    sprintId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: TaskCommentUncheckedCreateNestedManyWithoutTaskInput
    activities?: TaskActivityUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprint?: SprintUpdateOneRequiredWithoutTasksNestedInput
    comments?: TaskCommentUpdateManyWithoutTaskNestedInput
    activities?: TaskActivityUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: TaskCommentUncheckedUpdateManyWithoutTaskNestedInput
    activities?: TaskActivityUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    dueDate: Date | string
    assignedTo?: string | null
    sprintId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCommentCreateInput = {
    id?: string
    userId: string
    userName: string
    userRole: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutCommentsInput
  }

  export type TaskCommentUncheckedCreateInput = {
    id?: string
    taskId: string
    userId: string
    userName: string
    userRole: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type TaskCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCommentCreateManyInput = {
    id?: string
    taskId: string
    userId: string
    userName: string
    userRole: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskActivityCreateInput = {
    id?: string
    userId?: string | null
    userName?: string | null
    action: string
    fieldName?: string | null
    oldValue?: string | null
    newValue?: string | null
    description: string
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutActivitiesInput
  }

  export type TaskActivityUncheckedCreateInput = {
    id?: string
    taskId: string
    userId?: string | null
    userName?: string | null
    action: string
    fieldName?: string | null
    oldValue?: string | null
    newValue?: string | null
    description: string
    createdAt?: Date | string
  }

  export type TaskActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    fieldName?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type TaskActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    fieldName?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskActivityCreateManyInput = {
    id?: string
    taskId: string
    userId?: string | null
    userName?: string | null
    action: string
    fieldName?: string | null
    oldValue?: string | null
    newValue?: string | null
    description: string
    createdAt?: Date | string
  }

  export type TaskActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    fieldName?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    fieldName?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerCreateInput = {
    id?: string
    name: string
    email: string
    skills?: string | null
    reputation?: number
    completedTasks?: number
    emailVisible?: boolean
    joinedDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutVolunteerInput
  }

  export type VolunteerUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    userId?: string | null
    skills?: string | null
    reputation?: number
    completedTasks?: number
    emailVisible?: boolean
    joinedDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    emailVisible?: BoolFieldUpdateOperationsInput | boolean
    joinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutVolunteerNestedInput
  }

  export type VolunteerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    emailVisible?: BoolFieldUpdateOperationsInput | boolean
    joinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerCreateManyInput = {
    id?: string
    name: string
    email: string
    userId?: string | null
    skills?: string | null
    reputation?: number
    completedTasks?: number
    emailVisible?: boolean
    joinedDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    emailVisible?: BoolFieldUpdateOperationsInput | boolean
    joinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    emailVisible?: BoolFieldUpdateOperationsInput | boolean
    joinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalHistoryCreateInput = {
    id?: string
    status?: string
    notes?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sprint: SprintCreateNestedOneWithoutApprovalHistoryInput
    requestedByUser: UserCreateNestedOneWithoutApprovalsInput
  }

  export type ApprovalHistoryUncheckedCreateInput = {
    id?: string
    sprintId: string
    requestedBy: string
    status?: string
    notes?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApprovalHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprint?: SprintUpdateOneRequiredWithoutApprovalHistoryNestedInput
    requestedByUser?: UserUpdateOneRequiredWithoutApprovalsNestedInput
  }

  export type ApprovalHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sprintId?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalHistoryCreateManyInput = {
    id?: string
    sprintId: string
    requestedBy: string
    status?: string
    notes?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApprovalHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sprintId?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: string
    title: string
    message: string
    relatedTaskId?: string | null
    relatedSprintId?: string | null
    isRead?: boolean
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    title: string
    message: string
    relatedTaskId?: string | null
    relatedSprintId?: string | null
    isRead?: boolean
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    relatedTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedSprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    relatedTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedSprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type: string
    title: string
    message: string
    relatedTaskId?: string | null
    relatedSprintId?: string | null
    isRead?: boolean
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    relatedTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedSprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    relatedTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedSprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorAuthCreateInput = {
    id?: string
    isEnabled?: boolean
    totpSecret?: string | null
    backupCodes?: string | null
    backupCodesUsed?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTwoFactorAuthInput
  }

  export type TwoFactorAuthUncheckedCreateInput = {
    id?: string
    userId: string
    isEnabled?: boolean
    totpSecret?: string | null
    backupCodes?: string | null
    backupCodesUsed?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwoFactorAuthUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    backupCodes?: NullableStringFieldUpdateOperationsInput | string | null
    backupCodesUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTwoFactorAuthNestedInput
  }

  export type TwoFactorAuthUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    backupCodes?: NullableStringFieldUpdateOperationsInput | string | null
    backupCodesUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorAuthCreateManyInput = {
    id?: string
    userId: string
    isEnabled?: boolean
    totpSecret?: string | null
    backupCodes?: string | null
    backupCodesUsed?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwoFactorAuthUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    backupCodes?: NullableStringFieldUpdateOperationsInput | string | null
    backupCodesUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorAuthUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    backupCodes?: NullableStringFieldUpdateOperationsInput | string | null
    backupCodesUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[]
    notIn?: $Enums.AccountStatus[]
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SprintListRelationFilter = {
    every?: SprintWhereInput
    some?: SprintWhereInput
    none?: SprintWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ApprovalHistoryListRelationFilter = {
    every?: ApprovalHistoryWhereInput
    some?: ApprovalHistoryWhereInput
    none?: ApprovalHistoryWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type VolunteerNullableScalarRelationFilter = {
    is?: VolunteerWhereInput | null
    isNot?: VolunteerWhereInput | null
  }

  export type TwoFactorAuthNullableScalarRelationFilter = {
    is?: TwoFactorAuthWhereInput | null
    isNot?: TwoFactorAuthWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SprintOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApprovalHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    accountStatus?: SortOrder
    deletedAt?: SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiresAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiresAt?: SortOrder
    emailChangeToken?: SortOrder
    emailChangeTokenExpiresAt?: SortOrder
    pendingEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    accountStatus?: SortOrder
    deletedAt?: SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiresAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiresAt?: SortOrder
    emailChangeToken?: SortOrder
    emailChangeTokenExpiresAt?: SortOrder
    pendingEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    accountStatus?: SortOrder
    deletedAt?: SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiresAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiresAt?: SortOrder
    emailChangeToken?: SortOrder
    emailChangeTokenExpiresAt?: SortOrder
    pendingEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[]
    notIn?: $Enums.AccountStatus[]
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceInfo?: SortOrder
    ipAddress?: SortOrder
    location?: SortOrder
    lastActivityAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceInfo?: SortOrder
    ipAddress?: SortOrder
    location?: SortOrder
    lastActivityAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceInfo?: SortOrder
    ipAddress?: SortOrder
    location?: SortOrder
    lastActivityAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SprintOrderByRelevanceInput = {
    fields: SprintOrderByRelevanceFieldEnum | SprintOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SprintCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    progressStatus?: SortOrder
    governmentAuthorizationStatus?: SortOrder
    platformAuthorizationStatus?: SortOrder
    coordinatorId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SprintAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type SprintMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    progressStatus?: SortOrder
    governmentAuthorizationStatus?: SortOrder
    platformAuthorizationStatus?: SortOrder
    coordinatorId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SprintMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    progressStatus?: SortOrder
    governmentAuthorizationStatus?: SortOrder
    platformAuthorizationStatus?: SortOrder
    coordinatorId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SprintSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SprintScalarRelationFilter = {
    is?: SprintWhereInput
    isNot?: SprintWhereInput
  }

  export type TaskCommentListRelationFilter = {
    every?: TaskCommentWhereInput
    some?: TaskCommentWhereInput
    none?: TaskCommentWhereInput
  }

  export type TaskActivityListRelationFilter = {
    every?: TaskActivityWhereInput
    some?: TaskActivityWhereInput
    none?: TaskActivityWhereInput
  }

  export type TaskCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelevanceInput = {
    fields: TaskOrderByRelevanceFieldEnum | TaskOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    assignedTo?: SortOrder
    sprintId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    assignedTo?: SortOrder
    sprintId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    assignedTo?: SortOrder
    sprintId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TaskCommentOrderByRelevanceInput = {
    fields: TaskCommentOrderByRelevanceFieldEnum | TaskCommentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TaskCommentCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userRole?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userRole?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskCommentMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userRole?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskActivityOrderByRelevanceInput = {
    fields: TaskActivityOrderByRelevanceFieldEnum | TaskActivityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TaskActivityCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    fieldName?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    fieldName?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskActivityMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    fieldName?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type VolunteerOrderByRelevanceInput = {
    fields: VolunteerOrderByRelevanceFieldEnum | VolunteerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VolunteerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    skills?: SortOrder
    reputation?: SortOrder
    completedTasks?: SortOrder
    emailVisible?: SortOrder
    joinedDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VolunteerAvgOrderByAggregateInput = {
    reputation?: SortOrder
    completedTasks?: SortOrder
  }

  export type VolunteerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    skills?: SortOrder
    reputation?: SortOrder
    completedTasks?: SortOrder
    emailVisible?: SortOrder
    joinedDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VolunteerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    skills?: SortOrder
    reputation?: SortOrder
    completedTasks?: SortOrder
    emailVisible?: SortOrder
    joinedDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VolunteerSumOrderByAggregateInput = {
    reputation?: SortOrder
    completedTasks?: SortOrder
  }

  export type ApprovalHistoryOrderByRelevanceInput = {
    fields: ApprovalHistoryOrderByRelevanceFieldEnum | ApprovalHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ApprovalHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    sprintId?: SortOrder
    requestedBy?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApprovalHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    sprintId?: SortOrder
    requestedBy?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApprovalHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    sprintId?: SortOrder
    requestedBy?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    relatedTaskId?: SortOrder
    relatedSprintId?: SortOrder
    isRead?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    relatedTaskId?: SortOrder
    relatedSprintId?: SortOrder
    isRead?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    relatedTaskId?: SortOrder
    relatedSprintId?: SortOrder
    isRead?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwoFactorAuthOrderByRelevanceInput = {
    fields: TwoFactorAuthOrderByRelevanceFieldEnum | TwoFactorAuthOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TwoFactorAuthCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isEnabled?: SortOrder
    totpSecret?: SortOrder
    backupCodes?: SortOrder
    backupCodesUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwoFactorAuthMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isEnabled?: SortOrder
    totpSecret?: SortOrder
    backupCodes?: SortOrder
    backupCodesUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwoFactorAuthMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isEnabled?: SortOrder
    totpSecret?: SortOrder
    backupCodes?: SortOrder
    backupCodesUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SprintCreateNestedManyWithoutCoordinatorInput = {
    create?: XOR<SprintCreateWithoutCoordinatorInput, SprintUncheckedCreateWithoutCoordinatorInput> | SprintCreateWithoutCoordinatorInput[] | SprintUncheckedCreateWithoutCoordinatorInput[]
    connectOrCreate?: SprintCreateOrConnectWithoutCoordinatorInput | SprintCreateOrConnectWithoutCoordinatorInput[]
    createMany?: SprintCreateManyCoordinatorInputEnvelope
    connect?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ApprovalHistoryCreateNestedManyWithoutRequestedByUserInput = {
    create?: XOR<ApprovalHistoryCreateWithoutRequestedByUserInput, ApprovalHistoryUncheckedCreateWithoutRequestedByUserInput> | ApprovalHistoryCreateWithoutRequestedByUserInput[] | ApprovalHistoryUncheckedCreateWithoutRequestedByUserInput[]
    connectOrCreate?: ApprovalHistoryCreateOrConnectWithoutRequestedByUserInput | ApprovalHistoryCreateOrConnectWithoutRequestedByUserInput[]
    createMany?: ApprovalHistoryCreateManyRequestedByUserInputEnvelope
    connect?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type VolunteerCreateNestedOneWithoutUserInput = {
    create?: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutUserInput
    connect?: VolunteerWhereUniqueInput
  }

  export type TwoFactorAuthCreateNestedOneWithoutUserInput = {
    create?: XOR<TwoFactorAuthCreateWithoutUserInput, TwoFactorAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: TwoFactorAuthCreateOrConnectWithoutUserInput
    connect?: TwoFactorAuthWhereUniqueInput
  }

  export type SprintUncheckedCreateNestedManyWithoutCoordinatorInput = {
    create?: XOR<SprintCreateWithoutCoordinatorInput, SprintUncheckedCreateWithoutCoordinatorInput> | SprintCreateWithoutCoordinatorInput[] | SprintUncheckedCreateWithoutCoordinatorInput[]
    connectOrCreate?: SprintCreateOrConnectWithoutCoordinatorInput | SprintCreateOrConnectWithoutCoordinatorInput[]
    createMany?: SprintCreateManyCoordinatorInputEnvelope
    connect?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ApprovalHistoryUncheckedCreateNestedManyWithoutRequestedByUserInput = {
    create?: XOR<ApprovalHistoryCreateWithoutRequestedByUserInput, ApprovalHistoryUncheckedCreateWithoutRequestedByUserInput> | ApprovalHistoryCreateWithoutRequestedByUserInput[] | ApprovalHistoryUncheckedCreateWithoutRequestedByUserInput[]
    connectOrCreate?: ApprovalHistoryCreateOrConnectWithoutRequestedByUserInput | ApprovalHistoryCreateOrConnectWithoutRequestedByUserInput[]
    createMany?: ApprovalHistoryCreateManyRequestedByUserInputEnvelope
    connect?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type VolunteerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutUserInput
    connect?: VolunteerWhereUniqueInput
  }

  export type TwoFactorAuthUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TwoFactorAuthCreateWithoutUserInput, TwoFactorAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: TwoFactorAuthCreateOrConnectWithoutUserInput
    connect?: TwoFactorAuthWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumAccountStatusFieldUpdateOperationsInput = {
    set?: $Enums.AccountStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SprintUpdateManyWithoutCoordinatorNestedInput = {
    create?: XOR<SprintCreateWithoutCoordinatorInput, SprintUncheckedCreateWithoutCoordinatorInput> | SprintCreateWithoutCoordinatorInput[] | SprintUncheckedCreateWithoutCoordinatorInput[]
    connectOrCreate?: SprintCreateOrConnectWithoutCoordinatorInput | SprintCreateOrConnectWithoutCoordinatorInput[]
    upsert?: SprintUpsertWithWhereUniqueWithoutCoordinatorInput | SprintUpsertWithWhereUniqueWithoutCoordinatorInput[]
    createMany?: SprintCreateManyCoordinatorInputEnvelope
    set?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    disconnect?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    delete?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    connect?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    update?: SprintUpdateWithWhereUniqueWithoutCoordinatorInput | SprintUpdateWithWhereUniqueWithoutCoordinatorInput[]
    updateMany?: SprintUpdateManyWithWhereWithoutCoordinatorInput | SprintUpdateManyWithWhereWithoutCoordinatorInput[]
    deleteMany?: SprintScalarWhereInput | SprintScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ApprovalHistoryUpdateManyWithoutRequestedByUserNestedInput = {
    create?: XOR<ApprovalHistoryCreateWithoutRequestedByUserInput, ApprovalHistoryUncheckedCreateWithoutRequestedByUserInput> | ApprovalHistoryCreateWithoutRequestedByUserInput[] | ApprovalHistoryUncheckedCreateWithoutRequestedByUserInput[]
    connectOrCreate?: ApprovalHistoryCreateOrConnectWithoutRequestedByUserInput | ApprovalHistoryCreateOrConnectWithoutRequestedByUserInput[]
    upsert?: ApprovalHistoryUpsertWithWhereUniqueWithoutRequestedByUserInput | ApprovalHistoryUpsertWithWhereUniqueWithoutRequestedByUserInput[]
    createMany?: ApprovalHistoryCreateManyRequestedByUserInputEnvelope
    set?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
    disconnect?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
    delete?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
    connect?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
    update?: ApprovalHistoryUpdateWithWhereUniqueWithoutRequestedByUserInput | ApprovalHistoryUpdateWithWhereUniqueWithoutRequestedByUserInput[]
    updateMany?: ApprovalHistoryUpdateManyWithWhereWithoutRequestedByUserInput | ApprovalHistoryUpdateManyWithWhereWithoutRequestedByUserInput[]
    deleteMany?: ApprovalHistoryScalarWhereInput | ApprovalHistoryScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type VolunteerUpdateOneWithoutUserNestedInput = {
    create?: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutUserInput
    upsert?: VolunteerUpsertWithoutUserInput
    disconnect?: VolunteerWhereInput | boolean
    delete?: VolunteerWhereInput | boolean
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutUserInput, VolunteerUpdateWithoutUserInput>, VolunteerUncheckedUpdateWithoutUserInput>
  }

  export type TwoFactorAuthUpdateOneWithoutUserNestedInput = {
    create?: XOR<TwoFactorAuthCreateWithoutUserInput, TwoFactorAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: TwoFactorAuthCreateOrConnectWithoutUserInput
    upsert?: TwoFactorAuthUpsertWithoutUserInput
    disconnect?: TwoFactorAuthWhereInput | boolean
    delete?: TwoFactorAuthWhereInput | boolean
    connect?: TwoFactorAuthWhereUniqueInput
    update?: XOR<XOR<TwoFactorAuthUpdateToOneWithWhereWithoutUserInput, TwoFactorAuthUpdateWithoutUserInput>, TwoFactorAuthUncheckedUpdateWithoutUserInput>
  }

  export type SprintUncheckedUpdateManyWithoutCoordinatorNestedInput = {
    create?: XOR<SprintCreateWithoutCoordinatorInput, SprintUncheckedCreateWithoutCoordinatorInput> | SprintCreateWithoutCoordinatorInput[] | SprintUncheckedCreateWithoutCoordinatorInput[]
    connectOrCreate?: SprintCreateOrConnectWithoutCoordinatorInput | SprintCreateOrConnectWithoutCoordinatorInput[]
    upsert?: SprintUpsertWithWhereUniqueWithoutCoordinatorInput | SprintUpsertWithWhereUniqueWithoutCoordinatorInput[]
    createMany?: SprintCreateManyCoordinatorInputEnvelope
    set?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    disconnect?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    delete?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    connect?: SprintWhereUniqueInput | SprintWhereUniqueInput[]
    update?: SprintUpdateWithWhereUniqueWithoutCoordinatorInput | SprintUpdateWithWhereUniqueWithoutCoordinatorInput[]
    updateMany?: SprintUpdateManyWithWhereWithoutCoordinatorInput | SprintUpdateManyWithWhereWithoutCoordinatorInput[]
    deleteMany?: SprintScalarWhereInput | SprintScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ApprovalHistoryUncheckedUpdateManyWithoutRequestedByUserNestedInput = {
    create?: XOR<ApprovalHistoryCreateWithoutRequestedByUserInput, ApprovalHistoryUncheckedCreateWithoutRequestedByUserInput> | ApprovalHistoryCreateWithoutRequestedByUserInput[] | ApprovalHistoryUncheckedCreateWithoutRequestedByUserInput[]
    connectOrCreate?: ApprovalHistoryCreateOrConnectWithoutRequestedByUserInput | ApprovalHistoryCreateOrConnectWithoutRequestedByUserInput[]
    upsert?: ApprovalHistoryUpsertWithWhereUniqueWithoutRequestedByUserInput | ApprovalHistoryUpsertWithWhereUniqueWithoutRequestedByUserInput[]
    createMany?: ApprovalHistoryCreateManyRequestedByUserInputEnvelope
    set?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
    disconnect?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
    delete?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
    connect?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
    update?: ApprovalHistoryUpdateWithWhereUniqueWithoutRequestedByUserInput | ApprovalHistoryUpdateWithWhereUniqueWithoutRequestedByUserInput[]
    updateMany?: ApprovalHistoryUpdateManyWithWhereWithoutRequestedByUserInput | ApprovalHistoryUpdateManyWithWhereWithoutRequestedByUserInput[]
    deleteMany?: ApprovalHistoryScalarWhereInput | ApprovalHistoryScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type VolunteerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutUserInput
    upsert?: VolunteerUpsertWithoutUserInput
    disconnect?: VolunteerWhereInput | boolean
    delete?: VolunteerWhereInput | boolean
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutUserInput, VolunteerUpdateWithoutUserInput>, VolunteerUncheckedUpdateWithoutUserInput>
  }

  export type TwoFactorAuthUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TwoFactorAuthCreateWithoutUserInput, TwoFactorAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: TwoFactorAuthCreateOrConnectWithoutUserInput
    upsert?: TwoFactorAuthUpsertWithoutUserInput
    disconnect?: TwoFactorAuthWhereInput | boolean
    delete?: TwoFactorAuthWhereInput | boolean
    connect?: TwoFactorAuthWhereUniqueInput
    update?: XOR<XOR<TwoFactorAuthUpdateToOneWithWhereWithoutUserInput, TwoFactorAuthUpdateWithoutUserInput>, TwoFactorAuthUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutSprintsInput = {
    create?: XOR<UserCreateWithoutSprintsInput, UserUncheckedCreateWithoutSprintsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSprintsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutSprintInput = {
    create?: XOR<TaskCreateWithoutSprintInput, TaskUncheckedCreateWithoutSprintInput> | TaskCreateWithoutSprintInput[] | TaskUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSprintInput | TaskCreateOrConnectWithoutSprintInput[]
    createMany?: TaskCreateManySprintInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ApprovalHistoryCreateNestedManyWithoutSprintInput = {
    create?: XOR<ApprovalHistoryCreateWithoutSprintInput, ApprovalHistoryUncheckedCreateWithoutSprintInput> | ApprovalHistoryCreateWithoutSprintInput[] | ApprovalHistoryUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: ApprovalHistoryCreateOrConnectWithoutSprintInput | ApprovalHistoryCreateOrConnectWithoutSprintInput[]
    createMany?: ApprovalHistoryCreateManySprintInputEnvelope
    connect?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutSprintInput = {
    create?: XOR<TaskCreateWithoutSprintInput, TaskUncheckedCreateWithoutSprintInput> | TaskCreateWithoutSprintInput[] | TaskUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSprintInput | TaskCreateOrConnectWithoutSprintInput[]
    createMany?: TaskCreateManySprintInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ApprovalHistoryUncheckedCreateNestedManyWithoutSprintInput = {
    create?: XOR<ApprovalHistoryCreateWithoutSprintInput, ApprovalHistoryUncheckedCreateWithoutSprintInput> | ApprovalHistoryCreateWithoutSprintInput[] | ApprovalHistoryUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: ApprovalHistoryCreateOrConnectWithoutSprintInput | ApprovalHistoryCreateOrConnectWithoutSprintInput[]
    createMany?: ApprovalHistoryCreateManySprintInputEnvelope
    connect?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSprintsNestedInput = {
    create?: XOR<UserCreateWithoutSprintsInput, UserUncheckedCreateWithoutSprintsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSprintsInput
    upsert?: UserUpsertWithoutSprintsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSprintsInput, UserUpdateWithoutSprintsInput>, UserUncheckedUpdateWithoutSprintsInput>
  }

  export type TaskUpdateManyWithoutSprintNestedInput = {
    create?: XOR<TaskCreateWithoutSprintInput, TaskUncheckedCreateWithoutSprintInput> | TaskCreateWithoutSprintInput[] | TaskUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSprintInput | TaskCreateOrConnectWithoutSprintInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutSprintInput | TaskUpsertWithWhereUniqueWithoutSprintInput[]
    createMany?: TaskCreateManySprintInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutSprintInput | TaskUpdateWithWhereUniqueWithoutSprintInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutSprintInput | TaskUpdateManyWithWhereWithoutSprintInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ApprovalHistoryUpdateManyWithoutSprintNestedInput = {
    create?: XOR<ApprovalHistoryCreateWithoutSprintInput, ApprovalHistoryUncheckedCreateWithoutSprintInput> | ApprovalHistoryCreateWithoutSprintInput[] | ApprovalHistoryUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: ApprovalHistoryCreateOrConnectWithoutSprintInput | ApprovalHistoryCreateOrConnectWithoutSprintInput[]
    upsert?: ApprovalHistoryUpsertWithWhereUniqueWithoutSprintInput | ApprovalHistoryUpsertWithWhereUniqueWithoutSprintInput[]
    createMany?: ApprovalHistoryCreateManySprintInputEnvelope
    set?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
    disconnect?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
    delete?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
    connect?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
    update?: ApprovalHistoryUpdateWithWhereUniqueWithoutSprintInput | ApprovalHistoryUpdateWithWhereUniqueWithoutSprintInput[]
    updateMany?: ApprovalHistoryUpdateManyWithWhereWithoutSprintInput | ApprovalHistoryUpdateManyWithWhereWithoutSprintInput[]
    deleteMany?: ApprovalHistoryScalarWhereInput | ApprovalHistoryScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutSprintNestedInput = {
    create?: XOR<TaskCreateWithoutSprintInput, TaskUncheckedCreateWithoutSprintInput> | TaskCreateWithoutSprintInput[] | TaskUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSprintInput | TaskCreateOrConnectWithoutSprintInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutSprintInput | TaskUpsertWithWhereUniqueWithoutSprintInput[]
    createMany?: TaskCreateManySprintInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutSprintInput | TaskUpdateWithWhereUniqueWithoutSprintInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutSprintInput | TaskUpdateManyWithWhereWithoutSprintInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ApprovalHistoryUncheckedUpdateManyWithoutSprintNestedInput = {
    create?: XOR<ApprovalHistoryCreateWithoutSprintInput, ApprovalHistoryUncheckedCreateWithoutSprintInput> | ApprovalHistoryCreateWithoutSprintInput[] | ApprovalHistoryUncheckedCreateWithoutSprintInput[]
    connectOrCreate?: ApprovalHistoryCreateOrConnectWithoutSprintInput | ApprovalHistoryCreateOrConnectWithoutSprintInput[]
    upsert?: ApprovalHistoryUpsertWithWhereUniqueWithoutSprintInput | ApprovalHistoryUpsertWithWhereUniqueWithoutSprintInput[]
    createMany?: ApprovalHistoryCreateManySprintInputEnvelope
    set?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
    disconnect?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
    delete?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
    connect?: ApprovalHistoryWhereUniqueInput | ApprovalHistoryWhereUniqueInput[]
    update?: ApprovalHistoryUpdateWithWhereUniqueWithoutSprintInput | ApprovalHistoryUpdateWithWhereUniqueWithoutSprintInput[]
    updateMany?: ApprovalHistoryUpdateManyWithWhereWithoutSprintInput | ApprovalHistoryUpdateManyWithWhereWithoutSprintInput[]
    deleteMany?: ApprovalHistoryScalarWhereInput | ApprovalHistoryScalarWhereInput[]
  }

  export type SprintCreateNestedOneWithoutTasksInput = {
    create?: XOR<SprintCreateWithoutTasksInput, SprintUncheckedCreateWithoutTasksInput>
    connectOrCreate?: SprintCreateOrConnectWithoutTasksInput
    connect?: SprintWhereUniqueInput
  }

  export type TaskCommentCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskCommentCreateWithoutTaskInput, TaskCommentUncheckedCreateWithoutTaskInput> | TaskCommentCreateWithoutTaskInput[] | TaskCommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskCommentCreateOrConnectWithoutTaskInput | TaskCommentCreateOrConnectWithoutTaskInput[]
    createMany?: TaskCommentCreateManyTaskInputEnvelope
    connect?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
  }

  export type TaskActivityCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskActivityCreateWithoutTaskInput, TaskActivityUncheckedCreateWithoutTaskInput> | TaskActivityCreateWithoutTaskInput[] | TaskActivityUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskActivityCreateOrConnectWithoutTaskInput | TaskActivityCreateOrConnectWithoutTaskInput[]
    createMany?: TaskActivityCreateManyTaskInputEnvelope
    connect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
  }

  export type TaskCommentUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskCommentCreateWithoutTaskInput, TaskCommentUncheckedCreateWithoutTaskInput> | TaskCommentCreateWithoutTaskInput[] | TaskCommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskCommentCreateOrConnectWithoutTaskInput | TaskCommentCreateOrConnectWithoutTaskInput[]
    createMany?: TaskCommentCreateManyTaskInputEnvelope
    connect?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
  }

  export type TaskActivityUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskActivityCreateWithoutTaskInput, TaskActivityUncheckedCreateWithoutTaskInput> | TaskActivityCreateWithoutTaskInput[] | TaskActivityUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskActivityCreateOrConnectWithoutTaskInput | TaskActivityCreateOrConnectWithoutTaskInput[]
    createMany?: TaskActivityCreateManyTaskInputEnvelope
    connect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
  }

  export type SprintUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<SprintCreateWithoutTasksInput, SprintUncheckedCreateWithoutTasksInput>
    connectOrCreate?: SprintCreateOrConnectWithoutTasksInput
    upsert?: SprintUpsertWithoutTasksInput
    connect?: SprintWhereUniqueInput
    update?: XOR<XOR<SprintUpdateToOneWithWhereWithoutTasksInput, SprintUpdateWithoutTasksInput>, SprintUncheckedUpdateWithoutTasksInput>
  }

  export type TaskCommentUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskCommentCreateWithoutTaskInput, TaskCommentUncheckedCreateWithoutTaskInput> | TaskCommentCreateWithoutTaskInput[] | TaskCommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskCommentCreateOrConnectWithoutTaskInput | TaskCommentCreateOrConnectWithoutTaskInput[]
    upsert?: TaskCommentUpsertWithWhereUniqueWithoutTaskInput | TaskCommentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskCommentCreateManyTaskInputEnvelope
    set?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    disconnect?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    delete?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    connect?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    update?: TaskCommentUpdateWithWhereUniqueWithoutTaskInput | TaskCommentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskCommentUpdateManyWithWhereWithoutTaskInput | TaskCommentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskCommentScalarWhereInput | TaskCommentScalarWhereInput[]
  }

  export type TaskActivityUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskActivityCreateWithoutTaskInput, TaskActivityUncheckedCreateWithoutTaskInput> | TaskActivityCreateWithoutTaskInput[] | TaskActivityUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskActivityCreateOrConnectWithoutTaskInput | TaskActivityCreateOrConnectWithoutTaskInput[]
    upsert?: TaskActivityUpsertWithWhereUniqueWithoutTaskInput | TaskActivityUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskActivityCreateManyTaskInputEnvelope
    set?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    disconnect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    delete?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    connect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    update?: TaskActivityUpdateWithWhereUniqueWithoutTaskInput | TaskActivityUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskActivityUpdateManyWithWhereWithoutTaskInput | TaskActivityUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskActivityScalarWhereInput | TaskActivityScalarWhereInput[]
  }

  export type TaskCommentUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskCommentCreateWithoutTaskInput, TaskCommentUncheckedCreateWithoutTaskInput> | TaskCommentCreateWithoutTaskInput[] | TaskCommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskCommentCreateOrConnectWithoutTaskInput | TaskCommentCreateOrConnectWithoutTaskInput[]
    upsert?: TaskCommentUpsertWithWhereUniqueWithoutTaskInput | TaskCommentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskCommentCreateManyTaskInputEnvelope
    set?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    disconnect?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    delete?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    connect?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    update?: TaskCommentUpdateWithWhereUniqueWithoutTaskInput | TaskCommentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskCommentUpdateManyWithWhereWithoutTaskInput | TaskCommentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskCommentScalarWhereInput | TaskCommentScalarWhereInput[]
  }

  export type TaskActivityUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskActivityCreateWithoutTaskInput, TaskActivityUncheckedCreateWithoutTaskInput> | TaskActivityCreateWithoutTaskInput[] | TaskActivityUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskActivityCreateOrConnectWithoutTaskInput | TaskActivityCreateOrConnectWithoutTaskInput[]
    upsert?: TaskActivityUpsertWithWhereUniqueWithoutTaskInput | TaskActivityUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskActivityCreateManyTaskInputEnvelope
    set?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    disconnect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    delete?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    connect?: TaskActivityWhereUniqueInput | TaskActivityWhereUniqueInput[]
    update?: TaskActivityUpdateWithWhereUniqueWithoutTaskInput | TaskActivityUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskActivityUpdateManyWithWhereWithoutTaskInput | TaskActivityUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskActivityScalarWhereInput | TaskActivityScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutCommentsInput = {
    create?: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutCommentsInput
    connect?: TaskWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutCommentsInput
    upsert?: TaskUpsertWithoutCommentsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutCommentsInput, TaskUpdateWithoutCommentsInput>, TaskUncheckedUpdateWithoutCommentsInput>
  }

  export type TaskCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<TaskCreateWithoutActivitiesInput, TaskUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutActivitiesInput
    connect?: TaskWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<TaskCreateWithoutActivitiesInput, TaskUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutActivitiesInput
    upsert?: TaskUpsertWithoutActivitiesInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutActivitiesInput, TaskUpdateWithoutActivitiesInput>, TaskUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserCreateNestedOneWithoutVolunteerInput = {
    create?: XOR<UserCreateWithoutVolunteerInput, UserUncheckedCreateWithoutVolunteerInput>
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutVolunteerNestedInput = {
    create?: XOR<UserCreateWithoutVolunteerInput, UserUncheckedCreateWithoutVolunteerInput>
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerInput
    upsert?: UserUpsertWithoutVolunteerInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVolunteerInput, UserUpdateWithoutVolunteerInput>, UserUncheckedUpdateWithoutVolunteerInput>
  }

  export type SprintCreateNestedOneWithoutApprovalHistoryInput = {
    create?: XOR<SprintCreateWithoutApprovalHistoryInput, SprintUncheckedCreateWithoutApprovalHistoryInput>
    connectOrCreate?: SprintCreateOrConnectWithoutApprovalHistoryInput
    connect?: SprintWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApprovalsInput = {
    create?: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalsInput
    connect?: UserWhereUniqueInput
  }

  export type SprintUpdateOneRequiredWithoutApprovalHistoryNestedInput = {
    create?: XOR<SprintCreateWithoutApprovalHistoryInput, SprintUncheckedCreateWithoutApprovalHistoryInput>
    connectOrCreate?: SprintCreateOrConnectWithoutApprovalHistoryInput
    upsert?: SprintUpsertWithoutApprovalHistoryInput
    connect?: SprintWhereUniqueInput
    update?: XOR<XOR<SprintUpdateToOneWithWhereWithoutApprovalHistoryInput, SprintUpdateWithoutApprovalHistoryInput>, SprintUncheckedUpdateWithoutApprovalHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutApprovalsNestedInput = {
    create?: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalsInput
    upsert?: UserUpsertWithoutApprovalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovalsInput, UserUpdateWithoutApprovalsInput>, UserUncheckedUpdateWithoutApprovalsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutTwoFactorAuthInput = {
    create?: XOR<UserCreateWithoutTwoFactorAuthInput, UserUncheckedCreateWithoutTwoFactorAuthInput>
    connectOrCreate?: UserCreateOrConnectWithoutTwoFactorAuthInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTwoFactorAuthNestedInput = {
    create?: XOR<UserCreateWithoutTwoFactorAuthInput, UserUncheckedCreateWithoutTwoFactorAuthInput>
    connectOrCreate?: UserCreateOrConnectWithoutTwoFactorAuthInput
    upsert?: UserUpsertWithoutTwoFactorAuthInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTwoFactorAuthInput, UserUpdateWithoutTwoFactorAuthInput>, UserUncheckedUpdateWithoutTwoFactorAuthInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[]
    notIn?: $Enums.AccountStatus[]
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[]
    notIn?: $Enums.AccountStatus[]
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SprintCreateWithoutCoordinatorInput = {
    id?: string
    title: string
    description?: string | null
    location: string
    progressStatus?: string
    governmentAuthorizationStatus?: string
    platformAuthorizationStatus?: string
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutSprintInput
    approvalHistory?: ApprovalHistoryCreateNestedManyWithoutSprintInput
  }

  export type SprintUncheckedCreateWithoutCoordinatorInput = {
    id?: string
    title: string
    description?: string | null
    location: string
    progressStatus?: string
    governmentAuthorizationStatus?: string
    platformAuthorizationStatus?: string
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutSprintInput
    approvalHistory?: ApprovalHistoryUncheckedCreateNestedManyWithoutSprintInput
  }

  export type SprintCreateOrConnectWithoutCoordinatorInput = {
    where: SprintWhereUniqueInput
    create: XOR<SprintCreateWithoutCoordinatorInput, SprintUncheckedCreateWithoutCoordinatorInput>
  }

  export type SprintCreateManyCoordinatorInputEnvelope = {
    data: SprintCreateManyCoordinatorInput | SprintCreateManyCoordinatorInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    deviceInfo?: string | null
    ipAddress?: string | null
    location?: string | null
    lastActivityAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    deviceInfo?: string | null
    ipAddress?: string | null
    location?: string | null
    lastActivityAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApprovalHistoryCreateWithoutRequestedByUserInput = {
    id?: string
    status?: string
    notes?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sprint: SprintCreateNestedOneWithoutApprovalHistoryInput
  }

  export type ApprovalHistoryUncheckedCreateWithoutRequestedByUserInput = {
    id?: string
    sprintId: string
    status?: string
    notes?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApprovalHistoryCreateOrConnectWithoutRequestedByUserInput = {
    where: ApprovalHistoryWhereUniqueInput
    create: XOR<ApprovalHistoryCreateWithoutRequestedByUserInput, ApprovalHistoryUncheckedCreateWithoutRequestedByUserInput>
  }

  export type ApprovalHistoryCreateManyRequestedByUserInputEnvelope = {
    data: ApprovalHistoryCreateManyRequestedByUserInput | ApprovalHistoryCreateManyRequestedByUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    message: string
    relatedTaskId?: string | null
    relatedSprintId?: string | null
    isRead?: boolean
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    message: string
    relatedTaskId?: string | null
    relatedSprintId?: string | null
    isRead?: boolean
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VolunteerCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    skills?: string | null
    reputation?: number
    completedTasks?: number
    emailVisible?: boolean
    joinedDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    skills?: string | null
    reputation?: number
    completedTasks?: number
    emailVisible?: boolean
    joinedDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerCreateOrConnectWithoutUserInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
  }

  export type TwoFactorAuthCreateWithoutUserInput = {
    id?: string
    isEnabled?: boolean
    totpSecret?: string | null
    backupCodes?: string | null
    backupCodesUsed?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwoFactorAuthUncheckedCreateWithoutUserInput = {
    id?: string
    isEnabled?: boolean
    totpSecret?: string | null
    backupCodes?: string | null
    backupCodesUsed?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwoFactorAuthCreateOrConnectWithoutUserInput = {
    where: TwoFactorAuthWhereUniqueInput
    create: XOR<TwoFactorAuthCreateWithoutUserInput, TwoFactorAuthUncheckedCreateWithoutUserInput>
  }

  export type SprintUpsertWithWhereUniqueWithoutCoordinatorInput = {
    where: SprintWhereUniqueInput
    update: XOR<SprintUpdateWithoutCoordinatorInput, SprintUncheckedUpdateWithoutCoordinatorInput>
    create: XOR<SprintCreateWithoutCoordinatorInput, SprintUncheckedCreateWithoutCoordinatorInput>
  }

  export type SprintUpdateWithWhereUniqueWithoutCoordinatorInput = {
    where: SprintWhereUniqueInput
    data: XOR<SprintUpdateWithoutCoordinatorInput, SprintUncheckedUpdateWithoutCoordinatorInput>
  }

  export type SprintUpdateManyWithWhereWithoutCoordinatorInput = {
    where: SprintScalarWhereInput
    data: XOR<SprintUpdateManyMutationInput, SprintUncheckedUpdateManyWithoutCoordinatorInput>
  }

  export type SprintScalarWhereInput = {
    AND?: SprintScalarWhereInput | SprintScalarWhereInput[]
    OR?: SprintScalarWhereInput[]
    NOT?: SprintScalarWhereInput | SprintScalarWhereInput[]
    id?: StringFilter<"Sprint"> | string
    title?: StringFilter<"Sprint"> | string
    description?: StringNullableFilter<"Sprint"> | string | null
    location?: StringFilter<"Sprint"> | string
    progressStatus?: StringFilter<"Sprint"> | string
    governmentAuthorizationStatus?: StringFilter<"Sprint"> | string
    platformAuthorizationStatus?: StringFilter<"Sprint"> | string
    coordinatorId?: StringFilter<"Sprint"> | string
    startDate?: DateTimeFilter<"Sprint"> | Date | string
    endDate?: DateTimeFilter<"Sprint"> | Date | string
    progress?: IntFilter<"Sprint"> | number
    createdAt?: DateTimeFilter<"Sprint"> | Date | string
    updatedAt?: DateTimeFilter<"Sprint"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    deviceInfo?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    location?: StringNullableFilter<"Session"> | string | null
    lastActivityAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type ApprovalHistoryUpsertWithWhereUniqueWithoutRequestedByUserInput = {
    where: ApprovalHistoryWhereUniqueInput
    update: XOR<ApprovalHistoryUpdateWithoutRequestedByUserInput, ApprovalHistoryUncheckedUpdateWithoutRequestedByUserInput>
    create: XOR<ApprovalHistoryCreateWithoutRequestedByUserInput, ApprovalHistoryUncheckedCreateWithoutRequestedByUserInput>
  }

  export type ApprovalHistoryUpdateWithWhereUniqueWithoutRequestedByUserInput = {
    where: ApprovalHistoryWhereUniqueInput
    data: XOR<ApprovalHistoryUpdateWithoutRequestedByUserInput, ApprovalHistoryUncheckedUpdateWithoutRequestedByUserInput>
  }

  export type ApprovalHistoryUpdateManyWithWhereWithoutRequestedByUserInput = {
    where: ApprovalHistoryScalarWhereInput
    data: XOR<ApprovalHistoryUpdateManyMutationInput, ApprovalHistoryUncheckedUpdateManyWithoutRequestedByUserInput>
  }

  export type ApprovalHistoryScalarWhereInput = {
    AND?: ApprovalHistoryScalarWhereInput | ApprovalHistoryScalarWhereInput[]
    OR?: ApprovalHistoryScalarWhereInput[]
    NOT?: ApprovalHistoryScalarWhereInput | ApprovalHistoryScalarWhereInput[]
    id?: StringFilter<"ApprovalHistory"> | string
    sprintId?: StringFilter<"ApprovalHistory"> | string
    requestedBy?: StringFilter<"ApprovalHistory"> | string
    status?: StringFilter<"ApprovalHistory"> | string
    notes?: StringNullableFilter<"ApprovalHistory"> | string | null
    approvedAt?: DateTimeNullableFilter<"ApprovalHistory"> | Date | string | null
    createdAt?: DateTimeFilter<"ApprovalHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ApprovalHistory"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    relatedTaskId?: StringNullableFilter<"Notification"> | string | null
    relatedSprintId?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    metadata?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type VolunteerUpsertWithoutUserInput = {
    update: XOR<VolunteerUpdateWithoutUserInput, VolunteerUncheckedUpdateWithoutUserInput>
    create: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
    where?: VolunteerWhereInput
  }

  export type VolunteerUpdateToOneWithWhereWithoutUserInput = {
    where?: VolunteerWhereInput
    data: XOR<VolunteerUpdateWithoutUserInput, VolunteerUncheckedUpdateWithoutUserInput>
  }

  export type VolunteerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    emailVisible?: BoolFieldUpdateOperationsInput | boolean
    joinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    emailVisible?: BoolFieldUpdateOperationsInput | boolean
    joinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorAuthUpsertWithoutUserInput = {
    update: XOR<TwoFactorAuthUpdateWithoutUserInput, TwoFactorAuthUncheckedUpdateWithoutUserInput>
    create: XOR<TwoFactorAuthCreateWithoutUserInput, TwoFactorAuthUncheckedCreateWithoutUserInput>
    where?: TwoFactorAuthWhereInput
  }

  export type TwoFactorAuthUpdateToOneWithWhereWithoutUserInput = {
    where?: TwoFactorAuthWhereInput
    data: XOR<TwoFactorAuthUpdateWithoutUserInput, TwoFactorAuthUncheckedUpdateWithoutUserInput>
  }

  export type TwoFactorAuthUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    backupCodes?: NullableStringFieldUpdateOperationsInput | string | null
    backupCodesUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorAuthUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    backupCodes?: NullableStringFieldUpdateOperationsInput | string | null
    backupCodesUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    accountStatus?: $Enums.AccountStatus
    deletedAt?: Date | string | null
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiresAt?: Date | string | null
    emailChangeToken?: string | null
    emailChangeTokenExpiresAt?: Date | string | null
    pendingEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sprints?: SprintCreateNestedManyWithoutCoordinatorInput
    approvals?: ApprovalHistoryCreateNestedManyWithoutRequestedByUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    volunteer?: VolunteerCreateNestedOneWithoutUserInput
    twoFactorAuth?: TwoFactorAuthCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    accountStatus?: $Enums.AccountStatus
    deletedAt?: Date | string | null
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiresAt?: Date | string | null
    emailChangeToken?: string | null
    emailChangeTokenExpiresAt?: Date | string | null
    pendingEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sprints?: SprintUncheckedCreateNestedManyWithoutCoordinatorInput
    approvals?: ApprovalHistoryUncheckedCreateNestedManyWithoutRequestedByUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    volunteer?: VolunteerUncheckedCreateNestedOneWithoutUserInput
    twoFactorAuth?: TwoFactorAuthUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailChangeTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprints?: SprintUpdateManyWithoutCoordinatorNestedInput
    approvals?: ApprovalHistoryUpdateManyWithoutRequestedByUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    volunteer?: VolunteerUpdateOneWithoutUserNestedInput
    twoFactorAuth?: TwoFactorAuthUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailChangeTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprints?: SprintUncheckedUpdateManyWithoutCoordinatorNestedInput
    approvals?: ApprovalHistoryUncheckedUpdateManyWithoutRequestedByUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    volunteer?: VolunteerUncheckedUpdateOneWithoutUserNestedInput
    twoFactorAuth?: TwoFactorAuthUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSprintsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    accountStatus?: $Enums.AccountStatus
    deletedAt?: Date | string | null
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiresAt?: Date | string | null
    emailChangeToken?: string | null
    emailChangeTokenExpiresAt?: Date | string | null
    pendingEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    approvals?: ApprovalHistoryCreateNestedManyWithoutRequestedByUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    volunteer?: VolunteerCreateNestedOneWithoutUserInput
    twoFactorAuth?: TwoFactorAuthCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSprintsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    accountStatus?: $Enums.AccountStatus
    deletedAt?: Date | string | null
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiresAt?: Date | string | null
    emailChangeToken?: string | null
    emailChangeTokenExpiresAt?: Date | string | null
    pendingEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    approvals?: ApprovalHistoryUncheckedCreateNestedManyWithoutRequestedByUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    volunteer?: VolunteerUncheckedCreateNestedOneWithoutUserInput
    twoFactorAuth?: TwoFactorAuthUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSprintsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSprintsInput, UserUncheckedCreateWithoutSprintsInput>
  }

  export type TaskCreateWithoutSprintInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    dueDate: Date | string
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: TaskCommentCreateNestedManyWithoutTaskInput
    activities?: TaskActivityCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutSprintInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    dueDate: Date | string
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: TaskCommentUncheckedCreateNestedManyWithoutTaskInput
    activities?: TaskActivityUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutSprintInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSprintInput, TaskUncheckedCreateWithoutSprintInput>
  }

  export type TaskCreateManySprintInputEnvelope = {
    data: TaskCreateManySprintInput | TaskCreateManySprintInput[]
    skipDuplicates?: boolean
  }

  export type ApprovalHistoryCreateWithoutSprintInput = {
    id?: string
    status?: string
    notes?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requestedByUser: UserCreateNestedOneWithoutApprovalsInput
  }

  export type ApprovalHistoryUncheckedCreateWithoutSprintInput = {
    id?: string
    requestedBy: string
    status?: string
    notes?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApprovalHistoryCreateOrConnectWithoutSprintInput = {
    where: ApprovalHistoryWhereUniqueInput
    create: XOR<ApprovalHistoryCreateWithoutSprintInput, ApprovalHistoryUncheckedCreateWithoutSprintInput>
  }

  export type ApprovalHistoryCreateManySprintInputEnvelope = {
    data: ApprovalHistoryCreateManySprintInput | ApprovalHistoryCreateManySprintInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSprintsInput = {
    update: XOR<UserUpdateWithoutSprintsInput, UserUncheckedUpdateWithoutSprintsInput>
    create: XOR<UserCreateWithoutSprintsInput, UserUncheckedCreateWithoutSprintsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSprintsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSprintsInput, UserUncheckedUpdateWithoutSprintsInput>
  }

  export type UserUpdateWithoutSprintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailChangeTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    approvals?: ApprovalHistoryUpdateManyWithoutRequestedByUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    volunteer?: VolunteerUpdateOneWithoutUserNestedInput
    twoFactorAuth?: TwoFactorAuthUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSprintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailChangeTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    approvals?: ApprovalHistoryUncheckedUpdateManyWithoutRequestedByUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    volunteer?: VolunteerUncheckedUpdateOneWithoutUserNestedInput
    twoFactorAuth?: TwoFactorAuthUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutSprintInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutSprintInput, TaskUncheckedUpdateWithoutSprintInput>
    create: XOR<TaskCreateWithoutSprintInput, TaskUncheckedCreateWithoutSprintInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutSprintInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutSprintInput, TaskUncheckedUpdateWithoutSprintInput>
  }

  export type TaskUpdateManyWithWhereWithoutSprintInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutSprintInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: StringFilter<"Task"> | string
    priority?: StringFilter<"Task"> | string
    dueDate?: DateTimeFilter<"Task"> | Date | string
    assignedTo?: StringNullableFilter<"Task"> | string | null
    sprintId?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type ApprovalHistoryUpsertWithWhereUniqueWithoutSprintInput = {
    where: ApprovalHistoryWhereUniqueInput
    update: XOR<ApprovalHistoryUpdateWithoutSprintInput, ApprovalHistoryUncheckedUpdateWithoutSprintInput>
    create: XOR<ApprovalHistoryCreateWithoutSprintInput, ApprovalHistoryUncheckedCreateWithoutSprintInput>
  }

  export type ApprovalHistoryUpdateWithWhereUniqueWithoutSprintInput = {
    where: ApprovalHistoryWhereUniqueInput
    data: XOR<ApprovalHistoryUpdateWithoutSprintInput, ApprovalHistoryUncheckedUpdateWithoutSprintInput>
  }

  export type ApprovalHistoryUpdateManyWithWhereWithoutSprintInput = {
    where: ApprovalHistoryScalarWhereInput
    data: XOR<ApprovalHistoryUpdateManyMutationInput, ApprovalHistoryUncheckedUpdateManyWithoutSprintInput>
  }

  export type SprintCreateWithoutTasksInput = {
    id?: string
    title: string
    description?: string | null
    location: string
    progressStatus?: string
    governmentAuthorizationStatus?: string
    platformAuthorizationStatus?: string
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinator: UserCreateNestedOneWithoutSprintsInput
    approvalHistory?: ApprovalHistoryCreateNestedManyWithoutSprintInput
  }

  export type SprintUncheckedCreateWithoutTasksInput = {
    id?: string
    title: string
    description?: string | null
    location: string
    progressStatus?: string
    governmentAuthorizationStatus?: string
    platformAuthorizationStatus?: string
    coordinatorId: string
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    approvalHistory?: ApprovalHistoryUncheckedCreateNestedManyWithoutSprintInput
  }

  export type SprintCreateOrConnectWithoutTasksInput = {
    where: SprintWhereUniqueInput
    create: XOR<SprintCreateWithoutTasksInput, SprintUncheckedCreateWithoutTasksInput>
  }

  export type TaskCommentCreateWithoutTaskInput = {
    id?: string
    userId: string
    userName: string
    userRole: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCommentUncheckedCreateWithoutTaskInput = {
    id?: string
    userId: string
    userName: string
    userRole: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCommentCreateOrConnectWithoutTaskInput = {
    where: TaskCommentWhereUniqueInput
    create: XOR<TaskCommentCreateWithoutTaskInput, TaskCommentUncheckedCreateWithoutTaskInput>
  }

  export type TaskCommentCreateManyTaskInputEnvelope = {
    data: TaskCommentCreateManyTaskInput | TaskCommentCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type TaskActivityCreateWithoutTaskInput = {
    id?: string
    userId?: string | null
    userName?: string | null
    action: string
    fieldName?: string | null
    oldValue?: string | null
    newValue?: string | null
    description: string
    createdAt?: Date | string
  }

  export type TaskActivityUncheckedCreateWithoutTaskInput = {
    id?: string
    userId?: string | null
    userName?: string | null
    action: string
    fieldName?: string | null
    oldValue?: string | null
    newValue?: string | null
    description: string
    createdAt?: Date | string
  }

  export type TaskActivityCreateOrConnectWithoutTaskInput = {
    where: TaskActivityWhereUniqueInput
    create: XOR<TaskActivityCreateWithoutTaskInput, TaskActivityUncheckedCreateWithoutTaskInput>
  }

  export type TaskActivityCreateManyTaskInputEnvelope = {
    data: TaskActivityCreateManyTaskInput | TaskActivityCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type SprintUpsertWithoutTasksInput = {
    update: XOR<SprintUpdateWithoutTasksInput, SprintUncheckedUpdateWithoutTasksInput>
    create: XOR<SprintCreateWithoutTasksInput, SprintUncheckedCreateWithoutTasksInput>
    where?: SprintWhereInput
  }

  export type SprintUpdateToOneWithWhereWithoutTasksInput = {
    where?: SprintWhereInput
    data: XOR<SprintUpdateWithoutTasksInput, SprintUncheckedUpdateWithoutTasksInput>
  }

  export type SprintUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    progressStatus?: StringFieldUpdateOperationsInput | string
    governmentAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    platformAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinator?: UserUpdateOneRequiredWithoutSprintsNestedInput
    approvalHistory?: ApprovalHistoryUpdateManyWithoutSprintNestedInput
  }

  export type SprintUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    progressStatus?: StringFieldUpdateOperationsInput | string
    governmentAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    platformAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    coordinatorId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalHistory?: ApprovalHistoryUncheckedUpdateManyWithoutSprintNestedInput
  }

  export type TaskCommentUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskCommentWhereUniqueInput
    update: XOR<TaskCommentUpdateWithoutTaskInput, TaskCommentUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskCommentCreateWithoutTaskInput, TaskCommentUncheckedCreateWithoutTaskInput>
  }

  export type TaskCommentUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskCommentWhereUniqueInput
    data: XOR<TaskCommentUpdateWithoutTaskInput, TaskCommentUncheckedUpdateWithoutTaskInput>
  }

  export type TaskCommentUpdateManyWithWhereWithoutTaskInput = {
    where: TaskCommentScalarWhereInput
    data: XOR<TaskCommentUpdateManyMutationInput, TaskCommentUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskCommentScalarWhereInput = {
    AND?: TaskCommentScalarWhereInput | TaskCommentScalarWhereInput[]
    OR?: TaskCommentScalarWhereInput[]
    NOT?: TaskCommentScalarWhereInput | TaskCommentScalarWhereInput[]
    id?: StringFilter<"TaskComment"> | string
    taskId?: StringFilter<"TaskComment"> | string
    userId?: StringFilter<"TaskComment"> | string
    userName?: StringFilter<"TaskComment"> | string
    userRole?: StringFilter<"TaskComment"> | string
    content?: StringFilter<"TaskComment"> | string
    createdAt?: DateTimeFilter<"TaskComment"> | Date | string
    updatedAt?: DateTimeFilter<"TaskComment"> | Date | string
  }

  export type TaskActivityUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskActivityWhereUniqueInput
    update: XOR<TaskActivityUpdateWithoutTaskInput, TaskActivityUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskActivityCreateWithoutTaskInput, TaskActivityUncheckedCreateWithoutTaskInput>
  }

  export type TaskActivityUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskActivityWhereUniqueInput
    data: XOR<TaskActivityUpdateWithoutTaskInput, TaskActivityUncheckedUpdateWithoutTaskInput>
  }

  export type TaskActivityUpdateManyWithWhereWithoutTaskInput = {
    where: TaskActivityScalarWhereInput
    data: XOR<TaskActivityUpdateManyMutationInput, TaskActivityUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskActivityScalarWhereInput = {
    AND?: TaskActivityScalarWhereInput | TaskActivityScalarWhereInput[]
    OR?: TaskActivityScalarWhereInput[]
    NOT?: TaskActivityScalarWhereInput | TaskActivityScalarWhereInput[]
    id?: StringFilter<"TaskActivity"> | string
    taskId?: StringFilter<"TaskActivity"> | string
    userId?: StringNullableFilter<"TaskActivity"> | string | null
    userName?: StringNullableFilter<"TaskActivity"> | string | null
    action?: StringFilter<"TaskActivity"> | string
    fieldName?: StringNullableFilter<"TaskActivity"> | string | null
    oldValue?: StringNullableFilter<"TaskActivity"> | string | null
    newValue?: StringNullableFilter<"TaskActivity"> | string | null
    description?: StringFilter<"TaskActivity"> | string
    createdAt?: DateTimeFilter<"TaskActivity"> | Date | string
  }

  export type TaskCreateWithoutCommentsInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    dueDate: Date | string
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sprint: SprintCreateNestedOneWithoutTasksInput
    activities?: TaskActivityCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    dueDate: Date | string
    assignedTo?: string | null
    sprintId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: TaskActivityUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutCommentsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
  }

  export type TaskUpsertWithoutCommentsInput = {
    update: XOR<TaskUpdateWithoutCommentsInput, TaskUncheckedUpdateWithoutCommentsInput>
    create: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutCommentsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutCommentsInput, TaskUncheckedUpdateWithoutCommentsInput>
  }

  export type TaskUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprint?: SprintUpdateOneRequiredWithoutTasksNestedInput
    activities?: TaskActivityUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: TaskActivityUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateWithoutActivitiesInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    dueDate: Date | string
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sprint: SprintCreateNestedOneWithoutTasksInput
    comments?: TaskCommentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutActivitiesInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    dueDate: Date | string
    assignedTo?: string | null
    sprintId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: TaskCommentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutActivitiesInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutActivitiesInput, TaskUncheckedCreateWithoutActivitiesInput>
  }

  export type TaskUpsertWithoutActivitiesInput = {
    update: XOR<TaskUpdateWithoutActivitiesInput, TaskUncheckedUpdateWithoutActivitiesInput>
    create: XOR<TaskCreateWithoutActivitiesInput, TaskUncheckedCreateWithoutActivitiesInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutActivitiesInput, TaskUncheckedUpdateWithoutActivitiesInput>
  }

  export type TaskUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprint?: SprintUpdateOneRequiredWithoutTasksNestedInput
    comments?: TaskCommentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    sprintId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: TaskCommentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserCreateWithoutVolunteerInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    accountStatus?: $Enums.AccountStatus
    deletedAt?: Date | string | null
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiresAt?: Date | string | null
    emailChangeToken?: string | null
    emailChangeTokenExpiresAt?: Date | string | null
    pendingEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sprints?: SprintCreateNestedManyWithoutCoordinatorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    approvals?: ApprovalHistoryCreateNestedManyWithoutRequestedByUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    twoFactorAuth?: TwoFactorAuthCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVolunteerInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    accountStatus?: $Enums.AccountStatus
    deletedAt?: Date | string | null
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiresAt?: Date | string | null
    emailChangeToken?: string | null
    emailChangeTokenExpiresAt?: Date | string | null
    pendingEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sprints?: SprintUncheckedCreateNestedManyWithoutCoordinatorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    approvals?: ApprovalHistoryUncheckedCreateNestedManyWithoutRequestedByUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    twoFactorAuth?: TwoFactorAuthUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVolunteerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVolunteerInput, UserUncheckedCreateWithoutVolunteerInput>
  }

  export type UserUpsertWithoutVolunteerInput = {
    update: XOR<UserUpdateWithoutVolunteerInput, UserUncheckedUpdateWithoutVolunteerInput>
    create: XOR<UserCreateWithoutVolunteerInput, UserUncheckedCreateWithoutVolunteerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVolunteerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVolunteerInput, UserUncheckedUpdateWithoutVolunteerInput>
  }

  export type UserUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailChangeTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprints?: SprintUpdateManyWithoutCoordinatorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    approvals?: ApprovalHistoryUpdateManyWithoutRequestedByUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    twoFactorAuth?: TwoFactorAuthUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailChangeTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprints?: SprintUncheckedUpdateManyWithoutCoordinatorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    approvals?: ApprovalHistoryUncheckedUpdateManyWithoutRequestedByUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    twoFactorAuth?: TwoFactorAuthUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SprintCreateWithoutApprovalHistoryInput = {
    id?: string
    title: string
    description?: string | null
    location: string
    progressStatus?: string
    governmentAuthorizationStatus?: string
    platformAuthorizationStatus?: string
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinator: UserCreateNestedOneWithoutSprintsInput
    tasks?: TaskCreateNestedManyWithoutSprintInput
  }

  export type SprintUncheckedCreateWithoutApprovalHistoryInput = {
    id?: string
    title: string
    description?: string | null
    location: string
    progressStatus?: string
    governmentAuthorizationStatus?: string
    platformAuthorizationStatus?: string
    coordinatorId: string
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutSprintInput
  }

  export type SprintCreateOrConnectWithoutApprovalHistoryInput = {
    where: SprintWhereUniqueInput
    create: XOR<SprintCreateWithoutApprovalHistoryInput, SprintUncheckedCreateWithoutApprovalHistoryInput>
  }

  export type UserCreateWithoutApprovalsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    accountStatus?: $Enums.AccountStatus
    deletedAt?: Date | string | null
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiresAt?: Date | string | null
    emailChangeToken?: string | null
    emailChangeTokenExpiresAt?: Date | string | null
    pendingEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sprints?: SprintCreateNestedManyWithoutCoordinatorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    volunteer?: VolunteerCreateNestedOneWithoutUserInput
    twoFactorAuth?: TwoFactorAuthCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApprovalsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    accountStatus?: $Enums.AccountStatus
    deletedAt?: Date | string | null
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiresAt?: Date | string | null
    emailChangeToken?: string | null
    emailChangeTokenExpiresAt?: Date | string | null
    pendingEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sprints?: SprintUncheckedCreateNestedManyWithoutCoordinatorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    volunteer?: VolunteerUncheckedCreateNestedOneWithoutUserInput
    twoFactorAuth?: TwoFactorAuthUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApprovalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
  }

  export type SprintUpsertWithoutApprovalHistoryInput = {
    update: XOR<SprintUpdateWithoutApprovalHistoryInput, SprintUncheckedUpdateWithoutApprovalHistoryInput>
    create: XOR<SprintCreateWithoutApprovalHistoryInput, SprintUncheckedCreateWithoutApprovalHistoryInput>
    where?: SprintWhereInput
  }

  export type SprintUpdateToOneWithWhereWithoutApprovalHistoryInput = {
    where?: SprintWhereInput
    data: XOR<SprintUpdateWithoutApprovalHistoryInput, SprintUncheckedUpdateWithoutApprovalHistoryInput>
  }

  export type SprintUpdateWithoutApprovalHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    progressStatus?: StringFieldUpdateOperationsInput | string
    governmentAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    platformAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinator?: UserUpdateOneRequiredWithoutSprintsNestedInput
    tasks?: TaskUpdateManyWithoutSprintNestedInput
  }

  export type SprintUncheckedUpdateWithoutApprovalHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    progressStatus?: StringFieldUpdateOperationsInput | string
    governmentAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    platformAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    coordinatorId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutSprintNestedInput
  }

  export type UserUpsertWithoutApprovalsInput = {
    update: XOR<UserUpdateWithoutApprovalsInput, UserUncheckedUpdateWithoutApprovalsInput>
    create: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovalsInput, UserUncheckedUpdateWithoutApprovalsInput>
  }

  export type UserUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailChangeTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprints?: SprintUpdateManyWithoutCoordinatorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    volunteer?: VolunteerUpdateOneWithoutUserNestedInput
    twoFactorAuth?: TwoFactorAuthUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailChangeTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprints?: SprintUncheckedUpdateManyWithoutCoordinatorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    volunteer?: VolunteerUncheckedUpdateOneWithoutUserNestedInput
    twoFactorAuth?: TwoFactorAuthUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    accountStatus?: $Enums.AccountStatus
    deletedAt?: Date | string | null
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiresAt?: Date | string | null
    emailChangeToken?: string | null
    emailChangeTokenExpiresAt?: Date | string | null
    pendingEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sprints?: SprintCreateNestedManyWithoutCoordinatorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    approvals?: ApprovalHistoryCreateNestedManyWithoutRequestedByUserInput
    volunteer?: VolunteerCreateNestedOneWithoutUserInput
    twoFactorAuth?: TwoFactorAuthCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    accountStatus?: $Enums.AccountStatus
    deletedAt?: Date | string | null
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiresAt?: Date | string | null
    emailChangeToken?: string | null
    emailChangeTokenExpiresAt?: Date | string | null
    pendingEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sprints?: SprintUncheckedCreateNestedManyWithoutCoordinatorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    approvals?: ApprovalHistoryUncheckedCreateNestedManyWithoutRequestedByUserInput
    volunteer?: VolunteerUncheckedCreateNestedOneWithoutUserInput
    twoFactorAuth?: TwoFactorAuthUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailChangeTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprints?: SprintUpdateManyWithoutCoordinatorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    approvals?: ApprovalHistoryUpdateManyWithoutRequestedByUserNestedInput
    volunteer?: VolunteerUpdateOneWithoutUserNestedInput
    twoFactorAuth?: TwoFactorAuthUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailChangeTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprints?: SprintUncheckedUpdateManyWithoutCoordinatorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    approvals?: ApprovalHistoryUncheckedUpdateManyWithoutRequestedByUserNestedInput
    volunteer?: VolunteerUncheckedUpdateOneWithoutUserNestedInput
    twoFactorAuth?: TwoFactorAuthUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutTwoFactorAuthInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    accountStatus?: $Enums.AccountStatus
    deletedAt?: Date | string | null
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiresAt?: Date | string | null
    emailChangeToken?: string | null
    emailChangeTokenExpiresAt?: Date | string | null
    pendingEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sprints?: SprintCreateNestedManyWithoutCoordinatorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    approvals?: ApprovalHistoryCreateNestedManyWithoutRequestedByUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    volunteer?: VolunteerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTwoFactorAuthInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    accountStatus?: $Enums.AccountStatus
    deletedAt?: Date | string | null
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiresAt?: Date | string | null
    emailChangeToken?: string | null
    emailChangeTokenExpiresAt?: Date | string | null
    pendingEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sprints?: SprintUncheckedCreateNestedManyWithoutCoordinatorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    approvals?: ApprovalHistoryUncheckedCreateNestedManyWithoutRequestedByUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    volunteer?: VolunteerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTwoFactorAuthInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTwoFactorAuthInput, UserUncheckedCreateWithoutTwoFactorAuthInput>
  }

  export type UserUpsertWithoutTwoFactorAuthInput = {
    update: XOR<UserUpdateWithoutTwoFactorAuthInput, UserUncheckedUpdateWithoutTwoFactorAuthInput>
    create: XOR<UserCreateWithoutTwoFactorAuthInput, UserUncheckedCreateWithoutTwoFactorAuthInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTwoFactorAuthInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTwoFactorAuthInput, UserUncheckedUpdateWithoutTwoFactorAuthInput>
  }

  export type UserUpdateWithoutTwoFactorAuthInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailChangeTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprints?: SprintUpdateManyWithoutCoordinatorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    approvals?: ApprovalHistoryUpdateManyWithoutRequestedByUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    volunteer?: VolunteerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTwoFactorAuthInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailChangeTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprints?: SprintUncheckedUpdateManyWithoutCoordinatorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    approvals?: ApprovalHistoryUncheckedUpdateManyWithoutRequestedByUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    volunteer?: VolunteerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SprintCreateManyCoordinatorInput = {
    id?: string
    title: string
    description?: string | null
    location: string
    progressStatus?: string
    governmentAuthorizationStatus?: string
    platformAuthorizationStatus?: string
    startDate: Date | string
    endDate: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    deviceInfo?: string | null
    ipAddress?: string | null
    location?: string | null
    lastActivityAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApprovalHistoryCreateManyRequestedByUserInput = {
    id?: string
    sprintId: string
    status?: string
    notes?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: string
    title: string
    message: string
    relatedTaskId?: string | null
    relatedSprintId?: string | null
    isRead?: boolean
    metadata?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SprintUpdateWithoutCoordinatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    progressStatus?: StringFieldUpdateOperationsInput | string
    governmentAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    platformAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutSprintNestedInput
    approvalHistory?: ApprovalHistoryUpdateManyWithoutSprintNestedInput
  }

  export type SprintUncheckedUpdateWithoutCoordinatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    progressStatus?: StringFieldUpdateOperationsInput | string
    governmentAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    platformAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutSprintNestedInput
    approvalHistory?: ApprovalHistoryUncheckedUpdateManyWithoutSprintNestedInput
  }

  export type SprintUncheckedUpdateManyWithoutCoordinatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    progressStatus?: StringFieldUpdateOperationsInput | string
    governmentAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    platformAuthorizationStatus?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalHistoryUpdateWithoutRequestedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sprint?: SprintUpdateOneRequiredWithoutApprovalHistoryNestedInput
  }

  export type ApprovalHistoryUncheckedUpdateWithoutRequestedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sprintId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalHistoryUncheckedUpdateManyWithoutRequestedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sprintId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    relatedTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedSprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    relatedTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedSprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    relatedTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedSprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManySprintInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    priority?: string
    dueDate: Date | string
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApprovalHistoryCreateManySprintInput = {
    id?: string
    requestedBy: string
    status?: string
    notes?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutSprintInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: TaskCommentUpdateManyWithoutTaskNestedInput
    activities?: TaskActivityUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutSprintInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: TaskCommentUncheckedUpdateManyWithoutTaskNestedInput
    activities?: TaskActivityUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutSprintInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalHistoryUpdateWithoutSprintInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedByUser?: UserUpdateOneRequiredWithoutApprovalsNestedInput
  }

  export type ApprovalHistoryUncheckedUpdateWithoutSprintInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalHistoryUncheckedUpdateManyWithoutSprintInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCommentCreateManyTaskInput = {
    id?: string
    userId: string
    userName: string
    userRole: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskActivityCreateManyTaskInput = {
    id?: string
    userId?: string | null
    userName?: string | null
    action: string
    fieldName?: string | null
    oldValue?: string | null
    newValue?: string | null
    description: string
    createdAt?: Date | string
  }

  export type TaskCommentUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCommentUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCommentUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskActivityUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    fieldName?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskActivityUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    fieldName?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskActivityUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    fieldName?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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