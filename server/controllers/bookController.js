const asynchandler= require("express-async-handler")
const Book = require("../models/bookingModel")

// const book=require("../models/bookingModel")
const User = require("../models/userModel");
const Train = require("../models/trainModel");
const Booking = require("../models/bookk");
const mongoose = require("mongoose");
// const asynchandler = require('express-async-handler'); // Assuming asynchandler is imported like this

const createBookings = asynchandler(async (req, res) => {
  const { train_id, user_id, passengers } = req.body;

  if (!train_id || !user_id || !passengers || passengers.length === 0) {
    res.status(400);
    throw new Error("Please provide all required details.");
  }

  const trainAvailable = await Train.findById(train_id);
  const userAvailable = await User.findById(user_id);

  if (!trainAvailable) {
    res.status(400);
    throw new Error("Invalid train ID.");
  }
  if (!userAvailable) {
    res.status(400);
    throw new Error("Invalid user ID.");
  }

  const newBooking = new Booking({
    train: trainAvailable._id,
    user: userAvailable._id,
    passengers,
  });

  await newBooking.save();

  trainAvailable.users.push(userAvailable._id);
  await trainAvailable.save();

  res.status(200).json({ booking: newBooking, bookingid: newBooking._id });
});


const getBookingDetails = asynchandler(async (req, res) => {
    const { bookingid } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(bookingid)) {
      res.status(400);
      throw new Error("Invalid booking ID.");
    }
  
    const booking = await Booking.findById(bookingid); // Populate train and user details, excluding sensitive info
  
    if (!booking) {
      res.status(404);
      throw new Error("Booking not found.");
    }
  
    res.status(200).json(booking);
  });








const createBook=asynchandler(async(req,res)=>{
    const{train_id,user_id}=req.body
    if(!train_id || !user_id){
        res.status(400)
        throw new Error("enter all details")
    }
    const trainAvailable=await Train.findById(train_id)
    const userAvailable=await user.findById(user_id)

    if(!trainAvailable){
        res.status(400)
        throw new Error("invalid train id")
    }
    if(!userAvailable){
        res.status(400)
        throw new Error("invald user id")
    }
    const newBook=new Book({
        user:userAvailable._id,
        train:trainAvailable._id,
    })
    await newBook.save();
    //add to train users
    trainAvailable.users.push(userAvailable._id);
    await trainAvailable.save();
    res.status(200).json({book:newBook})
})

const getAllBooks=asynchandler(async(req,res)=>{
    const books=await Book.find({}).sort({startDate:-1});
    if(books){
        res.status(201).json({
            books,
        })
    }
    else{
        res.status(404)
        throw new Error("No users found")
    }
})

const getBook=asynchandler(async(req,res)=>{
    const { id } = req.params;

  //validation
  if (!mongoose.isValidObjectId(id)) {
    res.status(400)
    throw new Error ("not valid id")
  }
    const book=await Book.findOne({
        _id:id,
    })
    if(book){
        const{
            _id,
            train,
            user,
        }=book
        res.status(200).json({
            _id,train,user
        })
    }
    else{
        res.status(404)
        throw new Error("No users found")
    }
})

const deleteBook=asynchandler(async(req,res)=>{
    const { id } = req.params;

    //validation
    if (!mongoose.isValidObjectId(id)) {
        res.status(400)
        throw new Error ("not valid id")
    }
    // Find and delete the train by ID
    const book = await Book.findByIdAndDelete(id);
    if (book) {
        res.status(200).json({ msg: "booking deleted successfully" });
    } else {
        res.status(404);
        throw new Error("No booking found with the given ID");
    }
})
const findConnectingRoutes = async (start, end) => {
    let routes = [];
    
    const searchRoutes = async (currentStart, currentEnd, currentRoute) => {
        // console.log(`Searching for trains starting from ${currentStart}`);
        let trains = await Train.find({ startpoint: currentStart });
        // console.log(`Found trains:`, trains);

        for (let train of trains) {
            let newRoute = [...currentRoute, train];
            if (train.destination.toLowerCase() === currentEnd.toLowerCase()) {
                // console.log(`Route found: ${newRoute.map(t => t.name).join(' -> ')}`);
                routes.push(newRoute);
            } else {
                // console.log(`Searching further from ${train.destination}`);
                await searchRoutes(train.destination, currentEnd, newRoute);
            }
        }
    };

    await searchRoutes(start, end, []);
    return routes;
};

const gettrain = asynchandler(async (req, res) => {
    const { start, end } = req.query;
    console.log(`Searching routes from ${start} to ${end}`);
    const routes = await findConnectingRoutes(start, end);

    if (routes.length > 0) {
        res.json({
            success: true,
            routes: routes.map(route => ({
                trains: route,
                totalPrice: calculateTotalPrice(route),
            })),
        });
    } else {
        res.json({ success: false, message: 'No routes found.' });
    }
});

const calculateTotalPrice = (route) => {
    return route.reduce((total, train) => total + train.price, 0);
};



module.exports={
    createBook,
    getAllBooks,
    getBook,
    deleteBook,
    gettrain,
    createBookings,
    getBookingDetails,
}

