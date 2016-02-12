const React = require('react')

const Layout = React.createClass({
  render: function(){
    return (
      <html lang="es">
        <head>
         <title>"Shopping List"</title>
         <meta charset="utf-8"/>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    )
  }
})


module.exports = Layout
