let formELArray=document.querySelectorAll ("form");
console.log(formELArray)

for (let index = 0; index < formELArray.length; index++) {
    const element = formELArray[index];
    console.log(element)


element.addEventListener("submit",function(e){
    e.preventDefault()
    console.log(e.target.dataset.id)
    console.log(e.target.children[0].value)

    let data={
        comment: e.target.children[0].value,
        blog_id: e.target.dataset.id,

    }
    fetch("/api/comments/", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
       
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return; // parses JSON response into native JavaScript objects
    })

}

