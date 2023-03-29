// reference: https://reactjsguru.com/e-commerce-product-card-using-reactjs/

import React from 'react';
import "./products.css";
import Card from "../components/card";

export default function Products(){
    return(
        <div className="container">
        <div className="row">
            <Card
                title="Sandbox Land 1"
                images="../images/sandboxLand1.jpg"
                old_price="9,999"
                newPrice="9999"
                dollar="ETH "
                alt="Mr. Bit"
                exp_date="10-08-2022"
            />
            <Card
                title="Sandbox Land 2"
                images="../images/sandbox-land-2.jpg"
                old_price="599"
                newPrice="500"
                dollar="ETH "
                alt="Pony Ma"
                exp_date="10-08-2022"
            />
            <Card
                title="Sandbox Land 3"
                images="../images/sandbox-land-3.jpg"
                old_price="7999"
                newPrice="7000"
                dollar="ETH "
                alt="Bill Gateway"
                exp_date="10-08-2022"
            />
            <Card
                title="Sandbox Land 4"
                images="../images/sandbox-land-4.jpg"
                old_price="999"
                newPrice="500"
                dollar="ETH "
                alt="Elon Must"
                exp_date="10-08-2022"
            />
        </div>
        </div>
    )
}