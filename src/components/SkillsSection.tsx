// import React from "react";
// import styled from "styled-components";

// const Wrapper = styled.div`
//   font-family: "Share Tech Mono", serif;

//   background-color: black;
//   color: white;
//   min-height: 100vh;
//   padding: 20px;
// `;

// const SkillBadge = ({ icon, label }) => {
//   const getRandomColor = () => {
//     const colors = ["#e63946", "#457b9d", "#2a9d8f", "#f4a261", "#e9c46a"];
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

//   const randomColor = getRandomColor();

//   return (
//     <span
//       style={{
//         display: "inline-block",
//         backgroundColor: randomColor,
//         color: "black",
//         fontSize: "1.2rem",
//         fontWeight: "bold",
//         padding: "10px 20px",
//         borderRadius: "15px",
//         margin: "5px",
//         cursor: "default",
//         transition: "background-color 0.3s ease, transform 0.3s ease",
//       }}
//     >
//       <img
//         src={icon}
//         alt={label}
//         style={{
//           width: "25px",
//           height: "25px",
//           marginRight: "10px",
//           verticalAlign: "middle",
//         }}
//       />
//       {label}
//     </span>
//   );
// };

// const SkillsSection = () => (
//   <section id="skills" style={{ padding: "30px", color: "white" }}>
//     <h2
//       style={{
//         fontSize: "3rem",
//         marginBottom: "20px",
//         fontFamily: "Share Tech Mono, serif",
//         borderBottom: "2px solid white",
//         paddingBottom: "10px",
//       }}
//     >
//       Skills
//     </h2>

//     {/* Programming Languages */}
//     <div
//       style={{
//         display: "flex",
//         alignItems: "flex-start",
//         marginBottom: "30px",
//       }}
//     >
//       <h3 style={{ fontSize: "2rem", marginRight: "20px", flex: "0 0 20%" }}>
//         Programming Languages:
//       </h3>
//       <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "10px" }}>
//         <SkillBadge
//           icon="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
//           label="C"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
//           label="C++"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
//           label="CSS3"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
//           label="HTML5"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
//           label="Java"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
//           label="Python"
//         />
//       </div>
//     </div>

//     {/* Databases */}
//     <div
//       style={{
//         display: "flex",
//         alignItems: "flex-start",
//         marginBottom: "30px",
//       }}
//     >
//       <h3 style={{ fontSize: "2rem", marginRight: "20px", flex: "0 0 20%" }}>
//         Databases:
//       </h3>
//       <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "10px" }}>
//         <SkillBadge
//           icon="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"
//           label="MySQL"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
//           label="PostgreSQL"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/mongodb-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
//           label="MongoDB"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white"
//           label="Redis"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/microsoft%20sql%20server-CC2927.svg?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white"
//           label="SQL Server"
//         />
//       </div>
//     </div>

//     {/* Cloud Platforms */}
//     <div
//       style={{
//         display: "flex",
//         alignItems: "flex-start",
//         marginBottom: "30px",
//       }}
//     >
//       <h3 style={{ fontSize: "2rem", marginRight: "20px", flex: "0 0 20%" }}>
//         Cloud Platforms:
//       </h3>
//       <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "10px" }}>
//         <SkillBadge
//           icon="https://img.shields.io/badge/aws-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"
//           label="AWS"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/google%20cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white"
//           label="GCP"
//         />
//       </div>
//     </div>

//     {/* Frameworks & Tools */}
//     <div
//       style={{
//         display: "flex",
//         alignItems: "flex-start",
//         marginBottom: "30px",
//       }}
//     >
//       <h3 style={{ fontSize: "2rem", marginRight: "20px", flex: "0 0 20%" }}>
//         Frameworks & Tools:
//       </h3>
//       <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "10px" }}>
//         <SkillBadge
//           icon="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
//           label="React"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/node.js-6DA55F.svg?style=for-the-badge&logo=node.js&logoColor=white"
//           label="Node.js"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"
//           label="Django"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"
//           label="Flask"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
//           label="Docker"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white"
//           label="Kubernetes"
//         />
//       </div>
//     </div>

