import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./header";
import manual from "../docs/Manual_read1.pdf";
function Read1() {
  return (
    <>
        <Header />
        <style>
  {`
  .container{
  min_height: 100vh;
  padding-top: 70px;
  overflow-y:auto;}
    .aboutus-sec {
      padding-top: 480px;
      padding-bottom: 50px;
      min-height: 100vh;
      background-color: #f4f8fb;
    }

    .section-title h4 {
      font-weight: bold;
      color: #002147;
    }

    .carousel-item img {
      width: 100%;
      max-height: 400px;
      object-fit: cover;
      border-radius: 10px;
    }

    .carousel-caption h4 {
      color: white;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
      font-size: 1.25rem;
    }

    .nav-tabs .nav-link {
      color: #003366;
      font-weight: 500;
      border: none;
      border-radius: 0;
    }

    .nav-tabs .nav-link.active,
    .nav-tabs .nav-link:hover {
      background-color: #003366;
      color: #fff !important;
    }

    .paragraph {
      font-size: 16px;
      line-height: 1.6;
      color: #333;
    }

    .custom_ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .custom_ul li {
      margin-bottom: 10px;
      font-size: 15px;
    }

    .custom_ul li i {
      color: #0056b3;
      margin-right: 8px;
    }

    
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
    /* Responsive Tweaks */
    @media (max-width: 768px) {
      .aboutus-sec {
        padding-top: 200px;
      }

      .carousel-caption h4 {
        font-size: 1rem;
      }

      .sideMenu {
        margin-top: 20px;
      }
    }
  `}
</style>


      <div className="container">
        <section className="aboutus-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title aboutPart">
                  <h4>
                    <span>Certificates &amp; Identity Cards</span>&nbsp;&nbsp;&nbsp;
                    <a
                      href="https://transgender.dosje.gov.in/Applicant/Login/Index"
                      className="btn btn-primary btn-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Apply Now
                    </a>
                  </h4>
                </div>
              </div>

              {/* Carousel */}
              <div className="col-md-9">
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://th.bing.com/th/id/OIP.c00WNN9SHVDEfZ14fwI2CAHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="d-block w-100" alt="Slide 1" />
                      <div className="carousel-caption">
                        <h4>“As long as we are breathing it's not too late to change your story.”</h4>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://th.bing.com/th/id/OIP.9K0jywnIV79EMt5_eRzBoQHaEJ?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="d-block w-100" alt="Slide 2" />
                      <div className="carousel-caption">
                        <h4>“Being yourself is never the wrong thing to do.”</h4>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://th.bing.com/th/id/OIP.vHLeqPUCwYGJpXfljhRmawHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="d-block w-100" alt="Slide 3" />
                      <div className="carousel-caption">
                        <h4>I don't “Identify”, I am.</h4>
                        <h4>I am Transgender, my gender is as valid as yours.</h4>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://static.toiimg.com/thumb/msid-107594024,width-1070,height-580,imgsize-17032,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" className="d-block w-100" alt="Slide 4" />
                      <div className="carousel-caption">
                        <h4>“It matters not what someone is born, but what they grow to be.”</h4>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>

              {/* Tabs Section */}
              <div className="col-md-9 mt-4">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#features">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#helpline">Helpline</a>
                  </li>
                </ul>

                <div className="tab-content mt-3">
                  <div className="tab-pane fade show active" id="about">
                    <p className="paragraph">
                    The Portal provides the facility for transgender person to apply for certificate and identity card from across the country without physical interface through a seamless end to end mechanism. The Transgender certificate & identity card are nationally recognised and provided by the Ministry of Social Justice & Empowerment, the certificate is a mandatory document to avail the welfare measures being provided under the SMILE scheme.<br></br>

The applicant can monitor, edit, track the status of their application through their login id ensuring transparency throughout the procedure. They are also provided with a grievance redressal mechanism wherein, the applicant can post their grievances pertaining to delay in the certification process which would be then forwarded to the concerned authority for resolution at the earliest. The portal acts as a facilitator between the districts authorities and beneficiaries for easy access to Transgender Certificate and Identity Cards as per their self-perceived identity which is an important provision of The Transgender Persons (Protection of Rights) Act, 2019 & Transgender Persons (Protection of Rights) Act 2020.
                    </p>
                  </div>

                  <div className="tab-pane fade" id="features">
                    <h5 className="fa fa-cogs">Salient Features</h5>
                    <ul className="custom_ul">
                      <li><i className="fa fa-angle-double-right"></i>Portal acts as a linkage between beneficiaries and Issuing authorities without a physical interface.</li>
                      <li><i className="fa fa-angle-double-right"></i>The portal is accessible across the country through site address: transgender.dosje.gov.in</li>
                      <li><i className="fa fa-angle-double-right"></i>  The site is user friendly and can be easily accessed through mobile, computer or laptop.</li>
                      <li><i className="fa fa-angle-double-right"></i>The Applicant can login to the site for issuing certificate and identity card from the Applicant <a href="https://transgender.dosje.gov.in/Applicant/Registration/Index">Registration page.</a> </li>
                      <li><i className="fa fa-angle-double-right"></i>A manual in the form of PDF has been created for the applicant to see step by step procedure to register for the certification. <a href={manual}>Manual</a> </li>
                      <li><i className="fa fa-angle-double-right"></i>The applicant can track updates on the certificate through their login ID. </li>
                      {/* Add more as needed */}
                    </ul>
                  </div>

                  <div className="tab-pane fade" id="helpline">
                    <h5>Help Line</h5>
                    <p> The site also provides technical and administrative support to the applicant from Monday to Friday ( 10:00 AM to 5:00 PM)</p>
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td>Administrative</td>
                          <td>14427</td>
                          <td><a href="mailto:nisdtghelp@gmail.com">nisdtghelp@gmail.com</a></td>
                        </tr>
                        <tr>
                          <td>Technical</td>
                          <td>+91-7923268286</td>
                          <td><a href="mailto:tghelp@mail.inflibnet.ac.in">tghelp@mail.inflibnet.ac.in</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
     
              {/* Side Menu */}
              <div className="col-md-3 mt-4">
                <aside className="sideMenu">
                  <h3>Smile</h3>
                  <ul>
                    <li><a href="/read1"><i className="fa fa-arrow-circle-right"></i> Certificates</a></li>
                    <li><a href="/read1a"><i className="fa fa-arrow-circle-right"></i> Scholarships</a></li>
                    <li><a href="/read1b"><i className="fa fa-arrow-circle-right"></i> Training</a></li>
                  </ul>
                </aside>
              </div>
              <div class="col-lg-3 col-xs-12">
         
        </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Read1;
