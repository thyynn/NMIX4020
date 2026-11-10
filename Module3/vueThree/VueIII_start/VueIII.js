const drinkdata = {
    data() {
    return {
        // myDiv: {
        // bgColor: "#d9d6d6",
        // width: "400px",
        // fontFamily: 'Arial',
        // },
        divStructure: {
            backgroundColor: "#f5cac3",
            width: '400px'
        },
        
        divText: {
            fontFamily: 'Courier New',
            fontStyle: 'bold',
            color: 'black',
        },
        
        drink: 
    [{
    "drink_name": "Iced Matcha Latte",
    "fact": " A vibrant blend of green tea powder, milk, and ice for a smooth, earthy taste.",
    "section": "101",
    "counter": "201"
},
{
    "drink_name": "Cold Brew Coffee",
    "fact": " Brewed slowly in cold water for 12 hours, giving a naturally sweet and rich flavor.",
    "section": "101",
    "counter": "202"
},
{
    "drink_name": "Chai Tea Latte",
    "fact": " A cozy mix of black tea, milk, and spices like cinnamon, cardamom, and cloves.",
    "section": "102",
    "counter": "203"
},
{
    "drink_name": "London Fog",
    "fact": " Earl Grey tea with steamed milk and vanilla syrup — soft, floral, and comforting.",
    "section": "102",
    "counter": "204"
},
{
    "drink_name": "Thai Iced Tea",
    "fact": " Sweet and creamy black tea served over ice, a favorite street drink in Thailand.",
    "section": "103",
    "counter": "205"
},
{
    "drink_name": "Taro Milk Tea",
    "fact": " Sweet, nutty, and naturally purple — made from taro root and black tea.",
    "section": "103",
    "counter": "206"
},
{
    "drink_name": "Hibiscus Iced Tea",
    "fact": " Tart and refreshing with a deep ruby hue — naturally caffeine-free.",
    "section": "104",
    "counter": "207"
},
{
    "drink_name": "Espresso Macchiato",
    "fact": " A strong espresso shot topped with a dollop of steamed milk foam.",
    "section": "104",
    "counter": "208"
},
{
    "drink_name": "Lavender Latte",
    "fact": " A floral twist on a classic latte with lavender syrup and creamy milk.",
    "section": "105",
    "counter": "209"
},
{
    "drink_name": "Affogato Al Caffè",
    "fact": " A scoop of vanilla gelato drowned in a shot of hot espresso — dessert in a cup.",
    "section": "105",
    "counter": "210"
},
{
    "drink_name": "Iced Americano",
    "fact": " Espresso diluted with cold water for a lighter, more refreshing flavor.",
    "section": "106",
    "counter": "211"
},
{
    "drink_name": "Golden Turmeric Latte",
    "fact": " Spiced with turmeric, cinnamon, and ginger — an antioxidant-rich favorite.",
    "section": "106",
    "counter": "212"
},
{
    "drink_name": "Honey Oat Latte",
    "fact": " Smooth espresso with oat milk and honey for a naturally sweet touch.",
    "section": "107",
    "counter": "213"
},
{
    "drink_name": "Strawberry Matcha Latte",
    "fact": " Layered with strawberry purée, milk, and matcha — beautiful and delicious.",
    "section": "107",
    "counter": "214"
},
{
    "drink_name": "Peppermint Mocha",
    "fact": " Chocolate and espresso topped with whipped cream and a hint of mint.",
    "section": "108",
    "counter": "215"
},
{
    "drink_name": "Caramel Latte",
    "fact": " Sweet caramel flavor blended with espresso and creamy milk foam.",
    "section": "108",
    "counter": "216"
},
{
    "drink_name": "Oolong Milk Tea",
    "fact": " Semi-oxidized tea with a roasted aroma and silky finish when mixed with milk.",
    "section": "109",
    "counter": "217"
},
{
    "drink_name": "Rose Milk Tea",
    "fact": " Fragrant rose syrup mixed with black tea and milk for a floral sweetness.",
    "section": "109",
    "counter": "218"
},
{
    "drink_name": "Espresso Con Panna",
    "fact": " A rich espresso shot topped with lightly whipped cream.",
    "section": "110",
    "counter": "219"
},
{
    "drink_name": "Vanilla Cold Foam",
    "fact": " Cold brew topped with a thick layer of vanilla cold foam — smooth and creamy.",
    "section": "110",
    "counter": "220"
},
{
    "drink_name": "Coconut Latte",
    "fact": " Made with coconut milk for a tropical, dairy-free flavor twist.",
    "section": "111",
    "counter": "221"
},
{
    "drink_name": "Black Sugar Milk Tea",
    "fact": " Sweetened with caramelized brown sugar and tapioca pearls — chewy and bold.",
    "section": "111",
    "counter": "222"
},
{
    "drink_name": "Honeydew Bubble Tea",
    "fact": " Creamy melon flavor blended with milk and chewy boba pearls.",
    "section": "112",
    "counter": "223"
},
{
    "drink_name": "Espresso Tonic",
    "fact": " A refreshing mix of espresso and tonic water with a citrus twist.",
    "section": "112",
    "counter": "224"
},
{
    "drink_name": "Matcha Lemonade",
    "fact": " Bright and tangy — matcha shaken with lemonade over ice.",
    "section": "113",
    "counter": "225"
},
{
    "drink_name": "Vietnamese Iced Coffee",
    "fact": " Strong coffee brewed with condensed milk for a sweet, bold flavor.",
    "section": "113",
    "counter": "226"
},
{
    "drink_name": "Flat White",
    "fact": " Espresso with microfoam milk — smoother than a latte, stronger than a cappuccino.",
    "section": "114",
    "counter": "227"
},
{
    "drink_name": "Café Au Lait",
    "fact": " Equal parts coffee and steamed milk, a French breakfast classic.",
    "section": "114",
    "counter": "228"
},
{
    "drink_name": "Mocha Latte",
    "fact": " Espresso and steamed milk with a rich chocolate flavor — a cozy favorite.",
    "section": "115",
    "counter": "229"
}],

}},
computed: {
    title() {
        let whichDrink = Math.floor(Math.random() * this.drink.length);
        return this.drink[whichDrink].drink_name;
    }
}
};



Vue.createApp(drinkdata).mount("#drink");

