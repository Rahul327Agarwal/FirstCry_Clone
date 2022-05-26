import React from 'react';
import '../css/Slider.css';
import { useState,useEffect } from 'react';

function Slider() {
    const [index, setIndex] = useState(0);
    const[imgurl,setImgurl]=useState([]);
    setTimeout(() => {
        if (index === 5) setIndex(0);
        else
            setIndex(index + 1)
    }, 2000);
    
    const getdata=()=>
    {
        fetch('https://my-json-server.typicode.com/Rahul327Agarwal/firstcry_jsonserver/slider_img_url')
        .then(res=>res.json())
        .then(data=>setImgurl(data));
    }

    useEffect(()=>{getdata()},[]);
    return (
        <div className="App">
            <img style={{ width: "100%", height: "450px" }} src={imgurl[index]} alt="Italian Trulli" />
            <p className='baby'>PREMIUM BOUTIQUES</p>
        </div>
    );
}

export default Slider;
