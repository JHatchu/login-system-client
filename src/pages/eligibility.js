import React from "react";

function Eligibility() {
  return (
    <>
      <style>{`
        .sideMenu {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
        }

        .sideMenu h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          font-weight: 600;
          color: #333;
        }

        .sideMenu ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sideMenu ul li {
          margin-bottom: 12px;
        }

        .sideMenu ul li a {
          text-decoration: none;
          color: #333;
          font-size: 1rem;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .sideMenu ul li a i {
          margin-right: 8px;
          font-size: 1.1rem;
          color: #007bff;
        }

        .sideMenu ul li.active a {
          font-weight: 600;
          color: #007bff;
        }

        .sideMenu ul li a:hover {
          color: #0056b3;
          transform: translateX(4px);
        }

        .custom_ul {
          padding-left: 20px;
          margin-bottom: 20px;
        }

        .custom_ul li {
          margin-bottom: 10px;
          line-height: 1.6;
          list-style: none;
          position: relative;
        }

        .custom_ul li i {
          color: #007bff;
          margin-right: 8px;
        }

        .container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .col-lg-3, .col-xs-12 {
          flex: 1;
          min-width: 280px;
        }

        #menu2 {
         padding: 20px;
        padding-top:200px;
        min-height: 100vh;
        overflow-y: auto;
        background: #f9f9f9;
       
      
          flex: 3;
        }

        h4 {
          font-size: 1.2rem;
          margin-top: 20px;
          margin-bottom: 10px;
          color: #333;
        }
      `}</style>

      <div className="container">
        <div id="menu2" >
          <h4>Eligibility Criteria</h4>
          <ul className="custom_ul">
            <li>
              <i className="fa fa-angle-double-right"></i> The student should have a Transgender Certificate issued through the National Portal for Transgender person of the Ministry of Social Justice & Empowerment
            </li>
            <li>
              <i className="fa fa-angle-double-right"></i> The scholarships are open to Indian Nationals only.
            </li>
            <li>
              <i className="fa fa-angle-double-right"></i> The candidate should not be receiving any other central or state government funded Pre-Matric/Post-matric Scholarship...
            </li>
          </ul>

          <h4>Criteria of selection for scholarship</h4>
          <ul className="custom_ul">
            <li>
              <i className="fa fa-angle-double-right"></i> All eligible candidates identifying as Transgender Person will be considered...
            </li>
            <li>
              <i className="fa fa-angle-double-right"></i> In case of the same merit, preference shall be given to the elder applicant.
            </li>
            <li>
              <i className="fa fa-angle-double-right"></i> Post Matric applicants get priority over Pre-Matric.
            </li>
            <li>
              <i className="fa fa-angle-double-right"></i> Selected candidates will be listed on the portal.
            </li>
          </ul>

          <h4>Conditions for Scholarships for secondary school (IX & X)</h4>
          <ul className="custom_ul">
            <li>
              <i className="fa fa-angle-double-right"></i> Must be a full-time student in a recognized government school.
            </li>
            <li>
              <i className="fa fa-angle-double-right"></i> Transfers require certification from the institution.
            </li>
            <li>
              <i className="fa fa-angle-double-right"></i> Only one year of scholarship is allowed per class.
            </li>
          </ul>

          <h4>Conditions for Scholarships for senior secondary school (XI & XII)</h4>
          <ul className="custom_ul">
            <li>
              <i className="fa fa-angle-double-right"></i> Must be a full-time student in a recognized government school.
            </li>
            <li>
              <i className="fa fa-angle-double-right"></i> Transfers require certification from the institution.
            </li>
            <li>
              <i className="fa fa-angle-double-right"></i> Only one year of scholarship is allowed per class.
            </li>
          </ul>

          <h4>Conditions for Scholarship for students (Under-graduate/Diploma)</h4>
          <ul className="custom_ul">
            <li><i className="fa fa-angle-double-right"></i> Available for all recognized post-secondary courses.</li>
            <li><i className="fa fa-angle-double-right"></i> Distance/correspondence learners are eligible.</li>
            <li><i className="fa fa-angle-double-right"></i> Includes all UGC/AICTE-recognized courses.</li>
          </ul>

          <h4>Conditions for Scholarship for students (Post-graduate)</h4>
          <ul className="custom_ul">
            <li><i className="fa fa-angle-double-right"></i> Available for all recognized post-secondary courses.</li>
            <li><i className="fa fa-angle-double-right"></i> Distance/correspondence learners are eligible.</li>
            <li><i className="fa fa-angle-double-right"></i> Includes all UGC/AICTE-recognized postgraduate courses.</li>
          </ul>
        </div>

        <div className="col-lg-3 col-xs-12">
          <aside className="sideMenu">
            <h3>Smile</h3>
            <ul>
              <li><a href="/read1"><i className="fa fa-arrow-circle-right"></i> Certificates & Identity Cards</a></li>
              <li className="active"><a href="/read1a"><i className="fa fa-arrow-circle-right"></i> Scholarships</a></li>
              <li><a href="/read1b"><i className="fa fa-arrow-circle-right"></i> Skill Development & Training</a></li>
              <li><a href="/read1c"><i className="fa fa-arrow-circle-right"></i> Composite Medical Health</a></li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}

export default Eligibility;