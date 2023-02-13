import React, { useState,useEffect } from 'react';
import MaxWidthDialog from './Dialog';
import Property2 from './property2';
import Property3 from './property3';
import Dialog2 from './Dialog2'
import {getalldata} from './api';
import { MultiSelect } from "react-multi-select-component";
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
const Page = () => {

  const [selected, setSelected] = useState([])

  var result = selected.map(person => ( person.value));
  const dispatch= useDispatch();

  useEffect(() => {
    dispatch(add(result))
   
   }, [result]);

 
  return (
    <div className="Header" >
        
        <div style={{width:"20%",display:"block",borderRight:"4px solid #eee"}}>
          
             
             <div><Dialog2/></div>
             
           </div>
        <div style={{width:"27%",display:"block",borderRight:"4px solid #eee"}}>
            <div><MaxWidthDialog/></div>
           </div>
           <div style={{width:"27%",display:"block",borderRight:"4px solid #eee"}}>
            <div><Property2/></div>
           </div>
          
           <div style={{width:"27%",display:"block"}}>
           
            <div><Property3/></div>
           </div>
    </div>
  )
}

export default Page