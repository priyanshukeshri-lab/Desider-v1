let myData = [];

let addBtn = document.getElementById('addButton');
addBtn.addEventListener("click",(p)=>{
     let val = document.getElementById('mainInputText').value;
     if (val.trim() !== "") {
        myData.push(val);
        console.log("Current Array:", myData);
     } else{
        console.log("not work");
     }
});