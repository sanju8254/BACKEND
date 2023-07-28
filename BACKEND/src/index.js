const express = require('express')
const app = express()
var cors = require('cors');

const customerTypes = require("../routes/customerTypes");
const users = require("../routes/users");
const contractTypes = require("../routes/contractTypes");
const generatorBrands = require("../routes/generatorBrands");
const generatorModels = require("../routes/generatorModels");
const generatorPhaseType = require("../routes/generatorPhaseType");
const workOrderStatus = require("../routes/workOrderStatus");
const workOrderType = require("../routes/workOrderTypes");
const serviceLevel = require("../routes/serviceLevels");
const blackoutDayTypes = require("../routes/blackoutDayTypes");
const blackoutDay = require("../routes/blackoutDays");
const reminderThresoldDays = require("../routes/reminderThresoldDays");
const customerNoteTitlesMaster = require("../routes/customerNoteTitlesMaster");
const customerStatusList = require("../routes/customerStatusList");
const miscConfiguration = require("../routes/miscConfiguration");
const customers = require("../routes/customers");
const permissions = require("../routes/permissions");
const appearances = require("../routes/appearances");
const groups = require("../routes/groups");

app.use(cors());
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/api/customertypes', customerTypes);
app.use('/api/users', users);
app.use('/api/contracttypes', contractTypes);
app.use('/api/generatorbrands', generatorBrands);
app.use('/api/generatormodels', generatorModels);
app.use('/api/generatorphasetype', generatorPhaseType);
app.use('/api/workorderstatus', workOrderStatus);
app.use('/api/workordertype', workOrderType);
app.use('/api/servicelevel', serviceLevel);
app.use('/api/blackoutdaytype', blackoutDayTypes);
app.use('/api/blackoutday', blackoutDay);
app.use('/api/reminderthresolddays', reminderThresoldDays);
app.use('/api/customernotetitlesmaster', customerNoteTitlesMaster);
app.use('/api/customerstatuslist', customerStatusList);
app.use('/api/miscconfiguration', miscConfiguration);
app.use('/api/customers', customers);
app.use('/api/permissions', permissions);
app.use('/api/appearances', appearances);
app.use('/api/groups', groups);

/* Error handler middleware */
app.use((err, req, res, next) => 
{
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/js/rest-express#3-using-the-rest-api`),
)
