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
import { tsExpressionWithTypeArguments } from '@babel/types';
import { CommentBoxStore } from './stores/CommentBoxStore';

interface AppProps {
  bodyTextStore: BodyTextStore;
  commentBoxStore?: CommentBoxStore;
}

class App extends React.Component<AppProps, {}> {
  public render() {
    return (

      <div className="app">
        <div className="top-row">
          <h1 className="header">
            We would love your Feedback
        </h1>
          <img className="close-button" src={require('./images/close_button.PNG')} alt="close button" />
        </div>

        <BodyText text={ this.props.bodyTextStore.firstText } />
        <EmojiCollection />
        <BodyText text={ this.props.bodyTextStore.secondText } />
        <DifficultyButtonCollection />
        <CommentBox commentBoxStore={ new CommentBoxStore }/>
        <BodyText text={ this.props.bodyTextStore.thirdText } />
        <SubmissionButtonCollection />
      </div>

    );
  }
}
{/* <CommentBox text={ this.props.commentBoxStore.commentBoxText } commentBoxClassName={ this.props.commentBoxStore.commentBoxClassName } onChange={this.props.commentBoxStore.handleUserInput}/> */}
export default App;
