const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema({
	username: {
		type: String,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	},
});

const Table = mongoose.model("authModel", TableSchema);

module.exports = Table;
