// // circle-tests.js
//
// (function(exports) {
//   function testCircleRadiusDefaultsTo10() {
//     var circle = new Circle();
//
//     if (circle.radius !== 10) {
//       throw new Error("Circle size is not 10");
//     }
//   };
//
//   testCircleRadiusDefaultsTo10();
// })(this);
/*jslint browser: true*/
/*global console, assert*/

'use strict';

function testReadNote() {
  var msg = 'My favourite language is JavaScript';
  var note = new Note(msg);
  console.log(note.read());
  console.log(msg);
  assert.isTrue(note.read() === msg);
};

testReadNote();
