import React from "react";
import ReactDOM from "react-dom";
import LeftBox from '@src/userComponents/leftBox';
import RightBox from '@src/userComponents/rightBox';
import UserTweets from '@src/userComponents/userTweets';
import Layout from "./guestLayoutHome";
import { handleErrors } from '@utils/fetchHelper';

// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// import scss
import "./userFeedsPage.scss";

const UserPage = props => {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: true,
        }
    }
    
    componentDidMount() {
        this.userAuthentication();
    }

    userAuthentication() {
        fetch('api/authenticated')
        .then(handleErrors)
        .then(data => {
            console.log('data', data);
            
        })
    }
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