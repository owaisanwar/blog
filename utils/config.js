require('dotenv').config();

const port = process.env.PORT;

const MONGODB_URI = process.env.DEV_CONNECT

module.exports = {
    port,
    MONGODB_URI
}