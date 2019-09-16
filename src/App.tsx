import * as React from 'react';
import { observer, Provider } from 'mobx-react';
import { observable, action } from 'mobx';
import './App.css';
import './Components/BodyText';
import { EmojiCollection } from './Components/EmojiCollection';
import { DifficultyButtonCollection } from './Components/DifficultyButtonCollection';
import { SubmissionButtonCollection } from './Components/SubmissionButtonCollection';
import { BodyText } from './Components/BodyText';
import { CommentBox } from './Components/CommentBox';
import { UserFeedback } from './Components/UserFeedback';
import { FeedbackFormStore } from './stores/FeedbackFormStore';

//testing git again
@observer
export class App extends React.Component<{}, {}> {

  private feedbackFormStore = new FeedbackFormStore();

  // display what was submitted
  @observable private userInputDisplay: string;
  @observable private emojiSelectedDisplay: string;
  @observable private difficultyLevelSelectedDisplay: string;

  @action
  private handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.userInputDisplay = this.feedbackFormStore.commentBoxUserInput;
    this.emojiSelectedDisplay = this.feedbackFormStore.emojiSelected;
    this.difficultyLevelSelectedDisplay = this.feedbackFormStore.difficultyLevelSelected;
    this.feedbackFormStore.init3();
  }

  public render() {

    return (
      <Provider feedbackFormStore={this.feedbackFormStore}>

        <div className="app">
          <form onSubmit={this.handleSubmit} className="form">

            <div className="top-row">
              <h1 className="header">
                We would love your Feedback
              </h1>
              <img className="close-button"
                src={require('./images/close_button.PNG')}
                alt="close button"
              />
            </div>

            <BodyText text={FeedbackFormStore.firstBodyText} />
            <EmojiCollection setSelectedEmoji={this.feedbackFormStore.setSelectedEmoji} />
            <BodyText text={FeedbackFormStore.secondBodyText} />
            <DifficultyButtonCollection
              setSelectedDifficultyButton={this.feedbackFormStore.setSelectedDifficultyButton}
            />
            <CommentBox feedbackFormStore={this.feedbackFormStore} />
            <BodyText text={FeedbackFormStore.thirdBodyText} />
            <SubmissionButtonCollection />
          </form>

          <section>
            <UserFeedback
              emoji={this.emojiSelectedDisplay}
              satisfaction={this.difficultyLevelSelectedDisplay}
              comments={this.userInputDisplay}
              apiData={this.feedbackFormStore.apiDisplayData}
              // feedbackFormStore={this.feedbackFormStore} 
            />
          </section>

        </div>

      </Provider>
    );
  }
}



