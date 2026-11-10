let rosterPix = ["brock.jpg", "channing.jpg", "darnell.jpg", "george.jpg", "jalen.jpg", "james.jpg", "jordan.jpg", "kelee.jpg", "kendall.jpg", "kenny.jpg", "ladd.jpg", "lewis.jpg", "nakobe.jpg", "nolan.jpg", "sedrick.jpg", "stetson.jpg", "tate.jpg", "travon.jpg", "warren.jpg"]
let rosterNames = ["Brock Bowers", "Channing Tindall", "Darnell Washington", "George Pickens", "Jalen Carter", "James Cook", "Jordan Davis", "Kelee Ringo", "Kendall Milton", "Kenny McIntosh", "Ladd McConkey", "Lewis Cine", "Nakobe Dean", "Nolan Smith", "Sedrick Van Pran", "Stetson Bennett", "Tate Ratledge", "Travon Walker", "Warren Brinson"]

let output = document.querySelector("#goDawgs")

// output.innerHTML = rosterNames[rosterNames.length -1]

// output.innerHTML = rosterNames[0] + "<img src=roster/" + rosterPix[0] + ">"

for (var i=0; i<rosterNames.length; i++) {
    output.innerHTML += "<li>" + rosterNames[i] + "<img src=roster/" + rosterPix[i] + "></li>";
}