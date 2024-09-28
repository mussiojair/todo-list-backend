const express = require('express');

const todoRouter = require('./todo.routes');

function routerApi(app) {
    const router = express.Router();
    router.use('/todos', todoRouter);
    app.use('/api/v1', router);
}

module.exports = routerApi;