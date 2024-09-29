const { models } = require('../libs/sequelize');
class TodoService {
    
    async find() {
        const todos = await models.Todo.findAll();
        return todos;
    }

    async findOne(id) {
        const todo = await models.Todo.findByPk(id);
        if (!todo) {
            throw new Error('Item not found');
        }
        return todo;
    }

    async create(data) {
        const todo = await models.Todo.create(data);
        return todo;
    }

    async update(id, updatedData) {
        const todo = await this.findOne(id);
        const updated = await todo.update(updatedData);
        return updated;
    }

    async delete(id) {
        const todo = await this.findOne(id);
        const result = await todo.destroy();
        return { 
            id,
            result,
        };
    }
}

module.exports = TodoService;
