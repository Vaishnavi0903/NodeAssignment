
const Book = require('../models/BookSchema'); 


exports.updateBook = async (req, res) => {
    const bookId = req.params.id; 
    const updatedDetails = req.body; 

    try {
        
        const book = await Book.findByIdAndUpdate(bookId, updatedDetails, { new: true });

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Book details updated successfully', book });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error while updating the book', error: err });
    }
};
