let data1=JSON.parse(localStorage.getItem("stays")) || [];
document.querySelector("form").addEventListener("submit",dataCollect);
let form=document.querySelector("form");

function dataCollect(event){
    event.preventDefault()
    let obj1={
        area:form.area.value,
        dateS:form.date1.value,
        dateE:form.date2.value,
        room:form.room.value
    };
    if(obj1.area=="" || obj1.dateS=="" || obj1.dateE=="" || obj1.room==""){
        alert("Please fill all the Empty Boxes")
    }else{
        data1.push(obj1);
        localStorage.setItem("stays",JSON.stringify(data1));
        window.location.href="product.html";
    }
    
}



document.querySelector("#stays").addEventListener("click",changeStay);
function changeStay(){
    window.location.href="index.html"
}

document.querySelector("#holiday").addEventListener("click",changeBox);

function changeBox(){
    document.querySelector("form").innerHTML="";
    let div1=document.createElement("div");
    let input1=document.createElement("input");
    input1.type="text";
    input1.placeholder="Things to do"
    div1.append(input1);
    let div2=document.createElement("div");
    let input2=document.createElement("input");
    input2.type="date";
    div2.append(input2);
    let div3=document.createElement("div");
    let input3=document.createElement("input");
    input3.type="date";
    div3.append(input3);
    let div4=document.createElement("div");
    let input4=document.createElement("input");
    input4.type="submit"
    input4.value="Search"
    input4.style.marginLeft="120%"
    div4.append(input4);
   
   
  document.querySelector("form").append(div1,div2,div3,div4);
  document.querySelector("form").style.gridTemplateColumns="repeat(3,1fr)";
}


document.querySelector("#package").addEventListener("click",changePackage);

function changePackage(){
    document.querySelector("form").innerHTML="";
    let div1=document.createElement("div");
    let input1=document.createElement("input");
    input1.type="text";
    input1.placeholder="Leaving form"
    div1.append(input1);
    let div2=document.createElement("div");
    let input2=document.createElement("input");
    input2.type="text";
    input2.placeholder="Going to"
    div2.append(input2);
    let div3=document.createElement("div");
    let input3=document.createElement("input");
    input3.type="date";
    div3.append(input3);
    let div4=document.createElement("div");
    let input4=document.createElement("input");
    input4.type="date"
    
    div4.append(input4);

    let div5=document.createElement("div");
    let input5=document.createElement("input");
    input5.type="submit"
    input5.value="Search"
    div5.append(input5);
    
    
  document.querySelector("form").append(div1,div2,div3,div4,div5);
  document.querySelector("form").style.gridTemplateColumns="repeat(4,1fr)";
}

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
  
 

