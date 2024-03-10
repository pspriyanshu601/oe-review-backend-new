import pool from "../db.js";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const generateToken = async () => {
  const token = jwt.sign(
    { id: hashedPassword.rows[0].id },
    process.env.JWT_SECRET,
    { expiresIn: "15d" }
  );
};
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );
    if (hashedPassword.rows.length == 0) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }
    const savedPassword = hashedPassword.rows[0].password;

    const checkpassword = await bcrypt.compare(password, savedPassword);

    if (!checkpassword) {
      return res.status(401).json({
        success: false,
        message: "invalid credentials",
      });
    }

    generateToken();

    res.cookie("username", hashedPassword.rows[0].username, {
      maxAge: 900000,
      httpOnly: true,
    });

    return res.status(201).json({
      success: true,
      message: "User logged in successfully",
      username: hashedPassword.rows[0].username,
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default loginController;