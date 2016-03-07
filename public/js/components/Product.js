import React from 'react';

export default class Product extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			product:this.props.product
		}
		console.log('constructor',this.state)
	}
	handleChange(){
		console.log(this)
		this.setState({
			name: this.refs.product.value,
			price: this.refs.price.value	
		})
	}
	render(){
		console.log('state',this.state)
		return <li className="procutItem">
						<input 
							ref='product'
							value={this.state.name}
							placeholder="Producto"
							onChange={this.handleChange.bind(this)}/>
						<input 
							ref='price'
							value={this.state.price}
							placeholder="0.00"
							onChange={this.handleChange.bind(this)}/>
				</li>
	}
}