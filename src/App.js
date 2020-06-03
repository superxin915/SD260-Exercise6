import React from "react";
import Item from "./Item";
import Cart from "./Cart";

class App extends React.Component {
	state = {
		items: [],
		cartItems: [],
	};

	cartItemId = 0;

	componentDidMount = () => {
		fetch(`https://5ed0108416017c00165e327c.mockapi.io/api/v1/items`)
			.then(resp => {
				if (resp.ok) return resp.json();
				else throw new Error(`Fail to retrieve data from API.`);
			})
			.then(items => this.setState({ items: items }));
	};

	addToCart = item => {
		this.setState(prevState => ({
			cartItems: [...prevState.cartItems, { ...item, id: this.cartItemId }],
		}));

		this.cartItemId++;
	};

	remove = selectedItem => {
		this.setState(prevState => ({
			cartItems: [...prevState.cartItems.filter(item => item !== selectedItem)],
		}));
	};

	render = () => (
		<>
			<header>
				<h1>mouseHeav3an</h1>
			</header>
			<main>
				<ul className="items">
					{this.state.items.map(item => (
						<Item item={item} key={item.id} addToCart={this.addToCart} />
					))}
				</ul>
				<Cart cartItems={this.state.cartItems} remove={this.remove} />
			</main>
		</>
	);
}

export default App;
