import Page from 'page'
import React from 'react'
import ReactDOM from 'react-dom'

const Products =[{
		name:'',
		price:0.00
	}
]

const Product = React.createClass({
	render() {
		return(
				this.props.Products.map((product){
					<input value={product.name} placeholder="nombre"></input>
					<input value={product.price} placeholder="0.00"></input>
				})
			)
	}
})

const Form = React.createClass({
	render (){
		return (
				<div>
					<h1>Lista de productos</h1>
					<Product Products={Products}/>
				</div>
			)
	}
})


Page('/welcome', () =>{
	console.log('hola',document.getElementById('produtcsList'))	
	ReactDOM.render(<Form/>, document.getElementById('produtcsList'))	
})

Page()