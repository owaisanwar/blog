const express = require('express');
const app = express();
const Blog = require('./model/blog');
const mongoose = require('mongoose');
const config = require('./utils/config');
const blogRouters = require('./controllers/blogs');
app.use(express.json());
const blog = new Blog({
    title : 'Owais',
    description : 'this is description'
});
mongoose.connect(config.MONGODB_URI).then(() => {
    console.log('connected to mongodb')
}).catch(error => {
    console.log("🚀 ~ file: app.js ~ line 14 ~ error", error)
})
app.use('/api/blogs', blogRouters)

module.exports = app;