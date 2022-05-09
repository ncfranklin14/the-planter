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