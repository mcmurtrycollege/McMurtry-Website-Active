import React from 'react';
import { Box, Flex } from 'rebass';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Cards from '../../../contactcards';
import Title from '../../../title';
import { internal, external, social } from './committees.json';
import './committees.css';
const divisions = [internal, external, social];

const division_names = ["Internal Committees", "External Committees", "Social Committees"];

export default class Committees extends React.Component {
    constructor(props) {
        super(props);
        this.state = { current: 0 };
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(index) {
        this.setState({ current: index })
    }

    render() {
        let dots = [];
        for (let i = 0; i < divisions[this.state.current].length; i++) {
            dots.push(
                <Dot slide={i} className="dot-style" key={`dot${i}`} />
            )
        }
        let h;
        if (window.screen.width < 600) {
            h = 370
        } else if (window.screen.width < 1150) {
            h = 140
        } else {
            h = 60
        }
        return (
            <div className="committee-page">
                <Title width={280} title="Committees" />
                <div>
                    <Flex justifyContent='center' flex='wrap' flexDirection='row'>
                        {
                            division_names.map(division => (
                                <Box key={division}>
                                    <div onClick={() => this.handleEvent(division_names.indexOf(division))}
                                        className={this.state.current === division_names.indexOf(division) ? "active-key" : "inactive-key"}>
                                        <p className='key'>{`${division}`}</p>
                                    </div>
                                </Box>
                            ))
                        }
                    </Flex>
                </div>
                <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={h} totalSlides={divisions[this.state.current].length}>
                    <div className='wide-btns'>
                        <ButtonBack className='wide-back-slide-btn'><img src="https://icon.now.sh/chevron/2B2F3A/left/99" alt="<" /></ButtonBack>
                        <ButtonNext className='wide-next-slide-btn'><img src="https://icon.now.sh/chevron/2B2F3A/99" alt=">" /></ButtonNext>
                    </div>
                    <div className='narrow-btns'>
                        <ButtonBack className='narrow-back-slide-btn'><img src="https://icon.now.sh/chevron/2B2F3A/left/40" alt="<" /></ButtonBack>
                        <ButtonNext className='narrow-next-slide-btn'><img src="https://icon.now.sh/chevron/2B2F3A/40" alt=">" /></ButtonNext>
                    </div>
                    <Flex justifyContent='center' flexDirection='row'>
                        {dots}
                    </Flex>
                    <Slider>
                        {
                            divisions[this.state.current].map((committee) => (
                                <Slide index={divisions[this.state.current].indexOf(committee)} key={`${committee.name}`} >
                                    <div>
                                        <Box width={[0.9, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='committee-description'>
                                            <h1 className='division-title'>{committee.name}</h1>
                                            {committee.description}
                                        </Box>
                                        <Box width={165} className='members-title' ml='auto' mr='auto'>
                                            <h1 className='members-title-content'>Members</h1>
                                        </Box>
                                        <Cards content={committee.members} height={110} width={240} />
                                    </div>
                                </Slide>
                            ))
                        }
                    </Slider>
                </CarouselProvider>
            </div>
        )
    }
}