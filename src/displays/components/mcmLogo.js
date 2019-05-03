import React from 'react';
import { Box, Image } from 'rebass';
import { Link } from 'react-router-dom';
import './mcmLogo.css';

import mcmCrest from '../static/mcmCrest.svg';

const McmLogo = () => (
    <div>
        <div className='mcm-crest' id='mcm-header'>
            <Box width={[0.7,0.5, 0.5, 0.3]} ml='auto' mr='auto' pt={0.1}>
                <Link to='/'>
                    <Image src={mcmCrest} alt="McMurtry Crest" />
                </Link>
            </Box>
        </div>
    </div>
)

export default McmLogo;