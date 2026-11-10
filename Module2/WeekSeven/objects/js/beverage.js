let drinkMenu = {
    "Latte": "A smooth espresso drink made with steamed milk and a little foam.",
    "IcedMatchaLatte": "A refreshing green tea drink with milk and a hint of sweetness.",
    "ChaiTea": "A spiced black tea blended with cinnamon, cardamom, and cloves.",
    "BubbleTea": "A sweet milk tea with chewy tapioca pearls.",
    "ThaiIcedTea": "Strong black tea, orange color, sweetened and served over ice with cream."
};

let drinkDisplayMap = {
    "Latte": "Latte",
    "IcedMatchaLatte": "Iced Matcha Latte",
    "ChaiTea": "Chai Tea",
    "BubbleTea": "Bubble Tea",
    "ThaiIcedTea": "Thai Iced Tea"
};

let drinkArray = ["Latte", "IcedMatchaLatte", "ChaiTea", "BubbleTea", "ThaiIcedTea"];
let drinkList = document.querySelector("#adrink");

for (let key in drinkDisplayMap) {
    drinkList.innerHTML += `<option value="${key}">${drinkDisplayMap[key]}</option>`;
}

function serveDrink() {
   let sName = document.querySelector("#adrink").value;

   if (drinkMenu.hasOwnProperty(sName)){
    document.querySelector("#aboutme").innerHTML = drinkMenu[sName];

    document.querySelector('#image').innerHTML = "<img src='beveragepics/" + sName + ".png' alt='" + drinkDisplayMap[sName] + "' style='max-width: 300px;'>";
    } 
    else {
    document.querySelector("#aboutme").innerHTML = sName + " isn't available here.";
    document.querySelector('#image').innerHTML = "";
   }
} 