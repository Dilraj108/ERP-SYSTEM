import React from "react";
import { FaTh, FaThList, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
    const [isOpen,setisOpen]=useState(false);
    const toggle=()=>setisOpen(!isOpen);
  const [menu, setMenu] = useState([
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/Products",
      name: "Products",
      icon: <FaThList />,
    },
    {
      path: "/Orders",
      name: "Orders",
      icon: <FaTh />,
    },
  ]);

  return (
    <div className="container  ">
      <div style={{width:isOpen?"200px":"50px"}} className="sidebar bg-gray-700">
        <div className="top">
          <h1 style={{display:isOpen?"block":"none"}} className="logo ">ERP-SYSTEM</h1>
          <div style={{marginLeft:isOpen?"30px":"0px"}} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menu.map((item, index) => (
          <Link to={item.path} key={index} className="link" activeclassName="active">
            <div className="icon mt-1">{item.icon}</div>
            <div style={{display:isOpen?"block":"none"}} className="name">{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
