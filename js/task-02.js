const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Pobranie elementów z tablicy ingredients
const ulIngredients = document.querySelector('#ingredients');

// Iterowanie przez tablicę ingredients
ingredients.forEach((ingredient) => {
// Utworzenie nowgo elementu li
  const li = document.createElement('li');
// Utworzenie nazwy ingredient dla li 
  li.textContent = ingredient;
// Dodanie klacy item dla elementu ingredient
  li.classList.add('item');
// Dodanie elemetnu li do listy ulIngredniets
  ulIngredients.append(li);
})