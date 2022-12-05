let loginForm = document.getElementById("login-form");
let loginButton = document.getElementById("login-form-submit");
let loginErrorMsg = document.getElementById("login-error-msg");

/*loginButton.addEventListener("click", (e) => {*/
function signIn(event) {
  /*let acceptedMails = ["loulou@gmail.com", "patrick@hotmail.com"];
  let matchingPasswords = ["iamloulou", "pengouz"];*/
  let userData = {
    "loulou@gmail.com": "iamloulou",
    "patrick@hotmail.com": "pengouz",
  };
  let user = username.value;
  let pass = password.value;
  if (userData[user] === pass) {
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
fetch("http://192.168.0.112:1337/api/cars", {
  method: "GET",
  headers: {
    Authorization:
      "Bearer cce22e2509c1edea7df99aa82a2255c90acffe679924e87e55e6ebe75d76c04e196a9fcd8ba3ad3ec560438d73d68c5558f5f79420c18cc6985e58c6d643698be9559082991027a7e89fbd7006a925c9107ca2a9070eb642dc1078632d0ddb8af17e7830ceafdd9eecf3bab1ce57f35932c93125560ac1fdbaac6a17d9315ded",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  //mode: "no-cors",
})
  .then((Response) => Response.json())
  .then((resJson) => {
    const cars = resJson?.data;
    console.log(cars);
  })
  .catch((error) => {
    console.log(error);
  });
