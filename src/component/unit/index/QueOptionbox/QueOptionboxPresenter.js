import { QueOptionbox__Button, QueOptionbox__Container, QueOptionbox__Subtitle,QueOptionbox__Count ,QueOptionbox__Wrapper, QueOptionbox__SubmitContainer, QueOptionbox__Backdrop } from "./QueOptionboxStyles";

export default function QueOptionboxUI(props){

    return(
    <>
    <QueOptionbox__Backdrop
        onClick = {() => {props.setIsOpen(false)}}
    ></QueOptionbox__Backdrop>
    <QueOptionbox__Wrapper>
        <QueOptionbox__Subtitle>
            문제 개수
        </QueOptionbox__Subtitle> 
        <QueOptionbox__Count>
            {props.count}개
        </QueOptionbox__Count>
        <QueOptionbox__Container>
            <QueOptionbox__Button
                onClick = {() => {props.setCount(5)}}
            >5</QueOptionbox__Button>
            <QueOptionbox__Button
                onClick = {() => {props.setCount(10)}}
            >10</QueOptionbox__Button>
            <QueOptionbox__Button
                onClick = {() => {props.setCount(15)}}
            >15</QueOptionbox__Button>
            <QueOptionbox__Button
                onClick = {() => {props.setCount(20)}}
            >20</QueOptionbox__Button>
        </QueOptionbox__Container>
        <QueOptionbox__SubmitContainer>
            <QueOptionbox__Button
                onClick = {props.onClickSubmit}
            >생성하기</QueOptionbox__Button>
        </QueOptionbox__SubmitContainer>
    </QueOptionbox__Wrapper>
    </>
);
}