//     {/* Machine Learning */}
//     <div
//       style={{
//         display: "flex",
//         alignItems: "flex-start",
//         marginBottom: "30px",
//       }}
//     >
//       <h3 style={{ fontSize: "2rem", marginRight: "20px", flex: "0 0 20%" }}>
//         Machine Learning & AI:
//       </h3>
//       <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "10px" }}>
//         <SkillBadge
//           icon="https://img.shields.io/badge/tensorflow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white"
//           label="TensorFlow"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/pytorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white"
//           label="PyTorch"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white"
//           label="Scikit-Learn"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/langchain-%23121011.svg?style=for-the-badge&logo=LangChain&logoColor=white"
//           label="LangChain"
//         />
//       </div>
//     </div>

//     {/* DevOps Tools */}
//     <div
//       style={{
//         display: "flex",
//         alignItems: "flex-start",
//         marginBottom: "30px",
//       }}
//     >
//       <h3 style={{ fontSize: "2rem", marginRight: "20px", flex: "0 0 20%" }}>
//         DevOps Tools:
//       </h3>
//       <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "10px" }}>
//         <SkillBadge
//           icon="https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white"
//           label="Jenkins"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/ansible-%231A1918.svg?style=for-the-badge&logo=ansible&logoColor=white"
//           label="Ansible"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/chef-%23F18B00.svg?style=for-the-badge&logo=chef&logoColor=white"
//           label="Chef"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
//           label="Git"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white"
//           label="Bitbucket"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/perforce-%23003659.svg?style=for-the-badge&logo=perforce&logoColor=white"
//           label="Perforce"
//         />
//       </div>
//     </div>

//     {/* Other Tools */}
//     <div
//       style={{
//         display: "flex",
//         alignItems: "flex-start",
//         marginBottom: "30px",
//       }}
//     >
//       <h3 style={{ fontSize: "2rem", marginRight: "20px", flex: "0 0 20%" }}>
//         Other Tools:
//       </h3>
//       <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "10px" }}>
//         <SkillBadge
//           icon="https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white"
//           label="Jira"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/hadoop-%23FF8300.svg?style=for-the-badge&logo=apachehadoop&logoColor=black"
//           label="Hadoop"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/spark-%23E25A1C.svg?style=for-the-badge&logo=apachespark&logoColor=white"
//           label="Spark"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/apache%20airflow-%23017CEE.svg?style=for-the-badge&logo=apacheairflow&logoColor=white"
//           label="Apache Airflow"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/linux-%23FCC624.svg?style=for-the-badge&logo=linux&logoColor=black"
//           label="Linux"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/unix-%23000000.svg?style=for-the-badge&logo=unix&logoColor=white"
//           label="Unix"
//         />
//         <SkillBadge
//           icon="https://img.shields.io/badge/bash-%23121011.svg?style=for-the-badge&logo=gnubash&logoColor=white"
//           label="Bash"
//         />
//       </div>

//     </div>

//     <div
//       style={{
//         display: "flex",
//         alignItems: "flex-start",
//         marginBottom: "30px",
//       }}
//     >
//   <h3 style={{ fontSize: "2rem", marginRight: "20px", flex: "0 0 20%" }}>
//     Certification:
//   </h3>
//   <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
//     <SkillBadge
//       icon="https://img.shields.io/badge/aws-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"
//       label={
//         <a
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ color: "inherit", textDecoration: "none" }}
//           onClick={(e) => {
//             e.preventDefault();
//             const audio = new Audio("./sounds/click.mp3");
//             audio.play();
//             setTimeout(() => {
//               window.open(
//                 "https://www.credly.com/badges/f86c1434-c51e-4660-8c6d-27a123c464ea",
//                 "_blank"
//               );
//             }, 200);
//           }}
//         >
//           AWS Certified Developer - Associate DVA-C02, Dec 2024 - Dec 2027 (Click to view)
//         </a>
//       }
//     />
//   </div>
// </div>

