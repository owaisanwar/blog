const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./utils/config');
const blogRouters = require('./controllers/blogs');
const middleware = require('./utils/middleware');
app.use(express.json());
const morgan = require('morgan');
mongoose.connect(config.MONGODB_URI).then(() => {
    console.log('connected to mongodb')
}).catch(error => {
    console.log("🚀 ~ file: app.js ~ line 14 ~ error", error)
})
morgan(middleware.customMorgan)
app.use(middleware.requestLogger)
app.use('/api/blogs', blogRouters)

module.exports = app;