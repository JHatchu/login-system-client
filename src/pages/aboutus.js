import React from "react";
import Header from "./header";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutUs() {
  return (
    <>
      <Header />

      {/* Embedded Styles */}
      <style>{`
         .mainSection {
    padding-top: 550px; /* Adjust based on actual header/nav height */
    padding-bottom: 50px;
    min-height: 100vh;
    background-color: #f9f9f9;
    overflow-y: auto;
  }
        .text_shadow {
          font-size: 24px;
          font-weight: bold;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
          margin-bottom: 20px;
        }
        .paragraph {
          font-size: 16px;
          line-height: 1.8;
          text-align: justify;
          color: #333;
        }
        .pt-12 {
          padding-top: 30px;
        }
        .bb1 {
          border-bottom: 1px solid #ccc;
          padding-bottom: 20px;
        }
        @media (max-width: 768px) {
          .text_shadow {
            font-size: 20px;
          }
          .paragraph {
            font-size: 14px;
          }
        }
      `}</style>

      <section className="mainSection login-12">
        <div className="container">
          <div className="row aboutPart">
            <div className="col-xl-12 col-lg-12 col-xs-12 pt-12 bb1">
              <h4 className="text_shadow">About Us</h4>
              <p className="paragraph">
                In the year 1985-86, the erstwhile Ministry of Welfare was bifurcated into the Department of Women and Child Development and the Department of Welfare. Simultaneously, the Scheduled Castes Development Division, Tribal Development Division and the Minorities and Backward Classes Welfare Division were moved from the Ministry of Home Affairs and also the Wakf Division from the Ministry of Law to form the then Ministry of Welfare.
                <br /><br />
                Subsequently, the name of the Ministry was changed to the Ministry of Social Justice &amp; Empowerment in May, 1998. Further, in October, 1999, the Tribal Development Division had moved out to form a separate Ministry of Tribal Affairs. In January, 2007, the Minorities Division along with Wakf Unit have been moved out of the Ministry and formed as a separate Ministry and the Child Development Division has gone to the Ministry of Women &amp; Child Development.
                <br /><br />
                Now the two departments have been under the Ministry of Social Justice &amp; Empowerment vide notification dated 12.5.2012, namely:
                <br />
                (i) Department of Social Justice and Empowerment (Samajik Nyaya and Adhikarita Vibhag)
                <br />
                (ii) Department of Disability Affairs (Nishaktata Karya Vibhag), since renamed as Department of Empowerment of Persons with Disabilities (Divyangjan)
              </p>
            </div>

            <div className="col-xl-12 col-lg-12 col-xs-12 pt-12">
              <h4 className="text_shadow">Organization Set up</h4>
              <p className="paragraph">
                The Ministry of Social Justice &amp; Empowerment is entrusted with the welfare, social Justice and empowerment of disadvantaged and marginalized sections of society viz. Scheduled Caste, Backward Classes, Persons with Disabilities, Senior Citizens, and Victims of Drug Abuse, etc.
                <br /><br />
                The basic objective of the policies, programmes, laws, and institutions of the Indian welfare system is to bring the target groups into the mainstream of development by making them self-reliant.
                <br /><br />
                The Department of Social Justice and Empowerment is the nodal Ministry for Welfare for Transgender Persons. The Ministry enacted the Transgender Persons (Protection of Rights) Act, 2019, and the provisions of the same came into force on 10.01.2020. The Ministry has also prepared “The Transgender Persons (Protection of Rights) Rules, 2020” for effective implementation, notified in the Gazette of India on 29.09.2020. Further, as per the Act, the Ministry constituted the National Council for Transgender Persons on 21.08.2020.
              </p>
            </div>

            <div className="col-xl-12 col-lg-12 col-xs-12 pt-12">
              <h4 className="text_shadow">Who’s Who</h4>
              <p className="paragraph">
                The Ministry of Social Justice &amp; Empowerment, Government of India, is headed by Dr. Virendra Kumar, Hon'ble Union Minister and is ably assisted by two Ministers of State: Shri Ramdas Athawale and Shri B.L. Verma. Shri Amit Yadav is the Secretary of the Department of Social Justice &amp; Empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
