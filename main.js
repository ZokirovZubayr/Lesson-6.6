let btnCreator = document.querySelector(".btnCreater");


btnCreator.addEventListener("click", function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(users => {
            const randomUser = users[Math.floor(Math.random() * users.length)];
            createUser(randomUser);
        })
        .catch(err => console.error("fetch error: ", err));
});

function createUser(user) {
    let nameUser = document.querySelector(".name");
    let lastUser = document.querySelector(".lastN");
    let emailUser = document.querySelector(".email");
    let companyUser = document.querySelector(".company");

    nameUser.innerHTML = user.name;
    lastUser.innerHTML = user.username;
    emailUser.innerHTML = user.email;
    companyUser.innerHTML = user.company.name;
}