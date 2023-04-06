import { AutoComplete } from '../../src'
export default function Demo () {
  return (
    <AutoComplete data={[
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Orange' },
    ]} />
  )
}
