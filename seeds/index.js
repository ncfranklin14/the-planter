const sequelize = require("../config/connection")
const {User,Blog} = require("../models")


const users = [
    {
        username:"ester",
        password:"password"
    },
    {
        username:"nicole",
        password:"password1"
    },
    {
        username:"nathan",
        password:"password12"
    },{
        username:"kalif",
        password:"password123"
    }
]

const blogs = [
    {
        title:"my first blog",
        content:"Welcome to my blog",
        imageUrl:"https://res.cloudinary.com/dkciyhgd8/image/upload/v1652130326/sample.jpg",
        UserId:1
        
    },
    {
        title:"my final blog",
        content:"I cant do this anymore",
        UserId:1
    },
    {
        title:"Cats: a review",
        content:"I love cats I love every kind of cat.  I want to hug all them but you cant. Cant hug every cat......Cant hug every cat. ",
        UserId:2
    }
]






// console.log("login linked");
// document.querySelector("#login").addEventListener("submit",e=>{
//   e.preventDefault();
//   const userObj = {
//     username:document.querySelector("#loginUsername").value,
//     password:document.querySelector("#loginPassword").value,
//   }
//   console.log(userObj)
//   fetch("/api/users/login",{
//       method:"POST",
//       body:JSON.stringify(userObj),
//       headers:{
//           "Content-Type":"application/json"
//       }
//   }).then(res=>{
//       if(res.ok){
//           console.log("logged in!")
//       } else {
//           alert("trumpet sound")
//       }
//   })
// })
