import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './read1a.css';
import manual from "../docs/Manual_read1.pdf";
function Read1a() {
  return (
    <>
    <style>
      {` 
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


      .container {
      padding-top:1000px;
      min-height: 100vh;
      overflow-y: auto;
      
      }
      .html {
  scroll-padding-top: 100px; /* adjust based on your header height */
   scroll-behavior: smooth;
}
   .tab-content{
    padding-top:100px;
      min-height: 100vh;
      overflow-y: auto;
   }
      #menu2{
       padding-top:1000px;
      min-height: 100vh;
      overflow-y: auto;
      }
      
      
      
      
      
      
      `}
      </style>
<div class="container">       
             <section class="aboutus-sec">
            
                <div class="row">
            
                    <div class="col-md-12 col-lg-12 col-xs-12">
                        <div class="section-title aboutPart">
                            <h4 class="mt-20 mb-10 text_shadow">
                                <span>Scholarships</span>
                                &nbsp;&nbsp;&nbsp; <a href="https://transgender.dosje.gov.in/Applicant/Login/Index" class="moreBtn" target="_blank" role="link">Apply Now </a>
                            </h4>
                        </div>
                    </div>
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
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src="https://static.toiimg.com/thumb/msid-97635665,width-1070,height-580,imgsize-60746,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" class="img img-responsive" alt="1"></img>
                                                <div class="carousel-caption d-md-block">
                                                    <h4 data-bs-animation="animated bounceInLeft">
                                                        “Education is the most powerful weapon which you can use to change the world”
                                                    </h4>
                                                    <h4 data-bs-animation="animated bounceInRight">- Nelson Mandela</h4>
                                                    
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <img src="https://th.bing.com/th/id/OIP.Gce4ReeX9imy7tq23xyy9AHaFk?w=229&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="img img-responsive" alt="2"></img>
                                                <div class="carousel-caption d-md-block">
                                                    <h4 data-bs-animation="animated bounceInUp">
                                                        “You can never be overdressed or overeducated.”
                                                    </h4>
                                                    <h4 data-bs-animation="animated flipInX"> - Oscar Wilde</h4>
                                                    
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
                                <li className="active"><a data-bs-toggle="tab" href="#home" role="link">About </a></li>
                                <li><a data-bs-toggle="tab" href="#menu1" role="link">Objectives  </a></li>
                               
                                <li><a data-bs-toggle="tab" href="#menu3" role="link">Duration &amp; Renewal </a></li>
                                <li><a href="/eligibility" role="link">Eligibility</a></li>
                                
                                <li><a data-bs-toggle="tab" href="#menu5" role="link">Scholarship Amount</a></li>
                                <li><a data-bs-toggle="tab" href="#menu6" role="link">Terms &amp; Conditions</a></li>
                                <li><a data-bs-toggle="tab" href="#menu7" role="link">User Manual</a></li>
            
                            </ul>
            
            
                            <div class="tab-content">
                                <div id="home" class="tab-pane active">
                                    <br></br>
                                    <p class="text-justify paragraph">
                                        The Ministry of Social Justice &amp; Empowerment is providing scholarships studies in India to Transgender students studying in classes IX and above to provide financial assistance to the Transgender students studying in classes IX and X, and at post matriculation or post-secondary stage and beyond that till post-graduation to reduce the incidence of drop-out and aid the transition from the elementary to the secondary stage is provided through an automated online system for transgender students using a single login credential (remains same for availing all the services on the portal).
                                    </p>
                                    <h5><strong>Four Scholarship categories are available: </strong></h5>
                                    <ul class="custom_ul">
                                        <li>
            
                                            <i class="fa fa-angle-double-right"></i> Scholarships for secondary school (9th &amp; 10th) Transgender students.
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> Scholarships for senior secondary (11th &amp; 12th) education.
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> Scholarships for students (Undergraduate/Diploma).
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> Scholarships for students (Post-graduation).
                                        </li>
                                    </ul>
            
                                </div>
                                <div id="menu1" class="tab-pane">
                                    <br></br>
                                    <ul class="custom_ul">
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> The objective is to provide financial assistance to the Transgender students studying in IX and above to enable them to complete their education.
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> To support Transgender students to study further in order to prepare themselves to earn their livelihood and to find a dignified place for themselves in the society as they face several barriers physical, financial, psychological, mental in pursuing studies and living with dignity. At times such students are deprived of harnessing their latent skills and thereby miss the opportunity.
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> The scholarship shall be awarded to students studying in a government or private higher secondary school/college/university, including such residential institutes of the Government and eligible private institutes selected and notified in a transparent manner by the State Government/Union Territory Administration concerned. It will also cover technical and vocational courses in Industrial Training Institutes/ Industrial Training Centres affiliated with the National Council for Vocational Training (NCVT) of classes XI and XII level including Polytechnics and other courses (any course of less than one year duration is not covered under this scheme; Certificate courses are also not covered.
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> All Graduate Degree &amp; Post-graduate degree/Diploma courses recognised by UGC/ AICTE shall all be covered.
                                        </li>
                                    </ul>
            
                                </div>
                                {/* <div id="menu2" class="tab-pane">
                                    <br></br>
                                    <h4>Eligibility Criteria</h4>
                                    <ul class="custom_ul">
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> The student should have a Transgender Certificate issued through the National Portal for Transgender person of the Ministry of Social Justice &amp; Empowerment
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i>The scholarships are open to Indian Nationals only.
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> The candidate should not be receiving any other central or state government funded Pre-Matric/Post-matric Scholarship. No scholarship will be paid to the students under this scheme from the date they accept another scholarship/stipend. The candidate can however, accept free lodging or a grant or ad-hoc monetary help from the State Government or any other source for the purchase of books, equipment or for meeting the expenses on board and lodging in addition to the scholarship amount paid under this scheme
                                        </li>
                                    </ul>
            
                                    <span><h4 class="mt-20 mb-10">Criteria of selection for scholarship</h4></span>
                                    <ul class="custom_ul">
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> All eligible candidates identifying as Transgender Person will be considered forscholarship. As the number of scholarships for Transgender persons available in a year is fixed and limited, the selection of application would be on the basis of total marks achieved in the previous academic year as reflected in the marksheet.
                                        </li>
            
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> In case of the same merit, preference shall be generated from ‘Date of Birth’ criteria of the applicant (senior is preferred) and based on the availability of the slots.
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> In the Scholarship, students applying for Post Matric shall be given preference over Pre-Matric Scholarship.
                                        </li>
            
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> The list of selected candidates would be displayed on the portal at a specified date considering, inter alia, the number of slots available for the scholarship.
                                        </li>
                                    </ul>
            
                                    <span><h4 class="mt-20 mb-10">Conditions for Scholarships for secondary school (IX &amp; X) Transgender students including (I &amp; II)</h4></span>
                                    <ul class="custom_ul">
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> The candidate should be a regular, full time student studying in a Government School or in a School recognized by Government or a Central/State Board of secondary education.
                                        </li>
            
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> Migration of students from one school/institute to another, the student shall submit a certificate from the competent authority, in this case the institution.
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> Scholarships for studying in any class will be available for only one year. If a student has to repeat a class, the candidate would not get a scholarship for that class for a second (or subsequent) year.
                                        </li>
                                    </ul>
            
                                    <span><h4 class="mt-20 mb-10">Conditions for Scholarships for senior secondary school (XI &amp; XII) Transgender students including (I &amp; II)</h4></span>
                                    <ul class="custom_ul">
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> The candidate should be a regular, full time student studying in a Government School or in a School recognized by Government or a Central/State Board of secondary education.
                                        </li>
            
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> Migration of students from one school/institute to another, the student shall submit a certificate from the competent authority, in this case the institution.
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> Scholarships for studying in any class will be available for only one year. If a student has to repeat a class, the candidate would not get a scholarship for that class for a second (or subsequent) year.
                                        </li>
                                    </ul>
            
                                    <span><h4 class="mt-20 mb-10">Conditions for Scholarship for students (Under-graduate/Diploma) including (I &amp; II)</h4></span>
                                    <ul class="custom_ul">
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> These scholarships will be given for the study of all recognized post-matriculation or post-secondary courses pursued in recognized institutions.
                                        </li>
            
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> Students, who pursue their studies through correspondence courses are also eligible.
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> The term correspondence includes distant and continuing education recognised by the Ministry of Education or state government.
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> Candidates who after passing one stage of education or studying in the same stage of education in a different subject e.g. B.Com after B.A or M.A in one subject after M.A in other subjects will not be eligible. However, students pursuing L.L.B/B.Ed/B.El.Ed. after passing B.A./B.Sc./B.E. etc. are eligible under the scholarships for students (Post-graduate) under this scheme.
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> All Postgraduate degrees recognised by UGC/ AICTE shall all be covered.
                                        </li>
                                    </ul>
            
                                    <span><h4 class="mt-20 mb-10">Conditions for Scholarship for students (Post-graduate) including (I &amp; II)</h4></span>
                                    <ul class="custom_ul">
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> These scholarships will be given for the study of all recognized post-matriculation or post-secondary courses pursued in recognized institutions.
                                        </li>
            
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> Students, who pursue their studies through correspondence courses are also eligible
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> The term correspondence includes distant and continuing education recognised by the Ministry of Education or state government.
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> Students, who pursue their studies through correspondence courses are also eligible
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> All Under-graduate Degree &amp; Diploma courses recognised by UGC/ AICTE shall all be covered.
                                        </li>
                                    </ul>
            
            
                                </div> */}
                                <div id="menu3" class="tab-pane">
                                    <span><h4 class="mt-20 mb-10">Duration and Renewal of Awards</h4></span>
                                    <ul class="custom_ul">
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> Scholarship shall be given in bulk once every academic year.
                                        </li>
            
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> The award once made will continue subject to good conduct and regularity in attendance.
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> If the number of applicants is more than the slots available, then those who didn’t receive the scholarship for a particular academic year for which they had applied will be prioritised for the successive academic year in the next financial cycle based on submission of application form and marksheet.
                                        </li>
                                    </ul>
                                    <p class="paragraph">Following copies of documents have to be kept ready while applying for fresh scholarship: </p>
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Sr No.</th>
                                                <th scope="col">Fresh Application for Scholarship</th>
                                                <th scope="col">Renewal of scholarship</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Self attested passport size photograph of the student</td>
                                                <td>Certificate of previous academic score not less than qualifying marks attested by institute.</td>
                                            </tr>
            
                                            <tr>
                                                <td>2</td>
                                                <td>Transgender Identity  Certificate issued through National portal for transgender person of the Ministry of Social Justice &amp; Empowerment. </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>A declaration by the parents/guardians, stating that their ward is not availing such scholarship in any other scheme of Centre/ State Government for education.</td>
                                                <td></td>
            
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Certificate of previous academic year’s mark sheet attested by Institute.</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Self attested copy of Aadhar Card</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>Transfer certificate in case the student has migrated to another. </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Institute verification form duly attested by the school/college/institute.</td>
                                                <td></td>
                                            </tr>
            
                                        </tbody>
                                    </table>
            
                                </div>
                                <div id="menu4" class="tab-pane">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th colspan="2" align="center"  style={{paddingLeft: "324px"}}>Timeline for Scholarships!</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Receiving Applications from Transgender Persons on the portal</strong></td>
                                                <td>15th March 2022 to 30th June 2022</td>
                                            </tr>
            
                                            <tr>
                                                <td><strong>Correction window for students</strong></td>
                                                <td>1st July 2022 to 10th July 2022</td>
                                            </tr>
            
                                            <tr>
                                                <td><strong>Declaration of list of awardees</strong></td>
                                                <td>20th July 2022</td>
                                            </tr>
            
                                            <tr>
                                                <td><strong>Disbursement of Scholarships </strong></td>
                                                <td>15th August 2022</td>
                                            </tr>
            
            
            
            
                                        </tbody>
                                    </table>
            
                                </div>
            
            
                                <div id="menu5" class="tab-pane">
                                    <br></br>
                                    <ul class="custom_ul">
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> (a) A sum of Rs. 13,500 shall be given as post-matric / pre-matric scholarship to eligible transgender students.
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> (b) Students shall be encouraged to have Aadhar linked bank account to facilitate payments through Aadhar Payment Bridge while applying for the scholarship which should have the same name as stipulated in the transgender certificate issued through the National Portal for Transgender person of the Ministry of Social Justice &amp; Empowerment.
            
                                        </li>
            
                                    </ul>
            
                                </div>
            
            
                                <div id="menu6" class="tab-pane">
                                    <br></br>
                                    <ul class="custom_ul">
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> (a) The scholarship is dependent on the satisfactory progress and conduct of the Transgender student.  If it is reported by the Head of the Institution/School at any time that the student has by reasons of their own act of default failed to make satisfactory progress or has been guilty of misconduct such as resorting to or participating in strikes, irregularity in attendance without the permission of the authorities concerned etc. The authority sanctioning the scholarship may either cancel the scholarship or stop or withhold further payment for such a period as it may dream fit.
            
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> (b) If a student violates school discipline or any other terms and conditions of the scholarship, scholarship may be suspended or cancelled.
            
            
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> (c) If a student is found to have obtained a scholarship by false statement, his/her scholarship will be cancelled forthwith and the amount of the scholarship already paid will be recovered by the Ministry along with penal interest as per applicable rules. The student concerned will be blacklisted and debarred for future scholarship in any scheme forever.
            
            
            
                                        </li>
                                        <li>
                                            <i class="fa fa-angle-double-right"></i> (d) A transgender student is liable to refund the scholarship amount, if during the course of the year, the studies for which the scholarship has been awarded, is discontinued by the student.
            
            
            
                                        </li>
            
                                    </ul>
            
                                </div>
            
                                <div id="menu7" class="tab-pane">
                                    <span><h4 class="mt-20 mb-10">User Manual for Scholarships</h4></span>
                                    <p class="text-justify paragraph">Applicants can navigate through the user manual to apply themselves for the Scholarships.</p>
            
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
            
            </section>         
            </div>
                        </>
  );
}
export default Read1a;