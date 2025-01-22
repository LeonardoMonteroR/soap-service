const express = require("express");
const soap = require("soap");
const { myService, xml } = require("./service");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  const wsdlPath = "/wsdl";
  soap.listen(app, wsdlPath, myService, xml);
  console.log(`SOAP service available at http://localhost:${PORT}${wsdlPath}?wsdl`);
});
