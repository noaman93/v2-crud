const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 4,
    maxlength: 30,
    required: true,
  },
  age: {
    type: Number,
    require: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
    maxlength: 200,
  },
  date:{
    type:Date,
    default:Date.now
  }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
