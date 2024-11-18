// import React, { useContext, useEffect, useState } from 'react'
// import './Payment.css'
// import a from "../../images/card.png"
// import b from "../../images/credit-card.png"
// import c from "../../images/download.png"
// import d from "../../images/train.png"
// import e from '../../images/star.png'
// import f from '../../images/star (1).png'
// import g from '../../images/plus.png'
// import { useNavigate, useParams } from 'react-router-dom'
// import { Context } from '../..'
// import axios from 'axios'

// function Payment() {
//     const {id,}=useParams();
//     const { user } = useContext(Context);
//     const navigate=useNavigate();
//     const [booking, setBooking] = useState(null);
//   const [trainDetails, setTrainDetails] = useState(null);

//     // const [trainid,setTrainid]=(null);
//     // const [tname,settnam]=("");
//     // const [from,setfrom]=useState("");
//     // const [destination,setdestination]=useState("");
//     const back=()=>{
//         navigate("/passdetails/669f5f604b6560fd20e4d946")
//     }
//     const pay=()=>{
//         navigate("/ticket")
//     }

//     // useEffect(() => {
//     //     const fetchTrain = async () => {
//     //       try {
//     //         const res = await axios.get(`http://localhost:8000/api/book/books/${id}`);
//     //         setTrainid(res.train);
//     //         const res2=await axios.get(`http://localhost:8000/api/train/gettrain/${trainid}`)
//     //         console.log(res2)
//     //         setdestination(res2.destination);
//     //         setfrom(res2.startpoint);
//     //         settnam(res2.name);
//     //       } catch (error) {
//     //         console.error(error);
//     //       }
//     //     };
//     //     fetchTrain();
//     //   }, [id]);

//     useEffect(() => {
//         const fetchBookingAndTrainDetails = async () => {
//           try {
//             // Fetch booking details
//             const bookingRes = await axios.get(`http://localhost:8000/api/book/books/${id}`);
//             const bookingData = bookingRes.data;
//             setBooking(bookingData);
    
//             // Extract train ID from booking details
//             const trainId = bookingData.booking.train; 
    
//             // Fetch train details
//             const trainRes = await axios.get(`http://localhost:8000/api/train/gettrain/${trainId}`);
//             const trainData = trainRes.data;
//             setTrainDetails(trainData);
//           } catch (error) {
//             console.error(error);
//           }
//         };
    
//         fetchBookingAndTrainDetails();
//       }, [id]);



//   return (
//     <div className="payment">
//         <div className='up'>
//             <div className="upbox">
//                 <img src={d} alt="" />
//                 <span>Find Train</span>
//             </div>
//             <div className="upbox">
//                 <img src={a} alt="" />
//                 <span>Passenger Details</span>
//             </div>
//             <div className="upbox">
//                 <img src={b} alt="" />
//                 <span>Payment</span>                
//             </div>
//             <div className="upbox">
//                 <img src={c} alt="" />
//                 <span>Download</span>
//             </div>
//         </div>
//         <div className="down" style={{border:"1px solid black",borderRadius:"0.5rem"}}>
//             <div className='tname' style={{justifyContent:"space-between"}}>
//                 <div className="tid">
//                     <span className='s'>12345</span>
//                     <span>{trainDetails.name}</span>
//                 </div>
//                 <span>Train Runs: M T W T F S S</span>
//                 <div className="stars">
//                     <img src={e} alt="" />
//                     <img src={e} alt="" />
//                     <img src={e} alt="" />
//                     <img src={e} alt="" />
//                     <img src={e} alt="" />
//                 </div>
//                 {/* <img src={e} alt="" /> */}
//             </div>
        
