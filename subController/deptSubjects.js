import pool from "../db.js";

const deptSubjectsController=async (req,res)=>{
    try {
        const departments=await pool.query("SELECT * FROM subjects JOIN departments ON department_id=sub_department_id WHERE department_name=$1",[req.params.department_name]);
        if(!departments.rows.length){
            return res.status(200).json({
                message: "No OE has been added for this department."
            })
        }
        return res.status(200).json(departments.rows);         
     } catch (error) {
        return res.status(500).json({
             success:false,
             message:'could not connect to server'
         })
     }
}

export default deptSubjectsController;