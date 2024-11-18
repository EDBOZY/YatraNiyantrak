import React, { useEffect, useState } from 'react'
import './Book.css'
import a from '../../images/Mapsicle Map.png'
import c from '../../images/swap.png'
import e from '../../images/sear.png'
import d from '../../images/Component 20.png'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function Book() {
    const navigate=useNavigate();
    const { param1, param2 ,dataArray} = useParams();
    const [destination,Setdestination]=useState(param2);
    const [from,Setfrom]=useState(param1);
    const [route,setRoute]=useState([]);
    const pass = (id) => {
      navigate(`/passdetails/${id}`)
    }
    useEffect(() => {
        const fetchTrains = async () => {
          try {
            const res = await axios.get(`http://localhost:8000/api/train/by-route?startpoint=${param1}&destination=${param2}`);
            setRoute(res.data);
          } catch (error) {
            console.error(error);
            // Consider showing an error message to the user
          }
        };
        fetchTrains();
      }, [param1,param2]);    
    const book=async(e)=>{
      e.preventDefault();
      try {
          await axios
              .get(`http://localhost:8000/api/train/by-route?startpoint=${param1}&destination=${param2}`,
                  {
                      withCredentials: true,
                      headers: { "Content-Type": "application/json" },
                  }
              )
              .then((res)=>{
                  // console.log('Token:', res.data);
                  setRoute(res.data);
                //   console.log(routes)
                  // navigate("/book");
                  // navigate("/book");
                  navigate(`/details/${from}/${destination}`);

                  Setfrom("");
                  Setdestination("");
              })
      } catch (error) {
        console.log(error)
      }
    }  
  return (
    <div className="books">
        <div className="up">
            <img style={{width:"100vw"}} src={a} alt="" />
            <div className="overlay">
            <div className='status'>
              <span>BOOK TICKET</span>
              <span>PNR STATUS</span>
              <span>TRAIN STATUS</span>
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
                <img style={{height:"5vh",width:"2vw"}} src={c} alt="" />
                <input type="text" placeholder='Destination ' value={destination} onChange={(e) => Setdestination(e.target.value)}/>
              </div>
              <div className='date'>
                <input className="input" type="date" />
                <input className="input" type="dropdown" />
                {/* <Link to="/book" style={{textDecoration:"none"}}> */}
                <div  className='sb' style={{cursor:"pointer",textDecoration:"none"}} onClick={book} >
                  <img style={{height:"3vh",width:"3vw"}} src={e} alt="" />
                  <span >Search</span>
                </div>
                {/* </Link> */}
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
        <div className="down" >
            <div className="left">
                <div className='filter'>
                    <span>Choose Filter</span>
                    <span>Clear Filter</span>
                </div>
                <div className='sub'>
                Journey Class
                </div>
                <div className='sub'>
                Journey Class
                </div>
                <div className='sub'>
                Journey Class
                </div>
                <div className='sub'>
                Journey Class
                </div>
                <div className='sub'>
                Journey Class
                </div>
                <div className='sub'>
                Journey Class
                </div>
                <div className='s2'>
                    <img src={d} alt="" />
                </div>
            </div>
            <div className="right" style={{marginBottom:"40px"}}>
                <div className='head'>
                    <span>4 result found for New Delhi - Indore Jn Bg | Sat, 31 Apr 2023</span>
                    <span>All Available Trains</span>
                </div>
                <div className='shead'>
                    {/* <label for="cars">Choose a car:</label> */}
                    <div className="sl">
                    <select name="cars" id="">
                    <option value="volvo">Choose</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                    </select>
                    <select name="cars" id="">
                    <option value="volvo">Choose</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                    </select>
                    </div>
                    <div className="sr">
                        <span>Previous</span>
                        <span>Next</span>
                    </div>
                </div>
                <div className="mmv" style={{display:"flex",flexDirection:"column",gap:"1rem",margin:"20px"}}>         
                    {route.map(train => (
                    <div className='mainbox'>
                            <div key={train._id} className='mhead'>
                                <div className='mhh'>
                                    <span className='s'>12345</span>
                                    <span>{train.name}</span>
                                </div>
                                <span>Train Runs: M T W T F S S</span>
                                <span>^</span>
                                </div>

                                <div className='mdate'>
                                    <div className='date'>
                                        <span>20:30</span>
                                        <span>|</span>
                                        <span>Sat, 31 Apr</span>
                                        <span>|</span>
                                        <span>{train.startpoint}</span>
                                    </div>
                                    <span>------17:20------</span>
                                    <div className='date'>
                                        <span>20:30</span>
                                        <span>|</span>
                                        <span>Sat, 31 Apr</span>
                                        <span>|</span>
                                        <span>{train.destination}</span>
                                    </div>
                                </div>
                                <div className='mtrain'>
                                    <div className='mbox' onClick={() => pass(train._id)} style={{cursor:"pointer"}}>
                                        <span>First ClasssAC</span>
                                        <h3>₹3160</h3>
                                        <span>AVAILABLE</span>
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
            </div>   
        </div> 
    </div>
  )
}

export default Book


