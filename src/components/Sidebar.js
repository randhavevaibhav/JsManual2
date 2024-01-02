import { faBars } from "@fortawesome/free-solid-svg-icons";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import '../styles/Sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { SidebarMenuList } from "../helper/SidebarMenuList";
const Sidebar = () => {
    const [menuItems, setMenuItems] = useState(SidebarMenuList);
  
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
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
                {item.isOpen && toString.call(item.subTopics) === "[object Array]"? <>
                <ul className="sub-menu" >
                   
                   {item.subTopics.map((subTopic)=>{
                        return(<>
                        <li >
                        <FontAwesomeIcon icon={faAngleRight} size="sm" color="white"/>
                        <Link to={subTopic.path} >{" "+subTopic.title}</Link>
                        </li>
                        </>)


                    })}
                    
                  </ul>
                
                
                </>:""}
                  
                
              </li>
            ))}
          </ul>
        </div>
      </div>
       
      </>
    );
  };
export default Sidebar;
