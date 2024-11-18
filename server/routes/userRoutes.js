const express=require("express");
const { registerUser, loginUser, logoutUser, getUser, loggedIn, updateUser, getAllUsers } = require("../controllers/userContoller");
const { protect } = require("../middleware/authMiddleware");
const router=express.Router();

// const cookieParser = require('cookie-parser');

// const app = express();
// app.use(express.json());
// app.use(cookieParser());

// const registerUser=() => {}

router.post("/register",registerUser);
router.post("/login",loginUser)
router.get("/logout",logoutUser)
router.get("/getuser",protect,getUser)
router.get("/loggedin",loggedIn)
router.patch("/updateuser",updateUser)
router.get("/all",getAllUsers)

module.exports=router
