import React, { Component } from 'react';

class QuizQuestionButton extends Component{
    constructor(props){
        super(props);
        this.props = props
    }

    render(){
        return(
            
            <li>{console.log(this.props)}<button>{this.props.buton_text}</button></li>
    
        )
    }
}

export default QuizQuestionButton