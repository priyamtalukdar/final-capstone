import React from 'react';
import './about.css'; 
import img1 from './images/img1.png';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpeg';
import img4 from './images/img4.jpeg';
import img5 from './images/img5.jpeg';
import img6 from './images/img6.png';
const About = () => {
  const teamMembers = [
    {
      name: 'Prateek Singh',
      role: 'Web Analyst',
      image: img1,
      socialLinks: [
        { url: '#', icon: 'fab fa-instagram' },
        { url: '#', icon: 'fab fa-github' },
        { url: '#', icon: 'fab fa-linkedin-in' }
      ]
    },
    {
      name: 'Ashish Raj',
      role: 'Data Analyst',
      image: img2,
      socialLinks: [
        { url: '#', icon: 'fab fa-instagram' },
        { url: '#', icon: 'fab fa-github' },
        { url: '#', icon: 'fab fa-linkedin-in' }
      ]
    },
    {
      name: 'Mithilesh Yadhav',
      role: 'Back-End Web Developer',
      image: img3,
      socialLinks: [
        { url: '#', icon: 'fab fa-instagram' },
        { url: '#', icon: 'fab fa-github' },
        { url: '#', icon: 'fab fa-linkedin-in' }
      ]
    },
    {
      name: 'Ashish Verdhan Singh',
      role: 'Back-end Web Developer',
      image: img4,
      socialLinks: [
        { url: '#', icon: 'fab fa-instagram' },
        { url: '#', icon: 'fab fa-github' },
        { url: '#', icon: 'fab fa-linkedin-in' }
      ]
    },
    {
      name: 'Papu Singh Khuswaha',
      role: 'Data Analyst',
      image: img5,
      socialLinks: [
        { url: '#', icon: 'fab fa-instagram' },
        { url: '#', icon: 'fab fa-github' },
        { url: '#', icon: 'fab fa-linkedin-in' }
      ]
    },
    {
      name: 'Priyam Talukdar',
      role: 'Fornt-End Web Developer',
      image: img6,
      socialLinks: [
        { url: '#', icon: 'fab fa-instagram' },
        { url: '#', icon: 'fab fa-github' },
        { url: '#', icon: 'fab fa-linkedin-in' }
      ]
    }
  ];

  return (
    <div className="wrapper">
      <div className="title">
        <h4>Our Team</h4>
      </div>

      <div className="card_Container">
        {teamMembers.map((member, index) => (
          <div key={index} className="card">
            <div className="imgBx">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="content">
              <div className="contentBx">
                <h3>{member.name} <br /><span>{member.role}</span></h3>
              </div>
              <ul className="sci">
                {member.socialLinks.map((link, i) => (
                  <li key={i} style={{ '--i': i + 1 }}>
                    <a href={link.url}><i className={link.icon}></i></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;



