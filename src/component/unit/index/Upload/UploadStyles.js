import {Upload} from "antd";
import styled from "@emotion/styled";

export const Upload__Upload = styled(Upload)`
    padding: 10px 20px;
    height:150px;
    width:150px;

    border: 1px dashed black;
    border-radius: 10px;

    display:flex;
    justify-content:center;
    align-items:center;

    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    
    cursor: pointer;
    
    :hover{
        border: 1px dashed #5383E8;
        color: #5383E8;
        
        transform: translateY(-2px);
        box-shadow: 0px 2px 2px #5383E8;
    }
`