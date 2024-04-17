
let foodAllergies = [];
let otherAllergies = [];
let medications = "";
let medConditions = [];
let healthInfo = [];

const file = "default-chosen.json";

document.addEventListener("DOMContentLoaded", async function(event) {
    var txt = await fetch(file).then((result) => result.text());
    console.log(JSON.parse(txt).food);

    var foodall = JSON.parse(txt).food.split(',');
    console.log(foodall);
    foodall.forEach(element => {
        var x = document.getElementById(element);
        console.log(x);
        x.setAttribute("checked", true);
        x.setAttribute("defaultChecked", true);
        foodAllergies.push(x.value);
    });
    const name = JSON.parse(txt).name;
});

async function updateMyInfo() {
    var x = document.getElementById("dairy_all");
    if (x.checked) {
        if(!foodAllergies.includes(x.value)) {
            foodAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(foodAllergies.includes(x.value)) {
            foodAllergies = foodAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("egg_all");
    if (x.checked) {
        if(!foodAllergies.includes(x.value)) {
            foodAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(foodAllergies.includes(x.value)) {
            foodAllergies = foodAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }
    
    x = document.getElementById("fish_all");
    if (x.checked) {
        if(!foodAllergies.includes(x.value)) {
            foodAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(foodAllergies.includes(x.value)) {
            foodAllergies = foodAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("gluten_all");
    if (x.checked) {
        if(!foodAllergies.includes(x.value)) {
            foodAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(foodAllergies.includes(x.value)) {
            foodAllergies = foodAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("peanut_all");
    if (x.checked) {
        if(!foodAllergies.includes(x.value)) {
            foodAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(foodAllergies.includes(x.value)) {
            foodAllergies = foodAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }
    
    x = document.getElementById("ses_all");
    if (x.checked) {
        if(!foodAllergies.includes(x.value)) {
            foodAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(foodAllergies.includes(x.value)) {
            foodAllergies = foodAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("soy_all");
    if (x.checked) {
        if(!foodAllergies.includes(x.value)) {
            foodAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(foodAllergies.includes(x.value)) {
            foodAllergies = foodAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("nut_all");
    if (x.checked) {
        if(!foodAllergies.includes(x.value)) {
            foodAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(foodAllergies.includes(x.value)) {
            foodAllergies = foodAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("anti_all");
    if (x.checked) {
        if(!otherAllergies.includes(x.value)) {
            otherAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(otherAllergies.includes(x.value)) {
            otherdAllergies = otherAllergiesAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("bee_all");
    if (x.checked) {
        if(!otherAllergies.includes(x.value)) {
            otherAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(otherAllergies.includes(x.value)) {
            otherAllergies = otherAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("latex_all");
    if (x.checked) {
        if(!otherAllergies.includes(x.value)) {
            otherAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(otherAllergies.includes(x.value)) {
            otherAllergies = otherAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("med_all");
    if (x.checked) {
        if(!otherAllergies.includes(x.value)) {
            otherAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(otherAllergies.includes(x.value)) {
            otherAllergies = otherAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("arth");
    if (x.checked) {
        if(!medConditions.includes(x.value)) {
            medConditions.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(medConditions.includes(x.value)) {
            medConditions = medConditions.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("asthma");
    if (x.checked) {
        if(!medConditions.includes(x.value)) {
            medConditions.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(medConditions.includes(x.value)) {
            medConditions = medConditions.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("autoimmune");
    if (x.checked) {
        if(!medConditions.includes(x.value)) {
            medConditions.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(medConditions.includes(x.value)) {
            medConditions = medConditions.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("diabetes");
    if (x.checked) {
        if(!medConditions.includes(x.value)) {
            medConditions.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(medConditions.includes(x.value)) {
            medConditions = medConditions.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("epilep");
    if (x.checked) {
        if(!medConditions.includes(x.value)) {
            medConditions.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(medConditions.includes(x.value)) {
            medConditions = medConditions.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("heart");
    if (x.checked) {
        if(!medConditions.includes(x.value)) {
            medConditions.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(medConditions.includes(x.value)) {
            medConditions = medConditions.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("hypt");
    if (x.checked) {
        if(!medConditions.includes(x.value)) {
            medConditions.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(medConditions.includes(x.value)) {
            medConditions = medConditions.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("ibs");
    if (x.checked) {
        if(!medConditions.includes(x.value)) {
            medConditions.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(medConditions.includes(x.value)) {
            medConditions = medConditions.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("kidney");
    if (x.checked) {
        if(!medConditions.includes(x.value)) {
            medConditions.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(medConditions.includes(x.value)) {
            medConditions = medConditions.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("epipen");
    if (x.checked) {
        if(!healthInfo.includes(x.value)) {
            healthInfo.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(healthInfo.includes(x.value)) {
            healthInfo = healthInfo.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("inhaler");
    if (x.checked) {
        if(!healthInfo.includes(x.value)) {
            healthInfo.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(healthInfo.includes(x.value)) {
            healthInfo = healthInfo.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("insulin");
    if (x.checked) {
        if(!healthInfo.includes(x.value)) {
            healthInfo.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(healthInfo.includes(x.value)) {
            healthInfo = healthInfo.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("dog");
    if (x.checked) {
        if(!healthInfo.includes(x.value)) {
            healthInfo.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(healthInfo.includes(x.value)) {
            healthInfo = healthInfo.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("meds");
    medications = x.value;

    console.log(foodAllergies);
    console.log(otherAllergies);
    console.log(medConditions);
    console.log(healthInfo);
    console.log(medications);

    
}
