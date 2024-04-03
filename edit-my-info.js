
let foodAllergies = [];
let otherAllergies = [];
let medications = "";
let medConditions = [];
let healthInfo = [];

const updateMyInfo = () => {
    var x = document.getElementById("dairy_all");
    if (x.checked) {
        if(!foodAllergies.includes(x.value)) {
            foodAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(foodAllergies.includes(x.value)) {
            foodAllergies.remove(x.value);
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
            foodAllergies.remove(x.value);
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
            foodAllergies.remove(x.value);
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
            foodAllergies.remove(x.value);
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
            foodAllergies.remove(x.value);
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
            foodAllergies.remove(x.value);
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
            foodAllergies.remove(x.value);
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
            foodAllergies.remove(x.value);
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
            otherAllergies.remove(x.value);
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
            otherAllergies.remove(x.value);
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
            otherAllergies.remove(x.value);
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
            otherAllergies.remove(x.value);
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
            medConditions.remove(x.value);
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
            medConditions.remove(x.value);
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
            medConditions.remove(x.value);
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
            medConditions.remove(x.value);
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
            medConditions.remove(x.value);
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
            medConditions.remove(x.value);
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
            medConditions.remove(x.value);
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
            medConditions.remove(x.value);
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
            medConditions.remove(x.value);
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
            healthInfo.remove(x.value);
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
            healthInfo.remove(x.value);
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
            healthInfo.remove(x.value);
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
            healthInfo.remove(x.value);
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