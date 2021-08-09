import React from "react";
import { QUIZ_STATE_TYPE } from "../reducers/quiz.types";

export type DATA_CONTEXT = {
  state: QUIZ_STATE_TYPE;
  dispatch: React.Dispatch<any>;
};
