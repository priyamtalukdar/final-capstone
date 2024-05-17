// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory  } from 'react-router-dom';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const history = useHistory ();

//   const { username, email, password } = formData;

//   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
//       if (res.status === 201) {
//         alert('Signup successful! Redirecting to login...');
//         history.push('/login');
//       }
//     } catch (err) {
//       if (err.response && err.response.status === 400) {
//         alert(err.response.data.msg);
//       } else {
//         console.error(err);
//         alert('An error occurred during signup. Please try again.');
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <form onSubmit={onSubmit}>
//         <input type="text" name="username" value={username} onChange={onChange} placeholder="Username" required />
//         <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
//         <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;



import React, { useState } from 'react';
import axios from 'axios';
import { useHistory,Link  } from 'react-router-dom';

//import assests
import video from './assests/video.mp4'
import logo from './assests/logo.png'


// Import Icons
import {FaUserShield} from 'react-icons/fa';
import {MdMarkEmailRead} from 'react-icons/md';
import {BsFillShieldLockFill} from 'react-icons/bs';
import {AiOutlineSwapRight} from 'react-icons/ai';

// Import CSS
import './Login.css'; 

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const history = useHistory ();

  const { username, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/auth/signup', formData);
      if (res.status === 201) {
        alert('Signup successful! Redirecting to login...');
        history.push('/login');
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert(err.response.data.msg);
      } else {
        console.error(err);
        alert('An error occurred during signup. Please try again.');
      }
    }
  };

  return (
    <div className='registerPage flex'>
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className= 'title'>SmartDietBuddy</h2>
            <p>Eat Smart, Live Better</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Have have an account? </span>
            <Link to={'/login'}>
            <button className='btn'>Log In</button>
            </Link>
          </div>
        </div>
        <div className="formDiv1 flex">
          <div className="headerDiv1">
            <img src={logo} alt="Logo Image" />
            <h3>Lets Know You!</h3>
          </div>
          <form onSubmit={onSubmit} className='form1 grid'>
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className='icon'/>
                <input type='email' name='email' value={email} onChange={onChange} placeholder='Enter Email' required />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className='icon'/>
                <input type='text' name='username' value={username} onChange={onChange} placeholder='Enter Username' required />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon'/>
                <input type='password' name='password' value={password} onChange={onChange} placeholder='Enter Password' required />
              </div>
            </div>
            <button type='submit' className='btn flex'>
              <span>Register</span>
              <AiOutlineSwapRight className='icon'/>
            </button>
         
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
