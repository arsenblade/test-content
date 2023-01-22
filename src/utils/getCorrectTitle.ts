export const getCorrectTitle = (numberAds: number) => {
  if(numberAds >= 5 && numberAds <= 20) {
    return 'грузоперевозок'
  }

  if(numberAds % 10 === 0 || numberAds % 10 >= 5) {
    return 'грузоперевозок'
  }
  else if(numberAds % 10 === 1) {
    return 'грузоперевозка'
  }
  else {
    return 'грузоперевозки'
  }
}