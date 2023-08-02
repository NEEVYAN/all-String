import React,{useState} from 'react'

export default function Form(props) {
    const [text,setText]=useState("This is sample text....");

    const funUpper=()=>
    {
        let newText=text.toUpperCase();
        setText(newText);
    }
    const funLower=()=>
    {
        let newText=text.toLowerCase();
        setText(newText);
    }
    const funClear=()=>
    {
        let newText="";
        setText(newText);
    }
    const funCopy=()=>
    {
        let newText=document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        alert("text copied "+newText.value);

    }
    const funRemoveExtraSpace=()=>
    {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));

    }

    const funHandle=(event)=>
    {
        console.log("key is clicked");
        setText(event.target.value);
    }

    const funSlice=()=>
    {
        let newtext=text.slice(0,10);
        setText(newtext.substring());
    }

  return (
    <>
    <div className='container'>
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control para" onChange={funHandle} placeholder="Leave a comment here" id="myBox" value={text} style={{height: 200}}></textarea> 
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={funUpper}>Convert to Upper case</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={funLower}>Convert to Lower case</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={funClear}>Clear</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={funCopy}>Copy</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={funRemoveExtraSpace}>Remove Extra Space</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={funSlice}>slice</button>

    </div>
    <div className="container my-3">
        <h4>Text summary</h4>
        <p>{(text.split(" ").filter((element)=>{return element.length!==0}).length)} words, {text.length} character</p>
        <h5>Preview</h5>
        <p>{text.length>0?text:"Nothing to preview"}</p>
        {/* <div className='box'>
            <p>{}</p>
        </div> */}
    </div>
    </>

  )
}