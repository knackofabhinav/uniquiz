import { QUIZ_INITIAL_STATE, ACTION } from "./quiz.types";
// import { allQuizzes } from "../data/quiz";
import { Quiz } from "../utils/quizData.types";

export const quizInitialState: QUIZ_INITIAL_STATE = {
  allQuizzes: null,
  currentQuiz: null,
  quizId: "",
  questionNo: 0,
  score: 0,
  timer: 30,
  isClickEnabled: true,
};

export const quizReducer = (
  state: QUIZ_INITIAL_STATE,
  action: ACTION
): QUIZ_INITIAL_STATE => {
  switch (action.type) {
    case "RESET_STATE":
      return {
        ...quizInitialState,
        allQuizzes: state.allQuizzes,
      };

    case "INITIALIZE_ALL_QUIZZES":
      return {
        ...state,
        allQuizzes: action.payload.allQuizzes,
      };

    case "INITIALIZE_CURRENT_QUIZ":
      const { quizId } = action.payload;
      const selectedQuiz: Quiz = state.allQuizzes?.find(
        (quiz) => quiz._id === quizId
      ) as Quiz;
      selectedQuiz?.questions.forEach(
        (question) => (question.selectedOptionId = null)
      );
      return {
        ...state,
        currentQuiz: selectedQuiz,
      };

    case "SET_SELECTED_OPTION_ID":
      const { optionId, questionId } = action.payload;
      return {
        ...state,
        currentQuiz: {
          ...state.currentQuiz,
          questions: state.currentQuiz?.questions.map((question) => {
            return question._id === questionId
              ? {
                  ...question,
                  selectedOptionId: optionId,
                }
              : question;
          }),
        } as Quiz,
      };

    case "INCREMENT_SCORE":
      return {
        ...state,
        score: state.score + action.payload.score,
      };

    case "DECREMENT_SCORE":
      return {
        ...state,
        score: state.score - action.payload.score,
      };

    case "RESET_SCORE":
      return {
        ...state,
        score: 0,
      };

    case "INCREMENT_QUESTION_NO":
      return {
        ...state,
        questionNo: state.questionNo + 1,
      };

    case "RESET_QUESTION_NO":
      return {
        ...state,
        questionNo: 0,
      };

    case "DECREMENT_TIMER":
      return {
        ...state,
        timer: state.timer - 1,
      };

    case "RESET_TIMER":
      return {
        ...state,
        timer: 30,
      };

    case "SET_QUIZ_ID":
      return {
        ...state,
        quizId: action.payload.quizId,
      };

    case "ENABLE_CLICK":
      return {
        ...state,
        isClickEnabled: true,
      };

    case "DISABLE_CLICK":
      return {
        ...state,
        isClickEnabled: false,
      };
    default:
      return state;
  }
};
