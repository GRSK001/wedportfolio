import React, { useContext } from 'react';
import Navber from '../components/Navber/Navber';
import "../assets/css/styles.css";
import "../assets/css/styles2.css";
import imgs from "../assets/img/about/1.jpg"
import imgs1 from "../assets/img/SERVICESS/1.jpg"
import imgs2 from "../assets/img/SERVICESS/2.jpg"
import imgs3 from "../assets/img/SERVICESS/3.jpg"
import imgs4 from "../assets/img/SERVICESS/1.png"
import imgs5 from "../assets/img/portfolio/1.jpg"
import imgs6 from "../assets/img/portfolio/2.jpg"
import imgs7 from "../assets/img/portfolio/3.jpg"
import po1 from "../assets/img/portfolio/4.jpg"
import po2 from "../assets/img/portfolio/5.jpg"
import po3 from "../assets/img/portfolio/6.jpg"
import imgs8 from "../assets/img/about/1.jpg"
import imgs9 from "../assets/img/about/2.jpg"
import imgs10 from "../assets/img/about/3.jpg"
import imgs11 from "../assets/img/about/4.jpg"
import imgs12 from "../assets/img/team/1.jpg"
import imgs13 from "../assets/img/team/2.jpg"
import imgs14 from "../assets/img/team/3.jpg"
import imgs15 from "../assets/img/portfolio/1.png"
import firebaseConfig from '../config';
import { Redirect, Link } from 'react-router-dom'
import { AuthContext } from '../components/Auth'


