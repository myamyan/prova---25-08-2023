import { con } from './connection.js';

export async function cadastrarCliente(cliente) {



    const comando =

        `
    
    insert into tb_cliente (nm_cliente, ds_email, ds_telefone, ds_cpf, dc_cnh)
        values(?, ?, ?, ?, ?);
    

    `

    const [resposta] = await con.query(comando, [cliente.nome, cliente.email, cliente.telefone, cliente.cpf, cliente.cnh]);
    cliente.id = resposta.insertId;


    return cliente;

}


export async function consultarClienteporNome(nome) {



    const comando =

        `
    
    select  nm_cliente, 
                ds_cpf,
            ds_telefone, 
                ds_email

from tb_cliente
where nm_cliente like ?;

    `

    const [resposta] = await con.query(comando, [`%${nome}%`]);

    return resposta;

}

export async function excluirCliente(nome) {



    const comando =

        `
    
        delete from tb_cliente
        where nm_cliente 
        like  ?;

    `

    const [resposta] = await con.query(comando, [`%${nome}%`]);

    return resposta.affectedRows;

}


export async function alterarCliente(nome, cliente) {



    const comando =

        `
            update tb_cliente
                set nm_cliente        =?,
                    ds_email          =?,
                    ds_telefone       =?,
                    ds_cpf            =?,
                    dc_cnh            =?
                where nm_cliente      =?`

    const [resposta] = await con.query(comando, [cliente.nome, cliente.email, cliente.telefone, cliente.cpf, cliente.cnh, nome]);

    return resposta.affectedRows;

}



