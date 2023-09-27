"use strict";
// lấy từ local
function getNotes() {
    const notesJSON = localStorage.getItem('notes');
    if (notesJSON) {
        return JSON.parse(notesJSON);
    }
    return [];
}
// đẩy lên local
function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}
// render
function render() {
    const noteList = document.getElementById('note-list');
    if (noteList) {
        noteList.innerHTML = '';
        const notes = getNotes();
        notes.forEach((note, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${note.content}<button onclick="deletenote(${index})">X</button>`;
            noteList.appendChild(li);
        });
    }
}
// thêm
function addnote(content) {
    const noteInput = document.getElementById('note-input');
    const notevalue = noteInput.value;
    const noteList = document.getElementById('note-list');
    console.log(notevalue);
    if (notevalue === "") {
        alert("không được để trống");
        return;
    }
    if (noteList) {
        const noteContent = noteInput.value.trim();
        if (noteContent !== '') {
            const notes = getNotes();
            const newNote = { content: noteContent };
            notes.push(newNote);
            saveNotes(notes);
            render();
            noteInput.value = '';
        }
    }
}
// xóa
function deletenote(index) {
    console.log("111", index);
    const notes = getNotes();
    if (index >= 0 && index < notes.length) {
        notes.splice(index, 1);
        saveNotes(notes);
        render();
    }
}
render();
