import React from 'react';
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src = "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._C8423492668_.jpg" alt=""/>
                {basket?.length === 0 ?(
                    <div>
                        <h2>Your Amazon Cart is empty.</h2>
                        <p>
                            Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more. 
                            To buy items or to add items to your shooping cart, click 'Add to basket' next to the item.
                        </p>
                    </div>
                ):
                (
                    <div>
                        <h2 className="checkout__title">Your shopping basket</h2>
                        {basket.map(item => 
                            <CheckoutProduct 
                                id = {item.id}
                                title = {item.title}
                                image ={item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        )}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout
