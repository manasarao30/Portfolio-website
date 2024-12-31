// import React from "react";
// import styled from "styled-components";
// import SkillsComponent from "./SkillsSection.tsx";
// import { useState } from "react";
// import ProjectsSection from "./ProjectsSection.tsx";
// import ContactSection from "./ContactSection.tsx";
// import HeaderComponent from "./HeaderComponent.tsx";
// import FooterSection from "./FooterSection.tsx";
// import HeroSection from "./HeroSection.tsx";

// const getRandomColor = () => {
//   const colors = ["#e63946", "#457b9d", "#2a9d8f", "#f4a261", "#e9c46a"];
//   return colors[Math.floor(Math.random() * colors.length)];
// };


// const Wrapper = styled.div`
//   font-family: "Share Tech Mono", serif;
//   background-color: black;
//   color: white;
//   padding: 20px;
//   max-width: 100%;
//     overflow-x: hidden; /* Prevent horizontal scrolling */

//   box-sizing: border-box;

//   @media (max-width: 576px) {
//     padding: 15px;
//   }
// `;

// // const ToggleWrapper = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   gap: 20px;
// //   margin-bottom: 20px;

// //   button {
// //     background-color: white;
// //     justify-content: center;
// //     color: black;
// //     border: none;
// //     border-radius: 10px;
// //     padding: 10px 20px;
// //     font-size: 1.5rem;
// //     font-family: "Share Tech Mono", serif;

// //     @media (max-width: 768px) {
// //     padding: 8px 16px;
// //     font-size: 0.9rem;
// //     }
// //      @media (max-width: 576px) {
// //    padding: 6px 12px;
// //     font-size: 0.8rem;
// //     }

// //     cursor: pointer;
// //     transition: background-color 0.3s ease;

// //     &.active {
// //       background-color: gray;
// //       color: white;
// //     }
// //     &:hover {
// //       background-color: gray;
// //       color: white;
// //     }
// //   }
// // `;
// const ToggleWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
//   margin-bottom: 20px;

//   button {
//     background-color: white;
//     justify-content: center;
//     color: black;
//     border: none;
//     border-radius: 10px;
//     padding: 10px 20px;
//     font-size: 1.5rem;
//     font-family: "Share Tech Mono", serif;
//     cursor: pointer;
//     transition: background-color 0.3s ease;

//     &.active {
//       background-color: gray;
//       color: white;
//     }

//     &:hover {
//       background-color: gray;
//       color: white;
//     }

//     @media (max-width: 768px) {
//       padding: 8px 16px !important;; 
//       font-size: 0.9rem !important;; /* Adjust font size for smaller screens */
//     }

//     @media (max-width: 576px) {
//       padding: 6px 12px !important;; /* Same padding as LinkedIn and GitHub buttons */
//       font-size: 0.8rem !important;; /* Adjust font size to match smaller screens */
//     }
//   }
// `;

// const TimelineWrapper = styled.div`
//   margin-top: 20px;

//   .timeline-item {
//     display: flex;
//     align-items: center;
//     margin-bottom: 20px;

//     .bubble {
//       width: 100px;
//       height: 100px;
//       background: white;
//       border-radius: 50%;
//       overflow: hidden;
//       position: relative;
//       cursor: pointer;
//       transition: transform 0.3s ease, box-shadow 0.3s ease;

//       &:hover {
//         transform: scale(1.1);
//         box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.8);
//       }

//       img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//       }
//     }

//     .content {
//       margin-left: 20px;

//       .title {
//         font-size: 1.8rem;
//       }
//       .company {
//         font-size: 1.8rem;
//         margin-bottom: 5px;
//         font-weight: bold;
//       }
//       .year {
//         font-size: 1.5rem;
//         margin-bottom: 10px;
//       }
//       .position {
//         font-size: 1.8rem;
//       }

//       .description {
//         font-size: 1.5rem;
//         line-height: 1.6;
//       }
//     }
//   }
//      @media (max-width: 768px) {
//      .timeline-item {
//       flex-direction: column; /* Stack the items vertically */
//       align-items: center; /* Center items horizontally */
//       text-align: center;

//       .bubble {
//         margin-bottom: 15px; /* Add some space below the bubble */
//       }

//       .content {
//         margin-left: 0; /* Remove left margin for center alignment */
//         text-align: center; /* Center text */

//         .title {
//           font-size: 1.5rem;
//         }
//         .company {
//           font-size: 1.3rem;
//         }
//         .year,
//         .position {
//           font-size: 1.2rem;
//         }
//         .description {
//           font-size: 1rem;
//         }
//       }
//     }
//   }

//   @media (max-width: 480px) {
//     .timeline-item {
//       flex-direction: column;
//       align-items: center; /* Center the bubble and text */
//       text-align: center;

