import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form'
import api from '../api';
import NavBar from '../components/NavBar'
export default class Moderator extends Component {
    state = {
        cities: [],
        places: [],
        lowestQuestions: [],
        reportedReviews: [],
        reviewsLength: 0,
        questionsLength: 0,
        placesLength: 0,
        reqPlaceDel: "",
        addTo: "",
        newPlace: ""
    }
    componentDidMount = async () => {

        await api.adminHome().then(adminReturn => {
            const {
                cities,
                placesLength,
                lowestQuestions,
                reportedReviews,
                reviewsLength,
                questionsLength,

            } = adminReturn.data

            this.setState({
                cities: cities,
                lowestQuestions: lowestQuestions,
                reportedReviews: reportedReviews,
                questionsLength: questionsLength,
                reviewsLength: reviewsLength,
                placesLength: placesLength
            })
        }).catch(e => {
            console.log('There has been a problem with your fetch operation: ' + e.message);
        });
    }

    async handleGovChange(event) {
        await api.getAllDistricts(event.target.value).then(districtArr => {
            this.setState({
                places: districtArr.data,
            });
        }).catch(e => {
            console.log('There has been a problem with your fetch operation: ' + e.message);
        });
        this.setState({ governorate: event.target.value });
    }

    handleDistrictChange(event) {
        this.setState({
            reqPlaceDel: event.target.value,
        })
    }
    async handleGovSelect(event) {
        await this.setState({
            addTo: event.target.value
        });
    }
    async handleAddPlace(event) {
        event.preventDefault();
        await api.addPlace(this.state.addTo, { name: this.state.newPlace }).then((res) => {
        }).catch(e => {
            console.log('There has been a problem with your fetch operation: ' + e.message);
        });
        this.setState({
            addTo: ""
        });
    }
    async handleDeletePlace() {
        await api.deletePlace(this.state.reqPlaceDel).then(() => {
            this.setState({
                places: this.state.places.filter((el) => {
                    if (el._id != this.state.reqPlaceDel) return el;
                })
            })
        }).catch(e => {
            console.log('There has been a problem with your fetch operation: ' + e.message);
        });
        this.setState({ reqPlaceDel: "" });
    }

