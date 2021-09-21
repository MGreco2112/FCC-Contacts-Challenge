function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
      return []
  } else if (startNum <= endNum){
      const increment = rangeOfNumbers(startNum + 1, endNum);
      increment.unshift(startNum);
      return increment;
  }
};

console.log(rangeOfNumbers(1, 10));