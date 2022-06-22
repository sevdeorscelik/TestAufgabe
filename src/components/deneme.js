import React, { useContext } from "react";
import { useState } from "react";
import { Formik, Field, Form } from 'formik';
import "../css/pop-up.css";
import * as Yup from 'yup';

const PopUp = (props) => {

    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Ungültige E-Mail').required('Pflichtfeld'),
        emailConfirm: Yup.string().oneOf([Yup.ref('email')], 'E-Mail-Adressen müssen übereinstimmen').required('Pflichtfeld')
    });


    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    emailConfirm: ''
                }}

                validationSchema={SignupSchema}

                onSubmit={values => {
                    const newValues = JSON.stringify(values, null, 2);
                    const newEmail = JSON.parse(newValues).email;
                    props.handleClose();
                    props.setEmailOnUI(newEmail);
                    console.log(document.getElementById("aktuel-email").value);
                    document.getElementById("aktuel-email").value = newEmail;
                }}
            >
                {({ errors, touched }) => (
                    <Form className="text-center px-4">

                        <Field id="email" placeholder="Neue E-Mail-Adresse" className="w-100 mb-4 mt-5 custom-input px-2" name="email" type="email" />
                        {errors.email && touched.email ? <div className="custom-error">{errors.email}</div> : null}

                        <Field id="emailConfirm" placeholder="Neue E-Mail-Adresse wiederholen" className="w-100 mb-4 custom-input px-2" name="emailConfirm" type="email" />
                        {errors.emailConfirm && touched.emailConfirm ? <div className="custom-error">{errors.emailConfirm}</div> : null}

                        <button className="w-100 mb-5 mt-4 custom-input submit-button" type="submit">SPEICHERN</button>

                    </Form>

                )}
            </Formik>
        </div>
    );
};

export default PopUp;

/*
<form>
    <div className="mb-3">
      <input type="email" name="email" className="form-control" id="recipient-name" placeholder='Neue E-Mail-Adresse' />
    </div>
    <div className="mb-3">
       <input type="email" name="emailRepeat" className="form-control" id="recipient-name" placeholder='Neue E-Mail-Adresse wiederholen' />
    </div>
</form>
*/


/*
<Field id="email" placeholder="Neue E-Mail-Adresse" className="w-100 mb-4 mt-5 custom-input px-2" name="email" type="email" />
{ errors.email && touched.email ? <div className="custom-error">{errors.email}</div> : null }

<Field id="emailConfirm" placeholder="Neue E-Mail-Adresse wiederholen" className="w-100 mb-4 custom-input px-2" name="emailConfirm" type="email" />
{ errors.emailConfirm && touched.emailConfirm ? <div className="custom-error">{errors.emailConfirm}</div> : null }

<button className="w-100 mb-5 mt-4 custom-input submit-button" type="submit">SPEICHERN</button>
*/

/*
{alert && (<div class={`alert alert-${emailValid.status} mt-3 text-center`} role="alert">{emailValid.msg}</div>) }
*/