//       .bubble {
//         margin-bottom: 15px; /* Add spacing between bubble and text */
//         width: 90px; /* Slightly reduce size for smaller screens */
//         height: 90px;
//       }

//       .content {
//        margin-left: 0; /* Remove left margin for center alignment */
//         text-align: center; /* Center text */

//         .title {
//           font-size: 1.3rem;
//         }
//         .company,
//         .year,
//         .position {
//           font-size: 1rem;
//         }
//         .description {
//           font-size: 0.9rem;
//         }
//       }
//     }
//   }
// `;
// const AboutSection = styled.section`
//   padding: 30px;


//   .about-title {
//     font-size: 3rem;
//     margin-bottom: 20px;
//     border-bottom: 2px solid white;
//     padding-bottom: 10px;
//   }
//   h2 {
//     font-family: "Share Tech Mono", serif;
//   }
//   .about-text {
//     font-size: 2rem;
//     line-height: 1.6;
//     margin-bottom: 30px;
//   }

//   .experience-title {
//     font-size: 2.5rem;
//     margin-top: 40px;
//     margin-bottom: 20px;
//     border-bottom: 2px white;
//     padding-bottom: 10px;
//   }
//       @media (max-width: 768px) {
//     .about-title {
//       font-size: 2.5rem; /* Scale down title */
//     }

//     .experience-title {
//       font-size: 2rem; /* Adjust experience/education title */
//     }

//     .about-text {
//       font-size: 1.5rem;
//     }
//   }

//   @media (max-width: 480px) {
//     .about-title {
//       font-size: 2rem;
//     }

//     .experience-title {
//       font-size: 1.8rem;
//     }

//     .about-text {
//       font-size: 1.2rem;
//     }
//   }
// `;


// const playSound = () => {
//   const audio = new Audio("./sounds/click.mp3");
//   audio.play();
// };
// const HomePage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<"experience" | "education">(
//     "experience"
//   );

//   const handleToggle = (tab: "experience" | "education") => {
//     setActiveTab(tab);
//   };

//   return (
//     <Wrapper>
//       {/* Header Section */}
//       <HeaderComponent />

//       {/* Hero Section */}
//       <HeroSection />

//       {/* About Me Section */}
//       <AboutSection id="about">
//         <h2 className="about-title">About Me</h2>
//         <p className="about-text">
//         A software engineer with expertise in full-stack development, cloud computing, and machine learning. Pursuing my Master's in Computer Science at Northeastern University, I bring over two years of experience in software engineering and cloud technologies. I'm passionate about creating impactful solutions and contributing to diversity in STEM through the Society of Women Engineers.
//         </p>

//         <h3 className="experience-title">Qualification</h3>

//         {/* Toggle Buttons */}
//         <ToggleWrapper>
//           <button
//             className={activeTab === "education" ? "active" : ""}
//             onClick={() => {
//               playSound();
//               handleToggle("education");
//             }}
//           >
//             Education
//           </button>
//           <button
//             className={activeTab === "experience" ? "active" : ""}
//             onClick={() => {
//               playSound();
//               handleToggle("experience");
//             }}
//           >
//             Experience
//           </button>
//         </ToggleWrapper>

//         {/* Conditional Rendering */}
//         <TimelineWrapper>
//           {activeTab === "education" && (
//             <>
//               <div className="timeline-item">
//                 <div className="bubble">
//                   <img src="./images/neu.jpeg" alt="Education 1" />
//                 </div>
//                 <div className="content">
//                   <p className="company">Northeastern University</p>
//                   <p className="title">Master of Science in Computer Science</p>
//                   <p className="year">Sep 2023 - May 2025</p>
//                   <p className="position">GPA: 3.85/4.00</p>
//                 </div>
//               </div>

//               <div className="timeline-item">
//                 <div className="bubble">
//                   <img src="./images/nmamit.jpeg" alt="Education 2" />
//                 </div>
//                 <div className="content">
//                   <p className="company">NMAM Institute of Technology</p>
//                   <p className="title">
//                     Bachelor of Technology in Computer Science & Engineering
//                   </p>
//                   <p className="year">Aug 2018 - Aug 2021</p>
//                   <p className="position">GPA: 3.74/4.00</p>
//                 </div>
//               </div>
//             </>
//           )}

//           {activeTab === "experience" && (
//             <>
//               <div className="timeline-item">
//                 <div className="bubble">
//                   <img src="./images/neu.jpeg" alt="Education 1" />
//                 </div>
//                 <div className="content">
//                   <p className="company">Northeastern University</p>
//                   <p className="title">Teaching Assistant - Computer Systems</p>
//                   <p className="year">Sep 2024 - Present</p>
//                 </div>
//               </div>

