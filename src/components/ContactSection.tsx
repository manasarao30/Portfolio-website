import React, { useState } from "react";
import styled from "styled-components";
// const ContactSection = styled.section`
//   padding: 30px;
//   ƒ .contact-title {
//     font-size: 3rem;
//     margin-bottom: 30px;
//     border-bottom: 2px solid white;
//     padding-bottom: 10px;
//   }
//     @media (max-width: 768px) {
//     flex-direction: column; /* Stack form and contact info vertically */
//     align-items: center; /* Center the items horizontally */
//     .contact-title {
//     font-size: 2.5rem;
// }
//     .form-container {
//       margin-right: 0; /* Remove the margin when stacked */
//       width: 100%; /* Ensure it spans the full width */
//     }

//     .contact-info {
//       margin-top: 20px; /* Add spacing between form and contact info */
//       text-align: center; /* Center the text */
//     }
//   }

//   @media (max-width: 480px) {
//     .contact-title {
//       font-size: 2rem; /* Further reduced font size for very small screens */
//     }
// }
//   h2 {
//     font-family: "Share Tech Mono", serif;
//     font-size: 3rem;
//         border-bottom: 2px solid white;
//    padding-bottom: 10px;
//    margin-bottom: 20px;
//   }
//   .contact-content {
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-start;

//     .form-container {
//       flex: 1;
//       margin-right: 20px;

//       form {
//         display: flex;
//         flex-direction: column;
//         gap: 15px;

//         input,
//         textarea,
//         button {
//           font-size: 1.2rem;
//           padding: 10px;
//           border: none;
//           border-radius: 5px;
//         }

//         input,
//         textarea {
//           background-color: #1e1e1e;
//           color: white;
//         }

//         button {
//           background-color: #00bcd4;
//           color: black;
//           cursor: pointer;
//           transition: background-color 0.3s ease;

//           &:hover {
//             background-color: gray;
//           }
//         }
//       }
//     }
// }
//     .contact-info {
//       flex: 1;
//       color: white;
//       font-size: 1.5rem;
//       font-variant: normal;
//       font-family: inherit;
//       text-transform: none !important;

//       p {
//         margin: 0;
//         font-variant: normal; 
//         font-family: inherit; 
//         text-transform: none !important; 
//       }
//     }
//   }  
// `;
// Sound play function
const ContactSection = styled.section`
  padding: 30px;

  .contact-title {
    font-family: "Share Tech Mono", serif;
    font-size: 3rem; /* Default size */
    border-bottom: 2px solid white;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  .contact-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .form-container {
      flex: 1;
      margin-right: 20px;

      form {
        display: flex;
        flex-direction: column;
        gap: 15px;

        input,
        textarea,
        button {
          font-size: 1.2rem;
          padding: 10px;
          border: none;
          border-radius: 5px;
        }

        input,
        textarea {
          background-color: #1e1e1e;
          color: white;
        }

        button {
          background-color: #00bcd4;
          color: black;
          cursor: pointer;
          transition: background-color 0.3s ease;

          &:hover {
            background-color: gray;
          }
        }
      }
    }

    .contact-info {
      flex: 1;
      color: white;
      font-size: 1.5rem;
      font-variant: normal;
      font-family: inherit;
      text-transform: none !important;

      p {
        margin: 0;
        font-variant: normal;
        font-family: inherit;
        text-transform: none !important;
      }
    }
  }

  @media (max-width: 768px) {
    .contact-content {
      flex-direction: column; /* Stack form and contact info vertically */
      align-items: center; /* Center the items horizontally */

      .form-container {
        margin-right: 0; /* Remove right margin when stacked */
        width: 100%; /* Full width on smaller screens */
      }

      .contact-info {
        margin-top: 20px; /* Add spacing between form and contact info */
        text-align: center; /* Center the text */
        font-size: 1.2rem; /* Slightly smaller text size */
      }
    }

    .contact-title {
      font-size: 2.5rem; /* Adjust title font size for smaller screens */
    }
  }

  @media (max-width: 480px) {
    .contact-title {
      font-size: 2rem; /* Further reduce title font size for very small screens */
    }

    .contact-info {
      font-size: 1rem; /* Reduce contact info text size further */
    }
  }
`;


const playSound = () => {
  const audio = new Audio("./sounds/click.mp3");
  audio.play();
};
const Contact = () => {
  return (
    <ContactSection id="contact">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-content">
        <div className="form-container">
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Message" rows={5} required></textarea>
            <button type="submit" onClick={playSound}>
              Send
            </button>
          </form>
        </div>
        <div className="contact-info">
          <p>Or email me:</p>
          <p>rao.mana@northeastern.edu</p>
        </div>
      </div>
    </ContactSection>
  );
};

export default Contact;
