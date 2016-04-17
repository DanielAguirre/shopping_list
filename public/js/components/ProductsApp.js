import React from 'react';
import ProductForm from './ProductForm';

export default class ProductsApp extends React.Component{
	constructor(props){
		super(props);
		this.state={
			products: [
				{	name:'', price:0.00	}
			],
			total:0.00
		};
		this.addProduct = this.addProduct.bind(this);
		this.setTotal = this.setTotal.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.saveList = this.saveList.bind(this);
	}

	handleChange(index, data){
		console.log(data)
		this.state.products[index]={
			name: +data.product.value,
			price: +data.price.value
		}	
	}
	
	addProduct(e){
		e.preventDefault();		
		this.state.products.push({	name:'', price:0.00	});		
		let products = this.state.products;
		this.setState({products: products});
	}
	
	setTotal(value){
		console.log('products',this.state.products)
		let total = this.state.products.reduce((total, product)=>{
			console.log('precio', product.price)
			return total + product.price;			
		}, 0.00)
		this.setState({total:total});
	}

	saveList(e){		
		e.preventDefault();
	}

	render(){
		return <div className='newProducts'>
			<h2	className='total'>Total: {this.state.total}</h2>
			<ProductForm 
				products={this.state.products}
				addProduct={this.addProduct} 
				setTotal={this.setTotal}
				handleChange={this.handleChange}
				saveList = {this.saveList}
				/>
		</div>
	}
}