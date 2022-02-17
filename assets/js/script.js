/*
JS é Case Sensitive

por Tag: getElementByTagName()
por Id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector() [ultima atualização]

*/

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let assuntoOk = true;
let emailOk = false;
let mapa = document.querySelector("#mapa");

nome.style.width = "100%";
email.style.width = "100%";
profissao.style.width = "100%";
assunto.style.width ="100%";

function ValidaNome() {
    let txt = document.querySelector("#txtNome");
    if (nome.value.length < 3) {
        txt.innerHTML = "Nome Inválido"
        txt.style.color = "red";
    }
    else {
        txt.innerHTML = "";
        nomeOk = true;
    }
}

function ValidaEmail() {
    let txtEmail = document.querySelector("#txtEmail");
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".com") == -1) {
        txtEmail.innerHTML = "E-Mail Inválido"
        txtEmail.style.color = "red";
    }
    else {
        txtEmail.innerHTML = "";
        emailOk = true;
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto");

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Você atingiu o limite de caracteres";
        txtAssunto.style.color = "red";
        assuntoOk = false;
    }
    else {
        txtAssunto.innerHTML = "";
        assuntoOk = true;
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso.");
    }
    else {
        alert("Por favor, preencha os campos corretamente.");
    }
}

function mapaZoom() {
    mapa.style.width = "800px";
    mapa.style.height = "600px";
}

function mapaNormal() {
    mapa.style.width = "400px";
    mapa.style.height = "250px";
}
