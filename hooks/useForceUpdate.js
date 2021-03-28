/* eslint-disable no-unused-vars */
const { useState } = require('react')

export const useForceUpdate = () => {
  const [value, setValue] = useState(true)
  return () => setValue(!value)
}
