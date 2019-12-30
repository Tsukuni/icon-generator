import * as React from 'react';
import { useState } from 'react';
import IconGenerator from '../../components/templetes/IconGenerator';

const IconGeneratorPage: React.FC = () => {
  const [file, setFile] = useState<String>();

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return;

    const reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = () => {
      setFile(reader.result as string)
    }
  }

  return <IconGenerator file={file} onChangeFile={handleChangeFile} />
} 

export default IconGeneratorPage