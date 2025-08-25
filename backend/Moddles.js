const mongoos = require(mongoos);
const Schema = mongoos.Schema;

const userSchema = new Schema({
    id:Number,
    name:String
});

const User = mongoos.model('User', userSchema);

module.exports = User;