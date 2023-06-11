import FoodList from "./foodlist.js";

const addToDom = (Food) => {
  // Menu Item Card
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  // img
  const img = document.createElement("img");
  img.setAttribute("src", Food.getImg());

  // details
  const detailsDiv = document.createElement("div");
  detailsDiv.classList.add("details");

  // nameprice
  const namepriceDiv = document.createElement("div");
  const nameh3 = document.createElement("h3");
  const priceh4 = document.createElement("h4");
  namepriceDiv.classList.add("nameprice");
  nameh3.classList.add("name");
  priceh4.classList.add("price");
  nameh3.textContent = Food.getName();
  priceh4.textContent = Food.getPrice();

  // description
  const descriptionP = document.createElement("p");
  descriptionP.classList.add("description");
  descriptionP.textContent = Food.getDesc();

  // labels
  const labelsDiv = document.createElement("div");
  labelsDiv.classList.add("labels");

  Food.getLabels().forEach((label) => {
    labelsDiv.innerHTML += label;
  });

  // recipe link
  const recipeLink = document.createElement("a");
  recipeLink.classList.add("recipe-link");
  recipeLink.setAttribute("href", Food.getRecipe());
  recipeLink.textContent = "Recipe";

  // Appends
  const menuList = document.querySelector(".menu-list");
  menuList.append(menuItem);

  menuItem.append(img, detailsDiv);
  namepriceDiv.append(nameh3, priceh4);
  detailsDiv.append(namepriceDiv, descriptionP, labelsDiv, recipeLink);
};

// Load Menu
const load = () => {
  const mainDiv = document.querySelector("main");
  mainDiv.classList.add("menu");

  const title = document.createElement("h2");
  title.classList.add("menu-title");
  title.textContent = "Choose Your Ulam (Served with 1 cup of rice)";
  mainDiv.append(title);

  const menuList = document.createElement("div");
  menuList.classList.add("menu-list");
  mainDiv.append(menuList);

  FoodList.forEach((Food) => {
    addToDom(Food);
  });
};

export default { load };
