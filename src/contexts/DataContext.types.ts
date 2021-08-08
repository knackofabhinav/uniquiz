import React from "react";
import { QUIZ_INITIAL_STATE } from "../reducers/quiz.types";

export type DATA_CONTEXT = {
  state: QUIZ_INITIAL_STATE;
  dispatch: React.Dispatch<any>;
};
