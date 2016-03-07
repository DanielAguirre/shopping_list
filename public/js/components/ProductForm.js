import React from 'react';
import ProductList from './ProductList';

export default class ProductsForm extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <form>
			<ProductList products={this.props.products}/>
			<button onClick={this.props.addProduct.bind(null)}>+</button>
			<button>Guardar</button>
		</form>	
	}
}