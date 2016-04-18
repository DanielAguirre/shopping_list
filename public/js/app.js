import page from 'page';
import React from 'react';
import ReactDOM from 'react-dom';
import ProductsApp from './components/ProductsApp';

page('/welcome', () => {
  ReactDOM.render(
    <ProductsApp />,
    document.getElementById('produtcsList')
  );
});

page();
