import React from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

export default function cart(props) {
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
			<CartTotal cartItems={props.cartItems} />
		</aside>
	);
}
