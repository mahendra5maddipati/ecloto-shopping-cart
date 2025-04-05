import styled from 'styled-components';

//App.js
export const MainContainer = styled.div`
    Background: #f3f4f6;
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
`;

export const MainHeading = styled.h1`
    text-align: center;
    color: #333d4c;
`;

//ProductsData.js

export const ProductContainer = styled.div`
`;

export const ProductsHeading = styled.h3`
    color: #333d4c;
`;

export const ProductsDataContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
    padding: 10px;
    justify-content: center;
    // justify-content: space-between;
    // align-items: center;
    // flex-direction: row;
`;

export const ListContainer = styled.div`
    background: #fff;
    max-width: 120px;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    &hover {
        tranform: scale(1.10);}
`;

export const ListValue = styled.span`
    display: block;
    font-size: 16px;
    margin-bottom: 8px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 8px 0;
    background: #2b7fff;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background 0.3s;
    border-radius: 5px;
    &hover {
        background: #0056b3;}
`;

export const GiftContainer = styled.div`
    margin: 20px 0;
    padding: 10px;
    text-align: center;
`;

//ShoppingCart.js

export const CartContainer = styled.div`
    margin-top: 20px;
    padding: 15px;
    border-radius: 8px;
    backgrounf: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;


export const GiftPara = styled.p`
`;

export const SubtotalHeading = styled.h4`
`;

export const Value = styled.span`
`;

export const Updater = styled.div`
    width: 100%;
    height: 10px;
    background: red;
    border-radius: 5px;
    // overflow: hidden;
`;



export const Update = styled.div`
    height: 100px; 
    background: blue;
    transition: width 0.3s ease-in-out;
`;
