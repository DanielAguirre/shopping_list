import React from 'react';
import ProductList from './ProductList';

export default class ProductsForm extends React.Component {
  render() {
    return (
      <form url="api//shopping_lists">
        <ProductList 
          products={this.props.products}
          setTotal={this.props.setTotal}
          handleChange={this.props.handleChange}
        />
        <button onClick={this.props.addProduct.bind(null)}>+</button>
        <button onClick={this.props.saveList.bind(null)}>Guardar</button>
      </form>
    );
  }
}
