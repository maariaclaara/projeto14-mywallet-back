import express from "express";
import cors from "cors";
import router from "./routes/indexRouter.js";

// Criação do app
const app = express();


// Configurações
app.use(cors());
app.use(express.json());
app.use(router);


//Ligar o servidor para as requisições
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

