import React from "react";

export default function cartItem(props) {
	return (
		<li className="cart-item">
			<div className="name">{props.cartItem.name}</div>
			<button onClick={() => props.remove(props.cartItem)}>X</button>
			<div className="price">@ ${props.cartItem.price}</div>
		</li>
	);
}
