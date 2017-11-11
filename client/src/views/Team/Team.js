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
        axios.get(`${serverUrl}?filter={"where":{"active":true}}`)
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
        
        let item = currentData.map(team => {
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
        });

        return(
            <Container style={{padding: '1.75em'}}>
                <Header as='h2'>The Team</Header>
        
                <Grid doubling columns={4}>
                    {item}
                </Grid>
            </Container>
        )
    }
}

export default Team;