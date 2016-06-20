const modelList = require('./schema/list');


const ShoppingList = function(){
	return {
		find: (_id,callback) => {
			modelList
				.findOne({'_id':_id})
				.exec((err,res) => {
					callback(res);
				})
		},
		findAll: ( callback) => {
			modelList.find({}, (err,res) =>{
					callback(res);
				});
		},

		save: (data, callback) => {
			modelList.create(data, (err,res) =>{
					if (err) throw err;
					callback(res)
				});
		},


		update: (id,list,callback) => {
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

		delete: (id, callback) => {
			modelList.remove({_id:id}, (err,data) => {
				if(err) throw err;
				console.log("delete")
				callback();
			});
		}
	}
}

module.exports = ShoppingList;