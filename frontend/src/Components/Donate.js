import React, { useEffect, useState } from 'react';
import './donate.css';
import { useNavigate } from 'react-router-dom';

export default function Donate() {
  
    const history = useNavigate();
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const [name, setName]= useState("");

    useEffect(()=>{
        if(url){
            fetch("/createpost", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer "+ localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    body,
                    pic:url,
                })
            }).then(res => res.json())
                .then(data => {
                    if (data.error) {
                        console.log("error");
                    }
                    else {
                     history('/mainpage');
                    }
                }).catch(err => {
                    console.log(err)
                })
        }
    },[url]);

    const PostDetails = ()=>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","charity_app")
        data.append("cloud_name","abcdefu")
        fetch("https://api.cloudinary.com/v1_1/abcdefu/image/upload",{
            method:"post",
            body:data,
        })
        .then(res=>res.json())
        .then(data=>{
           console.log(data);
           setUrl(data.url);
        })
        .catch(err=>{
            console.log(err);
        })
       
        
     
    }
  
    return <div>
        <form className='form1'>
            <h1>Donate</h1>
            <div class="formcontainer">
                <hr />
                <div class="containerY">
                    <label><strong>Description</strong></label>
                    <input type="text" value={body} onChange={(event)=> setBody(event.target.value)}  placeholder="Add description" className='descriptionY'/>
                    <label><strong>Location</strong></label>
                    <input type="text" value={name} onChange={(event)=> setName(event.target.value)}  placeholder="Your name" className='descriptionY'/>
                    <label style={{marginRight: '10px'}}><strong>Add image</strong></label>
                    <input type="file" onChange={(event)=> setImage(event.target.files[0])} className='upload' required />
                </div>
                <button className='btncreate' type="submit" onClick={()=>PostDetails()}>Donate!</button>
                
            </div>
        </form>
    </div>;
}

