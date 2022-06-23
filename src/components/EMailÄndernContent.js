import React from "react"
import Popup from "./Popup";
import { useRef, useState } from "react";

const EMailÄndernContent = (props) => {

    

    const eMailEl = useRef(null);

    const [currentEmail, setCurrentEmail] = useState("devet@familienservice.de");

    const setEmailOnUI = (email) => {
        props.setAlert(true)

        eMailEl.current.value = email;
        setCurrentEmail(email);


        setTimeout(() => {

            props.setAlert(false)
        }, 1500);

    }



    return (
        <div className="d-flex flex-column justify-content-center ">

            < p className="lh-lg" > Du hast eine neue E-Mail-Adresse ? Hier kannst du jederzeit deine E-Mail-Adresse ändern. < br /> Deine aktuelle E-Mail-Adresse: <strong id="aktuel-email" ref={eMailEl}> {currentEmail} </strong> </p >
            <div className="align-self-center">
                <button type="button" className="btn text-white p-2 pe-5 ps-5 fw-bold bg-red" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" >E-MAIL-ADRESSE ÄNDERN</button>
                <Popup   setEmailOnUI={setEmailOnUI} />
            </div>
        </div >
    )
};

export default EMailÄndernContent;