//   </section>
// );

// export default SkillsSection;

import React from "react";
import styled from "styled-components";

// Wrapper for the entire Skills Section
const SkillsSectionWrapper = styled.section`
  padding: 30px;
  color: white;

  h2 {
    font-size: 3rem;
    margin-bottom: 20px;
    font-family: "Share Tech Mono", serif;
    border-bottom: 2px solid white;
    padding-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2.5rem; /* Reduce font size for tablets */
    }

    @media (max-width: 480px) {
      font-size: 2rem; /* Further reduce font size for mobile devices */
    }
  }

  div {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;

    h3 {
      font-size: 2rem;
      margin-right: 20px;
      flex: 0 0 20%;

      @media (max-width: 768px) {
        font-size: 1.2rem; /* Adjust font size for tablets */
      }

      @media (max-width: 480px) {
        font-size: 1rem; /* Adjust font size for mobile devices */
      }
    }
    .skill-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(
          auto-fit,
          minmax(150px, 1fr)
        ); /* Apply grid layout */
        gap: 8px; /* Reduce gap for smaller screens */
        justify-content: flex-start; /* Ensure alignment to the same X-axis */
      }

      @media (max-width: 480px) {
        gap: 6px; /* Further reduce gap for mobile devices */
      }
    }
  }
`;
//     .skill-badges {
//       flex: 1;
//       display: flex;
//       flex-wrap: wrap;
//       gap: 10px;

//       @media (max-width: 768px) {
//         gap: 8px; /* Reduce gap for smaller screens */
//       }

//       @media (max-width: 480px) {
//         gap: 6px; /* Further reduce gap for mobile devices */
//       }
//     }
//   }
// `;

// Styling for Individual SkillBadge
interface SkillBadgeProps {
  bgColor: string;
}

const StyledSkillBadge = styled.span<SkillBadgeProps>`
  display: inline-block;
  background-color: ${(props) => props.bgColor};
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 15px;
  cursor: default;
  transition: background-color 0.3s ease, transform 0.3s ease;

  img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    vertical-align: middle;

    @media (max-width: 768px) {
      width: 20px; /* Reduce image size for smaller screens */
      height: 20px;
    }

    @media (max-width: 480px) {
      width: 18px; /* Further reduce image size for mobile devices */
      height: 18px;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* Reduce font size for tablets */
    padding: 8px 16px; /* Adjust padding for tablets */
  }

  @media (max-width: 480px) {
    font-size: 0.9rem; /* Further reduce font size for mobile devices */
    padding: 6px 12px; /* Adjust padding for mobile devices */
  }
`;

