const category = document.querySelector("#categories");
const categoryName = document.querySelectorAll("h2");
const categoryItem = document.querySelectorAll(".item>ul");

console.log("Number of categories:", category.children.length);

for (let i = 0; i < categoryItem.length; i++) {
  console.log("Category:", categoryName[i].textContent);
  console.log("Elements:", categoryItem[i].children.length);
}
