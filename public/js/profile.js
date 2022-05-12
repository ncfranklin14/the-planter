const cloudName = "dry2yoyfi"; // replace with your own cloud name
const uploadPreset = "yie0veny"; // replace with your own upload preset
let imageUrl;

const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: cloudName,
    uploadPreset: uploadPreset,
    sources: [ "local", "url"], // restrict the upload sources to URL and local files
    multiple: false,  //restrict upload to a single file
    folder: "user_images", //upload files to the specified folder
    context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info.secure_url);
      imageUrl = result.info.secure_url
      document
        .getElementById("uploadedimage")
        .setAttribute("src", result.info.secure_url);
    }
  }
);

document.getElementById("upload_widget").addEventListener(
  "click",
  function () {
    myWidget.open();
  },
  false
);

const handleAddBlog = function() {
const title = document.querySelector("#title").value;
const content = document.querySelector("#content").value;
console.log("title", title, content)
  fetch("/api/blogs",{
      method:"POST",
      body:JSON.stringify({
        title,
        content,
        imageUrl
      }),
      headers:{
          "Content-Type":"application/json"
      },
  }).then(res=>{
      if(res.ok){
         location.reload()
      } else {
          alert("trumpet sound")
      }
  })
}
document.querySelector("#newBlog").addEventListener("submit",e => 
{ e.preventDefault()
  console.log("hello")
  handleAddBlog()});



// document.querySelector("#newBlog").addEventListener("submit",e=>{
//   e.preventDefault()
//   const blogObj = {
//       title:document.querySelector("#title").value,
//       body:document.querySelector("#body").value,
//       imgUrl:document.querySelector
//   }
//   fetch("/api/blogs",{
//       method:"POST",
//       body:JSON.stringify(blogObj),
//       headers:{
//           "Content-Type":"application/json"
//       }
//   }).then(res=>{
//       if(res.ok){
//          location.reload()
//       } else {
//           alert("trumpet sound")
//       }
//   })
// })
