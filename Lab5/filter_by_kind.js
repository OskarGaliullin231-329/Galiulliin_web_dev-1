let dishKinds = {
    starter: false,
    soup: false,
    mainCourse: false,
    drink: false,
    dessert: false
}

let previousClicked = "";
let previousContId = "";

function filterButtonAction(event) {
    let actionTarget = event.currentTarget;
    let actionTargetContainer = actionTarget.parentNode;
    let actionTargetContainerId = actionTargetContainer.id;
    let prodContainerId = "";
    let i = -1;
    while (actionTargetContainerId.at(i) != "_") {
        prodContainerId = actionTargetContainerId.at(i) + prodContainerId;
        i--;
    }
    if (dishKinds[prodContainerId] == false) {
        console.log(`button ${prodContainerId}-filter is clicked`);
        if (prodContainerId == previousContId) {
            previousClicked.style.backgroundColor = "transparent";
        }
        let prodContainer = document.getElementById(prodContainerId);
        prodContainer.innerHTML = "";
        for (dish of dishes_list) {
            let prodCard = turnDishToCard(dish);
            if (dish.kind == actionTarget.getAttribute("data-kind") && 
                dish.category == actionTargetContainer.parentNode.children[2].id) {
                console.log(`element ${dish.kind}-${dish.category} is found and added`);
                prodContainer.appendChild(prodCard);
            }
        }
        dishKinds[prodContainerId] = true;
        actionTarget.style.backgroundColor = "rgb(200, 255, 190)";
        previousClicked = actionTarget;
        return;
    }
    if (dishKinds[prodContainerId] == true) {
        console.log(`button ${prodContainerId}-filter is UNclicked`);
        let prodContainer = document.getElementById(prodContainerId);
        prodContainer.innerHTML = "";
        for (dish of dishes_list) {
            let prodCard = turnDishToCard(dish);
            if (dish.category == actionTargetContainer.parentNode.children[2].id) {
                console.log(`element ${dish.kind}-${dish.category} is found and added`); 
                prodContainer.appendChild(prodCard);
            }
        }
        dishKinds[prodContainerId] = false;
        actionTarget.style.backgroundColor = "transparent";
        return;
    }
}
