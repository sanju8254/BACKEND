
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
 * Query Engine version: 46285f314e200f5f1afc2baea86e3e40ff7fb309
 */
Prisma.prismaVersion = {
  client: "4.15.0",
  engine: "46285f314e200f5f1afc2baea86e3e40ff7fb309"
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

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Customer_typesScalarFieldEnum = {
  id: 'id',
  type_name: 'type_name',
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

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  contact_name: 'contact_name',
  email: 'email',
  password: 'password',
  address: 'address',
  billing_address: 'billing_address',
  contact: 'contact',
  customer_type_id: 'customer_type_id',
  user_type: 'user_type',
  created_by: 'created_by',
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

exports.Prisma.Service_levelsScalarFieldEnum = {
  id: 'id',
  service_name: 'service_name',
  service_limit: 'service_limit',
  threshold_limit: 'threshold_limit',
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

exports.Prisma.ReminderThresoldDaysScalarFieldEnum = {
  id: 'id',
  thresold_day: 'thresold_day',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CustomerContractsScalarFieldEnum = {
  id: 'id',
  customer_id: 'customer_id',
  first_name: 'first_name',
  last_name: 'last_name',
  primary_email: 'primary_email',
  secondary_email: 'secondary_email',
  home_phone_number: 'home_phone_number',
  work_phone_number: 'work_phone_number',
  mobile: 'mobile',
  fax_phone_number: 'fax_phone_number',
  other_phone_number1: 'other_phone_number1',
  other_phone_number2: 'other_phone_number2',
  job_title: 'job_title',
  is_primary: 'is_primary',
  created_by: 'created_by',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CustomerNoteTitlesMasterScalarFieldEnum = {
  id: 'id',
  title: 'title',
  created_by: 'created_by',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CustomerStatusListScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  created_by: 'created_by',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.MiscConfigurationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  created_by: 'created_by',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.LoggingDetailsScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  configuare_value: 'configuare_value',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SmtpDetailsScalarFieldEnum = {
  id: 'id',
  host_name: 'host_name',
  port_no: 'port_no',
  user_name: 'user_name',
  password: 'password',
  encryption_type: 'encryption_type',
  sent_from: 'sent_from',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PermissionsScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AppearancesScalarFieldEnum = {
  id: 'id',
  role: 'role',
  description: 'description',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AppearancePermissionsScalarFieldEnum = {
  id: 'id',
  appearance_id: 'appearance_id',
  permission_id: 'permission_id'
};

exports.Prisma.GroupsScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.GroupsAppearanceScalarFieldEnum = {
  id: 'id',
  group_id: 'group_id',
  appearance_id: 'appearance_id'
};

exports.Prisma.CustomerDetailsScalarFieldEnum = {
  id: 'id',
  company_name: 'company_name',
  customer_type_id: 'customer_type_id',
  physical_address: 'physical_address',
  billing_address: 'billing_address',
  is_deleted: 'is_deleted',
  created_by: 'created_by',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
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
  ReminderThresoldDays: 'ReminderThresoldDays',
  CustomerContracts: 'CustomerContracts',
  CustomerNoteTitlesMaster: 'CustomerNoteTitlesMaster',
  CustomerStatusList: 'CustomerStatusList',
  MiscConfiguration: 'MiscConfiguration',
  LoggingDetails: 'LoggingDetails',
  SmtpDetails: 'SmtpDetails',
  Permissions: 'Permissions',
  Appearances: 'Appearances',
  AppearancePermissions: 'AppearancePermissions',
  Groups: 'Groups',
  GroupsAppearance: 'GroupsAppearance',
  CustomerDetails: 'CustomerDetails'
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
