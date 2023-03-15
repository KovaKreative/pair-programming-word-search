const wordSearch = (letters, word) => {
  for (let x = 0; x < letters[0].length; x++) {
    let buffer = "";
    for (let y = 0; y < letters.length; y++) {
      buffer += letters[y][x];
      if (letters[y].join('').includes(word)) {
        return true;
      }
    }
    if (buffer.includes(word)) {
      return true;
    }
  }
  const backwardsArray = letters.reverse();
  for (let x = 0; x < backwardsArray[0].length; x++) {
    let buffer = "";
    for (let y = 0; y < backwardsArray.length; y++) {
      buffer += backwardsArray[y][x];
      const backwardsRow = backwardsArray[y].reverse().join('');
      if (backwardsRow.includes(word)) {
        return true;
      }
    }
    if (buffer.includes(word)) {
      return true;
    }
  }
  // let buffer = "";
  // for (let x = 0; x < (letters[0].length + letters.length); x++) {
  //   let buffer = "";
  //   for (let y = 0; y < letters.length; y++) {
  //     if (letters[y][x + y] >= letters[0].length) {
  //       continue;
  //     }
  //     buffer += letters[y][x + y];   
  //   }
  //   if (buffer.includes(word)) {
  //     return true;
  //   }
  //   if (buffer.split('').reverse().join('').includes(word)){
  //     return true;
  //   }
  // }
  // for (let x = 0; x < (letters[0].length + letters.length); x++) {
  //   let buffer = "";
  //   let forwardBuffer = "";
  //   for (let y = 0; y < letters.length; y++) {
  //     if (letters[y][x + y] >= letters[0].length) {
  //       continue;
  //     }
  //     if ((x - y) < 0){
  //       break;
  //     }
  //     buffer += letters[y][x + y];   
  //     forwardBuffer += letters[y][x - y];
  //   }
  //   console.log(forwardBuffer);
  //   if (buffer.includes(word) || forwardBuffer.includes(word)) {
  //     return true;
  //   }
  //   if (buffer.split('').reverse().join('').includes(word)){
  //     return true;
  //   }
  // }
  return false;
};



module.exports = wordSearch;