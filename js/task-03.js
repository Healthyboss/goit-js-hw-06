const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
const galleryElement = document.createElement("li");
const imageGallery = document.createElement("img");
const newGallery = images
  .map(
    (image) =>
      `<li><img src="${image.url}" img alt="${image.alt}" style="width: 100%; height: auto; display: flex ; align-items: center; margin-bottom: 50px" ></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", newGallery);

console.log(gallery);
