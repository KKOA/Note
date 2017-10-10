// assert.js
/*jslint browser: true*/
/*global console */
'use strict';

function testReadNote() {
  var msg = 'My favourite language is JavaScript';
  var note = new Note(msg);
  console.log(note.read());
  console.log(msg);
  assert.isTrue(note.read() === msg);
}

testReadNote();

var assert = {
  isTrue: function(assertionToCheck) {
    var x = !assertionToCheck; //
    if (x) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

// assert['isTrue'=>function(x)]
