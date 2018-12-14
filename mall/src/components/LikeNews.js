import React from 'react';
import PropTypes from "prop-types";
import Slider from "react-slick";
import Article from './Article';

class LikeNews extends React.Component{
    state={
        newsTemplate: null
    }
    render(){
        const { test_news } = this.props.data;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: "linear"
        }
        if (test_news.length > 0) { 
            this.newsTemplate = test_news.map(function(item, index) {
				return (
                    <div key={index}>
                        <Article item={item}/>
                    </div>
                );
			})
		} else {
			this.newsTemplate = <p>추천 상품이 비어있습니다.</p>
        }
        return(
            <div className='news'>
                <h2 className='news-count'>사용자 추천</h2>
                <Slider {...settings}>
                    {this.newsTemplate}
                </Slider>
            </div>
        );
    }
}

LikeNews.propTypes = {
    test_news: PropTypes.array.isRequired
}


export default LikeNews;