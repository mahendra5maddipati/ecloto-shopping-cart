import React, {useState, useEffect} from "react";
import ProductsData from "./components/ProductsData";
import FreeGiftUpdater from "./components/FreeGiftUpdater";
import ShoppingCart from "./components/ShoppingCart";
import {MainContainer, MainHeading} from "./styles/styles";

const FREE_GIFT = {id: 99, name: "Wireless Mouse", price: 0};
const THRESHOLD = 1000;
const App= () => {

    const [cart, setCart] = useState([]);
    const updateCart = (product, quantity) => {
        setCart((prev) =>  {
            if(quantity <= 0){
                return prev.filter((i) => i.id !== product.id);
            }
            const exists = prev.find((i) => i.id === product.id);
            if(exists){
                return prev.map((i) => i.id === product.id ? {...i, quantity} : i);
            } else {
                return [...prev, {...product, quantity}];
            }
        })
    }

    const subTotal = cart.filter((i) => i.id !== FREE_GIFT.id).reduce((sum, i) => sum+i.price*i.quantity,0);
    useEffect(() => {
        const giftAdded = cart.some((i) => i.id === FREE_GIFT.id)
        if(subTotal >= THRESHOLD && !giftAdded) {
            setCart((prev) => [...prev, {...FREE_GIFT, quantity: 1}])
        } else if (subTotal < THRESHOLD && giftAdded) {
            setCart((prev) => prev.filter((i) => i.id !== FREE_GIFT.id))
        }
    }, [subTotal]);

    return (
        <MainContainer>
            <MainHeading>Shopping Cart</MainHeading>
            <ProductsData addToCart={(product) => updateCart(product, 1)}/>
            <FreeGiftUpdater cart={cart} total={subTotal}/>
            <ShoppingCart cart={cart} updateCart={updateCart}/>
        </MainContainer>
    )
}

export default App;