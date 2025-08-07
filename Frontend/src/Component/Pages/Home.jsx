import React from "react";
import Slider from "../Carousal/slider";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import Cards from "../Card/VendorCards";
import HorizontalCard from "../Card/HorizontalCard";
import Bannerone from "../Card/Bannerone";
import Bannertwo from "../Card/Bannertwo";
import Bannerthree from "../Card/Bannerthree";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Slider />
        {/* <HorizontalCard/> */}
        <Bannerone/>
        <div className="">
          <Bannertwo/>
        </div>
        <div className="">
          <Bannerthree/>
        </div>
      <div className="container">
        <h2 style={{ margin: "25px" }}>Mess Vendors</h2>
        <Cards />
      </div>
    </div>
  );
};

export default Home;
