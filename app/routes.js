var DbTest = require('./models/DbTest'); 
module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get('/api/dbtest', function(req, res) {
        return DbTest.find(function(err,resp){
            return res.json(resp)
        }) 
	});
	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};