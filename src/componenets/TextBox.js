import React,{useState} from 'react'

export default function TextBox(props) {
    const handleUp= () =>{
console.log("Uppercase was clicked")
let newt=text.toUpperCase();
setText(newt);
        }
        let c=0;
          const handleOnchange= (event) =>{
console.log("Hndleonchanfe ")
setText(event.target.value);
        }
    const[text,setText]=useState("");
    const handlelow= ()=>{
      let content=text.toLowerCase();

      setText(content);
    }
    const handles= (event)=>{
      
      console.log(event);
      let content;
      
      content=document.getElementById("exampleFormControlTextarea1");
      if(c%2===0)
      content.style.fontStyle="italic";
      else
      content.style.fontStyle="normal";
      c++;
    }
    const handleCopy=()=>{
      let content=document.getElementById("exampleFormControlTextarea1");
    content.select();
     navigator.clipboard.writeText(content.value);
    }  
     
    const handleSearch=()=>
    {
        
        let person = prompt("Please enter the word to be searched", "Here");
        let content=text.toLowerCase();
       let position = content.search(person.toLowerCase());
       if(position!==-1)
       {
        let s="found";
alert(s);

       }else
       alert("NOT FOUND");
       }
    const mystyle={
      backgroundColor:props.mode==='dark'?'#1e1e1e':'white',border:props.mode==='light'?'2px solid #1e1e1e':'2px solid white',color:props.mode==='light'?'#1e1e1e':'white'}
    

  return (
    
    
    <div style={{color:props.mode==='light'?'black':'white'}}>
        
    <h1>{props.heading}</h1>
<div className="mb-3"  >
 
  <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnchange} style={mystyle}value={text} 
  rows="8"></textarea>
  <button className="btn btn-primary mx-2 my-2" onClick={handleUp}>Change to UpperCase</button>
   <button className="btn btn-primary mx-2 my-2" onClick={handlelow} >Change to LowerCase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handles}  > Italic </button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}  > Copy </button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleSearch}  > Search</button>
    
    
</div>

<div className="preview">
  <p>text contains { text.split(" ")[text.split(" ").length-1]===""?text.split(" ").length-1:text.split(" ").length}   words and {text.length} charachters</p>
  <h3>Preview</h3>{text}</div>
    </div>

    
  )
}
