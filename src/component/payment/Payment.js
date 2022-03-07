import React from 'react'
import '../payment/payment.css'
import {Container, Row, Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import book from '../books.json'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Payment() {
  const navigator=useNavigate();
  // const navigating =()=>{
  //    navigator('/')
  //     }
  const formik=useFormik({
    initialValues:{
      username:"",
      cardnumber:"",
      cvv:"",
      expiry:""
      },
    onSubmit:(values)=>{
      console.log(values);
       axios.post('https://fakestoreapi.com/',values)
       .then(res=>
       {console.log(res.data);
        alert("Payment successful.");
        navigator('/');
       }
       )
    .catch(err=>
        {console.log("error",err);
        alert("Payment is not done.");
        navigator('/');
      }
         )
    }
    
  })
  const pay=useParams();
  console.log("pay",pay);
  const purchaseBook= book.items.find((data)=> data.sid === pay.sid)
  console.log("purchase book",purchaseBook);
  const singlepurchase= purchaseBook.list.find((info)=> info.bid=== pay.bid)
  console.log("single purchase book", singlepurchase);
  
  return (
    <div>
      {/* <Container> */}
      {/* <Row>
        <Col md={6} xs={12}>
          <div className='paymentBody-left'>fghsafndj</div>
          </Col>
        <Col md={6} xs={12}> */}
      {/*----------------------------------------*/}
      <div className='paymentBody'>
       <div className="body-text">Write your name in the right fields. Also write your imaginary card number. By clicking CCV field card will turn.</div>

    <div className="form-container">
      <Row>
        <Col md={6} xs={12}>
        <div className="personal-information1">
        <h1>Purchase Details</h1>
      </div>
      <div className='purchase'>
       
        <table>
         <tbody> 
        <tr><p>Book name:{singlepurchase.title}</p></tr> 
        <tr><p>Author name:{singlepurchase.content.author}</p></tr>
        <tr><p>Price per unit:{singlepurchase.content.price}</p></tr>
        <tr><p>quantity:{pay.val}</p></tr>
        <tr><p>Total price:{pay.total} </p></tr>
        </tbody>
        </table> 
       
        </div>
        </Col>
        <Col md={6} xs={12}>
        <Container>
      <div className="personal-information">
        <h1>Payment Information</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>  
          
          <input className="column-left" type="text" name="username" placeholder="User-name"
           value={formik.values.username}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
          />
          
          <input className="column-left" type="number" name="cardnumber" placeholder="Card Number"
           value={formik.values.cardnumber}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
          />
          <input className="column-left" type="text" name="expiry" placeholder="MM / YY"
           value={formik.values.expiry}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
          />
          <input className="column-left" type="text" name="cvv" placeholder="CVV"
           value={formik.values.cvv}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
          />
         
          
              
          <button type='submit'className='btn-sub mt-3' >Pay</button>
          </form>
          </Container>
          </Col>
          </Row>
       </div> 
    
  </div>
  {/*----------------------------------------------------------*/}
  {/* </Col>
  </Row> */}
  {/* </Container> */}
  </div>
    
  )
}

export default Payment