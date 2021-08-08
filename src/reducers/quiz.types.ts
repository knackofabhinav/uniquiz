import { Quiz } from "../utils/quizData.types";

export type QUIZ_INITIAL_STATE = {
  allQuizzes: Array<Quiz> | null;
  currentQuiz: Quiz | null;
  quizId: string;
  questionNo: number;
  score: number;
  timer: number;
  isClickEnabled: boolean;
};

export type ACTION =
  | { type: "RESET_STATE"; payload: { quizId: string } }
  | { type: "INITIALIZE_ALL_QUIZZES"; payload: { allQuizzes: Array<Quiz> } }
  | { type: "INITIALIZE_CURRENT_QUIZ"; payload: { quizId: string } }
  | {
      type: "SET_SELECTED_OPTION_ID";
      payload: { optionId: string; questionId: string };
    }
  | { type: "INCREMENT_SCORE"; payload: { score: number } }
  | { type: "DECREMENT_SCORE"; payload: { score: number } }
  | { type: "RESET_SCORE" }
  | { type: "INCREMENT_QUESTION_NO" }
  | { type: "RESET_QUESTION_NO" }
  | { type: "DECREMENT_TIMER" }
  | { type: "RESET_TIMER" }
  | { type: "SET_QUIZ_ID"; payload: { quizId: string } }
  | { type: "ENABLE_CLICK" }
  | { type: "DISABLE_CLICK" };
