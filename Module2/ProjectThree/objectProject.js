const makeup = {
    SkinTint:{
        label: "Skin Tint",
        description: "Fenty Eaze Drop Lightweight Blurring Skin Tint in shade 2, which is a light shade with neutral undertones.",
        products: [
            {
                name: "Fenty Eaze Drop Skin Tint",
                price: "$39",
                image: "objectProjectpics/skintint.jpg"
            }
        ]
    },
    Concealer:{
        label: "Concealer",
        description: "Tower28 Swipe Serum Concealer in the shade 4.0 DTLA, a light shade with medium cool undertones.",
        products: [
            {
                name: "Tower28 Swipe Serum Concealer",
                price: "$24",
                image: "objectProjectpics/concealer.webp"
            }
        ]
    },
    Powder:{
        label: "Powder",
        description: "Maybelline Fit Me Matte + Poreless Pressed Powder in the shade 100 transluscent.",
        products: [
            {
                name: "Maybelline Fit Me Pressed Powder",
                price: "$12",
                image: "objectProjectpics/powder.jpg"
            }
        ]
    },
    Blush:{
        label: "Blush",
        description: "I use Lilybyred Luv Beam Cheek Balm in the shade #01 pure coral as my cream blush, and I layer it with Romand Better Than Cheek in the shade C02 or N01 as my powder blush on top.",
        products: [
            {
                name: "Lilybyred Luv Beam Cheek Balm #01",
                price: "$13",
                image: "objectProjectpics/blush1.jpg"
            },
            {
                name: "Romand Better Than Cheek C02",
                price: "$12",
                image: "objectProjectpics/blush2.jpg"
            },
            {
                name: "Romand Better Than Cheek N01",
                price: "$12",
                image: "objectProjectpics/blush3.jpg"
            }
        ]
    },
    Contour:{
        label: "Contour",
        description: "I use two contour products: Colorgram Contour Stick in the shade #02, and two cool for school Artclass by Rodin in the shade #1.5 neutral. The contour stick is for nose contour and the Artclass is for the rest of the face.",
        products: [
            {
                name: "Colorgram Contour Stick #02",
                price: "$11",
                image: "objectProjectpics/contour1.webp"
            },
            {
                name: "Too Cool For School Artclass #1.5",
                price: "$12",
                image: "objectProjectpics/contour2.webp"
            }
        ]
    },
    Eyeliner:{
        label: "Eyeliner",
        description: "I map my placement with Canmake Creamy Touch Liner #01 deep black and layer it with Judydoll Slim Liquid Eyeliner #01 black. If I'm going for a super natural look, I use CLIO Sharp, So Simple Waterproof Pencil Liner in the shade #05 deep brown.",
        products: [
            {
                name: "Canmake Creamy Touch Liner #01",
                price: "$7",
                image: "objectProjectpics/eyeliner1.webp"
            },
            {
                name: "Judydoll Slim Liquid Eyeliner #01",
                price: "$12",
                image: "objectProjectpics/eyeliner2.webp"
            },
            {
                name: "CLIO Sharp So Simple Liner #05",
                price: "$7",
                image: "objectProjectpics/eyeliner3.webp"
            }
        ]
    },
    Mascara:{
        label: "Mascara",
        description: "Judydoll 3D Curling Eyelash Iron Mascara in the shade #01 black.",
        products: [
            {
                name: "Judydoll 3D Curling Mascara #01",
                price: "$10",
                image: "objectProjectpics/mascara.jpg"
            }
        ]
    },
    Lips:{
        label: "Lip Products",
        description: "I have a bunch of lip products and most of them are a pinky shade.",
        products: [
            {
                name: "The Saem Eco Soul Lip Oil #02 Berry",
                price: "$6",
                image: "objectProjectpics/lip1.webp"
            },
            {
                name: "ETUDE Over Glowy Tint #01 Black Cat Rose Jelly",
                price: "Free (gift)",
                image: "objectProjectpics/lip2.webp"
            },
            {
                name: "Romand Glasting Melting Balm #06 Kaya Fig",
                price: "$14",
                image: "objectProjectpics/lip3.webp"
            },
            {
                name: "Peripera Ink Mood Glowy Tint Peritage Collection #14 Follow Rose",
                price: "$6",
                image: "objectProjectpics/lip4.webp"
            },
            {
                name: "Romand Dewyful Water Tint Muteral Nude Collection #13 Custard Mauve",
                price: "$14",
                image: "objectProjectpics/lip5.webp"
            },
            {
                name: "Romand Juicy Lasting Tint 2020 F/W Series #18 Mulled Peach",
                price: "$7",
                image: "objectProjectpics/lip6.webp"
            }
        ]
    }
}

const buttonContainer = document.querySelector("#makeup-buttons");
const descriptionOutput = document.querySelector("#aboutme");
const imageOutput = document.querySelector("#image");
const selectedTitle = document.querySelector("#selected-title");

for (const key in makeup){
    const button = document.createElement("button");
    button.textContent = makeup[key].label;
    button.dataset.key = key;
    
    button.addEventListener("click", function () {
        showMakeup(key);
    });

    buttonContainer.appendChild(button);
}

function showMakeup(makeupKey){
    const selected = makeup[makeupKey];
    selectedTitle.textContent = selected.label;
    descriptionOutput.textContent = selected.description;
    updateActiveButton(makeupKey);

    if (Array.isArray(selected.products) && selected.products.length > 0) {
        imageOutput.innerHTML = selected.products
            .map((product) => {
                if (!product.image) {
                    return "";
                }

                return `
                    <article class="product-card">
                        <div class="product-media"><img src="${product.image}" alt="${product.name}"></div>
                        <div class="product-info">
                            <h3>${product.name}</h3>
                            <p class="price">${product.price}</p>
                        </div>
                    </article>
                `;
            })
            .join("");
    } else {
        imageOutput.innerHTML = "<p>No products added yet for this section.</p>";
    }
}

function updateActiveButton(activeKey) {
    const allButtons = buttonContainer.querySelectorAll("button");
    allButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.key === activeKey);
    });
}

showMakeup("SkinTint");
