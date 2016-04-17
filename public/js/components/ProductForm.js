import $ from 'jquery';
import React from 'react';
import ProductList from './ProductList';

export default class ProductsForm extends React.Component{
	constructor(props){
		super(props);
		console.log(props);
		/*$.post({
      url: 'api/shopping_lists',
      dataType: 'json',
      cache: false,
      success: function(data) {
        //this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });*/
	}
	render(){
		return <form url='api//shopping_lists'>
			<ProductList 
				products={this.props.products}
				setTotal={this.props.setTotal}
				handleChange={this.props.handleChange}
				/>
			<button onClick={this.props.addProduct.bind(null)}>+</button>
			<button onClick={this.props.saveList.bind(null)}>Guardar</button>
		</form>	
	}
}