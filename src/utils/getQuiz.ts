import axios, { AxiosError } from "axios";
import { Quizzes } from "./quizData.types";

type ServerError = { errorMessage: string };

export const getAllQuizzes = async () => {
  try {
    const response = await axios.get<Quizzes>(
      "https://quiz.abhinavniranja1.repl.co/quizzes"
    );
    if (response.data.success) {
      return response.data.quizzes;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;
      if (serverError && serverError.response) {
        console.log(serverError.response.data);
      }
    }
    console.log(error);
  }
};
