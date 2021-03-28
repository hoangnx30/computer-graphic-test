// const arr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

export const mixArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const idx1 = Math.floor(Math.random() * arr.length)
    const idx2 = Math.floor(Math.random() * arr.length)

    const tmp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = tmp
  }

  return arr
}

export const mixData = (data) => {
  const mixQuestion = mixArray(data)
  mixQuestion.forEach((_, index) => {
    mixQuestion[index].choice = mixArray(_.choice)
  })
  return mixQuestion
}

