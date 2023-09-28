import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Questions() {

    const ArrayData = [
        { Accordion: "How can Twitter followers help me achieve my goals as a brand owner?", Typography: "By buying Twitter followers, your account will appear more credible and trustworthy, and your brand awareness will increase." },
        { Accordion: "Is buying Twitter followers worth it?", Typography: "Yes, it can provide quicker results." },
        { Accordion: "Will my followers stay intact or disappear in time?", Typography: "Your followers are designed to continue following your profile for a long time. We guarantee that realistic-looking followers will stay for at least six months. However, real followers are free to unfollow you if they are not interested in your profile." },
        { Accordion: "Does Twitter notify your followers when you follow other users?", Typography: "No, Twitter only notifies your followers if you follow them." },
        { Accordion: "What is a good amount of Twitter followers?", Typography: "It depends on your profile. However, if you are an individual marketer, the recommended number is around 10,000." },
        { Accordion: "Is it safe to buy Twitter followers?", Typography: "Yes, our system is protected by an SSL certificate, and all transactions are secured." },
        { Accordion: "Will I get banned for buying Twitter followers?", Typography: "No, buying followers will not get you banned. If it worked as such, rival companies would buy followers to get each other banned on Twitter." },
        { Accordion: "Can I get a refund if I'm not satisfied with the service?", Typography: "You can get a refund if we don't deliver your Twitter followers in the expected time. Visit our terms and services page to find out more about the refund policy." },
        { Accordion: "Is it common to buy Twitter followers?", Typography: "Yes, many people buy Twitter followers to be successful on Twitter quickly." },
        { Accordion: "How many followers do you need to be verified on Twitter?", Typography: "The number of followers required for verification varies, but it seems that at least 4,000 followers are needed." },
        { Accordion: "How many followers do you need to make money on Twitter?", Typography: "If you want to sell your own products on Twitter, you will need at least 1,000 followers." }
    ];

    return (
        <div className='about-sec faqs gray-bg'>
            <div className="bound">

                <Grid className="about" container spacing={2}>
                    <Grid className='about-text wow fadeInRight' item xs={12} >
                        <Item className='shadow-remove remove-bg'>
                            <div className='text-box'>
                                <h2 className='client-title'>Frequently Asked Questions</h2>
                                <div className='all-acco'>
                                {ArrayData.map((item, index) => (
                                    <Accordion key={index}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls={`panel${index + 1}-content`}
                                            id={`panel${index + 1}-header`}
                                        >
                                            <Typography>{item.Accordion}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>{item.Typography}</Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                                </div>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
