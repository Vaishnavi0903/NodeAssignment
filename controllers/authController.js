const User = require('../models/UserSchema');
const jwt = require('jsonwebtoken');  

exports.authenticateUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,  
      { expiresIn: '1h' }      
    );

    
    res.json({ message: "Authentication successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
