const express = require('express');
const routerApi = require('./routes');

const app = express();

// routes
routerApi(app);

app.listen(3000, () => {
    console.log('Node app is running in port 3000')
});