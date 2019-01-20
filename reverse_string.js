// Variante 1: split, reverse, join
function reverse_1(to_reverse){
  return to_reverse.split("").reverse().join("");
}

// Variante 2: For-Schleife
function reverse_2(to_reverse){
  let result = "";
  for (var pos = to_reverse.length - 1; pos >= 0; pos--){
    result += to_reverse[pos];
  }
  return result;
}

// Variante 3: Reduce
function reverse_3(to_reduce){
  return to_reduce.split("").reduce( (accumulator, current_char) => current_char + accumulator, '');
}

// Variante 4: Spread-Syntax (ES6)
function reverse_4(to_reverse){
  return [...to_reverse].reverse().join("");
}

// Variante 5: Rekursion (ohne Elvis)
function reverse_5(to_reverse){
  if(to_reverse == ""){
    return to_reverse;
  } else {
    return reverse(to_reverse.substr(1)) + to_reverse[0];
  }
}

// Variante 5: Rekursion (mit Elvis)
function reverse_5_elvis(to_reverse){
  return to_reverse == "" ? to_reverse : reverse(to_reverse.substr(1)) + to_reverse[0];
}
