import React from "react";
import ReactDOM from "react-dom";
import "./userFeedsPage.scss";

const Sample = props => {
    return(
        <>
            <div>sample</div>
        </>
        
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Sample />,
        document.body.appendChild(document.createElement('div')),
    )
})