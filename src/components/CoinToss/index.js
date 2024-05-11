import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {headOrTail: 'Head', coinCount: 0, headCount: 0, tailCount: 0}

  tossCoin = () => {
    const toss = Math.random() < 0.5 ? 'Head' : 'Tail' // Randomly select 'Head' or 'Tail'
    this.setState(prevState => ({
      headOrTail: toss,
      coinCount: prevState.coinCount + 1,
      headCount:
        toss === 'Head' ? prevState.headCount + 1 : prevState.headCount,
      tailCount:
        toss === 'Tail' ? prevState.tailCount + 1 : prevState.tailCount,
    }))
  }

  render() {
    const {headOrTail, coinCount, headCount, tailCount} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss game</h1>
          <p className="para">Heads (or) Tails</p>
          {headOrTail === 'Head' ? (
            <img
              className="coinImg"
              alt="toss result"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            />
          ) : (
            <img
              className="coinImg"
              alt="toss result"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
            />
          )}
          <button onClick={this.tossCoin} type="button" className="btnStyle">
            Toss Coin
          </button>
          <div className="countsContainer">
            <p className="countStyle">Total: {coinCount}</p>
            <p className="countStyle">Heads: {headCount}</p>
            <p className="countStyle">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
