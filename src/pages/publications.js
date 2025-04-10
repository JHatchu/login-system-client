import React from "react";
import Header from "./header";
import "bootstrap/dist/css/bootstrap.min.css";
import journal from "../docs/NISDJournal.pdf";

function Publications() {
  return (
    <>
      <Header />
      <div className="container">
        <style>
          {`
            .aboutPart {
              padding-top: 60px;
              border-bottom: 1px solid #ccc;
              margin-bottom: 40px;
            }

            .text_shadow {
              font-size: 2rem;
              font-weight: bold;
              text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
              margin-bottom: 20px;
              color: #333;
            }

            .contactBox {
              background-color: #f9f9f9;
              border-radius: 12px;
              padding: 20px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            }

            .custom_ul {
              list-style: none;
              padding-left: 0;
            }

            .custom_ul li {
              margin-bottom: 12px;
              font-size: 1.1rem;
            }

            .custom_ul a {
              text-decoration: none;
              color: #007bff;
              transition: color 0.3s ease;
            }

            .custom_ul a:hover {
              color: #0056b3;
            }

            .fa {
              margin-right: 8px;
              color: #007bff;
            }
          `}
        </style>

        <div className="col-xl-12 col-lg-12 col--xs-12 pt-12 bb1 aboutPart">
          <h4 className="text_shadow">Publications</h4>
          <div className="contactBox">
            <ul className="custom_ul">
              <li>
                <a href={journal} target="_blank" role="link" rel="noopener noreferrer">
                  <i className="fa fa-arrow-circle-right"></i> NISD Journal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Publications;
