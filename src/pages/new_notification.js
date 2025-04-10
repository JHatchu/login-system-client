import React from "react";
import hinditgom from "../docs/HindiTGOM.pdf"; // Adjust the path as necessary
import mtw from "../docs/ModelTransgenderWelfareBoard_Nov2023.pdf"; // Adjust the path as necessary
import om from "../docs/OM.pdf"
import mha1 from "../docs/MHA_AdvisoryTG Prisons_Jan2022.pdf"; // Adjust the path as necessary
import mha2 from "../docs/MHA_Letter_for_Implementation_of_TGAct_Jan 2021.pdf"; // Adjust the path as necessary
import eop from "../docs/EqualOpportunityPolicy.pdf"
import eoph from "../docs/EqualOpportunityPolicyforTransgenderPersons_Hindi.pdf";
import mtwh from "../docs/ModelTransgenderWelfareBoard_Hindi.pdf"; // Adjust the path as necessary
function NewNotification() {
  return (
    <>
      <style>
        {`
          .container {
            max-width: 900px;
            margin: auto;
            padding: 20px;
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
             max-height: 80vh; /* Set a maximum height */
            overflow-y: auto; /* Enable vertical scrolling */
          }

          .aboutPart {
            padding-top: 20px;
            border-bottom: 2px solid #ddd;
          }

          .text_shadow {
            font-size: 22px;
            font-weight: bold;
            color: #333;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
            margin-bottom: 10px;
          }

          .contactBox {
            text-align: left;
            padding: 15px;
            background: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
          }

          .custom_ul {
            list-style: none;
            padding: 0;
          }

          .custom_ul li {
            padding: 10px;
            border-bottom: 1px solid #ddd;
            transition: all 0.3s ease;
          }

          .custom_ul li:hover {
            background: rgba(0, 123, 255, 0.1);
          }

          .custom_ul a {
            font-size: 16px;
            color: #007bff;
            text-decoration: none;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .custom_ul a:hover {
            text-decoration: underline;
            color: #0056b3;
          }

          .fa-arrow-circle-right {
            font-size: 18px;
          }

          h6 {
            font-size: 14px !important;
            color: #666;
            margin-top: 20px;
          }
        `}
      </style>

      <div className="container">
        <div className="col-xl-12 col-lg-12 col-xs-12 pt-12 aboutPart">
          <h4 className="text_shadow">Notification (s)</h4>

          <div className="contactBox">
            <ul className="custom_ul">
              <li>
                <p>
                  <a
                    href={hinditgom}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-arrow-circle-right"></i> Appointment of Complaint Officers in Establishments (Hindi)
                  </a>
                </p>
              </li>

              <li>
                <p>
                  <a
                    href={mtw}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-arrow-circle-right"></i> Model Transgender Welfare Board_Nov 2023 (dated : 10.11.2023)
                  </a>
                </p>
              </li>

              <li>
                <p>
                  <a
                    href={om}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-arrow-circle-right"></i> Appointment of Complaint Officer in Establishments (English)
                  </a>
                </p>
              </li>

              <li>
                <p>
                  <a
                    href={mha1}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-arrow-circle-right"></i> MHA Advisory TG Prisons_Jan 2022 (dated : 10.01.2022)
                  </a>
                </p>
              </li>

              <li>
                <p>
                  <a
                    href={mha2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-arrow-circle-right"></i> MHA Letter for Implementation of TG Act- Jan 2021 (dated : 21.01.2021)
                  </a>
                </p>
              </li>

              <li>
                <p>
                  <a
                    href={eop}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-arrow-circle-right"></i> Equal Opportunity Policy for Transgender Persons
                  </a>
                </p>
              </li>

              <li>
                <p>
                  <a
                    href={eoph}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-arrow-circle-right"></i> Equal Opportunity Policy for Transgender Persons (Hindi)
                  </a>
                </p>
              </li>

              <li>
                <p>
                  <a
                    href={mtwh}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-arrow-circle-right"></i> Model Transgender Welfare Board (Hindi)
                  </a>
                </p>
              </li>
            </ul>

          

         
          </div>
        </div>
      </div>
    </>
  );
}

export default NewNotification;
