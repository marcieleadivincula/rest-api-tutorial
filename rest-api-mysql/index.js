const customExpress = require("./config/customExpress");
const connection = require("./infrastructure/connection");
const Tables = require("./infrastructure/tables");

connection.connect((err) => {
  if (err) {
    return console.error("error: " + err.message);
  } else {
    console.log("Connected to the MySQL server.");
  }

  Tables.init(connection);

  const app = customExpress();

  app.listen(3000, (req, res) => {
    console.log("Servidor rodando na porta 3000");
  });
});
