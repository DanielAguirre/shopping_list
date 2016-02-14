const React = require('react')
const Layout = require('./layout')

const Login = React.createClass({
	render: function () {
		return (
			<Layout title={this.props.title}>
				<h1>Log in</h1>
				<section className="social-media-button">
					<button>Twitter</button>
					<button>Facebook</button>
					<button>Gmail</button>
				</section>
			</Layout>
		)
	}
})

module.exports = Login