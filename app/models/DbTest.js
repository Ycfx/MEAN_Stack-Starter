// grab the mongoose module
var mongoose = require('mongoose');
var schema = {
	name : String,
	age: Number
}
var DbTest = mongoose.model('tests', schema);

module.exports = DbTest