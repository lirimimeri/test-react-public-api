import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions/actions';
import { withRouter } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css'
import ToggleFullscreen from '../Common/ToggleFullscreen';
import HeaderRun from './Header.run'

class Header extends Component {

    componentDidMount() {
        HeaderRun();
    }

    toggleUserblock = e => {
        e.preventDefault();
        this.props.actions.toggleSetting('showUserBlock');
    }

    auth = e => {
        e.preventDefault()
        if (this.props.isLogedIn) {
            this.props.onLogout()
        }
        
        this.props.history.push('/auth')
    }

    toggleCollapsed = e => {
        e.preventDefault()
        this.props.actions.toggleSetting('isCollapsed');
        this.resize()
    }

    toggleAside = e => {
        e.preventDefault()
        this.props.actions.toggleSetting('asideToggled');
    }

    resize () {
        // all IE friendly dispatchEvent
        var evt = document.createEvent('UIEvents');
        evt.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(evt);
        // modern dispatchEvent way
        // window.dispatchEvent(new Event('resize'));
    }

    render() {
        let authText
        if (this.props.location.pathname !== '/auth') {
            
            authText = (
                <a className="nav-link" href="" onClick={this.auth}>
                    <em className="fas fa-user">{this.props.isLogedIn ? 'log out' : 'login'}</em>
                </a>
            )
        }
        

        return (
            <header className="topnavbar-wrapper">
                { /* START Top Navbar */ }
                <nav className="navbar topnavbar">
                    { /* START navbar header */ }
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#/">
                            {/* <div className="brand-logo">
                                <img className="img-fluid" src="img/logo.png" alt="App Logo" />
                            </div> */}
                            {/* <div className="brand-logo-collapsed">
                                <img className="img-fluid" src="img/logo-single.png" alt="App Logo" />
                            </div> */}
                        </a>
                    </div>
                    { /* END navbar header */ }

                    { /* START Left navbar */ }
                    <ul className="navbar-nav mr-auto flex-row">
                        <li className="nav-item">
                            { /* Button used to collapse the left sidebar. Only visible on tablet and desktops */ }
                            <a href="" className="nav-link d-none d-md-block d-lg-block d-xl-block" onClick={ this.toggleCollapsed }>
                                <em className="fas fa-bars"></em>
                            </a>
                            { /* Button to show/hide the sidebar on mobile. Visible on mobile only. */ }
                            <a href=""  className="nav-link sidebar-toggle d-md-none" onClick={ this.toggleAside }>
                                <em className="fas fa-bars"></em>
                            </a>
                        </li>
                        { /* START User avatar toggle */ }
                        <li className="nav-item d-none d-md-block">
                            <a  className="nav-link" onClick={ this.toggleUserblock }>
                                <em className="icon-user"></em>
                            </a>
                        </li>
                        { /* END User avatar toggle */ }
                    </ul>
                    { /* END Left navbar */ }
                    { /* START Right Navbar */ }
                    <ul className="navbar-nav flex-row">
                        
                        { /* Fullscreen (only desktops) */ }
                        <li className="nav-item d-none d-md-block">
                            <ToggleFullscreen className="nav-link"/>
                        </li>
                        { /* START Alert menu */ }
                        
                        { /* START Offsidebar button */ }
                        <li className="nav-item">
                            { authText }
                        </li>
                        { /* END Offsidebar menu */ }
                    </ul>
                    { /* END Right Navbar */ }

                    { /* START Search form */ }
                    <form className="navbar-form" role="search" action="search.html">
                       <div className="form-group">
                          <input className="form-control" type="text" placeholder="Type and hit enter ..."/>
                          <div className="fa fa-times navbar-form-close" data-search-dismiss=""></div>
                       </div>
                       <button className="d-none" type="submit">Submit</button>
                    </form>
                    { /* END Search form */ }
                </nav>
                { /* END Top Navbar */ }
            </header>
        );
    }
}

Header.propTypes = {
    actions: PropTypes.object,
    settings: PropTypes.object
};

const mapStateToProps = state =>{
    return { 
        settings: state.settings,
        isLogedIn: state.loginData.idToken !== null,
        email: state.loginData.email,
    }
} 
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch),
        onLogout: () => dispatch(actions.logout()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Header));