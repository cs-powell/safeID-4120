const file = "default-chosen.json";
let foodAllergies = [];

async function fetch() {
    var txt = await fetch(file).then((result) => result.text());
    console.log(JSON.parse(txt).food);

    var foodall = JSON.parse(txt).food.split(',');
    console.log(foodall);
    foodall.forEach(element => {
        foodAllergies.push(element); 
        window.alert(element);
    });
    const name = JSON.parse(txt).name;
};

// function updateId() {
//    fetch();
// };

document.getElementById("flipcard").addEventListener("click", async function(event) {
    fetch();
});