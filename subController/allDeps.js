import pool from "../db.js";

const allDeptsController= async (req,res)=>{
    try {
       const departments=await pool.query("SELECT department_name FROM departments");
       if(!departments.rows.length){
        return res.status(400).json({
            message:'No data about this subject has been added'
        })
       }
       return res.status(200).json(departments.rows);
        
    } catch (error) {
       return res.status(500).json({
            success:false,
            message:'could not connect to server'
        })
    }
};

export default allDeptsController;