// SkillBadge Component
const SkillBadge = ({ icon, label }) => {
  const getRandomColor = () => {
    const colors = ["#e63946", "#457b9d", "#2a9d8f", "#f4a261", "#e9c46a"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const randomColor = getRandomColor();

  return (
    <StyledSkillBadge bgColor={randomColor}>
      <img src={icon} alt={label} />
      {label}
    </StyledSkillBadge>
  );
};

// SkillsSection Component
const SkillsSection = () => (
  <SkillsSectionWrapper id="skills">
    <h2>Skills</h2>

    {/* Programming Languages */}
    <div>
      <h3>Programming Languages:</h3>
      <div className="skill-badges">
        <SkillBadge
          icon="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
          label="C"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
          label="C++"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
          label="CSS3"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
          label="HTML5"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
          label="Java"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
          label="Python"
        />
      </div>
    </div>

    {/* Databases */}
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "30px",
      }}
    >
      <h3>Databases:</h3>
      <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <SkillBadge
          icon="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"
          label="MySQL"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
          label="PostgreSQL"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/mongodb-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
          label="MongoDB"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white"
          label="Redis"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/microsoft%20sql%20server-CC2927.svg?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white"
          label="SQL Server"
        />
      </div>
    </div>

    {/* Cloud Platforms */}
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "30px",
      }}
    >
      <h3>Cloud Platforms:</h3>
      <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <SkillBadge
          icon="https://img.shields.io/badge/aws-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"
          label="AWS"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/google%20cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white"
          label="GCP"
        />
      </div>
    </div>

    {/* Frameworks & Tools */}
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "30px",
      }}
    >
      <h3>Frameworks & Tools:</h3>
      <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <SkillBadge
          icon="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
          label="React"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/node.js-6DA55F.svg?style=for-the-badge&logo=node.js&logoColor=white"
          label="Node.js"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"
          label="Django"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"
          label="Flask"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
          label="Docker"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white"
          label="Kubernetes"
        />
      </div>
    </div>

    {/* Machine Learning */}
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "30px",
      }}
    >
      <h3>Machine Learning & AI:</h3>
      <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <SkillBadge
          icon="https://img.shields.io/badge/tensorflow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white"
          label="TensorFlow"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/pytorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white"
          label="PyTorch"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white"
          label="Scikit-Learn"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/langchain-%23121011.svg?style=for-the-badge&logo=LangChain&logoColor=white"
          label="LangChain"
        />
      </div>
    </div>

    {/* DevOps Tools */}
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "30px",
      }}
    >
      <h3>DevOps Tools:</h3>
      <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <SkillBadge
          icon="https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white"
          label="Jenkins"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/ansible-%231A1918.svg?style=for-the-badge&logo=ansible&logoColor=white"
          label="Ansible"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/chef-%23F18B00.svg?style=for-the-badge&logo=chef&logoColor=white"
          label="Chef"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
          label="Git"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white"
          label="Bitbucket"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/perforce-%23003659.svg?style=for-the-badge&logo=perforce&logoColor=white"
          label="Perforce"
        />
      </div>
    </div>

    {/* Other Tools */}
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "30px",
      }}
    >
      <h3>Other Tools:</h3>
      <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <SkillBadge
          icon="https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white"
          label="Jira"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/hadoop-%23FF8300.svg?style=for-the-badge&logo=apachehadoop&logoColor=black"
          label="Hadoop"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/spark-%23E25A1C.svg?style=for-the-badge&logo=apachespark&logoColor=white"
          label="Spark"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/apache%20airflow-%23017CEE.svg?style=for-the-badge&logo=apacheairflow&logoColor=white"
          label="Apache Airflow"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/linux-%23FCC624.svg?style=for-the-badge&logo=linux&logoColor=black"
          label="Linux"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/unix-%23000000.svg?style=for-the-badge&logo=unix&logoColor=white"
          label="Unix"
        />
        <SkillBadge
          icon="https://img.shields.io/badge/bash-%23121011.svg?style=for-the-badge&logo=gnubash&logoColor=white"
          label="Bash"
        />
      </div>
    </div>

    {/* Certification */}
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "30px",
      }}
    >
      <h3>Certification:</h3>
      <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
        <SkillBadge
          icon="https://img.shields.io/badge/aws-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"
          label={
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
              onClick={(e) => {
                e.preventDefault();
                const audio = new Audio("./sounds/click.mp3");
                audio.play();
                setTimeout(() => {
                  window.open(
                    "https://www.credly.com/badges/f86c1434-c51e-4660-8c6d-27a123c464ea",
                    "_blank"
                  );
                }, 200);
              }}
            >
              AWS Certified Developer - Associate DVA-C02, Dec 2024 - Dec 2027
              (Click to view)
            </a>
          }
        />
      </div>
    </div>
  </SkillsSectionWrapper>
);

export default SkillsSection;
