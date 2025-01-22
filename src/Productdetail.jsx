import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import data from './data';



const Productdetail = () => {
  const [items, setItems] = useState(data);
  const categoryitems = [...new Set(data.map((val) => val.category))]
  
     
  const handlefilter = (cat) => {
      const newitems  = data.filter((item) => item.category === cat);
      setItems(newitems);
      
  }
  return (
    
    <div style={{ padding: 50, paddingTop: 100, textAlign: 'center' }}>
      <ToastContainer position="top-center"/>
      <h1>Trending</h1>
      <div>categories</div>
    <div className='d-flex justify-content-center'>
        <div className='cat' onClick={()=>setItems(data)}>
          <img src='https://nurserylive.com/cdn/shop/files/nurserylive-gardening-menu_141x161.png?v=1652634796'/>
        </div>
              {categoryitems.map((val,index) => (
                    <div className='cat' key={index} > 
                          <div onClick={()=>handlefilter(val)}> <img src={val}/></div> 
                    </div>
              ))}
        
      </div>
        <div className='items'>
          {items.map((item) =>(
            <div className=' row mx-3 justify-content-center ' >
              <div className='Products' key={item.id} >
                <img className='img' src={item.img} width={50} height={50}/>
                <div style={{color:'red', fontFamily:'arial'}}>{item.name}</div>
              </div>
            </div>
              ))}
      
        </div>
    </div>
  
  )
}

export default Productdetail

