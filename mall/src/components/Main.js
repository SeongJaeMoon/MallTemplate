import React from 'react';
import { MDBContainer, MDBRow, MDBCol, Carousel, CarouselInner, CarouselItem, 
View, CarouselCaption, Mask } from 'mdbreact';

class Main extends React.Component {
    render(){
        return(
            <div>
                <Carousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1 main-slide">
                    <CarouselInner>
                    <CarouselItem itemId="1">
                        <View>
                            <img className="d-block w-100 main-slide" src={require('static/main01_1200x800.jpg')} alt="First slide" />
                            <Mask overlay="black-strong" />
                        </View>
                        <CarouselCaption>
                            <h3 className="h3-responsive">맛있는 케익!</h3>
                            <p>디저트는 역시 케익이 최고지요.</p>
                        </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem itemId="2">
                        <View>
                            <img className="d-block w-100 main-slide" src={require('static/main02_1200x800.jpg')} alt="Second slide" />
                            <Mask overlay="black-strong" />
                        </View>
                        <CarouselCaption>
                            <h3 className="h3-responsive">맛있는 치킨!</h3>
                            <p>치킨은 더 말이 필요 없습니다.</p>
                        </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem itemId="3">
                        <View>
                            <img className="d-block w-100 main-slide" src={require('static/main03_1200x800.jpg')} alt="Third slide" />
                            <Mask overlay="black-strong" />
                        </View>
                        <CarouselCaption>
                            <h3 className="h3-responsive">맛있는 아이스크림!</h3>
                            <p>어릴 때 먹던 아이스크림 그 느낌 그대로.</p>
                        </CarouselCaption>
                    </CarouselItem>
                    </CarouselInner>
                </Carousel>
                <div className="main-banner">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol className="content-wrap">
                                <img class="banner-img" src={require('static/banner01_1280x720.jpg')} alt="banner01"/>
                                <p className="content">홍차를 먹어봅시다!</p>
                                <a className="content" href="#"><span>더 알아보기</span></a>
                            </MDBCol>
                            <MDBCol className="content-wrap">
                                <img class="banner-img" src={require('static/banner02_1280x720.jpg')} alt="banner02"/>
                                <p className="content">머핀을 먹어봅시다!</p>
                                <a className="content" href="#"><span>더 알아보기</span></a>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="content-wrap">
                                <img class="banner-img" src={require('static/banner03_1280x720.jpg')} alt="banner03"/>
                                <p className="content">푸딩을 먹어봅시다!</p>
                                <a className="content" href="#"><span>더 알아보기</span></a>
                            </MDBCol>
                            <MDBCol className="content-wrap">
                                <img class="banner-img" src={require('static/banner04_1280x720.jpg')} alt="banner04"/>
                                <p className="content">초콜릿을 먹어봅시다!</p>
                                <a className="content" href="#"><span>더 알아보기</span></a>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </div>
        );
    }
}

export default Main;