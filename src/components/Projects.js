import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
  const [listProjects] = useState([
    {
      name: 'AI-Powered E-commerce Platform (BANANA)',
      des: 'Developed a full-featured AI-powered e-commerce website using the MERN stack with Firebase and Google OAuth authentication. Implemented dynamic product listings, smart cart and wishlist, and real-time product search. Added dark mode and lazy loading for optimized performance and user experience.',
      mission: 'Full-Stack Developer — backend API design, system analysis, frontend UI development, and deployment.',
      language: 'React.js, Node.js, Express.js, MongoDB, Firebase, Tailwind CSS, Redux',
      images: '/BANANA.PNG',
    },
    {
      name: '3D Slider Showcase',
      des: 'Created an engaging 3D slider to demonstrate frontend design and CSS animation skills. Used 3D transforms, perspective, and transitions to create smooth, interactive effects for a visually appealing user interface.',
      mission: 'Frontend Developer — implemented creative UI design using HTML, CSS animations, and transitions.',
      language: 'HTML5, CSS3, JavaScript (for interactivity)',
      images: '/3DSLIDER.PNG',
    },
    {
      name: 'Library Management System',
      des: 'Built a full-stack library management system with secure role-based access for admin and users. Added functionalities like book search, issue tracking, and real-time notifications using Socket.IO.',
      mission: 'Backend Developer — system design, database modeling, and frontend integration for real-time updates.',
      language: 'React.js, Node.js, Express.js, MongoDB, Socket.IO',
      images: '/lms.PNG',
    },
    
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="projects" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Projects
      </div>

      <div className="des" ref={(el) => el && divs.current.push(el)}>
        I have worked on various full-stack, frontend, and real-time web projects that showcase my ability to build responsive,
        interactive, and scalable web applications.
      </div>

      <div className="list">
        {listProjects.map((value, key) => (
          <div className="item" key={key} ref={(el) => el && divs.current.push(el)}>
            <div className="images">
              <img src={value.images} alt={value.name} />
            </div>

            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>

              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="des">{value.mission}</div>
                </div>
              </div>

              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div>
                  <h4>Languages</h4>
                  <div className="des">{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