//               <div className="timeline-item">
//                 <div className="bubble">
//                   <img src="./images/accenture.jpeg" alt="Education 2" />
//                 </div>
//                 <div className="content">
//                   <p className="company">Accenture</p>
//                   <p className="title">Software Engineer 2</p>
//                   <p className="year">Aug 2021 - Jun 2023</p>
//                 </div>
//               </div>

//               <div className="timeline-item">
//                 <div className="bubble">
//                   <img src="./images/verzeo.jpeg" alt="Education 2" />
//                 </div>
//                 <div className="content">
//                   <p className="company">Verzeo</p>
//                   <p className="title">Software Engineering Intern</p>
//                   <p className="year">Jan 2020 - Aug 2020</p>
//                 </div>
//               </div>
//             </>
//           )}
//         </TimelineWrapper>
//       </AboutSection>

//       {/* Skills Section */}

//       <SkillsComponent />

//       {/* Projects Section */}
//       <ProjectsSection />

//       {/* Contact Section */}
//       <ContactSection />

//       {/* Footer Section */}
//       <FooterSection />
//     </Wrapper>
//   );
// };

// export default HomePage;


import React from "react";
import styled from "styled-components";
import SkillsComponent from "./SkillsSection.tsx";
import { useState } from "react";
import ProjectsSection from "./ProjectsSection.tsx";
import ContactSection from "./ContactSection.tsx";
import HeaderComponent from "./HeaderComponent.tsx";
import FooterSection from "./FooterSection.tsx";
import HeroSection from "./HeroSection.tsx";

const getRandomColor = () => {
  const colors = ["#e63946", "#457b9d", "#2a9d8f", "#f4a261", "#e9c46a"];
  return colors[Math.floor(Math.random() * colors.length)];
};


const Wrapper = styled.div`
  font-family: "Share Tech Mono", serif;
  background-color: black;
  color: white;
  padding: 20px;
  max-width: 100%;
    overflow-x: hidden; /* Prevent horizontal scrolling */

  box-sizing: border-box;

  @media (max-width: 576px) {
    padding: 15px;
  }
`;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  button {
    background-color: white;
    justify-content: center;
    color: black;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 1.5rem;
    font-family: "Share Tech Mono", serif;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.active {
      background-color: gray;
      color: white;
    }

    &:hover {
      background-color: gray;
      color: white;
    }

    @media (max-width: 768px) {
      padding: 8px 16px !important;; 
      font-size: 0.9rem !important;; /* Adjust font size for smaller screens */
    }

    @media (max-width: 576px) {
      padding: 6px 12px !important;; /* Same padding as LinkedIn and GitHub buttons */
      font-size: 0.8rem !important;; /* Adjust font size to match smaller screens */
    }
  }
