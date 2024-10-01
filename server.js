const express = require('express');
const routerApi = require('./routes');
const { config } = require('./config/config');
const { boomErrorHandler, errorHandler } = require('./middlewares/error.handler');
const { checkApi } = require('./middlewares/api.handler');

const app = express();

// cors configuration
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

// validates apikey first
app.use(checkApi);

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
