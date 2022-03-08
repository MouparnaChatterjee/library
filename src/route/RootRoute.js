import React from 'react'
import Heading from './Heading'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from '../component/home/Home'
import Reg from '../component/Registration/Reg'
import Login from '../component/log/Login'
import Search from '../component/search/Search'
import AdvanceSearch from '../component/search/AdvanceSearch'
import Content from '../component/search/Content'
import Protected from '../component/protected/Protected'
import Footer from './Footer'
import Payment from '../component/payment/Payment'
import About from '../component/about/About'

function RootRoute() {
  return (
    <>
    <Router>
      
        <Heading />
        <Routes>
          
            <Route path='/' element={<Home />} />
            <Route path='/reg' element={<Reg />} />
            <Route path='/login' element={<Login />} />
            <Route path='/search/:sid' element={<AdvanceSearch />} />
            <Route path='/search/:sid/:bid' element={<Content />} /> 
            <Route path='/search/:sid/:bid/:id/:val/:total' element={<Payment />} />
            <Route path='/about' element={<About />} />
        <Route element={<Protected />} >
        
        <Route path='/search' element={<Search />} />
       
        </Route>
       
        </Routes>
        <Footer />
        
        </Router>
        {/* <Route path='*' element={<PNF />} /> */}

    </>
  )
}

export default RootRoute