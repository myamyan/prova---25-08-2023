import 'dotenv/config'

import clienteController from './src/controller/clienteController.js';
import automovelController from './src/controller/automovelController.js';

import express  from 'express'
import cors from 'cors'



const server = express();
server.use(cors());
server.use(express.json());


server.use(clienteController);
server.use(automovelController);

server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`));