const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema({
    title : {
        type : String
    },
    imagePath : {
        type : String,
    },
    imageName : {
        type : String,
    },
    description : {
        type : String
    }
})

module.exports = mongoose.model('Blogs-data' , blogSchema)