import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
  const form = useRef()
 

  const sendEmail = (e) => {
    const input = document.getElementById('input')
    input.value = " "
    
    e.preventDefault();

    emailjs.sendForm('service_m96mqzi', 'template_yf0pgbk', form.current, 'sbw3SopIslxnFkRiO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
          <hr />
          <div>
              <span className='stroke-text'>READY TO</span>
              <span>LEVEL UP</span>
          </div>
          <div>
              <span>YOUR BODY</span>
              <span className='stroke-text'>WITH US?</span>
          </div>
        </div>
        <div className="right-j">
          <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input id='input' type="email" name='user_email' placeholder='Enter your Email address' required/>
            <button className="btn btn-j">Join Now</button>
          </form>
        </div>
    </div>
  )
}

export default Join