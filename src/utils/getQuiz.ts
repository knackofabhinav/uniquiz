import axios from "axios";

export const getAllQuizzes = async () => {
  try {
    const response = await axios.get(
      "https://quiz.abhinavniranja1.repl.co/quizzes"
    );
    if (response.data.success) {
      return response.data.quizzes;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
