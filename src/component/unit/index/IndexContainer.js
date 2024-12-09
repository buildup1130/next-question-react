import IndexUI from "./IndexPresenter"
import axios from "axios"
import { useState, useEffect } from "react";

export default function IndexLogic(){

    const [file,setFile] = useState(undefined);
    const [count,setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const uploadFile = async () => {
        const formData = new FormData();
        formData.append("file",file);
        formData.append("count",count);
  
        try {
          const response = await axios.post(
            // "http://localhost:8080/api/runfile/upload/1",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          alert("성공");
        } catch (err) {
          alert("실패");
          console.error(err);
        }
        finally{
        }
      }
  
      const onClickSubmit = () => {
          uploadFile()
          .then((res) => {
            alert("화면 이동")
          })
          .catch((error) => {
            alert("업로드 중 문제 발생")
            console.error(error);
          })
      }


      //File이 변경될 때 호출, QueOptionbox 표시하기
      useEffect(() => {
        if(file){
        setIsOpen(true);
        console.log(file);
        }
      }, [file]);


    return <IndexUI
    file = {file}
    setFile = {setFile}
    count = {count}
    setCount = {setCount}
    isOpen = {isOpen}
    setIsOpen = {setIsOpen}
    onClickSubmit = {onClickSubmit}
    ></IndexUI>;
}