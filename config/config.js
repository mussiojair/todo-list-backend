require('dotenv').config();
const config = {
    serverPort: process.env.PORT ?? 3000, // 3000 by default
};

module.exports = { config };
