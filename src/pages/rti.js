// import React from "react";
// import rti1 from "../docs/RTI1.pdf";
// import rti2 from "../docs/RTI2.pdf";
// import rti3 from "../docs/RTI3.pdf";
// import rti4 from "../docs/RTI4.pdf";
// import rti5 from "../docs/RTI5.pdf";

// function RTI() {
//   return (
//     <>
//       <style>{`
//         .rti-container {
//           margin-top: 100px;
//           margin-bottom: 50px;
//         }

//         .section-title {
//           font-weight: 700;
//           font-size: 28px;
//           margin-bottom: 30px;
//           color: #2c3e50;
//         }

//         .section-subtitle {
//           font-weight: 600;
//           font-size: 20px;
//           color: #0d6efd;
//           margin-top: 30px;
//         }

//         .rti-link {
//           font-size: 16px;
//           color: #0d6efd;
//           text-decoration: none;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin: 10px 0;
//         }

//         .rti-link:hover {
//           text-decoration: underline;
//         }

//         .info-paragraph {
//           font-size: 15px;
//           color: #444;
//           margin-top: 15px;
//           line-height: 1.6;
//         }

//         .contact-card {
//           background-color: #f8f9fa;
//           border: 1px solid #dee2e6;
//           padding: 20px;
//           border-radius: 12px;
//           margin-bottom: 20px;
//         }

//         .contact-card h6 {
//           font-weight: 700;
//           margin-bottom: 10px;
//         }

//         .contact-card p {
//           margin: 0;
//           font-size: 14px;
//         }

//         .icon {
//           margin-right: 8px;
//           color: #0d6efd;
//         }

//         @media (max-width: 768px) {
//           .rti-container {
//             padding: 0 15px;
//           }
//         }
//       `}</style>

//       <div className="container rti-container">
//         <div className="row">
//           {/* Left: Info Section */}
//           <div className="col-md-7">
//             <h2 className="section-title">Right to Information (RTI)</h2>

//             <h5 className="section-subtitle">Act / Rules</h5>
//             <a className="rti-link" href={rti1} target="_blank" rel="noreferrer">
//               <i className="fa fa-arrow-circle-right icon"></i> RTI ACT 2005
//             </a>
//             <a className="rti-link" href={rti2} target="_blank" rel="noreferrer">
//               <i className="fa fa-arrow-circle-right icon"></i> Information Handbook under Section 4(1)(b)
//             </a>

//             <h5 className="section-subtitle">First Appellate Authority and CPIOs</h5>
//             <a className="rti-link" href={rti3} target="_blank" rel="noreferrer">
//               <i className="fa fa-arrow-circle-right icon"></i> List of CPIOs and FAAs
//             </a>

//             <h5 className="section-subtitle">Seventeen Manuals Under RTI</h5>
//             <a className="rti-link" href={rti4} target="_blank" rel="noreferrer">
//               <i className="fa fa-arrow-circle-right icon"></i> Info Handbook under Section 4(1)(b)
//             </a>

//             <h5 className="section-subtitle">Annual Returns / Progress Reports</h5>
//             <a className="rti-link" href={rti5} target="_blank" rel="noreferrer">
//               <i className="fa fa-arrow-circle-right icon"></i> Annual Report 2019-20
//             </a>

//             <h5 className="section-subtitle">Braille Print of RTI Act (Press Note)</h5>
//             <p className="info-paragraph">
//               The Constitution of India ensures equality, freedom, justice and dignity of all individuals and implicitly mandates an inclusive society for all including persons with disabilities.
//               <br /><br />
//               The Ministry of Social Justice and Empowerment has translated the RTI Act into Braille for the benefit of persons with visual impairment. Copies may be obtained from:
//               <br /><br />
//               <b>National Institute for the Visually Handicapped</b><br />
//               116-Rajpur Road, Dehradun<br />
//               Phone: 0135-2744491, 2735341<br />
//               Fax: 0135-2748147
//             </p>
//           </div>

//           {/* Right: Contact Cards */}
//           <div className="col-md-5">
//             <div className="contact-card">
//               <h6>Rajeev Kumar</h6>
//               <p>Under Secretary (Transgender Division) & CPIO</p>
//               <p>Ministry of Social Justice & Empowerment</p>
//               <p>Room No.608, A-wing, Shastri Bhavan, New Delhi - 110001</p>
//               <p>
//                 <i className="fa fa-phone icon" /> 011-23385171
//               </p>
//               <p>
//                 <i className="fa fa-envelope icon" /> rajeev.swati@nic.in
//               </p>
//             </div>

