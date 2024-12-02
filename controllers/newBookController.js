
const Book = require('../models/BookSchema'); 


exports.createBook = async (req, res) => {
    try {
        const { name, author, genre, type, available } = req.body;

        const newBook = new Book({
            name,
            author,
            genre,
            type,
            available
        });

        await newBook.save();

        res.status(201).json({
            message: 'Book created successfully!',
            book: newBook
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to create book.', error: err });
    }
};
