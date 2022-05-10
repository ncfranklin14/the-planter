const Blog = require("./Blog")
const User = require("./User") //Unincorperated atm

User.hasMany(Blog);
Blog.belongsTo(User);


module.exports = { 
    User,
    Blog
}