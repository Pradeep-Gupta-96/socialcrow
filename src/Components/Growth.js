import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import fbsvg from '../utility/jetha.svg'
import svg2 from '../utility/svg2.svg'

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
                                <h2 className='client-title'>Trusted by leading brands, businesses, and influencers for organic Facebook growth:</h2>
                            </div>
                        </Item>
                    </Grid>
                    <div className="growth-bos">
                        <div className="w-full space-y-4 rounded bg-indigo-600 px-10 py-10 text-white">
                            <p className="text-4xl font-black">60,000+</p>
                            <p className="text-xl text-slate-200">Total Clients</p>
                        </div>
                        <div className="w-full space-y-4 rounded bg-indigo-600 px-10 py-10 text-white">
                            <p className="text-4xl font-black">~4,500</p>
                            <p className="text-xl text-slate-200">Monthly Orders</p>
                        </div>
                        <div className="w-full space-y-4 rounded bg-indigo-600 px-10 py-10 text-white">
                            <p className="text-4xl font-black">10M+</p>
                            <p className="text-xl text-slate-200">Following Power</p>
                        </div>
                        <div className="w-full space-y-4 rounded bg-indigo-600 px-10 py-10 text-white">
                            <p className="text-4xl font-black">9.1 / 10</p>
                            <p className="text-xl text-slate-200">Customer Service Rating</p>
                        </div>
                    </div>

                    <div className="py-8 text-center">
                        <p className="font-plixi text-center text-4xl font-bold text-indigo-600">How Do We Do It?</p>
                        <p className="mx-auto mt-2 max-w-2xl px-6 text-center text-xl font-bold">For years we have been building up a large following of dedicated users that get paid to follow and help support our clients.</p>
                        <p className="mx-auto mt-4 max-w-2xl px-6 text-center text-lg">They are asked to visit your page self if they want to follow or not. Therefore we attract real users interested in your account and convert them into page likes + followers  better and faster than other growth services, without ever putting your account at any risk of getting banned or flagged.</p>
                    </div>

                    <div className="go-facebook">
                        <div className="left-box">
                            <h3 className="font-plixi text-3xl font-bold">Go Viral On Facebook</h3>
                            <p className="font-plixi pt-6 text-lg">Looking to go viral? Buying page likes + followers, and other services will lead to organic engagement from your target audience. Use this opportunity to leap frog to the next stage of your business.</p>
                            <a className="font-plixi mt-8 flex items-center justify-center space-x-1 rounded-xl bg-black px-8 py-3 text-white" href="/buy-service/facebook"><span className="pl-2">Get Started</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mt-0.5 h-5 w-5"><path fill-rule="evenodd" d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                        <div className='svg-img'>
                            <img width="392" height="253"  src={fbsvg} alt='' />
                        </div>
                    </div>

                    <div className="go-facebook">
                    <div className='svg-img'>
                            <img width="392" height="333"  src={svg2} alt='' />
                        </div>
                        <div className="left-box">
                            <h3 className="font-plixi text-3xl font-bold">Boost and Optimize Your Conversion</h3>
                            <p className="font-plixi pt-6 text-lg">Looking to boost your conversion rates? Look no further than our top-of-the-line page likes + followers service! By purchasing page likes + followers, you'll be able to increase your brand's visibility and reach, which will in turn lead to more conversions. So don't wait any longer, buy page likes + followers today and see your conversion rates soar!</p>
                            <a className="font-plixi mt-8 flex items-center justify-center space-x-1 rounded-xl bg-black px-8 py-3 text-white" href="/buy-service/facebook"><span className="pl-2">Get Started</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mt-0.5 h-5 w-5"><path fill-rule="evenodd" d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                        
                    </div>
                </Grid>
            </div>
        </div>
    )
}

export default Growth