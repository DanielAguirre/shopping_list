const modelList = require('./schema/list');

const ShoppingList = {
	findAll: function( callback) {
		modelList
			.find({},function(err,res){
				callback(res);
			});
	},
	save: function(data, callback) {
		modelList
			.create(data, function(err,res){
				if(err) throw err;
				callback(res)
			})

	},


	get: function(_id,callback) {
		modelList
			.findOne({'_id':_id})
			.exec(function(err,res){			
				callback(res);
			})
	},

	update: function(id,list,callback){
		modelList
			.findOneAndUpdate(
				{_id:id},
				{ 
					'total':list.total,
					'products':list.products
				},
				function(err, data){
					if(err) throw err;
					callback(data);
				})
	},


	delete: function(id, callback){
		modelList.remove({_id:id},function(err,data){
			if(err) throw err;
			console.log("delete")
			callback();
		});
	}
}

module.exports = ShoppingList;