//             <div className="line"></div>
//             <div className='tdetails'>
//                 <div className='tdup'>
//                     <div className='tdate'>
//                         <span>20:30 | Sat, 31 Apr</span>
//                         <span>{trainDetails.startpoint}</span>
//                     </div>
//                     <span>------17h 10m------</span>
//                     <div className='tdate'>
//                         <span>13:40 | Sun, 01 May</span>
//                         <span>{trainDetails.destination}</span>
//                     </div>
//                 </div>
//                 <div className='tdup'>
//                     <div className='tdate' style={{gap:"2rem"}}>
//                         {/* <h2>First Class AC (1A)</h2> */}
//                         <span style={{color:"blue",cursor:"pointer"}}>Change boarding Station</span>
//                     </div>
//                     {/* <span style={{marginLeft:"-100px"}}>AVAILABLE</span> */}
//                     <div className='tdate' style={{gap:"2rem"}}>
//                         {/* <h2>₹3160</h2> */}
//                         <span style={{cursor:"pointer"}}>View Map</span>
//                     </div>
//                 </div>

//             </div>
//             <div className="line"></div>
//             <div>
//                 <span style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"larger"}}>1 Adult | First Class AC (1A) | General Quota | New Delhi | Boarding Date: 31 Apr, 2023 20:30</span>
//             </div>
//             <div className="line"></div>
//             <div className="pdetails">

//                 <div className="pl">
//                 <h2>Passenger Details</h2>
//                 <br/>

//                     <div className="name">
//                         <span>Name</span>
//                         <span>XYZ</span>
//                     </div>
//                     <div className="name">
//                         <span>Gender</span>
//                         <span>Male</span>
//                     </div>
//                     <div className="name">
//                         <span>Mobile No</span>
//                         <span>0000000000</span>
//                     </div>
//                 </div>
//                 <div className="pr" style={{marginTop:"40px"}}>
//                     <div className="name">
//                         <span>Age</span>
//                         <span>21</span>
//                     </div>
//                     <div className="name">
//                         <span>Email ID</span>
//                         <span>abc@gmail.com</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="line"></div>
//             <div className="price">
//                 <h2>Fare Summary</h2>
//                 <div className="fare">
//                     <span>Ticket Fare</span>
//                     <span>₹3160</span>
//                 </div>
//                 <div className="fare">
//                     <span>Convenience Fee (Incl. of GST)</span>
//                     <span>₹17.7</span>
//                 </div>
//                 <div className="fare">
//                     <span>Travel Insurance (Incl. of GST)</span>
//                     <span>₹0.35</span>
//                 </div>
//                 <div className="fare">
//                     <span>Total Fare</span>
//                     <h2>₹3178.05</h2>
//                 </div>
//             </div>

//         </div>
//         <div className="cardpayment">
//             <div className='cl'>
//                 <div className="payu">
//                     <span>IRCTC Ipay</span>
//                     <span>&gt;</span>
//                 </div>
//                 <div className="payu">
//                     <span>Netbanking</span>
//                     <span>&gt;</span>
//                 </div>
//                 <div className="payu">
//                     <span>Multiple Payment Service</span>
//                     <span>&gt;</span>
//                 </div>
//                 <div className="payu">
//                     <span>Payment Gateway/Credit Card/Debit Card</span>
//                     <span>&gt;</span>
//                 </div>
//                 <div className="payu">
//                     <span>Wallets/Cash Card</span>
//                     <span>&gt;</span>
//                 </div>
//                 <div className="payu">
//                     <span>EMI</span>
//                     <span>&gt;</span>
//                 </div>
//             </div>
//             <div className='cr'>
//                 <div className='cri'>
//                     <input style={{width:"30vw"}} type="text" placeholder='Card Number'/>
//                     <input style={{width:"6vw"}} type="text" placeholder='MM/YY'/>
//                     <input style={{width:"6vw"}} type="password" placeholder='CVV' />
//                 </div>
//                 <input type="text" placeholder='Card Holder Name' />
//                 {/* <div></div> */}
//                 <div className='crt'>
//                     <span>0.4% + Applicable Taxes for other Domestic Cards up to ₹2000</span>
//                     <span>0.9% + Applicable Taxes for other Domestic Cards more than ₹2000</span>
//                     <span>1.8% + Applicable Taxes for all Domestic Credit Cards.</span>
//                     <span>1.8% + Applicable Taxes for all Autoplay Transactions.</span>
//                     <span>10 + Applicable Taxes for Netbanking Transactions</span>
//                 </div>
//                 <div className='crc'>
//                     <input type="checkbox" />
//                     <span>I accept to the IRCTC Terms of Service and Privacy Policy</span>
//                 </div>
//                 <div className='pbuttons'>
//                 <div className="butt" onClick={back}>Go Back</div>
//                 <div className="butt" style={{backgroundColor:"blueviolet"}} onClick={pay}>Proceed to Pay</div>
//             </div>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default Payment






