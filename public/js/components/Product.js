import React from 'react';

export default class Product extends React.Component{
	constructor(props){
		super(props);
		/*this.state = {
			product:this.props.product
		}*/
	}
	handleChange(){
		this.props.handleChange(this.props.index, this.refs);
	}
	handleBlur(){
		this.props.setTotal(this.refs.price.value);
	} 
	render(){
		return <li className="procutItem">
						<input 
							ref='product'
							value={this.props.name}
							placeholder="Producto"
							onChange={this.handleChange.bind(this)}/>
						<input 
							ref='price'
							value={this.props.price}
							placeholder="0.00"
							onChange={this.handleChange.bind(this)}
							onBlur = {this.handleBlur.bind(this)}/>
				</li>
	}
}