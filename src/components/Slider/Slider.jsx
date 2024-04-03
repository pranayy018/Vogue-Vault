import React  from "react";
import { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ];
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };
    const nextSlide = () => {
      setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };
  
    return (
      <div className="slider-mod">
        <div className="container-mod" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
          <img src={data[0]} alt="" />
          <img src={data[1]} alt="" />
          <img src={data[2]} alt="" />
        </div>
        <div className="icons-mod">
          <div className="icon-mod" onClick={prevSlide}>
            <WestOutlinedIcon />
          </div>
          <div className="icon-mod" onClick={nextSlide}>
            <EastOutlinedIcon />
          </div>
        </div>
      </div>
    );
  };
  
  export default Slider;


















