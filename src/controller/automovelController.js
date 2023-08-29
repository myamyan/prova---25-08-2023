
import { alterarAutomovel, buscarAutomovelporMarca, buscarAutomovelporModelo, buscarAutomovelporPlaca, cadastrarautomovel, excluirAutomovel } from "../repository/automovelRepository.js";


import { Router } from "express";


const server = Router();

server.post('/automovel/cadastro', async (req, resp) =>{

    try{

        const aindaCadastrandoaut = req.body;

        const automovelCadastrado = await cadastrarautomovel(aindaCadastrandoaut);

        if (!aindaCadastrandoaut.modelo) {

            throw new Error('Campo modelo é obrigatório!');
            
        }

        resp.send(automovelCadastrado);


    } catch (err) {

            resp.status(400).send({
                erro: err.message
            })


    }

});








server.get('/automovel/busca', async (req, resp) =>{

    try{

        const { modelo } = req.query;

        const rpesquisa = await buscarAutomovelporModelo( modelo );

        if (!rpesquisa) {

            throw new Error('Campo modelo é obrigatório!');
            
        }

        resp.send(rpesquisa);


    } catch (err) {

            resp.status(400).send({
                erro: err.message
            })


    }

});




server.get('/automovel/buscamarca', async (req, resp) =>{

    try{

        const { marca } = req.query;

        const rpesquisa = await buscarAutomovelporMarca( marca );

        if (!rpesquisa) {

            throw new Error('Campo marca é obrigatório!');
            
        }

        resp.send(rpesquisa);


    } catch (err) {

            resp.status(400).send({
                erro: err.message
            })


    }

});



server.get('/automovel/buscaplaca', async (req, resp) =>{

    try{

        const { placa } = req.query;

        const rpesquisa = await buscarAutomovelporPlaca( placa );

        if (!rpesquisa) {

            throw new Error('Campo placa é obrigatório!');
            
        }

        resp.send(rpesquisa);


    } catch (err) {

            resp.status(400).send({
                erro: err.message
            })


    }

});


server.put('/automovel/busca', async (req, resp) =>{

    try{

        const { modelo } = req.query;
        const aindaCadastrandoaut = req.body;

        const rpesquisa = await alterarAutomovel( modelo, aindaCadastrandoaut );

        if (rpesquisa != 1) {

            throw new Error('Automovel não pode ser alterado');
            
        }

        resp.status(204).send();


    } catch (err) {

            resp.status(400).send({
                erro: err.message
            })


    }

});













server.delete('/automovel/busca', async (req, resp) =>{

    try{

        const { modelo } = req.query;

        const rpesquisa = await excluirAutomovel( modelo );

        if (rpesquisa != 1) {

            throw new Error('Automóvel não pode ser removido');
            
        }

        resp.status(204).send();


    } catch (err) {

            resp.status(400).send({
                erro: err.message
            })


    }

});













export default server;