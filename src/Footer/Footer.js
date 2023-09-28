import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material'
import footerlogo from '../utility/logo.svg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Footer = () => {
    return (
        <>
            <div className='footer padding-50'>
                <div className="bound">
                    <Grid className="contact-infos" container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <Item className='info-box shadow-remove'>
                                <div className="f-logo"><img src={footerlogo} alt="banner" /></div>
                                <div className="fab-content">One of the fastest growing social media follower service providers, Social Crow offers high-quality services as well as first-rate customer service. With Social Crow's assistance, you can boost your organic social media following today! Get started now!</div>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Item className='info-box shadow-remove'>
                                <div className='f-menu'>
                                    <div>
                                    <h3 className="comman-title mb-30">About Us</h3>
                                        <nav>
                                            <ul>
                                                <li>
                                                    <a href="/about">About</a>
                                                </li>
                                                <li>
                                                    <a href="/company-history">Company History</a>
                                                </li>
                                                <li>
                                                    <a href="/careers">Careers</a>
                                                </li>
                                                <li>
                                                    <a href="/blog">Blog</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div>
                                    <h3 className="comman-title mb-30">Our Services</h3>
                                        <nav>
                                            <ul>
                                                <li>
                                                    <a href="/buy-service/instagram">Instagram</a>
                                                </li>
                                                <li>
                                                    <a href="/buy-service/twitter">Twitter</a>
                                                </li>
                                                <li>
                                                    <a href="/buy-service/youtube">YouTube</a>
                                                </li>
                                                <li>
                                                    <a href="/buy-service/tiktok">TikTok</a>
                                                </li>
                                                <li>
                                                    <a href="/buy-service/facebook">Facebook</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div>
                                    <h3 className="comman-title mb-30">Helpful Links</h3>
                                        <nav>
                                            <ul>
                                                <li>
                                                    <a href="/frequently-asked-questions">FAQs</a>
                                                </li>
                                                <li>
                                                    <a href="/support">Request a refill</a>
                                                </li>
                                                <li>
                                                    <a href="/support">
                                                        <div>
                                                            <span>Support Available</span>
                                                            <span>
                                                                <div></div>
                                                                <div></div>
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/troubleshooting">Troubleshooting</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Item className='info-box shadow-remove'>
                                <h3 className="comman-title mb-30">Contact Info</h3>
                                <ul className='c-ingo'>
                                    <li><MessageOutlinedIcon /> Contact Support</li>
                                    <li><EmailIcon />support@socialcrow.co</li>
                                    <li><CallIcon /> +1-251-219-9639  </li>
                                    <li><LocationOnIcon /> Unit 82A, James Carter Road, Mildenhall, IP28 7DE, UK.</li>
                                </ul>

                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className='copyright'>
                <div className="bound">
                    <div className='b-fot'>
                    <p>© 2023 Social Crow is a trading name of Social Freak Ltd - 14659411</p>
                    <p>All rights reserved.<a href="TermsOfService">Terms Of Service</a>· <a href="/PrivacyPolicy">Privacy Policy</a>· <a href="/RefundDelivery">Refund and Shipping</a></p>
                </div>
                </div>
            </div>
        </>
    )
}

export default Footer