const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'node-auth',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

module.exports = sequelize.authenticate();