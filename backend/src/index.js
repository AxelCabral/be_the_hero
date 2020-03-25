const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/** 
* Rota "/Recurso"
 */
/**
 * Métodos HTTP:
 * 
 * GET: Buscar informação no back-end
 * POST: Criar informação no back-end
 * PUT: Alterar informação no back-end
 * DELETE: Deletar informação no back-end
 */
/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados pela rota ("localhost:3333/users?name=Axel")
 * 
 * const params = request.query;
 * 
 * Route Params: Parâmetros utilizados para identificar recursos ('/users/:id' -> 'users/1')
 * 
 * const params = request.params;
 * 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * const body = request.body;
 */

app.listen(3333);