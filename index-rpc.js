'use strict';

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": true}));

var rpc = {
	add: function(e, du) {
		dataUsers.name = e.name;
		dataUsers.score = e.score;
		console.log('Пользователь успешно добавлен');
		return du.push(dataUsers);
	},
	update: function(e,du) {
		for (let m=0; m < du.length; m++) {
			if (e.name == du[m].name) {
				du.name = e.name;
				du.score = e.score;
				console.log('Пользователь успешно обновлен');
			}
		}
		return du;
	},
	delete: function(e, du) {
		for (let m=0; m < du.length; m++) {
			if (e.name == du[m].name) {
				du.remove(m);
				console.log('Пользователь успешно удален');
			}
		}
		return du;
	},
	get: function(e, du) {
		for (let m=0; m < du.length; m++) {
			if (e.name ==  du[m].name) {
				let result = {name: du[m].name, score: du[m].score};
				console.log('Пользователь найден');
			}
		}
		if (!result) console.log('Пользователь не найден');
		return result;
	}
}

app.post("/user/", function(req, res) { 
	let method = req.body.method;
	let du = {};
	
	du = rpc[method](req.body, du);

	res.send(du);
});
app.listen(3001, console.log("Ready on port 3001"));