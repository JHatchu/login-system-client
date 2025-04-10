import React from 'react';
import Header from './header';
import iec1 from '../docs/iec1.pdf'
import iec2 from '../docs/iec2.pdf';
import iec3 from '../docs/iec3.pdf';
import iec4 from '../docs/iec4.pdf';
import iec5 from '../docs/iec5.pdf';
import iec6 from '../docs/iec6.pdf';
function IEC() {
  return (
    <>
        <Header />
    <div className="iec-wrapper">
    

      <div className="iec-content">
        <div className="breadcrumb-wrap">
          <h2>IEC Material</h2>
          <p>
            <a href={iec1} role="link">Home</a> / IEC Material
          </p>
        </div>

        <section className="info-section">
          <h3>Documents</h3>
          <ul>
            <li>
              <a href={iec2} target="_blank">
                Provisions under the Transgender Persons Act, 2019 - Hindi
              </a>
            </li>
            <li>
              <a href={iec3} target="_blank">
                Main Features of the Transgender Persons Act, 2019 - Hindi
              </a>
            </li>
            <li>
              <a href={iec4} target="_blank">
                Provisions under the Transgender Persons Act, 2019 - English
              </a>
            </li>
            <li>
              <a href={iec6} target="_blank">
                Transgender Persons Act 2019
              </a>
            </li>
            <li>
              <a href={iec5} target="_blank">
                Transgender Persons Act 2019 and Rules 2020
              </a>
            </li>
          </ul>
        </section>

        {/* <section className="info-section">
          <h3>Course Links</h3>
          <ul>
            <li>
              <a href="https://tapas.dosje.gov.in/courses_transgender.php" target="_blank">
                Online Certificate Course on Transgender Issues
              </a>
            </li>
            <li>
              <a href="https://tapas.dosje.gov.in/courses_socialDefence.php" target="_blank">
                Online Certificate Course on Social Defence
              </a>
            </li>
          </ul>
        </section> */}
      </div>

      <style>{`
        .iec-wrapper {
          max-width: 1000px;
          margin: auto;
          padding-top: 2rem;
          font-family: Arial, sans-serif;
          background-color: #f8f9fa;
        }

        .breadcrumb-wrap {
          text-align: center;
          margin-bottom: 3rem;  
        }

        .breadcrumb-wrap h2 {
          font-size: 2rem;
          color: #003366;
          margin-bottom: 0.5rem;
        }

        .breadcrumb-wrap p a {
          color: #66CCFF;
          text-decoration: none;
        }

        .info-section {
          margin-bottom: 3rem;
        }

        .info-section h3 {
          font-size: 1.5rem;
          color: #003366;
          margin-bottom: 1rem;
          border-bottom: 2px solid #003366;
          display: inline-block;
          padding-bottom: 0.25rem;
        }

        .info-section ul {
          list-style: none;
          padding: 0;
        }

        .info-section li {
          margin: 1rem 0;
        }

        .info-section a {
          color: #003366;
          font-size: 1.1rem;
          text-decoration: none;
          border-left: 4px solid #66CCFF;
          padding-left: 10px;
          transition: color 0.3s, border-color 0.3s;
        }

        .info-section a:hover {
          color: #66CCFF;
          border-color: #003366;
        }
      `}</style>
    </div>
    </>
  );
}

export default IEC;
