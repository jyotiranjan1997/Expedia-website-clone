
let data2=JSON.parse(localStorage.getItem("signup")) || [];
document.querySelector("form").addEventListener("submit",signupData);
let form=document.querySelector("form");

function signupData(){
    event.preventDefault();
    let obj2={
        emailId:form.email.value,
        FirstName:form.name.value,
        surname:form.lastName.value,
        password:form.pass.value
    }

    if(obj2.emailId=="" || obj2.FirstName=="" || obj2.surname=="" || obj2.password==""){
        alert("Please fill all Details");
    }else if(find(data2,obj2)==true){
        alert("You have already signup ");
    }else{
    data2.push(obj2);
    localStorage.setItem("signup",JSON.stringify(data2));
    alert("Successfully Signup");
    window.location.href="signin.html";
    }

    
}


function find(data2,obj2){
    for(let i=0;i<data2.length;i++){
        if(data2[i].emailId==obj2.emailId || data2[i].FirstName==obj2.FirstName){
            return true;
            break;
        }
    }
    return false;
}