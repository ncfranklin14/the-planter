console.log("login linked");

function handleLogin(e) {
  e.preventDefault();

  const username = document.querySelector("#loginUsername").value;
  const password = document.querySelector("#loginPassword").value;

  fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      console.log("logged in!");
      document.location.replace("/");
    } else {
      alert("trumpet sound");
    }
  });
}

const handleSignup =  function (e) {
  e.preventDefault();
  const username = document.querySelector("#signupUsername").value;
  const password = document.querySelector("#signupPassword").value;

  fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      console.log("logged in!");
      document.location.replace("/");
    } else {
      alert("trumpet sound");
    }
  });
}

document.querySelector("#login").addEventListener("submit", handleLogin);
document.querySelector("#signup").addEventListener("submit", handleSignup);