// import React, { useContext, useEffect, useState } from 'react';
// import './Payment.css';
// import a from "../../images/card.png";
// import b from "../../images/credit-card.png";
// import c from "../../images/download.png";
// import d from '../../images/train.png';
// import e from '../../images/star.png';
// import f from '../../images/star (1).png';
// import g from '../../images/plus.png';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Context } from '../..';
// import axios from 'axios';

// function Payment() {
//   const { id } = useParams();
//   const { user } = useContext(Context);
//   const navigate = useNavigate();
//   const [booking, setBooking] = useState(null);
//   const [trainDetails, setTrainDetails] = useState(null);

//   const back = () => {
//     navigate("/passdetails/669f5f604b6560fd20e4d946");
//   };

//   const pay = () => {
//     navigate("/ticket");
//   };

//   useEffect(() => {
//     const fetchBookingAndTrainDetails = async () => {
//       try {
//         // Fetch booking details
//         const bookingRes = await axios.get(`http://localhost:8000/api/book/books/${id}`);
//         const bookingData = bookingRes.data;
//         console.log(bookingRes);
//         console.log(bookingData)
//         setBooking(bookingData);

//         // Extract train ID from booking details
//         const trainId = bookingData.train;
//         console.log(bookingData.passengers.length)

//         // Fetch train details if train ID is available
//         if (trainId) {
//           const trainRes = await axios.get(`http://localhost:8000/api/train/gettrain/${trainId}`);
//           const trainData = trainRes.data;
//           setTrainDetails(trainData);
//           console.log(trainDetails.name)
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchBookingAndTrainDetails();
//   }, [id]);

//   // Safely extract properties
//   const bookingId = booking?.booking?._id ?? 'Loading...';
//   const trainName = trainDetails?.name ?? 'Loading...';
//   const trainStartpoint = trainDetails?.startpoint ?? 'Loading...';
//   const trainDestination = trainDetails?.destination ?? 'Loading...';
//   const passengers = booking?.passengers ?? [];


//   return (
//     <div className="payment">
//       <div className='up'>
//         <div className="upbox">
//           <img src={d} alt="" />
//           <span>Find Train</span>
//         </div>
//         <div className="upbox">
//           <img src={a} alt="" />
//           <span>Passenger Details</span>
//         </div>
//         <div className="upbox">
//           <img src={b} alt="" />
//           <span>Payment</span>                
//         </div>
//         <div className="upbox">
//           <img src={c} alt="" />
//           <span>Download</span>
//         </div>
//       </div>
//       <div className="down" style={{ border: "1px solid black", borderRadius: "0.5rem" }}>
//         <div className='tname' style={{ justifyContent: "space-between" }}>
//           <div className="tid">
//             <span className='s'>1234</span>
//             <span>{trainDetails.name}</span>
//           </div>
//           <span>Train Runs: M T W T F S S</span>
//           <div className="stars">
//             <img src={e} alt="" />
//             <img src={e} alt="" />
//             <img src={e} alt="" />
//             <img src={e} alt="" />
//             <img src={e} alt="" />
//           </div>
//         </div>
//         <div className="line"></div>
//         <div className='tdetails'>
//           <div className='tdup'>
//             <div className='tdate'>
//               <span>{trainDetails ? `20:30 | Sat, 31 Apr` : 'Loading...'}</span>
//               <span>{trainStartpoint}</span>
//             </div>
//             <span>------17h 10m------</span>
//             <div className='tdate'>
//               <span>{trainDetails ? `13:40 | Sun, 01 May` : 'Loading...'}</span>
//               <span>{trainDestination}</span>
//             </div>
//           </div>
//           <div className='tdup'>
//             <div className='tdate' style={{ gap: "2rem" }}>
//               <span style={{ color: "blue", cursor: "pointer" }}>Change boarding Station</span>
//             </div>
//             <div className='tdate' style={{ gap: "2rem" }}>
//               <span style={{ cursor: "pointer" }}>View Map</span>
//             </div>
//           </div>
//         </div>
//         <div className="line"></div>
//         <div>
//           <span style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "larger" }}>
//             {booking.passengers.length} Adult | First Class AC (1A) | General Quota | {trainDetails.destination} | Boarding Date: 31 Apr, 2023 20:30 
//           </span>
//         </div>
//         <div className="line"></div>
//         <div className="pdetails">
          
