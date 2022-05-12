import React from 'react';
import '../css/Slider.css';
import { useState } from 'react';

var img_url = ['https://cdn.fcglcdn.com/brainbees/banners/test/HP_MKTG_Buy3_P01_desktop_20225913320.webp',
    'https://cdn.fcglcdn.com/brainbees/banners/test/MKTGN_HP_DIAPER_12MAY_202251119477.webp',
    'https://cdn.fcglcdn.com/brainbees/banners/test/BabyhugCCMay_Upto60FS_DPHP_994x399_202251194647.webp',
    'https://cdn.fcglcdn.com/brainbees/banners/test/HP_MKTG_StealDeal_P04_Desktop_20225913630.webp',
    'https://cdn.fcglcdn.com/brainbees/banners/test/HP-Banner-994-x-399_2022411104450.webp',
    'https://cdn.fcglcdn.com/brainbees/banners/test/baby-names_HP-desktop_2022510133557.webp'];
function Slider() {
    const [index, setIndex] = useState(0);
    setTimeout(() => {
        if (index === 5) setIndex(0);
        else
            setIndex(index + 1)
    }, 2000)
    return (
        <div className="App">
            <img style={{ width: "100%", height: "450px" }} src={img_url[index]} alt="Italian Trulli" />
            <p className='baby'>PREMIUM BOUTIQUES</p>
        </div>
    );
}

export default Slider;
