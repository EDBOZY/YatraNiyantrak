// import React, { useContext, useState } from 'react'
// import "./Navbar.css"
// import axios from "axios";

// import { Link, useNavigate } from 'react-router-dom'
// // import { Context } from '../../index'
// import { toast } from 'react-toastify'
// import { Context } from '../..';
// // import { Context } from '../../index';

// const Navbar = () => {
//     const {isAuthenticated,setIsAuthenticated} = useContext(Context);
//     console.log(isAuthenticated)

//     const navigate=useNavigate();
//     const logout=async()=>{
//         await axios.
//             get("http://localhost:8000/api/users/logout",{withCredentials:true,})
//             .then((res)=>{
//                 toast.success("succesfully loged out");
//                 console.log(res)
//                 setIsAuthenticated(false);
//                 console.log(isAuthenticated)

//             })
//             .catch((err)=>{
//                 toast.error("error")
//                 console.log(err)
//             })
//     }

//     const login=()=>{
//         navigate("/login")
//     }
//   return (
//     <div className="navbar">
//         <div className="nav-l">
//             <img src="/path-to-your-image.jpg" alt="Logo" className="navbar-logo" />
//             <Link className='link' to="/">Home</Link>
//             <Link className='link' to="/trains">Trains</Link>
//             <Link className='link' to="/places">Places</Link>
//             <Link className='link' to="/contact">Contact Us</Link>
//         </div>
//         <div className="nav-r">
//             {!isAuthenticated ? (
//             <div>
//                 <button className="link" onClick={login} >Login</button>
//                 <Link className="link" to="/register">Register</Link>
//             </div>
//             ) : (
//             <div>
//                 {/* <Link className="link" to="/profile">{user}</Link> */}
//                 <button className="link"  onClick={logout} >Logout</button>
//             </div>
//             )}
//         </div>

//     </div>
//   )
// }

// export default Navbar



// import React, { useContext, useEffect, useState } from 'react';
// import "./Navbar.css";
// import axios from "axios";
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { Context } from '../../index';

// const Navbar = () => {
//     const[show,setShow]=useState(false);
//     const { isAuthenticated, setIsAuthenticated } = useContext(Context);
//     const navigate = useNavigate();

//   const logout = async () => {
//     await axios
//       .get("http://localhost:8000/api/users/logout", {
//         withCredentials: true,
//       })
//       .then((res) => {
//         setIsAuthenticated(false)
//         toast.success(res.data.message);
//         setIsAuthenticated(false);
//         console.log(isAuthenticated)
//       })
//       .catch((err) => {
//         toast.error(err.response.data.message);
//       });
//   };
    

//     // useEffect(() => {
//     //     console.log('isAuthenticated changed:', isAuthenticated);
//     // }, [isAuthenticated]);

//     // const logout = async () => {
//     //     try {
//     //         const res = await axios.get("http://localhost:8000/api/users/logout", { withCredentials: true });
//     //         toast.success("Successfully logged out");
//     //         console.log(res);
//     //         setIsAuthenticated(false);
//     //     } catch (err) {
//     //         toast.error("Error logging out");
//     //         console.log(err);
//     //     }
//     // };

//     const login = () => {
//         navigate("/login");
//     };
//     const register=()=>{
//         navigate("/register")
//     }

//     return (
//         <div className="navbar">
//             <div className="nav-l">
//                 <img src="/path-to-your-image.jpg" alt="Logo" className="navbar-logo" />
//                 <Link className='link' to="/">Home</Link>
//                 <Link className='link' to="/trains">Trains</Link>
//                 <Link className='link' to="/places">Places</Link>
//                 <Link className='link' to="/contact">Contact Us</Link>
//             </div>
//             <div className="nav-r">
//                 {isAuthenticated ? (
//                     <div>
//                     {/* <Link className="link" to="/profile">{user}</Link> */}
//                         <button className="link" onClick={logout}>Logout</button>
//                     </div>
//                 ) : (
//                     <div>
//                         <button className="link" onClick={login}>Login</button>
//                         <button className="link" onClick={register}>Register</button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Navbar;



import React, { useContext, useState } from 'react';
import "./Nav.css";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { Context } from '../../index';
import a from '../../images/Logo.png'
import { Context } from '../..';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const navigate = useNavigate();
    const [selected,setSelected]=useState("home")

    const logout = async () => {
        await axios
            .get("http://localhost:8000/api/users/logout", {
                withCredentials: true,
            })
            .then((res) => {
                // setIsAuthenticated(false)
                toast.success(res.data.message);
                setIsAuthenticated(false);
                console.log(isAuthenticated)
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            });
    };

    const login = () => {
        navigate("/login");
    };

    const home = () => {
        navigate("/");
    };
    
    const register = () => {
        navigate("/register")
    }
    const handleHomeClick=()=>{
        setSelected("home")
        navigate("/");

    }
    const handleContactClick=()=>{
        setSelected("contact");
        // navigate("/book");

    }

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={a} alt="Logo" className="navbar-logo" onClick={home} />
                <div className="links">
                    <div className="link" onClick={handleHomeClick}
                        style={{
                        backgroundColor: selected === 'home' ? '#066086' : 'white',
                        color: selected === 'home' ? 'white' : 'black',
                        // padding: '10px',
                        cursor: 'pointer',
                        }} >Home</div>
                    <br/>
                    <div className="link" onClick={handleContactClick}
                        style={{
                        backgroundColor: selected === 'contact' ? '#066086' : 'white',
                        color: selected === 'contact' ? 'white' : 'black',
                        // padding: '10px',
                        cursor: 'pointer',
                        }}>Contact Us</div>
                </div>
            </div>
            <div className="navbar-right">
                {isAuthenticated ? (
                    <div>
                        <button className="l" onClick={logout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <button className="l" onClick={login}>Login</button>
                        <button className="l" onClick={register}>Register</button>
                    </div>
                )}
            </div>
            
        </nav>
    );
};

export default Navbar;
