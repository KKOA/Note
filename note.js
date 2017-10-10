(function(exports) {
  function Note(text) {
    this.text = text;
  };
  // function read() {
  //   return this.text;
  // }

  Note.prototype.read = function()
  {
    return this.text;
  };

  exports.Note = Note;
})(this);
