import express from "express";

//Na linha seguinte sao importadas todas as configuracoes 
// contidas no ficheiro "index.ts" que esta dentro da pasta "database"
import "./database";

import {routes} from "./routes";

const app = express();

app.use(express.json());

app.use(routes);


app.listen(3333, () => console.log("Server is running on port 3333"));