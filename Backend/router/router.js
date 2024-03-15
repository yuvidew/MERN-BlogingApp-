const express = require('express')
const router = express.Router()
const { postBlog, getBlogs } = require('../controller/blogControle')

router.post('/post/v1/createblog'  , postBlog)

router.get('/get/v1/blogs' , getBlogs)

module.exports = router

// JOEzgaphBanB4bt4