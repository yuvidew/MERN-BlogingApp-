const express = require('express')
const router = express.Router()
const upload = require('../multer/upload')
const { postBlog, getBlogs } = require('../controller/blogControle')

router.post('/post/v1/createblog' , upload.single('file') , postBlog)

router.get('/get/v1/blogs' , getBlogs)

module.exports = router

// JOEzgaphBanB4bt4