import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Services = () => {

    const ArrayData = [
        { "icons": <TwitterIcon/>, "text": "Twitter" },
        { "icons": <InstagramIcon/>, "text": "Instagram" },
        { "icons": "Icons", "text": "Tiktok" },
        { "icons": "Icons", "text": "Threads" },
        { "icons": <YouTubeIcon/>, "text": "Youtube" },
        { "icons": "Icons", "text": "discord" },
        { "icons": <FacebookIcon/>, "text": "facebook" },
        { "icons": "Icons", "text": "Twitch" },
        { "icons": "Icons", "text": "Kick" },
        { "icons": <TelegramIcon/>, "text": "Telegram" },
    ]
    

    return (
        <div className='about-sec gray-bg'>
            <div className="bound">
                <Grid className="about" container spacing={2}>
                    <Grid className='about-text wow fadeInRight' item xs={12} >
                        <Item className='shadow-remove remove-bg'>
                            <div className='text-box'>
                                <h1>Our Services</h1>
                            </div>
                        </Item>
                    </Grid>
                    {
                        ArrayData.map((item, index) => (
                            <Grid key={index} className='about-text wow fadeInRight' item xs={12} md={6}>
                                <Item className='shadow-remove remove-bg'>
                                    <div className='more-text subscribe-btn'>
                                        <Link to="#" className='blue-btn'>{item.icons} {item.text}</Link>
                                    </div>
                                </Item>
                            </Grid>
                        ))
                    }

                </Grid>
            </div>
        </div>

    )
}

export default Services