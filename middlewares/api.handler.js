const boom = require("@hapi/boom");
const { config } = require("../config/config");

function checkApi(req, res, next) {
    console.log(config.apiKey, req.headers['api']);
    if (config.apiKey == req.headers['api']) {
        next();
    } else {
        next(boom.unauthorized());
    }
}

module.exports = { checkApi };
