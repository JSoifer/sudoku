var availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function nonNumeric(userInput) {
  console.log(typeof(userInput));
  if (Number.isNaN(userInput)) {
    return false;
  } else {
    return true;
  }
}
export function wholeNumberChecker(userInput) {
var availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var i;
  while (userInput > 0) {

    for (i = 0; i < availableNumbers.length; i++) {
      if(userInput === availableNumbers[i]) {
        return true;
      }
    }

  }
}
