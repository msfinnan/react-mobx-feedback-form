import * as React from 'react';
import './App.css';
import './Components/BodyText';
// import BodyText from './Components/BodyText';
import { EmojiCollection } from './Components/EmojiCollection';
import { DifficultyButtonCollection } from './Components/DifficultyButtonCollection';
import { SubmissionButtonCollection } from './Components/SubmissionButtonCollection';
import { BodyText } from './Components/BodyText';
import { CommentBox } from './Components/CommentBox';
import { BodyTextStore } from './stores/BodyTextStore';
import { CommentBoxStore } from './stores/CommentBoxStore';
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';

interface AppProps {
  bodyTextStore: BodyTextStore;
  commentBoxStore?: CommentBoxStore;
}

@inject("commentBoxStore")
@observer
class App extends React.Component<AppProps, {}> {
  @observable private userInputDisplay: string = "No user comments";
  @observable private emojiSelected: string = "No overall satisfaction selected";
  @observable private difficultyLevelSelected: string = "No ease of use selected";

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.userInputDisplay = this.props.commentBoxStore.commentBoxUserInput;
    }

  public render() {
    return (

      <div className="app">
        <form onSubmit={this.handleSubmit}>
          <div className="top-row">
            <h1 className="header">
              We would love your Feedback
        </h1>
            <img className="close-button" src={require('./images/close_button.PNG')} alt="close button" />
          </div>

          <BodyText text={this.props.bodyTextStore.firstText} />
          <EmojiCollection />
          <BodyText text={this.props.bodyTextStore.secondText} />
          <DifficultyButtonCollection />
          <CommentBox commentBoxStore={this.props.commentBoxStore} />
          <BodyText text={this.props.bodyTextStore.thirdText} />
          <SubmissionButtonCollection />
        </form>
        <ul>
          <li>Overall Satisfaction: {this.emojiSelected}</li>
          <li>Ease of Use: {this.difficultyLevelSelected}</li>
          <li>User Comments: {this.userInputDisplay}</li>
        </ul>
      </div>
    );
  }
}

export default App;


/* <CommentBox text={ this.props.commentBoxStore.commentBoxText } commentBoxClassName={ this.props.commentBoxStore.commentBoxClassName } onChange={this.props.commentBoxStore.handleUserInput}/> */
