import React, { Component } from 'react'

class QuizQuestion extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }
  render() {
    return (
      <main>
        <section>
          <p>{ this.props.quiz_question.quiz_questions[0].instruction_text }</p>
        </section>
        <section className="buttons">
          <ul>
          {console.log(this.props.quiz_question.quiz_questions[0])}

            <li>{this.props.quiz_question.quiz_questions[0].answer_options[0]}</li>
            <li>{this.props.quiz_question.quiz_questions[0].answer_options[1]}</li>
            <li>{this.props.quiz_question.quiz_questions[0].answer_options[2]}</li>
            <li>{this.props.quiz_question.quiz_questions[0].answer_options[3]}</li>
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion
