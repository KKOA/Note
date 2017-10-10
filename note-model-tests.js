

function testReadNoteList() {

  function testReadNote() {
    var note1 = new Note('first message');
    var noteList = new NoteList();
    noteList.add(note1);
    var note2 = new Note('second message');
    noteList.add(note2);
    assert.isTrue(note.read() === msg);
  }

}

testReadNoteList();
