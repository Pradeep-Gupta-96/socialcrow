import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Content = () => {
    return (
        <div className='about-sec join-sec gray-bg'>
            <div className="bound">
                <Grid className="about" container spacing={2}>
                    <div className='join-our-sec' item xs={12} >
                        <h2 className='client-title' style={{paddingBottom: "0px"}}>Join 60,000+ Successful Clients Today:</h2>
                        <div className='text-box'>
                            <h3>Start today and grow your social media services, likes, comments, story views, engagement and more.</h3>
                            <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Let's Go! <DoubleArrowIcon /> </Link></div>
                        </div>
                    </div>
                    <Grid item xs={12} md={6}>
                        <Item className='shadow-remove remove-bg about-img'>
                            <div className='text-box'>
                                <h3>Boost Your Twitter Presence with High-Quality Followers</h3>
                                <p className='ab-text'>Looking to increase your Twitter following? Our high-quality Twitter followers can help you gain more organic followers and make your account more popular at an affordable price.
                                    Twitter followers are an important indicator of your account's popularity and demand, which can attract even more followers and the approval of the algorithm.</p>

                            </div>
                        </Item>
                    </Grid>
                    <Grid className='about-text wow fadeInRight' item xs={12} md={6}>
                        <Item className='shadow-remove remove-bg'>
                            <div className='text-box'>
                                <h3>Fast Delivery and No Risk of Decrease</h3>
                                <p className='ab-text'>We start processing your order as soon as you complete your purchase, and we guarantee that the services you buy will be permanent with no risk of decrease. If you experience any losses within six months of your purchase, we'll refill them for you..</p>

                            </div>
                        </Item>
                    </Grid>
                    <Grid className='about-text wow fadeInRight' item xs={12} md={6}>
                        <Item className='shadow-remove remove-bg'>
                            <div className='text-box'>
                                <h3>Refund Guarantee and 24/7 Live Support</h3>
                                <p className='ab-text'>We offer a refund guarantee if we can't deliver your order within the estimated delivery time (which we show on the service's page). Plus, our 24/7 live customer support is always available to help you via our embedded chat system, WhatsApp, or email.</p>

                            </div>
                        </Item>
                    </Grid>
                    <Grid className='about-text wow fadeInRight' item xs={12} md={6}>
                        <Item className='shadow-remove remove-bg'>
                            <div className='text-box'>
                                <h3>Secure Payment and No Password Required</h3>
                                <p className='ab-text'>You can pay with your credit card through the most secure and trusted payment systems in the world, and we never ask for your password or any other private information. We recommend protecting your account and never sharing your passwords with anyone.</p>

                            </div>
                        </Item>
                    </Grid>
                    <Grid className='about-text wow fadeInRight' item xs={12} >
                        <Item className='shadow-remove remove-bg'>
                            <div className='text-box'>
                                <p className='ab-text'>Warning: To ensure correct tracking of your order interactions, do not purchase the same products from different sites simultaneously.</p>
                            </div>
                        </Item>
                    </Grid>
                    <Grid className='about-text wow fadeInRight' item xs={12} >
                        <Item className='shadow-remove remove-bg'>
                            <div className='text-box'>
                                <h3>Secure Payment and No Password Required</h3>
                                <p className='ab-text'>You can pay with your credit card through the most secure and trusted payment systems in the world, and we never ask for your password or any other private information. We recommend protecting your account and never sharing your passwords with anyone.</p>

                            </div>
                        </Item>
                    </Grid>
                    <Grid className='about-text wow fadeInRight' item xs={12} >
                        <Item className='shadow-remove remove-bg'>
                            <div className='text-box'>
                                <h3>Why Twitter Followers Matter</h3>
                                <p className='ab-text'>Twitter is a highly competitive and constantly evolving platform, making it difficult to gain a large following organically. However, having a significant number of followers is crucial for increasing engagement and visibility on the platform.</p>

                                <p className='ab-text'>    To attract more followers naturally, it's important to offer unique and entertaining content that resonates with your target audience. Utilizing relevant hashtags and running ad campaigns can also help increase visibility.</p>

                                <p className='ab-text'>   Alternatively, purchasing Twitter followers can provide a quick boost to your account's popularity. At Social Crow, we offer real, active followers from around the world, as well as more affordable bot followers. Our delivery is fast and reliable, making it easy to buy Twitter followers and increase your account's engagement.</p>

                            </div>
                        </Item>
                    </Grid>
                    <Grid className='about-text wow fadeInRight' item xs={12} >
                        <Item className='shadow-remove remove-bg'>
                            <div className='text-box'>
                                <h3>Why Buy Twitter Followers?</h3>
                                <p className='ab-text'>Twitter is a powerful marketing tool for businesses, allowing them to connect with customers and expand their reach. By purchasing followers, businesses can quickly establish a larger presence on the platform and build a transparent relationship with their audience.</p>

                                <p className='ab-text'>   Buying Twitter followers can also increase your online presence and prestige, making it easier to reach tailored audiences and attract potential advertisers. It's a smart investment for anyone looking to become an influencer or boost their blog or website traffic.</p>

                            </div>
                        </Item>
                    </Grid>
                    <Grid className='about-text wow fadeInRight' item xs={12} >
                        <Item className='shadow-remove remove-bg'>
                            <div className='text-box'>
                                <h3>Advantages of Buying Twitter Followers</h3>
                                <p className='ab-text'>At Social Crow, we offer both real and realistic-looking bot followers at affordable prices. Purchasing followers can increase your visibility and engagement on the platform, making it easier to establish a more effective presence. It can also help you make money through sponsored content and boost your account's authority in its niche or expertise.</p>

                                <p className='ab-text'>   To gain followers organically, it's important to be engaging, responsive, and share quality content. Utilizing hashtags and responding to messages can also help increase visibility. However, purchasing followers can provide a quick and effective boost to your account's popularity.</p>

                            </div>
                        </Item>
                    </Grid>
                    <Grid className='about-text wow fadeInRight' item xs={12} >
                        <Item className='shadow-remove remove-bg'>
                            <div className='text-box'>
                                <h3>How to Get Followers on Twitter Organically</h3>
                                <ul>
                                    <li>Be engaging</li>
                                    <li>Don't neglect your followers</li>
                                    <li>Follow popular people on Twitter</li>
                                    <li>Give social messages on current issues</li>
                                    <li>Retweet quality tweets</li>
                                    <li>Answer your mentions</li>
                                    <li>Use hashtags</li>
                                    <li>Respond to messages that are sent to you</li>
                                    <li>Add valid photos and videos to your shares</li>
                                    <li>Share quality content</li>
                                    <li>Design an impressive profile account</li>
                                    <li>Share links in your content</li>
                                </ul>
                            </div>
                        </Item>
                    </Grid>
                    <Grid className='about-text wow fadeInRight' item xs={12} >
                        <Item className='shadow-remove remove-bg'>
                            <div className='text-box'>
                                <h3>Our Twitter Services</h3>
                                <p className='ab-text'>At Social Crow, we offer a wide range of social media services and products. Our Twitter product line includes followers, likes, retweets, and video views. Our Twitter Followers service has two options: regular and real. The regular service includes realistic bots, while the real option gives you genuine followers. Regardless of which Twitter service you choose, you will increase your interaction and engagement rates, and become more visible. For the ultimate experience, we recommend purchasing all of our services.</p>

                                <p className='ab-text'>   Our services are fast and secure. Within minutes, your followers will start following your Twitter account. While we cannot guarantee extra interaction, if you purchase real followers, they may retweet your tweets. Our followers are a mix of genders and locations, ensuring the best quality service in the market. Our payment system is safe, and we never ask for your password.</p>

                                <p className='ab-text'>   We work with PayPal, but if you don't have an account, you can use your credit card. Our systems are protected by a 256-bit SSL protection system. Once the payment process is complete, we will provide your followers to your profile in minutes.</p>

                            </div>
                        </Item>
                    </Grid>
                    <Grid className='about-text wow fadeInRight' item xs={12} >
                        <Item className='shadow-remove remove-bg'>
                            <div className='text-box'>
                                <h3>How to Buy Twitter Followers</h3>
                                <ol>
                                    <li>Choose between our Regular or Real packages.</li>
                                    <li>Enter your Twitter username.</li>
                                    <li>Enter the number of followers you want to receive.</li>
                                    <li>Check the total cost of your purchase and make sure it is correct.</li>
                                    <li>Click on 'Add to Cart' or 'Buy Now' to continue with your purchase.</li>
                                    <li>Complete the payment process.</li>
                                </ol>

                                <p className='ab-text'>We will start delivering your Twitter followers as soon as we receive your purchase. Delivery usually takes 15-30 minutes, depending on the amount you are buying. If you experience any problems or have any questions, our 24/7 online Customer Care is available to assist you. Thank you for choosing Social Crow.</p>

                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Content