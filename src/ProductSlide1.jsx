import React, { useEffect, useState } from 'react'

const ProductSlide1 = () => {
  const [curindex, setCurindex] = useState(0);

  const slides = [
    {
      url: 'https://thumbs.dreamstime.com/z/young-spirea-plants-plastic-pots-seedling-trees-bushes-plant-nursery-144628655.jpg?w=992',
      title: 'img2'
    },
    {
      url: 'https://thumbs.dreamstime.com/z/plant-nursery-greenhouse-full-flowerpots-98532670.jpg?w=992',
      title: 'img3'
    },
    {
      url: 'https://thumbs.dreamstime.com/b/young-flowers-plant-nursery-1-1575922.jpg?w=768',
      title: 'img4'
    },
    {
      url: 'https://thumbs.dreamstime.com/b/coconut-plant-nursery-healthy-young-saplings-329953981.jpg?w=768',
      title: 'img5'
    },
    {
      url: 'https://thumbs.dreamstime.com/b/trees-plant-nursery-line-up-crape-myrtle-lined-up-row-55389301.jpg?w=768',
      title: 'img6'
    }

  ];
  const dotboxstyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '0px'
  }



  const sliderstyle = { width: '100%', height: '100%', marginTop: 40 };
  const slidestyle = { backgroundImage: `url(${slides[curindex].url})`, }
  const gotoSlide = (ind) => {
    setCurindex(ind)
  }

  return (
    <div style={sliderstyle}> <div style={{color:'steelblue', margin:'auto', marginBottom:'20px', height:50,display:'flex', justifyContent:'center'}}>
      <h2>Happiness Is Growing a plant</h2>
    </div>
      <div className='productpage' style={slidestyle}>

        <div className='dotboxstyle'>, 
          {slides.map((_, index) => (

            <div className='dotstyle' key={index} onClick={() => gotoSlide(index)}> .</div>))}

        </div>
      </div>
    </div>
  )
}

export default ProductSlide1
