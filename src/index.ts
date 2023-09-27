
interface Note {
    content: string;
}
// lấy từ local
function getNotes(): Note[] {
    const notesJSON = localStorage.getItem('notes');
    if (notesJSON) {
        return JSON.parse(notesJSON);
    }
    return [];
}
// đẩy lên local
function saveNotes(notes: Note[]): void {
    localStorage.setItem('notes', JSON.stringify(notes));
}


// render
function render() {
    const noteList = document.getElementById('note-list') as HTMLUListElement | null;

    if (noteList) {
        noteList.innerHTML = '';
        const notes = getNotes();

        notes.forEach((note,index) => {
            const li = document.createElement('li');
            li.innerHTML = `${note.content}<button onclick="deletenote(${index}})">delete</button>`;
            noteList.appendChild(li);
        });
  
        
    }
}
// thêm
function addnote(content:string) {
    const noteInput = document.getElementById('note-input') as HTMLInputElement;
    const notevalue=noteInput.value
    const noteList = document.getElementById('note-list') as HTMLUListElement | null;
   console.log(notevalue);
   
   if (notevalue === ""){
    alert("không được để trống");return;
   }
    if (noteList) {
        const noteContent = noteInput.value.trim();
        if (noteContent !== '') {
            const notes = getNotes();
            const newNote: Note = { content: noteContent };
            notes.push(newNote);
            saveNotes(notes);
            render();
            noteInput.value = '';
        }
    }
}
// xóa
function deletenote(index:number) {
    console.log("111",index);
    const notes=getNotes();
if (index>=0 && index< notes.length){
 notes.splice(index,1);
 saveNotes(notes);
    render();
}
}
render()


