import React, {useState} from 'react';
import './Feed.css';

export default function Feed(props) {

    const [data,setData] = useState([]);
   
    const likePost = (id)=>{
        fetch('/like',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id,
            })
        }).then(res=>res.json())
        .then(result=>{
           //console.log(result)
           const newData = data.map(item=>{
            if(item._id==result._id){
                return result;
            }else{
                return item;
            }
        })
        setData(newData)
        }).catch(err=>{
            console.log(err)
        })
  }
   

    return <div>
        <div className="cardA">
            <div className="profileA">
                <img src="https://previews.123rf.com/images/ivandbajo/ivandbajo1903/ivandbajo190300007/118116625-abstract-vibrant-tree-logo-design-root-vector-tree-of-life-logo-design-inspiration-isolated-on-white.jpg" alt="" id="profilePicA" />
                <div>
                    <p id="nameA">{props.postedBy}</p>
                    <h6 id="cityA">{props.city}</h6>
                </div>
            </div>
            <img id="contentA" src={props.image} style={{ width: "100%" }} />
            <div className="containerA">
                <i id="quoteA" className="fas fa-quote-left" style={{ float: "left", fontSize: "7px" }}></i>
                <p id="descriptionA">{props.body}</p>
            </div>
        </div>
    </div>
}
