export const iconStateValidator = (name: string, value: string | number) => {
  switch (name) {
    case 'frameBorder':
      return checkNumber(value)
    default:
      return true
  }
}

const checkNumber = (value: any) =>
  value.match(/^([1-9]?\d*|0)$/) && Number(value) <= FRAME_BORDER_LIMIT

const FRAME_BORDER_LIMIT = 30;