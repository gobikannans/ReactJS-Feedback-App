import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: true}

  onEmojiClick = () => {
    this.setState(prevState => ({
      isEmojiClicked: !prevState.isEmojiClicked,
    }))
  }

  feedBackSource = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="card">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-container">
          {emojis.map(emoji => (
            <li
              className="list-container"
              key={emoji.id}
              onClick={this.onEmojiClick}
            >
              <img src={emoji.imageUrl} className="img" alt={emoji.name} />
              <p>{emoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankingSource = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-container">
        <div>
          <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
          <h1 className="thank-text">Thank You!</h1>
          <p>
            we will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state

    return (
      <div className="bg-container">
        {isEmojiClicked ? this.feedBackSource() : this.thankingSource()}
      </div>
    )
  }
}

export default Feedback
