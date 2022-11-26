function hidesnacks() {
  document.getElementById("snacks").style.display = "none";
}
function hidedrinks() {
  document.getElementById("drinks").style.display = "none";
}
function hidecigs() {
  document.getElementById("cigs").style.display = "none";
}
function hideall() {
  document.getElementById("all").style.display = "none";
}
let selectBox1 = document.getElementById("dd1");
let dd1val = selectBox1.value;
function hideshow(dd1val) {
  if (dd1val === "1") {
    document.getElementById("snacks").style.display = "flex";
    document.getElementById("drinks").style.display = "flex";
    document.getElementById("cigs").style.display = "flex";
  } else if (dd1val === "2") {
    hidedrinks();
    hidecigs();
    document.getElementById("snacks").style.display = "flex";
  } else if (dd1val === "3") {
    hidesnacks();
    hidecigs();
    document.getElementById("drinks").style.display = "flex";
  } else if (dd1val === "4") {
    hidedrinks();
    hidesnacks();
    document.getElementById("cigs").style.display = "flex";
  }
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
// let selectBox2 = document.getElementById("dropy");
// let dropyval = selectBox2.value;
// var categ = "";
// function setCateg() {
//   let dropyval = document?.getElementById("dropy")?.value;
//   if (dropyval === "snacks") {
//     categ = "snacks";
//   } else if (dropyval === "drinks") {
//     categ = "drinks";
//   } else if (dropyval === "cigarettes") {
//     categ = "cigarettes";
//   }
// }
function sub(event) {
  var em = document.getElementById("email").value.trim();
  var prod = document.getElementById("product").value.trim();
  const categ = document?.getElementById("dropy")?.value;
  let emLength = em.length;
  let prodLength = prod.length;
  let form = document.getElementsByClassName("form-container")[0];

  if ((emLength != 0, prodLength != 0)) {
    event.preventDefault();
    alert("Email : " + em + "\nCategory : " + categ + "\nProduct : " + prod);
    //fill table
    document.getElementById("table").innerHTML +=
      "<tr><td>" + em + "</td><td>" + categ + "</td><td>" + prod + "</td></tr>";
    //add suggestion to where it should be
    if (categ === "snacks") {
      document.getElementById("snacks").innerHTML +=
        "<div class='col-sm-3'><img class='img-fluid' src='' alt=" +
        prod +
        " style='display:flex; text-align: center ; padding-top:100px;padding-bottom:100px;'></div>";
    } else if (categ === "drinks") {
      document.getElementById("drinks").innerHTML +=
        "<div class='col-sm-3'><img class='img-fluid' src='' alt=" +
        prod +
        " style='display:flex; text-align: center ; padding-top:100px;padding-bottom:100px;'></div>";
    } else if (categ === "cigarettes") {
      document.getElementById("cigs").innerHTML +=
        "<div class='col-sm-3'><img class='img-fluid' src='' alt=" +
        prod +
        " style='display:flex; text-align: center ; padding-top:100px;padding-bottom:100px;'></div>";
    }
    return true;
  } else if (
    (emLength == null || emLength == "", prodLength == null || prodLength == "")
  )
    event.preventDefault();
  alert("please fill all fields");
  return false;
}
function showTable() {
  hideall();
  document.getElementById("table").style.display = "block";
  document.getElementById("goBack").style.display = "block";
  document.getElementById("goTable").style.display = "none";
}
function showAll() {
  document.getElementById("all").style.display = "block";
  document.getElementById("table").style.display = "none";
  document.getElementById("goBack").style.display = "none";
  document.getElementById("goTable").style.display = "block";
}
