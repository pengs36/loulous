let loginForm = document.getElementById("login-form");
let loginButton = document.getElementById("login-form-submit");
let loginErrorMsg = document.getElementById("login-error-msg");

/*loginButton.addEventListener("click", (e) => {*/
function signIn(event) {
  /*let acceptedMails = ["loulou@gmail.com", "patrick@hotmail.com"];
  let matchingPasswords = ["iamloulou", "pengouz"];*/
  let users = {
    "loulou@gmail.com": "iamloulou",
    "patrick@hotmail.com": "pengouz",
  };
  let user = username.value;
  let pass = password.value;
  if (users[user] === pass) {
    /* && pass === matchingPasswords[0]) ||
    (user === acceptedMails[1] && pass === matchingPasswords[1])
  )*/ event.preventDefault();
    alert("You have successfully logged in.");
    location.replace("homePage.html");
    return true;
  } else {
    event.preventDefault();
    document.getElementById("login-error-msg").style.display = "block";
    return false;
  }
}
fetch("http://localhost:1337/api/users")
  .then((Response) => {
    return Response.json();
  })
  .then((users) => {
    console.log(users);
  });
