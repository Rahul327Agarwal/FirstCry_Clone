import React from 'react';
import '../css/Footer.css';

function Footer() {
    return <div className='footer_div'>
        <footer className="pt-5">
            
            {/* <!-- upper footer --> */}
            <div className="p-16 flex">
                <div className="float-left">
                    <div className="font-bold text-2xl">Subscribe to our awesome emails.</div>
                    <p className="text-gray-500 pt-2">Get our latest offers and news straight in your inbox.</p>
                    <div className="flex container pt-10 container ">
                        <input type="text" name="" placeholder="Please enter an email address " className="bg-gray-100 py-4 pl-4 pr-36" />
                        <div className="bg-black text-white px-10 py-4 cursor-pointer">Subscribe</div>
                    </div>
                </div>

                <div>
                    <div className="float-right pl-52 ">
                        <div className="font-bold text-2xl">Download our apps</div>
                        <p className="text-gray-500 pt-2">Shop our products and offers on-the-go.</p>
                        <div className="flex container pt-10 container gap-8">
                            <div>
                                <a href="https://apps.apple.com/us/app/max-fashion/id1180884624?ls=1" target="_blank">
                                    <img src="./components/icons/app_store.png" alt="" className="cursor-pointer" />
                                </a>
                            </div>
                            <div>
                                <a href="https://play.google.com/store/apps/details?id=com.applications.max" target="_blank">
                                    <img src="./components/icons/google_play.png" alt="" className="cursor-pointer" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- second footer --> */}
            <div className="px-16 pb-12">
                {/* <hr> */}
                <div className="pt-12 grid grid-cols-5">
                    <div>
                        <div className="font-bold pb-3">Women</div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/WomenData.html" target="_self">Tops</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/WomenData.html" target="_self">Dresses & Jumpsuits</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/WomenData.html" target="_self">Sportswear</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/WomenData.html" target="_self">Bottoms</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/WomenData.html" target="_self">Winterwear</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/WomenData.html" target="_self">Ethnicwear</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/WomenData.html" target="_self">Lingerie</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/WomenData.html" target="_self">Sleepwear</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/WomenData.html" target="_self">Accessories</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/WomenData.html" target="_self">Shoes</a></span></div>
                    </div>
                    <div>
                        <div className="font-bold pb-3">Men</div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/MenData.html" target="_self">Tops</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/MenData.html" target="_self">Bottoms</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/MenData.html" target="_self">Sportswear</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/MenData.html" target="_self">Winterwear</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/MenData.html" target="_self">Accessories</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/MenData.html" target="_self">Shoes</a></span></div>
                    </div>
                    <div>
                        <div className="font-bold pb-3">Boys</div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/BoysData.html" target="_self">Tops</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/BoysData.html" target="_self">Bottoms</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/BoysData.html" target="_self">Indian Wear</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/BoysData.html" target="_self">Winter Wear</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/BoysData.html" target="_self">Essentials</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/BoysData.html" target="_self">Accessories</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/BoysData.html" target="_self">Shoes</a></span></div>
                    </div>
                    <div>
                        <div className="font-bold pb-3">Girls</div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/GirlsData.html" target="_self">Tops</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/GirlsData.html" target="_self">Bottoms</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/GirlsData.html" target="_self">Indian Wear</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/GirlsData.html" target="_self">Winter Wear</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/GirlsData.html" target="_self">Essentials</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/GirlsData.html" target="_self">Accessories</a></span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer"><a href="./components/data/GirlsData.html" target="_self">Shoes</a></span></div>
                    </div>

                    <div>
                        <div className="font-bold pb-3">Explore</div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer">Offers</span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer">Magazins</span></div>
                    </div>

                    <div>
                        <div className="font-bold pb-3 pt-12">About</div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer">About us</span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer">Write to us</span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer">Careers</span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer">Take a Tour</span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer">Blogs</span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer">Store Locator</span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer">Landmark Cares</span></div>
                    </div>

                    <div>
                        <div className="font-bold pb-3 pt-12">Help</div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer">Contact us</span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer">Shipping</span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer">Return Process</span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer">Return Policy</span></div>
                        <div className="py-1 text-gray-500"><span className="cursor-pointer">Help Center</span></div>
                    </div>
                </div>
            </div>

            <div className="px-16">
                <hr />
            </div>
            {/* <!-- second last footer --> */}

            <div className="px-16 grid grid-cols-7">

                <div className="flex col-start-1 col-span-5">
                    <div className="w-52 cursor-pointer my-5 mr-8" >
                        <div className="float-left rounded-full border-2 border-gray-200 p-3 mr-3" style={{ fontSize: "24px" }} aria-hidden="true">
                            <span className="iconify" data-icon="clarity:phone-handset-solid"></span>
                        </div>
                        <div className="">
                            <p className="text-gray-400">Talk to us</p>
                            <p>1800-123-1444</p>
                        </div>
                    </div>

                    <div className="w-56 cursor-pointer my-5 mr-8">
                        <div className="float-left rounded-full border-2 border-gray-200 p-3 mr-3" style={{ fontSize: "24px" }} aria-hidden="true">
                            <span className="iconify" data-icon="bi:question-square-fill"></span>
                        </div>
                        <div className="">
                            <p className="text-gray-400">Helpcentre</p>
                            <p>help.firstcry.com</p>
                        </div>
                    </div>

                    <div className="w-64 cursor-pointer my-5">
                        <div className="float-left rounded-full border-2 border-gray-200 p-3 mr-3" style={{ fontSize: "24px" }} aria-hidden="true">
                            <span className="iconify" data-icon="clarity:email-solid"></span>
                        </div>
                        <div className="">
                            <p className="text-gray-400">Write to us</p>
                            <p>help.in@firstcry.com</p>
                        </div>
                    </div>
                </div>

                <div className="flex my-7 col-start-7 ml-7">
                    <div className="hover:bg-gray-200 p-2 rounded-full mr-3 cursor-pointer">
                        <a href="https://www.facebook.com/maxfashions" target="_blank">
                            <span className="iconify" data-icon="bx:bxl-facebook" style={{ fontSize: "24px" }}></span>
                        </a>
                    </div>
                    <div className="hover:bg-gray-200 p-2 rounded-full mr-3 cursor-pointer">
                        <a href="https://twitter.com/@maxfashionindia" target="_blank">
                            <span className="iconify" data-icon="bx:bxl-twitter" style={{ fontSize: "24px" }}></span>
                        </a>

                    </div>
                    <div className="hover:bg-gray-200 p-2 rounded-full cursor-pointer">
                        <a href="https://www.instagram.com/maxfashionindia/" target="_blank">
                            <span className="iconify" data-icon="akar-icons:instagram-fill" style={{ fontSize: "24px" }}></span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="px-16">
                <hr />
            </div>
            {/* <!-- last footer --> */}
            <div className="px-16 flex">
                <div className="py-8 ">
                    <img src="components\icons\logo.png" alt="" className="" />
                </div>
                <div className="py-6 ml-6 text-gray-400">
                    <p>&#169 2021 Retail World Limited.</p>
                    <p><a href="" className="hover:text-blue-800">Terms & Conditions</a> - <a href="" className="hover:text-blue-800">Privacy Policy</a></p>
                </div>
            </div>


        </footer>


    </div>
}
export default Footer;