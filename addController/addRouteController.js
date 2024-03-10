import pool from "../db.js";

const addRouteController = async (req, res) => {
  const obj = req.body;
  try {
    await pool.query(
      "INSERT INTO reviews (details,stars,review_date,department_name,course_code,name)VALUES ($1,$2,$3,$4,$5,$6)",
      [
        obj.details,
        obj.stars,
        obj.review_date,
        obj.department_name,
        obj.course_code,
        obj.name,
      ]
    );
    res.status(200).json({
        message:'review has been added succesfully'
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "could not connect to server",
    });
  }
};

export default addRouteController;