const {Model, DataTypes, Sequelize} = require('sequelize');

const TODO_TABLE = 'todos';

const TodoSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    completed: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
};

class Todo extends Model {
    static associate(models) {

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: TODO_TABLE,
            modelName: 'Todo',
            timestamps: false,
        }
    }
}

module.exports = { Todo, TodoSchema, TODO_TABLE };