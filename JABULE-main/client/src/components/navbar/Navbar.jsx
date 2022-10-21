import React from 'react';
import logo from './../../assets/logofont.svg';
import './navbar.css';

const NavLinks = () => (
	<React.Fragment>
		<p>
			<a href="/Register">Register</a>
		</p>
		<p>
			<a href="/Dashboard">Dashboard</a>
		</p>
		<p>
			<a href="/Exam">Exam</a>
		</p>
		<p>
			<a href="/Status">Status</a>
		</p>
		<p>
			<a href="/">Contact Us</a>
		</p>
		<p>
			<a href="/login">Login</a>
		</p>
	</React.Fragment>
);

const Navbar = () => {
	return (
		<div className="landing-navbar">
			<div className="landing-navbar-logo">
				
			</div>
			<div className="landing-navbar-links">
				<NavLinks />
			</div>
		</div>
	);
};

export default Navbar;
