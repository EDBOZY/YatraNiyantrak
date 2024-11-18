// const asynchandler=require("express-async-handler")
// const User=require("../models/userModel")
// const bcryt=require("bcryptjs")
// const jwt=require("jsonwebtoken")


// const protect=asynchandler(async(req,res,next)=>{
//     try {
//         const token=req.cookies.token
//         if(!token){
//             res.status(401)
//             throw new Error("Not authorized")
//         }

//         //verified token
//         const verified=jwt.verify(token,process.env.JWT_SECRET)
//         // get user id from token

//         const user=await User.findById(verified.id).select("-password");
//         if(!user){
//             res.status(401)
//             throw new Error("Not authorizedd")
//         }

//         //this will give the user info to any route we add protect
//         req.user=user
//         next()
//     } catch (error) {
//         res.status(401)
//         throw new Error("Not authorizeddd")
//     }
// })
// module.exports = protect;

// const asyncHandler = require("express-async-handler");
// const User = require("../models/userModel");
// const jwt = require("jsonwebtoken");

// const protect = asyncHandler(async (req, res, next) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) {
//       res.status(401);
//       throw new Error("Not authorized, please login");
//     }

//     // Verify Token
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     // Get user id from token
//     const user = await User.findById(verified.id).select("-password");

//     if (!user) {
//       res.status(401);
//       throw new Error("User not found");
//     }
//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401);
//     throw new Error(error);
//   }
// });

// module.exports = protect;



const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
// require("dotenv").config();


const protect = asyncHandler(async (req, res, next) => {
  console.log("Cookies:", req.cookies); // Log cookies to check if token is present

  const token = req.cookies.token;
  console.log(token)
//   const toke=req.body;
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, please login");
  }
  // Verify Token
  const verified = jwt.verify(token, "ben");
  
  // Get user id from token
  const user = await User.findById(verified.id).select("-password");

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  req.user = user;
  next();
});

const protected=asyncHandler(async(req,res,next)=>{
  const token = req.cookies.token;
  if (!token){
    res.status(401);
    throw new Error("User not found");
  } 

  next();
})

const isAdmin=asyncHandler(async(req,res,next)=>{
  const token = req.cookies.token;
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, please login");
  }

  // Verify Token
  const verified = jwt.verify(token, "ben");
  const user = await User.findById(verified.id).select("-password");
  if(!user){
    res.status(400)
    throw new Error("User not exist")
  }
  if(!user.is_admin){
    res.status(400)
    throw new Error("User not admin")
  }
  next()

  



})

module.exports = {
  protect,
  isAdmin,
  protected
};

