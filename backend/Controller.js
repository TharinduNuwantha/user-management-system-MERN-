const User = require('./Moddles');


const getUsers = (req,res,next) =>{
    User.find()
        .then(response => {
            res.json({response});
        })
        .catch(error => {
            res.json({error});
        })
}


exports.getUsers = getUsers;
exports.getUserById = getUserById;