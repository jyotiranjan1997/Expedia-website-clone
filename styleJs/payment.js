let productPrice=JSON.parse(localStorage.getItem("pry"))||0;
let named=JSON.parse(localStorage.getItem("namefile")) || "";
    
    let flag=JSON.parse(localStorage.getItem("Value")) || "";

    if(flag==true){
        document.querySelector("#sign").innerText=named;
    }

let money=((+productPrice*12)/100);
let total=+productPrice+money;
if(flag==true){
    let total=+productPrice+(+productPrice*2)/100;
}else{
    let total=+productPrice+money; 
}

document.querySelector("#fir").innerText=productPrice;
document.querySelector("#fir1").innerText=money;
document.querySelector("#fir2").innerText=total;


document.querySelector("form").addEventListener("submit",sucess);
let form=document.querySelector("form");

function sucess(){
    event.preventDefault();

    let obj5={
        f:form.name.value,
        g:form.card.value,
        h:form.date.value,
        i:form.code.value,
        o:form.pan.value
    };

    if(obj5.f=="" || obj5.g=="" || obj5.h=="" || obj5.i=="" || obj5.o==""){
        alert("please fill all details");
    }else{
        window.location.href="sucess.html"
    }
    
}