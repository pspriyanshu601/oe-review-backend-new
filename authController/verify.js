import jwt from 'jsonwebtoken'

const verifyController = async (req, res) => {
    try{
        const token = req.headers.authorization;
        jwt.verify(token, process.env.JWT_ACCESS_SECRET);

        return res.status(201).json({
            success: true,
            message: "User already logged in"
        })
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export default verifyController