import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ElectricBoltTwoToneIcon from '@mui/icons-material/ElectricBoltTwoTone';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CheckIcon from '@mui/icons-material/Check';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Intro = () => {
    return (
        <div className='about-sec gray-bg'>
            <div className="bound">
                <Grid className="about" container spacing={2}>
                    <Grid item xs={12} >
                        <Item className='shadow-remove remove-bg about-img'>
                            <div className='text-box'>
                                <h2>Buy Facebook page likes + followers & more.</h2>
                                <h2>Fast with no sign up required.</h2>
                                <p className='ab-text'>Grow your Facebook account. Stand out from your competitors while keeping the focus on your business.</p>
                                <p className='ab-text'> No passwords, delivered fast and anonymously to your account. Only $0.04 per page likes + follower.</p>
                                <div className='more-text subscribe-btn'>
                                    <Link to="/services" className='blue-btn'>Buy Now!<DoubleArrowIcon /></Link>
                                    <Link to="/services" className='blue-btn'>Lern More!<DoubleArrowIcon /></Link>
                                </div>
                                <ul>
                                    <li><CheckIcon />Higher Conversion</li>
                                    <li><CheckIcon />100% Growth Guaranteed</li>
                                    <li><CheckIcon />Rated 4.9/5</li>
                                </ul>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} >
                        <Item className='shadow-remove remove-bg about-img'>
                            <div className='text-box'>
                                <h2>content comming soon..</h2>
                            
                            </div>
                        </Item>
                    </Grid>

                    <Grid item xs={12} >
                        <Item className='shadow-remove remove-bg about-img'>
                            <div className='text-box'>
                                <h2>The #1 Rated Facebook Page Likes + Followers Service</h2>
                                <p className='ab-text'><CheckIcon />Social Crow helps you get more Facebook page likes + followers, likes and comments 10x times faster than our competitors.</p>
                            </div>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Item className='shadow-remove remove-bg about-img'>
                            <div className='text-box'>
                                <h3>Social Proof<ElectricBoltTwoToneIcon /></h3>
                                <p className='ab-text'>Looking to increase your website's conversion rate? Look no further, our services provide amazing social proof to increase trust and confidence in your brand. With our help, you'll see a significant increase in your conversion rate in no time! From our research we have found that acounts with low followers have follow back rate of less than 5%.</p>
                                <ul>
                                    <li><CheckIcon /> Trust And Credibility</li>
                                    <li><CheckIcon />Increase Your Conversion Rate</li>
                                    <li><CheckIcon />Faster Organic Growth</li>
                                </ul>
                                <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Get Started!<DoubleArrowIcon /></Link></div>
                            </div>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Item className='shadow-remove remove-bg about-img'>
                            <div className='text-box'>
                                <h3>Rapid Growth<RocketLaunchIcon /></h3>
                                <p className='ab-text'>If you're looking to grow your business rapidly, you need to focus on building up your social media following. Having a large social media following will give you the ability to reach more people, which will in turn lead to more customers and more growth for your business.</p>
                                <ul>
                                    <li><CheckIcon />Increase Conversions</li>
                                    <li><CheckIcon />Growth Guaranteed</li>
                                    <li><CheckIcon />1.5M+ Followers Available</li>
                                </ul>
                                <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Get Started!<DoubleArrowIcon /></Link></div>
                            </div>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Item className='shadow-remove remove-bg about-img'>
                            <div className='text-box'>
                                <h3>Client Satisfaction<ThumbUpIcon /></h3>
                                <p className='ab-text'>At our company, we pride ourselves on providing excellent customer satisfaction. We always work hard to ensure that our clients are happy with our products and services. We go above and beyond to make sure that they are satisfied with their purchase. We have a team of dedicated customer service representatives on stand-by ready to solve all your needs.</p>
                                <ul>
                                    <li><CheckIcon />24/7 Customer Support</li>
                                    <li><CheckIcon />Free 30 Day Refill</li>
                                    <li><CheckIcon />Custom Orders Accepted</li>
                                </ul>
                                <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Get Started!<DoubleArrowIcon /></Link></div>
                            </div>
                        </Item>
                    </Grid>

                    <Grid item xs={12} >
                        <Item className='shadow-remove remove-bg about-img'>
                            <div className='text-box'>
                                <h3>Time to get serious.</h3>
                                <h3>See what Social Crow can do for you:</h3>
                                <p className='ab-text'><CheckIcon />Join our 60,000+ successful clients</p>
                                <p className='ab-text'><CheckIcon />Up to 15x more effective than Google/Facebook ads</p>
                                <p className='ab-text'><CheckIcon />Recommended by the best experts in the space</p>
                                <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Let's Go! <DoubleArrowIcon /></Link></div>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Intro