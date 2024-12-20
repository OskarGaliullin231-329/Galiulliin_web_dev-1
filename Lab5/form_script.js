// this script works with the form

// flags to check wether we need to simply increase total sum
// or to substract previous price from it
let soupsWerePreviouslyAdded = false;
let mainDishesWerePreviouslyAdded = false;
let drinksWerePreviouslyAdded = false;
let startersWerePreviouslyAdded = false;
let dessertsWerePreviouslyAdded = false;

// total sum of order
let totalSum = 0;

// previous prices of dishes
let previousSoupPrice = 0;
let previousMainDishPrice = 0;
let previousDrinkPrice = 0;
let previousStarterPrice = 0;
let previousDessertPrice = 0;

// previous dish choice storages
let previousSoup = null;
let previousMainCourse = null;
let previousDrink = null;
let previousStarter = null;
let previousDessert = null;

// this function hides element with "nothing chosen" id
function hideNothingChosen() {
    let nothingChosen = document.getElementById("nothing_chosen");
    if (nothingChosen == null) {
        console.log("element with id 'nothing_chosen' was not found");
    }
    else {
        nothingChosen.style.display = "none";
    }
}

// this function shows all chosen dishes in order field
function showDishes() {
    let dishesInOrder = document.getElementsByClassName("dishes_select");
    for (let elem of dishesInOrder) {
        elem.style.display = "block";
    }
}

// this function adds new information about chosen dishes after every button click
function addDishToOrder(event) {
    let actionTarget = event.currentTarget.parentNode;

    // highlighting chosen dishes
    actionTarget.style.borderColor = "tomato";
    if (actionTarget.parentNode.id == "soup") {
        if (previousSoup != null) {
            previousSoup.style.borderColor = "transparent";
        }
        previousSoup = actionTarget;
    }
    if (actionTarget.parentNode.id == "main_course") {
        if (previousMainCourse != null) {
            previousMainCourse.style.borderColor = "transparent";
        }
        previousMainCourse = actionTarget;
    }
    if (actionTarget.parentNode.id == "drink") {
        if (previousDrink != null) {
            previousDrink.style.borderColor = "transparent";
        }
        previousDrink = actionTarget;
    }
    if (actionTarget.parentNode.id == "starter") {
        if (previousStarter != null) {
            previousStarter.style.borderColor = "transparent";
        }
        previousStarter = actionTarget;
    }
    if (actionTarget.parentNode.id == "dessert") {
        if (previousDessert != null) {
            previousDessert.style.borderColor = "transparent";
        }
        previousDessert = actionTarget;
    }

    showDishes();
    hideNothingChosen();

    let shownDishInOrder = document.getElementById("chosen_" + actionTarget.parentNode.id);
    shownDishInOrder.innerHTML = actionTarget.children[2].textContent + " " + actionTarget.children[1].textContent;

    // turning text content of an element that represents price into a number
    let prod_price = "";
    let prodPriceString = actionTarget.children[1].textContent;
    let i = 0;
    while (!(prodPriceString[i] === " ")) {
        prod_price = prod_price + prodPriceString[i];
        i++;
    }
    prod_price = Number(prod_price);

    // changing total sum 
    if (actionTarget.parentNode.id === "soup") {
        if (soupsWerePreviouslyAdded === false) {
            soupsWerePreviouslyAdded = true;
            totalSum += prod_price;
            previousSoupPrice = prod_price;
        }
        else {
            totalSum -= previousSoupPrice;
            totalSum += prod_price;
            previousSoupPrice = prod_price;
        }
    }
    if (actionTarget.parentNode.id === "main_course") {
        if (mainDishesWerePreviouslyAdded === false) {
            mainDishesWerePreviouslyAdded = true;
            totalSum += prod_price;
            previousMainDishPrice = prod_price;
        }
        else {
            totalSum -= previousMainDishPrice;
            totalSum += prod_price;
            previousMainDishPrice = prod_price;
        }
    }
    if (actionTarget.parentNode.id === "drink") {
        if (drinksWerePreviouslyAdded === false) {
            drinksWerePreviouslyAdded = true;
            totalSum += prod_price;
            previousDrinkPrice = prod_price;
        }
        else {
            totalSum -= previousDrinkPrice;
            totalSum += prod_price;
            previousDrinkPrice = prod_price;
        }
    }
    if (actionTarget.parentNode.id === "starter") {
        if (startersWerePreviouslyAdded === false) {
            startersWerePreviouslyAdded = true;
            totalSum += prod_price;
            previousStarterPrice = prod_price;
        }
        else {
            totalSum -= previousStarterPrice;
            totalSum += prod_price;
            previousStarterPrice = prod_price;
        }
    }
    if (actionTarget.parentNode.id === "dessert") {
        if (dessertsWerePreviouslyAdded === false) {
            dessertsWerePreviouslyAdded = true;
            totalSum += prod_price;
            previousDessertPrice = prod_price;
        }
        else {
            totalSum -= previousDessertPrice;
            totalSum += prod_price;
            previousDessertPrice = prod_price;
        }
    }
    document.getElementById("total_sum").innerHTML = String(totalSum) + " &#8381";

    // adding information about total sum and dish parameters onto html page
    document.getElementById("total_sum_input").value = totalSum;
    document.getElementById(actionTarget.parentNode.id + "_choice_input").value = actionTarget.getAttribute("data-product");
}

