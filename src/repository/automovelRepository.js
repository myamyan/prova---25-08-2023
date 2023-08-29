import { con } from './connection.js';

export async function cadastrarautomovel(automovel) {



    const comando =

        `
    
    insert into tb_automovel (id_tipos, nm_modelo, ds_marca, dt_ano, ds_placa)
        values(?, ?, ?, ?, ?);
    

    `

    const [resposta] = await con.query(comando, [automovel.tipo, automovel.modelo, automovel.marca, automovel.ano, automovel.placa]);
    automovel.id = resposta.insertId;


    return automovel;

}

export async function buscarAutomovelporModelo(modelo) {



    const comando =

        `
        select  nm_modelo, 
        ds_marca,
        dt_ano, 
        id_tipos,
        ds_placa

from tb_automovel 

where nm_modelo like ?;


    `

    const [resposta] = await con.query(comando, [`%${modelo}%`]);

    return resposta;

}



export async function buscarAutomovelporMarca(marca) {



    const comando =

        `
        select  nm_modelo, 
        ds_marca,
        dt_ano, 
        id_tipos,
        ds_placa

from tb_automovel 

where ds_marca like ?;


    `

    const [resposta] = await con.query(comando, [`%${marca}%`]);

    return resposta;

}




export async function buscarAutomovelporPlaca(placa) {



    const comando =

        `
        select  nm_modelo, 
        ds_marca,
        dt_ano, 
        id_tipos,
        ds_placa

from tb_automovel 

where ds_placa like ?;


    `

    const [resposta] = await con.query(comando, [`%${placa}%`]);

    return resposta;

}




export async function alterarAutomovel(modelo, automovel) {



    const comando =

        `
            update tb_automovel
                set nm_modelo           =?,
                    id_tipos            =?,
                    ds_marca            =?,
                    dt_ano              =?,
                    ds_placa            =?
                where nm_modelo         =?`

    const [resposta] = await con.query(comando, [automovel.modelo, automovel.tipos, automovel.marca, automovel.ano, automovel.placa, modelo]);

    return resposta.affectedRows;

}


export async function excluirAutomovel(modelo) {



    const comando =

        `
    
        delete from tb_automovel
        where nm_modelo
        like  ?;

    `

    const [resposta] = await con.query(comando, [`%${modelo}%`]);

    return resposta.affectedRows;

}






// export async function Trocar(tipo){

//     if (tipo == 1){


//         x = 'Carro'

//     }

//     if (tipo != 1 ) {
        
//         x = 'Moto'

//     }

//     const resposta = await con.query(x)

//     return resposta;

// }