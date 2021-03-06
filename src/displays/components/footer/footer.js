import React from 'react';
import { Box, Image } from 'rebass';
import mcmCrest from '../../static/mcmCrest.svg';

import './footer.css';

const Footer = () => (
    <div className='footer-container'>
        <Box width={[0.4, 0.3, 0.3, 0.2]}  ml='auto' mr='auto'>
            <Image src={mcmCrest} alt="McMurtry Crest" />
        </Box>
        <p className='footer-item'>McMurtry College · MS 761 · Rice University</p>
        <p className='footer-item'>1605 Rice Blvd. · Houston, TX 77005</p>
        <p className='footer-item'>Phone: (713) 348-4583 · Fax: (713) 348-3135</p>
        <p></p>
        <p className='footer-item'>Copyright © McMurtry College, 2019</p>
    </div>
)

export default Footer;