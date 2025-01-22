import React from 'react'

const Offer = () => {
  return (
    <div>
      <div style={{display:'flex', justifyContent:'center', color:"grey"}}> <h1>Value for Money</h1></div>
      <div className='grid'>
      <div className='grid1'>
        <div style={{width:"90%",paddingTop:'20px', display:'flex',flexDirection:"column", height:'90%', justifyContent:'center', alignItems:'center', color:'steelblue', fontSize:'3.5rem',fontWeight:'bold'}} >Flat 15% off 
         <br/> <small> for all plants</small>
      </div>
      </div>
      <div className='grid2' >
      <div style={{width:"90%",padding:'20px', display:'flex',flexDirection:"column", height:'90%', justifyContent:'end', alignItems:'center', color:'darkorange', fontSize:'2rem',fontWeight:'bold'}} >Upto 25% off 
         <br/> <small> for Flower Bulb plants</small>
      </div>
         </div>
      <div className='grid3' >
      <div style={{width:"90%",padding:'20px', display:'flex',flexDirection:"column", height:'90%', justifyContent:'start', alignItems:'start', color:'red', fontSize:'3rem',fontWeight:'bold'}} >Upto 30% off 
         <br/> <small> for indoor plants</small>
      </div>
      </div>
      <div className='grid4' >
      <div style={{width:"90%",padding:'20px', display:'flex',flexDirection:"column", height:'90%', justifyContent:'end', alignItems:'center', color:'purple', fontSize:'2rem',fontWeight:'bold'}} >Event gifts starts 
         <br/> <small> for all plants</small>
      </div>
      </div>
      <div className='grid5' >
      <div style={{width:"90%",padding:'20px', display:'flex',flexDirection:"column", height:'90%', justifyContent:'center', alignItems:'start', color:'white', fontSize:'2rem',fontWeight:'bold'}} >Upto 50% off 
         <br/> <small> for Microgreen Seeds</small>
      </div>
 </div>
    
  
      </div>
  
    </div>
  )
}

export default Offer

