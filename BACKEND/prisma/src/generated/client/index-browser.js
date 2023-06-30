
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.15.0
 * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
 */
Prisma.prismaVersion = {
  client: "4.15.0",
  engine: "8fbc245156db7124f997f4cecdd8d1219e360944"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.BlackOutDayTypesScalarFieldEnum = {
  id: 'id',
  type: 'type',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.BlackOutDaysScalarFieldEnum = {
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

exports.Prisma.Contract_typesScalarFieldEnum = {
  id: 'id',
  type_name: 'type_name',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Customer_typesScalarFieldEnum = {
  id: 'id',
  type_name: 'type_name',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.GeneratorBrandsScalarFieldEnum = {
  id: 'id',
  brand_name: 'brand_name',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.GeneratorModelsScalarFieldEnum = {
  id: 'id',
  model_name: 'model_name',
  brand_id: 'brand_id',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.GeneratorPhaseTypesScalarFieldEnum = {
  id: 'id',
  phase_type: 'phase_type',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ReminderThresoldDaysScalarFieldEnum = {
  id: 'id',
  thresold_day: 'thresold_day',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.RolesScalarFieldEnum = {
  id: 'id',
  title: 'title',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Service_levelsScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
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

exports.Prisma.WorkOrderStatusScalarFieldEnum = {
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

exports.Prisma.WorkOrderTypesScalarFieldEnum = {
  id: 'id',
  order_type: 'order_type',
  on_screen_color_code: 'on_screen_color_code',
  on_report_color_code: 'on_report_color_code',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};


exports.Prisma.ModelName = {
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

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
