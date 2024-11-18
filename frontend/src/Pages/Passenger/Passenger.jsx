import React,{ useContext, useEffect, useState } from 'react'
import './Passenger.css'
import a from "../../images/card.png"
import b from "../../images/credit-card.png"
import c from "../../images/download.png"
import d from "../../images/train.png"
import e from '../../images/star.png'
import f from '../../images/star (1).png'
import g from '../../images/plus.png'
import axios from 'axios'
import Cookies from 'js-cookie'; // Import js-cookie to handle cookies

import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../..'




function Passenger() {
    const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(Context);
  const [data, setData] = useState([]);
  const [passengers, setPassengers] = useState([{ name: '', age: '', gender: '', berthPreference: '', nationality: '' }]);

  const back = () => {
    navigate("/details/sharjah/ajman");
  };

  const handleAddPassenger = () => {
    setPassengers([...passengers, { name: '', age: '', gender: '', berthPreference: '', nationality: '' }]);
  };

  const handlePassengerChange = (index, field, value) => {
    const newPassengers = passengers.slice();
    newPassengers[index][field] = value;
    setPassengers(newPassengers);
  };

  const handleRemovePassenger = (index) => {
    const newPassengers = passengers.slice();
    newPassengers.splice(index, 1);
    setPassengers(newPassengers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user._id)

    try {
      const response = await axios.post('http://localhost:8000/api/book/crebook', {
        train_id: id,
        user_id: user._id,
        passengers,
      });
      console.log(response.data.bookingid);
      const bookingId = response.data.bookingid;

    //   navigate(`/paymentdetails/${response._id}`);
      navigate(`/paymentdetails/${bookingId}`);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchTrain = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/train/gettrain/${id}`);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrain();
  }, [id]);

  return (
    <div className="pass">
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
        <div className='down'>
            <div className='tname' style={{justifyContent:"space-between"}}>
                <div className="tid">
                    <span className='s'>1234</span>
                    <span>{data.name}</span>
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
                        <span>{data.startpoint}</span>
                    </div>
                    <span>------17h 10m------</span>
                    <div className='tdate'>
                        <span>13:40 | Sun, 01 May</span>
                        <span>{data.destination}</span>
                    </div>
                </div>
                <div className='tdup'>
                    <div className='tdate' style={{gap:"2rem"}}>
                        <h2>First Class AC (1A)</h2>
                        <span style={{color:"blue",cursor:"pointer"}}>Change boarding Station</span>
                    </div>
                    <span style={{marginLeft:"-100px"}}>AVAILABLE</span>
                    <div className='tdate' style={{gap:"2rem"}}>
                        <h2>₹3160</h2>
                        <span style={{cursor:"pointer"}}>View Map</span>
                    </div>
                </div>
            </div>
            <div className='note'>
                <span>Note</span>
                <div className='nnote'>
                    <span>Please submit full name of the passengers instead of initials.</span>
                    <span>The ID card will be required during journey</span>
                </div>
            </div>
            {/* <div className='pd'>
                <h2>Passenger Details</h2>
                <br/>
                <div className='pinput'>
                    <input type="text" placeholder='Enter Name' style={{width:"25vw"}}/>
                    <input type="text" placeholder='Age' style={{width:"10vw"}}/>
                    <input type="text" placeholder='Gender' style={{width:"10vw"}}/>
                    <input type="text" placeholder='Berth Preference' style={{width:"15vw"}}/>
                    <input type="text" placeholder='Nationality' style={{width:"15vw"}}/>
                </div>
            </div> */}
            {passengers.map((passenger, index) => (
            <div className='pd' key={index}>
              <h2>Passenger Details</h2>
              <br />
              <div className='pinput'>
                <input
                  type="text"
                  placeholder='Enter Name'
                  style={{ width: "25vw" }}
                  value={passenger.name}
                  onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder='Age'
                  style={{ width: "10vw" }}
                  value={passenger.age}
                  onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder='Gender'
                  style={{ width: "10vw" }}
                  value={passenger.gender}
                  onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder='Berth Preference'
                  style={{ width: "15vw" }}
                  value={passenger.berthPreference}
                  onChange={(e) => handlePassengerChange(index, 'berthPreference', e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder='Nationality'
                  style={{ width: "15vw" }}
                  value={passenger.nationality}
                  onChange={(e) => handlePassengerChange(index, 'nationality', e.target.value)}
                  required
                />
              </div>
            </div>
          ))}
          {/* <button type="button" >
            Add Another Passenger
          </button> */}
            <div className='passadd'>
                <div className='pplus' onClick={handleAddPassenger}>
                    <img src={g} alt="" />
                    <span>Add Passengers</span>
                </div>
                <div className='pplus' onClick={handleRemovePassenger}>
                    <img src={g} alt="" />
                    <span>Add Infant without Birth</span>
                </div>
            </div>
            <div  className='pchecks'>
                <div className='pcleft'>
                    <h2>Preferred Coach ID</h2>
                    <input className='oi' style={{width:"20vw"}} type="text" placeholder='None'/>
                    <div className='checkbox'>
                        <input type="checkbox" />
                        <span>Consider for Auto-Upgradation</span>
                    </div>
                    <div className='checkbox'>
                        <input type="checkbox" />
                        <span>Consider for Auto-Upgradation</span>
                    </div>
                    <div className='checkbox'>
                        <input type="checkbox" />
                        <span>Consider for Auto-Upgradation</span>
                    </div>
                </div>
                <div className='pcright'>
                    <h2>Contact Details</h2>
                    <div className='cinput'>
                        <input type="email" style={{width:"30vw"}}  className='oi' placeholder='Enter Email'/>
                        <input type="text" style={{width:"20vw"}} className='oi' placeholder='Enter Phone'/>
                    </div>
                    <input type="text" className='oi' placeholder='Enter GSTIN (optional)' />
                </div>
                
            </div>
            <div className='pbuttons'>
                <div className="butt" onClick={back}>Go Back</div>
                <div className="butt" style={{backgroundColor:"blueviolet"}} onClick={handleSubmit}>Proceed to Pay</div>
            </div>
        </div>
    </div>
  )
}

export default Passenger