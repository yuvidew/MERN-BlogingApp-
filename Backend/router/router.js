const express = require('express')
const router = express.Router()
const { postBlog, getBlogs } = require('../controller/blogControle')

<<<<<<< HEAD
router.post('/post/v1/createblog'  , postBlog)
=======
router.post('/post/v1/createblog' , postBlog)
>>>>>>> 0786e5c791f36ea7bee33c30c2401a0883724bab

router.get('/get/v1/blogs' , getBlogs)

module.exports = router

// JOEzgaphBanB4bt4
