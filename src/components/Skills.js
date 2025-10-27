import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  faGitAlt,
  faAws
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();

  divs.current = [];
  CustomHook(scrollTab, divs);

  const [listSkills] = useState([
    {
      name: 'C++',
      des: 'Strong knowledge of Data Structures, Algorithms, and OOP — used in problem-solving (100+ LeetCode, 50+ Coding Ninjas & HackerRank).',
      icon: faServer,
    },
    {
      name: 'Java',
      des: 'Experience with Core Java, OOP principles, and backend development logic.',
      icon: faServer,
    },
    {
      name: 'JavaScript',
      des: 'Modern ES6+ syntax for dynamic UI logic and async programming.',
      icon: faJs,
    },
    {
      name: 'React.js',
      des: 'Developed responsive UIs with React, managed state using Redux, optimized rendering and performance.',
      icon: faReact,
    },
    {
      name: 'Node.js / Express.js',
      des: 'Built RESTful APIs, managed backend logic, and connected MongoDB/MySQL databases.',
      icon: faNodeJs,
    },
    {
      name: 'Databases & Auth',
      des: 'Worked with MongoDB and MySQL; implemented Firebase and Google OAuth for authentication.',
      icon: faDatabase,
    },
    {
      name: 'DevOps & Cloud',
      des: 'Familiar with AWS, Azure DevOps, Git, and GitHub for version control and deployments.',
      icon: faAws,
    },
    {
      name: 'Frontend Styling',
      des: 'Expertise in HTML5, CSS3, and Tailwind CSS for responsive, mobile-friendly design.',
      icon: faHtml5,
    },
    {
      name: 'Version Control',
      des: 'Daily use of Git for collaboration, branching, merging, and version management.',
      icon: faGitAlt,
    },
  ]);

  const attachRef = (el) => {
    if (el && !divs.current.includes(el)) divs.current.push(el);
  };

  return (
    <section className="skills" ref={scrollTab}>
      <div className="title" ref={attachRef}>
        Skills
      </div>

      <ul className="summary-points" ref={attachRef}>
        <li>Proficient in <strong>C++</strong>, <strong>Java</strong>, and <strong>JavaScript</strong>, with a strong foundation in <em>Data Structures</em>, <em>Algorithms</em>, and <em>OOP</em>.</li>
        <li>Hands-on experience building full-stack web apps using the <strong>MERN Stack</strong> — MongoDB, Express.js, React.js, and Node.js.</li>
        <li>Developed and deployed RESTful APIs, integrated Firebase & Google OAuth for authentication.</li>
        <li>Skilled in <strong>frontend development</strong> with responsive UI/UX, state management, and performance optimization.</li>
        <li>Familiar with <strong>AWS</strong>, <strong>Azure DevOps</strong>, <strong>Git</strong>, and <strong>GitHub</strong> for version control and cloud deployment.</li>
        <li>Strong grasp of <strong>DBMS</strong>, <strong>Operating Systems</strong>, and <strong>Computer Networks</strong>.</li>
        <li>Solved over <strong>200+ coding problems</strong> across LeetCode, Coding Ninjas, and HackerRank.</li>
        <li>Active participant in hackathons by <strong>Google Cloud</strong>, <strong>GFG</strong>, <strong>DevHouse</strong>, and <strong>Ideal Lab</strong>, focusing on innovative software solutions.</li>
      </ul>

      <div className="list">
        {listSkills.map((value, key) => (
          <div
            className="item"
            key={key}
            ref={attachRef}
          >
            <FontAwesomeIcon icon={value.icon} size="2x" />
            <h3>{value.name}</h3>
            <div className="des">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
