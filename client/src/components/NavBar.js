import React, { Component } from 'react'
import white_logo from './white-png.png';
import black_logo from './black_logo.svg';
import { Link } from 'react-router-dom';
// import white_logo from './white-logo.svg';
import LanguageIcon from '@mui/icons-material/Language';
export default class NavBar extends Component {

    render() {
        const { lang } = this.props
        return (
            // <div className="nav-bar">

            //     {/*Start Logo */}
            //     <div className="logo-nav">
            //     <a href="http://139.59.215.224:5000/trackvac-api/home">
            //             <img src="../images/white png logo.png" alt="TrackVac logo" width="150rem" />
            //         </a>
            //     </div>
            //     {/*End Logo */}
            //   <a href="http://139.59.215.224:5000/trackvac-api/home">
            //       Home
            //   </a>




            // </div>
            <div className="topnav">
                <div className="logo-nav">
                    <a href="http://139.59.215.224:5000/trackvac-api/home">
                        <img href="http://139.59.215.224:5000/trackvac-api/home" src={white_logo} alt="TrackVac logo" width="150rem" />
                    </a>
                </div>
                <div className="links">
                    <a href="http://139.59.215.224:5000/trackvac-api/home">
                        Home
                    </a>
                    <a className="active" href="/reviews">Reviews</a>
                    {/* <a href="/questions">Questions</a> */}
                    <div onClick={this.props.handleLang} className="lang-btn">
                        <LanguageIcon style={{ width: '25px', height: '25px' }} />
                        <div style={{ display: 'flex', gap: '2px' }}>
                            <p style={{ color: lang ? 'white' : 'rgb(209, 209, 209)' }} >ENG </p>
                            <p> | </p>
                            <p style={{ color: !lang ? 'white' : 'rgb(209, 209, 209)' }} > عربى</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}