    render() {
        const { places, reviewsLength, questionsLength, cities, reportedReviews, lowestQuestions, placesLength } = this.state
        return (
            <div>
                {/* start of my origian */}
                <div>
                    {/*Start Navigation*/}

                    {/*End Navigation*/}
                    {/* Start Slider  */}
                    <section id="home" className="home">
                        <div className="slider-overlay" />
                        <div className="flexslider">
                            <ul className="slides scroll">
                                <li className="first">
                                    <div className="slider-text-wrapper">
                                        <div className="container">
                                            <div className="big">
                                                Monitor Reviews</div>
                                            <div className="small">to delete and Monitor Reviews </div>
                                            <a href="/moderator/reviews" className="middle btn btn-white">VIEW REVIEWS</a>
                                        </div>
                                    </div>
                                    <img src="images/slider/1.jpg" alt />
                                </li>
                                <li className="secondary">
                                    <div className="slider-text-wrapper">
                                        <div className="container">
                                            <div className="big">Monitor Questions </div>
                                            <div className="small">to delete and Monitor Questions </div>
                                            <a href="/moderator/reviews" className=" middle btn btn-white">VIEW Questions</a>
                                        </div>
                                    </div>
                                    <img src="images/slider/2.jpg" alt />
                                </li>
                                <li className="third">
                                    <div className="slider-text-wrapper">
                                        <div className="container">
                                            <div className="big">Add Medical Centers </div>
                                            <div className="small">You Can Add New Medical Centers from Here!</div>
                                            <a href="#new-medical" className="middle btn btn-white">Add Medical Center</a>
                                        </div>
                                    </div>
                                    <img src="images/slider/3.jpg" alt />
                                </li>
                            </ul>
                        </div>
                    </section>
                    {/* End Slider  */}
                    {/*Start Features*/}
                    <section id="Reviews" className="section">
                        <div className="container">
                            <div className="row">
                            </div> {/* /.row*/}
                        </div> {/* /.container*/}
                    </section>
                    <section id="Questions" className="section">
                        <div className="container">
                            <div className="row">
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
                                    <span><i className="icon-happy" /></span>
                                    <h3>{reviewsLength}</h3>
                                    <span>Reviews</span>
                                </div>
                                {/* End Item*/}
                                {/* Start Item*/}
                                <div className="col-md-3 col-sm-6 facts-box margin-bottom-30">
                                    <span><i className="icon-presentation" /></span>
                                    <h3>{placesLength}</h3>
                                    <span>Medical Centers</span>
                                </div>
                                {/* End Item*/}
                                {/* Start Item*/}
                                <div className="col-md-3 col-sm-6 facts-box margin-bottom-30">
                                    <span><i className="icon-target" /></span>
                                    <h3>{questionsLength}</h3>
                                    <span>Questions</span>
                                </div>

                            </div> {/* /.row */}
                        </div> {/* /.container */}
                    </section>

                    <br />
                    <br />
                    <br />
                    <br />

                    <br />
                    <br />
                    <br />
                    <br />
                    {/*Start Team*/}
                    {/*End Team*/}
                    {/*Start Skills*/}
                    <section id="skills" className="section parallax">
                        <div className="overlay" />
                        <div className="container">
                            <div className="row">
                                <div className="title-box text-center white">
                                    <h2 className="title">website Statistics</h2>
                                </div>
                                {/*Skill #2*/}
                                <div className="col-sm-3 col-md-3 col-lg-3 pie-chart-main align-self-start">
                                    <h3>{reportedReviews.length}</h3>
                                    <h4>Reported Reviews</h4>
                                </div>
                                {/*Skill #3*/}
                                <div className="col-sm-3 col-md-3 col-lg-3 pie-chart-main align-self-end">
                                    <h3>{lowestQuestions.length}</h3>
                                    <h4>Lowest Questions</h4>
                                </div>
                            </div> {/* /.row*/}
                        </div> {/* /.container*/}
                    </section >
                    {/*End Skills*/}
                    {/*Start Services*/}
                    {/*End Services*/}
                    {/*Start Why Choose us*/}
                    {/*End Why Choose us*/}
                    {/*Start video*/}
                    {/*End video*/}
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* Start blog*/}
                    <section id="blog" className="section">
                        <div className="container">
                            <div className="row">
                                <div className="title-box text-center">
                                    <h2 className="title">Medical Centers</h2>
                                </div>
                                <div className="place-picker">
                                    <div style={{ width: '25%' }}>
                                        <label for="Governorate: ">Governorate: </label>
                                        <Form.Select onChange={this.handleGovChange.bind(this)} >
                                            <option value="" selected="selected">Please Choose City</option>
                                            {cities ? (cities).map((c) => (
                                                <option value={c._id}>{c.name} </option>
                                            )) : ""
                                            }
                                        </Form.Select>
                                    </div>

                                    <div style={{ width: '25%' }}>
                                        <label for="District: ">Medical Center: </label>
                                        <Form.Select value={this.state.reqPlaceDel ? this.state.reqPlaceDel : ""}
                                            onChange={this.handleDistrictChange.bind(this)} className="dropdown" name="users">
                                            <option value="" disabled >Please Choose Medical Center</option>
                                            {places ? (places).map((d) => (
                                                <option value={d._id}>{d.name} </option>
                                            )) : ""
                                            }
                                        </Form.Select>
                                        <button onClick={this.handleDeletePlace.bind(this)} className="btn btn-danger">Delete Center!</button>
                                    </div>

                                </div>
                            </div>
                            {/*/.row*/}
                        </div>
                        {/*/.container*/}
                    </section>
                    {/* End blog*/}
                    {/*Start Testimonial*/}
                    <section id="testimonials" className="section parallax">
                        <div className="overlay" />
                        <div className="container">
                            <div className="row">
                                <div className="title-box text-center white">
                                    <h2 className="title">Most Reported Questions &amp; Reviews</h2>
                                </div>
                                <div className="col-md-10 col-md-offset-1">
                                    <div className="testimonials-carousel">
                                        <Carousel>
                                            {lowestQuestions ? (lowestQuestions).map((q) => (
                                                <Carousel.Item>
                                                    <div className="items">
                                                        <div className="desc">{q.questionBody}</div>
                                                    </div>

                                                </Carousel.Item>
                                            )) : ""
                                            }
                                            {reportedReviews ? (reportedReviews).map((r) => (
                                                <Carousel.Item>
                                                    <div className="items">
                                                        <h4>{r.reviewTitle}</h4>
                                                        <div className="desc">{r.reviewBody}</div>
                                                    </div>
                                                </Carousel.Item>
                                            )) : ""
                                            }
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                            {/*/.row*/}
                        </div>
                        {/*/.container*/}
                    </section>
                    {/*Start Testimonial*/}
                    {/*Start clients*/}
                    <br />
                    <br />
                    <br />
                    <br />
                    {/*End clients*/}
                    {/*Start Contact*/}
                    <section id="contact" className="section parallax">
                        <div className="overlay" />
                        <div className="container">
                            <div className="row">
                                <div className="title-box text-center white">
                                    <h2 className="title">Add Medical Center</h2>
                                </div>
                            </div>
                            {/*Start contact form*/}
                            <div className="col-md-8 col-md-offset-2 contact-form">
                                <form>
                                    <div id="new-medical" className="row">
                                        <div className="place-picker">
                                            <div style={{ width: '25%' }}>
                                                <label for="Governorate: ">Governorate: </label>
                                                <Form.Select onChange={this.handleGovSelect.bind(this)} >
                                                    <option value="" selected="selected">Please Choose City</option>
                                                    {cities ? (cities).map((c) => (
                                                        <option value={c._id}>{c.name} </option>
                                                    )) : ""
                                                    }
                                                </Form.Select>
                                            </div>

                                            <div style={{ width: '25%' }}>
                                                <label for="District: ">Medical Center: </label>
                                                <input value={this.state.newPlace} onChange={(e) => {
                                                    this.setState({
                                                        newPlace: e.target.value
                                                    })
                                                }} type="text" placeholder="Write the medical center name"></input>
                                                <button onClick={this.handleAddPlace.bind(this)} className="btn btn-success">Add Center!</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/*End contact form*/}
                        </div> {/* /.container*/}
                    </section>
                    {/*End Contact*/}
                    {/*Start Footer*/}
                    <footer style={{ backgroundColor: '#1687A7' }}>
                        <div className="container">
                            <div className="row">
                                {/*Start copyright*/}
                                <div className="col-md-6 col-sm-6 col-xs-6">
                                    <div className="copyright">
                                        <p className="copyright1">Copyright © 2021 All Rights reserved by: <a href="https://www.ieee.org/">Track Vac</a>
                                        </p>
                                    </div>
                                </div>
                                {/*End copyright*/}
                                {/*start social icons*/}
                                <div className="col-md-6 col-sm-6 col-xs-6">
                                    <div className="social-icons">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                            <li> <a href="#"><i className="fa fa-twitter" /></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                            <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/*End social icons*/}
                                <div>
                                </div>
                            </div> {/* /.row*/}
                        </div> {/* /.container*/}
                    </footer>
                    {/*End Footer*/}
                    <a href="#" className="scrollup" style={{ backgroundColor: '#276678' }}> <i className="fa fa-chevron-up"> </i> </a>
                </div >

                {/* end of my original div  */}
            </div >
        )
    }
}