import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Header from './Header'
import Landing from './Landing'

const Dashboard = () => {
    return (
        <h2>
            Dashboard
        </h2>
    )
}

const SurveyNew = () => {
    return (
        <h2>
            SurveyNew
        </h2>
    )
}


class App extends Component  {
    componentDidMount(){
        console.log(this.props)
        this.props.fetchUser()
    }
    render(){
        return (
            <div>
                <BrowserRouter>
                    <div className='container'>
                        <Header/>
                        <Route exact path = '/' component = { Landing } />
                        <Route exact path = '/surveys' component = { Dashboard } />
                        <Route exact path = '/surveys/new' component = { SurveyNew } />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App)
