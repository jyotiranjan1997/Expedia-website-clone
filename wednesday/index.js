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
    }
    
}

