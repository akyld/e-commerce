import React from "react";
import Sliders from "../components/Slider/Sliders";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Campaigns from "../components/Campaigns/Campaigns";
import Blogs from "../components/Blogs/Blogs";
import Brands from "../components/Brands/Brands";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";

const HomePage = () => {
  return (
    <>
      <Sliders></Sliders>
      <Categories></Categories>
      <Products></Products>
      <Campaigns></Campaigns>
      <Products></Products>
      <Blogs></Blogs>
      <Brands></Brands>
      <CampaignSingle></CampaignSingle>
    </>
  );
};

export default HomePage;
