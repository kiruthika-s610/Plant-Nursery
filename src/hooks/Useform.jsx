import React, {useRef} from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

const Useform = () => {
  const [values,setvalues]=useState({
    username:'',
    email:'',
    phno:'',
  });
const [errors,setErrors] = useState({
    username:'',
    email:'',
    phno:'',
  }); 
  const [issuccess, setIssuccess] = useState(false);
      
  const form = useRef();

                            

    const handlechange = (ev) => {
       setErrors({});
       setIssuccess(false);
        setvalues({...values, [ev.target.name]: ev.target.value});
      }
    
  
  const validate = (val) => {
    const phnoregex = /^\+?[1-9][0-9]{7,14}$/;
    const emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let testphno=phnoregex.test(val.phno);
    let testemail=emailregex.test(val.email);
    if(!val.username){
      setErrors({...errors,username:"enter a valid username"});
    } 
    else if(!val.email){
      setErrors({...errors,email:"enter a valid email"});
    }
    else if (!testemail){
      setErrors({...errors,email:"Invalid "});
    }
    else if(!val.phno){
      setErrors({...errors,phno:"enter a valid phone no"});
    }
    else if(!testphno){
      setErrors({...errors,phno:"Invalid"});
    }
  
    else {
      setIssuccess(true);
              
    }
    
  }
  const sendEmail = (e) => {
    e.preventDefault();
    validate(values);   
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
    ) : toast.warning("enter a valid details")
  };
        
  

return (
  <div className='formdetail' style={{fontSize:20, backdropFilter:'none', textShadow:'none'}}>
         <form ref={form} onSubmit={sendEmail}>
                  <div className='form' >
                    <label>Name 
                        <input style={{fontSize:20}} 
                             type='text'
                             name='username' 
                             placeholder='Test'
                             value={values.username}  
                             onChange={handlechange}
                            />  
                         <span style={{color:'red', fontSize:12, margin:0}}> {errors.username} </span>                  

                    </label>
                    <label>Email
                        <input style={{fontSize:20}} 
                               type='email' 
                               name='email'
                               placeholder='test@gmail.com'
                               value={values.email}
                               onChange={handlechange } 
                               />
                       <span style={{color:'red', fontSize:12, margin:0}}> {errors.email} </span>                  

                      </label>
                      
                      <label>Phone no 
                        <input  style={{fontSize:20}} 
                                type='phno' 
                                name='phno' 
                                placeholder='123456789'
                                onChange={handlechange}
                                  />
                             <span style={{color:'red', fontSize:12, margin:0}}> {errors.phno} </span>                  
                          </label><br />                   

                    <button className='btn btn-primary'style={{borderRadius:'20px'}} >Submit</button>                  
                                 
                  </div>
                  </form> 
                    <ToastContainer  position="top-center"/>   
                    </div>
      )
    }
    
    export default Useform