// setting action on reset button click
let resetButton = document.getElementById("reset_btn");
resetButton.addEventListener("click", function() {
    // setting all input fields to their default values
    document.getElementById("soup_choice_input").value = "was not set";
    document.getElementById("main_course_choice_input").value = "was not set";
    document.getElementById("drink_choice_input").value = "was not set";
    document.getElementById("starter_choice_input").value = "was not set";
    document.getElementById("dessert_choice_input").value = "was not set";
    document.getElementById("total_sum_input").value = "was not set";

    // setting defualt phrases to chosen dishes fields
    document.getElementById("chosen_soup").innerHTML = " Суп не выбран";
    document.getElementById("chosen_main_course").innerHTML = "Второе блюдо не выбрано";
    document.getElementById("chosen_drink").innerHTML = "Напиток не выбран";
    document.getElementById("chosen_starter").innerHTML = "Стартер не выбран";
    document.getElementById("chosen_dessert").innerHTML = "Дессерт не выбран";
    document.getElementById("total_sum").innerHTML = "0 &#8381";

    // hiding chosen dishes fields
    let dishesInOrder = document.getElementsByClassName("dishes_select");
    for (let elem of dishesInOrder) {
        elem.style.display = "none";
    }

    // making element with id "nothing_chosen" visible
    document.getElementById("nothing_chosen").style.display = "block";

    // setting all global variables in this to their default values
    soupsWerePreviouslyAdded = false;
    mainDishesWerePreviouslyAdded = false;
    drinksWerePreviouslyAdded = false;
    startersWerePreviouslyAdded = false;
    dessertsWerePreviouslyAdded = false;
    totalSum = 0;
    previousSoupPrice = 0;
    previousMainDishPrice = 0;
    previousDrinkPrice = 0;
    previousStarterPrice = 0;
    previousDessertPrice = 0;
    if (previousSoup != null) {previousSoup.style.borderColor = "transparent";}
    if (previousMainCourse != null) {previousMainCourse.style.borderColor = "transparent";}
    if (previousDrink!= null) {previousDrink.style.borderColor = "transparent";}
    if (previousStarter!= null) {previousStarter.style.borderColor = "transparent";}
    if (previousDessert != null) {previousDessert.style.borderColor = "transparent";}
    previousSoup = null;
    previousMainCourse = null;
    previousDrink = null;
    previousStarter = null;
    previousDessert = null;
})
