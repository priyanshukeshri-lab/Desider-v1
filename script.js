let savedChoices = localStorage.getItem("choices");
let myData = savedChoices ? JSON.parse(savedChoices) : [];

let addBtn = document.getElementById("addButton");
let input = document.getElementById("mainInputText");
let deciBtn = document.getElementById("disiderButton");
let choiceContainer = document.getElementById("choice-container");
let clearBtn = document.getElementById("clearButton");
let resultBox = document.getElementById("resultBox");
let resultText = document.getElementById("resultText");

// ---------- Event Listeners ----------

addBtn.addEventListener("click", () => {
    inputArray();
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        inputArray();
    }
});

deciBtn.addEventListener("click", () => {

    if (myData.length === 0) {
        alert("Add some choices first!");
        return;
    }

    const randomItem =
        myData[Math.floor(Math.random() * myData.length)];

    resultText.textContent = randomItem;

    resultBox.style.display = "block";

    deciBtn.textContent = "Re-roll";
});

clearBtn.addEventListener("click", () => {

    let confirmDelete = confirm("Remove all choices?");

    if (!confirmDelete) return;

    myData = [];

    localStorage.removeItem("choices");

    renderChoices();

    resultBox.style.display = "none";

    deciBtn.textContent = "Pick One";
});

// ---------- Functions ----------

function inputArray() {

    let val = input.value.trim();

    if (val === "") {
        console.log("Input not found");
        return;
    }

    myData.push(val);

    localStorage.setItem(
        "choices",
        JSON.stringify(myData)
    );

    renderChoices();

    input.value = "";
}

function renderChoices() {

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

function removeChoice(index) {

    myData.splice(index, 1);

    localStorage.setItem(
        "choices",
        JSON.stringify(myData)
    );

    renderChoices();

    if (myData.length === 0) {

        resultBox.style.display = "none";

        deciBtn.textContent = "Pick One";
    }
}

// ---------- Initial Page Setup ----------

renderChoices();

resultBox.style.display = "none";