//             <div className="contact-card">
//               <h6>Mayank Bhardwaj</h6>
//               <p>National Coordinator</p>
//               <p>Ministry of Social Justice & Empowerment</p>
//               <p>Shastri Bhavan, New Delhi - 110001</p>
//               <p>
//                 <i className="fa fa-phone icon" /> 011-23070095
//               </p>
//               <p>
//                 <i className="fa fa-envelope icon" /> mayank.b@gov.in
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default RTI;


import React from 'react';
import { Mail, Phone, ArrowRightCircle } from 'lucide-react';

const RTISection = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Right to Information (RTI)</h2>

      <div style={styles.layout}>
        {/* Left Section */}
        <div style={styles.left}>
          {/* Act / Rules */}
          <Section title="Act / Rules" links={[
            { text: 'RTI ACT 2005', url: '#' },
            { text: 'Information Handbook under Section 4(1)(b)', url: '#' }
          ]} />

          {/* CPIOs */}
          <Section title="First Appellate Authority and CPIOs" links={[
            { text: 'List of CPIOs and FAAs', url: '#' }
          ]} />

          {/* Manuals */}
          <Section title="Seventeen Manuals Under RTI" links={[
            { text: 'Info Handbook under Section 4(1)(b)', url: '#' }
          ]} />

          {/* Annual Reports */}
          <Section title="Annual Returns / Progress Reports" links={[
            { text: 'Annual Report 2019-20', url: '#' }
          ]} />

          {/* Braille Note */}
          <div style={{ marginTop: 30 }}>
            <h3 style={styles.subheading}>Braille Print of RTI Act (Press Note)</h3>
            <p style={styles.text}>
              The Constitution of India ensures equality, freedom, justice and dignity of all individuals and
              implicitly mandates an inclusive society for all including persons with disabilities.
            </p>
            <p style={styles.text}>
              The Ministry of Social Justice and Empowerment has translated the RTI Act into Braille for the
              benefit of persons with visual impairment. Copies may be obtained from:
            </p>
            <div style={styles.instituteBox}>
              <strong>National Institute for the Visually Handicapped</strong><br />
              116-Rajpur Road, Dehradun<br />
              Phone: 0135-2744491, 2735341<br />
              Fax: 0135-2748147
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div style={styles.right}>
          <ContactCard
            name="Rajeev Kumar"
            position="Under Secretary (Transgender Division) & CPIO"
            address="Room No.608, A-wing, Shastri Bhavan, New Delhi - 110001"
            phone="011-23385171"
            email="rajeev.swati@nic.in"
          />
          <ContactCard
            name="Mayank Bhardwaj"
            position="National Coordinator"
            address="Shastri Bhavan, New Delhi - 110001"
            phone="011-23070095"
            email="mayank.b@gov.in"
          />
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, links }) => (
  <div style={{ marginBottom: 25 }}>
    <h3 style={styles.subheading}>{title}</h3>
    <ul style={styles.linkList}>
      {links.map((link, idx) => (
        <li key={idx} style={styles.linkItem}>
          <ArrowRightCircle size={16} style={styles.icon} />
          <a href={link.url} style={styles.link}>{link.text}</a>
        </li>
      ))}
    </ul>
  </div>
);

const ContactCard = ({ name, position, address, phone, email }) => (
  <div style={styles.card}>
    <strong>{name}</strong>
    <p style={styles.cardText}>{position}</p>
    <p style={styles.cardText}>{address}</p>
    <p style={styles.cardText}><Phone size={14} style={styles.iconSmall} /> {phone}</p>
    <p style={styles.cardText}><Mail size={14} style={styles.iconSmall} /> {email}</p>
  </div>
);

const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: '#f9fafb',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '30px'
  },
  layout: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px'
  },
  left: {
    flex: '1 1 60%',
    minWidth: '300px'
  },
  right: {
    flex: '1 1 35%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    minWidth: '280px'
  },
  subheading: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#1d4ed8'
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.6',
    marginBottom: '12px'
  },
  linkList: {
    listStyle: 'none',
    paddingLeft: 0
  },
  linkItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px'
  },
  icon: {
    color: '#1d4ed8',
    marginRight: '6px'
  },
  iconSmall: {
    verticalAlign: 'middle',
    marginRight: '6px',
    color: '#4b5563'
  },
  link: {
    textDecoration: 'none',
    color: '#1f2937',
    fontSize: '14px',
    transition: 'color 0.2s',
    cursor: 'pointer'
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '16px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
    fontSize: '14px'
  },
  cardText: {
    margin: '6px 0',
    color: '#4b5563'
  },
  instituteBox: {
    marginTop: '12px',
    background: '#fff',
    padding: '12px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    fontSize: '14px'
  }
};

export default RTISection;
