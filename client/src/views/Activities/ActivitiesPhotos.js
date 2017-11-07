import React, { Component } from 'react';
import axios from 'axios';

import { Container, Image, Header, Grid, Modal, Icon } from 'semantic-ui-react'

class ActivitiesPhotos extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            date:'',
            details: []
        }
    }

    componentDidMount(){
        this.getActivity();
    }

    getActivity(){
        let activityId = this.props.match.params.id;
        axios.get(`http://localhost:3100/api/activities/${activityId}`)
        .then(response => {
            this.setState({title: response.data.name, date: response.data.date, details: response.data.photos}, () => {
                console.log(this.state.details)
            })
        })
        .catch(err => console.log(err));
    }

    render(){
        let title = this.state.title;
        let date = this.state.date;
        const photo = this.state.details.map((activity) => {
            return(
                <Grid.Column>
                    <Modal size='small' trigger={
                        <Image src={activity}/>
                    } closeIcon>
                        <Modal.Content image>
                            <Image wrapped size='huge' src={activity}/>
                        </Modal.Content>
                    </Modal>
                </Grid.Column>
            )
        })
        return(
            <Container style={{padding: '1.75em'}}>
                <Header as='h2'>
                    <a href='/activities' title='Go to Activities'><Icon name='arrow left'/></a>
                    <Header.Content>
                        {title}
                        <Header.Subheader>
                            {date}
                        </Header.Subheader>
                    </Header.Content>
                </Header>

                <Grid doubling columns={4}>
                    {photo}
                </Grid>
            </Container>
        )
    }
}

export default ActivitiesPhotos;