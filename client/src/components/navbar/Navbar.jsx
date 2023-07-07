import "./navbar.scss";
import React, { useState } from "react";
import { Notifications, Search, ArrowDropDown } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	onscroll = () => {
		setIsScrolled(window.scrollY === 0 ? false : true);
	};

	return (
		<div className={isScrolled ? "navbar scrolled" : "navbar"}>
			<div className="container">
				<div className="left">
                    <Link to="/">
					    <img src={require("./netflix-logo.png")} alt="netflix-logo"></img>
                    </Link>
					<Link to="/" className="link">
						<span>Home</span>
					</Link>
					<Link to="/series" className="link">
						<span>TV Shows</span>
					</Link>
					<Link to="/movies" className="link">
						<span>Movies</span>
					</Link>
					<span>New & Popular</span>
					<span>My List</span>
				</div>

				<div className="right">
					<Search className="icon" />
					<span>Kids</span>
					<Notifications className="icon" />
					<img src={require("./avatar.png")} alt="avatar.png"></img>
					<div className="profile">
						<ArrowDropDown className="icon" />
						<div className="options">
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
