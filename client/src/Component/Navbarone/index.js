import React from 'react'
import { NavLink } from 'react-router-dom'
const index = () => {
  return (
    <div>
          <header className="tr-header">
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="navbar-header">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i className="fa fa-align-justify"></i></span>
          </button>
          <a className="navbar-brand" href="index-2.html"><img className="img-fluid" src="images/logo.png" alt="Logo"/></a>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav">
            <li className="tr-dropdown active"><NavLink to="/">Home</NavLink>
              <ul className="tr-dropdown-menu left tr-list fadeInUp" role="menu">
                {/* <li className="active"><NavLink to="#">Home theme one</NavLink></li> */}
                <li><NavLink to="/themetwo">Home theme two</NavLink></li>
              </ul>
            </li>
            
            <li><NavLink to="/joblist">Job List</NavLink></li>
            <li><a href="job-details.html">Job Details</a></li>
            <li className="tr-dropdown"><a href="#">Pages</a>
              <ul className="tr-dropdown-menu tr-list fadeInUp" role="menu">
                <li><NavLink to="/employeeprofile">Employee Profile</NavLink></li>
                <li><a href="employee-profile.html">Employer Profile</a></li>
                <li><a href="view-compnay.html">View Compnay</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><NavLink to="/signup">REGISTER</NavLink></li>
                <li><NavLink to="/Login">SIGNIN</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
        {(localStorage.getItem("user")===""   )?
        
        <div className="navbar-right">
          
          <ul className="sign-in tr-list">
            <li><i className="fa fa-user"></i></li>
            <li><NavLink to="/Login">SIGN IN</NavLink></li>
            <li><NavLink to="/signup"> REGISTER</NavLink></li>
          </ul>
          {localStorage.getItem("employee")!==""?
           <NavLink  className="btn btn-primary" to="/postjob">Post A Job</NavLink>:
           <NavLink  className="btn btn-primary" to="/login">Post A Job</NavLink>
          }
        </div>:
        <div  className="navbar-right">
        <ul className="sign-in tr-list">
          
          <li><NavLink to="/Login">LOGOUT</NavLink></li>
        </ul>
      
      </div>
        }
        
        
      </div>
    </nav>
  </header>
    </div>
  )
}

export default index