const getRandom = (min, max) => {
  if (min >= 0 && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    alert('Set the correct range!!!')
  }
  
};


const checkStringLength = (string, maxLength) => {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}
