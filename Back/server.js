import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import moment from "moment-timezone";
import bcrypt from "bcrypt";
import conn from "./database/conn.js";
import Usuario from "./models/Usuarios.js";
import Anuncio from "./models/Anuncios.js";
import cors from "cors";
import http from "node:http";
const createServer = http.createServer(app);

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.disable("x-powered-by");

app.post("/anunciar",async(req,res)=>{

    const id = 1;
    const {titulo,detalhes,valores,prazo,autor} = req.body;

    if(!titulo) return res.status(404).json({msg:`É necessário tero campo titulo preenchido!`});
    if(!detalhes) return res.status(404).json({msg:`É necessário ter o campo detalhe preenchido!`});
    if(!valores) return res.status(404).json({msg:`É necessário ter o campo valores preenchido!`});
    if(!prazo) return res.status(404).json({msg:`É necessário ter o campo prazo preenchido!`});
    
    try {
        const usuarioAnuncio = await Usuario.findOne({
            where:{
                id:id
            }
        });

        console.log("Usuario:",usuarioAnuncio);

        const dataAtual = new Date();
        
        const dia = dataAtual.getDate();
        const mes = dataAtual.getMonth() +1;
        const ano = dataAtual.getFullYear();
        const dataPublicado = `${dia < 10 ? '0' + dia : dia}/${mes < 10 ? '0' + mes : mes}/${ano}`;

        const createAnuncio = await Anuncio.create({
            titulo,
            detalhes,
            valores,
            prazo,
            autor,
            publicado:dataPublicado
        });

        await createAnuncio.save()
        res.status(201).json({msg:`Anuncio criado com sucesso!`});

    } catch (error) {
        res.status(500).json({msg:`Não foi possível encontrar nenhum dado. ${error}`});
    }

})

app.post("/register",async(req,res)=>{
    const {email,password} = req.body;

    try {
        const duplicateEmail = await Usuario.findOne({
            where:{
                email:email
            }
        });
        if(duplicateEmail) return res.status(404).json({msg:`Esse email já foi cadastrado!`});

        const salt = await bcrypt.genSaltSync(16);
        const hash = await bcrypt.hashSync(password,salt);

        const createUser = await Usuario.create({
            email,
            password:hash
        });
        await createUser.save();
        res.status(201).json({msg:`O usuário foi criado`});

    } catch (error) {
        res.status(500).json({msg:`Não foi possível resgatar os dados. ${error}`});
    }

});

app.post("/login",async(req,res)=>{
    const {email,password} = req.body;

    try {
        const existUser = await Usuario.findOne({
            where:{
                email:email
            }
        });
    
        if(!existUser) return res.status(404).json({msg:`Esse email ainda não foi cadastrado!`});
    
        const passwordCorrect = await bcrypt.compareSync(password,existUser.password);
        if(!passwordCorrect) return res.status(404).json({msg:`A senha está incorreta`});
    
        res.status(200).json({msg:`Login feito`});
    } catch (error) {
        res.status(500).json({msg:`Não foi reuniar os dados para o login. ${error}`});  
    }
});

conn.authenticate()
.then(()=>{
    console.log(`Banco de dados sincronizado`);
}).then(()=>{
    createServer.listen(port,()=>{
        console.log(`Servidor rodando na porta ${port}`)
    });
}).catch((error)=>{
    console.log(`Não foi possível authentificar nada. ${error}`)
})

