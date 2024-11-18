const asynchandler= require("express-async-handler")
const Train=require("../models/trainModel")
const Book = require('../models/bookingModel');

const User = require('../models/userModel');
const mongoose=require("mongoose")


///exclusive

const createBoo = asynchandler(async (req, res) => {
    const { train_id, passengers } = req.body;

    // Validate input
    if (!train_id || !Array.isArray(passengers) || passengers.length === 0) {
        res.status(400);
        throw new Error("Please provide a train ID and at least one passenger.");
    }

    // Find the train
    const train = await Train.findById(train_id);
    if (!train) {
        res.status(400);
        throw new Error("Invalid train ID.");
    }

    // Check for each passenger and create bookings
    const bookingPromises = passengers.map(async (passenger) => {
        const { user_id } = passenger;
        if (!user_id) {
            res.status(400);
            throw new Error("Each passenger must have a user ID.");
        }

        const user = await User.find({user_id});
        if (!user) {
            res.status(400);
            throw new Error(`User with ID ${user_id} not found.`);
        }

        // Create a new booking
        const newBooking = new Book({
            user: user._id,
            train: train._id,
        });
        await newBooking.save();

        // Add the user to the train's user list if not already present
        if (!train.users.includes(user._id)) {
            train.users.push(user._id);
            await train.save();
        }

        return newBooking;
    });

    try {
        // Await all booking promises to complete
        const bookings = await Promise.all(bookingPromises);
        res.status(200).json({ bookings });
    } catch (error) {
        res.status(500);
        throw new Error("An error occurred while creating bookings.");
    }
});





const createTrain=asynchandler(async(req,res)=>{
    const{name,destination,startpoint,startDate,reachDate,price}=req.body
    if(!name || !destination || !startpoint || !startDate || !reachDate || !price){
        res.status(400)
        
        throw new Error("fill in all values")
    }
    // if(is_admin==null){
    //     is_admin=false;
    // }
    const trainExists=await Train.findOne({name})
    if(trainExists){
        res.status(400)
        throw new Error("train already there")
    }

    //new create

    const newtrain=new Train({
        name,
        destination,
        startpoint,
        startDate,
        reachDate,
        price,
    })
    
    newtrain.save()
    .then(async (train) => {
        // Populate users field asynchronously
        const populatedTrain = await Train.findById(train._id).populate('users').exec();
  
        res.status(200).json({
          name: populatedTrain.name,
          users: populatedTrain.users,
          destination: populatedTrain.destination,
          startpoint: populatedTrain.startpoint,
          startDate: populatedTrain.startDate,
          reachDate: populatedTrain.reachDate,
          price: populatedTrain.price,
        });
      })
    .catch(err => res.status(500).json({ msg: err.message }));
})


const getTrainsByRoute = asynchandler(async (req, res) => {
    const { startpoint, destination } = req.query;
  
    if (!startpoint || !destination) {
      res.status(400);
      throw new Error("Please provide both startpoint and destination");
    }
  
    const trains = await Train.find({ startpoint, destination });
  
    if (trains.length > 0) {
      res.status(200).json(trains);
    } else {
      res.status(404);
      throw new Error("No trains found for the specified route");
    }
  });
  


const getAllTrains=asynchandler(async(req,res)=>{
    const trains=await Train.find({});
    if(trains){
        res.status(201).json({
            trains,
        })
    }
    else{
        res.status(404)
        throw new Error("No users found")
    }
})

const getTrain=(asynchandler(async(req,res)=>{
    const { id } = req.params;

  //validation
  if (!mongoose.isValidObjectId(id)) {
    res.status(400)
    throw new Error ("not valid id")
  }
    const train=await Train.findOne({
        _id:id,
    })
    if(train){
        const{
            _id,
            name,
            destination,
            startpoint,
            startDate,
            reachDate,
            price,
        }=train
        res.status(200).json({
            _id,name,destination,startpoint,startDate,reachDate,price
        })
        
    }
    else{
        res.status(404)
        throw new Error("No users found")
    }
}))
const getTrainprice=(asynchandler(async(req,res)=>{
    const { id } = req.params;

  //validation
  if (!mongoose.isValidObjectId(id)) {
    res.status(400)
    throw new Error ("not valid id")
  }
    const train=await Train.findOne({
        _id:id,
    })
    if(train){
        const{
            _id,
            name,
            destination,
            startpoint,
            startDate,
            reachDate,
            price,
        }=train
        res.status(200).json(train.price)
        
    }
    else{
        res.status(404)
        throw new Error("No users found")
    }
}))

const deleteTrain=(asynchandler(async(req,res)=>{
    const { id } = req.params;

    //validation
    if (!mongoose.isValidObjectId(id)) {
        res.status(400)
        throw new Error ("not valid id")
    }
    // Find and delete the train by ID
    const train = await Train.findByIdAndDelete(id);
    if (train) {
        res.status(200).json({ msg: "Train deleted successfully" });
    } else {
        res.status(404);
        throw new Error("No train found with the given ID");
    }
}))



module.exports={
    createTrain,
    getAllTrains,
    getTrain,
    deleteTrain,
    getTrainsByRoute,
    createBoo,
    getTrainprice,
}