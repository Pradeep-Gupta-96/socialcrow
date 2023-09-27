import * as React from 'react';
import Services from '../Services.js'
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
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
  "Twitter Followers",
  "Twitter Followers HQ+",
  "Twitter Followers Ultra",
  "Twitter Likes + Retweets",
  "Twitter Likes",
  "Twitter Likes HQ",
  "Twitter Retweets",
  "Twitter Retweets HQ",
  "High Quality",
  "Twitter Video Views",
  "Twitter Tweet Views",
  "Twitter Followers (NFT Profile Pictures)",
  "Twitter Retweets (NFT Profile Pictures)",
  "Twitter Likes (NFT Profile Pictures)",
  "Twitter Likes + Retweets + @ Mention 3"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


const Twitter = () => {
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
    <div className='about-sec gray-bg'>
      <div className="bound">
        <BorderLinearProgress variant="determinate" value={50} />
       <ul>
        <li>User details<ReceiptIcon/></li>
        <li>Payment<PaymentIcon/></li>
        <li>Completed  <LocalFireDepartmentIcon /></li>
       </ul>
        Twitter Services
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
        Twitter Username
        <InputLabel htmlFor="outlined-adornment-password">Username</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type='text'
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" edge="end">
                <PersonAddIcon />
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />

        Followers Quantity
        <InputLabel htmlFor="outlined-adornment-password">Enter Quantity</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type='text'
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" edge="end">
                <LocalFireDepartmentIcon />
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
        <Services />


      </div>
    </div>
  )
}

export default Twitter