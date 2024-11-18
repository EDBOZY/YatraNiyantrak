const asynchandler= require("express-async-handler")
const User=require("../models/userModel")
const bcryt=require("bcryptjs")
const jwt=require("jsonwebtoken")

//createing Token for encrytion
const generateToken=(id)=>{
    return jwt.sign({id},"ben",{expiresIn:"1d"})
};

//Register User
const registerUser=asynchandler(async(req,res)=>{
    const{name,email,password,is_admin,phone}=req.body
    if(!name || !email|| !password){
        res.status(400)
        
        throw new Error("fill in all values")
    }
    // if(is_admin==null){
    //     is_admin=false;
    // }
    if(password.length<6){
        res.status(400)
        throw new Error("password must be 6 chars")
    }
    const userExists=await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("Email already there")
    }

    


    //encrytion

    // const salt=await bcryt.genSalt(10)
    // const hashedPassword=await bcryt.hash(password,salt)


    //new create

    const user=await User.create({
        name,
        email,
        password,
        is_admin,
        phone,
    })
    //generanter token
    const token=generateToken(user._id)

    ///send http only cookie
    res.cookie("token",token,{
        path:"/",
        httpOnly:true,
        expires:new Date(Date.now()+1000*86400),
        sameSite:"none",
        secure:false,
    })


    if(user){
        const{_id,name,email,is_admin,phone}=user
        res.status(201).json({
            _id,name,email,is_admin,phone,token,
        })
    }
    else{
        res.status(400);
        throw new Error("Invalid user data")    
    }


})

//Login User
const loginUser=asynchandler(async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        res.status(400)
        throw new Error("enter all")
    }

    //check exists
    const user=await User.findOne({email})

    if(!user){
        res.status(400)
        throw new Error("NO USER GO REGISTER")
    }
     //exists then check pass
    const passwordIsCorrect=await bcryt.compare(password,user.password)
    //generanter token
    const token=generateToken(user._id)

    if(passwordIsCorrect){
            ///send http only cookie

        res.cookie("token",token,{
            path:"/",
            httpOnly:true,
            expires:new Date(Date.now()+1000*86400),
            sameSite:"None",
            secure:true,
        })
    }


    if(user && passwordIsCorrect){
        const{_id,name,email,is_admin,phone}=user
        res.status(200).json({
            _id,name,email,is_admin,phone,token
        })

    }
    else{
        res.status(400)
        throw new Error("wrong credentials")
    }
})

//LOGOUT User
const logoutUser=asynchandler(async(req,res)=>{
    

    res.cookie("token","",{
        path:"/",
        httpOnly:true,
        expires:new Date(0),
        sameSite:"none",
        secure:false
    })
    return res.status(200).json({success: true,message:"Succesful out"})
})

//get that user alnoe
const getUser=asynchandler(async(req,res)=>{
    const user=await User.findById(req.user._id)
    if(user){
        const{_id,name,email,is_admin,phone}=user
        res.status(200).json({
            _id,name,email,is_admin,phone
        })
    }
    else{
        res.status(400)
        throw new Error("No user details found")
    }
})

//check login status
const loggedIn=asynchandler(async(req,res)=>{
    const token=req.cookies.token
    // const user=await User.findOne({token})
    // const user=req.user
    if(!token){
        return res.json(true);
    }
    const verified = jwt.verify(token, "ben");
    if (verified) {
        const user = await User.findById(verified.id); // Assuming the user ID is stored in the token payload
        if (!user) {
            return res.status(404).json({ success: false, user: null });
        }
        res.status(200).json({success:true,user:user});
    } 
    else{
        return res.json(false)
    }

    // res.send("succesful")
})
// const loggedIn = asynchandler(async (req, res) => {
//     const token = req.cookies.token;
//     if (!token) {
//         return res.json(false);
//     }
//     try {
//         const verified = jwt.verify(token, "ben");
//         if (verified) {
//             return res.json(true);
//         } else {
//             return res.json(false);
//         }
//     } catch (error) {
//         return res.json(false);
//     }
// });

// const loggedIn = asynchandler(async (req, res) => {
//     const token = req.cookies.token;
//     if (!token) {
//         return res.json({ isAuthenticated: false });
//     }
//     try {
//         const verified = jwt.verify(token, "ben");
//         if (verified) {
//             return res.json({ isAuthenticated: true, user: verified }); // Assuming you might want to return user details
//         } else {
//             return res.json({ isAuthenticated: false });
//         }
//     } catch (error) {
//         return res.json({ isAuthenticated: false });
//     }
// });



//edit the user details
const updateUser=asynchandler(async(req,res)=>{
    const user=await User.findById(req.user._id)
    if(user){
        const{_id,name,email,is_admin,phone}=user
        user.email=email;
        user.name=req.body.name||name;
        user.phone=req.body.phone||phone;

        const updateUser=await user.save()
        res.status(201).json({
            _id,
            name:updateUser.name,
            email:updateUser.email,
            is_admin,
            phone:updateUser.phone,
            
        })
    }
    else{
        res.status(404)
        throw new Error("not possible")
    }

})

//give me back all users
const getAllUsers=asynchandler(async(req,res)=>{
    const users=await User.find({});
    if(users){
        res.status(201).json({
            users,
        })
    }
    else{
        res.status(404)
        throw new Error("No users found")
    }
})


//delete user is left





module.exports={
    registerUser,
    loginUser,
    logoutUser,
    getUser,
    loggedIn,
    updateUser,
    getAllUsers,
}