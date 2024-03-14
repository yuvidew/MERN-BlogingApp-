require('dotenv').config()
const blogSchema = require('./models/blogSchema')
const blogJson = require('./blog.json')
const connectDb = require('./db/connect')

const start = async() =>{
    console.log(process.env.MDB_URL);
    try {
        await connectDb('mongodb+srv://yd00102:JOEzgaphBanB4bt4@blog-data.hls48nz.mongodb.net/Blogs?retryWrites=true&w=majority&appName=blog-data')
        await blogSchema.create(blogJson)
        console.log('added Successfully');
    } catch (error) {
        console.log(error);
    }
}

start()