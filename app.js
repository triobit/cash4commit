const express = require('express');
const app = express();

const config = require('config');

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index', {
		organization: config.organization,
		repositories: config.github.repositories
	});
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});