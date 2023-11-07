const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.getElementById('ingredients');
// console.log(ulEl);

// ingredients.forEach(ingredient => {
//   const liEl = document.createElement('li');
//   liEl.textContent = ingredient;
//   liEl.classList.add('item');

//   console.log(liEl);
// ulEl.prepend(liEl);

// });

// const itemEl = ingredients
//   .map(ingredient => `<li class = "item">${ingredient}</li>`)
//   .join("");
//   // console.log(itemEl);

//   ulEl.insertAdjacentHTML('afterbegin', itemEl);
//   console.log(ulEl);


  const itemElement = ingredients.reduce((murkup, ingredient) => 
    murkup + `<li class = "item">${ingredient}</li>`
  , "");
  ulEl.insertAdjacentHTML('afterbegin', itemElement);
  console.log(ulEl);

  

  