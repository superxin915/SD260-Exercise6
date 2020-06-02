import React from "react";

export default function item(props) {
	return (
		<li className="item">
			<img src={props.item.imageURL} alt="" />
			<h2>{props.item.name}</h2>
			<div className="price">${props.item.price}</div>
			<div className="description">{props.item.description}</div>
			<button onClick={() => props.addToCart(props.item)}>Add to Cart</button>
		</li>
	);
}
