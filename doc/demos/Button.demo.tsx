import { Btn } from '../../src'

export default function App () {
  return (
    <>
      <Btn
        text
        hoverColor="primary"
      >
        Text
      </Btn>
      <Btn
        hoverColor="primary"
      >
        Text
      </Btn>
      <Btn
        contrast
        hoverColor="primary"
      >
        Text
      </Btn>
    </>
  )
}
