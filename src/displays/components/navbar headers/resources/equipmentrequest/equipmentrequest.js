import React from 'react';
import { Box } from 'rebass';
import Title from '../../../title';
import './equipmentrequest.css';


const EquipmentRequest = () => (
    <div className='equipment-request-page'>
        <Title width={360} title="Equipment Request" />
        <Box width={300} ml='auto' mr='auto' className='tech-request'>
            <h3>
                Please direct all technology and equipment requests to <a href='mailto:mcmurtrytech@gmail.com' className='tech-request-link'>mcmurtrytech@gmail.com</a>.
            </h3>
        </Box>

    </div>
)

export default EquipmentRequest;
