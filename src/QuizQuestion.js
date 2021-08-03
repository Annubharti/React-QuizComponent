import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }
  render() {
    return (
      <main>
        <section>
          <p>{ this.props.quiz_question.instruction_text }</p>
        </section>
        <section className="buttons">
          <ul>
            <QuizQuestionButton button_text = {this.props.quiz_question.answer_options[0]}></QuizQuestionButton>
            <li>{this.props.quiz_question.answer_options[1]}</li>
            <li>{this.props.quiz_question.answer_options[2]}</li>
            <li>{this.props.quiz_question.answer_options[3]}</li>
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion
