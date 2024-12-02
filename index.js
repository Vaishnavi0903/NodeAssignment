const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes.js');
const authRoutes = require('./routes/authRoutes.js');
const bookRoutes = require('./routes/bookRoutes');  
const getUserRoutes = require('./routes/getUserRoutes');
const newBookRoutes = require('./routes/newBookRoute.js'); 
const borrowRoutes = require('./routes/borrowRoutes'); 
const returnRoutes = require('./routes/returnBookRoutes'); 
const updatebookRoutes = require('./routes/updateBookRoutes.js'); 

const Database = require("./config/database");
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

Database.connect();

app.get("/" , (req,res) =>{
    res.json({message : "server is running"});
})

app.use('/api/users', userRoutes);
app.use("/api/auth", authRoutes);
app.use('/api/books', bookRoutes);  
app.use('/api', getUserRoutes);
app.use('/api/books', newBookRoutes);
app.use('/api', borrowRoutes);
app.use('/api', returnRoutes);
app.use('/books', updatebookRoutes);

require("./routes/authRoutes.js")(app)
require("./routes/bookRoutes.js")(app)
require("./routes/borrowRoutes.js")(app)
require("./routes/getUserRoutes.js")(app)
require("./routes/newBookRoute.js")(app)
require("./routes/returnBookRoutes.js")(app)
require("./routes/updateBookRoutes.js")(app)
require("./routes/userRoutes.js")(app)

let PORT = 8081;
app.listen(PORT , () => {
    console.log(`Server is listening on ${PORT}`);
})
