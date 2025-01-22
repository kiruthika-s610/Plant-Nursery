import { useState } from 'react'
import './App.css';
import ProductSlide1 from './ProductSlide1';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Productdetail from './Productdetail';
import Useform from './hooks/Useform';
import ProductSlide2 from './ProductSlide2';
import Offer from './Offer';
import Faq from './Faq';



function App() {

  return (
    <div className='landingpage'>
      <div className='header ' >
        <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
          <div className="container-fluid header-details " >
            <a className="navbar-brand ms-5 bold fs-1 name " href="#">Nursery Paradise</a>
            <div className="d-flex detail-item" style={{ fontFamily: 'sanserif' }} >
            
                <input type='checkbox' id='sidebar-active'/>
                <label htmlFor="sidebar-active" className='open-sidebar-button'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                </label> 
                <div id='overlay' className='links-container'>
                <label htmlFor="sidebar-active" className='close-sidebar-button'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </label> 
                <label className="detail-categories" >
                <a href='#category'>All Categories</a></label>
              <label className='detail-about' >
                <a href='#about'>About Us</a> </label>
                <label className='detail-about' >
                <a href='#blog'>Blog</a> </label>
               
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
              <br />
              Where green meets serenity!
              <br />
              <div className='fs-3' >Happiness is growing your own plant</div><br />

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
        <Productdetail /></div>
  
      <Offer />

      <div>
        <ProductSlide2 />  </div>
      <div>
        <div className='aboutus'>
          <div style={{ display: 'flex', paddingBottom: 5 }}>
            <div style={{ padding: 5 }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"width={30} height={30} ><path d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0L109.6 0C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9c0 0 0 0-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3L448 384l-320 0 0-133.4c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3L64 384l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64 0-131.4c-4 1-8 1.8-12.3 2.3z"/></svg>
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={30} height={30} ><path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM144 448c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zM304 64L80 64l0 320 224 0 0-320z" /></svg> */}
            </div>
            <div>
              Largest Nursery <br />
              <     small>We are the Fast growing plant seller in india </small>
            </div>
          </div>
          <div style={{ display: 'flex', paddingBottom: 5 }}>
            <div style={{ padding: 5 }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={30} height={30}><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
            </div>
            <div>
              Lifetime Support <br />
              <small>We help you grow your garden for lifetime</small>
            </div>
          </div>
          <div style={{ display: 'flex', paddingBottom: 5 }}>
            <div style={{ padding: 5 }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={30} height={30}><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>                </div>
            <div>All India Delivery<br />
              <small>Delivering greenery across India since 2014</small>
            </div>
          </div>
          <div style={{ display: 'flex', paddingBottom: 5 }}>
            <div style={{ padding: 5 }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={30} height={30}><path d="M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 160l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0zM544 237.3l0 18.7-128 0 0-96 50.7 0L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" /></svg>
            </div>
            <div>Secure Shipping<br />
              <small>Diligent care taken to deliver healthy  plants </small>
            </div>
          </div>
        </div>
        <div id='blog'>
        <Faq/></div>
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
          <div style={{ display: 'flex', margin: 0, gap: 10, backgroundColor: 'lightgrey', justifyContent: 'space-around' }}>
            <div>Copyright © 2025 NurseryParadise.</div>
            <div style={{ display: 'flex', gap: 20 }}>
              <a href='https://www.facebook.com/' >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={30} height={30}><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" /></svg>
              </a>
              <a href='https://wa.me/+918088994388'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={30} height={30}><path d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z" />
                </svg>
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
