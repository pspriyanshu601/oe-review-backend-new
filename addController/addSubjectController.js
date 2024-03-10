import pool from "../db.js";

const addSubjectController = (req, res) => {
  const obj = req.body;
  try {
    pool.query(
      "INSERT INTO subjects (subject_name,course_code,dept_name) VALUES ($1,$2,$3)",
      [obj.subject_name, obj.course_code, obj.dept_name]
    );
    res.status(200).json({
        message:'subject has been added succesfully'
    })
  } catch (error) {
    return res.status(500).json({
        success: false,
        message: "could not connect to server",
      });
  }
};

export default addSubjectController;
