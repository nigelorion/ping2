function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.counter = function(userInput) {
  var userInputNum = parseInt(userInput);
  var userArray = [];
  for (var i = 1; i <= userInputNum; i++) {
    if (i % 3 == 0 && i % 5 ==0) {
      userArray.push('Ping-Pong');
    } else if (i % 3 == 0) {
      userArray.push('Ping');
    } else if (i % 5 == 0) {
      userArray.push('Pong');
    } else {
      userArray.push(i);
    }
  };
  return userArray;
};

exports.calculatorModule = Calculator;
// 
// function errorCheck (errorInput) {
//   var checkInput = parseInt(errorInput);
//   if (!checkInput || checkInput < 0 || isNaN(checkInput)){
//     return true;
//   }
// };
