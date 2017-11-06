import React, { Component } from 'react';
import { Container, Grid, Image, Card, Header, Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class ActivitiesSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            activeItem: 1,
            itemPerPage: 4
        };
        this.fetch = this.fetch.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleItemClickRight = this.handleItemClickRight.bind(this);
        this.handleItemClickLeft = this.handleItemClickLeft.bind(this);
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

    handleItemClick(e, {name}){
        name = parseInt(name, 10);
        this.setState({ activeItem: name });
    }

    handleItemClickRight(e){
        const pageNumbers = [];
        const { itemPerPage } = this.state;
        for (let i = 1; i <= Math.ceil(this.state.data.length / itemPerPage); i++) {
            pageNumbers.push(i);
        }
        let item = this.state.activeItem + 1;
        if (this.state.activeItem === pageNumbers.length){
            item = this.state.activeItem;
        }
        this.setState({ activeItem: item });
    }

    handleItemClickLeft(e){
        let item = this.state.activeItem - 1;
        if (this.state.activeItem === 1){
            item = this.state.activeItem;
        }
        this.setState({ activeItem: item });
    }

    componentDidMount() {
        const table = 'activities';
        const serverUrl = 'http://localhost:3100/api/' + table;
        this.fetch(serverUrl);
    }

    render (){
        const { activeItem, itemPerPage } = this.state;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.data.length / itemPerPage); i++) {
          pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <Menu.Item
                key={number}
                name={''+number+''} // eslint-disable-next-line
                active={activeItem == number}
                onClick={this.handleItemClick}>
                {number}
                </Menu.Item>
            );
        });
        const indexOfLast = activeItem * itemPerPage;
        const indexOfFirst = indexOfLast - itemPerPage;
        let currentData = this.state.data.slice(indexOfFirst, indexOfLast);
        
        let item = currentData.map(activity => {
            const thumbnail = activity.thumbnail;
            return (
                <Card>
                    <Image src={thumbnail} />
                    <Card.Content>
                    <Card.Header as={Link} to={`/activities-photos/${activity.id}`}>
                        {activity.name}
                    </Card.Header>
                    <Card.Description>
                        {activity.description}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='calendar' />
                        {activity.date}
                    </Card.Content>
                </Card>
            )
        });

        return (
            <Container style={{padding: '1.75em'}} textAlign='center'>
                <Header as='h2' textAlign='center'>Recent Activities</Header>
                <Card.Group stackable itemsPerRow={4}>
                    {item}
                </Card.Group>

                <Menu pagination style={{margin: '0.7em'}}>
                <Menu.Item as='a' onClick={this.handleItemClickLeft} icon>
                    <Icon name='left chevron' />
                </Menu.Item>
                {renderPageNumbers}
                <Menu.Item  as='a' onClick={this.handleItemClickRight} icon>
                    <Icon name='right chevron' />
                </Menu.Item>
                </Menu>
            </Container>
        );
    }
}

export default ActivitiesSection;