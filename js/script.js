"use strict";

const products = [
  {
    name: "Koenigsegg",
    type: "Sport",
    img: "./assets/Car.png",
    fuel: "90L",
    transmission: "Manual",
    capacity: "2 People",
    price: 99.0,
    oldPrice: null,
    per: "day",
    favorite: true,
  },
  {
    name: "Nissan GT-R",
    type: "Sport",
    img: "./assets/Car (2).png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "2 People",
    price: 80.0,
    oldPrice: 100.0,
    per: "day",
    favorite: false,
  },
  {
    name: "Rolls-Royce",
    type: "Sedan",
    img: "./assets/Car (3).png",
    fuel: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: 96.0,
    oldPrice: null,
    per: "day",
    favorite: true,
  },
  {
    name: "Bugatti",
    type: "Sport",
    img: "./assets/Car (4).png",
    fuel: "100L",
    transmission: "Automatic",
    capacity: "2 People",
    price: 150.0,
    oldPrice: null,
    per: "day",
    favorite: false,
  },
];

const recommendCars = [
  {
    name: "All New Rush",
    type: "SUV",
    img: "./assets/Car (5).png",
    fuel: "70L",
    transmission: "Manual",
    capacity: "6 People",
    price: 72.0,
    oldPrice: 80.0,
    per: "day",
    favorite: false,
  },
  {
    name: "CR-V",
    type: "SUV",
    img: "./assets/Car (6).png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: 80.0,
    oldPrice: null,
    per: "day",
    favorite: true,
  },
  {
    name: "All New Terios",
    type: "SUV",
    img: "./assets/Car (7).png",
    fuel: "90L",
    transmission: "Manual",
    capacity: "6 People",
    price: 74.0,
    oldPrice: 80.0,
    per: "day",
    favorite: false,
  },
  {
    name: "MG ZX Exclusive",
    type: "Hatchback",
    img: "./assets/Car (8).png",
    fuel: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: 76.0,
    oldPrice: 80.0,
    per: "day",
    favorite: true,
  },
  {
    name: "New MGZS",
    type: "SUV",
    img: "./assets/Car (9).png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: 80.0,
    oldPrice: null,
    per: "day",
    favorite: true,
  },
  {
    name: "MG ZX Excite",
    type: "Hatchback",
    img: "./assets/Car (10).png",
    fuel: "90L",
    transmission: "Manual",
    capacity: "4 People",
    price: 74.0,
    oldPrice: 80.0,
    per: "day",
    favorite: false,
  },
  {
    name: "All New Rush",
    type: "SUV",
    img: "./assets/Car (5).png",
    fuel: "70L",
    transmission: "Manual",
    capacity: "6 People",
    price: 72.0,
    oldPrice: 80.0,
    per: "day",
    favorite: false,
  },
  {
    name: "CR-V",
    type: "SUV",
    img: "./assets/Car (6).png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: 80.0,
    oldPrice: null,
    per: "day",
    favorite: true,
  },
];

function generateCards(car, containerId) {
  const container = document.getElementById(containerId);

  car.forEach(function (singleProduct) {
    const cardHtml = `  <div class="card">
             <div class="likeIcon">
             ${
               singleProduct.favorite
                 ? '<img src="assets/svg/heart.svg" alt="" />'
                 : '<img src="assets/svg/grey.svg" alt="" />'
             }
         
        </div>
            <div class="carNameCont">
              <p class="carName">${singleProduct.name}</p>
              <p class="typeOfCar">${singleProduct.type}</p>
            </div>
            <div class="fotoContainer">
              <img src="${singleProduct.img}" />
            </div>
            <div class="carDescription">
              <div class="fuel">
                <img src="assets/svg/gas-station.svg" alt="photo" />
                <p>${singleProduct.fuel}</p>
              </div>
              <div class="typeOfgear">
                <img src="assets/svg/gear.svg" alt="photo" />
                <p>${singleProduct.transmission}</p>
              </div>
              <div class="sitesOfcar">
                <img src="assets/svg/site.svg" alt="photo" />
                <p>${singleProduct.capacity}</p>
              </div>
            </div>
            <div class="rentInfo">
              <p>$${singleProduct.price}/ <span>day</span></p>
              <button>Rent Now</button>
            </div>
          </div>
          
             
    `;

    container.innerHTML += cardHtml;
  });
}

generateCards(products, "productsContainer");
generateCards(recommendCars, "products2Container");
