const alertMessage = document.querySelector(".alert-msg");
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // IF EMAIL ID OR PASSWORD IS WRONG THEN BELOW MESSAGE WILL GENERATE
  if (email === "admin@admin.com" && password === "12345") {
    alertMessage.setAttribute("style", "color:green;");
    alertMessage.innerText = "Login Successful";

    setTimeout(() => {
      alertMessage.innerText = "";
    }, 2000);
  } else {
    alertMessage.innerText = "Incorrect email or password";
    alertMessage.setAttribute("style", "color:red;");

    setTimeout(() => {
      alertMessage.innerText = "";
    }, 2000);
  }
});
