import React from 'react';
import { Grid, Header, List, Segment, Container, Icon, Image } from 'semantic-ui-react'

const Footer = () =>
    (
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Header inverted as='h4' content='BROWSE' />
                            <List link inverted>
                                <List.Item as='a'>Homepage</List.Item>
                                <List.Item as='a'>About</List.Item>
                                <List.Item as='a'>Team</List.Item>
                                <List.Item as='a'>Activities</List.Item>
                                <List.Item as='a'>Live Data</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Header inverted as='h4' content='CONTACT' />
                            <List>
                                <List.Item icon='marker' content='CEAT Building A Room 110, LWRD, CEAT, University of the Philippines Los Banos (UPLB)' />
                                <List.Item icon='mail' content={<a href='mailto:pcari-project@gmail.com'>pcari-project@gmail.com</a>} />
                                <List.Item icon='phone' content='(63-49)-536-2387' />
                            </List>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header inverted as='h4' content='FOLLOW' />
                            <List>
                                <List.Item icon='twitter' content={<a href='https://twitter.com/pcariproject'>@pcariproject</a>} />
                                <List.Item icon='facebook f' content={<a href='https://facebook.com/pcariproject'>/pcariproject</a>} />
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3} textAlign='center'>
                            <Image src='../images/CHED.png' size='tiny' centered />
                            <Icon name='copyright' style={{marginTop:'0.5em'}}/> 2017
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )

export default Footer;