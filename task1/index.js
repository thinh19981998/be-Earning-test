const findLargestNumber = (arr) => {
  const resultArr = arr.sort((a, b) => `${b}${a}` - `${a}${b}`)
  return resultArr.reduce((res, el) => res[0] === '0' ? `${el}` : `${res}${el}`, '')
}

