const bubbleSort = (inputArr) => {
  let length = (inputArr.length - 1);
  for (var i=0; i < length; i++) {
    for (var j=0; j < length; j++) {
      if (inputArr[j] > inputArr[j+1]) {
        [inputArr[j], inputArr[j+1]] = [inputArr[j+1], inputArr[j]];
      }
    }
  }
  return inputArr;
};

module.exports = bubbleSort;
