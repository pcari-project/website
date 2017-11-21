import React, { Component } from 'react';
import { Container, Header, Grid, Item, Image, Modal, Icon, Divider } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

class Team extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.fetch = this.fetch.bind(this);
    }

    fetch(serverUrl){
        axios.get(`${serverUrl}`)
        .then(res => {
            this.setState({ data: res.data });
        })
        .catch(err => {
            alert('No data returned from the server!');
            console.error(err);
        });
    }

    componentDidMount() {
        const table = 'team';
        const serverUrl = 'http://localhost:3100/api/' + table;
        this.fetch(serverUrl);
    }
    
    render(){
        let currentData = this.state.data;
        
        // current team members
        const currentMembers = currentData.map(team => {
            if (team.active) {
                return (
                    <Grid.Column>
                        <Modal trigger={
                            <Item.Group>
                                <Item>
                                    <Item.Image size='tiny' src={team.image}/>
                
                                    <Item.Content>
                                        <Item as='a'>{team.name}</Item>
                                        <p style={{fontStyle:'italic'}}>{team.designation}</p>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        } closeIcon>
        
                            <Modal.Header>{team.designation}</Modal.Header>
                            
                            <Modal.Content image scrolling>
                                <Image src={team.image}height='160' />
            
                                <Modal.Description>
                                    <Header>{team.name}
                                        <Header.Subheader>
                                            <Icon name='mail' /><a href={`mailto:${team.email}`}>{team.email}</a>
                                        </Header.Subheader>
                                    </Header>
                                    <Divider />
                                    <ReactMarkdown source={team.profile} />
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                    </Grid.Column>
                )
            }else return void 0
        });

        // previous team members
        const previousMembers = currentData.map(team => {
            if (!team.active) {
                return (
                    <Grid.Column>
                        <Modal trigger={
                            <Item.Group>
                                <Item>
                                    <Item.Image size='tiny' src={team.image}/>
                
                                    <Item.Content>
                                        <Item as='a'>{team.name}</Item>
                                        <p style={{fontStyle:'italic'}}>{team.designation}</p>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        } closeIcon>
        
                            <Modal.Header>{team.designation}</Modal.Header>
                            
                            <Modal.Content image scrolling>
                                <Image src={team.image}height='160' />
            
                                <Modal.Description>
                                    <Header>{team.name}
                                        <Header.Subheader>
                                            <Icon name='mail' /><a href={`mailto:${team.email}`}>{team.email}</a>
                                        </Header.Subheader>
                                    </Header>
                                    <Divider />
                                    <ReactMarkdown source={team.profile} />
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                    </Grid.Column>
                )
            }else return void 0
        });

        return(
            <Container style={{padding: '1.75em'}}>
                <Header as='h2'>The Team</Header>
                <Grid doubling columns={4}>
                    {currentMembers}
                </Grid>

                <Header as='h2'>Former Team Members</Header>
                <Grid doubling columns={4}>
                    {previousMembers}
                </Grid>
            </Container>
        )
    }
}

export default Team;