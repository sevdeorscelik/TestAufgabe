import React from "react";
import { useRef } from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const Popup = (props) => {

    const closeBtn = useRef(null);

    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Bitte geben Sie gültige E-Mail-Adresse an! ').required('Bitte füllen Sie beide Felder aus!'),
        emailConfirm: Yup.string().oneOf([Yup.ref('email')], 'Beide Felder müssen gleich sein!').required('Bitte füllen Sie beide Felder aus!')
    });

    /*
    const handleClose = () => {
        closeBtn.current.setAttribute("aria-label", "Close")
        closeBtn.current.setAttribute("data-bs-dismiss", "modal")
    }
    */




    return (

        <div className="Popup modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        <Formik
                            initialValues={{
                                email: '',
                                emailConfirm: ''
                            }}

                            validationSchema={SignupSchema}

                            onSubmit={values => {

                                setTimeout(() => {

                                    const newValues = JSON.stringify(values, null, 2);
                                    const newEmail = JSON.parse(newValues).email;

                                    props.setEmailOnUI(newEmail);
                                    console.log(document.getElementById("aktuel-email").value);
                                    document.getElementById("aktuel-email").value = newEmail;

                                }, 500);

                            }}
                        >

                            {({ errors, touched }) => (

                                <Form >

                                    <div className="mb-3">
                                        <Field id="email" placeholder="Neue E-Mail-Adresse" className="form-control border-none" name="email" type="email" />
                                        {errors.email && touched.email ? <div className="alert alert-danger mt-2 p-1 text-center"> {errors.email}</div> : null}

                                    </div>
                                    <div className="mb-3">
                                        <Field id="emailConfirm" placeholder="Neue E-Mail-Adresse wiederholen" className="form-control border-none" name="emailConfirm" type="email" />
                                        {errors.emailConfirm && touched.emailConfirm ? <div className="alert alert-danger mt-2 p-1 text-center" >{errors.emailConfirm}</div> : null}
                                    </div>

                                    <div className="d-flex justify-content-center mt-2 mb-5">

                                        {
                                        errors.email || errors.emailConfirm 
                                        ? <button type="submit" ref={closeBtn} className='btn btn-submit text-white p-2 pe-5 ps-5 fw-bold bg-red w-75' >SPEICHERN</button> 
                                        : <button type="submit" ref={closeBtn} className='btn btn-submit text-white p-2 pe-5 ps-5 fw-bold bg-red w-75' data-bs-dismiss="modal" aria-label="Close">SPEICHERN</button>
                                        }

                                    </div>

                                </Form>
                            )}

                        </Formik>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Popup;
