const React = require('react');
const Layout = require('./layout');

const Login = React.createClass({
	render: function () {
		return (
			<Layout title={this.props.title}>
				<h1>Bienvenido {this.props.user.displayName}</h1>
				<strong>{this.props.user.username}</strong>
				<img src={this.props.user.photo}/>
				<a href='logout'>Salir</a>
				<nav>
					<ul>
						<li>Crear Lista</li>
						<li>Ver Listas</li>
					</ul>
				</nav>
				<section>
					<form>
						<input placeholder="nombre"></input>
						<input placeholder="0.00"></input>
					</form>
				</section>
			</Layout>
		)
	}
});

module.exports = Login;