/* Complete the method/function so that it converts dash/underscore delimited 
words into camel casing. The first word within the output should be capitalized
only if the original word was capitalized (known as Upper Camel Case, also often 
referred to as Pascal case). */

function toCamelCase(str) {
  if (str === '') return "An empty string was provided but not returned"
  let strArray = str.split('');

  for (let i = 0; i < strArray.length; i++) {
    let char = strArray[0];
    if (
      char === ' ' ||
      char === '-' ||
      char === '_'
    ) {
      strArray[i] = '';
      strArray[i + 1].toUpperCase();
    }
  }
  return strArray.join('');
}