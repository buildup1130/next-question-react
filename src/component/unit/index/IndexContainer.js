import IndexUI from "./IndexPresenter";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function IndexLogic() {
  const [file, setFile] = useState(undefined);
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const uploadFile = async () => {
    //File Formdata 생성
    const formData = new FormData();
    formData.append("files", file);

    const options = {option:{numOfQuestions: count} };
    const optionsJson = JSON.stringify(options);
    console.log(optionsJson);

    const blob = new Blob([optionsJson], { type: 'application/json' });
    formData.append("files",blob,'options.json');

    try {
      const res = await axios.post(
        "http://localhost:8080/api/file/upload/guest",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // 파일 전송을 위해 필수
          },
        }
      );
      return res.data;
      alert("성공");
    } catch (err) {
      alert("실패");
      console.error(err);
    } finally {
    }
  };

  const onClickSubmit = () => {
    uploadFile()
      .then((res) => {
        const multipleChoice = res.questions.filter( ques => ques.type === 'MULTIPLE_CHOICE');
        router.push({
          pathname: "/QuestionPage/QuestionCard",
          query:{multipleChoice:JSON.stringify(multipleChoice)}
        }
        );
        console.log(res.questions);
      })
      .catch((error) => {
        alert("업로드 중 문제 발생");
        console.error(error);
      });
  };

  //File이 변경될 때 호출, QueOptionbox 표시하기
  useEffect(() => {
    if (file) {
      setIsOpen(true);
    }
  }, [file]);

  return (
    <IndexUI
      file={file}
      setFile={setFile}
      count={count}
      setCount={setCount}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClickSubmit={onClickSubmit}
    ></IndexUI>
  );
}
