const router = require('express').Router();
const User = require('../users/user-model.js');
const bcrypt = require('bycryptjs');
const { checkInput } = require('../users/users-checks.js');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

router.post('/register', async (req, res) => {
	const userCredentials = req.body;

	if (checkInput(userCredentials)) {
		const hash = bcrypt.hashSync(userCredentials.password, 8);
		userCredentials.password = hash;

		try {
			const saved = await Users.add(userCredentials);
			res.status(201).json(saved);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	} else {
	}
});
