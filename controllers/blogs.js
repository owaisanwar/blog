const blogRouters = require('express').Router();
const Blog = require('../model/blog')

blogRouters.get('/', async(req, res) => {
    const allBlogs = await Blog.find({});
    res.status(200).json(allBlogs);
})


blogRouters.post('/', async(req, res) => {
    const body = req.body;
    const newBlog = new Blog(body);
    console.log("🚀 ~ file: blogs.js ~ line 13 ~ blogRouters.post ~ newBlog", newBlog)
    await newBlog.save();
    res.status(201).json(newBlog);
})

blogRouters.put('/:id', async(req, res) => {
    const {title, description} = req.body;
    const updateBlog = await Blog.findByIdAndUpdate(req.params.id, {title, description}, {new : true, runValidators : true,});
    res.json(updateBlog);
})

blogRouters.get('/:id', async(req, res) => {
    const getOneBlog = await Blog.findById(req.params.id);
    console.log("🚀 ~ file: blogs.js ~ line 26 ~ blogRouters.get ~ getOneBlog", getOneBlog)
    res.status(200).json(getOneBlog);
})

blogRouters.delete('/:id', async(req, res)=> {
    await Blog.findByIdAndRemove(req.params.id);
    res.status(204).end();
})

module.exports = blogRouters;