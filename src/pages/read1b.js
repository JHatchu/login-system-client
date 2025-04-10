import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import manual from "../docs/Manual_read1.pdf";
function Read1b() {
  return (
    <>
    <style>{`
    
    .container-read1b{
 padding-top: 200px;
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
<div class="container-read1b">
            
            

            <section class="aboutus-sec">
                <div class="container">
                    <div class="row">
            
                        <div class="col-md-12 col-lg-12 col-xs-12">
                            <div class="section-title aboutPart">
                                <h4 class="mt-20 mb-10 text_shadow">
            
                                    <span>
                                        Skill Development &amp; Training
                                    </span>
                                    &nbsp;&nbsp;&nbsp; <a href="https://pmdaksh.dosje.gov.in/student" class="moreBtn" target="_blank" role="link">Apply Now </a>
                                </h4>
                            </div>
                        </div>
                        <br></br>
                        <div class="col-md-9 col-lg-9 col-xs-12">
                            <div class="container-fluid mb-30">
                                <div class="row">
                                    <div class="col">
                                        <div id="carouselExampleIndicators" class="carousel slide carousel-fade">
                                            <ol class="carousel-indicators">
                                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
                                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></li>
                                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"></li>
                                            </ol>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/skill_development_school_1200x768.jpeg?size=690:388" class="img img-responsive" alt="1"></img>
                                                    <div class="carousel-caption d-md-block">
                                                        <h4 data-bs-animation="animated bounceInLeft">
                                                            “An investment in knowledge always pays the best interest”
                                                        </h4>
                                                        <h4 data-bs-animation="animated bounceInRight">- Benjamin Franklin</h4>
                                                        
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="https://media.istockphoto.com/id/637711198/photo/hand-with-marker-writing-skill-concept.jpg?s=612x612&w=0&k=20&c=Dq1KVhcx71mfFq36b8Ieaz-H9IKCdu9YdDSkY_5XfM4=" class="img img-responsive" alt="2"></img>
                                                    <div class="carousel-caption d-md-block">
                                                        <h4 data-bs-animation="animated bounceInUp">
                                                            “The beautiful thing about learning is that no one take it away from you”
                                                        </h4>
                                                        <h4 data-bs-animation="animated flipInX">- B.B King</h4>
                                                        
                                                    </div>
                                                </div>
                                           
                                              
                                            </div>
                                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="link" data-bs-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#carouselExampleIndicators" role="link" data-bs-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="section-title">
            
                                <ul class="nav nav-tabs">
                                    <li class="active"><a data-bs-toggle="tab" href="#home" role="link">About</a></li>
                                    <li><a data-bs-toggle="tab" href="#menu1" role="link">Objectives</a></li>
                                    <li><a data-bs-toggle="tab" href="#menu2" role="link">Eligibility</a></li>
                                    <li><a data-bs-toggle="tab" href="#menu3" role="link">Implementation</a></li>
                                    <li><a data-bs-toggle="tab" href="#menu4" role="link">Stipend</a></li>
                                    <li><a data-bs-toggle="tab" href="#menu5" role="link">User Manual</a></li>
                                </ul>
            
            
                                <div class="tab-content">
                                    <div id="home" class="tab-pane active">
            
                                        <br></br>
            
                                        
                                        <p class="paragraph">There are two types of skill development training programmes which would be:</p>
                                        <ul class="custom_ul">
            
            
                                            <li>
                                                <i class="fa fa-angle-double-right"></i> Short Term Training Programmes (200 hours to 600 hours and upto 6 months).
                                            </li>
                                            <li>
                                                <i class="fa fa-angle-double-right"></i> Long Term Training Programmes (5 months and above and usually up-to 1 year) (up to 1000 hours).
                                            </li>
            
            
                                        </ul>
            
            
                                    </div>
                                    <div id="menu1" class="tab-pane">
                                        <span><h4 class="mt-20 mb-10">Objectives</h4></span>
                                        <p class="text-justify paragraph">
                                            The main purpose is to provide employment opportunities to the person belonging to transgender person community by providing them market-oriented skills. Areas for imparting skill training have been chosen after careful consideration by the training partners and also based on the national consultations done with the Transgender community. The skills so imparted are expected to be a means to provide ample scope for employment with dignity to the transgender beneficiary.
                                        </p>
            
                                    </div>
                                    <div id="menu2" class="tab-pane">
                                        <span><h4 class="mt-20 mb-10">Target group and eligibility criteria </h4></span>
                                        <p class="paragraph">The Transgender persons will be selected as per criteria indicated below:- </p>
                                        <ul class="custom_ul">
                                            <li>
                                                <i class="fa fa-angle-double-right"></i> Transgender persons having a valid Transgender certificate &amp; Identity card issued by the National portal for Transgender persons would be automatically eligible to attend the skill development training of their choice on priority.
                                            </li>
                                            <li>
                                                <i class="fa fa-angle-double-right"></i> The beneficiaries should belong to the Transgender community as notified by the Government of India.
                                            </li>
                                            <li>
            
                                                <i class="fa fa-angle-double-right"></i> The Beneficiary shall mandatorily hold a Transgender Certificate issued by the National Portal for Transgender Persons, Ministry of Social Justice &amp; Empowerment. <strong>
                                                    <a href="https://transgender.dosje.gov.in/" role="link">https://transgender.dosje.gov.in/
                                                </a></strong>
            
                                            </li>
                                            <li>
                                                <i class="fa fa-angle-double-right"></i> The beneficiaries should not be receiving such benefits from any other Centre/ State scheme.
                                            </li>
                                            <li>
                                                <i class="fa fa-angle-double-right"></i> There is no income criterion for selection in the skill development programme.
                                            </li>
            
                                            <li>
                                                <i class="fa fa-angle-double-right"></i> Transgender persons between the ages of 18-45 years are eligible for undergoing skill development training programmes.
                                            </li>
            
                                            <li>
                                                <i class="fa fa-angle-double-right"></i> The skill development training programmes for the target group are free of cost.
                                            </li>
            
                                        </ul>
            
                                    </div>
                                    <div id="menu3" class="tab-pane">
                                        <span><h4 class="mt-20 mb-10">Mode of Implementation</h4></span>
                                        <ul class="custom_ul">
                                            <li>
                                                <i class="fa fa-angle-double-right"></i>  Skill development shall be provided in the form of Short term courses as stipulated in National Occupational Standards (NOS), long term courses and Recognition of Prior Learning (RPL).
                                            </li>
                                            <li>
                                                <i class="fa fa-angle-double-right"></i>andidates are eligible to undergo training under skill development training programme only once and can participate only in one skill development training programme.
                                            </li>
                                            <li>
                                                <i class="fa fa-angle-double-right"></i> The interested candidate shall apply using their unique Transgender Person’s certificate (https://transgender.dosje.gov.in/) number from the National Portal for Transgender persons to avail this benefit.
                                            </li>
            
                                            <li>
                                                <i class="fa fa-angle-double-right"></i> Interested transgender candidates can find the link to register on their login credentials under the "Skill Training" tab of their user dashboard on the National Portal for Transgender Persons.
                                            </li>
                                            <li>
                                                <i class="fa fa-angle-double-right"></i> After selection of courses by the candidate as per their interest area, the candidate will be enrolled in the courses for skill development and allotted a batch.
                                            </li>
                                            <li>
                                                <i class="fa fa-angle-double-right"></i> On allotment of the batch the transgender candidate has to go to the training institute &amp; after minimal formalities, Candidate will undergo a psychometric test (The test is used to measure an individual's' mental capabilities and behaviour. They are designed to show your overall suitability for a particular role based on how you perform. They show your personality characteristics and aptitude/cognitive ability.) to assess which programme would be most suitable based on the candidates calibre. Passing the psychometric test is a mandatory criteria for the Transgender persons to be enrolled in the course/Batch.
                                            </li>
                                            <li>
                                                <i class="fa fa-angle-double-right"></i> Each candidate shall provide live attendance (80%) which will be a crucial factor to get stipend and certificate of course completion.
                                            </li>
                                            <li>
                                                <i class="fa fa-angle-double-right"></i> The candidate after successfully completing their course shall be eligible for placement, the institution shall take follow-ups with the candidate to ensure non-discrimination of transgender persons in workplaces.
                                            </li>
            
                                            <li>
                                                <i class="fa fa-angle-double-right"></i> The trainees shall also be provided assistance/facilitated for wage/self-employment by the Training Institutions.
                                            </li>
                                        </ul>
            
                                    </div>
                                    <div id="menu4" class="tab-pane">
            
                                        <span><h4 class="mt-20 mb-10">Stipend</h4></span>
            
                                        <p class="text-justify paragraph">
                                            Training free of cost for the trainees, 100% grants to be provided by the Ministry of Social Justice &amp; Empowerment, government of India.
                                            Stipend at Rs. 1000 per month per trainee in case of Non-residential training &amp; post placement assistance shall be provided to the transgender candidate based on achievement of 80% attendance in the skill training programme.
                                        </p>
                                    </div>
                                    <div id="menu5" class="tab-pane">
                                        <span><h4 class="mt-20 mb-10">User Manual for Registration</h4></span>
                                        <p class="text-justify paragraph">Applicants can navigate through the user manual to register themselves for the skill training &amp; Development.</p>
            
                                        <a href={manual} target="_blank" role="link"><i class="fa fa-arrow-circle-right"></i>Click here to download User Manual</a>
                                    </div>
                                </div>
                            </div>
            
            
                        </div>
                        <div class="col-lg-3 col-xs-12">
                            <aside class="sideMenu">
                                <h3>Smile</h3>
                                <ul>
                                    <li class="">
                                        <a href="/read1" role="link"><i class="fa fa-arrow-circle-right"></i>Certificates &amp; Identity Cards</a>
                                    </li>
                                    <li class="active">
                                        <a href="/read1a" role="link"><i class="fa fa-arrow-circle-right"></i>Scholarships </a>
                                    </li>
                                    <li class="">
                                        <a href="/read1b" role="link"><i class="fa fa-arrow-circle-right"></i> Skill Development &amp; Training</a>
                                    </li>
                                    <li class="">
                                        <a href="/read1c" role="link"><i class="fa fa-arrow-circle-right"></i> Composite Medical Health</a>
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
}export default Read1b;