import Sequelize from "sequelize";

const conn = new Sequelize("vagas","root","",{
    host:"localhost",
    dialect:"mysql"
});

export default conn;