import React from 'react'
import "../component/Resume.css"

function Resume() {
  return (
    <>
        <h1 id="name">ANSARI KATIB</h1>
    <h5 id="info">
      ansarikatib647@gmail.com |+91 9011055652 |<a href="https://github.com/ansari-katib">https://github.com/ansari-katib</a>
    </h5>
    <p>
      I am a highly motivated Web development. I am passionate about learning
      new technologies and continuously improving my skills to stay updated with
      industry trends. My enthusiasm for exploring new tools and technologies
      allows me to adapt quickly and contribute effectively to any project.
    </p>

    <h2>Skills</h2>
    <hr />
    <ul>
      <li><b>Backend Development :</b> Node.js , Express.js</li>
      <li><b>Database Management :</b> MongoDB , Mongoose</li>
      <li><b>Frontend Technologies :</b> React.js , HTML , CSS</li>
      <li><b>Tools :</b> Git , Github , Docker , Thunder Client , postman </li>
      <li><b>OS :</b> Linux : CentOS , Ubuntu</li>
    </ul>

    <h2>Project</h2>
    <hr />

    <h1>#E-Commerce Fast Food Buying Website (MERN Stack):</h1>
    <ul>
      <li>
        Developed a full-stack e-commerce application using the<b>MERN stack
        (MongoDB, Express.js, React, Node.js)</b>, implementing modern web
        development practices.
      </li>
      <li>
        Utilized React Hooks such as useState, useContext, and useEffect to
        manage state and side effects, enhancing component performance and user
        experience.
      </li>
      <li>
        Implemented Express validation for robust input handling and error
        management, ensuring data integrity across the application.
      </li>
      <li>
        Integrated OAuth for secure user authentication, allowing users to sign
        in with their existing accounts from platforms like Google.
      </li>
      <li>
        Used JSON Web Tokens (JWT) for stateless authentication, ensuring secure
        access to protected routes and resources.
      </li>
      <li>
        Applied Salt and Pepper hashing techniques to securely store passwords,
        enhancing security against data breaches.
      </li>
    </ul>
    <p className="link" ><a href="https://github.com/ansari-katib/MERN-web-fasFoodDelivery-application.git" >Project Github link</a></p>

    <h1>#Tour and Travel React application : (React js)</h1>
    <p>
      Technology/Tools used in project : HTML, CSS, JavaScript, React
      Description:
    </p>
    <ul>
      <li>
        Developed a responsive tour and travel website using React , JavaScript
        , CSS , and HTML.
      </li>
      <li>
        Created dynamic components for application like Home, service, contact,
        cards, Navebar so on.
      </li>
      <li>Ensured cross-browser compatibility and optimized Performance</li>
      <li>Applied modern design principles for an engaging UI</li>
      <li>Focused on User-Friendly navigation and visual appeal</li>
    </ul>
    <p className="link" ><a href="https://github.com/ansari-katib/React-app.git" >Project Github link</a></p>

    <h1>#Netflix Frontpage Clone : (HTML , CSS)</h1>
    <p>Technologies/Tools used in project : HTML, CSS</p>
    <ul>
      <li>
        Developed a responsive Netflix frontpage clone with accurate layout and
        styling
      </li>
      <li>
        Used clean, structured HTML for building the skeleton and organized CSS
        for styling and positioning elements.
      </li>
      <li>
        Implemented hover effects, buttons, and a navigation bar mimicking the
        Netflix UI.
      </li>
      <li>Focused on pixel-perfect design and mobile responsiveness</li>
    </ul>
    <p className="link" ><a href="https://github.com/ansari-katib/Netflix-homePage-clone.git" >Project Github link</a></p>

    <h1>#Amazon Landing Page Clone : (HTML , CSS)</h1>
    <ul>
      <li>Developed an Amazon landing page using HTML and CSS</li>
      <li>
        Implemented a clean layout with a focus on pixel-perfect design to
        closely mimic the original website.
      </li>
    </ul>
    <p className="link" ><a href="https://github.com/ansari-katib/amazon-clone-landing-page.git" >Project Github link</a></p>

    

    <div className="education">
      <h2>Education</h2>
      <hr />

      <div className="left">
        <p>Savitribai phule University , pune</p>
        <p className="left"><b>2022-2025 </b></p>
      </div>

      <ul>
        <li>BSC in ( Computer Science )</li>
      </ul>

      <div className="left">
        <p>Savitribai phule University , pune</p>
        <p className="left"><b>2022-2025 </b></p>
      </div>
      <ul>
        <li>HSC</li>
      </ul>

      <div className="left">
        <p>Savitribai phule University , pune</p>
        <p className="left"><b>2022-2025 </b></p>
      </div>
      <ul>
        <li>SSC</li>
      </ul>
    </div>

    </>
  )
}

export default Resume
 