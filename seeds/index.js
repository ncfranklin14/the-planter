const sequelize = require("../config/connection")
const { User, Blog } = require("../models")

const seed = async () => {
    const users = await User.bulkCreate(
        [
            {
                username: "ester",
                password: "password"
            },
            {
                username: "nicole",
                password: "password1"
            },
            {
                username: "nathan",
                password: "password12"
            }, {
                username: "kalif",
                password: "password123"
            }
        ])

    const blogs = await Blog.bulkCreate(
        [
            {
                title: "my first blog",
                content: "Welcome to my blog",
                user_id: 1,
                imageUrl: "https://res.cloudinary.com/dkciyhgd8/image/upload/v1652130326/sample.jpg",

            },
            {
                title: "my final blog",
                content: "I cant do this anymore",
                user_id: 1
            },
            {
                title: "Cats: a review",
                content: "I love cats I love every kind of cat.  I want to hug all them but you cant. Cant hug every cat......Cant hug every cat. ",
                user_id: 2
            }
        ])
}


sequelize.sync({force: true}).then(()=>{seed()})





