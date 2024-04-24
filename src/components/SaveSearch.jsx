export function SaveSearch(terms) {
  const savedTerms = JSON.parse(localStorage.getItem('BedriftDB'))

  const oldSearchBD = savedTerms ? savedTerms : new Array()

  function timeStamp() {
    const time = new Intl.DateTimeFormat('no-NO', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date())
    return time
  }
  const id = timeStamp()
  terms.idTime = id
  const cleanValues = {}
  for (const key in terms) {
    if (key !== 'selectedKommune') {
      cleanValues[key] = terms[key]
    }
  }

  const newSearchDB = [...oldSearchBD, cleanValues]

  const saveResult = JSON.stringify(newSearchDB)
  localStorage.setItem('BedriftDB', saveResult)
  return
}
