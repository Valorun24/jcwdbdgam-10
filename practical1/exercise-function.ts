/* ------------------------------------ 1 ----------------------------------- */
function getFullName(user: { firstName: string; lastName: string }) {
  return `${user.firstName} ${user.lastName}`;
}

console.log(getFullName({ firstName: "Nadhif", lastName: "Fuadi" }));

/* ------------------------------------ 2 ----------------------------------- */
function isValidEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

console.log(isValidEmail("user@example.com"));
console.log(isValidEmail("wrong-email"));

/* ------------------------------------ 3 ----------------------------------- */
function applyDiscount(price: number, discount: number) {
  return price - price * discount;
}
console.log(applyDiscount(100, 0.2));
console.log(applyDiscount(250, 0.1));

/* ------------------------------------ 4 ----------------------------------- */
function convertToStringArray(arr: number[]) {
  let result: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    let strValue = arr[i] + "";
    result.push(strValue);
  }

  return result;
}

console.log(convertToStringArray([1, 2, 3]));

/* ------------------------------------ 5 ----------------------------------- */
function countWords(sentence: string) {
  let count = 0;
  let insideWord = false;

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char !== " " && insideWord === false) {
      count++;
      insideWord = true;
    } else if (char === " ") {
      insideWord = false;
    }
  }

  return count;
}

console.log(countWords("TypeScript makes JavaScript better"));

/* ------------------------------------ 6 ----------------------------------- */

/* ----------------------------------- 11 ----------------------------------- */
// find maximun number
function getMax(arr: number[]) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(getMax([3, 9, 1, 7]));

/* ----------------------------------- 12 ----------------------------------- */
function celciusToFahrenheit(c: number) {
  return c * 1.8 + 32;
}

console.log(celciusToFahrenheit(0));
console.log(celciusToFahrenheit(25));

/* ----------------------------------- 13 ----------------------------------- */
function containsWord(sentence: string, word: string) {
  for (let i = 0; i < sentence.length; i++) {
    let match = true;

    for (let j = 0; j < word.length; j++) {
      if (sentence[i + j] !== word[j]) {
        match = false;
        break;
      }
    }
    if (match) return true;
  }

  return false;
}

console.log(containsWord("Learning TypeScript is fun", "fun"));
console.log(containsWord("Learning TypeScript", "Java"));

/* ----------------------------------- 14 ----------------------------------- */
function minutesToHours(minutes: number) {
  return minutes / 60;
}

console.log(minutesToHours(90));

/* ----------------------------------- 15 ----------------------------------- */ function removeDuplicates(arr: number[]) {
  let result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    let sudahAda = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        sudahAda = true;
        break;
      }
    }
    if (!sudahAda) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4]));
