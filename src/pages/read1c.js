import React from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import * as bootstrap from 'bootstrap';
function Read1c() {
    useEffect(() => {
        const tabs = document.querySelectorAll('.nav-tabs a');
        tabs.forEach(tab => {
          tab.addEventListener('click', function (e) {
            e.preventDefault();
            const tabTrigger = new bootstrap.Tab(this);
            tabTrigger.show();
          });
        });
    
        // Cleanup to prevent memory leaks
        return () => {
          tabs.forEach(tab => {
            tab.removeEventListener('click', () => {});
          });
        };
      }, []); 
  return (
   <>
    <style>{`
    
    .container-read1c{
 padding-top: 200px;
    min_height: 100vh;
   
    overflow-y: auto;}
.tab-content {
    padding: 20px;
min_height: 100vh;
   
    overflow-y: auto;}

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

  @media (max-width: 768px) {
    .sideMenu {
      margin-bottom: 20px;
    }
  }
    
    
    
    `}

    </style>
   <div className="container-read1c">
            
            


            <section className="aboutus-sec">
                <div className="container">
                    <div className="row">
            
                        <div className="col-md-12 col-lg-12 col-xs-12 ">
                            <div className="section-title aboutPart">
                                <h4 className="mt-20 mb-10 text_shadow">
                                    <span>Medical Health </span>
                                    
                                </h4>
                            </div>
                        </div>
                        <br></br>
                        <div className="col-md-9 col-lg-9 col-xs-12 ">
                            <div className="container-fluid mb-30">
                                <div className="row">
                                    <div className="col">
                                      
                                        <div id="carouselExampleIndicators" className="carousel slide carousel-fade">
                                            <ol className="carousel-indicators">
                                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
                                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></li>
                                            </ol>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src="https://img.freepik.com/premium-photo/composite-image-background-with-medical-sign_1134-16202.jpg" className="img img-responsive" alt="1"></img>
                                                    <div className="carousel-caption d-md-block">
                                                        <h4 data-bs-animation="animated bounceInLeft">
                                                            “When things change inside you,
                                                        </h4>
                                                        <h4 data-bs-animation="animated bounceInRight">things change around you.”</h4>
                                                        
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="https://img.freepik.com/premium-photo/digital-illustartion-doctor-medical-icons-background-medicine-public-health-pandemic-coronavirus-covid-19-outbreak-concept-digital-composite_1134-40696.jpg" className="img img-responsive" alt="2"></img>
                                                    <div className="carousel-caption d-md-block">
                                                        <h4 data-bs-animation="animated bounceInUp">
                                                            “Everyone you meet is fighting a battle you know nothing about,
                                                        </h4>
                                                        <h4 data-bs-animation="animated flipInX"> be kind. Always.”</h4>
                                                        
                                                    </div>
                                                </div>
                                             
                                            </div>
                                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="link" data-bs-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a> <a className="carousel-control-next" href="#carouselExampleIndicators" role="link" data-bs-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-title">
                                <ul className="nav nav-tabs">
                                    <li className="active"><a data-bs-toggle="tab" href="#home" role="link">About (Objectives) </a></li>
                                    <li><a data-bs-toggle="tab" href="#menu1" role="link">Eligibility   </a></li>
                                    <li><a data-bs-toggle="tab" href="#menu2" role="link">Scope  </a></li>
                                    <li><a data-bs-toggle="tab" href="#menu3" role="link">Implementation  </a></li>
                                </ul>
            
                                <div className="tab-content">
                                    <div id="home" className="tab-pane active">
                                        <br></br>
                                        <p className="text-justify paragraph">
                                            The objective of the scheme is to provide health Insurance coverage to all Transgender persons living in India to improve their health condition through proper treatment including sex re-assignment surgeries as well as medical support. The scheme would cover all Transgender persons not receiving such benefits from other centre/state sponsored schemes.
                                        </p>
            
                                    </div>
                                    <div id="menu1" className="tab-pane">
                                        <h4 className="mt-20 mb-10">Target group and eligibility criteria </h4>
                                        <span></span>
                                        <p className="text-justify paragraph"> The Transgender persons will be selected as per criteria indicated below:-  </p>
                                        <ul className="custom_ul">
                                            <li>
                                                <i className="fa fa-angle-double-right"></i> The beneficiary should be a Transgender person as notified by Government of India holding a Transgender Certificate &amp; Identity Card issued by the National Portal for Transgender Persons.
                                            </li>
                                            <li>
                                                <i className="fa fa-angle-double-right"></i> The beneficiary should not be availing similar benefits from any other schemes of Centre or state government.
                                            </li>
                                        </ul>
            
                                    </div>
            
            
            
            
                                    <div id="menu2" className="tab-pane">
                                        <h4 className="mt-20 mb-10">Scope</h4>
                                        <span></span>
                                        <ul className="custom_ul">
                                            <li>
                                                <i className="fa fa-angle-double-right"></i>  Health insurance in the form of Ayushman Bharat TG Plus shall be available for Transgender persons inclusive of gender reaafirmation surgery in the health benefit package under Ayushman Bharat Yojana. Each transgender person shall receive an insurance cover of Rs. 5 Lakh per year under the scheme.
                                            </li>
                                            <li>
                                                <i className="fa fa-angle-double-right"></i> The Comprehensive Package would cover all aspects of transition related healthcare for Transgender persons. It shall also (not exhaustive) provide coverage for hormone therapy, Sex Re-assignment surgery inclusive of post operation formalities which can be redeemed at all private and government healthcare facilities.
                                            </li>
                                            <li>
                                                <i className="fa fa-angle-double-right"></i> Those Transgender persons who have already received their certificates from the National portal for Transgender persons would be automatically eligible to receive the insurance.
                                            </li>
                                        </ul>
            
                                    </div>
                                    <div id="menu3" className="tab-pane">
                                        <h4 className="mt-20 mb-10">Implementation protocol</h4>
                                        <span></span>
                                        <p className="text-justify paragraph">Transgender person certificate issued by the portal is a mandatory document to avail the health insurance package. </p>
                                        <ul className="custom_ul">
                                            <li>
                                                <i className="fa fa-angle-double-right"></i> The beneficiary possessing the registration ID/Transgender person’s certificate serial number from the National Portal for Transgender persons would be authorised to access and avail the benefits of the composite medical health package.
                                            </li>
            
                                            <li>
                                                <i className="fa fa-angle-double-right"></i> The Transgender beneficiary/applicant possessing the Transgender certificate from the National Portal can visit the empanelled hospital/CSE and get their details entered/verified on a real time basis following the current BIS procedure of PMJAY beneficiaries.
                                            </li>
                                            <li>
                                                <i className="fa fa-angle-double-right"></i> Such Transgender persons not having a transgender certificate issued by the National portal shall be redirected to the website to obtain the certificate so as to become eligible for the Ayushman Transgender health package.
                                            </li>
            
                                            <li>
                                                <i className="fa fa-angle-double-right"></i> After the verification process of the Transgender certificate, the eligible applicant will be issued with the Ayushman Transgender Health card.
                                            </li>
                                        </ul>
            
                                    </div>
                                </div>
            
                            </div>
                        </div>
                        <div className="col-lg-3 col-xs-12">
                            <aside className="sideMenu">
                                <h3>Smile</h3>
                                <ul>
                                    <li className="">
                                        <a href="/read1" role="link"><i className="fa fa-arrow-circle-right"></i>Certificates &amp; Identity Cards</a>
                                    </li>
                                    <li className="active">
                                        <a href="/read1a" role="link"><i className="fa fa-arrow-circle-right"></i>Scholarships </a>
                                    </li>
                                    <li className="">
                                        <a href="/read1b" role="link"><i className="fa fa-arrow-circle-right"></i> Skill Development &amp; Training</a>
                                    </li>
                                    <li className="">
                                        <a href="/read1c" role="link"><i className="fa fa-arrow-circle-right"></i> Composite Medical Health</a>
                                    </li>
                                    
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
            
           
            
            
                        
                    </div>
   </>
  );
} export default Read1c;