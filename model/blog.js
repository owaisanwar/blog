const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title : {
        type : String,
        minlength : 5,
        required : true
    },
    description : {
        type : String,
        minlength : 5,
        required : false
    },
    dateCreated : {
        type : Date,
        default : new Date()
    }
})

BlogSchema.set('toJSON', {
    transform : (document, returnedOjbect) => {
        returnedOjbect.id = returnedOjbect._id.toString()
        delete returnedOjbect.__v;
        delete returnedOjbect._id;
    }
})

module.exports = new mongoose.model('blog', BlogSchema);