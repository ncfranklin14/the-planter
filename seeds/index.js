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








console.log("login linked");
document.querySelector("#login").addEventListener("submit",e=>{
  e.preventDefault();
  const userObj = {
    username:document.querySelector("#loginUsername").value,
    password:document.querySelector("#loginPassword").value,
  }
  console.log(userObj)
  fetch("/api/users/login",{
      method:"POST",
      body:JSON.stringify(userObj),
      headers:{
          "Content-Type":"application/json"
      }
  }).then(res=>{
      if(res.ok){
          console.log("logged in!")
      } else {
          alert("trumpet sound")
      }
  })
})
