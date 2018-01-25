var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));

var http = require('http');
http.createServer(onRequest).listen(8080);