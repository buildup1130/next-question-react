import styled from "@emotion/styled";

export const QuestionCardMain__Wrapper = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  padding: 80px 20px;

  
`

// 메인 컨테이너 스타일
export const MainContainer = styled.div`
  width: 1000px;
  height: 600px;
  padding: 40px 80px;
  font-family: Arial, sans-serif;

  border: 1px solid grey;
  border-radius: 10px;

  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
`;

// 버튼 스타일
export const Button = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: gray; // 마우스 오버 시 색상 변경
  }
`;
