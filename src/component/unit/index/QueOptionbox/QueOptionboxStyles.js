import styled from "@emotion/styled";

export const QueOptionbox__Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 배경 어둡게 */
  z-index: 1000; /* 모달보다 아래에 위치 */
`;

export const QueOptionbox__Wrapper = styled.div`
  width: 600px;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

<<<<<<< HEAD
  background-color: #ffffff;

  border-radius: 10px;
  border: 1px solid black;
  z-index: 1100;
`;
=======
    background-color: #ffffff;
    
    border-radius: 10px;
    border: 1px solid black;
    z-index: 1100;
`
>>>>>>> 1e625e4 (Frontend 통합)

export const QueOptionbox__Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;

  padding: 0px 40px;
`;

export const QueOptionbox__Subtitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  width: 100%;
`;

export const QueOptionbox__line = styled.div`
  width: 100%;
  border-top: 1px solid gray;

  margin-top: 10px;
  margin-bottom: 10px;
`;

export const QueOptionbox__Count = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;
export const QueOptionbox__Button = styled.button`
<<<<<<< HEAD
  width: 100px;
  height: 50px;

  font-size: 24px;
  padding: 5px 5px;
  border-radius: 10px;

  background-color: #ffffff;

  :active {
    background-color: grey;
  }
`;

export const QueOptionbox__SubmitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 200px;
  gap: 20px;
`;

export const QueOptionbox__SubmitButton = styled.button`
  width: 100%;
  height: 50px;

  font-size: 24px;
  padding: 5px 5px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 0;
`;
=======
    width: 100px;
    height: 50px;

    font-size: 24px;
    padding: 5px 5px;
    border-radius: 10px;

    background-color: #ffffff;
`

export const QueOptionbox__SubmitContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-top: 200px;
    gap: 20px;
`

export const QueOptionbox__SubmitButton = styled.button`
    width: 100%;
    height: 50px;

    font-size: 24px;
    padding: 5px 5px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 0;
`
>>>>>>> 1e625e4 (Frontend 통합)
