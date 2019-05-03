import React from 'react';
import { Box, Flex } from 'rebass';
import Title from '../../title';
import './contact.css';

const contacts = [
    {
        name: "McMurtry College",
        email: "mcmurtry@rice.edu"
    },
    {
        position: "College Coordinator",
        name: "Jackie Carrizales",
        email: "jackie.carrizales@rice.edu"
    },
    {
        position: "Magister",
        name: "Margaret Beier",
        email: "beier@rice.edu"
    },
    {
        position: "Magister",
        name: "Chris Stickney",
        email: "stickney@rice.edu"
    }
]

const Contact = () => (
    <div className="contact-page">
        <Title width={220} title="Contact" />
        <Flex flexWrap='wrap' flexDirection='row' justifyContent='center'>
            {
                contacts.map(({ position, name, email }) => (
                    <Box width={[0.9, 0.3]} className='contact-card-shell' key={`${name}`}>
                        <div className="contact-card">
                            {
                                position !== undefined ? (
                                    <h2 className='contacts-position'>{position}</h2>
                                ) : (
                                        null
                                    )
                            }
                            <h2 className='contacts-name'>{name}</h2>
                            <a href={`mailto:${email}`} style={{textDecoration: 'none'}}>
                                <h2 className='contacts-email'><img src="https://icon.now.sh/arrow/422a4C/14" alt="email" />{' '}{email}</h2>
                            </a>
                        </div>
                    </Box>
                ))
            }
        </Flex>
    </div>
)

export default Contact;