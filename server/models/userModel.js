const mongoose=require("mongoose")
const bcryt=require("bcryptjs")

const userSchema=mongoose.Schema({
    name: {
        type: String,
        // trim: true,
        // maxlength: 50,
        required: [true, "Please add a name"],

      },
      email: {
        type: String,
        // maxlength: 100,
        required: [true, "Please add a email"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid emaial",
        ],
      },
      password: {
        type: String,
        required: [true, "Please add a password"],
        minLength: [6, "Password must be up to 6 characters"],
      },
      phone: {
        type: String,
        default: "+91",
      },
    //   salt: {
    //     type: String,
    //   },
      is_admin: {
        type: Boolean,
        default:false
      },
    
})


//encrypt for all
userSchema.pre("save",async function(next){
  if(!this.isModified("password")){
    return next();
  }
  //hash pass
  const salt=await bcryt.genSalt(10)
  const hashedPassword=await bcryt.hash(this.password,salt)
  this.password=hashedPassword
  next();
})



const User=mongoose.model("User",userSchema)
module.exports=User