const parent_div = document.querySelector("#blog_container");

let fav_title = document.createElement("h2");
fav_title.textContent = "Favorite Dishes: ";
parent_div.appendChild(fav_title);

let totalCostElement = document.createElement("h3");
totalCostElement.textContent = "Total Cost: $0.00";
parent_div.appendChild(totalCostElement);

let totalCost = 0;


const dish_list = document.querySelectorAll(".dish");
const price_list = [5.99, 3.99, 7.99, 8.99, 2.99, 1.99, 6.99, 8.99, 9.99]


dish_list.forEach((dish, index) => {
    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = (`Price: $${price_list[index].toFixed(2)}`);
    dish.appendChild(price);
});


dish_list.forEach(dish => {
    const button = document.createElement("button");
    button.classList.add("fav_button");
    button.textContent = "Add to Favorites";
    dish.appendChild(button);
});

const favorite = document.querySelectorAll('.fav_button');

for (let index = 0; index < favorite.length; index++) {
    const element = favorite[index];
    element.addEventListener('click', add_favorite);
}

function add_favorite(event) {
    const button = event.currentTarget;
    const dish = button.closest('.dish');
    const img = dish.querySelector('.fav_dish');

    if (img.style.border === "5px solid red") {
        img.style.border = "";
        remove_fav(dish.querySelector('.caption_text'), dish.querySelector('.price'));
    } else {
        img.style.border = "5px solid red"
        make_list(dish.querySelector('.caption_text'), dish.querySelector('.price'));
    }
}


function make_list(text, price) {
    const fav_text = document.createTextNode(text.textContent + ": " + price.textContent + ", ");
    fav_title.appendChild(fav_text);

    const cost = parseFloat(price.textContent.replace("Price: $", ""));
    totalCost += cost;
    totalCostElement.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
}

function remove_fav(dish_to_remove, price) {
    const dish_name = dish_to_remove.textContent + ": " + price.textContent + ", ";
    const parent = fav_title.childNodes;

    for (let index = 0; index < parent.length; index++) {
        const node = parent[index];
        if (node.nodeType === node.TEXT_NODE && node.textContent === dish_name) {
            fav_title.removeChild(node);
            break;
        }
    }

    const cost = parseFloat(price.textContent.replace("Price: $", ""));
    totalCost -= cost;
    totalCostElement.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
}