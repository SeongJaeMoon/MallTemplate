import React from 'react';
import PropTypes from "prop-types";
import Slider from "react-slick";
import Article from './Article';

class News extends React.Component{
    
    state = {
        newsTemplate: undefined,
        windowWidth: false
    }

    handleResize = () => this.setState({
        windowWidth: window.innerWidth <= 800 ? true : false
    });
 
    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    render(){
        const { test_news } = this.props.data;
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: "linear"
        }
        console.log(this.state.windowWidth);
        if(this.state.windowWidth){
            settings.slidesToShow = 1;
        }else{
            settings.slidesToShow = 3;
        }
        if (test_news.length > 0) { 
            this.newsTemplate = test_news.map((item, index) => (
                <div key={index}>
                    <Article item={item}/>
                </div>
            ));
		} else {
			this.newsTemplate = <p>추천 상품이 비어있습니다.</p>
        }
        return(
            <div className='news'>
                <h2 className='news-count'>오늘의 추천</h2>
                <Slider {...settings}>
                    {this.newsTemplate}
                </Slider>
            </div>
        );
    }
}

News.propTypes = {
    test_news: PropTypes.array.isRequired
}

export default News;