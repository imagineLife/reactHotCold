import React from 'react';
import NumberInput from './components/NumberInput'
import Button from './components/Button'
import GuessCount from './components/GuessCount'
import GuessList from './components/GuessList'
import UserInstructions from './components/UserInstructions'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      guesses: [],
      dispTxt: 'Guess A Number!',
      arbitraryAnswer: Math.ceil(Math.random() * 100)
    }
  }

  updateGuesses(num){
    this.setState({
     guesses: [...this.state.guesses, num]
    })
  }

  resetGuesses(){
    this.setState({
     guesses: [],
     arbitraryAnswer: Math.ceil(Math.random() * 100),
     dispTxt : 'Guess A Number!'
    });
    document.getElementById('guessInput').value = '';
  }

  resetdispTxt(userGuess){
    let difference = Math.abs(userGuess - this.state.arbitraryAnswer);

    console.log(difference);

        let userFeedback;
        if (difference >= 50) {
            userFeedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 40) {
            userFeedback = 'You\'re Cold...';
        }
        else if (difference >= 30) {
            userFeedback = 'You\'re LukeWarm...';
        }
        else if (difference >= 15) {
            userFeedback = 'You\'re Warm';
        }
        else if (difference >= 7) {
            userFeedback = 'You\'re HOT';
        }
        else if (difference >= 3) {
            userFeedback = 'You\'re BLAZIN!';
        }
        else {
            userFeedback = 'You got it!';
        }

    console.log(userFeedback);

    this.setState({
      dispTxt : userFeedback 
    })
  }

  render() {
    return (
        <div className="innerWrapper">
          <header>
            <button className="headerButton what">WHAT?</button>
            <button className="headerButton new" onClick={e => {return this.resetGuesses()}}>+NEW GAME</button>
          </header>

          <h1>HOT or COLD</h1>

          <div id="quizWrapper">
            
            <form onSubmit={e => {
              let userGuess = document.getElementById('guessInput').value;
              e.preventDefault();
              this.resetdispTxt(userGuess);
              return this.updateGuesses(userGuess);
            }}>

              <UserInstructions displayText={this.state.dispTxt}/>
            
              <div id="innerForm">

                <NumberInput id="guessVal" placeholder="Enter Your Guess"/>

                <Button id="makeGuess" label="Guess"/>
              
                <GuessCount id="guessCount" label="Guess #" inputVal={this.state.guesses} />          

              </div>
              
              <GuessList visualRep={this.state.guesses}/>
           
            </form>

          </div>
        
        </div>
    );
  }
}

export default App;
