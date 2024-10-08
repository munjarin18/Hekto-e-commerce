import React, { useContext } from "react";
import Container from "./Container";
import Flex from "./Flex";
import chair01 from "../assets/chair01.png";
import chair02 from "../assets/chair02.png";
import chair03 from "../assets/chair03.png";
import chair04 from "../assets/chair04.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import Slider from "react-slick";
import { apiData } from "./ContextApi";
import { Link } from "react-router-dom";



function SampleNextArrow(props) {
  const { onClick } = props;
  
  


  return (
    <div
      className=" absolute h-[40px] w-[40px] bg-[#05E6B7] rounded-full  text-[#fff] top-[50%] translate-y-[-50%] right-[10px] cursor-pointer z-50 duration-300 ease-in-out  hover:bg-black"
      onClick={onClick}
    >
      <FaArrowRight className=" absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className=" absolute h-[40px] w-[40px] bg-[#05E6B7] rounded-full  text-[#fff] top-[50%] translate-y-[-50%] left-[10px] cursor-pointer z-50 duration-300 ease-in-out  hover:bg-black"
      onClick={onClick}
    >
      <FaArrowLeft className=" absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]" />
    </div>
  );
}

const Featured = () => {
  let data = useContext(apiData)
  console.log(data);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          left: "50%",
          bottom: "-50px",
          transform: "translateX(-50%)",
        }}
      >
        <ul style={{ margin: "0px", display: "flex" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          padding: "0  20px",
          // borderBottom: "5px #F6F7FB solid",
        }}
      ></div>
    ),
  };
  return (
    <section className="py-[100px] ">
      <Container>
        <div className=" text-center pb-10 ">
          <h3 className="font-Sans font-bold lg:text-[42px] text-[32px] text-[#0D0E43]">
            Featured Products
          </h3>
        </div>
        <Link to="/ShopGrid">
        <Slider className="" {...settings}>
    
        {data.map((item)=>(
         <div className="w-[24%] justify-between  bg-[#F6F7FB]  pt-[2 0px] ">
            <div className="">
              <img className="ml-[50%] translate-x-[-50%]  h-[250px] w-[250px]"src={item.thumbnail}alt="" />
              <div className=" relative text-center  w-[100%] py-[20px] bg-[#fff] mt-[50px] before:absolute  before:content-[''] before:bottom-0 before:right-0 before:w-[100%] before:h-[0] before:bg-[#2F1AC4] before:duration-300 before:ease-in-out before:hover:h-[100%] before:hover:text-[#fff] ">
                <h3 className=' relative font-Sans font-bold text-[18px] text-[#FB2E86] after:absolute after:content-[""] after:top-[30px] after:left-[50%] after:translate-x-[-50%] after:h-[3px] after:w-[70%]  after:bg-[#05E6B7]'>
                  {item.title}
                </h3>
                <h4 className=" relative font-Sans font-bold text-[16px] text-[#000] mt-[10px] ">
                  Code - Y523201
                </h4>
                <h5 className=" relative font-Sans font-bold text-[16px] text-[#000] ">
                 ${item.price}
                </h5>
              </div>
            </div>
          </div>
        ))}

          
      
        </Slider>
       </Link>
       
      </Container>
    </section>
  );
};

export default Featured;
