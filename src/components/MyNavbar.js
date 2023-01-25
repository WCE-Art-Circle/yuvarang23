import React from 'react'
import { useEffect } from 'react';
import './Navbar.css'
const MyNavbar = () => {
  return (
    <div id='mynavbar'>
        	<nav class="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
		    <div class="container">
				<img style={{height: 60}} src="art circle logo orgl black (1).png" alt="" />
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="fa fa-bars"></span> Menu
				  </button>
		      <div class="collapse navbar-collapse" id="ftco-nav">
		        <ul class="navbar-nav ml-auto mr-md-3">
		        	<li class="nav-item active"><a href="#" class="nav-link">Home</a></li>
		        	<li class="nav-item"><a href="https://wce-art-circle.github.io/yuvarang23-events/" class="nav-link">Events</a></li>
		        	<li class="nav-item"><a href="#" class="nav-link">About Us</a></li>
		          <li class="nav-item"><a href="#" class="btn btn-common register">Register now</a>
				  </li>
		        </ul>
		      </div>
		    </div>
		  </nav>
        
    </div>
  )
}

export default MyNavbar