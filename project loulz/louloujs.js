function hidesnacks() {
  document.getElementById("snacks").style.display = "none";
}
function hidedrinks() {
  document.getElementById("drinks").style.display = "none";
}
function hidecigs() {
  document.getElementById("cigs").style.display = "none";
}
let selectBox = document.getElementById("dd1");
let val = selectBox.value;
function hideshow(val) {
  if (val === "1") {
    document.getElementById("snacks").style.display = "flex";
    document.getElementById("drinks").style.display = "flex";
    document.getElementById("cigs").style.display = "flex";
  } else if (val === "2") {
    hidedrinks();
    hidecigs();
    document.getElementById("snacks").style.display = "flex";
  } else if (val === "3") {
    hidesnacks();
    hidecigs();
    document.getElementById("drinks").style.display = "flex";
  } else if (val === "4") {
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
function sub(event) {
  var em = document.getElementById("email").value.trim();
  var categ = document.getElementById("category").value.trim();
  var prod = document.getElementById("product").value.trim();

  let emLength = em.length;
  let categLength = categ.length;
  let prodLength = prod.length;

  if ((emLength != 0, categLength != 0, prodLength != 0)) {
    event.preventDefault();
    alert("Email : " + em + "\nCategory : " + categ + "\nProduct : " + prod);
    return true;
  } else if (
    (emLength == null || emLength == "",
    categLength == null || categLength == "",
    prodLength == null || prodLength == "")
  ) {
    event.preventDefault();
    alert("please fill all fields");
    return false;
  }
}
