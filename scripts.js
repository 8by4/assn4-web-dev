const parent_div = document.querySelector("#blog_container");
let fav_title = document.createElement("h3");
fav_title.textContent = "Favorite Dishes: "
parent_div.appendChild(fav_title);

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
        remove_fav(dish.querySelector('.caption_text'));
    } else {
        img.style.border = "5px solid red"
        make_list(dish.querySelector('.caption_text'));
    }
}


function make_list(text) {
    let para = document.createElement("p");
    let fav_text = document.createTextNode(text.textContent + ", ");

    para.appendChild(fav_text);
    fav_title.appendChild(fav_text);
}

function remove_fav(dish_to_remove) {
    const dish_name = dish_to_remove.textContent + ", ";
    const parent = fav_title.childNodes;

    for(let index = 0; index < parent.length; index++){
        const node = parent[index];
        if(node.nodeType === node.TEXT_NODE && node.textContent === dish_name){
            fav_title.removeChild(node);
        }
    }
}