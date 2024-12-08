import { UploadUI } from "./UploadPresenter";

export default function UploadLogic(){
    const props = {
        name: 'file',
        multiple: false,
        action: "",//api 주소,
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
              console.log(info.file, info.fileList);
            }
            if (status === 'done') {
              message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
              message.error(`${info.file.name} file upload failed.`);
            }
          },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    }


    return <UploadUI option = {props}></UploadUI>
}