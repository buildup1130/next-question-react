import React from "react";
import { useLocation } from "react-router-dom"; // 결과 데이터 받기
import ResultContainer from "../../src/component/unit/Result/ResultContainer"

const ResultPage = () => {
<<<<<<< HEAD
  
  return (
    <ResultContainer/>
=======
  // const location = useLocation();
  // const { totalQuestions, correctAnswers } = location.state || {
  //   totalQuestions: 0,
  //   correctAnswers: 0,
  // };

  return (
    <ResultContainer
      // totalQuestions={totalQuestions}
      // correctAnswers={correctAnswers}
    />
>>>>>>> 1e625e4 (Frontend 통합)
  );
};

export default ResultPage;
