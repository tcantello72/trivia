import React, { Component } from 'react';
import { Question } from './components';

const category = '';
const TRIVIA_API = `https://opentdb.com/api.php?amount=1&category=${category}&difficulty=easy`;


class App extends Component {
    constructor(props){
        super(props);
        this.state = { question: null }
    }

    componentDidMount() {
        this.fetchTriviaQuestion();
    }

    fetchTriviaQuestion = () => {
      fetch(TRIVIA_API)
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              const question = data.results[0];
              this.setState({ question })
          })
          .catch((err) => {
              console.error("Error fetching trivia question:", err);
          })
    };

    render() {
        const { question } = this.state;

        return (
            <div className='container l:w-50 p-5'>
                <h1 className='display-1'>Trivia</h1>
                <h2 className='fw-lighter fs-5 mb-4'>
                    (we couldn&lsquo;t think of a better name,{' '}
                    <span className='fw-bolder'>sorry</span>)
                </h2>
                <hr />
                <div>
                    {this.state.question && <Question question={this.state.question}/>}
                </div>
            </div>
        );
    }
}

export { App };