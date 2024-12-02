const mongoose = require("mongoose");

const ReturnSchema = mongoose.Schema(
    {
        username: {
            type: String, required: true 
        },
        bookid: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'books', 
            unique: true, 
            required: true 
        },
        duedate: { 
            type: Date,  
            required: true 
        },
        fine: { 
            type: Number, 
            required: true, 
            default: 0 
        }
    },
    { timestamps: true } 
);

module.exports = mongoose.model("return", ReturnSchema);