//             {/* <div className="name">
//               <span>Name</span>
//               <span>{booking ? 'XYZ' : 'Loading...'}</span>
//             </div>
//             <div className="name">
//               <span>Gender</span>
//               <span>{booking ? 'Male' : 'Loading...'}</span>
//             </div>
//             <div className="name">
//               <span>Mobile No</span>
//               <span>{booking ? '0000000000' : 'Loading...'}</span>
//             </div>
//           </div> */}
//           <div className="pl">
//             <h2>Passenger Details</h2>
//             <br/>
//           {passengers.map((passenger, index) => (
            
//             <div key={index} className={`pdetails-row ${index % 2 === 0 ? 'even' : 'odd'}`}>
//               <div className="name">
//                 <span>Name</span>
//                 <span>{passenger.name ?? 'Loading...'}</span>
//               </div>
//               <div className="name">
//                 <span>Gender</span>
//                 <span>{passenger.gender ?? 'Loading...'}</span>
//               </div>
//               <div className="name">
//                 <span>Mobile No</span>
//                 <span>{passenger.mobile ?? '00000000000'}</span>
//               </div>
//             </div>
//           ))}
//           {passengers.map((passenger, index) => (
//             <div className="pr" style={{ marginTop: "40px" }}>
//               <div className="name">
//                   <span>Age</span>
//                   <span>{passenger.age ?? 'Loading...'}</span>
//                 </div>
//                 <div className="name">
//                   <span>Email ID</span>
//                   <span>{passenger.email ?? 'xyx@gmail.com'}</span>
//                 </div>
//             </div>
//           ))}

//         </div>
//         </div>
      
