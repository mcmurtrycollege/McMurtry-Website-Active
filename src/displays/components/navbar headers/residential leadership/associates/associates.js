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
            <Box width={1} onClick={this.handleClick}>
                <div className='associate-card'>
                    <Box ml='auto' mr='auto' width={this.props.imageWidth}>
                        <Image src={this.props.image} alt='' />
                    </Box>
                    <div className='associate-display'>
                        <h2 style={{ fontWeight: 'normal' }}>{this.props.name}</h2>
                    </div>
                    <div style={style}>
                        <p><strong>Career/Profession: </strong>{this.props.career}</p>
                        <p><strong>Bio: </strong>{this.props.bio}</p>
                        <p><strong>Favorite Movie/TV Show: </strong>{this.props.movie_tv}</p>
                        <p><strong>Hobbies: </strong>{this.props.hobbies}</p>
                        <p><strong>Fun Fact: </strong>{this.props.fact}</p>
                    </div>
                </div>
            </Box>
        )
    }
}

const Associates = () => {
    let columns = [[], []];
    for (let i = 0; i < associates.length; i++) {
        columns[i % 2].push(
            <AssociateCard key={`${associates[i].name}`} name={associates[i].name}
                career={associates[i].career} bio={associates[i].bio} movie_tv={associates[i].movie_tv}
                hobbies={associates[i].hobbies} fact={associates[i].fact} image={associates[i].image} 
                imageWidth={associates[i].imageWidth} />
        )
    }
    return (
        <div className='associates-page'>
            <Title title={'Associates'} width={240} smallText={false} />
            <Flex justifyContent='center' flexDirection='row' flexWrap='wrap' style={{ marginTop: '3%' }}>
                {
                    columns.map(column => (
                        <Flex flexDirection='column' width={[1, 0.4]} key={`C+${columns.indexOf(column)}`}>
                            {column}
                        </Flex>
                    ))
                }
            </Flex>
        </div>
    )
}

export default Associates;