import React, { Component } from 'react';
import { Container, Header, Grid, Icon, Embed, Form, Button } from 'semantic-ui-react';
import axios from 'axios';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', subject: '', message: '' }
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
    const { name, email, subject, message } = this.state
    const data = {
        name: name,
        email: email,
        subject: subject,
        message: message
    }
    const table = 'emails';
    const serverUrl = 'http://localhost:3100/api/' + table;
    axios.post(`${serverUrl}/sendEmail`, data)
    .then(res => {
        alert(`Thank you, ${name}. Your email has been sent.`)
    })
    .catch(err => {
        alert(err);
        console.error(err);
    });

    this.setState({ email: '', name: '', subject: '', message: '' })
    }

    render() {
        const { name, email, subject, message } = this.state
        return (
            <Container className='body-container'>
                <Header as='h2'>Contact</Header>
                <Grid doubling columns={3}>
                    <Grid.Column>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='mail' circular />
                        <Header.Content>
                            Mail
                        </Header.Content>
                        <Header.Subheader>
                            <a href='mailto:pcari-project@gmail.com'>pcari-project@gmail.com</a>
                        </Header.Subheader>
                    </Header>
                    </Grid.Column>

                    <Grid.Column>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='phone' circular />
                        <Header.Content>
                            Phone
                        </Header.Content>
                        <Header.Subheader>
                            (63-49)-536-2387
                        </Header.Subheader>
                    </Header>
                    </Grid.Column>

                    <Grid.Column>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='marker' circular />
                        <Header.Content>
                            Office
                        </Header.Content>
                        <Header.Subheader>
                            CEAT Building A Room 110, LWRD, IAE, CEAT, University of the Philippines Los Baños (UPLB)
                        </Header.Subheader>
                    </Header>
                    </Grid.Column>
                </Grid>

                <Grid>
                    <Grid.Column mobile={16} tablet={10} computer={10} >
                        <Header as='h2' icon textAlign='center'>Find Us</Header>

                        <Embed
                            iframe={{
                                allowFullScreen: true,
                                style: {
                                    padding: 5,
                                },
                                src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.5769734296796!2d121.24336781483518!3d14.160950090083652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd60b702d05d5f%3A0x88d32fa754fff199!2sUPLB+-+Land+and+Water+Resources+Division!5e0!3m2!1sen!2sph!4v1510726382874'
                            }}
                            active
                        />

                    </Grid.Column>

                    <Grid.Column mobile={16} tablet={6} computer={6} >
                        <Header as='h2' icon textAlign='center'>Get In Touch</Header>

                        <Form method='POST' onSubmit={this.handleSubmit}>
                            <Form.Input icon='user' iconPosition='left' placeholder='Name' name='name' value={name} onChange={this.handleChange} />
                            <Form.Input icon='mail' iconPosition='left' placeholder='Email' name='email' value={email} onChange={this.handleChange} />
                            <Form.Input icon='write' iconPosition='left' placeholder='Subject' name='subject' value={subject} onChange={this.handleChange} />
                            <Form.TextArea placeholder='Message' name='message' value={message} onChange={this.handleChange} />
                            <center>
                            <Button animated='vertical'>
                                <Button.Content hidden>Send</Button.Content>
                                <Button.Content visible>
                                    <Icon name='send' />
                                </Button.Content>
                            </Button>
                            </center>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default Contact;