import React, { useState, useEffect } from "react"

const Popup = () => {

    const [alert, setAlert] = useState(false)
   
    const [formValid, setFormValid] = useState(false);

    const [userEmail, setUserEmail] = useState("");
    const [userEmailRepeat, setUserEmailRepeat] = useState("");

    const [emailValid, setEmailValid] = useState({});

    const validateEmail = (email1, email2) => {
        if (email1.length === 0 || email2.length === 0) {
            return { valid: false, status:'danger', msg: "Bitte füllen Sie beide Felder aus!" }
        } else if (email1 !== email2) {
            return { valid: false, status:'warning', msg: "Leider, beide Felder müssen gleich sein! " }
        } else {
            return { valid: true, status:'success', msg: "Super, beide Felder stimmen überein!" }
        }
    }


    useEffect(() => {

        setEmailValid(validateEmail(userEmail, userEmailRepeat))


        setTimeout(() => {
            setAlert(false)
        }, 3000);
        setAlert(true)
        

    }, [userEmail, userEmailRepeat])


    useEffect(() => {
        if (emailValid.valid === true) {
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }, [emailValid])

  



    return (

        <div class="Popup modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">E-Mail-Adresse ändern</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>
                            Bitte gib deine Repeate E-Mail-Adresse zweimal an. Deine alte E-Mail-Adresse wird damit für das Portal ungültig. Bei Angeboten oder Fragen werden wir dich künftig über die Repeate E-Mail-Adresse kontaktieren. Um wieder alle Funktionen des Portals nutzen zu können, musst du deine Repeate E-Mail-Adresse bestätigen.
                        </p>
                        <form>
                            <div class="mb-3">
                                <input type="email" value={userEmail} name="email"  onChange={(e) => setUserEmail(e.target.value) } class="form-control" id="recipient-name" placeholder='Neue E-Mail-Adresse' />

                            </div>
                            <div class="mb-3">
                                <input type="email" value={userEmailRepeat} name="emailRepeat"  onChange={(e) => setUserEmailRepeat(e.target.value)} class="form-control" id="recipient-name" placeholder='Neue E-Mail-Adresse wiederholen' />
                                
                              {alert && (<div class={`alert alert-${emailValid.status} mt-3 text-center`} role="alert">{emailValid.msg}</div>) }
                            </div>
                        </form>
                    </div>
                    <div class="d-flex justify-content-center mt-2 mb-5">

                        <button type="button" onClick={() => {
                            setUserEmail('');
                            setUserEmailRepeat('');
                        }} className={`btn text-white  p-3 pe-5 ps-5 fw-bold bg-red w-75 ${formValid ? "active " : "disabled"}`} >
                            SPEICHERN</button>

                    </div>
                </div>
            </div>
        </div>

    )
};

export default Popup;
