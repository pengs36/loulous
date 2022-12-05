// fetch("https://restful-booker.herokuapp.com/auth", {
//   method: "POST",
//   headers: {
//     Accept: "*/*",
//     "Content-Type": "application/json",
//   },
//   body: {
//     username: "admin",
//     password: "password123",
//   },
// })

fetch(`https://api.quickkey.oncode.dev/login`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "responsable_it@quickkey.com",
    password: "Mes3amours!",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
/*fetch("https://restful-booker.herokuapp.com/auth/api/login", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: {
    username: "admin",
    password: "password123",
  },
});
.then((Response) => Response.json())
  .then((resJson) => {
    const cars = resJson?.data;
    console.log(cars);
  })
  .catch((error) => {
    console.log(error);
  });*/
