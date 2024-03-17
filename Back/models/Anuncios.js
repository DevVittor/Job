import {DataTypes} from "sequelize";
import conn from "../database/conn.js";
import Usuario from "./Usuarios.js";

const Anuncio = conn.define("anuncios",{
    titulo:{
        type:DataTypes.STRING(150),
        allowNull:false
    },
    detalhes:{
        type:DataTypes.STRING(250),
        allowNull:false
    },
    valores:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    prazo:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    visualizador:{
        type:DataTypes.INTEGER,
        allowNull:true
    },  
    autor:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    publicado:{
        type:DataTypes.STRING,
        allowNull:false
    },
    userId: { // Adicionando a coluna para armazenar a referência ao usuário autor
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Usuario, // Referenciando o modelo de usuário
            key: 'id' // Referenciando a coluna de id na tabela de usuários
        }
    }
});
// Defina a relação entre Anuncio e Usuario
Anuncio.belongsTo(Usuario, { foreignKey: 'userId' }); // 'userId' é a chave estrangeira que faz referência ao usuário autor do anúncio

Anuncio.sync()
.then(()=>{
    console.log(`A tabela Anuncios foi criado!`);
}).catch((error)=>{
    console.log(`Não foi possível criar a tabela anuncios. ${error}`);
})

export default Anuncio;