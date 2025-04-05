import React from "react";
import {CartContainer} from "../styles/styles";

const GIFT_ID = 99;

const ShoppingCart = ({cart, updateCart}) => {
    return (
        <CartContainer>
            <h2>Cart Items</h2>
            {cart.length === 0 ? (<p>Your cart is empty</p>) : (
                cart.map((i)=>(<div key={i.id}>
                    <span>
                        {i.name} <br />
                        ₹{i.price} x {i.quantity} = ₹{i.price*i.quantity}
                    </span>
                    {i.id !== GIFT_ID ? (
                            <div>
                                <button onClick = {() => updateCart(i, i.quantity-1)}>-</button>
                                <span>{i.quantity}</span>
                                <button onClick = {() => updateCart(i, i.quantity+1)}>+</button>
                            </div>
                        ) : (
                            <span></span>
                        )
                    }
                </div>
                    ))
            )}
        </CartContainer>
    )
}









// import {CartContainer,
//     ProductsHeading,
//     Para,
//     Para2
// } from "../styles/styles"

// // const FREE_GIFT = {id: 99, name: "Wireless Mouse", price: 0};
// // const THRESHOLD = 1000;

// const GIFT_ID = 99;

// const ShoppingCart = ({cart, updateCart}) => {
//     return (
//         <div>
//             <h3>Cart Items</h3>
//             <div>
//             ₹
//             </div>
//         </div>
//     );
// };
//         <CartContainer>
//             <ProductsHeading>Cart Items</ProductsHeading>
//             {cart.length === 0 ? (
//                 <div>
//                     <Para>Your cart is empty</Para>
//                     <Para2>Add some products to see them here?</Para2>
//                 </div>
//             ) : ( cart.map((i) => (<div key = {i.id}>
//                 <span>{i.name}</span>
//                 {i.id !== GIFT_ID ? (
//                     <>
//                     <button onClick = {() => updateCart(i, i.quantity-1)}>-</button>
//                     <span>{i.quantity}</span>
//                     <button onClick = { () => updateCart(i, i.quantity+1)}>+</button>
//                     </>) : (<span>(Gift)</span>)
//                 )}
//                 </div>
//             ))
//         </CartContainer>
//     );
// };

export default ShoppingCart;