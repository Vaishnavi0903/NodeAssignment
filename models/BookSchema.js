const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({
    
        name: { 
            type: String, 
            required: true 
        },
        author: {
             type: String, 
             required: true 
        },
        genre: {
             type: String, 
             required: true 
        },
        type: { 
            type: String, 
            required: true
        },
        available: { 
            type: Boolean, 
            default: true 
        }
      },
      { timestamps: true }
    
)

module.exports = mongoose.model("books" , BookSchema )