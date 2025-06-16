const Student = require('../model/DbModel');


const getStudents =async (req ,res)=>{
    try {
        const students = await Student.find({});
        res.status(200).json(students);
      } catch (error) {
        res.status(500).json({ message : error.message});
      }
}


const getStudentById =async (req, res)=>{
    try {
        const id =req.params.id;
        const student = await Student.findById(id);
        res.status(200).json(student)
      } catch (error) {
        res.status(500).json({message:error.message});
      }
}

const createStudent =async (req ,res )=>{
    try {
        const students = await Student.create(req.body);
        res.status(200).json(students)
        
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
}


const updateStudent =async (req, res)=>{
    try {
        const id =req.params.id;
      const student= await Student.findByIdAndUpdate(id, req.body )
      if(!student){
       return res.status(404).json({message:"Student not found"})
      }
      const updatedStudent = await Student.findById(id);
      res.status(200).json(updatedStudent);
      } catch (error) {
        res.status(500).json({message:error.message});
      }
}

const deleteStudent =async (req ,res )=>{
    try {
        const id = req.params.id;
        const student = await Student.findByIdAndDelete(id);
        if (!student) {
          return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
      } catch (error) {
        res.status(500).json({message:error.message});
      }
}



module.exports ={
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}