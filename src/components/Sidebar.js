import { faBars } from "@fortawesome/free-solid-svg-icons";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import '../styles/Sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { SidebarMenuList } from "../helper/SidebarMenuList";
import { useEffect,useRef } from "react";
const Sidebar = () => {
    const [menuItems, setMenuItems] = useState(SidebarMenuList);
  
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const newRef = useRef(null);
    useEffect(() => {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    });

    const handleOutsideClick = (e) => {
      if (newRef.current && !newRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    };

    const closeSidebar = (item)=>{
      //close side bar if it does not have any subtopics
      if(!(toString.call(item.subTopics)==="[object Array]"))
      {
        setIsSidebarOpen(false);
      }
      //close side bar if clicked on any subtopic
      else if(toString.call(item.id)==="[object String]")
      {
        setIsSidebarOpen(false);

      }     

    }
  
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
      <div className="sidebar-container" ref={newRef}>
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
                 <Link to={item.path} onClick={()=>{closeSidebar(item);}}>{item.title}</Link>
                </div>
                {item.isOpen && toString.call(item.subTopics) === "[object Array]"? <>
                <ul className="sub-menu" >
                   
                   {item.subTopics.map((subTopic)=>{
                        return(<>
                        <li >
                        <FontAwesomeIcon icon={faAngleRight} size="sm" color="white"/>
                        <Link to={subTopic.path} onClick={()=>{closeSidebar(subTopic);}} >{" "+subTopic.title}</Link>
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
