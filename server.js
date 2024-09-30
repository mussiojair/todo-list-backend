const express = require('express');
const routerApi = require('./routes');
const { config } = require('./config/config');
const { boomErrorHandler, errorHandler } = require('./middlewares/error.handler');

const app = express();

// support json
app.use(express.json());

// routes
routerApi(app);

// support error handler
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(config.serverPort, () => {
    console.log(`Node app is running in port ${config.serverPort}`);
});
