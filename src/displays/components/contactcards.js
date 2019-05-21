import React from 'react';
import { Box, Flex } from 'rebass';
import './contactcards.css';

const Card = props => (
    < Box className='position-card' width={props.width} >
        <div className="position-card-content" style={{ height: props.height }}>
            {
                props.position !== undefined ? (
                    <h2 className="position">{props.position}</h2>
                ) : (
                        null
                    )
            }
            <h2 className="name">{props.name}</h2>
            {
                props.phone !== undefined ? (
                    <h3 className="contact-phone"><img src="https://icon.now.sh/call/422a4C/16" alt="phone" />{' '}{props.phone}</h3>
                ) : (
                        null
                    )
            }
            {
                props.email !== undefined ? (
                    <a href={`mailto:${props.email}`} className='contact'>
                        <h3 className="contact-email"><img src="https://icon.now.sh/arrow/422a4C/8" alt="email" />{' '}{props.email}</h3>
                    </a>
                ) : (
                        null
                    )
            }
            {
                props.year !== undefined ? (
                    <h4 className='year'>Year: {props.year}</h4>
                ) : (
                        null
                    )
            }
        </div>
    </Box >
)

const Cards = props => (
    <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto'>
        <Flex flexWrap='wrap' flexDirection='row' justifyContent='center'>
            {
                props.content.map(({ position, name, year, email, phone }) => (
                    <Card height={props.height} width={props.width} key={name} position={position} name={name} year={year} email={email} phone={phone} />
                ))
            }
        </Flex>
    </Box>
)

export default Cards;