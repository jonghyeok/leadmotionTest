import 'babel-polyfill';

const leapjs = require('leapjs');

var controller  = new leapjs.Controller();


controller.on('connect', function() {
  console.log("Successfully connected.");
});
/*
controller.on('streamingStarted', function() {
  console.log("A Leap device has been connected.");
});

controller.on('streamingStopped', function() {
  console.log("A Leap device has been disconnected.");
});
*/
controller.on('deviceFrame', function(frame) {


console.log(frame.fingers);



  /*
  var numberOfFingers = frame.fingers.length;
  console.log(numberOfFingers);
  */
});



controller.connect();
