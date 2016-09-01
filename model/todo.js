module.exports = function(sequelize, DateTypes) {
	return sequelize.define('todo', {
		description: {
			type: DateTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 250]
			}

		},
		completed: {
			type: DateTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	});

};