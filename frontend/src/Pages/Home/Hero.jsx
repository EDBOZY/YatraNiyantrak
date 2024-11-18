import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios';
import a from '../../images/l.png'
import b from '../../images/map.png'
import c from '../../images/swap.png'
import e from '../../images/sear.png'
import {Link, useNavigate } from 'react-router-dom'

function Hero() {
  const navigate=useNavigate()
  const [selected,setSelected]=useState("b")
  const [destination,Setdestination]=useState("");
  const [from,Setfrom]=useState("");
  const [routes, setRoutes] = useState([]);
  const [trainArray, setTrainArray] = useState([]);

  const books=()=>{
    setSelected("b");
  }
  const boo=()=>{
    setSelected("p");
  }
  const bo=()=>{
    setSelected("t");
  }
  const book=async(e)=>{
    e.preventDefault();
    const param1 = from;
    const param2 = destination;
    const dataArray=trainArray
    try {
        await axios
            .get(`http://localhost:8000/api/train/by-route?startpoint=${from}&destination=${destination}`,
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                }
            )
            .then((res)=>{
                
                setRoutes(res.data)
                console.log(res.data)
                const formattedTrains = res.data.map(train => ({
                  id: train._id,
                  name: train.name,
                  destination:train.destination,
                  from:train.startpoint,
                  price: `₹${train.price}`,
                }))
                setTrainArray(formattedTrains);
                navigate(`/details/${param1}/${param2}`);

                // navigate("/book");
                // navigate("/book");
                Setfrom("");
                Setdestination("");
            })
    } catch (error) {
      console.log(error)
    }
  } 

  

  return (
    <div className="hero">
      <div className="left">
        <div className="up">
          <img className='imgu' src={a} alt="" />
        </div>
        <div className="down">
          <div className="container">
            <div className='status'>
              <span onClick={books} style={{
                        color: selected === 'b' ? '#066086' : 'black',
                        cursor: 'pointer',
                        }}>BOOK TICKET</span>
              <span onClick={boo} style={{
                        color: selected === 'p' ? '#066086' : 'black',
                        cursor: 'pointer',
                        }}>PNR STATUS</span>
              <span onClick={bo} style={{
                        color: selected === 't' ? '#066086' : 'black',
                        cursor: 'pointer',
                        }}>TRAIN STATUS</span>
            </div>
            <div className='line'></div>
            <div className='book'>
              <div className='checkbox'>
                  <div className="one">
                    <input type="checkbox" />
                    <span>Round Trip</span>
                  </div>
                  <div className="one">
                    <input type="checkbox" />
                    <span>Flexible Date</span>
                  </div>
              </div>
              <div className='search'>
                <input type="text" placeholder='From ' value={from} onChange={(e) => Setfrom(e.target.value)}/>
                <img style={{height:"5vh",backgroundColor:"#009DDB",borderRadius:"0.5rem",cursor:"pointer"}} src={c} alt="" />
                <input type="text" placeholder='Destination ' value={destination} onChange={(e) => Setdestination(e.target.value)}/>
              </div>
              <div className='date'>
                <input className="input" type="date" />
                <select  className='input'>
                  <option value="" disabled>
                    Quota
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div  className='sb' style={{cursor:"pointer",textDecoration:"none",backgroundColor:"#009DDB"}} onClick={book} >
                  <img style={{height:"3vh"}} src={e} alt="" />
                  <span >Search</span>
                </div>
              </div>
            </div>
            <div className='line'></div>
            <div className='recent'>
              <h2>Recent Search</h2>
              <div className="bu">
                <span>Delhi</span>
                <span>Kerala</span>
                <span>Pune</span>
                <span>Mumbai</span>
                <span>Goa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img style={{height:"80vh",width:"40vw",marginTop:"20px"}} src={b} alt="" />
      </div>
    </div>
  )
}

export default Hero