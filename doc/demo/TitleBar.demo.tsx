import { TitleBar } from '../../src'

export default function Demo () {
  // get os

  return (
    <>
      <TitleBar title={<div style={{ userSelect: 'none' }}>Title Bar </div>} />
      <TitleBar os="mac" title={<div style={{ userSelect: 'none' }}>Title Bar </div>} />
    </>
  )
}
