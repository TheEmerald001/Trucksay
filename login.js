const trysession = document.getElementById("login");
let loggingIn;

function handleLogin(e) {
    e.preventDefault();

    let logInData = {
        name: document.getElementById("usname").value,
        password: document.getElementById("uspassword").value,
    };
    loggingIn = logInData;
    fetch(`https://data-store-server-production.up.railway.app/users/${paramas}`)
    .then(r => r.json())
    .then(userValidator)
}
function userValidator(users){
    users.forEach(showUser);
}
function showUser(object){
    const attemptlog = []
    attemptlog.push(object.username)
    attemptlog.push(object.password)
    if (attemptlog[0] == loggingIn.name && attemptlog[1] == loggingIn.password){
        window.location = "./home.html"
    }else{
        console.log("invalid username or password")
    }
}
trysession.addEventListener("submit", handleLogin)