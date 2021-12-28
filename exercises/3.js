// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string

function character (str, substr) {
  // substr - extrai caracteres de comprimento de uma str, contando a partir do índice inicial. 
  var index, counter, sublength;

  sublength = substr.length;
  counter = 0;
  for (index = str.indexOf(substr);
       index >= 0;
       index = str.indexOf(substr, index + sublength))
  {
      ++counter;
  }
  return counter;
}

character ("o rato roeu a roupa do rei de Roma", "o")
console.log(character("o rato roeu a roupa do rei de Roma", "o"))

//5