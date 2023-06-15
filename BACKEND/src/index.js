const express = require('express')
const app = express()
var cors = require('cors');

const customerTypes = require("../routes/customerTypes");
const users = require("../routes/users");
const contractTypes = require("../routes/contractTypes");
const generatorBrands = require("../routes/generatorBrands");
const generatorModels = require("../routes/generatorModels");

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
