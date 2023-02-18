import { Btn, Flex } from '../../src'

export default function AllBtnDemo () {
  return (
    <Flex gap="1rem">
      <div style={{ flexWrap: 'wrap', display: 'flex', gap: 8 }}>
        <Btn border text gloryColor="linear-gradient(to right, #6a11cb 0%, #2575fc 100%)" size="lg" color="primary" label="Primary" />
        <Btn border gloryColor="linear-gradient(to right, #6a11cb 0%, #2575fc 100%)" size="lg" color="primary" label="Primary" />
      </div>
    </Flex>
  )
}
