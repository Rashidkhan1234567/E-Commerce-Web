let newAccount = document.getElementById('caa')
newAccount.addEventListener("click",()=>{
   let login_box =  document.getElementById("login-box")
   login_box.style.left = "-200%"
   let signup_box  = document.getElementById("signup-box")
   signup_box.style.left = "50%"
let chnge = document.querySelector("title")
chnge.textContent = "Sign Up"
document.querySelector('link[rel="icon"]').href ="Images/logo for Sign up Page.jpeg";
})
let haveAccount = document.getElementById('aha')
haveAccount.addEventListener("click",()=>{
  let login_box =  document.getElementById("login-box")
  login_box.style.left = "50%"
  let signup_box  = document.getElementById("signup-box")
  signup_box.style.left = "150%"
  let change  = document.querySelector("title")
  change.textContent = "Login"
  document.querySelector('link[rel="icon"]').href ="Images/logo for Login Page.jpeg";
})


let skip = document.getElementById('skip')
skip.addEventListener("click",()=>{
    location.replace("public/Main.html")
    localStorage.setItem("name","bot")
})


//       New inputs

let create_name = document.getElementById("cname");
let create_email = document.getElementById("cemail");
let create_password = document.getElementById("cpass");
const create_acc = document.getElementById("signup");


//       New inputs Functions

create_password.addEventListener("keypress", function (event) {
  const regex = /^[a-zA-Z0-9]+$/;
  if (!regex.test(event.key)) {
    event.preventDefault();
  }
});
function signup() {
  let name = create_name.value;
  let email = create_email.value;
  let password = create_password.value;
  
  if (name == "" || email == "" || password == "") {
    Swal.fire({
      text: "Please fill all the fields",
      icon: "warning",
    });
  } else {
    if (localStorage.getItem(email) == email) {
      Swal.fire({
        text: "Email already exists",
        icon: "warning",
      });
    } else {
      if (localStorage.getItem(name)) {
        Swal.fire({
          text: "Name already exists. Please choose a different Name.",
          icon: "warning",
        });
      } else {
        const user = {
          name: name,
          email: email,
          password: password,
        };
        localStorage.setItem(name, JSON.stringify(user));
        Swal.fire({
          title: "Account created successfully",
          icon: "success",
        });
        setTimeout(()=>{
          let login_box =  document.getElementById("login-box")
          login_box.style.left = "50%"
          let signup_box  = document.getElementById("signup-box")
          signup_box.style.left = "150%"
       let change  = document.querySelector("title")
       change.textContent = "Login"
        },2000)
      }
    }
  }
}

create_acc.addEventListener("click", signup);

//       Old inputs

let check_name = document.getElementById("oname");
let check_email = document.getElementById("oemail");
let check_password = document.getElementById("opass");
const login_btn = document.getElementById("login");


login_btn.addEventListener("click", () => {
  let Names = check_name.value;
  let email = check_email.value;
  let password = check_password.value;
  let local = JSON.parse(localStorage.getItem(Names));
  if (Names == "" || email == "" || password == "") {
    Swal.fire({
      text: "Please fill all the fields",
      icon: "warning",
    });
  } else{
    if (local == null) {
      Swal.fire({
        title: "User not found",
        text: "Please Create a account",
        icon: "warning",
      });
    } else {
      if (local.email == email) {
        if ( local.password ==  password) {
          Swal.fire({
            title: "Login Successfully",
            icon: "success",
          });
        localStorage.setItem("name",Names)
          setInterval(function () {
            window.location.replace("public/Main.html");
          }, 2000);
        } else {
          Swal.fire({
            text: "Incorrect password",
            icon: "warning",
          });
        }
      } else {
        Swal.fire({
          text: "Incorrect email",
          icon: "warning",
        });
      }
    }
  }
});

