import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IsLoadingContex } from '../Contexts/IsLoadingContex';
import { useContext } from 'react';

import "../styles/DeleteTopic.css"

function DeleteTopic() {
    const {id,topic} =  useParams();
    console.log("id ===> "+id);
    console.log("topic name  ===> "+topic);

    const navigate = useNavigate();
    const {loading,setLoading} = useContext(IsLoadingContex);


const handelDeleteTopic = ()=>{

    axios.delete(`https://js-manual2-backend.vercel.app/jstopics/${id}`)
    .then(()=>{
        setLoading(false);
        alert("successfully deleted topic with id ===> "+id);
        navigate(`/JsManual2/${topic}`)

    })
    .catch((error)=>{
        setLoading(false);
        alert(`An error happened. Please check console logs`);
        console.log(error);

    })

    //code for mimic delete topic 

    // setLoading(true);
    // setTimeout(() => {
    //     alert("deleted topic with id ===> "+id);
    //     setLoading(false);
    //     navigate(`/JsManual2/${topic}`)
    // }, 3000);

}

  return (
    <>
    <div className='del-container-wrapper'>
        {loading?<div className='del-loading-div'>
            <p>Deleting topic .......</p>

        </div>:<div className='del-container'>
        <p>Do you really want to delete this topic ?</p>
        <div className='del-yes-no'>
            <button className='del-buttons' onClick={()=>{
                handelDeleteTopic();
            }}>Yes</button>
            <button className='del-buttons' onClick={()=>{navigate(`/JsManual2/${topic}`)}}>No</button>
        </div>
    </div>
}
    
    </div>
    
    
    </>
  )
}

export default DeleteTopic;
