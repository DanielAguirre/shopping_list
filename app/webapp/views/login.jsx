const React = require('react')
const Layout = require('./layout')

const Login = React.createClass({
	render: function () {
		return (
			<Layout title={this.props.title}>
				<h1>Log in</h1>
				<section className="social-media-button">
					<a href='login/twitter'>Twitter</a>
					<a href='login/facebook'>Facebook</a>
					<a href='login/gmail'>Gmail</a>
				</section>
			</Layout>
		)
	}
})

module.exports = Login