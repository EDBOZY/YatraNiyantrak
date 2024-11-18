const express=require("express");
const { createTrain, getAllTrains, getTrain, deleteTrain, getTrainsByRoute, getTrainprice } = require("../controllers/trainController");
const { isAdmin } = require("../middleware/authMiddleware");
const { protected } = require("../middleware/authMiddleware");

const router=express.Router();


router.post("/addtrain",isAdmin,createTrain)
router.get("/alltrain",getAllTrains)
router.get("/gettrain/:id",getTrain)
router.delete("/delete/:id",isAdmin,deleteTrain)
router.get("/by-route", getTrainsByRoute);
router.get("/gettrain/price/:id", getTrainprice);





module.exports=router
