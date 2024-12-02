const mongoose = require("mongoose")

const BorrowSchema = mongoose.Schema(
    {
        username: { type: String, required: true },
        bookid: { 
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'books', 
          unique: true, 
          required: true 
        },
        duedate: { 
          type: Date, 
          default: () => new Date(+new Date() + 15 * 24 * 60 * 60 * 1000), 
          required: [true, 'Must have a due date'],
        }
      },
      { timestamps: true }     
)

module.exports = mongoose.model("borrow" , BorrowSchema )