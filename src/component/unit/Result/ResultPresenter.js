import React from "react";

import {
  ResultContainer,
  CircleContainer,
  Circle,
  CircleText,
  CompleteButton,
  ResultWrapper
} from "./Result.styles.js";

export default function ResultPresenter(props){
  return (
    <ResultWrapper>
    <ResultContainer>
      {/* 원형 진행률 */}
      <CircleContainer>
        <Circle>
          <svg viewBox="0 0 36 36" className="circular-chart">
            {/* 틀린 문제 부분 (빨간색) */}
            <path
              className="circle-bg"
              stroke="#ff4d4d"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${props.correctPercentage}, 100`}
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            {/* 맞춘 문제 부분 (파란색) */}
            <path
              className="circle"
              stroke="#1E90FF"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${100 - props.correctPercentage}, 100`}
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          {/* 중앙 텍스트 */}
          <CircleText>
            {props.correctAnswers}/{props.totalQuestions}
          </CircleText>
        </Circle>
      </CircleContainer>
      {/* 학습 완료 버튼 */}
      <CompleteButton>학습완료</CompleteButton>
    </ResultContainer>
   </ResultWrapper>
  );
}

 


