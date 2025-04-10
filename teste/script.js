const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const camera = document.querySelector("#camera");
const foto = document.querySelector("#foto");
const login = document.querySelector("#login");
const cadastro = document.querySelector("#cadastro");

var imagem = "";

camera.addEventListener("click", () => {
    foto.click();
});

foto.addEventListener("change", (e) => {
    let file = e.target.files[0];

    let reader = new FileReader();

    reader.onload = (data) => {
        //console.log(data.target.result);
        imagem = data.target.result;
    }

    reader.readAsDataURL(file);
});

function verificaLogin() {
    if(localStorage.getItem('userdata') != null) {
        window.location.href = '../home';
    }
}

function conectar() {    
    let data = JSON.stringify({
        nome: nome.value,
        email: email.value,
        senha: senha.value,
    });

    console.log(data);

    fetch("http://localhost:7000/login", {
        "method": 'POST',
        "headers": {
            "Content-Type": "application/json"
        },
        "body": data
    })
    .then(resp => { return resp.json() })
    .then(data => {
        if(data.length > 0) {
            localStorage.setItem("userdata", JSON.stringify(data[0]));
            window.location.href = '../home';
        }else {
            alert("Usuario ou Senha invalidos");
        }
    })
}

function registrar() {
    let data = JSON.stringify({
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        foto: imagem,
    })

    fetch("http://localhost:7000/usuario", {
        "method": "POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": data
    })
    .then(resp => { return resp.json() })
    .then(data => {
        if(data.id !== undefined) {
            localStorage.setItem("userdata", JSON.stringify(data));
            window.location.href = '../home';
        }else {
            alert(data.err);
        }
    })
}

function cadastrar() {
    login.innerHTML = "Cadastrar";
    login.onclick = registrar;
    cadastro.hidden = true;
    camera.hidden = false;
}