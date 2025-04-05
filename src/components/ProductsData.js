import React from "react";
import {ProductContainer,
    ProductsHeading,
     ListContainer,
      ListName,
       ListPrice,
        Button,
        ProductsDataContainer,
        ListValue,
    } from "../styles/styles";

const PRODUCTS = [
    {id: 1, name: "Laptop", price: 500},
    {id: 2, name: "Smartphone", price: 300},
    {id: 3, name: "Headphones", price: 100},
    {id: 4, name: "Smartwatch", price: 150},
];

const ProductsData = ({addToCart}) => {
    return (
        <ProductContainer>
            <ProductsHeading>Products</ProductsHeading>
            <ProductsDataContainer>
            {PRODUCTS.map((product) => (
                // <ProductsDataContainer>
                    <ListContainer key = {product.id}>
                        <ListValue>{product.name}</ListValue>
                        <ListValue>{product.price}</ListValue>
                        <Button onClick = {() => addToCart(product, 1)}>Add to Cart</Button>
                    </ListContainer>
                // </ProductsDataContainer>
            ))}
            </ProductsDataContainer>
        </ProductContainer>
    )
}

export default ProductsData;