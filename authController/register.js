import pool from "../db.js";
import bcrypt from 'bcrypt';

const saltRounds = 10;

const registerController = async (req, res)=>{
    try {
        const { username, email, password } = req.body;

        if((!username) || (!email) || (!password)){
            return res.status(400).json({
                success: false,
                message: "Please enter all the details!"
            })
        }

        const existingUser = await pool.query("SELECT * FROM users WHERE email=$1",[email]);
        if(existingUser.rows.length){
            return res.status(400).json({
                success:false,
                message:'User already exists'
            })
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const createUser = await pool.query("INSERT INTO users (username,email,password) VALUES ($1,$2,$3)",[username,email,hashedPassword]);

        if(!createUser){
            return res.status(500).json({
                success: false,
                message: 'Failed to register, please try again later.'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'User registered successfully'
        })
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Internal Server Error",
        });
      }

}

export default registerController