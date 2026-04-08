let myData = [];

let addBtn = document.getElementById("addButton");
addBtn.addEventListener("click",(p)=>{
    // console.log("yoho");
    // let val = document.querySelector("#mainInputText").value;  val.trim() !== ""
    let val = document.querySelector("#mainInputText");
     if (val) {
        /*myData.push(val);
        console.log("Current Array:", myData);*/
        console.log("worked");
     } else{
        console.log("not work");
     }
});