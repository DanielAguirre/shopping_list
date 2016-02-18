const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: 		String, // Nombre del usuario
	displayName:  String,
	provider: 	  String, // Cuenta del usuario (Twitter o Facebook en este ejemplo)
	provider_id:	String, // ID que proporciona Twitter o Facebook
	photo: 				String, // Avatar o foto del usuario
	createdAt: 		{type: 'Date', default: Date.now} // Fecha de creación
});

const User = mongoose.model('User', UserSchema);

module.exports = User;