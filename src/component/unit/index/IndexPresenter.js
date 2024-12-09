import { Index__Wrapper } from "./IndexStyles";
import QueOptionboxLogic from "./QueOptionbox/QueOptionboxContainer";
import UploadLogic from "./Upload/UploadContainer";

export default function IndexUI(props){

    return (
        <>
        <Index__Wrapper>
        
        <UploadLogic
            setFile = {props.setFile}
            file = {props.file}
        ></UploadLogic>
        {props.isOpen&&<QueOptionboxLogic
            count = {props.count}
            setCount = {props.setCount}
            setIsOpen = {props.setIsOpen}
            onClickSubmit = {props.onClickSubmit}
        ></QueOptionboxLogic>}
        </Index__Wrapper>
        
        </>
    )
}