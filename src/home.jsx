import { useState } from "react";
import BestInTown from "./Component/best";
import Popular from "./Component/populardish";
import RAH from "./Component/rich&healthy";
import Special from "./Component/special";
import BigOffer from "./Component/bigoffer";
import SpecialManu from "./Component/specialManu";
import OurRestaurant from "./Component/ourRestaurant";
import Delivery from "./Component/delivery";
import Rating from "./Component/rating";

const Home = () =>{
    return (
        <>  
        <div className="body1">
            <BestInTown />
            <Popular />
            <RAH />
            <BigOffer />
            <Special />
            <SpecialManu />
            <OurRestaurant />
            <Delivery />
            <Rating />
        </div>
        </>
    )
}

export default Home