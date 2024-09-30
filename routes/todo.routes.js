const express = require('express');
const TodoService = require('../services/todo.service');
const { validatorHandler } = require('../middlewares/validator.handler');
const { getTodoSchema, createTodoSchema, updateTodoSchema, deleteTodoSchema } = require('../schemas/todo.schema');

const router = express.Router();
const service = new TodoService();

/**
 * Retrieve all TODO existing in database
 */
router.get('/', async (req, res) => {
    try {
        const items = await service.find();
        res.json(items);
    } catch(error) {
        res.status(500).json({message: "Error retrieving all items"});
    }
});

/**
 * Retrieve details for a specific TODO existing in database.
 */
router.get('/:id', 
    validatorHandler(getTodoSchema, 'params'),
    async (req, res) => {
        try {
            const { id } = req.params;
            const items = await service.findOne(id);
            res.json(items);
        } catch(error) {
            res.status(404).json({message: error.message});
        }
    }
);

/**
 * Retrieve details for a specific TODO existing in database.
 */
router.post('/', 
    validatorHandler(createTodoSchema, 'body'),
    async (req, res) => {
        try {
            const data = req.body;
            const items = await service.create(data);
            res.json(items);
        } catch(error) {
            res.status(500).json({message: "Error creating an item"});
        }
    }
);

/**
 * Retrieve details for a specific TODO existing in database.
 */
router.patch('/:id',
    validatorHandler(getTodoSchema, 'params'),
    validatorHandler(updateTodoSchema, 'body'),
    async (req, res) => {
        try {
            const { id } = req.params;
            const data = req.body;
            const updatedData = await service.update(id, data);
            res.status(201).json(updatedData);
        } catch(error) {
            res.status(500).json({message: "PATCH operation failed. Update couldn't be done."});
        }
    }
);

/**
 * Retrieve details for a specific TODO existing in database.
 */
router.delete('/:id', 
    validatorHandler(deleteTodoSchema, 'params'),
    async (req, res) => {
        try {
            const { id } = req.params;
            const result = await service.delete(id);
            res.json(result);
        } catch(error) {
            res.status(500).json({ message: "DELETE operation failed. Delete on user {id} couldn't be done."});
        }
    }
);

module.exports = router;
