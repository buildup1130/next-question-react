import React from "react";
<<<<<<< HEAD
import { Question__Wrapper, QuestionText } from "./Question.styles";

const QuestionPresenter = ({ content, current }) => {
  return (
    <Question__Wrapper>
      <QuestionText>
        문제 {current} {content}
      </QuestionText>
    </Question__Wrapper>
  );
=======
import { QuestionText } from "./Question.styles";

const QuestionPresenter = ({ content }) => {
  return <QuestionText>{content}</QuestionText>; // 문제 텍스트 렌더링
>>>>>>> 1e625e4 (Frontend 통합)
};

export default QuestionPresenter;
