import { useState, useCallback, useEffect } from 'react';
import { Params, Answer, Card } from './types';

interface iUseParams {
  params: Params,
  onAnswer: (id: number, answer: Answer) => void;
  answers: object;
  feedback: string | null;
  onSkipFeedback: () => void;
  current: Card
}

type iOnEnd = (result: string, win: boolean) => void;

const useParams = (params: Params, onEnd: iOnEnd): iUseParams => {
  const [current, onChangeCurrent] = useState(0);
  const [feedback, onChangeFeedback] = useState<string | null>(null);
  const [answers, onChangeAnswers] = useState({});

  const updatedParams = {
    ...params,
    cards: params.cards.map((card, id) => ({
      ...card,
      id
    }))
  };

  const onAnswer = useCallback((id: number, answer: Answer) => {
    onChangeAnswers({
      ...answers,
      [id]: answer.correct
    });
    onChangeFeedback(answer.feedback);
    onChangeCurrent(current + 1);
  }, [answers]);

  useEffect(() => {
    if (current + 1 > updatedParams.cards.length) {
      const result:any = Object.values(answers).reduce((current, res:any) => (current ? res + 1 : res), 0);
      const total:number = Object.keys(answers).length;
      onEnd(`${result}/${total}`, result > params.winningCondition.howMany)
    }
  }, [answers]);

  const onSkipFeedback = useCallback(() => onChangeFeedback(null), []);

  return {
    params: updatedParams,
    onAnswer,
    answers,
    feedback,
    onSkipFeedback,
    current: updatedParams.cards[current]
  }
};

export default useParams;
