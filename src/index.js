import 'babel-polyfill';

const leapjs = require('leapjs');

var controller  = new leapjs.Controller();


controller.on('connect', function() {
  console.log("Successfully connected.");
});

controller.on('streamingStarted', function() {
  console.log("A Leap device has been connected.");
});

controller.on('streamingStopped', function() {
  console.log("A Leap device has been disconnected.");
});

let outTextStopMsg = false;

controller.on('deviceFrame', function(frame) {

  let outText = "";

  frame.hands.map(function(thisHand){

      if(thisHand.type=='left'){
        outText += "Left hand ";
      }
      if(thisHand.type=='right'){
        outText += "Right hand ";
      }
  });


if(outText.length >0){
  console.log(outText);
  outTextStopMsg = true;
}else{
  if(outTextStopMsg){
    console.log("Hands out-------------------------------------------");
    outTextStopMsg=false;
  }

}





/*

console.log(frame.fingers);

*/

  /*
  var numberOfFingers = frame.fingers.length;
  console.log(numberOfFingers);
  */
});



controller.connect();
