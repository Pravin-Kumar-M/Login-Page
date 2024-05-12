import React from 'react'
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const StaffLogin = ({ handleChange }) => {
    const paperStyle = { padding: 20, height: '72.6vh', width: 320, margin: '0px auto' }
    const avatarStyle = { backgroundColor: 'green' }
    const textStyle = { marginTop: 18 }
    const initialValues = {
        email: "",
        password: "",
        remmember: true
    }

    // validate the error message

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Enter valid email").required("*required"),
        password: Yup.string().min(8, 'Password should atleast 8 characters').max(8, 'Password should atmost 8 characters').required('*required')
    })

    // reset form

    const onSubmit = (values, props) => {
        console.log(values);
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 1500)
        console.log(props);
    }

    return (
        <Grid>
            <Paper style={paperStyle}>

                {/* avatar and heading */}

                <Grid align='center'>
                    <Avatar style={avatarStyle}> <LockOutlinedIcon /> </Avatar>
                    <h2>Staff Login</h2>
                </Grid>

                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            {/* input texts */}

                            <Field as={TextField} label="Email"
                                name='email'
                                placeholder='Enter your email'
                                variant="standard"
                                fullWidth required
                                helperText={<ErrorMessage name='email' render={(msg) => <span style={{ color: 'red' }}>{msg}</span>} />} />
                            <Field as={TextField} style={textStyle}
                                name='password'
                                label="Password"
                                placeholder='Enter password'
                                type='password'
                                variant="standard"
                                fullWidth required
                                helperText={<ErrorMessage name='password' render={(msg) => <span style={{ color: 'red' }}>{msg}</span>} />} />

                            {/* check box */}

                            <Field as={FormControlLabel} style={textStyle} control={<Checkbox defaultChecked />} name='remmember' label="Remember Me" />

                            {/* button */}

                            <Button type='submit'
                                fullWidth variant='contained'
                                style={textStyle}
                                disabled={props.isSubmitting}>
                                {props.isSubmitting ? "Loading..." : "Sign in"}</Button>
                        </Form>
                    )}
                </Formik>

                {/* Links */}
                <Typography style={textStyle}>
                    <Link href="#" underline="hover">{'Forgot password ?'}</Link>
                </Typography>
                <Typography style={textStyle}>Do you have any account ?_
                    <Link href="#" onClick={() => handleChange("event", 1)} underline="hover">{'Sign up ?'}</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default StaffLogin