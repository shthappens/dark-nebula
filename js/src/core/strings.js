reduceString = (str, amount) => {
  count  = 0;
  result = '';
  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      count++;
      if (count < amount) {
        result += str[i];
      }
    } else {
      count = 0;
      result += str[i];
    }
  }
  return result;
};

reverseString = (str) => {
  newString = '';
  for (i = str.length -1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};
