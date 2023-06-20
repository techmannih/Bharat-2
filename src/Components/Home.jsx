import React,{useCallback,useState} from "react";
import { useNavigate } from "react-router";

const Homepage=()=>{
 
    const[value,setValue]=useState()
       
    const navigate=useNavigate();

   const handleJoin= useCallback (()=>{
      navigate(`/room/${value}`);


   },[navigate,value]);
   
    return (
        <div>
  <input  value={value} 
  onChange={(e)=>setValue(e.target.value)} 
  type="text" placeholder="Enter your room code"/>
     <button  onClick={handleJoin}>Join</button>

        </div>
    )
}

export default Homepage