//         <div className="line"></div>
//         <div className="price">
//           <h2>Fare Summary</h2>
//           <div className="fare">
//             <span>Ticket Fare</span>
//             <span>₹3160</span>
//           </div>
//           <div className="fare">
//             <span>Convenience Fee (Incl. of GST)</span>
//             <span>₹17.7</span>
//           </div>
//           <div className="fare">
//             <span>Travel Insurance (Incl. of GST)</span>
//             <span>₹0.35</span>
//           </div>
//           <div className="fare">
//             <span>Total Fare</span>
//             <h2>₹3178.05</h2>
//           </div>
//         </div>
//       </div>
//       <div className="cardpayment">
//         <div className='cl'>
//           <div className="payu">
//             <span>IRCTC Ipay</span>
//             <span>&gt;</span>
//           </div>
//           <div className="payu">
//             <span>Netbanking</span>
//             <span>&gt;</span>
//           </div>
//           <div className="payu">
//             <span>Multiple Payment Service</span>
//             <span>&gt;</span>
//           </div>
//           <div className="payu">
//             <span>Payment Gateway/Credit Card/Debit Card</span>
//             <span>&gt;</span>
//           </div>
//           <div className="payu">
//             <span>Wallets/Cash Card</span>
//             <span>&gt;</span>
//           </div>
//           <div className="payu">
//             <span>EMI</span>
//             <span>&gt;</span>
//           </div>
//         </div>
//         <div className='cr'>
//           <div className='cri'>
//             <input style={{ width: "30vw" }} type="text" placeholder='Card Number' />
//             <input style={{ width: "6vw" }} type="text" placeholder='MM/YY' />
//             <input style={{ width: "6vw" }} type="password" placeholder='CVV' />
//           </div>
//           <input type="text" placeholder='Card Holder Name' />
//           <div className='crt'>
//             <span>0.4% + Applicable Taxes for other Domestic Cards up to ₹2000</span>
//             <span>0.9% + Applicable Taxes for other Domestic Cards more than ₹2000</span>
//             <span>1.8% + Applicable Taxes for all Domestic Credit Cards.</span>
//             <span>1.8% + Applicable Taxes for all Autoplay Transactions.</span>
//             <span>10 + Applicable Taxes for Netbanking Transactions</span>
//           </div>
//           <div className='pbuttons'>
//             <div className="butt" onClick={back}>Go Back</div>
//             <div className="butt" style={{ backgroundColor: "blueviolet" }} onClick={pay}>Proceed to Pay</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Payment;





import React, { useContext, useEffect, useState } from 'react';
import './Payment.css';
import a from "../../images/card.png";
import b from "../../images/credit-card.png";
import c from "../../images/download.png";
import d from '../../images/train.png';
import e from '../../images/star.png';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../..';
import axios from 'axios';

