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
import Select from 'react-select';
import Switch from '@mui/material/Switch';
import { MultiSelect } from "react-multi-select-component";
import TuneIcon from '@mui/icons-material/Tune';

import {getalldata} from './api';


const options = [
  { label: " ProjectPlotArea", value: "ProjectPlotArea" },
  { label: "GreenArea", value: "GreenArea" },
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

export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const [selected, setSelected] = useState([]);
  
//console.log(selected)



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


  console.log(data)


//console.log(items);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };
 
  var result = selected.map(person => ( person.value));
  return (
    <React.Fragment>
      <Button  onClick={handleClickOpen}>
      <img src="https://i.imgur.com/Ive3ZRn.png" style={{width:"50px"}}/>
      </Button>
      <Dialog
        fullWidth='60vw'
        maxWidth='60vh'
        open={open}
        onClose={handleClose}
        style={{height:'80vh',overflow:'hidden'}}
      >
        <DialogTitle style={{textAlign:'center', color:'#ffffff'}}></DialogTitle>
        <DialogContent>
          <DialogContentText style={{textAlign:'center'}}>
            You can select any parameters you like to compare
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
            style={{height:'60vh',overflow:'hidden'}}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <div style={{width:'350px'}}>
           
              <MultiSelect
      options={options}
      labelledBy="Select Parameters"
      placeholder="Select Parameters"
   value={selected}
    onChange={setSelected}
       
    />
     <MultiSelect
      options={data}
      labelledBy="Select Parameters"
      placeholder="Select Parameters"
   value={selected}
    onChange={setSelected}
       
    />
 
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
