import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Row, Col} from 'mdbreact';

class Header extends React.Component {
    state = {
        collapseID: "",
        addClass: false
    };
    
    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
    
    toggle = () => {
        const { addClass } = this.state;
        this.setState({
            addClass: !addClass
        });
    }

    render() {
        let displayClass = [""];
        if(this.state.addClass) {
            displayClass.push('multi-dropdown-open');
        }
        return (
            <header>
                <Navbar expand="md" fixed="top">
                    <Collapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                    <NavbarBrand href="#">
                        <img className="main-logo" src={require('static/logo.png')} alt="main-logo"/>
                    </NavbarBrand>
                    <NavItem>
                        <div className={displayClass.join(' ')} onClick={this.toggle}>
                            <span id="multi-menu">이런건 어때요?</span><i class="fa fa-bullhorn mr-3"></i>
                            <div class="img-dropdown animated fadeIn">
                                <Row className="mt-3 text-center">
                                    <Col className="col-md-3 col-lg-3 col-xl-3 mb-r">
                                        <img class="img-fluid rounded-circle shadow-box-example z-depth-5" src={require('static/menus/dessert/dessert01_300x168.jpg')} alt="logo1"/>
                                        <div class="img-dropdown-des">
                                            <h4 class="img-dropdown-title">맛있는 디저트1</h4>
                                            <p>맛있는 디저트입니다.</p>
                                            <a class="view-more btn-outline-danger btn-sm" href="#">Read More</a>
                                        </div>
                                    </Col>
                                    <Col className="col-md-3 col-lg-3 col-xl-3 mb-r">
                                        <img class="img-fluid rounded-circle shadow-box-example z-depth-5" src={require('static/menus/dessert/dessert02_300x168.jpg')} alt="logo1"/>
                                        <div class="img-dropdown-des">
                                            <h4 class="img-dropdown-title">맛있는 디저트2</h4>
                                            <p>맛있는 디저트입니다.</p>
                                            <a class="view-more btn-outline-danger btn-sm" href="#">Read More</a>
                                        </div>
                                    </Col>
                                    <Col className="col-md-3 col-lg-3 col-xl-3 mb-r">
                                        <img class="img-fluid rounded-circle shadow-box-example z-depth-5" src={require('static/menus/dessert/dessert03_300x168.jpg')} alt="logo1"/>
                                        <div class="img-dropdown-des">
                                            <h4 class="img-dropdown-title">맛있는 디저트3</h4>
                                            <p>맛있는 디저트입니다.</p>
                                            <a class="view-more btn-outline-danger btn-sm" href="#">Read More</a>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </NavItem>
                        <NavbarNav right className="nav-right">
                            <NavItem>
                                <NavLink className="waves-effect waves-light" to="#!">
                                로그인<i className="icon">&#xe801;</i></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="waves-effect waves-light" to="#!">회원가입</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="waves-effect waves-light" to="#!">마이페이지</NavLink>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                    <NavbarToggler
                        onClick={this.toggleCollapse("navbarCollapse3")}
                    />
                </Navbar>
            </header>
        );
    }
}

export default Header;