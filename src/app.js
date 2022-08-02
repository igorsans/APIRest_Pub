import express from "express";
import MenuController from "./controller/cardapio-controller.js";
import TransactionsController from "./controller/transacao-controller.js";
import SuppliersController from "./controller/fornecedor-controller.js";
import estoqueController from "./controller/estoque-controller.js";
import StaffControllers from "./controller/funcionario-controller.js";

import cors from "cors";
import autorizacao from "./middleware/valida-header.js"

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
autorizacao.auth(app)

app.listen(port, () => {
  console.log(`Server online, address: http://localhost:${port}`);
});

StaffControllers.routes(app);
TransactionsController.routes(app);
MenuController.routes(app);
SuppliersController.routes(app);
estoqueController.routes(app);
export default app
