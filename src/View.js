import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const View = () => {
  const arr2d = useSelector((state) => state.cart);
  const arr1d = [].concat(...arr2d);
  //console.log(arr1d)
  const select = useSelector((state) => state.property1);
  const select2= useSelector((state) => state.property2);
  const select3= useSelector((state) => state.property3);

 console.log(select)

 
  const filteredUsers = Object.keys(select)
    .filter((key) => arr1d.includes(key))
    .reduce((obj, key) => {
      obj[key] = select[key];
      return obj;
    }, {});

    const filteredUsers2 = Object.keys(select2)
.filter(key => arr1d.includes(key))
.reduce((obj, key) => {
    obj[key] = select2[key];
    return obj;
}, {});


const filteredUsers3 = Object.keys(select3)
.filter(key => arr1d.includes(key))
.reduce((obj, key) => {
    obj[key] = select3[key];
    return obj
}, {});

if(filteredUsers2.label!==undefined){

  const filteredoption2 = filteredUsers3.filter(data => {
    return data.label !== filteredUsers2.label ;
  });
  console.log(filteredoption2)
}




  console.log(filteredUsers);

  const parameters = {
    name: "name",
    label: " label",
    ProjectPlotArea: "Project Plot Area",
    GreenArea: "Green Area",
    PropertyStatus: "Property Status",
    PriceRange: "Price Range",
    TotalTowers: "Total Towers",
    TotalFlats: "Total Flats",
    OCStatus: "OC Status",
    Density: "Density",
    PodiumNonPodium: "Podium/Non-Podium",
    ApprovedBank: "Approved Banks",
    ClubHouseSize: "Club House Size",
    ConstructionType: "Construction Type",
    TowerHeights: "Tower Heights",
    LiftperTower: "Lift Per Tower",
    FloorvsFlats: "Floor vs Flats",
    PossessionDate: "Possession Date",
    Lobby: " Tower Lobby",
    Distance: "Distance",
  };

  //console.log(filteredUsers.ApprovedBank)

  const filteredUsers4 = Object.keys(parameters)
    .filter((key) => arr1d.includes(key))
    .reduce((obj, value) => {
      obj[value] = parameters[value];
      return obj;
    }, {});

if(filteredUsers4.label==filteredUsers3.label){

}
   

  return (
    <>
    
        <div style={{ width: "100%",maxHeight:"85vh",overflow:"scroll",overflowX:"hidden",position:"relative"}}>
            <div  className='margin' >
          <div>
            {filteredUsers4.PriceRange ? (
              <div className="change">
                <div className="filterrow">{filteredUsers4.PriceRange}</div>
                <div className="propertyrow">{filteredUsers.PriceRange}</div>
                <div className="propertyrow2">{filteredUsers2.PriceRange}</div>
                <div className="propertyrow">{filteredUsers3.PriceRange}</div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {filteredUsers4.GreenArea ? (
              <div className="change">
                <div className="filterrow">{filteredUsers4.GreenArea}</div>
                <div className="propertyrow">{filteredUsers.GreenArea}</div>
                <div className="propertyrow2">{filteredUsers2.GreenArea}</div>
                <div className="propertyrow">{filteredUsers3.GreenArea}</div>
              </div>
            ) : (
              <></>
            )}
          </div>
         
          <div>
            {filteredUsers4.ProjectPlotArea ? (
              <div className="change">
                <div className="filterrow">
                  {filteredUsers4.ProjectPlotArea}
                </div>
                <div className="propertyrow">
                  {filteredUsers.ProjectPlotArea}
                </div>
                <div className="propertyrow2">
                  {filteredUsers2.ProjectPlotArea}
                </div>
                <div className="propertyrow">
                  {filteredUsers3.ProjectPlotArea}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {filteredUsers4.TotalTowers ? (
              <div className="change">
                <div className="filterrow">{filteredUsers4.TotalTowers}</div>
                <div className="propertyrow">{filteredUsers.TotalTowers}</div>
                <div className="propertyrow2">{filteredUsers2.TotalTowers}</div>
                <div className="propertyrow">{filteredUsers3.TotalTowers}</div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {filteredUsers4.TotalFlats ? (
              <div className="change">
                <div className="filterrow">{filteredUsers4.TotalFlats}</div>
                <div className="propertyrow">{filteredUsers.TotalFlats}</div>
                <div className="propertyrow2">{filteredUsers2.TotalFlats}</div>
                <div className="propertyrow">{filteredUsers3.TotalFlats}</div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {filteredUsers4.OCStatus ? (
              <div className="change">
                <div className="filterrow">{filteredUsers4.OCStatus}</div>
                <div className="propertyrow">{filteredUsers.OCStatus}</div>
                <div className="propertyrow2">{filteredUsers2.OCStatus}</div>
                <div className="propertyrow">{filteredUsers3.OCStatus}</div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {filteredUsers4.PropertyStatus ? (
              <div className="change">
                <div className="filterrow">{filteredUsers4.PropertyStatus}</div>
                <div className="propertyrow">
                  {filteredUsers.PropertyStatus}
                </div>
                <div className="propertyrow2">
                  {filteredUsers2.PropertyStatus}
                </div>
                <div className="propertyrow">
                  {filteredUsers3.PropertyStatus}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {filteredUsers4.PodiumNonPodium ? (
              <div className="change">
                <div className="filterrow">
                  {filteredUsers4.PodiumNonPodium}
                </div>
                <div className="propertyrow">
                  {filteredUsers.PodiumNonPodium}
                </div>
                <div className="propertyrow2">
                  {filteredUsers2.PodiumNonPodium}
                </div>
                <div className="propertyrow">
                  {filteredUsers3.PodiumNonPodium}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {filteredUsers4.TowerHeights ? (
              <div className="change">
                <div className="filterrow">{filteredUsers4.TowerHeights}</div>
                <div className="propertyrow">{filteredUsers.TowerHeights}</div>
                <div className="propertyrow2">{filteredUsers2.TowerHeights}</div>
                <div className="propertyrow">{filteredUsers3.TowerHeights}</div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {filteredUsers4.ConstructionType ? (
              <div className="change">
                <div className="filterrow">
                  {filteredUsers4.ConstructionType}
                </div>
                <div className="propertyrow">
                  {filteredUsers.ConstructionType}
                </div>
                <div className="propertyrow2">
                  {filteredUsers2.ConstructionType}
                </div>
                <div className="propertyrow">
                  {filteredUsers3.ConstructionType}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {filteredUsers4.LiftperTower ? (
              <div className="change">
                <div className="filterrow">{filteredUsers4.LiftperTower}</div>
                <div className="propertyrow">{filteredUsers.LiftperTower}</div>
                <div className="propertyrow2">{filteredUsers2.LiftperTower}</div>
                <div className="propertyrow">{filteredUsers3.LiftperTower}</div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {filteredUsers4.Density ? (
              <div className="change">
                <div className="filterrow">Density - Tower Wise<button
                    style={{ background: "#dfe3db", border: "none",lineHeight: "6vh",verticalAlign:"middle" }}
                    title="Tower Area / Property Area"
                  >
                    <img
                      src="https://i.imgur.com/q3yg28r.png"
                      className='ibutton' style={{ width: "15px" }}
                    />
                  </button></div>
                <div className="propertyrow">{filteredUsers.Density}</div>
                <div className="propertyrow2">{filteredUsers2.Density}</div>
                <div className="propertyrow">{filteredUsers3.Density}</div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {filteredUsers4.Density ? (
              <div className="change">
                <div className="filterrow">Density - Flat Wise<button
                    style={{ background: "#dfe3db", border: "none",lineHeight: "6vh",verticalAlign:"middle" }}
                    title="Flat Area / Tower Area"
                  >
                    <img
                      src="https://i.imgur.com/q3yg28r.png"
                      style={{ width: "15px" }}
                    />
                  </button></div>
                <div className="propertyrow">{filteredUsers.Density}</div>
                <div className="propertyrow2">{filteredUsers2.Density}</div>
                <div className="propertyrow">{filteredUsers3.Density}</div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {filteredUsers4.FloorvsFlats ? (
              <div className="change">
                <div className="filterrowfloor">{filteredUsers4.FloorvsFlats}<button
                    style={{ background: "#dfe3db", border: "none",lineHeight: "6vh",verticalAlign:"middle" }}
                    title="No. of Flats Per Floor"
                  >
                    <img
                      src="https://i.imgur.com/q3yg28r.png"
                      style={{ width: "15px" }}
                    />
                  </button></div>

                <div className="propertyrowfloormob">
                  <div style={{display:"block"}}>
                  {filteredUsers.FloorvsFlats ?(<>
                  {select.FloorvsFlats?(<div style={{margin:"1%"}}> {select.FloorvsFlats}</div>):(<></>)}
                  {select.Floorvsflats2?( <div style={{margin:"1%"}}> {select.Floorvsflats2}</div>):(<></>)}
                </>):(<> </>)

                  }
                 

                  </div>
                  </div>
                  <div className="propertyrowfloor2">
                  <div style={{display:"block"}}>
                  {filteredUsers.FloorvsFlats ?(<>
                  {select2.FloorvsFlats?(<div style={{margin:"1%"}}> {select2.FloorvsFlats}</div>):(<></>)}
                  {select2.Floorvsflats2?( <div style={{margin:"1%"}}>{select2.Floorvsflats2}</div>):(<></>)}
                </>):(<> </>)

                  }
                 </div>
                  </div>
                  <div className="propertyrowfloormob">
                  <div style={{display:"block"}}>
                  {filteredUsers.FloorvsFlats ?(<>
                  {select3.FloorvsFlats?(<div style={{margin:"1%"}}> {select3.FloorvsFlats}</div>):(<></>)}
                  {select3.Floorvsflats2?( <div style={{margin:"1%"}}> {select3.Floorvsflats2}</div>):(<></>)}
                </>):(<> </>)

                  }
                 </div>
                  </div>
                  
                
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {filteredUsers4.PossessionDate ? (
              <div className="change">
                <div className="filterrow">{filteredUsers4.PossessionDate}</div>
                <div className="propertyrow">
                  {filteredUsers.PossessionDate}
                </div>
                <div className="propertyrow2">
                  {filteredUsers2.PossessionDate}
                </div>
                <div className="propertyrow">
                  {filteredUsers3.PossessionDate}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {filteredUsers4.Lobby ? (
              <div className="change">
                <div className="filterrow">{filteredUsers4.Lobby}</div>
                <div className="propertyrow">{filteredUsers.Lobby}</div>
                <div className="propertyrow2">{filteredUsers.Lobby}</div>
                <div className="propertyrow">{filteredUsers.Lobby}</div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {filteredUsers4.Distance ? (
                 <div className="change">
                 <div className="distance">{filteredUsers4.Distance}</div>
                 <div className="distancerow">
                 {select.Distance?(<div style={{margin:"2%"}}> <img src="https://i.imgur.com/KDkasxW.png" style={{width:"8px",alignItems:"center",marginRight:"2%",marginLeft:"60px"}}/><span style={{}}>{select.Distance}</span></div>):(<></>)}
                 {select.distance2?(<div style={{margin:"2%"}}> <img src="https://i.imgur.com/KDkasxW.png" style={{width:"8px",textAlign:"left",marginRight:"2%",marginLeft:"60px"}}/>{select.distance2}</div>):(<></>)}
                 {select.distance3?(<div style={{margin:"2%"}}> <img src="https://i.imgur.com/KDkasxW.png" style={{width:"8px",textAlign:"left",marginRight:"2%",marginLeft:"60px"}}/>{select.distance3}</div>):(<></>)}
                 {select.distance4?(<div style={{margin:"2%"}}> <img src="https://i.imgur.com/KDkasxW.png" style={{width:"8px",textAlign:"left",marginRight:"2%",marginLeft:"60px"}}/>{select.distance4}</div>):(<></>)}
                 
              </div>
              <div className="distancerow2">
              {select2.Distance?(<div style={{margin:"2%"}}> <img src="https://i.imgur.com/KDkasxW.png" style={{width:"8px",marginRight:"2%",textAlign:"left",marginLeft:"60px"}}/>{select.Distance}</div>):(<></>)}
                 {select2.distance2?(<div style={{margin:"2%"}}> <img src="https://i.imgur.com/KDkasxW.png" style={{width:"8px",marginRight:"2%",textAlign:"left",marginLeft:"60px"}}/>{select2.distance2}</div>):(<></>)}
                 {select2.distance3?(<div style={{margin:"2%"}}> <img src="https://i.imgur.com/KDkasxW.png" style={{width:"8px",marginRight:"2%",textAlign:"left",marginLeft:"60px"}}/>{select2.distance3}</div>):(<></>)}
                 {select2.distance4?(<div style={{margin:"2%"}}> <img src="https://i.imgur.com/KDkasxW.png" style={{width:"8px",marginRight:"2%",textAlign:"left",marginLeft:"60px"}}/>{select2.distance4}</div>):(<></>)}
              </div>
              <div className="distancerow">
              {select3.Distance?(<div style={{margin:"2%"}}> <img src="https://i.imgur.com/KDkasxW.png" style={{width:"8px",textAlign:"left",marginRight:"2%",marginLeft:"60px"}}/>{select3.Distance}</div>):(<></>)}
                 {select3.distance2?(<div style={{margin:"2%"}}> <img src="https://i.imgur.com/KDkasxW.png" style={{width:"8px",marginRight:"2%",marginLeft:"60px"}}/>{select3.distance2}</div>):(<></>)}
                 {select3.distance3?(<div style={{margin:"2%"}}> <img src="https://i.imgur.com/KDkasxW.png" style={{width:"8px",marginRight:"2%",marginLeft:"60px"}}/>{select3.distance3}</div>):(<></>)}
                 {select3.distance4?(<div style={{margin:"2%"}}> <img src="https://i.imgur.com/KDkasxW.png" style={{width:"8px",marginRight:"2%",marginLeft:"60px"}}/>{select3.distance4}</div>):(<></>)}
              </div>
                 
               </div>
             
             
            ) : (
              <></>
            )}
          </div>
          <div>
            {filteredUsers4.ApprovedBank ? (
              <div className="change">
                <div className="filterrowbank">
                  {filteredUsers4.ApprovedBank}
                  
                </div>
                <div className="propertyrow1">
                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                        <div><img src="https://i.imgur.com/bNxVAbb.png" style={{width:"35px"}}/></div>
                        <div><img src="https://i.imgur.com/Ip0r0Vc.png" style={{width:"45px"}}/></div>
                        <div><img src="https://i.imgur.com/SOrKQSV.png" style={{width:"85px"}}/></div>
                        <div><img src="https://i.imgur.com/LwExu80.png" style={{width:"105px"}}/></div>
                    </div>
                    </div>
                <div className="propertyrow1"> <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                        <div><img src="https://i.imgur.com/bNxVAbb.png" style={{width:"35px"}}/></div>
                        <div><img src="https://i.imgur.com/Ip0r0Vc.png" style={{width:"45px"}}/></div>
                        <div><img src="https://i.imgur.com/SOrKQSV.png" style={{width:"85px"}}/></div>
                        <div><img src="https://i.imgur.com/LwExu80.png" style={{width:"105px"}}/></div>
                    </div></div>
                <div className="propertyrow1"> <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                        <div><img src="https://i.imgur.com/bNxVAbb.png" style={{width:"35px"}}/></div>
                        <div><img src="https://i.imgur.com/Ip0r0Vc.png" style={{width:"45px"}}/></div>
                        <div><img src="https://i.imgur.com/SOrKQSV.png" style={{width:"85px"}}/></div>
                        <div><img src="https://i.imgur.com/LwExu80.png" style={{width:"105px"}}/></div>
                    </div></div>
              </div>
            ) : (
              <></>
            )}
          </div>
          </div>
        </div>
      
    </>
  );
};

export default View;
