let myData = [];

let addBtn = document.getElementById('addButton');
let mainInput = document.getElementById('mainInputText');
let deciBtn = document.getElementById('disider');

addBtn.addEventListener("click",(p)=>{
     inputarray();
});

mainInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        inputarray();
    }
});

deciBtn.addEventListener("click",(r)=>{
   console.log("\ntotal number of element you have entered %d",myData.length);
   const randomItem = myData[Math.floor(Math.random() * myData.length)];
   console.log("your item that we decided is %s", randomItem);
})

function inputarray(){
   let val = mainInput.value;
     if (val.trim() !== "") {
        myData.push(val);
        console.log("Current Array:", myData);
     } else{
        console.log("input not found");
     }
}