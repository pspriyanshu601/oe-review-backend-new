import pool from "../db.js";

const subReviewController = async (req, res) => {
  console.log(req);
  try {
    const reviews = await pool.query(
      "SELECT * FROM reviews WHERE department_name=$1 and course_code=$2",
      [req.params.department_name, req.params.course_code]
    );

    if (!reviews.rows.length) {
      return res.status(200).json({
        message: "No reviews have been posted yet be the first one to review",
      });
    }
    return res.status(200).json(reviews.rows);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "could not connect to server",
    });
  }
};

export default subReviewController;