function Payment() {
  const { id } = useParams();
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [trainDetails, setTrainDetails] = useState(null);
  const [p,setp]=useState();


  const back = () => {
    navigate("/passdetails/669f5f604b6560fd20e4d946");
  };

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
  // const price=booking.passengers.price*booking.passengers.length;
  // const totalCost = booking.passengers.reduce((total, passenger) => total + passenger.price, 0);
  const totalCost = passengers.length*p;
  const totalFare = (totalCost + 0.35 + 17.7).toFixed(2);
  // const totalCost = passengers.length*p;
  // const totalFare = (totalCost+17.5+0.35).toFixed(2);



  return (
    <div className="payment">
      <div className='up'>
        <div className="upbox">
          <img src={d} alt="Train" />
          <span>Find Train</span>
        </div>
        <div className="upbox">
          <img src={a} alt="Passenger Details" />
          <span>Passenger Details</span>
        </div>
        <div className="upbox">
          <img src={b} alt="Payment" />
          <span>Payment</span>                
        </div>
        <div className="upbox">
          <img src={c} alt="Download" />
          <span>Download</span>
        </div>
      </div>
      <div className="down" style={{ border: "1px solid black", borderRadius: "0.5rem" }}>
        <div className='tname' style={{ justifyContent: "space-between" }}>
          <div className="tid">
            <span className='s'>1234</span>
            <span>{trainName}</span>
          </div>
          <span>Train Runs: M T W T F S S</span>
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <img key={index} src={e} alt="Star" />
            ))}
          </div>
        </div>
        <div className="line"></div>
        <div className='tdetails'>
          <div className='tdup'>
            <div className='tdate'>
              <span>{trainDetails ? `20:30 | Sat, 31 Apr` : 'Loading...'}</span>
              <span>{trainStartpoint}</span>
            </div>
            <span>------17h 10m------</span>
            <div className='tdate'>
              <span>{trainDetails ? `13:40 | Sun, 01 May` : 'Loading...'}</span>
              <span>{trainDestination}</span>
            </div>
          </div>
          <div className='tdup'>
            <div className='tdate' style={{ gap: "2rem" }}>
              <span style={{ color: "blue", cursor: "pointer" }}>Change boarding Station</span>
            </div>
            <div className='tdate' style={{ gap: "2rem" }}>
              <span style={{ cursor: "pointer" }}>View Map</span>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "larger" }}>
            {passengers.length} Adult | First Class AC (1A) | General Quota | {trainDestination} | Boarding Date: 31 Apr, 2023 20:30 
          </span>
        </div>
        <div className="line"></div>
        <div className="pdetails">
          <div className="pl">
            <h2>Passenger Details</h2>
            <br/>
            {passengers.map((passenger, index) => (
              <div key={index} className={`pdetails-row ${index % 2 === 0 ? 'even' : 'odd'}`}>
                <div className="name">
                  <span>Name</span>
                  <span>{passenger.name ?? 'Loading...'}</span>
                </div>
                <div className="name">
                  <span>Gender</span>
                  <span>{passenger.gender ?? 'Loading...'}</span>
                </div>
                <div className="name">
                  <span>Mobile No</span>
                  <span>{passenger.mobile ?? '00000000000'}</span>
                </div>
                <div className="pr">
                  <div className="name">
                    <span>Age</span>
                    <span>{passenger.age ?? 'Loading...'}</span>
                  </div>
                  <div className="name">
                    <span>Email ID</span>
                    <span>{passenger.email ?? 'xyz@gmail.com'}</span>
                  </div>
                </div>
                <div className="line" style={{height:"0.2rem"}}></div>
              </div>
            ))}
          </div>
        </div>
        <div className="line"></div>
        <div className="price">
          <h2>Fare Summary</h2>
          <div className="fare">
            <span>Ticket Fare</span>
            <span>₹{totalCost}</span>
          </div>
          <div className="fare">
            <span>Convenience Fee (Incl. of GST)</span>
            <span>₹17.7</span>
          </div>
          <div className="fare">
            <span>Travel Insurance (Incl. of GST)</span>
            <span>₹0.35</span>
          </div>
          <div className="fare">
            <span>Total Fare</span>
            <h2>₹{totalFare}</h2>
          </div>
        </div>
      </div>
      <div className="cardpayment">
        <div className='cl'>
          <div className="payu">
            <span>IRCTC Ipay</span>
            <span>&gt;</span>
          </div>
          <div className="payu">
            <span>Netbanking</span>
            <span>&gt;</span>
          </div>
          <div className="payu">
            <span>Multiple Payment Service</span>
            <span>&gt;</span>
          </div>
          <div className="payu">
            <span>Payment Gateway/Credit Card/Debit Card</span>
            <span>&gt;</span>
          </div>
          <div className="payu">
            <span>Wallets/Cash Card</span>
            <span>&gt;</span>
          </div>
          <div className="payu">
            <span>EMI</span>
            <span>&gt;</span>
          </div>
        </div>
        <div className='cr'>
          <div className='cri'>
            <input style={{ width: "30vw" }} type="text" placeholder='Card Number' />
            <input style={{ width: "6vw" }} type="text" placeholder='MM/YY' />
            <input style={{ width: "6vw" }} type="password" placeholder='CVV' />
          </div>
          <input type="text" placeholder='Card Holder Name' />
          <div className='crt'>
            <span>0.4% + Applicable Taxes for other Domestic Cards up to ₹2000</span>
            <span>0.9% + Applicable Taxes for other Domestic Cards more than ₹2000</span>
            <span>1.8% + Applicable Taxes for all Domestic Credit Cards.</span>
            <span>1.8% + Applicable Taxes for all Autoplay Transactions.</span>
            <span>10 + Applicable Taxes for Netbanking Transactions</span>
          </div>
          <div className='pbuttons'>
            <div className="butt" onClick={back}>Go Back</div>
            <div className="butt" style={{ backgroundColor: "blueviolet" }} onClick={pay}>Proceed to Pay</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;








// import React, { useContext, useEffect, useState } from 'react';
// import './Payment.css';
// import a from "../../images/card.png";
// import b from "../../images/credit-card.png";
// import c from "../../images/download.png";
// import d from '../../images/train.png';
// import e from '../../images/star.png';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Context } from '../..';
// import axios from 'axios';

