import React from 'react';
import { Grid, Header, List, Segment, Container, Icon, Image } from 'semantic-ui-react'
import './Footer.css';

const Footer = () =>
    (
        <Segment inverted vertical className='footer'>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='BROWSE' />
                            <List link inverted>
                                <List.Item as='a' href='/'>Homepage</List.Item>
                                <List.Item as='a' href='/about'>About</List.Item>
                                <List.Item as='a' href='/team'>The Team</List.Item>
                                <List.Item as='a' href='/activities'>Activities</List.Item>
                                <List.Item as='a'>Live Data</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Header inverted as='h4' content='CONTACT' />
                            <List>
                                <List.Item icon='marker' content='CEAT Building A Room 110, LWRD, IAE, CEAT, University of the Philippines Los Baños (UPLB)' />
                                <List.Item icon='mail' content={<a href='mailto:pcari.wiseir@gmail.com'>pcari.wiseir@gmail.com</a>} />
                                <List.Item icon='phone' content='(63-49)-536-2387' />
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='FOLLOW' />
                            <List>
                                <List.Item icon='twitter' content={<a href='https://twitter.com/pcariproject'>@pcariproject</a>} />
                                <List.Item icon='facebook f' content={<a href='https://facebook.com/pcariproject'>/pcariproject</a>} />
                            </List>
                        </Grid.Column>
                        <Grid.Column width={4} textAlign='center'>
                            {/* <Image src='images/PCARI.png' width='200' title='Philippine-California Advanced Research Institutes' className='partner-logos' /><br/> */}
                            <Image src='images/CHED.png' width='60' title='Commission on Higher Education' className='partner-logos' />
                            <Image src='images/UPLB.png' width='70' title='University of the Philippines Los Baños' className='partner-logos' />
                            <Image src='images/UCB.png' width='65' title='University of California, Berkeley' className='partner-logos' /><br/>
                            <Icon name='copyright' /> 2017
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )

export default Footer;