import { Anchor } from '../../src'

export default function Demo () {
  return (
    <div className="flex gap-2">
      <Anchor href="#">A Link</Anchor>
      <Anchor >A Link Without Href</Anchor>
    </div>
  )
}
