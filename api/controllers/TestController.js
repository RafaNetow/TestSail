/**
 * TestController
 *
 * @description :: Server-side logic for managing Tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
   GetData: function(request, response){
     User.find({}).exec(function(err,user){
     	return response.json(user);
     });
   },

   InsertOne: function(req, res) {
   	var age = req.param('age');
   	User.create({Age: age}).exec(function(err, created){
   		return res.json(created);
   	})
   }
};
