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
import {ReactComponent as ReactLogo1} from '../utility/Social Crow _ Social Media Services-14.svg'
import {ReactComponent as ReactLogo2} from '../utility/Social Crow _ Social Media Services-15.svg'
import {ReactComponent as ReactLogo3} from '../utility/Social Crow _ Social Media Services-17.svg'
import {ReactComponent as ReactLogo4} from '../utility/Social Crow _ Social Media Services-19.svg'
import {ReactComponent as ReactLogo5} from '../utility/Social Crow _ Social Media Services-20.svg'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Services = () => {

    const ArrayData = [
        { "icons": <TwitterIcon />, "text": "Twitter", "to": "/twitter" },
        { "icons": <InstagramIcon />, "text": "Instagram", "to": "/Instagram" },
        { "icons": <ReactLogo1/>, "text": "Tiktok", "to": "/Tiktok" },
        { "icons": <ReactLogo2/>, "text": "Threads", "to": "/Threads" },
        { "icons": <YouTubeIcon />, "text": "Youtube", "to": "/Youtube" },
        { "icons": <ReactLogo3/>, "text": "discord", "to": "/Discord" },
        { "icons": <FacebookIcon />, "text": "facebook", "to": "/Facebook" },
        { "icons": <ReactLogo4/>, "text": "Twitch", "to": "/Twitch" },
        { "icons": <ReactLogo5/>, "text": "Kick", "to": "/Kick" },
        { "icons": <TelegramIcon />, "text": "Telegram", "to": "/Telegram" },
    ]


    return (
        <div className='about-sec services gray-bg'>
            <div className="bound">
                <Grid className="about" container spacing={2}>
                    <Grid className='about-text wow fadeInRight' item xs={12} >
                        <Item className='shadow-remove remove-bg'>
                            <div className='text-box'>
                                <h2>Our Services</h2>
                            </div>
                        </Item>
                    </Grid>
                    <div className='all-srv'>

                    
                    {
                        ArrayData.map((item, index) => (
                            <div key={index} className='srv-item' item xs={12} md={6}>
                                <div className='more-text subscribe-btn'>
                                        <Link to={item.to} className='blue-btn'>{item.icons} {item.text}</Link>
                                    </div>
                            </div>
                        ))
                    }
                    </div>

                </Grid>
            </div>
        </div>

    )
}

export default Services