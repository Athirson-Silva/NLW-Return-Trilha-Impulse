//npm run dev

import cors from 'cors';
import express from 'express';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//PUT - Atualizar um grupo de informações de uma entidade
//PATCH - Atualizar uma única informação de uma entidade

app.listen(3333, () => {
    console.log('HTTP server running!');
});