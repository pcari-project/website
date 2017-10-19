// TO-DO: Send e-mails directly from the contact form

import React, { Component } from 'react';
import { Container, Header, Grid, Icon, Embed, Form, Button } from 'semantic-ui-react';

class Contact extends Component {
    state = { name: '', email: '', message: '', subject: '', submittedName: '', submittedEmail: '', submittedSubject: '', submittedMessage: '' }
    
    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
    const { name, email, subject, message } = this.state

    this.setState({ submittedName: name, submittedEmail: email, submittedSubject: subject, submittedMessage: message, email: '', name: '', subject: '', message: '' })
    }

    render() {
        const { name, email, subject, message, submittedName, submittedEmail, submittedSubject, submittedMessage } = this.state
        return (
            <Container style={{padding: '1.75em'}}>
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
                            CEAT Building A Room 110, LWRD, CEAT, University of the Philippines Los Banos (UPLB)
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
                                src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d683.8735567231035!2d121.24503353883053!3d14.161181242646512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd60b49de22615%3A0x72571b4b0d57f53d!2sEngineering+and+Agro-Industrial+Technology!5e0!3m2!1sen!2sph!4v1508258705171'
                            }}
                            active
                        />

                    </Grid.Column>

                    <Grid.Column mobile={16} tablet={6} computer={6} >
                        <Header as='h2' icon textAlign='center'>Get In Touch</Header>

                        <Form onSubmit={this.handleSubmit}>
                            <Form.Input icon='user' iconPosition='left' placeholder='Name' name='name' value={name} onChange={this.handleChange} />
                            <Form.Input icon='mail' iconPosition='left' placeholder='Email' name='email' value={email} onChange={this.handleChange} />
                            <Form.Input icon='write' iconPosition='left' placeholder='Subject' name='subject' value={subject} onChange={this.handleChange} />
                            <Form.TextArea placeholder='Message' name='message' value={message} onChange={this.handleChange} style={{ minHeight: 100 }} />
                            <center>
                            <Button animated='vertical'>
                                <Button.Content hidden>Send</Button.Content>
                                <Button.Content visible>
                                    <Icon name='send' />
                                </Button.Content>
                            </Button>
                            </center>
                        </Form>
                        
                        {/* <strong>onChange:</strong>
                        <pre>{JSON.stringify({ name, email, subject, message }, null, 2)}</pre>
                        <strong>onSubmit:</strong>
                        <pre>{JSON.stringify({ submittedName, submittedEmail, submittedSubject, submittedMessage }, null, 2)}</pre>        */}
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default Contact;