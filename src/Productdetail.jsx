import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import data from './data';


const Productdetail = ({getitem}) => {
  const [quantity, setQuantity] = useState(0)
  const categoryitems = [...new Set(data.map((val) => val.category))]
  const [items, setItems] = useState(data);

  function handlecart(){
  setQuantity(quantity+1);
  toast.success('item added to cart');
  getitem(quantity+1);
  }
     
  const handlefilter = (cat) => {
      const newitems  = data.filter((val) => val.category === cat);
      setItems(newitems)
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
              {categoryitems.map( (val,index) => (
                    <div className='cat' key={index} onClick={()=>handlefilter(val)}> 
                            <img src={val}/>
                    </div>
              ))}
        
      </div>
        <div className='items'>
          {items.map((item) =>(
            <div className=' row mx-3 justify-content-center ' >
              <div className='Products' key={item.id} >
                <img className='img' src={item.img}/>
                <div style={{color:'red', fontFamily:'arial'}}>{item.price}</div>
                <button onClick={handlecart} >Add to Cart</button>
              </div>
            </div>
              ) )}
      
        </div>
    </div>
  
  )
}

export default Productdetail

