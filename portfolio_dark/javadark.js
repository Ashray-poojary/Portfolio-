function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "abc" && pass === "1234") {
        document.getElementById("message").style.color = "#ff9a5a";
        document.getElementById("message").outerText = "Login Successful!";
    } else {
        document.getElementById("message").style.color = "white";
        document.getElementById("message").outerText = "Invalid username or password";
    }
}