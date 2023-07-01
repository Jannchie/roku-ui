import { Tag } from '../../src'

export default function TagBaseDemo () {
  return (
    <Tag
      color="primary"
      onClose={() => {
      // eslint-disable-next-line no-console
        console.log('close')
      }}
    >
      Closable
    </Tag>
  )
}
