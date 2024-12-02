const Return = require('../models/ReturnSchema');  
const Borrow = require('../models/BorrowSchema');  
const Book = require('../models/BookSchema');      

exports.returnBook = async (req, res) => {
    try {
        const { username, bookid, fine } = req.body;

        const borrowRecord = await Borrow.findOne({ username, bookid });
        if (!borrowRecord) {
            return res.status(404).json({ message: 'No such borrowed record found' });
        }

        const returnRecord = new Return({
            username,
            bookid,
            duedate: borrowRecord.duedate,  
            fine: fine || 0  
        });


        await returnRecord.save();
        await Book.findByIdAndUpdate(bookid, { available: true });
        await Borrow.findOneAndDelete({ username, bookid });
        return res.status(200).json({ message: 'Book returned successfully', returnRecord });
    } catch (error) {
        console.error('Error returning book:', error);
        return res.status(500).json({ message: 'Error occurred while returning book', error });
    }
};
