const React = require('react')

const Layout = React.createClass({
  render: function(){
    return (
      <html lang="es">
        <head>
         <title>"Shopping List"</title>
         <meta charSet="utf-8"/>
        </head>
        <body>          
          {this.props.children}          
        </body>
        <script src='build.js'></script>
      </html>
    )
  }
})


module.exports = Layout
