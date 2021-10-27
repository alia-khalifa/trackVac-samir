import React, { Component } from 'react'
import AverageRates from '../components/AverageRates'
import Dropdown from '../components/Dropdown'
import NavBar from '../components/NavBar'
import BadQuestion from '../components/BadQuestion'
import BadReview from '../components/BadReview'
import Review from '../components/Review'
import { Rating } from "@material-ui/lab";
import { Typography } from '@mui/material';
import Question from '../components/Question'
import IconLabelTabs from '../components/IconLabelTabs'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Modal from 'react-bootstrap/Modal'
import AddReview from '../components/AddReview'
import Form from 'react-bootstrap/Form'
import TextField from '@mui/material/TextField';
import rates_logo from '../components/rates.svg';
import verify_logo from '../components/verify.svg';
import questions_logo from '../components/questions.svg';
import '../reviews-style.css';
import api from '../api';
export default class ModRevs extends Component {
    state = {
        questions: [],
        reviews: [],
        isReview: true
    }
    switchList = (newValue) => {
        if (newValue === 1) {
            this.setState({ isReview: false })
        } else {
            this.setState({ isReview: true })
        }
    };

    componentDidMount = async () => {
        await api.adminQuestions().then(questArr => {
            this.setState({
                questions: questArr.data
            })
        }).catch(e => {
            console.log('There has been a problem with your fetch operation: ' + e.message);
        });

        await api.adminReviews().then(reviewArr => {
            this.setState({
                reviews: reviewArr.data
            })
        }).catch(e => {
            console.log('There has been a problem with your fetch operation: ' + e.message);
        });
    }
    render() {
        const { questions, reviews } = this.state
        return (

            <div className="reviews-wrapper">
                <header>
                    {/* this shouldnt be here remember to take it out !!!! */}
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
                    <NavBar />
                </header>
                <h1 style={{ textAlign: 'center' }}>Most reported reviews/questions</h1>




                <div className="whole-list-container" style={{ width: '100%', height: '100%' }}>
                    <div className="list-container" >
                        <IconLabelTabs handleTabChange={(newValue) => this.switchList(newValue)} />
                        <div className="list" >
                            {(!this.state.isReview) ?
                                (<div>
                                    {questions.length !== 0 ? (questions).map((q) => (
                                        <BadQuestion
                                            body={q.questionBody}
                                            _id={q.questionId} />
                                    )) :
                                        (<div style={
                                            {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '10px',
                                                margin: '25px auto'
                                            }}>


                                            <img src={questions_logo} width="25%" height="25%"></img>

                                            <p style={{ textAlign: "centre" }}> No currently reported questions available </p>
                                        </div>)
                                    }
                                </div>) :
                                (<div>
                                    {reviews.length !== 0 ? (reviews).map((r) => (
                                        <BadReview
                                            title={r.reviewTitle}
                                            body={r.reviewBody}
                                            _id={r.reviewId}

                                        />
                                    )) :
                                        (<div style={
                                            {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '10px',
                                                margin: '25px auto'
                                            }}>


                                            <img src={rates_logo} width="25%" height="25%"></img>

                                            <p style={{ textAlign: "centre" }}> No currently reported reviews available </p>
                                        </div>)
                                    }
                                </div>)}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
