import React from 'react';
import Navber from '../components/Navber/Navber';


function Home() {
  return (
    <div>
        
    <Navber></Navber>
       <header class="masthead">
           <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
               <div class="d-flex justify-content-center">
                   <div class="text-center">
                       <h1 class="mx-auto my-0 text-uppercase">Home</h1>
                       <h2 class="text-white-50 mx-auto mt-2 mb-5">my web Thanawat k.</h2>
                       <a class="btn btn-primary" href="#about">Get start</a>
                   </div>
               </div>
           </div>
       </header>
       <section class="about-section text-center" id="about">
           <div class="container px-4 px-lg-5">
               <div class="row gx-4 gx-lg-5 justify-content-center">
                   <div class="col-lg-8">
                       <h2 class="text-white mb-4">เว็บนี้พัฒนาขึ้นเพื่อโชว์ผลงาน</h2>
                       <p class="text-white-50">
                          ผลงานที่จะนำเข้าไปสมัครงานหรือ ผลงานที่เคยทำมา และประวัติการศึกษา 
                       </p>
                   </div>
               </div>
               {/* <img class="img-fluid" src="../../assets/img/ipad.png" alt="..." /> */}
           </div>
           <section class="contact-section bg-black">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5">
            
            
           
          </div>
          <div class="social d-flex justify-content-center">
            <a class="mx-2" href="https://www.youtube.com/channel/UCVzQ_VJZmePEbkocdSC_2Gw">
              <i class="fab fa-youtube"></i>
            </a>
            <a class="mx-2" href="https://www.facebook.com/thanawutn.karlket.1/">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a class="mx-2" href="https://github.com/mikidxrm">
              <i class="fab fa-github"></i>
            </a>
            <a class="mx-2" href="https://www.tiktok.com/@mikidxrmzx10r?lang=th-TH">
              <i class="fab fa-tiktok"></i>
            </a>
            <a class="mx-2" href="https://www.instagram.com/miki_dxrm/">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>
    
      
       </section>
       <footer class="footer bg-black small text-center text-white-50"><div class="container px-4 px-lg-5">MIkiDxrm &copy;  Website 2022</div></footer>
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
       <script src="js/scripts.js"></script>
       <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
   </div>
  )
}

export default Home;