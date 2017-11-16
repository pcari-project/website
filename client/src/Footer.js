import React from 'react';
import { Grid, Header, List, Segment, Container, Icon, Image } from 'semantic-ui-react'

const Footer = () =>
    (
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
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
                                <List.Item icon='marker' content='CEAT Building A Room 110, LWRD, IAE, CEAT, University of the Philippines Los Banos (UPLB)' />
                                <List.Item icon='mail' content={<a href='mailto:pcari-project@gmail.com'>pcari-project@gmail.com</a>} />
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
                            {/* <Image src='images/PCARI.png' width='200' title='Philippine-California Advanced Research Institutes' style={{display:'inline-block', margin:'0.2em'}} /><br/> */}
                            <Image src='images/CHED.png' width='60' title='Commission on Higher Education' style={{display:'inline-block', margin:'0.2em'}} />
                            <Image src='images/UPLB.png' width='70' title='University of the Philippines Los Baños' style={{display:'inline-block', margin:'0.2em'}} />
                            <Image src='images/UCB.png' width='65' title='University of California, Berkeley' style={{display:'inline-block', margin:'0.2em'}} /><br/>
                            <Icon name='copyright' style={{marginTop:'0.5em'}}/> 2017
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )

export default Footer;