const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const completed = Joi.boolean();

const getTodoSchema = Joi.object({
    id: id.required(),
});

const createTodoSchema = Joi.object({
    name: name.required(),
    completed: completed,
});

const updateTodoSchema = Joi.object({
    name: name,
    completed: completed,
});

const deleteTodoSchema = Joi.object({
    id: id.required(),
});

module.exports = { getTodoSchema, createTodoSchema, updateTodoSchema, deleteTodoSchema };
