const ftoc = function(temp) {
  // ([°F] − 32) × 5⁄9
  // console.log(Math.round(((temp - 32) * 5 / 9) * 10) / 10);
  return Math.round(((temp - 32) * 5 / 9) * 10) / 10;
  
};

const ctof = function(temp) {
  // [°C] × 9⁄5 + 32 
  // console.log(Math.round((temp * 9 / 5 + 32) * 10) / 10);
  return Math.round((temp * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
