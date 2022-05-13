const cloudName = "dry2yoyfi"; // replace with your own cloud name
const uploadPreset = "yie0veny"; // replace with your own upload preset
let imageUrl;

const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: cloudName,
    uploadPreset: uploadPreset,
    sources: ["local", "url"], // restrict the upload sources to URL and local files
    multiple: false, //restrict upload to a single file
    folder: "user_images", //upload files to the specified folder
    context: { alt: "user_uploaded" }, //add the given context data to the uploaded files
    maxImageFileSize: 2000000, //restrict file size to less than 2MB
    maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info.secure_url);
      imageUrl = result.info.secure_url;
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

const handleAddBlog = function () {
  const content = document.querySelector("#content").value;
  console.log("content", content);
  fetch("/api/blogs", {
    method: "POST",
    body: JSON.stringify({
      content,
      imageUrl,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      location.reload();
    } else {
      alert("trumpet sound");
    }
  });
};
document.querySelector("#newBlog").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hello");
  handleAddBlog();
});


//mini project delete
const delButtonHandler = async (event) => {
  if (event.target.classList.contains("delete")) {
    const id = event.target.value;

    console.log("============================", event.target);
    const response = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete project");
    }
  }
};
document.querySelector("#deleteBtn").addEventListener("click", delButtonHandler);
