import * as React from 'react';
import { useState } from 'react';
import IconGenerator from '../../components/templetes/IconGenerator';

const IconGeneratorPage: React.FC = () => {
  const [file, setFile] = useState<string>();
  const iconName = 'icon'

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return;

    const reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = () => {
      setFile(reader.result as string)
    }
  }

  const handleClickIcon = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const inputFile = document.querySelector(`input[name=${iconName}]`);
    inputFile && inputFile.dispatchEvent(new MouseEvent("click"));
  }

  return <IconGenerator file={file} iconName={iconName} onChangeFile={handleChangeFile} onClickIcon={handleClickIcon} />
} 

export default IconGeneratorPage