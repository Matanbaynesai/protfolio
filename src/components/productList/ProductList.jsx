import React from "react";
import { Product } from "../product/Product";
import { projectsImages } from "../../data";
import "./productList.css";

export const ProductList = () => {
	return (
		<div className="pl">
			<div className="pl-texts">
				<h1 className="pl-title">My Projects</h1>
				
			</div>
			<div className="pl-list">
				{projectsImages.map((item) => {
					return(
						<Product key={item.id} link={item.link} img={item.img} />
					)
				})}
			</div>
		</div>
	);
};
