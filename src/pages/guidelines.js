import React from "react";
import Header from "./header";
import ta from "../docs/Transgender Act, 2019.pdf";
import tg from "../docs/TG RULES, 2020.pdf";
import ggrh from "../docs/GarimaGrehGuidleinesRevised.pdf";

function Guidelines() {
  return (
    <>
      <Header />
      <style>
        {`
          .container {
            max-width: 900px;
            margin: auto;
            padding: 30px;
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.07);
            margin-top: 100px;
          }

          .aboutPart {
            padding-top: 20px;
          }

          .text_shadow {
            font-size: 26px;
            font-weight: 700;
            color: #333;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
            margin-bottom: 20px;
          }

          .contactBox {
            padding: 20px;
            background: #f5f8ff;
            border-radius: 12px;
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.05);
          }

          .custom_ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .custom_ul li {
            padding: 14px 12px;
            border-bottom: 1px solid #dbe4f0;
            transition: all 0.3s ease;
            border-radius: 8px;
          }

          .custom_ul li:hover {
            background: #e8f1ff;
            transform: scale(1.01);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          }

          .custom_ul a {
            font-size: 17px;
            color: #0056d2;
            text-decoration: none;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .custom_ul a:hover {
            text-decoration: underline;
            color: #003d99;
          }

          .fa-arrow-circle-right {
            font-size: 20px;
            color: #0056d2;
          }
        `}
      </style>

      <div className="container">
        <div className="col-xl-12 col-lg-12 col-xs-12 pt-12 aboutPart">
          <h4 className="text_shadow">Guidelines</h4>

          <div className="contactBox">
            <ul className="custom_ul">
              <li>
                <a href={ta} target="_blank" rel="noopener noreferrer">
               Transgender Persons (Protection of Rights) Act, 2019
                </a>
              </li>
              <li>
                <a href={tg} target="_blank" rel="noopener noreferrer">
                Transgender Persons (Protection of Rights) Rules, 2020
                </a>
              </li>
              <li>
                <a href={ggrh} target="_blank" rel="noopener noreferrer">
                  Updated SMILE Scheme (Transgender Sub-Scheme)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Guidelines;
