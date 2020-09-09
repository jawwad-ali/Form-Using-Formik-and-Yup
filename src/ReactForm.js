import React from 'react'
import { Formik, useFormik } from 'formik';

// Working with formik ho Mohsin bhai nay bataya tha bootcamp wali class main
function ReactForm() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate: (values) => {
            let error = {}

            if (!values.email)
                error.email = "Email is required"
            if (!values.password)
                error.password = "Password is required"
            return error
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>Email:</label>
                <input type="text" id="email" placeholder="Enter User Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                <br />

                <label>Password:</label>
                <input type="password" id="password" placeholder="Enter User Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                <br />
                <button id="login">Login</button>
            </form>

        </div>
    )
}
export default ReactForm