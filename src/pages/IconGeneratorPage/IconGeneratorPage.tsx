import * as React from 'react';
import { useState } from 'react';
import IconGenerator from '../../components/templetes/IconGenerator';
import { iconStateValidator } from '../../utils/validator';
import html2canvas from 'html2canvas';

const IconGeneratorPage: React.FC = () => {
  const [file, setFile] = useState<string>();
  const [iconState, setIconState] = useState<{}>({
    iconLabel: '',
    frameColor: '',
    frameBorder: '',
  })
  const iconName = 'icon';
  const handleChangeIconState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (iconStateValidator(name, value)) {
      const newValue = name === 'frameBorder' ? Number(value) : value
      setIconState({ ...iconState, [name]: newValue });
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

  const handleClickSaveButton = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const framedIcon = document.getElementById('framedIcon');
    framedIcon && html2canvas(framedIcon).then(canvas => {
      const a = document.createElement('a');
      a.href = canvas.toDataURL('image/jpeg', 0.85);
      a.download = 'icon.jpg';
      a.click();
    });
  }

  return (
    <IconGenerator
      file={file}
      iconState={iconState}
      iconName={iconName}
      onChangeIconState={handleChangeIconState}
      onChangeFile={handleChangeFile}
      onClickIcon={handleClickIcon}
      onClickSaveButton={handleClickSaveButton}
    />
  )
} 

export default IconGeneratorPage