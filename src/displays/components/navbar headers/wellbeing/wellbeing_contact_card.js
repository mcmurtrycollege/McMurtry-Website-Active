import React from 'react';
import { Box, Flex } from 'rebass';
import './wellbeing_contact_cards.css';

const WellbeingContactCard = props => (
    <Box className='wellbeing-card' width={240}>
        <div className="wellbeing-card-content">
            <h2 className="wellbeing-card-name">{props.name}</h2>
            <h3 className='wellbeing-card-phone'>
                <img src="https://icon.now.sh/call/422a4C/20" alt="phone" />
                {' '}{props.phone}
            </h3>
            <h2 className='wellbeing-card-room'>
                Room: {props.room}
            </h2>
        </div>
    </Box>
)

const WellbeingCards = props => (
    <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto' mt={30}>
        <Flex flexWrap='wrap' flexDirection='row' justifyContent='center'>
            {
                props.content.map(({ name, phone, room }) => (
                    <WellbeingContactCard key={name} name={name} phone={phone} room={room} />
                ))
            }
        </Flex>
    </Box>
)

export default WellbeingCards;