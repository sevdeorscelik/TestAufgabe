import React from "react"
import Popup from "./Popup";
import { useRef, useState } from "react";

const EMailÄndernContent = (props) => {

    //Email****************

    const emailEl = useRef(null);
    const [currentEmail, setCurrentEmail] = useState("devet@familienservice.de");

    const setEmailOnUI = (email) => {
        props.setAlert(true)

        emailEl.current.value = email;
        setCurrentEmail(email);

        setTimeout(() => {
            props.setAlert(false)
        }, 1500);
    }

    return (
        <div className="d-flex flex-column justify-content-center ">
            <p className="lh-lg" > Du hast eine neue E-Mail-Adresse ? Hier kannst du jederzeit deine E-Mail-Adresse ändern.
            <br/>
                Deine aktuelle E-Mail-Adresse: 
                <strong 
                    id="aktuel-email" 
                    ref={emailEl}  
                > 
                    {currentEmail} 
                </strong>
            </p>

            <div className="align-self-center">
                <Popup setEmailOnUI={setEmailOnUI} />
            </div>
        </div >
    )
};

export default EMailÄndernContent;
