import { Anchor, Flex } from '../../src'

export default function Demo () {
  return (
    <Flex col>
      <Anchor href="#">A Link</Anchor>
      <Anchor>A Link Without Href</Anchor>
      <Anchor href="https://www.google.com">Google</Anchor>
    </Flex>
  )
}
