exports.add = (x, y) => {
  return x + y;
};

exports.isEven = (x) => {
  if(x%2 != 0) {
    return false;
  }
  else {
    return true;
  }
};
