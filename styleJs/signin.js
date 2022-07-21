let data2=JSON.parse(localStorage.getItem("signup")) || [];
let flag=JSON.parse(localStorage.getItem("Value")) || "";
document.querySelector("form").addEventListener("submit",signinData);

let form=document.querySelector("form");

function signinData(){
    let obj3={
        email:form.email.value,
        pass:form.password.value
    }
    if(obj3.email=="" || obj3.pass==""){
        alert("Please fill all details");
    }else if(findData(data2,obj3)==true){
       alert("Successfully Loged in");
       flag=true;
       localStorage.setItem("Value",JSON.stringify(flag));
       window.location.href="index.html";
    }else{
        alert("You have Entered wrong details");
    }
}

function findData(data2,obj3){
    for(let i=0;i<data2.length;i++){
        if(data2[i].emailId==obj3.email && data2[i].password==obj3.pass){
            return true;
            break;
        }
    }
    return false;
}