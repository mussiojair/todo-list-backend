const express = require('express');
const routerApi = require('./routes');
const { boomErrorHandler, errorHandler } = require('./middlewares/error.handler');

const app = express();

// support json
app.use(express.json());

// routes
routerApi(app);

// support error handler
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Node app is running in port 3000')
});
