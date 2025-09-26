const favorite = document.querySelectorAll('.fav_button');


for (let index = 0; index < favorite.length; index++) {
    const element = favorite[index];
    element.addEventListener('click', add_favorite);
}

function add_favorite(event) {
    const button = event.currentTarget;
    const dish = button.closest('.dish');
    const img = dish.querySelector('.fav_dish');

    img.style.border = "5px solid red";
}

const parent_div = document.querySelector("#blog_container");
let fav_title = document.createTextNode("Favorite Dishes: ");
parent_div.appendChild(fav_title);

// function make_list(){

// }