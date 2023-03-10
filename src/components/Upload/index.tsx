import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

interface UploadProps {
  onUpload: (files: File[]) => void;
}

const Upload = ({ onUpload }: UploadProps) => {
  function renderDragMessage(isDragActive: boolean, isDragReject: boolean) {
    if (!isDragActive) {
      return <UploadMessage>Arraste arquivos aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  }

  return (
    <Dropzone 
      accept={{'audio/*': ['.mp3', '.mpeg']}}
      onDropAccepted={onUpload}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
        {...getRootProps()}
        isDragActive={isDragActive}
        isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      )}
    </Dropzone>
  )
}

export default Upload;
