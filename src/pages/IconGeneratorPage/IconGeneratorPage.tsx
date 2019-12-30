import * as React from 'react';
import { useState } from 'react';
import IconGenerator from '../../components/templetes/IconGenerator';

const IconGeneratorPage: React.FC = () => {
  const [file, setFile] = useState<string>();
  const [iconState, setIconState] = useState<{}>({
    label: '',
  })
  const iconName = 'icon'

  const handleChangeIconState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    
    if (type === 'number') {
      setIconState({
        ...iconState,
        [name]: Number(value)
      })
    } else {
      setIconState({
        ...iconState,
        [name]: value
      })
    }
  }

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

  return (
    <IconGenerator
      file={file}
      iconState={iconState}
      iconName={iconName}
      onChangeIconState={handleChangeIconState}
      onChangeFile={handleChangeFile}
      onClickIcon={handleClickIcon}
    />
  )
} 

export default IconGeneratorPage