/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted 
string, the longest possible, containing distinct letters - each taken only once
 - coming from s1 or s2. */

 function longest(s1, s2) {
  let seen = {

  };

  let final = [];

  let arr1 = s1.split('');
  let arr2 = s2.split('');

 for (let char of arr1) {
   if (seen[char] === undefined) {
     seen[char] = 1;
     final.push(char);
   }
 }

 for (let char of arr2) {
  if (seen[char] === undefined) {
    seen[char] = 1;
    final.push(char);
  }
}
 return final.sort().join('');
}

// Tests
longest("loopingisfunbutdangerous", "lessdangerousthancoding");
// "abcdefghilnoprstu"

// longest("inmanylanguages", "theresapairoffunctions")
// "acefghilmnoprstuy"
