const Book = require('../models/BookSchema');  


exports.getAvailableBooks = async (req, res) => {
    try {
        
        const availableBooks = await Book.find({ available: true });

        if (availableBooks.length === 0) {
            return res.status(404).json({ message: "No available books found." });
        }

        return res.status(200).json(availableBooks);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error retrieving available books." });
    }
};
