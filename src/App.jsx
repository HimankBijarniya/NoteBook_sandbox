import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [NoteList,setNoteList] = useState([])

function AddNote(n){
  setNoteList((prevItems )=>{return [...prevItems,n]})
}
function DeleteNote(id){
  setNoteList((prevItems)=> {
    return prevItems.filter((note,index)=>{
      return index !==id
    })
  })

}

  return (
    <div>
      <Header />
      <CreateArea addNote ={AddNote}/>
      {NoteList.map((n,index)=>{return <Note id = {index} key={index} title={n.title} content={n.content} onDelete ={DeleteNote}/> })}
    
      <Footer />
    </div>
  );
}

export default App;
