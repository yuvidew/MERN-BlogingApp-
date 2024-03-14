const blogSchema = require("../models/blogSchema")

const postBlog = async (req , res) => {
    const {file} = req
    const {title , description} = req.body
    console.log(req.body);
    try {
        const result = new blogSchema({
            title , 
            description,
            imagePath : file.path,
            imageName : file.filename
        })

        await result.save()
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