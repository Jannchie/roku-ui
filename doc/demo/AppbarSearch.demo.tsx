import { Appbar } from '../../src'

export default function Demo () {
  return <Appbar
    varient="default"
    searchCallback={(val) => {
      console.log(val)
    }}
    title="Search"
  />
}
