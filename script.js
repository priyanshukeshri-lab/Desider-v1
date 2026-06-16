let savedChoices = localStorage.getItem("choices");
let myData = savedChoices ? JSON.parse(savedChoices) : [];

let addBtn = document.getElementById('addButton');
let input = document.getElementById('mainInputText');
let deciBtn = document.getElementById('disiderButton');
let choiceContainer = document.getElementById("choice-container");
let clearBtn = document.getElementById("clearButton");

addBtn.addEventListener("click",(p)=>{
     inputarray();
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        inputarray();
    }
});

deciBtn.addEventListener("click", () => {

    if(myData.length === 0){
        return;
    }

    const randomItem =
        myData[Math.floor(Math.random() * myData.length)];

    document.getElementById("resultText").textContent =
        randomItem;

    document.getElementById("resultBox").style.display =
        "block";

});

clearBtn.addEventListener("click", () => {

    let confirmDelete = confirm("Remove all choices?");

    if(confirmDelete){

        myData = [];

        localStorage.removeItem("choices");

        renderChoices();

    }

});

function inputarray(){
   let val = input.value;
     if (val.trim() !== "") {
        myData.push(val);
        localStorage.setItem("choices", JSON.stringify(myData));
        renderChoices();
        val = "";
        // console.log("Current Array:", myData);
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
    localStorage.setItem("choices", JSON.stringify(myData));
    renderChoices();

}
