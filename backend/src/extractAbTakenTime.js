const extractAbTakenTime = (abResults) => {
  const regex = /[0-9]\.[0-9]{3} seconds/g;
  const index = abResults.search(regex);
  const takenTime = abResults.substring(index, index + 5)
  return Number(takenTime)
}

module.exports=extractAbTakenTime
