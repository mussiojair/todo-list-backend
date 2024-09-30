require('dotenv').config();
const config = {
    serverPort: process.env.PORT ?? 3000, // 3000 by default
    apiKey: process.env.API_KEY,
};

module.exports = { config };
