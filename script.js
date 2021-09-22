let myName = document.getElementById("userName");

function editName(){
    myName.innerText = " Johnny Mnemonic"
}

let requester = document.getElementById("requester-one");

function deny() {
    requester.remove();
}