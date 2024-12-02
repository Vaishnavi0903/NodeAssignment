const User = require('../models/UserSchema.js');
const bcrypt = require('bcrypt');


exports.registerUser = async (req, res) => {
    const { username, email, password, role } = req.body;

    
    if (!username || !email || !password || !role) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists with this email" });
        }

        
        const newUser = new User({
            username,
            email,
            password,
            role
        });

        
        await newUser.save();
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
