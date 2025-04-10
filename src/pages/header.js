import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling

function Header() {
    return (
        <>
            <div className="topHeader">
                <div className="header-right">
                    <div className="top_links">
                        <ul>
                            <li><Link to="/Applicant/Registration/WhatsNew">What's New</Link></li>
                            <li><Link to="/Applicant/Registration/Guidelines">Guidelines</Link></li>
                            <li><Link to="/Applicant/Registration/NCTP">NCTP</Link></li>
                            <li><Link to="/Applicant/Registration/RTI">RTI</Link></li>
                           
                            <li><Link to="/Applicant/Registration/IECMaterial">IEC Material</Link></li>
                           
                           
                           
                            <li><Link to="/Applicant/Registration/Publications">Publications</Link></li>
                            <li><Link to="/Applicant/Registration/Downloads">Downloads</Link></li>
                            <li><Link to="/Applicant/FAQ/Index">FAQ</Link></li>
                            <li>
                                <select id="ddlLanguage" name="language">
                                    <option value="">Select Language</option>
                                    <option value="en">English</option>
                                    <option value="hi">Hindi</option>
                                    <option value="gu">Gujarati</option>
                                    <option value="ml">Malayalam</option>
                                    <option value="bn">Bengali</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Image Strip */}
                <div className="header-strip">
                    <img
                        src="https://www.pixel4k.com/wp-content/uploads/2018/10/abstract-low-poly-3d_1539371108.jpg"
                        alt="Decorative Header Strip"
                        className="strip-image"
                    />
                </div>

                {/* Main Menu */}
                <section className="mainMenu">
                    <nav className="custom-navbar" role="navigation">
                        <div className="custom-navbar-collapse" id="main-menu">
                            <ul className="custom-nav custom-navbar-nav">
                                <li className="active"><a href="/home">Home</a></li>
                                <li><a href="/Applicant/Registration/AboutUS">About Us</a></li>
                                <li><a href="https://transgender.dosje.gov.in/Applicant/Login/Index">Applicant Login</a></li>
                                <li><a href="https://transgender.dosje.gov.in/Applicant/Registration/Index">Registration</a></li>
                              
                            </ul>
                        </div>
                    </nav>
                </section>
            </div>

            {/* Scoped Styles */}
            {/* <style>{`
            body, html {
                  margin: 0;
                      padding: 0;
                         }
                .topHeader {
                position: relative;
            
                    background-color: #002147;
                    color: white;
                   
                    width: 100vw;
                    overflow: hidden;
                }

                .top_links ul {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 20px;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .top_links ul li a {
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 14px;
                    padding: 8px 12px;
                    transition: color 0.3s ease;
                }

                .top_links ul li a:hover {
                    color: #87cefa;
                }

                #ddlLanguage {
                    padding: 3px 5px;
                    font-size: 14px;
                    border-radius: 4px;
                }

                .header-strip {
                    background-color: #e6f2ff;
                }

                .strip-image {
                    width: 100%;
                    height: 80px;
                    object-fit: cover;
                }

                .mainMenu {
                    background-color: #003366;
                 
                    width: 100vw;
                }

                // .navbar {
                //     background: none;
                //     border: none;
                //     box-shadow: none;
                // }

                .navbar-collapse {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .navbar-nav {
                    display: flex;
                    flex-wrap: wrap;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .navbar-nav > li > a {
                    color: white !important;
                    font-weight: 500;
                    padding: 12px 20px;
                    display: block;
                    text-decoration: none;
                    transition: background-color 0.3s ease;
                }

                .navbar-nav > li > a:hover {
                    background-color: #0059b3;
                    color: #fff !important;
                }
            `}</style> */}
        </>
    );
}

export default Header;
//





// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css'; // Import the CSS file for styling

// function Header() {
//     return (
//         <div className="topHeader">
//             <div className="container">
//                 <div className="header-right">
//                     <div className="top_links">
//                         <ul>
//                             <li><Link to="/Applicant/Registration/WhatsNew">What's New</Link></li>
//                             <li><Link to="/Applicant/Registration/Guidelines">Guidelines</Link></li>
//                             <li><Link to="/Applicant/Registration/NCTP">NCTP</Link></li>
//                             <li><Link to="/Applicant/Registration/RTI">RTI</Link></li>
//                             <li><Link to="/Applicant/Registration/CPGRAMS">CPGRAMS</Link></li>
//                             <li><Link to="/Applicant/Registration/IECMaterial">IEC Material</Link></li>
//                             <li><Link to="/Applicant/Registration/ParliamentBusiness">Parliament Business</Link></li>
//                             <li><Link to="/Applicant/Registration/Activity_Video">Video</Link></li>
//                             <li><Link to="/Applicant/Registration/Gallery">Gallery</Link></li>
//                             <li><Link to="/Applicant/Registration/Publications">Publications</Link></li>
//                             <li><Link to="/Applicant/Registration/Downloads">Downloads</Link></li>
//                             <li><Link to="/Applicant/FAQ/Index">FAQ</Link></li>
//                             <li>
//                                 <select id="ddlLanguage" name="language">
//                                     <option value="">Select Language</option>
//                                     <option value="en">English</option>
//                                     <option value="hi">Hindi</option>
//                                     <option value="gu">Gujarati</option>
//                                     <option value="ml">Malayalam</option>
//                                     <option value="bn">Bengali</option>
//                                 </select>
//                             </li>
//                             <li><a href="#" className="decreaseFont">A<sup>-</sup></a></li>
//                             <li><a href="#" className="resetFont">A</a></li>
//                             <li><a href="#" className="increaseFont">A<sup>+</sup></a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Header;
