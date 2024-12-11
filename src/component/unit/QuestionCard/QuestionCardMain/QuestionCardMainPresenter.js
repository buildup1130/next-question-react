import React from "react";
<<<<<<< HEAD
import {
  MainContainer,
  Button,
  QuestionCardMain__Wrapper,
  SubContainer,
} from "./QuestionCardMain.styles";
=======
import { MainContainer, Button } from "./QuestionCardMain.styles";
>>>>>>> 1e625e4 (Frontend 통합)
import ProgressBar from "../ProgressBar/ProgressBarContainer";
import Question from "../Question/QuestionContainer";
import Option from "../Option/OptionContainer";

const QuestionCardMainPresenter = ({
  question,
  current,
  total,
  selectedOption,
  incorrectOptions,
  isCorrect,
  buttonState,
  onSelect,
  onSubmit,
  onNext,
}) => {
  return (
<<<<<<< HEAD
    <QuestionCardMain__Wrapper>
      <MainContainer>
        {/* 진행 바 */}
        {/* 문제 텍스트 */}
        <Question content={question.content} current={current} />
        {/* 선택지 렌더링 */}
        <Option
          options={question.options} // 보기 목록 전달
          selectedOption={selectedOption} // 선택된 보기 전달
          incorrectOptions={incorrectOptions} // 오답 보기 목록 전달
          isCorrect={isCorrect} // 정답 여부 전달
          onSelect={onSelect} // 보기 선택 핸들러 전달
        />

        <SubContainer>
          <ProgressBar current={current} total={total} />
          {/* 버튼 */}
          {buttonState === "submit" ? (
            <Button onClick={onSubmit}>제출</Button> // 제출 버튼
          ) : (
            <Button onClick={onNext}>다음</Button> // 다음 버튼
          )}
        </SubContainer>
      </MainContainer>
    </QuestionCardMain__Wrapper>
=======
    <MainContainer>
      {/* 진행 바 */}
      <ProgressBar current={current} total={total} />
      {/* 문제 텍스트 */}
      <Question content={question.content} />
      {/* 선택지 렌더링 */}
      <Option
        options={question.options} // 보기 목록 전달
        selectedOption={selectedOption} // 선택된 보기 전달
        incorrectOptions={incorrectOptions} // 오답 보기 목록 전달
        isCorrect={isCorrect} // 정답 여부 전달
        onSelect={onSelect} // 보기 선택 핸들러 전달
      />
      {/* 버튼 */}
      {buttonState === "submit" ? (
        <Button onClick={onSubmit}>제출</Button> // 제출 버튼
      ) : (
        <Button onClick={onNext}>다음</Button> // 다음 버튼
      )}
    </MainContainer>
>>>>>>> 1e625e4 (Frontend 통합)
  );
};

export default QuestionCardMainPresenter;
