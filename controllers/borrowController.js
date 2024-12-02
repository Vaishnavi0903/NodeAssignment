const Book = require('../models/BookSchema');
const Borrow = require('../models/BorrowSchema');


exports.borrowBook = async (req, res) => {
  try {
    const { username, bookid } = req.body;

    
    const book = await Book.findById(bookid);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    
    if (!book.available) {
      return res.status(400).json({ message: 'Book is not available' });
    }

    
    const borrow = new Borrow({
      username,
      bookid,
      duedate: new Date(+new Date() + 15 * 24 * 60 * 60 * 1000) 
    });

    
    await borrow.save();

    
    book.available = false;
    await book.save();

    return res.status(201).json({
      message: 'Book borrowed successfully',
      borrow,
      book
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};
