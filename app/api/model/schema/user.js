const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name		 : String, // Nombre del usuario
	provider	 : String, // Cuenta del usuario (Twitter o Facebook en este ejemplo)
	provider_id  : {type: String, unique: true}, // ID que proporciona Twitter o Facebook
	photo		 : String, // Avatar o foto del usuario
	createdAt	 : {type: Date, default: Date.now} // Fecha de creación
});

const User = mongoose.model('User', UserSchema);

module.exports = User;