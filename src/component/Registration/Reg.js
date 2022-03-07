import React from 'react'
import './reg.css';
import {Container, Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import imgUser from '../../image/icons8-user-20.png';
import imgEmail from '../../image/icons8-email-20.png';
import imgPass from '../../image/icons8-forgot-password-20.png';
import imgAdd from '../../image/icons8-home-address-20.png';
import imgPhone from '../../image/icons8-phone-20.png';
// import imgOrg from '../../image/icons8-non-profit-organisation-20.png';
// import imgD from '../../image/icons8-permanent-job-20.png';
import imgKey from '../../image/icons8-key-20.png'; 
import {useFormik} from 'formik'
import axios from 'axios'

function Reg() {
  const formik= useFormik({
    initialValues:{
      username:"",
      email:"",
      phone:"",
      address:"",
      password:"",
      confirm:""
    },
    validate:RegValidation,
    onSubmit:(values)=>{
      console.log("given:",values);
      axios.post('https://node-project-storage.herokuapp.com/postUserData',values)
      .then(res=>
        {console.log("Response",res);})
      .catch(err=>
        {console.log("errors",err);})
    }
  })
  const navigate=useNavigate();
  const submitLog = () =>{
    navigate('/login');
  }
  return (
    <>
    <Container>
      <div className='register'>
        <Row>
        <Col xs={12} md={3}>
    <div className='register-left'>
        <h3> OUR LIBRARY</h3>
        <p>Welcome to quench your thirst of knowledge</p>
        <button type="submit" name="" value="Login" onClick={submitLog}> Login</button><br/>
    </div>
    </Col>
    <Col xs={12} md={9}>
   
        <div className='register-right'>                
       <div className="tab-content" id="myTabContent">
       <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
       <h3 className="register-heading">APPLY AS A READER</h3>      
               
       <div className="register-form">
         <form onSubmit={formik.handleSubmit}>
         <Row>
           <Col xs={12} md={6}>
           <div className="form-group input-group">
               <div className="input-group-prepend">
                    <p className="input-group-text"> <img src={imgUser} alt="pic"/> </p>
                 </div>
                      <input className="form-control box" placeholder="Full name" type="text" 
                      name='username'
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}/>
                      <br />
                      <br />
                       {formik.touched.username && formik.errors.username?
       (<p style={{color:'red'}}>{formik.errors.username}</p>): null}  
            </div>
            <br />
            <div className="form-group input-group">
                                              <div className="input-group-prepend">
                                                  <span className="input-group-text"> <img src={imgEmail} alt="pic"/> </span>
                                              </div>
              <input className="form-control box" placeholder="Email address" type="email" 
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              />
              <br />
              <br />
               {formik.touched.email && formik.errors.email?
       (<p style={{color:'red'}}>{formik.errors.email}</p>): null}  
             </div>
             <br />
             <div className="form-group input-group">
               <div className="input-group-prepend">
                    <span className="input-group-text"> <img src={imgPass} alt="pic"/> </span>
                 </div>
                      <input className="form-control box" placeholder="Password" type="password" 
                      name="password" 
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      />
                      <br />
                      <br />
                       {formik.touched.password && formik.errors.password?
       (<p style={{color:'red'}}>{formik.errors.password}</p>): null}  
            </div>
            <br />

           </Col>
           <Col xs={12} md={6}>
           <div className="form-group input-group">
               <div className="input-group-prepend">
                    <p className="input-group-text"> <img src={imgAdd} alt="pic"/> </p>
                 </div>
                      <input className="form-control box" placeholder="Residencial address" type="text" 
                       name="address"
                       value={formik.values.address}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                      />
                      <br />
                      <br />
                  
            </div>
            <br />
            <div className="form-group input-group">
               <div className="input-group-prepend">
                    <span className="input-group-text"> <img src={imgPhone} alt="pic"/> </span>
                 </div>
                      <input className="form-control box" placeholder="Mobile Number" type="number" 
                       name="phone"
                       value={formik.values.phone}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                      />
                        {formik.touched.phone && formik.errors.phone?
       (<p style={{color:'red'}}>{formik.errors.phone}</p>): null}  
                <br />
                <br />   
            </div>
            <br />
            <div className="form-group input-group">
               <div className="input-group-prepend">
                    <span className="input-group-text"> <img src={imgKey} alt="pic"/> </span>
                 </div>
                      <input className="form-control box" placeholder="Confirm password" type="Password" 
                       name="confirm" 
                       value={formik.values.confirm}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                      />
                      <br />
                      <br />
                        {formik.touched.confirm && formik.errors.confirm?
       (<p style={{color:'red'}}>{formik.errors.confirm}</p>): null}  
                   
            </div>
            <br />
            <button type="submit" className="btnRegister"
            disabled={!(formik.dirty)}
            >Register</button>
           </Col>
         </Row>
         </form>
         </div>               
       </div>
         </div> 
         </div>
                         
    </Col>
    
        </Row>
      </div>
    </Container>
    <br />
    </>
  )
}

export default Reg


 const RegValidation = (formValues) => {
   const errors={};
   const reg_user=RegExp('^[a-zA-Z]{3,100}');
   const reg_phone=RegExp('^[6-9][0-9]{9}$');
   const reg_email=RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$');
   const reg_pass=RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*]){8,14}')
    if(formValues.phone==="")
    {errors.phone="enter phone no"}
    else if(!reg_phone.test(formValues.phone))
    {errors.phone="invalid phone no";}

    if(formValues.username==="")
    {errors.username="enter user name"}
    else if(!reg_user.test(formValues.username))
    {errors.username="invalid user name"}

    if(formValues.email===""){
      errors.email="enter email id"
    }
    else if(!reg_email.test(formValues.email))
    {errors.email="invalid email"}

    //  if(formValues.password=" ")
    // {errors.password="enter password"}
    // else if(!reg_pass.test(formValues.password))
    // {errors.password="invalid password";}
    // if(formValues.pass===formValues.confirm)
    // {errors.confirm="Password is matched successfully."}
    // else
    // {errors.confirm="password is not matched."}
    if (!formValues.password){
      errors.password="Please enter password";
      }
       else if(!reg_pass.test(formValues.password)){
    
         errors.password="invalid password";
       }
     console.log("errors",errors);
  return errors;
}
