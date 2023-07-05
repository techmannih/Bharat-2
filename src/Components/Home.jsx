import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router";

const Homepage=()=>{
 
    const[value,setValue]=useState()
       
    const navigate=useNavigate();

   const handleJoin= useCallback (()=>{

   if (value===undefined){
    alert("please enter room code")}
    else{
      navigate(`/room/${value}`);
   
    }
   },[navigate,value]);
   
    return (
        <div className="container justify-content-center align-item-center">
            <div className="room_name">
                <h3>welcome to veko</h3> 
        <div className="room">
  <input  value={value} 
  onChange={(e)=>setValue(e.target.value)} 
  type="text" placeholder="Enter your room code" required important="true"/>
     <button  onClick={handleJoin}className="btn btn-primary position-relative text-wrap">Join</button>
</div>
</div>
</div>
    )

    
}

export default Homepage 