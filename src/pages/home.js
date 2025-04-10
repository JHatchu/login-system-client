import React from "react";
import Header from "./header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import  welfare  from "../docs/welfare.pdf";
import Queer from "../docs/queer.pdf"
import Prison from "../docs/queerprison.pdf"
const Home = () => {

  return (
    <>
<Header />
<div className="home-content">
    <div className="home-container">
      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/R.be5169fe358cddf9251f1007b97d4cc8?rik=%2bCN4%2bGOBkw1ESw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fPeaceful-Desktop-Backgrounds.jpeg&ehk=23WIQbDrBOqACC%2bGzzRj9h%2fhZ4iGgWR0kDGAEM%2bHGjk%3d&risl=&pid=ImgRaw&r=0"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?cs=srgb&dl=color-depth-of-field-environment-1591447.jpg&fm=jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?cs=srgb&dl=color-depth-of-field-environment-1591447.jpg&fm=jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Main Content */}
      <div className="main-section">
        {/* SMILE Content */}
        <div className="smile-left">
          <h2 className="smile-heading">SMILE</h2>
          <p className="smile-description">
            The Ministry of Social Justice and Empowerment has formulated a National level umbrella scheme namely
            <strong> “SMILE - Support for Marginalized Individuals for Livelihood and Enterprise”</strong>,
            which includes two sub-schemes - ‘Comprehensive Rehabilitation for Welfare of Transgender Persons’ and
            ‘Comprehensive Rehabilitation of persons engaged in the act of Begging’. This umbrella scheme would cover
            several comprehensive measures including welfare measures for both transgender persons and persons who are
            engaged in the act of begging with focus extensively on rehabilitation, provision of medical facilities,
            counseling, education, skill development, economic linkages etc with the support of State Governments/UTs/Local
            Urban Bodies, Voluntary Organizations, Community Based Organizations (CBOs) and institutions and others.
          </p>
          <button className="more-button"><a href="/Applicant/Registration/AboutUS">MORE</a> ➤</button>
        </div>
 
        {/* Notification Box */}
        <div className="notification-box">
          <div className="notification-header">📅 NOTIFICATION</div>
          <ul className="notification-list">
           
            <li><a href={Queer}>➤ MHA Advisory on Law and Order for Queer Community</a></li>
            <li><a href={Prison}>➤ Prison Visitation Rights</a></li>
          </ul>
        </div>
      </div>

      {/* Schemes Grid */}
      <div className="scheme-section">
        <h4 className="subheading">Comprehensive Rehabilitation for Welfare of Transgender Persons</h4>
        <div className="scheme-grid">
          <div className="scheme-card">
            <img src="https://sc0.blr1.cdn.digitaloceanspaces.com/inline/xxxlfveeta-1730730152.png"></img>
            <h5>TG Certificate & ID Card</h5>
          
            <button><a href="/read1">Read More</a></button>
            <button><a href="https://transgender.dosje.gov.in/Applicant/Registration/ApplyNow_1">Apply now</a></button>
          
            
          </div>
          <div className="scheme-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBSz-iXmhx_LLzQcP0k2w6BynRoNO_pJN2w&s"></img>
            <h5>Other Welfare measures</h5>
           
            <button><a href={welfare}>Read More</a></button>
          </div>
          <div className="scheme-card">
            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/skill_development_school_1200x768.jpeg?size=690:388"></img>
            <h5>Skill Development Program</h5>
            <button><a href="/read1b">Read More</a></button>
            <button><a href="https://transgender.dosje.gov.in/Applicant/Registration/ApplyNow_3">Apply now</a></button>
          </div>
          <div className="scheme-card">
            <img src="https://img.freepik.com/premium-photo/digital-illustartion-doctor-medical-icons-background-medicine-public-health-pandemic-coronavirus-covid-19-outbreak-concept-digital-composite_1134-40696.jpg"></img>
            <h5>Composite Medical Health</h5>
            <button><a href="/read1c">Read More</a></button>
          </div>
        </div>
      </div>
</div>
      {/* Embedded CSS */}
      <style>{`
      .home-content {
      padding-top: 1300px;
      }
        .home-container {
          width: 100%;
          margin: 0;
          padding-top: 0px;
        }

        .main-section {
          display: flex;
          justify-content: space-between;
          padding: 40px 60px;
          flex-wrap: wrap;
        }
 .carousel img {
    width: 100%;
    height: 500px;
    object-fit: cover; /* Ensures the image covers the whole area */
  }
        .smile-left {
          flex: 1 1 60%;
        }

        .smile-heading {
          color: #ec999e;
          font-weight: bold;
        }

        .smile-description {
          font-size: 18px;
          line-height: 1.7;
        }

        .more-button {
          margin-top: 20px;
          background-color: #1e2b3c;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
        }

        .notification-box {
          flex: 1 1 35%;
          background-color: #233245;
          border-radius: 20px;
          color: white;
          padding: 20px;
          margin-top: 30px;
          min-width: 300px;
        }

        .notification-header {
          background-color: #f6a3a3;
          padding: 10px 15px;
          border-radius: 8px 8px 0 0;
          font-weight: bold;
          color: #233245;
        }

        .notification-list {
          padding: 15px 20px;
          list-style-type: none;
        }

        .notification-list li {
          margin-bottom: 10px;
        }

        .scheme-section {
          padding: 0 60px 60px;
        }

        .subheading {
          margin-top: 40px;
          color: #ec999e;
        }
.scheme-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
}

.scheme-card {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
  .scheme-card h5 {
  margin-bottom: 15px;
  font-size: 1.25rem;
}
  .scheme-card button {
  background-color: #0066cc;
  color: #fff;
  border: none;
  padding: 10px 16px;
  margin: 5px;
  border-radius: 8px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
  
.scheme-card button a {
  color: white;
  text-decoration: none;
}
  
.scheme-card button:hover {
  background-color: #004c99;
}

        .scheme-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .scheme-card h5 {
          font-size: 18px;
          color: #2b3c50;
          margin-bottom: 10px;
        }

        .scheme-card p {
          font-size: 14px;
          color: #555;
          line-height: 1.5;
        }
          .scheme-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 15px;
}

     



        @media screen and (max-width: 768px) {
          .scheme-grid {
            grid-template-columns: 1fr;
          }

          .main-section {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
    </>
  );
};

export default Home;
