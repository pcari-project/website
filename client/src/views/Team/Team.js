import React from 'react';
import { Container, Header, Grid, Item, Image,
    Modal, Icon } from 'semantic-ui-react';

const Team = () => (
    <Container style={{padding: '1.75em'}}>
        <Header as='h2'>The Team</Header>

        <Grid doubling columns={4}>
            <Grid.Column>
                <Modal trigger={
                    <Item.Group>
                    <Item>
                    <Item.Image size='tiny' src='../images/team/default.jpg'/>

                    <Item.Content>
                        <Item as='a'>Victor B. Ella</Item>
                        <p style={{fontStyle:'italic'}}>Project Leader</p>
                    </Item.Content>
                    </Item>
                    </Item.Group>
                } closeIcon>

                    <Modal.Header>Project Leader</Modal.Header>
                    <Modal.Content image scrolling>
                    <Image
                        
                        src='../images/team/default.jpg'
                        height='160'
                    />

                    <Modal.Description>
                        <Header>Dr. Victor B. Ella</Header>
                        <Icon name='mail' /><a href='mailto:vbella@up.edu.ph'>vbella@up.edu.ph</a>
                        <p style={{marginTop:'1em'}}></p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Grid.Column>
            {/* ******************************************************************************** */}
            <Grid.Column>
                <Modal trigger={
                    <Item.Group>
                    <Item>
                    <Item.Image size='tiny' src='../images/team/Glaser.jpg'/>

                    <Item.Content>
                        <Item as='a'>Steven D. Glaser</Item>
                        <p style={{fontStyle:'italic'}}>Principal Investigator</p>
                    </Item.Content>
                    </Item>
                    </Item.Group>
                } closeIcon>

                    <Modal.Header>Principal Investigator</Modal.Header>
                    <Modal.Content image scrolling>
                    <Image
                        
                        src='../images/team/Glaser.jpg'
                        height='160'
                    />

                    <Modal.Description>
                        <Header>Dr. Steven D. Glaser</Header>
                        <Icon name='mail' /><a href='mailto:glaser@berkeley.edu'>glaser@berkeley.edu</a>
                        <p style={{marginTop:'1em'}}>Dr. Steve is the Principal Investigator of this project in University of California, Berkeley.</p>
                        <p>He is a Professor of Systems Engineering in the Department of Civil and Environmental Engineering, UC Berkeley and a Distinguished Affiliated Professor in Technical University, Munich.</p>
                        <p>Dr. Steve holds a PhD in Civil Engineering, MSc degree in Civil Engineering, and BSc degree in Civil Engineering, all from University of Texas at Austin. He also holds a BA degree in Philosophy from Clark University at Worcester, Massachusetts.</p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Grid.Column>

            {/* ******************************************************************************** */}
            <Grid.Column>
                <Modal trigger={
                    <Item.Group>
                    <Item>
                    <Item.Image size='tiny' src='../images/team/Oroza.jpg'/>

                    <Item.Content>
                        <Item as='a'>Carlos A. Oroza</Item>
                        <p style={{fontStyle:'italic'}}>Project Collaborator</p>
                    </Item.Content>
                    </Item>
                    </Item.Group>
                } closeIcon>

                    <Modal.Header>Project Collaborator</Modal.Header>
                    <Modal.Content image scrolling>
                    <Image
                        
                        src='../images/team/Oroza.jpg'
                        height='160'
                    />

                    <Modal.Description>
                        <Header>Dr. Carlos A. Oroza</Header>
                        <Icon name='mail' /><a href='mailto:coroza@berkeley.edu'>coroza@berkeley.edu</a>
                        <p style={{marginTop:'1em'}}>Dr. Carlos, who is Dr. Steve's postdoc, is also a Project Collaborator.</p>
                        <p>He holds a PhD in Systems Engineering, MSc degree in Systems Engineering, and BSc degree in Mechanical Engineering, all from University of California, Berkeley</p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Grid.Column>

            {/* ******************************************************************************** */}
            <Grid.Column>
                <Modal trigger={
                    <Item.Group>
                    <Item>
                    <Item.Image size='tiny' src='../images/team/default.jpg'/>

                    <Item.Content>
                        <Item as='a'>Maurice A. Duka</Item>
                        <p style={{fontStyle:'italic'}}>Project Staff (L3)</p>
                    </Item.Content>
                    </Item>
                    </Item.Group>
                } closeIcon>

                    <Modal.Header>Project Staff (L3)</Modal.Header>
                    <Modal.Content image scrolling>
                    <Image
                        
                        src='../images/team/default.jpg'
                        height='160'
                    />

                    <Modal.Description>
                        <Header>Engr. Maurice A. Duka</Header>
                        <Icon name='mail' /><a href='mailto:maduka@up.edu.ph'>maduka@up.edu.ph</a>
                        <p style={{marginTop:'1em'}}></p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Grid.Column>

            {/* ******************************************************************************** */}
            <Grid.Column>
                <Modal trigger={
                    <Item.Group>
                    <Item>
                    <Item.Image size='tiny' src='../images/team/Fajardo.jpg'/>

                    <Item.Content>
                        <Item as='a'>Arthur A. Fajardo</Item>
                        <p style={{fontStyle:'italic'}}>Project Staff (L3)</p>
                    </Item.Content>
                    </Item>
                    </Item.Group>
                } closeIcon>

                    <Modal.Header>Project Staff (L3)</Modal.Header>
                    <Modal.Content image scrolling>
                    <Image
                        
                        src='../images/team/Fajardo.jpg'
                        height='160'
                    />

                    <Modal.Description>
                        <Header>Dr. Arthur A. Fajardo</Header>
                        <Icon name='mail' /><a href='mailto:alfajardo@up.edu.ph'>alfajardo@up.edu.ph</a>
                        <p style={{marginTop:'1em'}}>Dr. Arthur L. Fajardo is the Project Staff/Study Leader for the pilot-testing of the wireless sensor network (WSN) technology in drip-irrigated upland crop production systems. </p>
                        <p>Previously, Dr. Arthur worked as a University Researcher I from January 2002 to October 2009 in the Land and Water Resources Division (LWRD), Institute of Agricultural Engineering (IAE), College of Engineering and Agro-Industrial Technology (CEAT), University of the Philippines Los Baños (UPLB). In November 2009, he became an Assistant Professor 1 in the Agricultural Machinery Division (AMD), IAE, CEAT, UP Los Baños. He was promoted to Assistant Professor 5 in February 2013 and Associate Professor 2 in April 2016. </p>
                        <p>Dr. Arthur holds a PhD Major in Agricultural Engineering (Tillage) and Minor in Soil Science, MSc degree in Agricultural Engineering Major in Agricultural Engineering (Machinery) and Minor in Land and Water Resources Engineering, and BSc degree in Agricultural Engineering Major in Agricultural Machinery, all from University of the Philippines Los Baños.</p>
                        <p>PUBLICATIONS:</p>
                        <p>Fajardo, A.L. 2017. Puddling Performance of Different Tilling Wheel Designs of the Float-Assisted Tiller in a Laboratory Soil Bin Set-up. Philipp Agric Scientist, 100: 331-336</p>
                        <p>Fajardo, A.L. and D.C. Suministrado. 2015. Puddling characteristics of a single tilling wheel of float-assisted tillers at different blade shapes and wheel slips. Philipp Agric Scientist, 98: 438-445</p>
                        <p>Fajardo, A.L., D.C. Suministrado, E.K. Peralta, P.M. Bato and E.P, Paningbatan Jr. 2015. Effect of blade shape and shaft speed on the performance of a tilling wheel of float-assisted tillers. Philipp Agric Scientist, 98: 73-80</p>
                        <p>Fajardo, A.L., D.C. Suministrado, E.K. Peralta, P.M. Bato and E.P, Paningbatan Jr., 2014. Force and puddling characteristics of the tilling wheel of float-assisted tillers at different lug angle and shaft speed. Soil Till. Res., 140: 118-125 </p>
                        <p>Pangan, R.S., A.L. Fajardo, J.C.S. Deanon, D.C. Suministrado and R.K.B. Gallegos. 2013. Design and Development of the AMDP Cassava (Manihot esculenta L.) Granulator. Philippine Journal of Agricultural and Biosystems Engineering, 10: 23-32</p>
                        <p>David, W.P., M.F. delos Reyes, M.G. Villano, A.L. Fajardo. 2012. “Faulty Design Parameters and Criteria of Farm Water Requirements Result in Poor Performance of Canal Irrigation Systems in Ilocos Norte, Philippines”. The Philippine Agricultural Scientist, Vol. 95 No. 2, 199-208 </p>
                        <p>David, W.P., M.F. delos Reyes, M.G. Villano, A.L. Fajardo. 2012. “Design Shortcomings of the Headwork and Water Distribution and Control Facilities of the Canal Irrigation Systems in Ilocos Norte, Philippines”. The Philippine Agricultural Scientist, Vol. 95 No. 1, 64-78 </p>
                        <p>Fajardo, A.L., R.M.C. Amongo, M.C. Petingco, and M.E.C. Panganiban. 2011. Performance Evaluation of a Pico-hydro Power Unit. Philippine Journal of Agricultural and Biosystems Engineering, 9: 41-50</p>
                        <p>Catriz, R.L., R.M.C. Amongo, A.L. Fajardo, and C.B. Juan. 2011. Analysis on the Voltage Drop of Off-Grid Single Wire Earth Return (SWER) Distribution Line and its Potential Applications in a Micro-hydro System. Philippine Journal of Agricultural and Biosystems Engineering, 9: 29-40</p>
                        <p>Fajardo, A.L. and D.C. Suministrado. 2009. Evaluation of the System Efficiencies of Different Pump-Primemover Combinations for Shallow Tubewell Irrigation. Philippine Journal of Agricultural and Biosystems Engineering, 7: 36-50</p>
                        <p>Fajardo, A.L., W.P. David, M.G. Villano, F.Y. Paras, Sr. and G.R. Dimasuay. 2008. The DA-UPLB Drilling Rig Model II. Philippine Journal of Agricultural and Biosystems Engineering, 6: 57-69</p>
                        <p>David, W.P., M.F. delos Reyes, K.L. Millare, A.L. Fajardo. 2007. “Relative Vulnerability of the Different Provinces of the Philippines to El Niño-Induced Droughts of Various Magnitudes”. The Philippine Agricultural Scientist, Vol. 90 No. 4, 315-330</p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Grid.Column>
            {/* ******************************************************************************** */}
            <Grid.Column>
                <Modal trigger={
                    <Item.Group>
                    <Item>
                    <Item.Image size='tiny' src='../images/team/Gonzales.jpg'/>

                    <Item.Content>
                        <Item as='a'>Jeffrey A. Gonzales</Item>
                        <p style={{fontStyle:'italic'}}>Project Staff (L3)</p>
                    </Item.Content>
                    </Item>
                    </Item.Group>
                } closeIcon>

                    <Modal.Header>Project Staff (L3)</Modal.Header>
                    <Modal.Content image scrolling>
                    <Image
                        
                        src='../images/team/Gonzales.jpg'
                        height='160'
                    />

                    <Modal.Description>
                        <Header>Engr. Jeffrey A. Gonzales</Header>
                        <Icon name='mail' /><a href='mailto:jagonzales7@up.edu.ph'>jagonzales7@up.edu.ph</a>
                        <p style={{marginTop:'1em'}}>Engr. Jeffrey is the Project Staff/Study Leader who supervises and facilitates pilot-testing of the wireless sensor network (WSN) Technology in lowland rice production systems with alternate wetting and drying technology.</p>
                        <p>Previously, Engr. Jeffrey worked as a Process Engineer/Project Engineer in Matten Technologies, Inc. He became a Program Development Associate (PDA) in AUN Accreditation of the BS Agricultural and Biosystems Engineering (BS ABE) Program of Institute of Agricultural Engineering (IAE), College of Engineering and Agro-Industrial Technology (CEAT), University of the Philippines Los Baños (UPLB). Also, he worked as a Project Staff in a UPLB-DOST-PCAARRD Research Project entitled Water Balance and Loss Assessment of the Upper Pampanga River Integrated Irrigation System (UPRIIS) and Magat River Integrated Irrigation System (MRIIS). Currently, he is an Instructor 5 in the Land and Water Resources Division (LWRD), IAE, CEAT, UP Los Baños. </p>
                        <p>Engr. Jeffrey holds a MSc degree in Agricultural Engineering Major in Land and Water Resources Engineering and BSc degree in Agricultural Engineering Major in Agricultural Machinery, both from University of the Philippines Los Baños. When he graduated with his Bachelor's degree in 2011, he has been awarded the CEAT Best Thesis Award for his thesis <i>“Design, Fabrication and Fabricationb of a Prototype Backyard-scale Aquaponics System.”</i></p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Grid.Column>
            {/* ******************************************************************************** */}
            <Grid.Column>
                <Modal trigger={
                    <Item.Group>
                    <Item>
                    <Item.Image size='tiny' src='../images/team/DelaCruz.jpg'/>

                    <Item.Content>
                        <Item as='a'>Kristelle Marie S. Dela Cruz</Item>
                        <p style={{fontStyle:'italic'}}>Research Associate</p>
                    </Item.Content>
                    </Item>
                    </Item.Group>
                } closeIcon>

                    <Modal.Header>Research Associate</Modal.Header>
                    <Modal.Content image scrolling>
                    <Image
                        
                        src='../images/team/DelaCruz.jpg'
                        height='160'
                    />

                    <Modal.Description>
                        <Header>Engr. Kristelle Marie S. Dela Cruz</Header>
                        <Icon name='mail' /><a href='mailto:kristalamaria@gmail.com'>kristalamaria@gmail.com</a>
                        <p style={{marginTop:'1em'}}>Engr. Kristelle is a Research Associate who develops water balance models and optimum irrigation operation schemes in lowland rice condition under Alternate Wetting and Drying (AWD) and Wireless Sensor Networks(WSN)-based irrigation system in the Philippines.</p>
                        <p>Previously, Engr. Kristelle worked as a Part-time Instructor in Occidental Mindoro State College from November 2016 to March 2017.</p>
                        <p>Engr. Kristelle holds a BSc degree in Agricultural Engineering Major in Land and Water Resources Engineering from University of the Philippines Los Baños. Currently, she is studying MSc degree in Agricultural Engineering in the same university. </p>
                        <p>She is the 3rd placer in the Agricultural Engineer Licensure Examination held in 2016.</p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Grid.Column>
            {/* ******************************************************************************** */}
            <Grid.Column>
                <Modal trigger={
                    <Item.Group>
                    <Item>
                    <Item.Image size='tiny' src='../images/team/Eusebio.png'/>

                    <Item.Content>
                        <Item as='a'>Marck Ferdie V. Eusebio</Item>
                        <p style={{fontStyle:'italic'}}>Research Associate</p>
                    </Item.Content>
                    </Item>
                    </Item.Group>
                } closeIcon>

                    <Modal.Header>Research Associate</Modal.Header>
                    <Modal.Content image scrolling>
                    <Image
                        
                        src='../images/team/Eusebio.png'
                        height='160'
                    />

                    <Modal.Description>
                        <Header>Engr. Marck Ferdie V. Eusebio</Header>
                        <Icon name='mail' /><a href='mailto:mfveusebio@gmail.com'>mfveusebio@gmail.com</a>
                        <p style={{marginTop:'1em'}}>Engr. Ferdie is a Research Associate who works on the application of Wireless Sensor Networks-Information System (WSN-IS) technology in drip irrigated upland crop production systems, specifically on the irrigation and water management aspects of the upland pilot test site.</p>
                        <p>Previously, Engr. Ferdie worked as a Research Associate I and Research Associate II for a UPLB-PhilMech Project, Agricultural Mechanization Development Program in the College of Engineering and Agro-Industrial Technology (CEAT), University of the Philippines Los Baños (UPLB) from April 2012 to August 2012 and September 2012 to January 2014, respectively. He also served as a University Research Associate I for Smarter Approaches to Reinvigorate Agriculture as an Industry in the Philippines (Project SARAI), specifically working on the Water Management Study of the Model Development and Crop Forecasting component in Land and Water Resources Division (LWRD), IAE, CEAT, UPLB from February 2014 to April 2017.</p>
                        <p>Engr. Ferdie holds a BSc degree in Agricultural Engineering Major in Land and Water Resources Engineering from University of the Philippines Los Baños. Currently, he is studying MSc degree in Agricultural Engineering Major in Land and Water Resources Engineering, and Minor in Agrometeorology in the same university. </p>
                        <p>In April 2016, he has been awarded the 2nd Best Poster Paper Presenter in the Soil, Water, and Aquaculture category for his poster, <i>"Design, Development, and Calibration of an Arduino-based Soil Moisture Monitoring System"</i> in the 13th International Agricultural Engineering Conference and Exhibition, 27th Philippine Agricultural Engineering Week, and 66th PSAE Annual National Convention held in Mariano Marcos State University, Batac, Ilocos Norte.</p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Grid.Column>
            {/* ******************************************************************************** */}
            <Grid.Column>
                <Modal trigger={
                    <Item.Group>
                    <Item>
                    <Item.Image size='tiny' src='../images/team/Galoso.jpg'/>

                    <Item.Content>
                        <Item as='a'>John Ruzzel M. Galoso</Item>
                        <p style={{fontStyle:'italic'}}>Research Associate</p>
                    </Item.Content>
                    </Item>
                    </Item.Group>
                } closeIcon>

                    <Modal.Header>Research Associate</Modal.Header>
                    <Modal.Content image scrolling>
                    <Image
                        
                        src='../images/team/Galoso.jpg'
                        height='160'
                    />

                    <Modal.Description>
                        <Header>Mr. John Ruzzel M. Galoso</Header>
                        <Icon name='mail' /><a href='mailto:jruzzm.galoso@gmail.com'>jruzzm.galoso@gmail.com</a>
                        <p style={{marginTop:'1em'}}>Mr. Ruzzel is a Research Associate who works on the Application of Wireless Sensor Networks-Information System (WSN-IS) technology on lowland rice production systems with Alternate Wetting and Drying technology (AWD), specifically on the irrigation and water management aspects of the lowland pilot test site.</p>
                        <p>Previously, Mr. Ruzzel worked as a Science Research Assistant for the Modernization Strategy for the Irrigation Systems in the Philippines: Linking Design, Operation and Water Supply from October 2012 to February 2013. He also served as a Science Research Assistant for the National Greening Program Pilot Baseline Study (Benchmarking) from April 2013 to June 2013. From July 2013 to June 2016, he worked as a Science Research Analyst for the Water Balance and Loss Assessment of the Upper Pampanga River Integrated Irrigation System (UPRIIS) and Magat River Integrated Irrigation System (MARIIS). Then, he served as a University Research Associate I for the Policy Study towards Effective Groundwater Management for Sustainable Agriculture from October 2016 to July 2017. </p>
                        <p>Mr. Ruzzel holds a BSc degree in Agricultural Engineering Major in Land and Water Resources Engineering from University of the Philippines Los Baños.</p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Grid.Column>
            {/* ******************************************************************************** */}
            <Grid.Column>
                <Modal trigger={
                    <Item.Group>
                    <Item>
                    <Item.Image size='tiny' src='../images/team/Sadsad.jpg'/>

                    <Item.Content>
                        <Item as='a'>Jeric S. Sadsad</Item>
                        <p style={{fontStyle:'italic'}}>Research Associate</p>
                    </Item.Content>
                    </Item>
                    </Item.Group>
                } closeIcon>

                    <Modal.Header>Research Associate</Modal.Header>
                    <Modal.Content image scrolling>
                    <Image
                        
                        src='../images/team/Sadsad.jpg'
                        height='160'
                    />

                    <Modal.Description>
                        <Header>Engr. Jeric S. Sadsad</Header>
                        <Icon name='mail' /><a href='mailto:jssadsad@up.edu.ph'>jssadsad@up.edu.ph</a>
                        <p style={{marginTop:'1em'}}>Engr. Jeric is a Research Associate who works on the development of water balance model and optimum irrigation operation schemes for upland cropping system.</p>
                        <p>Previously, Engr. Jeric worked as a University Research Associate l from August 2016 to December 2016 for Phil-LiDAR 2: Detailed Resources Assessment using LiDAR in the Institute of Biological Sciences (IBS), College of Arts and Sciences (CAS), University of the Philippines Los Baños (UPLB). He was promoted to University Research Associate ll  in January 2017 and Research Associate in April 2017.</p>
                        <p>Engr. Jeric holds a BSc degree in Agricultural Engineering Major in Land and Water Resources Engineering from University of the Philippines Los Baños. Currently, he is studying MSc degree in Agricultural Engineering in the same university. </p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Grid.Column>
            {/* ******************************************************************************** */}
            <Grid.Column>
                <Modal trigger={
                    <Item.Group>
                    <Item>
                    <Item.Image size='tiny' src='../images/team/default.jpg'/>

                    <Item.Content>
                        <Item as='a'>Chen Lester R. Wu</Item>
                        <p style={{fontStyle:'italic'}}>Research Associate</p>
                    </Item.Content>
                    </Item>
                    </Item.Group>
                } closeIcon>

                    <Modal.Header>Research Associate</Modal.Header>
                    <Modal.Content image scrolling>
                    <Image
                        
                        src='../images/team/default.jpg'
                        height='160'
                    />

                    <Modal.Description>
                        <Header>Engr. Chen Lester R. Wu</Header>
                        <Icon name='mail' /><a href='mailto:crwu2@up.edu.ph'>crwu2@up.edu.ph</a>
                        <p style={{marginTop:'1em'}}></p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Grid.Column>
            {/* ******************************************************************************** */}
            <Grid.Column>
                <Modal trigger={
                    <Item.Group>
                    <Item>
                    <Item.Image size='tiny' src='../images/team/default.jpg'/>

                    <Item.Content>
                        <Item as='a'>Nikki Alaine P. Panaligan</Item>
                        <p style={{fontStyle:'italic'}}>Research Associate</p>
                    </Item.Content>
                    </Item>
                    </Item.Group>
                } closeIcon>

                    <Modal.Header>Research Associate</Modal.Header>
                    <Modal.Content image scrolling>
                    <Image
                        
                        src='../images/team/default.jpg'
                        height='160'
                    />

                    <Modal.Description>
                        <Header>Engr. Nikki Alaine P. Panaligan</Header>
                        <Icon name='mail' /><a href='mailto:na.panaligan.pcariproject@gmail.com'>na.panaligan.pcariproject@gmail.com</a>
                        <p style={{marginTop:'1em'}}></p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Grid.Column>
            {/* ******************************************************************************** */}
            <Grid.Column>
                <Modal trigger={
                    <Item.Group>
                    <Item>
                    <Item.Image size='tiny' src='../images/team/Cuenco.JPG'/>

                    <Item.Content>
                        <Item as='a'>Justine Erin M. Cuenco</Item>
                        <p style={{fontStyle:'italic'}}>Information Systems Researcher II</p>
                    </Item.Content>
                    </Item>
                    </Item.Group>
                } closeIcon>

                    <Modal.Header>Information Systems Researcher II</Modal.Header>
                    <Modal.Content image scrolling>
                    <Image
                        
                        src='../images/team/Cuenco.JPG'
                        height='160'
                    />

                    <Modal.Description>
                        <Header>Ms. Justine Erin M. Cuenco</Header>
                        <Icon name='mail' /><a href='mailto:jmcuenco@up.edu.ph'>jmcuenco@up.edu.ph</a>
                        <p style={{marginTop:'1em'}}>Ms. Erin is the Information Systems Researcher II for the project. She is in-charge of the development and maintainance of the project website and information system for the wireless sensor network (WSN) technology to be developed for upland and lowland sites. </p>
                        <p>Previously, Ms. Erin worked as a University Research Associate I - Systems Developer for Smarter Approaches to Reinvigorate Agriculture as an Industry in the Philippines (Project SARAI). She belonged to the SARAI Knowledge Portal component in Institute of Computer Science (ICS), College of Arts and Sciences (CAS), University of the Philippines Los Baños (UPLB).</p>
                        <p>Ms. Erin holds a BSc degree in Computer Science from University of the Philippines Los Baños.</p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Grid.Column>
            {/* ******************************************************************************** */}
            <Grid.Column>
                <Modal trigger={
                    <Item.Group>
                    <Item>
                    <Item.Image size='tiny' src='../images/team/default.jpg'/>

                    <Item.Content>
                        <Item as='a'>Romalaine Chrisselle R. Bonoan</Item>
                        <p style={{fontStyle:'italic'}}>University Research Associate II</p>
                    </Item.Content>
                    </Item>
                    </Item.Group>
                } closeIcon>

                    <Modal.Header>University Research Associate II</Modal.Header>
                    <Modal.Content image scrolling>
                    <Image
                        
                        src='../images/team/default.jpg'
                        height='160'
                    />

                    <Modal.Description>
                        <Header>Engr. Romalaine Chrisselle R. Bonoan</Header>
                        <Icon name='mail' /><a href='mailto:rrbonoan1@up.edu.ph'>	rrbonoan1@up.edu.ph</a>
                        <p style={{marginTop:'1em'}}></p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Grid.Column>
            {/* ******************************************************************************** */}
            <Grid.Column>
                <Modal trigger={
                    <Item.Group>
                    <Item>
                    <Item.Image size='tiny' src='../images/team/Martinez.jpg'/>

                    <Item.Content>
                        <Item as='a'>Camille G. Martinez</Item>
                        <p style={{fontStyle:'italic'}}>University Research Associate II</p>
                    </Item.Content>
                    </Item>
                    </Item.Group>
                } closeIcon>

                    <Modal.Header>University Research Associate II</Modal.Header>
                    <Modal.Content image scrolling>
                    <Image
                        
                        src='../images/team/Martinez.jpg'
                        height='160'
                    />

                    <Modal.Description>
                        <Header>Engr. Camille G. Martinez</Header>
                        <Icon name='mail' /><a href='mailto:cgmartinez@up.edu.ph'>cgmartinez@up.edu.ph</a>
                        <p style={{marginTop:'1em'}}>Engr. Camille is a University Research Associate II who assists in the design of drip irrigation system and related matters of upland component.</p>
                        <p>She holds a BSc degree in Agricultural Engineering Major in Land and Water Resources Engineering from University of the Philippines Los Baños.</p>
                        <p>Engr. Camille is the 4th placer in the Agricultural Engineer Licensure Examination held in August 23-24, 2017.</p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Grid.Column>
            {/* ******************************************************************************** */}
            <Grid.Column>
                <Modal trigger={
                    <Item.Group>
                    <Item>
                    <Item.Image size='tiny' src='../images/team/Tejada.jpg'/>

                    <Item.Content>
                        <Item as='a'>Allan T. Tejada Jr.</Item>
                        <p style={{fontStyle:'italic'}}>University Research Associate II</p>
                    </Item.Content>
                    </Item>
                    </Item.Group>
                } closeIcon>

                    <Modal.Header>University Research Associate II</Modal.Header>
                    <Modal.Content image scrolling>
                    <Image
                        
                        src='../images/team/Tejada.jpg'
                        height='160'
                    />

                    <Modal.Description>
                        <Header>Engr. Allan T. Tejada Jr.</Header>
                        <Icon name='mail' /><a href='mailto:attejada@up.edu.ph'>attejada@up.edu.ph</a>
                        <p style={{marginTop:'1em'}}>Engr. Allan is a University Research Associate II who assists in the upland component.</p>
                        <p>He holds a BSc degree in Agricultural Engineering Major in Land and Water Resources Engineering from University of the Philippines Los Baños.</p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Grid.Column>
            {/* ******************************************************************************** */}
            <Grid.Column>
                <Modal trigger={
                    <Item.Group>
                    <Item>
                    <Item.Image size='tiny' src='../images/team/default.jpg'/>

                    <Item.Content>
                        <Item as='a'>Ruth J. delos Reyes</Item>
                        <p style={{fontStyle:'italic'}}>Project Assistant III</p>
                    </Item.Content>
                    </Item>
                    </Item.Group>
                } closeIcon>

                    <Modal.Header>Project Assistant III</Modal.Header>
                    <Modal.Content image scrolling>
                    <Image
                        
                        src='../images/team/default.jpg'
                        height='160'
                    />

                    <Modal.Description>
                        <Header>Ms. Ruth J. delos Reyes</Header>
                        <Icon name='mail' /><a href='mailto:ruthdelosr@gmail.com'>ruthdelosr@gmail.com</a>
                        <p style={{marginTop:'1em'}}></p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Grid.Column>
            {/* ******************************************************************************** */}
            <Grid.Column>
                <Modal trigger={
                    <Item.Group>
                    <Item>
                    <Item.Image size='tiny' src='../images/team/default.jpg'/>

                    <Item.Content>
                        <Item as='a'>Ms. Mary Ann T. Labrador</Item>
                        <p style={{fontStyle:'italic'}}>Project Admin Assistant</p>
                    </Item.Content>
                    </Item>
                    </Item.Group>
                } closeIcon>

                    <Modal.Header>Project Admin Assistant</Modal.Header>
                    <Modal.Content image scrolling>
                    <Image
                        
                        src='../images/team/default.jpg'
                        height='160'
                    />

                    <Modal.Description>
                        <Header>Mary Ann T. Labrador</Header>
                        <Icon name='mail' /><a href='mailto:mary_annetio@hotmail.com'>mary_annetio@hotmail.com</a>
                        <p style={{marginTop:'1em'}}></p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Grid.Column>
        </Grid>
    </Container>
)

export default Team;