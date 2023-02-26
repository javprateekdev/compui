import * as React from 'react';
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Switch from '@mui/material/Switch';
import { MultiSelect } from "react-multi-select-component";
import TuneIcon from '@mui/icons-material/Tune';
import SelectProperty from './SelectProperty';
import {getalldata} from './api';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { add1 } from './store/property1Slice';


export default function MaxWidthDialog() {

  const [open, setOpen] = React.useState(false);
 
  const [users,setUsers] = useState([]);
  
  const [filteredList, setFilteredList] = useState({});

  const [data,setdata] = useState([]);
  
  console.log(filteredList);

  
  //console.log(users);
  
//console.log(selected)

    
const getAllUsers=(selectedOptions)=>{
  let response= selectedOptions;
  setUsers(response)
  //console.log(response)
 }
const ClickOpen = () => {
  setUsers([]);
  };
 
 

//console.log(users2)


const dispatch=useDispatch()
useEffect(() => {
      
 dispatch(add1(users))
}, [users]);



    useEffect(() => {
     getdata()
     
   }, []);
  
    const getdata = async () => {
        let response = await getalldata();
        setdata(response.data);
    }


  //console.log(data)


//console.log(items);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 

 const filterCategory=(categoryItem)=>{
  const result =data.filter((data)=>{
    return data.Location===categoryItem
  });
  setFilteredList(result);
 }
  
 
  
  return (

    <React.Fragment>
      
     
       
    <div>{users.label ?
    <>
    <div style={{display:"flex"}}>
      <div style={{width:"90%"}}>
    <div >{<img src={users.logo} style={{width:"15%",padding:"px",zIndex:"0",position:"relative"}}/>}</div>
    
    </div>
     <div style={{width:"10%"}}><img src="https://i.imgur.com/EOKKOUr.png" className='cross'  onClick={() => ClickOpen()}/></div>

    </div>
     
    </> 
   
      
    
    :<> <Button  onClick={handleClickOpen}>
      <div style={{display:"block"}}>
    <img src="https://i.imgur.com/lRwI4Pz.png" style={{width:"30px"}}/>
    <div>Add Property</div>
    </div>
     </Button></>} </div>
      
      <Dialog
        fullWidth='200px'
        maxWidth='200px'
        open={open}
        onClose={handleClose}
        style={{height:'80vh',overflow:'hidden'}}
      >
        <DialogTitle style={{textAlign:'center', color:'#ffffff'}}></DialogTitle>
        <DialogContent>
          <DialogContentText style={{textAlign:'center'}}>
           Select The Location 
           <div style={{boxShadow:"0 1px 6px 1px #ccc",marginTop:"2vh"}}>
           <button class="button-8" role="button"  onClick={()=>filterCategory('Central Noida')}>Central Noida</button>
           <button class="button-8" role="button" onClick={()=>filterCategory('Noida Extension')}>Noida Extension</button>
           <button class="button-8" role="button" onClick={()=>filterCategory('Noida Expressway')}>Noida Expressway</button>

           </div>
          
           
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
            style={{height:'50vh',overflow:'hidden'}}
          >
            <FormControl >
              <div style={{width:'100%'}}>
              <div style={{textAlign:"center",marginTop:"3vh",color:"#00000099"}}>Select Property</div>
              <div style={{width:"100%",marginTop:'5vh'}}>
                
                <Select
     
     onChange={getAllUsers}
     options={filteredList}
    
     labelledBy="Select Property"
     placeholder="Select Property"
   /></div>
   
   
  	</div>
								
											
            </FormControl>
            
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

