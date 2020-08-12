// Update with your config settings.

module.exports = {
	development: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: './api/users.db3',
		},
		migrations: {
			directory: './data/migrations',
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done);
			},
		},
	},
};