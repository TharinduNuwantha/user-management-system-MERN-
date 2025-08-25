const User = require('./Moddles');


const getUsers = (req,res,next) =>{
    
}

const getUserById = (id,cb)=>{
    const user = users.find(user => user.id == id);
    cb(user);
}

exports.getUsers = getUsers;
exports.getUserById = getUserById;