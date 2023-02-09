import React from 'react'
import MaxWidthDialog from './Dialog'
const Page = () => {
  return (
    <div style={{height:"20vh",background:"pink",width:"90%",display:"flex"}}>
        <div style={{width:"30%",display:"block"}}>
            <div><MaxWidthDialog/></div>
       
           </div>
           <div style={{width:"30%",display:"block"}}>
            <div><img src="https://i.imgur.com/Ive3ZRn.png" style={{width:"50px"}}/></div>
            <div>Add Property</div>
           </div>
          
           <div style={{width:"30%",display:"block"}}>
            <div><img src="https://i.imgur.com/Ive3ZRn.png" style={{width:"50px"}}/></div>
            <div>Add Property</div>
           </div>
    </div>
  )
}

export default Page