import React from "react";
import Header from "./header";
import nctp1 from "../docs/NCTP 1.pdf";
import nctp2 from "../docs/NCTP2.pdf"

function Nctp() {
  return (
    <>
      <Header />

      {/* Embedded CSS styling */}
      <style>
        {`
          .container {
            max-width: 900px;
            margin: auto;
            padding: 20px;
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            margin-top: 100px; /* adjust if your header height is different */
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
            margin: 0;
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
        `}
      </style>

      {/* Content */}
      <div className="container">
        <div className="col-xl-12 col-lg-12 col-xs-12 pt-12 aboutPart">
          <h4 className="text_shadow">NCTP</h4>
          <div className="contactBox">
            <ul className="custom_ul">
              <li>
                <a
                  href={nctp1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
             
                  Constitution of National Council for Transgender Persons Notification
                </a>
              </li>

              <li>
                <a
                  href={nctp2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
              
                  National Council of Transgender Persons re-constitution notification dated 16.11.2023
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nctp;
