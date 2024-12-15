import styled from "@emotion/styled";

export const QuestionCardMain__Wrapper = styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;

  padding: 0px 20px;
`

// 메인 컨테이너 스타일
export const MainContainer = styled.div`
  width: 100%;
  padding: 20px;
  font-family: Arial, sans-serif;
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
