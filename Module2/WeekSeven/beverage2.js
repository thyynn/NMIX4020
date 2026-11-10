const drinks = {
    Latte:{
        label: "Latte",
        description: "An espresso drink with steamed milk."
    },
    IcedMatchaLatte:{
        label: "Iced Matcha Latte",
        description: "A refreshing green tea drink with milk."
    },
    ChaiTea:{
        label: "Chai Tea",
        description: "A spiced black tea with cinammon."
    },
    BubbleTea:{
        label: "Bubble Tea",
        description: "A sweet milk tea with tapioca pearls."
    },
    ThaiIcedTea:{
        label: "Thai Iced Tea",
        description: "Strong black tea, sweetened and served over ice with cream."
    }
}

const buttonContainer = document.querySelector("#drink-buttons");
const descriptionOutput = document.querySelector("#aboutme");
const imageOutput = document.querySelector("#image");

for (const key in drinks){
    const button = document.createElement("button");
    button.textContent = drinks[key].label;
    
    button.addEventListener("click", function () {
        showDrink(key);
    });

    buttonContainer.appendChild(button);
}

function showDrink(drinkKey){
    descriptionOutput.textContent = drinks[drinkKey].description;
    imageOutput.innerHTML = "<img src='beveragepics2/" + drinkKey + ".png'>";
}