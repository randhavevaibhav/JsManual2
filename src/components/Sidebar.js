import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import '../styles/Sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [menuItems, setMenuItems] = useState([
      { id: 1, title: "Print Code", isOpen: false,path:"/JsManual2/printcode" },
      { id: 2, title: "topics", isOpen: false,path:"/JsManual2/topics" },
      { id: 3, title: "Services", isOpen: false },
      { id: 4, title: "Contact", isOpen: false },
    ]);
  
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
    const toggleSidebar = () => {
      
      
      setIsSidebarOpen(!isSidebarOpen);
      if(isSidebarOpen)
      {
          closeAllSubMenu();
      }
    };
    const closeAllSubMenu = ()=>{
      
      setMenuItems((prevMenuItems) =>
        prevMenuItems.map((item) =>
        true ? { ...item, isOpen: false } : item
        )
      );
  
    }
  
    const toggleMenu = (id) => {
      
      setMenuItems((prevMenuItems) =>
        prevMenuItems.map((item) =>
          {
              return item.id === id ? { ...item, isOpen: !item.isOpen } : item;
          }
        )
       
      );
      //for opening only one sub-menu
      setMenuItems((prevMenuItems) =>
        prevMenuItems.map((item) =>
          {
              return item.id !== id ? { ...item, isOpen: false } : item;
          }
        )
       
      );
      
    };
  
    return (
      <>
      <div className="sidebar-container">
      <div className="hamburger-icon" onClick={()=>{
          toggleSidebar();
          
        }}>
          <FontAwesomeIcon icon={faBars} size="xl" color="white"/>
        </div>
        <div className={`sidebar ${isSidebarOpen ? "openSidebar" : "closedSidebar"}`}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <div className="menu-item" onClick={() => {
                  toggleMenu(item.id);
                  
                }}>
                 <Link to={item.path}>{item.title}</Link>
                </div>
                {item.isOpen && (
                  <ul className="sub-menu" >
                   
                    <li >Sub-Item 1</li>
                    <li >Sub-Item 2</li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
       
      </>
    );
  };
export default Sidebar;
