const mongoose=require("mongoose")

const bookSchema=mongoose.Schema({
    train: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Train",
    },
    user:
        {
            type: mongoose.Schema.Types.ObjectId,
            // required: true,
            ref: "User",
        }
    ,
})



const Book=mongoose.model("Book",bookSchema)
module.exports=Book


