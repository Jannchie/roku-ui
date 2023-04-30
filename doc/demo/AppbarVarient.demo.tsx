import { Appbar, MaterialSymbolIcon } from '../../src'

export default function Demo () {
  return (
    <div style={{ backgroundImage: 'url("https://picsum.photos/seed/picsum/1024/52")' }}>
      <Appbar
        varient="default"
        icon={<MaterialSymbolIcon icon={'home'} />}
        title="Roku UI App Default"
      />
      <Appbar
        varient="pattern"
        icon={<MaterialSymbolIcon icon={'home'} />}
        title="Roku UI App Pattern"
      />
      <Appbar
        varient="blur"
        icon={<MaterialSymbolIcon icon={'home'} />}
        title="Roku UI App Blur"
      />
      <Appbar
        varient="transparent"
        icon={<MaterialSymbolIcon icon={'home'} />}
        title="Roku UI App Transparent"
      />
    </div>
  )
}
