import React, { Component } from 'react';
import { Container, Header, Item, Icon, Button, Label, Menu, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

class Activities extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            activeItem: 1,
            itemPerPage: 5
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
    
    
    render(){
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
                <Item>
                    <Item.Image src={thumbnail} />
            
                    <Item.Content>
                        <Item.Header>{activity.name}</Item.Header>
                        <Item.Meta>
                            <Icon name='calendar' />
                            {moment(activity.date).format('ddd ll')}
                        </Item.Meta>
                        <Item.Description>{activity.description}</Item.Description>
                        <Item.Extra>
                            <Button primary floated='right' as={Link} to={`/activities-photos/${activity.id}`}>
                            View photos
                            <Icon name='right chevron' />
                            </Button>
                            <Label as='a'>{activity.tags}</Label>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            )
        });

        return(
            <Container style={{padding: '1.75em'}}>
                <Header as='h2'>Activities</Header>
                <Item.Group divided>
                    {item}  
                </Item.Group>
                <Divider />

                <Container textAlign='center'>
                    <Menu pagination>
                        <Menu.Item as='a' onClick={this.handleItemClickLeft} icon>
                            <Icon name='left chevron' />
                        </Menu.Item>
                        {renderPageNumbers}
                        <Menu.Item  as='a' onClick={this.handleItemClickRight} icon>
                            <Icon name='right chevron' />
                        </Menu.Item>
                    </Menu>
                </Container>

            </Container>
        );
    }
} 

export default Activities;