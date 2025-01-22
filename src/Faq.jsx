import React , {useRef} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser'
import { useState } from 'react';


const Faq = () => {
    const form = useRef();
  const [issuccess, setIssuccess] = useState(false);
  const [value, setvalue] = useState('')

  
  const sendEmail = (e) => {
    e.preventDefault();
    setvalue('');
    issuccess ? (
          emailjs
      .sendForm('service_zk55zsd', 'template_7x6kwjj', form.current, {
        publicKey: 'nS3uVRLp3P93dlFez',
      })
      .then(
        () => {
        
          console.log('SUCCESS!');
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      ), 
      toast.success("Email sent successfully")
    ) : ''
  };
  

    const handlesubmit = (e) => {
      const emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      setvalue(e.target.value);
      let testemail=emailregex.test(e.target.value);
      if (testemail){
        setIssuccess(true);
        
    }}
  return (
    <div className='subscribe'>
     <div><h4>Subscribe</h4></div>
     <div>Join us to receive gardening tips, offers, news & more</div>
     <form ref={form} onSubmit={sendEmail}>

     <div><input type='email' placeholder='Email Address' value={value} onChange={handlesubmit}/> <span></span>
     <button className='subscribebtn' >Submit</button></div>
     </form>
    
        <ToastContainer position='bottom-right'/>

{/* ----FAQ---- */}

        <div style={{justifyContent:'left', width:'100%', display:'flex', flexGrow:1}}>
        <div className="accordion " id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Are the plants sold by NurseryParadise healthy and of good quality?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, all the plants sold by NurseryParadise are healthy, pest-free, and of good quality. We source our plants from trusted nurseries and ensure that they are well taken care of before shipping them to our customers.      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Can I get gardening tools on NurseryParadise?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, NurseryParadise offers a wide range of gardening tools including hand tools, power tools, pruning tools, watering tools, and more.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How can I make payments for my gardening purchases on NurseryParadise?      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      You can make payments for your gardening purchases on NurseryParadise using a variety of payment options including debit/credit cards, net banking, UPI, and wallets.      
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapse" type='button' data-bs-toggle="collapse" data-bs-target="collapseFour" aria-expanded='false' aria-controls='collapseFour'>
        How can I track my order on NurseryParadise?    
      </button>
    </h2>
    <div id='collapseFour' className='accordion-collapse collapse'  data-bs-parent="#accordionExample" >
    <div className="accordion-body">
    You can track your order on NurseryParadise by logging into your account and checking the status of your order. You will also receive regular updates about your order via email and SMS.      
    </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          Does NurseryParadise offer free shipping?  
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
          Yes, NurseryParadise offers free shipping on orders above a certain amount. The minimum order value for free shipping varies depending on your location.      
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      Can I cancel my order on NurseryParadise?   
       </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
          Yes, you can cancel your order on NurseryParadise before it is shipped. Once the order is shipped, it cannot be canceled.      
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      Can I get gardening advice on NurseryParadise?      </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, NurseryParadise has a team of gardening experts who can help you with all your gardening queries. You can reach out to us via email, chat, or phone.      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
      Does NurseryParadise offer a warranty on its products?      </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, NurseryParadise offers a warranty on its products. The warranty period varies depending on the product.      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
      How long does it take for the plants to be delivered?      </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      The delivery time for plants varies depending on your location. Generally, it takes 3-7 working days for the plants to be delivered.      </div>
    </div>
  </div>
</div>
        </div>
    </div>

    


  )
}

export default Faq
