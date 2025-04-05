import React from "react";
// import {FaRupeeSign} from "react-icons/fa";
import {GiftContainer,
    // ProductsHeading,
    // SubtotalContainer,
    // SubtotalHeading,
    // Value,
    Updater,
    Update,
    // Price
    GiftPara,
    } from "../styles/styles"

const Threshold = 1000;
const GIFT_ID = 99;
const FreeGiftUpdater = ({cart, total}) => {
    const percent = Math.min(100, (total/Threshold)*100);
    const required = Threshold - total;
    return (
        <GiftContainer>
             <h2>
                Cart Summary
            </h2>
            <div>
                <h5>Subtotal: ₹</h5>
                {cart.reduce((sum,i) => sum+i.price*i.quantity, 0)}
                {/* {cart.some((i) => i.id === GIFT_ID)  */}
            </div>
            <GiftPara> {total>=Threshold ? "You got a free Wireless Mouse!" : `Add ₹${required} more to get a free Wireless Mouse!`}</GiftPara>
            {/* // <ProductsHeading>Cart Summary</ProductsHeading>
            // <SubtotalContainer>
            //     <SubtotalHeading>Subtotal</SubtotalHeading>
            //     <Value><FaRupeeSign />0</Value>
            // </SubtotalContainer>
            // <Updater>

            // </Updater> */}
            <Updater>
                <Update style  = {{width: `${percent}`}}/>
            </Updater>
        </GiftContainer>
    );
};

export default FreeGiftUpdater;