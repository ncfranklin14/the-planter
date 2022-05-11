console.log("user linked")
const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector("#title").value;
    const body = document.querySelector("#body").value;
  
    console.log(title);
    console.log(body);
  
    await fetch(`/api/blogs`, {
      method: "POST",
      body: JSON.stringify({
        title,
        body
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      if (res.ok) {
        console.log("success");
        document.location.reload()
      } else {
        alert("trumpet sound");
      }
    })
  
  };
  
  document.querySelector("#submitBtn").addEventListener("click", newFormHandler)