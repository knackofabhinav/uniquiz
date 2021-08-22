export type Option = {
  _id: string;
  option: string;
  explaination: string;
  isAnswer: boolean;
};

export type Question = {
  _id: string;
  question: string;
  points: number;
  options: Array<Option>;
  negativePoints: number;
  selectedOptionId?: string | null;
};

export type Quiz = {
  _id: string;
  name: string;
  coverUrl: string;
  totalScore: number;
  questions: Array<Question>;
};

export type Quizzes = {
  success: boolean;
  quizzes: Array<Quiz>;
};
