let names = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let change = document.getElementById("change");
let Name = localStorage.getItem("name")
let Storages = JSON.parse(localStorage.getItem(Name))

if (localStorage.getItem("name") == null) {
  location.replace("Service/index.html")
}else if (localStorage.getItem("name") == "bot"){

}else{
  let color = ["brown", "#009", "lightblue", "lightcoral", "lightgreen"];
  let change_color = Math.floor(Math.random() * color.length);
  change.style.height = "500px";
  change.style.width = "500px";
  change.style.borderRadius = "50%";
  change.style.paddingTop = "30px";
  change.style.paddingLeft = "150px";
  change.style.fontSize = "300px";
  change.style.color = "#000"
  change.style.paddingTop = "12px";
  change.style.backgroundColor = color[change_color];
  change.style.border = "1px solid #fff";
  change.textContent = localStorage.getItem("name").slice(0, 1).toUpperCase();

  let changes = document.getElementById("changes");

  changes.style.paddingTop = "12px";
  changes.style.backgroundColor = color[change_color];
  change.style.color = "#000"

  changes.style.border = "1px solid #fff";
  changes.textContent = localStorage.getItem("name").slice(0, 1).toUpperCase();

  //    Name
  let oneWord = Storages.name.slice(0,1).toUpperCase()
  let fullWord = Storages.name.slice(1).toLowerCase()
  names.textContent = oneWord +  fullWord
  document.getElementById("btn2").innerHTML = oneWord +  fullWord

  //    Email 

  email.textContent = Storages.email

  //   Password

  password.value = Storages.password
}



const logout = document.getElementById("logout");
logout.addEventListener("click", () => {
  let confirm1 = confirm("Confirm to logout");
  if (confirm1) {
    localStorage.removeItem("Name");
    window.location.replace("Service/index.html");
  }
});

//    show & hide password

let btn = document.getElementById("show_password")

btn.onclick = ()=>{
  if(password.type == "password"){
    password.type = "text"
    btn.textContent = "Hide"
  }else{
    password.type = "password"
    btn.textContent = "Show"

  }
}
