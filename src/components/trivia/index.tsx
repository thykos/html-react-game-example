import React, { FunctionComponent } from 'react';
import { iTrivia } from './types';
import cx from 'classnames';
import useParams from './useParams';
import './styles.css';

const Trivia:FunctionComponent<iTrivia> = (props) => {
  const { current, onAnswer, feedback, onSkipFeedback } = useParams(props.params, props.onEnd);
  return (
    <div className='trivia-wrapper'>
      {feedback
        ? <div className="feedback-wrapper">
            <div>{feedback}</div>
            <button onClick={onSkipFeedback} className="btn">Ok</button>
          </div>
        : null}
      {current && !feedback ?
        <React.Fragment>
          <h3 className="question">{current.header}</h3>
          {current.image ? <img src={current.image} className="question-image" alt={current.header}/> : null}
          <div className="answers">
            {current.answers.map((item: any, idx: number) => (
              <button key={idx} onClick={() => onAnswer(current.id, item)} className={cx('btn', { 'btn-image': item.image })}>
                {item.image ? <img src={item.image} alt=""/> : item.text}
              </button>
            ))}
          </div>
        </React.Fragment>
        : null}
    </div>
  );
};

export default Trivia;
