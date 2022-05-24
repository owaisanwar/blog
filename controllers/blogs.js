const blogRouters = require('express').Router();
const Blog = require('../model/blog')

blogRouters.get('/', async(req, res) => {
    const allBlogs = await Blog.find({});
    res.json(allBlogs);
})


module.exports = blogRouters;