const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  info: {
    title: "Node Swagger API",
    version: "1.0.0",
    description: "Demonstrating how to describe a RESTful API with Swagger"
  },
  host: "localhost:3000",
  basePath: "/"
};
// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ["./**/routes/*.js", "routes.js"] // pass all in array
};
// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = {
  swaggerSpec
};
