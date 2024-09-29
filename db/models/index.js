const { Todo, TodoSchema } = require("./todo.model");

function setupModels(sequelize) {
    // Model configuration
    Todo.init(TodoSchema, Todo.config(sequelize));
}

module.exports = setupModels;
