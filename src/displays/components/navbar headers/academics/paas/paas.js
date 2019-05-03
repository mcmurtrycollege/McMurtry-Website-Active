import React from 'react';
import { Box } from 'rebass';
import Title from '../../../title';
import AcademicCards from '../academic_contact_cards';
import { paas_description, head_paas, o_week_paas, year_long_paas } from './paas.json';
import './paas.css';

const PAAs = () => (
    <div className='paas-page'>
        <Title width={300} title="Peer Academic Advisors" smallText={true} />
        <Box width={[1, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='paas-description'>
            {paas_description}
        </Box>
        <div>
            <Box width={320} ml='auto' mr='auto'>
                <h1 className='paas-title'>Head PAAs</h1>
            </Box>
            <AcademicCards content={head_paas} width={300} height={200} />
        </div>
        <div>
            <Box width={320} ml='auto' mr='auto'>
                <h1 className='paas-title'>O-Week Paas</h1>
            </Box>
            <AcademicCards content={o_week_paas} width={340} height={200} />
        </div>
        <div>
            <Box width={320} ml='auto' mr='auto'>
                <h1 className='paas-title'>Year Long PAAs</h1>
            </Box>
            <AcademicCards content={year_long_paas} width={300} height={200} />
        </div>
    </div>
)

export default PAAs;