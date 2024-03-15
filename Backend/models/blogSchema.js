const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema({
   title : {
        type : String
    },
    imageUrl : {
        type : String,
    },
    description : {
        type : String
    }
})

module.exports = mongoose.model('Blogs-data' , blogSchema)
