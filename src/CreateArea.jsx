import React,{useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";


function CreateArea(props) {

  const [note,setNote] = useState({
    title:'',
    content:''
  });

  const [isExpanded,setExpand]=useState(false);

  function handleExpand(){
    setExpand(true)
  }

  function handleChange(event){
    const {value,name} = event.target
    setNote(prevValue=>{
      return {...prevValue,[name] : value}
    })
  };

  function createNote(event){
    props.addNote(note)
    setNote({
      title :'',
      content:''
    })
    setExpand(false)
    event.preventDefault()
  }

  return (
    <div>
      <form className = "create-note">
        {isExpanded && <input onChange ={handleChange} name="title" placeholder="Title" value ={note.title}/>}
        
        <textarea onClick ={handleExpand}onChange ={handleChange} name="content" placeholder="Take a note..." rows={isExpanded?"3":"1"} value={note.content} />
       <Zoom in={isExpanded}>
        <Fab onClick ={createNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
