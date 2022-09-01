//menangkap elemnt form dr HTML
const note_form = document.getElementById("note_form"); //element form
let note = document.getElementById("note"); //menagkap element textarea
let note_storage_data = []; //buat array kosong
let root = document.getElementById("root"); //menangkap element div untuk render


//tambahkan event listener
note_form.addEventListener("submit", (elem)=>{
    
    elem.preventDefault(); // mencegah form dari reload page

   
    let note_value = {
        id : Date.now(), //07939384 random number
        note: elem.target.note.value //input dari user
    }

    note.value = ""; //clear text area

    note_storage_data.push(note_value); //add input user ke local storage

    // console.info(note_storage_data); //console
    
    //panggil function render
    renderToHtml();

});

//buat element function untuk render note_storage ke HTML
function renderToHtml(){

    //clear /reset element root
    root.innerHTML = '';

    //perulangan foreach dari array note_storage_data
    note_storage_data.forEach((e, i)=>{
        // console.info(e);

        root.innerHTML += `
        <div class="card">
            <pre>${e.note} </pre>
            <button class="card_delete_btn" onclick="deleteNote(${i})"> X </button>
        </div>
        `
    });
}

// function delete object pada array note_storage_data
function deleteNote(index){
    //confirm delete
    let confirmDelete = confirm("yakin delete?");
    
    if(!confirmDelete){
        return
    }

    //delete data pada array sesuai dengan indexnya
    note_storage_data.splice(index, 1)

    renderToHtml();
}

    