const mongoose=require("mongoose")

const trainSchema=mongoose.Schema({
    name: {
        type: String,
        // trim: true,
        // maxlength: 50,
        required: [true, "Please add a name"],

    },
    users:[
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        }
    ],
    destination: {
        type: String,
        maxlength: 100,
    },
    startpoint: {
        type: String,
        maxlength: 100,
    },
    startDate: {
        type: Date,
    },
      reachDate: {
        type: Date,
    },
    price: {
        type: Number,
    },
})

const Train=mongoose.model("Train",trainSchema)
module.exports=Train
