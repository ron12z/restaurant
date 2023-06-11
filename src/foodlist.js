// FoodFactory

const Food = (imgLink, name, description, recipeLink, price, ...labels) => {
  const pork = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15 10C15 9.45 15.45 9 16 9C16.55 9 17 9.45 17 10S16.55 11 16 11 15 10.55 15 10M22 7.5V14.47L19.18 15.41L17.5 21H12V19H10V21H4.5C4.5 21 2 12.54 2 9.5S4.46 4 7.5 4H12.5C13.41 2.79 14.86 2 16.5 2C17.33 2 18 2.67 18 3.5C18 3.71 17.96 3.9 17.88 4.08C17.74 4.42 17.62 4.81 17.56 5.23L19.83 7.5H22M20 9.5H19L15.5 6C15.5 5.35 15.59 4.71 15.76 4.09C14.79 4.34 14 5.06 13.67 6H7.5C5.57 6 4 7.57 4 9.5C4 11.38 5.22 16.15 6 19H8V17H14V19H16L17.56 13.85L20 13.03V9.5Z" /></svg>`;
  const chicken = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.71 4C16.54 4 17.33 4.22 18 4.66C19.14 5.4 19.84 6.53 20 7.84C20.11 9.13 19.66 10.4 18.75 11.31C18.05 12 17.16 12.44 16.18 12.54C14.27 12.74 12.59 13.5 11.34 14.77C11.13 14.97 10.9 15 10.77 15C10.65 15 10.42 14.97 10.21 14.77L9.22 13.78C9.04 13.6 9 13.39 9 13.25C9 13 9.11 12.78 9.32 12.57C10.53 11.35 11.27 9.73 11.45 7.87C11.58 6.54 12.29 5.4 13.45 4.65C14.11 4.22 14.89 4 15.71 4M15.71 2C14.54 2 13.37 2.32 12.36 2.97C10.6 4.1 9.63 5.86 9.46 7.68C9.33 9 8.83 10.23 7.91 11.15L7.88 11.18C6.72 12.34 6.72 14.11 7.81 15.19L8.8 16.18C9.35 16.73 10.06 17 10.77 17S12.2 16.73 12.75 16.18C13.72 15.21 15 14.68 16.39 14.53C17.76 14.38 19.1 13.78 20.16 12.73C22.93 9.96 22.57 5.26 19.09 3C18.08 2.33 16.9 2 15.71 2M6.26 19.86C6.53 20.42 6.44 21.1 5.97 21.56C5.39 22.15 4.44 22.15 3.85 21.56C3.58 21.29 3.44 20.94 3.42 20.58C3.06 20.56 2.71 20.42 2.44 20.15C1.85 19.56 1.85 18.61 2.44 18.03C2.9 17.57 3.59 17.47 4.14 17.74L6.62 15.31C6.76 15.5 6.92 15.72 7.1 15.9L8.09 16.89C8.3 17.09 8.5 17.26 8.76 17.41L6.26 19.86Z" /></svg>`;
  const beef = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.5,18A0.5,0.5 0 0,1 11,18.5A0.5,0.5 0 0,1 10.5,19A0.5,0.5 0 0,1 10,18.5A0.5,0.5 0 0,1 10.5,18M13.5,18A0.5,0.5 0 0,1 14,18.5A0.5,0.5 0 0,1 13.5,19A0.5,0.5 0 0,1 13,18.5A0.5,0.5 0 0,1 13.5,18M10,11A1,1 0 0,1 11,12A1,1 0 0,1 10,13A1,1 0 0,1 9,12A1,1 0 0,1 10,11M14,11A1,1 0 0,1 15,12A1,1 0 0,1 14,13A1,1 0 0,1 13,12A1,1 0 0,1 14,11M18,18C18,20.21 15.31,22 12,22C8.69,22 6,20.21 6,18C6,17.1 6.45,16.27 7.2,15.6C6.45,14.6 6,13.35 6,12L6.12,10.78C5.58,10.93 4.93,10.93 4.4,10.78C3.38,10.5 1.84,9.35 2.07,8.55C2.3,7.75 4.21,7.6 5.23,7.9C5.82,8.07 6.45,8.5 6.82,8.96L7.39,8.15C6.79,7.05 7,4 10,3L9.91,3.14V3.14C9.63,3.58 8.91,4.97 9.67,6.47C10.39,6.17 11.17,6 12,6C12.83,6 13.61,6.17 14.33,6.47C15.09,4.97 14.37,3.58 14.09,3.14L14,3C17,4 17.21,7.05 16.61,8.15L17.18,8.96C17.55,8.5 18.18,8.07 18.77,7.9C19.79,7.6 21.7,7.75 21.93,8.55C22.16,9.35 20.62,10.5 19.6,10.78C19.07,10.93 18.42,10.93 17.88,10.78L18,12C18,13.35 17.55,14.6 16.8,15.6C17.55,16.27 18,17.1 18,18M12,16C9.79,16 8,16.9 8,18C8,19.1 9.79,20 12,20C14.21,20 16,19.1 16,18C16,16.9 14.21,16 12,16M12,14C13.12,14 14.17,14.21 15.07,14.56C15.65,13.87 16,13 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13 8.35,13.87 8.93,14.56C9.83,14.21 10.88,14 12,14M14.09,3.14V3.14Z" /></svg>`;
  const plant = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2,22V20C2,20 7,18 12,18C17,18 22,20 22,20V22H2M11.3,9.1C10.1,5.2 4,6.1 4,6.1C4,6.1 4.2,13.9 9.9,12.7C9.5,9.8 8,9 8,9C10.8,9 11,12.4 11,12.4V17C11.3,17 11.7,17 12,17C12.3,17 12.7,17 13,17V12.8C13,12.8 13,8.9 16,7.9C16,7.9 14,10.9 14,12.9C21,13.6 21,4 21,4C21,4 12.1,3 11.3,9.1Z" /></svg>`;
  const fish = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>fish</title><path fill="currentColor" d="M12,20L12.76,17C9.5,16.79 6.59,15.4 5.75,13.58C5.66,14.06 5.53,14.5 5.33,14.83C4.67,16 3.33,16 2,16C3.1,16 3.5,14.43 3.5,12.5C3.5,10.57 3.1,9 2,9C3.33,9 4.67,9 5.33,10.17C5.53,10.5 5.66,10.94 5.75,11.42C6.4,10 8.32,8.85 10.66,8.32L9,5C11,5 13,5 14.33,5.67C15.46,6.23 16.11,7.27 16.69,8.38C19.61,9.08 22,10.66 22,12.5C22,14.38 19.5,16 16.5,16.66C15.67,17.76 14.86,18.78 14.17,19.33C13.33,20 12.67,20 12,20M17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12A1,1 0 0,0 17,11Z" /></svg>`;

  const validLabels = ["pork", "chicken", "beef", "plant", "fish"];
  const finalLabels = [];
  let labelIndex = 0;

  labels.forEach((item) => {
    if (validLabels.includes(item.toLowerCase())) {
      switch (item.toLowerCase()) {
        case "pork":
          finalLabels[labelIndex] = pork;
          labelIndex++;
          break;

        case "chicken":
          finalLabels[labelIndex] = chicken;
          labelIndex++;
          break;

        case "beef":
          finalLabels[labelIndex] = beef;
          labelIndex++;
          break;
        case "plant":
          finalLabels[labelIndex] = plant;
          labelIndex++;
          break;
        case "fish":
          finalLabels[labelIndex] = fish;
          labelIndex++;
          break;
      }
    }
  });

  labels = finalLabels;

  //   Getters
  const getImg = () => imgLink;
  const getName = () => name;
  const getDesc = () => description;
  const getRecipe = () => recipeLink;
  const getPrice = () => price;
  const getLabels = () => labels;

  //   Auto-add to Foodlist

  return { getImg, getName, getDesc, getRecipe, getPrice, getLabels };
};

// Add Food Below

const FoodList = [
  // Add Food Here with this format:

  //   Food(imgLink,
  //     name,
  //     description,
  //     recipeLink,
  //     price,
  //     ...labels)

  // Adobo
  Food(
    "https://panlasangpinoy.com/wp-content/uploads/2018/11/Chicken-Adobo-Recipe.jpg",
    "Filipino Chicken Adobo",
    "Chicken Adobo is a type of Filipino chicken stew. Chicken pieces are marinated in soy sauce and spices, pan-fried, and stewed until tender. The dish gained popularity because of its delicious taste and ease in preparation.",
    "https://panlasangpinoy.com/filipino-chicken-adobo-recipe/",
    "999",
    "chicken"
  ),

  //   Tinola
  Food(
    "https://panlasangpinoy.com/wp-content/uploads/2018/11/Chicken-Tinola-Soup-Recipe.jpg",
    "Tinola",
    "Chicken Tinola is a Filipino soup dish. It involves cooking chicken pieces in ginger broth. It is a popular cold weather dish. I always feel warm and cozy every time I eat it. This Filipino Chicken Soup is best enjoyed with fish sauce as dipping sauce, and a cup of warm white rice.",
    "https://panlasangpinoy.com/filipino-chicken-tinola-recipe/",
    "123",
    "chicken",
    "plant"
  ),

  //   Sinigang
  Food(
    "https://panlasangpinoy.com/wp-content/uploads/2018/11/Sinigang-na-Baboy-Recipe-683x1024.jpg",
    "Sinigang na Baboy",
    "Pork soup in sour broth with okra, kangkong, eggplant, and string beans. This dish is best during the cold weather.",
    "https://panlasangpinoy.com/pork-sinigang-na-baboy-recipe/",
    "981",
    "pork"
  ),

  //   Tilapia
  Food(
    "https://panlasangpinoy.com/wp-content/uploads/2010/02/Fried-Fish-Tilapia.jpg",
    "Fried Tilapia",
    "It is what it is. Classic, masarap.",
    "https://panlasangpinoy.com/filipino-food-fried-fish-tilapia-dish/",
    "100",
    "fish"
  ),

  // Hipon
  Food(
    "https://panlasangpinoy.com/wp-content/uploads/2009/03/garlic-butter-shrimp-1.jpg",
    "Garlic Butter Shrimp",
    "Shrimp cooked in butter and garlic. And Sprite.",
    "https://panlasangpinoy.com/buttered-garlic-shrimp/",
    "250",
    "fish"
  ),
  //   List-End
];

export default FoodList;
