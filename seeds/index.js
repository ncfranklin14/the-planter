const sequelize = require("../config/connection")
const { User, Blog } = require("../models")

const seed = async () => {
    await sequelize.sync({force:true})
     await User.bulkCreate(
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

     await Blog.bulkCreate(
        [
            {
                content: "My boyfriend gave me these pretty flowers but I can't figure out if they are more of a Queen Bees or Daphnes",
                user_id: 1,
                imageUrl: "https://res.cloudinary.com/dkciyhgd8/image/upload/v1652130326/sample.jpg",

            },
        
            {
                title: "my first blog",
                content: "Welcome to my blog",
                user_id: 1,
                imageUrl: "https://res.cloudinary.com/dkciyhgd8/image/upload/v1652130326/sample.jpg",

            },
        
            {
                title: "my first blog",
                content: "Welcome to my blog",
                user_id: 1,
                imageUrl: "https://res.cloudinary.com/dkciyhgd8/image/upload/v1652130326/sample.jpg",

            },
        
            {
                title: "my first blog",
                content: "Welcome to my blog",
                user_id: 1,
                imageUrl: "https://res.cloudinary.com/dkciyhgd8/image/upload/v1652130326/sample.jpg",

            },
        
            {
                title: "my first blog",
                content: "Welcome to my blog",
                user_id: 1,
                imageUrl: "https://res.cloudinary.com/dkciyhgd8/image/upload/v1652130326/sample.jpg",

            },
        
            {
                title: "my first blog",
                content: "Welcome to my blog",
                user_id: 1,
                imageUrl: "https://res.cloudinary.com/dkciyhgd8/image/upload/v1652130326/sample.jpg",

            },
            {
                content: "I got this plant from my neighbor. It's really big and green and I don't know what to name it",
                user_id: 1,
                imageUrl:"https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202209/3557/img78z.jpg"
            },
            {
                content: "This cactus needs help! I can't seem to tell what a fitting name for him. He looks like a bunny.",
                user_id: 2,
                imageUrl:"https://www.thespruce.com/thmb/avx3x1iviL6x8XS-rctHhHTtzd4=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bunny-ear-cactus-guide-5190802-hero-454fc58d4d5b4024931877d278ed14e9.jpg"
            }
        ])
}


seed()





