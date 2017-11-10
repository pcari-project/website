import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';

import { Container, Image, Header, Grid, Modal, Icon } from 'semantic-ui-react'

class ActivitiesPhotos extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            date:'',
            venue:'',
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
            this.setState({title: response.data.name, description: response.data.description, date: response.data.date, venue: response.data.venue, details: response.data.photos}, () => {
                console.log(this.state.details)
            })
        })
        .catch(err => console.log(err));
    }

    render(){
        let title = this.state.title;
        let description = this.state.description;
        let date = this.state.date;
        let venue = this.state.venue;
        const photo = this.state.details.map((activity) => {
            return(
                <Grid.Column>
                    <Modal size='small' trigger={
                        <Image height='190' width='250' src={activity}/>
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
                            <p>
                                <Icon name='calendar' /> {moment(date).format('ddd ll')}
                                <Icon name='marker' /> {venue}
                            </p>
                            {description}
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