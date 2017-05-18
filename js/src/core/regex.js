containsNumber = (string) => {
  // let regex = /[0-9]/;
  // let found = string.match(regex);
  // if (found >= 1) {
  //   return true;
  // } else {
  //   return false;
  // }
  return /[0-9]/.test(string);
};

containsRepeatingLetter = (string) => {
  return (/([a-z])\1/i).test(string);
};

endsWithVowel = (string) => {
  return (/[aeiouAEIOU]\b/g).test(string);
};

captureThreeNumbers = (string) => {
  let match = string.match(/([0-9]{3})/g);
  if (match !== null) {
    return match[0];
  } else {
    return false;
  }
};

matchesPattern = (string) => {
  let match = string.match(/\b(\d{3})-(\d{3})-(\d{4})\b/g);
  if (match !== null) {
    return true;
  } else {
    return false;
  }
};

isUSD = (string) => {
  // let startsWith = /^(\$[0-9])/;
  // let endsWith = /(\.[0-9]{2}\b|,[0-9]{3}\b$)/;
  // endCheck = string.length - string.search(endsWith);
  // // console.log(string.search(startsWith));
  // // console.log(string.search(endsWith));
  // // console.log(string.length);
  // // console.log(string.length);
  // // console.log((string.length - string.search(endsWith)) === 3);
  //
  // if (string.search(startsWith) === 0 && (endCheck === 3 || string.length == string.search(endsWith))) {
  //   return true;
  // } else if (string.search(startsWith === 0) && endCheck === 4) {
  //   return true;
  // } else {
  //   return false;
  // }

  let usd = /^(?!0\.00)[$][1-9]\d{0,2}(,\d{3})*(\.\d{2})?$/;
  return usd.test(string);

};
