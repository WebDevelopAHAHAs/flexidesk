const convertDate = (date) => {
  let conDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
  // console.log("New Date", conDate)
  return conDate
}

export default convertDate;