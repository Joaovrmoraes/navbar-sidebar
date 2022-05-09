import './App.css';
import { useState } from 'react';
import Sidebar from './Components/sidebar/Sidebar.js';
import Navbar from './Components/navbar/Navbar.js';


const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true)
  }

  const closeSidebar = () => {
     setSidebarOpen(false)
  }


  return (
    <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
    </div>
  );
}

export default App;
