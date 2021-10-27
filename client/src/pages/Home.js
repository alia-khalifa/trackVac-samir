
import React, { Component } from 'react' ;
export default class Home extends Component {
    render() {
        return (
            <div>
                <div classname="row ">
                    <div classname="medium-12 columns">
                        <header id="header">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="fa fa-bars" />
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                        </button>
                                        {/*Start Logo */}
                                        <div className="logo-nav">
                                            <a href="index.html">
                                                <img src="images/white png logo.png" alt="TrackVac logo" width="150rem" />
                                            </a>
                                        </div>
                                        {/*End Logo */}
                                        <div className="clear-toggle" />
                                        <div id="main-menu" className="collapse scroll navbar-right">
                                            <ul className="nav">
                                                <li className="active"> <a href="#home">Home</a> </li>
                                                <li> <a href="#about">About</a> </li>
                                                <li> <a href="#">Reviews</a> </li>
                                                <li> <a href="#">Questions</a> </li>
                                            </ul>
                                        </div>{/* end main-menu */}
                                    </div>
                                </div>
                            </div>
                            <div id="popUp">
                                <div className="close" id="close">x</div>
                                <div id="new"><span>Meet our sponsor!</span></div>
                                <h2>
                                    <img src="images/logo-ieee-hac.png" alt width="90px" height="55px" /></h2>
                                <p style={{ fontSize: 10, marginBottom: 0, lineHeight: 15 }}>The IEEE HAC provides a suite of resources that inspire and enable IEEE volunteers around the world to carry out and support impactful humanitarian technology and sustainable development activities at the local level.</p>
                                <br />
                                <a href="https://hac.ieee.org/" target="_blank" className="button">More Info</a>
                            </div>
                            <div id="plus"><span><i className="fa fa-angle-double-right" aria-hidden="true" /></span></div>
                        </header>
                        <div id="body" />
                        {/*End Navigation*/}
                        {/* Start Slider  */}
                        <section id="home" className="home">
                            <div className="slider-overlay" />
                            <div className="flexslider">
                                <ul className="slides scroll">
                                    <li className="first">
                                        <div className="slider-text-wrapper">
                                            <div className="container">
                                                <div className="big">Took the vaccine?</div>
                                                <div className="small">Want to share your experience to help others</div>
                                                <a href="#" className="middle btn btn-white" id="sliderbtn">WRITE REVIEW</a>
                                            </div>
                                        </div>
                                        <img src="images/slider/vaccine.jpg" alt />
                                    </li>
                                    <li className="secondary">
                                        <div className="slider-text-wrapper">
                                            <div className="container">
                                                <div className="big">Still not vaccinated?</div>
                                                <div className="small">Want to know more about others' experience getting vaccinated</div>
                                                <a href="#works" className=" middle btn btn-white" id="sliderbtn">READ REVIEWS</a>
                                            </div>
                                        </div>
                                        <img src="images/slider/vaccine2.jpeg" alt />
                                    </li>
                                    <li className="first">
                                        <div className="slider-text-wrapper">
                                            <div className="container">
                                                <div className="big">Have a question? </div>
                                                <div className="small">Are you having questions regarding your vaccination place</div>
                                                <a href="#works" className="middle btn btn-white" id="sliderbtn">ASK OTHERS</a>
                                            </div>
                                        </div>
                                        <img src="images/slider/vaccine2.jpg" alt />
                                    </li>
                                    <li className="third">
                                        <div className="slider-text-wrapper">
                                            <div className="container">
                                                <div className="big">Don't know where to head? </div>
                                                <div className="small">Want to know more about places with the best ratings</div>
                                                <a href="#stats" className="middle btn btn-white" id="sliderbtn">VIEW STATS</a>
                                            </div>
                                        </div>
                                        <img src="images/slider/3.jpg" alt />
                                    </li>
                                </ul>
                            </div>
                        </section>
                        {/* End Slider  */}
                        {/*Start Features*/}
                        <section className="section">
                            <div className="container">
                                <div className="row">
                                    <div className="title-box text-center">
                                        <h2 className="title" style={{ color: '#276678' }}>Available Vaccines In Egypt</h2>
                                    </div>
                                    {/* Features Icon*/}
                                    <div className="col-md-4">
                                        <div className="features-icon-box">
                                            <div className="features-info">
                                                <img src="images/astra.png" alt="Astrazenca" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Features Icon*/}
                                    <div className="col-md-4">
                                        <div className="features-icon-box">
                                            <div className="features-info">
                                                <img src="images/johnson.png" alt="johnson&Johnson" style={{ marginTop: '1.5rem' }} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Features Icon*/}
                                    <div className="col-md-4">
                                        <div className="features-icon-box">
                                            <div className="features-info">
                                                <img src="images/sinopharm.jpg" alt="sinopharm" height="100rem" style={{ paddingLeft: '2rem' }} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Features Icon*/}
                                    <div className="col-md-4">
                                        <div className="features-icon-box">
                                            <div className="features-info">
                                                <img src="images/pfizer.png" alt="pfizer" height="80rem" style={{ marginLeft: '2rem', position: 'relative', top: '-20px' }} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Features Icon*/}
                                    <div className="col-md-4">
                                        <div className="features-icon-box">
                                            <div className="features-info">
                                                <img src="images/sinovac.png" alt="sinovac" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Features Icon*/}
                                    <div className="col-md-4">
                                        <div className="features-icon-box">
                                            <div className="features-info">
                                                <img src="images/sputnik.jpg" alt="sputnik" style={{ position: 'relative', left: '-30px', top: '-30px' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* /.row*/}
                            </div> {/* /.container*/}
                        </section>
                        {/*End Features*/}
                        {/* Start Facts*/}
                        <section id="facts" className="section parallax">
                            <div className="overlay" />
                            <div className="container">
                                <div className="row">
                                    {/* Start Item*/}
                                    <div className="col-md-3 col-sm-6 facts-box margin-bottom-30">
                                        <span><i className="fa fa-user-md" aria-hidden="true" style={{ color: '#D3E0EA' }} /></span>
                                        <h3 style={{ color: '#D3E0EA' }}>11.5+M</h3>
                                        <span style={{ color: '#D3E0EA' }}>Doses given</span>
                                    </div>
                                    {/* End Item*/}
                                    {/* Start Item*/}
                                    <div className="col-md-3 col-sm-6 facts-box margin-bottom-30">
                                        <span><i className="fa fa-check-circle" aria-hidden="true" style={{ color: '#D3E0EA' }} /></span>
                                        <h3 style={{ color: '#D3E0EA' }}>4.93+M</h3>
                                        <span style={{ color: '#D3E0EA' }}>Fully Vaccinated</span>
                                    </div>
                                    {/* End Item*/}
                                    {/* Start Item*/}
                                    <div className="col-md-3 col-sm-6 facts-box margin-bottom-30">
                                        <span><i className="fa fa-users" aria-hidden="true" style={{ color: '#D3E0EA' }} /></span>
                                        <h3 style={{ color: '#D3E0EA' }}>4.9%</h3>
                                        <span style={{ color: '#D3E0EA' }}>% of population fully vaccinated</span>
                                    </div>
                                    {/* End Item*/}
                                </div> {/* /.row */}
                            </div> {/* /.container */}
                        </section>
                        {/*End Facts*/}
                        {/*Start Section*/}
                        <section className="section" id="stats">
                            <div className="container">
                                <div className="title-box text-center">
                                    <h2 className="title" style={{ color: '#276678' }}>Top Rated Places</h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        {/*start tabs*/}
                                        <div className="col-md-12">
                                            <div className="tabs tabs-main">
                                                <ul className="nav nav-tabs">
                                                    <li className="active"><a href="#one" data-toggle="tab">Cleanest</a></li>
                                                    <li><a href="#two" data-toggle="tab">Fastest</a></li>
                                                    <li><a href="#three" data-toggle="tab">Least Crowded</a></li>
                                                </ul>
                                                <div className="tab-content">
                                                    {/*Start Tab Item #1 */}
                                                    <div className="tab-pane in active" id="one">
                                                        {/*Start Testimonial*/}
                                                        <section id="testimonials" className="section parallax">
                                                            <div className="overlay" />
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="col-md-10" style={{ marginLeft: '2.5rem' }}>
                                                                        <div className="testimonials-carousel">
                                                                            {/*Start Testimonial item #1*/}
                                                                            <div className="items">
                                                                                <div className="title-box text-center white">
                                                                                    <h2 className="title" style={{ color: '#D3E0EA' }}>Cairo</h2>
                                                                                </div>
                                                                                <div className="card mb-3">
                                                                                    {/*Google map*/}
                                                                                    <div id="map-container-google-12" className="z-depth-1-half map-container-7" style={{ height: 200 }}>
                                                                                        <iframe src="https://maps.google.com/maps?q=Cairo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                                                                                    </div>
                                                                                    <div className="card-body">
                                                                                        <h5 className="card-title" style={{ fontWeight: 800, fontSize: 'x-large', color: '#1687A7' }}>Ard El Maared</h5>
                                                                                        <p className="card-text" style={{ fontSize: 25, color: 'goldenrod' }}>
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star-half-o" aria-hidden="true" />
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/*Start Testimonial item #2*/}
                                                                            <div className="items">
                                                                                <div className="title-box text-center white">
                                                                                    <h2 className="title" style={{ color: '#D3E0EA' }}>Alexandria</h2>
                                                                                </div>
                                                                                <div className="card mb-3">
                                                                                    {/*Google map*/}
                                                                                    <div id="map-container-google-12" className="z-depth-1-half map-container-7" style={{ height: 200 }}>
                                                                                        <iframe src="https://maps.google.com/maps?q=Alexandria&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                                                                                    </div>
                                                                                    <div className="card-body">
                                                                                        <h5 className="card-title" style={{ fontWeight: 800, fontSize: 'x-large', color: '#1687A7' }}>Somouha Centre for Women’s Health</h5>
                                                                                        <p className="card-text" style={{ fontSize: 25, color: 'goldenrod' }}>
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star-half-o" aria-hidden="true" />
                                                                                            <i className="fa fa-star-o" aria-hidden="true" />
                                                                                        </p></div>
                                                                                </div>
                                                                            </div>
                                                                            {/*Start Testimonial item #3*/}
                                                                            <div className="items">
                                                                                <div className="title-box text-center white">
                                                                                    <h2 className="title" style={{ color: '#D3E0EA' }}>Fayoum</h2>
                                                                                </div>
                                                                                <div className="card mb-3">
                                                                                    {/*Google map*/}
                                                                                    <div id="map-container-google-12" className="z-depth-1-half map-container-7" style={{ height: 200 }}>
                                                                                        <iframe src="https://maps.google.com/maps?q=Fayoum&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                                                                                    </div>
                                                                                    <div className="card-body">
                                                                                        <h5 className="card-title" style={{ fontWeight: 800, fontSize: 'x-large', color: '#1687A7' }}>Kiman Fares Medical Centre </h5>
                                                                                        <p className="card-text" style={{ fontSize: 25, color: 'goldenrod' }}>
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div> {/*/.row*/}
                                                            </div> {/*/.container*/}
                                                        </section>
                                                        {/*Start Testimonial*/}
                                                    </div>
                                                    {/* End Tab */}
                                                    {/*Start Tab Item #2 */}
                                                    <div className="tab-pane" id="two">
                                                        {/*Start Testimonial*/}
                                                        <section id="testimonials" className="section parallax">
                                                            <div className="overlay" />
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="col-md-10" style={{ marginLeft: '2.5rem' }}>
                                                                        <div className="testimonials-carousel">
                                                                            {/*Start Testimonial item #1*/}
                                                                            <div className="items">
                                                                                <div className="title-box text-center white">
                                                                                    <h2 className="title" style={{ color: '#D3E0EA' }}>Cairo</h2>
                                                                                </div>
                                                                                <div className="card mb-3">
                                                                                    {/*Google map*/}
                                                                                    <div id="map-container-google-12" className="z-depth-1-half map-container-7" style={{ height: 200 }}>
                                                                                        <iframe src="https://maps.google.com/maps?q=Cairo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                                                                                    </div>
                                                                                    <div className="card-body">
                                                                                        <h5 className="card-title" style={{ fontWeight: 800, fontSize: 'x-large', color: '#1687A7' }}>Ard El Maared</h5>
                                                                                        <p className="card-text" style={{ fontSize: 25, color: 'goldenrod' }}>
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/*Start Testimonial item #2*/}
                                                                            <div className="items">
                                                                                <div className="title-box text-center white">
                                                                                    <h2 className="title" style={{ color: '#D3E0EA' }}>Alexandria</h2>
                                                                                </div>
                                                                                <div className="card mb-3">
                                                                                    {/*Google map*/}
                                                                                    <div id="map-container-google-12" className="z-depth-1-half map-container-7" style={{ height: 200 }}>
                                                                                        <iframe src="https://maps.google.com/maps?q=Alexandria&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                                                                                    </div>
                                                                                    <div className="card-body">
                                                                                        <h5 className="card-title" style={{ fontWeight: 800, fontSize: 'x-large', color: '#1687A7' }}>Somouha Centre for Women’s Health</h5>
                                                                                        <p className="card-text" style={{ fontSize: 25, color: 'goldenrod' }}>
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star-half-o" aria-hidden="true" />
                                                                                            <i className="fa fa-star-o" aria-hidden="true" />
                                                                                        </p></div>
                                                                                </div>
                                                                            </div>
                                                                            {/*Start Testimonial item #3*/}
                                                                            <div className="items">
                                                                                <div className="title-box text-center white">
                                                                                    <h2 className="title" style={{ color: '#D3E0EA' }}>Fayoum</h2>
                                                                                </div>
                                                                                <div className="card mb-3">
                                                                                    {/*Google map*/}
                                                                                    <div id="map-container-google-12" className="z-depth-1-half map-container-7" style={{ height: 200 }}>
                                                                                        <iframe src="https://maps.google.com/maps?q=Fayoum&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                                                                                    </div>
                                                                                    <div className="card-body">
                                                                                        <h5 className="card-title" style={{ fontWeight: 800, fontSize: 'x-large', color: '#1687A7' }}>Kiman Fares Medical Centre </h5>
                                                                                        <p className="card-text" style={{ fontSize: 25, color: 'goldenrod' }}>
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star-o" aria-hidden="true" />
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div> {/*/.row*/}
                                                            </div> {/*/.container*/}
                                                        </section>
                                                        {/*Start Testimonial*/}
                                                    </div>
                                                    {/* End Tab */}
                                                    {/*Start Tab Item #3 */}
                                                    <div className="tab-pane" id="three">
                                                        {/*Start Testimonial*/}
                                                        <section id="testimonials" className="section parallax">
                                                            <div className="overlay" />
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="col-md-10" style={{ marginLeft: '2.5rem' }}>
                                                                        <div className="testimonials-carousel">
                                                                            {/*Start Testimonial item #1*/}
                                                                            <div className="items">
                                                                                <div className="title-box text-center white">
                                                                                    <h2 className="title" style={{ color: '#D3E0EA' }}>Cairo</h2>
                                                                                </div>
                                                                                <div className="card mb-3">
                                                                                    {/*Google map*/}
                                                                                    <div id="map-container-google-12" className="z-depth-1-half map-container-7" style={{ height: 200 }}>
                                                                                        <iframe src="https://maps.google.com/maps?q=Cairo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                                                                                    </div>
                                                                                    <div className="card-body">
                                                                                        <h5 className="card-title" style={{ fontWeight: 800, fontSize: 'x-large', color: '#1687A7' }}>Ard El Maared</h5>
                                                                                        <p className="card-text" style={{ fontSize: 25, color: 'goldenrod' }}>
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star-o" aria-hidden="true" />
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/*Start Testimonial item #2*/}
                                                                            <div className="items">
                                                                                <div className="title-box text-center white">
                                                                                    <h2 className="title" style={{ color: '#D3E0EA' }}>Alexandria</h2>
                                                                                </div>
                                                                                <div className="card mb-3">
                                                                                    {/*Google map*/}
                                                                                    <div id="map-container-google-12" className="z-depth-1-half map-container-7" style={{ height: 200 }}>
                                                                                        <iframe src="https://maps.google.com/maps?q=Alexandria&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                                                                                    </div>
                                                                                    <div className="card-body">
                                                                                        <h5 className="card-title" style={{ fontWeight: 800, fontSize: 'x-large', color: '#1687A7' }}>Somouha Centre for Women’s Health</h5>
                                                                                        <p className="card-text" style={{ fontSize: 25, color: 'goldenrod' }}>
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star-o" aria-hidden="true" />
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/*Start Testimonial item #3*/}
                                                                            <div className="items">
                                                                                <div className="title-box text-center white">
                                                                                    <h2 className="title" style={{ color: '#D3E0EA' }}>Fayoum</h2>
                                                                                </div>
                                                                                <div className="card mb-3">
                                                                                    {/*Google map*/}
                                                                                    <div id="map-container-google-12" className="z-depth-1-half map-container-7" style={{ height: 200 }}>
                                                                                        <iframe src="https://maps.google.com/maps?q=Fayoum&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                                                                                    </div>
                                                                                    <div className="card-body">
                                                                                        <h5 className="card-title" style={{ fontWeight: 800, fontSize: 'x-large', color: '#1687A7' }}>Kiman Fares Medical Centre </h5>
                                                                                        <p className="card-text" style={{ fontSize: 25, color: 'goldenrod' }}>
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star" aria-hidden="true" />
                                                                                            <i className="fa fa-star-o" aria-hidden="true" />
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div> {/*/.row*/}
                                                            </div> {/*/.container*/}
                                                        </section>
                                                        {/*Start Testimonial*/}
                                                    </div>
                                                    {/* End Tab */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Tabs*/}
                                        <div className="tab-content-main">
                                            <div className="container">
                                                <div className="tab-content">
                                                    <div className="tab-pane active in" id="tab-content-1">
                                                        {/* Features Icon*/}
                                                        <div className="col-md-6 margin-bottom-30">
                                                            {/*Grid row*/}
                                                            <div className="row">
                                                                {/*Grid column*/}
                                                                <div className="col-md-6 mb-4">
                                                                    {/*Card*/}
                                                                    <div className="card card-cascade narrower">
                                                                        {/*/.Card content*/}
                                                                    </div>
                                                                    {/*/.Card*/}
                                                                </div>
                                                                {/*Grid column*/}
                                                            </div>
                                                            {/*Grid row*/}
                                                        </div>
                                                        {/*End features Icon*/}
                                                    </div>
                                                    {/* End Tab content 1*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section></div>
                    {/*/.tab-content-main*/}
                </div>
                <section id="about" className="section parallax">
                    <div className="overlay" />
                    <div className="container">
                        <div className="row">
                            <div className="title-box text-center white">
                                <h2 className="title" style={{ color: '#D3E0EA' }}>About Us</h2>
                            </div>
                            {/*Start Services*/}
                            {/*Services Item */}
                            <div className="col-md-4">
                                <div className="services-box" style={{ border: '3px solid #95b2c8' }}>
                                    <div className="services-icon"> <i className="icon-global" /> </div>
                                    <div className="services-desc">
                                        <h4 style={{ color: '#D3E0EA', fontWeight: 900 }}>Vision</h4>
                                        <p style={{ color: '#D3E0EA', fontWeight: 500 }}>Raising the awareness of the local
                                            community about the COVID-19 vaccination process.</p>
                                    </div>
                                </div>
                            </div>
                            {/*End services Item*/}
                            {/*Services Item*/}
                            <div className="col-md-4">
                                <div className="services-box" style={{ border: '3px solid #4792a7' }}>
                                    <div className="services-icon"> <i className="icon-target" /> </div>
                                    <div className="services-desc">
                                        <h4 style={{ color: '#D3E0EA', fontWeight: 900 }}>Aim</h4>
                                        <p style={{ color: '#D3E0EA', fontWeight: 500 }}>Facilitating the process of vaccination by providing necessary information about how to recieve the vaccine locally. </p>
                                    </div>
                                </div>
                            </div>
                            {/*End services Item*/}
                            {/*Services Item */}
                            <div className="col-md-4">
                                <div className="services-box" style={{ border: '3px solid #195161' }}>
                                    <div className="services-icon"> <i className="icon-aperture" /> </div>
                                    <div className="services-desc">
                                        <h4 style={{ color: '#D3E0EA', fontWeight: 900 }}>Mission</h4>
                                        <p style={{ color: '#D3E0EA', fontWeight: 500 }}>Enabling community members
                                            to exchange and share their experience to help in
                                            the fight against the pandemic.</p>
                                    </div>
                                </div>
                            </div>
                            {/*End services Item*/}
                        </div> {/* /.row*/}
                    </div> {/* /.container*/}
                </section>

                <section id="clients" className="section" style={{ padding: '50px 0px 100px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="title-box text-center">
                                <h2 className="title" style={{ color: '#276678' }}>Our Team</h2>
                            </div>
                            <div className="clients-carousel">
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/maggie.JPG" alt />
                                            <p style={{ marginBottom: 0 }}>Dr. Maggie Marshaly</p>
                                            <p style={{ fontSize: 11 }}>Founder</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/rania.JPG" alt />
                                            <p style={{ marginBottom: 0 }}>Dr. Rania Sweif</p>
                                            <p style={{ fontSize: 11 }}>Founder</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/eman.JPG" alt />
                                            <p style={{ marginBottom: 0 }}>Dr. Eman Azab</p>
                                            <p style={{ fontSize: 11 }}>Founder</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/tasneem.JPG" alt />
                                            <p style={{ marginBottom: 0 }}>Tasneem Hazem</p>
                                            <p style={{ fontSize: 11 }}>Project Manager</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/jomana.JPG" alt />
                                            <p style={{ marginBottom: 0 }}>Jomana Wael</p>
                                            <p style={{ fontSize: 11 }}>Project Coordinator</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/alia.JPG" alt />
                                            <p style={{ marginBottom: 0 }}>Alia Mahmoud</p>
                                            <p style={{ fontSize: 11 }}>Project Coordinator</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/lobna.JPG" alt />
                                            <p style={{ marginBottom: 0 }}>Lobna El Nahas</p>
                                            <p style={{ fontSize: 11 }}>Team Member</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/samir.JPG" alt />
                                            <p style={{ marginBottom: 0 }}>Ahmed Samir</p>
                                            <p style={{ fontSize: 11 }}>Team Member</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/omar.JPG" alt />
                                            <p style={{ marginBottom: 0 }}>Omar Aref</p>
                                            <p style={{ fontSize: 11 }}>Team Member</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/salma.JPG" alt />
                                            <p style={{ marginBottom: 0 }}>Salma Teama</p>
                                            <p style={{ fontSize: 11 }}>Team Member</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/nawraz.JPG" alt />
                                            <p style={{ marginBottom: 0 }}>Nawraz</p>
                                            <p style={{ fontSize: 11 }}>Team Member</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/belal.JPG" alt />
                                            <p style={{ marginBottom: 0 }}>Ahmed Belal</p>
                                            <p style={{ fontSize: 11 }}>Team Member</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/haidy.JPG" alt width="150px" />
                                            <p style={{ marginBottom: 0 }}>Haidy Tohfa</p>
                                            <p style={{ fontSize: 11 }}>Team Member</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/ahmed.JPG" alt />
                                            <p style={{ marginBottom: 0 }}>Ahmed Tamer</p>
                                            <p style={{ fontSize: 11 }}>Team Member</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/amera.JPG" alt width="150px" />
                                            <p style={{ marginBottom: 0 }}>Amera Salah</p>
                                            <p style={{ fontSize: 11 }}>Team Member</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/mark.JPG" alt width="150px" />
                                            <p style={{ marginBottom: 0 }}>Mark Malak</p>
                                            <p style={{ fontSize: 11 }}>Team Member</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/aya.JPG" alt />
                                            <p style={{ marginBottom: 0 }}>Aya Ahmed</p>
                                            <p style={{ fontSize: 11 }}>Team Member</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/khaled.JPG" alt />
                                            <p style={{ marginBottom: 0 }}>Khaled Romeh</p>
                                            <p style={{ fontSize: 11 }}>Team Member</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/lina.JPG" alt />
                                            <p style={{ marginBottom: 0 }}>Lina Emad</p>
                                            <p style={{ fontSize: 11 }}>Team Member</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/mark2.JPG" alt width="150px" />
                                            <p style={{ marginBottom: 0 }}>Mark Wafik</p>
                                            <p style={{ fontSize: 11 }}>Team Member</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/salma2.JPG" alt />
                                            <p style={{ marginBottom: 0 }}>Salma Shereef</p>
                                            <p style={{ fontSize: 11 }}>Team Member</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/youssef.JPG" alt width="150px" />
                                            <p style={{ marginBottom: 0 }}>Youssef Magdy</p>
                                            <p style={{ fontSize: 11 }}>Team Member</p>
                                        </figure>
                                    </a>
                                </div>
                                {/* Clients Logo Item*/}
                                <div className="item">
                                    <a href="#">
                                        <figure>
                                            <img src="images/team/youssefk.JPG" alt />
                                            <p style={{ marginBottom: 0 }}>Yusuf El Kilany</p>
                                            <p style={{ fontSize: 11 }}>Team Member</p>
                                        </figure>
                                    </a>
                                </div>
                            </div>
                        </div> {/*/.row*/}
                    </div> {/*/.container*/}
                </section>
                <footer>
                    <div className="container">
                        <div className="row">
                            {/*Start copyright*/}
                            <div className="col-md-6 col-sm-6 col-xs-6" />
                            <div className="copyright"><p style={{ marginBottom: 0, lineHeight: 15 }}>© 2021 TrackVac        {/*start social icons*/}
                            </p><div className="social-icons">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                        <li> <a href="#"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                    </ul>
                                </div>
                                {/*End social icons*/}<p />
                            </div>
                            {/*End copyright*/}
                        </div> {/* /.row*/}
                    </div> {/* /.container*/}
                </footer>
                <a href="#" className="scrollup" id="tooltip" title="Add Review."> <i className="fa fa-pencil-square-o" aria-hidden="true" />
                </a>
                <a href="#" className="scrollup" id="tooltip" title="Share Website." style={{ marginBottom: 70 }}><i className="fa fa-share-alt" aria-hidden="true" /></a>
                );

            </div>
    
    )
    }
}