// function Payment() {
//   const { id } = useParams();
//   const { user } = useContext(Context);
//   const navigate = useNavigate();
//   const [booking, setBooking] = useState(null);
//   const [trainDetails, setTrainDetails] = useState(null);
//   const [p,setp]=useState(0);

//   const back = () => {
//     navigate("/passdetails/669f5f604b6560fd20e4d946");
//   };

//   const pay = () => {
//     navigate(`/ticket/${id}`);
//   };

//   useEffect(() => {
//     const fetchBookingAndTrainDetails = async () => {
//       try {
//         // Fetch booking details
//         const bookingRes = await axios.get(`http://localhost:8000/api/book/books/${id}`);
//         const bookingData = bookingRes.data;
//         setBooking(bookingData);

        

//         // Extract train ID from booking details
//         const trainId = bookingData.train;
//         console.log(bookingData.passengers.price);

//         // Fetch train details if train ID is available
//         if (trainId) {
//           const trainRes = await axios.get(`http://localhost:8000/api/train/gettrain/${trainId}`);
//           setTrainDetails(trainRes.data);
//         }
//         const price=await axios.get(`http://localhost:8000/api/train/gettrain/price/${trainId}`);
//         setp(price);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchBookingAndTrainDetails();
//   }, [id]);

//   // Safely extract properties
//   const bookingId = booking?.booking?._id ?? 'Loading...';
//   const trainName = trainDetails?.name ?? 'Loading...';
//   const trainStartpoint = trainDetails?.startpoint ?? 'Loading...';
//   const trainDestination = trainDetails?.destination ?? 'Loading...';
//   const passengers = booking?.passengers ?? [];
//   // const d=trainDetails.price;
//   // const dd=booking.passengers.length;
  
//   // Calculate total cost with checks
//   const totalCost = passengers.length*p;
//     const totalFare = (totalCost+17.5+0.35).toFixed(2);

