const express = require('express');
const app = express();
const formidable = require('express-formidable');

app.use(express.static('client'));

app.use(formidable());

app.post('/post', (req, res) =>{

	res.json({size: parseInt(req.files.file.size)});
});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', () => {
	console.log('app is listening on port 3000')
});