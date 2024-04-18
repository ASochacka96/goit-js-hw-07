
// Pobranie listy categories i zapisanie jej pod nazwą categoriesList
const categoriesList = document.getElementById('categories');
// Pobieranie wszystkich elementów listy categories
const categories = categoriesList.querySelectorAll('li.item');

// Wyświetlanie liczby kategorii
console.log(`Number of categories: ${categories.length}`);

// Utworzenie pętli forEach i przejście jej przez każdy element category
categories.forEach(category => {
  // Pobranie tekstu nagłówka h2
  const categoryName = category.querySelector('h2').textContent;
  // Pobranie wszystkich elemntów listy category
  const categoryElements = category.querySelectorAll('li').length;
  // Wyświetlenie nazw kategorii i liczby ich elementów
  console.log("Category:", categoryName);
  console.log("Elements:", categoryElements);
});