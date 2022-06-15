import React from "react";
import "./about.css";
import { langImages } from "../../data";

export const About = () => {
	return (
		<div className="about">
			<div className="a-left">
				<div className="a-card">
						{langImages.map((item) => {
							return <img key={item.id} className="lang-img" src={item.img} alt={item.id} />;
						})}
				</div>
			</div>
			<div className="a-right">
				<h1 className="a-title">About Me</h1><br/>
				<div className="a-desc">
					<h3>Tech Career Technology Center 2021</h3>
					<br/>
					Graduate of intense ten month basic training and skills course,
					including multiple programming and application development courses.<br/>
					Experience with:
					<ul>
						<li>Server side: mongoDB, SQL, Dot.net, Asp.net MVC, Nodejs OOP</li>
						<li>
							Client side: HTML5, CSS,Redux,Sass , Java Script, React, Bootstrap,
							jQuery, Nodejs, Material UI
						</li>
						<li>Database: mongo DB , MySQL</li><br></br>
						Project: Platform for students in Tech Career A place where
						lecturers can upload, homework, learning topics, and learning
						content where students can browse comfortably and easily.
					</ul>
				</div>
				<div className="underline"></div>
			</div>
		</div>
	);
};
