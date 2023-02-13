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
import { add } from './store/cartSlice';

const options = [
    { label: " Project Plot Area", value: "ProjectPlotArea" },
    { label: "Green Area", value: "GreenArea" },
    { label: "Property Status", value: "PropertyStatus" },
    { label: "Price Range", value: "PriceRange" },
    { label: "Total Towers", value: "TotalTowers" },
    { label: "Total Flats", value: "TotalFlats" },
    { label: "OC Status", value: "OCStatus" },
    { label: "Density", value: "Density" },
    { label: "Podium/NonPodium", value: "PodiumNonPodium" },
    { label: "Approved Bank", value: "ApprovedBank" },
    { label: "ClubHouse Size", value: "ClubHouseSize" },
    { label: "Construction Type", value: "ConstructionType" },
    { label: "Tower Heights", value: "TowerHeights" },
    { label: "Lift per Tower", value: "LiftperTower" },
    { label: "Floor vs Flats", value: "FloorvsFlats" },
    { label: "Possession Date", value: "PossessionDate" },
    { label: "Lobby", value: "Lobby" },
    { label: "Distance", value: "Distance" },
  
  ];
export default function Dialog2() {

  const [open, setOpen] = React.useState(false);
 

  const [selected, setSelected] = useState([])

console.log(selected)

  var result = selected.map(person => ( person.value));
 
  const dispatch= useDispatch();

  useEffect(() => {
    dispatch(add(result))
   
   }, [result]);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  
 
  
  return (
    <React.Fragment>
      
     
       
    
       
     <Button  onClick={handleClickOpen}>
     
     <div className='parameters'>
     <img src="https://i.imgur.com/aMohEci.png" className='parameterspic' />
    <div  className='filtertext' >Select The Parameters To Compare</div>
    
     </div>
    
     
   
    
     </Button> 
      
      <Dialog
        fullWidth='500px'
        maxWidth='500px'
        open={open}
        onClose={handleClose}
        style={{height:'80vh',overflow:'hidden'}}
      >
        <DialogTitle style={{textAlign:'center', color:'#ffffff'}}></DialogTitle>
        <DialogContent>
          <DialogContentText style={{textAlign:'center'}}>
           Select The Parameters To Compare
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
           
              <div style={{width:"100%",marginTop:'5px'}}>
              <MultiSelect
      options={options}
   value={selected}
    onChange={setSelected}
      
  />
   </div>
   
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
