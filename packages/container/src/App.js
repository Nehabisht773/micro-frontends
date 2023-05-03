import React from "react";
import { mount } from 'marketing/MarketingApp'
import MarketingApp from "./components/MarketingApp";

console.log(mount) //Since mount is not a react component we cannot use it directly as mount inside export default
export default () => {
    return <div>
        <h1>Hi there!</h1>
        <hr />
        <MarketingApp/>
    </div>
}