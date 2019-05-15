const conexao = require('../Conexao');

const Usuario = conexao.sequelize.define('tb_usuarios', {
    id: {
        type: conexao.Sequelize.INTEGER,
        primaryKey: true
    },
    nome_user: conexao.Sequelize.STRING,
    email_user: conexao.Sequelize.STRING,
    site_user: conexao.Sequelize.STRING,
    tipo_user: conexao.Sequelize.STRING
})

module.exports = Usuario