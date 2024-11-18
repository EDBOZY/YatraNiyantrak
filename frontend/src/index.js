// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { UserProvider } from '../contextApi/Usercontextapi';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <UserProvider>
//         <App />
//   </UserProvider>
// );

import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

export const Context=createContext({
  isAuthenthicated:false,
  setIsAuthenticated: () => {},
  user: {},
  setUser: () => {},
  // setIsAuthenticated: () => {}, // Default noop function

  
});

const AppWrapper=()=>{
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return(
    <Context.Provider 
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
      }}
    >
      <App/>
    </Context.Provider>
  )

}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AppWrapper />
//   </React.StrictMode>
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
