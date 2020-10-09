export interface Answer {
  text?: string | null;
  correct: boolean;
  image?: string | null;
  feedback?: any;
}

export interface Card {
  header: string;
  image?: string | null;
  id?: any;
  answers: Answer[];
}

export interface Params {
  cards: Card[];
  winningCondition: {
    howMany: number
  }
}

export interface iTrivia {
  params: Params;
  onEnd: (result: string, win: boolean) => void;
}
