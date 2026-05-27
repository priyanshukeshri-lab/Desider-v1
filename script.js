let myData = [];

let addBtn = document.getElementById('addButton');
let input = document.getElementById('mainInputText');
let deciBtn = document.getElementById('disiderButton');
let choiceContainer = document.getElementById("choice-container");

addBtn.addEventListener("click",(p)=>{
     inputarray();
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        inputarray();
    }
});

deciBtn.addEventListener("click",(r)=>{
   console.log("\ntotal number of element you have entered %d",myData.length);
   if(myData.length === 0){
    console.log("No choices available");
    return;
   }
   const randomItem = myData[Math.floor(Math.random() * myData.length)];
   console.log("your item that we decided is %s", randomItem);
})

function inputarray(){
   let val = input.value;
     if (val.trim() !== "") {
        myData.push(val);
        renderChoices();
        val = "";
        console.log("Current Array:", myData);
     } else{
        console.log("input not found");
     }  
}

function renderChoices(){

    choiceContainer.innerHTML = "";

    myData.forEach((choice, index) => {

        let chip = document.createElement("div");

        chip.classList.add("chip");

        chip.innerHTML = `
            ${choice}
            <button onclick="removeChoice(${index})">×</button>
        `;

        choiceContainer.appendChild(chip);

    });

}

function removeChoice(index){

    myData.splice(index, 1);

    renderChoices();

}
