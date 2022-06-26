import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import Modal from 'react-bootstrap/Modal';

const Popup = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Bitte geben Sie gültige E-Mail-Adresse an! ').required('Bitte füllen Sie beide Felder aus!'),
        emailConfirm: Yup.string().oneOf([Yup.ref('email')], 'Beide Felder müssen gleich sein!').required('Bitte füllen Sie beide Felder aus!')
    });


    return (
        <>
            <button variant="primary"
                onClick={handleShow}
                className="btn text-white p-2 pe-5 ps-5 mt-1 fw-bold bg-red"
            >
                E-MAIL-ADRESSE ÄNDERN
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>E-Mail-Adresse ändern</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Bitte gib deine Repeate E-Mail-Adresse zweimal an. Deine alte E-Mail-Adresse wird damit für das Portal ungültig. Bei Angeboten oder Fragen werden wir dich künftig über die Repeate E-Mail-Adresse kontaktieren. Um wieder alle Funktionen des Portals nutzen zu können, musst du deine Repeate E-Mail-Adresse bestätigen.
                    </p>
                    <Formik
                        initialValues={{
                            email: '',
                            emailConfirm: ''
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(values) => {

                            const newValues = JSON.stringify(values, null, 2);
                            const newEmail = JSON.parse(newValues).email;

                            props.setEmailOnUI(newEmail);
                            document.getElementById("aktuel-email").value = newEmail;

                            handleClose();

                            console.log(document.getElementById("aktuel-email").value);
                            console.log("Anfrage erfolgreich");

                        }}
                    >
                        {({ errors, touched }) => (

                            <Form>
                                <div className="mb-3" controlId="exampleForm.ControlInput1">

                                    <Field
                                        placeholder="Neue E-Mail-Adresse"
                                        id="email"
                                        className="form-control border-none mt-4 input "
                                        name='email'
                                        type="email"
                                    />
                                    {errors.email && touched.email
                                        ? (errors.email.includes('gültige')
                                            ? (<div className="alert alert-primary mt-2 p-1 text-center"> {errors.email}</div>)
                                            : (<div className="alert alert-danger mt-2 p-1 text-center"> {errors.email}</div>))
                                        : null}
                                </div>
                                <div className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Field
                                        placeholder="Neue E-Mail-Adresse wiederholen"
                                        className="form-control border-none input"
                                        name='emailConfirm'
                                        type="email"
                                        id="emailConfirm"
                                    />
                                    {errors.emailConfirm && touched.email
                                        ? (errors.emailConfirm.includes('gleich'))
                                            ? (<div className="alert alert-warning mt-2 p-1 text-center" >{errors.emailConfirm}</div>)
                                            : (<div className="alert alert-danger mt-2 p-1 text-center" >{errors.emailConfirm}</div>)
                                        : null}
                                </div>
                                <div className="d-flex justify-content-center mt-2">

                                    <button type="submit"
                                        className='btn btn-submit text-white p-2 pe-5 ps-5 fw-bold bg-red w-75 mt-5 mb-3'
                                    >
                                        SPEICHERN
                                    </button>

                                </div>
                            </Form>

                        )}
                    </Formik>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default Popup
