const Sequelize = require('sequelize');

const sequelize = new Sequelize('reactjs', 'fabricio', 'pansr25372',{
    host: 'localhost',
    dialect: 'mysql'  
})

const usuario = sequelize.define('usuarios', {
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    senha: Sequelize.STRING,
    tipo: Sequelize.STRING
})

usuario.create({
    nome: 'Fabrício Rocha',
    email: 'fabricio,frocha87@gmail.com',
    senha: 'teste123',
    tipo: 'Administrador'
});