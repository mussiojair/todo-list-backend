const { Sequelize } = require('sequelize');
const { path } = require('path');

const options = {
    dialect: 'sqlite',
    storage: path.join(__dirname, '../database.sqlite'),
};

const sequelize = new Sequelize(options);

setupModels(sequelize);

module.exports = sequelize;
