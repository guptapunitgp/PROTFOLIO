import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>PUNIT GUPTA</span>
            </div>
            <div className="des">
                {/* 30 */}
Passionate Software Development Engineer skilled in C++, Java, and MERN stack, with strong understanding of Data Structures, Algorithms, and Object-Oriented Design. Solved over 200+ coding problems across LeetCode, Coding Ninjas, and HackerRank. Experienced in building scalable full-stack web applications, integrating REST APIs, and optimizing performance. Active participant in Google Cloud, GFG, and DevHouse hackathons, continuously exploring innovative software solutions and system design practices.            </div>
            
            <a href="/PG_RESUME (2).pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My RESUME
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.jpg" alt="" />
                <div className="info">
                    <div>Developer</div>
                    <div>PUNIT GUPTA</div>
                    <div>07/2004</div>
                    <div>Male</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
