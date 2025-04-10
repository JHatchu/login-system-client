import React from "react";
import Header from "./header";
import annualReport from "../docs/Annual Report_2019-20.pdf"; // Adjust the path as necessary
function New() {
  return (
    <>
      {/* Static Header */}
      <Header /> 

      <style>
        {`
        html, body {
          margin: 0;  }
          /* Page Content */
          .container {
            max-width: 800px;
            margin: 80px auto 20px; /* Adjusted margin to avoid overlap */
            padding: 20px;
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }

          .content-box {
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #fafafa;
          }

          /* List Styling */
          .list-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            border-bottom: 1px solid #ddd;
            transition: all 0.3s ease;
          }

          .list-item:last-child {
            border-bottom: none;
          }

          .list-item i {
            color: #007bff;
            font-size: 18px;
          }

          .list-item a {
            font-size: 16px;
            color: #333;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .list-item a:hover {
            color: #007bff;
            text-decoration: underline;
          }

          /* Button Link */
          .button-link {
            display: inline-block;
            background: #007bff;
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            text-decoration: none;
            font-size: 16px;
            font-weight: bold;
            transition: background 0.3s ease;
          }

          .button-link:hover {
            background: #0056b3;
          }
        `}
      </style>

      {/* Content Box */}
      <div className="container">
        <div className="content-box">
          <ul>
            {/* List Item 1 */}
            <li className="list-item">
              <i className="fa fa-arrow-circle-o-right"></i>
              <a
                href={annualReport}

                target="_blank"
                rel="noopener noreferrer"
              >
                🚀 Launch of National Portal for Transgender Persons
              </a>
            </li>

            {/* List Item 2 */}
            <li className="list-item">
              <i className="fa fa-arrow-circle-o-right"></i>
              <a
                href="/Applicant/Registration/Notification"
                className="button-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                📢 Notification(s)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default New;
