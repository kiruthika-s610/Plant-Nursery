import { useState } from 'react'
import './App.css'
import ProductSlide1 from './ProductSlide1'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import Productdetail from './Productdetail';
import Useform from './hooks/Useform';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import ProductSlide2 from './ProductSlide2';




function App() {
  const [items, setitems] = useState(0);
  const additem = (item) => {
    setitems(item)
    console.log("item", item);
  }

  return (
    <div className='landingpage'>
      <div className='header ' >
        <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
          <div className="container-fluid header-details " >
            <a className="navbar-brand ms-5 bold fs-1 name " href="#">Nursery Paradise</a>
              <div className="d-flex detail-item"  style={{fontFamily: 'sanserif' }} >
                <label className="detail-categories" >
                  <a  href='#category'>All Categories</a></label>
                <label className='detail-about' >
                  <a href='#about'>About Us</a> </label> 
                <div >
                  <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <FontAwesomeIcon icon={faCartShopping} />{items}
                  </button>

                </div>


            </div>
          </div>
        </nav>
      </div>
      <div className='mainpage' style={{ fontFamily: 'sanserif' }}>

        <div className='main_content '>
          <h1 >Welcome To Nursery Paradise</h1>


          <div className='detail dancing-script'>
            <div className='left' >
<br/>
              Where green meets serenity!
              <br />
              <div className='fs-3' >Happiness is growing your own plant</div><br/>

              <div className='fs-4 description' >
                At Nursery Paradise, we are passionate about bringing nature closer to you.
                Our missin is to provide a wide range of high-quality plants that not only enhance the beauty  of your
                surroundings but also contribute to a healthier and more sustainable lifestyle.
                <br />
              </div></div>
            <div className='right'>
              <div>
                <Useform />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductSlide1 />
      <div id='category'>
        <Productdetail getitem={additem} /></div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header ">
              <h1 className="modal-title fs-5 " id="exampleModalLabel" style={{ color: 'steelblue' }}>Cart Details</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h5 style={{ color: 'darkorange' }}> You have {items} items in your cart </h5>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ProductSlide2 />  </div>
      <div>
        <footer style={{ display: 'flex' }} >
          <div id='about' style={{ padding: '50px' }}>
            <div style={{ fontSize: '20px', padding: 10 }}>About Us</div>
            <article>
              NurseryParadise is an Indian online platform that sells plants, gardening supplies, and related products.
              <br /><br />
              It was founded in 2014 with the aim of making gardening accessible to everyone. We offers a variety of plants, tools, fertilizers, and other gardening accessories.
              <br /><br />
              The platform also provides resources such as articles, videos, and a gardening community for enthusiasts to share their knowledge and experiences.
              <br /><br />
              <b>Plants</b><br />
              Plants are important for several reasons, especially in modern times when people spend more time indoors due to work and lifestyle changes.
              <br />
              <ul>
                <li>
                  Aesthetic appeal: Plants can add beauty and life to any space, whether it's an office, home, or outdoor garden. They come in various shapes, sizes, and colors, making them versatile and appealing.
                </li>
                <li>
                  Health benefits: Plants can improve air quality by absorbing pollutants and releasing oxygen. They can also reduce stress levels, boost mood, and improve mental health.
                </li>
                <li>
                  Sustainability: Keeping plants can be an eco-friendly option, as they can help reduce carbon emissions, reduce waste, and support biodiversity.
                </li><li>
                  Food production: Growing plants like vegetables and fruits can provide a source of fresh, healthy produce that is free from harmful pesticides and chemicals.
                </li>
                Education: Keeping plants can provide a great opportunity for learning about biology, botany, and the natural world.
              </ul>
            </article>
          </div>
          <div style={{ display: 'flex', margin:0, gap: 10,backgroundColor:'lightgrey', justifyContent:'space-around' }}>
            <div>Copyright © 2025 NurseryParadise.</div>
            <div style={{ display: 'flex', gap: 20}}>
            <a href='https://www.facebook.com/' >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={30} height={30}><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" /></svg>
            </a>
            <a href='https://wa.me/+918088994388'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={30} height={30}><path d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z" /> </svg>
            </a>
            <a href="mailto:kiruthika.s610@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={30} height={30}><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
            </a>
            <a href="tel:+1234567890">Call Us</a>
            </div>
          </div>

        </footer>
      </div>

    </div>
  )
}

export default App
