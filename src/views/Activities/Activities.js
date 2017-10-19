// TO-DO: Pagination and photos page of each activity

import React from 'react';
import { Container, Header, Item, Icon, Button, Label } from 'semantic-ui-react';

const Activities = () => (
    <Container style={{padding: '1.75em'}}>
        <Header as='h2'>Activities</Header>
        <Item.Group divided>
            <Item>
                <Item.Image src='../images/Activity1.jpg' />
        
                <Item.Content>
                <Item.Header as='a'>General Meeting</Item.Header>
                <Item.Meta>
                    <span className='cinema'>HL Conference Room</span>
                </Item.Meta>
                <Item.Description>General meeting on June 6 at 11AM at the HL Conference Room about urgent matters</Item.Description>
                <Item.Extra>
                    <Button primary floated='right'>
                    View photos
                    <Icon name='right chevron' />
                    </Button>
                    <Label as='a'>Meetings</Label>
                </Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image src='../images/Activity2.jpg' />
        
                <Item.Content>
                <Item.Header as='a'>General Meeting</Item.Header>
                <Item.Meta>
                    <span className='cinema'>HL Conference Room</span>
                </Item.Meta>
                <Item.Description>Project meeting on June 23 at 11AM for the preparation for the visit of Dr. Glaser and his postdoc, workplans and other matters</Item.Description>
                <Item.Extra>
                    <Button primary floated='right'>
                    View photos
                    <Icon name='right chevron' />
                    </Button>
                    <Label as='a'>Meetings</Label>
                </Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image src='../images/Activity3.jpg' />
        
                <Item.Content>
                <Item.Header as='a'>General Meeting</Item.Header>
                <Item.Meta>
                    <span className='cinema'>HL Conference Room</span>
                </Item.Meta>
                <Item.Description>General Meeting on June 30 at 10AM for the presentation of workplans by Research Fellows at CEAT HL Conference Room</Item.Description>
                <Item.Extra>
                    <Button primary floated='right'>
                    View photos
                    <Icon name='right chevron' />
                    </Button>
                    <Label as='a'>Meetings</Label>
                </Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image src='../images/Activity4.jpg' />
        
                <Item.Content>
                <Item.Header as='a'>Arrival of Drs. Steven Glaser and Carlos Oroza</Item.Header>
                <Item.Meta>
                    <span className='cinema'>HL Conference Room</span>
                </Item.Meta>
                <Item.Description>Arrival of Drs. Steven Glaser and Carlos Oroza</Item.Description>
                <Item.Extra>
                    <Button primary floated='right'>
                    View photos
                    <Icon name='right chevron' />
                    </Button>
                    <Label as='a'>Collaborators</Label>
                </Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>

    </Container>
);

export default Activities;