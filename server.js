var fs = require('fs');
var express = require('express');
var app = express();

app.listen(3000, () => console.log('listening at 3000...'));

app.get('/search/:digits', (request, response) => {
	console.log(request.params.digits);
	response.send(request.params.digits);
});
