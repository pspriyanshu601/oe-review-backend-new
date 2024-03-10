import cookieParser from "cookie-parser";

const logoutRouteController=async (req,res)=>{
    res.clearCookie('token');

    return res.status(200).json({
        success:true,
        message:'logout Succesfully'
    })
}
export default logoutRouteController;