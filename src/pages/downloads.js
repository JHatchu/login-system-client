import React from "react";
import Header from "./header";
import cr from "../docs/CR.pdf";
import um from "../docs/usermanual1.pdf";
import af from "../docs/Affidavit1.pdf";
import af2 from "../docs/Affidavit2.pdf";
import af3 from "../docs/Affidavit3.pdf";
import ta1 from "../docs/TA1.pdf";
import ta2 from "../docs/TA2.pdf";
import Nctp from "../docs/nctp.pdf";
import Guidelines from "../docs/guide.pdf";
import Prison from "../docs/prison.pdf";
function Downloads() {
  return (
    <>
        <Header />
        <style>
  {`
    .container {
    min-height: 100vh;
    overflow-y: auto;
      padding-top: 100px ;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .text_shadow {
      font-size: 2rem;
      font-weight: 700;
      color: #2c3e50;
      text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
      margin-bottom: 30px;
      border-bottom: 2px solid #007bff;
      padding-bottom: 10px;
    }

    .contactBox {
      background: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 10px;
      padding: 20px 30px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    .custom_ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .custom_ul li {
      margin-bottom: 20px;
    }

    .custom_ul li a {
      text-decoration: none;
      color: #007bff;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .custom_ul li a:hover {
      color: #0056b3;
      text-decoration: underline;
    }

    .custom_ul li i {
      margin-right: 8px;
      color: #007bff;
    }

    .custom_ul p {
      margin: 5px 0;
    }

    .aboutPart {
      margin-top: 30px;
    }
  `}
</style>

     <div class="container">
            
            


            <div class="col-xl-12 col-lg-12 col--xs-12 pt-12 bb1 aboutPart">
                <h4 class="text_shadow">Downloads</h4>
                <div class="contactBox" >
                    <ul class="custom_ul">
            
                        <li>
                            <p>  <a href={cr}target="_blank" role="link"><i class="fa fa-arrow-circle-right"> </i> Change request process for TG Certificate &amp; ID Card (District users)  </a></p>
                        </li>
                        
                        <li>
                            <p>  <a href={um} target="_blank" role="link"><i class="fa fa-arrow-circle-right"> </i> User Manual for Online Application for Transgender Certificate &amp; Identity Card  </a></p>
                        </li>
                        <li>
                            <p> <a href={af} target="_blank" role="link"><i class="fa fa-arrow-circle-right"> </i> Affidavit Format </a></p><p> <a href={af2} target="_blank" role="link"><i class="fa fa-arrow-circle-right"> </i> Affidavit Format of section 6 </a></p><p> <a href={af3} target="_blank" role="link"><i class="fa fa-arrow-circle-right"> </i> Affidavit Format of section 7 </a></p>
                        </li>
                        
                        
                        <li>
                            <p><a href={ta1} target="_blank" role="link"><i class="fa fa-arrow-circle-right"> </i> Transgender Persons(Protection of Right) Act, 2019</a></p>
                        </li>
                        <li>
                            <p><a href={ta2} target="_blank" role="link"> <i class="fa fa-arrow-circle-right"> </i> Transgender Persons(Protection of Right) Rules, 2020</a></p>
                        </li>
                        <li>
                            <p><a href={Nctp} target="_blank" role="link"> <i class="fa fa-arrow-circle-right"> </i> Constitution of National Council for Transgender Persons</a></p>
                        </li>
                        <li>
                            <p><a href={Guidelines} target="_blank" role="link"><i class="fa fa-arrow-circle-right"> </i> SMILE Scheme Guidelines</a></p>
                        </li>
                        <li>
                            <p><a href={Prison} target="_blank" role="link"><i class="fa fa-arrow-circle-right"> </i> Advisory for the treatment and care of Transgender persons in Prisons.</a></p>
                        </li>
                    </ul>
                </div>
            </div>
            
            
            
            
           
            
                        
                    </div>
    </>
  );
}export default Downloads;