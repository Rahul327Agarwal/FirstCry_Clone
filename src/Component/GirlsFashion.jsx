import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../Redux/Cart/action';
import '../css/Slider.css';
import { v4 as uuidv4 } from 'uuid';

function Section1() {
    const [imgurl, setImgurl] = useState([]);
    const data = useSelector(state => state.items);
    const price = () => Math.ceil(Math.random() * 1000);
    const dispatch = useDispatch();
    const getdata = () => {
        fetch('https://my-json-server.typicode.com/Rahul327Agarwal/firstcry_jsonserver/girls_fashion_img_url')
            .then(res => res.json())
            .then(data => setImgurl(data));
    }
    useEffect(() => getdata(), []);

    console.log("hi", data);

    return (
        <div style={{ backgroundColor: "#f7f0f0" }} className="App">
            <div className='main_div'>
                {imgurl.map((img, index) => {
                    const item_price = price();
                    return <div style={{ width: "30%", marginTop: "20px", marginBottom: "80px" }} >
                        <img src={img.img_url} alt="Italian Trulli" />
                        <p style={{ textAlign: "center" }}> $ {img.price}</p>
                        <button onClick={() => dispatch(addtocart({img,id:uuidv4()}))} style={{ backgroundColor: "#575757", color: "white" }}>Add to Cart</button>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Section1;