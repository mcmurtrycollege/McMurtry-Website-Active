import React from 'react';
import { Box } from 'rebass';
import Title from '../../title';
import WellbeingCards from './wellbeing_contact_card';
import './wellbeing.css';
import { RHAs } from './wellbeing.json';

const ResidentHealthAdvisors = () => (
    <div className='wellbeing-page'>
        <Title width={300} title="Rice Health Advisors" smallText={true} />
        <Box width={[1, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='wellbeing-description'>
            {RHAs.description}
        </Box>
        <div>
            <WellbeingCards content={RHAs.members} />
        </div>
    </div>
)

export default ResidentHealthAdvisors;