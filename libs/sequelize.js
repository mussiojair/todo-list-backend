const { Sequelize } = require('sequelize');
const path = require('path');
const setupModels = require('../db/models');

const options = {
    dialect: 'sqlite',
    storage: path.join(__dirname, '../database.sqlite'),
};

const sequelize = new Sequelize(options);

setupModels(sequelize);

module.exports = sequelize;
