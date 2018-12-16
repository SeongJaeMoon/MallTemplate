import React from 'react';
import { Container } from 'mdbreact';
import News from './News';
import LikeNews from './LikeNews';

class Recommand extends React.Component{
    
    static defaultProps = {
        test_news:[
            {
                image:"dish01_300x168.jpg",
                title:"치킨",
                subtitle:"치느님은 사랑입니다.",
                link:"https://www.google.com"
            },{
                image:"dish02_300x168.jpg",
                title:"스테이크",
                subtitle:"스테이크는 사랑입니다.",
                link:"https://www.google.com"
            },
            {
                image:"dish03_300x168.jpg",
                title:"피느님",
                subtitle:"단언컨데 피자는 사랑입니다.",
                link:"https://www.google.com"
            },
            {
                image:"dish04_300x168.jpg",
                title:"치느님2",
                subtitle:"치킨은 사랑이니까 하나 더!",
                link:"https://www.google.com"
            },
            {
                image:"dish05_300x168.jpg",
                title:"리조또",
                subtitle:"느끼한게 땡길 때는 바로 이거!",
                link:"https://www.google.com"
            }
        ]
    }

    render(){
        return(
            <Container>
                <News data={this.props}/>
                <LikeNews data={this.props}/> 
            </Container>
        );
    }
}

export default Recommand;