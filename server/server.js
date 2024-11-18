const dotenv=require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const userRoute=require("./routes/userRoutes")
const trainRoute=require("./routes/trainRoutes")
const bookRoute=require("./routes/bookRoute")


const errorhandler=require("./middleware/errorMiddleware")
const cookieParser=require("cookie-parser")
const app=express();


// app.use(
//     cors({
//       origin: ["http://localhost:3000","http://localhost:3001"],
//       method: ["GET", "POST", "DELETE", "PUT"],
//       credentials: true,
//     })
// );

app.use(
    cors({
        origin: ["http://localhost:3000", "http://localhost:3001"],
        methods: ["GET", "POST", "DELETE", "PUT"],
        credentials: true,
    })
);

// app.use(cookieParser());
// app.use(express.json());


//midlleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json())

//route middleware
app.use("/api/users",userRoute)
app.use("/api/train",trainRoute)
app.use("/api/book",bookRoute)
// app.use("/api/bookk",bookRout)



app.get("/",(req,res)=>{
    res.send("Home Page");
})

//error midlle
app.use(errorhandler);

const PORT=process.env.PORT||5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err)=>console.log(err))
