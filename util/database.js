const Sequelize = require('sequelize');

const sequelize =new Sequelize('node-complete', 'root', 'Tiger4000',{
    dialect : 'mysql',
    host : 'localhost'
})

module.exports = sequelize;