import { Appbar, MaterialSymbolIcon } from '../../src'

export default function Demo () {
  return <>
    <Appbar
      varient="default"
      tailing={<MaterialSymbolIcon icon={'face'} />}
      title="Tailing"
    />
    <Appbar
      varient="default"
      leading={<MaterialSymbolIcon icon={'menu'} />}
      title="Leading"
    />
  </>
}
