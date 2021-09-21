function countdown(n){
    if (n < 1) {
      return [];
    } else if (n >= 1) {
      const countAray = countdown (n - 1);
      countAray.unshift(n);
      console.log(countAray);
      return countAray;
    }
    return;
}

console.log(countdown(10));

