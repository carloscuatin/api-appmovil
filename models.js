import mysql from 'mysql';

let connection = mysql.createConnection({
	host			: 'localhost',
	port 			: 8889,
	user			: 'root',
	password		: 'root',
	database		: 'actividapp'
});

// Materias
exports.listMaterias = (req, res) => {
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
};

/*  Actividades
exports.listActividades = (req, res) => {
	connection.query('')
};
*/