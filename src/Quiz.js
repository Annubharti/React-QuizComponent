import React, {Component } from 'react';
import QuizQuestion from "./QuizQuestion"

let quizData = require('./quiz_data.json')

class Quiz extends Component{   
        constructor(props) { 
            super(props)
            this.props = props
            this.state = {quiz_position: 1}
        }
    render() {
        return (
            
                <QuizQuestion quiz_question={quizData} /> 
        )
    }
      
  }

export default Quiz