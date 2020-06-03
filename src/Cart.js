import React from "react";
import CartItem from "./CartItem";

export default function cart(props) {
	const total = props.cartItems.reduce(
		(total, cartItem) => (total += cartItem.price),
		0
	);

	return (
		<aside className="cart">
			<h2>Your Cart</h2>
			<ul>
				{props.cartItems.map(cartItem => (
					<CartItem
						key={cartItem.id}
						cartItem={cartItem}
						remove={props.remove}
					/>
				))}
			</ul>
			{props.cartItems.length > 0 && (
				<div className="total">Total: ${total.toFixed(2)}</div>
			)}
		</aside>
	);
}
