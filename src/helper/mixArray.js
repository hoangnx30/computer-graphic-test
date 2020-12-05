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

// console.log(mixArray(arr))
