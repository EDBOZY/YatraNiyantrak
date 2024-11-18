import React, { useContext, useEffect, useState } from 'react'
import './Ticket.css'
import a from "../../images/card.png"
import b from "../../images/credit-card.png"
import c from "../../images/download.png"
import d from "../../images/train.png"
import e from '../../images/star.png'
import f from '../../images/star (1).png'
import g from '../../images/plus.png'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../..'
import axios from 'axios'

function Ticket() {
    const d=()=>{
        alert("downloded hurray!!! have a great day")
        navigate("/")
    }
    const navigate=useNavigate();
    const [p,setp]=useState();

    const back=()=>{
        navigate("/")
    }
    const { id } = useParams();
  const { user } = useContext(Context);
//   const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [trainDetails, setTrainDetails] = useState(null);

//   const back = () => {
//     navigate("/passdetails/669f5f604b6560fd20e4d946");
//   };

  const pay = () => {
    navigate(`/ticket/${id}`);
  };

  useEffect(() => {
    const fetchBookingAndTrainDetails = async () => {
        try {
            // Fetch booking details
            const bookingRes = await axios.get(`http://localhost:8000/api/book/books/${id}`);
            const bookingData = bookingRes.data;
            setBooking(bookingData);
    
            // Extract train ID from booking details
            const trainId = bookingData.train;
            console.log(bookingData.passengers.price)
    
            // Fetch train details if train ID is available
            if (trainId) {
              const trainRes = await axios.get(`http://localhost:8000/api/train/gettrain/${trainId}`);
              setTrainDetails(trainRes.data);
              const price=await axios.get(`http://localhost:8000/api/train/gettrain/price/${trainId}`);
              setp(price.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookingAndTrainDetails();
  }, [id]);

  // Safely extract properties
  const bookingId = booking?.booking?._id ?? 'Loading...';
  const trainName = trainDetails?.name ?? 'Loading...';
  const trainStartpoint = trainDetails?.startpoint ?? 'Loading...';
  const trainDestination = trainDetails?.destination ?? 'Loading...';
  const passengers = booking?.passengers ?? [];
//   const totalCost = passengers.length*trainDetails.price;
//   const totalFare = (totalCost + 0.35 + 17.7).toFixed(2);
const totalCost = passengers.length*p;
  const totalFare = (totalCost + 0.35 + 17.7).toFixed(2);  // const price=booking.passengers.price*booking.passengers.length;
  // const totalCost = booking.passengers.reduce((total, passenger) => total + passenger.price, 0);
//   const totalCost = passengers.length*trainDetails.price;
//   const totalFare = (totalCost + 0.35 + 17.7).toFixed(2);
  return (
    <div className="ticket">
        <div className='up'>
            <div className="upbox">
                <img src={d} alt="" />
                <span>Find Train</span>
            </div>
            <div className="upbox">
                <img src={a} alt="" />
                <span>Passenger Details</span>
            </div>
            <div className="upbox">
                <img src={b} alt="" />
                <span>Payment</span>                
            </div>
            <div className="upbox">
                <img src={c} alt="" />
                <span>Download</span>
            </div>
        </div>
        <div className="down" style={{border:"1px solid black",borderRadius:"0.5rem"}}>
            <div className='tname' style={{justifyContent:"space-between"}}>
                <div className="tid">
                    <span className='s'>12345</span>
                    <span> {trainName}</span>
                </div>
                <span>Train Runs: M T W T F S S</span>
                <div className="stars">
                    <img src={e} alt="" />
                    <img src={e} alt="" />
                    <img src={e} alt="" />
                    <img src={e} alt="" />
                    <img src={e} alt="" />
                </div>
                {/* <img src={e} alt="" /> */}
            </div>
        
            <div className="line"></div>
            <div className='tdetails'>
                <div className='tdup'>
                    <div className='tdate'>
                        <span>20:30 | Sat, 31 Apr</span>
                        <span>{trainStartpoint}</span>
                    </div>
                    <span>------17h 10m------</span>
                    <div className='tdate'>
                        <span>13:40 | Sun, 01 May</span>
                        <span>{trainDestination}</span>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div>
                <span style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"larger"}}> 
                   {passengers.length} Adult | First Class AC (1A) | General Quota | {trainDestination} | Boarding Date: 31 Apr, 2023 20:30 
                </span>
            </div>
            <div className="line"></div>
            <div className='passdetails'>
                <h3>PNR {id+5}</h3>
                <div className='ts' style={{fontWeight:"bold"}}>
                    <span>Passenger Detail</span>
                    <span >Coach</span>
                    <span>Berth</span>
                </div>
                {passengers.map((passenger, index) => (
                <div className='ts'>
                    <span>{passenger.name},25, M</span>
                    <span>1A</span>
                    <span>47, Lower Berth</span>
                </div>
                ))}

            </div>
            <div className="line"></div>
            <div className='tpay'>
                <div className='tpays'>
                    <span>Payment Mode</span>
                    <span>Debit Card - VISA (xxxx-xxxx-xxxx-7051)</span>
                </div>
                <div className='tpays'>
                    <span>Total Fare</span>
                    <h2>₹{totalFare}</h2>
                </div>
            </div>
        </div>
        <div className='pbuttons'>
            <span style={{fontSize:"large",color:"blue",cursor:"pointer"}} onClick={back}>Book Return Journey</span>
            <div className="buttons">
                <div className="butt" style={{borderColor:"#009DDB",color:"#009DDB",border:"1px solid #009DDB"}} onClick={d} >Share</div>
                <div className="butt" style={{borderColor:"#009DDB",color:"#009DDB",border:"1px solid #009DDB"}} onClick={d} >Print</div>
                <div className="butt" style={{backgroundColor:"#009DDB",color:"white"}} onClick={d}>Download</div>
            </div>
        </div>
    </div>
  )
}

export default Ticket