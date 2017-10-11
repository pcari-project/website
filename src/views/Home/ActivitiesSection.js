import React from 'react';
import { Grid, Image, Card, Header, Icon } from 'semantic-ui-react'

const ActivitiesSection = () =>
(
    <Grid padded>
        <Grid.Column mobile={16} tablet={16} computer={16} >
            <Header as='h2' icon textAlign='center'>
                <Header.Content>
                    Recent Activities
                </Header.Content>
            </Header>
        </Grid.Column>

        <Grid.Column mobile={16} tablet={4} computer={4} >
            <Card>
                <a><Image src='../images/Activity1.jpg' /></a>
                <Card.Content>
                <Card.Header>
                    General Meeting
                </Card.Header>
                <Card.Description>
                    General meeting on June 6 at 11AM at the HL Conference Room about urgent matters
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='calendar' />
                    June 6, 2017
                </Card.Content>
            </Card>
        </Grid.Column>
        
        <Grid.Column mobile={16} tablet={4} computer={4}>
            <Card>
                <a><Image src='../images/Activity2.jpg' /></a>
                <Card.Content>
                <Card.Header>
                    General Meeting
                </Card.Header>
                <Card.Description>
                    Project meeting on June 23 at 11AM for the preparation for the visit of Dr. Glaser and his postdoc, workplans and other matters
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='calendar' />
                    June 23, 2017
                </Card.Content>
            </Card>
        </Grid.Column>

        <Grid.Column mobile={16} tablet={4} computer={4}>
            <Card>
                <a><Image src='../images/Activity3.jpg' /></a>
                <Card.Content>
                <Card.Header>
                    General Meeting
                </Card.Header>
                <Card.Description>
                    General Meeting on June 30 at 10AM for the presentation of workplans by Research Fellows at CEAT HL Conference Room
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='calendar' />
                    June 30, 2017
                </Card.Content>
            </Card>
        </Grid.Column>

        <Grid.Column mobile={16} tablet={4} computer={4}>
            <Card>
                <a><Image src='../images/Activity4.jpg' /></a>
                <Card.Content>
                <Card.Header>
                    Arrival of Drs. Steven Glaser and Carlos Oroza
                </Card.Header>
                <Card.Description>
                    Arrival of Drs. Steven Glaser and Carlos Oroza
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='calendar' />
                    July 9, 2017
                </Card.Content>
            </Card>
        </Grid.Column>
    </Grid>
)

export default ActivitiesSection;