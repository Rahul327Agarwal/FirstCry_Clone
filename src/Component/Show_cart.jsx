import React from 'react';
import {useSelector} from 'react-redux';
import {removecart} from '../Redux/Cart/action';
import {useDispatch} from 'react-redux';

function Show_cart() {
    const data = useSelector(state => state.items);
    console.log(data);
    const dispatch=useDispatch();
  return (
      <div style={{ backgroundColor: "#f7f0f0" }} className="App">
          <div className='main_div'>
              {data.map((item, index) => {
                
                  return <div style={{ width: "30%", marginTop: "20px", marginBottom: "80px" }} >
                      <img src={item.img.img_url} alt="Italian Trulli" />
                      <p style={{ textAlign: "center" }}> $ {item.img.price}</p>
                      <button onClick={() => dispatch(removecart(item.id))} style={{ backgroundColor: "#575757", color: "white" }}>Remove to Cart</button>
                  </div>
              })}
          </div>
      </div>
  )
}

export default Show_cart