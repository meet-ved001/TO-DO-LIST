// jshint esversion:6

// console.log(module);
// module.exports="hello world";
module.exports.getDate=function(){
const today = new Date();
const options={
  weekday:'long',
  day:'numeric',
  month:'long'
};
return day=today.toLocaleDateString("en-US",options);
// return day;
};

exports.getDay=function(){
const today = new Date();
const options={
  weekday:'long',
  // day:'numeric',
  // month:'long'
};
return day=today.toLocaleDateString("en-US",options);
// return day;
};
