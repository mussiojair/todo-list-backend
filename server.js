const express = require('express');
const routerApi = require('./routes');
const { boomErrorHandler } = require('./middlewares/error.handler');

const app = express();

// support json
app.use(express.json());

// routes
routerApi(app);

// support boom error handler
app.use(boomErrorHandler);

app.listen(3000, () => {
    console.log('Node app is running in port 3000')
});
