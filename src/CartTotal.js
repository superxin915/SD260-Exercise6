import React from "react";

export default function cartTotal(props) {
  let total = 0;
  
	if (props.cartItems !== undefined && props.cartItems.length > 0) {
		props.cartItems.map(item => (total += item.price));
		return <div className="total">Total: ${total}</div>;
	} else {
		return <></>;
	}
}
