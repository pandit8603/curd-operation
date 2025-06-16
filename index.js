const express = require('express');
const mongoose = require('mongoose');
const Student = require('./model/DbModel'); 
const StudentRoutes = require('./routes/students.routes'); // Import the routes
const PORT = 3000;
const app = express();

app.use(express.json()); 

app.use('/api/students', StudentRoutes); // Use the routes

app.get('/', (req, res) => {
  res.send('Hello World! thid is a simple CURD-APP');
});

mongoose.connect("mongodb+srv://ajayanupam957:qCYLRYSlrHPeEoKg@cluster0.zlrehr5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
  console.log('Connected to  MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
  });
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});




// dp password :  qCYLRYSlrHPeEoKg

// dp string :  mongodb+srv://ajayanupam957:qCYLRYSlrHPeEoKg@cluster0.zlrehr5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0