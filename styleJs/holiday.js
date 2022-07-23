document.querySelector("#sign").addEventListener("click",changeButton)
function changeButton(){
    document.querySelector(".popup").style.display="flex";
}

document.querySelector("button").addEventListener("click",changePage);

function changePage(){
    window.location.href="signin.html";
}

document.querySelector("select").addEventListener("change",pageChanged);

function pageChanged(){
    let select=document.querySelector("select").value;
    if(select=="Stays"){
        window.location.href="stay.html";
    }else if(select=="Packages"){
        window.location.href="holiday.html";
    }
}

let named=JSON.parse(localStorage.getItem("namefile")) || "";
    
let flag=JSON.parse(localStorage.getItem("Value")) || "";

if(flag==true){
    document.querySelector("#sign").innerText=named;
}

