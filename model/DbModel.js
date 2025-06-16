const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    rollNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    // address: {
    //     type: String,
    //     required: true,
    // },
});
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;