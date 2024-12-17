import React from "react";

const Home = () => {
  return (
    <div className="bg-white w-full">
      <div className="w-full">
        <ul
          className=" md:h-[150px] h-[120px] flex overflow-x-scroll hide-scrollbar"
          style={{ scrollBehavior: "smooth" }}
        >
          <li className="flex flex-col justify-center items-center  m-1">
            <div className=" h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full justify-center items-center flex">
              <img src="src\assets\felipepelaquim-6zO5VKogoZE-unsplash.jpg" className=" h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full justify-center items-center flex  hover:h-[90px] hover:w-[90px] hover:md:h-[110px] hover:md:w-[110px]"/>
            </div>
            <label className="justify-center items-center flex">Por 1</label>
          </li>
         
        </ul>
      </div>
      <div className=" h-[500px] w-full"></div>
      <div className=" h-[800px] md:h-[545px] w-full">
        <div className="bg-white h-[390px] grid-cols-2 grid-rows-2 grid p-1 md:flex md:justify-around md:items-center md:h-[200px]">
          <div className="bg-white justify-center items-center flex flex-col text-center text-2xl font-bold rounded-full mt-2">
            <img
              src="src/assets/2062062_amazon_buy_logo_online_shop_icon.png"
              className="w-[130px]"
            />
            Amazon
          </div>
          <div className="bg-white justify-center items-center flex flex-col text-center text-2xl font-bold rounded-full mt-2">
            <img
              src="src/assets/1220318_flipkart_ecommerce_shopping_icon.png"
              className="w-[120px]"
            />
            Flipkart
          </div>
          <div className="bg-white justify-center items-center flex flex-col text-center text-2xl font-bold rounded-full mt-2">
            <img
              src="src/assets/vecteezy_meesho-transparent-icon_50816807.png"
              className="w-[120px]"
            />
            Meesho
          </div>
        </div>
        <div className=" w-full h-[500px] text-3xl font-bold md:h-[310px] ">
          <div className="px-4">Trending on</div>
          <ul className=" h-[440px] mt-2 grid grid-cols-2 grid-rows-2 md:flex md:h-[300px]">
            <li className="flex justify-center items-center md:w-[300px] ">
              hi
            </li>
            <li className="flex justify-center items-center">hi</li>
            <li className="flex justify-center items-center">hi</li>
            <li className="flex justify-center items-center">hi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
