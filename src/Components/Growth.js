import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ElectricBoltTwoToneIcon from '@mui/icons-material/ElectricBoltTwoTone';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Growth = () => {
    return (
        <div className='about-sec gray-bg'>
            <div className="bound">
                <Grid className="about" container spacing={2}>
                    <Grid item xs={12} >
                        <Item className='shadow-remove remove-bg about-img'>
                            <div className='text-box'>
                                <h1>Trusted by leading brands, businesses, and influencers for organic Facebook growth:</h1>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item className='shadow-remove remove-bg about-img'>
                            <div className='text-box'>
                                <h3>60,000+</h3>
                                <p className='ab-text'>Total Clients</p>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item className='shadow-remove remove-bg about-img'>
                            <div className='text-box'>
                                <h3>~4,500</h3>
                                <p className='ab-text'>Monthly Orders</p>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item className='shadow-remove remove-bg about-img'>
                            <div className='text-box'>
                                <h3>10M+</h3>
                                <p className='ab-text'>Following Power</p>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item className='shadow-remove remove-bg about-img'>
                            <div className='text-box'>
                                <h3>9.1 / 10</h3>
                                <p className='ab-text'>Customer Service Rating</p>
                            </div>
                        </Item>
                    </Grid>

                    <Grid item xs={12} >
                        <Item className='shadow-remove remove-bg about-img'>
                            <div className='text-box'>
                                <h2>How Do We Do It?</h2>
                                <h4>For years we have been building up a large following of dedicated users that get paid to follow and help support our clients.</h4>
                                <p className='ab-text'>They are asked to visit your page self if they want to follow or not. Therefore we attract real users interested in your account and convert them into page likes + followers better and faster than other growth services, without ever putting your account at any risk of getting banned or flagged.</p>
                            </div>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Item className='shadow-remove remove-bg about-img'>
                            <div className='text-box'>
                                <h3>Go Viral On Facebook<RocketLaunchIcon /></h3>
                                <p className='ab-text'>Looking to go viral? Buying Facebook page likes + followers, and other services will lead to organic engagement from your target audience. Use this opportunity to leap frog to the next stage of your business.</p>
                                <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Get Started!<DoubleArrowIcon /></Link></div>
                            </div>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Item className='shadow-remove remove-bg about-img'>
                            <div className='text-box'>
                                <h3>Go Viral On Facebook<RocketLaunchIcon /></h3>
                                <p className='ab-text'>Looking to go viral? Buying Facebook page likes + followers, and other services will lead to organic engagement from your target audience. Use this opportunity to leap frog to the next stage of your business.</p>
                                <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Read More <DoubleArrowIcon /></Link></div>
                            </div>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Item className='shadow-remove remove-bg about-img'>
                            <div className='text-box'>
                                <h3>Go Viral On Facebook<RocketLaunchIcon /></h3>
                                <p className='ab-text'>Looking to go viral? Buying Facebook page likes + followers, and other services will lead to organic engagement from your target audience. Use this opportunity to leap frog to the next stage of your business.</p>
                                <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Read More <DoubleArrowIcon /></Link></div>
                            </div>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Item className='shadow-remove remove-bg about-img'>
                            <div className='text-box'>
                                <h3>Boost and Optimize Your Conversion<ElectricBoltTwoToneIcon /></h3>
                                <p className='ab-text'>Looking to boost your conversion rates? Look no further than our top-of-the-line page likes + followers service! By purchasing page likes + followers, you'll be able to increase your brand's visibility and reach, which will in turn lead to more conversions. So don't wait any longer, buy page likes + followers today and see your conversion rates soar!</p>
                                <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Get Started! <DoubleArrowIcon /></Link></div>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Growth