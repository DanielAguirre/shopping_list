const React = require('react')
const Layout = require('./layout');


const Index = React.createClass({
	render: function(){
		return (			
			<Layout title={this.props.title}>
				<nav>
					<ul>
						<li><a href="login">Registrate</a></li>
						<li><a href="signin">Iniciar Sésion</a></li>
					</ul>
				</nav>
				<header>
					<h1> Bienvenido</h1>
				</header>
				<section class="content">
					<div class="step">
						<p>Crea una Cuenta</p>
					</div>
					<div class="step">
						<p>Crea una Lista</p>
					</div>
					<div class="step">
						<p>Agrega los Productos</p>
					</div>
					<div class="step">
						<p>Guarda tu lista</p>
					</div>
					<div class="step">
						<p>Listo</p>
					</div>
				</section>
			</Layout>
		)
	}
})

module.exports = Index;