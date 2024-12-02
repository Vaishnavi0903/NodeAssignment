
const User = require('../models/UserSchema');


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();  
        res.status(200).json({ users });  
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, could not fetch users.' });
    }
};

module.exports = { getAllUsers };
