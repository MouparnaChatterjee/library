import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './login.css';
import imgEmail from '../../image/icons8-email-20.png';
import imgPass from '../../image/icons8-forgot-password-20.png';
import {Row, Col} from 'react-bootstrap'
import {useFormik} from 'formik'
import axios from 'axios';
function Login() {
  const searchNav=useNavigate();
  const formik=useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validate:Logvalidate,
    onSubmit:((values)=>
    {console.log("form data", values);
      axios.post('https://node-project-storage.herokuapp.com/postLoginData',values)
      .then((res)=>
        {
          console.log(res.data)
          
          token=window.sessionStorage.setItem("tokenValue",res.data.token);
          searchNav('/search');
        }
        )
      .catch((err)=>
        {
          console.log("errors",err);
        }
        )
  }
    )
  });
  const navigator=useNavigate();
  
  const navigate = () => {
    navigator('/reg');
  }
  return (
    <>
    <Container>
    <div className='register1'>
      <Row>
      <Col xs={12} md={9}>
   
        <div className='register1-right-log'>                
       <div className="tab-content" id="myTabContent">
       <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
       <h3 className="register-heading">USER LOGIN</h3>
       <div className="register1-form">
         <form onSubmit={formik.handleSubmit}>
          <Row>
            <Col md={12} xs={12}>
            <div className="form-group input-group">
                   <div className="input-group-prepend">
                         <span className="input-group-text"> <img src={imgEmail} alt="pic"/> </span>
                    </div>
              <input className="form-control box" placeholder="Email address" type="email" 
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              />
              <br />
              <br />
               {/* {formik.touched.email && formik.errors.email?
       (<p style={{color:'red'}}>{formik.errors.email}</p>): null}   */}
             </div>
             <div className="form-group input-group">
               <div className="input-group-prepend">
                    <span className="input-group-text"> <img src={imgPass} alt="pic"/> </span>
                 </div>
                      <input className="form-control box" placeholder="Password" type="password" 
                      name="password" 
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      />
                      <br />
                      <br />
                       {/* {formik.touched.password && formik.errors.password?
       (<p style={{color:'red'}}>{formik.errors.password}</p>): null}   */}
       
        
            </div>
            <button type="submit" className="btnRegister"
            // disabled={!(formik.dirty)}
            >LOGIN</button>
            </Col>
          </Row>
         </form>
       </div>
       </div>
       </div>
       </div>
       </Col>
       <Col xs={12} md={3}>
       <div className='register1-left'>
        {/* <h3> OUR LIBRARY</h3> */}
        <p className='new1'>Click "REGISTER" button if you are a new user..</p>
        <button type="submit" name="" value="Login" onClick={navigate} style={{color:"#3931af"}}>REGISTER</button><br/>
    </div>
       </Col>
      </Row>
    </div>
    </Container>
    <br />
    <br />
    </>
  )
}

export default Login



export const Logvalidate = (formValues) => {
  const errors = {};
  const reg_email=RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$');
  const reg_pass=RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*]){8,14}')
  if(formValues.email===""){
    errors.email="enter email id"
  }
  else if(!reg_email.test(formValues.email))
  {errors.email="invalid email"}

  if (!formValues.password){
    errors.password="Please enter password";
    }
     else if(!reg_pass.test(formValues.password)){
  
       errors.password="invalid password";
     }
     console.log("errors formik", errors);
  return errors
}