//   return (
//     <div className="payment">
//       <div className='up'>
//         <div className="upbox">
//           <img src={d} alt="Train" />
//           <span>Find Train</span>
//         </div>
//         <div className="upbox">
//           <img src={a} alt="Passenger Details" />
//           <span>Passenger Details</span>
//         </div>
//         <div className="upbox">
//           <img src={b} alt="Payment" />
//           <span>Payment</span>                
//         </div>
//         <div className="upbox">
//           <img src={c} alt="Download" />
//           <span>Download</span>
//         </div>
//       </div>
//       <div className="down" style={{ border: "1px solid black", borderRadius: "0.5rem" }}>
//         <div className='tname' style={{ justifyContent: "space-between" }}>
//           <div className="tid">
//             <span className='s'>1234</span>
//             <span>{trainName}</span>
//           </div>
//           <span>Train Runs: M T W T F S S</span>
//           <div className="stars">
//             {[...Array(5)].map((_, index) => (
//               <img key={index} src={e} alt="Star" />
//             ))}
//           </div>
//         </div>
//         <div className="line"></div>
//         <div className='tdetails'>
//           <div className='tdup'>
//             <div className='tdate'>
//               <span>{trainDetails ? `20:30 | Sat, 31 Apr` : 'Loading...'}</span>
//               <span>{trainStartpoint}</span>
//             </div>
//             <span>------17h 10m------</span>
//             <div className='tdate'>
//               <span>{trainDetails ? `13:40 | Sun, 01 May` : 'Loading...'}</span>
//               <span>{trainDestination}</span>
//             </div>
//           </div>
//           <div className='tdup'>
//             <div className='tdate' style={{ gap: "2rem" }}>
//               <span style={{ color: "blue", cursor: "pointer" }}>Change boarding Station</span>
//             </div>
//             <div className='tdate' style={{ gap: "2rem" }}>
//               <span style={{ cursor: "pointer" }}>View Map</span>
//             </div>
//           </div>
//         </div>
//         <div className="line"></div>
//         <div>
//           <span style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "larger" }}>
//             {passengers.length} Adult | First Class AC (1A) | General Quota | {trainDestination} | Boarding Date: 31 Apr, 2023 20:30 
//           </span>
//         </div>
//         <div className="line"></div>
//         <div className="pdetails">
//           <div className="pl">
//             <h2>Passenger Details</h2>
//             <br/>
//             {passengers.map((passenger, index) => (
//               <div key={index} className={`pdetails-row ${index % 2 === 0 ? 'even' : 'odd'}`}>
//                 <div className="name">
//                   <span>Name</span>
//                   <span>{passenger?.name ?? 'Loading...'}</span>
//                 </div>
//                 <div className="name">
//                   <span>Gender</span>
//                   <span>{passenger?.gender ?? 'Loading...'}</span>
//                 </div>
//                 <div className="name">
//                   <span>Mobile No</span>
//                   <span>{passenger?.mobile ?? '00000000000'}</span>
//                 </div>
//                 <div className="pr">
//                   <div className="name">
//                     <span>Age</span>
//                     <span>{passenger?.age ?? 'Loading...'}</span>
//                   </div>
//                   <div className="name">
//                     <span>Email ID</span>
//                     <span>{passenger?.email ?? 'xyz@gmail.com'}</span>
//                   </div>
//                 </div>
//                 <div className="line" style={{height:"0.2rem"}}></div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="line"></div>
//         <div className="price">
//           <h2>Fare Summary</h2>
//           <div className="fare">
//             <span>Ticket Fare</span>
//             <span>₹{totalCost}</span>
//           </div>
//           <div className="fare">
//             <span>Convenience Fee (Incl. of GST)</span>
//             <span>₹17.7</span>
//           </div>
//           <div className="fare">
//             <span>Travel Insurance (Incl. of GST)</span>
//             <span>₹0.35</span>
//           </div>
//           <div className="fare">
//             <span>Total Fare</span>
//             <h2>₹{totalFare}</h2>
//           </div>
//         </div>
//       </div>
//       <div className="cardpayment">
//         <div className='cl'>
//           <div className="payu">
//             <span>IRCTC Ipay</span>
//             <span>&gt;</span>
//           </div>
//           <div className="payu">
//             <span>Netbanking</span>
//             <span>&gt;</span>
//           </div>
//           <div className="payu">
//             <span>Multiple Payment Service</span>
//             <span>&gt;</span>
//           </div>
//           <div className="payu">
//             <span>Payment Gateway/Credit Card/Debit Card</span>
//             <span>&gt;</span>
//           </div>
//           <div className="payu">
//             <span>Wallets/Cash Card</span>
//             <span>&gt;</span>
//           </div>
//           <div className="payu">
//             <span>EMI</span>
//             <span>&gt;</span>
//           </div>
//         </div>
//         <div className='cr'>
//            <div className='cri'>
//              <input style={{ width: "30vw" }} type="text" placeholder='Card Number' />
//              <input style={{ width: "6vw" }} type="text" placeholder='MM/YY' />
//              <input style={{ width: "6vw" }} type="password" placeholder='CVV' />
//            </div>
//            <input type="text" placeholder='Card Holder Name' />
//            <div className='crt'>
//              <span>0.4% + Applicable Taxes for other Domestic Cards up to ₹2000</span>
//              <span>0.9% + Applicable Taxes for other Domestic Cards more than ₹2000</span>
//              <span>1.8% + Applicable Taxes for all Domestic Credit Cards.</span>
//              <span>1.8% + Applicable Taxes for all Autoplay Transactions.</span>
//              <span>10 + Applicable Taxes for Netbanking Transactions</span>
//            </div>
//            <div className='pbuttons'>
//              <div className="butt" onClick={back}>Go Back</div>
//              <div className="butt" style={{ backgroundColor: "blueviolet" }} onClick={pay}>Proceed to Pay</div>
//            </div>
//          </div>
//       </div>
//     </div>
//   );
// }

// export default Payment;
