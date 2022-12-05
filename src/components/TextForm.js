import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        //console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!", "success");
    }

    const handleLoClick = () => {
        //console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!", "success");
    }

    const handleClear= () => {
        //console.log("Uppercase was clicked " + text);
        let newText = '';
        setText(newText);
        props.showAlert("Cleared!", "success");
    }

    const handleOnChange = (event) =>{
        //console.log("On Change");
        setText(event.target.value)
    }

    const[text, setText] = useState('');
  return ( 
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <div className="mb-3">
            <h1>{props.h1}</h1>
            <textarea className="form-control" value = {text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-2" onClick = {handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3 my-2" onClick = {handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3 my-2" onClick = {handleClear}>Clear Text</button>
    </div> 

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Sumamry</h2>
        <p>{text.split(" ").length} words & {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in text box to preview it here"}</p>
    </div>
    </>
  )
}
