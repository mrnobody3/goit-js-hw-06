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
const ulGallery = document.querySelector(".gallery");
ulGallery.classList.add("flex__container");

const imgArr = images.map((item) =>
  ulGallery.insertAdjacentHTML(
    "afterbegin",
    `<li class="flex__container--item"><img class="flex__container--img" src=${item.url} alt=${item.alt}></li>`
  )
);
// console.log(imgArr);
// ulGallery.append(...imgArr);

// {
//   const
// const liEl = document.createElement("li");
// liEl.classList.add("flex__container--item");
// const imgEl = document.createElement("img");
// imgEl.src = item.url;
// imgEl.alt = item.alt;
// imgEl.width = 300;
// imgEl.classList.add("flex__container--img");
// liEl.append(imgEl);
// return liEl;
//   return
// }
