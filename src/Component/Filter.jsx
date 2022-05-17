import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart,lowtohigh,hightolow } from '../Redux/Cart/action';
import '../css/Slider.css';
import { v4 as uuidv4 } from 'uuid';


function Filter(props) {
   const imgurl=props.imgurl;
//    console.log("first ",imgurl);
//     imgurl.sort(function (a, b) {
//         return a.price - b.price;
//     });
//     console.log("second ",imgurl);
    const dispatch=useDispatch();
    const data = useSelector(state => state.sorted_data);
    console.log(data);
  return (
    <div>
        <button onClick={()=>dispatch(lowtohigh)} style={{backgroundColor:"#575757",color:"red",marginLeft:"30%"}}>Low to High</button>
        <button style={{backgroundColor:"#575757",color:"red",marginLeft:"30%" }}>High to Low</button>
          <div className='main_div'>
              {imgurl.map((img, index) => {

                  return <div style={{ width: "30%", marginTop: "20px", marginBottom: "80px" }} >
                      <img src={img.img_url} alt="Italian Trulli" />
                      <p style={{ textAlign: "center" }}> $ {img.price}</p>
                      <button onClick={() => dispatch(addtocart({ img, id: uuidv4() }))} style={{ backgroundColor: "#575757", color: "white" }}>Add to Cart</button>
                  </div>
              })}
          </div>
    </div>
  )
}

export default Filter;