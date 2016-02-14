const React = require('react')
const Layout = require('./layout')

const Login = React.createClass({
	render: function () {
		return (
			<Layout title={this.props.title}>
				<h1>Bienvenido {this.props.user.displayName}</h1>
				<strong>{this.props.user.username}</strong>
				<img src={this.props.user.photo}/>
			</Layout>
		)
	}
})

module.exports = Login