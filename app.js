var USER_COUNT = 1;

var DB_USER = [
    {
        username: "gitgit",
        password: "password"
    }
]

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputVPassword = document.querySelector("#vpassword");
const buttonSubmit = document.querySelector("#submitForm");

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const valueInputPassword = inputPassword.value;
    const valueInputVPassword = inputVPassword.value;
    const valueInputUsername = inputUsername.value;

    let flag = 0;

    if (valueInputPassword !== valueInputVPassword) {
        flag = 1;
    }

    // DB_USER.map((data) => {
    //     if (data.username === valueInputUsername && data.password === valueInputPassword){
    //         flag = 1;
    //     }
    // })

    const warningMsg = document.querySelector(".warning");

    if (flag === 1){
        warningMsg.className = "text-danger";
    } else {
        USER_COUNT++;
        DB_USER.push({username: valueInputUsername, password: valueInputPassword});

        var i;
        for (i = 0; i < USER_COUNT; i++) {
            console.log(i);
            console.log("Username: " + DB_USER[i].username);
            console.log("Password: " + DB_USER[i].password);
        }

        alert("Selamat, data Anda berhasil ditambahkan!");
    }
})

