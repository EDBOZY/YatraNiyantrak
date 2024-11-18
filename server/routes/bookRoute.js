const express=require("express");
const { createBook, getAllBooks, getBook, deleteBook, gettrain, createBookings, getBookingDetails } = require("../controllers/bookController");
const { protected } = require("../middleware/authMiddleware");
const { createBoo } = require("../controllers/trainController");
const router=express.Router();


router.post("/createbook",createBook)
router.get("/allbooks",protected,getAllBooks)
router.get("/getbook/:id",protected,getBook)
router.delete("/cancelbook/:id",protected,deleteBook)
router.get("/getall",protected,gettrain)
router.post("/crebook",createBookings)
router.get("/books/:bookingid",getBookingDetails)

module.exports=router
