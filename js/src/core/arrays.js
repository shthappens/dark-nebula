
removeWithoutCopy = (arr, item) => {
  for(let i = 0; i <= arr.length - 1;) {
    if (arr[i] == item) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  return arr;
};

append = (arr, item) => {
  arr.push(item);
  return arr;
};

truncate = (arr) => {
  arr.pop();
  return arr;
};

prepend = (arr, item) => {
  arr.unshift(item);
  return arr;
};

curtail = (arr) => {
  arr.shift();
  return arr;
};

concat = (arr1, arr2) => {
  arr = arr1.concat(arr2);
  return arr;
};

insert = (arr, item, index) => {
  arr.splice(index, 0, item);
  return arr;
};

count = (arr, item) => {
  let count = {};

  for(let i = 0; i < arr.length; i++) {
    let num = arr[i];
    count[num] = count[num] ? count[num] + 1 : 1;
  }
  return count[0], count[1], count[2], count[3], count[4];
};

duplicates = (arr) => {
  let out = [], counts = {};

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
    if (counts[item] === 2) {
      out.push(item);
    }
  }
  return out;
};

square = (arr) => {
  return arr.map(function (x) {
    return Math.pow(x, 2);
  });
};

findAllOccurrences = (arr, item) => {
  let count = [];

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      index = arr.indexOf(arr[i]);
      count.push(i);
    }
  }
  return count;
};
