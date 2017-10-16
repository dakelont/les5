'use strict';

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": true}));

app.post("/user/", function(req, res) { 
	dataUsers[i]={};

	let sendData = [];
	
	if (req.body.name && req.body.score && req.body.new) {
		dataUsers[i].name = req.body.name;
		dataUsers[i].score = req.body.score;
		i++;
		console.log('Пользователь успешно добавлен');
	}
	else if (req.body.name && req.body.score) {
		for (let m=0; m < dataUsers.length; m++) {
			if (req.body.name == dataUsers[m].name) {
				dataUsers[m].name = req.body.name;
				dataUsers[m].score = req.body.score;
				console.log('Пользователь успешно обновлен');
			}
		}
	}
	else if (req.body.name && req.body.del) {
		for (let m=0; m < dataUsers.length; m++) {
			if (req.body.name == dataUsers[m].name) {
				dataUsers.remove(m);
				console.log('Пользователь успешно удален');
			}
		}
	}
	else if (req.body.name) {
		for (let m=0; m < dataUsers.length; m++) {
			if (req.body.name == dataUsers[m].name) {
				let result = {name:dataUsers[m].name, score:dataUsers[m].score};
				console.log('Пользователь найден');
			}
		}
	}
	else {
		console.log('Пользователь не найден');
	}
});
app.listen(3001, console.log("Ready on port 3001"));