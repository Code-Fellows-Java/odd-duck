
let image1 = document.getElementById('product1');
image1.addEventListener('click', onClick);

let image2 = document.getElementById('product2');
image2.addEventListener('click', onClick);

let image3 = document.getElementById('product3');
image3.addEventListener('click', onClick);

let image = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];
let allProducts = [];
let currentRound = 0;

let preArray = [];

function Product(title, src, click = 0, shownImage = 0) {
  this.title = title;
  this.src = src;
  this.shownImage = shownImage;
  this.click = click;
  allProducts.push(this);
}

for (let i = 0; i < image.length; i++){
  if (image[i] === 'sweep' ){
    new Product(`${image[i]}`, `assets/${image[i]}.png`);
  }else {
    new Product(`${image[i]}`, `assets/${image[i]}.jpg`);
  }

}
console.log(allProducts);

function getRandomItem() {
  let imgLen = image.length;
  let rand = Math.floor(Math.random() * imgLen);
  return rand;
}
function uniqueImageChecker (){
  let imageArray = [];
  while (imageArray.length < 3) {
    let item = getRandomItem();
    if (!imageArray.includes(item) && !preArray.includes(item)) {
      imageArray.push(item);
    }
  }
  return imageArray;
}


function getImages() {
  let newImage = uniqueImageChecker();
  let product1 = allProducts[newImage[0]];
  let product2 = allProducts[newImage[1]];
  let product3 = allProducts[newImage[2]];
  let image1 = document.getElementById('product1');
  image1.src = product1.src;
  image1.title = product1.title;
  image1.alt = product1.alt;
  product1.shownImage++;
  let image2 = document.getElementById('product2');
  image2.src = product2.src;
  image2.title = product2.title;
  image2.alt = product2.alt;
  product2.shownImage++;
  let image3 = document.getElementById('product3');
  image3.src = product3.src;
  image3.title = product3.title;
  image3.alt = product3.alt;
  product3.shownImage++;
}
getImages();



function onClick(event) {
  let clickImages = event.target.title;
  for (let i = 0; i < allProducts.length; i++) {
    if (clickImages === allProducts[i].title){
      allProducts[i].click++;
      break;
    }
  }
  currentRound++;
  if (currentRound === 26){
    image1.removeEventListener('click', onClick, getImages);
    image2.removeEventListener('click', onClick, getImages);
    image3.removeEventListener('click', onClick, getImages);
    renderChart();
  }
  else {
    getImages();
  }
}

let productNames = [];
let productLikes = [];
let productViews = [];
function renderChart() {
  for (let i = 0; i < allProducts.length; i++) {
    productNames.push(allProducts[i].title);
    productLikes.push(allProducts[i].click);
    productViews.push(allProducts[i].shownImage);
  }
  console.log(productLikes);
}


const data = {
  labels: productNames,
  datasets: [{
    label: 'Times Clicked',
    data: productLikes,
    backgroundColor: ['red'],
    borderColor: ['red'],
    borderWidth: 2
  },
  {
    label: 'Times Viewed',
    data: productViews,
    backgroundColor: ['blue'],
    borderColor: ['blue'],
    borderWidth: 2

  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};
let canvasChart = document.getElementById('myChart');
const myChart = new Chart(canvasChart, config);
=======
'use strict';

let images = [
  {pic: 'assets/bag.jpg', name: 'bag'},
  {pic: 'assets/banana.jpg', name: 'banana'},
  {pic: 'assets/bathroom.jpg', name: 'bathroom'},
  {pic: 'assets/boots.jpg', name: 'boots'},
  {pic: 'assets/breakfast.jpg', name: 'breakfast'},
  {pic: 'assets/bubblegum.jpg', name: 'bubblegum'},
  {pic: 'assets/chair.jpg', name: 'chair'},
  {pic: 'assets/cthulhu.jpg', name: 'cthulhu'},
  {pic: 'assets/dog-duck.jpg', name: 'dog-duck'},
  {pic: 'assets/dragon.jpg', name: 'dragon'},
  {pic: 'assets/pen.jpg', name: 'pen'},
  {pic: 'assets/pet-sweep.jpg', name: 'pet-sweep'},
  {pic: 'assets/scissors.jpg', name: 'scissors'},
  {pic: 'assets/shark.jpg', name: 'shark'},
  {pic: 'assets/sweep.png', name: 'sweep'},
  {pic: 'assets/tauntaun.jpg', name: 'tauntaun'},
  {pic: 'assets/unicorn.jpg', name: 'unicorn'},
  {pic: 'assets/water-can.jpg', name: 'water-can'},
  {pic: 'assets/wine-glass.jpg', name: 'wine-glass'},
];

let imgOne = document.querySelector('#firstimg');
let imgTwo = document.querySelector('#secondimg');
let imgThree = document.querySelector('#thirdimg');

let clicks = 0;
let maxClicksAllowed = 25;

let Image = function(name, pic) {
  this.name = name;
  this.pic = pic;
  this.shown = 0;
  Image.allImages.push(this);
}

Image.allImages = []

for (let image of images){
    new Image(image.name, image.pic)
}

console.log('images', Image.allImages)

Image.prototype.count = function (){
  if (imgOne.src === this.pic){
    Image.allImages[0];
  } else if (imgTwo === this.pic){
    this.shown++;
  } else if (imgThree === this.pic){
    this.shown++;
  }
  console.log(this.shown);
};

for (let image of images){
  new Image(image.name, image.pic);

}
console.log('images', Image.allImages);


for (let i = 0; i < 3;i++){
  let num = Math.floor(Math.random() * Image.allImages.length);

  if(i === 0){
    imgOne.src = Image.allImages[num].pic;
    Image.allImages[num].shown++;
  } else if (i === 1){
    imgTwo.src = Image.allImages[num].pic;
    Image.allImages[num].shown++;
  } else{
    imgThree.src = Image.allImages[num].pic;
    Image.allImages[num].shown++;
  }
  console.log(Image.allImages[num]);

}

let firstimg = document.getElementById('firstimg');
let secondimg = document.getElementById('secondimg');
let thirdimg = document.getElementById('thirdimg');

firstimg.addEventListener('click', imageClick);

function imageClick(event) {
    console.log(event.target);
    // increment number of clicks.
    // with each click generate 3 new images.
    // when 25 clicks have been reached the eventHandler removes itself.
    // record results
}

// Track clicks in seperate function.










// function rand(){
//     return Math.floor(Math.random() * images.length);
// }

// function rend(){
//     let pic1 = rand()
//     let pic2 = rand()
//     let pic3 = rand()


//     while (pic1 === pic2){
//         pic2 = rand();
//     }

//     while (pic3 === pic2){
//         pic3 = rand();
//     }

//     while (pic1 === pic3){
//         pic1 = rand();
//     }

//     imgOne.src = Image.allImages[pic1].pic;
//     Image.allImages[pic1].shown++;

//     imgTwo.src = Image.allImages[pic2].pic;
//     Image.allImages[pic2].shown++;

//     imgThree.src = Image.allImages[pic3].pic;
//     Image.allImages[pic3].shown++;

//     console.log(Image.allImages[pic1, pic2, pic3].pic);
// }

// rend();

