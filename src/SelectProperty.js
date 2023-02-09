import React from 'react';
import {getalldata} from './api';
import { useState,useEffect} from 'react';
import Select from '@mui/material/Select';

const SelectProperty = () => {


    const [users,setUsers] = useState([]);
    const [data,setdata] = useState([]);
   
   
 
  
 
  

   
    const getAllUsers=(selectedOptions)=>{
       let response= selectedOptions;
       setUsers(response)
       //console.log(response)
      }
   
      
    useEffect(() => {
     getdata()
     
   }, []);
  
    const getdata = async () => {
        let response = await getalldata();
        setdata(response.data);
    }
   
   
  
  return (
    <div>
<div style={{width:"20%",marginLeft:'35px',marginTop:'5px'}}><Select
     
     onChange={getAllUsers}
     options={data.label}
     style={{height:"10px",width:"10px"}} 
     labelledBy="Select Property"
     placeholder="Select Property"
   /></div>
    </div>
  )
}

export default SelectProperty;