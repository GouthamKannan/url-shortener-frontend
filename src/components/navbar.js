import Cookies from 'js-cookie';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import configs from '../config'


// Side Bar component
class Navbar extends Component {

	componentDidMount = async() => {
		if(!Cookies.get("user_name")) {
            window.location = "/"
        }
	}

	logout = async() => {
		// Logout using API and show the home page
		Cookies.remove("session_id")
        Cookies.remove("user_name")
		await fetch(configs.api_url + "/user/logout", {
            method : "GET",
            credentials: "include",
		})
		window.location = "/"

	}

	render() {
		return(

			<nav className="navbar navbar-light bg-light navbar-expand-lg">
				<span className=" mx-5 nav-link" style={{"padding-right":"40%"}}>URL SHORTENER</span>
				<button className="navbar-toggler" style={{"margin-right": "10%"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              	<div className="collapse navbar-collapse" id="navbarSupportedContent" style={{"margin-left": "5%", "margin-right" : "10%"}}>
					<ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
						<li className="nav-item">
							<NavLink to="/dashboard" onlyActiveOnIndex={true} className="nav-link" activeClassName="active">
								Dashboard
							</NavLink>
						</li>
                        <li>
                            <NavLink to="/shorten_url" className="nav-link" activeClassName="active">
                                Shorten Url
                            </NavLink>
                        </li>
                        <li>
							<NavLink to="/url_count" className="nav-link" activeClassName="active">
								created URLs
							</NavLink>
						</li>
						<><li className="nav-item"><button className="btn btn-secondary" onClick={this.logout} value="logout">Logout</button></li></>
					</ul>
				</div>
			</nav>

		);
	}
}

export default Navbar;
