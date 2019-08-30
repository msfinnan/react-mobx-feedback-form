import * as React from 'react';
import './App.css';
import './Components/BodyText';
// import BodyText from './Components/BodyText';
import { EmojiCollection } from './Components/EmojiCollection';
import { DifficultyButtonCollection } from './Components/DifficultyButtonCollection';
import { SubmissionButtonCollection } from './Components/SubmissionButtonCollection';
import { BodyText } from './Components/BodyText';
import { CommentBox } from './Components/CommentBox';

// import closeButton from ;

class App extends React.Component<{}, {}> {
  private feedbackText: string = "No feedback provided";

  // const closeButton = require('./images/close_button.PNG');

  // private handleSubmitEvent = (event: React.FormEvent<HTMLFormElement>): void => {
  //   let bodyTextInput = this.getTextAreaName();
  //   this.feedbackText = (event.target as any).bodyTextInput.value;
  // }

  myCallBack = (dataFromChild: string): string => {
    let bodyTextInput: string = dataFromChild;
    return this.feedbackText = (event.target as any).bodyTextInput.value;
  }

  render() {
    return (
      <div className="app">
        <div className="top-row">
          <h1 className="header">
            We would love your Feedback
        </h1>
          <img className="close-button" src={require('./images/close_button.PNG')} alt="close button" />
        </div>

        {/* <form onSubmit={event => this.handleSubmitEvent(event)}> */}
          <BodyText text="Overall, how satisfied were you with the most recent experience with WExp." />
          <EmojiCollection />
          <BodyText text="How easy was it to complete all the steps necessary to create, configure, launch, analyze results and teminate your experiment/CFR?" />
          <DifficultyButtonCollection />
          <CommentBox text="(Optional) Provide details about your experience" commentBoxClassName="experince-details-textbox"/>
          <BodyText text="(Optional) We would really appreciate if you could take 1 more minute to provide additional details by answering 2 more questions."/>
          <SubmissionButtonCollection />
        {/* </form> */}

        <ul>
          <li>{this.myCallBack}</li>
        </ul>


      </div>
    );
  }
}

export default App;
