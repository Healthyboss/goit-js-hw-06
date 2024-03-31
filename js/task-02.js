const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i++) {
  const elementList = document.createElement("li");
  elementList.classList.add("item");
  elementList.textContent = ingredients[i];
  list.append(elementList);
}

console.log(list);