const portfolio= () =>{
  // const { currentUser } = useContext(AuthContext);

  //   if (!currentUser) {
  //       return <Redirect to="/" />;
  //   }
  return (
    <>
    
    <Navber/>
    <body id="page-top">
        {/* <!-- Navigation--> */}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
               
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                
                <div className="bodynav collapse navbar-collapse navbar fixed-top" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <a className="navbar-brand" href="#page-top"><img src={imgs4} alt="..." /></a>
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                        
                    </ul>
                    <button onClick={() => firebaseConfig.auth().signOut()} className="btn btn-danger ">Sign Out</button>
                </div>
            </div>
        </nav>
        {/* <!-- Masthead--> */}
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">Welcome To Our GRSK Studio!</div>
                <div className="masthead-heading text-uppercase">ยินดีต้อนรับสู่สตูดิโอ GRSK ของเรา!</div>
                <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
            </div>
        </header>
        {/* <!-- Services--> */}
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">บริการรับถ่ายภาพและวีดีโอ</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                    <img className="img-fluid" src={imgs1} alt="..." />
                        <span className="fa-stack fa-4x">
                            
                            {/* <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i> */}
                        </span>
                        <h4 className="my-3">ภาพโปรไฟล์</h4>
                        <p className="text-muted">เริ่มต้นที่ 400 บาท ต่อชั่วโมง ถ่ายไม่จำกดจำนวนภาพ แต่งโทนทุกภาพ โปรโมชั่นพิเศษราคานักศึกษา 200 บาทต่อชั่วโมง ถึง 31 มกราคมนี้เท่านั้น!!!</p>
                    </div>
                    <div className="col-md-4">
                    <img className="img-fluid" src={imgs2} alt="..." />
                        <span className="fa-stack fa-4x">
                            {/* <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i> */}
                        </span>
                        <h4 className="my-3">งานแต่งหรืองานบุญต่างๆ</h4>
                        <p className="text-muted">ครึ่งวัน 2500 เต็มวัน 3500 สิ่งที่จะได้คือ ภาพทุกใบแต่งโทน ภาพรีทัส 30ภาพ ส่งงานภายใน1-2อาทิตย์ขึ้นอยู่กับจำนวนภาพ</p>
                    </div>
                    <div className="col-md-4">
                    <img className="img-fluid" src={imgs3} alt="..." />
                        <span className="fa-stack fa-4x">
                            {/* <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                        </span>
                        <h4 className="my-3">งานวีดีโอ</h4>
                        <p className="text-muted">เริ่มต้นที่ 3000 บาท ขึ้นอยู่กับเนื้องานที่ลูกค้าต้องการ</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Portfolio Grid--> */}
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">ผลงาน</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 1--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={imgs5} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Profile</div>
                                <div className="portfolio-caption-subheading text-muted">ภาพโปรไฟล์</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 2--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={imgs6} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Profile</div>
                                <div className="portfolio-caption-subheading text-muted">ภาพโปรไฟล์</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 3--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={imgs7} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Prewedding</div>
                                <div className="portfolio-caption-subheading text-muted">ภาพพรีเวดดิ้ง</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        {/* <!-- Portfolio item 4--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={po1} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Prewedding</div>
                                <div className="portfolio-caption-subheading text-muted">ภาพพรีเวดดิ้ง</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        {/* <!-- Portfolio item 5--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={po2} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Motorcycle</div>
                                <div className="portfolio-caption-subheading text-muted">ภาพรถมอเตอร์ไซต์</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        {/* <!-- Portfolio item 6--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={po3} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Profile</div>
                                <div className="portfolio-caption-subheading text-muted">ภาพโปรไฟล์</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- About--> */}
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">เกี่ยวกับฉัน</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={imgs8} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>My profile</h4>
                                <h4 className="subheading">ประวัติส่วนตัว</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">นายศิวพล นนทวงษา เกิดวันที่ 18 พฤษภาคม 2543 อายุ21ปี ชื่อเล่นชื่อเบ็คแฮ่ม นิสัยส่วนตัว ทะเล้น ขี้เล่นกับคนสนิท เป็นคนพูดตรง</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={imgs9} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>Education’s Background</h4>
                                <h4 className="subheading">การศึกษา</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">กำลังศึกษาอยู่ที่มหาวิทยาลัยราชภัฏมหาสารคาม คณะเทคโนโลยีสารสนเทศ สาขา</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={imgs10} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2564</h4>
                                <h4 className="subheading">เข้าฝึกงานที่บริษัท G-Able</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">ได้อบรมการเขียน Framework React เป็นประสบการที่ค่อนข้างใหม่สำหรับผมและผมจะพยายามเรียนรู้ให้ได้มากที่สุดครับ</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={imgs11} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2565</h4>
                                <h4 className="subheading">ปัจจุบันฝึกงานอยู่ทีม AAD fronted</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">ในแผนกนี้ได้เรียนรู้เรื่อง React เพิ่มเติมแล้วได้รบหมอบหมายให้ทำเว็บโปรไฟล์นี่ขึ้นมา</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        {/* <!-- Team--> */}
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Team</h2>
                    <h3 className="section-subheading text-muted">ทีมงาน</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={imgs12} alt="..." />
                            <h4>Theeraphat Claisuban</h4>
                            <p className="text-muted">Lead Artist</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={imgs14} alt="..." />
                            <h4>Poowanat Pathirupo</h4>
                            <p className="text-muted">Lead Creative</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={imgs13} alt="..." />
                            <h4>Anucha Kwamman</h4>
                            <p className="text-muted">Lead Producer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">No matter what people say, Never ever look down on yourself.</p></div>
                </div>
            </div>
        </section>
        {/* <!-- Clients--> */}
        
        {/* <!-- Contact--> */}
        
        {/* <!-- Footer--> */}
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">GRSK Studio &copy; Your Website 2022</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">siwapon nontawongsa</a>
                        <a className="link-dark text-decoration-none" href="#!">BECKHAM</a>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- Portfolio Modals--> */}
        {/* <!-- Portfolio item 1 modal popup--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src={imgs15} alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 className="text-uppercase">Profile</h2>
                                    <p className="item-intro text-muted">ภาพโปรไฟล์</p>
                                    <img className="img-fluid d-block mx-auto" src={imgs5} alt="..." />
                                    <p>เริ่มต้นที่ 400 บาท ต่อชั่วโมง ถ่ายไม่จำกดจำนวนภาพ แต่งโทนทุกภาพ โปรโมชั่นพิเศษราคานักศึกษา 200 บาทต่อชั่วโมง ถึง 31 มกราคมนี้เท่านั้น!!!</p>
                                    <ul className="list-inline">
                                        <li>
                                            <strong>Fackbook Fanpage:</strong>
                                            TuynuyPhoto
                                        </li>
                                        <li>
                                            <strong>Tel:</strong>
                                            0971911064
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio item 2 modal popup--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/2.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Explore
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Graphic Design
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio item 3 modal popup--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/3.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Finish
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Identity
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio item 4 modal popup--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/4.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Lines
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Branding
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio item 5 modal popup--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/about/4.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Southwest
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Website Design
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio item 6 modal popup--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/6.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Window
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Photography
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </body>
    </>
      
  );
}

export default portfolio;
