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
    formData.append("file", file);

    const options = { numOfQuestions: count };
    const optionsJson = JSON.stringify(options);

    formData.append("options", optionsJson);
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
      console.log(res.data);
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
        router.push("/QuestionPage/QuestionCard");
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
