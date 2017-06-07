const express = require('express');
const app = express();
const formidable = require('express-formidable');
const querystring = require('querystring');   

app.use(express.static('client'));

app.use(formidable());

app.post('/post', (req, res) =>{

	const size = req.files.file.size;
	res.redirect('/get-file-size/' + size);
});

app.get('/get-file-size/:param', (req, res) => {
	res.json({size: parseInt(req.params.param)});
})


app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', () => {
	console.log('app is listening on port 3000')
});