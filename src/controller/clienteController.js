

import { alterarCliente, cadastrarCliente, consultarClienteporNome, excluirCliente} from '../repository/clienteRepository.js';

import { Router } from "express";


const server = Router();

server.post('/cadastro', async (req, resp) =>{

    try{

        const aindaCadastrando = req.body;

        const clienteCadastrado = await cadastrarCliente(aindaCadastrando);

        if (!aindaCadastrando.nome) {

            throw new Error('Campo nome é obrigatório!');
            
        }

        resp.send(clienteCadastrado);


    } catch (err) {

            resp.status(400).send({
                erro: err.message
            })


    }

});


server.get('/cliente/busca', async (req, resp) =>{

    try{

        const { nome } = req.query;

        const rpesquisa = await consultarClienteporNome( nome );

        if (!rpesquisa) {

            throw new Error('Campo nome é obrigatório!');
            
        }

        resp.send(rpesquisa);


    } catch (err) {

            resp.status(400).send({
                erro: err.message
            })


    }

});



server.delete('/cliente/busca', async (req, resp) =>{

    try{

        const { nome } = req.query;

        const rpesquisa = await excluirCliente( nome );

        if (rpesquisa != 1) {

            throw new Error('Cliente não pode ser removido');
            
        }

        resp.status(204).send();


    } catch (err) {

            resp.status(400).send({
                erro: err.message
            })


    }

});



server.put('/cliente/busca', async (req, resp) =>{

    try{

        const { nome } = req.query;
        const aindaCadastrando = req.body;

        const rpesquisa = await alterarCliente( nome, aindaCadastrando );

        if (rpesquisa != 1) {

            throw new Error('Cliente não pode ser alterado');
            
        }

        resp.status(204).send();


    } catch (err) {

            resp.status(400).send({
                erro: err.message
            })


    }

});




export default server;