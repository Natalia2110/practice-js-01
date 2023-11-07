const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.getElementById('ingredients');
const fragment = document.createDocumentFragment();
// console.log(ulEl);

ingredients.forEach(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');

  fragment.appendChild(liEl);
// console.log(liEl);
// ulEl.prepend(liEl);
});
ulEl.prepend(fragment);
console.log(ulEl);

// const itemEl = ingredients
//   .map(ingredient => `<li class = "item">${ingredient}</li>`)
//   .join("");
//   // console.log(itemEl);

//   ulEl.insertAdjacentHTML('afterbegin', itemEl);
//   console.log(ulEl);


  // const itemElement = ingredients.reduce((murkup, ingredient) => 
  //   murkup + `<li class = "item">${ingredient}</li>`
  // , "");
  // ulEl.insertAdjacentHTML('afterbegin', itemElement);
  // console.log(ulEl);

  

  