import { Avatar, Button, Checkbox, FormHelperText, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'



const SignUp = () => {
    const paperStyle = { padding: 20, width: 320, margin: '0px auto' }
    const header = { margin: 0 }
    const avatarStyle = { backgroundColor: 'green' }
    const textStyle = { marginTop: 15 }
    const color = { color: 'gray' }
    const initialValues = {
        name: "",
        reg_no: "",
        email: "",
        phone: "",
        password: "",
        confirmPass: "",
        terms: false
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(4, "It's too short").required("*required"),
        reg_no: Yup.number().integer('*Please enter your register number').min(100000000000, ' *Please enter valid register number its too short').max(999999999999, 'Please enter valid register number its too long').typeError("Enter a valid number").required('*required'),
        email: Yup.string().email("Enter valid email").required("*required"),
        phone: Yup.number().typeError("Enter a valid number").required('*required'),
        password: Yup.string().min(8, "Your password should be atleast 8 characters").max(8, 'Your password should be atmost 8 characters').required('*required'),
        confirmPass: Yup.string().oneOf([Yup.ref('password')], 'Password not matched').required('*required')

    })
    // reset function
    const onSubmit = (values, props) => {
        console.log(values);
        console.log(props);
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 1500)
    }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><AddIcon /></Avatar>
                    <h2 style={header}>Registration</h2>
                    <Typography variant="caption" style={color} gutterBottom>Please fill this form to create an account!</Typography>
                </Grid>

                {/* Form */}
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form style={textStyle}>
                            {/* Name field */}
                            <Field as={TextField}
                                fullWidth name="name"
                                variant="standard"
                                label='Name'
                                required
                                placeholder="Enter your name" style={textStyle}
                                helperText={<ErrorMessage name="name" render={(msg) => <span style={{ color: 'red' }}>{msg}</span>} />} />

                            {/* Reg No field */}
                            <Field as={TextField}
                                fullWidth name='reg_no'
                                variant="standard"
                                label='Reg no'
                                required
                                placeholder="Enter your register"
                                helperText={<ErrorMessage name="reg_no" render={(msg) => <span style={{ color: 'red' }}>{msg}</span>} />} />

                            {/* Email field */}
                            <Field as={TextField}
                                fullWidth name='email'
                                variant="standard"
                                label='Email'
                                required
                                placeholder="Enter your email"
                                helperText={<ErrorMessage name="email" render={(msg) => <span style={{ color: 'red' }}>{msg}</span>} />} />



                            {/* Phone number field */}
                            <Field as={TextField}
                                fullWidth name='phone'
                                variant="standard"
                                label='phone no'
                                required
                                placeholder="Enter your number"
                                helperText={<ErrorMessage name="phone" render={(msg) => <span style={{ color: 'red' }}>{msg}</span>} />} />

                            {/* Password field */}
                            <Field as={TextField}
                                fullWidth name='password'
                                variant="standard"
                                label='password'
                                type='password'
                                required
                                placeholder="Enter your new password"
                                helperText={<ErrorMessage name="password" render={(msg) => <span style={{ color: 'red' }}>{msg}</span>} />} />

                            {/* Confirm password Field */}
                            <Field as={TextField}
                                fullWidth name='confirmPass'
                                variant="standard"
                                label='Confirm Password'
                                placeholder="Enter confirm password"
                                helperText={<ErrorMessage name="confirmPass" render={(msg) => <span style={{ color: 'red' }}>{msg}</span>} />} />

                            {/* checkbox field */}
                            <Field as={FormControlLabel} required control={<Field as={Checkbox} name="terms" />}
                                label="I accept terms and conditions" />

                            <Button type="submit" variant="contained"
                                fullWidth style={textStyle}
                                disabled={props.isSubmitting}>{props.isSubmitting ? "Loading..." : "Sign up"} </Button>
                        </Form>
                    )}


                </Formik>

            </Paper >
        </Grid >
    )
}
export default SignUp