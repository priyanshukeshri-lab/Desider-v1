let myData = [];

let addBtn = document.getElementById('addButton');
let mainInput = document.getElementById('mainInputText');

addBtn.addEventListener("click",(p)=>{
     inputarray();
});

mainInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        inputarray();
    }
});

function inputarray(){
   let val = mainInput.value;
     if (val.trim() !== "") {
        myData.push(val);
        console.log("Current Array:", myData);
     } else{
        console.log("input not found");
     }
}