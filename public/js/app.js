import Page from 'page';
import React from 'react';
import ReactDOM from 'react-dom';
import ProductsApp from './components/ProductsApp';

Page('/welcome', () =>{
	ReactDOM.render(
		<ProductsApp/>,
		document.getElementById('produtcsList')
	);
})

Page()