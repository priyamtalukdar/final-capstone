// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory,Link } from 'react-router-dom';

// import './Login.css'; // Import your CSS file


// import {FaUserShield} from 'react-icons/fa'
// import {BsFillShieldLockFill} from 'react-icons/bs'
// import {AiOutlineSwapRight} from 'react-icons/ai'

// // Import our assets
// import video from './assests/video.mp4'
// import logo from './assests/logo.png'

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const history = useHistory();

//   const { username, password } = formData;

//   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:8000/api/auth/login', formData);
//       if (res.status === 200) {
//         alert('Login successful! Redirecting to homepage...');
//         history.push('/'); // Redirect to home page after successful login
//       }
//     } catch (err) {
//       if (err.response && err.response.status === 400) {
//         alert(err.response.data.msg);
//       } else {
//         console.error(err);
//         alert('An error occurred during login. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="loginPage flex">
//       <div className="container flex">
//         <div className="videoDiv">
//           <video src={video} autoPlay muted loop></video>

//         <div className="textDiv">
//           <h2 className= 'title'>SmartDietBuddy</h2>
//           <p>Eat Smart, Live Better</p>
//         </div>

//           <div className="footerDiv flex">
//           <span className="text">Don't have an account? </span>
//           <Link to={'/SignUp'}>
//             <button className='btn'>Sign Up</button>
//           </Link>
//     </div>
//         </div>
//           <div className="formDiv1 flex">
//             <div className="headerDiv1">
//             <img src={logo} alt="Logo Image" />
//             <h3>Welcome Back!</h3>
//             </div>

//           <form onSubmit={onSubmit} className="form1 grid">
           
//             <div className="inputDiv">
//             <label htmlFor="Email">Username</label>
//                 <div className="input flex">
//                 <FaUserShield className='icon'/>
//                 <input type="text" name="username" value={username} onChange={onChange} placeholder="Enter Username" required />
//                </div>
//             </div>


//             <div className="inputDiv">
//                 <label htmlFor="password">Password</label>
//                 <div className="input flex">
//                 <BsFillShieldLockFill className='icon'/>
//               <input type="password" name="password" value={password} onChange={onChange} placeholder="Enter Password" required />
//               </div>
//             </div>

//             <button type="submit" className="btn flex">
//             <span>Login</span>
//                 <AiOutlineSwapRight className='icon'/>
//             </button>

//             <span className='forgotPassword'>
//                 Forgot your password? <a href="">Click Here</a>
//             </span>

//           </form>
//         </div>
        
//       </div>
//       </div>
    
    
//   );
// };

// export default Login;



import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import './Login.css'; // Import your CSS file
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import video from './assests/video.mp4';
import logo from './assests/logo.png';
import Header from '../common/header/Header';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const history = useHistory();

  const { username, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/auth/login', formData);
      if (res.status === 200) {
        localStorage.setItem('user', formData.username); // Store username in localStorage
        alert('Login successful! Redirecting to homepage...');
        history.push('/');
        
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert(err.response.data.msg);
      } else {
        console.error(err);
        alert('An error occurred during login. Please try again.');
      }
    }
  };

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">SmartDietBuddy</h2>
            <p>Eat Smart, Live Better</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Don't have an account? </span>
            <Link to={'/SignUp'}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>
        <div className="formDiv1 flex">
          <div className="headerDiv1">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>

          <form onSubmit={onSubmit} className="form1 grid">
            <div className="inputDiv">
              <label htmlFor="Email">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input type="text" name="username" value={username} onChange={onChange} placeholder="Enter Username" required />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input type="password" name="password" value={password} onChange={onChange} placeholder="Enter Password" required />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your password? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
     
    </div>

    
  );
};

export default Login;
