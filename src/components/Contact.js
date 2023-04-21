import React from 'react'
import {useState} from 'react'
import {ImLocation} from 'react-icons/im'
import {FaPhone} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import './navbar.css'

export default function Contact() {

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setErrorMessage('Please enter a valid email address.')
    } else {
      setErrorMessage('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the email
    console.log(`Submitting email: ${email}`);
  };

  return (
    <div className='container'>
      <h1
          style={{ textAlign: 'center', position: 'relative', marginTop: '50px' }}
        >
          Contact
          <div
            style={{
              position: 'absolute',
              bottom: '-5px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '70px',
              height: '2px',
              backgroundColor: 'orange',
            }}
          />
        </h1>
      {/* <!--Section description--> */}
      <p className="text-center">If you have any query, please do not hesitate to contact me directly.</p>

      <div className="row mt-5 p-5">
        <div className='col-12'>
          <form className="row g-3" action='https://formspree.io/f/xwkjbjjo' method='POST' onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="inputName4" className="form-label">Name</label>
              <input type="text" name="name" className="form-control" id="inputName4" required/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input type="email" name="email" value={email} className="form-control" id="inputEmail4" onChange={handleEmailChange} required/>
              {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}
            </div>
            <div className="col-12">
              <label htmlFor="inputSubject" className="form-label">Subject</label>
              <input type="text" name="subject" className="form-control" id="inputSubject" required/>
            </div>
            <div className="col-12">
              <label htmlFor="inputMessage2" className="form-label">Message</label>
              <input type="text" name="message" className="form-control" id="inputMessage2" required/>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>

        {/* <div className="col-3 text-center" style={{backgroundColor: '#F8F9FA'}}>
          <ul className="list-unstyled mb-0">
            <li><ImLocation style={{fontSize: '25px', color: 'red'}}/>
              <p>Block C,Phase 2,Johar Town, Lahore</p>
            </li>

            <li><FaPhone style={{fontSize: '25px', color: 'blue', marginTop: '30'}}/>
              <p>+ 92 3061564024</p>
            </li>

            <li><FaEnvelope style={{fontSize: '25px', color: 'green', marginTop: '30'}}/>
              <p>abdullahbhatti3399@gmail.com</p>
            </li>
          </ul>
        </div> */}

      </div>
    </div>
  )
}
