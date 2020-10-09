import React, {FunctionComponent, useState} from 'react';
import config from './config';
import Trivia from "../trivia";

const GameContainer:FunctionComponent = () => {
  const [ status, onStatusChange ] = useState<string>('greetings');
  const [ result, onResultChange ] = useState<string | null>(null);

  const onEnd = (result: string, isWin: boolean) => {
    onStatusChange('end');
    onResultChange(`${isWin ? 'Win' : 'Loose'}: ${result}`);
  };

  return (
    <div>
      {
        status === 'greetings'
          ? <div>
            <div>Welcome to the game, click 'go' to start</div>
            <button onClick={() => onStatusChange('game')}>Go</button>
          </div>
          : null
      }
      {
        status === 'game'
          ? <Trivia params={config} onEnd={onEnd}/>
          : null
      }
      {
        status === 'end'
          ? <div>{result}</div>
          : null
      }
    </div>
  );
};

export default GameContainer;
