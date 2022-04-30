/* MAIN 1 */
let mainObject = [
  {
    baseStep: "step 1:",
    baseTitle: "base",
    product: [
      {
        item: "rice bowl",
        ingredients:
          "Multigrain Rice,Greens,Corn,Edamame,Pickled Red Cabbage,Scallion,Oriental Vinaigrette",
      },
      {
        item: "salad bowl",
        ingredients:
          "Greens, Corn, Edamame, Pickled Red Cabbage, Picked Red Radis",
      },
      {
        item: "fries",
        ingredients: "Seasoned Fries, Pickled, Red Radish, Scallion",
      },
      {
        item: "wrap",
        ingredients:
          "Multigrain Rice, Greens, Pickled Red Cabbage, Napa Cabbage Kimchi",
      },
    ],
  },
  {
    baseStep: "step 2:",
    baseTitle: "protein",
    product: [
      {
        item: "korean fried chicken",
        ingredients: "Battered Boneless Chicken Thigh",
      },
      {
        item: "nokdu falafel",
        ingredients: "Mung Bean Falafel, Garlic, Scallion",
      },
      {
        item: "van tofu",
        ingredients: "Fried Tofu, Gochujang Tomato Sauce",
      },
      {
        item: "bulgogi beef",
        ingredients: "Stir-fried Beef, K-BBQ Marinade",
      },
      {
        item: "spicy pork",
        ingredients: "Stir-fried Pork Capicola, Gochujang-Pineapple Marinade",
      },
    ],
  },
  {
    baseStep: "step 3:",
    baseTitle: "sauces",
    product: [
      { item: "Vegan Plum Mayo" },
      { item: "Garlic Mayo" },
      { item: "Sweet Chili Glaze" },
      { item: "Chili Mayo" },
      { item: "Chili Chili" },
      { item: "Oriental Vinaigrette" },
      { item: "Honey Beet" },
      { item: "Almond Butter" },
    ],
  },
];

/* SIDES */

let sidesObjects = [
  {
    title: "add-ons",
    products: [
      { item: "Napa Cabbage Kimchi", price: "$2.00" },
      { item: "Pickled Red Radish", price: "$2.00" },
      { item: "Mozzarella & Cheddar Cheese", price: "$2.00" },
      { item: "Extra Sauce or Dressing", price: "$1.00" },
    ],
  },
  {
    title: "drinks",
    products: [
      { item: "Pop or Water", price: "$2.00" },
      { item: "Iced Tea", price: "$4.00" },
      { item: "Ginger Beer", price: "$5.00" },
      { item: "Kombuchag", price: "$6.00" },
      { item: "Milk Tea", price: "$6.00" },
    ],
  },
  {
    title: "side & share",
    products: [
      {
        item: "disco cheetah sampler",
        price: "$29.99",
        ingredients:
          "5 Dipping Sauce,5 Fried Chicken Bites,3 Wings,5 Falafel Bites,Fries,Pickled Radish,Scallion",
      },
      {
        item: "BAO",
        price: "$6.99",
        ingredients: "1 Protein, 1 Sauce, Pickled Radish, Scallion",
      },
      {
        item: "nokdu falafel bite",
        price: "$5.99",
        ingredients: "1 Dipping Sauce, Scallio",
      },
      { item: "just fries", price: "$4 .99", ingredients: "1 Dipping Sauce" },
    ],
  },
  {
    title: "korean fried chicken",
    products: [
      {
        item: "fried chicken sampler",
        price: "$39.99",
        ingredients:
          "5 Dipping Sauces,5 Fried Chicken Bites,2 Thighs,2 Drumsticks,3 Whole Wings,Fries,Pickled Red Radish,Scallion",
      },
      {
        item: "fried chicken bite",
        price: "$10.99",
        ingredients:
          "1 Dipping Sauce, 5 Chicken Bites, Pickled Radish, Scallion",
      },
      {
        item: "whole wings",
        price: "$6.99",
        ingredients:
          "1 Dipping Sauce, 3 Whole Wings, Pickled Red Radish, Scallion",
      },
      {
        item: "thigh & drumstick",
        price: "$8.99",
        ingredients:
          "2 Dipping Sauces, 1 Thigh, 1 Drumstick, Pickled Red Radish, Scallion",
      },
      {
        item: "thigh",
        price: "$4.99",
        ingredients: "1 Dipping Sauce, 1 Thigh, Pickled Red Radish, Scallion",
      },
      {
        item: "drumstick",
        price: "$4.99",
        ingredients:
          "1 Dipping Sauce, 1 Drumstick, Pickled Red Radish, Scallion",
      },
    ],
  },
];

/* Main Menu Markup Functions */

function mainMenuRenderList() {
  let markup = "";
  for (let i = 0; i < mainObject.length; i++) {
    markup += `<div class="list-main_container ">
    <p class="step">${mainObject[i].baseStep}</p>
    <p class="title">${mainObject[i].baseTitle}</p>
    <div class="icon ${mainObject[i].baseTitle}"></div>
    <ul class="list">
    ${mainMenuListItems(
      i,
      mainObject[i].product.length,
      mainObject[i].product[i]
    )}
    </ul>
    </div>`;
  }
  return markup;
}

function mainMenuListItems(i, mainObjectLength, product) {
  let markup = "";

  for (let z = 0; z < mainObjectLength; z++) {
    if (product.ingredients !== undefined) {
      markup += `<li class="list-item">
     <p>${mainObject[i].product[z].item}</p>
     <p>${mainObject[i].product[z].ingredients}</p>
        </li>`;
    } else {
      markup += `<li class="list-item ${mainObject[i].baseTitle}">
     <p>${mainObject[i].product[z].item}</p>
        </li>`;
    }
  }
  return markup;
}

/* Side Menu Markup Functions */

function sidersRenderList() {
  let markup = "";
  for (let i = 0; i < sidesObjects.length; i++) {
    markup += `<div class="list-side_container ${sidesObjects[i].title
      .split(" ")
      .splice(0, 1)}">
      <p class="title">${sidesObjects[i].title}</p>
      <ul class="list">
      ${sidersListItems(
        i,
        sidesObjects[i].products.length,
        sidesObjects[i].products[i]
      )}
      </ul>
    </div>`;
  }
  return markup;
}

function sidersListItems(i, productsLength, product) {
  let markup = "";

  for (let z = 0; z < productsLength; z++) {
    if (product.ingredients !== undefined) {
      markup += `<li class="list-item">
          <p>${sidesObjects[i].products[z].item}</p>
          <p>${sidesObjects[i].products[z].price}</p>
          <p>${sidesObjects[i].products[z].ingredients}</p>
        </li>`;
    } else {
      markup += `<li class="list-item">
          <p>${sidesObjects[i].products[z].item}</p>
          <p>${sidesObjects[i].products[z].price}</p>
          </li>`;
    }
  }
  return markup;
}

function menu() {
  const menu = document.createElement("div");
  menu.className = "menu-container";

  const markup = `
<section class="menu-container_first-section">
      <div class="img"></div>
      <h1 class="title">menus</h1>
    </section>

    <section class="menu-container_second-section">
      <div class="menu-main">${mainMenuRenderList()}</div>
      <div class="menu-sides">${sidersRenderList()}</div>
    </section>`;

  menu.insertAdjacentHTML("beforeend", markup);

  return menu;
}
export default menu;
