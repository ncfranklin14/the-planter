let formELArray = document.querySelectorAll("form");
console.log(formELArray);

for (let index = 0; index < formELArray.length; index++) {
  const element = formELArray[index];
  console.log(element);

  element.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e.target.dataset.id);
    console.log(e.target.children[1].value);

    let data = {
      comment: e.target.children[1].value,
      blog_id: e.target.dataset.id,
    };
    console.log(e.target);
    fetch("/api/comments/", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(function (response) {
      if (response.ok) {
        document.location.reload();
      } else {
        alert("Failed to edit dish");
      }
    });
  });
}
//${event.target.dataset.id
const handleAddLike = function (event) {
  const likes = document.querySelector(".likes").value;
  console.log(event.target.dataset.id);
  
  fetch(`/api/comments/${event.target.dataset.id}`, {
    method: "PUT",
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

for (
  let index = 0; index < document.querySelectorAll(".like-button").length;
  index++
) {
  const element = document.querySelectorAll(".like-button")[index];
  element.addEventListener("click", handleAddLike);
}
