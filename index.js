import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import md5 from 'MD5';

let app = express();

let connection = mysql.createConnection({
	host			: 'localhost',
	port 			: 8889,
	user			: 'root',
	password		: 'root',
	database		: 'actividapp'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req,res) => {
	let data = {
		"Data":""
	};
	data["Data"] = "Welcome to Api Rest AppMovil";
	res.json(data);
});

app.get('/materias', (req, res) => {
	let data = {
		'error': 1,
		'materias': ''
	};

	connection.query('SELECT * from Materias', (err, rows, fields) => {
		if(rows.length != 0) {
			data['error'] = 0;
			data['materias'] = rows;
			res.json(data);
		} else {
			data['materias'] = 'No Materias Found..';
			res.json(data);
		}
	});
});

app.listen(3000, () => {
	console.log('app listening at 3000');
});




