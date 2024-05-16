const express = require('express');
require("dotenv").config();
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();
const PORT  = 3000 || process.env.PORT
const tasks = require('./routes/task');
//const HOST = ''
app.use(cors());
app.use(express.json());
app.use('/api', tasks);
app.get('/', (req, res)=>{
    res.status(200).json({hello:"Welcome to School"});
});





app.listen(PORT, async()=>{
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('DB connected successfully');
    })
    console.log(`Server is running on port ${PORT}`)
})