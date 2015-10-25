import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

let api = express.Router();

import Models from './models';

api.get('/', (req,res) => {
	let data = {
		"Data": ""
	};
	data["Data"] = "Welcome to Api Rest AppMovil";
	res.json(data);
});

api.route('/materias')
	.get(Models.listMaterias);


app.use(api);

app.listen(3000, () => {
	console.log('app listening at 3000');
});



