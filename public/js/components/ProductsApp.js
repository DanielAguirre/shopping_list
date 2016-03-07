import React from 'react';
import ProductForm from './ProductForm';

export default class ProductsApp extends React.Component{
	constructor(props){
		super(props);
		this.state={
			products: [
				{	name:'', price:0.00	}
			]
		};
		this.addProduct = this.addProduct.bind(this);
	}
	addProduct(e){
		e.preventDefault();
		this.state.products.push({	name:'', price:0.00	});
		let products = this.state.products;
		this.setState({products: products});
	}
	handleChange(){

	}
	render(){
		return <div className='newProducts'>
			<ProductForm products={this.state.products} addProduct={this.addProduct}/>
		</div>
	}
}