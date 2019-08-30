import * as React from 'react';
import './App.css';
import './Components/BodyText';
// import BodyText from './Components/BodyText';
import { EmojiCollection } from './Components/EmojiCollection';
import { DifficultyButtonCollection } from './Components/DifficultyButtonCollection';
import { SubmissionButtonCollection } from './Components/SubmissionButtonCollection';
import { BodyText } from './Components/BodyText';
import { CommentBox } from './Components/CommentBox';






class App extends React.Component<{}, {}> {
  public render() {
    return (

      <div className="app">
        <div className="top-row">
          <h1 className="header">
            We would love your Feedback
        </h1>
          <img className="close-button" src={require('./images/close_button.PNG')} alt="close button" />
        </div>

        <BodyText text="Overall, how satisfied were you with the most recent experience with WExp." />
        <EmojiCollection />
        <BodyText text="How easy was it to complete all the steps necessary to create, configure, launch, analyze results and teminate your experiment/CFR?" />
        <DifficultyButtonCollection />
        <CommentBox text="(Optional) Provide details about your experience" commentBoxClassName="experince-details-textbox" />
        <BodyText text="(Optional) We would really appreciate if you could take 1 more minute to provide additional details by answering 2 more questions." />
        <SubmissionButtonCollection />
      </div>

    );
  }
}

export default App;
