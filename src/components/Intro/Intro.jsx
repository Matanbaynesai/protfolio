import React from "react";
import "./intro.css";
 
export const Intro = () => {
	return (
		<div className="i">
			<div className="i-left">
			<div className="bg-left"></div>
				<div className="i-left-wrapper">
					<h2 className="i-intro">Hi, My Name is</h2>
					<h1 className="i-name">Matan Baynesai</h1>
					<div className="i-title">
						<div className="i-title-wrapper">
							<div className="i-title-item">Web Developer</div>
							<div className="i-title-item">Frontend</div>
							<div className="i-title-item">Backend</div>
							<div className="i-title-item">React&Redux</div>
							<div className="i-title-item">Love Coding</div>
							<div className="i-title-item">Web Developer</div>
						</div>
					</div>
					<p className="i-desc">
						Hey im Matan Baynesai
						 Full Stack Web Developer
					</p>
				</div>
			</div>
			<div className="i-right">
        <div className="i-bg-right"></div>
        <img className="i-img" src='me.png' alt="" />
      </div>
		</div>
	);
};
