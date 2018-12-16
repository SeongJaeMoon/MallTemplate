import React from 'react';
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component{
    render(){
        return(
            <Footer id="footer" color="black" className="unique-color-dark font-small pt-0 mt-4">
            <div className="info-color-dark text-center py-4">
                <a href="#" className="border rounded p-2 px-3 mr-4 d-none d-md-inline-block">
                    newsletter<i className="fa fa-envelope white-text ml-2"></i>
                </a>
                <a href="#" className="border rounded p-2 px-3 mr-4 d-none d-md-inline-block">
                    program<i className="fa fa-money white-text ml-2"></i>
                </a>
                <a href="#" className="border rounded p-2 px-3 mr-4 d-none d-md-inline-block">
                    contact<i className="fa fa-envelope white-text ml-2"></i>
                </a>
                <a href="#" target="_blank">
                    <i className="fa fa-github white-text mr-4"></i>
                </a>
                <a href="#" target="_blank">
                    <i className="fa fa-facebook white-text mr-4"></i>
                </a>
                <a href="#" target="_blank">
                    <i className="fa fa-instagram white-text mr-4"></i>
                </a>
            </div>
            <Container className="mt-5 mb-4 text-center text-md-left">
                <Row className="mt-3">
                    <Col className="col-md-3 col-lg-4 col-xl-3 mb-r">
                        <h6 className="spacing font-weight-bold">
                            <strong>Useful links</strong>
                        </h6>
                        <hr className="info-color mb-4 mt-0 d-inline-block mx-auto" style={{width:60}}/>
                        <p><a>Hey</a></p>
                        <p><a>Hey</a></p>
                        <p><a>Hey</a></p>
                    </Col>
                    <Col className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-r">
                        <h6 className="spacing font-weight-bold">
                            <strong>Useful links</strong>
                        </h6>
                        <hr className="info-color mb-4 mt-0 d-inline-block mx-auto" style={{width:60}}/>
                        <p><a>Hey</a></p>
                        <p><a>Hey</a></p>
                        <p><a>Hey</a></p>
                    </Col>
                    <Col className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-r">
                        <h6 className="spacing font-weight-bold">
                            <strong>Useful links</strong>
                        </h6>
                        <hr className="info-color mb-4 mt-0 d-inline-block mx-auto" style={{width:60}}/>
                        <p><a>Hey</a></p>
                        <p><a>Hey</a></p>
                        <p><a>Hey</a></p>
                    </Col>
                    <Col className="col-md-4 col-lg-3 col-xl-3">
                        <h6 className="spacing font-weight-bold">
                            <strong>Useful links</strong>
                        </h6>
                        <hr className="info-color mb-4 mt-0 d-inline-block mx-auto" style={{width:60}}/>
                        <p><a><i className="fa fa-envelope mr-3"></i>contact@gmail.com</a></p>
                        <p><a><i className="fa fa-users mr-3"></i>Hey</a></p>
                        <p><a><i className="fa fa-bullhorn mr-3"></i>Hey</a></p>
                        <p><a><i className="fa fa-bullhorn mr-3"></i>Hey</a></p>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-center py-3">
                <Container fluid>
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="#">Supermoon All rights reserved.</a>
                </Container>
            </div>
        </Footer>
        );
    }
}

export default FooterPage;