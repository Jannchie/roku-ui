import { Appbar } from '../../src'

export default function Demo () {
  return (
    <Appbar
      varient="default"
      searchCallback={(val) => {
        // eslint-disable-next-line no-console
        console.log(val)
      }}
      title="Search"
    />
  )
}
