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
        }  else if (!email1.includes('@') || !email2.includes('@')){
            return { valid: false, status:'warning', msg: "Bitte geben Sie gültige E-Mail-Adresse an! " }
        } else if (!email1.includes('.') || !email2.includes('.')){
            return { valid: false, status:'warning', msg: "Bitte geben Sie gültige E-Mail-Adresse an! " }
        } else if (email1 !== email2) {
            return { valid: false, status:'warning', msg: "Beide Felder müssen gleich sein! " }
        } else {
            return { valid: true, status:'success', msg: "Super, beide Felder stimmen überein!" }
        }
    }


    useEffect(() => {

        setEmailValid(validateEmail(userEmail, userEmailRepeat))
        
    }, [userEmail, userEmailRepeat])


    useEffect(() => {
        if (emailValid.valid === true) {
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }, [emailValid])


    

    useEffect(() => {

        setTimeout(() => {
            setAlert(false)
        }, 3000);
        setAlert(true)
        
    }, [userEmailRepeat])

  
    return (

        <div className="Popup modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">E-Mail-Adresse ändern</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>
                            Bitte gib deine Repeate E-Mail-Adresse zweimal an. Deine alte E-Mail-Adresse wird damit für das Portal ungültig. Bei Angeboten oder Fragen werden wir dich künftig über die Repeate E-Mail-Adresse kontaktieren. Um wieder alle Funktionen des Portals nutzen zu können, musst du deine Repeate E-Mail-Adresse bestätigen.
                        </p>
                        <form>
                            <div className="mb-3">
                                <input type="email" value={userEmail} name="email"  onChange={(e) => setUserEmail(e.target.value) } className="form-control" id="recipient-name" placeholder='Neue E-Mail-Adresse' />

                            </div>
                            <div className="mb-3">
                                <input type="email" value={userEmailRepeat} name="emailRepeat" onChange={(e) => setUserEmailRepeat(e.target.value)} className="form-control" id="recipient-name" placeholder='Neue E-Mail-Adresse wiederholen' />
                                
                              {alert && (<div class={`alert alert-${emailValid.status} mt-3 text-center`} role="alert">{emailValid.msg}</div>) }
                            </div>
                        </form>
                    </div>
                    <div className="d-flex justify-content-center mt-2 mb-5">

                        <button type="button" onClick={() => {
                            setUserEmail('');
                            setUserEmailRepeat('');
                        }} className={`btn btn-submit text-white  p-2 pe-5 ps-5 fw-bold bg-red w-75 ${formValid ? "active " : "disabled"}`} >
                            SPEICHERN</button>

                    </div>
                </div>
            </div>
        </div>

    )
};

export default Popup;