`;

const TimelineWrapper = styled.div`
  margin-top: 20px;

  .timeline-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .bubble {
      width: 100px;
      height: 100px;
      background: white;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: scale(1.1);
        box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.8);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .content {
      margin-left: 20px;

      .title {
        font-size: 1.8rem;
      }
      .company {
        font-size: 1.8rem;
        margin-bottom: 5px;
        font-weight: bold;
      }
      .year {
        font-size: 1.5rem;
        margin-bottom: 10px;
      }
      .position {
        font-size: 1.8rem;
      }

      .description {
        font-size: 1.5rem;
        line-height: 1.6;
      }
    }
  }
     @media (max-width: 768px) {
     .timeline-item {
      flex-direction: column; /* Stack the items vertically */
      align-items: center; /* Center items horizontally */
      text-align: center;

      .bubble {
        margin-bottom: 15px; /* Add some space below the bubble */
      }

      .content {
        margin-left: 0; /* Remove left margin for center alignment */
        text-align: center; /* Center text */

        .title {
          font-size: 1.5rem;
        }
        .company {
          font-size: 1.3rem;
        }
        .year,
        .position {
          font-size: 1.2rem;
        }
        .description {
          font-size: 1rem;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .timeline-item {
      flex-direction: column;
      align-items: center; /* Center the bubble and text */
      text-align: center;

      .bubble {
        margin-bottom: 15px; /* Add spacing between bubble and text */
        width: 90px; /* Slightly reduce size for smaller screens */
        height: 90px;
      }

      .content {
       margin-left: 0; /* Remove left margin for center alignment */
        text-align: center; /* Center text */

        .title {
          font-size: 1.3rem;
        }
        .company,
        .year,
        .position {
          font-size: 1rem;
        }
        .description {
          font-size: 0.9rem;
        }
      }
    }
  }
`;
const AboutSection = styled.section`
  padding: 30px;


  .about-title {
    font-size: 3rem;
    margin-bottom: 20px;
    border-bottom: 2px solid white;
    padding-bottom: 10px;
  }
  h2 {
    font-family: "Share Tech Mono", serif;
  }
  .about-text {
    font-size: 2rem;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  .experience-title {
    font-size: 2.5rem;
    margin-top: 40px;
    margin-bottom: 20px;
    border-bottom: 2px white;
    padding-bottom: 10px;
  }
      @media (max-width: 768px) {
    .about-title {
      font-size: 2.5rem; /* Scale down title */
    }

    .experience-title {
      font-size: 2rem; /* Adjust experience/education title */
    }

    .about-text {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .about-title {
      font-size: 2rem;
    }

    .experience-title {
      font-size: 1.8rem;
    }

    .about-text {
      font-size: 1.2rem;
    }
  }
    .toggle-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;

    button {
      background-color: white;
      justify-content: center;
      color: black;
      border: none;
      border-radius: 10px;
      padding: 10px 20px;
      font-size: 1.5rem;
      font-family: "Share Tech Mono", serif;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &.active {
        background-color: gray;
        color: white;
      }

      &:hover {
        background-color: gray;
        color: white;
      }

      @media (max-width: 768px) {
        padding: 8px 16px; /* Adjust padding */
        font-size: 0.9rem; /* Adjust font size */
      }

      @media (max-width: 576px) {
        padding: 6px 12px; /* Match LinkedIn/GitHub button styles */
        font-size: 0.8rem; /* Adjust font size */
      }
    }
  }
`;


const playSound = () => {
  const audio = new Audio("./sounds/click.mp3");
  audio.play();
};
const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience"
  );

  const handleToggle = (tab: "experience" | "education") => {
    setActiveTab(tab);
  };

  return (
    <Wrapper>
      {/* Header Section */}
      <HeaderComponent />

      {/* Hero Section */}
      <HeroSection />

      {/* About Me Section */}
      <AboutSection id="about">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
        A software engineer with expertise in full-stack development, cloud computing, and machine learning. Pursuing my Master's in Computer Science at Northeastern University, I bring over two years of experience in software engineering and cloud technologies. I'm passionate about creating impactful solutions and contributing to diversity in STEM through the Society of Women Engineers.
        </p>

        <h3 className="experience-title">Qualification</h3>

        {/* Toggle Buttons */}
        <div className="toggle-wrapper">
          <button
            className={activeTab === "education" ? "active" : ""}
            onClick={() => {
              playSound();
              handleToggle("education");
            }}
          >
            Education
          </button>
          <button
            className={activeTab === "experience" ? "active" : ""}
            onClick={() => {
              playSound();
              handleToggle("experience");
            }}
          >
            Experience
          </button>
        </div>

        {/* Conditional Rendering */}
        <TimelineWrapper>
          {activeTab === "education" && (
            <>
              <div className="timeline-item">
                <div className="bubble">
                  <img src="./images/neu.jpeg" alt="Education 1" />
                </div>
                <div className="content">
                  <p className="company">Northeastern University</p>
                  <p className="title">Master of Science in Computer Science</p>
                  <p className="year">Sep 2023 - May 2025</p>
                  <p className="position">GPA: 3.85/4.00</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="bubble">
                  <img src="./images/nmamit.jpeg" alt="Education 2" />
                </div>
                <div className="content">
                  <p className="company">NMAM Institute of Technology</p>
                  <p className="title">
                    Bachelor of Technology in Computer Science & Engineering
                  </p>
                  <p className="year">Aug 2018 - Aug 2021</p>
                  <p className="position">GPA: 3.74/4.00</p>
                </div>
              </div>
            </>
          )}

          {activeTab === "experience" && (
            <>
              <div className="timeline-item">
                <div className="bubble">
                  <img src="./images/neu.jpeg" alt="Education 1" />
                </div>
                <div className="content">
                  <p className="company">Northeastern University</p>
                  <p className="title">Teaching Assistant - Computer Systems</p>
                  <p className="year">Sep 2024 - Present</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="bubble">
                  <img src="./images/accenture.jpeg" alt="Education 2" />
                </div>
                <div className="content">
                  <p className="company">Accenture</p>
                  <p className="title">Software Engineer 2</p>
                  <p className="year">Aug 2021 - Jun 2023</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="bubble">
                  <img src="./images/verzeo.jpeg" alt="Education 2" />
                </div>
                <div className="content">
                  <p className="company">Verzeo</p>
                  <p className="title">Software Engineering Intern</p>
                  <p className="year">Jan 2020 - Aug 2020</p>
                </div>
              </div>
            </>
          )}
        </TimelineWrapper>
      </AboutSection>

      {/* Skills Section */}

      <SkillsComponent />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <FooterSection />
    </Wrapper>
  );
};

export default HomePage;
