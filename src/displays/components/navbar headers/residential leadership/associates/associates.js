import React from 'react';
import { Box, Flex, Image } from 'rebass';
import Title from '../../../title';
import './associates.css';
import associates from './associates_content';

class AssociateCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { visible: false }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ visible: !this.state.visible })
    }

    render() {
        let style = { overflow: 'hidden', transition: 'max-height 0.5s ease-in-out' }
        style.maxHeight = this.state.visible ? ('500px') : ('0')
        return (
            <Box className='associate-card' width={0.9} onClick={this.handleClick}>
                <div className='associate-display'>
                    <h2>{this.props.name}</h2>
                </div>
                <div style={style}>
                    <p><strong>Career/Profession: </strong>{this.props.career}</p>
                    <p><strong>Bio: </strong>{this.props.bio}</p>
                    <p><strong>Favorite Movie/TV Show: </strong>{this.props.movie_tv}</p>
                    <p><strong>Hobbies: </strong>{this.props.hobbies}</p>
                    <p><strong>Fun Fact: </strong>{this.props.fact}</p>
                </div>
            </Box>
        )
    }
}

const Associates = () => (
    <div className='associates-page'>
        <Title title={'Associates'} width={240} smallText={false} />
        <Flex justifyContent='center' flexDirection='row' flexWrap='wrap' style={{marginTop: '5%'}}>
            <Flex flexDirection='column' width={[1, 0.45]}>
                {
                    associates.slice(0, associates.length / 2).map(({ name, career, bio, movie_tv, hobbies, fact }) => (
                        <AssociateCard key={`${name}`} name={name} career={career} bio={bio} movie_tv={movie_tv} hobbies={hobbies} fact={fact} />
                    ))
                }
            </Flex>
            <Flex flexWrap='wrap' flexDirection='column' width={[1, 0.45]}>
                {
                    associates.slice(associates.length / 2, associates.length).map(({ name, career, bio, movie_tv, hobbies, fact }) => (
                        <AssociateCard key={`${name}`} name={name} career={career} bio={bio} movie_tv={movie_tv} hobbies={hobbies} fact={fact} />
                    ))
                }
            </Flex>
        </Flex>
    </div>
)

export default Associates;