import React from "react"
import Popup from "./Popup";

const EMailÄndernContent = () => {
    return (
        <div className="d-flex flex-column justify-content-center ">
            < p className="lh-lg" > Du hast eine neue E-Mail-Adresse ? Hier kannst du jederzeit deine E-Mail-Adresse ändern. < br /> Deine aktuelle E-Mail-Adresse: <strong > devet@familienservice.de </strong> </p >
            <div className="align-self-center">
                <button type="button" class="btn text-white p-3 pe-5 ps-5 fw-bold bg-red" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">E-MAIL-ADRESSE ÄNDERN</button>
                <Popup />
            </div>
            <i class="fas fa-angle-up align-self-center mt-5 fs-5 color-red"></i>
        </div >
    )
};

export default EMailÄndernContent;
