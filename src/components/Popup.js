import React from "react";

import { useRef, useEffect, useState } from "react";

import { Formik, Field, Form } from 'formik';

import * as Yup from 'yup';





const Popup = (props) => {




    const closeBtn = useRef(null);

    const modal = useRef(null);

    const input1 = useRef(null);

    const input2 = useRef(null);

    const [showModal, setShowModal] = useState(false);




    const formRef = useRef()




    // check if element contains class on mount 

    useEffect(() => {

        if (modal.current.classList.contains('show')) {

            setShowModal(true);

        } else {

            setShowModal(false);

        }

    }, []);




    // check if element contains class on click 

    const handleClick = event => {

        if (event.currentTarget.classList.contains('show')) {

            setShowModal(true);

        } else {

            setShowModal(false);

        }

    };




    if (showModal) {

        console.log('acik');

    } else {

        console.log('kapali');

        setTimeout(() => {

            document.getElementById("email").value = "";

            document.getElementById("emailConfirm").value = "";

        }, 500);

    }




    const SignupSchema = Yup.object().shape({

        email: Yup.string().email('Bitte geben Sie gültige E-Mail-Adresse an! ').required('Bitte füllen Sie beide Felder aus!'),

        emailConfirm: Yup.string().oneOf([Yup.ref('email')], 'Beide Felder müssen gleich sein!').required('Bitte füllen Sie beide Felder aus!')

    });




    return (

        <div ref={modal} onClick={handleClick} className="Popup modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

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

                        <Formik innerRef={formRef}

                            initialValues={{

                                email: '',

                                emailConfirm: ''

                            }}




                            validationSchema={SignupSchema}




                            onSubmit={values => {

                                console.log('form submit oldu');




                                const newValues = JSON.stringify(values, null, 2);

                                const newEmail = JSON.parse(newValues).email;




                                props.setEmailOnUI(newEmail);

                                document.getElementById("aktuel-email").value = newEmail;




                                values.email = ""

                                values.emailConfirm = ""

                            }}

                        >




                            {({ errors, touched, values, isSubmitting }) => (

                                <Form>




                                    {/* {showModal ? null : values.email = ""} 

{showModal ? null : values.emailConfirm = ""} */}





                                    <div className="mb-3">

                                        <Field id="email" placeholder="Neue E-Mail-Adresse" className="form-control border-none" name="email" type="email" />

                                        {errors.email && touched.email && showModal

                                            ? (errors.email.includes('gültige')

                                                ? (<div className="alert alert-primary mt-2 p-1 text-center"> {errors.email}</div>)

                                                : (<div className="alert alert-danger mt-2 p-1 text-center"> {errors.email}</div>))

                                            : null}




                                    </div>

                                    <div className="mb-3">

                                        <Field id="emailConfirm" placeholder="Neue E-Mail-Adresse wiederholen" className="form-control border-none" name="emailConfirm" type="email" />

                                        {errors.emailConfirm && touched.emailConfirm && showModal

                                            ? (errors.emailConfirm.includes('gleich'))

                                                ? (<div className="alert alert-warning mt-2 p-1 text-center" >{errors.emailConfirm}</div>)

                                                : (<div className="alert alert-danger mt-2 p-1 text-center" >{errors.emailConfirm}</div>)

                                            : null}

                                    </div>




                                    <div className="d-flex justify-content-center mt-2">




                                        {

                                            (values.email.length !== 0 && values.emailConfirm.length !== 0) && (!errors.email && !errors.emailConfirm)

                                                ? <button type="submit" ref={closeBtn} className='btn btn-submit text-white p-2 pe-5 ps-5 fw-bold bg-red w-75' data-bs-dismiss="modal" aria-label="Close">SPEICHERN</button>

                                                : <button type="submit" ref={closeBtn} className='btn btn-submit text-white p-2 pe-5 ps-5 fw-bold bg-red w-75' >SPEICHERN</button>

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




