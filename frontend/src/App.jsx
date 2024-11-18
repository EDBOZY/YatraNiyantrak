import './App.css';
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/auth/Login';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import React , { useContext, useEffect } from 'react';
import axios from 'axios';
// import { Context } from './index';
import Register from './Pages/auth/Register';
import Book from './Pages/Book/Book';
import Footer from './Pages/Home/Footer';
import Passenger from './Pages/Passenger/Passenger';
import Payment from './Pages/Payment/Payment';
import Ticket from './Pages/Ticket/Ticket';
import s from './Pages/Book/s.jsx'
import { Context } from './index.js';
// import Book from './Pages/Book/Book';
// import { Context } from '.';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(Context);
  return isAuthenticated ? children : <Navigate to="/login" />;
};
const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useContext(Context);
  return !isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  const { isAuthenticated, setIsAuthenticated, setUser } =
  useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/users/loggedin",
          {
            withCredentials: true,
          }
        );
        console.log("Full Response:", response.cookie);  // Log the full response object
        console.log("Response Data:", response.data);  // Log the data object
        console.log("Response User:", response.data.user);
        setIsAuthenticated(true);
        setUser(response.data.user);
        // console.log(isAuthenticated)
        // console.log(response.data.user)
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, []);
  // const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext(Context);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8000/api/users/loggedin", {
  //         withCredentials: true,
  //       });

  //       console.log("Full Response:", response);  // Log the full response object
  //       console.log("Response Data:", response.data);  // Log the data object
  //       console.log("Response User:", response.data.user);

  //       if (response.data.success) {
  //         setIsAuthenticated(true);
  //         setUser(response.data.user);
  //       } else {
  //         setIsAuthenticated(false);
  //         setUser({});
  //       }
  //     } catch (error) {
  //       console.error("Fetch User Error:", error);
  //       setIsAuthenticated(false);
  //       setUser({});
  //     }
  //   };

  //   fetchUser();
  // }, []);
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>}/>
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>}/>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>}/>
        <Route path="/details/:param1/:param2" element={<PrivateRoute><Book/></PrivateRoute>}/>
        <Route path="/passdetails/:id" element={<PrivateRoute><Passenger /></PrivateRoute>}/>
        <Route path="/paymentdetails/:id" element={<PrivateRoute><Payment /></PrivateRoute>}/>
        <Route path="/ticket/:id" element={<PrivateRoute><Ticket /></PrivateRoute>}/>
      </Routes>
      <Footer/>
      <ToastContainer />
    </Router>
  );
}
export default App;
