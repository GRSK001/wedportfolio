import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import firebaseConfig from '../config'
import '../assets/css/styles3.css'
const SignUp = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        try {

            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);

        } catch(error) {
            alert(error);
        }
    }

    if (currentUser) {
        return <Redirect to="/" />
    }

    return (
        <>
          <div className='bg'>
             <div class="container">
         <div class="row">
           <div class="col-sm-9 col-md-7 col-lg-5 mx-auto cardcust">
             <div class="card border-0 shadow rounded-3 my-5">
               <div class="card-body p-4 p-sm-5">
                 <h5 class="card-title text-center mb-5 fw-light fs-5">สมัครสมาชิก</h5>
                 <form  onSubmit={handleSubmit}>
                   <div class="form-floating mb-3">
                   <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     <label for="floatingInput">Email address</label>
                   </div>
                   <div class="form-floating mb-3">
                   <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                     <label for="floatingPassword">Password</label>
                   </div>
     
                   <div class="d-grid">
                   <button type="submit" className="btn btn-primary">SignUp</button>
                   </div>
                   <hr class="my-4"/>
                   <p>
            มีบัญชีแล้ว? กลับไปยังหน้าเข้าสู่ระบบ<Link to="/" >Log in</Link>
            </p>
                 </form>
               </div>
             </div>
           </div>
         </div>
       </div>
       </div>
        </>
    )
}

export default SignUp;
