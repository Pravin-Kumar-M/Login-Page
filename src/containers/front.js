import React, { useState, useEffect } from "react";
import { Avatar, Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Paper, Radio, RadioGroup } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

const Front = () => {
    const paperStyle = { padding: 20, height: '79.8vh', width: 320, margin: '40px auto' };
    const avatar = { color: 'black', backgroundColor: '#e5e5e5', marginTop: 70 };
    const label = { marginTop: 10 };
    const labelHead = { fontSize: '1.4em', fontWeight: 'bold', color: 'blue' };
    const login = { padding: 20 };
    const initialValues = {
        login: ""
    };
    const validationSchema = Yup.object().shape({
        login: Yup.string().oneOf(['student', 'staff'], '*required').required('*Please choose any one!'),
    });

    const navigate = useNavigate();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isNavigating, setIsNavigating] = useState(false);

    useEffect(() => {
        setFormSubmitted(false);
    }, []);

    const onSubmit = (values, { setSubmitting }) => {
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setFormSubmitted(true);

            if (values.login === 'student') {
                setIsNavigating(true);
                navigate('/student-login');
            } else if (values.login === 'staff') {
                setIsNavigating(true);
                navigate('/staff-login');
            }
        }, 500);
    };

    return (
        <Grid>
            <Paper style={paperStyle} elevation={20}>
                <Grid align='center'>
                    <Avatar style={avatar}><SchoolIcon /></Avatar>
                    <h1>Thamirabharani Engineering College</h1>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <FormControl style={label}>
                                <FormLabel id="demo-row-radio-buttons-group-label" style={labelHead}>Choose your Login</FormLabel>
                                <Field as={RadioGroup} name="login" style={login} >
                                    <FormControlLabel value="student" control={<Radio />} label="Student Login" />
                                    <FormControlLabel value="staff" control={<Radio />} label="Staff Login" />
                                </Field>
                            </FormControl>
                            <FormHelperText><ErrorMessage name="login" render={(msg) => <span style={{ color: 'red' }}>{msg}</span>} /></FormHelperText>
                            <Button type="submit" variant="contained" fullWidth disabled={props.isSubmitting || isNavigating}>
                                {props.isSubmitting ? "Loading..." : "Sign In"}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    );
};

export default Front;
