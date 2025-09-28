import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './App.css';
import AppRoutes from './routes/AppRoutes';
//import { UserProvider } from "./context/UserContext";
import NavBar from './components/NavBar';
import MyThemeProvider from './context/MyThemeProvider';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function App() {
  const [count, setCount] = useState(0)

  

    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>

return (
    
 <div className="app-container">
    <MyThemeProvider>
       {/* <UserProvider> */}
      <NavBar />  
     <AppRoutes />
     {/* </UserProvider> */}
    </MyThemeProvider>
 </div>
)
}
         


export default App

  
