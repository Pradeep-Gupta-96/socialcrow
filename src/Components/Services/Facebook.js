import * as React from 'react';
import Services from '../Services.js'
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import PaymentIcon from '@mui/icons-material/Payment';
import ReceiptIcon from '@mui/icons-material/Receipt';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    "Facebook Page Likes + Followers",
    "Facebook Page Likes",
    "Facebook Page Followers",
    "Facebook Profile Followers",
    "Facebook Post Likes",
    "Facebook Video Views",
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


const Facebook = () => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <div className='about-sec social-page gray-bg'>
            <div className="bound">
                <BorderLinearProgress variant="determinate" value={50} />
                <ul className='pro-bar'>
                    <li>User details<ReceiptIcon /></li>
                    <li>Payment<PaymentIcon /></li>
                    <li>Completed  <LocalFireDepartmentIcon /></li>
                </ul>
                <div className='social-form'>
                    <h4>Twitter Services</h4>
                    <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                        <Select
                            multiple
                            displayEmpty
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em>Placeholder</em>;
                                }

                                return selected.join(', ');
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem disabled value="">
                                <em>Placeholder</em>
                            </MenuItem>
                            {names.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <h4>Twitter Username</h4>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type='text'
                        placeholder='Username'
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" edge="end">
                                    <PersonAddIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />

                    <h4>Followers Quantity</h4>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type='text'
                        placeholder='Enter Quantity'
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" edge="end">
                                    <LocalFireDepartmentIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </div>


                <Services />


            </div>
        </div>
    )
}

export default Facebook