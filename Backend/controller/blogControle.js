const blogSchema = require("../models/blogSchema")

const postBlog = async (req , res) => {
    const {body} = req
    console.log(body);
    try {
        const result = await blogSchema.create(body)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const getBlogs = async (req , res) => {
    const data = await blogSchema.find()
    return res.status(200).json(data)
}

module.exports = {
    postBlog,
    getBlogs
}
