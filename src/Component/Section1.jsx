import React from 'react';
import '../css/Slider.css';

var img_url = [
    'https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26611.webp',
    'https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26607.webp',
    'https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26593.webp',
    'https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26610.webp',
    'https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26611.webp',
    'https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26612.webp',
    'https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26597.webp',
    'https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26586.webp',
    'https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26599.webp',
    'https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26588.webp',
    'https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26592.webp',
    'https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26596.webp'
];
function Section1() {

    return (
        <div style={{ backgroundColor: "#f7f0f0" }} className="App">
            <div className='main_div'>
                {img_url.map((img, index) => {
                    return <img style={{ width: "30%", marginBottom: "80px", marginLeft: "40px" }} src={img_url[index]} alt="Italian Trulli" />
                })}
            </div>
        </div>
    );
}

export default Section1;
