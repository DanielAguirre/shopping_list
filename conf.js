var conf= {
	port: 3000,
    mongoDB:{
    	host:"localhost",
    	name:"shopping_list"
    },
    passport:{
        facebook: {
            clientID: "725607784219796",
            clientSecret: "93c8664f60a9c039bd0bc14500bacce0",
            callbackURL: "http://localhost:3000/"
        },
        twitter: {
            consumerKey: "P8VK7Uj9xFf6ptckwN5VxJvSl",
            consumerSecret: "oDq6H8KGtqLlEXKPBD8PDbAAGCsVlJyrFySs4I8SU6eLs3uszQ",
            callbackURL: "http://example.com"
        },
    }
}

module.exports = conf;