import {DataTypes} from "sequelize";
import conn from "../database/conn.js";

const Usuario = conn.define("usuarios",{
    nome:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
});
Usuario.sync()
.then(()=>{
    console.log(`A tabela usuário foi criada`);
}).catch((error)=>{
    console.log(`Não deu para criar a tabela usuarios. ${error}`);
})

export default Usuario;