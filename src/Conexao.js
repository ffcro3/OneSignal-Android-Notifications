//CONEXÃO COM BANCO
const Sequelize = require('sequelize');

const sequelize = new Sequelize('monthly_tech', 'fabricio', 'pansr25372',{
    host: 'localhost',
    dialect: 'mysql'  
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}