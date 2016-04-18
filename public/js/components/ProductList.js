import React from 'react';
import Product from './Product';

export default class ProductsList extends React.Component {  
  render() {
    return (
      <ul className='ProductList'>
        {
          this.props.products.map((product, i) => 
            return <Product
              product={product}
              key={i}
              index={i}
              setTotal={this.props.setTotal}
              handleChange={this.props.handleChange}
            />
          );
        }
      </ul>
    );
  }
}
