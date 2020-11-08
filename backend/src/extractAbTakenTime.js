const extractAbTakenTime = (abResults) => {
  const regex = /(?<=Time taken for tests:   )[0-9]+\.[0-9]{3}(?= seconds)/;
  const res = abResults.match(regex)
  return Number(res)
}

module.exports=extractAbTakenTime
