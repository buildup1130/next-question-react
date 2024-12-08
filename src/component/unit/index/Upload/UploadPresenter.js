import { Upload__Upload } from "./UploadStyles";
import { InboxOutlined } from '@ant-design/icons';

export function UploadUI(props){
    
    return (
        <>
        <Upload__Upload {...props.option}>
        <p className="ant-upload-drag-icon">
            <InboxOutlined />
        </p>
        <p className="ant-upload-text">Upload</p>
        <p className="ant-upload-hint">
         
        </p>
        </Upload__Upload>
        </>
    )
}