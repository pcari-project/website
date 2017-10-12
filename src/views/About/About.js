import React from 'react';
import { Container, Header, Icon, Responsive, Segment } from 'semantic-ui-react';
import {YouTubePlayer} from 'react-video-players';

const About = () => (
    <Container style={{padding: '1em'}}>
        <Header as='h2'>About</Header>
        <p>This project aims to design, develop and test a novel irrigation water management scheme and information system for lowland and upland crops based on wireless sensor network (WSN) technology. The technology that will be developed in this project would lead to numerous benefits and positive impacts including good management policies in the agriculture and water sector, improved enforcement through an informed populace, and a direct economic improvement for the stakeholders.  The resulting system should be ready for marketing within the Philippines and to countries with climates similar to the Philippines.</p>

        <YouTubePlayer videoId="8cXf4yiUBvA" />
        
        <Segment textAlign='right' basic>
            <a href='/team' style={{fontSize:'1.15em'}}>Meet the entire team <Icon name='arrow circle right' /></a>
        </Segment>
    </Container>
)

export default About;