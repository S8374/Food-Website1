import * as React from "react";
import { Hero } from "../Hero/Hero";
import { OfferContainer } from "../OfferContainer/OfferCOntainer";
import { Booking } from "../Booking/Booking";
import { FoodMenu } from "../FoodMenu/FoodMenu";
import { Chefs } from "../Cheef/Chefs";
import { Featurs } from "../Featurs/Featurs";
import { useLoaderData } from "react-router-dom";

export const Home = () => {
  const AllI = useLoaderData() 
  return (
    <div className="">
      <Hero></Hero>
      <OfferContainer></OfferContainer>
      <Booking></Booking>
      <FoodMenu AllI={AllI}></FoodMenu>
      <Chefs></Chefs>
      <Featurs></Featurs>
    </div>
  );
};
