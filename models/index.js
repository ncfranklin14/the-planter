const Blog = require("./Blog");
const User = require("./User"); //Unincorperated atm
const Comment = require("./Comment");

Blog.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Blog)

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Blog.hasMany(Comment, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  Blog,
  Comment,
};
