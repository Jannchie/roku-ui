import { useState } from 'react'
import { Rating } from '../../src/components/Rating'

export default function Demo () {
  const [val, setVal] = useState(-1)
  return (
    <Rating
      max={5}
      value={val}
      setValue={setVal}
    />
  )
}
