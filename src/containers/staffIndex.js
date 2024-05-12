import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import StaffLogin from '../components/staffLogin';
import StaffSignUp from '../components/staffSignUp';


const paperStyle = { width: 360, margin: "40px auto" }
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function StaffContainer() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Paper elevation={20} style={paperStyle}>
            <Box>
                <Box>
                    <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example">
                        <Tab label="Sign in" {...a11yProps(0)} />
                        <Tab label="Sign up" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <StaffLogin handleChange={handleChange} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <StaffSignUp />
                </CustomTabPanel>
            </Box>
        </Paper>

    );
}
